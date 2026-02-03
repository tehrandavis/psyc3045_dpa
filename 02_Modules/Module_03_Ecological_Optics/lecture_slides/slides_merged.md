# Lecture: Ecological Optics & The Geometry of Information

## Slide 1: Title
### Module 03: Ecological Optics
#### The Geometry of Information
> **Notes:** Transition from "Axioms" (Theory) to "Mechanics" (How it works). Today is about how light carries information.

---

## Slide 2: The Diversity of Locomotion
### Movement Across the Animal Kingdom

<div class="locomotion-gallery">
    <img src="assets/slide_2_img_1.png" alt="Crawling">
    <img src="assets/slide_2_img_2.png" alt="Flying">
    <img src="assets/slide_2_img_3.png" alt="Hopping">
    <img src="assets/slide_2_img_4.png" alt="Walking">
    <img src="assets/slide_2_img_5.png" alt="Running">
    <img src="assets/slide_2_img_6.png" alt="Swimming">
</div>

> **Notes:** The main point is that it's not all about running. Visual perception makes locomotion truly useful because we can orient to distal objects. This lecture focuses on the visual control of locomotion with particular emphasis on Gibson's rules and current research.

---

## Slide 3: Interactive Demo - Optical Flow Specificity

<iframe src="demos/optical_flow_specificity/index.html" width="100%" height="600px" frameborder="0" style="border: none; width: 100%; height: 600px;"></iframe>

> **Notes:** This demonstrates that 3D spatial layout is specified by transformation, not static structure. The same retinal projection can specify different 3D layouts depending on the flow pattern. Pause and play to see how motion disambiguates depth.

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

## Slide 7: Interactive Demo - Optic Flow
### Radial Expansion and Focus of Expansion (FOE)

<div class="demo-container">
    <iframe src="demos/optic_flow_embedded/index.html" width="100%" height="600px" frameborder="0"></iframe>
</div>

> **Notes:** This demonstrates Rules 2-4. Move the mouse to change heading direction - notice how the FOE moves with it. Use C/M to adjust star speed and F/J to adjust doorway speed. Press R to sync speeds. Try placing the FOE on the doorway edges to simulate steering.

---

## Slide 8: Rule 1 - Visual Proprioception
### The Moving Room (Lee & Lishman, 1974)
*   **Question:** Does vision tell us about the world (exteroception) or ourselves (proprioception)?
*   **Experiment:** Move the walls, keep the floor still.
*   **Result:** Infants (and adults) sway or fall to compensate for illusory self-motion.

![Moving Room Setup](assets/slide_6_img_1.png)
![Sway Data](assets/slide_6_img_2.png)

> **Notes:** Vision dominates mechanical proprioception. If the room moves forward, you feel like you are swaying backward, so you lean forward to "correct" it—and fall.

---

## Slide 9: Refining Proprioception
### Central vs. Peripheral Flow (Stoffregen, 1985)
*   **Question:** Which part of the retina controls balance?
*   **Finding:** Peripheral flow (Lamellar) has a stronger influence on stance than central flow (Radial).

![Stoffregen Diagrams](assets/slide_8_img_2.png)
![Sway Correlations](assets/slide_8_img_4.png)

> **Notes:** It's not just "flow"; the geometry matters. Peripheral flow (parallel/lamellar) specifies egomotion more robustly than central flow.

---

## Slide 10: Rule 2 - Heading and the Visual Control of Steering
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

---

## Slide 11: Interactive Demo - Kinetic Occlusion
### Objects Defined by Motion

<div class="demo-container">
    <iframe src="demos/kinetic_occlusion/index.html" width="100%" height="600px" frameborder="0"></iframe>
</div>

> **Notes:** This demonstrates how objects can be perceived purely through motion and texture accretion/deletion at edges. Notice how depth and form emerge from movement alone - no static luminance boundaries required.

---

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

---

## Slide 13: Rule 4 - Time-to-Contact
### Tau ($\tau$) Theory
*   **Indirect View:** Calculate $T = Distance / Speed$. (Hard to estimate!)
*   **Direct View:** $\tau = 1 / Rate of Expansion$. (Directly visible!)
*   **Inverse Relationship:** Fast expansion = Low Tau (Crash imminent). Slow expansion = High Tau (Safe).

![Tau Geometry](assets/slide_22_img_1.png)
![Expansion Diagram](assets/slide_22_img_2.png)

---

## Slide 14: Testing Tau
### The Deflating Ball (Savelsbergh et al., 1991)
*   **Experiment:** Catch a ball that *deflates* while approaching.
*   **Physics:** Distance/Speed are normal.
*   **Optics:** Rate of expansion decreases (looks like it's slowing down or moving away).
*   **Result:** People grasp **LATE**. They trust the optics ($\tau$), not the physics.
> **Notes:** This proves we couple action to optical invariants, not mental calculations of distance.

---

## Slide 15: Collision Severity
### Tau-dot ($\dot{\tau}$) (Kim et al., 1993)
*   We don't just see *when* (Tau); we see *how hard* (Tau-dot).
*   $\dot{\tau} \ge -0.5$: Safe stop (Soft collision).
*   $\dot{\tau} < -0.5$: Crash (Hard collision).
*   **Direct Perception of Dynamics:** We see the force (severity) in the optics.

---

## Slide 16: Beyond Stationary Targets
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

## Slide 17: Summary
### The Perception-Action Loop
*   **Radiant Light** becomes **Ambient Information**.
*   We detect invariants (Flow, FOE, Tau).
*   These invariants directly control action (Balance, Steering, Braking).
*   Action generates new flow, closing the loop.
