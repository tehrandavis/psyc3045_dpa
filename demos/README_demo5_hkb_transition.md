# Demo 5 — HKB Phase Transition
**File:** `demo5_hkb_transition.html`
**Used:** Week 8 Thursday (formal HKB lab, post-measurement analysis)
**Purpose:** Recreate the exact non-linear phase transitions measured by Haken, Kelso, and Bunz (1985). This demo is designed to simulate the sudden snap from anti-phase (windshield wipers) to in-phase (simultaneous inwards/outwards) precisely at a critical biological frequency threshold, and illustrates the phenomenon of critical fluctuations that foreshadow it.

---

## What This Demo Does

Two animated oscillators (Finger 1 in blue, Finger 2 in orange) are mathematically coupled using the non-linear HKB equations (`dot(phi) = -a*sin(phi) - 2b*sin(2phi)`). The layout builds on Demo 4 with unit circles, finger avatars, phase meters, and time series charts.

The key feature of Demo 5 is the **HKB Ratio (b/a)**. The `b/a` parameter dynamically drops as the **Current Freq (ω)** increases past the **Preferred Freq (ω₀)**. At exactly **1.3×** the preferred frequency, the `b/a` term hits the `0.25` bifurcation mathematical threshold. Right before this point, the simulation exhibits heavy *Critical Fluctuations*, and immediately upon crossing it, the system undergoes an abrupt phase transition from Anti-phase to In-phase. 

---

## Controls

| Control                           | What it does                                                               |
| --------------------------------- | -------------------------------------------------------------------------- |
| **Preferred Freq (ω₀)**           | The baseline natural swinging frequency (e.g., 1.0 Hz)                     |
| **Current Freq (ω)**              | The real-time frequency forcing the coupling equations                     |
| **Phase Noise Level (0.0 – 1.0)** | Injects random noise into the state integration to illustrate fluctuations |
| **[In-phase]**                    | Resets coordination state to In-phase                                      |
| **[Anti-phase]**                  | Resets coordination state to Anti-phase                                    |
| **[Pause / Resume]**              | Freezes animation for discussion                                           |

---

## Suggested Classroom Sequence

**Step 1 — Start in Anti-phase**
> "Let's put the fingers in the starting position for the lab: Anti-phase. Let's imagine your body's preferred swinging speed is 1.0 Hz. Right now, your actual frequency and your preferred frequency are equal. That ratio is 1.00x, and so the HKB parameter ratio b/a is a very stable 1.00."

**Step 2 — Inject Phase Noise**
> "We'll add some noise into the system to represent biological noise. Since the anti-phase basin is so deep and stable at this frequency, the noise barely affects the relative phase. It stays rock solid at 180°."

**Step 3 — Speed Up and Observe Critical Fluctuations**
Start dragging the **Current Freq (ω)** slider up towards roughly 1.25 Hz.
> "Now, you're instructed to slowly speed up. As the frequency climbs, the b/a ratio drops. The potential landscape is flattening out. Watch the relative phase dial and the sine wave charts — the noise is kicking us around more. We are wobbling. These are Critical Fluctuations, a known signature of an impending phase transition!"

**Step 4 — Cross the Bifurcation Threshold**
Drag the **Current Freq (ω)** slider past 1.30 Hz.
> "Kelso noticed a transition occurred around 1.3x preferred frequency. If we cross that line here, b/a drops below 0.25. The anti-phase basin is destroyed entirely. We snap into In-Phase, and the avatars synchronize. This is a bifuraction!"

**Step 5 — Demonstrate Hysteresis**
Drag the **Current Freq (ω)** slider back down to 1.0 Hz.
> "What happens if we slow back down? Do we magically transition back to anti-phase? No. We're trapped in the In-phase valley. This path-dependency is hysteresis."

---

## Key Concepts This Demo Makes Visible

| Concept                   | Where to see it                                                  |
| ------------------------- | ---------------------------------------------------------------- |
| Criticality / Bifurcation | Red `b/a (UNSTABLE)` warning when dropping below 0.25 threshold  |
| Critical Fluctuations     | Wobbling in relative phase dial right before the `1.30x` mark    |
| Phase Transition          | Sudden snap of avatars, dials, and timeseries from 180° to 0°    |
| Structural Hysteresis     | Slowing down after transitioning does *not* snap the system back |

---

## Technical Notes

- Requires internet connection (D3 loads from CDN)
- State is integrated numerically (dt = 0.05 max limit) through standard HKB differential equations.
- The parameter mapping formula `b = 1.0 - 2.5 * ((CurrentFreq / PreferredFreq) - 1)` dynamically forces a true bifurcation exactly at a user-facing `1.3x` multiplier threshold.
