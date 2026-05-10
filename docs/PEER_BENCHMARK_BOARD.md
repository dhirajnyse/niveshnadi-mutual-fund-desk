# Peer Benchmark Board

Peer Benchmark Board is the Phase 1 v17 "look sideways" layer for NiveshNadi. It helps a retail investor avoid judging a mutual fund in isolation by showing the selected fund beside category and sleeve peers. The board compares Nadi score, expense, five-year demo return, drawdown, consistency, evidence readiness, and nearby alternatives.

The feature should stay research-only. It may show a peer rank, deltas versus category or sleeve averages, and questions that the investor should answer before adding the fund to a shortlist. It must not state that the highest-ranked peer is the right fund, best fund, suitable fund, or recommended transaction for a user. Ranking is a prompt for investigation, not a recommendation.

In the static prototype, peer groups are built from demo category and sleeve data. Some categories have only one demo fund, so the sleeve peer set is used to create a more useful comparison. In production, the board should use live AMFI category mapping, AMC factsheet dates, portfolio disclosure dates, TER history, riskometer status, and benchmark context before any peer signal is treated as current.

The "Add peers to compare" action is a workflow shortcut. It adds the selected fund and nearby sleeve peers to the Fund Compare Matrix so the user can inspect role, cost, overlap, evidence readiness, and decision questions. The copied peer note should include release version, selected fund, peer posture, sleeve rank, key deltas, nearby peer questions, and the research-only guardrail.
