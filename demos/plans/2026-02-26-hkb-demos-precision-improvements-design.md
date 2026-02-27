# Design: HKB Demo Precision Improvements (Approach A)
**Date:** 2026-02-26
**Scope:** demos 2, 4, 5 in `_Workbench/demos/`
**Assignment:** `_Workbench/Demo_Exploration_Assignment.md`
**Approach:** Targeted precision fixes — improve only the elements that make assignment questions visually unanswerable. Preserve open-ended exploration feel. Leave hook points for Approach C (guided tour) as comments.

---

## Demo 2 — HKB Landscape Explorer (`demo2_hkb_landscape.html`)

**Assignment questions served:** Q1 (valley depth → behavioral meaning), Q4 (b deepens valley → later transition)

### Fix 1: Dynamic y-axis on potential chart
- Replace `const yDomain = [-15, 5]` with a domain computed from actual V values + 20% padding
- Makes valleys visually prominent at all parameter values

### Fix 2: Valley depth annotations on potential chart
- Draw a labeled vertical double-headed arrow from each stable attractor's valley bottom up to the nearest saddle point
- In-phase arrow: blue (`#2b6cb0`); Anti-phase arrow: amber (`#c05621`)
- Label shows barrier height: `Δ = X.X`
- Math: saddle is at `φ* = ±arccos(-a/4b)` when `a/b < 4`; barrier = `V(φ*) - V(attractor)`
  - `V(φ*) = a²/(8b) + b`
  - In-phase barrier: `V(φ*) - V(0) = a²/(8b) + 2b + a`
  - Anti-phase barrier: `V(φ*) - V(π) = a²/(8b) + 2b - a`
- When `a/b ≥ 4`: anti-phase arrow fades out with a brief CSS transition
- Arrows live in a dedicated SVG `<g class="valley-depth-annotations">` group

### Fix 3: Barrier height readout in status row
- Add small text to the existing `.status-row`: "In-phase depth: X.X | Anti-phase depth: X.X" (or "—" when anti-phase gone)
- Updates on every slider change
- Gives students a number to report and compare for Q4

### Approach C hook
- Comment block in `onParamsChanged()`: `// HOOK: guided-tour step advancement could fire here`

---

## Demo 4 — Relative Phase Visualizer (`demo4_relative_phase.html`)

**Assignment questions served:** Q1 (what does the unit circle represent), Q2 (flat line comparison)

### Fix 1: Vertical projection line on unit circles
- In `updateCircle()`, add a dashed vertical line from the dot's screen position `(dotX, dotY)` down to the horizontal midline `(dotX, CY)`
- Add a small horizontal tick at the midline endpoint
- Color: same as the oscillator color, opacity 0.4
- Makes explicit that dot height = sin θ = physical finger position
- Directly grounds Q1: the dot on the rim tells you "where in the cycle" the finger is; the height tells you the direction and magnitude of the displacement

### Fix 2: Label oscillator time series lines
- Add "Finger 1" and "Finger 2" text labels at the right edge of the oscillator time series SVG
- Colors: `#2b6cb0` (blue) and `#c05621` (amber)
- Students need to explicitly compare both lines for Q2

### Approach C hook
- Comment block in `setupCircle()`: `// HOOK: guided-tour overlay could highlight this element`

---

## Demo 5 — HKB Phase Transition (`demo5_hkb_transition.html`)

**Assignment questions served:** Q1 (critical fluctuations), Q3 (hysteresis)

### Fix 1: Rolling variance strip above the relative phase time series
- Compute φ standard deviation over a rolling 60-frame window (~1 second at 60fps)
- Add a 16px-tall strip `<g class="variance-strip">` above the existing relative phase time series (adjust margin.top to accommodate)
- Each frame paints a vertical bar at the current x-position; bar height proportional to rolling SD (capped at full strip height at SD ≥ 30°)
- Color scale: neutral gray → amber → red as SD grows
- Gives a direct visual answer to Q1: the strip widens and reddens as the attractor weakens before transition

### Fix 2: Transition event badge
- Track whether the system has transitioned: detect φ crossing from anti-phase region (|φ−180°| < 40°) to in-phase region (|φ| < 40°) as a sustained shift (persists > 10 frames)
- On detection: render a persistent amber badge in the controls panel: "Transitioned at ω = X.XX Hz"
- Badge does not disappear when ω is reduced back
- This makes the transition moment inspectable and reportable (Q2 and Q3)

### Fix 3: Hysteresis readout
- When transition badge is present AND b/a rises back above 0.25 (ω reduced below threshold): update the b/a status label to include a small italic note: "Anti-phase restored in landscape — system stays in-phase (hysteresis)"
- Text color: muted purple `#553c9a` to distinguish from the danger-red threshold warning
- This is the direct answer to Q3

### Approach C hook
- Comment block in `tick()`: `// HOOK: guided-tour could annotate the transition event`

---

## Out of scope
- Demo 1, Demo 3 (not assigned)
- Restyling, layout overhaul
- Approach C implementation (hooks only)
- Any changes to the assignment document

---

## Implementation order
1. Demo 2 (most impact, fixes the valley depth gap that's central to all Q1/Q4)
2. Demo 5 (critical fluctuations + hysteresis are the hardest questions)
3. Demo 4 (quickest fix, lowest risk)
