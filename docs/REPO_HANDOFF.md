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
- Inspect a fund.
- Select compare funds, review Fund Compare Matrix, and copy the compare note.
- Build a First SIP Coach route and test each action button.
- Run SIP and STP calculators.
- Run Risk Stress Lab, change behavior and shock assumptions, and copy the stress note.
- Select portfolio funds and run Portfolio Intelligence X-Ray. Review role map, duplication score, overlap warnings, and research conclusion.
- Open Evidence Ledger, inspect selected fund source readiness, and copy the evidence log.
- Add funds to Watchlist and save/remove alert triggers.
- Build a Nadi Decision Pack, copy the pack text, and save the pack to Journal.
- Review pricing cards and Phase 2 preview copy.
- Save a decision journal note.
- Review `SECURITY.md`, `docs/SECURITY_MODEL.md`, `docs/DATA_CLASSIFICATION.md`, and `docs/SECURITY_RELEASE_CHECKLIST.md` before adding real user data.
