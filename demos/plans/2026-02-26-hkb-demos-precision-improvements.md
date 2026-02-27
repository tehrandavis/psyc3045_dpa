# HKB Demo Precision Improvements — Implementation Plan

> **For Claude:** REQUIRED SUB-SKILL: Use superpowers:executing-plans to implement this plan task-by-task.

**Goal:** Make assignment questions Q1/Q4 (valley depth), Q1/Q3 (critical fluctuations + hysteresis), and Q1/Q2 (unit circle + flat line) visually answerable without changing the open-ended feel of the demos.

**Architecture:** Three targeted edits to standalone HTML files. No build system. Each file is self-contained D3 v7. Changes are additive — new SVG elements and status text layered onto existing charts. Implementation order: Demo 2 → Demo 5 → Demo 4.

**Tech Stack:** D3 v7 (CDN), vanilla JS, SVG, HTML/CSS. No framework. No tests — verification is visual in-browser.

---

## Task 1: Demo 2 — Dynamic y-axis on potential chart

**File:** `_Workbench/demos/demo2_hkb_landscape.html`
**Location:** `updatePotentialChart()`, line ~824

### Step 1: Find and replace the fixed y-domain

Locate this line (around line 824):
```javascript
const yDomain = [-15, 5];
```

Replace with:
```javascript
const vExtent = d3.extent(values, d => d.v);
const vPad = Math.max(0.5, (vExtent[1] - vExtent[0]) * 0.2);
const yDomain = [vExtent[0] - vPad, vExtent[1] + vPad];
```

### Step 2: Verify in browser
Open `demo2_hkb_landscape.html`. At defaults (a=1, b=1):
- Expected: The potential curve should fill the chart vertically — in-phase valley (φ=0) clearly lower than anti-phase bumps
- At a=1, b=2: anti-phase valley at ±π should be visibly deep
- At a=6, b=1: landscape should show only one valley (in-phase), still filling chart

### Step 3: Commit
```bash
git add _Workbench/demos/demo2_hkb_landscape.html
git commit -m "fix(demo2): dynamic y-axis on potential chart so valleys are visible"
```

---

## Task 2: Demo 2 — Valley depth annotation function

**File:** `_Workbench/demos/demo2_hkb_landscape.html`
**Location:** Add after `dVdphi()` function (~line 537), before `findFixedPoints()`

### Step 1: Add the barrier height math helper

Insert this function after `dVdphi`:
```javascript
// Returns barrier heights for in-phase and anti-phase attractors.
// Saddle at φ* = arccos(-a/4b); V(φ*) = a²/(8b) + b
// In-phase barrier  = V(φ*) - V(0)   = a²/(8b) + 2b + a
// Anti-phase barrier = V(φ*) - V(π)  = a²/(8b) + 2b - a  (zero at a/b=4)
function barrierHeights(_a, _b) {
  const vSaddle = (_a * _a) / (8 * _b) + _b;
  const inPhase  = vSaddle - (-_a - _b);   // always positive
  const ratio = _a / _b;
  const antiPhase = ratio < 4.0 ? vSaddle - (_a - _b) : 0;
  return { inPhase, antiPhase, vSaddle };
}
```

### Step 2: Verify math at known values (console check)
Open browser console and paste:
```javascript
// At a=1, b=1: expect ~3.125 and ~1.125
console.log(barrierHeights(1, 1));
// At a=4, b=1: antiPhase should be 0 (bifurcation point)
console.log(barrierHeights(4, 1));
// At a=1, b=2: both deeper than default
console.log(barrierHeights(1, 2));
```
Expected: `{inPhase: 3.125, antiPhase: 1.125, vSaddle: 1.125}`, `{antiPhase: 0}`, `{antiPhase: 3.0625}`

### Step 3: Commit
```bash
git add _Workbench/demos/demo2_hkb_landscape.html
git commit -m "feat(demo2): add barrierHeights() math helper"
```

---

## Task 3: Demo 2 — Draw valley depth arrows on potential chart

**File:** `_Workbench/demos/demo2_hkb_landscape.html`

### Step 1: Add the SVG group in `initPotentialChart()`

In `initPotentialChart()`, after the `svgPot.append("g").attr("class", "valley-labels")` line (~line 806), add:
```javascript
svgPot.append("g").attr("class", "valley-depth-annotations");
```

### Step 2: Add `drawValleyDepthAnnotations()` function

