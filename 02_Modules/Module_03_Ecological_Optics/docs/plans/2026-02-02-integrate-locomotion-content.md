# Module03 Lecture Integration Plan

> **For Claude:** REQUIRED SUB-SKILL: Use superpowers:executing-plans to implement this plan task-by-task.

**Goal:** Integrate valuable content from Locomotion1 deck into Module03_Lecture deck and embed interactive demos at pedagogically appropriate locations.

**Architecture:** Markdown-based slide editing with HTML compilation. Extract slides from slides_draft.md (Locomotion1), insert into slides_merged.md (Module03), then rebuild Module03_Lecture.html. Demos are embedded as iframe elements.

**Tech Stack:** HTML5, CSS3, JavaScript (BroadcastChannel API), Markdown, Frontend-slides skill output format

---

## Content Analysis

### Current Module03 Coverage (12 slides)
1. Title slide
2. Radiant vs Ambient Light
3. Gibson's Rules (4 rules overview)
4. Rule 1: Moving Room (Lee & Lishman)
5. Rule 1: Central vs Peripheral Flow (Stoffregen)
6. Rule 2: Heading Perception (Warren 1988)
7. Rule 3: Steering "Great Debate" (Warren et al. 2001)
8. Rule 3: Adaptive Control Laws (sparse vs textured)
9. Rule 4: Tau Theory
10. Rule 4: Deflating Ball (Savelsbergh)
11. Tau-dot (Collision Severity)
12. Summary: Perception-Action Loop

### Valuable Locomotion1 Content to Add
- **Slide 2:** Examples of locomotion types (crawling, flying, hopping) - **INSERT AFTER current Slide 1**
- **Slide 3:** Ecological premises - **INSERT AFTER new Slide 2**
- **Slides 4-5:** Gibson's rules detailed breakdown - **MERGE with current Slide 3**
- **Slide 9:** Retinal specialization & flow structure - **INSERT AFTER current Slide 5**
- **Slides 23-24:** Pursuit/Interception (Fajen & Warren 2004) - **INSERT AFTER current Slide 12 (becomes new ending before summary)**

