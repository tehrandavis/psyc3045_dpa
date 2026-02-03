# Session Log: Week 1 Thursday Lab Design
**Date:** 2026-01-15
**Agent:** Claude (Production Editor)
**Project:** Dynamics of Perception & Action (Spring 2026)
**Focus:** Design Week 1 Thursday "Logic Trap" session and materials

---

## Objective

Design the lesson plan and slide deck for Week 1, Thursday (Jan 16) - a 70-minute seminar with 5 students. This is a "Primer" session whose goal is to create a "Need to Know" for the weekend reading (Blau & Wagman Ch 1-2).

**The Rub:** Tuesday's class already covered the "what" of the Traditional Story (Standard Story, 5 Senses, Poverty of Stimulus, Computer vs. Organism). Thursday must be distinct - not a re-lecture, but an experiential "stress test" that forces students to discover why the Traditional Assumptions logically fail.

---

## Key Decisions

### Pedagogical Strategy
- **Not:** Re-teaching the 8 assumptions or abstract philosophy
- **Instead:** "Logic Trap" session where students act out the role of the Central Executive and discover *for themselves* why it fails
- Students should leave with **questions**, not answers - the reading will provide the framework
- Anchor new material in familiar Intro S&P content, then show how it leads to unnoticed traps

### Structure
**Pattern per assumption:**
1. Slide 1: "What You Learned in Intro S&P" (familiar content)
2. Slide 2: "The Hidden Assumption" (name it explicitly)
3. Slide 3: "The Trap" (why this breaks down)
4. Activity/Demo (experience the problem)

### Assumptions Covered
Prioritized 4-5 core traps from the 8 Traditional Assumptions:

| Assumption | Intro S&P Connection | Activity |
|------------|---------------------|----------|
| **4. Local Causality** | Transduction (light touches receptor) | Teleporting Chair |
| **Outness Problem** (subset of 4/5) | Proximal vs. distal stimulus | Eye-press demo / Cane demo |
| **6. Poverty of Stimulus** | Depth cues, size/shape constancy | Walking professor, Beuchet Chair, hand demo |
| **7. Unconscious Inference** | Gregory's constructivism, top-down processing | Duck-rabbit, Infinite Rulebook dialogue |
| **6b. Processing Time** | Reaction time experiments | Fastball math, ball toss |

### Activities Design
All activities are **zero-prep or minimal-prep** (verbal/Socratic with optional simple props):
- **Teleporting Chair:** Close eyes, prove chair exists (verbal)
- **Eye-press/Cane demo:** Experience outness problem (quick physical demo)
- **Walking professor:** Instructor walks away, retinal image shrinks (demonstration)
- **Beuchet Chair:** Show illusion via slides (images)
- **Ambiguous images:** Duck-rabbit, cone/cylinder/sphere (slides)
- **Infinite Rulebook:** Socratic dialogue pushing on "what rule applies that rule?"
- **Ball toss:** Crumpled paper ball catch (only required prop)

---

## Deliverables Created

### 1. Week_1_Thursday_Lab.qmd (32 slides)
**Location:** `20_Teaching/Dynamics of Perception & Action/lecture_slides/Week_1_Thursday_Lab.qmd`

**Structure:**
- Opening: Today's Goal (2 slides)
- Part 1: Local Causality & Outness Problem (7 slides + activities)
- Part 2: Poverty of Stimulus (7 slides + activities)
- Part 3: Unconscious Inference (8 slides + activities)
- Part 4: Processing Time (6 slides + activity)
- Summary: Chain of Assumptions + Traps (2 slides)
- Wrap-up: Escape Hatch + Reading Assignment (3 slides)

**Key Features:**
- Styled boxes (intro-box, assumption-box, trap-box, activity-box) for visual organization
- Explicit connections to Intro S&P content before introducing traps
- Activities embedded as prompts within slides
- Cliffhanger ending: "If not local causality, then what? Gibson's answer: Direct Perception."

