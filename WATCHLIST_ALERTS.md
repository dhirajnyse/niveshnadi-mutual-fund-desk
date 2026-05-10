# Risk Stress Lab

Risk Stress Lab is the Phase 1 v12 behavior layer. It converts a drawdown percentage into a rupee-impact scenario so a retail investor can understand what risk may feel like before starting, pausing, increasing, or reviewing an SIP.

## Purpose

Many investors accept a risk label in theory but panic when the portfolio falls in rupees. The lab makes that gap visible. It uses the selected fund, current corpus, monthly SIP, stress shock, behavior choice, and recovery assumption to create a plain-English research scenario.

## Current Prototype Behavior

Inputs:

- Current corpus.
- Monthly SIP during stress.
- Shock scenario: selected fund demo drawdown, 10 percent, 20 percent, or 30 percent.
- Behavior during stress: continue SIP, pause SIP, or exit after fall.
- Recovery assumption.

Outputs:

- Before-fall value.
- Rupee drawdown.
- After-fall value.
- Twelve-month simulated value.
- Recovery marker.
- Behavior posture.
- Copyable stress note.

## Compliance Posture

This is not a prediction and not advice. It should never claim that a fall, recovery, or investor action will happen. It should help the user write a behavior rule before stress occurs.

Use:

- Stress scenario.
- Behavior prompt.
- Drawdown impact.
- Recovery assumption.
- Research support only.

Avoid:

- "This fund will fall by this amount."
- "You should continue SIP."
- "Exit after this drawdown."
- "Recovery will happen in this period."

## Future Build Ideas

- Add stress templates for equity crash, debt credit event, interest-rate shock, SIP pause, and STP timing.
- Link stress notes into the Decision Journal.
- Add live drawdown history once factsheet and NAV sources are connected.
- Add household-level stress testing only after account, consent, privacy, and data security design is complete.
