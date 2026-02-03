# Module03 Slide Deck Revisions Implementation Plan

> **For Claude:** REQUIRED SUB-SKILL: Use superpowers:executing-plans to implement this plan task-by-task.

**Goal:** Revise Module03 slide deck based on user feedback - update images, reorder slides, modify demos, combine content, and update layouts.

**Architecture:** Modify slides_merged.md source file with all changes, then rebuild HTML using /frontend-slides skill. Changes include: replacing text with images, reordering slides for better pedagogical flow, creating modified demo versions, combining related content, and updating slide layouts.

**Tech Stack:** Markdown (slides_merged.md), HTML5/CSS3/JavaScript (demos), RevealJS-style presentation

---

### Task 1: Update Slide 2 with Locomotion Images

**Files:**
- Modify: `active_work/Locomotion1_Slides/slides_merged.md` (lines 10-21)

**Step 1: Replace text list with image gallery**

Current content (lines 13-18):
```markdown
*   Crawling
*   Flying
*   Hopping
*   Walking
*   Running
*   Swimming
```

Replace with:
```markdown
<div class="locomotion-gallery">
    <img src="assets/slide_2_img_1.png" alt="Crawling">
    <img src="assets/slide_2_img_2.png" alt="Flying">
    <img src="assets/slide_2_img_3.png" alt="Hopping">
    <img src="assets/slide_2_img_4.png" alt="Walking">
    <img src="assets/slide_2_img_5.png" alt="Running">
    <img src="assets/slide_2_img_6.png" alt="Swimming">
</div>
```

**Step 2: Verify images exist**

Run: `ls active_work/Locomotion1_Slides/assets/slide_2_img_{1..6}.png`
Expected: All 6 files listed

**Step 3: Commit**

```bash
git add active_work/Locomotion1_Slides/slides_merged.md
git commit -m "feat(slides): replace Slide 2 text list with locomotion images"
```

---

### Task 2: Create Modified Optic Flow Demo

**Files:**
- Create: `active_work/Locomotion1_Slides/demos/optic_flow_embedded/index.html`
- Create: `active_work/Locomotion1_Slides/demos/optic_flow_embedded/style.css`
- Create: `active_work/Locomotion1_Slides/demos/optic_flow_embedded/script.js`

**Step 1: Copy original demo files**

```bash
mkdir -p active_work/Locomotion1_Slides/demos/optic_flow_embedded
cp active_work/Locomotion1_Slides/demos/optic_flow/index.html active_work/Locomotion1_Slides/demos/optic_flow_embedded/
cp active_work/Locomotion1_Slides/demos/optic_flow/style.css active_work/Locomotion1_Slides/demos/optic_flow_embedded/
cp active_work/Locomotion1_Slides/demos/optic_flow/script.js active_work/Locomotion1_Slides/demos/optic_flow_embedded/
```

**Step 2: Remove UI container from index.html**

In `demos/optic_flow_embedded/index.html`, delete lines 15-24:
```html
    <div id="ui-container">
        <h1>Optic Flow</h1>
        <p>A demonstration of radial expansion and locomotion.</p>
        <div id="controls-hint">
            <p>Mouse: Move Heading (FoE)</p>
            <p>Arrows: Star Speed</p>
            <p>F/J: Doorway Speed</p>
            <p>R: Sync Speed</p>
        </div>
    </div>
```

Keep only:
```html
    <canvas id="warpCanvas"></canvas>
```

**Step 3: Update script.js key bindings**

In `demos/optic_flow_embedded/script.js`, find the keyboard event handler and change:
- Arrow Up/Down → C/M for star speed
- Keep F/J for doorway speed
- Keep R for sync

Find section with `case 'ArrowUp':` and `case 'ArrowDown':` and replace with:
```javascript
case 'c':
case 'C':
    // Increase star speed
    break;
case 'm':
case 'M':
    // Decrease star speed
    break;
```

**Step 4: Update style.css to hide UI**

In `demos/optic_flow_embedded/style.css`, add:
```css
#ui-container {
    display: none;
}

canvas {
    width: 100%;
    height: 100%;
}
```

