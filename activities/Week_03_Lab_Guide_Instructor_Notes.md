# Week 3 Lab Guide: Instructor Notes

**Activity:** Action vs. Perception (Ebbinghaus Illusion Suite)
**Date:** Tuesday, January 27, 2026
**Duration:** 15-20 minutes total

---

## Overview

This lab uses **one combined packet** (`Week_03_Lab_Packet_Ebbinghaus_Suite.md`) containing two sequential activities that reveal a dissociation between perception and action:

1. **Activity 1: Perception Task** (5-7 min) - Establish the illusion
2. **Activity 2: Fitts Task** (10-12 min) - Test continuous movement performance

**Pedagogical Goal:** Students discover that conscious perception (fooled by illusion) and motor control (largely immune to illusion) operate on different information sources. This sets up the critical discussion in Question 1 about "task specificity" vs. "two visual systems."

**Format:** Students receive one complete packet at the start of class and work through it sequentially, building observations and reflections that culminate in the Final Synthesis section.

---

## Materials Needed

### For Activity 1 (Computerized Test):
- **Computer/laptop** with Python installed
- **Python script:** `99_Demos/ebbinghaus_illusion/ebbinghaus_illusion.py`
- **Projector** (optional - for demonstration)
- Pygame library installed (`pip install pygame`)

### For Activity 2 (Fitts):
- **Tapping surface** with Ebbinghaus targets printed/mounted
  - Targets separated by 20 cm (center-to-center)
  - Central circles ~3 cm diameter
- **Stylus or pointer** (or use index finger)
- **Stopwatch** (or phone timer)

---

## Timing & Flow

| Task                         | Duration  | Key Outcome                                                  |
| ---------------------------- | --------- | ------------------------------------------------------------ |
| **Activity 1: Perception**   | 5-7 min   | Establish that illusion works for conscious judgment         |
| **Activity 2: Fitts**        | 10-12 min | Show that continuous action is immune to illusion            |
| **Transition to Discussion** | 2 min     | "How did your movements stay accurate?" → Move to Question 1 |

**Total:** 15-20 minutes

---

## Activity 1: Computerized Susceptibility Test (5-7 min)

### Setup Required:
- **Computer/laptop** running the Python script (`ebbinghaus_illusion.py`)
- **Projector** (optional - for demonstrating first)
- Students can run individually or in pairs

### Procedure:

1. **Introduce the Test** (1 min)
   - "You'll complete a computerized test that measures your susceptibility to the Ebbinghaus illusion."
   - "The computer will track how often the surrounding context fools you, even when circles are the same size."
   - Demonstrate controls: F (left bigger), J (right bigger), Space (equal)

2. **Students Make Predictions** (1 min)
   - Complete Section 2: Personal and class predictions
   - "How susceptible do you think you'll be?"

3. **Run the Test** (3-4 min)
   - Students complete the computerized test
   - Multiple trials with varying combinations
   - Computer calculates susceptibility score at the end

4. **Record Results** (1 min)
   - Students record their susceptibility score in Section 3
   - Collect scores on board for class average (Section 4)

### Expected Results:
- **Class Average:** Typically 50-70% susceptibility
- **Range:** Wide variation (some students 20%, others 90%)
- **Key insight:** Even knowing it's an illusion doesn't prevent it

### Teaching Notes:
- **Technical backup:** If computer issues, can use static displays and manual judgment (but lose the quantitative score)
- **Emphasize:** "Even experts who study this illusion are still fooled by it!"
- **Set up the puzzle (Section 6):** "Your score shows the illusion worked. So what happens when you try to TAP on the circles repeatedly and rapidly?"

---

## Activity 2: Fitts Task (10-12 min)

### Procedure:
1. **Demonstrate** (1-2 min)
   - Show the oscillatory tapping task
   - Emphasize: "Fast and accurate—like a drummer keeping time."

2. **Student Trials** (7-9 min)
   - Students work in pairs (performer and timer)
   - Each student completes 6 conditions (3 contexts × 2 sizes), 3 trials per condition
   - Timer records:
     - Total movement time
     - Errors
   - Record data in Section 4

3. **Quick Class Debrief** (1-2 min)
   - "Show of hands: Was there a difference across context conditions?"
   - "Did large surrounding circles slow you down or cause more errors?"
   - **Expected result:** No systematic difference across context conditions (but 2cm targets should be harder than 3cm)

