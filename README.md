# NiveshNadi Mutual Fund Desk

NiveshNadi is an India-focused mutual fund research desk for retail investors who want to understand a fund before starting, changing, or stopping SIP, STP, or portfolio allocations.

This Phase 1 v7.1 prototype is a compact static web app with no build step. Open `index.html` directly or publish the repository through GitHub Pages.

## What is included

- 3D-style corporate SVG logo and brand system.
- Self-research command desk with search, category, risk, and sorting controls.
- Demo mutual fund screener across equity, debt, hybrid, passive, and life-cycle categories.
- Fund DNA view with role, style, benchmark, holdings, sector map, and decision prompts.
- Goal Fit Compass that maps goal type, horizon, risk comfort, and SIP capacity to category-level research paths.
- First SIP Coach that turns a starting point into a guided route across Goal Fit, SIP lab, X-Ray, and Journal.
- SIP calculator with annual step-up support.
- STP calculator for staged transfers from a source corpus.
- Portfolio X-Ray for category concentration, blended expense, and shared holdings.
- Watchlist and Alerts Room for saved funds, review dates, expense triggers, drawdown triggers, score floors, and style checks.
- Nadi Decision Pack that converts selected fund research into an explainable pre-investment memo.
- Decision journal saved in browser local storage.
- Pricing and monetization preview with Free, Nadi Plus, Founder Circle, and Phase 2 Distributor Desk plans.
- Phase 2 distributor roadmap for ARN/EUIN/PAN-based client management.
- Compact v7.1 product layout with denser first screen, signal bars, mobile checks, floating fund search, back-to-top control, corrected sticky-header anchor landing, goal-fit research mapping, First SIP Coach, Watchlist and Alerts Room, Nadi Decision Pack, and a trust-first retail membership model.

## Important compliance posture

NiveshNadi is currently a self-research and investor education product. It does not provide personalized investment advice, execution, guaranteed returns, or distributor services.

Before adding personalized recommendations, model portfolios, suitability scoring, client-specific advice, or execution workflows, the business must resolve the SEBI Investment Adviser and Mutual Fund Distributor regulatory boundary.

## Monetization posture

Phase 1 should stay retail-friendly. The working model is:

- Free starter tier for basic self-research.
- Nadi Plus at Rs. 99/month or Rs. 999/year for serious individual investors.
- Founder Circle at Rs. 499 for year-one launch believers while live data is being connected.
- Phase 2 Distributor Desk as annual B2B software after ARN/EUIN/PAN, consent, and compliance design.

Paid features should monetize convenience, history, alerts, decision packs, exports, and workflow depth. They should not create hidden distribution bias or personalized advice.

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
5. Add live evidence citations inside the First SIP Coach, Watchlist alert room, and Nadi Decision Pack.
6. Add PDF/share exports for decision packs with plain compliance disclaimers.
7. Add investor education journeys for STP from cash, ELSS review, debt fund risk, and SIP review discipline.
8. Add account sync for watchlists, alerts, decision packs, and journals after authentication is designed.
9. Add payment, account, and entitlement logic after deciding GST, refund, and launch-offer policy.
10. Add distributor Phase 2 workspace only after compliance review.
