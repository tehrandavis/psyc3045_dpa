# Demo 5 Avatar Toggle + Assignment Consolidation — Implementation Plan

> **For Claude:** REQUIRED SUB-SKILL: Use superpowers:executing-plans to implement this plan task-by-task.

**Goal:** Add projection lines to demo 5's unit circles, add a Metronomes/Fingers avatar mode toggle with inline label and callout swap, and consolidate the assignment by removing demo 4 and folding its Q1/Q2 into demo 5.

**Architecture:** Four independent tasks — two additive SVG changes to demo5, one HTML/JS toggle feature in demo5, one markdown edit to the assignment. No build system, no framework. All changes are purely additive except the assignment edit which removes a section.

**Tech Stack:** D3 v7 (CDN), vanilla JS, SVG, HTML/CSS, Markdown.

---

## Task 1: Demo 5 — Projection lines on unit circles

**File:** `_Workbench/demos/demo5_hkb_transition.html`

Identical to what was added to demo4 in Task 7 of the previous plan. `setupCircle()` and `updateCircle()` exist in demo5 with the same structure.

### Step 1: Add projection elements in `setupCircle()`

Find the `.arrow-line` append block in `setupCircle()`. It looks like:
```javascript
      svg.append("line")
        .attr("class", "arrow-line")
        .attr("x1", CX).attr("y1", CY)
        .attr("stroke", color)
        .attr("stroke-width", 2.5)
        .attr("stroke-linecap", "round")
        .attr("opacity", 0.7);
```

After its last `.attr()` line (still inside `setupCircle`), add:
```javascript
      // Vertical projection: shows sin(theta) = physical finger position
      svg.append("line")
        .attr("class", "proj-line")
        .attr("x1", CX).attr("y1", CY)
        .attr("x2", CX).attr("y2", CY)
        .attr("stroke", color)
        .attr("stroke-width", 1)
        .attr("stroke-dasharray", "3,2")
        .attr("opacity", 0.4);

      // Tick at the midline showing where the projection lands
      svg.append("line")
        .attr("class", "proj-tick")
        .attr("x1", CX).attr("y1", CY)
        .attr("x2", CX).attr("y2", CY)
        .attr("stroke", color)
        .attr("stroke-width", 2)
        .attr("opacity", 0.6);
```

### Step 2: Update projection lines in `updateCircle()`

In `updateCircle()`, find the final statement before the closing `}`. It is the phase arc update:
```javascript
      svg.select(".phase-arc").attr("d", arcD);
```

After that line (before the closing `}`), add:
```javascript
      // Vertical projection from dot to horizontal midline
      svg.select(".proj-line")
        .attr("x1", dotX).attr("y1", dotY)
        .attr("x2", dotX).attr("y2", CY);

      // Short horizontal tick at midline
      const tickLen = 6;
      svg.select(".proj-tick")
        .attr("x1", dotX - tickLen).attr("x2", dotX + tickLen)
        .attr("y1", CY).attr("y2", CY);
```

### Step 3: Verify
Read back the two modified sections to confirm insertions are correct.

### Step 4: Commit
```bash
cd /Users/tehrandavis/maestral && git add _Workbench/demos/demo5_hkb_transition.html && git commit -m "feat(demo5): projection lines on unit circles matching demo4"
```

---

## Task 2: Demo 5 — Avatar mode state variable

**File:** `_Workbench/demos/demo5_hkb_transition.html`

### Step 1: Add state variable

Find `const transitionTracker = { ... };` (added in the previous plan, around line 513). After its closing `};`, add:
```javascript
    // Avatar mode: "fingers" = homologous/mirror (sign=-1), "metronomes" = same-direction (sign=+1)
    let avatarMode = "fingers";
```

### Step 2: Update `tick()` to use avatarMode

Find these two lines in `tick()`:
```javascript
        updateAvatar(avSvg1, theta1, 1);
        updateAvatar(avSvg2, theta2, -1);
```

Replace with:
```javascript
        updateAvatar(avSvg1, theta1, 1);
        updateAvatar(avSvg2, theta2, avatarMode === "fingers" ? -1 : 1);
```

### Step 3: Verify
Read back the modified `tick()` lines to confirm.

### Step 4: Commit
```bash
cd /Users/tehrandavis/maestral && git add _Workbench/demos/demo5_hkb_transition.html && git commit -m "feat(demo5): avatarMode state variable controlling avatar2 swing direction"
```

---

## Task 3: Demo 5 — Toggle button, inline label, callout swap

**File:** `_Workbench/demos/demo5_hkb_transition.html`

### Step 1: Add toggle button and inline label to Finger Avatars card

Find the Finger Avatars card in the HTML. It looks like:
```html
        <div class="card">
          <div class="card-title">Finger Avatars</div>
          <div style="display: flex; justify-content: space-around; ...">
```

Replace the `<div class="card-title">Finger Avatars</div>` line with:
```html
          <div style="display:flex; justify-content:space-between; align-items:center; margin-bottom:8px;">
            <div class="card-title" style="margin-bottom:0;">Finger Avatars</div>
            <div style="display:flex; gap:4px;">
              <button class="quick-btn" id="btn-metronomes" onclick="setAvatarMode('metronomes')"
                style="padding:4px 10px; font-size:0.75rem;">Metronomes</button>
              <button class="quick-btn" id="btn-fingers" onclick="setAvatarMode('fingers')"
                style="padding:4px 10px; font-size:0.75rem; background:#2b6cb0; color:#fff; border-color:#2b6cb0;">Fingers</button>
            </div>
          </div>
          <p id="avatar-mode-label" style="font-size:0.76rem; color:#4a5568; margin-bottom:10px; line-height:1.4;">
            Homologous muscles co-activate — in-phase looks like mirror movement, fingers move toward and away together (&#8592;&#8594;).
          </p>
```

