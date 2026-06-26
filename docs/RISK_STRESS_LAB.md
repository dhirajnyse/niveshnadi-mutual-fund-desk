# Risk Stress Lab

## V209 anchor reliability

Risk Lab remains part of the deep-link QA set. The anchor landing guard checks the target position after navigation and re-centers the room if the browser restores a stale scroll location.

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

## V207 Bad Market Rehearsal

V207 adds a rehearsal layer inside the Risk Stress Lab. The tool now converts the same stress scenario into a pre-written bad-market plan with a rehearsal score, identity-light rehearsal ID, SIP-month pain marker, recovery discipline marker, no-panic rules, action lanes, evidence locks, blockers, and a copyable rehearsal note.

The purpose is behavioral: the investor should decide what they will check and what they will not do before a falling market creates pressure. The rehearsal never says to buy, sell, continue, pause, or switch. It forces source dates, peer comparison, cost checks, and memo reasoning before any real action feels permitted.

## V208 Market Panic Triage

V208 adds a panic-mode triage layer under the rehearsal. It converts the same stress scenario into a calm-action receipt with a triage score, wait window, allowed-now list, locked-until list, first proof route, route queue, emergency boundary, blockers, and a copyable panic triage note.

The triage separates emotional pressure from transaction permission. It can say "record, verify, compare, cost-check, and write the memo," but it must not say the user should buy, sell, switch, redeem, stop SIP, continue SIP, or increase SIP. The wait window and proof routes are research brakes, not transaction instructions.

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