**Step 5: Test the modified demo**

Run: `open active_work/Locomotion1_Slides/demos/optic_flow_embedded/index.html`
Expected: Canvas fills space, no UI overlay, C/M keys control star speed

**Step 6: Commit**

```bash
git add active_work/Locomotion1_Slides/demos/optic_flow_embedded/
git commit -m "feat(demos): create embedded optic flow demo with modified controls"
```

---

### Task 3: Update Slide 7 Demo Reference

**Files:**
- Modify: `active_work/Locomotion1_Slides/slides_merged.md` (lines 69-83)

**Step 1: Update iframe source and remove controls**

Current content (lines 72-82):
```markdown
<div class="demo-container">
    <iframe src="demos/optic_flow/index.html" width="100%" height="600px" frameborder="0"></iframe>
</div>

**Controls:**
- Mouse: Move heading (FOE)
- Arrows: Star speed
- F/J: Doorway speed
- R: Sync speeds
```

Replace with:
```markdown
<div class="demo-container">
    <iframe src="demos/optic_flow_embedded/index.html" width="100%" height="600px" frameborder="0"></iframe>
</div>
```

**Step 2: Update speaker notes**

Update notes to reflect new controls:
```markdown
> **Notes:** This demonstrates Rules 2-4. Move the mouse to change heading direction - notice how the FOE moves with it. Use C/M to adjust star speed and F/J to adjust doorway speed. Press R to sync speeds. Try placing the FOE on the doorway edges to simulate steering.
```

**Step 3: Commit**

```bash
git add active_work/Locomotion1_Slides/slides_merged.md
git commit -m "feat(slides): update Slide 7 to use embedded demo with modified controls"
```

---

### Task 4: Move Optical Flow Specificity Demo to Slide 3

**Files:**
- Modify: `active_work/Locomotion1_Slides/slides_merged.md` (lines 111-119 → new position after line 22)

**Step 1: Cut Slide 10 content**

Cut lines 111-119:
```markdown
## Slide 10: Interactive Demo - Optical Flow Specificity
### 3D Layout from Transformation

<div class="demo-container">
    <iframe src="demos/optical_flow_specificity/index.html" width="100%" height="600px" frameborder="0"></iframe>
</div>

> **Notes:** This demonstrates that 3D spatial layout is specified by transformation, not static structure. The same retinal projection can specify different 3D layouts depending on the flow pattern. Pause and play to see how motion disambiguates depth.
```

**Step 2: Insert after Slide 2 (new Slide 3)**

Insert at line 23 (after Diversity of Locomotion):
```markdown
---

## Slide 3: Interactive Demo - Optical Flow Specificity

<iframe src="demos/optical_flow_specificity/index.html" width="100%" height="600px" frameborder="0" style="border: none; width: 100%; height: 600px;"></iframe>

> **Notes:** This demonstrates that 3D spatial layout is specified by transformation, not static structure. The same retinal projection can specify different 3D layouts depending on the flow pattern. Pause and play to see how motion disambiguates depth.

---
```

Note: Removed title, removed demo-container div wrapper, removed subtitle per user feedback.

**Step 3: Renumber all subsequent slides**