Add this new function after `updatePotentialChart()` and before the ball animation section:
```javascript
function drawValleyDepthAnnotations(animate) {
  const H = CHART_HEIGHT;
  const W = +svgPot.attr("viewBox").split(" ")[2];
  const group = svgPot.select(".valley-depth-annotations");
  group.selectAll("*").remove();

  const { inPhase, antiPhase, vSaddle } = barrierHeights(a, b);
  const ratio = a / b;

  // Helper: draw one double-headed bracket arrow
  // x = screen x position, yTop = screen y of saddle, yBot = screen y of valley
  function drawArrow(x, yTop, yBot, color, label) {
    if (Math.abs(yBot - yTop) < 6) return; // too small to draw

    const g = group.append("g").attr("class", "depth-arrow");
    const tickHalf = 5;

    // Vertical line
    g.append("line")
      .attr("x1", x).attr("y1", yTop)
      .attr("x2", x).attr("y2", yBot)
      .attr("stroke", color).attr("stroke-width", 1.5)
      .attr("opacity", animate ? 0 : 1)
      .transition().duration(animate ? 300 : 0)
      .attr("opacity", 1);

    // Top tick
    g.append("line")
      .attr("x1", x - tickHalf).attr("y1", yTop)
      .attr("x2", x + tickHalf).attr("y2", yTop)
      .attr("stroke", color).attr("stroke-width", 1.5);

    // Bottom tick
    g.append("line")
      .attr("x1", x - tickHalf).attr("y1", yBot)
      .attr("x2", x + tickHalf).attr("y2", yBot)
      .attr("stroke", color).attr("stroke-width", 1.5);

    // Label
    g.append("text")
      .attr("x", x + 8)
      .attr("y", (yTop + yBot) / 2 + 4)
      .attr("font-size", 10)
      .attr("font-weight", 600)
      .attr("fill", color)
      .text("Δ=" + label.toFixed(2));
  }

  // In-phase arrow (at φ=0, saddle at φ* = arccos(-a/4b))
  const saddleX = ratio < 4.0
    ? potXScale(Math.acos(-a / (4 * b)))
    : null;

  const ySaddle = potYScale(vSaddle);
  const yInPhase = potYScale(-a - b);       // V(0)
  const yAntiPhase = potYScale(a - b);       // V(π)

  // In-phase: arrow at φ* x-position (or slightly left of it)
  if (saddleX !== null) {
    drawArrow(saddleX - 12, ySaddle, yInPhase, "#2b6cb0", inPhase);
  }

  // Anti-phase: arrow at -φ* x-position (left saddle), only when basin exists
  if (ratio < 4.0 && antiPhase > 0.1) {
    const saddleXLeft = potXScale(-Math.acos(-a / (4 * b)));
    drawArrow(saddleXLeft + 12, ySaddle, yAntiPhase, "#c05621", antiPhase);
  }

  // HOOK: guided-tour step advancement could fire here
}
```

### Step 3: Call from `updatePotentialChart()`

At the end of `updatePotentialChart()`, just before the closing `}`, add:
```javascript
drawValleyDepthAnnotations(animate);
```

### Step 4: Verify in browser
- At defaults (a=1, b=1): blue arrow on right saddle showing Δ≈3.13, amber arrow on left saddle showing Δ≈1.13
- Increase a to 3.9: amber arrow should be very short (Δ≈0.03)
- Increase a to 4.0+: amber arrow disappears
- Increase b to 2.0: amber arrow grows deeper than default

### Step 5: Commit
```bash
git add _Workbench/demos/demo2_hkb_landscape.html
git commit -m "feat(demo2): valley depth annotations with bracket arrows on potential chart"
```

---

## Task 4: Demo 2 — Barrier height readout in status row

**File:** `_Workbench/demos/demo2_hkb_landscape.html`

### Step 1: Add HTML element to status row

Locate the `.status-row` div in HTML (~line 436). After the closing `</div>` of `.ratio-info`, add:
```html
<div class="ratio-info" id="barrier-readout">
  In-phase depth: <span id="inphase-depth" style="font-weight:600; color:#2b6cb0;">—</span>
  &nbsp;|&nbsp;
  Anti-phase depth: <span id="antiphase-depth" style="font-weight:600; color:#c05621;">—</span>
</div>
```

### Step 2: Update `updateStatus()` to populate readout

At the end of `updateStatus()` (after the if/else block, ~line 1017), add:
```javascript
const { inPhase, antiPhase } = barrierHeights(a, b);
document.getElementById("inphase-depth").textContent = inPhase.toFixed(2);
document.getElementById("antiphase-depth").textContent =
  (a / b < 4.0) ? antiPhase.toFixed(2) : "—";
```

