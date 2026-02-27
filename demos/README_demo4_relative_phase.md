# Demo 4 — Relative Phase Visualizer
**File:** `demo4_relative_phase.html`
**Used:** Week 8 Thursday (opening of formal HKB lab, pre-measurement)
**Purpose:** Make the measurement concept of relative phase concrete before students collect data. They need to understand what φ is, how to recognize in-phase vs anti-phase, and why frequency differences cause phase drift — before they try to calculate it from their own movements.

---

## What This Demo Does

Two animated oscillators (Finger 1 in blue, Finger 2 in orange) are represented visually. The demo computes and displays in real time:
- θ₁ and θ₂ — the phase angle of each oscillator (where it is in its cycle), shown on unit circles and as a scrolling sine wave time series.
- Inverted pendulum "finger avatars" that swing left/right in sync with the phase angle.
- φ = θ₁ − θ₂ — the **relative phase** between them.
- A semicircular phase meter with a needle showing current φ.
- A scrolling time series of φ(t) over the last 5 seconds, color-coded green (in-phase) to orange (anti-phase).

Quick-set buttons jump to canonical states: **In-phase**, **Anti-phase**, **90° offset**, **Drift**.

---

## Controls

| Control                             | What it does                                                               |
| ----------------------------------- | -------------------------------------------------------------------------- |
| **ω₁ slider (0.5 – 3.0 Hz)**        | Frequency of Finger 1                                                      |
| **ω₂ slider (0.5 – 3.0 Hz)**        | Frequency of Finger 2                                                      |
| **Phase offset slider (0° – 360°)** | Sets the initial phase relationship between the two oscillators            |
| **Phase Noise Level (0.0 – 1.0)**   | Injects random noise into the state integration to illustrate fluctuations |
| **[In-phase]**                      | Sets ω₁ = ω₂, φ = 0° — both fingers at same point in cycle                 |
| **[Anti-phase]**                    | Sets ω₁ = ω₂, φ = 180° — fingers at opposite points in cycle               |
| **[90° offset]**                    | Sets ω₁ = ω₂, φ = 90°                                                      |
| **[Drift]**                         | Sets ω₂ slightly faster than ω₁ — φ drifts continuously                    |
| **[Pause / Resume]**                | Freezes animation for discussion                                           |

---

## Suggested Classroom Sequence

**Step 1 — Start with In-phase (button)**
> "Each circle represents one finger moving through its cycle. The dot on the rim is where the finger is right now in that cycle. The arc shows how far around it's traveled."

Point to the needle on the phase meter:
> "Relative phase is the angle difference between the two fingers. Right now they're synchronized — both at the same point in their cycle. φ = 0°. In-phase."

Point to the time series:
> "Green flat line — stable, constant relative phase."

**Step 2 — Switch to Anti-phase**
> "Now the same frequency, but one finger is half a cycle ahead. φ = 180°. When one goes up, the other goes down — alternating. This is the pattern you start with in the lab."

Point to the meter and time series:
> "Orange flat line — stable, but at 180°. Same frequency, different phase relationship. Still a stable coordination pattern."

**Step 3 — Drift (key pedagogical moment)**
> "What happens if the two fingers run at slightly different speeds?"

Hit [Drift]:
> "Now ω₂ is a little faster. Watch the phase meter needle — it keeps sweeping around. The relative phase never stabilizes. There's no coordination. The system keeps drifting."

Point to the time series:
> "That cycling line means the phase relationship is constantly changing. No attractor. This is what coordination dynamics is about — when do you get a stable φ, and when does it drift?"

**Step 4 — Connect drift to the HKB transition**
> "In the finger-wiggling experiment, you're increasing frequency — like I'm sliding ω₂ up. At first you can hold anti-phase because you're at a stable attractor. But as the frequency ratio changes, that attractor weakens — and eventually the system can't hold the 180° relationship anymore. It snaps to 0°. The phase transition we talked about."

**Step 5 — Hands-on exploration (2 min before lab)**
> "Try to set ω₁ and ω₂ so that φ holds steady at 90°. Is that possible? Why or why not?"

Students will find it requires exact matching — which rarely happens naturally. This sets up the lab question about preferred coordination modes.

**Step 6 — Bridge to lab measurement**
> "In the lab today, you won't have a computer doing this calculation. You'll be measuring your own φ from your movement data. The formula is the same: θ = arctan(velocity / position), φ = θ₁ − θ₂. This demo is what you're computing."

---

## Key Concepts This Demo Makes Visible

| Concept                        | Where to see it                                                 |
| ------------------------------ | --------------------------------------------------------------- |
| Phase of a single oscillator   | Arc and dot position on unit circle                             |
| Relative phase (φ)             | Meter needle + numerical readout                                |
| In-phase coordination          | φ ≈ 0°, green zone, steady needle                               |
| Anti-phase coordination        | φ ≈ 180°, orange zone, steady needle                            |
| Phase drift (no coordination)  | Drift mode — needle sweeps continuously, cycling time series    |
| Frequency as control parameter | ω₂ slider — increasing it causes drift and destabilizes fixed φ |

---

## Lab Day Notes

- Run this demo at the **start of class Thursday**, before distributing the lab protocol
- The [Pause] button is useful for freezing a clear in-phase or anti-phase state to discuss with students
- The 90° offset button is useful for discussing why some phase relationships are not naturally stable
- After this demo, students should be able to answer: "What would it look like on this display if you successfully held anti-phase and then transitioned to in-phase?"

---

## Technical Notes

- Requires internet connection (D3 loads from CDN)
- Phase computed analytically — no floating-point drift over time
- Responsive: collapses to single column on narrow screens
- Works in any modern browser; open by double-clicking or dragging to browser
- dt capped at 50ms — animation recovers cleanly after tab switching or interruptions
