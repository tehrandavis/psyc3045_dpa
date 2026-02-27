# Demo 5 Avatar Toggle + Assignment Consolidation — Design
**Date:** 2026-02-26
**Scope:** `demo5_hkb_transition.html` + `Demo_Exploration_Assignment.md`

---

## Demo 5 — Three code changes

### 1. Projection lines on unit circles
Identical to Task 7 (already implemented in demo4). In `setupCircle()`: append `.proj-line` (dashed vertical, opacity 0.4, stroke-dasharray "3,2") and `.proj-tick` (horizontal tick at midline, stroke-width 2, opacity 0.6), both initialized at CX/CY. In `updateCircle()`: update `.proj-line` from `(dotX, dotY)` to `(dotX, CY)`; update `.proj-tick` from `(dotX-6, CY)` to `(dotX+6, CY)`.

### 2. Avatar mode toggle button
A segmented two-button row ("Metronomes" | "Fingers") added inside the Finger Avatars card, in a flex row with the existing card title. Default state: `"fingers"` (preserves current behavior — sign=-1 for avatar 2).

State variable: `let avatarMode = "fingers";`

In `tick()`, avatar 2's sign: `avatarMode === "fingers" ? -1 : 1`. Avatar 1 always uses sign=+1.

Button styling: reuse `.quick-btn` and `.active-flash` classes already in the file. Active button gets a persistent highlight class.

### 3. Inline label + callout swap
A `<p id="avatar-mode-label">` sits below the toggle row inside the avatars card. The first `<li>` of "What to Notice" has `id="callout-inphase-bullet"` and swaps text on toggle.

**Fingers state:**
- Label: "Homologous muscles co-activate — in-phase looks like mirror movement, fingers move toward and away together (←→)."
- Callout bullet: "Same frequency, same phase → In-phase (φ ≈ 0°): homologous muscles fire together; avatars mirror each other (←→)."

**Metronomes state:**
- Label: "Coupled oscillators move in the same direction when in-phase — like two pendulums on the same shelf (→→)."
- Callout bullet: "Same frequency, same phase → In-phase (φ ≈ 0°): both oscillators swing the same direction (→→)."

---

## Assignment update — `Demo_Exploration_Assignment.md`

- Remove entire Demo 4 section (heading, "What to do", all three prompts)
- In Demo 5 section: add two prompts (Q4, Q5) folded from demo 4 Q1 and Q2:
  - **Q4:** "What does the unit circle represent? Describe what the dot on the rim and the arc are telling you about each finger's movement."
  - **Q5:** "Compare the relative phase time series for the In-phase and Anti-phase reset states: both are roughly flat lines, but at different values. What does a flat line indicate about the coordination? What would a non-flat line indicate?"
- Update "respond to 2" → "respond to 3"
- Update submission instructions: remove reference to three entries, now two (Demo 2 and Demo 5)

---

## Out of scope
- Demo 4 code changes (file kept as-is, just removed from assignment)
- Demo 2 changes
- Any layout overhaul