### Step 3: Verify in browser
- Status row should show e.g. "In-phase depth: 3.13 | Anti-phase depth: 1.13" at defaults
- Increase b to 2.0: both depths increase
- Increase a past 4.0: Anti-phase depth shows "—"
- Q4 is now directly answerable: deeper anti-phase (higher b) means higher barrier, so transition needs a higher a to erase it

### Step 4: Commit
```bash
git add _Workbench/demos/demo2_hkb_landscape.html
git commit -m "feat(demo2): barrier height readout in status row for Q1/Q4"
```

---

## Task 5: Demo 5 — Rolling variance strip above relative phase time series

**File:** `_Workbench/demos/demo5_hkb_transition.html`

### Step 1: Adjust time series top margin and add strip height constant

Find `const tsMargin = { top: 10, right: 12, bottom: 22, left: 38 };` (~line 822). Replace with:
```javascript
const VARIANCE_STRIP_H = 18; // px height for the rolling SD strip
const tsMargin = { top: 10 + VARIANCE_STRIP_H + 4, right: 12, bottom: 22, left: 38 };
```

### Step 2: Add variance strip group in `initTimeSeries()`

In `initTimeSeries()`, right after `tsSvg.selectAll("*").remove();` and before `const g = tsSvg.append("g")...`, add:
```javascript
// Variance strip sits above the main chart area
tsSvg.append("g").attr("class", "variance-strip")
  .attr("transform", `translate(${tsMargin.left},${tsMargin.top - VARIANCE_STRIP_H - 4})`);
```

### Step 3: Add rolling SD helper

Add this function near the top of the script section, after `radToDeg`:
```javascript
// Compute SD of folded phi (0-180 range) over last windowSize frames
function rollingSD(buffer, windowSize) {
  if (buffer.length < 2) return 0;
  const win = buffer.slice(-Math.min(windowSize, buffer.length));
  // Fold to [0,180]: distance between phases
  const folded = win.map(d => d.phi > 180 ? 360 - d.phi : d.phi);
  const mean = folded.reduce((s, v) => s + v, 0) / folded.length;
  const variance = folded.reduce((s, v) => s + (v - mean) ** 2, 0) / folded.length;
  return Math.sqrt(variance);
}
```

### Step 4: Add `updateVarianceStrip()` function

Add after `updateTimeSeries()`:
```javascript
function updateVarianceStrip() {
  if (!tsInitialized || tsBuffer.length < 2) return;
  const stripG = tsSvg.select(".variance-strip");
  stripG.selectAll("*").remove();

  const SD_MAX = 30; // degrees — strip is full height at SD >= 30°
  const stripW = tsWidth / (BUFFER_SIZE - 1);

  for (let i = 1; i < tsBuffer.length; i++) {
    const sd = rollingSD(tsBuffer.slice(0, i + 1), 60);
    const t = Math.min(sd / SD_MAX, 1.0); // 0→1
    const barH = t * VARIANCE_STRIP_H;
    // Color: gray → amber → red
    const r = Math.round(160 + (220 - 160) * t);
    const gv = Math.round(160 + (38 - 160) * t);
    const bv = Math.round(160 + (38 - 160) * t);
    const color = `rgb(${r},${gv},${bv})`;

    stripG.append("rect")
      .attr("x", xScale(i - 1))
      .attr("y", VARIANCE_STRIP_H - barH)
      .attr("width", Math.ceil(stripW) + 1)
      .attr("height", barH)
      .attr("fill", color);
  }

  // Label
  stripG.append("text")
    .attr("x", 0).attr("y", VARIANCE_STRIP_H - 2)
    .attr("font-size", 8).attr("fill", "#a0aec0")
    .text("fluctuation");
}
```

### Step 5: Call `updateVarianceStrip()` from `updateTimeSeries()`

At the end of `updateTimeSeries()`, add:
```javascript
updateVarianceStrip();
```

### Step 6: Verify in browser
- At default (ω=ω₀, low noise): strip should be nearly flat gray
- Increase noise to 0.3: strip shows moderate gray-amber bars
- Slowly increase ω: strip should transition from gray → amber → red as attractor weakens
- At transition: strip should be fully red

### Step 7: Commit
```bash
git add _Workbench/demos/demo5_hkb_transition.html
git commit -m "feat(demo5): rolling variance strip above phase time series for critical fluctuations"
```

---

## Task 6: Demo 5 — Transition event badge and hysteresis readout

