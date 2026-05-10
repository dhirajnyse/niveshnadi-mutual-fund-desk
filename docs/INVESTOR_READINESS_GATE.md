# Investor Readiness Gate

Investor Readiness Gate is the Phase 1 pre-action discipline layer. It exists because a retail investor can understand a fund, like the return profile, and still move too quickly without writing the goal, stress behavior, cost friction, evidence freshness, portfolio overlap, emergency-money boundary, and decision reason. The gate turns those items into a visible checklist and readiness memo.

The output should use research language only. It may say "Memo ready", "Needs review", "Pause", or "Wait for evidence" because those are workflow states. It must not say that the investor should buy, sell, switch, redeem, hold, execute, or allocate. The gate is a way to slow down the decision process before using the Decision Pack or Journal.

For the static prototype, the score blends the selected fund's Nadi score, Evidence Ledger readiness, selected compare-set discipline, and the investor's own checklist confirmations. Critical misses depend on the action being considered. For example, evidence freshness and written reasoning matter more when the user selects Start SIP, Increase SIP, or Switch from another fund. Switching also makes cost, exit-load, and tax-friction review a critical checkpoint.

For launch, every readiness note should store release version, source data dates, user-entered assumptions, selected fund, action considered, review date, blockers, and the final research-only guardrail. If authentication is added later, readiness notes should follow the security model, avoid PAN or account identifiers unless absolutely required, and give the user clear controls for deletion and export.
