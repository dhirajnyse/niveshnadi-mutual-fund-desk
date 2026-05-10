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
```

Then open `index.html` and test:

- Search funds.
- Filter by category and risk.
- Inspect a fund.
- Build a First SIP Coach route and test each action button.
- Run SIP and STP calculators.
- Select portfolio funds and run X-Ray.
- Review pricing cards and Phase 2 preview copy.
- Save a decision journal note.