**File:** `_Workbench/demos/demo5_hkb_transition.html`

### Step 1: Add transition state tracker near top of script

After the `const state = { ... }` block (~line 489), add:
```javascript
const transitionTracker = {
  occurred: false,
  transitionOmega: null,
  wasAntiPhase: false,
  consecutiveInPhaseFrames: 0,
};
```

### Step 2: Add badge HTML to controls card

In the HTML, locate the `.section-divider` just before the pause button (~line 460). Before that divider, add:
```html
<!-- Transition event badge — hidden until transition occurs -->
<div id="transition-badge" style="display:none; margin-bottom:8px; padding:8px 10px; border-radius:8px; background:#fffaf0; border:1px solid #fbd38d; font-size:0.78rem;">
  <div style="font-weight:700; color:#c05621;">⚡ Phase Transition Detected</div>
  <div id="transition-omega-label" style="color:#744210; margin-top:2px;"></div>
  <div id="hysteresis-note" style="display:none; margin-top:4px; font-style:italic; color:#553c9a; font-size:0.74rem;"></div>
</div>
```

### Step 3: Add `checkTransition()` function

Add after `updateVarianceStrip()` (or after `updateTimeSeries()`):
```javascript
function checkTransition(phiDeg) {
  if (transitionTracker.occurred) {
    // Check for hysteresis condition: b/a restored but system still in in-phase
    const ratio = state.omega / state.omega0;
    const b = Math.max(0.0, 1.0 - 2.5 * (ratio - 1));
    const hysteresisEl = document.getElementById("hysteresis-note");
    if (b > 0.25) {
      hysteresisEl.style.display = "block";
      hysteresisEl.textContent =
        "Anti-phase restored in landscape — system stays in-phase (hysteresis)";
    } else {
      hysteresisEl.style.display = "none";
    }
    return;
  }

  const absDisplay = phiDeg > 180 ? 360 - phiDeg : phiDeg;
  const isAntiPhase = absDisplay >= 140;
  const isInPhase   = absDisplay <= 40;

  if (isAntiPhase) transitionTracker.wasAntiPhase = true;

  if (transitionTracker.wasAntiPhase && isInPhase) {
    transitionTracker.consecutiveInPhaseFrames++;
    if (transitionTracker.consecutiveInPhaseFrames >= 10) {
      transitionTracker.occurred = true;
      transitionTracker.transitionOmega = state.omega;

      const badge = document.getElementById("transition-badge");
      badge.style.display = "block";
      document.getElementById("transition-omega-label").textContent =
        `Transitioned at ω = ${state.omega.toFixed(2)} Hz (ω/ω₀ = ${(state.omega / state.omega0).toFixed(2)}×)`;

      // HOOK: guided-tour could annotate the transition event here
    }
  } else {
    transitionTracker.consecutiveInPhaseFrames = 0;
  }
}
```

### Step 4: Reset tracker when coordination mode is reset

In the existing `btn-antiphase` click handler (which already calls `tsBuffer.length = 0`), add after:
```javascript
transitionTracker.occurred = false;
transitionTracker.wasAntiPhase = false;
transitionTracker.consecutiveInPhaseFrames = 0;
transitionTracker.transitionOmega = null;
document.getElementById("transition-badge").style.display = "none";
document.getElementById("hysteresis-note").style.display = "none";
```

Do the same in the `btn-inphase` handler.

### Step 5: Call `checkTransition()` from `tick()`

In `tick()`, after `updateMeter(phiDeg);` add:
```javascript
checkTransition(phiDeg);
```

### Step 6: Verify in browser
1. Start in anti-phase, ω=ω₀, noise=0.1
2. Slowly drag ω up: badge should NOT appear until φ snaps to near 0°
3. After snap: amber badge appears with "Transitioned at ω = X.XX Hz"
4. Drag ω back down below threshold: hysteresis note appears in purple: "Anti-phase restored in landscape — system stays in-phase (hysteresis)"
5. Click Anti-phase button: badge resets (allows student to repeat the experiment)

### Step 7: Commit
```bash
git add _Workbench/demos/demo5_hkb_transition.html
git commit -m "feat(demo5): transition badge + hysteresis readout for Q1/Q2/Q3"
```

---

## Task 7: Demo 4 — Vertical projection line on unit circles

**File:** `_Workbench/demos/demo4_relative_phase.html`

### Step 1: Add projection line elements in `setupCircle()`

