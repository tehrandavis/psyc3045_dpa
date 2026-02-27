# Implementation Brief for Antigravity
**Project:** Dynamics of Perception & Action — HKB Demo improvements
**Files involved:** `_Workbench/demos/demo2_hkb_landscape.html`, `_Workbench/Demo_Exploration_Assignment.md`, `_Workbench/Demo_Walkthrough.md`

---

## Context

These are standalone, self-contained HTML files using D3 v7 loaded from CDN. No build system. All JS is inside an IIFE. The demos are interactive physics simulations used in an undergraduate course on coordination dynamics.

A companion demo (`demo3_hkb_trajectories.html`) already implements click-to-drop ball and basin shading — use it as a reference for patterns and variable names where helpful.

**⚠️ Important note:** The instructor referred to "the brackets in demo 5" but the valley depth bracket annotations (Δ arrows) live in **Demo 2** (`demo2_hkb_landscape.html`). All bracket-related changes below apply to Demo 2 only.

---

## Change 1 — Demo 2: Click-to-drop ball on potential landscape

**File:** `_Workbench/demos/demo2_hkb_landscape.html`

### What exists now
The potential landscape SVG (`svgPot`) already has a ball (`.ball` circle element) that rolls on the curve using overdamped physics. The ball state is:
- `let ballPos` — current φ position in radians
- `let ballVel` — current velocity
- `startBallAnimation()` — cancels any running animation and starts a new one from current `ballPos`/`ballVel`
- `potXScale` — D3 scale mapping φ (−π to π) to screen x
- `CHART_HEIGHT`, `MARGIN` — layout constants

### What to add
Add a click handler to `svgPot` (registered inside `initPotentialChart()` after the SVG is created). When the user clicks anywhere on the potential landscape:

1. Convert the click's x screen coordinate back to φ using `potXScale.invert(event.offsetX)`.
2. Clamp the result to `[−π, π]`.
3. Set `ballPos = clickedPhi` and `ballVel = 0`.
4. Call `startBallAnimation()`.

The existing ball element is the only ball — dropping a new ball automatically replaces the old one because there is only one `.ball` element. No cleanup needed.

**Cursor:** Set `cursor: crosshair` on `svgPot` so students know the chart is clickable. Add this in the CSS section:
```css
#chart-potential svg {
  cursor: crosshair;
}
```
Or apply it inline when creating `svgPot`.

**Click target:** Attach the listener to the SVG element itself (not a sub-group) so the full chart area is clickable, including empty space above/below the curve.

### Basin shading (reference demo3 pattern)
Demo 3 (`demo3_hkb_trajectories.html`) already shades basins of attraction using the unstable fixed points (separatrices) as boundaries — green for in-phase basin, amber for anti-phase basin. Add the same shading to the Demo 2 potential landscape.

- In `updatePotentialChart()`, after the gridlines are drawn and before the potential curve, add a `<g class="basin-fills">` group (initialized in `initPotentialChart()`).
- Compute basin boundaries from `findFixedPoints(a, b)` — unstable fixed points are the separatrices at `φ* = ±arccos(−a/4b)`.
- Fill:
  - In-phase basin (between the two separatrices, centered on φ=0): light green `rgba(240,255,244,0.5)`
  - Anti-phase basins (outside the separatrices, toward ±π): light amber `rgba(255,250,240,0.5)`
  - When `a/b ≥ 4` (no anti-phase attractor): fill the entire domain green (single basin).
- The fill should extend from the top of the y-axis down to the bottom — use a D3 area generator clipped to the chart area, or simply `<rect>` elements spanning the full height between the separatrix x-positions.
- Redraw on every `updatePotentialChart()` call (same as the existing valley depth annotations).

### Interaction hint text
Add a small instruction line below the potential landscape panel title:
```html
<div class="panel-subtitle" style="font-style:italic;">
  Click anywhere on the landscape to drop the ball and watch where it rolls.
</div>
```
Place it after the existing `.panel-subtitle` inside `#panel-potential`.

---

## Change 2 — Demo 2: Bracket annotation visual improvements

**File:** `_Workbench/demos/demo2_hkb_landscape.html`

The `drawValleyDepthAnnotations()` function draws bracket arrows on the potential landscape. The `drawArrow(x, yTop, yBot, color, label)` helper draws the vertical bracket at a given x position. Make two changes:

### 2a — Make brackets dotted

