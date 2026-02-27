# Demo 2 — HKB Landscape Explorer
**File:** `demo2_hkb_landscape.html`
**Used:** Week 8 Tuesday (in-class, after Demo 1)
**Purpose:** Apply the geometric method to HKB. Show how the b/a parameter ratio controls which coordination patterns are stable, and make the bifurcation (phase transition) visible as a structural change in the landscape.

---

## What This Demo Does

Two synchronized panels:
- **Top:** Flow function f(φ) = −a·sin(φ) − 2b·sin(2φ) — the rate of change of relative phase
- **Bottom:** Potential landscape V(φ) = −a·cos(φ) − b·cos(2φ) — the "terrain" the system rolls through

An animated ball rolls in the potential landscape. Adjusting a and b sliders reshapes both panels simultaneously. When a/b exceeds 4.0, the anti-phase valley disappears and the ball rolls to in-phase — the same transition students experienced in the finger-wiggling lab.

A status badge reads **"Both attractors stable"** (green) or **"Anti-phase lost stability"** (orange).

---

## Controls

| Control                  | What it does                                                                                           |
| ------------------------ | ------------------------------------------------------------------------------------------------------ |
| **a slider (0.5 – 8.0)** | Controls in-phase coupling strength. Increasing a weakens anti-phase stability.                        |
| **b slider (0.5 – 2.0)** | Controls anti-phase coupling strength. Increasing b deepens the anti-phase valley.                     |
| **Status badge**         | Updates automatically; flips at a/b ≥ 4.0                                                              |
| **Animated ball**        | Rolls toward nearest valley; automatically relocates when bifurcation eliminates its current attractor |

---

## Suggested Classroom Sequence

**Step 1 — Start at defaults (a=1, b=1)**
> "Both panels are showing the same information, just from two perspectives. Top panel: the flow function, same logic as Demo 1. Bottom panel: the potential landscape — think of the ball-in-a-bowl from Blau & Wagman. The valleys are the attractors."

Point to the two valleys:
> "Two valleys — in-phase at φ=0 and anti-phase at φ=180°. Two stable coordination patterns. This matches exactly what the chapter described."

Point to the flow panel fixed points:
> "In the top panel, those same attractors appear as zero crossings with negative slopes. The peaks between the valleys in the potential correspond to the unstable crossings — the repellers — in the flow function."

**Step 2 — Connect to the reading**
> "Blau & Wagman called this 'bistability' — two stable states existing at the same time. At slow tapping speeds, both in-phase and anti-phase are available to you. The system has two valleys."

**Step 3 — Gradually increase a (keep b at 1.0)**
> "Now I'm changing the parameter a — think of this as increasing the movement frequency. Watch the landscape."

Move a from 1.0 toward 4.0 slowly:
> "The anti-phase valley is getting shallower. The ball is still sitting in it, but the walls are getting lower. It's becoming less stable — easier to knock out."

**Step 4 — Push a past 4.0 (bifurcation)**
> "Watch what happens when we cross the threshold."

Move a above 4.0:
> "The anti-phase valley is gone. The ball rolls to in-phase — not because someone decided to switch, but because the attractor ceased to exist. There's nowhere else to go. That's what happened to your fingers in the lab. The transition wasn't a decision. The landscape changed."

Point to the status badge:
> "'Anti-phase lost stability.' That's Kelso's phase transition, expressed as a structural change in the potential."

**Step 5 — Reset and show it from the other direction**
Move b up to 2.0 first, then increase a:
> "If we make anti-phase coupling stronger first, we need a much bigger push to destabilize it. Deeper valley = more robust pattern."

---

## Key Concepts This Demo Makes Visible

| Concept                | Where to see it                                                       |
| ---------------------- | --------------------------------------------------------------------- |
| Bistability            | Two valleys simultaneously at default parameters                      |
| Attractor depth        | Valley depth — compare in-phase vs anti-phase at different a/b values |
| Bifurcation            | Anti-phase valley disappearing as a/b increases                       |
| Phase transition       | Ball rolling from anti-phase to in-phase after bifurcation            |
| Flow/potential duality | Top and bottom panels show the same landscape two ways                |

---

## Technical Notes

- Requires internet connection (D3 loads from CDN)
- Fixed points found by Newton-Raphson refinement — mathematically precise at all parameter values
- Ball uses overdamped physics (gradient descent) — physically correct for this system
- The status badge threshold is a/b ≥ 4.0; exact value depends on parameter combination
- Works in any modern browser; open by double-clicking or dragging to browser
