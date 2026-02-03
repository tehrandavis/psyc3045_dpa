# 🎓 Student Cheat Sheet: Warren et al. (2001)
## "Optic flow is used to control human walking"

Don't let the math scare you! This paper is simply asking: **"How do you know where to steer?"**

---

### 1. Key Terminology Glossary
*   **Optic Flow:** The streaming pattern of light across your retina as you move. Imagine the "warp speed" stars in Star Wars.
*   **Focus of Expansion (FOE):** The single point in that flow pattern where there is no motion. It tells you exactly **where you are heading**.
*   **Egocentric Direction:** Where an object is relative to your nose/body. (e.g., "The target is 10° to my right").
*   **Heading:** The actual direction you are traveling through the world.
*   **Motion Parallax:** The cue where close objects move across your vision faster than distant objects (like telephone poles whizzing by a car window).

---

### 2. The Two Hypotheses (The "Fight")
Scientists spent 50 years arguing about which cue we use to steer.

| Hypothesis | The Rule | The Metaphor |
| :--- | :--- | :--- |
| **Egocentric Direction** | "Keep the target in front of your nose." | Like a compass. |
| **Optic Flow** | "Align the Focus of Expansion with the target." | Like a pilot aiming the plane. |

---

### 3. The Experimental Setup (The "Trick")
**The Problem:** In the real world, looking at a target and walking toward it happen at the same time. You can't separate them.
**The Solution:** Virtual Reality.
**The Manipulation:** They used a **Virtual Prism** that shifted the optic flow by 10°.
*   Imagine walking on a treadmill while wearing "drunk goggles" that shift everything to the side.
*   **If you use Flow:** You ignore the shift and walk straight (because the FOE is still reliable).
*   **If you use Direction:** You compensate for the shift and walk a **curved path**.

---

### 4. The Control Law Equation Decoder
This is the scary-looking equation that explains the whole paper. Here is how to read it in plain English:

$$ \dot{\phi} = -k (\beta + w \alpha) $$

*   **$\dot{\phi}$ (Phi dot) = Turning Rate:** How hard you are turning the steering wheel.
*   **$k$ = Stiffness:** How responsive you are (are you a relaxed driver or a twitchy one?).
*   **$\beta$ (Beta) = Direction Error:** "Is the target centered?"
*   **$\alpha$ (Alpha) = Flow Error:** "Is my FOE aligned with the target?"
*   **$w$ (Weight) = The "Trust" Factor:** This is the most important part!

**What it means conceptually:**
> "My steering is determined by adding up my Direction Error and my Flow Error."

**The "Trust" Factor ($w$):**
*   **If $w \approx 0$:** You **ignore flow** (e.g., walking in a dark room with just a glowing exit sign).
*   **If $w$ is high:** You **trust flow** completely (e.g., running through a dense forest).
*   **The Finding:** We adjust $w$ automatically based on how rich the environment is!

---

### 5. How to Read the Key Figures
*   Look for the **Overhead Walking Paths** (Bird's eye view).
*   **Curved Lines:** Participant was tricked! They relied on **Direction**.
*   **Straight Lines:** Participant wasn't tricked! They relied on **Flow**.
*   **The Trend:** Notice that as the environment gets "richer" (adding ground texture, doorways, and posts), the lines get **straighter**. This proves we use Flow more when it's available.

---

### 6. The Main Finding (TL;DR)
1.  Steering isn't an "either/or" choice; we use **both** Egocentric Direction and Optic Flow.
2.  It is a **Weighted Linear Combination**: our brain sums up the cues to control steering.
3.  The weights are **Adaptive**: In a dark/empty world, we use Direction; in a textured/rich world, we rely heavily on Optic Flow.

---

### 7. Connection to Course Concepts
*   **Ecological Optics:** This proves Gibson was right—we use the *structure* of light (flow) to control action, not just static images.
*   **Tau vs. Heading:**
    *   **Tau** (previous weeks) tells you **WHEN** to stop.
    *   **Flow/Heading** (this week) tells you **WHERE** to steer.
    *   Together, they form the complete guidance system for locomotion.
