# Week 3 Instructor Guide: Ecological Optics & The Geometry of Information

**Course:** Dynamics of Perception & Action (Spring 2026)
**Module:** Week 03 - Ecological Optics
**Last Updated:** 2026-01-30

---

## Overview

This week transitions from theoretical foundations (axioms) to the concrete geometry of information. Students explore how light structures perception and guides action through balance, timing, and steering.

**Pedagogical Arc:** Theory → Classic Proof → Modern Application

---

## Reading Summaries

### 1. Blau & Wagman - Chapter 6: Ecological Optics (15 pages)

**Main Points:**
- Distinguishes **Ecological Optics** (light as information for an active observer) from classical/Newtonian optics (light as radiation forming images)
- Introduces **Ambient Optic Array** (structured light converging at a point of observation)
- Explains **Optic Flow** (transformation of the array during movement)
- Vision is about detecting invariant structures in light that specify affordances, not processing retinal snapshots

**Key Concepts:**
- Radiant vs. Ambient Light
- Structured Light
- Occlusion/Disocclusion
- Global vs. Local Optic Flow
- The "Point of Observation"

**Teaching Notes:**
- This is the vocabulary foundation—ensure students grasp these terms before moving to empirical papers
- Highly visual chapter; use diagrams to reinforce concepts
- Students often struggle with "ambient" vs "radiant" distinction—emphasize that ecology cares about where light *is*, physics cares about where it *comes from*

---

### 2. Lee & Aronson (1974) - Visual Proprioceptive Control (4 pages)

**Main Points:**
- Classic "Moving Room" experiment with infants
- When walls move but floor stays stable, infants sway/fall in direction of wall movement
- Vision overrides mechanical information from feet and vestibular system
- Demonstrates **visual proprioception** (seeing your own movement)

**Key Concepts:**
- Visual Proprioception
- Dominance of optical information over mechanical/vestibular cues
- Exteroception vs. Proprioception

**Teaching Notes:**
- Fun, accessible study—students love the "babies falling over" example
- Good opportunity to discuss sensory dominance and integration
- Short paper but dense prose (1974 writing style)
- YouTube videos of moving room experiments can help visualization

---

### 3. Warren et al. (2001) - Optic Flow is Used to Control Walking (4 pages)

**Main Points:**
- Investigates visual control of steering during locomotion
- Tests two competing hypotheses: **Egocentric Direction** vs. **Optic Flow**
- Using VR to decouple cues, demonstrates humans use weighted linear combination of *both*
- Weight assigned to optic flow increases with environmental richness (texture, parallax)
- Provides mathematical control law: $\dot{\phi} = -k(\beta + w\alpha)$

**Key Concepts:**
- Control Laws
- Cue Combination
- Focus of Expansion (FOE)
- Adaptive Weighting ($w$) based on environmental structure

**Teaching Notes:**
- **CRITICAL BOTTLENECK:** The control law equation can cause student disengagement
- Explicitly tell students they don't need to *solve* the equation—just understand it means "Steering = Direction + Flow"
- This is the first mathematically precise ecological law they've seen; frame it as moving from qualitative to quantitative
- Connect terminology: Lee's "Visual Proprioception" vs Warren's "Visually Controlled Locomotion" are the same functional loop

---

## Conceptual Connections

The readings form a cohesive arc:
1. **Blau & Wagman:** Vocabulary + Theoretical claim ("Light structures movement")
2. **Lee & Aronson:** Classic proof of principle for *balance* (light drives posture)
3. **Warren et al.:** Modern, mathematically precise application for *locomotion* (light drives steering)

**Key Insight:** Optic flow variables support multiple aspects of perception-action coupling:
- **Tau** → Timing (when to act)
- **Heading/FOE** → Steering (where to go)
- **Visual proprioception** → Balance (maintaining posture)

---

## Reading Load Assessment

### Total Load: ~23 Pages

| Reading | Pages | Type | Density |
|---------|-------|------|---------|
| Blau & Wagman Ch. 6 | 15 | Textbook | Low-Medium |
| Lee & Aronson (1974) | 4 | Empirical | Medium |
| Warren et al. (2001) | 4 | Empirical | High |

### Difficulty Level
**Moderate to High** (Undergraduate appropriate, but requires scaffolding)

While page count is low, conceptual density shifts dramatically. Textbook is gentle on-ramp, but Warren requires grappling with control theory and graphs.

### Estimated Reading Time
**~2.5 - 3 Hours** (for deep processing)

