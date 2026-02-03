# Activity Guide: The Robot vs. The Outfielder
**Week 1 | The Design Firm Challenge**

## 1. Overview
**Theory Link:** Computational vs. Ecological Approaches to Perception-Action.
**The Hook:** "Why is building a robot that catches a ball so expensive, when a dog does it for free?"
**Format:** Collaborative Design Firm (N=5). The class acts as one engineering team; you act as the skeptical Client/CEO.

## 2. Learning Objectives
By the end of this session, students will be able to:
1.  **Differentiate** between "poverty of the stimulus" (needs computation) and "ecological realism" (needs law-based control).
2.  **Explain** the "Computational Load" problem (why calculating trajectory is fragile).
3.  **Demonstrate** how Optical Acceleration Cancellation (OAC) works as a control law.

## 3. Preparation
**Materials:**
*   Whiteboard & Markers (Crucial for the "Design Board").
*   A tennis ball (to toss while arguing).
*   *Optional:* A video clip of a Boston Dynamics robot failing or succeeding slowly.

**Instructor Mental Prep:**
*   You need to play a character: **The "Computationalist CEO."**
*   **Your Stance:** "I have a fast processor and a high-res camera. I want to measure distance ($d$), velocity ($v$), wind ($w$), and gravity ($g$) to predict where the ball lands ($x,y$). Why shouldn't I?"

## 4. The Protocol (Seminar Mode)

### Phase 1: The Client Brief (10 mins)
1.  **Set the Scene:** "Welcome, engineers. I have a budget of $10M. I want a robot outfielder. Here is my proposed architecture."
2.  **Draw on Board:** Draw a diagram: `Eye -> Camera -> CPU (Calculate Parabola) -> Motor Command -> Run`.
3.  **The Ask:** "This system works in the lab. But it fails in the wind. Fix it."

### Phase 2: The Engineering Meeting (20 mins)
1.  Ask the students (The Engineers) to brainstorm variables that mess up the calculation.
    *   *Prompt:* "What if the wind gusts?" "What if the sun glares?" "What if the ball has spin?"
2.  **The Trap:** Every time they identify a problem, you (CEO) say: "Okay, add another sensor for that."
    *   *Result:* The diagram becomes a mess of sensors and lag. The "Computational Load" becomes visible.

### Phase 3: The Ecological Pivot (20 mins)
1.  **The Pivot:** "This is getting too expensive and slow. Is there a way to do this *without* knowing where the ball will land?"
2.  **Introduce OAC:** Ask a student to explain the Chapman/OAC strategy from the reading.
3.  **The Simulation:**
    *   Draw the "Optical Angle" ($\alpha$).
    *   Explain the rule: "Run so that the ball appears to move in a straight line at constant velocity."
    *   **Demonstrate:** Toss the ball. Ask: "Did I calculate the parabola? No. I just coupled my movement to the optical information."

## 5. Debrief Questions
1.  "Why is the ecological solution 'robust' while the computational one is 'fragile'?"
2.  "If the robot uses OAC, does it 'know' where the ball will land? (Answer: No. It just knows it will get there)."
3.  "How does this relate to the 'Poverty of the Stimulus' argument?" (Answer: The stimulus wasn't poor; the variable ($\dot{v}$) was right there).

## 6. Artifact of the Week Connection
*   Ask: "Did anyone bring an artifact related to automation or 'smart' tech failing?" (e.g., Autopilot crashing). Use this to reinforce the fragility of computation.