Update slide numbers:
- Old Slide 3 (Kinetic Occlusion) → Slide 4
- Old Slide 4 (Ecological Context) → Slide 5
- Old Slide 5 (Core Problem) → Slide 6
- Old Slide 6 (Gibson's Rules) → Slide 7
- Old Slide 7 (Optic Flow Demo) → Slide 8
- Old Slide 8 (Rule 1) → Slide 9
- Old Slide 9 (Refining Proprioception) → Slide 10
- Old Slide 10 → DELETED (moved to Slide 3)
- Old Slide 11 → WILL BE DELETED (next task)
- Old Slide 12 → Slide 11 (will be combined with Slide 13)
- Old Slide 13 → Slide 11 (combined)
- Old Slide 14 → Slide 12
- Old Slide 15 → Slide 13
- Old Slide 16 → Slide 14
- Old Slide 17 → Slide 15
- Old Slide 18 → Slide 16
- Old Slide 19 → Slide 17

**Step 4: Commit**

```bash
git add active_work/Locomotion1_Slides/slides_merged.md
git commit -m "refactor(slides): move Optical Flow Specificity demo to Slide 3 and renumber"
```

---

### Task 5: Update Slide 10 with Stoffregen Note

**Files:**
- Modify: `active_work/Locomotion1_Slides/slides_merged.md` (Slide 10, previously Slide 9)

**Step 1: Add Stoffregen note to content**

Current content:
```markdown
## Slide 10: Refining Proprioception
### Central vs. Peripheral Flow (Stoffregen, 1985)
*   **Question:** Which part of the retina controls balance?
*   **Finding:** Peripheral flow (Lamellar) has a stronger influence on stance than central flow (Radial).

![Stoffregen Diagrams](assets/slide_8_img_2.png)
![Sway Correlations](assets/slide_8_img_4.png)

> **Notes:** It's not just "flow"; the geometry matters. Peripheral flow (parallel/lamellar) specifies egomotion more robustly than central flow.
```

Already includes Stoffregen citation. No changes needed.

**Step 2: Verify - no action required**

This slide already correctly attributes Stoffregen. Skip to next task.

---

### Task 6: Delete Slide 11 (Retinal Specialization)

**Files:**
- Modify: `active_work/Locomotion1_Slides/slides_merged.md` (delete lines for old Slide 11)

**Step 1: Delete Slide 11 content**

Delete entire section:
```markdown
## Slide 11: Retinal Specialization and Flow Structure
### It's Not Just Retinal Location

*   **Peripheral retina** appears specialized for pickup of **lamellar** (parallel) flow, not radial flow
*   **Retinal location** is not the whole story
*   **Structure of the ambient optic array** also matters (radial vs. lamellar)
*   Retinal specialization and AOA structure are **complementary**

> **Notes:** This bridges Stoffregen's findings with deeper mechanistic understanding. The peripheral retina's specialization for lamellar flow complements the fact that peripheral vision naturally encounters more lamellar flow during locomotion. Form follows function.

**Reference:** Stoffregen, T. A. (1985). Flow structure versus retinal location in the optical control of stance. *Journal of Experimental Psychology: Human Perception and Performance, 11*(5), 554–565.

---
```

**Step 2: Commit**

```bash
git add active_work/Locomotion1_Slides/slides_merged.md
git commit -m "refactor(slides): remove Slide 11 (Retinal Specialization)"
```

---

### Task 7: Combine Slides 12-13 into Single Rule 2 Slide

**Files:**
- Modify: `active_work/Locomotion1_Slides/slides_merged.md` (merge old Slides 12 & 13)

**Step 1: Combine content**

Old Slide 12:
```markdown
## Slide 12: Rule 2 - Heading Perception
### Can we see where we are going? (Warren, 1988)
*   **Focus of Expansion (FOE):** The point from which all flow originates.
*   **Problem:** Eye movements disrupt the FOE on the retina.
*   **Result:** We can separate *Retinal Flow* (eye + move) from *Ambient Flow* (move only). Heading judgments are accurate to within 1°.

![Retinal vs Ambient Flow](assets/slide_11_img_2.png)
![Heading Data](assets/slide_12_img_1.png)
```

Old Slide 13:
```markdown
## Slide 13: Rule 3 - Visual Control of Steering
### The "Great Debate" (Warren et al., 2001)
*   **Hypothesis A (Optic Flow):** Steer by keeping FOE on the goal.
*   **Hypothesis B (Egocentric Direction):** Steer by keeping the goal centered in body.
*   **The Conflict:** Prism glasses in VR (displace flow 10°).

![Locomotor Axis](assets/slide_13_img_2.png)
![VR Setup](assets/slide_14_img_1.png)
```

Replace both with:
```markdown
## Slide 11: Rule 2 - Heading and the Visual Control of Steering
### Perceiving Where We're Going and Getting There (Warren, 1988; Warren et al., 2001)

**Heading Perception:**
*   **Focus of Expansion (FOE):** The point from which all flow originates.
*   **Problem:** Eye movements disrupt the FOE on the retina.
*   **Result:** We can separate *Retinal Flow* (eye + move) from *Ambient Flow* (move only). Heading judgments are accurate to within 1°.

![Retinal vs Ambient Flow](assets/slide_11_img_2.png)
![Heading Data](assets/slide_12_img_1.png)

**Visual Control of Steering - The "Great Debate":**
*   **Hypothesis A (Optic Flow):** Steer by keeping FOE on the goal.
*   **Hypothesis B (Egocentric Direction):** Steer by keeping the goal centered in body.
*   **The Conflict:** Prism glasses in VR (displace flow 10°).

![Locomotor Axis](assets/slide_13_img_2.png)
![VR Setup](assets/slide_14_img_1.png)

> **Notes:** This combined slide shows both how we perceive our heading direction (FOE) and how we use visual information to steer. Warren's work demonstrates that we can accurately perceive heading even with eye movements, and the "Great Debate" tested whether we steer using optic flow or egocentric direction.
```

**Step 2: Commit**

```bash
git add active_work/Locomotion1_Slides/slides_merged.md
git commit -m "refactor(slides): combine Rules 2 and 3 into single Heading & Steering slide"
```

---

### Task 8: Move Kinetic Occlusion Slide After Combined Rule 2

**Files:**
- Modify: `active_work/Locomotion1_Slides/slides_merged.md`

**Step 1: Cut current Slide 4 (Kinetic Occlusion)**

Cut content:
```markdown
## Slide 4: Interactive Demo - Kinetic Occlusion
### Objects Defined by Motion

<div class="demo-container">
    <iframe src="demos/kinetic_occlusion/index.html" width="100%" height="600px" frameborder="0"></iframe>
</div>

> **Notes:** This demonstrates how objects can be perceived purely through motion and texture accretion/deletion at edges. Notice how depth and form emerge from movement alone - no static luminance boundaries required.
```

**Step 2: Insert after combined Rule 2 slide (Slide 11)**

Insert after the combined Heading & Steering slide.

**Step 3: Renumber slides**

After this move, the order should be:
- Slide 1: Title
- Slide 2: Diversity of Locomotion (images)
- Slide 3: Optical Flow Specificity Demo
- Slide 4: Ecological Context
- Slide 5: Core Problem
- Slide 6: Gibson's Rules
- Slide 7: Optic Flow Demo (embedded)
- Slide 8: Rule 1 - Visual Proprioception
- Slide 9: Refining Proprioception
- Slide 10: Rule 2 - Heading & Steering (combined)
- Slide 11: Kinetic Occlusion Demo (moved here)
- Slide 12: Adaptive Control Laws
- Slide 13: Rule 4 - Time-to-Contact
- Slide 14: Testing Tau
- Slide 15: Collision Severity
- Slide 16: Beyond Stationary Targets
- Slide 17: Summary

**Step 4: Commit**

```bash
git add active_work/Locomotion1_Slides/slides_merged.md
git commit -m "refactor(slides): move Kinetic Occlusion demo after Heading & Steering"
```

---

### Task 9: Update Slide 12 (Adaptive Control Laws) to Two-Column Layout

**Files:**
- Modify: `active_work/Locomotion1_Slides/slides_merged.md` (Slide 12, previously Slide 14)

**Step 1: Restructure content**

Current content:
```markdown
## Slide 12: Adaptive Control Laws
### It's Not "Either/Or"
*   **Sparse World:** We use Egocentric Direction (walk curved paths).
*   **Textured World:** We use Optic Flow (walk straight paths).
*   **Control Law:** $\dot{\phi} = -k (\beta + w \alpha)$
    *   We flexibly weight flow ($w$) based on environmental structure.

![Path Results](assets/slide_17_img_1.png)

> **Notes:** This is the key takeaway for Module 3. The visual system is an "Adaptive Controller." It doesn't use a single rigid rule; it combines information based on reliability.
```

Replace with two-column layout:
```markdown
## Slide 12: Adaptive Control Laws
### It's Not "Either/Or"

<div class="two-column">
    <div class="column-left">
        <img src="assets/slide_17_img_1.png" alt="Path Results">
    </div>
    <div class="column-right">
        <ul>
            <li><strong>Sparse World:</strong> We use Egocentric Direction (walk curved paths).</li>
            <li><strong>Textured World:</strong> We use Optic Flow (walk straight paths).</li>
            <li><strong>Control Law:</strong> $\dot{\phi} = -k (\beta + w \alpha)$
                <ul>
                    <li>We flexibly weight flow ($w$) based on environmental structure.</li>
                </ul>
            </li>
        </ul>
    </div>
</div>

> **Notes:** This is the key takeaway for Module 3. The visual system is an "Adaptive Controller." It doesn't use a single rigid rule; it combines information based on reliability.
```

**Step 2: Commit**

```bash
git add active_work/Locomotion1_Slides/slides_merged.md
git commit -m "feat(slides): convert Slide 12 to two-column layout with image left"
```

---

### Task 10: Rebuild HTML with /frontend-slides

**Files:**
- Modify: `active_work/Locomotion1_Slides/Module03_Lecture.html`

**Step 1: Use frontend-slides skill to rebuild**

Run: `@frontend-slides` skill with argument `slides_merged.md`

This will:
- Read slides_merged.md
- Generate complete HTML presentation
- Preserve all presenter mode features
- Apply CSS for new elements (locomotion-gallery, two-column, embedded demo styling)

**Step 2: Verify rebuild**

Run: `open active_work/Locomotion1_Slides/Module03_Lecture.html`
Expected:
- 17 slides (down from 19)
- Slide 2 shows image gallery
- Slide 3 shows flow specificity demo without wrapper
- Slide 7 shows embedded optic flow demo
- Slide 10 shows combined Heading & Steering content
- Slide 11 shows Kinetic Occlusion demo
- Slide 12 shows two-column layout

**Step 3: Test presenter mode**

Press 'P' key in browser
Expected: Presenter window opens with notes, timer, next slide preview

**Step 4: Test navigation**

- Arrow keys navigate slides
- Dots on right jump to slides
- Progress bar updates

**Step 5: Commit**

```bash
git add active_work/Locomotion1_Slides/Module03_Lecture.html
git commit -m "feat(slides): rebuild HTML with all revisions - 17 slides final"
```

---

### Task 11: Add CSS for New Elements

**Files:**
- Modify: `active_work/Locomotion1_Slides/Module03_Lecture.html` (CSS section)

**Step 1: Add locomotion-gallery styles**

Insert in CSS section:
```css
/* Locomotion Gallery Grid */
.locomotion-gallery {
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    gap: 2rem;
    margin: 2rem auto;
    max-width: 1000px;
}

.locomotion-gallery img {
    width: 100%;
    height: auto;
    border-radius: 8px;
    box-shadow: 0 4px 12px rgba(0, 0, 0, 0.1);
}

@media (max-width: 768px) {
    .locomotion-gallery {
        grid-template-columns: repeat(2, 1fr);
        gap: 1rem;
    }
}
```

**Step 2: Add two-column layout styles**

```css
/* Two-Column Layout */
.two-column {
    display: grid;
    grid-template-columns: 1fr 1fr;
    gap: 3rem;
    align-items: start;
}

.column-left img {
    width: 100%;
    height: auto;
    border-radius: 8px;
}

.column-right ul {
    font-size: clamp(1rem, 2vw, 1.25rem);
    line-height: 1.6;
}

@media (max-width: 768px) {
    .two-column {
        grid-template-columns: 1fr;
        gap: 1.5rem;
    }
}
```

**Step 3: Add embedded iframe styles**

```css
/* Embedded iframes (no demo-container wrapper) */
iframe[src*="optical_flow_specificity"] {
    width: 100%;
    height: 600px;
    border: none;
    border-radius: 8px;
    box-shadow: 0 10px 40px rgba(0, 0, 0, 0.1);
}
```

**Step 4: Verify styles**

Run: `open active_work/Locomotion1_Slides/Module03_Lecture.html`
Expected: All new layouts render correctly

**Step 5: Commit**

```bash
git add active_work/Locomotion1_Slides/Module03_Lecture.html
git commit -m "style(slides): add CSS for gallery, two-column, and embedded demo layouts"
```

---

### Task 12: Final Verification

**Files:**
- Verify: `active_work/Locomotion1_Slides/slides_merged.md`
- Verify: `active_work/Locomotion1_Slides/Module03_Lecture.html`
- Verify: `active_work/Locomotion1_Slides/demos/optic_flow_embedded/`

**Step 1: Verify slide count**

Run: `grep -c "^## Slide" active_work/Locomotion1_Slides/slides_merged.md`
Expected: `17`

**Step 2: Verify slide order**

Run: `grep "^## Slide" active_work/Locomotion1_Slides/slides_merged.md`
Expected output:
```
## Slide 1: Title
## Slide 2: The Diversity of Locomotion
## Slide 3: Interactive Demo - Optical Flow Specificity
## Slide 4: Ecological Context
## Slide 5: The Core Problem
## Slide 6: Gibson's Rules for Visual Guidance
## Slide 7: Interactive Demo - Optic Flow
## Slide 8: Rule 1 - Visual Proprioception
## Slide 9: Refining Proprioception
## Slide 10: Rule 2 - Heading and the Visual Control of Steering
## Slide 11: Interactive Demo - Kinetic Occlusion
## Slide 12: Adaptive Control Laws
## Slide 13: Rule 4 - Time-to-Contact
## Slide 14: Testing Tau
## Slide 15: Collision Severity
## Slide 16: Beyond Stationary Targets
## Slide 17: Summary
```

**Step 3: Verify demo files**

Run: `ls active_work/Locomotion1_Slides/demos/optic_flow_embedded/`
Expected: `index.html  script.js  style.css`

**Step 4: Open presentation and test all features**

Run: `open active_work/Locomotion1_Slides/Module03_Lecture.html`

Manual checks:
- [ ] Slide 2 shows 6 locomotion images in grid
- [ ] Slide 3 shows flow specificity demo (no title, no wrapper)
- [ ] Slide 7 shows embedded optic flow demo (no UI overlay)
- [ ] Test C/M keys control star speed in Slide 7
- [ ] Slide 10 shows combined Heading & Steering content
- [ ] Slide 11 shows Kinetic Occlusion demo
- [ ] Slide 12 shows two-column layout (image left, text right)
- [ ] Presenter mode works (press P)
- [ ] All 17 slides navigate correctly
- [ ] Progress bar updates
- [ ] Navigation dots work

**Step 5: Final commit**

```bash
git add -A
git commit -m "chore(slides): final verification - 17 slides with all revisions complete"
```

**Self-Review Checklist:**
- [ ] All user-requested changes implemented
- [ ] Slide count reduced from 19 to 17
- [ ] Images replace text on Slide 2
- [ ] Demos modified as requested (no overlays, correct controls)
- [ ] Slides reordered for better flow
- [ ] Combined content maintains clarity
- [ ] Two-column layout improves visual balance
- [ ] All demos functional
- [ ] Presenter mode works
- [ ] Navigation works
- [ ] CSS styles all new elements
- [ ] Git history is clean and descriptive

---

## Execution Notes

**Total Tasks:** 12
**Estimated Time:** 60-90 minutes
**Dependencies:**
- Task 2 must complete before Task 3
- Task 4 must complete before Task 8
- Task 7 must complete before Task 8
- All tasks 1-9 must complete before Task 10
- Task 10 must complete before Task 11

**Skills Required:**
- Markdown editing
- HTML/CSS/JavaScript modification
- File system operations
- Git version control
- @frontend-slides skill (Task 10)

**Testing:**
- Visual inspection of all slides
- Interactive testing of all demos
- Presenter mode verification
- Navigation verification
