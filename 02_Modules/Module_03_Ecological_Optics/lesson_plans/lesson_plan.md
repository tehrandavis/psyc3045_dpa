# Lesson Plan: Module 03 - Ecological Optics
## "The Geometry of Information"

**Date:** [2026-02-03]
**Goal:** Move students from "theory" (reading about ambient light) to "experience" (feeling how vision controls their own balance and steering).

---

## Part 1: Field Report Debrief & Warm-up (25-30 min)
*Goal: Validate student observations and correct misconceptions about "information."*

### 1. The Gallery Walk (Discussion)
*   **Prompt:** "Who found a clear example of **Tau** (timing) vs. **Flow** (steering/balance)?"
*   **Activity:** Select 2-3 students to share their findings.
*   **Critical Question:** "Don't just describe the object. Describe the **optic array**. Was it expanding? flowing globally? shearing?"
    *   *Example:* "If you filmed a car stop, did it 'loom'? That's Tau."
    *   *Example:* "If you walked down a hall, did the walls 'stream' past? That's Global Flow."
*   **Time:** 8-10 min

### 2. Detection vs. Computation (Golonka Reading Bridge)
*   **Context:** Golonka & Wilson blog post
*   **Ask:** "What's the difference between *detecting tau* and *calculating distance/velocity*?"
*   **Key Distinctions:**
    *   **Computational Approach:** Measure distance. Measure speed. Divide. Store. Retrieve. (Multiple steps)
    *   **Informational Approach:** Light already contains the ratio (image size/expansion rate). Just detect it. (Direct)
*   **Bridge to Lecture:** "Today we'll see how organisms use multiple sources of information and weight them adaptively based on reliability. We'll return to the Scope Problem after we talk about tau."
*   **Time:** 6-8 min

### 3. The "Impossible" Task
*   **Ask:** "Did anyone try to move *without* creating flow?" (e.g., keeping head perfectly still).
*   **Key Point:** **Action generates Information.** You cannot separate the two.
*   **Time:** 3-5 min

---

## Part 2: Interactive Lecture (60-70 min)
*Using `Module03_Lecture.html`. Focus on "Active" participation.*

### A. Opening Frame (Slide 1)
*   **Concept:** Transition from Axioms (last week) to Mechanics (today)
*   **Key Message:** "How does light actually carry information about the world?"
*   **Time:** 1 min

### B. The Locomotion Question (Slide 2 + Prompt Slide)
*   **Concept:** Abstract from biomechanics to control—the universal problem vision solves
*   **Visual:** Show 6-image gallery of different locomotion types (crawling, flying, hopping, walking, running, swimming)
*   **Interactive Prompt (Purple prompt slide):** "These animals all move with different mechanics—wings, fins, legs. But what *identical problem* are they all using light to solve?"
*   **Expected responses:** "Not crashing", "Knowing where they're going", "Steering", "Avoiding obstacles"
*   **If students struggle:** Hint: "Think about safety"
*   **Key Point:** Whether you fly or swim, the **optical flow laws are identical** (outflow = approach). Perception is for action control, not just object identification. Vision solves the guidance problem.
*   **Transition:** "So how does light solve this problem? What makes it informational?"
*   **Time:** 3-4 min

### C. Optical Flow Specificity (Slide 3) ⚠️ CRITICAL DEMO
*   **Concept:** Motion (transformation) specifies 3D layout
*   **Demo:** Launch `demos/optical_flow_specificity/` in new tab
*   **Activity:**
    1. Show static dots: "What do you see? Can you tell depth?"
    2. Add expansion flow (F key): "Now what changed? What surface is this?"
    3. Add shearing flow (J key): "Same dots. Different motion. What's different?"
*   **Ask:** "Same dot pattern. Different transformations. What information changed?"
*   **Expected responses:** "The motion", "How it's moving toward us"
*   **Takeaway:** **Transformation** (not static structure alone) specifies spatial layout. This is what Gibson means by "structure in the optic array."
*   **Time:** 5 min

### D. Ecological Context (Slide 4)
*   **Concept:** The 4 Major Premises for Locomotion Regulation
*   **Interactive Prompt:** "These are the core assumptions of the ecological approach. What do they mean for how we study vision?"
    1. **Ambient energy arrays** (optic array specifically) have structure
    2. This **structure IS information** available to organisms
    3. **Detection occurs directly** (no internal mediational states needed)
    4. **Example:** Optic flow fields control behavior without "high-level processing, storage, or representation"
