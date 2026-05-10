# NiveshNadi Mutual Fund Desk

NiveshNadi is an India-focused mutual fund research desk for retail investors who want to understand a fund before starting, changing, or stopping SIP, STP, or portfolio allocations.

This first prototype is a static web app with no build step. Open `index.html` directly or publish the repository through GitHub Pages.

## What is included

- 3D-style corporate SVG logo and brand system.
- Self-research command desk with search, category, risk, and sorting controls.
- Demo mutual fund screener across equity, debt, hybrid, passive, and life-cycle categories.
- Fund DNA view with role, style, benchmark, holdings, sector map, and decision prompts.
- SIP calculator with annual step-up support.
- STP calculator for staged transfers from a source corpus.
- Portfolio X-Ray for category concentration, blended expense, and shared holdings.
- Decision journal saved in browser local storage.
- Phase 2 distributor roadmap for ARN/EUIN/PAN-based client management.

## Important compliance posture

NiveshNadi is currently a self-research and investor education product. It does not provide personalized investment advice, execution, guaranteed returns, or distributor services.

Before adding personalized recommendations, model portfolios, suitability scoring, client-specific advice, or execution workflows, the business must resolve the SEBI Investment Adviser and Mutual Fund Distributor regulatory boundary.

## Local use

Open:

```powershell
C:\Users\dhiraj\Documents\New project\niveshnadi-mutual-fund-desk\index.html
```

Optional static validation:

```powershell
node scripts/static-check.mjs
```

## GitHub repository handoff

Suggested repository name:

```text
niveshnadi-mutual-fund-desk
```

Suggested description:

```text
India mutual fund research desk for SIP, STP, portfolio x-ray, and investor decision support.
```

After creating the empty GitHub repository:

```powershell
cd "C:\Users\dhiraj\Documents\New project\niveshnadi-mutual-fund-desk"
git init
git add .
git commit -m "Initial NiveshNadi mutual fund research desk"
git branch -M main
git remote add origin https://github.com/dhirajnyse/niveshnadi-mutual-fund-desk.git
git push -u origin main
```

## Next build milestones

1. Replace demo fund data with normalized AMFI, AMC factsheet, SID, and KIM source records.
2. Add real fund detail pages with citation-backed evidence.
3. Add portfolio import from manual CAS-style entries.
4. Add investor education journeys for first SIP, STP from cash, ELSS review, and debt fund risk.
5. Add distributor Phase 2 workspace only after compliance review.
