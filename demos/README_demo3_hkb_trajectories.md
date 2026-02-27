# Demo 3 — Phase Portrait Animator
**File:** `demo3_hkb_trajectories.html`
**Used:** Week 8 Tuesday (in-class, after Demo 2)
**Purpose:** Make bistability and the separatrix viscerally concrete. Students see that initial conditions on opposite sides of an invisible boundary lead to completely different outcomes — and that this boundary is what makes coordination history-dependent (hysteresis).

---

## What This Demo Does

Displays the HKB potential landscape V(φ). Students click anywhere on the landscape to drop a ball, which animates rolling toward the nearest attractor. Balls are colored by outcome: **blue** = in-phase (φ=0), **orange** = anti-phase (φ=180°). A score counter tracks how many balls reached each attractor.

The **separatrix** (unstable fixed point) is marked with a red peak and dashed vertical line — the invisible boundary dividing the two basins of attraction. Basin regions are lightly shaded (green = in-phase basin, light orange = anti-phase basin).

A **b/a slider** can trigger bifurcation: as b/a decreases, the anti-phase valley disappears and all new balls roll to in-phase only.

---

## Controls

| Control                     | What it does                                                                               |
| --------------------------- | ------------------------------------------------------------------------------------------ |
| **Click on the landscape**  | Drops a ball at that φ position; it rolls to the nearest attractor                         |
| **b/a slider (0.25 – 2.0)** | Reshapes the landscape in real time; bifurcation notice appears when anti-phase disappears |
| **[Clear all balls]**       | Removes all balls, resets score counter                                                    |

Up to 10 balls on screen simultaneously; oldest is removed when the limit is reached.

---

## Suggested Classroom Sequence

**Step 1 — Orient students to the landscape**
> "This is the same potential landscape from the last demo — two valleys, two attractors. The red peaks between them are the separatrices — the boundaries between the two basins of attraction."

**Step 2 — Drop a ball in the in-phase basin**
Click clearly to the left of the left separatrix:
> "Ball goes blue — it settled at in-phase. Now let's try the other basin."

Click clearly between the two separatrices:
> "Orange — anti-phase. The basin you start in determines where you end up."

**Step 3 — The separatrix demonstration (key moment)**
Drop several balls on either side of a red peak, very close together:
> "Watch these two balls — I'm starting them almost at the same position. One is just barely to the left of that red peak, one just barely to the right."

Watch them diverge to opposite attractors:
> "Same starting conditions, nearly. Completely different outcomes. The red peak is the separatrix — the invisible boundary. This is what Blau & Wagman meant by bistability. Where you are in the basin determines where you go, not just how fast you're moving."

**Step 4 — Connect to hysteresis**
> "Now think about what happens in the finger-wiggling lab. You start in anti-phase and speed up. As the landscape changes, the anti-phase basin shrinks. Eventually you get pushed past the separatrix — and you snap to in-phase. But when you slow back down, the landscape doesn't immediately restore the anti-phase basin to its original depth. You're already sitting in the in-phase valley. That's why you don't snap back. That's hysteresis — the landscape has memory."

**Step 5 — Trigger bifurcation with the slider**
Move b/a slider down toward 0.25:
> "Now let's simulate what happens at high movement frequency — the anti-phase valley disappears. Drop balls anywhere."

Click multiple positions:
> "Everything goes to in-phase. There's only one attractor now. This is why the switch is irreversible in real time — you can't stay in a valley that no longer exists."

**Step 6 — Reset for student exploration**
Hit [Clear all balls], reset slider to b/a = 1.0:
> "Everyone take 30 seconds — try to find the exact location of a separatrix. See if you can drop two balls that go to different attractors from positions that look identical."

---

## Key Concepts This Demo Makes Visible

| Concept                                    | Where to see it                                                                        |
| ------------------------------------------ | -------------------------------------------------------------------------------------- |
| Basin of attraction                        | Shaded regions (green / light orange)                                                  |
| Separatrix                                 | Red peak + dashed line                                                                 |
| Sensitive dependence on initial conditions | Two balls near separatrix → opposite outcomes                                          |
| Bistability                                | Two basins coexisting, balls ending in either                                          |
| Bifurcation                                | b/a slider → anti-phase basin disappears                                               |
| Hysteresis (structural)                    | Once in in-phase basin after bifurcation, no path back without reversing the landscape |

---

## Technical Notes

- Requires internet connection (D3 loads from CDN)
- Fixed points detected via Newton-Raphson approximation + classification — robust and accurate at all b/a values
- Ball physics: overdamped gradient descent with Euler integration (dt = 0.02); physically correct
- Settling detection: |dφ/dt| < 0.01 for 10+ frames → snaps to nearest stable fixed point with brief pulse animation
- φ wraps to [−π, π] each step — no boundary artifacts
- Works in any modern browser; open by double-clicking or dragging to browser
