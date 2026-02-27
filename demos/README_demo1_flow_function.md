# Demo 1 — Flow Function Explorer
**File:** `demo1_flow_function.html`
**Used:** Week 8 Tuesday (in-class, opening sequence)
**Purpose:** Teach the geometric method — how to read a dynamical landscape from a flow function plot before applying it to HKB.

---

## What This Demo Does

Shows a 1D dynamical system dx/dt = f(x). Students learn to read a plot of f(x) vs. x and extract:
- Where the curve crosses zero = **fixed point** (where behavior can settle)
- Slope at crossing is **negative** → **attractor** (system returns after perturbation)
- Slope at crossing is **positive** → **repeller** (system flees)
- Steeper slope = stronger pull or push

Two modes: Attractor [f(x) = −kx] and Repeller [f(x) = +kx]. An animated particle rolls along the x-axis following the flow arrows.

---

## Controls

| Control | What it does |
|---|---|
| **[Attractor] / [Repeller] toggle** | Switches between negative and positive slope; curve, arrows, and particle all update with a smooth transition |
| **k slider (0.2 – 2.0)** | Changes the steepness of the line — stronger k = steeper slope = faster approach or escape |
| **Drag the particle** | Relocate the dot to any starting position on the x-axis; animation resumes from there |

---

## Suggested Classroom Sequence

**Step 1 — Start in Attractor mode (default)**
> "This plot has x on the horizontal axis — the state of the system. On the vertical axis we have dx/dt — how fast the state is changing. The arrows on the x-axis show where the system will go from any starting point."

Point to the zero crossing:
> "Where does the curve cross zero? That's the fixed point. The state is not changing there. Now look at the slope of the curve at that crossing — it's going downward. That means: if you're to the right of zero, dx/dt is negative (you move left). If you're to the left, dx/dt is positive (you move right). The arrows converge. This is an attractor."

**Step 2 — Drag the particle to different starting positions**
> "Watch what happens regardless of where we start — the system finds its way back to zero. That's what 'stable' means. The fixed point is robust to perturbation."

**Step 3 — Increase k with the slider**
> "Now watch what happens when I make the slope steeper. The system returns faster. Steeper slope = deeper attractor = harder to knock out of."

**Step 4 — Switch to Repeller mode**
> "One sign change in the rule — from −kx to +kx — and everything flips. Same zero crossing, but now the slope is positive. Arrows point outward. Drop the particle anywhere near zero..."

Drag particle close to origin:
> "It runs away. That's a repeller. The same fixed point, but unstable. The geometry of the curve at the crossing tells you everything."

**Step 5 — Bridge to HKB**
> "In the HKB model of finger coordination, the state variable isn't temperature — it's relative phase φ. And the rule isn't a straight line — it's a nonlinear sine function. But the logic is identical. We look for zero crossings. We check the slope. That tells us which coordination patterns are stable."

→ *Open Demo 2.*

---

## Technical Notes

- Requires internet connection (D3 loads from CDN: `d3js.org`)
- Works in any modern browser; no installation needed
- Open by double-clicking the `.html` file or dragging it into a browser window
- Animation pauses automatically when you switch browser tabs
- On a projector: the demo is max-width 900px and scales to fit; text is readable at normal projection distances