In `drawArrow()`, the vertical line currently has no `stroke-dasharray`. The top and bottom tick lines also have none. Add `stroke-dasharray: "4,3"` to all three lines (vertical stem, top tick, bottom tick):

```javascript
g.append("line")   // vertical stem
  .attr("stroke-dasharray", "4,3")
  ...

g.append("line")   // top tick
  .attr("stroke-dasharray", "4,3")
  ...

g.append("line")   // bottom tick
  .attr("stroke-dasharray", "4,3")
  ...
```

### 2b — Add dotted horizontal connector to valley

After drawing the bracket, add a dotted horizontal line from the bottom tick's x-position to the x-position of the corresponding valley on the curve. This visually connects the bracket to the attractor it is measuring.

- For the **in-phase bracket** (drawn at `saddleX - 12`): draw a horizontal line from `(saddleX - 12, yInPhase)` to `(potXScale(0), yInPhase)`. The line should stop just before the valley point — use `potXScale(0) + 4` as the endpoint so it doesn't overdraw the curve.
- For the **anti-phase bracket** (drawn at `saddleXLeft + 12`): draw a horizontal line from `(saddleXLeft + 12, yAntiPhase)` to `(potXScale(-Math.PI), yAntiPhase)`. Use `potXScale(-Math.PI) - 4` to stop short.

Both lines: same color as the bracket, `stroke-width: 1`, `stroke-dasharray: "3,3"`, `opacity: 0.5`.

Add these lines inside `drawValleyDepthAnnotations()`, after the `drawArrow()` calls — not inside `drawArrow()` itself, since the connector needs to know the valley's x-position which is external to the helper.

---

## Change 3 — Assignment update

**File:** `_Workbench/Demo_Exploration_Assignment.md`

### Demo 2 — What to do section
Update the "What to do" paragraph to mention dropping balls. Append to the existing text:

> After exploring the sliders, **click on the potential landscape** to drop the ball at different positions. Try dropping it at various points — near a valley, near a hilltop, and in between. Notice that some positions lead to one attractor and other positions lead to the other.

### Demo 2 — New prompt Q5 (optional)
Add a fifth prompt after Q4:

> 5. When you drop the ball at different positions, you may notice there is a boundary — positions on one side roll to in-phase, positions on the other side roll to anti-phase. What is the name for this boundary? What determines where it falls, and what happens to it as **a** increases past 4.0?

Update the `### Log entry prompts (respond to 2)` heading to `### Log entry prompts (respond to 2, optional: respond to 3)` — this keeps it low-stakes while making Q5 available to curious students.

---

## Change 4 — Walkthrough update

**File:** `_Workbench/Demo_Walkthrough.md`

### Add a new Step 5 to the Demo 2 section

Insert this after the existing Step 4 ("Deepen the anti-phase valley first, then increase a") and before the closing note:

---

**Step 5 — Drop the ball yourself**

The landscape is now clickable. Click anywhere on the potential landscape chart to drop the ball at that position. The ball rolls from wherever you drop it to the nearest valley.

Try these drops:
- Click directly on the bottom of a valley — the ball barely moves.
- Click near the top of a hill (the red dot position) — the ball rolls away, but which direction?
- Click just to the left of the hilltop, then just to the right. Notice that tiny differences in starting position can send the ball to completely different valleys.

The hilltop (unstable fixed point, red dot) marks the **separatrix** — the boundary between the two basins of attraction. Positions in the green-shaded region roll to in-phase; positions in the amber-shaded region roll to anti-phase.

Now increase **a** until the anti-phase basin disappears. Drop the ball in what was the anti-phase basin. Where does it go?

> **For assignment Q5 (optional):** Describe the separatrix. Where is it? What happens to it as a/b approaches 4.0?

---

### Notes for Antigravity

- The `findFixedPoints(a, b)` function already returns stable and unstable fixed points. Unstable ones are the separatrices.
- `potXScale` and `potYScale` are set in `updatePotentialChart()` — all new drawing code in that function has access to them.
- `startBallAnimation()` already handles canceling a previous animation — no need to change it.
- Basin fills should be drawn **before** the potential curve so the curve renders on top.
- The click handler should be registered once in `initPotentialChart()`, not re-registered on each `updatePotentialChart()` call.
- All changes are additive. No existing behavior should be removed.
- Commit each logical unit separately with conventional commit messages (`feat(demo2): ...`, `docs: ...`).
