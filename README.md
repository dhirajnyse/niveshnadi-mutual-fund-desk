# NiveshNadi Mutual Fund Desk

NiveshNadi is an India-focused mutual fund research desk for retail investors who want to understand a fund before starting, changing, or stopping SIP, STP, or portfolio allocations.

This Phase 1 v17 prototype is a compact static web app with no build step. Open `index.html` directly or publish the repository through GitHub Pages.

## What is included

- 3D-style corporate SVG logo and brand system.
- Self-research command desk with search, category, risk, and sorting controls.
- Demo mutual fund screener across equity, debt, hybrid, passive, and life-cycle categories.
- Category Playbook that turns investor intent, time horizon, and risk comfort into category-first research lanes before fund shortlisting.
- Fund DNA view with role, style, benchmark, holdings, sector map, and decision prompts.
- Peer Benchmark Board that compares the selected fund against category and sleeve peers for score, cost, return, drawdown, consistency, evidence readiness, and nearby alternatives.
- Fund Compare Matrix for side-by-side shortlist review across role, cost, risk, score, evidence readiness, and decision questions.
- Goal Fit Compass that maps goal type, horizon, risk comfort, and SIP capacity to category-level research paths.
- First SIP Coach that turns a starting point into a guided route across Goal Fit, SIP lab, X-Ray, and Journal.
- SIP calculator with annual step-up support.
- STP calculator for staged transfers from a source corpus.
- Risk Stress Lab that converts drawdowns into rupee-impact and behavior scenarios.
- Cost Reality Lab that translates TER drag, lower-cost alternatives, exit-load assumptions, and user-entered tax friction into rupee terms.
- Investor Readiness Gate that checks goal clarity, stress review, cost review, evidence freshness, X-Ray overlap, emergency money, and written reasoning before a user moves from research to action.
- Portfolio Intelligence X-Ray for category concentration, blended expense, role clarity, duplication score, shared holdings, and research warnings.
- Evidence Ledger that maps selected fund signals to AMFI, AMC factsheet, SID, KIM, portfolio disclosure, benchmark, riskometer, and TER source readiness.
- Data Readiness Room that scores AMFI, AMC, SID/KIM, portfolio disclosure, benchmark, and TER pipelines before any live claim is allowed.
- Watchlist and Alerts Room for saved funds, review dates, expense triggers, drawdown triggers, score floors, and style checks.
- Nadi Decision Pack that converts selected fund research into an explainable pre-investment memo.
- Decision journal saved in browser local storage.
- Pricing and monetization preview with Free, Nadi Plus, Founder Circle, and Phase 2 Distributor Desk plans.
- Phase 2 distributor roadmap for ARN/EUIN/PAN-based client management.
- Security foundation with `SECURITY.md`, threat model, data classification, release checklist, and automated security audit.
- Compact v17 product layout with denser first screen, signal bars, mobile checks, floating fund search, back-to-top control, tuned sticky-header anchor landing, Category Playbook, Peer Benchmark Board, Fund Compare Matrix, goal-fit research mapping, First SIP Coach, Risk Stress Lab, Cost Reality Lab, Investor Readiness Gate, Portfolio Intelligence X-Ray, Evidence Ledger, Data Readiness Room, Watchlist and Alerts Room, Nadi Decision Pack, and a trust-first retail membership model.

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

## Security posture

Phase 1 is a static research prototype with demo data only. It does not collect PAN, ARN, EUIN, account credentials, payment details, CAS files, or distributor client records. Security guardrails are documented in:

- `SECURITY.md`
- `docs/SECURITY_MODEL.md`
- `docs/DATA_CLASSIFICATION.md`
- `docs/SECURITY_RELEASE_CHECKLIST.md`

Before adding login, live APIs, payments, PAN, ARN/EUIN, portfolio import, or distributor client management, update the security model and data classification first.

## Local use

Open:

```powershell
C:\Users\dhiraj\Documents\New project\niveshnadi-mutual-fund-desk\index.html
```

Optional static validation:

```powershell
node scripts/static-check.mjs
node scripts/security-audit.mjs
```

Or run both checks through npm:

```powershell
npm run check
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

1. Replace demo fund data with normalized AMFI, AMC factsheet, SID, and KIM source records using the Data Readiness Room gates.
2. Add ELSS, arbitrage, overnight, gilt, low-duration, and sector/thematic categories.
3. Add real fund detail pages with citation-backed evidence.
4. Add portfolio import from manual CAS-style entries.
5. Expand Category Playbook and compare-set templates for first SIP, tax saving, debt parking, retirement, review, and switch research.
6. Add stress, cost, and readiness templates for equity drawdown, debt credit event, SIP pause, STP timing, TER drag, exit load, switching friction, evidence gaps, and memo readiness research.
7. Replace demo Evidence Ledger statuses with source-date-backed live citations and field-level validation states.
8. Add live evidence citations inside the First SIP Coach, Watchlist alert room, Data Readiness Room, and Nadi Decision Pack.
9. Add PDF/share exports for decision packs, stress notes, and compare notes with plain compliance disclaimers.
10. Add investor education journeys for STP from cash, ELSS review, debt fund risk, and SIP review discipline.
11. Add live factsheet-backed Portfolio Intelligence with citation dates and holding-level source records.
12. Add account sync for watchlists, alerts, stress notes, decision packs, compare notes, and journals after authentication is designed.
13. Add payment, account, and entitlement logic after deciding GST, refund, and launch-offer policy.
14. Add CI security gates for static checks, security audit, secret scanning, and dependency audit.
15. Add distributor Phase 2 workspace only after compliance and security review.