In `setupCircle()`, after the arrow line append (~line 568), add:
```javascript
// Vertical projection: shows sin(theta) = physical finger position
svg.append("line")
  .attr("class", "proj-line")
  .attr("x1", CX).attr("y1", CY)   // placeholder; updated each frame
  .attr("x2", CX).attr("y2", CY)
  .attr("stroke", color)
  .attr("stroke-width", 1)
  .attr("stroke-dasharray", "3,2")
  .attr("opacity", 0.4);

// Tick at the midline showing where the projection lands
svg.append("line")
  .attr("class", "proj-tick")
  .attr("y1", CY).attr("y2", CY)
  .attr("stroke", color)
  .attr("stroke-width", 2)
  .attr("opacity", 0.6);
```

### Step 2: Update projection lines in `updateCircle()`

At the end of `updateCircle()` (after the arc update, ~line 647), add:
```javascript
// Vertical projection from dot to horizontal midline
svg.select(".proj-line")
  .attr("x1", dotX).attr("y1", dotY)
  .attr("x2", dotX).attr("y2", CY);

// Short horizontal tick at midline showing landing point
const tickLen = 6;
svg.select(".proj-tick")
  .attr("x1", dotX - tickLen).attr("x2", dotX + tickLen)
  .attr("y1", CY).attr("y2", CY);
```

### Step 3: Verify in browser
- In-phase mode: both dots at the same height, both projection lines the same length (fingers at same position in cycle)
- Anti-phase mode: dots at opposite heights, projection lines go in opposite directions from midline
- Rotating: projection line sweeps up and down, matching the avatar's swing

### Step 4: Commit
```bash
git add _Workbench/demos/demo4_relative_phase.html
git commit -m "feat(demo4): vertical projection lines on unit circles to ground Q1"
```

---

## Task 8: Demo 4 — Label oscillator time series lines

**File:** `_Workbench/demos/demo4_relative_phase.html`

### Step 1: Add labels at end of `updateOscTimeSeries()`

In `updateOscTimeSeries()`, after the two `lines2.append("path")...` calls (~line 986), add:
```javascript
// Labels at right edge
const labelG = g.select(".osc-lines1"); // reuse group, labels float above
labelG.append("text")
  .attr("x", oscWidth + 2).attr("y", oscYScale(1.0))
  .attr("font-size", 9).attr("fill", "#2b6cb0")
  .attr("font-weight", 600).text("F1");

g.select(".osc-lines2").append("text")
  .attr("x", oscWidth + 2).attr("y", oscYScale(-1.0) + 4)
  .attr("font-size", 9).attr("fill", "#c05621")
  .attr("font-weight", 600).text("F2");
```

### Step 2: Widen the right margin to fit labels

In `initOscTimeSeries()`, the right margin is inherited from `tsMargin.right = 12`. Change the margin object at the top of the script to:
```javascript
const tsMargin = { top: 10, right: 22, bottom: 22, left: 38 };
```
Note: this same margin is used by `initTimeSeries()`, so the phase time series also gets a slightly wider right margin — acceptable.

### Step 3: Verify in browser
- Labels "F1" (blue) and "F2" (amber) appear at right edge of oscillator chart
- In-phase: both lines overlap — labels appear at same y — minor overlap acceptable
- Anti-phase: F1 and F2 labels at opposite sides (one near +1, one near -1)

### Step 4: Commit
```bash
git add _Workbench/demos/demo4_relative_phase.html
git commit -m "feat(demo4): label F1/F2 on oscillator time series for Q2 comparison"
```

---

## Final verification checklist

Open each demo and run through the relevant "What to do" steps from the assignment:

**Demo 2:**
- [ ] At defaults: both valley depth numbers visible, arrows drawn on potential chart
- [ ] Increase a to 4.0+: amber arrow fades, anti-phase depth shows "—"
- [ ] Set b=2.0 then increase a: transition happens later (higher a needed), depth readout confirms deeper anti-phase valley

**Demo 5:**
- [ ] Variance strip gray at low noise/low ω
- [ ] Strip turns amber/red as ω increases toward threshold
- [ ] Transition badge appears on snap, shows ω value
- [ ] Reduce ω: hysteresis note appears in purple
- [ ] Reset button clears badge, allows repeat

**Demo 4:**
- [ ] Projection lines visible on both unit circles
- [ ] In-phase: both projections equal length
- [ ] Anti-phase: projections opposite
- [ ] F1/F2 labels on oscillator chart

## Final commit
```bash
git add _Workbench/demos/
git commit -m "feat(demos): all Approach A precision improvements complete"
```