### Expected Results:
- **Movement time:** Similar across all context conditions (illusion doesn't slow you down)
- **Accuracy:** Equal error rates across context conditions (illusion doesn't make targets "harder" to hit)
- **Size effect:** 2 cm targets should show slower MT and more errors than 3 cm targets (Fitts' Law)

### Teaching Notes:
- **If students rush and make lots of errors:** Remind them it's "fast AND accurate," not just fast.
- **If data are noisy:** That's OK. The pattern should emerge at the group level (pool class data).

---

## Transition to Discussion (2 min)

After completing both activities, **pause and frame the puzzle:**

**Say:**
> "So let's review:
> - **Perception Task:** The illusion worked. Targets surrounded by small circles looked larger than those surrounded by large circles.
> - **Fitts Task:** Your movements were equally fast and accurate across all context conditions. The illusion didn't affect your performance.
>
> **Here's the puzzle:** If your brain built a mental picture, and that picture was wrong (illusion), **how did your movements stay accurate?**"

**Then:** Transition to Discussion Questions (start with Question 1).

---

## Pedagogical Strategy

### Why Two Activities?
- **Activity 1:** Establishes baseline (illusion works for conscious judgment)
- **Activity 2:** Shows dissociation (continuous action is immune to illusion)

**Together, they build a compelling case** that perception and action use different information.

### Key Insight from Fitts Task
- **Movement performance is immune to context:** Movement time and accuracy are unaffected by surrounding circles, even though those circles create a strong perceptual illusion.
- **Implication:** The motor system doesn't use the same information as conscious perception for controlling ongoing action.
- **Theoretical payoff:** Supports **task specificity** and **direct perception** (the motor system directly detects action-relevant properties from the optic array, not from mental representations).

---

## Common Student Questions & Responses

### "So is the hand smarter than the eye?"

**Your response:**
> "Hold that thought—that's exactly what we're going to discuss next. (Move to Question 1)"

### "What if my movements WERE affected by the context?"

**Your response:**
> "That can happen, especially if you're overthinking or focusing too much on the illusion. The key is the **group pattern**. When we pool class data, the effect should emerge - most people show no systematic difference across context conditions."

### "Why does the physical size (2cm vs 3cm) matter but the illusory size doesn't?"

**Your response:**
> "Excellent observation! That's exactly the point. Fitts' Law tells us that your motor system is sensitive to **actual physical target size**, which affects movement difficulty. But it's NOT sensitive to the **surrounding context**, which affects your conscious judgment. This suggests the motor system picks up different information than conscious perception."

---

## Integration with Lesson Plan

These activities replace and expand Section I ("The Lab: Action vs. Perception") in your lesson plan.

**Updated Timing:**
- **Section I (Lab):** 15-20 min (using these 2 activities)
- **Section II (Discussion):** 40-45 min (Questions 1-4)
- **Section III (Prime):** 10-15 min (Ecological Optics whiteboard)

**Critical Bridge:**
The activities generate **data and observations** that fuel the discussion. Students arrive at Question 1 with:
- Personal experience of the dissociation
- Confusion about how it's possible
- Predictions they can now test against their data

This makes the discussion **evidence-driven**, not abstract.

---

## File Locations

Lab materials saved to:
```
20_Teaching/Dynamics of Perception & Action/activities/
├── Week_03_Lab_Packet_Ebbinghaus_Suite.md (STUDENT PACKET - print this)
└── Week_03_Lab_Guide_Instructor_Notes.md (this file)
```

**Before class tomorrow:**
- [ ] Print one copy of the lab packet per student (~8-9 pages)
- [ ] Set up computer with Python script for susceptibility test
- [ ] Set up Fitts tapping surfaces (3 context conditions × 2 target sizes)

---

## Post-Lab: Using Data in Discussion

**During Question 1 discussion:**
- Reference student data: "Remember, your movements were equally fast and accurate across all context conditions."
- Use the whiteboard table (from Q1 facilitation notes) to map their findings:
  - Judgment task → Detected contrast → Illusion worked
  - Tapping task → Detected target locations/sizes for movement control → Illusion didn't work

**This makes the "task specificity" argument concrete and evidence-based.**
