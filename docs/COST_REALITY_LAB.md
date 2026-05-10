# Cost Reality Lab

Cost Reality Lab is a rupee-friction discipline layer inside NiveshNadi. It turns fund cost decisions into rupee terms before an investor starts, increases, reviews, or switches an SIP or holding.

The lab uses the selected fund's demo expense ratio and investor-entered assumptions for amount reviewed, monthly SIP, holding horizon, lower-cost alternative TER, exit load, and tax friction. It then estimates TER drag, lower-cost saving, one-time switching friction, monthly saving, and the months needed to recover one-time friction through TER saving. The result is intentionally framed as a research scenario, not advice.

This feature matters because retail investors often react to headline return, star rating, recent performance, or a small expense-ratio difference without checking the actual rupee impact. A cheaper fund is not automatically a better decision if the current fund has a clear role, the tax or exit-load friction is high, the holding period is short, or the evidence base is weak. Likewise, a high-cost fund needs a written reason for why its role, style, and evidence justify the drag.

The tax field is only a user-entered friction assumption. The lab does not calculate tax liability, apply statutory tax rates, decide equity or debt taxation, or recommend switching. Future versions can add tax-bucket education after legal and tax review, but the current version should stay conservative and use disclaimers.

Before launch with real data, Cost Reality Lab should connect to plan type, direct/regular TER history, exit-load rules from SID/KIM documents, holding-period labels, and source-date-backed evidence. Any tax-sensitive output should be reviewed by a qualified tax professional and presented as education, not personalized tax advice.