### 2. Week_1_Thursday_Instructor_Guide.md (Detailed script)
**Location:** `20_Teaching/Dynamics of Perception & Action/assistant/Week_1_Thursday_Instructor_Guide.md`

**Contents:**
- **Session Overview:** Pedagogical goals, key insights, what this is NOT
- **Materials Needed:** Props list (only crumpled paper ball required)
- **Detailed Timeline:** Minute-by-minute breakdown (70 min total)
  - 0:00-0:15: Field Notes
  - 0:15-0:27: Local Causality + Outness
  - 0:27-0:39: Poverty of Stimulus
  - 0:39-0:51: Unconscious Inference
  - 0:51-0:63: Processing Time
  - 0:63-0:70: Wrap-up + Reading
- **Verbatim prompts** for each activity with expected responses and "push" questions
- **Contingency notes:** What to cut if running long/short, how to handle non-engagement
- **Post-session reflection prompts**

---

## Key Insights & Rationale

### Why "Logic Trap" vs. "8 Assumptions Lecture"
The goal is **phenomenological** - students should *feel* the problems before they have vocabulary. The reading (Blau & Wagman) will provide the theoretical framework to understand what they experienced. This creates a "need to know" that makes the reading relevant and memorable.

### Why These Specific Activities
Each activity is designed to create **cognitive dissonance**:
- **Teleporting Chair:** Forces solipsism (logical endpoint of local causality)
- **Outness Problem:** "Why is experience 'out there' when stimulation is 'in here'?"
- **Walking Professor:** Experience size constancy, then question the rule
- **Infinite Rulebook:** Feel the regress (rules need rules need rules...)
- **Ball Toss:** Do something "impossible" according to the model

### Integration with Course Operating Rhythm
- **Thursday (Primer):** Experience the mystery, create questions
- **Weekend (Bridge):** Read Blau & Wagman Ch 1-2 for explanations
- **Tuesday (Reveal):** Debrief quiz, synthesize theory + experience, introduce Gibson

---

## Technical Notes

### Image Assets Needed
The slides reference several images in `lecture_slides/assets/`:
- `size_distance_ambiguity.png` - multiple objects → same retinal image
- `beuchet_chair.png` - illusion view
- `beuchet_chair_reveal.png` - side view showing scattered parts
- `homunculus.png` - little man diagram
- `duck_rabbit.png` - ambiguous figure
- `cone_cylinder_sphere.png` - shapes → circular retinal image

**Fallback:** These can be described verbally or sketched on whiteboard if images aren't available. The Socratic dialogue carries the session.

### User Modifications
After initial creation, user modified the .qmd to:
- Add list of 8 assumptions upfront (Slide 2)
- Replace ski video example for local causality
- Add pool table image
- Replace eye-press with "cane demo" for outness
- Add linear perspective image
- Modify Beuchet Chair section
- Add "Abduction" and "Literal Rule Problem" slides with videos
- Restructure processing time section with video examples
- Add "Real World Challenge" homework for Tuesday

---

## Action Items for Next Session

**For Tuesday Prep:**
- Review Field Notes from today's session
- Create quiz testing comprehension of B&W Ch 1-2 (focus on 8 assumptions + root cause analysis)
- Prepare Tuesday discussion to connect Thursday experiences to B&W framework
- Be ready to introduce Gibson's "Direct Perception" as the alternative

**Materials to Gather:**
- Render .qmd to HTML before class
- Prepare crumpled paper ball for toss activity
- Optional: Print duck-rabbit or other ambiguous figures if students struggle with projection

---

## Reflections

This session demonstrates the power of **experience-before-theory** pedagogy. Rather than lecturing about why Traditional Assumptions fail, students will:
1. Try to make them work (be the Central Executive)
2. Hit the logical walls themselves
3. Leave frustrated/curious (the "itch")
4. Read the theory as the "scratch"

The design respects the constraint of minimal prep time while maximizing active learning in a small seminar format.