**Methodology for Time Estimation (via Gemini):**
Using "weighted density" approach:
- **Textbook (15pgs):** 5 min/page (narrative flow, diagrams) = 75 mins
- **Lee & Aronson (4pgs):** 10 min/page (older style, dense prose) = 40 mins
- **Warren et al. (4pgs):** 15 min/page (requires decoding graphs/equations) = 60 mins

**Criteria Used:**
- **Page count** (raw volume)
- **Text density** (equations, graphs, jargon)
- **Writing style** (narrative vs. technical)
- **Visual aids** (diagrams vs. dense tables)
- **Cognitive load** (new concepts vs. application of known)

**What Makes Something "Difficult"?**
- Mathematical notation without explanation
- Multiple dependent concepts introduced simultaneously
- Graphs/figures requiring interpretation
- Terminology shifts between papers
- Lack of concrete examples

**What Makes Something "Accessible"?**
- Narrative flow with clear topic sentences
- Diagrams that illustrate rather than just decorate
- Concrete examples (babies, walking)
- Scaffolded concept introduction
- Familiar real-world applications

### Balance
- **Theory:** 60% (Blau & Wagman sets the stage)
- **Empirical:** 40% (Two distinct experiments)

---

## Bottlenecks & Teaching Recommendations

### Bottleneck #1: The "Math Cliff" in Warren
**Issue:** Students may disengage at the control law equation ($\dot{\phi} = -k(\beta + w\alpha)$)

**Recommendation:**
- Explicitly tell students they don't need to *solve* the equation
- Frame it as: "This proves mathematically that Steering = Direction + Flow"
- Use analogy: "Like a recipe that shows exact proportions—you don't need to cook it to know what's in it"
- Consider creating a visual diagram of the equation showing the components

### Bottleneck #2: Terminology Shifts
**Issue:** Lee uses "Visual Proprioception" while Warren uses "Visually Controlled Locomotion"—students might miss they're related

**Recommendation:**
- Create a terminology bridge in class discussion
- Emphasize both papers show vision guiding self-motion
- Ask: "What's the difference between sensing your movement (proprioception) and controlling it (locomotion)?"

### Bottleneck #3: Abstraction Gap
**Issue:** Blau & Wagman is theoretical; students may not see how it connects to experiments

**Recommendation:**
- Use concrete examples from readings when teaching theory
- "Remember the moving room? That's visual proprioception using the optic array"
- Create a concept map showing how all three readings use the same vocabulary

---

## Recommended Reading Order

1. **Blau & Wagman (Ch. 6):** Essential first step to define terms (Optic Flow, Array, Ambient Light)
2. **Lee & Aronson (1974):** Concrete, fun example of theory in action ("Babies falling over")
3. **Warren et al. (2001):** Advanced application challenge—requires prior vocabulary

**Rationale:** Build vocabulary → See it in action → Apply to complex case

---

## Discussion Questions (For Class)

1. **Connecting Theory to Evidence:**
   - How does Lee & Aronson's moving room demonstrate Blau & Wagman's concept of "visual proprioception"?

2. **Control Law Interpretation:**
   - In Warren's equation, what happens when $w = 0$? When $w = 1$? What does this tell you about environmental richness?

3. **Sensory Dominance:**
   - Why does vision override vestibular/mechanical information in the moving room? What are the evolutionary advantages of this hierarchy?

4. **Optic Flow Applications:**
   - We've now seen optic flow used for balance (Lee) and steering (Warren). What other actions might use optic flow information?

---

## Lab/Activity Connections

**Suggested Activities:**
- **Moving Room Simulation:** Use VR or simple room manipulation to recreate Lee & Aronson effect
- **Optic Flow Observation:** Have students walk forward and notice global radial outflow from a focus of expansion
- **Cue Conflict Exercise:** Create situations where direction and flow information conflict (prism goggles, VR)

---

## Assessment Alignment

**Quiz Questions Should Test:**
- Radiant vs. Ambient light distinction (Blau & Wagman)
- Visual proprioception concept (Lee & Aronson)
- Cue combination in steering (Warren)
- Ability to interpret control law qualitatively (not mathematically)

**Avoid:**
- Requiring students to solve or derive equations
- Memorization of page numbers or specific experimental details
- Questions that require reading beyond the assigned papers

---

## Notes for Future Iterations

- Consider adding a short video lecture on control laws before Warren reading
- Create visual glossary of terms (Ambient Array, FOE, etc.)
- Develop "equation translation" guide for Warren paper
- Consider splitting Warren into two discussions if time allows

---

## Related Literature Note

- Warren et al. (2001) literature note: `/Users/tehrandavis/athousandforests/100_Library/Warren et al. - 2001 - Optic flow is used to control human walking.md`
