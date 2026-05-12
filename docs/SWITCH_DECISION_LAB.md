# Switch Decision Lab

Switch Decision Lab is the Phase 1 v21 change-discipline layer for NiveshNadi. It helps a retail investor slow down when they are thinking about changing an existing mutual fund SIP or allocation. The feature converts a concern into research lanes instead of giving a transaction instruction.

The lab uses the selected fund, concern type, holding period, monthly SIP under review, conviction level, exit or tax friction, red flags, profile pressure, peer context, evidence readiness, and compare-set overlap. It then shows research pressure and four possible evidence paths:

- Continue review route.
- Watch trigger route.
- Fresh-money checkpoint.
- Switch candidate research.

These are not buy, sell, switch, hold, pause, or redeem instructions. They are workflow prompts that tell the investor which research checklist should be completed before any real-world action is considered.

## Why It Exists

Retail investors often switch funds because of recent returns, social media noise, one bad quarter, or anxiety during a market fall. This can damage long-term SIP behavior. The lab gives them a structured pause:

- What exactly is the concern?
- Has the fund been held long enough to judge?
- Is the problem cost, risk, overlap, evidence, or goal mismatch?
- Would switching create tax, exit-load, or behavior friction?
- Which candidate funds should be compared, not blindly selected?

## Compliance Boundary

Allowed language: research pressure, change review, decision lanes, candidate research set, review trigger, fresh-money checkpoint, evidence path.

Avoid language: switch now, sell, redeem, hold, pause SIP, best replacement, recommended alternative, tax-efficient switch, or suitable replacement.

## Launch Gates

- Keep all Phase 1 inputs local and non-identity based.
- Add live source dates before using real performance, riskometer, expense, portfolio, and benchmark evidence.
- Separate tax and exit-load assumptions from advice. The user must verify these independently.
- When Phase 2 distributor workflows arrive, store switch rationale only with consent, audit trail, access control, and compliance review.
