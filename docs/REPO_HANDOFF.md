# Repository Handoff

## Suggested GitHub settings

- Repository name: `niveshnadi-mutual-fund-desk`
- Visibility: private for early product work
- Default branch: `main`
- GitHub Pages: deploy from `main` root when ready

## First push

```powershell
cd "C:\Users\dhiraj\Documents\New project\niveshnadi-mutual-fund-desk"
git init
git add .
git commit -m "Initial NiveshNadi mutual fund research desk"
git branch -M main
git remote add origin https://github.com/dhirajnyse/niveshnadi-mutual-fund-desk.git
git push -u origin main
```

## Smoke test before publishing

```powershell
node scripts/static-check.mjs
node scripts/security-audit.mjs
```

Or:

```powershell
npm run check
```

Then open `index.html` and test:

- Search funds.
- Filter by category and risk.
- Use Category Playbook, apply a category route to the screener, and copy the playbook note.
- Inspect a fund.
- Build a Suitability Passport, inspect the top match, and copy the passport note.
- Review Goal-Fund Fit Heatmap and copy the fit note for the selected fund.
- Review Red Flag Radar, add the fund to Watchlist, and copy the flag note.
- Build Switch Decision Lab lanes, add candidates to compare, and copy the switch note.
- Review Peer Benchmark Board, add nearby peers to compare, and copy the peer note.
- Select compare funds, review Fund Compare Matrix, and copy the compare note.
- Build a First SIP Coach route and test each action button.
- Run SIP and STP calculators.
- Run Risk Stress Lab, change behavior and shock assumptions, and copy the stress note.
- Run Cost Reality Lab, change exit-load and tax-friction assumptions, and copy the cost note.
- Run Investor Readiness Gate, toggle evidence and reason checks, change the action being considered, and copy the readiness note.
- Select portfolio funds and run Portfolio Intelligence X-Ray. Review role map, duplication score, overlap warnings, and research conclusion.
- Open Portfolio Blueprint Lab, edit weights, normalize them, review blended TER and guardrails, and copy the blueprint note.
- Open Rebalance Guard, edit current weights and tolerance, review drift cards, save a drift watch trigger, and copy the guard note.
- Open Portfolio Review Room, change review focus/date/conviction, confirm the review lanes and queue, save a review trigger, and copy the review note.
- Open Review Vault, save a review snapshot, compare score/evidence/drift deltas, copy the vault brief, and clear the vault.
- Open Investor Record Desk, compose a record label, change stance/audience/boundary, save a compact record, copy the record, and clear records.
- Open Research Dossier Builder, change label/mode/depth/boundary, save a dossier, copy the dossier packet, and clear dossiers.
- Open Evidence Ledger, inspect selected fund source readiness, and copy the evidence log.
- Open Fund House Lens, review process, evidence, cost, capacity, manager, and style signals, add a house review trigger, and copy the house note.
- Open Data Readiness Room, change source, launch mode, age, and citation posture, then copy the data spec.
- Open Nadi Doc Decoder, change document lens, investor question, and reading depth, then copy the doc note.
- Build Review Rhythm Board, save a review trigger, and copy the rhythm note.
- Add funds to Watchlist and save/remove alert triggers.
- Build a Nadi Decision Pack, copy the pack text, and save the pack to Journal.
- Review pricing cards and Phase 2 preview copy.
- Save a decision journal note.
- Review `SECURITY.md`, `docs/SECURITY_MODEL.md`, `docs/DATA_CLASSIFICATION.md`, and `docs/SECURITY_RELEASE_CHECKLIST.md` before adding real user data.