### Step 2: Add id to the first callout bullet

Find the "What to Notice" callout's first `<li>`. It currently reads:
```html
            <li><strong>The b/a Ratio</strong> governs ...
```

Give the first `<li>` an id. Change:
```html
            <li><strong>The b/a Ratio</strong>
```
to:
```html
            <li id="callout-avatar-bullet"><strong>The b/a Ratio</strong>
```

### Step 3: Add `setAvatarMode()` JS function

Find the `checkTransition()` function. After its closing `}`, add:
```javascript
    const AVATAR_TEXT = {
      fingers: {
        label: "Homologous muscles co-activate \u2014 in-phase looks like mirror movement, fingers move toward and away together (\u2190\u2192).",
        bullet: "<strong>Coordination mode: Fingers.</strong> In-phase (\u03c6 \u2248 0\u00b0): homologous muscles fire together; avatars mirror each other (\u2190\u2192). Anti-phase (\u03c6 \u2248 180\u00b0): one goes left while the other goes right (\u2192\u2190)."
      },
      metronomes: {
        label: "Coupled oscillators move in the same direction when in-phase \u2014 like two pendulums on the same shelf (\u2192\u2192).",
        bullet: "<strong>Coordination mode: Metronomes.</strong> In-phase (\u03c6 \u2248 0\u00b0): both oscillators swing the same direction (\u2192\u2192). Anti-phase (\u03c6 \u2248 180\u00b0): oscillators alternate direction (\u2192\u2190)."
      }
    };

    function setAvatarMode(mode) {
      avatarMode = mode;

      // Update label
      document.getElementById("avatar-mode-label").textContent = AVATAR_TEXT[mode].label;

      // Update callout bullet
      document.getElementById("callout-avatar-bullet").innerHTML = AVATAR_TEXT[mode].bullet;

      // Update button highlight
      document.getElementById("btn-fingers").style.background   = mode === "fingers"    ? "#2b6cb0" : "";
      document.getElementById("btn-fingers").style.color        = mode === "fingers"    ? "#fff"    : "";
      document.getElementById("btn-fingers").style.borderColor  = mode === "fingers"    ? "#2b6cb0" : "";
      document.getElementById("btn-metronomes").style.background  = mode === "metronomes" ? "#2b6cb0" : "";
      document.getElementById("btn-metronomes").style.color       = mode === "metronomes" ? "#fff"    : "";
      document.getElementById("btn-metronomes").style.borderColor = mode === "metronomes" ? "#2b6cb0" : "";
    }
```

### Step 4: Verify
Read back: the avatar card HTML, the callout `<li>` id, and the `setAvatarMode` function. Confirm the unicode escapes and id references match.

### Step 5: Commit
```bash
cd /Users/tehrandavis/maestral && git add _Workbench/demos/demo5_hkb_transition.html && git commit -m "feat(demo5): Metronomes/Fingers toggle with inline label and callout swap"
```

---

## Task 4: Assignment — Remove demo 4, fold Q1/Q2 into demo 5

**File:** `_Workbench/Demo_Exploration_Assignment.md`

### Step 1: Read the current file
Read `/Users/tehrandavis/maestral/_Workbench/Demo_Exploration_Assignment.md` in full to see the exact current text before editing.

### Step 2: Remove the Demo 4 section entirely
Delete from:
```
## Demo 4 — Relative Phase Visualizer
```
through the end of its last `---` separator (the one before Demo 5 begins). The Demo 4 section includes the heading, **File** line, **What to do** block, and **Log entry prompts** block.

### Step 3: Add Q4 and Q5 to the Demo 5 section
Find the Demo 5 log entry prompts block. It currently ends at Q3 (hysteresis). After Q3, add:

```markdown
4. What does the unit circle represent? Describe what the dot on the rim and the arc are telling you about each finger's movement.

5. Compare the relative phase time series for the **In-phase** and **Anti-phase** reset states: both show roughly flat lines, but at different values. What does a flat line indicate about the coordination? What would a non-flat line indicate?
```

### Step 4: Update "respond to 2" → "respond to 3"
Find in the Demo 5 section:
```
### Log entry prompts (respond to 2)
```
Change to:
```
### Log entry prompts (respond to 3)
```

### Step 5: Update submission instructions
Find:
```
Post your log to the **Week 7 Discussion Board** as a single reply with all three entries.
```
Change to:
```
Post your log to the **Week 7 Discussion Board** as a single reply with both entries.
```

### Step 6: Verify
Read back the full file to confirm: Demo 4 is gone, Demo 5 has 5 prompts and says "respond to 3", submission says "both entries".

### Step 7: Commit
```bash
cd /Users/tehrandavis/maestral && git add _Workbench/Demo_Exploration_Assignment.md && git commit -m "docs: remove demo4, fold Q1/Q2 into demo5 section, update submission instructions"
```

---

## Final verification checklist

**Demo 5:**
- [ ] Projection lines visible on both unit circles, sweeping up/down with oscillator
- [ ] "Fingers" button highlighted blue by default
- [ ] In Fingers mode: in-phase avatars move in opposite visual directions (←→)
- [ ] In Metronomes mode: in-phase avatars move in same visual direction (→→)
- [ ] Inline label updates on toggle
- [ ] Callout first bullet updates on toggle

**Assignment:**
- [ ] No Demo 4 section present
- [ ] Demo 5 has Q1–Q5
- [ ] "respond to 3" in Demo 5 heading
- [ ] Submission says "both entries"
