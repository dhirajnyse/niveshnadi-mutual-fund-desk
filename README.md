# NiveshNadi Mutual Fund Desk

NiveshNadi is an India-focused mutual fund research desk for retail investors who want to understand a fund before starting, changing, or stopping SIP, STP, or portfolio allocations.

This Phase 1 v4 prototype is a compact static web app with no build step. Open `index.html` directly or publish the repository through GitHub Pages.

## What is included

- 3D-style corporate SVG logo and brand system.
- Self-research command desk with search, category, risk, and sorting controls.
- Demo mutual fund screener across equity, debt, hybrid, passive, and life-cycle categories.
- Fund DNA view with role, style, benchmark, holdings, sector map, and decision prompts.
- Goal Fit Compass that maps goal type, horizon, risk comfort, and SIP capacity to category-level research paths.
- SIP calculator with annual step-up support.
- STP calculator for staged transfers from a source corpus.
- Portfolio X-Ray for category concentration, blended expense, and shared holdings.
- Decision journal saved in browser local storage.
- Pricing and monetization preview with Free, Nadi Plus, Founder Circle, and Phase 2 Distributor Desk plans.
- Phase 2 distributor roadmap for ARN/EUIN/PAN-based client management.
- Compact v4 product layout with denser first screen, signal bars, mobile checks, floating fund search, back-to-top control, goal-fit research mapping, and a trust-first retail membership model.

## Important compliance posture

NiveshNadi is currently a self-research and investor education product. It does not provide personalized investment advice, execution, guaranteed returns, or distributor services.

Before adding personalized recommendations, model portfolios, suitability scoring, client-specific advice, or execution workflows, the business must resolve the SEBI Investment Adviser and Mutual Fund Distributor regulatory boundary.

## Monetization posture

Phase 1 should stay retail-friendly. The working model is:

- Free starter tier for basic self-research.
- Nadi Plus at Rs. 99/month or Rs. 999/year for serious individual investors.
- Founder Circle at Rs. 499 for year-one launch believers while live data is being connected.
- Phase 2 Distributor Desk as annual B2B software after ARN/EUIN/PAN, consent, and compliance design.

Paid features should monetize convenience, history, alerts, exports, and workflow depth. They should not create hidden distribution bias or personalized advice.

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
2. Add ELSS, arbitrage, overnight, gilt, low-duration, and sector/thematic categories.
3. Add real fund detail pages with citation-backed evidence.
4. Add portfolio import from manual CAS-style entries.
5. Add investor education journeys for first SIP, STP from cash, ELSS review, and debt fund risk.
6. Add payment, account, and entitlement logic after deciding GST, refund, and launch-offer policy.
7. Add distributor Phase 2 workspace only after compliance review.