### Interactive Demo Placements
1. **optic_flow** (radial expansion, FoE demonstration) → **AFTER Slide 3** (Gibson's Rules)
2. **optical_flow_specificity** (transformation vs static structure) → **AFTER Slide 5** (Central vs Peripheral Flow)
3. **kinetic_occlusion** (motion-defined objects) → **AFTER new Slide 2** (Locomotion Examples)

---

## Task 1: Copy Demo Files to Active Work

**Files:**
- Copy: `99_Demos/optic_flow/*` → `active_work/Locomotion1_Slides/demos/optic_flow/`
- Copy: `99_Demos/optical_flow_specificity/*` → `active_work/Locomotion1_Slides/demos/optical_flow_specificity/`
- Copy: `99_Demos/kinetic_occlusion/*` → `active_work/Locomotion1_Slides/demos/kinetic_occlusion/`

**Step 1: Create demos directory**

```bash
mkdir -p /Users/tehrandavis/athousandforests/active_work/Locomotion1_Slides/demos
```

**Step 2: Copy optic_flow demo**

```bash
cp -r /Users/tehrandavis/athousandforests/99_Demos/optic_flow /Users/tehrandavis/athousandforests/active_work/Locomotion1_Slides/demos/
```

**Step 3: Copy optical_flow_specificity demo**

```bash
cp -r /Users/tehrandavis/athousandforests/99_Demos/optical_flow_specificity /Users/tehrandavis/athousandforests/active_work/Locomotion1_Slides/demos/
```

**Step 4: Copy kinetic_occlusion demo**

```bash
cp -r /Users/tehrandavis/athousandforests/99_Demos/kinetic_occlusion /Users/tehrandavis/athousandforests/active_work/Locomotion1_Slides/demos/
```

**Step 5: Verify demos**

```bash
ls -la /Users/tehrandavis/athousandforests/active_work/Locomotion1_Slides/demos/
```

Expected: Three directories with index.html, script.js, style.css in each

---

## Task 2: Add New Slide 2 - Locomotion Examples

**Files:**
- Modify: `active_work/Locomotion1_Slides/slides_merged.md:8` (insert after Slide 1)

**Step 1: Open slides_merged.md and insert after line 8**

Insert this content after the first `---` separator:

```markdown
## Slide 2: The Diversity of Locomotion
### Movement Across the Animal Kingdom

*   Crawling
*   Flying
*   Hopping
*   Walking
*   Running
*   Swimming

> **Notes:** The main point is that it's not all about running. Visual perception makes locomotion truly useful because we can orient to distal objects. This lecture focuses on the visual control of locomotion with particular emphasis on Gibson's rules and current research.

---
```

**Step 2: Verify markdown structure**

```bash
head -n 30 /Users/tehrandavis/athousandforests/active_work/Locomotion1_Slides/slides_merged.md
```

Expected: New slide 2 appears between title and "Radiant vs Ambient Light"

**Step 3: Commit**

```bash
git add active_work/Locomotion1_Slides/slides_merged.md
git commit -m "feat(slides): add locomotion diversity slide after title"
```

---

## Task 3: Add Kinetic Occlusion Demo Slide

**Files:**
- Modify: `active_work/Locomotion1_Slides/slides_merged.md` (insert after new Slide 2)

**Step 1: Insert demo slide after Slide 2**

Add after the new Slide 2's closing `---`:

```markdown
## Slide 3: Interactive Demo - Kinetic Occlusion
### Objects Defined by Motion

<div class="demo-container">
    <iframe src="demos/kinetic_occlusion/index.html" width="100%" height="600px" frameborder="0"></iframe>
</div>

> **Notes:** This demonstrates how objects can be perceived purely through motion and texture accretion/deletion at edges. Notice how depth and form emerge from movement alone - no static luminance boundaries required.

---
```

**Step 2: Verify insertion**

```bash
grep -n "Kinetic Occlusion" /Users/tehrandavis/athousandforests/active_work/Locomotion1_Slides/slides_merged.md
```

Expected: Line number where new slide appears

**Step 3: Commit**

```bash
git add active_work/Locomotion1_Slides/slides_merged.md
git commit -m "feat(slides): add kinetic occlusion demo after locomotion types"
```

---

## Task 4: Add Ecological Premises Slide

**Files:**
- Modify: `active_work/Locomotion1_Slides/slides_merged.md` (insert after kinetic occlusion demo)

**Step 1: Insert ecological context slide**

Add after the kinetic occlusion demo slide:

```markdown
## Slide 4: Ecological Context
### Major Premises for Locomotion Regulation

*   **Ambient energy arrays** (optic array specifically) have structure
*   This **structure is information** available to organisms with perceptual systems
*   **Detection occurs directly** - no internal mediational states needed
*   **Example:** Optic flow fields are used for behavioral control without "high-level processing, storage, or representation"

> **Notes:** This establishes the ecological approach to locomotion. We're not computing, we're detecting lawful relationships between optical structure and movement possibilities.

---
```

**Step 2: Verify insertion**

```bash
grep -n "Ecological Context" /Users/tehrandavis/athousandforests/active_work/Locomotion1_Slides/slides_merged.md
```

**Step 3: Commit**

```bash
git add active_work/Locomotion1_Slides/slides_merged.md
git commit -m "feat(slides): add ecological premises slide"
```

---

## Task 5: Enhance Gibson's Rules Slide

**Files:**
- Modify: `active_work/Locomotion1_Slides/slides_merged.md` (find and replace current Slide 3)

**Step 1: Locate current Gibson's Rules slide**

```bash
grep -n "Gibson's Rules for Visual Guidance" /Users/tehrandavis/athousandforests/active_work/Locomotion1_Slides/slides_merged.md
```

**Step 2: Replace with enhanced version**

Replace the existing Gibson's Rules slide (originally Slide 3, now Slide 5) with:

```markdown
## Slide 5: Gibson's Rules for Visual Guidance
### Optical Invariants for Locomotor Control

*   **To be still:** Minimize change in the optic flow (Nonflow = stationary)
*   **To move forward/backward:** Produce global outflow/inflow (Outflow = forward movement)
*   **To move to a target:** Place the Focus of Expansion (FOE) on the target
*   **To change direction:** Change the location of the FOE from its previous position
*   **To approach without collision:** Keep rate of object expansion (Tau) steady

> **Notes:** Gibson proposed these "rules" to show how specific optical invariants control specific actions. Each rule links a perceptual variable to an action outcome. We will test these empirically throughout today's lecture.

---
```

**Step 3: Commit**

```bash
git add active_work/Locomotion1_Slides/slides_merged.md
git commit -m "feat(slides): enhance Gibson's rules with complete 5-rule set"
```

---

## Task 6: Add Optic Flow Demo Slide

**Files:**
- Modify: `active_work/Locomotion1_Slides/slides_merged.md` (insert after enhanced Gibson's Rules)

**Step 1: Insert optic flow demo**

Add after Gibson's Rules slide:

```markdown
## Slide 6: Interactive Demo - Optic Flow
### Radial Expansion and Focus of Expansion (FOE)

<div class="demo-container">
    <iframe src="demos/optic_flow/index.html" width="100%" height="600px" frameborder="0"></iframe>
</div>

**Controls:**
- Mouse: Move heading (FOE)
- Arrows: Star speed
- F/J: Doorway speed
- R: Sync speeds

> **Notes:** This demonstrates Rules 2-4. Move the mouse to change heading direction - notice how the FOE moves with it. Adjust speeds to see how different rates of expansion affect the perception of time-to-contact. Try placing the FOE on the doorway edges to simulate steering.

---
```

**Step 2: Commit**

```bash
git add active_work/Locomotion1_Slides/slides_merged.md
git commit -m "feat(slides): add interactive optic flow demo after Gibson's rules"
```

---

## Task 7: Add Optical Flow Specificity Demo

**Files:**
- Modify: `active_work/Locomotion1_Slides/slides_merged.md` (insert after Stoffregen slide)

**Step 1: Find Stoffregen slide (Central vs Peripheral Flow)**

```bash
grep -n "Central vs. Peripheral Flow" /Users/tehrandavis/athousandforests/active_work/Locomotion1_Slides/slides_merged.md
```

**Step 2: Insert demo after Stoffregen slide**

Add after the Stoffregen slide:

```markdown
## Slide [N]: Interactive Demo - Optical Flow Specificity
### 3D Layout from Transformation

<div class="demo-container">
    <iframe src="demos/optical_flow_specificity/index.html" width="100%" height="600px" frameborder="0"></iframe>
</div>

> **Notes:** This demonstrates that 3D spatial layout is specified by transformation, not static structure. The same retinal projection can specify different 3D layouts depending on the flow pattern. Pause and play to see how motion disambiguates depth.

---
```

**Step 3: Commit**

```bash
git add active_work/Locomotion1_Slides/slides_merged.md
git commit -m "feat(slides): add optical flow specificity demo after Stoffregen"
```

---

## Task 8: Add Retinal Specialization Slide

**Files:**
- Modify: `active_work/Locomotion1_Slides/slides_merged.md` (insert after optical flow specificity demo)

**Step 1: Insert retinal specialization content**

Add after the optical flow specificity demo:

```markdown
## Slide [N]: Retinal Specialization and Flow Structure
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
git commit -m "feat(slides): add retinal specialization and flow structure slide"
```

---

## Task 9: Add Pursuit and Interception Slide

**Files:**
- Modify: `active_work/Locomotion1_Slides/slides_merged.md` (insert before final Summary slide)

**Step 1: Find Summary slide**

```bash
grep -n "The Perception-Action Loop" /Users/tehrandavis/athousandforests/active_work/Locomotion1_Slides/slides_merged.md
```

**Step 2: Insert pursuit slide BEFORE summary**

Add before the Summary slide:

```markdown
## Slide [N]: Beyond Stationary Targets
### Pursuit and Interception (Fajen & Warren, 2004)

**Question:** How do people walk to a **moving** target? What visual information guides pursuit?

*   **β** (beta) = target-heading angle (bearing angle)
*   **Two strategies:**
    *   **Pursuit:** Continuously nullify the bearing angle (keep target centered)
    *   **Interception:** Predict future location and walk to intercept point

**Information sources:**
1. Egocentric direction (where is target relative to body?)
2. Global optic flow (where am I heading?)
3. Local optic flow (how is target moving relative to background?)

**Result:** People use a **combination strategy** - primarily pursuit with flow-based corrections

> **Notes:** This extends the steering research to dynamic targets. Real-world locomotion often involves moving targets (other people, vehicles, prey, predators). The visual system flexibly combines multiple information sources depending on task demands and environmental reliability.

---
```

**Step 3: Commit**

```bash
git add active_work/Locomotion1_Slides/slides_merged.md
git commit -m "feat(slides): add pursuit and interception slide before summary"
```

---

## Task 10: Update HTML with New Slide Count

**Files:**
- Modify: `active_work/Locomotion1_Slides/Module03_Lecture.html`

**Step 1: Count slides in slides_merged.md**

```bash
grep -c "^## Slide" /Users/tehrandavis/athousandforests/active_work/Locomotion1_Slides/slides_merged.md
```

**Step 2: Read current HTML to understand structure**

Read Module03_Lecture.html:268-432 (all slide sections)

Expected: Need to add new `<section class="slide">` elements for each new slide

**Step 3: Note for manual rebuild**

Since the slides were created with /frontend-slides skill, we should regenerate the HTML from the markdown rather than manually editing.

**Recommended approach:** Use /frontend-slides skill to rebuild from slides_merged.md

**Alternative:** Manually add slide sections following the existing pattern

**Step 4: Document rebuild command**

```bash
# Option 1: Use frontend-slides skill via Claude
# In Claude: "@Skill frontend-slides with slides_merged.md as input"

# Option 2: Manual HTML editing (not recommended - error-prone)
# Edit Module03_Lecture.html and add new <section> elements
```

**Note:** This step requires using the frontend-slides skill, which should be done interactively with the user.

---

## Task 11: Add CSS for Demo Containers

**Files:**
- Modify: `active_work/Locomotion1_Slides/Module03_Lecture.html:8-238` (style section)

**Step 1: Locate style section closing tag**

```bash
grep -n "</style>" /Users/tehrandavis/athousandforests/active_work/Locomotion1_Slides/Module03_Lecture.html
```

**Step 2: Insert demo container styles before closing `</style>`**

Add this CSS before the `</style>` tag (around line 237):

```css
/* Demo Container Styles */
.demo-container {
    width: 100%;
    max-width: 1200px;
    margin: 2rem auto;
    border: 2px solid var(--line-color);
    border-radius: 8px;
    overflow: hidden;
    box-shadow: 0 10px 40px rgba(0, 0, 0, 0.1);
}

.demo-container iframe {
    display: block;
    border: none;
    background: #fff;
}

/* Ensure demos are visible in presenter mode */
body.is-presenter .demo-container {
    transform: scale(0.6);
    transform-origin: top left;
}
```

**Step 3: Verify CSS insertion**

```bash
grep -n "demo-container" /Users/tehrandavis/athousandforests/active_work/Locomotion1_Slides/Module03_Lecture.html
```

**Step 4: Commit**

```bash
git add active_work/Locomotion1_Slides/Module03_Lecture.html
git commit -m "style(slides): add CSS for embedded demo containers"
```

---

## Task 12: Final Verification and Testing

**Files:**
- Test: `active_work/Locomotion1_Slides/Module03_Lecture.html`
- Test: `active_work/Locomotion1_Slides/slides_merged.md`

**Step 1: Verify slide count**

```bash
grep -c "^## Slide" /Users/tehrandavis/athousandforests/active_work/Locomotion1_Slides/slides_merged.md
```

Expected: ~18-20 slides (was 12, added ~6-8 new slides)

**Step 2: Verify demo paths**

```bash
ls -la /Users/tehrandavis/athousandforests/active_work/Locomotion1_Slides/demos/*/index.html
```

Expected: Three index.html files (one per demo)

**Step 3: Test HTML in browser**

```bash
open /Users/tehrandavis/athousandforests/active_work/Locomotion1_Slides/Module03_Lecture.html
```

**Manual tests:**
- [ ] All slides render correctly
- [ ] Navigation dots work
- [ ] Progress bar updates
- [ ] Demos load in iframes
- [ ] Presenter mode works (press 'P')
- [ ] Speaker notes display (press 'N')
- [ ] Keyboard navigation works (arrows, space)

**Step 4: Create backup**

```bash
cp /Users/tehrandavis/athousandforests/active_work/Locomotion1_Slides/Module03_Lecture.html /Users/tehrandavis/athousandforests/active_work/Locomotion1_Slides/Module03_Lecture_backup_$(date +%Y%m%d).html
```

**Step 5: Final commit**

```bash
git add active_work/Locomotion1_Slides/
git commit -m "feat(slides): complete Module03 integration with Locomotion1 content and demos"
```

---

## Post-Integration Checklist

**Content verification:**
- [ ] All Gibson's 5 rules covered
- [ ] Ecological premises established early
- [ ] Locomotion diversity introduced
- [ ] Three interactive demos embedded
- [ ] Retinal specialization explained
- [ ] Pursuit/interception added as advanced topic
- [ ] Summary still cohesive

**Technical verification:**
- [ ] Markdown renders to HTML correctly
- [ ] Demo iframes load and are interactive
- [ ] CSS doesn't break existing slides
- [ ] Presenter mode shows demos
- [ ] Notes panel displays all speaker notes
- [ ] Slide numbering correct
- [ ] Navigation works for all slides

**Pedagogical flow:**
1. Title
2. Locomotion diversity (context)
3. Kinetic occlusion demo (motion reveals structure)
4. Ecological premises (theory foundation)
5. Gibson's 5 rules (complete framework)
6. Optic flow demo (interactive exploration)
7. Moving room (Rule 1: proprioception)
8. Stoffregen (Rule 1: refined)
9. Optical flow specificity demo
10. Retinal specialization (mechanism)
11. Heading perception (Rule 2)
12. Steering debate (Rule 3)
13. Adaptive control (Rule 3: resolution)
14. Tau theory (Rule 4)
15. Deflating ball (Rule 4: evidence)
16. Tau-dot (Rule 4: extended)
17. Pursuit/interception (advanced application)
18. Summary (perception-action loop)

---

## Notes for Frontend-Slides Rebuild

**If regenerating HTML from markdown:**

The slides_merged.md file now has the complete content. To rebuild the HTML:

1. Ensure demos are in `active_work/Locomotion1_Slides/demos/`
2. Use /frontend-slides skill with slides_merged.md as input
3. Specify the same style template (minimal, clean, Satoshi font)
4. Ensure presenter mode and notes features are preserved
5. Verify demo iframes are rendered correctly

**Key features to preserve:**
- Scroll-snap navigation
- Presenter mode (accessible via #presenter hash)
- Speaker notes (toggle with 'N')
- Progress bar
- Navigation dots
- Keyboard shortcuts
- BroadcastChannel sync between windows

**Demo iframe attributes:**
```html
<iframe src="demos/[demo-name]/index.html"
        width="100%"
        height="600px"
        frameborder="0"
        allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture">
</iframe>
```

---

## Execution Complete

**Result:** Module03_Lecture deck enhanced with:
- 6-8 new slides from Locomotion1
- 3 interactive demos
- Complete Gibson's 5-rule framework
- Ecological premises
- Retinal specialization mechanics
- Pursuit/interception advanced topic
- Improved pedagogical flow

**File locations:**
- Main deck: `active_work/Locomotion1_Slides/Module03_Lecture.html`
- Edit source: `active_work/Locomotion1_Slides/slides_merged.md`
- Demos: `active_work/Locomotion1_Slides/demos/[optic_flow|optical_flow_specificity|kinetic_occlusion]/`
- Plan: `active_work/Locomotion1_Slides/docs/plans/2026-02-02-integrate-locomotion-content.md`