*   **Connect to Readings:** "This is what Golonka & Wilson mean by 'detection vs. computation.' You're not calculating—you're detecting patterns that are already there."
*   **Time:** 4 min

### E. Radiant vs. Ambient Light (Slide 5)
*   **Concept:** Physics vs. Ecology
*   **Interactive Demo: "Lights Out"**
    *   *Action:* Turn off the classroom lights (leaving projector screen on).
    *   *Ask:* "Is there still radiant light?" (Yes, from screen)
    *   *Ask:* "Is there ambient light?" (Yes, you can see edges/silhouettes/walls)
    *   *Ask:* "If I filled the room with thick fog, what happens?"
    *   *Expected responses:* "Gets brighter?" "Can't see?"
    *   *Reveal:* Fog increases radiant energy (scatters photons) but destroys ambient structure (can't see edges/surfaces)
    *   *Takeaway:* **We see structure, not brightness.** This is why "Radiant Light" (physics) ≠ "Ambient Light" (ecology)
*   **Time:** 5 min

### F. Gibson's Ecological Rules (Slide 6)
*   **Concept:** Optical invariants for locomotor control
*   **Frame:** "Gibson proposed these 'rules' to show how specific optical patterns control specific actions. Each rule links a visual variable to an action."
*   **Read through list:**
    1. To be still → Minimize optic flow
    2. To move forward → Produce global outflow
    3. To move to a target → Place FOE on the target
    4. To change direction → Change FOE location
    5. To approach without collision → Keep tau steady
*   **Ask:** "Are these hard-wired instincts or learned strategies?"
*   **Transition:** "Let's test these rules empirically. We'll start with Rule 1."
*   **Time:** 3 min

### G. Rule 1 - Visual Proprioception (Slide 8)
*   **Concept:** Vision balances the body (Lee & Aronson, 1974 - Moving Room experiment)
*   **Background:** "Classic assumption: Vision is exteroceptive (sees objects). Balance is vestibular (inner ear) + mechanoreceptive (feet). Gibson challenged this."
*   **The Experiment:**
    *   Move the room walls forward → Infants lean forward (compensating for illusory backward sway)
    *   Move walls backward → Infants lean backward
    *   Result: 82% of trials showed compensatory sway; 33% resulted in falls
*   **Interactive Demo: "The One-Leg Stand"**
    1.  "Everyone stand up."
    2.  "Stand on one leg. Look at the wall. Easy?"
    3.  "Now... **close your eyes**." (Watch for wobbles/falls)
    4.  *Ask:* "Why did you wobble? Your inner ear is fine. Your feet are fine. What changed?"
    5.  *Reveal:* You lost **Visual Proprioception**. Vision is your primary balance "anchor."
*   **Takeaway:** Vision doesn't just tell you about the world (exteroception)—it tells you about **your own body** in the world (proprioception).
*   **Time:** 6 min

### H. Interactive Demo - Optic Flow (Slide 7)
*   **Concept:** Radial expansion and Focus of Expansion (FOE) - testing Rules 2-4
*   **Demo:** Launch `demos/optic_flow/` in new tab
*   **Activity:**
    *   "Move your mouse around. What's that red dot?" (FOE)
    *   "Use F/J keys to change doorway speed. Use C/M for star field speed."
    *   "Press R to sync them. Now move your mouse—notice how the FOE moves with your intended heading?"
*   **Ask:** "If you wanted to walk through the left edge of the doorway, where would you put the FOE?"
*   **Takeaway:** Steering = controlling where the FOE points. This is Rule 3 in action.
*   **Time:** 5 min

### I. Rule 2 - Heading Perception (Slide 9)
*   **Concept:** Perceiving where we're going (Warren & Hannon, 1988)
*   **The Problem:** Eye movements disrupt the FOE on the retina
*   **The Question:** "Can we still perceive heading accurately?"
*   **The Result:** Yes. Humans separate *Retinal Flow* (eye + movement) from *Ambient Flow* (movement only). Heading judgments accurate to within 1°.
*   **Visual:** Show diagrams of retinal vs. ambient flow, heading accuracy data
*   **Takeaway:** The visual system can decompose rotation from translation using differential motion between elements at different depths.
*   **Time:** 4 min

### J. Rule 3 - Visual Control of Steering (Slide 10)
*   **Concept:** Warren's "Great Debate" (Warren et al., 2001)
*   **The Question:** "Do we steer using **Optic Flow** (FOE) or **Egocentric Direction** (target location relative to body)?"
*   **The History:** 50-year debate in the field
*   **The Experiment (VR):**
    *   Created a conflict: Displaced the visual heading by 10° using VR (not prisms)
    *   **If Flow:** Walk straight paths (cancel heading error)
    *   **If Direction:** Walk curved paths (keep target centered in body)
*   **Interactive Demo: "The Walk"**
    *   *Action:* Have a student walk from back to front, tracking a target.
    *   *Ask Class:* "Are they walking straight? How can you tell?"
    *   *Ask Student:* "What are you doing with your eyes? Centering the target?"
*   **Visual:** Show diagrams of locomotor axis, VR setup
*   **Transition:** "So what did Warren find?"
*   **Time:** 6 min

### K. ⚠️ Adaptive Control Laws (Slide 12) - THE KEY THEORETICAL INSIGHT
*   **Concept:** The resolution—it's not "either/or," it's "both with adaptive weighting"
*   **Setup:** "So who wins the debate? Flow or Direction?"
*   **Reveal:** "BOTH. But the weights change based on environmental richness."

**CONTROL LAW EXPLANATION GUIDE:**

#### Step 1: Show the Results (Visual Evidence)
*   **Display Slide 12:** Two-column layout with path results graph (left) and bullet points (right)
*   **Point to graph:** "Look at these walking paths. In the sparse world (just a line), what shape?" (Curved)
*   "In the textured world (posts), what shape?" (Straight)

#### Step 2: Introduce the Equation (Don't panic students!)
*   **Write on board:** φ̇ = -k(β + w·α)
*   "I know equations are scary, but this one is actually beautiful. Let me translate it."

#### Step 3: Decode Each Term (Build from left to right)
*   **φ̇** (phi-dot): "This is your **turning rate**—how fast you rotate your body. It's what you're controlling when you steer."
*   **=** : "...is determined by..."
*   **-k** (negative gain): "A constant that says 'correct the error.' Negative means 'turn away from positive errors.'"
*   **β** (beta): "**Egocentric direction error**. How far is the target from your body midline? In degrees."
*   **+**: "...plus..."
*   **w·α**: "This is the flow term. Let me break it down:"
    *   **α** (alpha): "**Optic flow error**. How far is the FOE from the target?"
    *   **w**: "The **weight**—this is the adaptive part. How much do you trust the flow?"

#### Step 4: Translate the Full Equation
*   "So in plain English: **Your turning rate equals a gain times the sum of two errors—direction error plus weighted flow error.**"
*   **Write translation:** "Steering = gain × (direction error + weighted flow error)"

#### Step 5: The Key Insight - The Weight Changes
*   "The magic is in **w** (the weight). It's not fixed—it adapts."
*   **In sparse environments (dark hallway, single light):**
    *   "Not much texture → Low flow reliability → **w ≈ 0**"
    *   "Equation becomes: φ̇ = -k·β (Direction only)"
    *   "Result: Curved paths to keep target centered"
*   **In rich environments (forest, textured ground):**
    *   "Lots of texture → High flow reliability → **w increases** (approaches 1)"
    *   "Equation becomes: φ̇ = -k(β + α) (Both matter)"
    *   "Result: Straight paths using flow to correct heading"

#### Step 6: Interactive Discussion
*   **Ask:** "In a dark hallway with one light at the end—which cue wins?"
    *   *Expected:* Direction (w ≈ 0)
*   **Ask:** "In a dense forest with textured trees everywhere—which cue wins?"
    *   *Expected:* Flow (w high)
*   **Ask:** "Is this a bug or a feature?"
    *   *Expected responses:* "Feature", "Flexible", "Adaptive"
    *   *Affirm:* "Exactly! The visual system is an **adaptive controller**. It detects reliability and adjusts. It doesn't follow blind rules."

#### Step 7: Connect Back to Scope Problem (Golonka Reading)
*   "Remember this morning's discussion about tau's limitations?"
*   "This is the solution: **Don't rely on one source. Combine multiple sources and weight them by reliability.**"
*   "When tau is unreliable (accelerating object), use other information. When flow is unreliable (dark environment), use direction. The system is robust."

#### Step 8: The Takehome Message
*   "This equation is a **control law**—a mathematical description of how perception drives action continuously."
*   "It's not a representation or a plan. It's a coupling between information and movement."
*   "This is what we mean by **perception-action loop**."

**Teaching Tips:**
- Use hand gestures: Point to target (β), sweep hand showing flow (α), adjust imaginary dial for weight (w)
- Draw curved vs. straight paths on board as you explain
- If students look lost, use concrete example: "Imagine walking to a friend across a dark parking lot vs. through a crowded mall"
- Emphasize: "You don't consciously calculate this. Your visual system does it automatically."

*   **Time:** 10-12 min (This is worth the time—it's the theoretical climax)

### L. Interactive Demo - Kinetic Occlusion (Slide 11)
*   **Concept:** Objects defined purely by motion (texture accretion/deletion at edges)
*   **Demo:** Launch `demos/kinetic_occlusion/` in new tab
*   **Activity:**
    1. Show static noise: "Do you see an object?"
    2. Add motion: "Now what appears?"
*   **Ask:** "Where is the rectangle? How do you know it's there?"
*   **Expected responses:** "The texture moves differently", "Edges appear"
*   **Takeaway:** Depth and form emerge from movement alone—no luminance boundaries needed. This is another example of transformation specifying structure.
*   **Time:** 4 min

### M. Rule 4 - Time-to-Contact (Slide 13)
*   **Concept:** Tau (τ) Theory (Lee, 1976)
*   **The Contrast:**
    *   **Indirect View:** Calculate T = Distance/Speed (Requires estimating two separate variables!)
    *   **Direct View:** τ = 1/Rate of Expansion (Single detectable ratio in the optic array)
*   **Interactive Demo: "The Flinch"**
    *   *Action:* Gently toss a soft foam ball at a student in the front row.
    *   *Observation:* They will flinch/catch/blink automatically.
    *   *Ask:* "Did you calculate Distance ÷ Velocity?"
    *   *Ask:* "Did you solve a physics equation?"
    *   *Reveal:* No. Your visual system detected **Expansion Rate**. It was a reflex.
*   **Demo:** Launch `demos/tau_demo/`
    *   Show two approaching objects with different expansion rates
    *   "Which one hits first?" (Fast expansion = low tau = imminent impact)
*   **The Inverse Relationship:**
    *   Fast expansion → Low τ → Crash imminent
    *   Slow expansion → High τ → Safe
*   **Connect back to morning:** "Remember the scope problem? Tau works for constant-velocity spheres. What if the ball could **deflate** mid-air? The expansion would slow, tau would say 'safe,' and you'd get hit."
*   **Time:** 6 min

### N. Collision Severity (Slide 14)
*   **Concept:** Tau-dot (τ̇) — Kim et al. (1993)
*   **Key Insight:** We don't just see *when* (tau); we see *how hard* (tau-dot)
*   **The Math:**
    *   τ̇ ≥ -0.5: Deceleration is sufficient → Safe stop (soft collision)
    *   τ̇ < -0.5: Deceleration insufficient → Crash (hard collision)
*   **Interactive Prompt:** "Ever slammed on your brakes and *felt* you wouldn't stop in time before looking at the distance?"
*   **Takeaway:** Direct perception of dynamics—collision severity is *in the optics*, not computed from separate force estimates.
*   **Time:** 3 min

### O. ⚠️ The Scope Problem (Prompt Slide after Slide 14)
*   **Concept:** Golonka & Wilson's Scope Problem — When does tau fail?
*   **Setup:** "Now that we understand tau, let's revisit the Scope Problem from this morning."
*   **Key Questions:**
    *   **Ask:** "When might tau fail you?"
        *   *Examples:* Ball deflating mid-air (expansion slows, tau says "safe" → you get hit)
        *   Accelerating car (not constant velocity)
        *   Non-spherical object (tau assumptions violated)
    *   **Ask:** "If tau only works sometimes, why call it 'information'?"
    *   **Answer:** Information is **lawful but scope-limited**. The law that makes tau specify time-to-contact has limited scope.
*   **Connect to Control Law (Slide 12):**
    *   "Remember adaptive weighting? This is the solution."
    *   "Don't rely on one source. Combine multiple sources and weight them by reliability."
    *   "When tau is unreliable (accelerating object), use other information."
    *   "When flow is unreliable (dark environment), use direction."
    *   "The system is robust because it's adaptive."
*   **Takeaway:** Organisms learn through experience when information is reliable and when to switch strategies.
*   **Time:** 5-6 min

---

## Part 3: Wrap Up & Integration (12-15 min)

### 1. The Perception-Action Loop (Slide 16)
*   **Visual:** Display diagram (left: circular flow chart) + bullet list (right)
*   **Guided Synthesis (trace the loop with pointer):**
    1. "Start with **Radiant Light** (physics—photons from the sun)"
    2. "It becomes **Ambient Information** (structured by surfaces, textures, edges)"
    3. "We **detect invariants**—Flow, FOE, Tau (no computation needed)"
    4. "These invariants **directly control action**—Balance, Steering, Braking"
    5. "Action generates **NEW flow** (you move, the array transforms)"
    6. "Closing the loop → Continuous coupling"
*   **Critical Question:** "Where in this loop do you 'compute'? Where do you build a representation?"
*   **Expected responses:** "Nowhere?", "It's all direct?"
*   **Affirm:** "Exactly. It's continuous coupling between information and movement. No mediating internal states required."
*   **Time:** 6 min

### 2. Muddy Points
*   "What is still confusing about **detection vs. computation**?"
*   "What questions do you have about the **control law**?"
*   "Does anyone still think vision is just for identifying objects?"
*   **Time:** 4 min

### 3. Preview: Affordances
*   "Now we know **how** we get information (Ecological Optics)"
*   "Next week: **What does that information tell us?**"
*   "It tells us what we can DO. Those are **Affordances**."
*   "Preview question to think about: If a stair is 20cm tall, can you step on it? What if it's 40cm? What about 60cm? How does your body know?"
*   **Time:** 2 min

---

## Materials Needed
*   [ ] Laptop + Projector (HTML Slides with working demos)
*   [ ] Soft foam ball or crumpled paper (for Tau "Flinch" demo)
*   [ ] Ability to dim/control classroom lights (for Radiant vs. Ambient demo)
*   [ ] Internet access (all demos embedded, but check links):
    *   `demos/optical_flow_specificity/index.html`
    *   `demos/optic_flow/index.html`
    *   `demos/kinetic_occlusion/index.html`
    *   `demos/tau_demo/index.html`
*   [ ] Whiteboard/markers (for drawing control law explanation, curved vs. straight paths)
*   [ ] Backup plan if demos fail (screenshots or conceptual explanation)

---

## Timing Summary

| Section | Planned Time | Flexibility |
|---------|-------------|-------------|
| Part 1: Field Debrief (reduced) | 20-25 min | Can reduce to 15 min if needed (gallery walk only) |
| Part 2A-F: Theory Setup | 21 min | Essential—do not cut |
| Part 2G-J: Empirical Evidence | 21 min | Can condense H+I if time-constrained |
| Part 2K: **Control Law** | 10-12 min | **CRITICAL—do not cut** |
| Part 2L-N: Additional Evidence | 13 min | L (Kinetic Occlusion) can be cut if necessary |
| Part 2O: **Scope Problem** | 5-6 min | **CRITICAL—connects readings to theory** |
| Part 3: Integration | 12-15 min | Essential—do not cut |
| **Total** | **102-112 min** | Target: 90-100 min with selective cuts |
| **Prompt Slides** | +5 min | Built into flow (brief pauses for discussion) |

**Note on Prompt Slides:**
- 5 purple prompt slides are embedded in the deck as discussion triggers
- Each adds ~1 min for you to pause and engage students
- Total time already reflected in section estimates above

**If time is constrained to 75-min class:**
1. Reduce Field Report to 15 min (gallery walk only, skip "impossible task")
2. Skip Kinetic Occlusion demo (Slide 11) - mention conceptually only
3. Consolidate demos H+I into single 6-min segment
4. **DO NOT cut Control Law (K) or Scope Problem (O) - these are the theoretical payoffs**

---

## Post-Lecture Notes

**Common Student Confusions to Address:**
- "Is the control law something we learn or is it innate?" → Both. The coupling is fundamental, but weights (w) are calibrated through experience.
- "Why does Gibson reject computation if the brain is clearly doing *something*?" → Detection ≠ no processing. It's about whether you treat perception as information pickup vs. symbolic inference.
- "If tau only works sometimes, why call it 'information'?" → Information is lawful but scope-limited. Evolution shaped systems to detect what's usually reliable and combine sources adaptively.

**Assessment Indicators:**
- Can students explain the control law in their own words?
- Can they predict steering behavior in novel environments (e.g., "What happens in a snowstorm?")?
- Do they see the connection between Golonka's "scope problem" and Warren's "adaptive weighting"?
