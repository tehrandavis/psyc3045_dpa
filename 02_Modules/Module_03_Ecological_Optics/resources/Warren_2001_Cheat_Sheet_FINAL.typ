#set page(paper: "us-letter", margin: 1in)
#set text(font: "Linux Libertine", size: 11pt)


= Crib notes: Warren et al. (2001)
== "Optic flow is used to control human walking"

*Core Question:* How do you know where to steer when you walk?

#v(1em)

== Key Terminology

#table(
  columns: (1fr, 2fr),
  stroke: 0.5pt,
  align: (left, left),
  [*Term*], [*Definition*],
  [*Optic Flow*], [Streaming pattern of light as you move (like "warp speed" stars).],
  [*Focus of Expansion (FOE)*], [The point in flow where there's no motion—tells you where you're heading.],
  [*Egocentric Direction*], [Where something is relative to your body ("15° to my left").],
  [*Heading*], [The actual direction you're traveling through space.],
  [*Control Law*], [Mathematical rule describing how perception drives action.],
)

#v(1em)

== The Two Hypotheses
There has been a long-standing debate about how we control our steering when walking.

#table(
  columns: (1fr, 1.5fr, 1.5fr),
  stroke: 0.5pt,
  align: (left, left, left),
  [*Hypothesis*], [*Rule*], [*If the world shifts visually, then ...*],
  [*Egocentric Direction*], ["Keep target centered in front of you."], [You'd walk a *curved path* to re-center it.],
  [*Optic Flow*], ["Align FOE with the target."], [You'd walk *straight* (FOE is reliable).],
)

*Key Question:* Which one do we use?


#v(1em)

= The Experimental Focus / Manipulation

*The Problem:* In real life, both cues align perfectly—you can't separate them. How can we test this?

*The Solution:* Virtual Reality + "Virtual Prism"
- VR shifts the optic flow 10° while participants walk straight
- Like wearing goggles that rotate the world sideways

*Four Conditions (increasing environmental richness):*
+ *Line* - Just a target (no texture)
+ *Ground* - Textured ground plane
+ *Doorway* - Ground + ceiling + doorway
+ *Posts* - Dense forest of posts (max parallax)

*Result:* Richer environments → straighter paths → more flow use


#v(1em)

= Decoding the Control Law Equation
One thing with Warren's work is that it is very mathematical. Here is a potentially scary-looking equation that defines Warren's model of steering control.

$ dot(phi) = -k(beta + w alpha) $

=== Breaking It Down:

#table(
  columns: (1fr, 1.5fr, 3fr),
  stroke: 0.5pt,
  align: (left, left, left),
  [*Symbol*], [*Name*], [*What It Means*],
  [$dot(phi)$],
  [*Turning rate*],
  [How fast you're turning (the *output*—what you DO). The "dot" means "rate of change."],

  [$k$], [*Gain*], [Responsiveness. High $k$ = twitchy steering. Low $k$ = smooth steering. Think: sensitivity.],
  [$beta$], [*Direction error*], [Angular difference between target and body midline. ("Is target centered?")],
  [$alpha$], [*Flow error*], [Angular difference between FOE and target. ("Is my heading aligned?")],
  [$w$], [*FLOW WEIGHT*], [*This is the key!* How much you trust flow vs. direction (0 to 1+).],
  [$-$], [*Negative feedback*], [You steer _toward_ the target (reducing error), not away. Like a thermostat.],
)

#v(1em)

== What It Means Conceptually:

*"Your turning is driven by combining direction error and flow error, weighted by how much flow information is available."*

Think of it like mixing ingredients:
- $beta$ = Direction ingredient (always present)
- $w alpha$ = Flow ingredient (amount depends on $w$)
- You add them together, multiply by responsiveness ($k$), and that drives your steering

The negative sign means this is *error correction*: if target is to your right (+error), you turn right (-correction).

*The Critical Finding:* $w$ isn't fixed—it increases automatically as the environment gets richer (more texture, more motion parallax, more optical structure).

== What You DO Need to Understand:
- Which cues do we use? (direction, flow, both?)
- If both, how are they combined and weighted?

= Connection to Course Concepts

*Ecological Optics (Blau & Wagman)*
- Proves optic flow isn't theoretical—your nervous system actively uses structured light to control action

*Tau vs. Heading*
- *Tau* tells you *WHEN* to act (time-to-contact)
- *Heading* tells you *WHERE* to steer (direction of travel)
- Together = complete guidance system

*Visual Proprioception (Lee & Aronson)*
- Lee: Vision dominates balance
- Warren: Vision dominates steering
- Both show vision is about perceiving self-motion and controlling action



= What to Focus On When Reading

*You don't need to spend a lot of time on (unless of course that's the sort of thing you're into):*
- VR apparatus details
- Statistical tables
- Trying to solve the equation

*Focus on:*
- The prism manipulation logic
- The pattern in walking paths across conditions (Figures 2-3)
- Conceptual interpretation: adaptive cue combination
- Connection to ecological optics and direct perception

*Bottom Line:* This is the first quantitative ecological control law you've seen. It provides evidence that perception-action coupling can be modeled precisely, not just described qualitatively.


