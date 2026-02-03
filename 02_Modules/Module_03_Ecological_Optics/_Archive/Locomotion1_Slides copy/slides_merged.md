# Lecture: Ecological Optics & The Geometry of Information

## Slide 1: Title
### Module 03: Ecological Optics
#### The Geometry of Information
> **Notes:** Transition from "Axioms" (Theory) to "Mechanics" (How it works). Today is about how light carries information.

---

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

## Slide 3: Interactive Demo - Kinetic Occlusion
### Objects Defined by Motion

<div class="demo-container">
    <iframe src="demos/kinetic_occlusion/index.html" width="100%" height="600px" frameborder="0"></iframe>
</div>

> **Notes:** This demonstrates how objects can be perceived purely through motion and texture accretion/deletion at edges. Notice how depth and form emerge from movement alone - no static luminance boundaries required.

---

## Slide 4: Ecological Context
### Major Premises for Locomotion Regulation

*   **Ambient energy arrays** (optic array specifically) have structure
*   This **structure is information** available to organisms with perceptual systems
*   **Detection occurs directly** - no internal mediational states needed
*   **Example:** Optic flow fields are used for behavioral control without "high-level processing, storage, or representation"

> **Notes:** This establishes the ecological approach to locomotion. We're not computing, we're detecting lawful relationships between optical structure and movement possibilities.

---

## Slide 5: The Core Problem
### Radiant vs. Ambient Light
*   **Radiant Light:** Physics. Energy radiating from a source. Homogeneous.
*   **Ambient Light:** Ecology. Light reflected and structured by the environment. Heterogeneous.
*   **Key Concept:** We don't see light; we see *by means of* light.
> **Notes:** Blau & Wagman (Ch 6). Physics cares about photons/energy. Perception cares about structure (edges, texture, occlusion). The "Optic Array" is this structured arrangement of angles at the eye.

---

## Slide 6: Gibson's Rules for Visual Guidance
### Optical Invariants for Locomotor Control

*   **To be still:** Minimize change in the optic flow (Nonflow = stationary)
*   **To move forward/backward:** Produce global outflow/inflow (Outflow = forward movement)
*   **To move to a target:** Place the Focus of Expansion (FOE) on the target
*   **To change direction:** Change the location of the FOE from its previous position
*   **To approach without collision:** Keep rate of object expansion (Tau) steady

> **Notes:** Gibson proposed these "rules" to show how specific optical invariants control specific actions. Each rule links a perceptual variable to an action outcome. We will test these empirically throughout today's lecture.

---

## Slide 7: Rule 1 - Visual Proprioception
### The Moving Room (Lee & Lishman, 1974)
*   **Question:** Does vision tell us about the world (exteroception) or ourselves (proprioception)?
*   **Experiment:** Move the walls, keep the floor still.
*   **Result:** Infants (and adults) sway or fall to compensate for illusory self-motion.

![Moving Room Setup](assets/slide_6_img_1.png)
![Sway Data](assets/slide_6_img_2.png)

> **Notes:** Vision dominates mechanical proprioception. If the room moves forward, you feel like you are swaying backward, so you lean forward to "correct" it—and fall.

---

## Slide 8: Refining Proprioception
### Central vs. Peripheral Flow (Stoffregen, 1985)
*   **Question:** Which part of the retina controls balance?
*   **Finding:** Peripheral flow (Lamellar) has a stronger influence on stance than central flow (Radial).

![Stoffregen Diagrams](assets/slide_8_img_2.png)
![Sway Correlations](assets/slide_8_img_4.png)

> **Notes:** It's not just "flow"; the geometry matters. Peripheral flow (parallel/lamellar) specifies egomotion more robustly than central flow.

---

## Slide 9: Rule 2 - Heading Perception
### Can we see where we are going? (Warren, 1988)
*   **Focus of Expansion (FOE):** The point from which all flow originates.
*   **Problem:** Eye movements disrupt the FOE on the retina.
*   **Result:** We can separate *Retinal Flow* (eye + move) from *Ambient Flow* (move only). Heading judgments are accurate to within 1°.

![Retinal vs Ambient Flow](assets/slide_11_img_2.png)
![Heading Data](assets/slide_12_img_1.png)

---

## Slide 10: Rule 3 - Visual Control of Steering
### The "Great Debate" (Warren et al., 2001)
*   **Hypothesis A (Optic Flow):** Steer by keeping FOE on the goal.
*   **Hypothesis B (Egocentric Direction):** Steer by keeping the goal centered in body.
*   **The Conflict:** Prism glasses in VR (displace flow 10°).

![Locomotor Axis](assets/slide_13_img_2.png)
![VR Setup](assets/slide_14_img_1.png)

---

## Slide 11: Adaptive Control Laws
### It's Not "Either/Or"
*   **Sparse World:** We use Egocentric Direction (walk curved paths).
*   **Textured World:** We use Optic Flow (walk straight paths).
*   **Control Law:** $\dot{\phi} = -k (\beta + w \alpha)$
    *   We flexibly weight flow ($w$) based on environmental structure.

![Path Results](assets/slide_17_img_1.png)

> **Notes:** This is the key takeaway for Module 3. The visual system is an "Adaptive Controller." It doesn't use a single rigid rule; it combines information based on reliability.

---

## Slide 12: Rule 4 - Time-to-Contact
### Tau ($\tau$) Theory
*   **Indirect View:** Calculate $T = Distance / Speed$. (Hard to estimate!)
*   **Direct View:** $\tau = 1 / Rate of Expansion$. (Directly visible!)
*   **Inverse Relationship:** Fast expansion = Low Tau (Crash imminent). Slow expansion = High Tau (Safe).

![Tau Geometry](assets/slide_22_img_1.png)
![Expansion Diagram](assets/slide_22_img_2.png)

---

## Slide 13: Testing Tau
### The Deflating Ball (Savelsbergh et al., 1991)
*   **Experiment:** Catch a ball that *deflates* while approaching.
*   **Physics:** Distance/Speed are normal.
*   **Optics:** Rate of expansion decreases (looks like it's slowing down or moving away).
*   **Result:** People grasp **LATE**. They trust the optics ($\tau$), not the physics.
> **Notes:** This proves we couple action to optical invariants, not mental calculations of distance.

---

## Slide 14: Collision Severity
### Tau-dot ($\dot{\tau}$) (Kim et al., 1993)
*   We don't just see *when* (Tau); we see *how hard* (Tau-dot).
*   $\dot{\tau} \ge -0.5$: Safe stop (Soft collision).
*   $\dot{\tau} < -0.5$: Crash (Hard collision).
*   **Direct Perception of Dynamics:** We see the force (severity) in the optics.

---

## Slide 15: Summary
### The Perception-Action Loop
*   **Radiant Light** becomes **Ambient Information**.
*   We detect invariants (Flow, FOE, Tau).
*   These invariants directly control action (Balance, Steering, Braking).
*   Action generates new flow, closing the loop.
