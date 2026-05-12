const DATA_VERSION = "20260512-36";
const RELEASE_LABEL = "NiveshNadi Phase 1 v77 Build Tracker";

const FUNDS = [
  {
    id: "large-core",
    name: "Nadi Large Cap Core Fund",
    category: "Large Cap Fund",
    sleeve: "Equity",
    risk: "High",
    expense: 0.34,
    aum: 28400,
    returns3y: 17.8,
    returns5y: 15.1,
    maxDrawdown: 18,
    consistency: 82,
    researchCoverage: 86,
    minSip: 500,
    style: "Quality compounders with lower portfolio churn",
    role: "Core equity anchor for long horizon SIP investors.",
    manager: "Demo data team",
    benchmark: "Nifty 100 TRI",
    holdings: ["HDFC Bank", "Reliance Industries", "Infosys", "Larsen and Toubro", "ICICI Bank"],
    sectors: ["Financials", "Energy", "Technology", "Industrials"],
    tags: ["core", "lower churn", "quality"]
  },
  {
    id: "flexi-compass",
    name: "Nadi Flexi Compass Fund",
    category: "Flexi Cap Fund",
    sleeve: "Equity",
    risk: "Very High",
    expense: 0.52,
    aum: 18650,
    returns3y: 21.2,
    returns5y: 17.7,
    maxDrawdown: 24,
    consistency: 79,
    researchCoverage: 82,
    minSip: 500,
    style: "Dynamic large, mid, and small cap allocation",
    role: "One-fund equity satellite for investors comfortable with higher volatility.",
    manager: "Demo data team",
    benchmark: "Nifty 500 TRI",
    holdings: ["ICICI Bank", "Trent", "Larsen and Toubro", "Persistent Systems", "Zomato"],
    sectors: ["Financials", "Consumer", "Industrials", "Technology"],
    tags: ["flexible", "growth", "satellite"]
  },
  {
    id: "elss-tax",
    name: "Nadi ELSS Tax Saver Fund",
    category: "ELSS Fund",
    sleeve: "Equity",
    risk: "High",
    expense: 0.47,
    aum: 11600,
    returns3y: 18.9,
    returns5y: 15.8,
    maxDrawdown: 22,
    consistency: 78,
    researchCoverage: 74,
    minSip: 500,
    style: "Tax-saving equity allocation with a three-year lock-in",
    role: "Tax-planning equity sleeve for investors who can accept lock-in and drawdown.",
    manager: "Demo data team",
    benchmark: "Nifty 500 TRI",
    holdings: ["HDFC Bank", "ICICI Bank", "Infosys", "Larsen and Toubro", "Trent"],
    sectors: ["Financials", "Technology", "Industrials", "Consumer"],
    tags: ["tax", "elss", "lock-in", "section 80c"]
  },
  {
    id: "mid-growth",
    name: "Nadi Mid Cap Growth Fund",
    category: "Mid Cap Fund",
    sleeve: "Equity",
    risk: "Very High",
    expense: 0.61,
    aum: 12480,
    returns3y: 25.4,
    returns5y: 20.3,
    maxDrawdown: 31,
    consistency: 73,
    researchCoverage: 76,
    minSip: 500,
    style: "Growth at reasonable price with higher active share",
    role: "Aggressive satellite for investors with 7 year plus horizon.",
    manager: "Demo data team",
    benchmark: "Nifty Midcap 150 TRI",
    holdings: ["Persistent Systems", "Avenue Supermarts", "Tube Investments", "Cummins India", "Polycab India"],
    sectors: ["Industrials", "Consumer", "Technology", "Capital Goods"],
    tags: ["mid cap", "active", "long horizon"]
  },
  {
    id: "small-discovery",
    name: "Nadi Small Cap Discovery Fund",
    category: "Small Cap Fund",
    sleeve: "Equity",
    risk: "Very High",
    expense: 0.69,
    aum: 8750,
    returns3y: 29.1,
    returns5y: 23.8,
    maxDrawdown: 38,
    consistency: 68,
    researchCoverage: 72,
    minSip: 500,
    style: "Broad small cap basket with valuation discipline",
    role: "High volatility wealth creation sleeve, only after core allocation is stable.",
    manager: "Demo data team",
    benchmark: "Nifty Smallcap 250 TRI",
    holdings: ["Cera Sanitaryware", "Apar Industries", "KEI Industries", "Jupiter Wagons", "Blue Jet Healthcare"],
    sectors: ["Industrials", "Consumer", "Healthcare", "Capital Goods"],
    tags: ["small cap", "volatile", "satellite"]
  },
  {
    id: "balanced-bridge",
    name: "Nadi Balanced Bridge Fund",
    category: "Balanced Hybrid Fund",
    sleeve: "Hybrid",
    risk: "Moderate",
    expense: 0.42,
    aum: 15220,
    returns3y: 12.2,
    returns5y: 11.4,
    maxDrawdown: 10,
    consistency: 84,
    researchCoverage: 80,
    minSip: 500,
    style: "Equity and debt allocation with rebalancing discipline",
    role: "Goal-aligned bridge for first-time investors or conservative equity entry.",
    manager: "Demo data team",
    benchmark: "Hybrid Composite TRI",
    holdings: ["HDFC Bank", "Reliance Industries", "Government Securities", "AAA Corporate Bond", "Gold ETF"],
    sectors: ["Financials", "Energy", "Sovereign Debt", "Gold"],
    tags: ["hybrid", "balanced", "starter"]
  },
  {
    id: "corporate-bond",
    name: "Nadi Corporate Bond Fund",
    category: "Corporate Bond Fund",
    sleeve: "Debt",
    risk: "Moderate",
    expense: 0.22,
    aum: 22180,
    returns3y: 7.1,
    returns5y: 6.5,
    maxDrawdown: 3,
    consistency: 88,
    researchCoverage: 81,
    minSip: 1000,
    style: "AA+ and above credit quality focus",
    role: "Debt allocation for medium term goals where credit risk needs discipline.",
    manager: "Demo data team",
    benchmark: "Corporate Bond Index",
    holdings: ["AAA PSU Bond", "AAA Bank Bond", "AAA NBFC Bond", "T-Bill", "Cash"],
    sectors: ["Banking", "PSU", "Financials", "Money Market"],
    tags: ["debt", "credit quality", "medium term"]
  },
  {
    id: "liquid-parking",
    name: "Nadi Liquid Parking Fund",
    category: "Liquid Fund",
    sleeve: "Debt",
    risk: "Low",
    expense: 0.12,
    aum: 35750,
    returns3y: 6.2,
    returns5y: 5.4,
    maxDrawdown: 1,
    consistency: 91,
    researchCoverage: 78,
    minSip: 500,
    style: "Money market and very short maturity instruments",
    role: "Parking bucket for emergency money, STP source, or near-term cash.",
    manager: "Demo data team",
    benchmark: "Liquid Fund Index",
    holdings: ["T-Bill", "Certificate of Deposit", "Commercial Paper", "Cash"],
    sectors: ["Money Market", "Banking", "Cash"],
    tags: ["liquid", "parking", "stp source"]
  },
  {
    id: "index-nifty",
    name: "Nadi Nifty 50 Index Fund",
    category: "Index Fund",
    sleeve: "Passive",
    risk: "High",
    expense: 0.18,
    aum: 19880,
    returns3y: 16.5,
    returns5y: 14.2,
    maxDrawdown: 19,
    consistency: 80,
    researchCoverage: 84,
    minSip: 100,
    style: "Low-cost Nifty 50 tracking",
    role: "Simple low-cost equity beta for investors who prefer passive exposure.",
    manager: "Demo data team",
    benchmark: "Nifty 50 TRI",
    holdings: ["HDFC Bank", "Reliance Industries", "ICICI Bank", "Infosys", "Larsen and Toubro"],
    sectors: ["Financials", "Energy", "Technology", "Industrials"],
    tags: ["passive", "low cost", "core"]
  },
  {
    id: "multi-asset",
    name: "Nadi Multi Asset Allocation Fund",
    category: "Multi Asset Allocation Fund",
    sleeve: "Hybrid",
    risk: "Moderate",
    expense: 0.48,
    aum: 9460,
    returns3y: 11.6,
    returns5y: 10.9,
    maxDrawdown: 9,
    consistency: 83,
    researchCoverage: 79,
    minSip: 500,
    style: "Equity, debt, and gold allocation with tactical bands",
    role: "Diversified all-weather bucket for investors who want smoother experience.",
    manager: "Demo data team",
    benchmark: "Multi Asset Composite",
    holdings: ["Nifty Basket", "Government Securities", "Gold ETF", "AAA Corporate Bond", "Cash"],
    sectors: ["Equity Basket", "Sovereign Debt", "Gold", "Corporate Debt"],
    tags: ["multi asset", "gold", "balanced"]
  },
  {
    id: "life-cycle-2040",
    name: "Nadi Life Cycle 2040 Fund",
    category: "Life Cycle Fund",
    sleeve: "Life Cycle",
    risk: "High",
    expense: 0.44,
    aum: 4120,
    returns3y: 13.8,
    returns5y: 12.1,
    maxDrawdown: 14,
    consistency: 77,
    researchCoverage: 70,
    minSip: 500,
    style: "Goal year glide path from equity to debt",
    role: "Retirement-style planning bucket for investors targeting a known future year.",
    manager: "Demo data team",
    benchmark: "Life Cycle Composite 2040",
    holdings: ["Large Cap Basket", "Mid Cap Basket", "Government Securities", "Gold ETF", "InvIT Basket"],
    sectors: ["Equity Basket", "Sovereign Debt", "Gold", "Infrastructure"],
    tags: ["goal based", "glide path", "new category"]
  }
];

const ALERT_TYPES = {
  review: {
    label: "Review date",
    defaultLimit: "2026-06-30",
    hint: "Review the fund on the saved date."
  },
  expense: {
    label: "Expense ratio above",
    defaultLimit: "0.60",
    hint: "Watch if the expense ratio rises above your comfort limit."
  },
  drawdown: {
    label: "Drawdown above",
    defaultLimit: "25",
    hint: "Watch if drawdown becomes larger than the planned risk band."
  },
  score: {
    label: "Nadi score below",
    defaultLimit: "70",
    hint: "Watch if the research score falls below the minimum comfort level."
  },
  style: {
    label: "Style or manager check",
    defaultLimit: "Quarterly",
    hint: "Review style drift, manager change, or AMC communication."
  }
};

const EVIDENCE_SOURCES = [
  {
    title: "AMFI scheme and NAV master",
    status: "Demo mapped",
    cadence: "Daily source, monthly summary",
    fields: ["scheme identity", "category", "NAV history placeholder", "AUM reference"],
    launchGate: "Connect official AMFI files and store source date."
  },
  {
    title: "AMC monthly factsheet",
    status: "Demo mapped",
    cadence: "Monthly",
    fields: ["returns", "expense ratio", "manager", "style", "factsheet holdings"],
    launchGate: "Add AMC PDF extraction, validation, and visible citation links."
  },
  {
    title: "SID and KIM documents",
    status: "Schema planned",
    cadence: "Offer document and update events",
    fields: ["investment objective", "risk factors", "loads", "minimum SIP", "suitability language"],
    launchGate: "Attach latest document version and change date before launch."
  },
  {
    title: "Portfolio disclosure file",
    status: "Demo mapped",
    cadence: "Monthly",
    fields: ["top holdings", "sector map", "issuer concentration", "debt quality"],
    launchGate: "Capture holdings date so stale portfolios are never shown as live."
  },
  {
    title: "Benchmark and index data",
    status: "Schema planned",
    cadence: "Daily or monthly",
    fields: ["benchmark name", "relative return", "tracking context", "category peer map"],
    launchGate: "Define licensed benchmark source and allowed display fields."
  },
  {
    title: "Riskometer and TER history",
    status: "Demo mapped",
    cadence: "Monthly and event-driven",
    fields: ["risk band", "expense drift", "drawdown watch", "review trigger"],
    launchGate: "Keep historical changes and alert users when posture changes."
  }
];

const CITATION_SOURCES = [
  {
    id: "amfi-nav",
    title: "AMFI scheme and NAV master",
    sourceType: "Official scheme/NAV feed",
    maxAge: 2,
    citationPath: "AMFI source file, source date, scheme code, and ingestion run id",
    fields: ["scheme identity", "category", "NAV date", "AUM reference"],
    proofFor: "Scheme identity, category, active status, and NAV freshness.",
    launchGate: "Source date must be visible and not older than the daily freshness rule."
  },
  {
    id: "amc-factsheet",
    title: "AMC monthly factsheet",
    sourceType: "AMC PDF or structured monthly file",
    maxAge: 45,
    citationPath: "AMC factsheet URL/file, factsheet month, page/table reference, extraction confidence",
    fields: ["returns", "expense ratio", "manager", "style", "factsheet holdings"],
    proofFor: "Expense, returns, manager, AUM, portfolio style, and holdings context.",
    launchGate: "Factsheet month and extraction confidence must be shown before fund-level facts look current."
  },
  {
    id: "sid-kim",
    title: "SID and KIM documents",
    sourceType: "Offer document and key information memorandum",
    maxAge: 180,
    citationPath: "Latest SID/KIM URL, version date, change date, and clause/page reference",
    fields: ["investment objective", "risk factors", "loads", "minimum SIP", "suitability language"],
    proofFor: "Objective, risk factors, loads, minimum SIP, suitability language, and scheme boundaries.",
    launchGate: "Latest version and change date must be attached before document language is summarized."
  },
  {
    id: "portfolio-disclosure",
    title: "Portfolio disclosure file",
    sourceType: "AMC portfolio disclosure",
    maxAge: 45,
    citationPath: "Portfolio file URL, holdings date, table reference, and reconciliation check",
    fields: ["top holdings", "sector map", "issuer concentration", "debt quality"],
    proofFor: "Holdings, sector exposure, issuer concentration, and portfolio overlap checks.",
    launchGate: "Holdings date must be explicit so stale portfolios are never presented as live."
  },
  {
    id: "benchmark-feed",
    title: "Benchmark and index data",
    sourceType: "Licensed benchmark/index source",
    maxAge: 35,
    citationPath: "Benchmark provider/source, data date, allowed display field, and license note",
    fields: ["benchmark name", "relative return", "tracking context", "category peer map"],
    proofFor: "Benchmark name, relative return context, passive tracking, and peer comparison.",
    launchGate: "Licensed source and allowed display fields must be approved before benchmark claims launch."
  },
  {
    id: "risk-ter",
    title: "Riskometer and TER history",
    sourceType: "AMC factsheet, TER disclosure, and riskometer update",
    maxAge: 35,
    citationPath: "Riskometer/TER file, disclosure date, prior value, and change flag",
    fields: ["risk band", "expense drift", "drawdown watch", "review trigger"],
    proofFor: "Risk band, expense drift, riskometer changes, and review triggers.",
    launchGate: "Current and prior values must be retained so changes can trigger review."
  }
];

const DATA_PIPELINES = [
  {
    id: "amfi-nav",
    title: "AMFI scheme and NAV master",
    owner: "Data operations",
    cadence: "Daily",
    freshnessDays: 1,
    readiness: 78,
    purpose: "Scheme identity, NAV history, category mapping, and active/inactive scheme status.",
    fields: ["scheme code", "scheme name", "AMC", "category", "NAV", "NAV date", "AUM reference"],
    checks: ["file date captured", "scheme code dedupe", "NAV date not future", "stale scheme flag"],
    blockers: ["official source path", "historical NAV retention", "scheme merger handling"]
  },
  {
    id: "amc-factsheet",
    title: "AMC monthly factsheet",
    owner: "Research operations",
    cadence: "Monthly",
    freshnessDays: 45,
    readiness: 66,
    purpose: "Expense, returns, manager, portfolio style, holdings, sector, and issuer exposure evidence.",
    fields: ["return periods", "expense ratio", "manager", "AUM", "top holdings", "sector map", "riskometer"],
    checks: ["PDF source date", "field extraction confidence", "holdings total check", "citation link visible"],
    blockers: ["AMC format variation", "PDF table extraction QA", "factsheet date normalization"]
  },
  {
    id: "sid-kim",
    title: "SID and KIM documents",
    owner: "Compliance research",
    cadence: "Event-driven",
    freshnessDays: 180,
    readiness: 54,
    purpose: "Investment objective, loads, risk factors, suitability text, and offer document change history.",
    fields: ["objective", "asset allocation", "loads", "minimum SIP", "risk factors", "benchmark"],
    checks: ["latest version attached", "change date captured", "risk text unchanged", "KIM/SID link visible"],
    blockers: ["version tracking", "document update alerts", "suitability language review"]
  },
  {
    id: "portfolio-disclosure",
    title: "Portfolio disclosure file",
    owner: "Portfolio evidence",
    cadence: "Monthly",
    freshnessDays: 45,
    readiness: 70,
    purpose: "Holdings overlap, sector sleeve, issuer concentration, debt quality, and stale portfolio warnings.",
    fields: ["holding name", "weight", "sector", "issuer", "rating", "maturity", "disclosure date"],
    checks: ["weights add up", "holding names normalized", "disclosure date visible", "stale portfolio blocked"],
    blockers: ["issuer normalization", "debt instrument classification", "cash and derivatives treatment"]
  },
  {
    id: "benchmark-feed",
    title: "Benchmark and index data",
    owner: "Market data",
    cadence: "Daily or monthly",
    freshnessDays: 7,
    readiness: 58,
    purpose: "Benchmark comparison, category context, tracking difference, and relative performance claims.",
    fields: ["benchmark name", "index value", "return periods", "TRI flag", "category peer map"],
    checks: ["licensed source noted", "TRI/non-TRI flag", "date alignment", "display rights reviewed"],
    blockers: ["source license", "index family mapping", "return period methodology"]
  },
  {
    id: "risk-ter",
    title: "Riskometer and TER history",
    owner: "Risk controls",
    cadence: "Monthly and event-driven",
    freshnessDays: 35,
    readiness: 74,
    purpose: "Risk band changes, expense drift, TER history, and review triggers for investor watchlists.",
    fields: ["riskometer band", "TER", "direct/regular plan", "change date", "review trigger"],
    checks: ["plan type clear", "history retained", "material change alert", "source month visible"],
    blockers: ["plan class mapping", "expense history source", "alert language review"]
  }
];

const DOC_DECODER_GUIDES = {
  kim: {
    title: "KIM snapshot",
    source: "Key Information Memorandum",
    pipelineId: "sid-kim",
    readiness: 60,
    purpose: "Quick read for objective, category, riskometer, minimum SIP, expense, loads, and benchmark.",
    mustRead: ["investment objective", "asset allocation", "riskometer", "expense and loads", "minimum application"],
    launchGate: "Attach latest KIM version, document date, and public source link before live use."
  },
  sid: {
    title: "SID deep read",
    source: "Scheme Information Document",
    pipelineId: "sid-kim",
    readiness: 52,
    purpose: "Deeper read for strategy, risk factors, asset allocation ranges, restrictions, and change history.",
    mustRead: ["investment strategy", "risk factors", "asset allocation ranges", "loads", "benchmark methodology"],
    launchGate: "Track SID version, change date, addendum history, and clause-level citations."
  },
  factsheet: {
    title: "AMC factsheet",
    source: "Monthly factsheet",
    pipelineId: "amc-factsheet",
    readiness: 68,
    purpose: "Monthly read for returns, AUM, expense, manager, style, holdings, sectors, and riskometer.",
    mustRead: ["fund manager", "AUM", "portfolio style", "top holdings", "sector exposure"],
    launchGate: "Parse AMC PDF fields, store factsheet month, and show extraction confidence."
  },
  portfolio: {
    title: "Portfolio disclosure",
    source: "Monthly portfolio file",
    pipelineId: "portfolio-disclosure",
    readiness: 70,
    purpose: "Holdings read for overlap, issuer concentration, debt quality, sector mix, and stale portfolio risk.",
    mustRead: ["holdings date", "top holdings", "sector mix", "issuer concentration", "debt quality"],
    launchGate: "Block stale disclosure dates and normalize holdings before showing overlap as current."
  },
  "risk-ter": {
    title: "Riskometer and TER history",
    source: "Risk and expense history",
    pipelineId: "risk-ter",
    readiness: 74,
    purpose: "Change-history read for riskometer movement, TER drift, plan class, and review triggers.",
    mustRead: ["riskometer band", "TER history", "plan class", "change date", "material change note"],
    launchGate: "Retain monthly history and make change alerts visible without transaction language."
  }
};

const GLOSSARY_TERMS = [
  {
    id: "sip",
    term: "SIP",
    bucket: "cashflow",
    plain: "A fixed amount invested regularly instead of investing the whole amount on one day.",
    why: "Useful for discipline and averaging, but it does not remove market risk.",
    check: "Check monthly affordability, emergency buffer, horizon, and whether the selected fund role fits the goal.",
    example: "Rs. 10,000 monthly for 7 years should still have a review date and stop/pause rules."
  },
  {
    id: "stp",
    term: "STP",
    bucket: "cashflow",
    plain: "A planned transfer from one fund to another in installments, usually from a debt or liquid source into equity.",
    why: "Useful when the investor has a lump sum and wants staged equity entry.",
    check: "Check source fund risk, exit load, tax impact, transfer period, and whether the target fund duplicates existing exposure.",
    example: "A liquid fund can be a parking bucket before a monthly transfer into an equity fund."
  },
  {
    id: "nav",
    term: "NAV",
    bucket: "fund-data",
    plain: "The per-unit value of a mutual fund on a given date.",
    why: "NAV is an accounting value, not a signal that a fund is cheap or expensive.",
    check: "Compare return, risk, cost, and portfolio evidence instead of judging by high or low NAV.",
    example: "A fund with NAV 200 is not automatically costlier than a fund with NAV 20."
  },
  {
    id: "ter",
    term: "TER",
    bucket: "cost",
    plain: "Total Expense Ratio is the annual cost deducted inside the fund before returns reach the investor.",
    why: "Small-looking percentages can create meaningful rupee drag over long SIP periods.",
    check: "Check direct versus regular plan, TER date, category peer cost, and Cost Reality Lab output.",
    example: "A 0.30% cost gap matters more as portfolio size and holding period increase."
  },
  {
    id: "drawdown",
    term: "Drawdown",
    bucket: "risk",
    plain: "The fall from a previous high to a later low.",
    why: "It converts risk from abstract words into the kind of loss an investor may have to emotionally survive.",
    check: "Run Stress Lab before increasing high-risk or very-high-risk funds.",
    example: "A 25% drawdown on Rs. 10 lakh means a temporary fall of about Rs. 2.5 lakh."
  },
  {
    id: "riskometer",
    term: "Riskometer",
    bucket: "risk",
    plain: "A regulatory risk label shown for a scheme, such as low, moderate, high, or very high.",
    why: "It is a starting warning label, not a full personal suitability answer.",
    check: "Pair it with horizon, drawdown, portfolio role, concentration, and behavior review.",
    example: "Very High risk may still be researchable, but only with a long horizon and clear sizing."
  },
  {
    id: "benchmark",
    term: "Benchmark",
    bucket: "fund-data",
    plain: "The reference index used to judge whether the fund's return and risk are reasonable.",
    why: "Without the right benchmark, outperformance or underperformance claims can mislead.",
    check: "Confirm TRI/non-TRI method, benchmark name, and category fit before comparing returns.",
    example: "A large-cap fund should not be judged only against a small-cap rally."
  },
  {
    id: "exit-load",
    term: "Exit load",
    bucket: "cost",
    plain: "A charge that may apply if units are redeemed before a stated holding period.",
    why: "It can make quick switching or short holding periods more expensive.",
    check: "Read the live KIM/SID load clause before assuming a switch or redemption is frictionless.",
    example: "A 1% exit load for early exit can matter when the investment period is short."
  },
  {
    id: "direct-regular",
    term: "Direct vs Regular",
    bucket: "cost",
    plain: "Direct plans usually have lower TER; regular plans include distributor commission inside expenses.",
    why: "The right channel depends on advice/service need, but the cost difference must be visible.",
    check: "Do not mix plan classes when comparing TER or returns.",
    example: "Regular plan support may be valuable for some investors, but cost should be known upfront."
  },
  {
    id: "aum",
    term: "AUM",
    bucket: "fund-data",
    plain: "Assets Under Management is the total money managed in the fund.",
    why: "Too small can raise viability concerns; too large can create capacity questions in some categories.",
    check: "Interpret AUM by category, liquidity, strategy, and portfolio style rather than alone.",
    example: "Small-cap capacity needs a different lens than liquid fund scale."
  },
  {
    id: "idcw",
    term: "IDCW",
    bucket: "cashflow",
    plain: "Income Distribution cum Capital Withdrawal is a payout option, not guaranteed income.",
    why: "Payouts can come from gains or capital and may reduce NAV.",
    check: "Check tax treatment, payout history, and whether growth option is better for compounding.",
    example: "IDCW should not be treated like bank interest."
  },
  {
    id: "tracking-error",
    term: "Tracking error",
    bucket: "passive",
    plain: "How closely an index fund or ETF follows its benchmark.",
    why: "Passive funds should be judged on cost, tracking difference, liquidity, and execution quality.",
    check: "Compare TER, tracking difference, AUM, portfolio replication, and benchmark source.",
    example: "A low-cost index fund still needs tracking discipline."
  }
];

const BEHAVIOR_TRIGGERS = {
  "market-fall": {
    label: "Market fall",
    bias: "panic reaction",
    firstCheck: "Run Stress Lab before changing SIP, STP, or redemption intent.",
    route: "#risk-lab",
    wait: "Sleep on it and revisit after the next market close."
  },
  "recent-winner": {
    label: "Recent winner",
    bias: "return chasing",
    firstCheck: "Compare role, cost, drawdown, and evidence before adding more money.",
    route: "#compare",
    wait: "Wait until the fund has passed score anatomy and peer context."
  },
  "peer-noise": {
    label: "Friend or social media tip",
    bias: "borrowed conviction",
    firstCheck: "Use Retail Glossary and Evidence Ledger to convert the tip into source-backed questions.",
    route: "#evidence",
    wait: "Do not act until the reason is written in your own words."
  },
  "sip-fatigue": {
    label: "SIP fatigue",
    bias: "discipline drop",
    firstCheck: "Check goal, emergency buffer, and whether the fund still has a role.",
    route: "#investor-passport",
    wait: "Review affordability before stopping a long-term SIP."
  },
  "switch-urge": {
    label: "Switch urge",
    bias: "action bias",
    firstCheck: "Run Switch Lab and Cost Reality Lab before treating movement as improvement.",
    route: "#switch-lab",
    wait: "Require a review date, exit-load check, and written change thesis."
  },
  "lump-sum": {
    label: "Bonus or lump sum",
    bias: "cash deployment pressure",
    firstCheck: "Test STP, emergency money, goal fit, and portfolio duplication first.",
    route: "#calculator",
    wait: "Stage the research before staging the money."
  },
  "tax-rush": {
    label: "Tax deadline rush",
    bias: "deadline pressure",
    firstCheck: "Check ELSS lock-in, role, cost, and whether tax saving is crowding the portfolio.",
    route: "#goal-fit",
    wait: "Do not let the deadline replace suitability and evidence review."
  },
  "low-conviction": {
    label: "Low conviction",
    bias: "unclear thesis",
    firstCheck: "Build a Decision Pack or keep the fund on watch until the reason is clear.",
    route: "#decision-pack",
    wait: "No written reason, no fresh action."
  }
};

const CLAIM_PRESETS = {
  guarantee: "This mutual fund can give guaranteed high returns with no risk.",
  best: "This is the best mutual fund to invest in right now.",
  winner: "This fund gave the highest return last year, so it should be selected for SIP.",
  cheap: "The NAV is low, so the fund is cheap and has more upside.",
  nfo: "This new fund offer is available at Rs. 10 NAV, so it is better to enter now.",
  dividend: "Choose IDCW because it gives regular income like interest.",
  tax: "Invest immediately for tax saving before checking the fund role.",
  expense: "Lowest expense ratio means this fund is automatically the best choice.",
  influencer: "A social media post says this fund will beat all peers."
};

const CLAIM_PATTERNS = [
  {
    id: "guarantee",
    label: "Guarantee language",
    keywords: ["guarantee", "guaranteed", "assured", "fixed return", "sure return", "no risk"],
    severity: 30,
    route: "#evidence",
    check: "Mutual fund returns must not be treated as guaranteed. Confirm riskometer, category risk, and official source language."
  },
  {
    id: "best",
    label: "Best-fund shortcut",
    keywords: ["best", "number one", "no. 1", "top fund", "beat all"],
    severity: 18,
    route: "#compare",
    check: "Best depends on goal, horizon, risk comfort, role, cost, evidence, and overlap. Run Compare before trusting the claim."
  },
  {
    id: "winner",
    label: "Recent performance chase",
    keywords: ["last year", "highest return", "top performer", "recent return", "one year return"],
    severity: 22,
    route: "#score-anatomy",
    check: "Past return needs consistency, drawdown, cost, and benchmark context. Do not let one period dominate the score."
  },
  {
    id: "cheap-nav",
    label: "Low NAV misunderstanding",
    keywords: ["low nav", "cheap nav", "rs. 10 nav", "10 nav", "more units", "cheap fund"],
    severity: 20,
    route: "#glossary",
    check: "Low NAV does not make a mutual fund cheap. Use TER, holdings, risk, benchmark, and role instead."
  },
  {
    id: "income",
    label: "Income confusion",
    keywords: ["dividend", "idcw", "regular income", "monthly income", "interest like"],
    severity: 18,
    route: "#doc-decoder",
    check: "IDCW is not bank interest. Read scheme documents, payout history, tax treatment, and compounding tradeoff."
  },
  {
    id: "tax-rush",
    label: "Tax deadline pressure",
    keywords: ["tax saving", "80c", "deadline", "march", "elss"],
    severity: 16,
    route: "#goal-fit",
    check: "Tax saving should not replace fund role, lock-in, cost, risk, and portfolio fit review."
  },
  {
    id: "expense-only",
    label: "Expense-only conclusion",
    keywords: ["lowest expense", "low expense", "lowest ter", "cheap ter"],
    severity: 14,
    route: "#cost-lab",
    check: "Low TER helps, but role, tracking, drawdown, evidence, and category fit still matter."
  },
  {
    id: "social-proof",
    label: "Borrowed conviction",
    keywords: ["social media", "youtube", "telegram", "whatsapp", "friend", "influencer"],
    severity: 24,
    route: "#behavior-guard",
    check: "A borrowed claim must be converted into source-backed evidence and a reason written in the investor's own words."
  }
];

const state = {
  selectedId: FUNDS[0].id,
  compare: new Set(["large-core", "index-nifty"]),
  blueprintWeights: {},
  rebalanceWeights: {},
  answerSheetHydrated: false,
  hashSettleUntil: 0,
  filters: {
    search: "",
    category: "all",
    risk: "all",
    sort: "score"
  }
};

const els = {};

const BUILD_TRACKER_PHASES = [
  {
    phase: "Phase 0",
    label: "Brand and static foundation",
    progress: 100,
    status: "Complete",
    route: "#build-tracker",
    done: ["NiveshNadi brand system", "static GitHub Pages app", "security headers and release checks"],
    next: "Keep release packaging clean."
  },
  {
    phase: "Phase 1A",
    label: "Retail self-research cockpit",
    progress: 94,
    status: "Active",
    route: "#screener",
    done: ["screener", "profile room", "compare matrix", "goal fit", "SIP/STP lab"],
    next: "Polish flows and reduce decision friction."
  },
  {
    phase: "Phase 1B",
    label: "Decision discipline and memo path",
    progress: 88,
    status: "Active",
    route: "#clearance-sprint",
    done: ["question stack", "answer sheet", "conviction ladder", "proof queue", "memo clearance", "clearance sprint"],
    next: "Make every blocker route measurable."
  },
  {
    phase: "Phase 1C",
    label: "Trust, evidence, and safety layer",
    progress: 82,
    status: "Active",
    route: "#evidence",
    done: ["evidence ledger", "citation binder", "source QA", "claim gates", "privacy controls"],
    next: "Connect live source-date and citation status."
  },
  {
    phase: "Phase 1D",
    label: "Portfolio review and habit layer",
    progress: 78,
    status: "Active",
    route: "#portfolio-review",
    done: ["X-Ray", "blueprint", "rebalance guard", "review vault", "watchlist", "dossier builder"],
    next: "Tighten recurring review and saved research packets."
  },
  {
    phase: "Phase 1E",
    label: "Launch, monetization, and account layer",
    progress: 42,
    status: "Planned",
    route: "#pricing",
    done: ["pricing posture", "share-safe export", "consent gate", "security model"],
    next: "Add auth, subscriptions, backend storage, live feeds, and payment rails."
  },
  {
    phase: "Phase 2",
    label: "Distributor and client management",
    progress: 18,
    status: "Planned",
    route: "#consent-gate",
    done: ["handoff boundaries", "privacy model", "future MFD workflow notes"],
    next: "Design ARN/EUIN, PAN consent, client book, and distributor dashboard after Phase 1 launch."
  }
];

function qs(selector) {
  return document.querySelector(selector);
}

function qsa(selector) {
  return Array.from(document.querySelectorAll(selector));
}

function escapeHtml(value) {
  return String(value)
    .replaceAll("&", "&amp;")
    .replaceAll("<", "&lt;")
    .replaceAll(">", "&gt;")
    .replaceAll('"', "&quot;")
    .replaceAll("'", "&#039;");
}

function formatCr(value) {
  return `Rs. ${Number(value).toLocaleString("en-IN")} cr`;
}

function formatMoney(value) {
  const amount = Number(value);
  if (amount >= 10000000) return `Rs. ${(amount / 10000000).toFixed(2)} cr`;
  if (amount >= 100000) return `Rs. ${(amount / 100000).toFixed(2)} lakh`;
  return `Rs. ${Math.round(amount).toLocaleString("en-IN")}`;
}

function nadiScore(fund) {
  const drawdownControl = Math.max(0, 100 - fund.maxDrawdown * 2.1);
  const expenseScore = Math.max(0, 100 - fund.expense * 75);
  return Math.round(
    fund.consistency * 0.34 +
    drawdownControl * 0.22 +
    expenseScore * 0.18 +
    fund.researchCoverage * 0.16 +
    Math.min(fund.returns5y * 3.4, 100) * 0.1
  );
}

function nadiScoreParts(fund) {
  const drawdownControl = Math.max(0, 100 - fund.maxDrawdown * 2.1);
  const expenseScore = Math.max(0, 100 - fund.expense * 75);
  const returnSupport = Math.min(fund.returns5y * 3.4, 100);
  const parts = [
    {
      id: "consistency",
      label: "Consistency",
      raw: fund.consistency,
      weight: 34,
      contribution: fund.consistency * 0.34,
      detail: "Rewards smoother category-relative behavior and repeatability in demo data.",
      improve: "Improve only with steadier rolling performance and fewer style surprises."
    },
    {
      id: "drawdown",
      label: "Drawdown control",
      raw: drawdownControl,
      weight: 22,
      contribution: drawdownControl * 0.22,
      detail: `${fund.maxDrawdown}% demo drawdown is translated into a control score.`,
      improve: "Improves when downside capture, volatility, and peak-to-trough falls are lower."
    },
    {
      id: "expense",
      label: "Expense discipline",
      raw: expenseScore,
      weight: 18,
      contribution: expenseScore * 0.18,
      detail: `${fund.expense.toFixed(2)}% TER is converted into a cost discipline score.`,
      improve: "Improves when TER is lower or stays below category and sleeve peers."
    },
    {
      id: "coverage",
      label: "Research coverage",
      raw: fund.researchCoverage,
      weight: 16,
      contribution: fund.researchCoverage * 0.16,
      detail: "Rewards available demo research coverage for style, role, holdings, and manager context.",
      improve: "Improves when source-backed factsheet, SID/KIM, portfolio, TER, and riskometer fields are richer."
    },
    {
      id: "return",
      label: "Return support",
      raw: returnSupport,
      weight: 10,
      contribution: returnSupport * 0.1,
      detail: `${fund.returns5y.toFixed(1)}% five-year demo return is capped so returns never dominate the score.`,
      improve: "Improves with persistent category-relative returns, but remains capped to avoid performance chasing."
    }
  ];
  const score = Math.round(parts.reduce((sum, part) => sum + part.contribution, 0));
  return { drawdownControl, expenseScore, parts, returnSupport, score };
}

function scoreAnatomyBand(score) {
  if (score >= 82) return "Strong demo score";
  if (score >= 72) return "Research-worthy score";
  if (score >= 62) return "Needs stronger proof";
  return "Watch before shortlisting";
}

function scoreAnatomyConfig() {
  const fund = selectedFund();
  const anatomy = nadiScoreParts(fund);
  const peer = peerBenchmarkConfig();
  const evidence = evidenceReadinessScore(fund);
  const weakest = [...anatomy.parts].sort((a, b) => a.raw - b.raw)[0];
  const strongest = [...anatomy.parts].sort((a, b) => b.raw - a.raw)[0];
  const peerDelta = anatomy.score - peer.sleeveAvg.score;
  const notes = [
    `The Nadi score is a weighted research score, not a rating, recommendation, or guarantee.`,
    `Largest driver: ${strongest.label} contributes ${strongest.contribution.toFixed(1)} points.`,
    `Weakest driver: ${weakest.label} has a raw score of ${Math.round(weakest.raw)}/100.`,
    evidence < 70
      ? `Evidence readiness is ${evidence}/100, so source proof is the first trust gate even if the score looks usable.`
      : `Evidence readiness is ${evidence}/100, but live source dates and citations are still required before launch use.`
  ];
  const pressure = [];
  if (fund.maxDrawdown >= 18) pressure.push("Drawdown control is under pressure; run Stress Lab before any memo.");
  if (fund.expense > peer.sleeveAvg.expense + 0.12) pressure.push("Expense discipline is under pressure versus sleeve peers.");
  if (fund.researchCoverage < 78 || evidence < 78) pressure.push("Coverage and citation depth should be strengthened before relying on the score.");
  if (fund.returns5y * 3.4 >= 100) pressure.push("Return support is capped, so recent performance cannot overpower risk and cost.");
  if (!pressure.length) pressure.push("No single score driver dominates; still verify peer context and live evidence.");

  return {
    anatomy,
    evidence,
    fund,
    notes,
    peer,
    peerDelta,
    pressure,
    score: anatomy.score,
    status: scoreAnatomyBand(anatomy.score),
    strongest,
    weakest
  };
}

function signalStripConfig() {
  const fund = selectedFund();
  const score = nadiScore(fund);
  const evidence = evidenceReadinessScore(fund);
  const peer = peerBenchmarkConfig();
  const compareFunds = compareSet();
  const riskControl = Math.round(Math.max(0, 100 - fund.maxDrawdown * 2));
  const sleeveDelta = score - peer.sleeveAvg.score;
  const stressRequired = fund.maxDrawdown >= 22 || fund.risk === "Very High";
  const costNeedsCheck = fund.expense > peer.sleeveAvg.expense + 0.1;

  let posture = "Research candidate";
  let tone = "steady";
  let postureCopy = "Score, cost, and evidence are usable for deeper self-research.";
  if (evidence < 70) {
    posture = "Evidence first";
    tone = "caution";
    postureCopy = "Score is secondary until source dates, citations, and demo/live status are checked.";
  } else if (stressRequired) {
    posture = "Stress test first";
    tone = "watch";
    postureCopy = "Drawdown behavior should be understood before any SIP or switch memo.";
  } else if (score >= 80 && sleeveDelta >= 0) {
    posture = "Strong shortlist";
    tone = "ready";
    postureCopy = "This fund is ahead of its sleeve peer signal, but still needs evidence and role checks.";
  } else if (costNeedsCheck) {
    posture = "Cost check";
    tone = "watch";
    postureCopy = "TER is above the sleeve comfort line, so rupee cost impact should be reviewed.";
  }

  let next = {
    label: "Compare role",
    route: "#compare",
    reason: "Add at least one peer before deciding whether this fund has a distinct job."
  };
  if (evidence < 78) {
    next = {
      label: "Open Evidence",
      route: "#evidence",
      reason: "Confirm AMFI, AMC factsheet, SID/KIM, TER, portfolio, and riskometer readiness."
    };
  } else if (stressRequired) {
    next = {
      label: "Run Stress",
      route: "#risk-lab",
      reason: "Convert drawdown into rupee impact before writing a decision reason."
    };
  } else if (costNeedsCheck) {
    next = {
      label: "Check Cost",
      route: "#cost-lab",
      reason: "Compare TER drag, tax friction, and lower-cost alternatives."
    };
  } else if (compareFunds.length >= 2) {
    next = {
      label: "Build Pack",
      route: "#decision-pack",
      reason: "The shortlist is ready for a written memo with amount, review date, and guardrails."
    };
  }

  const quickRoutes = [
    { label: "Score", route: "#score-anatomy" },
    { label: "Evidence", route: "#evidence" },
    { label: "Stress", route: "#risk-lab" },
    { label: "Pack", route: "#decision-pack" }
  ];

  return {
    compareCount: compareFunds.length,
    costNeedsCheck,
    evidence,
    fund,
    next,
    peer,
    posture,
    postureCopy,
    quickRoutes,
    riskControl,
    score,
    sleeveDelta,
    stressRequired,
    tone
  };
}

function renderSignalStrip() {
  if (!els.nadiSignalStrip) return;
  const signal = signalStripConfig();
  els.nadiSignalStrip.innerHTML = `
    <article class="signal-hero ${escapeHtml(signal.tone)}">
      <div>
        <span>Selected signal</span>
        <strong>${escapeHtml(signal.posture)}</strong>
        <p>${escapeHtml(signal.postureCopy)}</p>
      </div>
      <div class="signal-score" style="--score:${signal.score}">
        <b>${signal.score}</b>
        <span>Nadi</span>
      </div>
    </article>
    <article>
      <span>Current fund</span>
      <strong>${escapeHtml(signal.fund.name)}</strong>
      <p>${escapeHtml(signal.fund.category)} | ${escapeHtml(signal.fund.risk)} risk | ${signal.compareCount} in compare set</p>
    </article>
    <article>
      <span>Trust and risk</span>
      <strong>${signal.evidence}/100 evidence</strong>
      <p>Risk control ${signal.riskControl}/100 | sleeve delta ${signal.sleeveDelta >= 0 ? "+" : ""}${signal.sleeveDelta.toFixed(1)}</p>
    </article>
    <article>
      <span>Next check</span>
      <strong>${escapeHtml(signal.next.label)}</strong>
      <p>${escapeHtml(signal.next.reason)}</p>
    </article>
    <article class="signal-actions">
      <span>Quick jump</span>
      <div>
        ${signal.quickRoutes.map((item) => `
          <button class="signal-chip" type="button" data-signal-route="${escapeHtml(item.route)}">${escapeHtml(item.label)}</button>
        `).join("")}
      </div>
      <button class="text-button" id="copySignalStrip" type="button">Copy signal</button>
    </article>
  `;
}

function makeSignalStripNote() {
  const signal = signalStripConfig();
  return [
    `# NiveshNadi Signal Strip - ${signal.fund.name}`,
    `Release: ${RELEASE_LABEL} (${DATA_VERSION})`,
    `Posture: ${signal.posture}`,
    `Nadi score: ${signal.score}/100`,
    `Evidence readiness: ${signal.evidence}/100`,
    `Risk control: ${signal.riskControl}/100`,
    `Sleeve peer delta: ${signal.sleeveDelta >= 0 ? "+" : ""}${signal.sleeveDelta.toFixed(1)}`,
    `Next check: ${signal.next.label}`,
    `Reason: ${signal.next.reason}`,
    "",
    "Research support only. This signal is not a recommendation, personalized advice, execution instruction, or return guarantee."
  ].join("\n");
}

function buildTrackerConfig() {
  const weightedProgress = Math.round(
    BUILD_TRACKER_PHASES.reduce((sum, phase) => sum + phase.progress, 0) / BUILD_TRACKER_PHASES.length
  );
  const completed = BUILD_TRACKER_PHASES.filter((phase) => phase.progress >= 95).length;
  const active = BUILD_TRACKER_PHASES.filter((phase) => phase.status === "Active");
  const planned = BUILD_TRACKER_PHASES.filter((phase) => phase.status === "Planned");
  const current = active[active.length - 1] || BUILD_TRACKER_PHASES[0];
  const nextLane = planned[0] || current;
  const doneModules = BUILD_TRACKER_PHASES.flatMap((phase) => phase.done.map((item) => ({
    phase: phase.phase,
    item
  })));
  const nextMoves = [
    {
      label: "Phase 1 polish",
      route: "#clearance-sprint",
      owner: "Current build",
      detail: "Keep tightening the self-research journey from signal to memo to review."
    },
    {
      label: "Live data readiness",
      route: "#data-readiness",
      owner: "Launch gate",
      detail: "Connect AMFI, AMC factsheet, SID/KIM, portfolio disclosure, TER, riskometer, benchmark, and citation dates."
    },
    {
      label: "Membership layer",
      route: "#pricing",
      owner: "Phase 1 launch",
      detail: "Prepare low-cost retail plans, account storage, payments, limits, and trust-first onboarding."
    },
    {
      label: "Distributor foundation",
      route: "#consent-gate",
      owner: "Phase 2",
      detail: "Plan ARN/EUIN, PAN-consent workflow, client book, distributor dashboard, and privacy controls."
    }
  ];
  const pace = `v77 | ${BUILD_TRACKER_PHASES.length} build lanes | ${doneModules.length} completed or drafted modules`;
  const guardrails = [
    "Build Tracker is a project roadmap for this prototype; it is not an investor-facing recommendation or launch promise.",
    "Completion percentages are product-build estimates, not regulatory, legal, data, security, or commercial readiness certifications.",
    "Before production launch, live data, auth, privacy, payment, audit logs, disclosures, and legal review must be handled separately."
  ];
  return {
    active,
    completed,
    current,
    doneModules,
    guardrails,
    nextLane,
    nextMoves,
    pace,
    phases: BUILD_TRACKER_PHASES,
    planned,
    weightedProgress
  };
}

function renderBuildTracker() {
  if (!els.buildTrackerOutput) return;
  const tracker = buildTrackerConfig();
  if (els.buildTrackerSummary) {
    els.buildTrackerSummary.textContent = `${tracker.weightedProgress}/100 | ${tracker.current.phase}`;
  }
  els.buildTrackerOutput.innerHTML = `
    <div class="build-tracker-hero">
      <div>
        <span class="metric-label">Current build phase</span>
        <h3>${escapeHtml(tracker.current.phase)}: ${escapeHtml(tracker.current.label)}</h3>
        <p>${escapeHtml(tracker.current.next)}</p>
      </div>
      <div class="build-tracker-score" style="--score:${tracker.weightedProgress}">
        <b>${tracker.weightedProgress}</b>
        <span>Build</span>
      </div>
    </div>
    <div class="build-tracker-metrics">
      <article><span>Prototype version</span><strong>Phase 1 v77</strong><p>${escapeHtml(RELEASE_LABEL)}</p></article>
      <article><span>Current phase</span><strong>${escapeHtml(tracker.current.phase)}</strong><p>${escapeHtml(tracker.current.label)}</p></article>
      <article><span>Active lanes</span><strong>${tracker.active.length}</strong><p>${tracker.planned.length} planned lanes waiting</p></article>
      <article><span>Done modules</span><strong>${tracker.doneModules.length}</strong><p>${escapeHtml(tracker.pace)}</p></article>
    </div>
    <div class="build-phase-grid">
      ${tracker.phases.map((phase) => `
        <article class="${phase.status === "Complete" ? "complete" : phase.status === "Active" ? "active" : "planned"}">
          <div><span>${escapeHtml(phase.phase)} | ${escapeHtml(phase.status)}</span><strong>${escapeHtml(phase.label)}</strong></div>
          <div class="build-progress-bar" aria-label="${escapeHtml(phase.label)} progress"><span style="width:${phase.progress}%"></span></div>
          <p>${phase.progress}/100 | ${escapeHtml(phase.next)}</p>
          <button class="text-button" type="button" data-build-route="${escapeHtml(phase.route)}">Open lane</button>
        </article>
      `).join("")}
    </div>
    <div class="build-next-grid">
      <article>
        <span>What is done</span>
        <strong>Core Phase 1 desk is alive</strong>
        <ul>
          ${tracker.doneModules.slice(0, 10).map((entry) => `<li>${escapeHtml(entry.phase)}: ${escapeHtml(entry.item)}</li>`).join("")}
        </ul>
      </article>
      <article>
        <span>What comes next</span>
        <strong>${escapeHtml(tracker.nextLane.phase)}: ${escapeHtml(tracker.nextLane.label)}</strong>
        <ul>
          ${tracker.nextMoves.map((move) => `<li>${escapeHtml(move.label)}: ${escapeHtml(move.detail)}</li>`).join("")}
        </ul>
      </article>
    </div>
    <div class="build-move-grid">
      ${tracker.nextMoves.map((move) => `
        <article>
          <span>${escapeHtml(move.owner)}</span>
          <strong>${escapeHtml(move.label)}</strong>
          <p>${escapeHtml(move.detail)}</p>
          <button class="text-button" type="button" data-build-route="${escapeHtml(move.route)}">Open</button>
        </article>
      `).join("")}
    </div>
    <div class="build-tracker-guardrail">
      <span>Tracker boundary</span>
      <ul>
        ${tracker.guardrails.map((item) => `<li>${escapeHtml(item)}</li>`).join("")}
      </ul>
    </div>
  `;
}

function makeBuildTrackerBrief() {
  const tracker = buildTrackerConfig();
  return [
    "# NiveshNadi Build Tracker",
    `Release: ${RELEASE_LABEL} (${DATA_VERSION})`,
    `Overall prototype progress: ${tracker.weightedProgress}/100`,
    `Current phase: ${tracker.current.phase} - ${tracker.current.label}`,
    `Active lanes: ${tracker.active.length}`,
    `Planned lanes: ${tracker.planned.length}`,
    "",
    "## Phase Status",
    ...tracker.phases.map((phase) => `- ${phase.phase}: ${phase.label} | ${phase.status} | ${phase.progress}/100 | Next: ${phase.next}`),
    "",
    "## Next Moves",
    ...tracker.nextMoves.map((move) => `- ${move.label}: ${move.detail}`),
    "",
    "## Guardrails",
    ...tracker.guardrails.map((item) => `- ${item}`),
    "",
    "Project roadmap only. Completion percentages are build estimates, not launch readiness certifications."
  ].join("\n");
}

function openBuildNextLane() {
  scrollToHash(buildTrackerConfig().nextLane.route, "smooth", true);
}

function riskClass(risk) {
  return `risk-${risk.toLowerCase().replaceAll(" ", "-")}`;
}

function selectedFund() {
  return FUNDS.find((fund) => fund.id === state.selectedId) || FUNDS[0];
}

function filteredFunds() {
  const term = state.filters.search.trim().toLowerCase();
  const items = FUNDS.filter((fund) => {
    const searchable = [
      fund.name,
      fund.category,
      fund.sleeve,
      fund.risk,
      fund.role,
      fund.style,
      ...fund.tags
    ].join(" ").toLowerCase();
    return (
      (!term || searchable.includes(term)) &&
      (state.filters.category === "all" || fund.category === state.filters.category) &&
      (state.filters.risk === "all" || fund.risk === state.filters.risk)
    );
  });

  return items.sort((a, b) => {
    if (state.filters.sort === "expense") return a.expense - b.expense;
    if (state.filters.sort === "consistency") return b.consistency - a.consistency;
    if (state.filters.sort === "drawdown") return a.maxDrawdown - b.maxDrawdown;
    return nadiScore(b) - nadiScore(a);
  });
}

function renderCategoryFilter() {
  const categories = [...new Set(FUNDS.map((fund) => fund.category))].sort();
  els.categoryFilter.insertAdjacentHTML(
    "beforeend",
    categories.map((category) => `<option value="${escapeHtml(category)}">${escapeHtml(category)}</option>`).join("")
  );
}

function renderWatchFundSelect() {
  if (!els.watchFundSelect) return;
  els.watchFundSelect.innerHTML = FUNDS.map((fund) => `
    <option value="${escapeHtml(fund.id)}">${escapeHtml(fund.name)} | ${escapeHtml(fund.category)}</option>
  `).join("");
  els.watchFundSelect.value = state.selectedId;
}

function renderFundGrid() {
  const funds = filteredFunds();
  if (els.fundCount) {
    els.fundCount.textContent = `${funds.length} of ${FUNDS.length} funds`;
  }
  if (!funds.length) {
    els.fundGrid.innerHTML = '<div class="no-results">No funds match this research filter. Reset filters or widen the category.</div>';
    return;
  }

  els.fundGrid.innerHTML = funds.map((fund) => {
    const score = nadiScore(fund);
    const selected = fund.id === state.selectedId ? " is-selected" : "";
    const checked = state.compare.has(fund.id) ? "checked" : "";
    const tags = [fund.sleeve, fund.risk]
      .map((tag) => `<span class="tag ${tag === fund.risk ? riskClass(fund.risk) : ""}">${escapeHtml(tag)}</span>`)
      .join("");
    const consistency = Math.min(100, Math.max(0, fund.consistency));
    const drawdown = Math.min(100, Math.max(0, 100 - fund.maxDrawdown * 2));

    return `
      <article class="fund-card${selected}" data-fund-card="${escapeHtml(fund.id)}">
        <div class="fund-card-top">
          <div>
            <div class="fund-meta">${tags}</div>
            <h3>${escapeHtml(fund.name)}</h3>
            <p class="fund-category">${escapeHtml(fund.category)}</p>
          </div>
          <div class="score" style="--score: ${score}"><span>${score}</span></div>
        </div>
        <p class="score-copy">${escapeHtml(fund.role)}</p>
        <div class="signal-strip" aria-label="${escapeHtml(fund.name)} signal strength">
          <div class="signal-row">
            <span>Consistency</span>
            <div class="signal-bar"><span style="width: ${consistency}%"></span></div>
            <strong>${consistency}</strong>
          </div>
          <div class="signal-row">
            <span>Risk control</span>
            <div class="signal-bar"><span style="width: ${drawdown}%"></span></div>
            <strong>${drawdown}</strong>
          </div>
        </div>
        <div class="metric-grid">
          <div><span>Expense</span><strong>${fund.expense.toFixed(2)}%</strong></div>
          <div><span>5Y demo</span><strong>${fund.returns5y.toFixed(1)}%</strong></div>
          <div><span>Drawdown</span><strong>${fund.maxDrawdown}%</strong></div>
        </div>
        <div class="fund-actions">
          <button class="text-button" type="button" data-select-fund="${escapeHtml(fund.id)}">Inspect</button>
          <label class="compare-toggle">
            <input type="checkbox" data-compare-fund="${escapeHtml(fund.id)}" ${checked}>
            Compare
          </label>
        </div>
      </article>
    `;
  }).join("");
}

function readProfileRoomConfig() {
  return {
    confidence: els.profileConfidence?.value || "new",
    drawdown: els.profileDrawdown?.value || "balanced",
    emergency: els.profileEmergency?.value || "partial",
    horizon: clampNumber(Number(els.profileHorizon?.value || 7), 1, 40),
    intent: els.profileIntent?.value || "first-sip",
    sip: clampNumber(Number(els.profileMonthlySip?.value || 10000), 0, 10000000)
  };
}

function profileIntentLabel(intent) {
  return {
    "first-sip": "Start or improve SIP",
    parking: "Park money or STP source",
    tax: "ELSS tax route",
    retirement: "Long-term wealth goal",
    review: "Portfolio review"
  }[intent] || "Start or improve SIP";
}

function profileDrawdownLabel(drawdown) {
  return {
    low: "Low volatility preferred",
    balanced: "Normal equity swings",
    growth: "High volatility accepted",
    aggressive: "Sharp drawdowns accepted"
  }[drawdown] || "Normal equity swings";
}

function profileConfidenceLabel(confidence) {
  return {
    new: "New to mutual funds",
    building: "Building research habit",
    reviewing: "Already reviewing funds"
  }[confidence] || "New to mutual funds";
}

function profileRoomRisk(drawdown) {
  if (drawdown === "low") return "conservative";
  if (drawdown === "growth") return "growth";
  if (drawdown === "aggressive") return "aggressive";
  return "balanced";
}

function profileRoomInvestorConfig(config = readProfileRoomConfig()) {
  return {
    confidence: config.confidence === "reviewing" || config.intent === "review" ? "shortlist" : config.confidence === "building" ? "shortlist" : "exploring",
    emergency: config.emergency,
    goal: config.intent,
    horizon: config.horizon,
    risk: profileRoomRisk(config.drawdown),
    sip: config.sip,
    stage: config.confidence === "new" ? "new" : config.confidence === "reviewing" ? "reviewing" : "building"
  };
}

function profilePrimaryCategory(config, investorConfig) {
  if (config.emergency === "no" || config.intent === "parking" || config.horizon < 3) return "Liquid Fund";
  if (config.intent === "tax") return "ELSS Fund";
  if (config.intent === "retirement" && config.horizon >= 12) return "Life Cycle Fund";
  if (config.intent === "review") return "Index Fund";
  if (investorConfig.risk === "conservative") return "Balanced Hybrid Fund";
  if (investorConfig.risk === "aggressive") return "Flexi Cap Fund";
  return config.horizon >= 7 ? "Large Cap Fund" : "Balanced Hybrid Fund";
}

function profileRoomRoute(config, investorConfig) {
  if (config.intent === "review") return "#portfolio-review";
  if (config.emergency === "no" || config.intent === "parking" || config.intent === "tax") return "#category-playbook";
  if (config.confidence === "reviewing") return "#compare";
  return investorRoute(investorConfig);
}

function profileRoomProfile() {
  const config = readProfileRoomConfig();
  const investorConfig = profileRoomInvestorConfig(config);
  const route = profileRoomRoute(config, investorConfig);
  const primaryCategory = profilePrimaryCategory(config, investorConfig);
  const selected = selectedFund();
  const candidates = FUNDS
    .map((fund) => {
      let score = investorFundFitScore(fund, investorConfig);
      if (fund.category === primaryCategory) score += 10;
      if (config.confidence === "new" && ["Small Cap Fund", "Mid Cap Fund"].includes(fund.category)) score -= 10;
      if (config.drawdown === "aggressive" && ["Mid Cap Fund", "Small Cap Fund", "Flexi Cap Fund"].includes(fund.category)) score += 6;
      return { fund, score: Math.round(clampNumber(score, 18, 98)) };
    })
    .sort((a, b) => b.score - a.score || nadiScore(b.fund) - nadiScore(a.fund));

  const selectedFit = candidates.find((item) => item.fund.id === selected.id)?.score || investorFundFitScore(selected, investorConfig);
  let readiness = 58;
  readiness += config.emergency === "yes" ? 12 : config.emergency === "partial" ? 4 : -18;
  readiness += config.horizon >= 7 ? 9 : config.horizon >= 3 ? 3 : -9;
  readiness += config.sip > 0 ? 5 : -8;
  readiness += config.confidence === "reviewing" ? 7 : config.confidence === "building" ? 4 : 0;
  readiness += config.drawdown === "aggressive" && config.horizon < 7 ? -12 : 0;
  readiness += selectedFit >= 75 ? 4 : selectedFit < 50 ? -6 : 0;
  readiness = Math.round(clampNumber(readiness, 24, 95));

  const posture = (() => {
    if (config.emergency === "no") return "Safety buffer first";
    if (config.horizon < 3) return "Liquidity-first route";
    if (config.intent === "review") return "Review route ready";
    if (config.intent === "tax") return "Tax route framed";
    if (config.drawdown === "aggressive") return "Satellite discipline needed";
    if (config.confidence === "new") return "Starter route ready";
    return "Research route ready";
  })();
  const tone = readiness >= 74 ? "strong" : readiness >= 56 ? "watch" : "caution";
  const categoryRoute = (() => {
    if (config.emergency === "no") return "Emergency buffer and liquid/debt research should come before volatile fund selection.";
    if (config.intent === "parking") return "Cash parking, STP source, liquid fund, and debt quality checks come first.";
    if (config.intent === "tax") return "ELSS can be studied, but tax benefit must be separated from investment fit.";
    if (config.intent === "retirement") return "Long-horizon route should compare core equity, passive, hybrid, and glide-path options.";
    if (config.intent === "review") return "Review starts with X-Ray, compare, cost, evidence, and role duplication checks.";
    return "Starter SIP route should compare simple core categories before satellite risk.";
  })();
  const guardrails = [
    "No PAN, folio, CAS file, bank detail, account credential, or personal identifier is needed for this profile.",
    "The profile only routes research workflow; it is not suitability approval, advice, execution, or a return guarantee.",
    "Before launch use, connect live AMFI, AMC factsheet, SID/KIM, TER, riskometer, and portfolio disclosure sources."
  ];
  if (config.emergency === "no") guardrails.push("Do not frame equity SIP research as urgent until emergency money is protected.");
  if (config.drawdown === "aggressive") guardrails.push("Aggressive drawdown comfort still needs sizing, core allocation, and stress testing.");
  if (config.horizon < 5 && ["growth", "aggressive"].includes(investorConfig.risk)) guardrails.push("High volatility with a short horizon needs a written pause rule.");

  return {
    amountLabel: formatMoney(config.sip),
    candidates,
    categoryRoute,
    config,
    guardrails,
    investorConfig,
    posture,
    primaryCategory,
    readiness,
    route,
    routeLabel: workspaceOption(route)?.textContent?.trim() || "Research route",
    selected,
    selectedFit,
    tone
  };
}

function renderProfileRoom(event) {
  if (event) event.preventDefault();
  if (!els.profileRoomOutput) return;
  const profile = profileRoomProfile();
  const config = profile.config;
  if (els.profileRoomSummary) {
    els.profileRoomSummary.textContent = `${profile.readiness}/100 | ${profile.posture}`;
  }
  els.profileRoomOutput.innerHTML = `
    <div class="profile-room-hero ${escapeHtml(profile.tone)}">
      <div>
        <span class="metric-label">${escapeHtml(profile.posture)}</span>
        <h3>${escapeHtml(profileIntentLabel(config.intent))}</h3>
        <p>${escapeHtml(profile.categoryRoute)}</p>
      </div>
      <div class="profile-room-score" style="--score:${profile.readiness}">
        <b>${profile.readiness}</b>
        <span>Profile</span>
      </div>
    </div>
    <div class="profile-room-signal-grid">
      <div><span>Intent</span><strong>${escapeHtml(profileIntentLabel(config.intent))}</strong></div>
      <div><span>Horizon</span><strong>${config.horizon} years</strong></div>
      <div><span>SIP comfort</span><strong>${escapeHtml(profile.amountLabel)}</strong></div>
      <div><span>Drawdown</span><strong>${escapeHtml(profileDrawdownLabel(config.drawdown))}</strong></div>
      <div><span>Emergency</span><strong>${escapeHtml(investorEmergencyLabel(config.emergency))}</strong></div>
      <div><span>Research level</span><strong>${escapeHtml(profileConfidenceLabel(config.confidence))}</strong></div>
    </div>
    <div class="profile-room-route-grid">
      <article>
        <span>Suggested route</span>
        <strong>${escapeHtml(profile.routeLabel)}</strong>
        <p>Apply profile to synchronize Passport, Lanes, Playbook, Suitability Passport, SIP math, and the screener.</p>
      </article>
      <article>
        <span>Category anchor</span>
        <strong>${escapeHtml(profile.primaryCategory)}</strong>
        <p>This is the first category to research, not an instruction to invest.</p>
        <button class="text-button" type="button" data-playbook-category="${escapeHtml(profile.primaryCategory)}">Filter category</button>
      </article>
      <article>
        <span>Selected fund fit</span>
        <strong>${profile.selectedFit}/100</strong>
        <p>${escapeHtml(profile.selected.name)} is checked against the profile before deeper research.</p>
      </article>
    </div>
    <div class="profile-room-candidate-grid">
      ${profile.candidates.slice(0, 4).map(({ fund, score }) => `
        <article class="profile-room-candidate">
          <span>${score}/100 profile fit</span>
          <strong>${escapeHtml(fund.name)}</strong>
          <p>${escapeHtml(fund.category)} | ${escapeHtml(fund.risk)} risk | TER ${fund.expense.toFixed(2)}%</p>
          <button class="text-button" type="button" data-select-fund="${escapeHtml(fund.id)}">Inspect</button>
        </article>
      `).join("")}
    </div>
    <div class="profile-room-guardrail">
      <span>Profile boundary</span>
      <ul>
        ${profile.guardrails.map((item) => `<li>${escapeHtml(item)}</li>`).join("")}
      </ul>
    </div>
  `;
  renderDailyCommandBrief();
}

function makeProfileRoomBrief() {
  const profile = profileRoomProfile();
  const config = profile.config;
  return [
    "# NiveshNadi Investor Profile Room",
    `Release: ${RELEASE_LABEL} (${DATA_VERSION})`,
    `Intent: ${profileIntentLabel(config.intent)}`,
    `Horizon: ${config.horizon} years`,
    `Monthly SIP comfort: ${profile.amountLabel}`,
    `Drawdown comfort: ${profileDrawdownLabel(config.drawdown)}`,
    `Emergency buffer: ${investorEmergencyLabel(config.emergency)}`,
    `Research confidence: ${profileConfidenceLabel(config.confidence)}`,
    `Profile posture: ${profile.posture}`,
    `Profile readiness: ${profile.readiness}/100`,
    `Suggested route: ${profile.routeLabel}`,
    `Category anchor: ${profile.primaryCategory}`,
    "",
    "## Top Research Candidates",
    ...profile.candidates.slice(0, 4).map(({ fund, score }) => `- ${fund.name}: ${score}/100 profile fit | ${fund.category} | ${fund.risk} risk | TER ${fund.expense.toFixed(2)}%`),
    "",
    "## Guardrails",
    ...profile.guardrails.map((item) => `- ${item}`),
    "",
    "Research workflow only. This profile is not personalized advice, suitability approval, execution, or a return guarantee."
  ].join("\n");
}

function applyProfileRoom() {
  const profile = profileRoomProfile();
  const config = profile.config;
  const investorConfig = profile.investorConfig;
  const topIds = profile.candidates.slice(0, 3).map(({ fund }) => fund.id);

  if (els.investorGoal) els.investorGoal.value = investorConfig.goal;
  if (els.investorStage) els.investorStage.value = investorConfig.stage;
  if (els.investorHorizon) els.investorHorizon.value = investorConfig.horizon;
  if (els.investorMonthlySip) els.investorMonthlySip.value = investorConfig.sip;
  if (els.investorRisk) els.investorRisk.value = investorConfig.risk;
  if (els.investorEmergency) els.investorEmergency.value = investorConfig.emergency;
  if (els.investorConfidence) els.investorConfidence.value = investorConfig.confidence;
  if (els.starterIntent) els.starterIntent.value = config.intent === "first-sip" ? "first-sip" : config.intent === "review" ? "review" : "profile";
  if (els.laneMode) els.laneMode.value = investorLaneMode(investorConfig);
  if (els.laneHorizon) els.laneHorizon.value = investorHorizonBand(investorConfig.horizon);
  if (els.laneAmount) els.laneAmount.value = investorConfig.sip;
  if (els.playbookNeed) els.playbookNeed.value = investorPlaybookNeed(investorConfig.goal, investorConfig.risk);
  if (els.playbookYears) els.playbookYears.value = investorConfig.horizon;
  if (els.playbookRisk) els.playbookRisk.value = investorConfig.risk === "conservative" ? "conservative" : ["growth", "aggressive"].includes(investorConfig.risk) ? "aggressive" : "balanced";
  if (els.passportHorizon) els.passportHorizon.value = investorConfig.horizon;
  if (els.passportRisk) els.passportRisk.value = investorConfig.risk === "conservative" ? "conservative" : ["growth", "aggressive"].includes(investorConfig.risk) ? "aggressive" : "balanced";
  if (els.passportLiquidity) els.passportLiquidity.value = config.emergency === "no" || config.intent === "parking" || config.horizon < 3 ? "high" : config.horizon >= 7 ? "low" : "medium";
  if (els.passportSip) els.passportSip.value = investorConfig.sip;
  if (els.passportExperience) els.passportExperience.value = investorConfig.stage === "new" ? "new" : investorConfig.stage === "reviewing" ? "advanced" : "continuing";
  if (els.passportEmergency) els.passportEmergency.value = config.emergency === "no" ? "no" : "yes";
  if (els.journeySip) els.journeySip.value = investorConfig.sip;
  if (els.journeyYears) els.journeyYears.value = investorConfig.horizon;
  if (els.goalYears) els.goalYears.value = investorConfig.horizon;
  if (els.goalSip) els.goalSip.value = investorConfig.sip;

  if (profile.candidates[0]) state.selectedId = profile.candidates[0].fund.id;
  if (topIds.length >= 2) state.compare = new Set(topIds);
  state.filters = { search: "", category: profile.primaryCategory, risk: "all", sort: "score" };
  if (els.searchInput) els.searchInput.value = "";
  if (els.floatingSearchInput) els.floatingSearchInput.value = "";
  if (els.categoryFilter) els.categoryFilter.value = profile.primaryCategory;
  if (els.riskFilter) els.riskFilter.value = "all";
  if (els.sortSelect) els.sortSelect.value = "score";

  renderAll();
  analyzePortfolio();
  scrollToHash(profile.route, "smooth", true);
}

function journeyTimelineState(stage) {
  if (stage.done) return "complete";
  if (stage.active) return "active";
  return "open";
}

function journeyTimelineConfig() {
  const profile = profileRoomProfile();
  const fund = selectedFund();
  const compareFunds = compareSet();
  const evidence = evidenceReadinessScore(fund);
  const memoReady = Boolean(els.packReason?.value.trim());
  const alerts = loadAlerts();
  const watchlist = loadWatchlist();
  const journal = loadJournal();
  const reviewVault = loadReviewVault();
  const receiptVault = loadReceiptVault();
  const reviewReady = alerts.length > 0 || reviewVault.length > 0 || receiptVault.length > 0;
  const stageSeed = [
    {
      id: "profile",
      label: "Profile",
      route: "#profile-room",
      metric: `${profile.readiness}/100`,
      done: profile.readiness >= 62,
      active: true,
      detail: `${profile.posture}. ${profileIntentLabel(profile.config.intent)} with ${profile.config.horizon} year horizon.`,
      action: "Refine profile"
    },
    {
      id: "research",
      label: "Research",
      route: "#research-briefing",
      metric: `${nadiScore(fund)}/100`,
      done: evidence >= 68,
      active: profile.readiness >= 50,
      detail: `${fund.name} is the current research anchor. Evidence readiness is ${evidence}/100.`,
      action: "Open brief"
    },
    {
      id: "compare",
      label: "Compare",
      route: "#compare",
      metric: `${compareFunds.length} funds`,
      done: compareFunds.length >= 2,
      active: evidence >= 60,
      detail: compareFunds.length >= 2
        ? `${compareFunds.map((item) => item.name).slice(0, 3).join(" | ")} are in the compare set.`
        : "Add at least one peer or benchmark before making the shortlist meaningful.",
      action: "Open compare"
    },
    {
      id: "evidence",
      label: "Evidence",
      route: "#evidence",
      metric: `${evidence}/100`,
      done: evidence >= 78,
      active: compareFunds.length >= 2,
      detail: evidence >= 78
        ? "Evidence is usable for demo research; live source dates still need verification before launch."
        : "Check AMFI, AMC factsheet, SID/KIM, portfolio disclosure, benchmark, riskometer, and TER.",
      action: "Open evidence"
    },
    {
      id: "memo",
      label: "Memo",
      route: "#decision-pack",
      metric: memoReady ? "Reason ready" : "Reason pending",
      done: memoReady,
      active: evidence >= 68 && compareFunds.length >= 2,
      detail: memoReady
        ? "Decision Pack has a written reason in the browser-local memo field."
        : "Write the reason, amount, review date, evidence status, and guardrail before action.",
      action: "Build memo"
    },
    {
      id: "review",
      label: "Review",
      route: "#review-rhythm",
      metric: `${alerts.length + reviewVault.length + receiptVault.length} saved`,
      done: reviewReady,
      active: memoReady || journal.length > 0,
      detail: reviewReady
        ? "Review rhythm has saved alerts, reviews, or receipts for follow-up discipline."
        : "Set watch triggers, review rhythm, receipt, or journal history before calling research complete.",
      action: "Set review"
    }
  ];
  const stages = stageSeed.map((stage) => ({ ...stage, state: journeyTimelineState(stage) }));
  const completed = stages.filter((stage) => stage.state === "complete").length;
  const active = stages.filter((stage) => stage.state === "active").length;
  const progress = Math.round(((completed + active * 0.45) / stages.length) * 100);
  const next = stages.find((stage) => stage.state !== "complete") || stages[stages.length - 1];
  const posture = completed >= stages.length
    ? "Research loop complete"
    : completed >= 4
      ? "Memo and review discipline"
      : completed >= 2
        ? "Evidence path in motion"
        : "Start with profile and research";
  const guardrails = [
    "Timeline progress is workflow discipline, not investment advice or suitability approval.",
    "Do not move past evidence, memo, and review only because a fund score looks attractive.",
    "No PAN, folio, CAS, bank data, contact details, or client identifiers are required for this Phase 1 timeline."
  ];
  if (evidence < 78) guardrails.push("Live-looking claims still need source dates, citation paths, and extraction checks.");
  if (!memoReady) guardrails.push("A decision without a written reason should stay in research mode.");
  if (!reviewReady) guardrails.push("A real investment workflow needs review rhythm before it feels complete.");

  return {
    alerts,
    compareFunds,
    completed,
    evidence,
    fund,
    guardrails,
    journal,
    next,
    posture,
    profile,
    progress: Math.round(clampNumber(progress, 0, 100)),
    receiptVault,
    reviewReady,
    reviewVault,
    stages,
    watchlist
  };
}

function renderJourneyTimeline() {
  if (!els.journeyTimelineOutput) return;
  const timeline = journeyTimelineConfig();
  if (els.journeyTimelineSummary) {
    els.journeyTimelineSummary.textContent = `${timeline.progress}/100 | ${timeline.posture}`;
  }
  els.journeyTimelineOutput.innerHTML = `
    <div class="journey-timeline-hero">
      <div>
        <span class="metric-label">${escapeHtml(timeline.posture)}</span>
        <h3>${escapeHtml(timeline.next.label)} is the next checkpoint</h3>
        <p>${escapeHtml(timeline.next.detail)}</p>
      </div>
      <div class="journey-timeline-score" style="--score:${timeline.progress}">
        <b>${timeline.progress}</b>
        <span>Journey</span>
      </div>
    </div>
    <div class="journey-timeline-progress" aria-label="Journey progress">
      <span style="width:${timeline.progress}%"></span>
    </div>
    <div class="journey-timeline-rail">
      ${timeline.stages.map((stage, index) => `
        <article class="journey-timeline-step ${escapeHtml(stage.state)}">
          <div>
            <span>${String(index + 1).padStart(2, "0")}</span>
            <strong>${escapeHtml(stage.label)}</strong>
          </div>
          <p>${escapeHtml(stage.detail)}</p>
          <small>${escapeHtml(stage.metric)}</small>
          <button class="text-button" type="button" data-journey-timeline-route="${escapeHtml(stage.route)}">${escapeHtml(stage.action)}</button>
        </article>
      `).join("")}
    </div>
    <div class="journey-timeline-metric-grid">
      <article><span>Profile</span><strong>${timeline.profile.readiness}/100</strong><p>${escapeHtml(timeline.profile.posture)}</p></article>
      <article><span>Selected fund</span><strong>${escapeHtml(timeline.fund.name)}</strong><p>${timeline.evidence}/100 evidence | ${nadiScore(timeline.fund)}/100 Nadi score</p></article>
      <article><span>Compare set</span><strong>${timeline.compareFunds.length} funds</strong><p>${escapeHtml(timeline.compareFunds.map((fund) => fund.category).slice(0, 3).join(" | ") || "Add a peer or benchmark")}</p></article>
      <article><span>Follow-up</span><strong>${timeline.alerts.length + timeline.reviewVault.length + timeline.receiptVault.length} saved</strong><p>${timeline.watchlist.length} watched | ${timeline.journal.length} journal entries</p></article>
    </div>
    <div class="journey-timeline-guardrail">
      <span>Journey boundary</span>
      <ul>
        ${timeline.guardrails.map((item) => `<li>${escapeHtml(item)}</li>`).join("")}
      </ul>
    </div>
  `;
  renderDailyCommandBrief();
}

function makeJourneyTimelineBrief() {
  const timeline = journeyTimelineConfig();
  return [
    "# NiveshNadi Journey Timeline",
    `Release: ${RELEASE_LABEL} (${DATA_VERSION})`,
    `Journey posture: ${timeline.posture}`,
    `Journey progress: ${timeline.progress}/100`,
    `Selected fund: ${timeline.fund.name}`,
    `Evidence readiness: ${timeline.evidence}/100`,
    `Compare set: ${timeline.compareFunds.length} funds`,
    `Next checkpoint: ${timeline.next.label}`,
    "",
    "## Timeline",
    ...timeline.stages.map((stage) => `- ${stage.label}: ${stage.state} | ${stage.metric} | ${stage.detail}`),
    "",
    "## Guardrails",
    ...timeline.guardrails.map((item) => `- ${item}`),
    "",
    "Research workflow only. Journey progress is not personalized advice, suitability approval, execution, or a return guarantee."
  ].join("\n");
}

function openNextJourneyTimelineStep() {
  const timeline = journeyTimelineConfig();
  scrollToHash(timeline.next.route, "smooth", true);
}

function dailyCommandPriorityConfig() {
  const timeline = journeyTimelineConfig();
  const signal = signalStripConfig();
  const fund = timeline.fund;
  const memoReady = Boolean(els.packReason?.value.trim());
  const reviewCount = timeline.alerts.length + timeline.reviewVault.length + timeline.receiptVault.length;
  const priorities = [];

  if (timeline.profile.readiness < 62) {
    priorities.push({
      label: "Shape profile first",
      route: "#profile-room",
      metric: `${timeline.profile.readiness}/100`,
      reason: "Intent, horizon, SIP comfort, drawdown comfort, and emergency readiness should anchor the research route."
    });
  }
  if (timeline.evidence < 78) {
    priorities.push({
      label: "Verify evidence",
      route: "#evidence",
      metric: `${timeline.evidence}/100`,
      reason: "Check source dates, citation paths, demo/live status, factsheet, SID/KIM, TER, holdings, and riskometer."
    });
  }
  if (timeline.compareFunds.length < 2) {
    priorities.push({
      label: "Add a peer",
      route: "#compare",
      metric: `${timeline.compareFunds.length} funds`,
      reason: "A fund should be inspected against at least one peer or benchmark before the decision memo."
    });
  }
  if (signal.stressRequired) {
    priorities.push({
      label: "Run stress lab",
      route: "#risk-lab",
      metric: `${fund.maxDrawdown}% drawdown`,
      reason: "High volatility needs rupee-impact and behavior checks before the fund feels actionable."
    });
  }
  if (signal.costNeedsCheck) {
    priorities.push({
      label: "Check cost drag",
      route: "#cost-lab",
      metric: `${fund.expense.toFixed(2)}% TER`,
      reason: "Expense, tax friction, and lower-cost alternatives should be translated into rupee terms."
    });
  }
  if (!memoReady) {
    priorities.push({
      label: "Write memo reason",
      route: "#decision-pack",
      metric: "Reason pending",
      reason: "A written reason, amount, review date, and guardrail should exist before any real action."
    });
  }
  if (!reviewCount) {
    priorities.push({
      label: "Set review rhythm",
      route: "#review-rhythm",
      metric: "No review saved",
      reason: "Watch triggers and review rhythm keep the investor from treating a one-time screen as a decision."
    });
  }
  if (!priorities.length) {
    priorities.push({
      label: "Copy research brief",
      route: "#research-briefing",
      metric: "Loop ready",
      reason: "The current workflow is ready to summarize for self review, family discussion, or advisor conversation."
    });
  }

  const unique = [];
  const seen = new Set();
  for (const priority of priorities) {
    if (seen.has(priority.route)) continue;
    seen.add(priority.route);
    unique.push(priority);
  }
  return { priorities: unique.slice(0, 4), signal, timeline };
}

function dailyCommandConfig() {
  const { priorities, signal, timeline } = dailyCommandPriorityConfig();
  const fund = timeline.fund;
  const memoReady = Boolean(els.packReason?.value.trim());
  const reviewCount = timeline.alerts.length + timeline.reviewVault.length + timeline.receiptVault.length;
  const readiness = Math.round(clampNumber(
    timeline.profile.readiness * 0.18 +
    timeline.evidence * 0.26 +
    nadiScore(fund) * 0.18 +
    Math.min(timeline.compareFunds.length, 3) * 9 +
    (memoReady ? 15 : 0) +
    (reviewCount ? 12 : 0),
    0,
    100
  ));
  const next = priorities[0];
  const posture = readiness >= 82
    ? "Daily loop ready"
    : readiness >= 68
      ? "One check before memo"
      : readiness >= 52
        ? "Research path active"
        : "Start with trust basics";
  const reminders = [
    `Current fund: ${fund.name} | ${fund.category} | ${fund.risk} risk.`,
    `Evidence ${timeline.evidence}/100, Nadi score ${nadiScore(fund)}/100, compare set ${timeline.compareFunds.length} funds.`,
    memoReady ? "Decision memo has a written reason." : "Decision memo reason is still pending.",
    reviewCount ? `${reviewCount} review item(s) saved across alerts, review vault, or receipt vault.` : "No review rhythm is saved yet."
  ];
  const guardrails = [
    "Treat this as a daily research checklist, not advice or execution.",
    "Do not rely on score before evidence, compare context, written reason, and review rhythm.",
    "No PAN, folio, CAS, bank, contact, or client identifiers are needed in Phase 1."
  ];

  return {
    fund,
    guardrails,
    memoReady,
    next,
    posture,
    priorities,
    readiness,
    reminders,
    reviewCount,
    signal,
    timeline
  };
}

function renderDailyCommandBrief() {
  if (!els.dailyCommandOutput) return;
  const command = dailyCommandConfig();
  if (els.dailyCommandSummary) {
    els.dailyCommandSummary.textContent = `${command.readiness}/100 | ${command.posture}`;
  }
  els.dailyCommandOutput.innerHTML = `
    <div class="daily-command-hero">
      <div>
        <span class="metric-label">${escapeHtml(command.posture)}</span>
        <h3>${escapeHtml(command.next.label)}</h3>
        <p>${escapeHtml(command.next.reason)}</p>
      </div>
      <div class="daily-command-score" style="--score:${command.readiness}">
        <b>${command.readiness}</b>
        <span>Today</span>
      </div>
    </div>
    <div class="daily-command-grid">
      ${command.priorities.map((priority, index) => `
        <article>
          <span>${String(index + 1).padStart(2, "0")} priority</span>
          <strong>${escapeHtml(priority.label)}</strong>
          <p>${escapeHtml(priority.reason)}</p>
          <small>${escapeHtml(priority.metric)}</small>
          <button class="text-button" type="button" data-daily-route="${escapeHtml(priority.route)}">Open</button>
        </article>
      `).join("")}
    </div>
    <div class="daily-command-metrics">
      <article><span>Selected fund</span><strong>${escapeHtml(command.fund.name)}</strong><p>${escapeHtml(command.fund.category)} | ${escapeHtml(command.fund.risk)} risk</p></article>
      <article><span>Trust posture</span><strong>${command.timeline.evidence}/100</strong><p>${escapeHtml(command.signal.posture)}</p></article>
      <article><span>Compare set</span><strong>${command.timeline.compareFunds.length} funds</strong><p>${escapeHtml(command.timeline.compareFunds.map((fund) => fund.name).slice(0, 2).join(" | ") || "Add a peer")}</p></article>
      <article><span>Follow-up</span><strong>${command.reviewCount} saved</strong><p>${command.timeline.watchlist.length} watched | ${command.timeline.journal.length} journal entries</p></article>
    </div>
    <div class="daily-command-guardrail">
      <span>Daily boundary</span>
      <ul>
        ${command.guardrails.map((item) => `<li>${escapeHtml(item)}</li>`).join("")}
      </ul>
    </div>
  `;
  renderDecisionRadar();
}

function makeDailyCommandBrief() {
  const command = dailyCommandConfig();
  return [
    "# NiveshNadi Daily Command Brief",
    `Release: ${RELEASE_LABEL} (${DATA_VERSION})`,
    `Daily posture: ${command.posture}`,
    `Daily readiness: ${command.readiness}/100`,
    `Selected fund: ${command.fund.name}`,
    `Evidence readiness: ${command.timeline.evidence}/100`,
    `Compare set: ${command.timeline.compareFunds.length} funds`,
    `Next priority: ${command.next.label}`,
    "",
    "## Priority Queue",
    ...command.priorities.map((priority) => `- ${priority.label}: ${priority.metric} | ${priority.reason}`),
    "",
    "## Snapshot",
    ...command.reminders.map((item) => `- ${item}`),
    "",
    "## Guardrails",
    ...command.guardrails.map((item) => `- ${item}`),
    "",
    "Research workflow only. This brief is not personalized investment advice, suitability approval, execution, or a return guarantee."
  ].join("\n");
}

function openDailyPriority() {
  scrollToHash(dailyCommandConfig().next.route, "smooth", true);
}

function radarBand(score) {
  if (score >= 82) return "strong";
  if (score >= 68) return "usable";
  if (score >= 52) return "watch";
  return "weak";
}

function radarBandLabel(score) {
  if (score >= 82) return "Strong";
  if (score >= 68) return "Usable";
  if (score >= 52) return "Watch";
  return "Weak";
}

function decisionRadarConfig() {
  const command = dailyCommandConfig();
  const timeline = command.timeline;
  const signal = command.signal;
  const profile = timeline.profile;
  const fund = timeline.fund;
  const memoReady = Boolean(els.packReason?.value.trim());
  const reviewCount = timeline.alerts.length + timeline.reviewVault.length + timeline.receiptVault.length;
  const trust = Math.round(clampNumber(timeline.evidence, 0, 100));
  const fit = Math.round(clampNumber((profile.selectedFit * 0.62) + (profile.readiness * 0.38), 0, 100));
  const risk = Math.round(clampNumber(
    signal.riskControl * 0.52 +
    (100 - Math.min(fund.maxDrawdown * 2.25, 100)) * 0.28 +
    (signal.costNeedsCheck ? 8 : 20),
    0,
    100
  ));
  const discipline = Math.round(clampNumber(
    Math.min(timeline.compareFunds.length, 3) * 18 +
    (memoReady ? 24 : 0) +
    (reviewCount ? 20 : 0) +
    Math.min(timeline.watchlist.length, 2) * 5 +
    Math.min(timeline.journal.length, 2) * 4,
    0,
    100
  ));
  const axes = [
    {
      id: "trust",
      label: "Trust",
      score: trust,
      route: "#evidence",
      action: "Open Evidence",
      detail: trust >= 78
        ? "Evidence is usable for demo research, but live source dates still matter."
        : "Source dates, citation paths, factsheet, SID/KIM, TER, portfolio, and riskometer need attention."
    },
    {
      id: "fit",
      label: "Fit",
      score: fit,
      route: "#profile-room",
      action: "Open Profile",
      detail: fit >= 72
        ? `${fund.name} is aligned enough for deeper research against the current profile.`
        : "Profile intent, horizon, SIP comfort, and fund role should be rechecked before shortlisting."
    },
    {
      id: "risk",
      label: "Risk",
      score: risk,
      route: signal.stressRequired ? "#risk-lab" : "#cost-lab",
      action: signal.stressRequired ? "Run Stress" : "Open Cost",
      detail: signal.stressRequired
        ? "Drawdown needs rupee-impact and behavior review before any memo."
        : signal.costNeedsCheck
          ? "Cost drag should be translated into rupee terms before deciding."
          : "Risk and cost are not the main blockers, but still need final review."
    },
    {
      id: "discipline",
      label: "Discipline",
      score: discipline,
      route: memoReady ? "#review-rhythm" : "#decision-pack",
      action: memoReady ? "Set Review" : "Build Memo",
      detail: discipline >= 70
        ? "Compare, memo, and follow-up discipline are moving into usable shape."
        : "Compare set, written reason, and review rhythm need to be completed before action."
    }
  ];
  const weakest = [...axes].sort((a, b) => a.score - b.score)[0];
  const strongest = [...axes].sort((a, b) => b.score - a.score)[0];
  const overall = Math.round(axes.reduce((sum, axis) => sum + axis.score, 0) / axes.length);
  const posture = overall >= 82
    ? "Radar balanced"
    : overall >= 68
      ? "One force still needs work"
      : overall >= 52
        ? "Research pressure visible"
        : "Do not move to memo yet";
  const guardrails = [
    "Radar balance is a workflow readiness signal, not a recommendation or suitability approval.",
    "A strong Nadi score cannot compensate for weak trust, fit, risk review, or discipline.",
    "No PAN, folio, CAS, account, contact, or distributor-client data is used in this Phase 1 radar."
  ];
  if (weakest.score < 68) guardrails.push(`${weakest.label} is the weakest force; open that workspace before writing a decision reason.`);
  if (!memoReady) guardrails.push("Memo discipline is incomplete until the investor writes the reason in their own words.");

  return {
    axes,
    command,
    fund,
    guardrails,
    overall,
    posture,
    strongest,
    timeline,
    weakest
  };
}

function renderDecisionRadar() {
  if (!els.decisionRadarOutput) return;
  const radar = decisionRadarConfig();
  if (els.decisionRadarSummary) {
    els.decisionRadarSummary.textContent = `${radar.overall}/100 | ${radar.posture}`;
  }
  els.decisionRadarOutput.innerHTML = `
    <div class="decision-radar-hero">
      <div>
        <span class="metric-label">${escapeHtml(radar.posture)}</span>
        <h3>${escapeHtml(radar.weakest.label)} needs the next check</h3>
        <p>${escapeHtml(radar.weakest.detail)}</p>
      </div>
      <div class="decision-radar-score" style="--score:${radar.overall}">
        <b>${radar.overall}</b>
        <span>Radar</span>
      </div>
    </div>
    <div class="decision-radar-grid">
      ${radar.axes.map((axis) => `
        <article class="${escapeHtml(radarBand(axis.score))}">
          <div>
            <span>${escapeHtml(axis.label)}</span>
            <strong>${axis.score}/100</strong>
          </div>
          <div class="decision-radar-meter" aria-label="${escapeHtml(axis.label)} score">
            <span style="width:${axis.score}%"></span>
          </div>
          <p>${escapeHtml(axis.detail)}</p>
          <small>${escapeHtml(radarBandLabel(axis.score))}</small>
          <button class="text-button" type="button" data-radar-route="${escapeHtml(axis.route)}">${escapeHtml(axis.action)}</button>
        </article>
      `).join("")}
    </div>
    <div class="decision-radar-metrics">
      <article><span>Selected fund</span><strong>${escapeHtml(radar.fund.name)}</strong><p>${escapeHtml(radar.fund.category)} | ${escapeHtml(radar.fund.risk)} risk</p></article>
      <article><span>Strongest force</span><strong>${escapeHtml(radar.strongest.label)}</strong><p>${radar.strongest.score}/100 | ${escapeHtml(radar.strongest.detail)}</p></article>
      <article><span>Weakest force</span><strong>${escapeHtml(radar.weakest.label)}</strong><p>${radar.weakest.score}/100 | ${escapeHtml(radar.weakest.action)}</p></article>
      <article><span>Daily priority</span><strong>${escapeHtml(radar.command.next.label)}</strong><p>${escapeHtml(radar.command.next.reason)}</p></article>
    </div>
    <div class="decision-radar-guardrail">
      <span>Radar boundary</span>
      <ul>
        ${radar.guardrails.map((item) => `<li>${escapeHtml(item)}</li>`).join("")}
      </ul>
    </div>
  `;
  renderQuestionStack();
}

function makeDecisionRadarBrief() {
  const radar = decisionRadarConfig();
  return [
    "# NiveshNadi Research Decision Radar",
    `Release: ${RELEASE_LABEL} (${DATA_VERSION})`,
    `Radar posture: ${radar.posture}`,
    `Radar readiness: ${radar.overall}/100`,
    `Selected fund: ${radar.fund.name}`,
    `Strongest force: ${radar.strongest.label} (${radar.strongest.score}/100)`,
    `Weakest force: ${radar.weakest.label} (${radar.weakest.score}/100)`,
    "",
    "## Radar Forces",
    ...radar.axes.map((axis) => `- ${axis.label}: ${axis.score}/100 | ${radarBandLabel(axis.score)} | ${axis.detail}`),
    "",
    "## Guardrails",
    ...radar.guardrails.map((item) => `- ${item}`),
    "",
    "Research workflow only. This radar is not personalized advice, suitability approval, execution, or a return guarantee."
  ].join("\n");
}

function openDecisionRadarFocus() {
  scrollToHash(decisionRadarConfig().weakest.route, "smooth", true);
}

function questionStackStatus(question) {
  if (question.blocker) return "Answer first";
  if (question.score < 68) return "Needs answer";
  if (question.score < 82) return "Confirm";
  return "Ready note";
}

function researchQuestionStackConfig() {
  const radar = decisionRadarConfig();
  const { command, timeline } = radar;
  const { fund, profile } = timeline;
  const { signal } = command;
  const memoReady = Boolean(els.packReason?.value.trim());
  const compareCount = timeline.compareFunds.length;
  const followUpCount = timeline.alerts.length + timeline.reviewVault.length + timeline.receiptVault.length + timeline.watchlist.length;
  const axisScore = (id) => radar.axes.find((axis) => axis.id === id)?.score || 0;
  const trustScore = axisScore("trust");
  const fitScore = axisScore("fit");
  const riskScore = axisScore("risk");
  const disciplineScore = axisScore("discipline");
  const weakThemes = radar.weakest.id === "discipline" ? ["Decision memo", "Follow-up"] : [radar.weakest.label];
  const candidates = [
    {
      theme: "Trust",
      score: trustScore,
      route: "#evidence",
      action: "Open Evidence",
      blocker: trustScore < 72,
      question: "Which source date, citation path, and demo/live label backs the key claim?",
      why: trustScore < 72
        ? "Evidence is the first launch gate; weak citation posture can make a good-looking fund unsafe to research."
        : "Evidence is usable for demo research, but the source trail still needs to be visible before launch.",
      proof: "AMFI, AMC factsheet, SID/KIM, portfolio disclosure, benchmark, TER, and riskometer source map."
    },
    {
      theme: "Fit",
      score: fitScore,
      route: "#profile-room",
      action: "Open Profile",
      blocker: fitScore < 70,
      question: `Does ${fund.name} match the current intent, horizon, SIP comfort, drawdown comfort, and emergency readiness?`,
      why: `Current route is ${profileIntentLabel(profile.config.intent)} with ${profile.config.horizon} year horizon and ${profileDrawdownLabel(profile.config.drawdown).toLowerCase()} drawdown comfort.`,
      proof: "Profile route, category anchor, selected-fund fit, and category mismatch note."
    },
    {
      theme: "Compare",
      score: Math.min(100, compareCount * 34 + 18),
      route: "#compare",
      action: "Open Compare",
      blocker: compareCount < 2,
      question: "Which two peer funds prove this is not just a one-fund attraction?",
      why: compareCount < 2
        ? "A retail investor should see nearby alternatives before treating one fund as the obvious choice."
        : `${compareCount} funds are already in the compare set.`,
      proof: "Peer shortlist with category, score, cost, risk, evidence, and role differences."
    },
    {
      theme: "Risk",
      score: riskScore,
      route: signal.stressRequired ? "#risk-lab" : "#cost-lab",
      action: signal.stressRequired ? "Run Stress" : "Open Cost",
      blocker: signal.stressRequired || signal.costNeedsCheck,
      question: signal.stressRequired
        ? "Can I tolerate the rupee drawdown if this fund has a bad year?"
        : "What is the rupee cost drag and lower-cost alternative check?",
      why: signal.stressRequired
        ? `${fund.name} has ${fund.maxDrawdown}% demo drawdown and needs behavior review.`
        : `${fund.name} expense ratio is ${fund.expense}% and should be translated into rupee terms.`,
      proof: "Stress result, cost result, behavior trigger, and pause condition."
    },
    {
      theme: "Decision memo",
      score: memoReady ? Math.max(86, disciplineScore) : Math.min(42, disciplineScore),
      route: "#decision-pack",
      action: "Build Memo",
      blocker: !memoReady,
      question: "Can I write the decision reason in my own words before any action?",
      why: memoReady
        ? "A decision reason exists, so the next job is to keep it reviewable."
        : "A copied score is not a reason; the memo must capture the investor's own logic.",
      proof: "Decision type, amount, review date, conviction, reason, and guardrails."
    },
    {
      theme: "Follow-up",
      score: Math.min(100, followUpCount * 18 + 28),
      route: followUpCount ? "#review-rhythm" : "#watchlist",
      action: followUpCount ? "Open Rhythm" : "Set Watch",
      blocker: followUpCount === 0,
      question: "What will trigger the next review after this research session?",
      why: followUpCount
        ? `${followUpCount} browser-local follow-up signals are already present.`
        : "Without a watchlist, review rhythm, or receipt, research can become a one-time impulse.",
      proof: "Watch trigger, review date, receipt, vault snapshot, or rhythm board entry."
    }
  ];
  const questions = candidates
    .map((question) => ({
      ...question,
      priority: (100 - question.score) + (question.blocker ? 22 : 0) + (weakThemes.includes(question.theme) ? 8 : 0),
      status: questionStackStatus(question)
    }))
    .sort((a, b) => b.priority - a.priority)
    .slice(0, 6);
  const first = questions[0];
  const blockers = questions.filter((question) => question.blocker).length;
  const posture = blockers >= 3
    ? "Answer blockers first"
    : blockers >= 1
      ? "Research questions open"
      : "Questions mostly confirmatory";
  const guardrails = [
    "Question Stack creates research prompts only; it does not approve, reject, buy, sell, switch, SIP, STP, or redeem.",
    "A question is complete only when the investor can explain the source, fit, risk, compare, memo, or follow-up proof in plain words.",
    "No PAN, folio, CAS, bank, contact, account, credential, ARN, EUIN, or distributor-client data is needed in Phase 1."
  ];

  return {
    blockers,
    command,
    first,
    fund,
    guardrails,
    posture,
    questions,
    radar
  };
}

function renderQuestionStack() {
  if (!els.questionStackOutput) return;
  const stack = researchQuestionStackConfig();
  if (els.questionStackSummary) {
    els.questionStackSummary.textContent = `${stack.questions.length} questions | ${stack.first.theme} first`;
  }
  els.questionStackOutput.innerHTML = `
    <div class="question-stack-hero">
      <div>
        <span class="metric-label">${escapeHtml(stack.posture)}</span>
        <h3>${escapeHtml(stack.first.question)}</h3>
        <p>${escapeHtml(stack.first.why)}</p>
      </div>
      <div class="question-stack-badge">
        <b>${stack.blockers}</b>
        <span>Blockers</span>
      </div>
    </div>
    <div class="question-stack-grid">
      ${stack.questions.map((question, index) => `
        <article class="${escapeHtml(radarBand(question.score))}">
          <div>
            <span>${String(index + 1).padStart(2, "0")} ${escapeHtml(question.theme)}</span>
            <strong>${escapeHtml(question.status)}</strong>
          </div>
          <h4>${escapeHtml(question.question)}</h4>
          <p>${escapeHtml(question.why)}</p>
          <small>${escapeHtml(question.proof)}</small>
          <button class="text-button" type="button" data-question-route="${escapeHtml(question.route)}">${escapeHtml(question.action)}</button>
        </article>
      `).join("")}
    </div>
    <div class="question-stack-metrics">
      <article><span>Selected fund</span><strong>${escapeHtml(stack.fund.name)}</strong><p>${escapeHtml(stack.fund.category)} | ${escapeHtml(stack.fund.risk)} risk</p></article>
      <article><span>Radar weak spot</span><strong>${escapeHtml(stack.radar.weakest.label)}</strong><p>${stack.radar.weakest.score}/100 | ${escapeHtml(stack.radar.weakest.detail)}</p></article>
      <article><span>Daily priority</span><strong>${escapeHtml(stack.command.next.label)}</strong><p>${escapeHtml(stack.command.next.reason)}</p></article>
      <article><span>Research boundary</span><strong>Questions only</strong><p>No personalized advice, execution, or return guarantee.</p></article>
    </div>
    <div class="question-stack-guardrail">
      <span>Question boundary</span>
      <ul>
        ${stack.guardrails.map((item) => `<li>${escapeHtml(item)}</li>`).join("")}
      </ul>
    </div>
  `;
  renderAnswerSheet();
}

function makeQuestionStackBrief() {
  const stack = researchQuestionStackConfig();
  return [
    "# NiveshNadi Research Question Stack",
    `Release: ${RELEASE_LABEL} (${DATA_VERSION})`,
    `Question posture: ${stack.posture}`,
    `Selected fund: ${stack.fund.name}`,
    `First question: ${stack.first.question}`,
    `Open blockers: ${stack.blockers}`,
    "",
    "## Answer-Before-Action Questions",
    ...stack.questions.map((question, index) => `${index + 1}. ${question.theme} | ${question.status}: ${question.question} Proof: ${question.proof}`),
    "",
    "## Guardrails",
    ...stack.guardrails.map((item) => `- ${item}`),
    "",
    "Research workflow only. This stack is not personalized advice, suitability approval, execution, or a return guarantee."
  ].join("\n");
}

function openQuestionStackFocus() {
  scrollToHash(researchQuestionStackConfig().first.route, "smooth", true);
}

const ANSWER_SHEET_FIELDS = [
  { id: "trust", theme: "Trust", key: "trust", input: "answerTrust" },
  { id: "fit", theme: "Fit", key: "fit", input: "answerFit" },
  { id: "compare", theme: "Compare", key: "compare", input: "answerCompare" },
  { id: "risk", theme: "Risk", key: "risk", input: "answerRisk" },
  { id: "memo", theme: "Decision memo", key: "memo", input: "answerMemo" },
  { id: "followup", theme: "Follow-up", key: "followup", input: "answerFollowup" }
];

function loadAnswerSheetDraft() {
  try {
    const value = JSON.parse(localStorage.getItem("niveshnadi-answer-sheet-draft") || "{}");
    return value && typeof value === "object" ? value : {};
  } catch (error) {
    return {};
  }
}

function saveAnswerSheetDraft(values = readAnswerSheetValues()) {
  localStorage.setItem("niveshnadi-answer-sheet-draft", JSON.stringify(values));
}

function hydrateAnswerSheetDraft() {
  if (state.answerSheetHydrated) return;
  const draft = loadAnswerSheetDraft();
  ANSWER_SHEET_FIELDS.forEach((field) => {
    const input = els[field.input];
    if (input && draft[field.key] && !input.value) input.value = draft[field.key];
  });
  state.answerSheetHydrated = true;
}

function readAnswerSheetValues() {
  return ANSWER_SHEET_FIELDS.reduce((values, field) => {
    values[field.key] = els[field.input]?.value.trim() || "";
    return values;
  }, {});
}

function answerSheetQuality(text) {
  const words = text.split(/\s+/).filter(Boolean).length;
  if (!text) return { score: 0, status: "Missing" };
  if (words >= 28) return { score: 100, status: "Strong" };
  if (words >= 14) return { score: 78, status: "Usable" };
  if (words >= 6) return { score: 52, status: "Thin" };
  return { score: 28, status: "Too short" };
}

function loadAnswerSheets() {
  try {
    const value = JSON.parse(localStorage.getItem("niveshnadi-answer-sheets") || "[]");
    return Array.isArray(value) ? value : [];
  } catch (error) {
    return [];
  }
}

function saveAnswerSheets(entries) {
  localStorage.setItem("niveshnadi-answer-sheets", JSON.stringify(entries.slice(0, 8)));
}

function answerSheetConfig() {
  hydrateAnswerSheetDraft();
  const stack = researchQuestionStackConfig();
  const questionMap = Object.fromEntries(stack.questions.map((question) => [question.theme, question]));
  const values = readAnswerSheetValues();
  ANSWER_SHEET_FIELDS.forEach((field) => {
    const input = els[field.input];
    const question = questionMap[field.theme];
    if (input && question) input.placeholder = question.question;
  });
  const order = Object.fromEntries(stack.questions.map((question, index) => [question.theme, index]));
  const entries = ANSWER_SHEET_FIELDS.map((field) => {
    const question = questionMap[field.theme] || {};
    const answer = values[field.key] || "";
    const quality = answerSheetQuality(answer);
    return {
      ...field,
      answer,
      question: question.question || field.theme,
      proof: question.proof || "Write the proof in plain language.",
      route: question.route || "#question-stack",
      action: question.action || "Open question",
      priority: order[field.theme] ?? 9,
      ...quality
    };
  });
  const answered = entries.filter((entry) => entry.score >= 52).length;
  const strong = entries.filter((entry) => entry.score >= 78).length;
  const readiness = Math.round(entries.reduce((sum, entry) => sum + entry.score, 0) / entries.length);
  const firstGap = [...entries]
    .filter((entry) => entry.score < 78)
    .sort((a, b) => a.priority - b.priority || a.score - b.score)[0] || {
      theme: "Memo review",
      question: "All six research answers are usable. Copy the sheet or move to the decision memo review.",
      route: "#decision-pack",
      action: "Build Memo",
      status: "Ready",
      proof: "Keep answers source-backed, plain-language, and reviewable.",
      score: 100
    };
  const saved = loadAnswerSheets();
  const posture = readiness >= 82
    ? "Answers ready for memo review"
    : readiness >= 64
      ? "Answers need tightening"
      : answered
        ? "Answer draft started"
        : "Blank answer sheet";
  const guardrails = [
    "Answer Sheet stores only browser-local research text; keep PAN, folio, CAS, bank, contact, account, credential, ARN, EUIN, and client data out.",
    "Answers are personal research notes, not investment advice, suitability approval, execution, or a return guarantee.",
    "Before launch with live data, every answer that cites performance, cost, holdings, or risk needs source date and citation path."
  ];
  return {
    answered,
    entries,
    firstGap,
    fund: stack.fund,
    guardrails,
    posture,
    readiness,
    saved,
    stack,
    strong,
    values
  };
}

function renderAnswerSheet(event) {
  if (event) event.preventDefault();
  if (!els.answerSheetOutput) return;
  const sheet = answerSheetConfig();
  if (els.answerSheetSummary) {
    els.answerSheetSummary.textContent = `${sheet.readiness}/100 | ${sheet.answered}/6 answered`;
  }
  els.answerSheetOutput.innerHTML = `
    <div class="answer-sheet-hero">
      <div>
        <span class="metric-label">${escapeHtml(sheet.posture)}</span>
        <h3>${escapeHtml(sheet.firstGap.theme === "Memo review" ? "Answer sheet is ready for memo review" : `${sheet.firstGap.theme} answer is the next gap`)}</h3>
        <p>${escapeHtml(sheet.firstGap.question)}</p>
      </div>
      <div class="answer-sheet-score" style="--score:${sheet.readiness}">
        <b>${sheet.readiness}</b>
        <span>Answers</span>
      </div>
    </div>
    <div class="answer-sheet-metrics">
      <article><span>Selected fund</span><strong>${escapeHtml(sheet.fund.name)}</strong><p>${escapeHtml(sheet.fund.category)} | ${escapeHtml(sheet.fund.risk)} risk</p></article>
      <article><span>Answered</span><strong>${sheet.answered}/6</strong><p>${sheet.strong} usable or strong answers</p></article>
      <article><span>First gap</span><strong>${escapeHtml(sheet.firstGap.theme)}</strong><p>${escapeHtml(sheet.firstGap.status)} | ${escapeHtml(sheet.firstGap.proof)}</p></article>
      <article><span>Saved sheets</span><strong>${sheet.saved.length}</strong><p>Browser-local snapshots only</p></article>
    </div>
    <div class="answer-sheet-check-grid">
      ${sheet.entries.map((entry) => `
        <article class="${escapeHtml(radarBand(entry.score))}">
          <div><span>${escapeHtml(entry.theme)}</span><strong>${escapeHtml(entry.status)}</strong></div>
          <p>${escapeHtml(entry.question)}</p>
          <small>${escapeHtml(entry.answer || "No answer written yet.")}</small>
          <button class="text-button" type="button" data-answer-route="${escapeHtml(entry.route)}">${escapeHtml(entry.action)}</button>
        </article>
      `).join("")}
    </div>
    <div class="answer-sheet-vault">
      <span>Latest saved answer sheets</span>
      ${sheet.saved.length ? `
        <ul>
          ${sheet.saved.slice(0, 4).map((entry) => `<li>${escapeHtml(entry.date)} | ${escapeHtml(entry.fund)} | ${entry.readiness}/100 | ${entry.answered}/6 answered</li>`).join("")}
        </ul>
      ` : "<p>No saved answer sheet yet.</p>"}
    </div>
    <div class="answer-sheet-guardrail">
      <span>Answer boundary</span>
      <ul>
        ${sheet.guardrails.map((item) => `<li>${escapeHtml(item)}</li>`).join("")}
      </ul>
    </div>
  `;
  renderConvictionLadder();
  renderSelectionFunnel();
  renderShortlistReasonBoard();
  renderProofGapQueue();
  renderMemoClearanceDesk();
  renderClearanceSprintBoard();
}

function makeAnswerSheetBrief() {
  const sheet = answerSheetConfig();
  return [
    "# NiveshNadi Research Answer Sheet",
    `Release: ${RELEASE_LABEL} (${DATA_VERSION})`,
    `Selected fund: ${sheet.fund.name}`,
    `Answer posture: ${sheet.posture}`,
    `Answer readiness: ${sheet.readiness}/100`,
    `Answered: ${sheet.answered}/6`,
    `First gap: ${sheet.firstGap.theme} | ${sheet.firstGap.status}`,
    "",
    "## Answers",
    ...sheet.entries.map((entry) => `- ${entry.theme} (${entry.status}): ${entry.answer || "Missing"} | Proof expected: ${entry.proof}`),
    "",
    "## Guardrails",
    ...sheet.guardrails.map((item) => `- ${item}`),
    "",
    "Research workflow only. This answer sheet is not personalized advice, suitability approval, execution, or a return guarantee."
  ].join("\n");
}

function persistAnswerSheetDraft() {
  saveAnswerSheetDraft();
  renderAnswerSheet();
}

function saveCurrentAnswerSheet() {
  const sheet = answerSheetConfig();
  saveAnswerSheetDraft(sheet.values);
  const snapshot = {
    id: `answer-${Date.now()}`,
    date: new Date().toISOString().slice(0, 10),
    fund: sheet.fund.name,
    readiness: sheet.readiness,
    answered: sheet.answered,
    values: sheet.values
  };
  saveAnswerSheets([snapshot, ...sheet.saved]);
  toast("Answer sheet saved locally.");
  renderAnswerSheet();
  renderPrivacyControlRoom();
}

function clearCurrentAnswerSheet() {
  ANSWER_SHEET_FIELDS.forEach((field) => {
    if (els[field.input]) els[field.input].value = "";
  });
  saveAnswerSheetDraft({});
  toast("Answer sheet cleared.");
  renderAnswerSheet();
  renderPrivacyControlRoom();
}

function convictionLadderConfig() {
  const sheet = answerSheetConfig();
  const radar = sheet.stack.radar;
  const timeline = radar.timeline;
  const entry = (theme) => sheet.entries.find((item) => item.theme === theme) || { score: 0, status: "Missing", route: "#answer-sheet", action: "Answer" };
  const trust = entry("Trust");
  const fit = entry("Fit");
  const compare = entry("Compare");
  const risk = entry("Risk");
  const memo = entry("Decision memo");
  const followup = entry("Follow-up");
  const compareReady = timeline.compareFunds.length >= 2;
  const followSignals = timeline.watchlist.length + timeline.alerts.length + timeline.reviewVault.length + timeline.receiptVault.length;
  const followReady = followup.score >= 52 || followSignals > 0;
  const memoReady = memo.score >= 78 || Boolean(els.packReason?.value.trim());
  const trustReady = trust.score >= 78 && timeline.evidence >= 68;
  const riskReady = risk.score >= 52 && radar.axes.find((axis) => axis.id === "risk")?.score >= 52;
  const answerReady = sheet.readiness >= 64 && sheet.answered >= 4;
  const conviction = Math.round(clampNumber(
    sheet.readiness * 0.34 +
    radar.overall * 0.22 +
    timeline.evidence * 0.18 +
    Math.min(timeline.compareFunds.length, 2) * 8 +
    (memoReady ? 8 : 0) +
    (followReady ? 6 : 0) +
    (trustReady ? 4 : 0),
    0,
    100
  ));
  const gates = [
    {
      id: "answers",
      label: "Answer base",
      route: "#answer-sheet",
      done: answerReady,
      metric: `${sheet.readiness}/100`,
      detail: answerReady ? "Core answers are drafted." : "Answer at least four prompts with usable wording.",
      action: "Open Answers"
    },
    {
      id: "trust",
      label: "Trust proof",
      route: "#evidence",
      done: trustReady,
      metric: `${timeline.evidence}/100`,
      detail: trustReady ? "Evidence posture is usable for demo research." : "Source date, citation path, and demo/live label need proof.",
      action: "Open Evidence"
    },
    {
      id: "compare",
      label: "Peer check",
      route: "#compare",
      done: compareReady && compare.score >= 52,
      metric: `${timeline.compareFunds.length} funds`,
      detail: compareReady ? "Compare set is present." : "Add at least two peers or a benchmark before shortlisting.",
      action: "Open Compare"
    },
    {
      id: "risk",
      label: "Risk comfort",
      route: radar.axes.find((axis) => axis.id === "risk")?.route || "#risk-lab",
      done: riskReady,
      metric: `${risk.score}/100`,
      detail: riskReady ? "Risk answer is present." : "Translate drawdown, cost, and behavior pressure into plain language.",
      action: "Open Risk"
    },
    {
      id: "memo",
      label: "Memo reason",
      route: "#decision-pack",
      done: memoReady,
      metric: `${memo.score}/100`,
      detail: memoReady ? "Decision reason is reviewable." : "Write the reason in the investor's own words.",
      action: "Build Memo"
    },
    {
      id: "followup",
      label: "Follow-up rule",
      route: followSignals ? "#review-rhythm" : "#watchlist",
      done: followReady,
      metric: `${followSignals} saved`,
      detail: followReady ? "A review habit exists." : "Set a watch trigger, review date, or receipt before moving forward.",
      action: followSignals ? "Open Rhythm" : "Set Watch"
    }
  ];
  const completed = gates.filter((gate) => gate.done).length;
  const nextGate = gates.find((gate) => !gate.done) || {
    label: "Memo review",
    route: "#decision-pack",
    action: "Build Memo",
    metric: "Ready",
    detail: "All ladder gates are currently complete for research workflow review."
  };
  const rung = (() => {
    if (completed <= 1 || conviction < 42) return { label: "Curious", level: 1, route: "#question-stack", tone: "weak", detail: "Interest exists, but the proof trail is still too thin." };
    if (completed <= 2 || conviction < 58) return { label: "Researching", level: 2, route: nextGate.route, tone: "watch", detail: "A few checks are present, but key questions still need answers." };
    if (completed <= 3 || conviction < 70) return { label: "Watch-ready", level: 3, route: "#watchlist", tone: "watch", detail: "The fund can sit on a watchlist while missing gates are completed." };
    if (completed <= 4 || conviction < 82) return { label: "Shortlist-ready", level: 4, route: "#compare", tone: "usable", detail: "Research is strong enough for shortlist review, not action." };
    if (completed <= 5 || conviction < 90) return { label: "Memo-review ready", level: 5, route: "#decision-pack", tone: "usable", detail: "The fund can move into a written memo review." };
    return { label: "Review-file ready", level: 6, route: "#research-dossier", tone: "strong", detail: "Answers, gates, and follow-up discipline are ready for a research dossier." };
  })();
  const rungs = [
    { level: 1, label: "Curious", detail: "Interest noted" },
    { level: 2, label: "Researching", detail: "Questions open" },
    { level: 3, label: "Watch-ready", detail: "Follow-up framed" },
    { level: 4, label: "Shortlist-ready", detail: "Peers reviewed" },
    { level: 5, label: "Memo-review ready", detail: "Reason written" },
    { level: 6, label: "Review-file ready", detail: "Dossier-ready" }
  ].map((item) => ({
    ...item,
    state: item.level < rung.level ? "complete" : item.level === rung.level ? "active" : "open"
  }));
  const guardrails = [
    "Conviction Ladder is a research-readiness tier, not a buy, sell, hold, switch, SIP, STP, redemption, execution, or suitability instruction.",
    "A high rung still requires live source dates, citation paths, riskometer, TER, factsheet, SID/KIM, holdings, and review date before launch use.",
    "No PAN, folio, CAS, bank, contact, account, credential, ARN, EUIN, or distributor-client data is required in Phase 1."
  ];
  return {
    completed,
    conviction,
    fund: sheet.fund,
    gates,
    guardrails,
    nextGate,
    radar,
    rung,
    rungs,
    sheet
  };
}

function renderConvictionLadder() {
  if (!els.convictionLadderOutput) return;
  const ladder = convictionLadderConfig();
  if (els.convictionLadderSummary) {
    els.convictionLadderSummary.textContent = `${ladder.rung.label} | ${ladder.conviction}/100`;
  }
  els.convictionLadderOutput.innerHTML = `
    <div class="conviction-ladder-hero ${escapeHtml(ladder.rung.tone)}">
      <div>
        <span class="metric-label">${escapeHtml(ladder.rung.label)}</span>
        <h3>${escapeHtml(ladder.rung.detail)}</h3>
        <p>Next gate: ${escapeHtml(ladder.nextGate.label)}. ${escapeHtml(ladder.nextGate.detail)}</p>
      </div>
      <div class="conviction-ladder-score" style="--score:${ladder.conviction}">
        <b>${ladder.conviction}</b>
        <span>Ladder</span>
      </div>
    </div>
    <div class="conviction-rung-grid">
      ${ladder.rungs.map((rung) => `
        <article class="${escapeHtml(rung.state)}">
          <span>${String(rung.level).padStart(2, "0")}</span>
          <strong>${escapeHtml(rung.label)}</strong>
          <p>${escapeHtml(rung.detail)}</p>
        </article>
      `).join("")}
    </div>
    <div class="conviction-gate-grid">
      ${ladder.gates.map((gate) => `
        <article class="${gate.done ? "complete" : "open"}">
          <div><span>${escapeHtml(gate.label)}</span><strong>${gate.done ? "Complete" : "Open"}</strong></div>
          <p>${escapeHtml(gate.detail)}</p>
          <small>${escapeHtml(gate.metric)}</small>
          <button class="text-button" type="button" data-conviction-route="${escapeHtml(gate.route)}">${escapeHtml(gate.action)}</button>
        </article>
      `).join("")}
    </div>
    <div class="conviction-metrics">
      <article><span>Selected fund</span><strong>${escapeHtml(ladder.fund.name)}</strong><p>${escapeHtml(ladder.fund.category)} | ${escapeHtml(ladder.fund.risk)} risk</p></article>
      <article><span>Answers</span><strong>${ladder.sheet.readiness}/100</strong><p>${ladder.sheet.answered}/6 answered | ${ladder.sheet.strong} usable or strong</p></article>
      <article><span>Radar</span><strong>${ladder.radar.overall}/100</strong><p>${escapeHtml(ladder.radar.posture)} | Weak spot: ${escapeHtml(ladder.radar.weakest.label)}</p></article>
      <article><span>Completed gates</span><strong>${ladder.completed}/6</strong><p>${escapeHtml(ladder.nextGate.label)} is the next gate.</p></article>
    </div>
    <div class="conviction-guardrail">
      <span>Ladder boundary</span>
      <ul>
        ${ladder.guardrails.map((item) => `<li>${escapeHtml(item)}</li>`).join("")}
      </ul>
    </div>
  `;
}

function makeConvictionLadderBrief() {
  const ladder = convictionLadderConfig();
  return [
    "# NiveshNadi Research Conviction Ladder",
    `Release: ${RELEASE_LABEL} (${DATA_VERSION})`,
    `Selected fund: ${ladder.fund.name}`,
    `Current rung: ${ladder.rung.label}`,
    `Conviction readiness: ${ladder.conviction}/100`,
    `Completed gates: ${ladder.completed}/6`,
    `Next gate: ${ladder.nextGate.label} | ${ladder.nextGate.detail}`,
    "",
    "## Gate Status",
    ...ladder.gates.map((gate) => `- ${gate.label}: ${gate.done ? "Complete" : "Open"} | ${gate.metric} | ${gate.detail}`),
    "",
    "## Guardrails",
    ...ladder.guardrails.map((item) => `- ${item}`),
    "",
    "Research workflow only. This ladder is not personalized advice, suitability approval, execution, or a return guarantee."
  ].join("\n");
}

function openConvictionGate() {
  scrollToHash(convictionLadderConfig().nextGate.route, "smooth", true);
}

function selectionFunnelConfig() {
  const profile = profileRoomProfile();
  const ladder = convictionLadderConfig();
  const fund = selectedFund();
  const filtered = filteredFunds();
  const categoryFunds = FUNDS.filter((item) => item.category === profile.primaryCategory);
  const compareFunds = compareSet();
  const evidence = evidenceReadinessScore(fund);
  const categoryMatch = fund.category === profile.primaryCategory;
  const filterReady = state.filters.category === profile.primaryCategory || filtered.length <= Math.max(3, categoryFunds.length + 1);
  const shortlistReady = compareFunds.length >= 2;
  const memoReady = ladder.rung.level >= 5;
  const stages = [
    {
      id: "profile",
      label: "Profile context",
      route: "#profile-room",
      done: profile.readiness >= 56,
      metric: `${profile.readiness}/100`,
      detail: `${profileIntentLabel(profile.config.intent)} | ${profile.config.horizon} years | ${profile.amountLabel}`,
      action: "Open Profile"
    },
    {
      id: "category",
      label: "Category anchor",
      route: "#category-playbook",
      done: Boolean(profile.primaryCategory),
      metric: profile.primaryCategory,
      detail: `${categoryFunds.length} demo funds sit in the anchor category.`,
      action: "Open Playbook"
    },
    {
      id: "universe",
      label: "Universe filter",
      route: "#screener",
      done: filterReady,
      metric: `${filtered.length}/${FUNDS.length}`,
      detail: filterReady ? "The visible list is narrowed enough to inspect." : "Apply category anchor before inspecting too many funds.",
      action: "Open Screener"
    },
    {
      id: "shortlist",
      label: "Shortlist set",
      route: "#compare",
      done: shortlistReady,
      metric: `${compareFunds.length} funds`,
      detail: shortlistReady ? "At least two funds are ready for side-by-side review." : "Select two or more funds before judging a category.",
      action: "Open Compare"
    },
    {
      id: "evidence",
      label: "Proof check",
      route: "#evidence",
      done: evidence >= 68,
      metric: `${evidence}/100`,
      detail: evidence >= 68 ? "Evidence posture is usable for demo research." : "Source readiness must improve before confidence rises.",
      action: "Open Evidence"
    },
    {
      id: "decision",
      label: "Decision boundary",
      route: "#conviction-ladder",
      done: memoReady,
      metric: ladder.rung.label,
      detail: memoReady ? "Research can move into written memo review." : "Use the ladder before treating the shortlist as actionable.",
      action: "Open Ladder"
    }
  ];
  const completed = stages.filter((stage) => stage.done).length;
  const bottleneck = stages.find((stage) => !stage.done) || {
    label: "Memo review",
    route: "#decision-pack",
    action: "Build Memo",
    metric: "Ready",
    detail: "Selection funnel is narrow enough for memo review."
  };
  const topCandidates = profile.candidates.slice(0, 5).map((item) => ({
    ...item,
    evidence: evidenceReadinessScore(item.fund),
    nadi: nadiScore(item.fund),
    selected: item.fund.id === fund.id
  }));
  const score = Math.round(clampNumber(
    profile.readiness * 0.22 +
    (categoryMatch ? 12 : 5) +
    (filterReady ? 12 : 4) +
    Math.min(compareFunds.length, 2) * 7 +
    evidence * 0.2 +
    ladder.conviction * 0.18,
    0,
    100
  ));
  const posture = (() => {
    if (score >= 84) return "Tight research lane";
    if (score >= 70) return "Shortlist narrowing";
    if (score >= 56) return "Category lane formed";
    return "Discovery too wide";
  })();
  const tone = score >= 84 ? "strong" : score >= 64 ? "usable" : score >= 50 ? "watch" : "weak";
  const stagesWithState = stages.map((stage, index) => ({
    ...stage,
    number: String(index + 1).padStart(2, "0"),
    state: stage.done ? "complete" : stage.id === bottleneck.id ? "active" : "open"
  }));
  const guardrails = [
    "Selection Funnel narrows research workflow only; it is not personalized advice, suitability approval, execution, or a return guarantee.",
    "A narrowed shortlist still needs live source dates, citation paths, TER, riskometer, factsheets, SID/KIM, holdings, and a written decision reason.",
    "No PAN, folio, CAS, bank, contact, account credential, ARN, EUIN, or distributor-client data is required for this Phase 1 funnel."
  ];
  return {
    bottleneck,
    categoryFunds,
    categoryMatch,
    completed,
    compareFunds,
    evidence,
    filterReady,
    filtered,
    fund,
    guardrails,
    ladder,
    posture,
    profile,
    score,
    stages: stagesWithState,
    tone,
    topCandidates
  };
}

function renderSelectionFunnel() {
  if (!els.selectionFunnelOutput) return;
  const funnel = selectionFunnelConfig();
  if (els.selectionFunnelSummary) {
    els.selectionFunnelSummary.textContent = `${funnel.posture} | ${funnel.score}/100`;
  }
  els.selectionFunnelOutput.innerHTML = `
    <div class="selection-funnel-hero ${escapeHtml(funnel.tone)}">
      <div>
        <span class="metric-label">${escapeHtml(funnel.posture)}</span>
        <h3>${escapeHtml(`From ${FUNDS.length} demo funds to ${funnel.profile.primaryCategory}`)}</h3>
        <p>Next bottleneck: ${escapeHtml(funnel.bottleneck.label)}. ${escapeHtml(funnel.bottleneck.detail)}</p>
      </div>
      <div class="selection-funnel-score" style="--score:${funnel.score}">
        <b>${funnel.score}</b>
        <span>Funnel</span>
      </div>
    </div>
    <div class="selection-stage-grid">
      ${funnel.stages.map((stage) => `
        <article class="${escapeHtml(stage.state)}">
          <div><span>${escapeHtml(stage.number)} | ${escapeHtml(stage.label)}</span><strong>${stage.done ? "Ready" : "Open"}</strong></div>
          <p>${escapeHtml(stage.detail)}</p>
          <small>${escapeHtml(stage.metric)}</small>
          <button class="text-button" type="button" data-selection-route="${escapeHtml(stage.route)}">${escapeHtml(stage.action)}</button>
        </article>
      `).join("")}
    </div>
    <div class="selection-metrics">
      <article><span>Anchor category</span><strong>${escapeHtml(funnel.profile.primaryCategory)}</strong><p>${funnel.categoryFunds.length} demo funds in lane</p></article>
      <article><span>Visible universe</span><strong>${funnel.filtered.length}/${FUNDS.length}</strong><p>${funnel.filterReady ? "Narrowed for inspection" : "Still broad"}</p></article>
      <article><span>Compare set</span><strong>${funnel.compareFunds.length} funds</strong><p>${escapeHtml(funnel.compareFunds.map((item) => item.category).slice(0, 3).join(", ") || "No peers selected")}</p></article>
      <article><span>Bottleneck</span><strong>${escapeHtml(funnel.bottleneck.label)}</strong><p>${escapeHtml(funnel.bottleneck.action)}</p></article>
    </div>
    <div class="selection-candidate-grid">
      ${funnel.topCandidates.map(({ fund, score, evidence, nadi, selected }) => `
        <article class="${selected ? "is-selected" : ""}">
          <span>${score}/100 profile fit</span>
          <strong>${escapeHtml(fund.name)}</strong>
          <p>${escapeHtml(fund.category)} | ${escapeHtml(fund.risk)} risk | Nadi ${nadi}/100 | Evidence ${evidence}/100</p>
          <button class="text-button" type="button" data-select-fund="${escapeHtml(fund.id)}">${selected ? "Selected" : "Inspect"}</button>
        </article>
      `).join("")}
    </div>
    <div class="selection-guardrail">
      <span>Funnel boundary</span>
      <ul>
        ${funnel.guardrails.map((item) => `<li>${escapeHtml(item)}</li>`).join("")}
      </ul>
    </div>
  `;
}

function makeSelectionFunnelBrief() {
  const funnel = selectionFunnelConfig();
  return [
    "# NiveshNadi Fund Selection Funnel",
    `Release: ${RELEASE_LABEL} (${DATA_VERSION})`,
    `Selected fund: ${funnel.fund.name}`,
    `Funnel posture: ${funnel.posture}`,
    `Funnel score: ${funnel.score}/100`,
    `Anchor category: ${funnel.profile.primaryCategory}`,
    `Visible universe: ${funnel.filtered.length}/${FUNDS.length}`,
    `Compare set: ${funnel.compareFunds.length} funds`,
    `Next bottleneck: ${funnel.bottleneck.label} | ${funnel.bottleneck.detail}`,
    "",
    "## Funnel Stages",
    ...funnel.stages.map((stage) => `- ${stage.label}: ${stage.done ? "Ready" : "Open"} | ${stage.metric} | ${stage.detail}`),
    "",
    "## Top Research Candidates",
    ...funnel.topCandidates.map(({ fund, score, evidence, nadi }) => `- ${fund.name}: ${score}/100 fit | ${fund.category} | ${fund.risk} risk | Nadi ${nadi}/100 | Evidence ${evidence}/100`),
    "",
    "## Guardrails",
    ...funnel.guardrails.map((item) => `- ${item}`),
    "",
    "Research workflow only. This funnel is not personalized advice, suitability approval, execution, or a return guarantee."
  ].join("\n");
}

function openSelectionBottleneck() {
  scrollToHash(selectionFunnelConfig().bottleneck.route, "smooth", true);
}

function applySelectionFunnel() {
  const funnel = selectionFunnelConfig();
  const topIds = funnel.topCandidates.slice(0, 3).map(({ fund }) => fund.id);
  if (funnel.topCandidates[0]) state.selectedId = funnel.topCandidates[0].fund.id;
  if (topIds.length >= 2) state.compare = new Set(topIds);
  state.filters = { search: "", category: funnel.profile.primaryCategory, risk: "all", sort: "score" };
  if (els.searchInput) els.searchInput.value = "";
  if (els.floatingSearchInput) els.floatingSearchInput.value = "";
  if (els.categoryFilter) els.categoryFilter.value = funnel.profile.primaryCategory;
  if (els.riskFilter) els.riskFilter.value = "all";
  if (els.sortSelect) els.sortSelect.value = "score";
  renderAll();
  analyzePortfolio();
  toast("Selection funnel applied locally.");
  scrollToHash("#screener", "smooth", true);
}

function shortlistReasonForFund(fund, fitScore, funnel) {
  const evidence = evidenceReadinessScore(fund);
  const score = nadiScore(fund);
  const categoryMatch = fund.category === funnel.profile.primaryCategory;
  const inCompare = funnel.compareFunds.some((item) => item.id === fund.id);
  const costFlag = fund.expense > 0.55;
  const drawdownFlag = fund.maxDrawdown >= 22;
  const readiness = Math.round(clampNumber(
    fitScore * 0.32 +
    score * 0.24 +
    evidence * 0.2 +
    (categoryMatch ? 9 : 0) +
    (inCompare ? 6 : 0) -
    (costFlag ? 4 : 0) -
    (drawdownFlag ? 4 : 0),
    0,
    100
  ));
  const proofGaps = [];
  if (!categoryMatch) proofGaps.push(`Not in the current ${funnel.profile.primaryCategory} anchor.`);
  if (evidence < 68) proofGaps.push("Evidence source readiness needs improvement.");
  if (!inCompare) proofGaps.push("Not yet in the Compare set.");
  if (drawdownFlag) proofGaps.push(`Drawdown ${fund.maxDrawdown}% needs stress review.`);
  if (costFlag) proofGaps.push(`TER ${fund.expense.toFixed(2)}% needs cost review.`);
  const strengths = [
    categoryMatch ? "Matches the profile category anchor" : "May work only as an alternate lane",
    score >= 74 ? `Nadi score ${score}/100 supports deeper inspection` : `Nadi score ${score}/100 needs peer context`,
    fitScore >= 78 ? `Profile fit ${fitScore}/100 is strong` : `Profile fit ${fitScore}/100 is still developing`,
    evidence >= 68 ? `Evidence ${evidence}/100 is usable for demo research` : `Evidence ${evidence}/100 is a proof gap`
  ];
  const status = (() => {
    if (readiness >= 78 && proofGaps.length <= 1) return "Keep";
    if (readiness >= 62) return "Watch";
    return "Park";
  })();
  const tone = status === "Keep" ? "keep" : status === "Watch" ? "watch" : "park";
  const nextRoute = (() => {
    if (evidence < 68) return "#evidence";
    if (!inCompare) return "#compare";
    if (drawdownFlag) return "#risk-lab";
    if (costFlag) return "#cost-lab";
    if (!categoryMatch) return "#category-playbook";
    return "#decision-pack";
  })();
  const nextAction = workspaceOption(nextRoute)?.textContent?.trim() || "Open next check";
  const reason = status === "Keep"
    ? "Keep for comparison because profile fit, score, and proof posture are strong enough for research review."
    : status === "Watch"
      ? "Watch until the proof gaps are resolved and peer context is clear."
      : "Park for now because the profile fit or evidence trail is not strong enough.";
  return {
    categoryMatch,
    evidence,
    fitScore,
    fund,
    inCompare,
    nextAction,
    nextRoute,
    proofGaps,
    readiness,
    reason,
    score,
    status,
    strengths,
    tone
  };
}

function shortlistReasonBoardConfig() {
  const funnel = selectionFunnelConfig();
  const selected = funnel.fund;
  const source = [
    ...funnel.topCandidates.map((item) => ({ fund: item.fund, fitScore: item.score })),
    ...funnel.compareFunds.map((fund) => ({
      fund,
      fitScore: funnel.profile.candidates.find((item) => item.fund.id === fund.id)?.score || investorFundFitScore(fund, funnel.profile.investorConfig)
    })),
    {
      fund: selected,
      fitScore: funnel.profile.candidates.find((item) => item.fund.id === selected.id)?.score || investorFundFitScore(selected, funnel.profile.investorConfig)
    }
  ];
  const unique = [];
  const seen = new Set();
  for (const item of source) {
    if (seen.has(item.fund.id)) continue;
    seen.add(item.fund.id);
    unique.push(item);
  }
  const cards = unique
    .map((item) => shortlistReasonForFund(item.fund, item.fitScore, funnel))
    .sort((a, b) => {
      const rank = { Keep: 0, Watch: 1, Park: 2 };
      return rank[a.status] - rank[b.status] || b.readiness - a.readiness || b.score - a.score;
    })
    .slice(0, 6);
  const keep = cards.filter((card) => card.status === "Keep");
  const watch = cards.filter((card) => card.status === "Watch");
  const park = cards.filter((card) => card.status === "Park");
  const nextGap = cards.find((card) => card.status !== "Keep") || cards.find((card) => card.proofGaps.length) || {
    fund: selected,
    nextRoute: "#decision-pack",
    nextAction: "Build Memo",
    proofGaps: ["Write the decision reason before any action."],
    status: "Ready",
    readiness: 100
  };
  const boardScore = Math.round(clampNumber(
    funnel.score * 0.45 +
    (keep.length ? 18 : 4) +
    Math.min(cards.length, 5) * 4 +
    (cards.every((card) => card.proofGaps.length <= 2) ? 10 : 3),
    0,
    100
  ));
  const posture = (() => {
    if (keep.length >= 2 && boardScore >= 78) return "Shortlist explainable";
    if (keep.length >= 1 || watch.length >= 2) return "Shortlist needs proof";
    return "Shortlist too early";
  })();
  const tone = boardScore >= 80 ? "strong" : boardScore >= 64 ? "usable" : boardScore >= 50 ? "watch" : "weak";
  const guardrails = [
    "Shortlist Reason Board explains research status only; it is not personalized advice, suitability approval, execution, or a return guarantee.",
    "Keep, Watch, and Park are workflow labels, not buy, hold, sell, switch, SIP, STP, redemption, or allocation instructions.",
    "Live launch still needs source dates, citation paths, TER, riskometer, factsheets, SID/KIM, portfolio disclosure, and written investor reasoning."
  ];
  return {
    boardScore,
    cards,
    funnel,
    guardrails,
    keep,
    nextGap,
    park,
    posture,
    selected,
    tone,
    watch
  };
}

function renderShortlistReasonBoard() {
  if (!els.shortlistBoardOutput) return;
  const board = shortlistReasonBoardConfig();
  if (els.shortlistBoardSummary) {
    els.shortlistBoardSummary.textContent = `${board.posture} | ${board.keep.length} keep`;
  }
  els.shortlistBoardOutput.innerHTML = `
    <div class="shortlist-board-hero ${escapeHtml(board.tone)}">
      <div>
        <span class="metric-label">${escapeHtml(board.posture)}</span>
        <h3>${escapeHtml(`${board.keep.length} keep | ${board.watch.length} watch | ${board.park.length} park`)}</h3>
        <p>Next gap: ${escapeHtml(board.nextGap.fund.name)} needs ${escapeHtml(board.nextGap.proofGaps[0] || "memo review")}.</p>
      </div>
      <div class="shortlist-board-score" style="--score:${board.boardScore}">
        <b>${board.boardScore}</b>
        <span>Board</span>
      </div>
    </div>
    <div class="shortlist-summary-grid">
      <article><span>Anchor</span><strong>${escapeHtml(board.funnel.profile.primaryCategory)}</strong><p>${board.funnel.categoryFunds.length} demo funds in lane</p></article>
      <article><span>Kept</span><strong>${board.keep.length}</strong><p>${escapeHtml(board.keep.map((card) => card.fund.name).slice(0, 2).join(" | ") || "No keep candidate yet")}</p></article>
      <article><span>Watch</span><strong>${board.watch.length}</strong><p>${escapeHtml(board.watch.map((card) => card.fund.category).slice(0, 2).join(" | ") || "No watch candidate")}</p></article>
      <article><span>Next gap</span><strong>${escapeHtml(board.nextGap.nextAction)}</strong><p>${escapeHtml(board.nextGap.status)} | ${board.nextGap.readiness}/100</p></article>
    </div>
    <div class="shortlist-card-grid">
      ${board.cards.map((card) => `
        <article class="${escapeHtml(card.tone)}">
          <div class="shortlist-card-head">
            <div>
              <span>${escapeHtml(card.status)} | ${card.readiness}/100</span>
              <strong>${escapeHtml(card.fund.name)}</strong>
            </div>
            <b>${card.score}</b>
          </div>
          <p>${escapeHtml(card.reason)}</p>
          <div class="shortlist-chip-row">
            <span>${escapeHtml(card.fund.category)}</span>
            <span>${escapeHtml(card.fund.risk)} risk</span>
            <span>Fit ${card.fitScore}/100</span>
            <span>Evidence ${card.evidence}/100</span>
          </div>
          <ul>
            ${card.strengths.slice(0, 3).map((item) => `<li>${escapeHtml(item)}</li>`).join("")}
            ${card.proofGaps.slice(0, 2).map((item) => `<li>${escapeHtml(item)}</li>`).join("")}
          </ul>
          <button class="text-button" type="button" data-shortlist-route="${escapeHtml(card.nextRoute)}">${escapeHtml(card.nextAction)}</button>
        </article>
      `).join("")}
    </div>
    <div class="shortlist-guardrail">
      <span>Shortlist boundary</span>
      <ul>
        ${board.guardrails.map((item) => `<li>${escapeHtml(item)}</li>`).join("")}
      </ul>
    </div>
  `;
}

function makeShortlistReasonBoardBrief() {
  const board = shortlistReasonBoardConfig();
  return [
    "# NiveshNadi Shortlist Reason Board",
    `Release: ${RELEASE_LABEL} (${DATA_VERSION})`,
    `Selected fund: ${board.selected.name}`,
    `Board posture: ${board.posture}`,
    `Board score: ${board.boardScore}/100`,
    `Anchor category: ${board.funnel.profile.primaryCategory}`,
    `Status mix: ${board.keep.length} keep | ${board.watch.length} watch | ${board.park.length} park`,
    `Next gap: ${board.nextGap.fund.name} | ${board.nextGap.proofGaps[0] || "Write the decision reason."}`,
    "",
    "## Candidate Reasons",
    ...board.cards.map((card) => [
      `- ${card.fund.name}: ${card.status} | ${card.readiness}/100`,
      `  Reason: ${card.reason}`,
      `  Proof gaps: ${card.proofGaps.join(" | ") || "No major proof gap in demo mode."}`
    ].join("\n")),
    "",
    "## Guardrails",
    ...board.guardrails.map((item) => `- ${item}`),
    "",
    "Research workflow only. Keep, Watch, and Park are not investment instructions."
  ].join("\n");
}

function openShortlistGap() {
  scrollToHash(shortlistReasonBoardConfig().nextGap.nextRoute, "smooth", true);
}

function applyShortlistBoard() {
  const board = shortlistReasonBoardConfig();
  const kept = board.keep.length ? board.keep : board.cards.slice(0, 2);
  state.compare = new Set(kept.slice(0, 4).map((card) => card.fund.id));
  state.selectedId = kept[0]?.fund.id || state.selectedId;
  state.filters = { search: "", category: board.funnel.profile.primaryCategory, risk: "all", sort: "score" };
  if (els.searchInput) els.searchInput.value = "";
  if (els.floatingSearchInput) els.floatingSearchInput.value = "";
  if (els.categoryFilter) els.categoryFilter.value = board.funnel.profile.primaryCategory;
  if (els.riskFilter) els.riskFilter.value = "all";
  if (els.sortSelect) els.sortSelect.value = "score";
  renderAll();
  analyzePortfolio();
  toast("Shortlist board applied locally.");
  scrollToHash("#compare", "smooth", true);
}

function proofGapRoute(gap, fallbackRoute) {
  const lower = gap.toLowerCase();
  if (lower.includes("evidence") || lower.includes("source")) return "#evidence";
  if (lower.includes("compare")) return "#compare";
  if (lower.includes("drawdown") || lower.includes("stress")) return "#risk-lab";
  if (lower.includes("ter") || lower.includes("cost")) return "#cost-lab";
  if (lower.includes("anchor") || lower.includes("category")) return "#category-playbook";
  if (lower.includes("memo") || lower.includes("reason")) return "#decision-pack";
  return fallbackRoute || "#evidence";
}

function proofGapQueueConfig() {
  const board = shortlistReasonBoardConfig();
  const taskSource = [];
  for (const card of board.cards) {
    const gaps = card.proofGaps.length
      ? card.proofGaps
      : card.status === "Keep"
        ? ["Write why this candidate remains on the shortlist before memo review."]
        : ["Recheck profile fit, peer context, and evidence before keeping this candidate."];
    gaps.slice(0, 3).forEach((gap, index) => {
      const route = proofGapRoute(gap, card.nextRoute);
      const severityBase = card.status === "Park" ? 88 : card.status === "Watch" ? 76 : 58;
      const priority = Math.round(clampNumber(
        severityBase +
        (card.evidence < 68 ? 8 : 0) +
        (card.inCompare ? 0 : 7) +
        (index === 0 ? 5 : 0) -
        Math.max(0, card.readiness - 62) * 0.18,
        30,
        99
      ));
      taskSource.push({
        action: workspaceOption(route)?.textContent?.trim() || "Open check",
        fund: card.fund,
        gap,
        priority,
        readiness: card.readiness,
        route,
        status: card.status,
        tone: priority >= 84 ? "urgent" : priority >= 70 ? "focus" : "normal"
      });
    });
  }
  const tasks = taskSource
    .sort((a, b) => b.priority - a.priority || a.readiness - b.readiness || a.fund.name.localeCompare(b.fund.name))
    .slice(0, 8);
  const topTask = tasks[0] || {
    action: "Build Memo",
    fund: board.selected,
    gap: "No major demo proof gap is visible. Write the decision memo reason before any action.",
    priority: 42,
    route: "#decision-pack",
    status: "Ready",
    tone: "normal"
  };
  const affectedFunds = new Set(tasks.map((task) => task.fund.id));
  const laneMap = new Map();
  tasks.forEach((task) => {
    const lane = workspaceOption(task.route)?.textContent?.trim() || task.action;
    const current = laneMap.get(task.route) || { label: lane, route: task.route, count: 0, maxPriority: 0 };
    current.count += 1;
    current.maxPriority = Math.max(current.maxPriority, task.priority);
    laneMap.set(task.route, current);
  });
  const lanes = Array.from(laneMap.values()).sort((a, b) => b.maxPriority - a.maxPriority || b.count - a.count);
  const queueScore = Math.round(clampNumber(
    board.boardScore * 0.52 +
    (100 - topTask.priority) * 0.28 +
    (tasks.length <= 3 ? 12 : tasks.length <= 6 ? 6 : 2) +
    (board.keep.length ? 6 : 0),
    0,
    100
  ));
  const posture = (() => {
    if (tasks.length <= 2 && queueScore >= 78) return "Focused proof queue";
    if (tasks.length <= 5) return "Proof work mapped";
    return "Proof queue active";
  })();
  const tone = queueScore >= 80 ? "strong" : queueScore >= 64 ? "usable" : queueScore >= 50 ? "watch" : "weak";
  const guardrails = [
    "Proof Gap Queue ranks research verification work only; it is not personalized advice, suitability approval, execution, or a return guarantee.",
    "A completed proof queue still needs a written decision reason and live source dates before production use.",
    "Do not enter PAN, folio, CAS, bank, contact, credential, ARN, EUIN, or distributor-client information into Phase 1 notes."
  ];
  return {
    affectedFunds,
    board,
    guardrails,
    lanes,
    posture,
    queueScore,
    tasks,
    tone,
    topTask
  };
}

function renderProofGapQueue() {
  if (!els.proofGapOutput) return;
  const queue = proofGapQueueConfig();
  if (els.proofGapSummary) {
    els.proofGapSummary.textContent = `${queue.posture} | ${queue.tasks.length} tasks`;
  }
  els.proofGapOutput.innerHTML = `
    <div class="proof-gap-hero ${escapeHtml(queue.tone)}">
      <div>
        <span class="metric-label">${escapeHtml(queue.posture)}</span>
        <h3>${escapeHtml(queue.topTask.fund.name)}</h3>
        <p>Top gap: ${escapeHtml(queue.topTask.gap)}</p>
      </div>
      <div class="proof-gap-score" style="--score:${queue.queueScore}">
        <b>${queue.queueScore}</b>
        <span>Proof</span>
      </div>
    </div>
    <div class="proof-gap-metrics">
      <article><span>Tasks</span><strong>${queue.tasks.length}</strong><p>${queue.tasks.length ? "Verification items ranked" : "No active gaps"}</p></article>
      <article><span>Affected funds</span><strong>${queue.affectedFunds.size}</strong><p>${queue.board.cards.length} candidates scanned</p></article>
      <article><span>Top route</span><strong>${escapeHtml(queue.topTask.action)}</strong><p>Priority ${queue.topTask.priority}/100</p></article>
      <article><span>Board posture</span><strong>${escapeHtml(queue.board.posture)}</strong><p>${queue.board.keep.length} keep | ${queue.board.watch.length} watch | ${queue.board.park.length} park</p></article>
    </div>
    <div class="proof-gap-task-grid">
      ${queue.tasks.map((task) => `
        <article class="${escapeHtml(task.tone)}">
          <div>
            <span>${escapeHtml(task.status)} | priority ${task.priority}</span>
            <strong>${escapeHtml(task.fund.name)}</strong>
          </div>
          <p>${escapeHtml(task.gap)}</p>
          <button class="text-button" type="button" data-proof-route="${escapeHtml(task.route)}">${escapeHtml(task.action)}</button>
        </article>
      `).join("") || "<article><span>Ready</span><strong>No active proof task</strong><p>Write the decision memo and keep the research boundary visible.</p></article>"}
    </div>
    <div class="proof-gap-lane-grid">
      ${queue.lanes.map((lane) => `
        <article>
          <span>${lane.count} task${lane.count === 1 ? "" : "s"}</span>
          <strong>${escapeHtml(lane.label)}</strong>
          <p>Highest priority ${lane.maxPriority}/100</p>
          <button class="text-button" type="button" data-proof-route="${escapeHtml(lane.route)}">Open lane</button>
        </article>
      `).join("") || "<article><span>Memo</span><strong>Decision Pack</strong><p>No proof lane is currently dominant.</p></article>"}
    </div>
    <div class="proof-gap-guardrail">
      <span>Proof boundary</span>
      <ul>
        ${queue.guardrails.map((item) => `<li>${escapeHtml(item)}</li>`).join("")}
      </ul>
    </div>
  `;
}

function makeProofGapQueueBrief() {
  const queue = proofGapQueueConfig();
  return [
    "# NiveshNadi Proof Gap Queue",
    `Release: ${RELEASE_LABEL} (${DATA_VERSION})`,
    `Queue posture: ${queue.posture}`,
    `Queue score: ${queue.queueScore}/100`,
    `Tasks: ${queue.tasks.length}`,
    `Affected funds: ${queue.affectedFunds.size}`,
    `Top gap: ${queue.topTask.fund.name} | ${queue.topTask.gap}`,
    "",
    "## Ranked Proof Tasks",
    ...queue.tasks.map((task) => `- ${task.fund.name}: priority ${task.priority}/100 | ${task.status} | ${task.gap} | Route: ${task.action}`),
    "",
    "## Proof Lanes",
    ...queue.lanes.map((lane) => `- ${lane.label}: ${lane.count} task(s), highest priority ${lane.maxPriority}/100`),
    "",
    "## Guardrails",
    ...queue.guardrails.map((item) => `- ${item}`),
    "",
    "Research workflow only. This queue ranks verification tasks, not investment actions."
  ].join("\n");
}

function openProofGap() {
  scrollToHash(proofGapQueueConfig().topTask.route, "smooth", true);
}

function memoClearanceDeskConfig() {
  const queue = proofGapQueueConfig();
  const sheet = answerSheetConfig();
  const ladder = convictionLadderConfig();
  const fund = selectedFund();
  const memoReason = (els.packReason?.value || sheet.values.memo || "").trim();
  const memoEntry = sheet.entries.find((entry) => entry.theme === "Decision memo") || { score: 0 };
  const evidence = evidenceReadinessScore(fund);
  const answerReady = sheet.readiness >= 64 && sheet.answered >= 4;
  const shortlistReady = queue.board.keep.length >= 1 || queue.board.watch.length >= 2;
  const proofReady = queue.queueScore >= 54 && queue.topTask.priority < 92;
  const ladderReady = ladder.rung.level >= 3 || ladder.completed >= 3;
  const memoReady = memoReason.length >= 18 || memoEntry.score >= 52 || ladder.rung.level >= 5;
  const boundaryReady = evidence >= 58 && queue.tasks.length <= 8;
  const gates = [
    {
      id: "answers",
      label: "Answer base",
      route: "#answer-sheet",
      done: answerReady,
      score: sheet.readiness,
      detail: answerReady ? "Core answers are usable enough for memo review." : "Answer at least four research prompts in plain language.",
      action: "Open Answers"
    },
    {
      id: "shortlist",
      label: "Shortlist reason",
      route: "#shortlist-board",
      done: shortlistReady,
      score: queue.board.boardScore,
      detail: shortlistReady ? "Candidate reasons are organized into keep, watch, and park lanes." : "Build a shortlist reason before drafting the memo.",
      action: "Open Shortlist"
    },
    {
      id: "proof",
      label: "Proof gaps",
      route: "#proof-gap-queue",
      done: proofReady,
      score: queue.queueScore,
      detail: proofReady ? "No critical proof blocker is dominating the queue." : `Top blocker: ${queue.topTask.gap}`,
      action: "Open Proof Queue"
    },
    {
      id: "ladder",
      label: "Conviction ladder",
      route: "#conviction-ladder",
      done: ladderReady,
      score: ladder.conviction,
      detail: ladderReady ? `${ladder.rung.label} posture is usable for memo routing.` : `Next ladder gate: ${ladder.nextGate.label}.`,
      action: "Open Ladder"
    },
    {
      id: "memo",
      label: "Memo reason",
      route: "#decision-pack",
      done: memoReady,
      score: Math.round(clampNumber(memoEntry.score || memoReason.length * 3, 0, 100)),
      detail: memoReady ? "Decision reason is visible enough to review." : "Write the reason in the investor's own words before committing the research file.",
      action: "Build Memo"
    },
    {
      id: "boundary",
      label: "Research boundary",
      route: "#readiness-gate",
      done: boundaryReady,
      score: evidence,
      detail: boundaryReady ? "Evidence and no-advice boundaries are visible." : "Confirm source readiness and keep the no-advice boundary explicit.",
      action: "Open Gate"
    }
  ];
  const blockers = gates.filter((gate) => !gate.done);
  const completed = gates.length - blockers.length;
  const topBlocker = blockers[0] || {
    label: "Decision Pack",
    route: "#decision-pack",
    action: "Build Memo",
    detail: "Research file is ready to draft the memo, subject to live source verification."
  };
  const clearanceScore = Math.round(clampNumber(
    sheet.readiness * 0.22 +
    queue.queueScore * 0.2 +
    queue.board.boardScore * 0.18 +
    ladder.conviction * 0.18 +
    evidence * 0.12 +
    completed * 4 +
    (memoReady ? 6 : 0),
    0,
    100
  ));
  const posture = (() => {
    if (!blockers.length && clearanceScore >= 82) return "Cleared for memo drafting";
    if (blockers.length <= 2 && clearanceScore >= 68) return "Memo nearly ready";
    if (completed >= 3) return "Memo needs cleanup";
    return "Memo blocked";
  })();
  const tone = clearanceScore >= 82 && blockers.length <= 1
    ? "strong"
    : clearanceScore >= 68
      ? "usable"
      : clearanceScore >= 52
        ? "watch"
        : "weak";
  const guardrails = [
    "Memo Clearance Desk is a research-readiness gate only; it is not personalized advice, suitability approval, execution, SIP, STP, switch, redemption, or return guidance.",
    "A cleared memo still needs live AMFI, AMC factsheet, SID/KIM, portfolio disclosure, riskometer, TER, benchmark, source date, and citation-path checks before production use.",
    "Do not enter PAN, folio, CAS, bank, contact, account, credential, ARN, EUIN, or distributor-client data into Phase 1 memo notes."
  ];
  return {
    blockers,
    clearanceScore,
    completed,
    evidence,
    fund,
    gates,
    guardrails,
    ladder,
    memoReason,
    posture,
    queue,
    sheet,
    tone,
    topBlocker
  };
}

function renderMemoClearanceDesk() {
  if (!els.memoClearanceOutput) return;
  const clearance = memoClearanceDeskConfig();
  if (els.memoClearanceSummary) {
    els.memoClearanceSummary.textContent = `${clearance.posture} | ${clearance.clearanceScore}/100`;
  }
  els.memoClearanceOutput.innerHTML = `
    <div class="memo-clearance-hero ${escapeHtml(clearance.tone)}">
      <div>
        <span class="metric-label">${escapeHtml(clearance.posture)}</span>
        <h3>${escapeHtml(clearance.fund.name)} memo clearance</h3>
        <p>${escapeHtml(clearance.blockers.length ? clearance.topBlocker.detail : "Ready to draft a research memo, with live-source verification still required before production use.")}</p>
      </div>
      <div class="memo-clearance-score" style="--score:${clearance.clearanceScore}">
        <b>${clearance.clearanceScore}</b>
        <span>Clear</span>
      </div>
    </div>
    <div class="memo-clearance-metrics">
      <article><span>Gates complete</span><strong>${clearance.completed}/6</strong><p>${clearance.blockers.length} blocker${clearance.blockers.length === 1 ? "" : "s"} still open</p></article>
      <article><span>Answer base</span><strong>${clearance.sheet.readiness}/100</strong><p>${clearance.sheet.answered}/6 research prompts answered</p></article>
      <article><span>Proof queue</span><strong>${clearance.queue.queueScore}/100</strong><p>Top priority ${clearance.queue.topTask.priority}/100</p></article>
      <article><span>Conviction rung</span><strong>${escapeHtml(clearance.ladder.rung.label)}</strong><p>${clearance.ladder.conviction}/100 ladder readiness</p></article>
    </div>
    <div class="memo-clearance-gate-grid">
      ${clearance.gates.map((gate) => `
        <article class="${gate.done ? "complete" : "open"}">
          <div><span>${escapeHtml(gate.label)}</span><strong>${gate.done ? "Clear" : "Blocked"}</strong></div>
          <p>${escapeHtml(gate.detail)}</p>
          <small>${gate.score}/100</small>
          <button class="text-button" type="button" data-memo-clearance-route="${escapeHtml(gate.route)}">${escapeHtml(gate.action)}</button>
        </article>
      `).join("")}
    </div>
    <div class="memo-clearance-blocker-grid">
      <article>
        <span>Top blocker</span>
        <strong>${escapeHtml(clearance.topBlocker.label)}</strong>
        <p>${escapeHtml(clearance.topBlocker.detail)}</p>
        <button class="text-button" type="button" data-memo-clearance-route="${escapeHtml(clearance.topBlocker.route)}">${escapeHtml(clearance.topBlocker.action)}</button>
      </article>
      <article>
        <span>Memo wording</span>
        <strong>${clearance.memoReason ? "Reason detected" : "Reason pending"}</strong>
        <p>${escapeHtml(clearance.memoReason || "Write the decision reason before treating the memo as ready.")}</p>
      </article>
      <article>
        <span>Production caveat</span>
        <strong>Live source check</strong>
        <p>Demo clearance is not final until source dates, citation paths, riskometer, TER, holdings, and benchmark facts are verified.</p>
      </article>
    </div>
    <div class="memo-clearance-guardrail">
      <span>Memo boundary</span>
      <ul>
        ${clearance.guardrails.map((item) => `<li>${escapeHtml(item)}</li>`).join("")}
      </ul>
    </div>
  `;
}

function makeMemoClearanceBrief() {
  const clearance = memoClearanceDeskConfig();
  return [
    "# NiveshNadi Memo Clearance Desk",
    `Release: ${RELEASE_LABEL} (${DATA_VERSION})`,
    `Selected fund: ${clearance.fund.name}`,
    `Memo posture: ${clearance.posture}`,
    `Clearance score: ${clearance.clearanceScore}/100`,
    `Gates complete: ${clearance.completed}/6`,
    `Top blocker: ${clearance.topBlocker.label} | ${clearance.topBlocker.detail}`,
    "",
    "## Gate Status",
    ...clearance.gates.map((gate) => `- ${gate.label}: ${gate.done ? "Clear" : "Blocked"} | ${gate.score}/100 | ${gate.detail}`),
    "",
    "## Open Blockers",
    ...(clearance.blockers.length ? clearance.blockers.map((gate) => `- ${gate.label}: ${gate.detail}`) : ["- No open demo blockers. Verify live source dates and citation paths before production use."]),
    "",
    "## Guardrails",
    ...clearance.guardrails.map((item) => `- ${item}`),
    "",
    "Research workflow only. Memo clearance is not personalized advice, suitability approval, execution, or a return guarantee."
  ].join("\n");
}

function openMemoClearanceBlocker() {
  scrollToHash(memoClearanceDeskConfig().topBlocker.route, "smooth", true);
}

function clearanceSprintBoardConfig() {
  const clearance = memoClearanceDeskConfig();
  const fallbackGates = [
    {
      label: "Decision memo",
      route: "#decision-pack",
      action: "Build Memo",
      score: clearance.clearanceScore,
      detail: "Draft the memo while keeping live-source verification caveats visible."
    },
    {
      label: "Source refresh",
      route: "#evidence",
      action: "Open Evidence",
      score: clearance.evidence,
      detail: "Confirm AMFI, AMC factsheet, SID/KIM, portfolio disclosure, TER, riskometer, and source dates."
    },
    {
      label: "Review rhythm",
      route: "#review-rhythm",
      action: "Open Rhythm",
      score: clearance.ladder.conviction,
      detail: "Set the next review date and watch triggers before storing the file."
    }
  ];
  const sprintSource = clearance.blockers.length ? clearance.blockers : fallbackGates;
  const lanes = ["Today", "Next", "Before memo", "Final check"];
  const moves = sprintSource.slice(0, 4).map((gate, index) => {
    const score = Number.isFinite(gate.score) ? gate.score : clearance.clearanceScore;
    const minutes = score < 45 ? 35 : score < 65 ? 25 : score < 80 ? 18 : 12;
    return {
      action: gate.action || "Open workspace",
      detail: gate.detail,
      label: gate.label,
      lane: lanes[index] || "Final check",
      minutes,
      route: gate.route,
      score,
      tone: index === 0 ? "focus" : score < 65 ? "watch" : "normal"
    };
  });
  const fillerMoves = [
    {
      action: "Open Evidence",
      detail: "Refresh source dates, citation paths, holdings date, riskometer, TER, factsheet, SID/KIM, and benchmark caveats.",
      label: "Source refresh",
      route: "#evidence",
      score: clearance.evidence
    },
    {
      action: "Open Rhythm",
      detail: "Set the next review date and watch trigger so the memo does not become stale after it is written.",
      label: "Review rhythm",
      route: "#review-rhythm",
      score: clearance.ladder.conviction
    },
    {
      action: "Copy Clearance",
      detail: "Copy the clearance brief and keep the no-advice boundary attached to the research file.",
      label: "Research trail",
      route: "#memo-clearance",
      score: clearance.clearanceScore
    }
  ];
  let fillerIndex = 0;
  while (moves.length < 4) {
    const filler = fillerMoves[fillerIndex % fillerMoves.length];
    moves.push({
      ...filler,
      lane: lanes[moves.length] || "Final check",
      minutes: moves.length === 3 ? 8 : 12,
      tone: "normal"
    });
    fillerIndex += 1;
  }
  const totalMinutes = moves.reduce((sum, move) => sum + move.minutes, 0);
  const firstMove = moves[0] || {
    action: "Open Clearance",
    detail: "Review memo clearance before drafting.",
    label: "Memo Clearance",
    lane: "Today",
    minutes: 10,
    route: "#memo-clearance",
    score: clearance.clearanceScore,
    tone: "normal"
  };
  const sprintScore = Math.round(clampNumber(
    clearance.clearanceScore * 0.62 +
    clearance.completed * 5 +
    Math.max(0, 100 - clearance.blockers.length * 13) * 0.18 +
    (totalMinutes <= 60 ? 8 : totalMinutes <= 90 ? 4 : 0),
    0,
    100
  ));
  const posture = (() => {
    if (!clearance.blockers.length && sprintScore >= 86) return "Memo sprint ready";
    if (clearance.blockers.length <= 2) return "One-session cleanup";
    if (clearance.completed >= 3) return "Focused blocker sprint";
    return "Research sprint needed";
  })();
  const finishLine = clearance.blockers.length
    ? `${clearance.blockers[0].label} cleared, then rerun memo clearance.`
    : "Memo drafted with live-source caveats still visible.";
  const guardrails = [
    "Clearance Sprint Board is a research workflow planner only; it is not personalized advice, suitability approval, execution, SIP, STP, switch, redemption, or return guidance.",
    "The sprint can organize work, but production launch still needs live source dates, citation paths, riskometer, TER, benchmark, factsheet, SID/KIM, and portfolio disclosure checks.",
    "Keep PAN, folio, CAS, bank, contact, account, credential, ARN, EUIN, and distributor-client data out of sprint notes."
  ];
  return {
    clearance,
    finishLine,
    firstMove,
    guardrails,
    moves,
    posture,
    sprintScore,
    totalMinutes
  };
}

function renderClearanceSprintBoard() {
  if (!els.clearanceSprintOutput) return;
  const sprint = clearanceSprintBoardConfig();
  if (els.clearanceSprintSummary) {
    els.clearanceSprintSummary.textContent = `${sprint.posture} | ${sprint.totalMinutes} min`;
  }
  els.clearanceSprintOutput.innerHTML = `
    <div class="clearance-sprint-hero">
      <div>
        <span class="metric-label">${escapeHtml(sprint.posture)}</span>
        <h3>${escapeHtml(sprint.firstMove.label)} is the first move</h3>
        <p>${escapeHtml(sprint.firstMove.detail)}</p>
      </div>
      <div class="clearance-sprint-score" style="--score:${sprint.sprintScore}">
        <b>${sprint.sprintScore}</b>
        <span>Sprint</span>
      </div>
    </div>
    <div class="clearance-sprint-metrics">
      <article><span>First move</span><strong>${escapeHtml(sprint.firstMove.action)}</strong><p>${escapeHtml(sprint.firstMove.lane)} | ${sprint.firstMove.minutes} min</p></article>
      <article><span>Open blockers</span><strong>${sprint.clearance.blockers.length}</strong><p>${sprint.clearance.completed}/6 clearance gates complete</p></article>
      <article><span>Total effort</span><strong>${sprint.totalMinutes} min</strong><p>Demo time estimate for research cleanup</p></article>
      <article><span>Finish line</span><strong>${escapeHtml(sprint.clearance.posture)}</strong><p>${escapeHtml(sprint.finishLine)}</p></article>
    </div>
    <div class="clearance-sprint-move-grid">
      ${sprint.moves.map((move, index) => `
        <article class="${escapeHtml(move.tone)}">
          <div><span>${escapeHtml(move.lane)} | ${move.minutes} min</span><strong>${String(index + 1).padStart(2, "0")} ${escapeHtml(move.label)}</strong></div>
          <p>${escapeHtml(move.detail)}</p>
          <small>${move.score}/100 source score</small>
          <button class="text-button" type="button" data-clearance-sprint-route="${escapeHtml(move.route)}">${escapeHtml(move.action)}</button>
        </article>
      `).join("")}
    </div>
    <div class="clearance-sprint-guardrail">
      <span>Sprint boundary</span>
      <ul>
        ${sprint.guardrails.map((item) => `<li>${escapeHtml(item)}</li>`).join("")}
      </ul>
    </div>
  `;
}

function makeClearanceSprintBrief() {
  const sprint = clearanceSprintBoardConfig();
  return [
    "# NiveshNadi Clearance Sprint Board",
    `Release: ${RELEASE_LABEL} (${DATA_VERSION})`,
    `Selected fund: ${sprint.clearance.fund.name}`,
    `Sprint posture: ${sprint.posture}`,
    `Sprint score: ${sprint.sprintScore}/100`,
    `Total effort: ${sprint.totalMinutes} minutes`,
    `First move: ${sprint.firstMove.label} | ${sprint.firstMove.detail}`,
    `Finish line: ${sprint.finishLine}`,
    "",
    "## Sprint Moves",
    ...sprint.moves.map((move, index) => `${index + 1}. ${move.lane}: ${move.label} | ${move.minutes} min | ${move.detail} | Route: ${move.action}`),
    "",
    "## Guardrails",
    ...sprint.guardrails.map((item) => `- ${item}`),
    "",
    "Research workflow only. This sprint board is not personalized advice, suitability approval, execution, or a return guarantee."
  ].join("\n");
}

function openClearanceSprintMove() {
  scrollToHash(clearanceSprintBoardConfig().firstMove.route, "smooth", true);
}

function loadStarterGuideProgress() {
  try {
    const value = JSON.parse(localStorage.getItem("niveshnadi-starter-guide") || "{}");
    return value && typeof value === "object" ? value : {};
  } catch (error) {
    return {};
  }
}

function saveStarterGuideProgress(progress) {
  localStorage.setItem("niveshnadi-starter-guide", JSON.stringify(progress));
}

function readStarterGuideConfig() {
  return {
    intent: els.starterIntent?.value || "profile",
    time: els.starterTime?.value || "quick"
  };
}

function starterIntentLabel(intent) {
  return {
    profile: "Build profile first",
    "first-sip": "Start first SIP",
    compare: "Compare shortlist",
    review: "Review portfolio",
    switch: "Study switch question",
    memo: "Prepare memo"
  }[intent] || "Build profile first";
}

function starterTimeLabel(time) {
  return {
    quick: "5 minute scan",
    focused: "15 minute research",
    deep: "30 minute deep work"
  }[time] || "5 minute scan";
}

function applyStarterIntentToProfile(intent = readStarterGuideConfig().intent) {
  const goalMap = {
    "first-sip": "first-sip",
    compare: "first-sip",
    review: "review",
    switch: "switch",
    memo: "first-sip"
  };
  const stageMap = {
    "first-sip": "new",
    compare: "building",
    review: "reviewing",
    switch: "reviewing",
    memo: "building"
  };
  const confidenceMap = {
    "first-sip": "exploring",
    compare: "shortlist",
    review: "shortlist",
    switch: "shortlist",
    memo: "ready"
  };

  if (intent !== "profile" && els.investorGoal) els.investorGoal.value = goalMap[intent] || "first-sip";
  if (intent !== "profile" && els.investorStage) els.investorStage.value = stageMap[intent] || "new";
  if (intent !== "profile" && els.investorConfidence) els.investorConfidence.value = confidenceMap[intent] || "exploring";
}

function starterIntentRoute(intent, profile) {
  if (intent === "compare") return "#compare";
  if (intent === "review") return "#portfolio-review";
  if (intent === "switch") return "#switch-lab";
  if (intent === "memo") return "#decision-pack";
  return profile.route;
}

function starterGuideSteps(config, profile) {
  const route = starterIntentRoute(config.intent, profile);
  const routeLabel = workspaceOption(route)?.textContent?.trim() || "Suggested route";
  const timeLabel = starterTimeLabel(config.time);
  return [
    {
      id: "profile",
      label: "Profile",
      tool: "Investor Passport",
      route: "#investor-passport",
      detail: `Capture the need, stage, horizon, SIP capacity, risk comfort, and emergency buffer for a ${timeLabel}.`
    },
    {
      id: "lane",
      label: "Lane",
      tool: "Research Lanes",
      route: "#research-lanes",
      detail: `Convert the passport into a ${routeLabel} workflow without treating the route as advice.`
    },
    {
      id: "shortlist",
      label: "Shortlist",
      tool: config.intent === "review" ? "Portfolio Review" : "Compare",
      route: config.intent === "review" ? "#portfolio-review" : route === "#switch-lab" ? "#switch-lab" : "#compare",
      detail: "Inspect role, cost, risk, overlap, and whether every fund has a separate job."
    },
    {
      id: "evidence",
      label: "Evidence",
      tool: "Evidence Ledger",
      route: "#evidence",
      detail: "Check AMFI, AMC factsheet, SID, KIM, portfolio disclosure, riskometer, and TER readiness."
    },
    {
      id: "memo",
      label: "Memo",
      tool: "Decision Pack",
      route: "#decision-pack",
      detail: "Write the reason, amount, review date, evidence status, and compliance boundary before acting."
    }
  ];
}

function starterGuideSnapshot() {
  const config = readStarterGuideConfig();
  const profile = investorPassportProfile();
  const progress = loadStarterGuideProgress();
  const steps = starterGuideSteps(config, profile);
  const doneCount = steps.filter((step) => progress[step.id]).length;
  const next = steps.find((step) => !progress[step.id]) || steps[steps.length - 1];
  const score = Math.round((doneCount / steps.length) * 100);
  let posture = "Start here";
  if (doneCount >= 5) posture = "Research start complete";
  else if (doneCount >= 3) posture = "Memo discipline next";
  else if (doneCount >= 1) posture = "Route in motion";
  return { config, doneCount, next, posture, profile, progress, score, steps };
}

function setStarterStepProgress(stepId, value, rerender = true) {
  const progress = loadStarterGuideProgress();
  progress[stepId] = value;
  saveStarterGuideProgress(progress);
  if (rerender) {
    renderStarterGuide();
    renderNadiCoach();
    renderPrivacyControlRoom();
  }
}

function renderStarterGuide() {
  if (!els.starterGuideOutput) return;
  const guide = starterGuideSnapshot();
  if (els.starterGuideSummary) {
    els.starterGuideSummary.textContent = `${guide.doneCount} of ${guide.steps.length} complete`;
  }
  els.starterGuideOutput.innerHTML = `
    <div class="starter-hero">
      <div>
        <span class="metric-label">${escapeHtml(guide.posture)}</span>
        <h3>${escapeHtml(starterIntentLabel(guide.config.intent))}</h3>
        <p>${escapeHtml(guide.next.tool)} is next for ${escapeHtml(guide.profile.topFund.name)}. Progress is saved only in this browser.</p>
      </div>
      <div class="starter-score" style="--score:${guide.score}">
        <b>${guide.score}</b>
        <span>Start</span>
      </div>
    </div>
    <div class="starter-progress" aria-label="First start progress">
      <span style="width:${guide.score}%"></span>
    </div>
    <div class="starter-next">
      <span>Next move</span>
      <strong>${escapeHtml(guide.next.label)}: ${escapeHtml(guide.next.tool)}</strong>
      <p>${escapeHtml(guide.next.detail)}</p>
      <button class="text-button" type="button" data-starter-action="${escapeHtml(guide.next.id)}">Open this step</button>
    </div>
    <div class="starter-step-grid">
      ${guide.steps.map((step, index) => {
        const done = Boolean(guide.progress[step.id]);
        return `
          <article class="starter-step-card${done ? " is-done" : ""}">
            <label class="starter-check">
              <input type="checkbox" data-starter-step="${escapeHtml(step.id)}" ${done ? "checked" : ""}>
              <span>Move ${index + 1}</span>
            </label>
            <strong>${escapeHtml(step.label)}</strong>
            <p>${escapeHtml(step.detail)}</p>
            <button class="text-button" type="button" data-starter-action="${escapeHtml(step.id)}">Open ${escapeHtml(step.tool)}</button>
          </article>
        `;
      }).join("")}
    </div>
    <div class="starter-boundary">
      <span>Boundary</span>
      <p>No PAN, folio, CAS file, bank data, or account credential is needed. This is a research workflow tracker, not advice, execution, or a return guarantee.</p>
    </div>
  `;
}

function makeStarterGuideNote() {
  const guide = starterGuideSnapshot();
  return [
    "# NiveshNadi First 5-Minute Start",
    `Release: ${RELEASE_LABEL} (${DATA_VERSION})`,
    `Intent: ${starterIntentLabel(guide.config.intent)}`,
    `Time mode: ${starterTimeLabel(guide.config.time)}`,
    `Progress: ${guide.doneCount} of ${guide.steps.length} complete`,
    `Next move: ${guide.next.label} - ${guide.next.tool}`,
    `Profile posture: ${guide.profile.posture}`,
    `Top research candidate: ${guide.profile.topFund.name}`,
    "",
    "## Steps",
    ...guide.steps.map((step) => `- ${guide.progress[step.id] ? "[done]" : "[open]"} ${step.label}: ${step.detail}`),
    "",
    "Research workflow only. No PAN, folio, CAS file, bank data, account credential, transaction instruction, or personalized advice is included."
  ].join("\n");
}

function handleStarterGuideAction(action) {
  const guide = starterGuideSnapshot();
  applyStarterIntentToProfile(guide.config.intent);

  if (action === "profile") {
    renderAll();
    setStarterStepProgress("profile", true);
    scrollToHash("#investor-passport", "smooth", true);
    return;
  }

  if (action === "lane") {
    applyInvestorPassport();
    setStarterStepProgress("profile", true, false);
    setStarterStepProgress("lane", true);
    scrollToHash("#research-lanes", "smooth", true);
    return;
  }

  if (action === "shortlist") {
    const topIds = guide.profile.candidates.slice(0, 3).map(({ fund }) => fund.id);
    state.selectedId = topIds[0] || state.selectedId;
    state.compare = new Set(topIds);
    renderAll();
    analyzePortfolio();
    setStarterStepProgress("shortlist", true);
    scrollToHash(guide.config.intent === "review" ? "#portfolio-review" : guide.config.intent === "switch" ? "#switch-lab" : "#compare", "smooth", true);
    return;
  }

  if (action === "evidence") {
    renderEvidenceLedger();
    renderCitationBinder();
    setStarterStepProgress("evidence", true);
    scrollToHash("#evidence", "smooth", true);
    return;
  }

  if (action === "memo") {
    const fund = selectedFund();
    if (els.packAmount) els.packAmount.value = guide.profile.config.sip;
    if (els.packReason && !els.packReason.value.trim()) {
      els.packReason.value = `Research memo for ${fund.name}: ${guide.profile.categoryRoute}`;
    }
    renderDecisionPack();
    setStarterStepProgress("memo", true);
    scrollToHash("#decision-pack", "smooth", true);
  }
}

function openNextStarterStep() {
  handleStarterGuideAction(starterGuideSnapshot().next.id);
}

function readInvestorPassportConfig() {
  return {
    confidence: els.investorConfidence?.value || "exploring",
    emergency: els.investorEmergency?.value || "partial",
    goal: els.investorGoal?.value || "first-sip",
    horizon: clampNumber(Number(els.investorHorizon?.value || 7), 1, 40),
    risk: els.investorRisk?.value || "balanced",
    sip: clampNumber(Number(els.investorMonthlySip?.value || 10000), 0, 10000000),
    stage: els.investorStage?.value || "new"
  };
}

function investorGoalLabel(goal) {
  return {
    "first-sip": "First SIP",
    parking: "Parking money",
    tax: "ELSS tax route",
    retirement: "Long-term wealth",
    review: "Portfolio review",
    switch: "Switch question"
  }[goal] || "First SIP";
}

function investorStageLabel(stage) {
  return {
    new: "New investor",
    building: "Building habit",
    reviewing: "Already invested"
  }[stage] || "New investor";
}

function investorRiskLabel(risk) {
  return {
    conservative: "Conservative",
    balanced: "Balanced",
    growth: "Growth-oriented",
    aggressive: "Aggressive"
  }[risk] || "Balanced";
}

function investorEmergencyLabel(emergency) {
  return {
    yes: "Available",
    partial: "Partly ready",
    no: "Not ready"
  }[emergency] || "Partly ready";
}

function investorConfidenceLabel(confidence) {
  return {
    exploring: "Exploring",
    shortlist: "Shortlisting",
    ready: "Memo-ready"
  }[confidence] || "Exploring";
}

function investorHorizonBand(years) {
  if (years < 3) return "short";
  if (years < 7) return "medium";
  return "long";
}

function investorPlaybookNeed(goal, risk) {
  if (goal === "parking") return "emergency";
  if (goal === "tax") return "tax";
  if (goal === "retirement") return "retirement";
  if (goal === "review" || goal === "switch") return "review";
  if (risk === "aggressive") return "growth";
  return "first-sip";
}

function investorLaneMode(config) {
  if (config.goal === "switch") return "switch";
  if (config.goal === "review") return "review";
  if (config.confidence === "ready") return "memo";
  if (config.confidence === "shortlist") return "compare";
  return "first-sip";
}

function investorRoute(config) {
  if (config.goal === "switch") return "#switch-lab";
  if (config.goal === "review") return "#portfolio-review";
  if (config.confidence === "ready") return "#decision-pack";
  if (config.confidence === "shortlist") return "#compare";
  return "#research-lanes";
}

function investorFundFitScore(fund, config) {
  let score = Math.round(
    nadiScore(fund) * 0.34 +
    evidenceReadinessScore(fund) * 0.18 +
    fund.consistency * 0.16 +
    Math.max(0, 100 - fund.maxDrawdown * 2) * 0.14
  );

  if (config.emergency === "no") {
    score += fund.sleeve === "Debt" || fund.category.includes("Liquid") ? 24 : -28;
  }
  if (config.goal === "parking" || config.horizon < 3) {
    score += fund.sleeve === "Debt" ? 26 : fund.sleeve === "Hybrid" ? 8 : -20;
  }
  if (config.goal === "tax") {
    score += fund.category.includes("ELSS") ? 34 : -10;
  }
  if (config.goal === "retirement") {
    score += ["Equity", "Passive", "Hybrid", "Life Cycle"].includes(fund.sleeve) ? 16 : -6;
  }
  if (config.risk === "conservative") {
    score += ["Low", "Moderate"].includes(fund.risk) ? 18 : -18;
  }
  if (config.risk === "balanced") {
    score += ["Moderate", "High"].includes(fund.risk) ? 9 : 0;
  }
  if (config.risk === "growth") {
    score += ["Equity", "Passive", "Hybrid"].includes(fund.sleeve) ? 9 : -4;
  }
  if (config.risk === "aggressive") {
    score += fund.risk === "Very High" || fund.category.includes("Mid Cap") ? 14 : -2;
  }
  if (config.stage === "new") {
    score += fund.category.includes("Balanced") || fund.category.includes("Large Cap") || fund.sleeve === "Passive" ? 10 : -5;
  }
  if (config.horizon >= 7 && ["Equity", "Passive", "Hybrid", "Life Cycle"].includes(fund.sleeve)) {
    score += 8;
  }
  if (config.horizon < 5 && fund.risk === "Very High") {
    score -= 16;
  }

  return Math.round(clampNumber(score, 18, 96));
}

function investorPassportProfile() {
  const config = readInvestorPassportConfig();
  const selected = selectedFund();
  const horizonBand = investorHorizonBand(config.horizon);
  const laneMode = investorLaneMode(config);
  const playbookNeed = investorPlaybookNeed(config.goal, config.risk);
  const route = investorRoute(config);
  const candidates = FUNDS
    .map((fund) => ({ fund, score: investorFundFitScore(fund, config) }))
    .sort((a, b) => b.score - a.score || nadiScore(b.fund) - nadiScore(a.fund));
  const topFund = candidates[0]?.fund || selected;
  const selectedFit = investorFundFitScore(selected, config);
  let passportScore = 58;

  passportScore += config.emergency === "yes" ? 12 : config.emergency === "partial" ? 3 : -18;
  passportScore += config.horizon >= 7 ? 10 : config.horizon >= 3 ? 4 : -8;
  passportScore += config.confidence === "ready" ? 8 : config.confidence === "shortlist" ? 4 : 0;
  passportScore += config.stage === "new" && config.sip > 0 ? 5 : 0;
  passportScore += config.risk === "aggressive" && config.horizon < 7 ? -10 : 0;
  passportScore += selectedFit >= 76 ? 5 : selectedFit < 50 ? -7 : 0;
  passportScore = Math.round(clampNumber(passportScore, 28, 95));

  let posture = "Research route ready";
  if (config.emergency === "no") posture = "Safety buffer first";
  else if (config.horizon < 3) posture = "Liquidity discipline";
  else if (config.goal === "switch") posture = "Switch question framed";
  else if (config.goal === "review") posture = "Review route ready";
  else if (config.confidence === "ready") posture = "Memo route ready";
  else if (config.stage === "new") posture = "Starter route";

  const tone = passportScore >= 74 ? "strong" : passportScore >= 56 ? "watch" : "caution";
  const categoryRoute = (() => {
    if (config.emergency === "no" || config.goal === "parking" || config.horizon < 3) return "Liquid, low-duration, corporate bond, or conservative hybrid research first.";
    if (config.goal === "tax") return "ELSS route, lock-in awareness, tax fit, and equity drawdown review.";
    if (config.goal === "retirement") return "Core equity, passive, hybrid, or life-cycle research with long-horizon review rhythm.";
    if (config.goal === "switch") return "Switch Lab, Cost Lab, Stress Lab, and Compare before any change.";
    if (config.goal === "review") return "X-Ray, Portfolio Review Room, Review Vault, and watch triggers.";
    if (config.risk === "aggressive") return "Core first, then growth satellite only after overlap and stress review.";
    return "Balanced starter route across large cap, passive, hybrid, and SIP math.";
  })();

  const steps = [
    config.emergency === "no"
      ? "Build or protect emergency money before equity-heavy research."
      : "Map the goal, horizon, SIP capacity, and risk comfort before fund selection.",
    `Use ${investorGoalLabel(config.goal)} route with ${investorRiskLabel(config.risk).toLowerCase()} risk comfort and ${config.horizon} year horizon.`,
    "Open the suggested lane, then write a memo with evidence status and review date before acting."
  ];

  const guardrails = [
    "No PAN, folio, CAS file, bank data, or account credential is needed for this profile.",
    "This is workflow routing and education, not a suitability approval or investment recommendation.",
    "Verify live AMFI, AMC factsheet, SID, KIM, portfolio disclosure, riskometer, and TER dates before launch use."
  ];
  if (config.risk === "aggressive") guardrails.push("Aggressive profile still needs core allocation, sizing discipline, and drawdown rehearsal.");
  if (config.horizon < 3) guardrails.push("Short horizon should not be treated like long-term equity wealth creation.");

  return {
    amountLabel: formatMoney(config.sip),
    candidates,
    categoryRoute,
    config,
    guardrails,
    horizonBand,
    laneMode,
    passportScore,
    playbookNeed,
    posture,
    route,
    routeLabel: workspaceOption(route)?.textContent?.trim() || "Research route",
    selected,
    selectedFit,
    steps,
    tone,
    topFund
  };
}

function renderInvestorPassport() {
  if (!els.investorPassportOutput) return;
  const profile = investorPassportProfile();
  const config = profile.config;
  if (els.investorPassportSummary) {
    els.investorPassportSummary.textContent = `${profile.posture} | ${profile.passportScore}/100`;
  }
  els.investorPassportOutput.innerHTML = `
    <div class="investor-passport-hero ${escapeHtml(profile.tone)}">
      <div>
        <span class="metric-label">${escapeHtml(profile.posture)}</span>
        <h3>${escapeHtml(investorGoalLabel(config.goal))} research passport</h3>
        <p>${escapeHtml(profile.categoryRoute)}</p>
      </div>
      <div class="investor-passport-score" style="--score:${profile.passportScore}">
        <b>${profile.passportScore}</b>
        <span>Passport</span>
      </div>
    </div>
    <div class="investor-passport-signal-grid">
      <div><span>Stage</span><strong>${escapeHtml(investorStageLabel(config.stage))}</strong></div>
      <div><span>Horizon</span><strong>${config.horizon} years</strong></div>
      <div><span>Risk comfort</span><strong>${escapeHtml(investorRiskLabel(config.risk))}</strong></div>
      <div><span>Emergency</span><strong>${escapeHtml(investorEmergencyLabel(config.emergency))}</strong></div>
      <div><span>SIP capacity</span><strong>${escapeHtml(profile.amountLabel)}</strong></div>
      <div><span>Decision stage</span><strong>${escapeHtml(investorConfidenceLabel(config.confidence))}</strong></div>
    </div>
    <div class="investor-passport-route-grid">
      <article>
        <span>Suggested lane</span>
        <strong>${escapeHtml(profile.routeLabel)}</strong>
        <p>Lane mode: ${escapeHtml(profile.laneMode)}. Apply profile to sync Research Lanes, Playbook, and Suitability Passport inputs.</p>
      </article>
      <article>
        <span>Selected fund fit</span>
        <strong>${profile.selectedFit}/100</strong>
        <p>${escapeHtml(profile.selected.name)} is checked against this local profile before deeper fund research.</p>
      </article>
      <article>
        <span>Top research candidate</span>
        <strong>${escapeHtml(profile.topFund.name)}</strong>
        <p>${escapeHtml(profile.topFund.category)} | ${escapeHtml(profile.topFund.risk)} risk | Nadi score ${nadiScore(profile.topFund)}/100</p>
      </article>
    </div>
    <div class="investor-passport-step-grid">
      ${profile.steps.map((step, index) => `
        <article>
          <span>Move ${index + 1}</span>
          <p>${escapeHtml(step)}</p>
        </article>
      `).join("")}
    </div>
    <div class="investor-passport-shortlist-grid">
      ${profile.candidates.slice(0, 4).map(({ fund, score }) => `
        <article class="investor-passport-candidate">
          <span>${score}/100 profile fit</span>
          <strong>${escapeHtml(fund.name)}</strong>
          <p>${escapeHtml(fund.category)} | ${escapeHtml(fund.risk)} risk | TER ${fund.expense.toFixed(2)}%</p>
          <button class="text-button" type="button" data-select-fund="${escapeHtml(fund.id)}">Inspect</button>
        </article>
      `).join("")}
    </div>
    <div class="investor-passport-guardrail">
      <span>Boundary</span>
      <ul>
        ${profile.guardrails.map((guardrail) => `<li>${escapeHtml(guardrail)}</li>`).join("")}
      </ul>
    </div>
  `;
}

function makeInvestorPassportNote() {
  const profile = investorPassportProfile();
  const config = profile.config;
  return [
    "# NiveshNadi Retail Investor Passport",
    `Release: ${RELEASE_LABEL} (${DATA_VERSION})`,
    `Need: ${investorGoalLabel(config.goal)}`,
    `Stage: ${investorStageLabel(config.stage)}`,
    `Horizon: ${config.horizon} years`,
    `Risk comfort: ${investorRiskLabel(config.risk)}`,
    `Emergency buffer: ${investorEmergencyLabel(config.emergency)}`,
    `SIP capacity: ${profile.amountLabel}`,
    `Decision stage: ${investorConfidenceLabel(config.confidence)}`,
    `Passport posture: ${profile.posture}`,
    `Passport score: ${profile.passportScore}/100`,
    `Suggested lane: ${profile.routeLabel}`,
    `Category route: ${profile.categoryRoute}`,
    "",
    "## Top Research Candidates",
    ...profile.candidates.slice(0, 4).map(({ fund, score }) => `- ${fund.name}: ${score}/100 profile fit | ${fund.category} | ${fund.risk} risk`),
    "",
    "## Next Moves",
    ...profile.steps.map((step) => `- ${step}`),
    "",
    "## Guardrails",
    ...profile.guardrails.map((guardrail) => `- ${guardrail}`)
  ].join("\n");
}

function applyInvestorPassport() {
  const profile = investorPassportProfile();
  const config = profile.config;
  const topIds = profile.candidates.slice(0, 3).map(({ fund }) => fund.id);

  if (profile.topFund) state.selectedId = profile.topFund.id;
  if (["compare", "review"].includes(profile.laneMode)) {
    state.compare = new Set(topIds);
  }

  if (els.laneMode) els.laneMode.value = profile.laneMode;
  if (els.laneHorizon) els.laneHorizon.value = profile.horizonBand;
  if (els.laneAmount) els.laneAmount.value = config.sip;
  if (els.playbookNeed) els.playbookNeed.value = profile.playbookNeed;
  if (els.playbookYears) els.playbookYears.value = config.horizon;
  if (els.playbookRisk) els.playbookRisk.value = config.risk === "conservative" ? "conservative" : config.risk === "aggressive" || config.risk === "growth" ? "aggressive" : "balanced";
  if (els.passportHorizon) els.passportHorizon.value = config.horizon;
  if (els.passportRisk) els.passportRisk.value = config.risk === "conservative" ? "conservative" : config.risk === "aggressive" || config.risk === "growth" ? "aggressive" : "balanced";
  if (els.passportLiquidity) els.passportLiquidity.value = config.emergency === "no" || config.goal === "parking" || config.horizon < 3 ? "high" : config.horizon >= 7 ? "low" : "medium";
  if (els.passportSip) els.passportSip.value = config.sip;
  if (els.passportExperience) els.passportExperience.value = config.stage === "new" ? "new" : config.stage === "reviewing" ? "advanced" : "continuing";
  if (els.passportEmergency) els.passportEmergency.value = config.emergency === "no" ? "no" : "yes";
  if (els.journeySip) els.journeySip.value = config.sip;
  if (els.journeyYears) els.journeyYears.value = config.horizon;
  if (els.goalYears) els.goalYears.value = config.horizon;
  if (els.goalSip) els.goalSip.value = config.sip;
  if (els.packAmount && config.confidence === "ready") els.packAmount.value = config.sip;

  renderAll();
  renderGoalFitCompass();
  renderFirstSipCoach();
  analyzePortfolio();
  scrollToHash(profile.route, "smooth", true);
}

function readResearchLaneConfig() {
  return {
    amount: clampNumber(Number(els.laneAmount?.value || 0), 0, 10000000),
    horizon: els.laneHorizon?.value || "long",
    mode: els.laneMode?.value || "first-sip"
  };
}

function researchLaneConfig() {
  const config = readResearchLaneConfig();
  const fund = selectedFund();
  const evidence = evidenceReadinessScore(fund);
  const compareFunds = compareSet();
  const pulse = researchPulseConfig();
  const base = {
    action: "journey",
    amountLabel: formatMoney(config.amount),
    compareFunds,
    config,
    evidence,
    fund,
    label: "Start first SIP",
    laneScore: 76,
    posture: "Goal before fund",
    primaryTool: "First SIP Coach",
    route: "#journey",
    routeLabel: "Open First SIP Coach",
    steps: [
      "Define the goal and time horizon before selecting a scheme.",
      "Run Goal Fit and SIP math before adding money.",
      "Write the decision reason and review date before acting."
    ],
    tools: ["Goal Fit", "SIP/STP", "Research Pulse", "Decision Pack"]
  };

  if (config.mode === "compare") {
    Object.assign(base, {
      action: "compare",
      label: "Compare shortlisted funds",
      laneScore: Math.round(clampNumber(62 + compareFunds.length * 7 + evidence * 0.12, 48, 94)),
      posture: compareFunds.length >= 2 ? "Shortlist ready" : "Add benchmark",
      primaryTool: "Fund Compare Matrix",
      route: "#compare",
      routeLabel: "Open Compare",
      steps: [
        "Compare role, expense, drawdown, evidence readiness, and overlap.",
        "Keep only funds with a distinct portfolio job.",
        "Use Evidence Ledger before treating demo metrics as current."
      ],
      tools: ["Compare", "Peer Bench", "Evidence", "X-Ray"]
    });
  } else if (config.mode === "review") {
    Object.assign(base, {
      action: "review",
      label: "Review current portfolio",
      laneScore: Math.round(clampNumber(58 + Math.min(compareFunds.length, 4) * 5 + (pulse.activeAlerts.length ? 8 : 0), 45, 92)),
      posture: "Review discipline",
      primaryTool: "Portfolio Review Room",
      route: "#portfolio-review",
      routeLabel: "Open Review Room",
      steps: [
        "Check drift, overlap, cost, evidence freshness, and role clarity.",
        "Save a review snapshot for future comparison.",
        "Set the next review rhythm before changing anything."
      ],
      tools: ["X-Ray", "Review Room", "Review Vault", "Rhythm"]
    });
  } else if (config.mode === "switch") {
    Object.assign(base, {
      action: "switch",
      label: "Study switch question",
      laneScore: Math.round(clampNumber(55 + evidence * 0.18 - Math.max(0, fund.maxDrawdown - 18) * 0.5, 42, 88)),
      posture: "Evidence before change",
      primaryTool: "Switch Decision Lab",
      route: "#switch-lab",
      routeLabel: "Open Switch Lab",
      steps: [
        "Separate discomfort, cost, tax friction, and evidence from performance noise.",
        "Compare candidate role and overlap before any switch decision.",
        "Use Cost Lab and Stress Lab before writing the memo."
      ],
      tools: ["Switch Lab", "Cost Lab", "Stress Lab", "Decision Pack"]
    });
  } else if (config.mode === "memo") {
    Object.assign(base, {
      action: "memo",
      label: "Prepare decision memo",
      laneScore: Math.round(clampNumber(58 + evidence * 0.2 + (els.packReason?.value.trim() ? 12 : 0), 44, 95)),
      posture: els.packReason?.value.trim() ? "Memo draft ready" : "Reason pending",
      primaryTool: "Nadi Decision Pack",
      route: "#decision-pack",
      routeLabel: "Open Decision Pack",
      steps: [
        "Record fund role, amount, horizon, evidence status, and review date.",
        "Write the reason in plain words before acting.",
        "Copy or save the memo for future review discipline."
      ],
      tools: ["Research Pulse", "Readiness Gate", "Decision Pack", "Journal"]
    });
  } else if (config.horizon === "short") {
    Object.assign(base, {
      laneScore: 68,
      posture: "Liquidity first",
      steps: [
        "Short horizons need liquidity and drawdown review before return chasing.",
        "Research debt or parking roles before equity exposure.",
        "Use Stress Lab and Evidence Ledger before writing any memo."
      ],
      tools: ["Category Playbook", "Stress Lab", "Evidence", "Decision Pack"]
    });
  }

  if (config.horizon === "short" && ["first-sip", "compare"].includes(config.mode)) {
    base.steps = [
      ...base.steps,
      "Short horizon flag: confirm the goal can tolerate market drawdown before researching equity-heavy funds."
    ];
  }

  return base;
}

function renderResearchLanes() {
  if (!els.laneOutput) return;
  const lane = researchLaneConfig();
  if (els.laneSummary) {
    els.laneSummary.textContent = `${lane.posture} | ${lane.laneScore}/100`;
  }
  els.laneOutput.innerHTML = `
    <div class="lane-hero">
      <div>
        <span class="metric-label">${escapeHtml(lane.posture)}</span>
        <h3>${escapeHtml(lane.label)}</h3>
        <p>${escapeHtml(lane.primaryTool)} route for ${escapeHtml(lane.fund.name)} with ${escapeHtml(lane.amountLabel)} monthly amount.</p>
      </div>
      <div class="lane-score" style="--score:${lane.laneScore}">
        <b>${lane.laneScore}</b>
        <span>Lane</span>
      </div>
    </div>
    <div class="lane-tool-strip">
      ${lane.tools.map((tool) => `<span>${escapeHtml(tool)}</span>`).join("")}
    </div>
    <div class="lane-step-grid">
      ${lane.steps.map((step, index) => `
        <article>
          <span>Step ${index + 1}</span>
          <p>${escapeHtml(step)}</p>
        </article>
      `).join("")}
    </div>
    <div class="lane-next">
      <strong>${escapeHtml(lane.routeLabel)}</strong>
      <p>Research routing only. This does not approve, recommend, execute, or guarantee any investment action.</p>
    </div>
  `;
}

function makeResearchLaneNote() {
  const lane = researchLaneConfig();
  return [
    "# NiveshNadi Research Lane",
    `Release: ${RELEASE_LABEL} (${DATA_VERSION})`,
    `Lane: ${lane.label}`,
    `Posture: ${lane.posture}`,
    `Lane score: ${lane.laneScore}/100`,
    `Selected fund: ${lane.fund.name}`,
    `Amount: ${lane.amountLabel}`,
    `Primary tool: ${lane.primaryTool}`,
    `Evidence readiness: ${lane.evidence}/100`,
    "",
    "## Route Tools",
    ...lane.tools.map((tool) => `- ${tool}`),
    "",
    "## Research Steps",
    ...lane.steps.map((step) => `- ${step}`),
    "",
    "Research routing only. This is not investment advice, suitability approval, execution instruction, or a return guarantee."
  ].join("\n");
}

function applyResearchLane() {
  const lane = researchLaneConfig();
  if (lane.action === "journey") {
    if (els.journeySip) els.journeySip.value = lane.config.amount;
    if (els.journeyYears) els.journeyYears.value = lane.config.horizon === "long" ? 10 : lane.config.horizon === "medium" ? 5 : 2;
    renderFirstSipCoach();
  }
  if (lane.action === "compare" && state.compare.size < 2) {
    state.compare = new Set([state.selectedId, "index-nifty"]);
    renderAll();
  }
  if (lane.action === "review") {
    analyzePortfolio();
    renderPortfolioReviewRoom();
    renderReviewVault();
  }
  if (lane.action === "switch") {
    renderSwitchDecisionLab();
    renderCostRealityLab();
  }
  if (lane.action === "memo") {
    if (els.packAmount) els.packAmount.value = lane.config.amount;
    renderDecisionPack();
  }
  scrollToHash(lane.route, "smooth", true);
}

function researchPulseConfig() {
  const fund = selectedFund();
  const compareFunds = compareSet();
  const score = nadiScore(fund);
  const evidence = evidenceReadinessScore(fund);
  const watchlist = loadWatchlist();
  const alerts = loadAlerts();
  const watchedSelected = watchlist.some((entry) => entry.fundId === fund.id);
  const activeAlerts = alerts.filter((alert) => alert.fundId === fund.id || state.compare.has(alert.fundId));
  const hasMemoReason = Boolean(els.packReason?.value.trim());
  const compareBonus = Math.min(compareFunds.length, 4) * 5;
  const watchBonus = watchedSelected || activeAlerts.length ? 6 : 0;
  const memoBonus = hasMemoReason ? 8 : -4;
  const stressPenalty = fund.maxDrawdown >= 20 || fund.risk === "Very High" ? 7 : 0;
  const pulseScore = Math.round(clampNumber(
    score * 0.32 + evidence * 0.28 + compareBonus + watchBonus + memoBonus - stressPenalty + 22,
    32,
    96
  ));
  const openChecks = [];

  if (compareFunds.length < 2) {
    openChecks.push({
      action: "compare",
      label: "Build compare set",
      detail: "Add at least two funds before relying on a shortlist."
    });
  }
  if (evidence < 78) {
    openChecks.push({
      action: "evidence",
      label: "Verify evidence",
      detail: "Check source readiness before copying a memo."
    });
  }
  if (fund.maxDrawdown >= 16 || fund.risk === "High" || fund.risk === "Very High") {
    openChecks.push({
      action: "stress",
      label: "Stress test",
      detail: "Translate drawdown risk into rupee behavior before acting."
    });
  }
  if (!hasMemoReason) {
    openChecks.push({
      action: "pack",
      label: "Write decision reason",
      detail: "Complete the memo reason before any real-world decision."
    });
  }
  if (!watchedSelected && !activeAlerts.length) {
    openChecks.push({
      action: "watchlist",
      label: "Set review trigger",
      detail: "Create a watch or review date so research does not become impulse."
    });
  }

  let posture = "Research in progress";
  if (pulseScore >= 82 && openChecks.length <= 2) posture = "Memo workflow ready";
  else if (evidence < 68) posture = "Evidence first";
  else if (compareFunds.length < 2) posture = "Shortlist incomplete";
  else if (fund.maxDrawdown >= 20) posture = "Stress discipline needed";

  const next = openChecks[0] || {
    action: "review",
    label: "Review room",
    detail: "Refresh the portfolio review file and next review date."
  };

  return {
    activeAlerts,
    compareFunds,
    evidence,
    fund,
    hasMemoReason,
    next,
    openChecks,
    posture,
    pulseScore,
    score,
    watchedSelected
  };
}

function researchPulseActionCards(config) {
  return [
    {
      action: "compare",
      title: "Compare discipline",
      value: `${config.compareFunds.length} selected`,
      detail: config.compareFunds.length >= 2
        ? "Shortlist is ready for role, cost, and overlap comparison."
        : "Add a benchmark or peer fund before treating this as a shortlist."
    },
    {
      action: "evidence",
      title: "Evidence gate",
      value: `${config.evidence}/100`,
      detail: config.evidence >= 78
        ? "Demo evidence is mapped; live citations still need source dates."
        : "Open the ledger before relying on expense, holdings, or style claims."
    },
    {
      action: "stress",
      title: "Risk rehearsal",
      value: `${config.fund.maxDrawdown}% drawdown`,
      detail: config.fund.maxDrawdown >= 16
        ? "Run the Stress Lab to see behavior pressure in rupee terms."
        : "Risk control is calmer, but still rehearse before a memo."
    },
    {
      action: "pack",
      title: "Decision memo",
      value: config.hasMemoReason ? "Reason drafted" : "Reason pending",
      detail: config.hasMemoReason
        ? "The pack can be refreshed and copied with the latest selected fund."
        : "Write the reason in your own words before any investing decision."
    }
  ];
}

function renderResearchPulse() {
  if (!els.researchPulse) return;
  const config = researchPulseConfig();
  const openCopy = config.openChecks.length
    ? config.openChecks.slice(0, 3).map((item) => `<li>${escapeHtml(item.label)}: ${escapeHtml(item.detail)}</li>`).join("")
    : "<li>No major demo workflow gap remains. Refresh the review room before relying on this outside demo data.</li>";
  if (els.pulseSummary) {
    els.pulseSummary.textContent = `${config.openChecks.length} open checks`;
  }
  els.researchPulse.innerHTML = `
    <article class="pulse-hero">
      <div>
        <span class="metric-label">${escapeHtml(config.posture)}</span>
        <h3>${escapeHtml(config.fund.name)}</h3>
        <p>${escapeHtml(config.fund.role)}</p>
      </div>
      <div class="pulse-score" style="--score:${config.pulseScore}">
        <b>${config.pulseScore}</b>
        <span>Pulse</span>
      </div>
      <div class="pulse-facts" aria-label="Research Pulse facts">
        <div><span>Nadi score</span><strong>${config.score}/100</strong></div>
        <div><span>Evidence</span><strong>${config.evidence}/100</strong></div>
        <div><span>Watch triggers</span><strong>${config.activeAlerts.length}</strong></div>
        <div><span>Next check</span><strong>${escapeHtml(config.next.label)}</strong></div>
      </div>
      <ul class="pulse-checks">${openCopy}</ul>
    </article>
    <div class="pulse-action-grid">
      ${researchPulseActionCards(config).map((item) => `
        <article class="pulse-action-card">
          <span>${escapeHtml(item.title)}</span>
          <strong>${escapeHtml(item.value)}</strong>
          <p>${escapeHtml(item.detail)}</p>
          <button class="text-button" type="button" data-pulse-action="${escapeHtml(item.action)}">Open</button>
        </article>
      `).join("")}
    </div>
  `;
}

function makeResearchPulseNote() {
  const config = researchPulseConfig();
  const openChecks = config.openChecks.length
    ? config.openChecks.map((item) => `- ${item.label}: ${item.detail}`).join("\n")
    : "- No major demo workflow gap remains. Refresh review room before relying on this outside demo data.";
  const compareLines = config.compareFunds.length
    ? config.compareFunds.map((fund) => `- ${fund.name} | ${fund.category} | Score ${nadiScore(fund)}/100`).join("\n")
    : "- No compare set selected.";
  return [
    "# NiveshNadi Research Pulse",
    `Release: ${RELEASE_LABEL} (${DATA_VERSION})`,
    `Selected fund: ${config.fund.name}`,
    `Category: ${config.fund.category}`,
    `Risk: ${config.fund.risk}`,
    `Pulse posture: ${config.posture}`,
    `Pulse score: ${config.pulseScore}/100`,
    `Nadi score: ${config.score}/100`,
    `Evidence readiness: ${config.evidence}/100`,
    `Watch triggers: ${config.activeAlerts.length}`,
    `Next check: ${config.next.label}`,
    "",
    "## Open Checks",
    openChecks,
    "",
    "## Compare Set",
    compareLines,
    "",
    "Research support only. This pulse organizes checks; it is not a recommendation, approval, execution instruction, or return guarantee."
  ].join("\n");
}

function handlePulseAction(action) {
  const config = researchPulseConfig();
  const resolved = action === "next" ? config.next.action : action;
  if (resolved === "compare") {
    scrollToHash("#compare", "smooth", true);
    return;
  }
  if (resolved === "evidence") {
    renderEvidenceLedger();
    renderCitationBinder();
    scrollToHash("#evidence", "smooth", true);
    return;
  }
  if (resolved === "stress") {
    if (els.stressShock) {
      els.stressShock.value = Math.max(10, Math.min(45, config.fund.maxDrawdown || 18));
    }
    renderStressLab();
    scrollToHash("#risk-lab", "smooth", true);
    return;
  }
  if (resolved === "watchlist") {
    addToWatchlist(config.fund.id);
    scrollToHash("#watchlist", "smooth", true);
    return;
  }
  if (resolved === "review") {
    renderPortfolioReviewRoom();
    scrollToHash("#portfolio-review", "smooth", true);
    return;
  }
  renderDecisionPack();
  scrollToHash("#decision-pack", "smooth", true);
}

function readCoachConfig() {
  return {
    depth: els.coachDepth?.value || "plain",
    question: els.coachQuestion?.value || "next"
  };
}

function coachQuestionLabel(question) {
  return {
    next: "What should I check next?",
    "red-flags": "What are the red flags?",
    shortlist: "Is my shortlist duplicated?",
    sip: "Is this ready for first SIP research?",
    switch: "Should I study a switch?",
    memo: "What should I write in the memo?"
  }[question] || "What should I check next?";
}

function coachDepthLabel(depth) {
  return {
    plain: "Plain English",
    checklist: "Checklist",
    deep: "Deep research"
  }[depth] || "Plain English";
}

function coachRouteForPulseAction(action) {
  return {
    compare: "#compare",
    evidence: "#evidence",
    stress: "#risk-lab",
    watchlist: "#watchlist",
    review: "#portfolio-review",
    pack: "#decision-pack"
  }[action] || "#research-pulse";
}

function coachRouteLabel(route) {
  return workspaceOption(route)?.textContent?.trim() || route.replace("#", "");
}

function coachShortlistSnapshot(funds) {
  if (funds.length < 2) {
    return {
      copy: "Add one benchmark or peer fund before trusting the shortlist.",
      duplicate: "Not ready",
      overlapCount: 0,
      roleClarity: "Add peer",
      title: "Shortlist incomplete"
    };
  }
  const posture = compareShortlistPosture(funds);
  return {
    copy: posture.copy,
    duplicate: posture.duplicate,
    overlapCount: posture.overlapCount,
    roleClarity: posture.roleClarity,
    title: posture.title
  };
}

function nadiCoachAnswer() {
  const config = readCoachConfig();
  const fund = selectedFund();
  const score = nadiScore(fund);
  const evidence = evidenceReadinessScore(fund);
  const compareFunds = compareSet();
  const starter = starterGuideSnapshot();
  const profile = investorPassportProfile();
  const pulse = researchPulseConfig();
  const lane = researchLaneConfig();
  const shortlist = coachShortlistSnapshot(compareFunds);
  const portfolioRoleText = portfolioRole(fund).label;
  const memoText = els.packReason?.value.trim() || "";
  const watchReady = pulse.watchedSelected || pulse.activeAlerts.length > 0;
  const flags = [];

  if (evidence < 70) flags.push("Evidence readiness is below the launch-comfort zone, so source dates and citations should be checked first.");
  if (fund.maxDrawdown >= 20 || fund.risk === "Very High") flags.push(`${fund.risk} risk and ${fund.maxDrawdown}% demo drawdown need Stress Lab review before a memo.`);
  if (compareFunds.length < 2) flags.push("The compare set has fewer than two funds, so role and cost are not yet benchmarked.");
  if (shortlist.duplicate === "High") flags.push("The selected shortlist has high duplication risk from category crowding or repeated holdings.");
  if (!memoText) flags.push("The decision reason is still blank; the investor should write the reason before treating research as ready.");
  if (profile.config.emergency === "no") flags.push("Emergency buffer is not ready in the local passport, so equity-heavy research should stay cautious.");
  if (profile.config.horizon < 3 && ["Equity", "Passive"].includes(fund.sleeve)) flags.push("The passport horizon is short while the selected fund is equity-like.");
  if (!watchReady) flags.push("No watchlist or alert trigger is saved for the selected fund yet.");

  const coachScore = Math.round(clampNumber(
    starter.score * 0.16 +
    profile.passportScore * 0.14 +
    pulse.pulseScore * 0.24 +
    evidence * 0.24 +
    (compareFunds.length >= 2 ? 8 : -4) +
    (memoText ? 6 : -5) +
    (watchReady ? 5 : 0) -
    Math.min(flags.length * 3, 14) +
    18,
    32,
    96
  ));

  const memoSeed = `Research memo for ${fund.name}: study ${portfolioRoleText.toLowerCase()} role, ${fund.category} fit, ${fund.risk.toLowerCase()} risk, ${fund.expense.toFixed(2)}% TER, ${evidence}/100 evidence readiness, and ${shortlist.title.toLowerCase()} before acting.`;
  const signals = [
    { label: "Fund", value: fund.name, detail: `${fund.category} | ${fund.risk} risk` },
    { label: "Nadi score", value: `${score}/100`, detail: portfolioRoleText },
    { label: "Evidence", value: `${evidence}/100`, detail: evidence >= 78 ? "Demo mapped; live citations still needed." : "Open Evidence Ledger before relying on claims." },
    { label: "Compare", value: `${compareFunds.length} funds`, detail: shortlist.title },
    { label: "Pulse", value: `${pulse.pulseScore}/100`, detail: pulse.posture },
    { label: "Start", value: `${starter.doneCount}/${starter.steps.length}`, detail: starter.next.tool }
  ];

  let headline = `${pulse.next.label} should be checked next`;
  let posture = pulse.posture;
  let route = coachRouteForPulseAction(pulse.next.action);
  let answer = `${pulse.next.detail} The coach is using the selected fund, compare set, evidence score, and memo status to keep this research disciplined.`;
  let bullets = [
    `${fund.name} currently has Nadi score ${score}/100 and evidence readiness ${evidence}/100.`,
    `Research Pulse posture is ${pulse.posture} with ${pulse.openChecks.length} open check${pulse.openChecks.length === 1 ? "" : "s"}.`,
    `Suggested lane is ${lane.label}; primary tool is ${lane.primaryTool}.`,
    memoText ? "The decision reason is drafted; refresh the pack before copying it." : "Decision reason is pending; write it in plain words before acting."
  ];
  let actionLabel = `Open ${coachRouteLabel(route)}`;

  if (config.question === "red-flags") {
    posture = flags.length ? "Flags to clear" : "Light flag state";
    headline = flags.length ? "Clear these research flags before action" : "No major demo flag, but keep the guardrails";
    route = "#red-flag-radar";
    answer = flags.length
      ? `The main concern is not one single number. It is the stack of ${flags.length} research gaps around evidence, stress, comparison, memo, or review discipline.`
      : "The current demo state looks organized, but this still needs live source dates and a written reason before any real-world decision.";
    bullets = flags.length ? flags : [
      "Confirm live AMFI, AMC factsheet, SID, KIM, portfolio disclosure, riskometer, and TER dates.",
      "Keep a compare set and review trigger even when the fund looks clean.",
      "Use the memo as a behavior guardrail, not as a buy or sell signal."
    ];
    actionLabel = "Open Red Flag Radar";
  } else if (config.question === "shortlist") {
    posture = shortlist.title;
    headline = compareFunds.length < 2 ? "Build the shortlist before judging it" : `${shortlist.duplicate} duplication risk in the shortlist`;
    route = compareFunds.length < 2 ? "#compare" : "#portfolio";
    answer = compareFunds.length < 2
      ? "The shortlist is too small to judge. Add a benchmark or peer fund so role, cost, evidence, and overlap can be tested side by side."
      : `${shortlist.copy} Role clarity is ${shortlist.roleClarity.toLowerCase()} and overlap signals found: ${shortlist.overlapCount}.`;
    bullets = [
      `Compare set: ${compareFunds.map((item) => item.name).join(", ") || "none selected"}.`,
      `Role clarity: ${shortlist.roleClarity}.`,
      `Duplication risk: ${shortlist.duplicate}.`,
      `Overlap signals: ${shortlist.overlapCount}.`
    ];
    actionLabel = compareFunds.length < 2 ? "Build Compare Set" : "Open X-Ray";
  } else if (config.question === "sip") {
    const emergencyBlock = profile.config.emergency === "no";
    posture = emergencyBlock ? "Safety buffer first" : profile.posture;
    headline = emergencyBlock ? "First SIP research needs buffer discipline first" : "First SIP research can move through the guided route";
    route = emergencyBlock || fund.maxDrawdown >= 20 ? "#risk-lab" : "#journey";
    answer = emergencyBlock
      ? "The passport says emergency money is not ready, so the first SIP research should stay in education and stress rehearsal mode before any commitment."
      : `Use the First SIP Coach for ${formatMoney(profile.config.sip)} monthly research, then check SIP math, evidence, and memo discipline.`;
    bullets = [
      `Investor passport: ${profile.posture} at ${profile.passportScore}/100.`,
      `Horizon: ${profile.config.horizon} years; risk comfort: ${investorRiskLabel(profile.config.risk)}.`,
      `Category route: ${profile.categoryRoute}`,
      `Stress cue: ${fund.maxDrawdown}% demo drawdown for ${fund.name}.`
    ];
    actionLabel = route === "#journey" ? "Open First SIP Coach" : "Open Stress Lab";
  } else if (config.question === "switch") {
    posture = "Switch study only";
    headline = "Study friction before studying a switch";
    route = "#switch-lab";
    answer = "A switch question should start by separating discomfort, TER drag, tax and exit-load friction, evidence freshness, and overlap. It should not start with a transaction conclusion.";
    bullets = [
      `${fund.name}: ${fund.risk} risk, ${fund.maxDrawdown}% demo drawdown, ${fund.expense.toFixed(2)}% TER.`,
      `Evidence readiness is ${evidence}/100; source freshness must be verified before relying on current metrics.`,
      `Compare set posture: ${shortlist.title}.`,
      "Use Cost Lab and Stress Lab before writing any switch memo."
    ];
    actionLabel = "Open Switch Lab";
  } else if (config.question === "memo") {
    posture = memoText ? "Memo draft ready" : "Reason pending";
    headline = memoText ? "Refresh the memo with latest signals" : "Write a plain-language decision reason";
    route = "#decision-pack";
    answer = memoText
      ? "The memo reason exists. Refresh the Decision Pack so it includes the latest selected fund, compare set, evidence status, review date, and guardrails."
      : "A good memo should say the fund role, investor need, amount or review intent, evidence status, what could prove the decision wrong, and when it will be reviewed.";
    bullets = [
      memoText ? `Current reason: ${memoText.slice(0, 160)}${memoText.length > 160 ? "..." : ""}` : `Draft seed: ${memoSeed}`,
      `Selected fund: ${fund.name} | ${fund.category} | ${fund.risk} risk.`,
      `Evidence readiness: ${evidence}/100.`,
      `Compare set: ${compareFunds.length >= 2 ? compareFunds.map((item) => item.name).join(", ") : "add at least one peer or benchmark"}.`
    ];
    actionLabel = "Open Decision Pack";
  }

  if (config.depth === "plain") {
    bullets = bullets.slice(0, 4);
  } else if (config.depth === "deep") {
    bullets = [
      ...bullets,
      `Starter next move: ${starter.next.label} via ${starter.next.tool}.`,
      `Watch discipline: ${watchReady ? "saved or active" : "not saved yet"}.`,
      "Live launch still needs source dates, citation URLs, extraction checks, and stale-data blocking."
    ];
  }

  return {
    actionLabel,
    answer,
    bullets,
    coachScore,
    config,
    cautions: flags.slice(0, config.depth === "deep" ? 6 : 4),
    fund,
    headline,
    memoSeed,
    posture,
    route,
    signals
  };
}

function renderNadiCoach() {
  if (!els.coachOutput) return;
  const coach = nadiCoachAnswer();
  const cautions = coach.cautions.length
    ? coach.cautions.map((item) => `<li>${escapeHtml(item)}</li>`).join("")
    : "<li>No major demo blocker is visible. Still verify live source dates and write the decision reason before acting.</li>";
  if (els.coachSummary) {
    els.coachSummary.textContent = `${coach.posture} | ${coach.coachScore}/100`;
  }
  els.coachOutput.innerHTML = `
    <article class="coach-hero">
      <div>
        <span class="metric-label">${escapeHtml(coach.posture)}</span>
        <h3>${escapeHtml(coach.headline)}</h3>
        <p>${escapeHtml(coach.answer)}</p>
      </div>
      <div class="coach-score" style="--score:${coach.coachScore}">
        <b>${coach.coachScore}</b>
        <span>Coach</span>
      </div>
    </article>
    <div class="coach-signal-grid">
      ${coach.signals.map((signal) => `
        <article>
          <span>${escapeHtml(signal.label)}</span>
          <strong>${escapeHtml(signal.value)}</strong>
          <p>${escapeHtml(signal.detail)}</p>
        </article>
      `).join("")}
    </div>
    <div class="coach-answer-card">
      <span>${escapeHtml(coachQuestionLabel(coach.config.question))} | ${escapeHtml(coachDepthLabel(coach.config.depth))}</span>
      <ul>
        ${coach.bullets.map((item) => `<li>${escapeHtml(item)}</li>`).join("")}
      </ul>
      <button class="text-button" type="button" data-coach-route="${escapeHtml(coach.route)}">${escapeHtml(coach.actionLabel)}</button>
    </div>
    <div class="coach-guardrail">
      <span>Coach guardrail</span>
      <ul>${cautions}</ul>
      <p>Research support only. Nadi Coach does not recommend, approve, execute, or guarantee any investment action.</p>
    </div>
  `;
}

function makeCoachNote() {
  const coach = nadiCoachAnswer();
  return [
    "# NiveshNadi Coach Q&A",
    `Release: ${RELEASE_LABEL} (${DATA_VERSION})`,
    `Question: ${coachQuestionLabel(coach.config.question)}`,
    `Answer style: ${coachDepthLabel(coach.config.depth)}`,
    `Selected fund: ${coach.fund.name}`,
    `Coach posture: ${coach.posture}`,
    `Coach score: ${coach.coachScore}/100`,
    `Suggested check: ${coachRouteLabel(coach.route)}`,
    "",
    "## Coach Answer",
    coach.answer,
    "",
    "## Checks",
    ...coach.bullets.map((item) => `- ${item}`),
    "",
    "## Guardrails",
    ...(coach.cautions.length ? coach.cautions : ["Verify live source dates, citations, and written reason before acting."]).map((item) => `- ${item}`),
    "",
    "Research support only. This is not personalized investment advice, suitability approval, execution instruction, or a return guarantee."
  ].join("\n");
}

function handleCoachAction(route) {
  const coach = nadiCoachAnswer();
  const target = route || coach.route;

  if (target === "#compare" && state.compare.size < 2) {
    state.compare = new Set([state.selectedId, "index-nifty"]);
    renderAll();
  } else if (target === "#risk-lab") {
    if (els.stressShock) els.stressShock.value = Math.max(10, Math.min(45, coach.fund.maxDrawdown || 18));
    renderStressLab();
  } else if (target === "#watchlist") {
    addToWatchlist(coach.fund.id);
    renderNadiCoach();
  } else if (target === "#journey") {
    const profile = investorPassportProfile();
    if (els.journeySip) els.journeySip.value = profile.config.sip;
    if (els.journeyYears) els.journeyYears.value = profile.config.horizon;
    renderFirstSipCoach();
  } else if (target === "#decision-pack") {
    if (els.packReason && !els.packReason.value.trim()) {
      els.packReason.value = coach.memoSeed;
    }
    renderDecisionPack();
    renderNadiCoach();
  } else if (target === "#portfolio") {
    analyzePortfolio();
  } else if (target === "#evidence") {
    renderEvidenceLedger();
    renderCitationBinder();
  } else if (target === "#red-flag-radar") {
    renderRedFlagRadar();
  } else if (target === "#switch-lab") {
    renderSwitchDecisionLab();
  }

  scrollToHash(target, "smooth", true);
}

function readCategoryPlaybookConfig() {
  return {
    need: els.playbookNeed?.value || "first-sip",
    years: clampNumber(Number(els.playbookYears?.value || 7), 1, 40),
    risk: els.playbookRisk?.value || "balanced"
  };
}

function categoryPlaybook(config) {
  const map = {
    title: "Core SIP research route",
    posture: "Start with simple core categories",
    clarity: 82,
    summary: "Research low-cost core categories first, then compare active funds only if they bring a clear role.",
    categories: [
      { category: "Index Fund", role: "Low-cost beta core", reason: "A simple benchmark-linked base keeps cost and behavior discipline visible." },
      { category: "Large Cap Fund", role: "Active core challenger", reason: "Compare only if evidence, consistency, and cost justify active selection." },
      { category: "Balanced Hybrid Fund", role: "Smoother starter bridge", reason: "Useful when a first-time investor needs lower volatility before pure equity." }
    ],
    guardrails: [
      "Write the goal and time horizon before selecting a fund.",
      "Compare expense, drawdown, evidence readiness, and overlap before starting SIP.",
      "Keep the first shortlist compact."
    ],
    avoid: [
      "Do not start with sector, small cap, or recent one-year winners.",
      "Do not add multiple funds that perform the same core role."
    ]
  };

  if (config.need === "emergency" || config.years <= 1) {
    Object.assign(map, {
      title: "Cash parking research route",
      posture: "Liquidity and capital stability first",
      clarity: 91,
      summary: "Near-term money should be researched for liquidity, credit quality, and low drawdown before return chasing.",
      categories: [
        { category: "Liquid Fund", role: "Parking bucket", reason: "Research for emergency money, STP source, or near-term cash discipline." },
        { category: "Corporate Bond Fund", role: "Quality debt follow-up", reason: "Use only after checking credit quality, duration, and goal timing." },
        { category: "Balanced Hybrid Fund", role: "Not for emergency money", reason: "Keep it as a comparison boundary because equity exposure can create drawdown." }
      ],
      guardrails: [
        "Check credit quality, modified duration, exit load, and liquidity.",
        "Keep emergency money separate from return-seeking investments.",
        "Do not treat low drawdown as zero risk."
      ],
      avoid: [
        "Avoid equity and high-volatility categories for near-term money.",
        "Avoid locking emergency money into tax or goal products."
      ]
    });
  } else if (config.need === "tax") {
    Object.assign(map, {
      title: "Tax-saving research route",
      posture: "Tax benefit plus equity risk",
      clarity: 76,
      summary: "Research ELSS as a tax-saving equity category, then compare it against your broader equity plan so tax benefit is not the only reason.",
      categories: [
        { category: "ELSS Fund", role: "Section 80C equity sleeve", reason: "Check lock-in, equity risk, consistency, and overlap with existing core funds." },
        { category: "Large Cap Fund", role: "Core equity comparison", reason: "Use as a benchmark for active equity quality and drawdown behavior." },
        { category: "Index Fund", role: "Low-cost comparison", reason: "Compare whether tax-saving fund behavior is worth the active cost and lock-in." }
      ],
      guardrails: [
        "Write the tax role separately from the investment role.",
        "Check three-year lock-in and equity drawdown comfort.",
        "Do not use tax saving as a shortcut around evidence review."
      ],
      avoid: [
        "Avoid buying only because the tax deadline is near.",
        "Avoid duplicate ELSS and large-cap exposure without a written reason."
      ]
    });
  } else if (config.need === "retirement" || config.years >= 12) {
    Object.assign(map, {
      title: "Long-goal glide path route",
      posture: "Core growth with future de-risking",
      clarity: 86,
      summary: "Long goals need growth early and review discipline later. Research a core, a diversifier, and a glide-path option.",
      categories: [
        { category: "Life Cycle Fund", role: "Goal-year glide path", reason: "Research when a known future year needs automatic risk reduction logic." },
        { category: "Index Fund", role: "Low-cost growth core", reason: "Useful as a transparent equity base for long SIP horizons." },
        { category: "Multi Asset Allocation Fund", role: "Diversified smoother sleeve", reason: "Adds debt and gold context when pure equity feels too volatile." }
      ],
      guardrails: [
        "Review glide path and asset allocation at least yearly.",
        "De-risk before the goal date, not after a market fall.",
        "Compare cost and category overlap before adding satellites."
      ],
      avoid: [
        "Avoid treating retirement as a short-term ranking problem.",
        "Avoid too many satellite funds before the core is stable."
      ]
    });
  } else if (config.need === "income" || (config.risk === "conservative" && config.years <= 5)) {
    Object.assign(map, {
      title: "Income stability research route",
      posture: "Debt quality before yield",
      clarity: 84,
      summary: "Medium-term income research should begin with debt quality, duration, and smoother allocation categories.",
      categories: [
        { category: "Corporate Bond Fund", role: "Quality income bucket", reason: "Research credit quality, issuer concentration, and duration before yield." },
        { category: "Liquid Fund", role: "Liquidity sleeve", reason: "Useful for near-term cash or staged STP source discipline." },
        { category: "Balanced Hybrid Fund", role: "Conservative growth bridge", reason: "Consider only when some equity volatility is acceptable." }
      ],
      guardrails: [
        "Check credit events, modified duration, and portfolio concentration.",
        "Separate income need from growth appetite.",
        "Write the review trigger before investing."
      ],
      avoid: [
        "Avoid chasing yield without checking credit risk.",
        "Avoid assuming debt funds cannot fall."
      ]
    });
  } else if (config.need === "growth" || config.risk === "aggressive") {
    Object.assign(map, {
      title: "Growth satellite research route",
      posture: "Core first, satellite second",
      clarity: config.years >= 7 ? 80 : 67,
      summary: "Aggressive categories can be researched only after core allocation, drawdown comfort, and holding horizon are clear.",
      categories: [
        { category: "Flexi Cap Fund", role: "Flexible growth satellite", reason: "Research for broad active growth after comparing style and overlap." },
        { category: "Mid Cap Fund", role: "Aggressive satellite", reason: "Use only with long horizon and explicit drawdown tolerance." },
        { category: "Small Cap Fund", role: "Highest volatility sleeve", reason: "Research capacity, liquidity, drawdown, and position size before adding." }
      ],
      guardrails: [
        "Keep satellites deliberately sized.",
        "Run the Stress Lab before adding high-volatility categories.",
        "Check overlap with existing core funds."
      ],
      avoid: [
        "Avoid aggressive categories for goals below five years.",
        "Avoid adding mid and small cap together without a written role."
      ]
    });
  } else if (config.need === "review") {
    Object.assign(map, {
      title: "Review or switch research route",
      posture: "Evidence before action",
      clarity: 79,
      summary: "A switch review should begin with role duplication, cost friction, tax assumptions, and evidence freshness.",
      categories: [
        { category: "Index Fund", role: "Cost benchmark", reason: "Use as a low-cost comparison point before retaining or switching active exposure." },
        { category: "Large Cap Fund", role: "Active core review", reason: "Check consistency, drawdown, evidence readiness, and manager/style drift." },
        { category: "Multi Asset Allocation Fund", role: "Diversification alternative", reason: "Use when the current portfolio feels too concentrated or volatile." }
      ],
      guardrails: [
        "Run Cost Reality Lab before any switch decision.",
        "Use Evidence Ledger to confirm source freshness.",
        "Write the reason in the Decision Pack before acting."
      ],
      avoid: [
        "Avoid switching only because another fund looks cheaper.",
        "Avoid switching after recent underperformance without role review."
      ]
    });
  }

  if (config.risk === "conservative" && map.categories[0]?.category !== "Liquid Fund") {
    map.guardrails.push("For conservative risk comfort, compare a hybrid or debt category before pure equity.");
  }
  if (config.years < 5 && ["growth", "retirement"].includes(config.need)) {
    map.guardrails.push("Shorter horizons reduce the room for equity drawdown recovery.");
    map.clarity = Math.max(58, map.clarity - 9);
  }

  return map;
}

function categoryFunds(category) {
  return FUNDS
    .filter((fund) => fund.category === category)
    .sort((a, b) => nadiScore(b) - nadiScore(a));
}

function applyPlaybookCategory(category) {
  if (!category) return;
  state.filters.search = "";
  state.filters.category = category;
  state.filters.risk = "all";
  state.filters.sort = "score";
  els.searchInput.value = "";
  if (els.floatingSearchInput) els.floatingSearchInput.value = "";
  els.categoryFilter.value = category;
  els.riskFilter.value = "all";
  els.sortSelect.value = "score";
  renderFundGrid();
  scrollToHash("#screener", "smooth", true);
}

function renderCategoryPlaybook(event) {
  if (event) event.preventDefault();
  if (!els.playbookOutput) return;
  const config = readCategoryPlaybookConfig();
  const playbook = categoryPlaybook(config);
  const primaryCategory = playbook.categories[0]?.category || "Index Fund";
  if (els.applyPlaybookPrimary) {
    els.applyPlaybookPrimary.dataset.playbookCategory = primaryCategory;
  }

  els.playbookOutput.innerHTML = `
    <div class="playbook-hero">
      <div>
        <span class="metric-label">${escapeHtml(playbook.posture)}</span>
        <h3>${escapeHtml(playbook.title)}</h3>
        <p>${escapeHtml(playbook.summary)}</p>
      </div>
      <div class="playbook-score" style="--score: ${playbook.clarity}">
        <b>${playbook.clarity}</b>
      </div>
    </div>
    <div class="playbook-category-grid">
      ${playbook.categories.map((item, index) => {
        const matches = categoryFunds(item.category);
        const matchCopy = matches.length
          ? matches.slice(0, 2).map((fund) => fund.name).join(" | ")
          : "Demo fund planned";
        return `
          <article class="playbook-card">
            <span>Lane ${index + 1}</span>
            <strong>${escapeHtml(item.category)}</strong>
            <p>${escapeHtml(item.role)}</p>
            <p>${escapeHtml(item.reason)}</p>
            <div class="playbook-match">${escapeHtml(matchCopy)}</div>
            <button class="text-button" type="button" data-playbook-category="${escapeHtml(item.category)}">Filter screener</button>
          </article>
        `;
      }).join("")}
    </div>
    <div class="playbook-guard-grid">
      <article>
        <span>Research guardrails</span>
        <ul class="playbook-list">
          ${playbook.guardrails.map((item) => `<li>${escapeHtml(item)}</li>`).join("")}
        </ul>
      </article>
      <article>
        <span>Avoid</span>
        <ul class="playbook-list">
          ${playbook.avoid.map((item) => `<li>${escapeHtml(item)}</li>`).join("")}
        </ul>
      </article>
    </div>
  `;
}

function makeCategoryPlaybookNote() {
  const config = readCategoryPlaybookConfig();
  const playbook = categoryPlaybook(config);
  return [
    "# NiveshNadi Category Playbook",
    `Release: ${RELEASE_LABEL} (${DATA_VERSION})`,
    `Investor question: ${config.need}`,
    `Time horizon: ${config.years} years`,
    `Risk comfort: ${config.risk}`,
    `Research route: ${playbook.title}`,
    `Posture: ${playbook.posture}`,
    `Clarity score: ${playbook.clarity}/100`,
    "",
    "Category lanes:",
    ...playbook.categories.map((item, index) => `${index + 1}. ${item.category} - ${item.role}. ${item.reason}`),
    "",
    "Research guardrails:",
    ...playbook.guardrails.map((item) => `- ${item}`),
    "",
    "Avoid:",
    ...playbook.avoid.map((item) => `- ${item}`),
    "",
    "Research route only. This is not a personalized recommendation, execution instruction, or return guarantee."
  ].join("\n");
}

function whyLensPosture(score, highFlags, evidence) {
  if (highFlags || evidence < 68) return "Prove it first";
  if (score >= 82) return "Clear research role";
  if (score >= 68) return "Useful with checks";
  return "Watch before shortlist";
}

function whyFundLens() {
  const fund = selectedFund();
  const score = nadiScore(fund);
  const evidence = evidenceReadinessScore(fund);
  const fit = fundFitHeatmapConfig();
  const flags = redFlagItems(fund);
  const peer = peerBenchmarkConfig();
  const role = portfolioRole(fund);
  const compareFunds = compareSet();
  const shared = compareFunds.length > 1 ? sharedHoldings(compareFunds) : [];
  const highFlags = flags.filter((flag) => flag.severity === "high").length;
  const mediumFlags = flags.filter((flag) => flag.severity === "medium").length;
  const memoReady = Boolean(els.packReason?.value.trim());
  const positives = [];
  const challenges = [];
  const pause = [];
  const changeMind = [];

  positives.push(`${role.label}: ${role.reason}`);
  positives.push(`${fit.best.label} is the strongest goal lens at ${fit.best.fit}/100.`);
  if (score >= 74) positives.push(`Nadi score is ${score}/100, supported by consistency, cost, drawdown, and research coverage.`);
  if (fund.expense <= peer.sleeveAvg.expense) positives.push(`TER is at or below sleeve average: ${fund.expense.toFixed(2)}% versus ${peer.sleeveAvg.expense.toFixed(2)}%.`);
  if (fund.consistency >= 80) positives.push(`Consistency is strong in demo data at ${fund.consistency}/100.`);
  if (evidence >= 74) positives.push(`Evidence readiness is usable for demo research at ${evidence}/100.`);

  flags.slice(0, 4).forEach((flag) => {
    challenges.push(`${flag.title}: ${flag.detail}`);
  });
  if (shared.length) {
    challenges.push(`Compare overlap: ${shared.slice(0, 4).join(", ")} appears in the selected set.`);
  }
  if (fund.expense > peer.sleeveAvg.expense + 0.12) {
    challenges.push(`Cost challenge: TER is above sleeve average by ${(fund.expense - peer.sleeveAvg.expense).toFixed(2)}%.`);
  }
  if (!challenges.length) {
    challenges.push("No major demo challenge is visible, but live source dates and citations are still required.");
  }

  if (fund.risk === "Very High") pause.push("Pause if the role is not clearly satellite-sized or the investor cannot tolerate sharp drawdowns.");
  if (fund.risk === "High" && fit.best.fit < 70) pause.push("Pause if the goal lens is not long enough for equity drawdown recovery.");
  if (evidence < 70) pause.push("Pause until AMFI, AMC factsheet, SID/KIM, portfolio disclosure, TER, and riskometer sources are cited.");
  if (compareFunds.length < 2) pause.push("Pause until at least one benchmark or peer is compared.");
  if (!memoReady) pause.push("Pause until the investor writes the decision reason in their own words.");
  if (!pause.length) pause.push("Pause only if the live factsheet, riskometer, TER, or portfolio date contradicts the demo view.");

  changeMind.push("Riskometer, TER, manager, benchmark, or portfolio disclosure changes materially.");
  changeMind.push("The fund no longer performs the role described in the memo.");
  changeMind.push("A lower-cost peer offers the same role with better evidence, drawdown, and overlap profile.");
  if (shared.length) changeMind.push("X-Ray shows repeated exposure that makes this fund redundant.");
  if (fit.caution.length) changeMind.push(`${fit.caution[0].label} remains a caution lens and should not be forced into that goal.`);

  const lensScore = Math.round(clampNumber(
    score * 0.34 +
    evidence * 0.24 +
    fit.best.fit * 0.18 +
    Math.max(0, 100 - highFlags * 24 - mediumFlags * 11) * 0.14 +
    (compareFunds.length >= 2 ? 5 : -4) +
    (memoReady ? 5 : -3),
    28,
    96
  ));

  return {
    changeMind,
    challenges: challenges.slice(0, 5),
    compareFunds,
    evidence,
    fit,
    flags,
    fund,
    highFlags,
    lensScore,
    mediumFlags,
    pause: pause.slice(0, 5),
    peer,
    positives: positives.slice(0, 5),
    posture: whyLensPosture(lensScore, highFlags, evidence),
    role,
    score,
    shared
  };
}

function renderFundDetail() {
  const fund = selectedFund();
  const lens = whyFundLens();
  const scoreAnatomy = scoreAnatomyConfig();
  const score = lens.score;
  els.selectedStatus.textContent = `${fund.category} | ${fund.risk} risk`;
  els.journalFund.value = fund.name;
  if (els.watchFundSelect && FUNDS.some((item) => item.id === fund.id)) {
    els.watchFundSelect.value = fund.id;
  }

  const compareFunds = FUNDS.filter((item) => state.compare.has(item.id));
  const shared = compareFunds.length > 1 ? sharedHoldings(compareFunds) : [];
  const overlapCopy = shared.length
    ? `${shared.length} shared holdings in compare set: ${shared.join(", ")}.`
    : "No meaningful compare overlap selected yet.";

  els.fundDetail.classList.remove("empty-state");
  els.fundDetail.innerHTML = `
    <div class="why-lens-hero">
      <div>
        <span class="metric-label">${escapeHtml(lens.posture)}</span>
        <h3>Why ${escapeHtml(fund.name)}?</h3>
        <p>${escapeHtml(lens.role.reason)} Strongest research lens is ${escapeHtml(lens.fit.best.label)} at ${lens.fit.best.fit}/100. This is a fund explanation, not advice.</p>
      </div>
      <div class="why-lens-score" style="--score:${lens.lensScore}">
        <b>${lens.lensScore}</b>
        <span>Lens</span>
      </div>
    </div>
    <div class="why-card-grid">
      <article>
        <span>Plain role</span>
        <strong>${escapeHtml(lens.role.label)}</strong>
        <p>${escapeHtml(fund.role)}</p>
      </article>
      <article>
        <span>Best research fit</span>
        <strong>${escapeHtml(lens.fit.best.label)}</strong>
        <p>${escapeHtml(lens.fit.best.reason)}</p>
      </article>
      <article>
        <span>Main challenge</span>
        <strong>${escapeHtml(lens.flags[0]?.title || "No major demo flag")}</strong>
        <p>${escapeHtml(lens.flags[0]?.detail || "Still verify live source dates, citations, and portfolio disclosure.")}</p>
      </article>
      <article>
        <span>Change-my-mind trigger</span>
        <strong>Review trigger</strong>
        <p>${escapeHtml(lens.changeMind[0])}</p>
      </article>
    </div>
    <div class="why-split-grid">
      <article class="why-list-card">
        <span>What to like</span>
        <ul>${lens.positives.map((item) => `<li>${escapeHtml(item)}</li>`).join("")}</ul>
      </article>
      <article class="why-list-card">
        <span>What to challenge</span>
        <ul>${lens.challenges.map((item) => `<li>${escapeHtml(item)}</li>`).join("")}</ul>
      </article>
      <article class="why-list-card">
        <span>Pause conditions</span>
        <ul>${lens.pause.map((item) => `<li>${escapeHtml(item)}</li>`).join("")}</ul>
      </article>
      <article class="why-list-card">
        <span>What changes the thesis</span>
        <ul>${lens.changeMind.slice(0, 4).map((item) => `<li>${escapeHtml(item)}</li>`).join("")}</ul>
      </article>
    </div>
    <div id="score-anatomy" class="score-anatomy">
      <div class="score-anatomy-hero">
        <div>
          <span class="metric-label">${escapeHtml(scoreAnatomy.status)}</span>
          <h3>Nadi Score Anatomy</h3>
          <p>${escapeHtml(fund.name)} scores ${scoreAnatomy.score}/100. The score is a weighted research signal built from behavior, risk control, cost, coverage, and return support.</p>
        </div>
        <div class="score-anatomy-badge" style="--score:${scoreAnatomy.score}">
          <b>${scoreAnatomy.score}</b>
          <span>Nadi</span>
        </div>
      </div>
      <div class="score-part-grid">
        ${scoreAnatomy.anatomy.parts.map((part) => `
          <article>
            <div>
              <span>${escapeHtml(part.label)}</span>
              <strong>${part.contribution.toFixed(1)} pts</strong>
            </div>
            <div class="score-meter" aria-label="${escapeHtml(part.label)} raw score">
              <span style="width:${Math.round(part.raw)}%"></span>
              <b>${Math.round(part.raw)}</b>
            </div>
            <p>${escapeHtml(part.detail)}</p>
            <small>Weight ${part.weight}% | ${escapeHtml(part.improve)}</small>
          </article>
        `).join("")}
      </div>
      <div class="score-explain-grid">
        <article>
          <span>Peer context</span>
          <strong>${scoreAnatomy.peerDelta >= 0 ? "+" : ""}${scoreAnatomy.peerDelta.toFixed(1)} versus sleeve avg</strong>
          <p>Sleeve average score is ${scoreAnatomy.peer.sleeveAvg.score.toFixed(0)}/100 across ${scoreAnatomy.peer.sleevePeers.length} demo ${escapeHtml(fund.sleeve)} fund${scoreAnatomy.peer.sleevePeers.length === 1 ? "" : "s"}.</p>
        </article>
        <article>
          <span>Trust gate</span>
          <strong>${scoreAnatomy.evidence}/100 evidence</strong>
          <p>The Nadi score is not the same as source proof. Evidence Ledger still controls AMFI, AMC factsheet, SID/KIM, portfolio, TER, and riskometer confidence.</p>
        </article>
        <article>
          <span>Score pressure</span>
          <strong>${escapeHtml(scoreAnatomy.weakest.label)}</strong>
          <p>${escapeHtml(scoreAnatomy.pressure[0])}</p>
        </article>
      </div>
    </div>
    <div class="detail-grid">
      <div class="detail-panel">
        <h3>${escapeHtml(fund.name)}</h3>
        <p class="score-copy">${escapeHtml(fund.style)}</p>
        <div class="metric-grid">
          <div><span>Nadi score</span><strong>${score}/100</strong></div>
          <div><span>AUM demo</span><strong>${formatCr(fund.aum)}</strong></div>
          <div><span>Minimum SIP</span><strong>Rs. ${fund.minSip}</strong></div>
        </div>
        <h3>Decision prompts</h3>
        <ul class="detail-list">
          <li>Role: ${escapeHtml(fund.role)}</li>
          <li>Benchmark: ${escapeHtml(fund.benchmark)}</li>
          <li>Question to answer: does this duplicate your current core allocation?</li>
          <li>Review trigger: category underperformance, manager change, sharp expense increase, or style drift.</li>
        </ul>
      </div>
      <div class="detail-panel">
        <h3>Evidence snapshot</h3>
        <ul class="detail-list">
          <li>Top holdings: ${fund.holdings.map(escapeHtml).join(", ")}</li>
          <li>Sector map: ${fund.sectors.map(escapeHtml).join(", ")}</li>
          <li>Compare overlap: ${escapeHtml(overlapCopy)}</li>
          <li>Data status: demo research data, not live AMC fact sheet data.</li>
        </ul>
      </div>
    </div>
  `;
}

function makeWhyFundNote() {
  const lens = whyFundLens();
  return [
    "# NiveshNadi Why This Fund Lens",
    `Release: ${RELEASE_LABEL} (${DATA_VERSION})`,
    `Fund: ${lens.fund.name}`,
    `Category: ${lens.fund.category}`,
    `Risk: ${lens.fund.risk}`,
    `Lens posture: ${lens.posture}`,
    `Lens score: ${lens.lensScore}/100`,
    `Plain role: ${lens.role.label}`,
    `Best research lens: ${lens.fit.best.label} (${lens.fit.best.fit}/100)`,
    `Evidence readiness: ${lens.evidence}/100`,
    `Nadi score: ${lens.score}/100`,
    `Compare set: ${lens.compareFunds.length} funds`,
    "",
    "## What To Like",
    ...lens.positives.map((item) => `- ${item}`),
    "",
    "## What To Challenge",
    ...lens.challenges.map((item) => `- ${item}`),
    "",
    "## Pause Conditions",
    ...lens.pause.map((item) => `- ${item}`),
    "",
    "## What Would Change My Mind",
    ...lens.changeMind.map((item) => `- ${item}`),
    "",
    "Research explanation only. This is not personalized investment advice, suitability approval, execution instruction, or a return guarantee."
  ].join("\n");
}

function makeScoreAnatomyNote() {
  const config = scoreAnatomyConfig();
  return [
    "# NiveshNadi Score Anatomy",
    `Release: ${RELEASE_LABEL} (${DATA_VERSION})`,
    `Fund: ${config.fund.name}`,
    `Category: ${config.fund.category}`,
    `Risk: ${config.fund.risk}`,
    `Nadi score: ${config.score}/100`,
    `Score status: ${config.status}`,
    `Evidence readiness: ${config.evidence}/100`,
    `Sleeve peer average: ${config.peer.sleeveAvg.score.toFixed(0)}/100`,
    `Peer delta: ${config.peerDelta >= 0 ? "+" : ""}${config.peerDelta.toFixed(1)}`,
    "",
    "## Weighted Drivers",
    ...config.anatomy.parts.map((part) => `- ${part.label}: raw ${Math.round(part.raw)}/100 | weight ${part.weight}% | contribution ${part.contribution.toFixed(1)} points | ${part.detail}`),
    "",
    "## Reading Notes",
    ...config.notes.map((item) => `- ${item}`),
    "",
    "## Score Pressure",
    ...config.pressure.map((item) => `- ${item}`),
    "",
    "Research score transparency only. This is not a personalized recommendation, suitability approval, execution instruction, credit rating, or return guarantee."
  ].join("\n");
}

function openWhyFundCoach() {
  if (els.coachQuestion) els.coachQuestion.value = "next";
  if (els.coachDepth) els.coachDepth.value = "plain";
  renderNadiCoach();
  scrollToHash("#coach-desk", "smooth", true);
}

function riskRankValue(risk) {
  const ranks = { Low: 1, Moderate: 2, High: 3, "Very High": 4 };
  return ranks[risk] || 2;
}

function passportConfig() {
  return {
    horizon: Math.round(clampNumber(Number(els.passportHorizon?.value) || 7, 1, 40)),
    risk: els.passportRisk?.value || "balanced",
    liquidity: els.passportLiquidity?.value || "medium",
    sip: Math.round(clampNumber(Number(els.passportSip?.value) || 10000, 100, 1000000)),
    experience: els.passportExperience?.value || "continuing",
    emergency: els.passportEmergency?.value || "yes"
  };
}

function passportRiskLabel(value) {
  if (value === "conservative") return "Conservative";
  if (value === "aggressive") return "Aggressive";
  return "Balanced";
}

function passportLiquidityLabel(value) {
  if (value === "high") return "High liquidity";
  if (value === "low") return "Low liquidity";
  return "Medium liquidity";
}

function passportExperienceLabel(value) {
  if (value === "new") return "New investor";
  if (value === "advanced") return "Experienced";
  return "Continuing investor";
}

function signalTone(points) {
  if (points >= 10) return "strong";
  if (points >= 0) return "watch";
  return "caution";
}

function passportPosture(score) {
  if (score >= 78) return "Research-compatible";
  if (score >= 62) return "Conditional research";
  return "Caution profile";
}

function passportTone(score) {
  if (score >= 78) return "strong";
  if (score >= 62) return "watch";
  return "caution";
}

function horizonSignal(fund, config) {
  const years = config.horizon;
  const category = fund.category;
  const sleeve = fund.sleeve;
  let points = 0;
  let detail = "Write the intended holding period before treating this fund as a match.";

  if (years <= 1) {
    if (category === "Liquid Fund") {
      points = 24;
      detail = "Very short horizons primarily need liquidity and low drawdown research.";
    } else if (category === "Corporate Bond Fund") {
      points = 8;
      detail = "Short horizons need credit, duration, and exit-load review.";
    } else {
      points = -24;
      detail = "Equity or hybrid volatility can be too high for money needed within a year.";
    }
  } else if (years <= 3) {
    if (["Liquid Fund", "Corporate Bond Fund"].includes(category)) {
      points = 18;
      detail = "Short goals can start with debt and liquidity research.";
    } else if (["Balanced Hybrid Fund", "Multi Asset Allocation Fund"].includes(category)) {
      points = -2;
      detail = "Hybrid categories may still swing more than a fixed-date short goal can absorb.";
    } else {
      points = -18;
      detail = "Equity drawdowns need more time than this profile gives.";
    }
  } else if (years <= 5) {
    if (["Balanced Hybrid Fund", "Multi Asset Allocation Fund", "Corporate Bond Fund"].includes(category)) {
      points = 14;
      detail = "Medium horizons can research smoother categories before full equity risk.";
    } else if (["Large Cap Fund", "Index Fund", "ELSS Fund"].includes(category)) {
      points = 4;
      detail = "Equity research needs stress testing because the horizon is still moderate.";
    } else {
      points = -10;
      detail = "High-volatility satellites need stronger horizon discipline.";
    }
  } else if (years <= 7) {
    if (["Large Cap Fund", "Index Fund", "Flexi Cap Fund", "Balanced Hybrid Fund", "Multi Asset Allocation Fund"].includes(category)) {
      points = 16;
      detail = "The horizon can support core equity or diversified research with stress discipline.";
    } else if (["Mid Cap Fund", "Small Cap Fund"].includes(category)) {
      points = 2;
      detail = "Satellite categories need position-size and drawdown review.";
    } else {
      points = 4;
      detail = "Debt may fit stability needs, but growth expectations should be realistic.";
    }
  } else if (sleeve === "Equity" || sleeve === "Passive" || sleeve === "Life Cycle") {
    points = 18;
    detail = "Long horizons can research equity risk if drawdowns and role are documented.";
  } else if (sleeve === "Hybrid") {
    points = 14;
    detail = "Long horizons can use diversified categories when the allocation role is clear.";
  } else {
    points = 2;
    detail = "Debt may be useful for stability, not as the main long-horizon growth engine.";
  }

  return { title: "Time horizon", value: `${years} year${years === 1 ? "" : "s"}`, points, detail };
}

function riskComfortSignal(fund, config) {
  const rank = riskRankValue(fund.risk);
  let points = 0;
  let detail = "Match the fund's risk band with the investor's drawdown comfort.";

  if (config.risk === "conservative") {
    if (rank <= 2) {
      points = 18;
      detail = "Low or moderate risk bands are easier to research for a conservative profile.";
    } else if (rank === 3) {
      points = -12;
      detail = "High risk needs a written stress plan for a conservative profile.";
    } else {
      points = -26;
      detail = "Very high risk is a caution zone for a conservative profile.";
    }
  } else if (config.risk === "aggressive") {
    if (rank >= 3) {
      points = 16;
      detail = "Higher risk may fit aggressive research only when horizon and behavior discipline support it.";
    } else {
      points = -2;
      detail = "Lower-risk categories may still fit liquidity or stability needs.";
    }
  } else if (rank === 2 || rank === 3) {
    points = 14;
    detail = "Moderate to high risk bands can fit balanced research when the role is clear.";
  } else if (rank === 4) {
    points = -10;
    detail = "Very high risk needs extra caution for a balanced profile.";
  } else {
    points = 4;
    detail = "Low risk can fit stability, but may not meet growth expectations.";
  }

  return { title: "Risk comfort", value: `${passportRiskLabel(config.risk)} vs ${fund.risk}`, points, detail };
}

function liquiditySignal(fund, config) {
  let points = 0;
  let detail = "Liquidity need decides whether volatility is acceptable.";

  if (config.liquidity === "high") {
    if (fund.category === "Liquid Fund") {
      points = 22;
      detail = "High liquidity need naturally starts with cash parking research.";
    } else if (fund.sleeve === "Debt") {
      points = 8;
      detail = "Debt research still needs duration and credit checks.";
    } else {
      points = -18;
      detail = "High liquidity need is a caution zone for volatile categories.";
    }
  } else if (config.liquidity === "medium") {
    if (["Debt", "Hybrid", "Passive"].includes(fund.sleeve)) {
      points = 10;
      detail = "Medium liquidity can research smoother or core categories first.";
    } else if (fund.risk === "Very High") {
      points = -6;
      detail = "Very high risk needs a longer non-urgent holding path.";
    } else {
      points = 6;
      detail = "Liquidity appears workable if the review date is written.";
    }
  } else if (fund.sleeve === "Equity" || fund.sleeve === "Passive" || fund.sleeve === "Life Cycle") {
    points = 12;
    detail = "Low liquidity need gives more room to research long-horizon volatility.";
  } else {
    points = 4;
    detail = "The fund may still fit stability or parking roles.";
  }

  return { title: "Liquidity need", value: passportLiquidityLabel(config.liquidity), points, detail };
}

function sipBudgetSignal(fund, config) {
  const affordable = config.sip >= fund.minSip;
  const points = affordable ? 8 : -16;
  const detail = affordable
    ? "Monthly SIP budget clears the demo minimum SIP field."
    : "Monthly SIP budget is below the demo minimum SIP field; check real scheme minimums before shortlisting.";
  return { title: "SIP access", value: `${formatMoney(config.sip)} vs Rs. ${fund.minSip}`, points, detail };
}

function experienceSignal(fund, config) {
  let points = 0;
  let detail = "Experience changes how much complexity and volatility the user should research at once.";

  if (config.experience === "new") {
    if (["Liquid Fund", "Index Fund", "Large Cap Fund", "Balanced Hybrid Fund"].includes(fund.category)) {
      points = 14;
      detail = "Simpler core or stability categories are easier for a first research journey.";
    } else if (["Mid Cap Fund", "Small Cap Fund"].includes(fund.category)) {
      points = -18;
      detail = "High-volatility satellites should usually wait until core behavior is understood.";
    } else {
      points = -4;
      detail = "This category needs extra education before a new investor shortlists it.";
    }
  } else if (config.experience === "advanced") {
    points = fund.risk === "Very High" ? 8 : 6;
    detail = "Experienced users can research more complex roles, but still need written evidence.";
  } else {
    points = ["Small Cap Fund", "Mid Cap Fund"].includes(fund.category) ? -2 : 8;
    detail = "Continuing investors can compare roles, costs, and stress outcomes before selecting.";
  }

  return { title: "Investor experience", value: passportExperienceLabel(config.experience), points, detail };
}

function emergencySignal(fund, config) {
  if (config.emergency === "yes") {
    return {
      title: "Emergency buffer",
      value: "Available",
      points: fund.sleeve === "Debt" ? 4 : 8,
      detail: "Emergency money is marked available, so long-horizon research can be separated from liquidity needs."
    };
  }

  if (fund.category === "Liquid Fund") {
    return {
      title: "Emergency buffer",
      value: "Not ready",
      points: 16,
      detail: "Cash parking research may be the first route before volatile funds."
    };
  }

  return {
    title: "Emergency buffer",
    value: "Not ready",
    points: -16,
    detail: "Build or verify emergency money before using volatile categories for fresh SIP research."
  };
}

function evidenceSignal(fund) {
  const evidence = evidenceReadinessScore(fund);
  const points = evidence >= 82 ? 8 : evidence >= 72 ? 3 : -8;
  const detail = evidence >= 82
    ? "Evidence readiness is stronger in demo data."
    : evidence >= 72
      ? "Evidence is usable for demo research, but live source dates are still needed."
      : "Evidence gaps should be closed before this fund enters a serious memo.";
  return { title: "Evidence gate", value: `${evidence}/100`, points, detail };
}

function passportAssessmentForFund(fund, config = passportConfig()) {
  const signals = [
    horizonSignal(fund, config),
    riskComfortSignal(fund, config),
    liquiditySignal(fund, config),
    sipBudgetSignal(fund, config),
    experienceSignal(fund, config),
    emergencySignal(fund, config),
    evidenceSignal(fund)
  ];
  let score = 48 + signals.reduce((sum, item) => sum + item.points, 0);
  score += Math.round((nadiScore(fund) - 72) * 0.16);
  score -= Math.max(0, fund.expense - 0.45) * 14;
  score -= Math.max(0, fund.maxDrawdown - 20) * 0.45;
  score = Math.round(clampNumber(score, 12, 96));
  const cautions = signals.filter((item) => item.points < 0);
  const strengths = signals.filter((item) => item.points >= 10);
  return {
    fund,
    config,
    signals,
    cautions,
    strengths,
    score,
    posture: passportPosture(score),
    tone: passportTone(score)
  };
}

function passportRankedFunds(config = passportConfig()) {
  return FUNDS
    .map((fund) => passportAssessmentForFund(fund, config))
    .sort((a, b) => b.score - a.score || nadiScore(b.fund) - nadiScore(a.fund));
}

function renderSuitabilityPassport() {
  if (!els.passportOutput) return;
  const config = passportConfig();
  const selected = passportAssessmentForFund(selectedFund(), config);
  const ranked = passportRankedFunds(config).slice(0, 4);
  if (els.passportSummary) {
    els.passportSummary.textContent = `${selected.posture} | ${selected.score}/100`;
  }
  els.passportOutput.innerHTML = `
    <div class="passport-hero ${escapeHtml(selected.tone)}">
      <div>
        <span class="metric-label">${escapeHtml(selected.posture)}</span>
        <h3>${escapeHtml(selected.fund.name)} passport match</h3>
        <p>This is a local-only research compatibility lens for profile discipline. It is not a suitability certificate, advice, or allocation instruction.</p>
      </div>
      <div class="passport-score">
        <b>${selected.score}</b>
        <span>profile</span>
      </div>
    </div>
    <div class="passport-stat-grid">
      <div><span>Horizon</span><strong>${config.horizon} year${config.horizon === 1 ? "" : "s"}</strong></div>
      <div><span>Risk comfort</span><strong>${escapeHtml(passportRiskLabel(config.risk))}</strong></div>
      <div><span>Liquidity</span><strong>${escapeHtml(passportLiquidityLabel(config.liquidity))}</strong></div>
      <div><span>Monthly SIP</span><strong>${escapeHtml(formatMoney(config.sip))}</strong></div>
    </div>
    <div class="passport-signal-grid">
      ${selected.signals.map((item) => `
        <article class="passport-signal ${escapeHtml(signalTone(item.points))}">
          <div>
            <span>${escapeHtml(item.title)}</span>
            <strong>${escapeHtml(item.value)}</strong>
          </div>
          <b>${item.points >= 0 ? "+" : ""}${Math.round(item.points)}</b>
          <p>${escapeHtml(item.detail)}</p>
        </article>
      `).join("")}
    </div>
    <div class="passport-shortlist">
      <div>
        <span class="metric-label">Profile shortlist</span>
        <h3>Top research matches</h3>
        <p>Use this as a starting shortlist, then still run Fit Map, Flags, Bench, Stress, Cost, Evidence, and Pack before any real decision.</p>
      </div>
      <div class="passport-candidate-grid">
        ${ranked.map((item) => `
          <article class="passport-candidate ${escapeHtml(item.tone)}">
            <span>${escapeHtml(item.posture)}</span>
            <strong>${escapeHtml(item.fund.name)}</strong>
            <p>${escapeHtml(item.fund.category)} | ${escapeHtml(item.fund.risk)} risk | ${item.score}/100</p>
            <button class="text-button" type="button" data-select-fund="${escapeHtml(item.fund.id)}">Inspect</button>
          </article>
        `).join("")}
      </div>
    </div>
    <div class="passport-guardrail">
      <strong>Suitability boundary</strong>
      <p>The passport helps the investor slow down and ask better questions. It must not be described as a personal recommendation, guaranteed fit, or transaction instruction.</p>
    </div>
  `;
}

function inspectPassportTopMatch() {
  const [top] = passportRankedFunds(passportConfig());
  if (!top) return;
  state.selectedId = top.fund.id;
  renderAll();
  renderGoalFitCompass();
  renderFirstSipCoach();
  scrollToHash("#suitability-passport", "smooth", true);
}

function makeSuitabilityPassportNote() {
  const config = passportConfig();
  const selected = passportAssessmentForFund(selectedFund(), config);
  const ranked = passportRankedFunds(config).slice(0, 4);
  return [
    "# NiveshNadi Suitability Passport",
    `Release: ${RELEASE_LABEL} (${DATA_VERSION})`,
    "",
    "Local profile:",
    `- Horizon: ${config.horizon} year${config.horizon === 1 ? "" : "s"}`,
    `- Risk comfort: ${passportRiskLabel(config.risk)}`,
    `- Liquidity need: ${passportLiquidityLabel(config.liquidity)}`,
    `- Monthly SIP budget: ${formatMoney(config.sip)}`,
    `- Experience: ${passportExperienceLabel(config.experience)}`,
    `- Emergency buffer: ${config.emergency === "yes" ? "Available" : "Not ready"}`,
    "",
    "Selected fund:",
    `- ${selected.fund.name} | ${selected.fund.category} | ${selected.fund.risk} risk`,
    `- Passport posture: ${selected.posture}`,
    `- Profile score: ${selected.score}/100`,
    "",
    "Signals:",
    ...selected.signals.map((item) => `- ${item.title}: ${item.value} | ${item.points >= 0 ? "+" : ""}${Math.round(item.points)} | ${item.detail}`),
    "",
    "Top profile shortlist:",
    ...ranked.map((item) => `- ${item.fund.name}: ${item.score}/100 | ${item.posture} | ${item.fund.category}`),
    "",
    "Research compatibility only. This is not personalized investment advice, a suitability certificate, a recommendation, or an execution instruction."
  ].join("\n");
}

function goalFitScoreForFund(fund, lens) {
  const category = fund.category;
  const sleeve = fund.sleeve;
  const score = nadiScore(fund);
  const evidence = evidenceReadinessScore(fund);
  let fit = 35;
  let reason = "This fund needs a clearly written role before it belongs in this goal lens.";
  let checks = ["Confirm goal horizon, risk comfort, cost, evidence freshness, and role duplication."];

  if (lens.id === "emergency") {
    if (category === "Liquid Fund") {
      fit = 92;
      reason = "Liquid fund research can fit cash parking, emergency money, or STP source discipline.";
      checks = ["Check credit quality, maturity profile, exit load, and liquidity before using it as a cash bucket."];
    } else if (category === "Corporate Bond Fund") {
      fit = 68;
      reason = "Quality debt may support short-term research, but emergency money needs stronger liquidity discipline.";
      checks = ["Inspect duration, issuer quality, and drawdown history before treating this as near-term money."];
    } else {
      fit = sleeve === "Debt" ? 52 : 22;
      reason = "Volatile categories are not a primary lane for emergency money research.";
      checks = ["Keep emergency funds separate from equity, hybrid, or long-horizon growth research."];
    }
  } else if (lens.id === "short") {
    if (category === "Liquid Fund" || category === "Corporate Bond Fund") fit = category === "Corporate Bond Fund" ? 84 : 78;
    else if (category === "Balanced Hybrid Fund" || category === "Multi Asset Allocation Fund") fit = 58;
    else fit = sleeve === "Equity" ? 32 : 45;
    reason = fit >= 75
      ? "This category can be researched for shorter horizons when credit, duration, and liquidity are visible."
      : "This fund may carry more volatility than a short horizon can comfortably absorb.";
    checks = ["Check drawdown, exit load, credit quality, and whether the money is needed on a fixed date."];
  } else if (lens.id === "tax") {
    if (category === "ELSS Fund") {
      fit = 89;
      reason = "ELSS is the dedicated tax-saving equity research lane, with lock-in and drawdown risk.";
    } else if (sleeve === "Equity" || sleeve === "Passive") {
      fit = 52;
      reason = "This can be a comparison point, but it is not the tax-saving category lane.";
    } else {
      fit = 25;
      reason = "This category is not a tax-saving equity research lane.";
    }
    checks = ["Separate tax benefit from investment role, lock-in, drawdown, and overlap with existing equity funds."];
  } else if (lens.id === "core") {
    if (["Index Fund", "Large Cap Fund"].includes(category)) fit = 86;
    else if (["Balanced Hybrid Fund", "Multi Asset Allocation Fund"].includes(category)) fit = 76;
    else if (category === "Flexi Cap Fund") fit = 68;
    else fit = sleeve === "Equity" ? 48 : 42;
    reason = fit >= 80
      ? "This fund can be researched as a core or core-challenger lane before adding satellites."
      : "This fund is more likely to be a support or satellite lane than the first core holding.";
    checks = ["Compare against low-cost passive, check expense, drawdown, consistency, and portfolio overlap."];
  } else if (lens.id === "wealth") {
    if (["Index Fund", "Large Cap Fund", "Flexi Cap Fund"].includes(category)) fit = 82;
    else if (["Mid Cap Fund", "Small Cap Fund"].includes(category)) fit = 72;
    else if (category === "Balanced Hybrid Fund" || category === "Multi Asset Allocation Fund") fit = 70;
    else fit = 42;
    reason = fit >= 80
      ? "This category can support long-horizon wealth research when the investor accepts equity drawdowns."
      : "This category may support long-term planning only with a specific role and size discipline.";
    checks = ["Run Stress Lab, compare peer behavior, and document the holding period before acting."];
  } else if (lens.id === "retirement") {
    if (category === "Life Cycle Fund") fit = 90;
    else if (category === "Multi Asset Allocation Fund") fit = 80;
    else if (["Index Fund", "Large Cap Fund", "Balanced Hybrid Fund"].includes(category)) fit = 70;
    else fit = sleeve === "Equity" ? 60 : 50;
    reason = fit >= 80
      ? "This category can be researched for a goal-date or diversified retirement path."
      : "This fund needs a glide-path or de-risking role before it belongs in retirement research.";
    checks = ["Check review cadence, glide path, equity reduction plan, and cost over long horizons."];
  } else if (lens.id === "income") {
    if (category === "Corporate Bond Fund") fit = 88;
    else if (category === "Liquid Fund") fit = 74;
    else if (["Balanced Hybrid Fund", "Multi Asset Allocation Fund"].includes(category)) fit = 62;
    else fit = sleeve === "Debt" ? 58 : 30;
    reason = fit >= 80
      ? "This category can be researched for income stability when debt quality and duration are visible."
      : "This fund is not a primary income stability lane without additional risk review.";
    checks = ["Inspect credit risk, duration, yield chasing, concentration, and drawdown behavior."];
  } else if (lens.id === "satellite") {
    if (["Flexi Cap Fund", "Mid Cap Fund", "Small Cap Fund"].includes(category)) fit = category === "Flexi Cap Fund" ? 78 : 84;
    else if (["Large Cap Fund", "Index Fund"].includes(category)) fit = 56;
    else fit = 28;
    reason = fit >= 78
      ? "This fund can be researched as a growth satellite after the core allocation is stable."
      : "This fund is not a natural growth satellite lane.";
    checks = ["Size deliberately, check drawdown, avoid overlap, and confirm the core portfolio already exists."];
  }

  fit += Math.round((score - 72) * 0.15 + (evidence - 70) * 0.1);
  if (fund.risk === "Very High" && ["emergency", "short", "income"].includes(lens.id)) fit -= 10;
  if (fund.risk === "Low" && ["satellite", "wealth"].includes(lens.id)) fit -= 6;
  return {
    ...lens,
    checks,
    fit: Math.round(clampNumber(fit, 12, 96)),
    reason
  };
}

function fitTone(score) {
  if (score >= 80) return "strong";
  if (score >= 62) return "watch";
  return "caution";
}

function fitPosture(score) {
  if (score >= 80) return "Primary research lane";
  if (score >= 62) return "Support research lane";
  return "Caution lane";
}

function fundFitHeatmapConfig() {
  const fund = selectedFund();
  const lenses = [
    { id: "emergency", label: "Emergency cash", horizon: "0-12 months" },
    { id: "short", label: "Short goal", horizon: "1-3 years" },
    { id: "tax", label: "Tax saving", horizon: "3+ years" },
    { id: "core", label: "First SIP core", horizon: "5+ years" },
    { id: "wealth", label: "Long-term wealth", horizon: "7+ years" },
    { id: "retirement", label: "Retirement path", horizon: "10+ years" },
    { id: "income", label: "Income stability", horizon: "2-5 years" },
    { id: "satellite", label: "Growth satellite", horizon: "7+ years" }
  ];
  const scored = lenses.map((lens) => goalFitScoreForFund(fund, lens)).sort((a, b) => b.fit - a.fit);
  const best = scored[0];
  const caution = [...scored].reverse().slice(0, 2);
  return { best, caution, fund, scored };
}

function renderGoalFundFitHeatmap() {
  if (!els.fitHeatmapOutput) return;
  const config = fundFitHeatmapConfig();
  if (els.fitHeatmapSummary) {
    els.fitHeatmapSummary.textContent = `${config.best.label} | ${config.best.fit}/100`;
  }
  els.fitHeatmapOutput.innerHTML = `
    <div class="fit-map-hero ${escapeHtml(fitTone(config.best.fit))}">
      <div>
        <span class="metric-label">${escapeHtml(fitPosture(config.best.fit))}</span>
        <h3>${escapeHtml(config.fund.name)} goal map</h3>
        <p>Strongest research lens: ${escapeHtml(config.best.label)} for ${escapeHtml(config.best.horizon)}. This is category and fund-role mapping, not personalized advice.</p>
      </div>
      <div class="fit-map-score" style="--score: ${config.best.fit}">
        <b>${config.best.fit}</b>
      </div>
    </div>
    <div class="fit-map-grid">
      ${config.scored.map((item) => `
        <article class="fit-map-card ${escapeHtml(fitTone(item.fit))}">
          <div>
            <span>${escapeHtml(item.horizon)}</span>
            <strong>${escapeHtml(item.label)}</strong>
          </div>
          <div class="fit-map-meter" aria-label="${escapeHtml(item.label)} fit score">
            <span style="width: ${item.fit}%"></span>
            <b>${item.fit}</b>
          </div>
          <p>${escapeHtml(item.reason)}</p>
          <small>${escapeHtml(fitPosture(item.fit))}</small>
        </article>
      `).join("")}
    </div>
    <div class="fit-map-guard-grid">
      <article>
        <span>Top research checks</span>
        <ul class="fit-map-list">
          ${config.best.checks.map((item) => `<li>${escapeHtml(item)}</li>`).join("")}
        </ul>
      </article>
      <article>
        <span>Caution zones</span>
        <ul class="fit-map-list">
          ${config.caution.map((item) => `<li>${escapeHtml(item.label)}: ${escapeHtml(item.reason)}</li>`).join("")}
        </ul>
      </article>
    </div>
  `;
}

function makeGoalFundFitNote() {
  const config = fundFitHeatmapConfig();
  return [
    "# NiveshNadi Goal-Fund Fit Heatmap",
    `Release: ${RELEASE_LABEL} (${DATA_VERSION})`,
    `Fund: ${config.fund.name}`,
    `Category: ${config.fund.category}`,
    `Risk: ${config.fund.risk}`,
    `Strongest research lens: ${config.best.label} (${config.best.fit}/100)`,
    "",
    "Goal lenses:",
    ...config.scored.map((item) => `- ${item.label}: ${item.fit}/100 | ${fitPosture(item.fit)} | ${item.reason}`),
    "",
    "Top checks:",
    ...config.best.checks.map((item) => `- ${item}`),
    "",
    "Research map only. This is not a personalized recommendation, suitability claim, execution instruction, or return guarantee."
  ].join("\n");
}

function flagSeverityScore(severity) {
  if (severity === "high") return 3;
  if (severity === "medium") return 2;
  return 1;
}

function flagSeverityLabel(severity) {
  if (severity === "high") return "High attention";
  if (severity === "medium") return "Review";
  return "Monitor";
}

function redFlagItems(fund) {
  const flags = [];
  const fit = fundFitHeatmapConfig();
  const peer = peerBenchmarkConfig();
  const compareFunds = compareSet().filter((item) => item.id !== fund.id);
  const shared = compareFunds.length ? sharedHoldings([fund, ...compareFunds]) : [];
  const evidence = evidenceReadinessScore(fund);
  const score = nadiScore(fund);
  const uniqueSectors = new Set(fund.sectors).size;

  if (fund.risk === "Very High") {
    flags.push({
      title: "Very high risk band",
      severity: "high",
      signal: fund.risk,
      detail: "Use only after core allocation, drawdown comfort, and holding horizon are written.",
      action: "Run Stress Lab and keep the role as satellite research unless the goal lens clearly supports it."
    });
  } else if (fund.risk === "High") {
    flags.push({
      title: "High risk band",
      severity: "medium",
      signal: fund.risk,
      detail: "The fund can fit long-horizon research, but near-term or income goals need caution.",
      action: "Check Fit Map and Stress Lab before using this in a shortlist."
    });
  }

  if (fund.maxDrawdown >= 28) {
    flags.push({
      title: "Large drawdown history",
      severity: "high",
      signal: `${fund.maxDrawdown}% demo drawdown`,
      detail: "A sharp drawdown can disturb SIP behavior and goal timing.",
      action: "Write the behavior plan before starting, increasing, or switching."
    });
  } else if (fund.maxDrawdown >= 18) {
    flags.push({
      title: "Drawdown needs review",
      severity: "medium",
      signal: `${fund.maxDrawdown}% demo drawdown`,
      detail: "The fall may be acceptable for long horizons, but it should not be ignored.",
      action: "Compare with peer drawdown and run the Risk Stress Lab."
    });
  }

  if (fund.expense > peer.sleeveAvg.expense + 0.12) {
    flags.push({
      title: "Expense above sleeve average",
      severity: "medium",
      signal: `${fund.expense.toFixed(2)}% TER`,
      detail: `Sleeve average is ${peer.sleeveAvg.expense.toFixed(2)}% in demo data.`,
      action: "Use Cost Reality Lab and compare with a lower-cost alternative."
    });
  }

  if (evidence < 68) {
    flags.push({
      title: "Evidence readiness gap",
      severity: "high",
      signal: `${evidence}/100 evidence`,
      detail: "Live launch should not rely on demo fields without source date and citation path.",
      action: "Open Evidence Ledger and confirm factsheet, portfolio, SID/KIM, and TER sources."
    });
  } else if (evidence < 78) {
    flags.push({
      title: "Evidence should be strengthened",
      severity: "medium",
      signal: `${evidence}/100 evidence`,
      detail: "The fund has usable demo evidence, but live citations are still needed.",
      action: "Check source freshness before copying a decision pack."
    });
  }

  if (shared.length) {
    flags.push({
      title: "Overlap with compare set",
      severity: shared.length >= 3 ? "high" : "medium",
      signal: `${shared.length} shared holding${shared.length === 1 ? "" : "s"}`,
      detail: `Shared demo holdings include ${shared.slice(0, 4).join(", ")}.`,
      action: "Use X-Ray before adding another fund with the same core exposure."
    });
  }

  if (uniqueSectors <= 3 && fund.sleeve !== "Debt") {
    flags.push({
      title: "Concentration check",
      severity: "medium",
      signal: `${uniqueSectors} sector sleeves`,
      detail: "A narrower sector map can increase portfolio sensitivity.",
      action: "Inspect portfolio disclosure date and sector concentration before shortlisting."
    });
  }

  const weakFit = fit.scored.filter((item) => item.fit < 50).length;
  if (weakFit >= 3) {
    flags.push({
      title: "Goal-fit caution zones",
      severity: "medium",
      signal: `${weakFit} caution lenses`,
      detail: "The fund may be useful only for specific goals, not every investor question.",
      action: "Use the Fit Map to decide which goal lens this fund should not serve."
    });
  }

  if (score < 70) {
    flags.push({
      title: "Nadi score below comfort line",
      severity: "medium",
      signal: `${score}/100 Nadi score`,
      detail: "The score does not reject the fund, but it does require stronger written evidence.",
      action: "Compare peer score, evidence readiness, and decision reason before adding it."
    });
  }

  if (!flags.length) {
    flags.push({
      title: "No major demo red flag",
      severity: "low",
      signal: "Calm",
      detail: "No major demo warning triggered from risk, cost, evidence, drawdown, overlap, or fit checks.",
      action: "Still complete Evidence Ledger, Fit Map, Bench, Cost, Stress, and Decision Pack before acting."
    });
  }

  return flags.sort((a, b) => flagSeverityScore(b.severity) - flagSeverityScore(a.severity));
}

function redFlagRadarConfig() {
  const fund = selectedFund();
  const flags = redFlagItems(fund);
  const high = flags.filter((flag) => flag.severity === "high").length;
  const medium = flags.filter((flag) => flag.severity === "medium").length;
  const watchScore = Math.round(clampNumber(100 - high * 22 - medium * 11 - Math.max(0, flags.length - 5) * 4, 20, 96));
  let posture = "Monitor";
  let tone = "low";
  if (high) {
    posture = "Review before action";
    tone = "high";
  } else if (medium >= 2) {
    posture = "Research caution";
    tone = "medium";
  } else if (watchScore >= 82) {
    posture = "No major demo red flag";
    tone = "calm";
  }
  return { flags, fund, high, medium, posture, tone, watchScore };
}

function renderRedFlagRadar() {
  if (!els.redFlagOutput) return;
  const config = redFlagRadarConfig();
  if (els.redFlagSummary) {
    els.redFlagSummary.textContent = `${config.high} high | ${config.medium} review`;
  }
  els.redFlagOutput.innerHTML = `
    <div class="red-flag-hero ${escapeHtml(config.tone)}">
      <div>
        <span class="metric-label">${escapeHtml(config.posture)}</span>
        <h3>${escapeHtml(config.fund.name)} risk radar</h3>
        <p>Flags are demo research prompts across risk, cost, evidence, drawdown, overlap, concentration, and goal fit. They are not buy, sell, or switch instructions.</p>
      </div>
      <div class="red-flag-score">
        <b>${config.watchScore}</b>
        <span>watch</span>
      </div>
    </div>
    <div class="red-flag-stat-grid">
      <div><span>High attention</span><strong>${config.high}</strong></div>
      <div><span>Review flags</span><strong>${config.medium}</strong></div>
      <div><span>Total checks</span><strong>${config.flags.length}</strong></div>
      <div><span>Evidence</span><strong>${evidenceReadinessScore(config.fund)}/100</strong></div>
    </div>
    <div class="red-flag-grid">
      ${config.flags.map((flag) => `
        <article class="red-flag-card ${escapeHtml(flag.severity)}">
          <div>
            <span>${escapeHtml(flagSeverityLabel(flag.severity))}</span>
            <strong>${escapeHtml(flag.title)}</strong>
          </div>
          <b>${escapeHtml(flag.signal)}</b>
          <p>${escapeHtml(flag.detail)}</p>
          <small>${escapeHtml(flag.action)}</small>
        </article>
      `).join("")}
    </div>
    <div class="red-flag-guardrail">
      <strong>Research guardrail</strong>
      <p>Do not use flags as automatic rejection or approval. Use them to decide what evidence, stress scenario, cost check, or peer comparison must be completed before a decision memo.</p>
    </div>
  `;
}

function addFlaggedFundToWatchlist() {
  addToWatchlist(state.selectedId);
  renderRedFlagRadar();
  scrollToHash("#watchlist", "smooth", true);
}

function makeRedFlagNote() {
  const config = redFlagRadarConfig();
  return [
    "# NiveshNadi Red Flag Radar",
    `Release: ${RELEASE_LABEL} (${DATA_VERSION})`,
    `Fund: ${config.fund.name}`,
    `Category: ${config.fund.category}`,
    `Risk: ${config.fund.risk}`,
    `Radar posture: ${config.posture}`,
    `Watch score: ${config.watchScore}/100`,
    `High attention flags: ${config.high}`,
    `Review flags: ${config.medium}`,
    "",
    "Flags:",
    ...config.flags.map((flag) => `- ${flagSeverityLabel(flag.severity)} | ${flag.title}: ${flag.signal}. ${flag.detail} Action: ${flag.action}`),
    "",
    "Research prompts only. This is not personalized investment advice, a recommendation, a rejection, or an execution instruction."
  ].join("\n");
}

function switchDecisionConfig() {
  return {
    concern: els.switchConcern?.value || "underperformance",
    months: Math.round(clampNumber(Number(els.switchMonths?.value) || 18, 1, 240)),
    sip: Math.round(clampNumber(Number(els.switchSip?.value) || 10000, 0, 1000000)),
    conviction: els.switchConviction?.value || "medium",
    friction: els.switchFriction?.value || "medium"
  };
}

function switchConcernLabel(value) {
  const labels = {
    underperformance: "Underperformance",
    cost: "Cost concern",
    risk: "Risk discomfort",
    overlap: "Portfolio overlap",
    "goal-change": "Goal changed",
    "evidence-gap": "Evidence gap",
    "market-fall": "Market fall anxiety"
  };
  return labels[value] || "Research concern";
}

function switchConvictionLabel(value) {
  if (value === "low") return "Low conviction";
  if (value === "high") return "High conviction";
  return "Medium conviction";
}

function switchFrictionLabel(value) {
  if (value === "low") return "Low friction";
  if (value === "high") return "High friction";
  return "Medium friction";
}

function switchLaneTone(score) {
  if (score >= 76) return "high";
  if (score >= 58) return "medium";
  return "low";
}

function switchPressurePosture(score) {
  if (score >= 76) return "High research pressure";
  if (score >= 58) return "Review before change";
  return "Continue review posture";
}

function switchConcernSignal(fund, config, peer, redFlags, passport, shared) {
  const evidence = evidenceReadinessScore(fund);
  const sleeveReturnGap = peer.sleeveAvg.returns5y - fund.returns5y;
  const expenseGap = fund.expense - peer.sleeveAvg.expense;
  const bestFit = fundFitHeatmapConfig().best.fit;

  if (config.concern === "underperformance") {
    const points = sleeveReturnGap > 2 ? 22 : sleeveReturnGap > 0 ? 10 : -4;
    return {
      title: "Underperformance check",
      value: `${fund.returns5y.toFixed(1)}% 5Y demo`,
      points,
      detail: sleeveReturnGap > 2
        ? `Demo 5Y return trails sleeve average by ${sleeveReturnGap.toFixed(1)} percentage points.`
        : "Demo return gap is not large enough to drive a switch thesis by itself."
    };
  }

  if (config.concern === "cost") {
    const points = expenseGap > 0.12 ? 24 : expenseGap > 0.04 ? 12 : -4;
    return {
      title: "Cost check",
      value: `${fund.expense.toFixed(2)}% TER`,
      points,
      detail: expenseGap > 0.12
        ? `Expense is meaningfully above sleeve average of ${peer.sleeveAvg.expense.toFixed(2)}%.`
        : "Cost concern should be tested in Cost Reality Lab before it becomes a switch thesis."
    };
  }

  if (config.concern === "risk") {
    const points = redFlags.high ? 24 : redFlags.medium >= 2 ? 14 : fund.risk === "Very High" ? 16 : 2;
    return {
      title: "Risk discomfort",
      value: `${fund.risk} risk`,
      points,
      detail: redFlags.high
        ? "High-attention flags mean the change question needs stress and evidence review."
        : "Risk discomfort should be separated from short-term market noise."
    };
  }

  if (config.concern === "overlap") {
    const points = shared.length >= 3 ? 24 : shared.length ? 12 : -6;
    return {
      title: "Overlap check",
      value: `${shared.length} shared holding${shared.length === 1 ? "" : "s"}`,
      points,
      detail: shared.length
        ? `Shared demo holdings include ${shared.slice(0, 4).join(", ")}.`
        : "No meaningful compare-set overlap is visible yet."
    };
  }

  if (config.concern === "goal-change") {
    const points = bestFit < 62 ? 22 : bestFit < 78 ? 8 : -4;
    return {
      title: "Goal change",
      value: `${bestFit}/100 best lens`,
      points,
      detail: bestFit < 62
        ? "Current selected fund does not map strongly to the best goal lens."
        : "Goal change needs a written new role before any switch research."
    };
  }

  if (config.concern === "evidence-gap") {
    const points = evidence < 68 ? 24 : evidence < 78 ? 12 : -4;
    return {
      title: "Evidence gap",
      value: `${evidence}/100 evidence`,
      points,
      detail: evidence < 78
        ? "Evidence should be strengthened before making the change question serious."
        : "Evidence readiness is not the main pressure point in demo data."
    };
  }

  const points = config.months < 12 ? -8 : fund.maxDrawdown >= 24 ? 8 : -6;
  return {
    title: "Market fall anxiety",
    value: `${fund.maxDrawdown}% drawdown`,
    points,
    detail: "Market fall anxiety should trigger behavior review, not an automatic exit or switch."
  };
}

function switchCandidateSet(config = passportConfig()) {
  const fund = selectedFund();
  const selectedCategory = fund.category;
  const fromPassport = passportRankedFunds(config).map((item) => item.fund);
  const fromSleeve = FUNDS
    .filter((item) => item.id !== fund.id && item.sleeve === fund.sleeve)
    .sort((a, b) => nadiScore(b) - nadiScore(a) || a.expense - b.expense);
  const fromCore = FUNDS
    .filter((item) => item.id !== fund.id && ["Large Cap Fund", "Index Fund", "Balanced Hybrid Fund", "Corporate Bond Fund", "Liquid Fund"].includes(item.category))
    .sort((a, b) => nadiScore(b) - nadiScore(a));
  const seen = new Set();
  return [...fromPassport, ...fromSleeve, ...fromCore]
    .filter((item) => {
      if (item.id === fund.id || seen.has(item.id)) return false;
      seen.add(item.id);
      return true;
    })
    .sort((a, b) => (
      (a.category === selectedCategory ? -4 : 0) -
      (b.category === selectedCategory ? -4 : 0) ||
      nadiScore(b) - nadiScore(a) ||
      a.expense - b.expense
    ))
    .slice(0, 4);
}

function switchDecisionLabConfig() {
  const fund = selectedFund();
  const config = switchDecisionConfig();
  const peer = peerBenchmarkConfig();
  const redFlags = redFlagRadarConfig();
  const passport = passportAssessmentForFund(fund, passportConfig());
  const compareFunds = compareSet().filter((item) => item.id !== fund.id);
  const shared = compareFunds.length ? sharedHoldings([fund, ...compareFunds]) : [];
  const concernSignal = switchConcernSignal(fund, config, peer, redFlags, passport, shared);
  const holdingSignal = {
    title: "Holding period",
    value: `${config.months} month${config.months === 1 ? "" : "s"}`,
    points: config.months < 6 ? -16 : config.months < 12 ? -8 : config.months > 36 ? 8 : 2,
    detail: config.months < 12
      ? "A short holding period needs extra caution because the evidence may still be incomplete."
      : "A longer holding period gives more evidence for a review thesis."
  };
  const convictionSignal = {
    title: "Conviction",
    value: switchConvictionLabel(config.conviction),
    points: config.conviction === "low" ? 14 : config.conviction === "high" ? -10 : 2,
    detail: config.conviction === "low"
      ? "Low conviction raises the need to document why the fund remains in the shortlist."
      : "Conviction should still be backed by evidence, not habit."
  };
  const frictionSignal = {
    title: "Exit friction",
    value: switchFrictionLabel(config.friction),
    points: config.friction === "high" ? -12 : config.friction === "low" ? 8 : 0,
    detail: config.friction === "high"
      ? "High tax or exit-load friction means the research note must separate evidence from execution timing."
      : "Lower friction does not make switching right; it only removes one barrier from research."
  };
  const profileSignal = {
    title: "Profile pressure",
    value: `${passport.score}/100 passport`,
    points: passport.score < 58 ? 16 : passport.score < 72 ? 8 : -6,
    detail: passport.score < 72
      ? "Suitability Passport raises profile-fit questions that should be answered before any change."
      : "Profile fit is not the main pressure point in the current local profile."
  };
  const redFlagSignal = {
    title: "Flag pressure",
    value: `${redFlags.high} high | ${redFlags.medium} review`,
    points: redFlags.high * 16 + redFlags.medium * 5,
    detail: "Flags should define the next evidence checklist, not trigger automatic action."
  };
  const signals = [concernSignal, holdingSignal, convictionSignal, frictionSignal, profileSignal, redFlagSignal];
  const rawPressure = 38 + signals.reduce((sum, item) => sum + item.points, 0) * 0.72;
  const pressure = Math.round(clampNumber(rawPressure, 14, 96));
  const lanes = [
    {
      title: "Continue review route",
      label: "Stay disciplined",
      score: Math.round(clampNumber(112 - pressure + (config.conviction === "high" ? 10 : 0) + (config.friction === "high" ? 6 : 0), 15, 96)),
      detail: "Keep the fund in research view, document why it still has a role, and set the next review trigger."
    },
    {
      title: "Watch trigger route",
      label: "Set evidence triggers",
      score: Math.round(clampNumber(78 - Math.abs(pressure - 56) + redFlags.medium * 5, 15, 96)),
      detail: "Use Watchlist for drawdown, expense, score, review-date, style, or evidence triggers."
    },
    {
      title: "Fresh-money checkpoint",
      label: "Slow the next decision",
      score: Math.round(clampNumber(pressure + (config.friction === "high" ? 8 : 0) + (config.months < 12 ? 8 : 0) - 8, 15, 96)),
      detail: "Before adding more money, complete Stress, Cost, Evidence, X-Ray, and a written decision reason."
    },
    {
      title: "Switch candidate research",
      label: "Build alternatives",
      score: Math.round(clampNumber(pressure + (config.friction === "low" ? 8 : 0) + (config.months >= 12 ? 5 : -10), 15, 96)),
      detail: "Create an alternative set for comparison. This is candidate research, not an execution instruction."
    }
  ].sort((a, b) => b.score - a.score);
  return {
    config,
    fund,
    signals,
    lanes,
    candidates: switchCandidateSet(passportConfig()),
    pressure,
    posture: switchPressurePosture(pressure)
  };
}

function renderSwitchDecisionLab() {
  if (!els.switchOutput) return;
  const lab = switchDecisionLabConfig();
  if (els.switchSummary) {
    els.switchSummary.textContent = `${lab.posture} | ${lab.pressure}/100`;
  }
  els.switchOutput.innerHTML = `
    <div class="switch-hero ${escapeHtml(switchLaneTone(lab.pressure))}">
      <div>
        <span class="metric-label">${escapeHtml(lab.posture)}</span>
        <h3>${escapeHtml(lab.fund.name)} change review</h3>
        <p>Switch Lab converts a concern into evidence paths. It does not tell the investor to buy, sell, switch, hold, pause, or redeem.</p>
      </div>
      <div class="switch-pressure">
        <b>${lab.pressure}</b>
        <span>pressure</span>
      </div>
    </div>
    <div class="switch-signal-grid">
      ${lab.signals.map((item) => `
        <article class="switch-signal ${escapeHtml(signalTone(item.points))}">
          <div>
            <span>${escapeHtml(item.title)}</span>
            <strong>${escapeHtml(item.value)}</strong>
          </div>
          <b>${item.points >= 0 ? "+" : ""}${Math.round(item.points)}</b>
          <p>${escapeHtml(item.detail)}</p>
        </article>
      `).join("")}
    </div>
    <div class="switch-lane-grid">
      ${lab.lanes.map((lane, index) => `
        <article class="switch-lane ${escapeHtml(switchLaneTone(lane.score))}">
          <span>${index === 0 ? "Top research lane" : escapeHtml(lane.label)}</span>
          <strong>${escapeHtml(lane.title)}</strong>
          <div class="switch-meter" aria-label="${escapeHtml(lane.title)} score">
            <span style="width: ${lane.score}%"></span>
            <b>${lane.score}</b>
          </div>
          <p>${escapeHtml(lane.detail)}</p>
        </article>
      `).join("")}
    </div>
    <div class="switch-candidate-board">
      <div>
        <span class="metric-label">Alternative research set</span>
        <h3>Candidate funds to compare</h3>
        <p>Use candidates only to build a comparison set. Do not treat this list as a recommendation or replacement order.</p>
      </div>
      <div class="switch-candidate-grid">
        ${lab.candidates.map((fund) => `
          <article class="switch-candidate">
            <span>${escapeHtml(fund.category)}</span>
            <strong>${escapeHtml(fund.name)}</strong>
            <p>${escapeHtml(fund.risk)} risk | ${nadiScore(fund)}/100 score | ${fund.expense.toFixed(2)}% TER</p>
            <button class="text-button" type="button" data-select-fund="${escapeHtml(fund.id)}">Inspect</button>
          </article>
        `).join("")}
      </div>
    </div>
    <div class="switch-guardrail">
      <strong>Decision boundary</strong>
      <p>Before any real change, write the reason, compare costs and overlap, review tax or exit-load friction independently, and verify live factsheet evidence.</p>
    </div>
  `;
}

function addSwitchCandidatesToCompare() {
  switchDecisionLabConfig().candidates.slice(0, 3).forEach((fund) => state.compare.add(fund.id));
  state.compare.add(state.selectedId);
  renderFundGrid();
  renderPortfolioChoices();
  renderCompareMatrix();
  renderSwitchDecisionLab();
  renderRedFlagRadar();
  renderPeerBenchmarkBoard();
  scrollToHash("#compare", "smooth", true);
}

function watchSwitchFund() {
  addToWatchlist(state.selectedId);
  renderSwitchDecisionLab();
  scrollToHash("#watchlist", "smooth", true);
}

function makeSwitchDecisionNote() {
  const lab = switchDecisionLabConfig();
  return [
    "# NiveshNadi Switch Decision Lab",
    `Release: ${RELEASE_LABEL} (${DATA_VERSION})`,
    `Fund: ${lab.fund.name}`,
    `Category: ${lab.fund.category}`,
    `Concern: ${switchConcernLabel(lab.config.concern)}`,
    `Holding period: ${lab.config.months} month${lab.config.months === 1 ? "" : "s"}`,
    `Monthly SIP under review: ${formatMoney(lab.config.sip)}`,
    `Conviction: ${switchConvictionLabel(lab.config.conviction)}`,
    `Exit friction: ${switchFrictionLabel(lab.config.friction)}`,
    `Research pressure: ${lab.pressure}/100 | ${lab.posture}`,
    "",
    "Signals:",
    ...lab.signals.map((item) => `- ${item.title}: ${item.value} | ${item.points >= 0 ? "+" : ""}${Math.round(item.points)} | ${item.detail}`),
    "",
    "Research lanes:",
    ...lab.lanes.map((lane) => `- ${lane.title}: ${lane.score}/100 | ${lane.detail}`),
    "",
    "Candidate research set:",
    ...lab.candidates.map((fund) => `- ${fund.name}: ${fund.category} | ${fund.risk} risk | ${nadiScore(fund)}/100 | TER ${fund.expense.toFixed(2)}%`),
    "",
    "Research support only. This is not personalized investment advice, a switch recommendation, a hold instruction, a redemption instruction, or an execution instruction."
  ].join("\n");
}

function averageMetric(funds, reader) {
  if (!funds.length) return 0;
  return funds.reduce((sum, fund) => sum + reader(fund), 0) / funds.length;
}

function peerMetricAverages(funds) {
  return {
    drawdown: averageMetric(funds, (fund) => fund.maxDrawdown),
    evidence: averageMetric(funds, evidenceReadinessScore),
    expense: averageMetric(funds, (fund) => fund.expense),
    returns5y: averageMetric(funds, (fund) => fund.returns5y),
    score: averageMetric(funds, nadiScore),
    consistency: averageMetric(funds, (fund) => fund.consistency)
  };
}

function peerDeltaCopy(value, average, suffix = "", lowerIsBetter = false) {
  const delta = value - average;
  if (Math.abs(delta) < 0.05) return "In line";
  const direction = lowerIsBetter
    ? delta < 0 ? "better" : "higher"
    : delta > 0 ? "higher" : "lower";
  const sign = delta > 0 ? "+" : "";
  return `${direction} (${sign}${delta.toFixed(suffix === "%" ? 2 : 1)}${suffix})`;
}

function peerBenchmarkConfig() {
  const fund = selectedFund();
  const categoryPeers = FUNDS.filter((item) => item.category === fund.category);
  const sleevePeers = FUNDS.filter((item) => item.sleeve === fund.sleeve);
  const categoryAvg = peerMetricAverages(categoryPeers);
  const sleeveAvg = peerMetricAverages(sleevePeers);
  const sleeveRanked = [...sleevePeers].sort((a, b) => nadiScore(b) - nadiScore(a));
  const rank = sleeveRanked.findIndex((item) => item.id === fund.id) + 1;
  const nearby = sleeveRanked.filter((item) => item.id !== fund.id).slice(0, 3);
  const score = nadiScore(fund);
  const scoreDelta = score - sleeveAvg.score;
  const costDelta = fund.expense - sleeveAvg.expense;
  const drawdownDelta = fund.maxDrawdown - sleeveAvg.drawdown;
  const consistencyDelta = fund.consistency - sleeveAvg.consistency;
  let posture = "In-line peer";
  let postureTone = "medium";
  let nextQuestion = "What distinct role does this fund perform compared with nearby peers?";

  if (rank <= 2 && scoreDelta >= 0 && costDelta <= 0.1) {
    posture = "Peer leader";
    postureTone = "high";
    nextQuestion = "Does the fund's role remain distinct after checking cost, overlap, and evidence freshness?";
  } else if (costDelta > 0.12 || drawdownDelta > 5 || consistencyDelta < -5) {
    posture = "Needs peer review";
    postureTone = "low";
    nextQuestion = "Which peer offers the same role with better cost, drawdown, consistency, or evidence?";
  } else if (nearby.length < 2) {
    posture = "Thin demo peer set";
    postureTone = "medium";
    nextQuestion = "Add live category peers before treating the category benchmark as complete.";
  }

  return {
    categoryAvg,
    categoryPeers,
    costDelta,
    drawdownDelta,
    fund,
    nearby,
    nextQuestion,
    posture,
    postureTone,
    rank,
    score,
    scoreDelta,
    sleeveAvg,
    sleevePeers
  };
}

function renderPeerBenchmarkBoard() {
  if (!els.peerBenchOutput) return;
  const config = peerBenchmarkConfig();
  if (els.peerBenchSummary) {
    els.peerBenchSummary.textContent = `${config.rank} of ${config.sleevePeers.length} in sleeve`;
  }
  const metricRows = [
    ["Nadi score", `${config.score}/100`, `${config.categoryAvg.score.toFixed(0)}/100`, `${config.sleeveAvg.score.toFixed(0)}/100`, peerDeltaCopy(config.score, config.sleeveAvg.score)],
    ["Expense", `${config.fund.expense.toFixed(2)}%`, `${config.categoryAvg.expense.toFixed(2)}%`, `${config.sleeveAvg.expense.toFixed(2)}%`, peerDeltaCopy(config.fund.expense, config.sleeveAvg.expense, "%", true)],
    ["5Y demo", `${config.fund.returns5y.toFixed(1)}%`, `${config.categoryAvg.returns5y.toFixed(1)}%`, `${config.sleeveAvg.returns5y.toFixed(1)}%`, peerDeltaCopy(config.fund.returns5y, config.sleeveAvg.returns5y, "%")],
    ["Drawdown", `${config.fund.maxDrawdown}%`, `${config.categoryAvg.drawdown.toFixed(1)}%`, `${config.sleeveAvg.drawdown.toFixed(1)}%`, peerDeltaCopy(config.fund.maxDrawdown, config.sleeveAvg.drawdown, "%", true)],
    ["Consistency", `${config.fund.consistency}`, `${config.categoryAvg.consistency.toFixed(0)}`, `${config.sleeveAvg.consistency.toFixed(0)}`, peerDeltaCopy(config.fund.consistency, config.sleeveAvg.consistency)],
    ["Evidence", `${evidenceReadinessScore(config.fund)}/100`, `${config.categoryAvg.evidence.toFixed(0)}/100`, `${config.sleeveAvg.evidence.toFixed(0)}/100`, peerDeltaCopy(evidenceReadinessScore(config.fund), config.sleeveAvg.evidence)]
  ];
  const peerCards = config.nearby.length
    ? config.nearby.map((peer) => `
      <article class="peer-card">
        <span>${escapeHtml(peer.category)}</span>
        <strong>${escapeHtml(peer.name)}</strong>
        <p>${escapeHtml(peer.role)}</p>
        <div class="peer-mini-grid">
          <div><span>Nadi</span><strong>${nadiScore(peer)}/100</strong></div>
          <div><span>Expense</span><strong>${peer.expense.toFixed(2)}%</strong></div>
          <div><span>Drawdown</span><strong>${peer.maxDrawdown}%</strong></div>
        </div>
      </article>
    `).join("")
    : `<article class="peer-card"><span>Peer set</span><strong>More data needed</strong><p>Add live category and sleeve peers before drawing a stronger comparison.</p></article>`;

  els.peerBenchOutput.innerHTML = `
    <div class="peer-hero ${escapeHtml(config.postureTone)}">
      <div>
        <span class="metric-label">${escapeHtml(config.posture)}</span>
        <h3>${escapeHtml(config.fund.name)} peer lens</h3>
        <p>${escapeHtml(config.fund.category)} inside ${escapeHtml(config.fund.sleeve)} sleeve. Category peers: ${config.categoryPeers.length}. Sleeve peers: ${config.sleevePeers.length}.</p>
      </div>
      <div class="peer-rank">
        <b>${config.rank}</b>
        <span>of ${config.sleevePeers.length}</span>
      </div>
    </div>
    <div class="peer-table" role="table" aria-label="Peer benchmark metrics">
      <div class="peer-row peer-head" role="row">
        <span>Metric</span><span>Selected</span><span>Category avg</span><span>Sleeve avg</span><span>Signal</span>
      </div>
      ${metricRows.map((row) => `
        <div class="peer-row" role="row">
          ${row.map((cell) => `<span>${escapeHtml(cell)}</span>`).join("")}
        </div>
      `).join("")}
    </div>
    <div class="peer-card-grid">
      ${peerCards}
    </div>
    <div class="peer-guardrail">
      <strong>Next peer question</strong>
      <p>${escapeHtml(config.nextQuestion)}</p>
      <p>Peer ranking is research support only. Confirm live category data, factsheet dates, expense, riskometer, and role duplication before any decision.</p>
    </div>
  `;
}

function addPeerLeadersToCompare() {
  const config = peerBenchmarkConfig();
  state.compare = new Set([config.fund, ...config.nearby].slice(0, 4).map((fund) => fund.id));
  renderFundGrid();
  renderPortfolioChoices();
  renderFundDetail();
  renderGoalFundFitHeatmap();
  renderRedFlagRadar();
  renderSwitchDecisionLab();
  renderPeerBenchmarkBoard();
  renderCompareMatrix();
  analyzePortfolio();
  renderInvestorReadinessGate();
  renderDecisionPack();
  scrollToHash("#compare", "smooth", true);
}

function makePeerBenchmarkNote() {
  const config = peerBenchmarkConfig();
  return [
    "# NiveshNadi Peer Benchmark Board",
    `Release: ${RELEASE_LABEL} (${DATA_VERSION})`,
    `Fund: ${config.fund.name}`,
    `Category: ${config.fund.category}`,
    `Sleeve: ${config.fund.sleeve}`,
    `Peer posture: ${config.posture}`,
    `Sleeve rank: ${config.rank} of ${config.sleevePeers.length}`,
    `Nadi score: ${config.score}/100 versus sleeve average ${config.sleeveAvg.score.toFixed(0)}/100`,
    `Expense: ${config.fund.expense.toFixed(2)}% versus sleeve average ${config.sleeveAvg.expense.toFixed(2)}%`,
    `Drawdown: ${config.fund.maxDrawdown}% versus sleeve average ${config.sleeveAvg.drawdown.toFixed(1)}%`,
    `Consistency: ${config.fund.consistency} versus sleeve average ${config.sleeveAvg.consistency.toFixed(0)}`,
    "",
    "Nearby peer questions:",
    ...(config.nearby.length ? config.nearby.map((peer) => `- Compare with ${peer.name}: ${compareDecisionQuestion(peer)}`) : ["- Add live peers before relying on this demo peer set."]),
    "",
    `Next question: ${config.nextQuestion}`,
    "",
    "Research benchmark only. This is not a personalized recommendation, ranking promise, or return guarantee."
  ].join("\n");
}

function renderPortfolioChoices() {
  els.portfolioChoices.innerHTML = FUNDS.map((fund) => `
    <label class="choice">
      <input type="checkbox" data-portfolio-fund="${escapeHtml(fund.id)}" ${state.compare.has(fund.id) ? "checked" : ""}>
      <span>
        <strong>${escapeHtml(fund.name)}</strong>
        <span>${escapeHtml(fund.category)} | Expense ${fund.expense.toFixed(2)}%</span>
      </span>
    </label>
  `).join("");
}

function renderJournal() {
  const entries = loadJournal();
  if (!entries.length) {
    els.journalList.innerHTML = '<div class="empty-state">No decisions yet. Save one note before starting or changing an SIP.</div>';
    return;
  }

  els.journalList.innerHTML = entries.map((entry) => `
    <article class="journal-item">
      <h3>${escapeHtml(entry.decision)}: ${escapeHtml(entry.fund)}</h3>
      <p>${escapeHtml(entry.reason)}</p>
      <time datetime="${escapeHtml(entry.createdAt)}">${new Date(entry.createdAt).toLocaleString("en-IN")}</time>
    </article>
  `).join("");
}

function compareSet() {
  return FUNDS.filter((fund) => state.compare.has(fund.id));
}

function compareDecisionQuestion(fund) {
  if (fund.sleeve === "Debt") return "Is this fund for parking, income stability, or STP source discipline?";
  if (fund.sleeve === "Passive") return "Does this low-cost beta replace or duplicate an active core fund?";
  if (fund.category.includes("ELSS")) return "Is the tax role separate from the long-term equity allocation?";
  if (fund.risk === "Very High") return "Is the volatility role sized only after the core allocation is clear?";
  if (fund.sleeve === "Hybrid") return "Is this a smoother bridge fund or an unnecessary middle bucket?";
  return "What distinct job does this fund perform in the shortlist?";
}

function compareShortlistPosture(funds) {
  const categories = countBy(funds, "category");
  const sleeves = countBy(funds, "sleeve");
  const overlaps = holdingOverlapDetails(funds);
  const duplicate = duplicationLabel(duplicationScore(funds, overlaps, categories));
  const roleClarity = roleClarityLabel(funds);
  const expenseMin = funds.reduce((best, fund) => fund.expense < best.expense ? fund : best, funds[0]);
  const scoreMax = funds.reduce((best, fund) => nadiScore(fund) > nadiScore(best) ? fund : best, funds[0]);
  const evidenceMax = funds.reduce((best, fund) => evidenceReadinessScore(fund) > evidenceReadinessScore(best) ? fund : best, funds[0]);

  let title = "Research shortlist";
  let copy = "The selected funds are ready for side-by-side research. Compare role, cost, risk, and evidence readiness before writing a decision reason.";
  if (duplicate === "High") {
    title = "Overlap needs attention";
    copy = "This shortlist has repeated holdings or category crowding. Decide which fund earns each role before adding more funds.";
  } else if (roleClarity === "Balanced" || roleClarity === "Core-led") {
    title = `${roleClarity} shortlist`;
    copy = "The shortlist has a clearer structure. The next step is to confirm whether each fund has a different job and evidence base.";
  } else if (roleClarity === "Satellite-heavy") {
    title = "Satellite-heavy shortlist";
    copy = "The shortlist leans toward growth satellites. Check whether a core anchor exists before treating this as a portfolio.";
  }

  return {
    title,
    copy,
    duplicate,
    roleClarity,
    expenseMin,
    scoreMax,
    evidenceMax,
    overlapCount: overlaps.length,
    sleeves
  };
}

function renderCompareMatrix() {
  if (!els.compareMatrix || !els.compareSummary) return;
  const funds = compareSet();
  els.compareSummary.textContent = `${funds.length} selected`;

  if (funds.length < 2) {
    els.compareMatrix.innerHTML = '<div class="empty-state">Select two or more funds from the screener to compare role, cost, risk, evidence readiness, and decision questions.</div>';
    return;
  }

  const posture = compareShortlistPosture(funds);
  els.compareMatrix.innerHTML = `
    <div class="compare-hero">
      <div>
        <span class="metric-label">Shortlist posture</span>
        <strong>${escapeHtml(posture.title)}</strong>
        <p>${escapeHtml(posture.copy)}</p>
      </div>
      <div class="compare-count">
        <b>${funds.length}</b>
        <span>funds</span>
      </div>
    </div>
    <div class="compare-card-grid">
      ${funds.map((fund) => {
        const score = nadiScore(fund);
        const role = portfolioRole(fund);
        const evidence = evidenceReadinessScore(fund);
        return `
          <article class="compare-card">
            <div class="compare-card-head">
              <span class="tag ${riskClass(fund.risk)}">${escapeHtml(fund.risk)}</span>
              <strong>${escapeHtml(fund.name)}</strong>
              <p>${escapeHtml(fund.category)}</p>
            </div>
            <div class="compare-mini-grid">
              <div><span>Nadi</span><strong>${score}/100</strong></div>
              <div><span>Expense</span><strong>${fund.expense.toFixed(2)}%</strong></div>
              <div><span>5Y demo</span><strong>${fund.returns5y.toFixed(1)}%</strong></div>
              <div><span>Drawdown</span><strong>${fund.maxDrawdown}%</strong></div>
              <div><span>Consistency</span><strong>${fund.consistency}</strong></div>
              <div><span>Evidence</span><strong>${evidence}/100</strong></div>
            </div>
            <div class="compare-role">
              <span class="tag ${riskClass(role.tone)}">${escapeHtml(role.label)}</span>
              <p>${escapeHtml(role.reason)}</p>
            </div>
            <div class="compare-question">
              <span>Decision question</span>
              <p>${escapeHtml(compareDecisionQuestion(fund))}</p>
            </div>
          </article>
        `;
      }).join("")}
    </div>
    <div class="compare-check-grid">
      <div>
        <span class="metric-label">Role clarity</span>
        <strong>${escapeHtml(posture.roleClarity)}</strong>
        <p>Confirm every fund has a different job before turning this shortlist into an allocation.</p>
      </div>
      <div>
        <span class="metric-label">Duplication risk</span>
        <strong>${escapeHtml(posture.duplicate)}</strong>
        <p>${posture.overlapCount ? `${posture.overlapCount} repeated holding signal${posture.overlapCount > 1 ? "s" : ""} found in demo data.` : "No repeated top holdings in the demo set."}</p>
      </div>
      <div>
        <span class="metric-label">Cost anchor</span>
        <strong>${escapeHtml(posture.expenseMin.name)}</strong>
        <p>Lowest expense in this shortlist at ${posture.expenseMin.expense.toFixed(2)}%.</p>
      </div>
      <div>
        <span class="metric-label">Evidence anchor</span>
        <strong>${escapeHtml(posture.evidenceMax.name)}</strong>
        <p>Highest evidence readiness in this demo shortlist at ${evidenceReadinessScore(posture.evidenceMax)}/100.</p>
      </div>
    </div>
  `;
}

function makeCompareNote() {
  const funds = compareSet();
  if (funds.length < 2) return "Select two or more funds before copying a compare note.";
  const posture = compareShortlistPosture(funds);
  return [
    "# NiveshNadi Fund Compare Matrix",
    `Release: ${RELEASE_LABEL} (${DATA_VERSION})`,
    `Shortlist posture: ${posture.title}`,
    `Role clarity: ${posture.roleClarity}`,
    `Duplication risk: ${posture.duplicate}`,
    "",
    "## Funds",
    ...funds.map((fund) => [
      `- ${fund.name}`,
      `  Category: ${fund.category}`,
      `  Risk: ${fund.risk}`,
      `  Nadi score: ${nadiScore(fund)}/100`,
      `  Expense: ${fund.expense.toFixed(2)}%`,
      `  Drawdown: ${fund.maxDrawdown}%`,
      `  Evidence readiness: ${evidenceReadinessScore(fund)}/100`,
      `  Decision question: ${compareDecisionQuestion(fund)}`
    ].join("\n")),
    "",
    "Research support only. Confirm live factsheets, holdings date, expense, riskometer, and decision reason before acting."
  ].join("\n");
}

function renderAll() {
  renderSignalStrip();
  renderBuildTracker();
  renderProfileRoom();
  renderSelectionFunnel();
  renderShortlistReasonBoard();
  renderProofGapQueue();
  renderMemoClearanceDesk();
  renderClearanceSprintBoard();
  renderJourneyTimeline();
  renderResearchBriefing();
  renderBriefingVault();
  renderResearchMemory();
  renderPrivacyControlRoom();
  renderShareSafeExportRoom();
  renderConsentHandoffGate();
  renderFundGrid();
  renderStarterGuide();
  renderInvestorPassport();
  renderResearchLanes();
  renderResearchPulse();
  renderNadiCoach();
  renderCategoryPlaybook();
  renderFundDetail();
  renderSuitabilityPassport();
  renderGoalFundFitHeatmap();
  renderRedFlagRadar();
  renderPeerBenchmarkBoard();
  renderPortfolioChoices();
  renderBlueprintLab();
  renderCompareMatrix();
  renderStressLab();
  renderCostRealityLab();
  renderInvestorReadinessGate();
  renderRebalanceGuard();
  renderPortfolioReviewRoom();
  renderReviewVault();
  renderInvestorRecordDesk();
  renderResearchDossier();
  renderEvidenceLedger();
  renderCitationBinder();
  renderFundHouseLens();
  renderDataReadinessRoom();
  renderSourceQaQueue();
  renderSourceIntakeConsole();
  renderSourceDriftMonitor();
  renderClaimReleaseGate();
  renderClaimReleaseLedger();
  renderClaimRollbackConsole();
  renderCorrectionNoticeBuilder();
  renderCorrectionNoticeLedger();
  renderTrustCenter();
  renderActionPlanner();
  renderResearchBriefing();
  renderBriefingVault();
  renderResearchMemory();
  renderPrivacyControlRoom();
  renderShareSafeExportRoom();
  renderConsentHandoffGate();
  renderDocDecoder();
  renderGlossary();
  renderBehaviorGuard();
  renderClaimChecker();
  renderResearchReceipt();
  renderReceiptVault();
  renderReviewRhythmBoard();
  renderWatchlistRoom();
  renderDecisionPack();
}

function targetFromHash(hash) {
  if (!hash || hash === "#") return null;
  try {
    return document.getElementById(decodeURIComponent(hash.slice(1)));
  } catch {
    return null;
  }
}

function stickyHeaderOffset() {
  const header = document.querySelector(".app-header");
  if (!header) return 14;
  const headerStyle = window.getComputedStyle(header);
  if (headerStyle.position !== "sticky" && headerStyle.position !== "fixed") return 14;
  return Math.ceil(header.getBoundingClientRect().height) + 14;
}

function scrollToElement(element, behavior = "smooth") {
  if (!element) return;
  const reduceMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
  const top = Math.max(0, element.getBoundingClientRect().top + window.scrollY - stickyHeaderOffset());
  window.scrollTo({ top, behavior: reduceMotion ? "auto" : behavior });
}

function scrollToHash(hash, behavior = "smooth", updateHash = false) {
  const target = targetFromHash(hash);
  if (!target) return;
  scrollToElement(target, behavior);
  if (updateHash && window.location.hash !== hash) {
    window.history.pushState(null, "", hash);
  }
}

function settleHashNavigation() {
  const hash = window.location.hash;
  if (!targetFromHash(hash)) return;
  state.hashSettleUntil = Date.now() + 1600;
  updateWorkspaceNavigator(hash);
  requestAnimationFrame(() => scrollToHash(hash, "auto"));
  window.setTimeout(() => {
    updateWorkspaceNavigator(hash);
    scrollToHash(hash, "auto");
  }, 120);
  window.setTimeout(() => {
    updateWorkspaceNavigator(hash);
    scrollToHash(hash, "auto");
  }, 360);
  window.setTimeout(() => {
    updateWorkspaceNavigator(hash);
    scrollToHash(hash, "auto");
  }, 820);
  window.setTimeout(() => {
    updateWorkspaceNavigator(hash);
  }, 1500);
}

function workspaceOption(hash) {
  if (!els.workspaceJump || !hash) return null;
  return Array.from(els.workspaceJump.options).find((option) => option.value === hash) || null;
}

function workspaceHashFromViewport() {
  const sections = qsa(".workspace-band[id]");
  if (!sections.length) return "#screener";
  const offset = stickyHeaderOffset() + 28;
  let active = sections[0];
  for (const section of sections) {
    if (section.getBoundingClientRect().top <= offset) {
      active = section;
    } else {
      break;
    }
  }
  return `#${active.id}`;
}

function updateWorkspaceNavigator(hash = "") {
  const fallbackHash = hash && workspaceOption(hash) ? hash : workspaceHashFromViewport();
  const option = workspaceOption(fallbackHash);
  const activeHash = option ? fallbackHash : "";
  if (els.workspaceJump) {
    els.workspaceJump.value = activeHash;
  }
  if (els.workspaceStatus) {
    const group = option?.parentElement?.tagName === "OPTGROUP" ? option.parentElement.label : "Workspace";
    const label = option?.textContent?.trim() || "Screener";
    els.workspaceStatus.textContent = `${group}: ${label}`;
    els.workspaceStatus.title = `Current workspace: ${label}`;
  }
  if (els.navLinks) {
    els.navLinks.forEach((link) => {
      const isActive = link.getAttribute("href") === activeHash;
      if (isActive) link.setAttribute("aria-current", "page");
      else link.removeAttribute("aria-current");
    });
  }
}

window.addEventListener("load", settleHashNavigation);

function syncSearchInputs(value) {
  state.filters.search = value;
  els.searchInput.value = value;
  if (els.floatingSearchInput) els.floatingSearchInput.value = value;
  renderFundGrid();
  renderSelectionFunnel();
  renderShortlistReasonBoard();
  renderProofGapQueue();
  renderMemoClearanceDesk();
  renderClearanceSprintBoard();
}

function sharedHoldings(funds) {
  const counts = new Map();
  for (const fund of funds) {
    for (const holding of new Set(fund.holdings)) {
      counts.set(holding, (counts.get(holding) || 0) + 1);
    }
  }
  return Array.from(counts.entries())
    .filter(([, count]) => count > 1)
    .map(([holding]) => holding);
}

function holdingOverlapDetails(funds) {
  const map = new Map();
  for (const fund of funds) {
    for (const holding of new Set(fund.holdings)) {
      if (!map.has(holding)) map.set(holding, []);
      map.get(holding).push(fund.name);
    }
  }
  return Array.from(map.entries())
    .filter(([, names]) => names.length > 1)
    .sort((a, b) => b[1].length - a[1].length || a[0].localeCompare(b[0]))
    .map(([holding, names]) => ({ holding, count: names.length, names }));
}

function highestRisk(funds) {
  const rank = { Low: 1, Moderate: 2, High: 3, "Very High": 4 };
  return funds.reduce((highest, fund) => (
    (rank[fund.risk] || 0) > (rank[highest] || 0) ? fund.risk : highest
  ), "Low");
}

function portfolioRole(fund) {
  if (fund.sleeve === "Debt") {
    return fund.category.includes("Liquid")
      ? { label: "Cash parking", tone: "Low", reason: "Useful as a liquidity or STP source bucket." }
      : { label: "Debt stabilizer", tone: "Moderate", reason: "Can reduce equity-only volatility if credit and duration stay disciplined." };
  }
  if (fund.sleeve === "Passive") {
    return { label: "Core beta", tone: "Low", reason: "Low-cost market exposure that can anchor an equity sleeve." };
  }
  if (fund.sleeve === "Life Cycle") {
    return { label: "Glide path", tone: "Moderate", reason: "Goal-year style allocation that should be reviewed against horizon." };
  }
  if (fund.category.includes("Large Cap") || fund.category.includes("Balanced Hybrid")) {
    return { label: "Core candidate", tone: fund.risk, reason: "Can act as a central research bucket if duplication is controlled." };
  }
  if (fund.category.includes("Multi Asset")) {
    return { label: "Diversifier", tone: fund.risk, reason: "Adds cross-asset behavior, but should not hide unclear allocation logic." };
  }
  if (fund.category.includes("ELSS")) {
    return { label: "Tax-linked satellite", tone: fund.risk, reason: "Tax planning role with lock-in and equity drawdown risk." };
  }
  return { label: "Growth satellite", tone: fund.risk, reason: "Higher-volatility allocation that should be sized after core exposure is clear." };
}

function categoryCrowding(categories) {
  const values = Object.values(categories);
  return values.length ? Math.max(...values) : 0;
}

function duplicationScore(funds, overlapDetails, categories) {
  const repeatedHoldingSlots = overlapDetails.reduce((sum, item) => sum + item.count - 1, 0);
  const holdingScore = Math.round((repeatedHoldingSlots / Math.max(1, funds.length * 2)) * 55);
  const categoryScore = Math.max(0, categoryCrowding(categories) - 1) * 16;
  const sleeveScore = funds.filter((fund) => fund.risk === "Very High").length * 8;
  return Math.min(100, holdingScore + categoryScore + sleeveScore);
}

function duplicationLabel(score) {
  if (score >= 65) return "High";
  if (score >= 35) return "Moderate";
  return "Low";
}

function roleClarityLabel(funds) {
  const roles = funds.map((fund) => portfolioRole(fund).label);
  const hasCore = roles.some((role) => role.includes("Core"));
  const satelliteCount = roles.filter((role) => role.includes("satellite")).length;
  const stabilizerCount = roles.filter((role) => role.includes("Debt") || role.includes("Cash") || role.includes("Diversifier")).length;
  if (!hasCore && satelliteCount >= 2) return "Satellite-heavy";
  if (hasCore && satelliteCount <= 2 && stabilizerCount >= 1) return "Balanced";
  if (hasCore) return "Core-led";
  return "Needs thesis";
}

function portfolioThesis(funds, categories, sleeves, overlapDetails, duplication) {
  const equityLike = (sleeves.Equity || 0) + (sleeves.Passive || 0);
  const debtLike = sleeves.Debt || 0;
  const hybridLike = (sleeves.Hybrid || 0) + (sleeves["Life Cycle"] || 0);
  const crowdedCategory = Object.entries(categories).sort((a, b) => b[1] - a[1])[0];

  if (equityLike >= 3 && debtLike === 0 && hybridLike === 0) {
    return {
      title: "Growth-heavy equity stack",
      copy: "This set is mostly equity research. Before adding another growth fund, inspect overlap, drawdown, and whether each fund has a separate role."
    };
  }
  if (debtLike >= 1 && equityLike >= 1) {
    return {
      title: "Goal-aware mixed stack",
      copy: "This set mixes growth and stability buckets. Research the cash-flow job of each fund before deciding SIP, STP, or parking roles."
    };
  }
  if (overlapDetails.length && duplication === "High") {
    return {
      title: "Crowded overlap stack",
      copy: "Several selected funds repeat holdings or category exposure. The next research step is to decide which fund earns each role."
    };
  }
  if (crowdedCategory && crowdedCategory[1] > 1) {
    return {
      title: "Category-concentrated stack",
      copy: `${crowdedCategory[0]} appears more than once. Check if the duplicate category exposure is intentional or just habit.`
    };
  }
  return {
    title: "Early research shortlist",
    copy: "The selected set has enough variety for first-pass research. Use the role map and warnings before turning it into a real allocation."
  };
}

function xrayWarnings(funds, overlapDetails, categories, avgExpense, maxRisk, duplication) {
  const warnings = [];
  const crowded = Object.entries(categories).filter(([, count]) => count > 1);
  if (overlapDetails.length) {
    warnings.push(`${overlapDetails.length} shared holding${overlapDetails.length > 1 ? "s" : ""} found. Inspect whether repeated names are intentional.`);
  }
  if (crowded.length) {
    warnings.push(`Category crowding: ${formatCounts(Object.fromEntries(crowded))}. Avoid owning multiple funds for the same job without a written reason.`);
  }
  if (maxRisk === "Very High") {
    warnings.push("Very High risk fund present. Match it to horizon, drawdown comfort, and core allocation first.");
  }
  if (avgExpense > 0.55) {
    warnings.push(`Blended expense is ${avgExpense.toFixed(2)}%. Compare whether the extra cost is buying a distinct role.`);
  }
  if (duplication === "Low" && !warnings.length) {
    warnings.push("No major demo overlap detected. Still review live factsheet holdings before investing real money.");
  }
  return warnings;
}

function analyzePortfolio() {
  const funds = FUNDS.filter((fund) => state.compare.has(fund.id));
  if (funds.length < 2) {
    els.xrayOutput.innerHTML = "<p>Choose two or more funds to inspect overlap and duplication risk.</p>";
    return;
  }

  const overlapDetails = holdingOverlapDetails(funds);
  const categories = countBy(funds, "category");
  const sleeves = countBy(funds, "sleeve");
  const avgExpense = funds.reduce((sum, fund) => sum + fund.expense, 0) / funds.length;
  const avgScore = Math.round(funds.reduce((sum, fund) => sum + nadiScore(fund), 0) / funds.length);
  const maxRisk = highestRisk(funds);
  const duplicateScore = duplicationScore(funds, overlapDetails, categories);
  const duplication = duplicationLabel(duplicateScore);
  const roleClarity = roleClarityLabel(funds);
  const thesis = portfolioThesis(funds, categories, sleeves, overlapDetails, duplication);
  const warnings = xrayWarnings(funds, overlapDetails, categories, avgExpense, maxRisk, duplication);
  const roles = funds.map((fund) => ({ fund, role: portfolioRole(fund) }));
  const overlapCopy = overlapDetails.length
    ? overlapDetails.slice(0, 5).map((item) => `${item.holding} in ${item.count} funds`).join(" | ")
    : "No repeated top holdings in this demo set.";

  els.xrayOutput.innerHTML = `
    <div class="result-stack">
      <div class="risk-grid xray-metrics">
        <div><span class="metric-label">Blended score</span><strong>${avgScore}/100</strong></div>
        <div><span class="metric-label">Blended expense</span><strong>${avgExpense.toFixed(2)}%</strong></div>
        <div><span class="metric-label">Duplication score</span><strong>${duplicateScore}/100</strong></div>
        <div><span class="metric-label">Role clarity</span><strong>${escapeHtml(roleClarity)}</strong></div>
      </div>
      <div class="xray-thesis">
        <span class="metric-label">Portfolio thesis</span>
        <strong>${escapeHtml(thesis.title)}</strong>
        <p>${escapeHtml(thesis.copy)}</p>
      </div>
      <div class="xray-intelligence-grid">
        <div class="detail-panel">
          <h3>Role map</h3>
          <div class="role-list">
            ${roles.map(({ fund, role }) => `
              <article class="role-item">
                <span class="tag ${riskClass(role.tone)}">${escapeHtml(role.label)}</span>
                <strong>${escapeHtml(fund.name)}</strong>
                <p>${escapeHtml(role.reason)}</p>
              </article>
            `).join("")}
          </div>
        </div>
        <div class="detail-panel">
          <h3>Overlap warnings</h3>
          <ul class="warning-list">
            ${warnings.map((item) => `<li>${escapeHtml(item)}</li>`).join("")}
          </ul>
        </div>
      </div>
      <div class="xray-intelligence-grid">
        <div class="detail-panel">
          <h3>Category concentration</h3>
          <p>${escapeHtml(formatCounts(categories))}</p>
        </div>
        <div class="detail-panel">
          <h3>Asset sleeve mix</h3>
          <p>${escapeHtml(formatCounts(sleeves))}</p>
        </div>
        <div class="detail-panel">
          <h3>Shared holdings</h3>
          <p>${escapeHtml(overlapCopy)}</p>
        </div>
      </div>
      <div class="detail-panel">
        <h3>Research conclusion</h3>
        <p>Highest risk band is ${escapeHtml(maxRisk)} and duplication risk is ${escapeHtml(duplication)}. Use this X-Ray as research support only; confirm live factsheet holdings and write the decision reason before acting.</p>
      </div>
    </div>
  `;
}

function blueprintStyleLabel(value) {
  if (value === "growth") return "Growth-heavy draft";
  if (value === "stability") return "Stability-first draft";
  if (value === "tax") return "Tax-aware draft";
  return "Core-satellite draft";
}

function blueprintCadenceLabel(value) {
  if (value === "halfyear") return "Half-yearly";
  if (value === "annual") return "Annual";
  return "Quarterly";
}

function blueprintTone(score) {
  if (score >= 78) return "strong";
  if (score >= 62) return "watch";
  return "caution";
}

function blueprintPosture(score) {
  if (score >= 78) return "Balanced research draft";
  if (score >= 62) return "Needs guardrails";
  return "High-attention draft";
}

function blueprintFunds() {
  return FUNDS.filter((fund) => state.compare.has(fund.id));
}

function ensureBlueprintWeights(funds) {
  if (!funds.length) return;
  const missing = funds.filter((fund) => state.blueprintWeights[fund.id] === undefined);
  if (!missing.length) return;
  const existingTotal = funds.reduce((sum, fund) => sum + (Number(state.blueprintWeights[fund.id]) || 0), 0);
  const remaining = Math.max(0, 100 - existingTotal);
  const defaultWeight = Math.max(1, Math.round(remaining / missing.length) || Math.round(100 / funds.length));
  missing.forEach((fund) => {
    state.blueprintWeights[fund.id] = defaultWeight;
  });
}

function renderBlueprintWeights(funds) {
  if (!els.blueprintWeights) return;
  if (funds.length < 2) {
    els.blueprintWeights.innerHTML = '<div class="empty-state">Select two or more funds in X-Ray or Compare to set weights.</div>';
    return;
  }
  ensureBlueprintWeights(funds);
  els.blueprintWeights.innerHTML = funds.map((fund) => {
    const role = portfolioRole(fund);
    const value = Number(state.blueprintWeights[fund.id]) || 0;
    return `
      <label class="blueprint-weight-row">
        <span>
          <strong>${escapeHtml(fund.name)}</strong>
          <small>${escapeHtml(role.label)} | ${escapeHtml(fund.risk)} risk | TER ${fund.expense.toFixed(2)}%</small>
        </span>
        <input type="number" min="0" max="100" step="1" value="${value}" data-blueprint-weight="${escapeHtml(fund.id)}">
      </label>
    `;
  }).join("");
}

function normalizeBlueprintWeights() {
  const funds = blueprintFunds();
  ensureBlueprintWeights(funds);
  const total = funds.reduce((sum, fund) => sum + (Number(state.blueprintWeights[fund.id]) || 0), 0);
  if (!funds.length || total <= 0) return;
  let running = 0;
  funds.forEach((fund, index) => {
    const next = index === funds.length - 1
      ? Math.max(0, 100 - running)
      : Math.round(((Number(state.blueprintWeights[fund.id]) || 0) / total) * 100);
    state.blueprintWeights[fund.id] = next;
    running += next;
  });
  renderBlueprintLab();
  renderRebalanceGuard();
  renderPortfolioReviewRoom();
}

function weightedAverage(items, key) {
  return items.reduce((sum, item) => sum + item.weight * key(item.fund), 0) / 100;
}

function sleeveWeightMap(items) {
  return items.reduce((map, item) => {
    map[item.fund.sleeve] = (map[item.fund.sleeve] || 0) + item.weight;
    return map;
  }, {});
}

function sipFutureValue(monthly, years, annualReturn) {
  const months = Math.round(years * 12);
  const rate = annualReturn / 1200;
  if (months <= 0) return 0;
  if (rate <= 0) return monthly * months;
  return monthly * (((1 + rate) ** months - 1) / rate) * (1 + rate);
}

function blueprintConfig() {
  const funds = blueprintFunds();
  ensureBlueprintWeights(funds);
  const monthly = Math.round(clampNumber(Number(els.blueprintSip?.value) || 0, 0, 10000000));
  const years = Math.round(clampNumber(Number(els.blueprintYears?.value) || 10, 1, 40));
  const style = els.blueprintStyle?.value || "core";
  const cadence = els.blueprintCadence?.value || "quarterly";
  const enteredTotal = funds.reduce((sum, fund) => sum + (Number(state.blueprintWeights[fund.id]) || 0), 0);
  const total = enteredTotal > 0 ? enteredTotal : 1;
  const items = funds.map((fund) => ({
    fund,
    enteredWeight: Number(state.blueprintWeights[fund.id]) || 0,
    weight: ((Number(state.blueprintWeights[fund.id]) || 0) / total) * 100
  }));

  const overlapDetails = holdingOverlapDetails(funds);
  const categories = countBy(funds, "category");
  const duplicateScore = duplicationScore(funds, overlapDetails, categories);
  const duplication = duplicationLabel(duplicateScore);
  const sleeveMap = sleeveWeightMap(items);
  const highRiskWeight = items
    .filter((item) => item.fund.risk === "High" || item.fund.risk === "Very High")
    .reduce((sum, item) => sum + item.weight, 0);
  const stabilizerWeight = (sleeveMap.Debt || 0) + (sleeveMap.Hybrid || 0) + (sleeveMap["Life Cycle"] || 0);
  const equityWeight = (sleeveMap.Equity || 0) + (sleeveMap.Passive || 0);
  const blendedExpense = items.length ? weightedAverage(items, (fund) => fund.expense) : 0;
  const blendedScore = items.length ? Math.round(weightedAverage(items, nadiScore)) : 0;
  const blendedDrawdown = items.length ? weightedAverage(items, (fund) => fund.maxDrawdown) : 0;
  const blendedEvidence = items.length ? Math.round(weightedAverage(items, evidenceReadinessScore)) : 0;
  const expectedReturn = items.length ? weightedAverage(items, (fund) => fund.returns5y) : 0;
  const projectedValue = sipFutureValue(monthly, years, expectedReturn);
  const invested = monthly * years * 12;
  const guardrails = [];

  if (funds.length < 2) guardrails.push("Select at least two funds before treating this as a portfolio draft.");
  if (Math.round(enteredTotal) !== 100) guardrails.push(`Entered weights total ${Math.round(enteredTotal)}%. Normalize or explain the gap before saving a memo.`);
  if (style === "stability" && highRiskWeight > 45) guardrails.push("Stability-first draft has too much high-risk allocation for its stated research style.");
  if (style === "core" && stabilizerWeight < 15) guardrails.push("Core-satellite draft should explain why there is little stabilizer allocation.");
  if (style === "growth" && stabilizerWeight < 5) guardrails.push("Growth draft still needs behavior and drawdown guardrails before real money is considered.");
  if (style === "tax" && !funds.some((fund) => fund.category.includes("ELSS"))) guardrails.push("Tax-aware draft does not include an ELSS research candidate in the selected set.");
  if (duplication === "High") guardrails.push("High duplication risk: repeated holdings or categories need a written reason.");
  if (blendedExpense > 0.55) guardrails.push(`Blended TER is ${blendedExpense.toFixed(2)}%, so cost needs a Cost Lab review.`);
  if (blendedEvidence < 72) guardrails.push(`Blended evidence readiness is ${blendedEvidence}/100, so live citations are still a gating item.`);
  if (years < 5 && highRiskWeight > 50) guardrails.push("Shorter horizon and high equity risk need extra stress testing.");
  if (!guardrails.length) guardrails.push("No major demo blueprint guardrail triggered. Still verify live evidence, cost, overlap, and behavior before acting.");

  const blueprintScore = Math.round(clampNumber(
    blendedScore * 0.28 +
      blendedEvidence * 0.2 +
      (100 - duplicateScore) * 0.18 +
      (100 - Math.min(100, highRiskWeight * 0.75)) * 0.12 +
      (100 - Math.min(100, blendedExpense * 120)) * 0.12 +
      Math.min(100, stabilizerWeight + 35) * 0.1 -
      Math.max(0, guardrails.length - 2) * 5,
    25,
    94
  ));

  return {
    blendedDrawdown,
    blendedEvidence,
    blendedExpense,
    blendedScore,
    blueprintScore,
    cadence,
    duplicateScore,
    duplication,
    enteredTotal,
    equityWeight,
    expectedReturn,
    funds,
    guardrails,
    highRiskWeight,
    invested,
    items,
    monthly,
    posture: blueprintPosture(blueprintScore),
    projectedValue,
    sleeveMap,
    stabilizerWeight,
    style,
    tone: blueprintTone(blueprintScore),
    years
  };
}

function renderBlueprintLab(event) {
  if (event) event.preventDefault();
  if (!els.blueprintOutput) return;
  const config = blueprintConfig();
  renderBlueprintWeights(config.funds);

  if (config.funds.length < 2) {
    els.blueprintSummary.textContent = "Select funds";
    els.blueprintOutput.innerHTML = '<div class="empty-state">Select two or more funds in X-Ray or Compare to draft research-only weights.</div>';
    return;
  }

  els.blueprintSummary.textContent = `${config.blueprintScore}/100 blueprint`;
  const sleeveEntries = Object.entries(config.sleeveMap).sort((a, b) => b[1] - a[1]);

  els.blueprintOutput.innerHTML = `
    <div class="blueprint-hero ${escapeHtml(config.tone)}">
      <div>
        <span class="metric-label">${escapeHtml(config.posture)}</span>
        <h3>${escapeHtml(blueprintStyleLabel(config.style))}</h3>
        <p>${config.funds.length} selected funds with ${Math.round(config.enteredTotal)}% entered weight, ${formatMoney(config.monthly)} monthly SIP draft, and ${config.years} year horizon.</p>
      </div>
      <div class="blueprint-score" style="--score:${config.blueprintScore}">
        <b>${config.blueprintScore}</b>
        <span>Blueprint</span>
      </div>
    </div>
    <div class="blueprint-metric-grid">
      <div><span>Blended TER</span><strong>${config.blendedExpense.toFixed(2)}%</strong></div>
      <div><span>Blended evidence</span><strong>${config.blendedEvidence}/100</strong></div>
      <div><span>High-risk weight</span><strong>${config.highRiskWeight.toFixed(0)}%</strong></div>
      <div><span>Duplication</span><strong>${escapeHtml(config.duplication)}</strong></div>
      <div><span>Demo return</span><strong>${config.expectedReturn.toFixed(1)}%</strong></div>
      <div><span>Projected value</span><strong>${formatMoney(config.projectedValue)}</strong></div>
    </div>
    <div class="blueprint-sleeve-grid">
      ${sleeveEntries.map(([sleeve, weight]) => `
        <article class="blueprint-sleeve">
          <span>${escapeHtml(sleeve)}</span>
          <strong>${weight.toFixed(0)}%</strong>
          <div class="signal-meter" aria-hidden="true"><span style="width:${Math.min(100, weight)}%"></span></div>
        </article>
      `).join("")}
    </div>
    <div class="blueprint-fund-grid">
      ${config.items.map((item) => {
        const role = portfolioRole(item.fund);
        const amount = config.monthly * item.weight / 100;
        return `
          <article class="blueprint-fund-card">
            <div>
              <span class="tag ${riskClass(item.fund.risk)}">${escapeHtml(item.fund.risk)}</span>
              <span class="tag">${escapeHtml(role.label)}</span>
            </div>
            <strong>${escapeHtml(item.fund.name)}</strong>
            <p>${item.weight.toFixed(1)}% normalized weight | ${formatMoney(amount)} monthly draft</p>
            <small>${escapeHtml(role.reason)}</small>
          </article>
        `;
      }).join("")}
    </div>
    <div class="blueprint-card-grid">
      <article class="blueprint-card">
        <h3>Scenario math</h3>
        <p>${formatMoney(config.invested)} invested over ${config.years} years in this demo SIP draft. Projected value uses blended 5Y demo return only.</p>
      </article>
      <article class="blueprint-card">
        <h3>Review cadence</h3>
        <p>${escapeHtml(blueprintCadenceLabel(config.cadence))} review for weights, TER, evidence freshness, overlap, riskometer, and behavior.</p>
      </article>
      <article class="blueprint-card">
        <h3>Guardrails</h3>
        <ul class="blueprint-list">
          ${config.guardrails.slice(0, 5).map((item) => `<li>${escapeHtml(item)}</li>`).join("")}
        </ul>
      </article>
    </div>
    <div class="blueprint-guardrail">
      <strong>Blueprint rule</strong>
      <p>This is a research-only portfolio sketch. It is not an allocation recommendation, model portfolio, suitability certificate, or transaction instruction.</p>
    </div>
  `;
}

function makeBlueprintNote() {
  const config = blueprintConfig();
  if (config.funds.length < 2) return "Select two or more funds before copying a portfolio blueprint.";
  return [
    "# NiveshNadi Portfolio Blueprint Lab",
    `Release: ${RELEASE_LABEL} (${DATA_VERSION})`,
    `Blueprint style: ${blueprintStyleLabel(config.style)}`,
    `Posture: ${config.posture}`,
    `Blueprint score: ${config.blueprintScore}/100`,
    `Monthly SIP draft: ${formatMoney(config.monthly)}`,
    `Horizon: ${config.years} years`,
    `Entered weight total: ${Math.round(config.enteredTotal)}%`,
    `Review cadence: ${blueprintCadenceLabel(config.cadence)}`,
    "",
    "## Blended Signals",
    `- Blended TER: ${config.blendedExpense.toFixed(2)}%`,
    `- Blended score: ${config.blendedScore}/100`,
    `- Blended evidence: ${config.blendedEvidence}/100`,
    `- Blended drawdown: ${config.blendedDrawdown.toFixed(1)}%`,
    `- High-risk weight: ${config.highRiskWeight.toFixed(0)}%`,
    `- Duplication risk: ${config.duplication} (${config.duplicateScore}/100)`,
    `- Demo SIP projection: ${formatMoney(config.projectedValue)} on ${formatMoney(config.invested)} invested`,
    "",
    "## Fund Weights",
    ...config.items.map((item) => [
      `- ${item.fund.name}: ${item.weight.toFixed(1)}% normalized`,
      `  Category: ${item.fund.category}`,
      `  Role: ${portfolioRole(item.fund).label}`,
      `  Monthly draft: ${formatMoney(config.monthly * item.weight / 100)}`,
      `  TER: ${item.fund.expense.toFixed(2)}% | Risk: ${item.fund.risk}`
    ].join("\n")),
    "",
    "## Guardrails",
    ...config.guardrails.map((item) => `- ${item}`),
    "",
    "## Privacy boundary",
    "Research support only. This is not personalized investment advice, a model portfolio, allocation advice, or a transaction instruction."
  ].join("\n");
}

function rebalanceModeLabel(value) {
  if (value === "sip-route") return "Contribution-first route";
  if (value === "fresh-money") return "Fresh money correction";
  if (value === "advisor") return "Advisor discussion map";
  return "Review only";
}

function rebalanceTone(score) {
  if (score >= 78) return "strong";
  if (score >= 62) return "watch";
  return "caution";
}

function rebalancePosture(score) {
  if (score >= 78) return "Within research band";
  if (score >= 62) return "Needs contribution discipline";
  return "High-attention drift";
}

function rebalanceDriftSeed(fund, index) {
  const seed = Math.round((fund.returns3y + fund.consistency / 9 - fund.maxDrawdown / 3 + index * 2) % 11) - 5;
  if (fund.risk === "Very High") return seed + 2;
  if (fund.sleeve === "Debt") return seed - 2;
  return seed;
}

function ensureRebalanceWeights(items) {
  if (!items.length) return;
  items.forEach((item, index) => {
    if (state.rebalanceWeights[item.fund.id] !== undefined) return;
    state.rebalanceWeights[item.fund.id] = Math.round(clampNumber(item.weight + rebalanceDriftSeed(item.fund, index), 0, 100));
  });
}

function renderRebalanceCurrentWeights(items) {
  if (!els.rebalanceCurrentWeights) return;
  if (items.length < 2) {
    els.rebalanceCurrentWeights.innerHTML = '<div class="empty-state">Select two or more funds in X-Ray or Compare to enter current weights.</div>';
    return;
  }

  ensureRebalanceWeights(items);
  els.rebalanceCurrentWeights.innerHTML = items.map((item) => {
    const value = Number(state.rebalanceWeights[item.fund.id]) || 0;
    return `
      <label class="rebalance-weight-row">
        <span>
          <strong>${escapeHtml(item.fund.name)}</strong>
          <small>Target ${item.weight.toFixed(1)}% | ${escapeHtml(item.fund.category)} | ${escapeHtml(item.fund.risk)} risk</small>
        </span>
        <input type="number" min="0" max="100" step="1" value="${value}" data-rebalance-weight="${escapeHtml(item.fund.id)}">
      </label>
    `;
  }).join("");
}

function rebalanceConfig() {
  const blueprint = blueprintConfig();
  const items = blueprint.items;
  ensureRebalanceWeights(items);

  const corpus = Math.round(clampNumber(Number(els.rebalanceCorpus?.value) || 0, 0, 100000000));
  const monthly = Math.round(clampNumber(Number(els.rebalanceSip?.value) || blueprint.monthly || 0, 0, 10000000));
  const tolerance = Math.round(clampNumber(Number(els.rebalanceTolerance?.value) || 5, 1, 25));
  const mode = els.rebalanceMode?.value || "review";
  const enteredTotal = items.reduce((sum, item) => sum + (Number(state.rebalanceWeights[item.fund.id]) || 0), 0);
  const currentTotal = enteredTotal > 0 ? enteredTotal : 1;
  const currentItems = items.map((item) => ({
    fund: item.fund,
    weight: ((Number(state.rebalanceWeights[item.fund.id]) || 0) / currentTotal) * 100
  }));

  const rows = items.map((item) => {
    const enteredWeight = Number(state.rebalanceWeights[item.fund.id]) || 0;
    const currentWeight = (enteredWeight / currentTotal) * 100;
    const drift = currentWeight - item.weight;
    return {
      fund: item.fund,
      targetWeight: item.weight,
      enteredWeight,
      currentWeight,
      drift,
      driftValue: corpus * drift / 100,
      status: Math.abs(drift) >= tolerance ? "Attention" : "Within band"
    };
  });

  const totalAbsDrift = rows.reduce((sum, row) => sum + Math.abs(row.drift), 0) / 2;
  const largestDrift = rows.reduce((winner, row) => Math.abs(row.drift) > Math.abs(winner.drift) ? row : winner, rows[0] || null);
  const breached = rows.filter((row) => Math.abs(row.drift) >= tolerance);
  const underweight = rows.filter((row) => row.drift <= -tolerance).sort((a, b) => a.drift - b.drift);
  const overweight = rows.filter((row) => row.drift >= tolerance).sort((a, b) => b.drift - a.drift);
  const correctionBase = underweight.reduce((sum, row) => sum + Math.abs(row.drift), 0);
  const route = underweight.map((row) => ({
    fund: row.fund,
    gap: Math.abs(row.drift),
    amount: correctionBase > 0 ? monthly * Math.abs(row.drift) / correctionBase : 0
  }));

  const currentExpense = currentItems.length ? weightedAverage(currentItems, (fund) => fund.expense) : 0;
  const currentEvidence = currentItems.length ? Math.round(weightedAverage(currentItems, evidenceReadinessScore)) : 0;
  const currentHighRisk = currentItems
    .filter((item) => item.fund.risk === "High" || item.fund.risk === "Very High")
    .reduce((sum, item) => sum + item.weight, 0);
  const guardrails = [];

  if (items.length < 2) guardrails.push("Select at least two funds before treating this as a portfolio drift review.");
  if (Math.round(blueprint.enteredTotal) !== 100) guardrails.push(`Blueprint target totals ${Math.round(blueprint.enteredTotal)}%. Normalize the blueprint before reading drift too seriously.`);
  if (Math.round(enteredTotal) !== 100) guardrails.push(`Current weights total ${Math.round(enteredTotal)}%. Normalize or explain the difference before saving a review note.`);
  if (breached.length) guardrails.push(`${breached.length} fund${breached.length === 1 ? "" : "s"} outside the ${tolerance}% drift band need evidence and behavior review.`);
  if (currentHighRisk > blueprint.highRiskWeight + tolerance) guardrails.push(`Current high-risk weight is ${currentHighRisk.toFixed(0)}% versus target ${blueprint.highRiskWeight.toFixed(0)}%.`);
  if (currentExpense > blueprint.blendedExpense + 0.05) guardrails.push(`Current TER is ${currentExpense.toFixed(2)}%, higher than target TER ${blueprint.blendedExpense.toFixed(2)}%.`);
  if (currentEvidence < 72) guardrails.push(`Current evidence readiness is ${currentEvidence}/100, so source citations remain a launch gate.`);
  if ((mode === "sip-route" || mode === "fresh-money") && monthly <= 0) guardrails.push("Contribution route selected but future SIP amount is zero.");
  if (mode === "advisor") guardrails.push("Keep this as an advisor discussion map, not a pre-filled transaction instruction.");
  if (!guardrails.length) guardrails.push("No major demo drift guardrail triggered. Still review source dates, TER, overlap, tax, exit load, and behavior before any change.");

  const rebalanceScore = Math.round(clampNumber(
    blueprint.blueprintScore -
      Math.min(34, totalAbsDrift * 1.45) -
      Math.min(14, Math.abs(enteredTotal - 100) * 0.5) -
      breached.length * 3 +
      (route.length && monthly > 0 ? 4 : 0),
    24,
    94
  ));

  return {
    blueprint,
    breached,
    corpus,
    currentEvidence,
    currentExpense,
    currentHighRisk,
    currentItems,
    enteredTotal,
    funds: blueprint.funds,
    guardrails,
    largestDrift,
    mode,
    monthly,
    overweight,
    posture: rebalancePosture(rebalanceScore),
    rebalanceScore,
    rows,
    route,
    tolerance,
    tone: rebalanceTone(rebalanceScore),
    totalAbsDrift,
    underweight
  };
}

function renderRebalanceGuard(event) {
  if (event) event.preventDefault();
  if (!els.rebalanceOutput) return;
  const config = rebalanceConfig();
  renderRebalanceCurrentWeights(config.blueprint.items);

  if (config.funds.length < 2) {
    els.rebalanceSummary.textContent = "Select funds";
    els.rebalanceOutput.innerHTML = '<div class="empty-state">Select two or more funds in X-Ray or Compare to review drift against a blueprint.</div>';
    return;
  }

  els.rebalanceSummary.textContent = `${config.breached.length} outside band`;
  const routeCopy = config.route.length
    ? config.route.map((item) => `
      <article class="rebalance-route-card">
        <span>Research route</span>
        <strong>${escapeHtml(item.fund.name)}</strong>
        <p>${formatMoney(item.amount)} of the demo future SIP route because this sleeve is ${item.gap.toFixed(1)}% below target.</p>
      </article>
    `).join("")
    : '<article class="rebalance-route-card"><span>Research route</span><strong>No contribution correction flagged</strong><p>The demo current weights are not below target beyond tolerance. Keep the review focused on evidence, cost, overlap, and behavior.</p></article>';

  els.rebalanceOutput.innerHTML = `
    <div class="rebalance-hero ${escapeHtml(config.tone)}">
      <div>
        <span class="metric-label">${escapeHtml(config.posture)}</span>
        <h3>${escapeHtml(rebalanceModeLabel(config.mode))}</h3>
        <p>${config.funds.length} selected funds, ${config.tolerance}% drift tolerance, ${formatMoney(config.corpus)} current value, and ${formatMoney(config.monthly)} future monthly route.</p>
      </div>
      <div class="rebalance-score" style="--score:${config.rebalanceScore}">
        <b>${config.rebalanceScore}</b>
        <span>Guard</span>
      </div>
    </div>
    <div class="rebalance-metric-grid">
      <div><span>Total drift</span><strong>${config.totalAbsDrift.toFixed(1)}%</strong></div>
      <div><span>Outside band</span><strong>${config.breached.length}</strong></div>
      <div><span>Current TER</span><strong>${config.currentExpense.toFixed(2)}%</strong></div>
      <div><span>Target TER</span><strong>${config.blueprint.blendedExpense.toFixed(2)}%</strong></div>
      <div><span>Current high risk</span><strong>${config.currentHighRisk.toFixed(0)}%</strong></div>
      <div><span>Evidence</span><strong>${config.currentEvidence}/100</strong></div>
    </div>
    <div class="rebalance-drift-grid">
      ${config.rows.map((row) => `
        <article class="rebalance-drift-card ${Math.abs(row.drift) >= config.tolerance ? "attention" : "calm"}">
          <span>${escapeHtml(row.status)}</span>
          <strong>${escapeHtml(row.fund.name)}</strong>
          <p>Target ${row.targetWeight.toFixed(1)}% | Current ${row.currentWeight.toFixed(1)}% | Drift ${row.drift > 0 ? "+" : ""}${row.drift.toFixed(1)}%</p>
          <div class="rebalance-bar" aria-hidden="true"><span style="width:${Math.min(100, Math.abs(row.drift) * 8)}%"></span></div>
        </article>
      `).join("")}
    </div>
    <div class="rebalance-card-grid">
      <article class="rebalance-card">
        <h3>Future contribution route</h3>
        <div class="rebalance-route-grid">${routeCopy}</div>
      </article>
      <article class="rebalance-card">
        <h3>Overweight watch</h3>
        <ul class="rebalance-list">
          ${config.overweight.length
            ? config.overweight.slice(0, 4).map((row) => `<li>${escapeHtml(row.fund.name)} is ${row.drift.toFixed(1)}% above target. Review before adding more.</li>`).join("")
            : "<li>No selected fund is above target beyond the tolerance band.</li>"}
        </ul>
      </article>
      <article class="rebalance-card">
        <h3>Guardrails</h3>
        <ul class="rebalance-list">
          ${config.guardrails.slice(0, 6).map((item) => `<li>${escapeHtml(item)}</li>`).join("")}
        </ul>
      </article>
    </div>
    <div class="rebalance-guardrail">
      <strong>Rebalance rule</strong>
      <p>This guard reviews drift and contribution discipline only. It is not buy, sell, switch, redemption, tax, suitability, or personalized allocation advice.</p>
    </div>
  `;
}

function makeRebalanceNote() {
  const config = rebalanceConfig();
  if (config.funds.length < 2) return "Select two or more funds before copying a rebalance guard note.";
  return [
    "# NiveshNadi Rebalance Guard",
    `Release: ${RELEASE_LABEL} (${DATA_VERSION})`,
    `Mode: ${rebalanceModeLabel(config.mode)}`,
    `Posture: ${config.posture}`,
    `Guard score: ${config.rebalanceScore}/100`,
    `Current portfolio value: ${formatMoney(config.corpus)}`,
    `Future monthly route: ${formatMoney(config.monthly)}`,
    `Drift tolerance: ${config.tolerance}%`,
    `Current weight total entered: ${Math.round(config.enteredTotal)}%`,
    "",
    "## Drift Map",
    ...config.rows.map((row) => `- ${row.fund.name}: target ${row.targetWeight.toFixed(1)}%, current ${row.currentWeight.toFixed(1)}%, drift ${row.drift > 0 ? "+" : ""}${row.drift.toFixed(1)}%, status ${row.status}`),
    "",
    "## Future Contribution Research Route",
    ...(config.route.length
      ? config.route.map((item) => `- ${item.fund.name}: ${formatMoney(item.amount)} demo route because gap is ${item.gap.toFixed(1)}% below target.`)
      : ["- No underweight fund breached the drift tolerance in this demo review."]),
    "",
    "## Guardrails",
    ...config.guardrails.map((item) => `- ${item}`),
    "",
    "## Guardrail",
    "Research support only. This is not personalized investment advice, a model portfolio, rebalancing instruction, tax advice, suitability certificate, or transaction instruction."
  ].join("\n");
}

function addRebalanceReviewTrigger() {
  const config = rebalanceConfig();
  if (config.funds.length < 2) {
    toast("Select two or more funds before saving a drift review.");
    return;
  }

  config.funds.forEach((fund) => addToWatchlist(fund.id, false));
  const reviewDate = dateInputFromDate(addDays(new Date(), config.breached.length ? 30 : 90));
  const note = `Rebalance Guard: total drift ${config.totalAbsDrift.toFixed(1)}%, tolerance ${config.tolerance}%, mode ${rebalanceModeLabel(config.mode)}.`;
  const alerts = [
    ...config.funds.map((fund) => ({
      id: `rebalance-${Date.now()}-${fund.id}-${Math.random().toString(16).slice(2)}`,
      fundId: fund.id,
      trigger: "review",
      limit: reviewDate,
      note,
      createdAt: new Date().toISOString()
    })),
    ...loadAlerts()
  ].slice(0, 60);
  saveAlerts(alerts);
  renderPortfolioReviewRoom();
  renderReviewVault();
  renderInvestorRecordDesk();
  renderResearchDossier();
  renderWatchlistRoom();
  renderReviewRhythmBoard();
  toast("Rebalance review trigger saved.");
}

function portfolioReviewFocusLabel(value) {
  if (value === "drift") return "Drift and contribution review";
  if (value === "evidence") return "Evidence and source refresh";
  if (value === "cost") return "Cost and overlap audit";
  if (value === "behavior") return "Behavior and stress review";
  return "Quarterly portfolio review";
}

function portfolioReviewConvictionLabel(value) {
  if (value === "low") return "Low - collect more evidence";
  if (value === "high") return "High - document and monitor";
  return "Medium - keep researching";
}

function portfolioReviewTone(score) {
  if (score >= 78) return "strong";
  if (score >= 62) return "watch";
  return "caution";
}

function portfolioReviewPosture(score) {
  if (score >= 78) return "Review file is orderly";
  if (score >= 62) return "Review queue needs work";
  return "High-attention review";
}

function reviewLaneTone(score) {
  if (score >= 78) return "strong";
  if (score >= 62) return "watch";
  return "caution";
}

function portfolioReviewConfig() {
  const rebalance = rebalanceConfig();
  const blueprint = rebalance.blueprint;
  const funds = blueprint.funds.length ? blueprint.funds : [selectedFund()];
  const focus = els.portfolioReviewFocus?.value || "quarterly";
  const reviewDate = els.portfolioReviewDate?.value || dateInputFromDate(addDays(new Date(), 60));
  const conviction = els.portfolioReviewConviction?.value || "medium";
  const note = els.portfolioReviewNote?.value.trim() || "";
  const fundIds = new Set(funds.map((fund) => fund.id));
  const watchlist = loadWatchlist();
  const watchedCount = watchlist.filter((entry) => fundIds.has(entry.fundId)).length;
  const alerts = loadAlerts().filter((alert) => fundIds.has(alert.fundId));
  const evaluatedAlerts = alerts.map((alert) => {
    const fund = FUNDS.find((item) => item.id === alert.fundId);
    return fund ? { alert, fund, evaluation: evaluateAlert(alert, fund) } : null;
  }).filter(Boolean);
  const attentionAlerts = evaluatedAlerts.filter((item) => item.evaluation.status === "attention");
  const avgEvidence = funds.length
    ? Math.round(funds.reduce((sum, fund) => sum + evidenceReadinessScore(fund), 0) / funds.length)
    : 0;
  const avgScore = funds.length
    ? Math.round(funds.reduce((sum, fund) => sum + nadiScore(fund), 0) / funds.length)
    : 0;
  const avgExpense = funds.length
    ? funds.reduce((sum, fund) => sum + fund.expense, 0) / funds.length
    : 0;
  const maxDrawdown = funds.length ? Math.max(...funds.map((fund) => fund.maxDrawdown)) : 0;
  const highRiskCount = funds.filter((fund) => fund.risk === "High" || fund.risk === "Very High").length;
  const categories = countBy(funds, "category");
  const duplicateScore = funds.length > 1 ? duplicationScore(funds, holdingOverlapDetails(funds), categories) : 0;
  const daysToReview = daysUntil(reviewDate);

  const driftScore = Math.round(clampNumber(100 - rebalance.totalAbsDrift * 2.2 - rebalance.breached.length * 8, 25, 96));
  const evidenceScore = Math.round(clampNumber(avgEvidence - (avgEvidence < 72 ? 8 : 0), 25, 96));
  const costScore = Math.round(clampNumber(96 - avgExpense * 95 - (duplicateScore > 55 ? 8 : 0), 25, 96));
  const behaviorScore = Math.round(clampNumber(94 - maxDrawdown * 1.4 - highRiskCount * 4 + (conviction === "low" ? 4 : 0), 25, 96));
  const rhythmScore = Math.round(clampNumber(55 + Math.min(25, watchedCount * 8) + Math.min(20, alerts.length * 4) - attentionAlerts.length * 8, 25, 96));

  const lanes = [
    {
      title: "Drift",
      score: driftScore,
      detail: `${rebalance.totalAbsDrift.toFixed(1)}% total drift and ${rebalance.breached.length} fund${rebalance.breached.length === 1 ? "" : "s"} outside tolerance.`,
      next: rebalance.breached.length ? "Review Rebalance Guard before increasing future contribution routes." : "Keep drift in the next review file."
    },
    {
      title: "Evidence",
      score: evidenceScore,
      detail: `${avgEvidence}/100 average evidence readiness across the review set.`,
      next: avgEvidence < 72 ? "Refresh source dates, factsheet, SID/KIM, portfolio disclosure, TER, and benchmark citations." : "Attach citations when live data is connected."
    },
    {
      title: "Cost and overlap",
      score: costScore,
      detail: `${avgExpense.toFixed(2)}% average TER with ${duplicationLabel(duplicateScore)} duplication risk.`,
      next: avgExpense > 0.55 || duplicateScore > 55 ? "Run Cost Lab and X-Ray before writing the decision pack." : "Document why each selected fund has a distinct job."
    },
    {
      title: "Behavior",
      score: behaviorScore,
      detail: `${maxDrawdown}% highest demo drawdown and ${highRiskCount} high-risk fund${highRiskCount === 1 ? "" : "s"}.`,
      next: maxDrawdown > 24 ? "Run Stress Lab and write the behavior note before any real-world change." : "Keep a stress checkpoint in the review note."
    },
    {
      title: "Rhythm",
      score: rhythmScore,
      detail: `${watchedCount} watched fund${watchedCount === 1 ? "" : "s"} and ${alerts.length} saved trigger${alerts.length === 1 ? "" : "s"} in this review set.`,
      next: attentionAlerts.length ? "Resolve attention triggers before moving the memo forward." : "Save a review trigger so the file has a follow-up date."
    }
  ];

  const queue = [];
  if (focus === "drift" || rebalance.breached.length) queue.push("Open Rebalance Guard and explain any fund outside the tolerance band.");
  if (focus === "evidence" || avgEvidence < 72) queue.push("Open Evidence Ledger and check source date, citation path, and demo/live status.");
  if (focus === "cost" || avgExpense > 0.55 || duplicateScore > 55) queue.push("Run Cost Lab and Portfolio X-Ray to review TER drag and repeated exposure.");
  if (focus === "behavior" || maxDrawdown > 24 || highRiskCount > 2) queue.push("Run Stress Lab and write what the investor should review during a drawdown.");
  if (attentionAlerts.length) queue.push(`${attentionAlerts.length} watchlist trigger${attentionAlerts.length === 1 ? "" : "s"} need attention before the pack is refreshed.`);
  if (!note) queue.push("Write a plain-English review note before saving this file.");
  if (daysToReview !== null && daysToReview < 0) queue.push("The chosen review date is already past. Set a future review date before saving.");
  if (!queue.length) queue.push("No major demo review blocker triggered. Still keep evidence, cost, drift, and behavior checks attached to the memo.");

  const score = Math.round(clampNumber(
    lanes.reduce((sum, lane) => sum + lane.score, 0) / lanes.length -
      Math.max(0, queue.length - 2) * 3 +
      (note ? 4 : 0),
    25,
    94
  ));

  return {
    alerts,
    attentionAlerts,
    avgEvidence,
    avgExpense,
    avgScore,
    blueprint,
    conviction,
    daysToReview,
    duplicateScore,
    focus,
    funds,
    highRiskCount,
    lanes,
    maxDrawdown,
    note,
    posture: portfolioReviewPosture(score),
    queue,
    rebalance,
    reviewDate,
    score,
    tone: portfolioReviewTone(score),
    watchedCount
  };
}

function renderPortfolioReviewRoom(event) {
  if (event) event.preventDefault();
  if (!els.portfolioReviewOutput) return;
  const config = portfolioReviewConfig();
  els.portfolioReviewSummary.textContent = `${config.queue.length} checkpoint${config.queue.length === 1 ? "" : "s"}`;

  els.portfolioReviewOutput.innerHTML = `
    <div class="review-room-hero ${escapeHtml(config.tone)}">
      <div>
        <span class="metric-label">${escapeHtml(config.posture)}</span>
        <h3>${escapeHtml(portfolioReviewFocusLabel(config.focus))}</h3>
        <p>${config.funds.length} fund${config.funds.length === 1 ? "" : "s"} in review, ${escapeHtml(portfolioReviewConvictionLabel(config.conviction))}, next review ${escapeHtml(config.reviewDate)}.</p>
      </div>
      <div class="review-room-score" style="--score:${config.score}">
        <b>${config.score}</b>
        <span>Review</span>
      </div>
    </div>
    <div class="review-room-metric-grid">
      <div><span>Avg Nadi score</span><strong>${config.avgScore}/100</strong></div>
      <div><span>Evidence</span><strong>${config.avgEvidence}/100</strong></div>
      <div><span>Avg TER</span><strong>${config.avgExpense.toFixed(2)}%</strong></div>
      <div><span>Drift</span><strong>${config.rebalance.totalAbsDrift.toFixed(1)}%</strong></div>
      <div><span>Watch triggers</span><strong>${config.alerts.length}</strong></div>
      <div><span>Attention</span><strong>${config.attentionAlerts.length}</strong></div>
    </div>
    <div class="review-room-lane-grid">
      ${config.lanes.map((lane) => `
        <article class="review-room-lane ${escapeHtml(reviewLaneTone(lane.score))}">
          <span>${escapeHtml(lane.title)}</span>
          <strong>${lane.score}/100</strong>
          <p>${escapeHtml(lane.detail)}</p>
          <small>${escapeHtml(lane.next)}</small>
        </article>
      `).join("")}
    </div>
    <div class="review-room-card-grid">
      <article class="review-room-card">
        <h3>Review queue</h3>
        <ul class="review-room-list">
          ${config.queue.slice(0, 6).map((item) => `<li>${escapeHtml(item)}</li>`).join("")}
        </ul>
      </article>
      <article class="review-room-card">
        <h3>Fund file</h3>
        <div class="review-room-fund-list">
          ${config.funds.map((fund) => `
            <div>
              <strong>${escapeHtml(fund.name)}</strong>
              <span>${escapeHtml(fund.category)} | ${escapeHtml(fund.risk)} risk | TER ${fund.expense.toFixed(2)}%</span>
            </div>
          `).join("")}
        </div>
      </article>
      <article class="review-room-card">
        <h3>Review note</h3>
        <p>${escapeHtml(config.note || "No written note yet. Write the reason, evidence gap, or review question before saving the review file.")}</p>
      </article>
    </div>
    <div class="review-room-guardrail">
      <strong>Review rule</strong>
      <p>This room organizes research checkpoints only. It is not a portfolio recommendation, transaction instruction, tax opinion, suitability certificate, or execution workflow.</p>
    </div>
  `;
}

function makePortfolioReviewNote() {
  const config = portfolioReviewConfig();
  return [
    "# NiveshNadi Portfolio Review Room",
    `Release: ${RELEASE_LABEL} (${DATA_VERSION})`,
    `Focus: ${portfolioReviewFocusLabel(config.focus)}`,
    `Review score: ${config.score}/100`,
    `Posture: ${config.posture}`,
    `Conviction: ${portfolioReviewConvictionLabel(config.conviction)}`,
    `Next review date: ${config.reviewDate}`,
    "",
    "## Review Metrics",
    `- Average Nadi score: ${config.avgScore}/100`,
    `- Average evidence readiness: ${config.avgEvidence}/100`,
    `- Average TER: ${config.avgExpense.toFixed(2)}%`,
    `- Total drift: ${config.rebalance.totalAbsDrift.toFixed(1)}%`,
    `- Outside drift band: ${config.rebalance.breached.length}`,
    `- Watchlist triggers: ${config.alerts.length}`,
    `- Attention triggers: ${config.attentionAlerts.length}`,
    "",
    "## Lanes",
    ...config.lanes.map((lane) => `- ${lane.title}: ${lane.score}/100. ${lane.detail} Next: ${lane.next}`),
    "",
    "## Review Queue",
    ...config.queue.map((item) => `- ${item}`),
    "",
    "## Funds",
    ...config.funds.map((fund) => `- ${fund.name}: ${fund.category}, ${fund.risk} risk, TER ${fund.expense.toFixed(2)}%, evidence ${evidenceReadinessScore(fund)}/100`),
    "",
    "## User Note",
    config.note || "No user note entered.",
    "",
    "## Guardrail",
    "Research support only. This is not personalized investment advice, a model portfolio, rebalancing instruction, tax advice, suitability certificate, or transaction instruction."
  ].join("\n");
}

function savePortfolioReviewTrigger() {
  const config = portfolioReviewConfig();
  const reviewDate = config.reviewDate || dateInputFromDate(addDays(new Date(), 60));
  const note = `Portfolio Review Room: ${portfolioReviewFocusLabel(config.focus)} | score ${config.score}/100 | ${config.queue.length} checkpoint${config.queue.length === 1 ? "" : "s"}.`;
  config.funds.forEach((fund) => addToWatchlist(fund.id, false));
  const alerts = [
    ...config.funds.map((fund) => ({
      id: `portfolio-review-${Date.now()}-${fund.id}-${Math.random().toString(16).slice(2)}`,
      fundId: fund.id,
      trigger: "review",
      limit: reviewDate,
      note,
      createdAt: new Date().toISOString()
    })),
    ...loadAlerts()
  ].slice(0, 60);
  saveAlerts(alerts);
  renderPortfolioReviewRoom();
  renderReviewVault();
  renderInvestorRecordDesk();
  renderResearchDossier();
  renderWatchlistRoom();
  renderResearchReceipt();
  renderReceiptVault();
  renderReviewRhythmBoard();
  toast("Portfolio review trigger saved.");
}

function reviewVaultDelta(value, priorValue, suffix = "") {
  if (priorValue === null || priorValue === undefined) return "New";
  const delta = value - priorValue;
  if (Math.abs(delta) < 0.05) return `0${suffix}`;
  return `${delta > 0 ? "+" : ""}${Number.isInteger(delta) ? delta : delta.toFixed(1)}${suffix}`;
}

function reviewSnapshotFromConfig(config) {
  return {
    id: `review-${Date.now()}-${Math.random().toString(16).slice(2)}`,
    createdAt: new Date().toISOString(),
    release: RELEASE_LABEL,
    dataVersion: DATA_VERSION,
    focus: config.focus,
    focusLabel: portfolioReviewFocusLabel(config.focus),
    reviewDate: config.reviewDate,
    conviction: config.conviction,
    convictionLabel: portfolioReviewConvictionLabel(config.conviction),
    score: config.score,
    posture: config.posture,
    metrics: {
      avgScore: config.avgScore,
      evidence: config.avgEvidence,
      expense: Number(config.avgExpense.toFixed(2)),
      drift: Number(config.rebalance.totalAbsDrift.toFixed(1)),
      outsideBand: config.rebalance.breached.length,
      attention: config.attentionAlerts.length,
      triggers: config.alerts.length,
      queue: config.queue.length
    },
    funds: config.funds.map((fund) => ({
      id: fund.id,
      name: fund.name,
      category: fund.category,
      risk: fund.risk
    })),
    queue: config.queue.slice(0, 6),
    noteStatus: config.note ? "Written note present" : "No written note"
  };
}

function saveCurrentReviewSnapshot() {
  const config = portfolioReviewConfig();
  const snapshot = reviewSnapshotFromConfig(config);
  const entries = [snapshot, ...loadReviewVault()].slice(0, 16);
  saveReviewVault(entries);
  renderReviewVault();
  renderInvestorRecordDesk();
  renderResearchDossier();
  renderJourneyTimeline();
  renderResearchMemory();
  renderPrivacyControlRoom();
  toast("Review snapshot saved locally.");
}

function clearReviewVault() {
  saveReviewVault([]);
  renderReviewVault();
  renderInvestorRecordDesk();
  renderResearchDossier();
  renderJourneyTimeline();
  renderResearchMemory();
  renderPrivacyControlRoom();
  toast("Review vault cleared.");
}

function renderReviewVault() {
  if (!els.reviewVaultOutput || !els.reviewVaultSummary) return;
  const entries = loadReviewVault();
  const current = reviewSnapshotFromConfig(portfolioReviewConfig());
  const latest = entries[0] || null;
  const prior = entries[1] || null;
  const scoreDelta = latest ? reviewVaultDelta(latest.score, prior?.score) : "New";
  const driftDelta = latest ? reviewVaultDelta(latest.metrics.drift, prior?.metrics.drift, "%") : "New";
  const evidenceDelta = latest ? reviewVaultDelta(latest.metrics.evidence, prior?.metrics.evidence) : "New";

  els.reviewVaultSummary.textContent = `${entries.length} snapshot${entries.length === 1 ? "" : "s"}`;

  if (!entries.length) {
    els.reviewVaultOutput.innerHTML = `
      <div class="review-vault-empty">
        <div>
          <span class="metric-label">Current review preview</span>
          <h3>${current.score}/100 ${escapeHtml(current.focusLabel)}</h3>
          <p>Save a snapshot to begin a browser-local review history. The vault stores scores, metrics, fund names, and queue items only; it does not store PAN, folio, CAS, or account data.</p>
        </div>
        <div class="review-vault-score" style="--score:${current.score}">
          <b>${current.score}</b>
          <span>Now</span>
        </div>
      </div>
    `;
    return;
  }

  els.reviewVaultOutput.innerHTML = `
    <div class="review-vault-hero">
      <div>
        <span class="metric-label">Latest local snapshot</span>
        <h3>${latest.score}/100 ${escapeHtml(latest.focusLabel)}</h3>
        <p>${escapeHtml(latest.posture)} | Saved ${new Date(latest.createdAt).toLocaleString("en-IN")} | ${latest.funds.length} fund${latest.funds.length === 1 ? "" : "s"} tracked.</p>
      </div>
      <div class="review-vault-score" style="--score:${latest.score}">
        <b>${latest.score}</b>
        <span>Vault</span>
      </div>
    </div>
    <div class="review-vault-metric-grid">
      <div><span>Score delta</span><strong>${escapeHtml(scoreDelta)}</strong></div>
      <div><span>Evidence delta</span><strong>${escapeHtml(evidenceDelta)}</strong></div>
      <div><span>Drift delta</span><strong>${escapeHtml(driftDelta)}</strong></div>
      <div><span>Latest drift</span><strong>${latest.metrics.drift.toFixed(1)}%</strong></div>
      <div><span>Attention</span><strong>${latest.metrics.attention}</strong></div>
      <div><span>Queue</span><strong>${latest.metrics.queue}</strong></div>
    </div>
    <div class="review-vault-grid">
      ${entries.slice(0, 6).map((entry, index) => {
        const previous = entries[index + 1] || null;
        return `
          <article class="review-vault-card">
            <div class="review-vault-card-head">
              <span>${escapeHtml(entry.focusLabel)}</span>
              <strong>${entry.score}/100</strong>
            </div>
            <p>${escapeHtml(entry.posture)} | Review date ${escapeHtml(entry.reviewDate)}</p>
            <div class="review-vault-mini-grid">
              <div><span>Evidence</span><b>${entry.metrics.evidence}/100</b></div>
              <div><span>Drift</span><b>${entry.metrics.drift.toFixed(1)}%</b></div>
              <div><span>TER</span><b>${entry.metrics.expense.toFixed(2)}%</b></div>
            </div>
            <small>Score ${escapeHtml(reviewVaultDelta(entry.score, previous?.score))} from prior snapshot | ${escapeHtml(entry.noteStatus)}</small>
          </article>
        `;
      }).join("")}
    </div>
    <div class="review-vault-card-grid">
      <article class="review-vault-panel">
        <h3>Latest queue</h3>
        <ul class="review-vault-list">
          ${latest.queue.map((item) => `<li>${escapeHtml(item)}</li>`).join("")}
        </ul>
      </article>
      <article class="review-vault-panel">
        <h3>Tracked funds</h3>
        <div class="review-vault-funds">
          ${latest.funds.map((fund) => `<span>${escapeHtml(fund.name)} | ${escapeHtml(fund.risk)} risk</span>`).join("")}
        </div>
      </article>
      <article class="review-vault-panel">
        <h3>Privacy rule</h3>
        <p>Snapshots stay in this browser under the NiveshNadi namespace. Do not store PAN, folio, CAS text, client data, or credentials in review notes.</p>
      </article>
    </div>
  `;
}

function makeReviewVaultBrief() {
  const entries = loadReviewVault();
  const current = reviewSnapshotFromConfig(portfolioReviewConfig());
  const latest = entries[0] || current;
  const prior = entries[1] || null;
  return [
    "# NiveshNadi Review Vault",
    `Release: ${RELEASE_LABEL} (${DATA_VERSION})`,
    `Saved snapshots: ${entries.length}`,
    `Latest score: ${latest.score}/100`,
    `Latest focus: ${latest.focusLabel}`,
    `Latest posture: ${latest.posture}`,
    `Score delta: ${reviewVaultDelta(latest.score, prior?.score)}`,
    `Evidence delta: ${reviewVaultDelta(latest.metrics.evidence, prior?.metrics.evidence)}`,
    `Drift delta: ${reviewVaultDelta(latest.metrics.drift, prior?.metrics.drift, "%")}`,
    "",
    "## Latest Metrics",
    `- Average Nadi score: ${latest.metrics.avgScore}/100`,
    `- Evidence readiness: ${latest.metrics.evidence}/100`,
    `- Average TER: ${latest.metrics.expense.toFixed(2)}%`,
    `- Drift: ${latest.metrics.drift.toFixed(1)}%`,
    `- Outside band: ${latest.metrics.outsideBand}`,
    `- Attention triggers: ${latest.metrics.attention}`,
    "",
    "## Latest Queue",
    ...latest.queue.map((item) => `- ${item}`),
    "",
    "## Recent Snapshots",
    ...(entries.length ? entries.slice(0, 6).map((entry) => `- ${new Date(entry.createdAt).toLocaleString("en-IN")}: ${entry.score}/100, ${entry.focusLabel}, drift ${entry.metrics.drift.toFixed(1)}%, evidence ${entry.metrics.evidence}/100`) : ["- No saved snapshots yet. This brief uses the current review preview."]),
    "",
    "## Guardrail",
    "Research support only. Review Vault stores browser-local workflow snapshots, not personalized advice, suitability approval, execution instruction, PAN, folio, CAS, or account data."
  ].join("\n");
}

function investorRecordStanceLabel(value) {
  if (value === "watch") return "Watch and review";
  if (value === "memo-ready") return "Memo ready";
  if (value === "source-refresh") return "Source refresh needed";
  return "Research only";
}

function investorRecordAudienceLabel(value) {
  if (value === "family-discussion") return "Family discussion note";
  if (value === "advisor-conversation") return "Advisor conversation note";
  if (value === "future-mfd") return "Future distributor handoff draft";
  return "Self review";
}

function investorRecordBoundaryText(value) {
  if (value === "verify-sources") return "Verify live AMFI, AMC factsheet, SID/KIM, portfolio, and benchmark sources before relying on the record.";
  if (value === "wait-review-date") return "Do not revisit the research posture before the planned review date unless a watchlist trigger fires.";
  if (value === "resolve-flags") return "Resolve active alerts, red flags, overlap, and evidence gaps before converting this into an action memo.";
  return "This record is a research file only and does not approve, recommend, or execute any investment action.";
}

function sanitizeInvestorRecordLabel(value) {
  return String(value || "").replace(/\s+/g, " ").trim().slice(0, 80);
}

function latestReviewSnapshotForRecord() {
  const vaultEntries = loadReviewVault();
  if (vaultEntries.length) {
    return { snapshot: vaultEntries[0], source: "Latest vault snapshot" };
  }
  return { snapshot: reviewSnapshotFromConfig(portfolioReviewConfig()), source: "Current review preview" };
}

function investorRecordCode(snapshot) {
  const date = new Date().toISOString().slice(0, 10).replaceAll("-", "");
  const fundCode = (snapshot.funds || [])
    .map((fund) => String(fund.id || fund.name || "fund").slice(0, 3))
    .join("")
    .slice(0, 9)
    .toUpperCase() || "NOW";
  return `NN-${date}-${snapshot.score}-${fundCode}`;
}

function investorRecordGates(snapshot, boundary) {
  const metrics = snapshot.metrics || {};
  const gates = [investorRecordBoundaryText(boundary)];
  if ((metrics.evidence || 0) < 72) {
    gates.push(`Evidence readiness is ${metrics.evidence || 0}/100, so live citation checks remain mandatory.`);
  } else {
    gates.push(`Evidence readiness is ${metrics.evidence}/100, but source dates still need live verification.`);
  }
  if ((metrics.drift || 0) > 10) {
    gates.push(`Portfolio drift is ${Number(metrics.drift).toFixed(1)}%, so any real-world change needs separate cost, tax, and behavior review.`);
  } else {
    gates.push(`Portfolio drift is ${Number(metrics.drift || 0).toFixed(1)}%, so the record can stay focused on evidence, cost, and review rhythm.`);
  }
  if ((metrics.attention || 0) > 0) {
    gates.push(`${metrics.attention} attention trigger${metrics.attention === 1 ? "" : "s"} should be reviewed before the next decision memo.`);
  }
  return gates;
}

function investorRecordConfig() {
  const { snapshot, source } = latestReviewSnapshotForRecord();
  const stance = els.investorRecordStance?.value || "research-only";
  const audience = els.investorRecordAudience?.value || "self-review";
  const boundary = els.investorRecordBoundary?.value || "no-action";
  const label = sanitizeInvestorRecordLabel(els.investorRecordLabel?.value) || `${snapshot.focusLabel} record`;
  return {
    label,
    stance,
    stanceLabel: investorRecordStanceLabel(stance),
    audience,
    audienceLabel: investorRecordAudienceLabel(audience),
    boundary,
    boundaryText: investorRecordBoundaryText(boundary),
    source,
    recordCode: investorRecordCode(snapshot),
    snapshot,
    gates: investorRecordGates(snapshot, boundary)
  };
}

function investorRecordFromConfig(config) {
  return {
    id: `investor-record-${Date.now()}-${Math.random().toString(16).slice(2)}`,
    recordCode: config.recordCode,
    createdAt: new Date().toISOString(),
    release: RELEASE_LABEL,
    dataVersion: DATA_VERSION,
    label: config.label,
    stance: config.stance,
    stanceLabel: config.stanceLabel,
    audience: config.audience,
    audienceLabel: config.audienceLabel,
    boundary: config.boundary,
    boundaryText: config.boundaryText,
    source: config.source,
    focusLabel: config.snapshot.focusLabel,
    reviewDate: config.snapshot.reviewDate,
    score: config.snapshot.score,
    posture: config.snapshot.posture,
    metrics: config.snapshot.metrics,
    funds: (config.snapshot.funds || []).map((fund) => ({
      id: fund.id,
      name: fund.name,
      category: fund.category,
      risk: fund.risk
    })),
    queue: (config.snapshot.queue || []).slice(0, 6),
    gates: config.gates.slice(0, 5),
    noteStatus: config.snapshot.noteStatus || "No written note"
  };
}

function saveCurrentInvestorRecord() {
  const config = investorRecordConfig();
  const record = investorRecordFromConfig(config);
  const entries = [record, ...loadInvestorRecords()].slice(0, 20);
  saveInvestorRecords(entries);
  renderInvestorRecordDesk();
  renderResearchDossier();
  renderResearchMemory();
  renderPrivacyControlRoom();
  toast("Investor review record saved locally.");
}

function clearInvestorRecords() {
  saveInvestorRecords([]);
  renderInvestorRecordDesk();
  renderResearchDossier();
  renderResearchMemory();
  renderPrivacyControlRoom();
  toast("Investor records cleared.");
}

function renderInvestorRecordDesk(event) {
  if (event) event.preventDefault();
  if (!els.investorRecordOutput || !els.investorRecordSummary) return;
  const config = investorRecordConfig();
  const preview = investorRecordFromConfig(config);
  const records = loadInvestorRecords();
  const latestSaved = records[0] || null;
  const priorSaved = records[1] || null;
  const savedDelta = latestSaved ? reviewVaultDelta(latestSaved.score, priorSaved?.score) : "Preview";
  const metrics = preview.metrics || {};

  els.investorRecordSummary.textContent = `${records.length} record${records.length === 1 ? "" : "s"}`;

  els.investorRecordOutput.innerHTML = `
    <div class="investor-record-hero">
      <div>
        <span class="metric-label">${escapeHtml(config.source)}</span>
        <h3>${escapeHtml(preview.recordCode)}</h3>
        <p>${escapeHtml(preview.label)} | ${escapeHtml(preview.stanceLabel)} | ${escapeHtml(preview.audienceLabel)} | Review date ${escapeHtml(preview.reviewDate)}.</p>
      </div>
      <div class="investor-record-score" style="--score:${preview.score}">
        <b>${preview.score}</b>
        <span>Record</span>
      </div>
    </div>
    <div class="investor-record-metric-grid">
      <div><span>Score</span><strong>${preview.score}/100</strong></div>
      <div><span>Evidence</span><strong>${metrics.evidence}/100</strong></div>
      <div><span>Drift</span><strong>${Number(metrics.drift || 0).toFixed(1)}%</strong></div>
      <div><span>TER</span><strong>${Number(metrics.expense || 0).toFixed(2)}%</strong></div>
      <div><span>Attention</span><strong>${metrics.attention || 0}</strong></div>
      <div><span>Saved delta</span><strong>${escapeHtml(savedDelta)}</strong></div>
    </div>
    <div class="investor-record-card-grid">
      <article class="investor-record-panel">
        <h3>Decision boundary</h3>
        <ul class="investor-record-list">
          ${preview.gates.map((gate) => `<li>${escapeHtml(gate)}</li>`).join("")}
        </ul>
      </article>
      <article class="investor-record-panel">
        <h3>Review queue</h3>
        <ul class="investor-record-list">
          ${(preview.queue.length ? preview.queue : ["No active queue item. Keep evidence, cost, drift, and behavior checks attached."]).map((item) => `<li>${escapeHtml(item)}</li>`).join("")}
        </ul>
      </article>
      <article class="investor-record-panel">
        <h3>Fund set</h3>
        <div class="investor-record-funds">
          ${preview.funds.map((fund) => `<span>${escapeHtml(fund.name)} | ${escapeHtml(fund.category)} | ${escapeHtml(fund.risk)} risk</span>`).join("")}
        </div>
      </article>
    </div>
    <div class="investor-record-ledger">
      ${records.length ? records.slice(0, 5).map((record) => `
        <article class="investor-record-card">
          <span>${escapeHtml(new Date(record.createdAt).toLocaleString("en-IN"))}</span>
          <strong>${escapeHtml(record.recordCode)} | ${record.score}/100</strong>
          <p>${escapeHtml(record.label)} | ${escapeHtml(record.stanceLabel)} | Evidence ${record.metrics.evidence}/100 | Drift ${Number(record.metrics.drift || 0).toFixed(1)}%</p>
        </article>
      `).join("") : `
        <article class="investor-record-card">
          <span>Preview mode</span>
          <strong>No saved investor records yet</strong>
          <p>Save a record to create a browser-local history that can later become the account-sync handoff model.</p>
        </article>
      `}
    </div>
  `;
}

function makeInvestorRecordBrief() {
  const config = investorRecordConfig();
  const record = investorRecordFromConfig(config);
  return [
    "# NiveshNadi Investor Review Record",
    `Release: ${RELEASE_LABEL} (${DATA_VERSION})`,
    `Record code: ${record.recordCode}`,
    `Created: ${new Date(record.createdAt).toLocaleString("en-IN")}`,
    `Label: ${record.label}`,
    `Stance: ${record.stanceLabel}`,
    `Audience: ${record.audienceLabel}`,
    `Source: ${record.source}`,
    `Review focus: ${record.focusLabel}`,
    `Review date: ${record.reviewDate}`,
    `Review score: ${record.score}/100`,
    `Posture: ${record.posture}`,
    "",
    "## Metrics",
    `- Average Nadi score: ${record.metrics.avgScore}/100`,
    `- Evidence readiness: ${record.metrics.evidence}/100`,
    `- Average TER: ${record.metrics.expense.toFixed(2)}%`,
    `- Drift: ${record.metrics.drift.toFixed(1)}%`,
    `- Attention triggers: ${record.metrics.attention}`,
    "",
    "## Funds",
    ...record.funds.map((fund) => `- ${fund.name}: ${fund.category}, ${fund.risk} risk`),
    "",
    "## Review Queue",
    ...(record.queue.length ? record.queue.map((item) => `- ${item}`) : ["- No active queue item."]),
    "",
    "## Decision Boundary",
    ...record.gates.map((gate) => `- ${gate}`),
    "",
    "## Privacy Guardrail",
    "This record stores research workflow metadata only. Do not add PAN, folio, CAS text, account credentials, bank details, distributor client data, or transaction instructions."
  ].join("\n");
}

function dossierModeLabel(value) {
  if (value === "family") return "Family discussion packet";
  if (value === "advisor") return "Advisor conversation packet";
  if (value === "audit") return "Evidence audit packet";
  return "Self research file";
}

function dossierDepthLabel(value) {
  if (value === "compact") return "Compact summary";
  if (value === "full") return "Full research packet";
  return "Standard dossier";
}

function dossierBoundaryText(value) {
  if (value === "review-date") return "Use the next review date as the checkpoint; do not treat the dossier as a transaction date.";
  if (value === "no-action") return "Research only. This dossier is not advice, suitability approval, or an instruction to transact.";
  if (value === "resolve-queue") return "Resolve the review queue, alerts, and evidence gaps before using this dossier for any real-world decision discussion.";
  return "Verify live source dates, citation paths, factsheets, SID/KIM, portfolio disclosure, riskometer, and TER before relying on the dossier.";
}

function sanitizeDossierLabel(value) {
  return String(value || "").replace(/\s+/g, " ").trim().slice(0, 80);
}

function dossierSelectedFunds() {
  const funds = compareSet();
  if (funds.length) return funds;
  return [selectedFund()];
}

function dossierReadinessScore(config) {
  const compareBonus = Math.min(config.funds.length, 4) * 3;
  const recordBonus = config.latestRecord ? 5 : 0;
  const queueDrag = Math.min(config.review.queue.length, 6) * 2;
  const attentionDrag = Math.min(config.review.metrics.attention || 0, 5) * 3;
  return Math.round(clampNumber(
    config.review.score * 0.34 +
      config.primaryScore * 0.22 +
      config.evidence * 0.2 +
      (100 - Math.min(config.review.metrics.drift || 0, 35) * 2) * 0.14 +
      compareBonus +
      recordBonus -
      queueDrag -
      attentionDrag,
    35,
    96
  ));
}

function dossierSections(config) {
  const sections = [
    {
      title: "Fund anchor",
      value: config.primary.name,
      detail: `${config.primary.category} | ${config.primary.risk} risk | Nadi score ${config.primaryScore}/100`
    },
    {
      title: "Compare set",
      value: `${config.funds.length} fund${config.funds.length === 1 ? "" : "s"}`,
      detail: config.funds.map((fund) => fund.category).filter((item, index, arr) => arr.indexOf(item) === index).join(", ")
    },
    {
      title: "Evidence posture",
      value: `${config.evidence}/100`,
      detail: config.evidence >= 78 ? "Demo evidence is organized, but source dates still need live citations." : "Evidence should be refreshed before the dossier is treated as current."
    },
    {
      title: "Review discipline",
      value: `${config.review.score}/100`,
      detail: `${config.review.focusLabel} | ${config.review.metrics.queue} queue item${config.review.metrics.queue === 1 ? "" : "s"}`
    },
    {
      title: "Decision boundary",
      value: dossierBoundaryText(config.boundary).split(".")[0],
      detail: "The dossier organizes research; it does not approve or execute a transaction."
    }
  ];
  if (config.latestRecord) {
    sections.push({
      title: "Investor record",
      value: config.latestRecord.recordCode,
      detail: `${config.latestRecord.stanceLabel} | ${config.latestRecord.audienceLabel}`
    });
  }
  return sections;
}

function dossierConfig() {
  const primary = selectedFund();
  const funds = dossierSelectedFunds();
  const review = reviewSnapshotFromConfig(portfolioReviewConfig());
  const latestRecord = loadInvestorRecords()[0] || null;
  const vault = loadReviewVault();
  const mode = els.dossierMode?.value || "self";
  const depth = els.dossierDepth?.value || "standard";
  const boundary = els.dossierBoundary?.value || "source-check";
  const label = sanitizeDossierLabel(els.dossierLabel?.value) || `${primary.name} research dossier`;
  const primaryScore = nadiScore(primary);
  const evidence = evidenceReadinessScore(primary);
  const config = {
    label,
    mode,
    modeLabel: dossierModeLabel(mode),
    depth,
    depthLabel: dossierDepthLabel(depth),
    boundary,
    boundaryText: dossierBoundaryText(boundary),
    primary,
    primaryScore,
    funds,
    review,
    latestRecord,
    vaultCount: vault.length,
    savedCount: loadResearchDossiers().length,
    evidence
  };
  config.readiness = dossierReadinessScore(config);
  config.sections = dossierSections(config);
  return config;
}

function dossierSnapshotFromConfig(config) {
  return {
    id: `research-dossier-${Date.now()}-${Math.random().toString(16).slice(2)}`,
    createdAt: new Date().toISOString(),
    release: RELEASE_LABEL,
    dataVersion: DATA_VERSION,
    label: config.label,
    mode: config.mode,
    modeLabel: config.modeLabel,
    depth: config.depth,
    depthLabel: config.depthLabel,
    boundary: config.boundary,
    boundaryText: config.boundaryText,
    readiness: config.readiness,
    primary: {
      id: config.primary.id,
      name: config.primary.name,
      category: config.primary.category,
      risk: config.primary.risk,
      expense: config.primary.expense,
      score: config.primaryScore,
      evidence: config.evidence
    },
    metrics: {
      reviewScore: config.review.score,
      evidence: config.evidence,
      compareCount: config.funds.length,
      vaultCount: config.vaultCount,
      drift: config.review.metrics.drift,
      attention: config.review.metrics.attention,
      queue: config.review.metrics.queue
    },
    funds: config.funds.map((fund) => ({
      id: fund.id,
      name: fund.name,
      category: fund.category,
      risk: fund.risk,
      expense: fund.expense,
      score: nadiScore(fund)
    })),
    sections: config.sections,
    reviewQueue: config.review.queue.slice(0, 6),
    recordCode: config.latestRecord?.recordCode || "No saved investor record",
    privacy: "No PAN, folio, CAS, account, contact, client, or transaction data."
  };
}

function saveCurrentDossier() {
  const snapshot = dossierSnapshotFromConfig(dossierConfig());
  const entries = [snapshot, ...loadResearchDossiers()].slice(0, 16);
  saveResearchDossiers(entries);
  renderResearchDossier();
  renderResearchMemory();
  renderPrivacyControlRoom();
  toast("Research dossier saved locally.");
}

function clearResearchDossiers() {
  saveResearchDossiers([]);
  renderResearchDossier();
  renderResearchMemory();
  renderPrivacyControlRoom();
  toast("Research dossiers cleared.");
}

function renderResearchDossier(event) {
  if (event) event.preventDefault();
  if (!els.dossierOutput || !els.dossierSummary) return;
  const config = dossierConfig();
  const saved = loadResearchDossiers();
  els.dossierSummary.textContent = `${saved.length} dossier${saved.length === 1 ? "" : "s"}`;

  els.dossierOutput.innerHTML = `
    <div class="dossier-hero">
      <div>
        <span class="metric-label">${escapeHtml(config.depthLabel)}</span>
        <h3>${escapeHtml(config.label)}</h3>
        <p>${escapeHtml(config.modeLabel)} | ${escapeHtml(config.primary.name)} | ${config.funds.length} fund${config.funds.length === 1 ? "" : "s"} | ${escapeHtml(config.boundaryText)}</p>
      </div>
      <div class="dossier-score" style="--score:${config.readiness}">
        <b>${config.readiness}</b>
        <span>Dossier</span>
      </div>
    </div>
    <div class="dossier-metric-grid">
      <div><span>Primary score</span><strong>${config.primaryScore}/100</strong></div>
      <div><span>Evidence</span><strong>${config.evidence}/100</strong></div>
      <div><span>Review</span><strong>${config.review.score}/100</strong></div>
      <div><span>Drift</span><strong>${Number(config.review.metrics.drift || 0).toFixed(1)}%</strong></div>
      <div><span>Queue</span><strong>${config.review.metrics.queue}</strong></div>
      <div><span>Vault</span><strong>${config.vaultCount}</strong></div>
    </div>
    <div class="dossier-section-grid">
      ${config.sections.map((section) => `
        <article class="dossier-section-card">
          <span>${escapeHtml(section.title)}</span>
          <strong>${escapeHtml(section.value)}</strong>
          <p>${escapeHtml(section.detail)}</p>
        </article>
      `).join("")}
    </div>
    <div class="dossier-card-grid">
      <article class="dossier-panel">
        <h3>Fund packet</h3>
        <div class="dossier-funds">
          ${config.funds.map((fund) => `<span>${escapeHtml(fund.name)} | ${escapeHtml(fund.category)} | ${escapeHtml(fund.risk)} risk | TER ${fund.expense.toFixed(2)}%</span>`).join("")}
        </div>
      </article>
      <article class="dossier-panel">
        <h3>Review queue</h3>
        <ul class="dossier-list">
          ${(config.review.queue.length ? config.review.queue : ["No active queue item. Still verify evidence, cost, overlap, and behavior before acting."]).map((item) => `<li>${escapeHtml(item)}</li>`).join("")}
        </ul>
      </article>
      <article class="dossier-panel">
        <h3>Export guardrail</h3>
        <p>Dossier output is research workflow text. It intentionally excludes PAN, folio, CAS, account credentials, contact data, client identifiers, and free-form private notes.</p>
      </article>
    </div>
    <div class="dossier-ledger">
      ${saved.length ? saved.slice(0, 4).map((item) => `
        <article class="dossier-card">
          <span>${escapeHtml(new Date(item.createdAt).toLocaleString("en-IN"))}</span>
          <strong>${escapeHtml(item.label)} | ${item.readiness}/100</strong>
          <p>${escapeHtml(item.primary.name)} | ${escapeHtml(item.depthLabel)} | ${item.metrics.compareCount} fund${item.metrics.compareCount === 1 ? "" : "s"} | Evidence ${item.metrics.evidence}/100</p>
        </article>
      `).join("") : `
        <article class="dossier-card">
          <span>Preview mode</span>
          <strong>No saved research dossiers yet</strong>
          <p>Save a dossier to create a local export history for this browser.</p>
        </article>
      `}
    </div>
  `;
}

function makeResearchDossierBrief() {
  const snapshot = dossierSnapshotFromConfig(dossierConfig());
  return [
    "# NiveshNadi Research Dossier",
    `Release: ${RELEASE_LABEL} (${DATA_VERSION})`,
    `Created: ${new Date(snapshot.createdAt).toLocaleString("en-IN")}`,
    `Label: ${snapshot.label}`,
    `Mode: ${snapshot.modeLabel}`,
    `Depth: ${snapshot.depthLabel}`,
    `Boundary: ${snapshot.boundaryText}`,
    `Dossier readiness: ${snapshot.readiness}/100`,
    `Primary fund: ${snapshot.primary.name}`,
    `Primary category: ${snapshot.primary.category}`,
    `Primary risk: ${snapshot.primary.risk}`,
    "",
    "## Key Metrics",
    `- Primary Nadi score: ${snapshot.primary.score}/100`,
    `- Evidence readiness: ${snapshot.metrics.evidence}/100`,
    `- Portfolio review score: ${snapshot.metrics.reviewScore}/100`,
    `- Review drift: ${Number(snapshot.metrics.drift || 0).toFixed(1)}%`,
    `- Attention triggers: ${snapshot.metrics.attention}`,
    `- Review queue items: ${snapshot.metrics.queue}`,
    `- Saved vault snapshots: ${snapshot.metrics.vaultCount}`,
    `- Latest investor record: ${snapshot.recordCode}`,
    "",
    "## Fund Packet",
    ...snapshot.funds.map((fund) => `- ${fund.name}: ${fund.category}, ${fund.risk} risk, TER ${fund.expense.toFixed(2)}%, score ${fund.score}/100`),
    "",
    "## Dossier Sections",
    ...snapshot.sections.map((section) => `- ${section.title}: ${section.value} - ${section.detail}`),
    "",
    "## Review Queue",
    ...(snapshot.reviewQueue.length ? snapshot.reviewQueue.map((item) => `- ${item}`) : ["- No active queue item."]),
    "",
    "## Privacy And Compliance Guardrail",
    "- Research support only. This is not personalized investment advice, suitability approval, tax advice, execution, or distributor service.",
    `- ${snapshot.privacy}`,
    "- Verify live source dates, factsheets, SID/KIM, portfolio disclosure, riskometer, TER, and benchmark citations before using this outside the demo."
  ].join("\n");
}

function evidenceStatusClass(status) {
  if (status === "Demo mapped") return "calm";
  if (status === "Schema planned") return "active";
  return "attention";
}

function sourceFieldMatches(fund, source) {
  const sourceText = source.fields.join(" ").toLowerCase();
  const matches = [];
  if (sourceText.includes("expense")) matches.push(`Expense ${fund.expense.toFixed(2)}%`);
  if (sourceText.includes("returns")) matches.push(`5Y demo ${fund.returns5y.toFixed(1)}%`);
  if (sourceText.includes("holdings")) matches.push(`${fund.holdings.length} demo holdings`);
  if (sourceText.includes("sector")) matches.push(`${fund.sectors.length} sectors`);
  if (sourceText.includes("risk")) matches.push(`${fund.risk} risk band`);
  if (sourceText.includes("manager")) matches.push(fund.manager);
  if (sourceText.includes("benchmark")) matches.push(fund.benchmark);
  if (sourceText.includes("minimum sip")) matches.push(`Min SIP ${formatMoney(fund.minSip)}`);
  if (sourceText.includes("category")) matches.push(fund.category);
  return matches.length ? matches : ["Mapped to demo research fields"];
}

function evidenceReadinessScore(fund) {
  const mapped = EVIDENCE_SOURCES.filter((source) => source.status === "Demo mapped").length;
  const coverage = Math.round((mapped / EVIDENCE_SOURCES.length) * 70);
  const researchBonus = Math.round(fund.researchCoverage * 0.18);
  return Math.min(100, coverage + researchBonus);
}

function renderEvidenceLedger() {
  if (!els.evidenceOutput || !els.evidenceFundSummary) return;
  const fund = selectedFund();
  const mapped = EVIDENCE_SOURCES.filter((source) => source.status === "Demo mapped").length;
  const planned = EVIDENCE_SOURCES.length - mapped;
  const readiness = evidenceReadinessScore(fund);
  const score = nadiScore(fund);
  els.evidenceSummary.textContent = `${mapped} mapped | ${planned} planned`;

  els.evidenceFundSummary.innerHTML = `
    <div class="evidence-readiness" style="--score:${readiness}">
      <b>${readiness}</b>
      <span>Readiness</span>
    </div>
    <div>
      <strong>${escapeHtml(fund.name)}</strong>
      <p>${escapeHtml(fund.category)} | ${escapeHtml(fund.risk)} risk | Nadi score ${score}/100</p>
      <ul class="evidence-mini-list">
        <li>Current data mode: demo research fields only.</li>
        <li>Live launch needs source date, citation URL, and extraction checks.</li>
        <li>No PAN, folio, CAS, or personal data is required for this evidence map.</li>
      </ul>
    </div>
  `;

  els.evidenceOutput.innerHTML = `
    <div class="evidence-source-grid">
      ${EVIDENCE_SOURCES.map((source) => `
        <article class="source-card">
          <div class="source-head">
            <span class="metric-label">${escapeHtml(source.status)}</span>
            <strong>${escapeHtml(source.title)}</strong>
          </div>
          <span class="alert-status ${evidenceStatusClass(source.status)}">${escapeHtml(source.cadence)}</span>
          <p>${escapeHtml(sourceFieldMatches(fund, source).join(" | "))}</p>
          <ul class="evidence-mini-list">
            ${source.fields.map((field) => `<li>${escapeHtml(field)}</li>`).join("")}
          </ul>
          <div class="launch-gate">
            <span>Launch gate</span>
            <p>${escapeHtml(source.launchGate)}</p>
          </div>
        </article>
      `).join("")}
    </div>
    <div class="evidence-guardrail">
      <strong>Evidence rule</strong>
      <p>Every live research claim should show source, date, extraction status, and whether it is fund-level, category-level, or portfolio-level evidence.</p>
    </div>
  `;
}

function makeEvidenceLog() {
  const fund = selectedFund();
  const mapped = EVIDENCE_SOURCES.filter((source) => source.status === "Demo mapped").length;
  return [
    `# NiveshNadi Evidence Ledger`,
    `Release: ${RELEASE_LABEL} (${DATA_VERSION})`,
    `Fund: ${fund.name}`,
    `Category: ${fund.category}`,
    `Risk: ${fund.risk}`,
    `Nadi score: ${nadiScore(fund)}/100`,
    `Evidence readiness: ${evidenceReadinessScore(fund)}/100`,
    `Mapped demo sources: ${mapped}/${EVIDENCE_SOURCES.length}`,
    "",
    "## Source Map",
    ...EVIDENCE_SOURCES.map((source) => [
      `- ${source.title}`,
      `  Status: ${source.status}`,
      `  Cadence: ${source.cadence}`,
      `  Fields: ${source.fields.join(", ")}`,
      `  Launch gate: ${source.launchGate}`
    ].join("\n")),
    "",
    "## Guardrail",
    "Research support only. Live launch must show source, date, extraction status, and citation path before claims are treated as current."
  ].join("\n");
}

function selectedCitationSource() {
  const id = els.citationSource?.value || CITATION_SOURCES[0].id;
  return CITATION_SOURCES.find((source) => source.id === id) || CITATION_SOURCES[0];
}

function citationModeLabel(mode) {
  return {
    demo: "Demo citation record",
    dry: "Live dry-run citation",
    launch: "Launch candidate citation"
  }[mode] || "Demo citation record";
}

function citationVisibilityLabel(value) {
  return {
    visible: "Visible to investor",
    internal: "Internal only",
    missing: "Missing citation"
  }[value] || "Visible to investor";
}

function citationConfidenceLabel(value) {
  return {
    high: "High extraction confidence",
    medium: "Medium extraction confidence",
    low: "Low extraction confidence"
  }[value] || "Medium extraction confidence";
}

function citationBinderConfig() {
  const fund = selectedFund();
  const source = selectedCitationSource();
  const mode = els.citationMode?.value || "demo";
  const age = Math.round(clampNumber(Number(els.citationAge?.value) || 7, 0, 365));
  const visibility = els.citationVisibility?.value || "visible";
  const confidence = els.citationConfidence?.value || "medium";
  const freshnessScore = Math.round(clampNumber(100 - Math.max(0, age - source.maxAge) * 4 - Math.min(age / source.maxAge, 1) * 18, 22, 100));
  const visibilityScore = visibility === "visible" ? 96 : visibility === "internal" ? 62 : 24;
  const confidenceScore = confidence === "high" ? 94 : confidence === "medium" ? 72 : 38;
  const evidence = evidenceReadinessScore(fund);
  const fieldMatchCount = sourceFieldMatches(fund, source).length;
  const fieldScore = Math.round(clampNumber(48 + fieldMatchCount * 9 + source.fields.length * 3, 45, 94));
  const launchPenalty = mode === "launch" && (visibility !== "visible" || age > source.maxAge || confidence === "low") ? 12 : 0;
  const binderScore = Math.round(clampNumber(
    freshnessScore * 0.25 +
      visibilityScore * 0.24 +
      confidenceScore * 0.18 +
      evidence * 0.18 +
      fieldScore * 0.15 -
      launchPenalty,
    20,
    96
  ));
  let tone = "watch";
  let posture = "Citation binder needs review";
  if (binderScore >= 78 && visibility === "visible" && age <= source.maxAge && confidence !== "low") {
    tone = "ready";
    posture = "Citation trail is launch-shaped";
  } else if (binderScore < 58 || visibility === "missing" || confidence === "low") {
    tone = "caution";
    posture = "Citation trail is not investor-ready";
  }

  const gaps = [];
  if (age > source.maxAge) gaps.push(`Source is ${age - source.maxAge} day${age - source.maxAge === 1 ? "" : "s"} beyond the freshness rule.`);
  if (visibility !== "visible") gaps.push("Citation is not visible to the investor.");
  if (confidence === "low") gaps.push("Extraction confidence is too low for launch use.");
  if (mode === "launch" && evidence < 75) gaps.push("Evidence readiness should be refreshed before launch candidate use.");
  if (!gaps.length) gaps.push("No blocking citation gap in this demo binder view.");

  const checks = [
    "Source URL or official file path captured.",
    "Source date and extraction run date captured.",
    "Fund identity mapped by scheme code or controlled identifier.",
    "Visible citation path attached near the claim.",
    "Stale-source rule tested before the fact is displayed.",
    "No PAN, folio, CAS, credentials, or client data required."
  ];

  return {
    age,
    binderScore,
    checks,
    confidence,
    confidenceScore,
    evidence,
    fieldScore,
    freshnessScore,
    fund,
    gaps,
    mode,
    posture,
    source,
    tone,
    visibility,
    visibilityScore
  };
}

function renderCitationBinder(event) {
  if (event) event.preventDefault();
  if (!els.citationOutput || !els.citationSummary) return;
  const config = citationBinderConfig();
  els.citationSummary.textContent = `${config.binderScore}/100 citation`;
  const matches = sourceFieldMatches(config.fund, config.source);
  els.citationOutput.innerHTML = `
    <div class="citation-hero ${escapeHtml(config.tone)}">
      <div>
        <span class="metric-label">${escapeHtml(citationModeLabel(config.mode))}</span>
        <h3>${escapeHtml(config.posture)}</h3>
        <p>${escapeHtml(config.source.title)} for ${escapeHtml(config.fund.name)}. Source age ${config.age} day${config.age === 1 ? "" : "s"}; max rule ${config.source.maxAge} day${config.source.maxAge === 1 ? "" : "s"}.</p>
      </div>
      <div class="citation-score" style="--score:${config.binderScore}">
        <b>${config.binderScore}</b>
        <span>Citation</span>
      </div>
    </div>
    <div class="citation-metric-grid">
      <article><span>Freshness</span><strong>${config.freshnessScore}/100</strong><p>${config.age <= config.source.maxAge ? "Inside freshness rule." : "Past freshness rule."}</p></article>
      <article><span>Visibility</span><strong>${config.visibilityScore}/100</strong><p>${escapeHtml(citationVisibilityLabel(config.visibility))}</p></article>
      <article><span>Extraction</span><strong>${config.confidenceScore}/100</strong><p>${escapeHtml(citationConfidenceLabel(config.confidence))}</p></article>
      <article><span>Evidence</span><strong>${config.evidence}/100</strong><p>Selected fund evidence posture.</p></article>
    </div>
    <div class="citation-source-card">
      <div>
        <span>${escapeHtml(config.source.sourceType)}</span>
        <strong>${escapeHtml(config.source.title)}</strong>
        <p>${escapeHtml(config.source.proofFor)}</p>
      </div>
      <div class="citation-source-path">
        <span>Citation path</span>
        <p>${escapeHtml(config.source.citationPath)}</p>
      </div>
    </div>
    <div class="citation-grid-output">
      <article class="citation-panel">
        <h3>Mapped proof fields</h3>
        <div class="citation-pill-list">
          ${config.source.fields.map((field) => `<span>${escapeHtml(field)}</span>`).join("")}
        </div>
        <p>${escapeHtml(matches.join(" | "))}</p>
      </article>
      <article class="citation-panel">
        <h3>Blocking gaps</h3>
        <ul class="review-vault-list">
          ${config.gaps.map((gap) => `<li>${escapeHtml(gap)}</li>`).join("")}
        </ul>
      </article>
      <article class="citation-panel">
        <h3>Binder checklist</h3>
        <ul class="review-vault-list">
          ${config.checks.map((check) => `<li>${escapeHtml(check)}</li>`).join("")}
        </ul>
      </article>
    </div>
    <div class="citation-guardrail">
      <strong>Launch boundary</strong>
      <p>${escapeHtml(config.source.launchGate)} This binder is a citation workflow record only; it does not approve a fund, personalize advice, execute a transaction, or guarantee returns.</p>
    </div>
  `;
}

function makeCitationBinderNote() {
  const config = citationBinderConfig();
  return [
    `# NiveshNadi Citation Binder - ${config.source.title}`,
    `Release: ${RELEASE_LABEL} (${DATA_VERSION})`,
    `Fund: ${config.fund.name}`,
    `Category: ${config.fund.category}`,
    `Risk: ${config.fund.risk}`,
    `Mode: ${citationModeLabel(config.mode)}`,
    `Binder score: ${config.binderScore}/100`,
    `Posture: ${config.posture}`,
    `Source age: ${config.age} days`,
    `Freshness rule: ${config.source.maxAge} days`,
    `Citation visibility: ${citationVisibilityLabel(config.visibility)}`,
    `Extraction confidence: ${citationConfidenceLabel(config.confidence)}`,
    "",
    "## Citation Path",
    config.source.citationPath,
    "",
    "## Proof Fields",
    ...config.source.fields.map((field) => `- ${field}`),
    "",
    "## Blocking Gaps",
    ...config.gaps.map((gap) => `- ${gap}`),
    "",
    "## Binder Checklist",
    ...config.checks.map((check) => `- ${check}`),
    "",
    "## Guardrail",
    "Research support only. Live launch must show visible source date, citation path, extraction confidence, and stale-source status. This binder excludes PAN, folio, CAS, account data, advice, approval, execution, and return guarantees."
  ].join("\n");
}

function fundHouseTone(score) {
  if (score >= 82) return "strong";
  if (score >= 68) return "watch";
  return "caution";
}

function fundHousePosture(score) {
  if (score >= 82) return "Strong stewardship evidence";
  if (score >= 68) return "Researchable stewardship";
  if (score >= 54) return "Needs house review";
  return "Weak evidence posture";
}

function fundHouseCapacityScore(fund) {
  const scaleScore = Math.min(92, 48 + Math.log10(Math.max(fund.aum, 1000)) * 11);
  const capacityPenalty = (fund.category.includes("Small Cap") || fund.category.includes("Mid Cap")) && fund.aum > 12000 ? 8 : 0;
  const debtBonus = fund.sleeve === "Debt" ? 4 : 0;
  return Math.round(clampNumber(scaleScore + debtBonus - capacityPenalty, 35, 94));
}

function fundHouseLensConfig() {
  const fund = selectedFund();
  const peer = peerBenchmarkConfig();
  const evidence = evidenceReadinessScore(fund);
  const costScore = Math.round(clampNumber(
    84 - Math.max(0, fund.expense - peer.sleeveAvg.expense) * 85 + (fund.expense <= peer.sleeveAvg.expense ? 7 : 0),
    38,
    96
  ));
  const processScore = Math.round(clampNumber(
    fund.researchCoverage * 0.44 + fund.consistency * 0.34 + (fund.benchmark ? 8 : 0) + (fund.role ? 7 : 0),
    36,
    96
  ));
  const capacityScore = fundHouseCapacityScore(fund);
  const managerScore = /demo/i.test(fund.manager) ? 62 : 88;
  const stabilityScore = Math.round(clampNumber(
    fund.consistency * 0.72 + (100 - fund.maxDrawdown) * 0.2 + (5 - riskRankValue(fund.risk)) * 3,
    35,
    96
  ));
  const styleRepeatScore = Math.round(clampNumber(
    fund.style.length > 28 ? 78 + Math.min(12, fund.tags.length * 3) : 58,
    45,
    92
  ));
  const stewardshipScore = Math.round(clampNumber(
    processScore * 0.24 +
      evidence * 0.22 +
      costScore * 0.18 +
      capacityScore * 0.14 +
      managerScore * 0.1 +
      stabilityScore * 0.12,
    30,
    96
  ));

  const signals = [
    {
      title: "Process clarity",
      value: `${processScore}/100`,
      score: processScore,
      detail: `${fund.style}. Benchmark: ${fund.benchmark}.`,
      action: "Verify stated style, benchmark, and portfolio discipline in latest AMC material."
    },
    {
      title: "Evidence depth",
      value: `${evidence}/100`,
      score: evidence,
      detail: `${fund.researchCoverage}/100 demo research coverage with ${fund.holdings.length} holdings mapped.`,
      action: "Attach source date, citation URL, extraction status, and field-level confidence before live launch."
    },
    {
      title: "Cost discipline",
      value: `${fund.expense.toFixed(2)}% TER`,
      score: costScore,
      detail: `Sleeve average demo TER is ${peer.sleeveAvg.expense.toFixed(2)}%.`,
      action: "Check whether active cost is buying a distinct role, better drawdown behavior, or evidence quality."
    },
    {
      title: "AUM and capacity",
      value: formatCr(fund.aum),
      score: capacityScore,
      detail: `${fund.category} capacity comfort is demo-scored against size and sleeve constraints.`,
      action: "For mid/small/flexi roles, inspect liquidity, churn, and whether asset size can dilute the strategy."
    },
    {
      title: "Manager visibility",
      value: fund.manager,
      score: managerScore,
      detail: /demo/i.test(fund.manager) ? "Manager field is still demo-level and needs live AMC attribution." : "Named manager data is available for review.",
      action: "Add manager name, tenure, co-manager changes, and AMC communication history before launch claims."
    },
    {
      title: "Style stability",
      value: `${stabilityScore}/100`,
      score: stabilityScore,
      detail: `Consistency ${fund.consistency}/100, max drawdown ${fund.maxDrawdown}%, and style signal ${styleRepeatScore}/100.`,
      action: "Review portfolio drift, category drift, turnover, and repeated holdings before refreshing the decision memo."
    }
  ];

  const launchGates = [
    "Latest AMC factsheet source date and citation visible beside every fund-house claim.",
    "Manager tenure, fund-management change, and AMC communication history captured as structured fields.",
    "TER, riskometer, portfolio disclosure, and benchmark dates checked for stale or missing values.",
    "Capacity review documented for mid, small, flexi, sector, thematic, and concentrated strategies.",
    "Clear separation between house-level stewardship research and personalized investment advice."
  ];

  return {
    capacityScore,
    costScore,
    evidence,
    fund,
    launchGates,
    managerScore,
    peer,
    posture: fundHousePosture(stewardshipScore),
    processScore,
    signals,
    stabilityScore,
    stewardshipScore,
    tone: fundHouseTone(stewardshipScore)
  };
}

function renderFundHouseLens() {
  if (!els.houseOutput) return;
  const config = fundHouseLensConfig();
  els.houseSummary.textContent = `${config.stewardshipScore}/100 stewardship`;

  els.houseOutput.innerHTML = `
    <div class="house-hero ${escapeHtml(config.tone)}">
      <div>
        <span class="metric-label">${escapeHtml(config.posture)}</span>
        <h3>${escapeHtml(config.fund.name)} house review</h3>
        <p>${escapeHtml(config.fund.category)} | ${escapeHtml(config.fund.sleeve)} | Research-only stewardship lens before the fund enters a shortlist, watchlist, or decision pack.</p>
      </div>
      <div class="house-score" style="--score:${config.stewardshipScore}">
        <b>${config.stewardshipScore}</b>
        <span>House Lens</span>
      </div>
    </div>
    <div class="house-signal-grid">
      ${config.signals.map((signal) => `
        <article class="house-signal ${fundHouseTone(signal.score)}">
          <div>
            <span class="metric-label">${escapeHtml(signal.title)}</span>
            <strong>${escapeHtml(signal.value)}</strong>
          </div>
          <p>${escapeHtml(signal.detail)}</p>
          <div class="signal-meter" aria-hidden="true"><span style="width:${signal.score}%"></span></div>
          <small>${escapeHtml(signal.action)}</small>
        </article>
      `).join("")}
    </div>
    <div class="house-gate-grid">
      ${config.launchGates.map((gate, index) => `
        <article class="house-gate">
          <span>${String(index + 1).padStart(2, "0")}</span>
          <p>${escapeHtml(gate)}</p>
        </article>
      `).join("")}
    </div>
    <div class="house-guardrail">
      <strong>Stewardship rule</strong>
      <p>Fund House Lens is a research discipline layer. It should help the investor ask better questions about process, people, cost, capacity, and evidence, not create a personalized buy, sell, switch, hold, or redeem instruction.</p>
    </div>
  `;
}

function makeFundHouseLensNote() {
  const config = fundHouseLensConfig();
  return [
    `# NiveshNadi Fund House Lens - ${config.fund.name}`,
    "",
    `Release: ${RELEASE_LABEL} (${DATA_VERSION})`,
    `Posture: ${config.posture}`,
    `Stewardship score: ${config.stewardshipScore}/100`,
    `Fund: ${config.fund.name}`,
    `Category: ${config.fund.category}`,
    `Risk: ${config.fund.risk}`,
    `AUM reference: ${formatCr(config.fund.aum)}`,
    "",
    "## Stewardship Signals",
    ...config.signals.map((signal) => [
      `- ${signal.title}: ${signal.value}`,
      `  Detail: ${signal.detail}`,
      `  Review action: ${signal.action}`
    ].join("\n")),
    "",
    "## Launch Gates",
    ...config.launchGates.map((gate) => `- ${gate}`),
    "",
    "## Guardrail",
    "Research support only. This house-level lens does not provide personalized investment advice, transaction advice, or a return guarantee."
  ].join("\n");
}

function addFundHouseReviewTrigger() {
  const fund = selectedFund();
  const note = "Review AMC process, manager visibility, style drift, AUM/capacity, expense, and evidence freshness before changing allocation.";
  addToWatchlist(fund.id, false);
  const alerts = loadAlerts();
  const exists = alerts.some((alert) => alert.fundId === fund.id && alert.trigger === "style" && alert.note === note);
  if (!exists) {
    saveAlerts([
      {
        id: `${Date.now()}-${Math.random().toString(16).slice(2)}`,
        fundId: fund.id,
        trigger: "style",
        limit: ALERT_TYPES.style.defaultLimit,
        note,
        createdAt: new Date().toISOString()
      },
      ...alerts
    ].slice(0, 60));
  }
  renderWatchlistRoom();
  renderResearchReceipt();
  renderReceiptVault();
  renderReviewRhythmBoard();
  renderFundHouseLens();
  toast("Fund house review added to Watchlist.");
}

function selectedDataPipeline() {
  const id = els.dataSource?.value || DATA_PIPELINES[0].id;
  return DATA_PIPELINES.find((pipeline) => pipeline.id === id) || DATA_PIPELINES[0];
}

function dataModeLabel(mode) {
  if (mode === "launch") return "Launch candidate";
  if (mode === "dry-run") return "Live dry run";
  return "Prototype mapping";
}

function dataCitationLabel(citation) {
  if (citation === "visible") return "Visible source date and citation";
  if (citation === "internal") return "Internal source only";
  return "Citation missing";
}

function dataGateConfig() {
  const pipeline = selectedDataPipeline();
  const mode = els.dataMode?.value || "prototype";
  const age = clampNumber(Number(els.dataAge?.value || 0), 0, 365);
  const citation = els.dataCitation?.value || "visible";
  let score = pipeline.readiness;
  if (age > pipeline.freshnessDays) score -= Math.min(28, Math.ceil((age - pipeline.freshnessDays) / 3));
  if (mode === "dry-run") score += 5;
  if (mode === "launch") score += 9;
  if (citation === "internal") score -= 12;
  if (citation === "missing") score -= 26;
  score = Math.max(25, Math.min(96, score));
  const posture = score >= 82 ? "Launch ready" : score >= 68 ? "Dry-run ready" : score >= 52 ? "Schema ready" : "Blocked";
  const freshness = age <= pipeline.freshnessDays ? "Fresh" : `Stale by ${age - pipeline.freshnessDays} days`;
  const blockers = [
    ...pipeline.blockers,
    ...(citation === "visible" ? [] : ["public citation path"]),
    ...(age <= pipeline.freshnessDays ? [] : ["fresh source date"])
  ];
  return { age, blockers, citation, freshness, mode, pipeline, posture, score };
}

function renderDataReadinessRoom(event) {
  if (event) event.preventDefault();
  if (!els.dataOutput || !els.dataSummary) return;
  const config = dataGateConfig();
  els.dataSummary.textContent = `${config.score}/100 | ${config.posture}`;
  els.dataOutput.innerHTML = `
    <div class="data-hero">
      <div>
        <span class="metric-label">${escapeHtml(config.posture)}</span>
        <h3>${escapeHtml(config.pipeline.title)}</h3>
        <p>${escapeHtml(config.pipeline.purpose)}</p>
      </div>
      <div class="data-score" style="--score: ${config.score}">
        <b>${config.score}</b>
        <span>Gate</span>
      </div>
    </div>
    <div class="data-card-grid">
      <article class="data-card">
        <span>Freshness</span>
        <strong>${escapeHtml(config.freshness)}</strong>
        <p>${escapeHtml(config.pipeline.cadence)} cadence. Max age before stale flag: ${config.pipeline.freshnessDays} days.</p>
      </article>
      <article class="data-card">
        <span>Launch mode</span>
        <strong>${escapeHtml(dataModeLabel(config.mode))}</strong>
        <p>${escapeHtml(dataCitationLabel(config.citation))}. Claims stay blocked until date and citation are visible.</p>
      </article>
      <article class="data-card">
        <span>Owner</span>
        <strong>${escapeHtml(config.pipeline.owner)}</strong>
        <p>Responsible for extraction QA, source date, and field-level evidence visibility.</p>
      </article>
    </div>
    <div class="data-detail-grid">
      <article class="data-detail-card">
        <h3>Field map</h3>
        <div class="field-chip-list">
          ${config.pipeline.fields.map((field) => `<span>${escapeHtml(field)}</span>`).join("")}
        </div>
      </article>
      <article class="data-detail-card">
        <h3>Validation checks</h3>
        <ul class="data-check-list">
          ${config.pipeline.checks.map((check) => `<li>${escapeHtml(check)}</li>`).join("")}
        </ul>
      </article>
      <article class="data-detail-card">
        <h3>Launch blockers</h3>
        <ul class="data-check-list">
          ${config.blockers.slice(0, 5).map((blocker) => `<li>${escapeHtml(blocker)}</li>`).join("")}
        </ul>
      </article>
    </div>
    <div class="data-guardrail">
      <strong>Data rule</strong>
      <p>No live fund claim should appear without source date, extraction status, field validation, and citation path. PAN, folio, CAS, ARN, and client records stay out of Phase 1.</p>
    </div>
  `;
}

function makeDataSpec() {
  const config = dataGateConfig();
  return [
    "# NiveshNadi Data Readiness Spec",
    `Release: ${RELEASE_LABEL} (${DATA_VERSION})`,
    `Source: ${config.pipeline.title}`,
    `Owner: ${config.pipeline.owner}`,
    `Cadence: ${config.pipeline.cadence}`,
    `Launch mode: ${dataModeLabel(config.mode)}`,
    `Citation posture: ${dataCitationLabel(config.citation)}`,
    `Freshness: ${config.freshness}`,
    `Gate score: ${config.score}/100`,
    `Posture: ${config.posture}`,
    "",
    "## Fields",
    ...config.pipeline.fields.map((field) => `- ${field}`),
    "",
    "## Validation Checks",
    ...config.pipeline.checks.map((check) => `- ${check}`),
    "",
    "## Launch Blockers",
    ...config.blockers.slice(0, 6).map((blocker) => `- ${blocker}`),
    "",
    "## Guardrail",
    "No live fund claim should appear without source date, extraction status, field validation, and citation path."
  ].join("\n");
}

function sourceQueueModeLabel(mode) {
  return {
    current: "Current demo queue",
    dry: "Live dry-run queue",
    launch: "Launch candidate queue",
    stale: "Stale-source stress queue"
  }[mode] || "Current demo queue";
}

function sourceQueuePriorityLabel(priority) {
  return {
    blockers: "Blockers first",
    freshness: "Freshness first",
    citation: "Citation first",
    score: "Lowest score first"
  }[priority] || "Blockers first";
}

function sourceQueueConfig() {
  return {
    mode: els.sourceQueueMode?.value || "current",
    priority: els.sourceQueuePriority?.value || "blockers",
    owner: els.sourceQueueOwner?.value || "all"
  };
}

function queueAgeForPipeline(pipeline, index, mode) {
  if (mode === "stale") return pipeline.freshnessDays + 14 + index * 2;
  if (mode === "launch") return Math.max(1, pipeline.freshnessDays - (index % 2));
  if (mode === "dry") return Math.max(2, Math.round(pipeline.freshnessDays * 0.72));
  return Math.max(1, Math.round(pipeline.freshnessDays * 0.45) + (index % 3));
}

function sourceQaItem(pipeline, index, config, fund) {
  const citation = CITATION_SOURCES.find((source) => source.id === pipeline.id) || CITATION_SOURCES[0];
  const age = queueAgeForPipeline(pipeline, index, config.mode);
  const staleDays = Math.max(0, age - pipeline.freshnessDays);
  const citationStaleDays = Math.max(0, age - citation.maxAge);
  const visibility = config.mode === "stale" && index % 2 === 1 ? "missing" : config.mode === "dry" && index % 2 === 0 ? "internal" : "visible";
  const confidence = config.mode === "stale" && index % 3 === 0 ? "low" : pipeline.readiness >= 70 ? "high" : "medium";
  const freshnessScore = Math.round(clampNumber(100 - staleDays * 4 - citationStaleDays * 2, 20, 100));
  const visibilityScore = visibility === "visible" ? 96 : visibility === "internal" ? 62 : 24;
  const confidenceScore = confidence === "high" ? 92 : confidence === "medium" ? 72 : 38;
  const proofScore = Math.round(clampNumber(
    pipeline.readiness * 0.36 +
      freshnessScore * 0.25 +
      visibilityScore * 0.2 +
      confidenceScore * 0.13 +
      evidenceReadinessScore(fund) * 0.06,
    18,
    96
  ));
  const blockers = [
    ...(staleDays ? [`fresh source date overdue by ${staleDays} day${staleDays === 1 ? "" : "s"}`] : []),
    ...(visibility === "visible" ? [] : ["visible investor citation path"]),
    ...(confidence === "low" ? ["extraction confidence below launch threshold"] : []),
    ...pipeline.blockers.slice(0, config.mode === "launch" ? 2 : 3)
  ];
  const posture = proofScore >= 82 && !staleDays && visibility === "visible" && confidence !== "low"
    ? "Launch ready"
    : proofScore >= 68
      ? "Dry-run ready"
      : proofScore >= 52
        ? "Fix queue"
        : "Blocked";
  const tone = posture === "Launch ready" ? "ready" : posture === "Blocked" ? "caution" : "watch";
  const nextAction = staleDays
    ? "Refresh source file and re-run freshness check."
    : visibility !== "visible"
      ? "Attach public citation path beside investor-facing claim."
      : confidence === "low"
        ? "Re-run extraction QA before launch use."
        : blockers.length > 2
          ? "Resolve source-specific blockers and promote to dry run."
          : "Keep in launch candidate queue with final evidence review.";

  return {
    age,
    blockers,
    citation,
    confidence,
    confidenceScore,
    freshnessScore,
    nextAction,
    pipeline,
    posture,
    proofScore,
    staleDays,
    tone,
    visibility,
    visibilityScore
  };
}

function sourceQaItems(config = sourceQueueConfig()) {
  const fund = selectedFund();
  let items = DATA_PIPELINES.map((pipeline, index) => sourceQaItem(pipeline, index, config, fund));
  if (config.owner !== "all") {
    items = items.filter((item) => item.pipeline.owner === config.owner);
  }
  const sorters = {
    blockers: (a, b) => b.blockers.length - a.blockers.length || a.proofScore - b.proofScore,
    freshness: (a, b) => b.staleDays - a.staleDays || a.freshnessScore - b.freshnessScore,
    citation: (a, b) => a.visibilityScore - b.visibilityScore || a.confidenceScore - b.confidenceScore,
    score: (a, b) => a.proofScore - b.proofScore
  };
  return items.sort(sorters[config.priority] || sorters.blockers);
}

function renderSourceQaQueue(event) {
  if (event) event.preventDefault();
  if (!els.sourceQueueOutput || !els.sourceQueueSummary) return;
  const config = sourceQueueConfig();
  const items = sourceQaItems(config);
  const avgScore = items.length ? Math.round(items.reduce((sum, item) => sum + item.proofScore, 0) / items.length) : 0;
  const ready = items.filter((item) => item.posture === "Launch ready").length;
  const blocked = items.filter((item) => item.posture === "Blocked").length;
  const stale = items.filter((item) => item.staleDays > 0).length;
  const missingCitation = items.filter((item) => item.visibility !== "visible").length;
  const selected = selectedFund();
  const posture = blocked ? "Source launch queue has blockers" : ready === items.length ? "All visible sources are launch shaped" : "Source queue needs final QA";
  const tone = blocked ? "caution" : ready === items.length ? "ready" : "watch";
  els.sourceQueueSummary.textContent = `${ready} ready | ${blocked} blocked`;

  els.sourceQueueOutput.innerHTML = `
    <div class="source-queue-hero ${escapeHtml(tone)}">
      <div>
        <span class="metric-label">${escapeHtml(sourceQueueModeLabel(config.mode))}</span>
        <h3>${escapeHtml(posture)}</h3>
        <p>${items.length} source${items.length === 1 ? "" : "s"} in view for ${escapeHtml(selected.name)}. Sorted by ${escapeHtml(sourceQueuePriorityLabel(config.priority).toLowerCase())}.</p>
      </div>
      <div class="source-queue-score" style="--score:${avgScore}">
        <b>${avgScore}</b>
        <span>Queue</span>
      </div>
    </div>
    <div class="source-queue-metric-grid">
      <article><span>Launch ready</span><strong>${ready}</strong><p>Sources with fresh, visible, confident proof.</p></article>
      <article><span>Blocked</span><strong>${blocked}</strong><p>Sources below operating threshold.</p></article>
      <article><span>Stale</span><strong>${stale}</strong><p>Sources past freshness rule.</p></article>
      <article><span>Citation gaps</span><strong>${missingCitation}</strong><p>Sources without investor-visible citation.</p></article>
    </div>
    <div class="source-queue-grid">
      ${items.map((item) => `
        <article class="source-queue-card ${escapeHtml(item.tone)}">
          <div class="source-queue-card-head">
            <div>
              <span>${escapeHtml(item.pipeline.owner)}</span>
              <strong>${escapeHtml(item.pipeline.title)}</strong>
            </div>
            <b>${item.proofScore}/100</b>
          </div>
          <p>${escapeHtml(item.posture)} | ${escapeHtml(item.pipeline.cadence)} | source age ${item.age} day${item.age === 1 ? "" : "s"}</p>
          <div class="source-queue-mini-grid">
            <div><span>Fresh</span><b>${item.freshnessScore}</b></div>
            <div><span>Cite</span><b>${item.visibilityScore}</b></div>
            <div><span>Extract</span><b>${item.confidenceScore}</b></div>
          </div>
          <div class="source-queue-action">
            <span>Next action</span>
            <p>${escapeHtml(item.nextAction)}</p>
          </div>
          <ul class="review-vault-list">
            ${item.blockers.slice(0, 4).map((blocker) => `<li>${escapeHtml(blocker)}</li>`).join("")}
          </ul>
        </article>
      `).join("")}
    </div>
    <div class="source-queue-panel-grid">
      <article class="source-queue-panel">
        <h3>Owner handoff</h3>
        <p>Data operations owns source date and ingestion. Research operations owns extraction confidence. Compliance research owns document/version boundaries. Market data owns benchmark display rights.</p>
      </article>
      <article class="source-queue-panel source-queue-guardrail">
        <h3>Privacy boundary</h3>
        <p>Source QA never needs PAN, folio, CAS, bank data, account credentials, distributor client data, or private investor notes.</p>
      </article>
    </div>
  `;
}

function makeSourceQaNote() {
  const config = sourceQueueConfig();
  const items = sourceQaItems(config);
  const avgScore = items.length ? Math.round(items.reduce((sum, item) => sum + item.proofScore, 0) / items.length) : 0;
  return [
    "# NiveshNadi Source QA Queue",
    `Release: ${RELEASE_LABEL} (${DATA_VERSION})`,
    `Mode: ${sourceQueueModeLabel(config.mode)}`,
    `Priority: ${sourceQueuePriorityLabel(config.priority)}`,
    `Owner filter: ${config.owner}`,
    `Average QA score: ${avgScore}/100`,
    `Launch ready: ${items.filter((item) => item.posture === "Launch ready").length}`,
    `Blocked: ${items.filter((item) => item.posture === "Blocked").length}`,
    "",
    "## Queue",
    ...items.map((item) => [
      `- ${item.pipeline.title}: ${item.proofScore}/100 | ${item.posture}`,
      `  Owner: ${item.pipeline.owner}`,
      `  Age: ${item.age} days | Freshness score: ${item.freshnessScore}/100`,
      `  Citation: ${citationVisibilityLabel(item.visibility)} | Extraction: ${citationConfidenceLabel(item.confidence)}`,
      `  Next action: ${item.nextAction}`,
      `  Blockers: ${item.blockers.slice(0, 4).join(", ")}`
    ].join("\n")),
    "",
    "## Privacy boundary",
    "Source QA governs launch readiness only. It is not investor advice, transaction approval, or a return guarantee. It excludes PAN, folio, CAS, credentials, bank data, and distributor client records."
  ].join("\n");
}

function selectedSourceIntakePipeline() {
  const id = els.sourceIntakeSource?.value || selectedDataPipeline().id;
  return DATA_PIPELINES.find((pipeline) => pipeline.id === id) || DATA_PIPELINES[0];
}

function sourceIntakeChannelLabel(channel) {
  return {
    "official-url": "Official URL or file source",
    "upload-batch": "Batch file upload",
    "api-partner": "API or licensed data partner",
    "manual-review": "Manual research review"
  }[channel] || "Official URL or file source";
}

function sourceIntakeFormatLabel(format) {
  return {
    "csv-json": "CSV or normalized JSON",
    "api-json": "API JSON response",
    pdf: "PDF factsheet/document",
    xlsx: "Spreadsheet file",
    html: "HTML page/table"
  }[format] || "CSV or normalized JSON";
}

function sourceIntakeEvidenceLabel(evidence) {
  return {
    "citation-bound": "Source date and citation visible",
    "source-only": "Source date visible, citation pending",
    "citation-missing": "Citation missing"
  }[evidence] || "Source date and citation visible";
}

function sourceIntakeScopeLabel(scope) {
  return {
    "single-fund": "Single fund dry run",
    "category-set": "Category test set",
    "full-amc": "Full AMC source family"
  }[scope] || "Single fund dry run";
}

function sourceIntakeConfig() {
  const pipeline = selectedSourceIntakePipeline();
  const citation = CITATION_SOURCES.find((source) => source.id === pipeline.id) || CITATION_SOURCES[0];
  const fund = selectedFund();
  const channel = els.sourceIntakeChannel?.value || "official-url";
  const format = els.sourceIntakeFormat?.value || "csv-json";
  const evidence = els.sourceIntakeEvidence?.value || "citation-bound";
  const age = clampNumber(Number(els.sourceIntakeAge?.value || 0), 0, 365);
  const scope = els.sourceIntakeScope?.value || "single-fund";
  const maxAge = Math.max(1, citation.maxAge || pipeline.freshnessDays);
  const staleDays = Math.max(0, age - maxAge);
  const freshnessScore = clampNumber(Math.round(100 - staleDays * 2.5), 25, 100);
  const channelScore = {
    "official-url": 88,
    "upload-batch": 76,
    "api-partner": 84,
    "manual-review": 58
  }[channel] || 74;
  const formatScore = {
    "csv-json": 88,
    "api-json": 90,
    pdf: 62,
    xlsx: 74,
    html: 56
  }[format] || 70;
  const evidenceScore = {
    "citation-bound": 90,
    "source-only": 64,
    "citation-missing": 34
  }[evidence] || 64;
  const scopeScore = {
    "single-fund": 82,
    "category-set": 76,
    "full-amc": 66
  }[scope] || 76;
  let score = Math.round(
    pipeline.readiness * 0.3 +
      freshnessScore * 0.18 +
      channelScore * 0.16 +
      formatScore * 0.14 +
      evidenceScore * 0.16 +
      scopeScore * 0.06
  );
  if (channel === "api-partner" && format === "api-json") score += 5;
  if (channel === "manual-review" && scope === "full-amc") score -= 8;
  if (format === "pdf" && !["amc-factsheet", "sid-kim"].includes(pipeline.id)) score -= 5;
  score = clampNumber(score, 22, 96);
  const hardBlockers = [
    ...(staleDays ? [`fresh source date is overdue by ${staleDays} day${staleDays === 1 ? "" : "s"}`] : []),
    ...(evidence === "citation-bound" ? [] : ["investor-visible citation path"]),
    ...(["pdf", "html"].includes(format) ? ["extraction parser QA"] : []),
    ...(channel === "manual-review" ? ["manual review cannot be the only production path"] : []),
    ...(scope === "full-amc" ? ["AMC-wide format variation test"] : [])
  ];
  const blockers = [...hardBlockers, ...pipeline.blockers.slice(0, 3)];
  const posture = score >= 84 && !hardBlockers.length
    ? "Dry-run ready"
    : score >= 68
      ? "Needs mapping QA"
      : score >= 52
        ? "Intake design only"
        : "Do not launch";
  const tone = posture === "Dry-run ready" ? "ready" : posture === "Do not launch" ? "caution" : "watch";
  const contractFields = Array.from(new Set([...pipeline.fields.slice(0, 6), ...citation.fields.slice(0, 3)]));
  const validation = Array.from(new Set([
    ...pipeline.checks,
    "source date captured",
    "citation path visible",
    "no personal identifiers in source payload"
  ]));
  const nextStep = hardBlockers.length
    ? `Resolve ${hardBlockers[0]} before treating this as live research.`
    : score >= 84
      ? "Promote to live dry run with captured source date, citation URL, and rollback note."
      : "Complete field mapping and extraction QA before dry-run promotion.";
  return {
    age,
    blockers,
    channel,
    channelScore,
    citation,
    contractFields,
    evidence,
    evidenceScore,
    format,
    formatScore,
    freshnessScore,
    fund,
    maxAge,
    nextStep,
    pipeline,
    posture,
    scope,
    scopeScore,
    score,
    staleDays,
    tone,
    validation
  };
}

function renderSourceIntakeConsole(event) {
  if (event) event.preventDefault();
  if (!els.sourceIntakeOutput || !els.sourceIntakeSummary) return;
  const config = sourceIntakeConfig();
  els.sourceIntakeSummary.textContent = `${config.score}/100 | ${config.posture}`;
  els.sourceIntakeOutput.innerHTML = `
    <div class="source-intake-hero ${escapeHtml(config.tone)}">
      <div>
        <span class="metric-label">${escapeHtml(sourceIntakeChannelLabel(config.channel))}</span>
        <h3>${escapeHtml(config.pipeline.title)} intake gate</h3>
        <p>${escapeHtml(config.nextStep)} Scope: ${escapeHtml(sourceIntakeScopeLabel(config.scope))} for ${escapeHtml(config.fund.name)}.</p>
      </div>
      <div class="source-intake-score" style="--score:${config.score}">
        <b>${config.score}</b>
        <span>Intake</span>
      </div>
    </div>
    <div class="source-intake-metric-grid">
      <article><span>Freshness</span><strong>${config.freshnessScore}/100</strong><p>${config.age} day${config.age === 1 ? "" : "s"} old; max ${config.maxAge} day rule.</p></article>
      <article><span>Format</span><strong>${config.formatScore}/100</strong><p>${escapeHtml(sourceIntakeFormatLabel(config.format))}</p></article>
      <article><span>Evidence</span><strong>${config.evidenceScore}/100</strong><p>${escapeHtml(sourceIntakeEvidenceLabel(config.evidence))}</p></article>
      <article><span>Owner</span><strong>${escapeHtml(config.pipeline.owner)}</strong><p>${escapeHtml(config.pipeline.cadence)} source cadence.</p></article>
    </div>
    <div class="source-intake-grid">
      <article class="source-intake-card">
        <h3>Field contract</h3>
        <div class="field-chip-list">
          ${config.contractFields.map((field) => `<span>${escapeHtml(field)}</span>`).join("")}
        </div>
      </article>
      <article class="source-intake-card">
        <h3>Citation contract</h3>
        <p>${escapeHtml(config.citation.citationPath)}</p>
        <p>${escapeHtml(config.citation.launchGate)}</p>
      </article>
      <article class="source-intake-card">
        <h3>Validation runbook</h3>
        <ul class="data-check-list">
          ${config.validation.slice(0, 7).map((check) => `<li>${escapeHtml(check)}</li>`).join("")}
        </ul>
      </article>
      <article class="source-intake-card ${escapeHtml(config.tone)}">
        <h3>Blockers and handoff</h3>
        <ul class="data-check-list">
          ${config.blockers.slice(0, 7).map((blocker) => `<li>${escapeHtml(blocker)}</li>`).join("")}
        </ul>
      </article>
    </div>
    <div class="source-intake-panel-grid">
      <article class="source-intake-panel">
        <h3>Launch handoff</h3>
        <p>Store source URL or file hash, source date, extraction confidence, parser version, validation result, owner, rollback note, and citation display text before enabling live claims.</p>
      </article>
      <article class="source-intake-panel source-intake-guardrail">
        <h3>Privacy boundary</h3>
        <p>Source intake is for official public or licensed data only. It must not collect PAN, folio, CAS, bank data, login credentials, or distributor client records.</p>
      </article>
    </div>
  `;
}

function makeSourceIntakeNote() {
  const config = sourceIntakeConfig();
  return [
    "# NiveshNadi Source Intake Console",
    `Release: ${RELEASE_LABEL} (${DATA_VERSION})`,
    `Source family: ${config.pipeline.title}`,
    `Owner: ${config.pipeline.owner}`,
    `Intake path: ${sourceIntakeChannelLabel(config.channel)}`,
    `Format: ${sourceIntakeFormatLabel(config.format)}`,
    `Evidence visibility: ${sourceIntakeEvidenceLabel(config.evidence)}`,
    `Scope: ${sourceIntakeScopeLabel(config.scope)}`,
    `Source age: ${config.age} days`,
    `Intake score: ${config.score}/100`,
    `Posture: ${config.posture}`,
    `Next step: ${config.nextStep}`,
    "",
    "## Field contract",
    ...config.contractFields.map((field) => `- ${field}`),
    "",
    "## Validation runbook",
    ...config.validation.map((check) => `- ${check}`),
    "",
    "## Blockers",
    ...config.blockers.map((blocker) => `- ${blocker}`),
    "",
    "## Privacy boundary",
    "Use only official public or licensed source data. Exclude PAN, folio, CAS, bank data, credentials, distributor client records, and private investor notes."
  ].join("\n");
}

function selectedSourceDriftPipeline() {
  const id = els.sourceDriftSource?.value || els.sourceIntakeSource?.value || DATA_PIPELINES[0].id;
  return DATA_PIPELINES.find((pipeline) => pipeline.id === id) || DATA_PIPELINES[0];
}

function sourceDriftChangeProfile(change) {
  return {
    "routine-refresh": {
      label: "Routine data refresh",
      baseImpact: 12,
      fields: ["source date", "latest value", "citation timestamp"],
      question: "Did routine refresh preserve scheme identity, source date, and visible citation?"
    },
    "expense-change": {
      label: "Expense or TER change",
      baseImpact: 46,
      fields: ["TER", "expense history", "cost lab", "decision receipt"],
      question: "Should cost labels, Cost Reality Lab, and research receipts be refreshed?"
    },
    "holdings-change": {
      label: "Holding or sector change",
      baseImpact: 52,
      fields: ["top holdings", "sector map", "overlap", "portfolio X-Ray"],
      question: "Does the portfolio X-Ray need a fresh overlap and concentration review?"
    },
    "document-change": {
      label: "SID/KIM or factsheet revision",
      baseImpact: 58,
      fields: ["objective", "risk text", "loads", "minimum SIP", "factsheet clauses"],
      question: "Do document summaries, launch gates, and user-facing explanations need re-approval?"
    },
    "risk-change": {
      label: "Riskometer or drawdown change",
      baseImpact: 64,
      fields: ["risk band", "stress lab", "behavior guard", "watchlist triggers"],
      question: "Should risk labels, stress outputs, and watchlist triggers be re-run before display?"
    },
    "schema-change": {
      label: "Format or schema change",
      baseImpact: 72,
      fields: ["parser", "field map", "validation checks", "extraction confidence"],
      question: "Is parser QA complete before any extracted value is trusted?"
    }
  }[change] || sourceDriftChangeProfile("routine-refresh");
}

function sourceDriftMagnitudeLabel(value) {
  return {
    small: "Small drift",
    medium: "Medium drift",
    high: "High drift",
    structural: "Structural change"
  }[value] || "Small drift";
}

function sourceDriftProofLabel(value) {
  return {
    verified: "Source date and citation verified",
    partial: "Source date visible, extraction pending",
    missing: "Proof missing"
  }[value] || "Source date and citation verified";
}

function sourceDriftActionLabel(value) {
  return {
    preview: "Preview refresh only",
    queue: "Queue research refresh",
    block: "Block live display"
  }[value] || "Preview refresh only";
}

function sourceDriftConfig() {
  const pipeline = selectedSourceDriftPipeline();
  const citation = CITATION_SOURCES.find((source) => source.id === pipeline.id) || CITATION_SOURCES[0];
  const fund = selectedFund();
  const change = els.sourceDriftChange?.value || "routine-refresh";
  const magnitude = els.sourceDriftMagnitude?.value || "small";
  const age = clampNumber(Number(els.sourceDriftAge?.value || 0), 0, 365);
  const proof = els.sourceDriftProof?.value || "verified";
  const action = els.sourceDriftAction?.value || "preview";
  const profile = sourceDriftChangeProfile(change);
  const maxAge = Math.max(1, citation.maxAge || pipeline.freshnessDays);
  const staleDays = Math.max(0, age - maxAge);
  const freshnessScore = clampNumber(Math.round(100 - staleDays * 3), 20, 100);
  const magnitudeScore = {
    small: 92,
    medium: 74,
    high: 48,
    structural: 26
  }[magnitude] || 74;
  const proofScore = {
    verified: 92,
    partial: 62,
    missing: 24
  }[proof] || 62;
  const actionScore = {
    preview: 84,
    queue: 72,
    block: 36
  }[action] || 72;
  const impact = clampNumber(
    profile.baseImpact +
      ({ small: 0, medium: 15, high: 30, structural: 44 }[magnitude] || 0) +
      (proof === "missing" ? 14 : proof === "partial" ? 7 : 0) +
      (staleDays ? 12 : 0),
    5,
    96
  );
  const driftScore = Math.round(clampNumber(
    pipeline.readiness * 0.2 +
      freshnessScore * 0.16 +
      proofScore * 0.24 +
      magnitudeScore * 0.15 +
      actionScore * 0.11 +
      (100 - impact) * 0.14,
    18,
    96
  ));
  const hardFlags = [
    ...(action === "block" ? ["release action blocks live display"] : []),
    ...(proof === "missing" ? ["source proof missing"] : []),
    ...(magnitude === "structural" ? ["structural schema or meaning change"] : []),
    ...(staleDays ? [`new source is stale by ${staleDays} day${staleDays === 1 ? "" : "s"}`] : [])
  ];
  const flags = [
    ...hardFlags,
    ...(proof === "partial" ? ["extraction confidence pending"] : []),
    ...(magnitude === "high" ? ["high drift needs research review"] : []),
    ...pipeline.blockers.slice(0, 3)
  ];
  const posture = hardFlags.length
    ? "Hold live claims"
    : driftScore >= 84
      ? "Routine refresh"
      : driftScore >= 68
        ? "Review before publish"
        : driftScore >= 52
          ? "QA escalation"
          : "Block refresh";
  const tone = posture === "Routine refresh" ? "ready" : posture === "Hold live claims" || posture === "Block refresh" ? "caution" : "watch";
  const affectedFields = Array.from(new Set([...profile.fields, ...pipeline.fields.slice(0, 4)]));
  const nextStep = hardFlags.length
    ? `Keep investor-facing claims frozen until ${hardFlags[0]} is resolved.`
    : posture === "Routine refresh"
      ? "Refresh preview claims, keep citation visible, and store source-diff receipt."
      : "Route to research QA before updating score, cost, risk, holding, or document copy.";
  return {
    action,
    affectedFields,
    age,
    citation,
    change,
    driftScore,
    flags,
    freshnessScore,
    fund,
    impact,
    magnitude,
    magnitudeScore,
    maxAge,
    nextStep,
    pipeline,
    posture,
    profile,
    proof,
    proofScore,
    staleDays,
    tone
  };
}

function renderSourceDriftMonitor(event) {
  if (event) event.preventDefault();
  if (!els.sourceDriftOutput || !els.sourceDriftSummary) return;
  const config = sourceDriftConfig();
  els.sourceDriftSummary.textContent = `${config.driftScore}/100 | ${config.posture}`;
  els.sourceDriftOutput.innerHTML = `
    <div class="source-drift-hero ${escapeHtml(config.tone)}">
      <div>
        <span class="metric-label">${escapeHtml(config.profile.label)}</span>
        <h3>${escapeHtml(config.posture)}</h3>
        <p>${escapeHtml(config.nextStep)} Source: ${escapeHtml(config.pipeline.title)} for ${escapeHtml(config.fund.name)}.</p>
      </div>
      <div class="source-drift-score" style="--score:${config.driftScore}">
        <b>${config.driftScore}</b>
        <span>Drift</span>
      </div>
    </div>
    <div class="source-drift-metric-grid">
      <article><span>Impact</span><strong>${config.impact}/100</strong><p>${escapeHtml(sourceDriftMagnitudeLabel(config.magnitude))}</p></article>
      <article><span>Freshness</span><strong>${config.freshnessScore}/100</strong><p>${config.age} day${config.age === 1 ? "" : "s"} old; max ${config.maxAge} day rule.</p></article>
      <article><span>Proof</span><strong>${config.proofScore}/100</strong><p>${escapeHtml(sourceDriftProofLabel(config.proof))}</p></article>
      <article><span>Action</span><strong>${escapeHtml(sourceDriftActionLabel(config.action))}</strong><p>${escapeHtml(config.pipeline.owner)} owns the first handoff.</p></article>
    </div>
    <div class="source-drift-grid">
      <article class="source-drift-card">
        <h3>Affected fields</h3>
        <div class="field-chip-list">
          ${config.affectedFields.map((field) => `<span>${escapeHtml(field)}</span>`).join("")}
        </div>
      </article>
      <article class="source-drift-card">
        <h3>Research question</h3>
        <p>${escapeHtml(config.profile.question)}</p>
        <p>${escapeHtml(config.citation.launchGate)}</p>
      </article>
      <article class="source-drift-card ${escapeHtml(config.tone)}">
        <h3>Flags</h3>
        <ul class="data-check-list">
          ${config.flags.slice(0, 7).map((flag) => `<li>${escapeHtml(flag)}</li>`).join("")}
        </ul>
      </article>
      <article class="source-drift-card">
        <h3>Refresh boundary</h3>
        <p>Do not refresh Nadi score, cost lens, X-Ray, risk labels, document explanations, receipts, or decision packs until the drift note is resolved.</p>
      </article>
    </div>
    <div class="source-drift-panel-grid">
      <article class="source-drift-panel">
        <h3>Source-diff receipt</h3>
        <p>Capture previous source date, new source date, changed fields, parser version, validation result, reviewer, citation path, and rollback note.</p>
      </article>
      <article class="source-drift-panel source-drift-guardrail">
        <h3>Privacy boundary</h3>
        <p>Drift monitoring compares official or licensed source records only. It must not inspect PAN, folio, CAS, bank data, credentials, or distributor client records.</p>
      </article>
    </div>
  `;
}

function makeSourceDriftNote() {
  const config = sourceDriftConfig();
  return [
    "# NiveshNadi Source Drift Monitor",
    `Release: ${RELEASE_LABEL} (${DATA_VERSION})`,
    `Source family: ${config.pipeline.title}`,
    `Change type: ${config.profile.label}`,
    `Drift size: ${sourceDriftMagnitudeLabel(config.magnitude)}`,
    `Proof status: ${sourceDriftProofLabel(config.proof)}`,
    `Release action: ${sourceDriftActionLabel(config.action)}`,
    `New source age: ${config.age} days`,
    `Drift score: ${config.driftScore}/100`,
    `Impact: ${config.impact}/100`,
    `Posture: ${config.posture}`,
    `Next step: ${config.nextStep}`,
    "",
    "## Affected fields",
    ...config.affectedFields.map((field) => `- ${field}`),
    "",
    "## Flags",
    ...config.flags.map((flag) => `- ${flag}`),
    "",
    "## Source-diff receipt",
    "- previous source date",
    "- new source date",
    "- changed fields",
    "- parser or extraction version",
    "- validation result",
    "- reviewer and rollback note",
    "- visible citation path",
    "",
    "## Privacy boundary",
    "Compare only official public or licensed source records. Exclude PAN, folio, CAS, bank data, credentials, distributor client records, and private investor notes."
  ].join("\n");
}

function selectedClaimReleasePipeline() {
  const id = els.claimReleaseSource?.value || els.sourceDriftSource?.value || els.sourceIntakeSource?.value || DATA_PIPELINES[0].id;
  return DATA_PIPELINES.find((pipeline) => pipeline.id === id) || DATA_PIPELINES[0];
}

function claimReleaseSurfaceProfile(surface) {
  return {
    "screener-score": {
      label: "Screener score and fund card",
      baseRisk: 38,
      surfaces: ["fund card score", "signal bars", "score anatomy", "compare score"],
      question: "Can the selected fund card and score move from old source evidence to the refreshed source without misleading an investor?"
    },
    "cost-risk": {
      label: "Cost, TER, and risk labels",
      baseRisk: 52,
      surfaces: ["Cost Reality Lab", "TER label", "risk badge", "readiness gate"],
      question: "Are TER, riskometer, cost drag, and stress labels current enough for public research display?"
    },
    "portfolio-xray": {
      label: "Portfolio X-Ray and holdings",
      baseRisk: 58,
      surfaces: ["Portfolio X-Ray", "Blueprint", "Rebalance", "Review Room"],
      question: "Do holdings, sector, issuer, and overlap claims have a fresh disclosure date and extraction confidence?"
    },
    "doc-summary": {
      label: "Doc Decoder and source explanations",
      baseRisk: 62,
      surfaces: ["Doc Decoder", "Citation Binder", "Evidence Ledger", "Claim Checker"],
      question: "Are document summaries tied to the latest SID, KIM, factsheet, or disclosure version?"
    },
    "receipt-pack": {
      label: "Receipts, Pack, and Dossier",
      baseRisk: 46,
      surfaces: ["Research Receipt", "Decision Pack", "Dossier", "Review Vault"],
      question: "Will saved research artifacts clearly show the source date, data mode, and review boundary?"
    },
    "alerts-watchlist": {
      label: "Watchlist and alert triggers",
      baseRisk: 42,
      surfaces: ["Watchlist triggers", "Review Rhythm", "Behavior Guard", "Research Pulse"],
      question: "Can alerts and review prompts refresh without creating transaction pressure or hidden advice?"
    }
  }[surface] || claimReleaseSurfaceProfile("screener-score");
}

function claimReleaseEvidenceLabel(value) {
  return {
    verified: "Verified source date, citation, and extraction",
    reviewed: "Reviewed but not fully automated",
    partial: "Partial proof or confidence gap",
    missing: "Missing release proof"
  }[value] || "Verified source date, citation, and extraction";
}

function claimReleaseReviewerLabel(value) {
  return {
    "self-check": "Self-check preview only",
    "research-approved": "Research reviewer approved",
    "compliance-review": "Compliance review needed",
    blocked: "Reviewer blocked release"
  }[value] || "Self-check preview only";
}

function claimReleaseScopeLabel(value) {
  return {
    preview: "Preview only",
    "selected-fund": "Selected fund only",
    category: "Category lane",
    "all-demo": "All mapped demo claims"
  }[value] || "Preview only";
}

function claimReleaseRollbackLabel(value) {
  return {
    ready: "Rollback note ready",
    draft: "Rollback note draft",
    missing: "Rollback missing"
  }[value] || "Rollback note ready";
}

function claimReleaseConfig() {
  const pipeline = selectedClaimReleasePipeline();
  const citation = CITATION_SOURCES.find((source) => source.id === pipeline.id) || CITATION_SOURCES[0];
  const fund = selectedFund();
  const drift = typeof sourceDriftConfig === "function" ? sourceDriftConfig() : null;
  const surface = els.claimReleaseSurface?.value || "screener-score";
  const evidence = els.claimReleaseEvidence?.value || "verified";
  const reviewer = els.claimReleaseReviewer?.value || "self-check";
  const scope = els.claimReleaseScope?.value || "preview";
  const rollback = els.claimReleaseRollback?.value || "ready";
  const profile = claimReleaseSurfaceProfile(surface);
  const evidenceScore = {
    verified: 94,
    reviewed: 78,
    partial: 48,
    missing: 16
  }[evidence] || 48;
  const reviewerScore = {
    "research-approved": 92,
    "self-check": 72,
    "compliance-review": 46,
    blocked: 10
  }[reviewer] || 72;
  const scopeScore = {
    preview: 88,
    "selected-fund": 78,
    category: 62,
    "all-demo": 48
  }[scope] || 88;
  const rollbackScore = {
    ready: 90,
    draft: 64,
    missing: 24
  }[rollback] || 64;
  const sourceScore = clampNumber(Math.round((pipeline.readiness + citation.maxAge) / 2), 24, 92);
  const driftGuardScore = drift?.posture === "Routine refresh"
    ? 88
    : drift?.posture === "Review before publish"
      ? 64
      : drift?.posture === "Hold live claims" || drift?.posture === "Block refresh"
        ? 18
        : 50;
  const riskLoad = profile.baseRisk + (scope === "all-demo" ? 18 : scope === "category" ? 10 : 0) + (surface === "doc-summary" ? 7 : 0);
  const releaseScore = Math.round(clampNumber(
    pipeline.readiness * 0.16 +
      evidenceScore * 0.26 +
      reviewerScore * 0.2 +
      rollbackScore * 0.14 +
      scopeScore * 0.1 +
      driftGuardScore * 0.09 +
      sourceScore * 0.05 -
      riskLoad * 0.05,
    18,
    96
  ));
  const hardFlags = [
    ...(evidence === "missing" ? ["missing release proof"] : []),
    ...(reviewer === "blocked" ? ["reviewer blocked release"] : []),
    ...(rollback === "missing" ? ["rollback note missing"] : []),
    ...(drift?.posture === "Hold live claims" || drift?.posture === "Block refresh" ? [`source drift says ${drift.posture.toLowerCase()}`] : []),
    ...(scope === "all-demo" && reviewer !== "research-approved" ? ["broad rollout needs research reviewer approval"] : [])
  ];
  const flags = [
    ...hardFlags,
    ...(reviewer === "compliance-review" ? ["compliance review needed"] : []),
    ...(evidence === "partial" ? ["partial proof must stay in preview"] : []),
    ...(rollback === "draft" ? ["rollback note is still draft"] : []),
    ...(profile.baseRisk >= 58 ? ["higher-risk claim surface needs citation lock"] : []),
    ...pipeline.blockers.slice(0, 2)
  ];
  const decision = hardFlags.length
    ? "Keep claims frozen"
    : releaseScore >= 84 && reviewer === "research-approved"
      ? "Release selected claim"
      : releaseScore >= 74
        ? "Preview release"
        : releaseScore >= 58
          ? "Reviewer queue"
          : "Do not release";
  const tone = decision === "Release selected claim"
    ? "ready"
    : decision === "Keep claims frozen" || decision === "Do not release"
      ? "caution"
      : "watch";
  const nextStep = decision === "Release selected claim"
    ? `Publish the ${profile.label.toLowerCase()} refresh for ${fund.name}, retain citation date, and save a release receipt.`
    : decision === "Preview release"
      ? `Keep ${profile.label.toLowerCase()} in preview and ask a reviewer to confirm source evidence before public display.`
      : decision === "Reviewer queue"
        ? `Route ${profile.label.toLowerCase()} to the research queue with source proof, changed fields, and rollback note.`
        : `Keep ${profile.label.toLowerCase()} frozen until ${hardFlags[0] || "release evidence"} is resolved.`;
  const affectedClaims = Array.from(new Set([
    ...profile.surfaces,
    `${fund.name} Nadi score ${nadiScore(fund)}/100`,
    `${fund.category} evidence ${evidenceReadinessScore(fund)}/100`,
    `${pipeline.title} readiness ${pipeline.readiness}/100`
  ]));
  return {
    affectedClaims,
    citation,
    decision,
    drift,
    driftGuardScore,
    evidence,
    evidenceScore,
    flags,
    fund,
    nextStep,
    pipeline,
    profile,
    releaseScore,
    reviewer,
    reviewerScore,
    rollback,
    rollbackScore,
    scope,
    scopeScore,
    sourceScore,
    surface,
    tone
  };
}

function renderClaimReleaseGate(event) {
  if (event) event.preventDefault();
  if (!els.claimReleaseOutput || !els.claimReleaseSummary) return;
  const config = claimReleaseConfig();
  els.claimReleaseSummary.textContent = `${config.releaseScore}/100 | ${config.decision}`;
  els.claimReleaseOutput.innerHTML = `
    <div class="claim-release-hero ${escapeHtml(config.tone)}">
      <div>
        <span class="metric-label">${escapeHtml(config.profile.label)}</span>
        <h3>${escapeHtml(config.decision)}</h3>
        <p>${escapeHtml(config.nextStep)} Source: ${escapeHtml(config.pipeline.title)} for ${escapeHtml(config.fund.name)}.</p>
      </div>
      <div class="claim-release-score" style="--score:${config.releaseScore}">
        <b>${config.releaseScore}</b>
        <span>Release</span>
      </div>
    </div>
    <div class="claim-release-metric-grid">
      <article><span>Evidence</span><strong>${config.evidenceScore}/100</strong><p>${escapeHtml(claimReleaseEvidenceLabel(config.evidence))}</p></article>
      <article><span>Reviewer</span><strong>${config.reviewerScore}/100</strong><p>${escapeHtml(claimReleaseReviewerLabel(config.reviewer))}</p></article>
      <article><span>Scope</span><strong>${config.scopeScore}/100</strong><p>${escapeHtml(claimReleaseScopeLabel(config.scope))}</p></article>
      <article><span>Rollback</span><strong>${config.rollbackScore}/100</strong><p>${escapeHtml(claimReleaseRollbackLabel(config.rollback))}</p></article>
    </div>
    <div class="claim-release-grid">
      <article class="claim-release-card">
        <h3>Affected public claims</h3>
        <div class="field-chip-list">
          ${config.affectedClaims.map((claim) => `<span>${escapeHtml(claim)}</span>`).join("")}
        </div>
      </article>
      <article class="claim-release-card">
        <h3>Release question</h3>
        <p>${escapeHtml(config.profile.question)}</p>
        <p>${escapeHtml(config.citation.launchGate)}</p>
      </article>
      <article class="claim-release-card ${escapeHtml(config.tone)}">
        <h3>Gate flags</h3>
        <ul class="data-check-list">
          ${config.flags.slice(0, 8).map((flag) => `<li>${escapeHtml(flag)}</li>`).join("")}
        </ul>
      </article>
      <article class="claim-release-card">
        <h3>Release receipt</h3>
        <p>Store old claim, new claim, source date, citation path, reviewer, rollout scope, rollback note, and user-visible data mode before release.</p>
      </article>
    </div>
    <div class="claim-release-panel-grid">
      <article class="claim-release-panel">
        <h3>Launch rule</h3>
        <p>Public claims move only when source proof, reviewer posture, rollback discipline, and drift guard are all strong enough for the selected surface.</p>
      </article>
      <article class="claim-release-panel claim-release-guardrail">
        <h3>Privacy boundary</h3>
        <p>The release gate handles product claims and source evidence only. It must not require PAN, folio, CAS, account credentials, bank data, distributor client records, or private investor notes.</p>
      </article>
    </div>
  `;
}

function makeClaimReleaseNote() {
  const config = claimReleaseConfig();
  return [
    "# NiveshNadi Claim Release Gate",
    `Release: ${RELEASE_LABEL} (${DATA_VERSION})`,
    `Fund: ${config.fund.name}`,
    `Source family: ${config.pipeline.title}`,
    `Release surface: ${config.profile.label}`,
    `Decision: ${config.decision}`,
    `Release score: ${config.releaseScore}/100`,
    `Evidence status: ${claimReleaseEvidenceLabel(config.evidence)}`,
    `Reviewer status: ${claimReleaseReviewerLabel(config.reviewer)}`,
    `Rollout scope: ${claimReleaseScopeLabel(config.scope)}`,
    `Rollback: ${claimReleaseRollbackLabel(config.rollback)}`,
    `Source drift guard: ${config.drift?.posture || "Not run"}`,
    `Next step: ${config.nextStep}`,
    "",
    "## Affected public claims",
    ...config.affectedClaims.map((claim) => `- ${claim}`),
    "",
    "## Gate flags",
    ...config.flags.map((flag) => `- ${flag}`),
    "",
    "## Privacy boundary",
    "This gate evaluates product claims and source evidence only. It excludes PAN, folio, CAS, account credentials, bank data, distributor client records, contact data, and private investor notes.",
    "",
    "Research support only. It does not approve an investment, transaction, recommendation, or personalized advice."
  ].join("\n");
}

function claimReleaseSnapshotFromConfig(config = claimReleaseConfig()) {
  return {
    id: `claim-release-${Date.now()}-${Math.random().toString(16).slice(2)}`,
    createdAt: new Date().toISOString(),
    release: RELEASE_LABEL,
    dataVersion: DATA_VERSION,
    fund: {
      id: config.fund.id,
      name: config.fund.name,
      category: config.fund.category,
      risk: config.fund.risk
    },
    source: {
      id: config.pipeline.id,
      title: config.pipeline.title,
      owner: config.pipeline.owner,
      readiness: config.pipeline.readiness
    },
    surface: config.surface,
    surfaceLabel: config.profile.label,
    decision: config.decision,
    score: config.releaseScore,
    tone: config.tone,
    nextStep: config.nextStep,
    metrics: {
      evidence: config.evidenceScore,
      reviewer: config.reviewerScore,
      scope: config.scopeScore,
      rollback: config.rollbackScore,
      driftGuard: config.driftGuardScore,
      source: config.sourceScore
    },
    labels: {
      evidence: claimReleaseEvidenceLabel(config.evidence),
      reviewer: claimReleaseReviewerLabel(config.reviewer),
      scope: claimReleaseScopeLabel(config.scope),
      rollback: claimReleaseRollbackLabel(config.rollback),
      drift: config.drift?.posture || "Not run"
    },
    flags: config.flags.slice(0, 8),
    affectedClaims: config.affectedClaims.slice(0, 8),
    privacyStatus: "Identity-light product claim record"
  };
}

function saveCurrentClaimReleaseSnapshot() {
  const snapshot = claimReleaseSnapshotFromConfig();
  const entries = [snapshot, ...loadClaimReleaseLedger()].slice(0, 24);
  saveClaimReleaseLedger(entries);
  renderClaimReleaseLedger();
  renderClaimRollbackConsole();
  renderCorrectionNoticeBuilder();
  renderCorrectionNoticeLedger();
  renderTrustCenter();
  renderActionPlanner();
  renderResearchMemory();
  renderPrivacyControlRoom();
  toast("Claim release saved locally.");
}

function clearClaimReleaseLedger() {
  saveClaimReleaseLedger([]);
  renderClaimReleaseLedger();
  renderClaimRollbackConsole();
  renderCorrectionNoticeBuilder();
  renderCorrectionNoticeLedger();
  renderTrustCenter();
  renderActionPlanner();
  renderResearchMemory();
  renderPrivacyControlRoom();
  toast("Claim release ledger cleared.");
}

function claimLedgerDecisionCounts(entries) {
  return entries.reduce((counts, entry) => {
    counts[entry.decision] = (counts[entry.decision] || 0) + 1;
    return counts;
  }, {});
}

function claimLedgerPosture(entry) {
  if (!entry) return "No saved release decisions yet";
  if (entry.decision === "Release selected claim") return "Released with evidence trail";
  if (entry.decision === "Preview release") return "Preview kept out of public claims";
  if (entry.decision === "Reviewer queue") return "Reviewer queue active";
  return "Claims frozen until proof improves";
}

function renderClaimReleaseLedger() {
  if (!els.claimLedgerOutput || !els.claimLedgerSummary) return;
  const entries = loadClaimReleaseLedger();
  const current = claimReleaseSnapshotFromConfig();
  const latest = entries[0] || null;
  const prior = entries[1] || null;
  const counts = claimLedgerDecisionCounts(entries);
  const releaseCount = counts["Release selected claim"] || 0;
  const previewCount = counts["Preview release"] || 0;
  const queueCount = counts["Reviewer queue"] || 0;
  const frozenCount = (counts["Keep claims frozen"] || 0) + (counts["Do not release"] || 0);
  const scoreDelta = latest ? reviewVaultDelta(latest.score, prior?.score) : "New";
  const evidenceDelta = latest ? reviewVaultDelta(latest.metrics.evidence, prior?.metrics.evidence) : "New";

  els.claimLedgerSummary.textContent = `${entries.length} entr${entries.length === 1 ? "y" : "ies"}`;

  if (!entries.length) {
    els.claimLedgerOutput.innerHTML = `
      <div class="claim-ledger-empty">
        <div>
          <span class="metric-label">Current release preview</span>
          <h3>${current.score}/100 ${escapeHtml(current.decision)}</h3>
          <p>Save the current Claim Release Gate result to start a browser-local audit trail. The ledger stores product claim metadata, source family, decision posture, and flags only.</p>
        </div>
        <div class="claim-ledger-score" style="--score:${current.score}">
          <b>${current.score}</b>
          <span>Now</span>
        </div>
      </div>
    `;
    return;
  }

  els.claimLedgerOutput.innerHTML = `
    <div class="claim-ledger-hero ${escapeHtml(latest.tone)}">
      <div>
        <span class="metric-label">Latest saved release decision</span>
        <h3>${escapeHtml(latest.decision)}</h3>
        <p>${escapeHtml(claimLedgerPosture(latest))} | ${escapeHtml(latest.surfaceLabel)} | Saved ${new Date(latest.createdAt).toLocaleString("en-IN")}.</p>
      </div>
      <div class="claim-ledger-score" style="--score:${latest.score}">
        <b>${latest.score}</b>
        <span>Ledger</span>
      </div>
    </div>
    <div class="claim-ledger-metric-grid">
      <div><span>Entries</span><strong>${entries.length}</strong></div>
      <div><span>Score delta</span><strong>${escapeHtml(scoreDelta)}</strong></div>
      <div><span>Evidence delta</span><strong>${escapeHtml(evidenceDelta)}</strong></div>
      <div><span>Released</span><strong>${releaseCount}</strong></div>
      <div><span>Preview</span><strong>${previewCount}</strong></div>
      <div><span>Frozen</span><strong>${frozenCount}</strong></div>
    </div>
    <div class="claim-ledger-grid">
      ${entries.slice(0, 6).map((entry, index) => {
        const previous = entries[index + 1] || null;
        return `
          <article class="claim-ledger-card ${escapeHtml(entry.tone)}">
            <div class="claim-ledger-card-head">
              <span>${escapeHtml(entry.surfaceLabel)}</span>
              <strong>${entry.score}/100</strong>
            </div>
            <p>${escapeHtml(entry.decision)} | ${escapeHtml(entry.fund.name)} | ${escapeHtml(entry.source.title)}</p>
            <div class="claim-ledger-mini-grid">
              <div><span>Evidence</span><b>${entry.metrics.evidence}/100</b></div>
              <div><span>Reviewer</span><b>${entry.metrics.reviewer}/100</b></div>
              <div><span>Scope</span><b>${entry.metrics.scope}/100</b></div>
            </div>
            <small>Score ${escapeHtml(reviewVaultDelta(entry.score, previous?.score))} from prior release | ${escapeHtml(entry.labels.drift)}</small>
          </article>
        `;
      }).join("")}
    </div>
    <div class="claim-ledger-card-grid">
      <article class="claim-ledger-panel">
        <h3>Latest flags</h3>
        <ul class="claim-ledger-list">
          ${latest.flags.map((flag) => `<li>${escapeHtml(flag)}</li>`).join("") || "<li>No gate flags saved on latest entry.</li>"}
        </ul>
      </article>
      <article class="claim-ledger-panel">
        <h3>Claim surfaces</h3>
        <div class="claim-ledger-funds">
          ${latest.affectedClaims.map((claim) => `<span>${escapeHtml(claim)}</span>`).join("")}
        </div>
      </article>
      <article class="claim-ledger-panel claim-ledger-guardrail">
        <h3>Privacy rule</h3>
        <p>The ledger is browser-local and identity-light. It must not store PAN, folio, CAS text, account credentials, bank data, client identifiers, contact data, or private investor notes.</p>
      </article>
    </div>
  `;
}

function makeClaimReleaseLedgerBrief() {
  const entries = loadClaimReleaseLedger();
  const current = claimReleaseSnapshotFromConfig();
  const latest = entries[0] || current;
  const prior = entries[1] || null;
  const counts = claimLedgerDecisionCounts(entries);
  return [
    "# NiveshNadi Claim Release Ledger",
    `Release: ${RELEASE_LABEL} (${DATA_VERSION})`,
    `Saved entries: ${entries.length}`,
    `Latest decision: ${latest.decision}`,
    `Latest release score: ${latest.score}/100`,
    `Latest surface: ${latest.surfaceLabel}`,
    `Latest fund: ${latest.fund.name}`,
    `Latest source: ${latest.source.title}`,
    `Score delta: ${reviewVaultDelta(latest.score, prior?.score)}`,
    `Evidence delta: ${reviewVaultDelta(latest.metrics.evidence, prior?.metrics.evidence)}`,
    "",
    "## Decision Mix",
    `- Released: ${counts["Release selected claim"] || 0}`,
    `- Preview: ${counts["Preview release"] || 0}`,
    `- Reviewer queue: ${counts["Reviewer queue"] || 0}`,
    `- Frozen or not released: ${(counts["Keep claims frozen"] || 0) + (counts["Do not release"] || 0)}`,
    "",
    "## Latest Gate Metrics",
    `- Evidence: ${latest.metrics.evidence}/100 (${latest.labels.evidence})`,
    `- Reviewer: ${latest.metrics.reviewer}/100 (${latest.labels.reviewer})`,
    `- Scope: ${latest.metrics.scope}/100 (${latest.labels.scope})`,
    `- Rollback: ${latest.metrics.rollback}/100 (${latest.labels.rollback})`,
    `- Drift guard: ${latest.metrics.driftGuard}/100 (${latest.labels.drift})`,
    "",
    "## Latest Flags",
    ...(latest.flags.length ? latest.flags.map((flag) => `- ${flag}`) : ["- No saved gate flags."]),
    "",
    "## Recent Entries",
    ...(entries.length ? entries.slice(0, 8).map((entry) => `- ${new Date(entry.createdAt).toLocaleString("en-IN")}: ${entry.decision}, ${entry.surfaceLabel}, ${entry.score}/100, ${entry.fund.name}`) : ["- No saved entries yet. This brief uses the current release preview."]),
    "",
    "## Privacy boundary",
    "Claim Release Ledger stores browser-local product-claim metadata only. Exclude PAN, folio, CAS, account credentials, bank data, client identifiers, contact data, and private investor notes.",
    "",
    "Research support only. The ledger is not advice, execution approval, distributor workflow approval, or a return guarantee."
  ].join("\n");
}

function claimRollbackTriggerProfile(value) {
  return {
    "stale-source": {
      label: "Source became stale",
      baseRisk: 42,
      immediateStep: "Freeze the public claim until source date and citation are refreshed.",
      checks: ["source date", "citation URL", "freshness rule", "affected saved artifacts"]
    },
    "wrong-value": {
      label: "Wrong value or label displayed",
      baseRisk: 78,
      immediateStep: "Remove or revert the displayed claim and prepare a correction note.",
      checks: ["old value", "correct value", "screens affected", "release ledger entry"]
    },
    "parser-break": {
      label: "Parser or extraction break",
      baseRisk: 68,
      immediateStep: "Stop extracted-field display and route parser output to source QA.",
      checks: ["parser version", "field mapping", "sample source", "validation result"]
    },
    "compliance-language": {
      label: "Compliance language concern",
      baseRisk: 74,
      immediateStep: "Hold public copy and send the affected wording to compliance review.",
      checks: ["claim wording", "advice boundary", "risk disclaimer", "reviewer sign-off"]
    },
    "user-confusion": {
      label: "User confusion risk",
      baseRisk: 50,
      immediateStep: "Clarify the claim surface and add research-only context before release.",
      checks: ["screen label", "plain-English copy", "decision boundary", "help text"]
    }
  }[value] || claimRollbackTriggerProfile("stale-source");
}

function claimRollbackSeverityLabel(value) {
  return {
    low: "Low",
    medium: "Medium",
    high: "High",
    critical: "Critical"
  }[value] || "Low";
}

function claimRollbackExposureLabel(value) {
  return {
    preview: "Preview only",
    "single-fund": "Single fund public surface",
    category: "Category lane",
    "all-public": "All public mapped claims"
  }[value] || "Preview only";
}

function claimRollbackActionLabel(value) {
  return {
    "hide-claim": "Hide affected claim",
    "revert-prior": "Revert to prior approved value",
    "correction-note": "Publish correction note",
    "reviewer-hold": "Hold for reviewer approval"
  }[value] || "Hide affected claim";
}

function claimRollbackNoticeLabel(value) {
  return {
    "internal-note": "Internal release note only",
    "user-visible": "User-visible correction note",
    "admin-log": "Admin log and reviewer sign-off"
  }[value] || "Internal release note only";
}

function claimRollbackOwnerLabel(value) {
  return {
    research: "Research owner",
    data: "Data operations",
    compliance: "Compliance reviewer",
    product: "Product release owner"
  }[value] || "Research owner";
}

function claimRollbackConfig() {
  const entries = loadClaimReleaseLedger();
  const latest = entries[0] || claimReleaseSnapshotFromConfig();
  const currentGate = claimReleaseConfig();
  const trigger = els.claimRollbackTrigger?.value || "stale-source";
  const severity = els.claimRollbackSeverity?.value || "low";
  const exposure = els.claimRollbackExposure?.value || "preview";
  const action = els.claimRollbackAction?.value || "hide-claim";
  const notice = els.claimRollbackNotice?.value || "internal-note";
  const owner = els.claimRollbackOwner?.value || "research";
  const profile = claimRollbackTriggerProfile(trigger);
  const severityScore = {
    low: 24,
    medium: 52,
    high: 76,
    critical: 94
  }[severity] || 24;
  const exposureScore = {
    preview: 22,
    "single-fund": 48,
    category: 70,
    "all-public": 92
  }[exposure] || 22;
  const actionScore = {
    "hide-claim": 86,
    "revert-prior": 78,
    "correction-note": 66,
    "reviewer-hold": 58
  }[action] || 86;
  const noticeScore = {
    "internal-note": 54,
    "user-visible": 86,
    "admin-log": 72
  }[notice] || 54;
  const ledgerPressure = latest.decision === "Release selected claim"
    ? 82
    : latest.decision === "Preview release"
      ? 48
      : latest.decision === "Reviewer queue"
        ? 62
        : 36;
  const urgency = Math.round(clampNumber(
    profile.baseRisk * 0.22 +
      severityScore * 0.28 +
      exposureScore * 0.22 +
      ledgerPressure * 0.14 +
      (100 - actionScore) * 0.08 +
      (notice === "user-visible" ? 8 : 0),
    18,
    98
  ));
  const recoveryScore = Math.round(clampNumber(
    actionScore * 0.34 +
      noticeScore * 0.22 +
      currentGate.rollbackScore * 0.18 +
      currentGate.evidenceScore * 0.16 +
      (owner === "compliance" || owner === "product" ? 8 : 4),
    18,
    96
  ));
  const hardFlags = [
    ...(severity === "critical" ? ["critical severity requires immediate rollback control"] : []),
    ...(exposure === "all-public" ? ["all public mapped claims are exposed"] : []),
    ...(trigger === "wrong-value" ? ["wrong value may mislead investor research"] : []),
    ...(trigger === "compliance-language" ? ["compliance language needs reviewer sign-off"] : []),
    ...(latest.decision === "Release selected claim" ? ["latest saved ledger entry was released"] : [])
  ];
  const flags = [
    ...hardFlags,
    ...(action === "correction-note" && notice !== "user-visible" ? ["correction note should match the selected notice mode"] : []),
    ...(action === "reviewer-hold" ? ["public claim should remain frozen until reviewer approval"] : []),
    ...(currentGate.decision === "Keep claims frozen" || currentGate.decision === "Do not release" ? ["current release gate already blocks the claim"] : []),
    ...profile.checks.slice(0, 4)
  ];
  const posture = severity === "critical" || (exposure === "all-public" && hardFlags.length)
    ? "Immediate rollback"
    : urgency >= 78
      ? "Freeze and correct"
      : urgency >= 58
        ? "Correction note"
        : "Monitor only";
  const tone = posture === "Monitor only" ? "ready" : posture === "Immediate rollback" ? "caution" : "watch";
  const affectedClaims = Array.from(new Set([
    ...(latest.affectedClaims || []),
    ...(currentGate.affectedClaims || [])
  ])).slice(0, 10);
  const firstAction = posture === "Immediate rollback"
    ? "Hide the affected public surface now, then document the old value, replacement value, reviewer, and visible correction path."
    : posture === "Freeze and correct"
      ? "Freeze claim refresh, repair evidence or wording, and keep the release gate blocked until sign-off."
      : posture === "Correction note"
        ? "Publish or store the correction note with source date, claim surface, and rollback owner."
        : "Monitor the claim, keep source evidence visible, and schedule a reviewer check before broader rollout.";
  return {
    action,
    actionScore,
    affectedClaims,
    currentGate,
    entries,
    exposure,
    exposureScore,
    firstAction,
    flags,
    hardFlags,
    latest,
    ledgerPressure,
    notice,
    noticeScore,
    owner,
    posture,
    profile,
    recoveryScore,
    severity,
    severityScore,
    tone,
    trigger,
    urgency
  };
}

function renderClaimRollbackConsole(event) {
  if (event) event.preventDefault();
  if (!els.claimRollbackOutput || !els.claimRollbackSummary) return;
  const config = claimRollbackConfig();
  els.claimRollbackSummary.textContent = `${config.urgency}/100 | ${config.posture}`;
  els.claimRollbackOutput.innerHTML = `
    <div class="claim-rollback-hero ${escapeHtml(config.tone)}">
      <div>
        <span class="metric-label">${escapeHtml(config.profile.label)}</span>
        <h3>${escapeHtml(config.posture)}</h3>
        <p>${escapeHtml(config.firstAction)} Owner: ${escapeHtml(claimRollbackOwnerLabel(config.owner))}.</p>
      </div>
      <div class="claim-rollback-score" style="--score:${config.urgency}">
        <b>${config.urgency}</b>
        <span>Urgency</span>
      </div>
    </div>
    <div class="claim-rollback-metric-grid">
      <article><span>Severity</span><strong>${config.severityScore}/100</strong><p>${escapeHtml(claimRollbackSeverityLabel(config.severity))}</p></article>
      <article><span>Exposure</span><strong>${config.exposureScore}/100</strong><p>${escapeHtml(claimRollbackExposureLabel(config.exposure))}</p></article>
      <article><span>Recovery</span><strong>${config.recoveryScore}/100</strong><p>${escapeHtml(claimRollbackActionLabel(config.action))}</p></article>
      <article><span>Notice</span><strong>${config.noticeScore}/100</strong><p>${escapeHtml(claimRollbackNoticeLabel(config.notice))}</p></article>
    </div>
    <div class="claim-rollback-grid">
      <article class="claim-rollback-card">
        <h3>Affected claim surfaces</h3>
        <div class="field-chip-list">
          ${config.affectedClaims.map((claim) => `<span>${escapeHtml(claim)}</span>`).join("") || "<span>No saved claim surfaces yet</span>"}
        </div>
      </article>
      <article class="claim-rollback-card">
        <h3>Latest ledger context</h3>
        <p>${escapeHtml(config.latest.decision)} | ${escapeHtml(config.latest.surfaceLabel)} | ${escapeHtml(config.latest.fund.name)}.</p>
        <p>Latest release score ${config.latest.score}/100 and current gate ${escapeHtml(config.currentGate.decision)}.</p>
      </article>
      <article class="claim-rollback-card ${escapeHtml(config.tone)}">
        <h3>Rollback flags</h3>
        <ul class="data-check-list">
          ${config.flags.slice(0, 9).map((flag) => `<li>${escapeHtml(flag)}</li>`).join("")}
        </ul>
      </article>
      <article class="claim-rollback-card">
        <h3>Recovery receipt</h3>
        <p>Capture issue trigger, old claim, replacement claim, source date, reviewer, correction notice, rollback action, and release ledger link.</p>
      </article>
    </div>
    <div class="claim-rollback-panel-grid">
      <article class="claim-rollback-panel">
        <h3>Sequence</h3>
        <ol class="claim-rollback-list">
          <li>Freeze or hide the affected surface based on exposure.</li>
          <li>Verify source evidence, citation path, and prior approved value.</li>
          <li>Publish correction note only when notice mode and reviewer status match.</li>
          <li>Save the new release decision in the ledger after repair.</li>
        </ol>
      </article>
      <article class="claim-rollback-panel claim-rollback-guardrail">
        <h3>Privacy boundary</h3>
        <p>Rollback records are product-control notes only. They must not store PAN, folio, CAS, account credentials, bank data, client identifiers, contact data, or private investor notes.</p>
      </article>
    </div>
  `;
}

function makeClaimRollbackNote() {
  const config = claimRollbackConfig();
  return [
    "# NiveshNadi Claim Rollback Console",
    `Release: ${RELEASE_LABEL} (${DATA_VERSION})`,
    `Issue trigger: ${config.profile.label}`,
    `Posture: ${config.posture}`,
    `Urgency: ${config.urgency}/100`,
    `Recovery score: ${config.recoveryScore}/100`,
    `Severity: ${claimRollbackSeverityLabel(config.severity)}`,
    `Exposure: ${claimRollbackExposureLabel(config.exposure)}`,
    `Rollback action: ${claimRollbackActionLabel(config.action)}`,
    `Notice mode: ${claimRollbackNoticeLabel(config.notice)}`,
    `Owner: ${claimRollbackOwnerLabel(config.owner)}`,
    `Latest ledger decision: ${config.latest.decision}`,
    `Latest ledger surface: ${config.latest.surfaceLabel}`,
    `Current release gate: ${config.currentGate.decision}`,
    "",
    "## First Action",
    config.firstAction,
    "",
    "## Affected Claim Surfaces",
    ...(config.affectedClaims.length ? config.affectedClaims.map((claim) => `- ${claim}`) : ["- No saved claim surfaces yet."]),
    "",
    "## Rollback Flags",
    ...config.flags.map((flag) => `- ${flag}`),
    "",
    "## Recovery Receipt",
    "- issue trigger",
    "- old claim and replacement claim",
    "- source date and citation path",
    "- reviewer and owner",
    "- correction notice mode",
    "- rollback action",
    "- linked release ledger entry",
    "",
    "## Privacy boundary",
    "Rollback records are product-control notes only. Exclude PAN, folio, CAS, account credentials, bank data, client identifiers, contact data, and private investor notes.",
    "",
    "Research support only. This is not investment advice, execution approval, distributor approval, tax guidance, or a return guarantee."
  ].join("\n");
}

function correctionNoticeAudienceLabel(value) {
  return {
    "fund-page": "Fund page note",
    "user-banner": "User-visible banner",
    "release-log": "Release log entry",
    "internal-review": "Internal reviewer note"
  }[value] || "Fund page note";
}

function correctionNoticeStatusLabel(value) {
  return {
    investigating: "Investigating",
    corrected: "Corrected",
    reverted: "Reverted",
    verified: "Verified"
  }[value] || "Investigating";
}

function correctionNoticeChangeProfile(value) {
  return {
    "source-date": {
      label: "Source date or citation",
      score: 44,
      changed: "The source date, citation path, or evidence status behind the research claim needs to be refreshed.",
      unchanged: "The fund role, investor decision boundary, and research-only posture do not change.",
      checks: ["source date", "citation URL", "evidence ledger row", "release ledger entry"]
    },
    "value-label": {
      label: "Value or label",
      score: 78,
      changed: "A displayed value, label, score, or field name needs correction before it is treated as current.",
      unchanged: "No transaction instruction, recommendation, or personal suitability decision is created by this correction.",
      checks: ["old value", "new value", "affected surface", "rollback owner"]
    },
    "risk-cost": {
      label: "Risk or cost field",
      score: 84,
      changed: "A risk, drawdown, TER, load, cost, or riskometer field needs visible review before reuse.",
      unchanged: "The correction does not guarantee returns or reduce market, credit, liquidity, tax, or behavior risk.",
      checks: ["TER date", "riskometer date", "drawdown field", "source proof"]
    },
    wording: {
      label: "Wording clarity",
      score: 50,
      changed: "The wording should be clearer so a retail investor does not read a research note as advice.",
      unchanged: "The underlying fund data remains a research input until the evidence chain is refreshed.",
      checks: ["plain-English wording", "research-only language", "claim checker result", "reviewer note"]
    },
    holdings: {
      label: "Holdings or exposure",
      score: 72,
      changed: "Holdings, sector, concentration, or exposure language needs a dated portfolio disclosure check.",
      unchanged: "Portfolio overlap, concentration, and X-Ray outputs still require current holdings files before reliance.",
      checks: ["portfolio disclosure date", "top holdings", "sector map", "stale-holdings warning"]
    }
  }[value] || correctionNoticeChangeProfile("source-date");
}

function correctionNoticeToneLabel(value) {
  return {
    plain: "Plain",
    calm: "Calm and transparent",
    urgent: "Urgent freeze",
    compliance: "Compliance reviewed"
  }[value] || "Plain";
}

function correctionNoticeVisibilityLabel(value) {
  return {
    preview: "Preview only",
    "single-fund": "Single fund",
    category: "Category surface",
    "all-users": "All public users"
  }[value] || "Preview only";
}

function correctionNoticeOwnerLabel(value) {
  return claimRollbackOwnerLabel(value);
}

function correctionNoticeConfig() {
  const rollback = claimRollbackConfig();
  const gate = rollback.currentGate || claimReleaseConfig();
  const latest = rollback.latest || claimReleaseSnapshotFromConfig(gate);
  const fund = latest.fund?.name ? latest.fund : selectedFund();
  const audience = els.correctionNoticeAudience?.value || "fund-page";
  const status = els.correctionNoticeStatus?.value || "investigating";
  const change = els.correctionNoticeChange?.value || "source-date";
  const tone = els.correctionNoticeTone?.value || "plain";
  const visibility = els.correctionNoticeVisibility?.value || "preview";
  const owner = els.correctionNoticeOwner?.value || "research";
  const profile = correctionNoticeChangeProfile(change);
  const statusScore = {
    investigating: 42,
    corrected: 72,
    reverted: 82,
    verified: 92
  }[status] || 42;
  const visibilityScore = {
    preview: 22,
    "single-fund": 48,
    category: 68,
    "all-users": 90
  }[visibility] || 22;
  const toneScore = {
    plain: 62,
    calm: 76,
    urgent: 58,
    compliance: 88
  }[tone] || 62;
  const publicFacing = audience === "user-banner" || audience === "fund-page" || visibility === "all-users" || visibility === "category";
  const exposureRisk = Math.round(clampNumber(
    rollback.urgency * 0.32 +
      visibilityScore * 0.28 +
      profile.score * 0.18 +
      (publicFacing ? 8 : 0) +
      (status === "investigating" ? 12 : 0),
    12,
    98
  ));
  const noticeScore = Math.round(clampNumber(
    statusScore * 0.28 +
      toneScore * 0.18 +
      rollback.recoveryScore * 0.18 +
      gate.evidenceScore * 0.14 +
      (100 - exposureRisk) * 0.12 +
      (owner === "compliance" ? 8 : owner === "product" ? 6 : 4),
    18,
    96
  ));
  const posture = status === "investigating" && exposureRisk >= 72
    ? "Freeze notice"
    : status === "reverted"
      ? "Rollback notice"
      : status === "verified"
        ? "Verified correction"
        : publicFacing
          ? "Public correction notice"
          : "Internal correction note";
  const noticeTone = exposureRisk >= 78 || tone === "urgent"
    ? "caution"
    : noticeScore >= 78
      ? "ready"
      : "watch";
  const action = status === "investigating"
    ? "Keep the affected field paused while source evidence and reviewer status are checked."
    : status === "reverted"
      ? "Show the prior approved value or hide the claim until a replacement release is approved."
      : status === "verified"
        ? "Publish the verified correction with source date, release ledger link, and reviewer owner."
        : "Publish the corrected wording only on the selected visibility surface and keep a release-log entry.";
  const affectedClaims = Array.from(new Set([
    ...rollback.affectedClaims,
    `${fund.name} | ${profile.label}`,
    gate.profile?.label ? `${fund.name} | ${gate.profile.label}` : ""
  ].filter(Boolean))).slice(0, 8);
  const publicCopy = status === "investigating"
    ? `We are reviewing the ${profile.label.toLowerCase()} shown for ${fund.name}. The affected research field is paused until source evidence and reviewer checks are complete.`
    : status === "reverted"
      ? `We have reverted the ${profile.label.toLowerCase()} for ${fund.name} to the prior approved research display while the latest source evidence is reviewed.`
      : status === "verified"
        ? `We have verified the ${profile.label.toLowerCase()} for ${fund.name} and refreshed the research display with the latest available source evidence.`
        : `We have corrected the ${profile.label.toLowerCase()} for ${fund.name}. Please review the updated source date, citation status, and research-only boundary before relying on the field.`;
  const internalNote = `${correctionNoticeOwnerLabel(owner)} owns the notice for ${correctionNoticeAudienceLabel(audience)}. Current rollback posture is ${rollback.posture}; current release gate is ${gate.decision}.`;
  const doNotInclude = [
    "PAN, folio, CAS, bank, account, contact, credential, or client identifiers",
    "personalized recommendation language",
    "return guarantee or best-fund language",
    "transaction instruction or distributor-client approval"
  ];
  return {
    action,
    affectedClaims,
    audience,
    change,
    doNotInclude,
    exposureRisk,
    fund,
    gate,
    internalNote,
    latest,
    noticeScore,
    noticeTone,
    owner,
    posture,
    profile,
    publicCopy,
    publicFacing,
    rollback,
    status,
    statusScore,
    tone,
    toneScore,
    visibility,
    visibilityScore
  };
}

function renderCorrectionNoticeBuilder(event) {
  if (event) event.preventDefault();
  if (!els.correctionNoticeOutput || !els.correctionNoticeSummary) return;
  const config = correctionNoticeConfig();
  els.correctionNoticeSummary.textContent = `${config.noticeScore}/100 | ${config.posture}`;
  els.correctionNoticeOutput.innerHTML = `
    <div class="correction-notice-hero ${escapeHtml(config.noticeTone)}">
      <div>
        <span class="metric-label">${escapeHtml(correctionNoticeAudienceLabel(config.audience))}</span>
        <h3>${escapeHtml(config.posture)}</h3>
        <p>${escapeHtml(config.action)}</p>
      </div>
      <div class="correction-notice-score" style="--score:${config.noticeScore}">
        <b>${config.noticeScore}</b>
        <span>Notice</span>
      </div>
    </div>
    <div class="correction-notice-metric-grid">
      <article><span>Status</span><strong>${escapeHtml(correctionNoticeStatusLabel(config.status))}</strong><p>${config.statusScore}/100 readiness</p></article>
      <article><span>Exposure</span><strong>${config.exposureRisk}/100</strong><p>${escapeHtml(correctionNoticeVisibilityLabel(config.visibility))}</p></article>
      <article><span>Rollback</span><strong>${config.rollback.urgency}/100</strong><p>${escapeHtml(config.rollback.posture)}</p></article>
      <article><span>Owner</span><strong>${escapeHtml(correctionNoticeOwnerLabel(config.owner))}</strong><p>${escapeHtml(correctionNoticeToneLabel(config.tone))}</p></article>
    </div>
    <div class="correction-notice-copy">
      <span class="metric-label">Public wording draft</span>
      <p>${escapeHtml(config.publicCopy)}</p>
    </div>
    <div class="correction-notice-grid">
      <article class="correction-notice-card">
        <h3>What changed</h3>
        <p>${escapeHtml(config.profile.changed)}</p>
      </article>
      <article class="correction-notice-card">
        <h3>What did not change</h3>
        <p>${escapeHtml(config.profile.unchanged)}</p>
      </article>
      <article class="correction-notice-card ${escapeHtml(config.noticeTone)}">
        <h3>Affected surfaces</h3>
        <div class="field-chip-list">
          ${config.affectedClaims.map((claim) => `<span>${escapeHtml(claim)}</span>`).join("")}
        </div>
      </article>
      <article class="correction-notice-card">
        <h3>Internal reviewer note</h3>
        <p>${escapeHtml(config.internalNote)}</p>
      </article>
    </div>
    <div class="correction-notice-panel-grid">
      <article class="correction-notice-panel">
        <h3>Evidence checks</h3>
        <ul class="data-check-list">
          ${config.profile.checks.map((check) => `<li>${escapeHtml(check)}</li>`).join("")}
          <li>release ledger entry</li>
          <li>source date visible to reviewer</li>
        </ul>
      </article>
      <article class="correction-notice-panel correction-notice-guardrail">
        <h3>Do not include</h3>
        <ul class="data-check-list">
          ${config.doNotInclude.map((item) => `<li>${escapeHtml(item)}</li>`).join("")}
        </ul>
      </article>
    </div>
  `;
}

function makeCorrectionNoticeBrief() {
  const config = correctionNoticeConfig();
  return [
    "# NiveshNadi Correction Notice Builder",
    `Release: ${RELEASE_LABEL} (${DATA_VERSION})`,
    `Audience: ${correctionNoticeAudienceLabel(config.audience)}`,
    `Status: ${correctionNoticeStatusLabel(config.status)}`,
    `Change type: ${config.profile.label}`,
    `Visibility: ${correctionNoticeVisibilityLabel(config.visibility)}`,
    `Tone: ${correctionNoticeToneLabel(config.tone)}`,
    `Owner: ${correctionNoticeOwnerLabel(config.owner)}`,
    `Notice posture: ${config.posture}`,
    `Notice readiness: ${config.noticeScore}/100`,
    `Exposure risk: ${config.exposureRisk}/100`,
    `Rollback posture: ${config.rollback.posture}`,
    `Current release gate: ${config.gate.decision}`,
    "",
    "## Public Wording Draft",
    config.publicCopy,
    "",
    "## What Changed",
    config.profile.changed,
    "",
    "## What Did Not Change",
    config.profile.unchanged,
    "",
    "## Affected Surfaces",
    ...config.affectedClaims.map((claim) => `- ${claim}`),
    "",
    "## Evidence Checks",
    ...config.profile.checks.map((check) => `- ${check}`),
    "- release ledger entry",
    "- source date visible to reviewer",
    "",
    "## Do Not Include",
    ...config.doNotInclude.map((item) => `- ${item}`),
    "",
    "## Privacy boundary",
    "Correction notices are product-control records only. Exclude PAN, folio, CAS, account credentials, bank data, client identifiers, contact data, and private investor notes.",
    "",
    "Research support only. A correction notice is not investment advice, execution approval, distributor approval, tax guidance, or a return guarantee."
  ].join("\n");
}

function correctionNoticeSnapshotFromConfig(config = correctionNoticeConfig()) {
  return {
    id: `correction-notice-${Date.now()}-${Math.random().toString(16).slice(2)}`,
    createdAt: new Date().toISOString(),
    release: RELEASE_LABEL,
    dataVersion: DATA_VERSION,
    fund: {
      id: config.fund.id || state.selectedId,
      name: config.fund.name,
      category: config.fund.category,
      risk: config.fund.risk
    },
    audience: config.audience,
    audienceLabel: correctionNoticeAudienceLabel(config.audience),
    status: config.status,
    statusLabel: correctionNoticeStatusLabel(config.status),
    change: config.change,
    changeLabel: config.profile.label,
    tone: config.tone,
    toneLabel: correctionNoticeToneLabel(config.tone),
    visibility: config.visibility,
    visibilityLabel: correctionNoticeVisibilityLabel(config.visibility),
    owner: config.owner,
    ownerLabel: correctionNoticeOwnerLabel(config.owner),
    posture: config.posture,
    noticeScore: config.noticeScore,
    exposureRisk: config.exposureRisk,
    publicFacing: config.publicFacing,
    publicCopy: config.publicCopy,
    internalNote: config.internalNote,
    changed: config.profile.changed,
    unchanged: config.profile.unchanged,
    affectedClaims: config.affectedClaims.slice(0, 8),
    evidenceChecks: [...config.profile.checks, "release ledger entry", "source date visible to reviewer"].slice(0, 8),
    rollback: {
      posture: config.rollback.posture,
      urgency: config.rollback.urgency,
      recoveryScore: config.rollback.recoveryScore
    },
    releaseGate: {
      decision: config.gate.decision,
      evidenceScore: config.gate.evidenceScore
    },
    privacyStatus: "Identity-light correction notice record"
  };
}

function loadCorrectionNoticeLedger() {
  try {
    const entries = JSON.parse(localStorage.getItem("niveshnadi-correction-notices") || "[]");
    return Array.isArray(entries) ? entries : [];
  } catch (error) {
    return [];
  }
}

function saveCorrectionNoticeLedger(entries) {
  localStorage.setItem("niveshnadi-correction-notices", JSON.stringify(entries));
}

function saveCurrentCorrectionNotice() {
  const snapshot = correctionNoticeSnapshotFromConfig();
  const entries = [snapshot, ...loadCorrectionNoticeLedger()].slice(0, 24);
  saveCorrectionNoticeLedger(entries);
  renderCorrectionNoticeLedger();
  renderTrustCenter();
  renderActionPlanner();
  renderResearchMemory();
  renderPrivacyControlRoom();
  toast("Correction notice saved locally.");
}

function clearCorrectionNoticeLedger() {
  saveCorrectionNoticeLedger([]);
  renderCorrectionNoticeLedger();
  renderTrustCenter();
  renderActionPlanner();
  renderResearchMemory();
  renderPrivacyControlRoom();
  toast("Correction notice ledger cleared.");
}

function correctionLedgerCounts(entries) {
  return entries.reduce((counts, entry) => {
    counts[entry.statusLabel] = (counts[entry.statusLabel] || 0) + 1;
    return counts;
  }, {});
}

function correctionLedgerPosture(entry) {
  if (!entry) return "No saved correction notices yet";
  if (entry.status === "verified") return "Verified correction ready for release log";
  if (entry.status === "reverted") return "Rollback notice preserved";
  if (entry.status === "corrected") return "Corrected wording saved";
  return "Investigation notice pending evidence";
}

function renderCorrectionNoticeLedger() {
  if (!els.correctionLedgerOutput || !els.correctionLedgerSummary) return;
  const entries = loadCorrectionNoticeLedger();
  els.correctionLedgerSummary.textContent = `${entries.length} notice${entries.length === 1 ? "" : "s"}`;
  if (!entries.length) {
    const preview = correctionNoticeSnapshotFromConfig();
    els.correctionLedgerOutput.innerHTML = `
      <div class="correction-ledger-empty">
        <div>
          <span class="metric-label">Current preview</span>
          <h3>No correction notices saved yet</h3>
          <p>${escapeHtml(preview.publicCopy)}</p>
        </div>
        <button class="text-button" type="button" data-save-correction-preview>Save current notice</button>
      </div>
    `;
    return;
  }
  const latest = entries[0];
  const publicCount = entries.filter((entry) => entry.publicFacing).length;
  const allUserCount = entries.filter((entry) => entry.visibility === "all-users").length;
  const averageScore = Math.round(entries.reduce((sum, entry) => sum + Number(entry.noticeScore || 0), 0) / entries.length);
  const counts = correctionLedgerCounts(entries);
  const statusChips = Object.entries(counts)
    .map(([label, count]) => `<span>${escapeHtml(label)}: ${count}</span>`)
    .join("");
  els.correctionLedgerOutput.innerHTML = `
    <div class="correction-ledger-hero">
      <div>
        <span class="metric-label">${escapeHtml(latest.audienceLabel)} | ${escapeHtml(latest.visibilityLabel)}</span>
        <h3>${escapeHtml(latest.posture)}</h3>
        <p>${escapeHtml(correctionLedgerPosture(latest))} | Saved ${escapeHtml(new Date(latest.createdAt).toLocaleString("en-IN"))} | ${escapeHtml(latest.fund.name)}.</p>
      </div>
      <div class="correction-ledger-score" style="--score:${latest.noticeScore}">
        <b>${latest.noticeScore}</b>
        <span>Latest</span>
      </div>
    </div>
    <div class="correction-ledger-metric-grid">
      <article><span>Saved</span><strong>${entries.length}</strong><p>Browser-local correction notices</p></article>
      <article><span>Avg notice</span><strong>${averageScore}/100</strong><p>Notice readiness across ledger</p></article>
      <article><span>Public</span><strong>${publicCount}</strong><p>User-visible or fund-page notices</p></article>
      <article><span>All-user</span><strong>${allUserCount}</strong><p>Broad public visibility notices</p></article>
    </div>
    <div class="correction-ledger-grid">
      <article class="correction-ledger-card">
        <h3>Latest public wording</h3>
        <p>${escapeHtml(latest.publicCopy)}</p>
      </article>
      <article class="correction-ledger-card">
        <h3>Status mix</h3>
        <div class="field-chip-list">${statusChips || "<span>No status mix</span>"}</div>
      </article>
      <article class="correction-ledger-card">
        <h3>Affected surfaces</h3>
        <div class="correction-ledger-funds">
          ${latest.affectedClaims.map((claim) => `<span>${escapeHtml(claim)}</span>`).join("") || "<span>No affected surfaces saved</span>"}
        </div>
      </article>
      <article class="correction-ledger-card correction-ledger-guardrail">
        <h3>Privacy guardrail</h3>
        <p>Ledger entries are product-control notes only. They must not store PAN, folio, CAS, credentials, bank data, client identifiers, contact data, or private investor notes.</p>
      </article>
    </div>
    <div class="correction-ledger-card-grid">
      ${entries.slice(0, 6).map((entry) => `
        <article class="correction-ledger-entry">
          <span class="metric-label">${escapeHtml(entry.statusLabel)} | ${escapeHtml(entry.changeLabel)}</span>
          <h3>${escapeHtml(entry.fund.name)}</h3>
          <p>${escapeHtml(entry.visibilityLabel)} | ${entry.noticeScore}/100 | ${escapeHtml(new Date(entry.createdAt).toLocaleString("en-IN"))}</p>
          <p>${escapeHtml(entry.publicCopy)}</p>
        </article>
      `).join("")}
    </div>
  `;
}

function makeCorrectionNoticeLedgerBrief() {
  const entries = loadCorrectionNoticeLedger();
  const preview = correctionNoticeSnapshotFromConfig();
  const latest = entries[0] || preview;
  return [
    "# NiveshNadi Correction Notice Ledger",
    `Release: ${RELEASE_LABEL} (${DATA_VERSION})`,
    `Saved notices: ${entries.length}`,
    `Latest posture: ${latest.posture}`,
    `Latest fund: ${latest.fund.name}`,
    `Latest status: ${latest.statusLabel}`,
    `Latest visibility: ${latest.visibilityLabel}`,
    `Latest notice readiness: ${latest.noticeScore}/100`,
    `Latest exposure risk: ${latest.exposureRisk}/100`,
    "",
    "## Latest Public Wording",
    latest.publicCopy,
    "",
    "## Saved Notice Trail",
    ...(entries.length ? entries.slice(0, 10).map((entry) => `- ${new Date(entry.createdAt).toLocaleString("en-IN")}: ${entry.statusLabel}, ${entry.changeLabel}, ${entry.visibilityLabel}, ${entry.noticeScore}/100, ${entry.fund.name}`) : ["- No saved notices yet. This brief uses the current notice preview."]),
    "",
    "## Latest Affected Surfaces",
    ...(latest.affectedClaims.length ? latest.affectedClaims.map((claim) => `- ${claim}`) : ["- No affected surfaces saved."]),
    "",
    "## Evidence Checks",
    ...(latest.evidenceChecks || []).map((check) => `- ${check}`),
    "",
    "## Privacy boundary",
    "Correction Notice Ledger stores browser-local product-control metadata only. Exclude PAN, folio, CAS, account credentials, bank data, client identifiers, contact data, and private investor notes.",
    "",
    "Research support only. The ledger is not investment advice, execution approval, distributor workflow approval, tax guidance, or a return guarantee."
  ].join("\n");
}

function trustCenterAudienceLabel(value) {
  return {
    retail: "Retail investor view",
    reviewer: "Internal reviewer",
    launch: "Launch gate",
    distributor: "Future distributor desk"
  }[value] || "Retail investor view";
}

function trustCenterScopeLabel(value) {
  return {
    "selected-fund": "Selected fund",
    "compare-set": "Compare set",
    "public-claims": "Public claim surfaces",
    "full-desk": "Full research desk"
  }[value] || "Selected fund";
}

function trustCenterModeLabel(value) {
  return {
    demo: "Demo research data",
    "dry-run": "Live-data dry run",
    candidate: "Launch candidate",
    hold: "Launch hold"
  }[value] || "Demo research data";
}

function trustCenterToleranceLabel(value) {
  return {
    strict: "Strict public launch",
    balanced: "Balanced preview",
    prototype: "Prototype demo"
  }[value] || "Strict public launch";
}

function trustCenterModeScore(value) {
  return {
    demo: 62,
    "dry-run": 76,
    candidate: 88,
    hold: 42
  }[value] || 62;
}

function trustCenterConfig() {
  const audience = els.trustCenterAudience?.value || "retail";
  const scope = els.trustCenterScope?.value || "selected-fund";
  const mode = els.trustCenterMode?.value || "demo";
  const tolerance = els.trustCenterTolerance?.value || "strict";
  const selected = selectedFund();
  const scopedFunds = scope === "compare-set"
    ? FUNDS.filter((fund) => state.compare.has(fund.id))
    : scope === "full-desk"
      ? FUNDS
      : [selected];
  const funds = scopedFunds.length ? scopedFunds : [selected];
  const gate = claimReleaseConfig();
  const rollback = claimRollbackConfig();
  const notice = correctionNoticeConfig();
  const correctionEntries = loadCorrectionNoticeLedger();
  const releaseEntries = loadClaimReleaseLedger();
  const avgEvidence = Math.round(funds.reduce((sum, fund) => sum + evidenceReadinessScore(fund), 0) / funds.length);
  const avgNadi = Math.round(funds.reduce((sum, fund) => sum + nadiScore(fund), 0) / funds.length);
  const correctionScore = correctionEntries.length
    ? Math.round(correctionEntries.reduce((sum, entry) => sum + Number(entry.noticeScore || 0), 0) / correctionEntries.length)
    : notice.noticeScore;
  const rollbackControl = Math.round(clampNumber(100 - rollback.urgency * 0.62 + rollback.recoveryScore * 0.32, 18, 96));
  const privacyScore = Math.round(clampNumber(
    94 -
      (scope === "full-desk" ? 8 : 0) -
      (audience === "distributor" ? 10 : 0) -
      (correctionEntries.some((entry) => entry.visibility === "all-users") ? 4 : 0),
    48,
    96
  ));
  const modeScore = trustCenterModeScore(mode);
  const strictPenalty = tolerance === "strict"
    ? (avgEvidence < 78 ? 8 : 0) + (gate.decision !== "Release selected claim" ? 8 : 0) + (mode === "demo" ? 10 : 0)
    : tolerance === "balanced"
      ? (avgEvidence < 68 ? 5 : 0)
      : 0;
  const trustScore = Math.round(clampNumber(
    avgEvidence * 0.22 +
      gate.releaseScore * 0.2 +
      rollbackControl * 0.14 +
      correctionScore * 0.13 +
      privacyScore * 0.16 +
      modeScore * 0.15 -
      strictPenalty,
    18,
    96
  ));
  const hardBlocks = [
    ...(mode === "hold" ? ["data mode is launch hold"] : []),
    ...(mode === "demo" && tolerance === "strict" ? ["demo data cannot be treated as live launch evidence"] : []),
    ...(gate.decision === "Keep claims frozen" || gate.decision === "Do not release" ? [`claim release gate says ${gate.decision.toLowerCase()}`] : []),
    ...(rollback.posture === "Immediate rollback" ? ["rollback console requires immediate action"] : []),
    ...(privacyScore < 72 ? ["privacy boundary needs tighter role and data controls"] : [])
  ];
  const posture = hardBlocks.length
    ? "Launch hold"
    : trustScore >= 84 && mode === "candidate"
      ? "Launch-ready trust pack"
      : trustScore >= 74
        ? "Reviewer-ready trust view"
        : mode === "demo" || tolerance === "prototype"
          ? "Demo-safe trust view"
          : "Trust review queue";
  const tone = posture === "Launch-ready trust pack"
    ? "ready"
    : posture === "Launch hold"
      ? "caution"
      : "watch";
  const safeToShow = [
    `${funds.length} fund${funds.length === 1 ? "" : "s"} in ${trustCenterScopeLabel(scope).toLowerCase()} scope`,
    `Average evidence readiness ${avgEvidence}/100`,
    `Claim release gate: ${gate.decision}`,
    `Correction notice posture: ${notice.posture}`,
    `Correction ledger entries: ${correctionEntries.length}`
  ];
  const blockers = [
    ...hardBlocks,
    ...(avgEvidence < 78 ? ["live source dates and citations still need review"] : []),
    ...(releaseEntries.length === 0 ? ["no saved claim release ledger entry yet"] : []),
    ...(correctionEntries.length === 0 ? ["no saved correction notice ledger entry yet"] : []),
    ...(scope === "full-desk" ? ["full-desk view needs source QA across every data pipeline"] : []),
    ...(audience === "distributor" ? ["future distributor desk must stay separate from Phase 1 retail research"] : [])
  ];
  const queue = [
    "Verify AMFI, AMC factsheet, SID/KIM, portfolio disclosure, benchmark, riskometer, and TER source dates.",
    "Save release-gate and correction-ledger entries before public claim refresh.",
    "Keep PAN, folio, CAS, bank, contact, credential, and client data outside Phase 1 trust artifacts.",
    "Use research-only language until regulatory and distributor workflows are resolved."
  ];
  return {
    audience,
    avgEvidence,
    avgNadi,
    blockers,
    correctionEntries,
    correctionScore,
    funds,
    gate,
    mode,
    modeScore,
    notice,
    posture,
    privacyScore,
    queue,
    releaseEntries,
    rollback,
    rollbackControl,
    safeToShow,
    scope,
    strictPenalty,
    tone,
    tolerance,
    trustScore
  };
}

function renderTrustCenter(event) {
  if (event) event.preventDefault();
  if (!els.trustCenterOutput || !els.trustCenterSummary) return;
  const config = trustCenterConfig();
  els.trustCenterSummary.textContent = `${config.trustScore}/100 | ${config.posture}`;
  els.trustCenterOutput.innerHTML = `
    <div class="trust-center-hero ${escapeHtml(config.tone)}">
      <div>
        <span class="metric-label">${escapeHtml(trustCenterAudienceLabel(config.audience))} | ${escapeHtml(trustCenterModeLabel(config.mode))}</span>
        <h3>${escapeHtml(config.posture)}</h3>
        <p>${escapeHtml(trustCenterScopeLabel(config.scope))} trust view for ${config.funds.length} fund${config.funds.length === 1 ? "" : "s"}. Average Nadi score ${config.avgNadi}/100.</p>
      </div>
      <div class="trust-center-score" style="--score:${config.trustScore}">
        <b>${config.trustScore}</b>
        <span>Trust</span>
      </div>
    </div>
    <div class="trust-center-metric-grid">
      <article><span>Evidence</span><strong>${config.avgEvidence}/100</strong><p>Mapped source readiness</p></article>
      <article><span>Release</span><strong>${config.gate.releaseScore}/100</strong><p>${escapeHtml(config.gate.decision)}</p></article>
      <article><span>Recovery</span><strong>${config.rollbackControl}/100</strong><p>${escapeHtml(config.rollback.posture)}</p></article>
      <article><span>Privacy</span><strong>${config.privacyScore}/100</strong><p>Identity-light boundary</p></article>
    </div>
    <div class="trust-center-grid">
      <article class="trust-center-card">
        <h3>Safe to show</h3>
        <ul class="data-check-list">
          ${config.safeToShow.map((item) => `<li>${escapeHtml(item)}</li>`).join("")}
        </ul>
      </article>
      <article class="trust-center-card ${escapeHtml(config.tone)}">
        <h3>Launch blockers</h3>
        <ul class="data-check-list">
          ${config.blockers.slice(0, 8).map((item) => `<li>${escapeHtml(item)}</li>`).join("") || "<li>No hard blocker in the current trust view.</li>"}
        </ul>
      </article>
      <article class="trust-center-card">
        <h3>Audit trail</h3>
        <p>${config.releaseEntries.length} claim release record${config.releaseEntries.length === 1 ? "" : "s"} and ${config.correctionEntries.length} correction notice record${config.correctionEntries.length === 1 ? "" : "s"} saved locally.</p>
        <p>Correction readiness ${config.correctionScore}/100 and current notice posture ${escapeHtml(config.notice.posture)}.</p>
      </article>
      <article class="trust-center-card trust-center-guardrail">
        <h3>Privacy boundary</h3>
        <p>Trust artifacts are product-control records only. They exclude PAN, folio, CAS, credentials, bank data, contact data, client identifiers, and private investor notes.</p>
      </article>
    </div>
    <div class="trust-center-panel">
      <h3>Next launch queue</h3>
      <ol class="trust-center-list">
        ${config.queue.map((item) => `<li>${escapeHtml(item)}</li>`).join("")}
      </ol>
    </div>
  `;
}

function makeTrustCenterBrief() {
  const config = trustCenterConfig();
  return [
    "# NiveshNadi Trust Center",
    `Release: ${RELEASE_LABEL} (${DATA_VERSION})`,
    `Audience: ${trustCenterAudienceLabel(config.audience)}`,
    `Scope: ${trustCenterScopeLabel(config.scope)}`,
    `Data mode: ${trustCenterModeLabel(config.mode)}`,
    `Tolerance: ${trustCenterToleranceLabel(config.tolerance)}`,
    `Trust posture: ${config.posture}`,
    `Trust score: ${config.trustScore}/100`,
    `Average evidence readiness: ${config.avgEvidence}/100`,
    `Claim release gate: ${config.gate.decision} (${config.gate.releaseScore}/100)`,
    `Rollback posture: ${config.rollback.posture}`,
    `Correction notice posture: ${config.notice.posture}`,
    `Saved release records: ${config.releaseEntries.length}`,
    `Saved correction notices: ${config.correctionEntries.length}`,
    "",
    "## Safe To Show",
    ...config.safeToShow.map((item) => `- ${item}`),
    "",
    "## Launch Blockers",
    ...(config.blockers.length ? config.blockers.map((item) => `- ${item}`) : ["- No hard blocker in the current trust view."]),
    "",
    "## Next Launch Queue",
    ...config.queue.map((item) => `- ${item}`),
    "",
    "## Privacy boundary",
    "Trust Center artifacts are product-control records only. Exclude PAN, folio, CAS, account credentials, bank data, client identifiers, contact data, and private investor notes.",
    "",
    "Research support only. This trust brief is not investment advice, execution approval, distributor workflow approval, tax guidance, or a return guarantee."
  ].join("\n");
}

function actionLaneLabel(value) {
  return {
    "start-sip": "Start SIP research",
    "continue-sip": "Continue SIP review",
    watch: "Watch before action",
    stp: "Plan STP research",
    "switch-review": "Switch review only"
  }[value] || "Watch before action";
}

function actionCapitalModeLabel(value) {
  return {
    "monthly-sip": "Monthly SIP amount",
    "stp-transfer": "Monthly STP transfer",
    "lump-sum": "One-time research amount",
    "no-money": "No money movement"
  }[value] || "Monthly SIP amount";
}

function actionConvictionLabel(value) {
  return {
    low: "Low - learning only",
    medium: "Medium - still testing",
    high: "High - reason is clear"
  }[value] || "Medium - still testing";
}

function actionEvidenceModeLabel(value) {
  return {
    demo: "Demo data only",
    checked: "Checked source dates",
    fresh: "Fresh cited sources"
  }[value] || "Demo data only";
}

function actionScoreValue(value, map, fallback) {
  return map[value] ?? fallback;
}

function actionPlannerConfig() {
  const fund = selectedFund();
  const lane = els.actionLane?.value || "start-sip";
  const capitalMode = els.actionCapitalMode?.value || "monthly-sip";
  const amount = clampNumber(Number(els.actionAmount?.value || 0), 0, 10000000);
  const conviction = els.actionConviction?.value || "medium";
  const evidenceMode = els.actionEvidenceMode?.value || "demo";
  const reviewDate = els.actionReviewDate?.value || "2026-07-31";
  const reason = (els.actionReason?.value || "").trim();
  const readiness = readinessConfig();
  const trust = trustCenterConfig();
  const compareFunds = FUNDS.filter((item) => state.compare.has(item.id));
  const compareCount = compareFunds.length;
  const moneyLane = ["start-sip", "continue-sip", "stp", "switch-review"].includes(lane) && capitalMode !== "no-money";
  const reasonScore = reason.length >= 80 ? 92 : reason.length >= 35 ? 76 : reason.length >= 12 ? 55 : 30;
  const convictionScore = actionScoreValue(conviction, { low: 48, medium: 72, high: 88 }, 72);
  const evidenceModeScore = actionScoreValue(evidenceMode, { demo: 46, checked: 76, fresh: 92 }, 46);
  const laneRiskPenalty = lane === "switch-review" ? 10 : lane === "stp" ? 6 : lane === "start-sip" ? 4 : 0;
  const compareBonus = compareCount >= 2 ? 5 : compareCount === 1 ? 2 : 0;
  const amountSignal = capitalMode === "no-money" ? 6 : amount >= fund.minSip ? 4 : -7;
  const actionScore = Math.round(clampNumber(
    nadiScore(fund) * 0.22 +
      evidenceReadinessScore(fund) * 0.16 +
      trust.trustScore * 0.18 +
      readiness.score * 0.14 +
      convictionScore * 0.1 +
      evidenceModeScore * 0.12 +
      reasonScore * 0.08 +
      compareBonus +
      amountSignal -
      laneRiskPenalty,
    22,
    96
  ));
  const readinessCritical = readiness.criticalMisses.map((item) => item.label);
  const blockers = [
    ...(reason.length < 35 ? ["write the research reason in plain words before acting"] : []),
    ...(moneyLane && amount < fund.minSip ? [`reviewed amount is below the fund minimum SIP of ${formatMoney(fund.minSip)}`] : []),
    ...(moneyLane && evidenceMode === "demo" ? ["demo data must be replaced with checked or fresh source evidence before any money movement"] : []),
    ...(trust.posture === "Launch hold" ? ["Trust Center is currently in launch hold posture"] : []),
    ...(moneyLane ? readinessCritical : []),
    ...(lane === "switch-review" ? ["switch review needs Cost Reality Lab, tax friction, exit load, and overlap checks"] : []),
    ...(fund.risk === "Very High" && moneyLane ? ["very high risk fund requires stress scenario and written review trigger"] : [])
  ];
  const posture = blockers.length >= 3
    ? "Research hold"
    : blockers.length
      ? "Watch before action"
      : actionScore >= 84
        ? "Plan memo ready"
        : actionScore >= 72
          ? "Advisor-review ready"
          : "More research needed";
  const tone = posture === "Plan memo ready"
    ? "ready"
    : posture === "Research hold"
      ? "caution"
      : "watch";
  const todaySteps = [
    `Confirm the role: ${fund.role}`,
    `Compare set: ${compareCount ? compareFunds.map((item) => item.name).slice(0, 3).join(", ") : "add at least one peer if comparison matters"}.`,
    `Decision lane: ${actionLaneLabel(lane)} with ${actionCapitalModeLabel(capitalMode).toLowerCase()}.`,
    `Write the reason in your own words and keep the amount as a research input until evidence is checked.`
  ];
  const beforeMoney = [
    "Verify latest AMFI scheme details, AMC factsheet, portfolio date, riskometer, TER, SID/KIM, benchmark, and holdings.",
    "Run Stress Lab, Cost Reality Lab, and Portfolio X-Ray for overlap and drawdown comfort.",
    "Use Watchlist or Review Rhythm to set the next check before increasing, switching, or continuing allocation.",
    "Do not store PAN, folio, CAS, bank data, account credentials, client identifiers, or private account notes in Phase 1."
  ];
  const reviewTriggers = [
    `Review date: ${reviewDate || "Not set"}.`,
    `Re-check if Nadi score drops below ${Math.max(55, nadiScore(fund) - 8)}/100 or evidence readiness falls below 70/100.`,
    `Re-check if expense, drawdown, manager, style, or portfolio holdings change materially.`,
    "Re-check if a correction notice, claim rollback, or source drift event touches this fund."
  ];
  return {
    actionScore,
    amount,
    beforeMoney,
    blockers,
    capitalMode,
    compareCount,
    compareFunds,
    conviction,
    evidenceMode,
    fund,
    lane,
    moneyLane,
    posture,
    readiness,
    reason,
    reviewDate,
    reviewTriggers,
    todaySteps,
    tone,
    trust
  };
}

function renderActionPlanner(event) {
  if (event) event.preventDefault();
  if (!els.actionPlannerOutput || !els.actionPlannerSummary) return;
  const config = actionPlannerConfig();
  els.actionPlannerSummary.textContent = `${config.actionScore}/100 | ${config.posture}`;
  els.actionPlannerOutput.innerHTML = `
    <div class="action-planner-hero ${escapeHtml(config.tone)}">
      <div>
        <span class="metric-label">${escapeHtml(actionLaneLabel(config.lane))} | ${escapeHtml(actionEvidenceModeLabel(config.evidenceMode))}</span>
        <h3>${escapeHtml(config.posture)}</h3>
        <p>${escapeHtml(config.fund.name)} plan for ${escapeHtml(formatMoney(config.amount))}. This is a research workflow, not an instruction to transact.</p>
      </div>
      <div class="action-planner-score" style="--score:${config.actionScore}">
        <b>${config.actionScore}</b>
        <span>Plan</span>
      </div>
    </div>
    <div class="action-planner-metric-grid">
      <article><span>Trust</span><strong>${config.trust.trustScore}/100</strong><p>${escapeHtml(config.trust.posture)}</p></article>
      <article><span>Readiness</span><strong>${config.readiness.score}/100</strong><p>${escapeHtml(config.readiness.posture)}</p></article>
      <article><span>Evidence</span><strong>${evidenceReadinessScore(config.fund)}/100</strong><p>${escapeHtml(actionEvidenceModeLabel(config.evidenceMode))}</p></article>
      <article><span>Compare</span><strong>${config.compareCount}</strong><p>Funds selected</p></article>
    </div>
    <div class="action-planner-grid">
      <article class="action-planner-card">
        <h3>Today</h3>
        <ol class="action-planner-list">
          ${config.todaySteps.map((item) => `<li>${escapeHtml(item)}</li>`).join("")}
        </ol>
      </article>
      <article class="action-planner-card ${escapeHtml(config.tone)}">
        <h3>Blockers</h3>
        <ul class="data-check-list">
          ${config.blockers.map((item) => `<li>${escapeHtml(item)}</li>`).join("") || "<li>No hard blocker in this research plan.</li>"}
        </ul>
      </article>
      <article class="action-planner-card">
        <h3>Before money moves</h3>
        <ul class="data-check-list">
          ${config.beforeMoney.map((item) => `<li>${escapeHtml(item)}</li>`).join("")}
        </ul>
      </article>
      <article class="action-planner-card">
        <h3>Review triggers</h3>
        <ul class="data-check-list">
          ${config.reviewTriggers.map((item) => `<li>${escapeHtml(item)}</li>`).join("")}
        </ul>
      </article>
    </div>
    <div class="action-planner-panel">
      <h3>Decision boundary</h3>
      <p>${config.reason ? escapeHtml(config.reason) : "Write the reason in the form before treating this as a serious memo."}</p>
      <p>Nadi Action Planner organizes research discipline only. It does not recommend, approve, execute, guarantee, or replace a SEBI-regulated professional review.</p>
    </div>
  `;
}

function makeActionPlannerBrief() {
  const config = actionPlannerConfig();
  return [
    "# NiveshNadi Action Planner",
    `Release: ${RELEASE_LABEL} (${DATA_VERSION})`,
    `Fund: ${config.fund.name}`,
    `Action lane: ${actionLaneLabel(config.lane)}`,
    `Capital mode: ${actionCapitalModeLabel(config.capitalMode)}`,
    `Amount reviewed: ${formatMoney(config.amount)}`,
    `Conviction: ${actionConvictionLabel(config.conviction)}`,
    `Evidence standard: ${actionEvidenceModeLabel(config.evidenceMode)}`,
    `Review date: ${config.reviewDate || "Not set"}`,
    `Plan posture: ${config.posture}`,
    `Plan score: ${config.actionScore}/100`,
    `Trust posture: ${config.trust.posture} (${config.trust.trustScore}/100)`,
    `Readiness posture: ${config.readiness.posture} (${config.readiness.score}/100)`,
    "",
    "## Today",
    ...config.todaySteps.map((item) => `- ${item}`),
    "",
    "## Blockers",
    ...(config.blockers.length ? config.blockers.map((item) => `- ${item}`) : ["- No hard blocker in this research plan."]),
    "",
    "## Before Money Moves",
    ...config.beforeMoney.map((item) => `- ${item}`),
    "",
    "## Review Triggers",
    ...config.reviewTriggers.map((item) => `- ${item}`),
    "",
    "## Research Reason",
    config.reason || "Not written yet.",
    "",
    "Research support only. This action plan is not investment advice, a recommendation, execution approval, tax guidance, distributor workflow approval, or a return guarantee."
  ].join("\n");
}

function briefingFocusLabel(value) {
  return {
    today: "Today research brief",
    "before-sip": "Before SIP decision",
    portfolio: "Portfolio review brief",
    switch: "Switch question brief",
    trust: "Evidence and trust brief"
  }[value] || "Today research brief";
}

function briefingAudienceLabel(value) {
  return {
    self: "Self research",
    family: "Family discussion",
    advisor: "Advisor discussion",
    distributor: "Future distributor handoff"
  }[value] || "Self research";
}

function briefingDepthLabel(value) {
  return {
    quick: "5-minute scan",
    standard: "Standard briefing",
    deep: "Deep review"
  }[value] || "Standard briefing";
}

function briefingPriorityLabel(value) {
  return {
    action: "Action discipline first",
    trust: "Evidence trust first",
    risk: "Risk and behavior first",
    portfolio: "Portfolio fit first"
  }[value] || "Action discipline first";
}

function briefingPrimaryMove(priority, focus) {
  if (priority === "trust" || focus === "trust") return "Open Evidence Ledger and Trust Center before trusting any live-looking claim.";
  if (priority === "risk") return "Run Stress Lab and Behavior Guard before changing SIP, STP, or switch behavior.";
  if (priority === "portfolio" || focus === "portfolio") return "Open Portfolio X-Ray and Review Room to check overlap, role duplication, and drift.";
  if (focus === "switch") return "Open Switch Decision Lab and Cost Reality Lab before treating a switch as sensible.";
  if (focus === "before-sip") return "Open Action Planner and Readiness Gate before converting research into a SIP memo.";
  return "Open Action Planner, then review the blockers before doing anything else.";
}

function briefingConfig() {
  const focus = els.briefingFocus?.value || "today";
  const audience = els.briefingAudience?.value || "self";
  const depth = els.briefingDepth?.value || "standard";
  const priority = els.briefingPriority?.value || "action";
  const note = (els.briefingNote?.value || "").trim();
  const fund = selectedFund();
  const compareFunds = FUNDS.filter((item) => state.compare.has(item.id));
  const watchlist = loadWatchlist();
  const alerts = loadAlerts();
  const fundAlerts = alerts.filter((alert) => alert.fundId === fund.id);
  const rhythmItems = reviewRhythmItems();
  const nextRhythm = rhythmItems[0];
  const trust = trustCenterConfig();
  const action = actionPlannerConfig();
  const readiness = readinessConfig();
  const evidence = evidenceReadinessScore(fund);
  const watchSignal = Math.min(96, 54 + watchlist.length * 6 + alerts.length * 4 + (nextRhythm ? 8 : 0));
  const briefingScore = Math.round(clampNumber(
    action.actionScore * 0.26 +
      trust.trustScore * 0.22 +
      readiness.score * 0.16 +
      evidence * 0.14 +
      nadiScore(fund) * 0.12 +
      watchSignal * 0.1 -
      (audience === "distributor" ? 6 : 0) -
      (depth === "quick" && action.blockers.length ? 3 : 0),
    24,
    96
  ));
  const criticalFlags = [
    ...(trust.posture === "Launch hold" ? ["Trust Center is in launch hold posture."] : []),
    ...(action.blockers.slice(0, 4)),
    ...(readiness.criticalMisses.map((item) => item.label)),
    ...(evidence < 70 ? ["Evidence readiness is below live-use comfort."] : []),
    ...(audience === "distributor" ? ["Distributor handoff needs separate ARN/EUIN, consent, and regulated workflow design."] : [])
  ];
  const posture = criticalFlags.length >= 4
    ? "Briefing says pause"
    : criticalFlags.length
      ? "Briefing says review"
      : briefingScore >= 84
        ? "Memo-ready briefing"
        : briefingScore >= 72
          ? "Focused research briefing"
          : "Starter research briefing";
  const tone = posture === "Memo-ready briefing"
    ? "ready"
    : posture === "Briefing says pause"
      ? "caution"
      : "watch";
  const readFirst = [
    `${fund.name}: ${fund.role}`,
    `Nadi score ${nadiScore(fund)}/100, evidence ${evidence}/100, risk band ${fund.risk}.`,
    `Trust posture: ${trust.posture} (${trust.trustScore}/100).`,
    `Action plan: ${action.posture} (${action.actionScore}/100).`
  ];
  const doNext = [
    briefingPrimaryMove(priority, focus),
    compareFunds.length
      ? `Keep compare set visible: ${compareFunds.map((item) => item.name).slice(0, 3).join(", ")}.`
      : "Add at least one peer before treating this as a shortlist.",
    nextRhythm
      ? `Next review rhythm: ${nextRhythm.fund.name} | ${humanReviewDate(nextRhythm.date)} | ${nextRhythm.source}.`
      : "Set a Watchlist or Review Rhythm trigger before any real-world action.",
    note || "Write one sentence explaining what would change this view."
  ];
  const watchNow = [
    `${watchlist.length} watched fund${watchlist.length === 1 ? "" : "s"} and ${alerts.length} saved trigger${alerts.length === 1 ? "" : "s"} in this browser.`,
    fundAlerts.length
      ? `${fundAlerts.length} trigger${fundAlerts.length === 1 ? "" : "s"} attached to ${fund.name}.`
      : `No saved trigger attached to ${fund.name}.`,
    `Review rhythm queue: ${rhythmItems.length} task${rhythmItems.length === 1 ? "" : "s"}.`,
    `Depth: ${briefingDepthLabel(depth)} for ${briefingAudienceLabel(audience).toLowerCase()}.`
  ];
  return {
    action,
    alerts,
    audience,
    briefingScore,
    compareFunds,
    criticalFlags,
    depth,
    doNext,
    evidence,
    focus,
    fund,
    note,
    posture,
    priority,
    readFirst,
    readiness,
    rhythmItems,
    tone,
    trust,
    watchlist,
    watchNow
  };
}

function renderResearchBriefing(event) {
  if (event) event.preventDefault();
  if (!els.briefingOutput || !els.briefingSummary) return;
  const config = briefingConfig();
  els.briefingSummary.textContent = `${config.briefingScore}/100 | ${config.posture}`;
  els.briefingOutput.innerHTML = `
    <div class="briefing-hero ${escapeHtml(config.tone)}">
      <div>
        <span class="metric-label">${escapeHtml(briefingFocusLabel(config.focus))} | ${escapeHtml(briefingPriorityLabel(config.priority))}</span>
        <h3>${escapeHtml(config.posture)}</h3>
        <p>${escapeHtml(config.fund.name)} briefing for ${escapeHtml(briefingAudienceLabel(config.audience).toLowerCase())}. It summarizes research posture; it does not recommend a transaction.</p>
      </div>
      <div class="briefing-score" style="--score:${config.briefingScore}">
        <b>${config.briefingScore}</b>
        <span>Brief</span>
      </div>
    </div>
    <div class="briefing-metric-grid">
      <article><span>Action</span><strong>${config.action.actionScore}/100</strong><p>${escapeHtml(config.action.posture)}</p></article>
      <article><span>Trust</span><strong>${config.trust.trustScore}/100</strong><p>${escapeHtml(config.trust.posture)}</p></article>
      <article><span>Evidence</span><strong>${config.evidence}/100</strong><p>Selected fund readiness</p></article>
      <article><span>Rhythm</span><strong>${config.rhythmItems.length}</strong><p>Review tasks</p></article>
    </div>
    <div class="briefing-grid">
      <article class="briefing-card">
        <h3>Read first</h3>
        <ul class="data-check-list">${config.readFirst.map((item) => `<li>${escapeHtml(item)}</li>`).join("")}</ul>
      </article>
      <article class="briefing-card ${escapeHtml(config.tone)}">
        <h3>Do next</h3>
        <ol class="briefing-list">${config.doNext.map((item) => `<li>${escapeHtml(item)}</li>`).join("")}</ol>
      </article>
      <article class="briefing-card">
        <h3>Watch now</h3>
        <ul class="data-check-list">${config.watchNow.map((item) => `<li>${escapeHtml(item)}</li>`).join("")}</ul>
      </article>
      <article class="briefing-card">
        <h3>Pause flags</h3>
        <ul class="data-check-list">
          ${config.criticalFlags.length ? config.criticalFlags.slice(0, 7).map((item) => `<li>${escapeHtml(item)}</li>`).join("") : "<li>No hard pause flag in the current briefing.</li>"}
        </ul>
      </article>
    </div>
    <div class="briefing-panel">
      <h3>Boundary</h3>
      <p>Use this briefing to decide what to research next, not whether to buy, sell, switch, or continue. Verify live source dates, costs, riskometer, portfolio disclosure, and written reason before any real-world decision.</p>
    </div>
  `;
}

function makeResearchBriefingNote() {
  const config = briefingConfig();
  return [
    "# NiveshNadi Research Briefing",
    `Release: ${RELEASE_LABEL} (${DATA_VERSION})`,
    `Fund: ${config.fund.name}`,
    `Focus: ${briefingFocusLabel(config.focus)}`,
    `Audience: ${briefingAudienceLabel(config.audience)}`,
    `Depth: ${briefingDepthLabel(config.depth)}`,
    `Priority: ${briefingPriorityLabel(config.priority)}`,
    `Briefing posture: ${config.posture}`,
    `Briefing score: ${config.briefingScore}/100`,
    `Action posture: ${config.action.posture} (${config.action.actionScore}/100)`,
    `Trust posture: ${config.trust.posture} (${config.trust.trustScore}/100)`,
    `Evidence readiness: ${config.evidence}/100`,
    "",
    "## Read First",
    ...config.readFirst.map((item) => `- ${item}`),
    "",
    "## Do Next",
    ...config.doNext.map((item) => `- ${item}`),
    "",
    "## Watch Now",
    ...config.watchNow.map((item) => `- ${item}`),
    "",
    "## Pause Flags",
    ...(config.criticalFlags.length ? config.criticalFlags.map((item) => `- ${item}`) : ["- No hard pause flag in the current briefing."]),
    "",
    "Research support only. This briefing is not investment advice, a recommendation, execution approval, distributor workflow approval, tax guidance, or a return guarantee."
  ].join("\n");
}

function briefingSnapshotFromConfig(config = briefingConfig()) {
  return {
    id: `briefing-${Date.now()}-${Math.random().toString(16).slice(2)}`,
    createdAt: new Date().toISOString(),
    release: RELEASE_LABEL,
    dataVersion: DATA_VERSION,
    focus: config.focus,
    focusLabel: briefingFocusLabel(config.focus),
    audience: config.audience,
    audienceLabel: briefingAudienceLabel(config.audience),
    depth: config.depth,
    depthLabel: briefingDepthLabel(config.depth),
    priority: config.priority,
    priorityLabel: briefingPriorityLabel(config.priority),
    briefingScore: config.briefingScore,
    posture: config.posture,
    tone: config.tone,
    fund: {
      id: config.fund.id,
      name: config.fund.name,
      category: config.fund.category,
      risk: config.fund.risk,
      expense: Number(config.fund.expense.toFixed(2))
    },
    metrics: {
      action: config.action.actionScore,
      trust: config.trust.trustScore,
      readiness: config.readiness.score,
      evidence: config.evidence,
      compareCount: config.compareFunds.length,
      watchCount: config.watchlist.length,
      alertCount: config.alerts.length,
      rhythmCount: config.rhythmItems.length,
      pauseFlags: config.criticalFlags.length
    },
    doNext: config.doNext.slice(0, 4),
    pauseFlags: config.criticalFlags.slice(0, 8),
    noteStatus: config.note ? "Briefing note present; note body not saved in vault" : "No optional briefing note",
    boundary: "Research briefing metadata only; excludes PAN, folio, CAS, credentials, bank data, account details, contact data, advice, approval, and guarantees."
  };
}

function saveCurrentBriefingSnapshot() {
  const snapshot = briefingSnapshotFromConfig();
  const entries = [snapshot, ...loadBriefingVault()].slice(0, 24);
  saveBriefingVault(entries);
  renderBriefingVault();
  renderResearchMemory();
  renderPrivacyControlRoom();
  toast("Research briefing saved locally.");
}

function clearBriefingVault() {
  saveBriefingVault([]);
  renderBriefingVault();
  renderResearchMemory();
  renderPrivacyControlRoom();
  toast("Briefing vault cleared.");
}

function renderBriefingVault() {
  if (!els.briefingVaultOutput || !els.briefingVaultSummary) return;
  const entries = loadBriefingVault();
  const current = briefingSnapshotFromConfig();
  const latest = entries[0] || null;
  const prior = entries[1] || null;
  const scoreDelta = latest ? reviewVaultDelta(latest.briefingScore, prior?.briefingScore) : "New";
  const trustDelta = latest ? reviewVaultDelta(latest.metrics.trust, prior?.metrics.trust) : "New";
  const actionDelta = latest ? reviewVaultDelta(latest.metrics.action, prior?.metrics.action) : "New";
  const pauseDelta = latest ? reviewVaultDelta(latest.metrics.pauseFlags, prior?.metrics.pauseFlags) : "New";
  els.briefingVaultSummary.textContent = `${entries.length} briefing${entries.length === 1 ? "" : "s"}`;

  if (!entries.length) {
    els.briefingVaultOutput.innerHTML = `
      <div class="briefing-vault-empty">
        <div>
          <span class="metric-label">Current briefing preview</span>
          <h3>${current.briefingScore}/100 ${escapeHtml(current.posture)}</h3>
          <p>Save the current Research Briefing to begin a browser-local briefing memory. The vault stores fund name, posture, scores, next actions, and pause flag counts only; it does not store PAN, folio, CAS, credentials, account data, or private notes.</p>
        </div>
        <div class="briefing-vault-score" style="--score:${current.briefingScore}">
          <b>${current.briefingScore}</b>
          <span>Now</span>
        </div>
      </div>
    `;
    return;
  }

  const postureCounts = entries.reduce((counts, entry) => {
    counts[entry.posture] = (counts[entry.posture] || 0) + 1;
    return counts;
  }, {});
  const flagged = entries.filter((entry) => entry.metrics.pauseFlags > 0).length;
  els.briefingVaultOutput.innerHTML = `
    <div class="briefing-vault-hero ${escapeHtml(latest.tone)}">
      <div>
        <span class="metric-label">Latest saved briefing</span>
        <h3>${latest.briefingScore}/100 ${escapeHtml(latest.posture)}</h3>
        <p>${escapeHtml(latest.fund.name)} | ${escapeHtml(latest.focusLabel)} | Saved ${new Date(latest.createdAt).toLocaleString("en-IN")} | ${escapeHtml(latest.priorityLabel)}.</p>
      </div>
      <div class="briefing-vault-score" style="--score:${latest.briefingScore}">
        <b>${latest.briefingScore}</b>
        <span>Vault</span>
      </div>
    </div>
    <div class="briefing-vault-metric-grid">
      <div><span>Briefing delta</span><strong>${escapeHtml(scoreDelta)}</strong></div>
      <div><span>Trust delta</span><strong>${escapeHtml(trustDelta)}</strong></div>
      <div><span>Action delta</span><strong>${escapeHtml(actionDelta)}</strong></div>
      <div><span>Pause flag delta</span><strong>${escapeHtml(pauseDelta)}</strong></div>
      <div><span>Flagged briefings</span><strong>${flagged}</strong></div>
      <div><span>Postures</span><strong>${Object.keys(postureCounts).length}</strong></div>
    </div>
    <div class="briefing-vault-grid">
      ${entries.slice(0, 8).map((entry, index) => {
        const previous = entries[index + 1] || null;
        return `
          <article class="briefing-vault-card">
            <div class="briefing-vault-card-head">
              <span>${escapeHtml(entry.focusLabel)}</span>
              <strong>${entry.briefingScore}/100</strong>
            </div>
            <p>${escapeHtml(entry.fund.name)} | ${escapeHtml(entry.fund.category)} | ${escapeHtml(entry.fund.risk)} risk</p>
            <div class="briefing-vault-mini-grid">
              <div><span>Trust</span><b>${entry.metrics.trust}/100</b></div>
              <div><span>Action</span><b>${entry.metrics.action}/100</b></div>
              <div><span>Flags</span><b>${entry.metrics.pauseFlags}</b></div>
            </div>
            <small>Score ${escapeHtml(reviewVaultDelta(entry.briefingScore, previous?.briefingScore))} from prior briefing | ${escapeHtml(entry.noteStatus)}</small>
          </article>
        `;
      }).join("")}
    </div>
    <div class="briefing-vault-card-grid">
      <article class="briefing-vault-panel">
        <h3>Latest next actions</h3>
        <ol class="briefing-vault-list">
          ${latest.doNext.map((item) => `<li>${escapeHtml(item)}</li>`).join("")}
        </ol>
      </article>
      <article class="briefing-vault-panel">
        <h3>Pause flag mix</h3>
        <div class="briefing-vault-funds">
          ${latest.pauseFlags.length ? latest.pauseFlags.map((item) => `<span>${escapeHtml(item)}</span>`).join("") : "<span>No pause flag in latest briefing.</span>"}
        </div>
      </article>
      <article class="briefing-vault-panel briefing-vault-guardrail">
        <h3>Vault boundary</h3>
        <p>Briefing Vault stores browser-local research metadata only. It excludes PAN, folio, CAS, credentials, bank data, contact data, client identifiers, private notes, advice, approval, and guarantees.</p>
      </article>
    </div>
  `;
}

function makeBriefingVaultBrief() {
  const entries = loadBriefingVault();
  const latest = entries[0];
  const prior = entries[1];
  if (!latest) {
    return [
      "# NiveshNadi Briefing Vault",
      `Release: ${RELEASE_LABEL} (${DATA_VERSION})`,
      "No saved briefing snapshots yet.",
      "",
      "Save a Research Briefing snapshot to begin a browser-local research memory. Do not store PAN, folio, CAS, credentials, bank data, client identifiers, or private notes."
    ].join("\n");
  }
  return [
    "# NiveshNadi Briefing Vault",
    `Release: ${RELEASE_LABEL} (${DATA_VERSION})`,
    `Saved briefings: ${entries.length}`,
    `Latest fund: ${latest.fund.name}`,
    `Latest focus: ${latest.focusLabel}`,
    `Latest posture: ${latest.posture}`,
    `Briefing score: ${latest.briefingScore}/100`,
    `Score delta: ${reviewVaultDelta(latest.briefingScore, prior?.briefingScore)}`,
    `Trust delta: ${reviewVaultDelta(latest.metrics.trust, prior?.metrics.trust)}`,
    `Action delta: ${reviewVaultDelta(latest.metrics.action, prior?.metrics.action)}`,
    `Pause flags: ${latest.metrics.pauseFlags}`,
    "",
    "## Latest Next Actions",
    ...latest.doNext.map((item) => `- ${item}`),
    "",
    "## Latest Pause Flags",
    ...(latest.pauseFlags.length ? latest.pauseFlags.map((item) => `- ${item}`) : ["- No pause flag in latest briefing."]),
    "",
    "## Recent Briefings",
    ...entries.slice(0, 8).map((entry) => `- ${new Date(entry.createdAt).toLocaleDateString("en-IN")}: ${entry.fund.name} | ${entry.posture} | ${entry.briefingScore}/100 | ${entry.focusLabel}`),
    "",
    "Briefing Vault stores browser-local research metadata only. It is not investment advice, a recommendation, execution approval, distributor workflow approval, tax guidance, or a return guarantee."
  ].join("\n");
}

function researchMemoryDate(value) {
  const date = new Date(value);
  if (Number.isNaN(date.getTime())) return "Not dated";
  return date.toLocaleString("en-IN", { dateStyle: "medium", timeStyle: "short" });
}

function researchMemoryShortDate(value) {
  const date = new Date(value);
  if (Number.isNaN(date.getTime())) return "Not dated";
  return date.toLocaleDateString("en-IN", { day: "2-digit", month: "short" });
}

function researchMemoryTone(score) {
  if (score >= 76) return "ready";
  if (score >= 56) return "watch";
  return "caution";
}

function researchMemoryPosture(score) {
  if (score >= 76) return "Memory trail forming";
  if (score >= 56) return "Memory trail started";
  return "Start memory trail";
}

function researchMemoryTimeline() {
  const timeline = [];
  const add = (entry) => {
    const score = clampNumber(Number(entry.score) || 0, 0, 100);
    timeline.push({
      ...entry,
      createdAt: entry.createdAt || new Date().toISOString(),
      score
    });
  };

  loadBriefingVault().forEach((entry) => add({
    type: "Briefing",
    tone: entry.tone || researchMemoryTone(entry.briefingScore),
    createdAt: entry.createdAt,
    title: entry.fund?.name || "Research briefing",
    meta: `${entry.posture || "Saved briefing"} | ${entry.briefingScore || 0}/100`,
    detail: `${entry.focusLabel || "Briefing"} | Trust ${entry.metrics?.trust || 0}/100 | Action ${entry.metrics?.action || 0}/100 | Flags ${entry.metrics?.pauseFlags || 0}`,
    score: entry.briefingScore,
    next: entry.doNext?.[0] || "Review latest briefing actions."
  }));

  loadReviewVault().forEach((entry) => add({
    type: "Review",
    tone: researchMemoryTone(entry.score),
    createdAt: entry.createdAt,
    title: entry.funds?.[0]?.name || "Portfolio review",
    meta: `${entry.posture || "Saved review"} | ${entry.score || 0}/100`,
    detail: `${entry.funds?.length || 0} fund${entry.funds?.length === 1 ? "" : "s"} | Evidence ${entry.metrics?.evidence || 0}/100 | Drift ${entry.metrics?.drift || 0}% | Queue ${entry.metrics?.queue || 0}`,
    score: entry.score,
    next: entry.queue?.[0] || "Open Review Vault before making portfolio changes."
  }));

  loadReceiptVault().forEach((entry) => add({
    type: "Receipt",
    tone: entry.tone || researchMemoryTone(entry.receiptScore),
    createdAt: entry.createdAt,
    title: entry.fund?.name || "Research receipt",
    meta: `${entry.decisionLabel || "Saved receipt"} | ${entry.receiptScore || 0}/100`,
    detail: `${entry.modeLabel || "Receipt"} | Evidence ${entry.metrics?.evidence || 0}/100 | Claims ${entry.metrics?.claimFlags || 0} | Watch ${entry.metrics?.watchCount || 0}`,
    score: entry.receiptScore,
    next: entry.nextChecks?.[0] || "Keep proof checks current before action."
  }));

  loadResearchDossiers().forEach((entry) => add({
    type: "Dossier",
    tone: researchMemoryTone(entry.readiness),
    createdAt: entry.createdAt,
    title: entry.label || entry.primary?.name || "Research dossier",
    meta: `${entry.depthLabel || "Dossier"} | ${entry.readiness || 0}/100`,
    detail: `${entry.primary?.name || "Selected fund"} | Evidence ${entry.metrics?.evidence || 0}/100 | Compare ${entry.metrics?.compareCount || 0} | Vault ${entry.metrics?.vaultCount || 0}`,
    score: entry.readiness,
    next: entry.reviewQueue?.[0] || "Use dossier as a research packet, not an approval."
  }));

  loadInvestorRecords().forEach((entry) => add({
    type: "Record",
    tone: researchMemoryTone(entry.recordScore),
    createdAt: entry.createdAt,
    title: entry.recordCode || "Investor review record",
    meta: `${entry.stanceLabel || "Record"} | ${entry.recordScore || 0}/100`,
    detail: `${entry.audienceLabel || "Self review"} | ${entry.funds?.length || 0} fund${entry.funds?.length === 1 ? "" : "s"} | ${entry.noteStatus || "No private note stored"}`,
    score: entry.recordScore,
    next: entry.gates?.[0] || "Keep records identity-light."
  }));

  loadClaimReleaseLedger().forEach((entry) => add({
    type: "Claim gate",
    tone: entry.tone || researchMemoryTone(entry.score),
    createdAt: entry.createdAt,
    title: entry.fund?.name || "Claim release",
    meta: `${entry.decision || "Claim gate"} | ${entry.score || 0}/100`,
    detail: `${entry.surfaceLabel || "Surface"} | Evidence ${entry.metrics?.evidence || 0}/100 | Source ${entry.source?.readiness || 0}/100 | Flags ${entry.flags?.length || 0}`,
    score: entry.score,
    next: entry.nextStep || "Keep public claims behind source and rollback gates."
  }));

  loadWatchlist().forEach((entry) => {
    const fund = FUNDS.find((item) => item.id === entry.fundId) || selectedFund();
    add({
      type: "Watchlist",
      tone: "watch",
      createdAt: entry.createdAt,
      title: fund.name,
      meta: `${fund.category} | ${fund.risk} risk`,
      detail: `Watchlist fund | Nadi score ${nadiScore(fund)}/100 | Evidence ${evidenceReadinessScore(fund)}/100`,
      score: nadiScore(fund),
      next: "Open Watchlist and confirm trigger discipline."
    });
  });

  loadAlerts().forEach((entry) => {
    const fund = FUNDS.find((item) => item.id === entry.fundId) || selectedFund();
    add({
      type: "Alert",
      tone: "caution",
      createdAt: entry.createdAt,
      title: fund.name,
      meta: `${entry.trigger || "review"} trigger | ${entry.limit || "No limit"}`,
      detail: entry.note ? "Alert note present; note body not copied into memory." : "Alert saved without private note.",
      score: Math.max(35, nadiScore(fund) - 12),
      next: "Check alert before adding, switching, or increasing exposure."
    });
  });

  loadJournal().forEach((entry) => add({
    type: "Journal",
    tone: "watch",
    createdAt: entry.createdAt,
    title: entry.fund || "Decision journal",
    meta: entry.decision || "Journal entry",
    detail: entry.reason ? "Written reason present; reason text is not copied into memory." : "No written reason captured.",
    score: entry.reason ? 62 : 46,
    next: "Review journal reason before treating the decision as ready."
  }));

  return timeline
    .filter((entry) => entry.createdAt)
    .sort((a, b) => new Date(b.createdAt) - new Date(a.createdAt))
    .slice(0, 40);
}

function researchMemoryConfig() {
  const fund = selectedFund();
  const compareFunds = compareSet();
  const briefingVault = loadBriefingVault();
  const reviewVault = loadReviewVault();
  const receiptVault = loadReceiptVault();
  const dossiers = loadResearchDossiers();
  const investorRecords = loadInvestorRecords();
  const claimLedger = loadClaimReleaseLedger();
  const watchlist = loadWatchlist();
  const alerts = loadAlerts();
  const journal = loadJournal();
  const timeline = researchMemoryTimeline();
  const artifactCount = briefingVault.length + reviewVault.length + receiptVault.length + dossiers.length + investorRecords.length + claimLedger.length + journal.length;
  const evidence = evidenceReadinessScore(fund);
  const memoryScore = clampNumber(Math.round(
    28 +
    Math.min(artifactCount * 5, 32) +
    Math.min(watchlist.length * 3, 9) +
    Math.min(compareFunds.length * 3, 9) +
    Math.round(evidence / 4) -
    Math.min(alerts.length * 2, 12)
  ), 0, 100);
  const gaps = [
    briefingVault.length ? null : "Save at least one Research Briefing snapshot.",
    receiptVault.length ? null : "Save one Research Receipt after proof checks.",
    reviewVault.length ? null : "Save a Portfolio Review snapshot before major changes.",
    dossiers.length ? null : "Build one Research Dossier for the selected fund.",
    watchlist.length ? null : "Add selected or compared funds to the Watchlist.",
    evidence >= 76 ? null : "Refresh Evidence Ledger and citation path before live reliance.",
    alerts.length <= 3 ? null : "Review active alerts before new action."
  ].filter(Boolean);
  const coverage = [
    { label: "Briefings", count: briefingVault.length },
    { label: "Reviews", count: reviewVault.length },
    { label: "Receipts", count: receiptVault.length },
    { label: "Dossiers", count: dossiers.length },
    { label: "Records", count: investorRecords.length },
    { label: "Claim gates", count: claimLedger.length }
  ];
  return {
    fund,
    compareFunds,
    evidence,
    watchlist,
    alerts,
    journal,
    timeline,
    artifactCount,
    coverage,
    gaps,
    memoryScore,
    tone: researchMemoryTone(memoryScore),
    posture: researchMemoryPosture(memoryScore),
    latest: timeline[0] || null
  };
}

function renderResearchMemory() {
  if (!els.researchMemoryOutput || !els.researchMemorySummary) return;
  const config = researchMemoryConfig();
  const latest = config.latest;
  els.researchMemorySummary.textContent = `${config.artifactCount} artifact${config.artifactCount === 1 ? "" : "s"} | ${config.timeline.length} events`;

  const latestTitle = latest ? `${escapeHtml(latest.type)}: ${escapeHtml(latest.title)}` : `Current fund: ${escapeHtml(config.fund.name)}`;
  const latestDetail = latest
    ? `${escapeHtml(latest.meta)} | ${researchMemoryDate(latest.createdAt)}`
    : `${escapeHtml(config.fund.category)} | ${escapeHtml(config.fund.risk)} risk | Evidence ${config.evidence}/100`;

  els.researchMemoryOutput.innerHTML = `
    <div class="research-memory-hero ${escapeHtml(config.tone)}">
      <div>
        <span class="metric-label">${latest ? "Latest memory event" : "Memory starting point"}</span>
        <h3>${latestTitle}</h3>
        <p>${latestDetail}</p>
      </div>
      <div class="research-memory-score" style="--score:${config.memoryScore}">
        <b>${config.memoryScore}</b>
        <span>Memory</span>
      </div>
    </div>
    <div class="research-memory-metric-grid">
      <article><span>Memory posture</span><strong>${escapeHtml(config.posture)}</strong></article>
      <article><span>Artifacts</span><strong>${config.artifactCount}</strong></article>
      <article><span>Watchlist</span><strong>${config.watchlist.length}</strong></article>
      <article><span>Alerts</span><strong>${config.alerts.length}</strong></article>
      <article><span>Compare set</span><strong>${config.compareFunds.length}</strong></article>
      <article><span>Evidence</span><strong>${config.evidence}/100</strong></article>
    </div>
    <div class="research-memory-grid">
      <article class="research-memory-panel">
        <h3>Memory coverage</h3>
        <div class="research-memory-coverage">
          ${config.coverage.map((item) => `<span><b>${item.count}</b>${escapeHtml(item.label)}</span>`).join("")}
        </div>
      </article>
      <article class="research-memory-panel">
        <h3>Next memory moves</h3>
        <ol class="research-memory-list">
          ${(config.gaps.length ? config.gaps.slice(0, 5) : ["Memory coverage is broad enough for the next research review."]).map((item) => `<li>${escapeHtml(item)}</li>`).join("")}
        </ol>
      </article>
      <article class="research-memory-panel research-memory-guardrail">
        <h3>Privacy boundary</h3>
        <p>Research Memory reads browser-local metadata only. It does not copy PAN, folio, CAS, credentials, bank data, contact details, client identifiers, private note bodies, advice, approval, or guarantees.</p>
      </article>
    </div>
    <div class="research-memory-timeline">
      ${(config.timeline.length ? config.timeline.slice(0, 10) : [{
        type: "Start",
        tone: "watch",
        createdAt: new Date().toISOString(),
        title: config.fund.name,
        meta: `${config.fund.category} | Nadi score ${nadiScore(config.fund)}/100`,
        detail: "Save a briefing, receipt, review, or dossier to create the first durable memory point.",
        score: nadiScore(config.fund),
        next: "Open Research Briefing and save the first snapshot."
      }]).map((entry) => `
        <article class="research-memory-event ${escapeHtml(entry.tone || "watch")}">
          <div class="research-memory-event-date">
            <span>${escapeHtml(researchMemoryShortDate(entry.createdAt))}</span>
            <b>${escapeHtml(entry.type)}</b>
          </div>
          <div>
            <h3>${escapeHtml(entry.title)}</h3>
            <p>${escapeHtml(entry.meta)}</p>
            <small>${escapeHtml(entry.detail)}</small>
          </div>
          <div class="research-memory-event-score">${entry.score}</div>
        </article>
      `).join("")}
    </div>
  `;
}

function makeResearchMemoryBrief() {
  const config = researchMemoryConfig();
  return [
    "# NiveshNadi Research Memory",
    `Release: ${RELEASE_LABEL} (${DATA_VERSION})`,
    `Selected fund: ${config.fund.name}`,
    `Memory posture: ${config.posture}`,
    `Memory score: ${config.memoryScore}/100`,
    `Saved artifacts: ${config.artifactCount}`,
    `Timeline events: ${config.timeline.length}`,
    `Watchlist funds: ${config.watchlist.length}`,
    `Active alerts: ${config.alerts.length}`,
    `Evidence readiness: ${config.evidence}/100`,
    "",
    "## Coverage",
    ...config.coverage.map((item) => `- ${item.label}: ${item.count}`),
    "",
    "## Next Memory Moves",
    ...(config.gaps.length ? config.gaps.slice(0, 7).map((item) => `- ${item}`) : ["- Memory coverage is broad enough for the next research review."]),
    "",
    "## Recent Memory Events",
    ...(config.timeline.length ? config.timeline.slice(0, 10).map((entry) => `- ${researchMemoryDate(entry.createdAt)} | ${entry.type} | ${entry.title} | ${entry.meta}`) : ["- No saved memory events yet."]),
    "",
    "Research Memory is browser-local metadata only. It excludes PAN, folio, CAS, credentials, bank data, contact details, client identifiers, free-form private note bodies, personalized advice, execution approval, tax guidance, and return guarantees."
  ].join("\n");
}

const PRIVACY_STORES = [
  {
    id: "starter",
    key: "niveshnadi-starter-guide",
    label: "First 5-Minute Start",
    purpose: "Progress ticks for the first-session checklist.",
    fields: "Checklist status only",
    sensitivity: "Low"
  },
  {
    id: "watchlist",
    key: "niveshnadi-watchlist",
    label: "Watchlist",
    purpose: "Saved fund IDs and created dates for research follow-up.",
    fields: "Fund ID, timestamp",
    sensitivity: "Low"
  },
  {
    id: "alerts",
    key: "niveshnadi-alerts",
    label: "Alerts",
    purpose: "Review, expense, drawdown, score, and style triggers.",
    fields: "Fund ID, trigger, limit, optional note",
    sensitivity: "Free text possible",
    freeText: true
  },
  {
    id: "briefing-vault",
    key: "niveshnadi-briefing-vault",
    label: "Briefing Vault",
    purpose: "Saved briefing metadata and pause flags.",
    fields: "Fund name, scores, posture, next actions",
    sensitivity: "Metadata"
  },
  {
    id: "review-vault",
    key: "niveshnadi-review-vault",
    label: "Review Vault",
    purpose: "Portfolio review snapshots and queue posture.",
    fields: "Fund names, review score, evidence, drift",
    sensitivity: "Metadata"
  },
  {
    id: "receipt-vault",
    key: "niveshnadi-receipt-vault",
    label: "Receipt Vault",
    purpose: "Proof-of-research receipt metadata.",
    fields: "Fund name, proof score, claim flags",
    sensitivity: "Metadata"
  },
  {
    id: "journal",
    key: "niveshnadi-journal",
    label: "Decision Journal",
    purpose: "Browser-local decision notes written by the user.",
    fields: "Fund, decision, written reason",
    sensitivity: "Free text",
    freeText: true
  },
  {
    id: "investor-records",
    key: "niveshnadi-investor-records",
    label: "Investor Records",
    purpose: "Identity-light review records for self discipline.",
    fields: "Record code, stance, audience, fund names",
    sensitivity: "Metadata"
  },
  {
    id: "research-dossiers",
    key: "niveshnadi-research-dossiers",
    label: "Research Dossiers",
    purpose: "Saved research packet metadata.",
    fields: "Dossier label, funds, scores, review queue",
    sensitivity: "Label text possible",
    freeText: true
  },
  {
    id: "claim-ledger",
    key: "niveshnadi-claim-release-ledger",
    label: "Claim Release Ledger",
    purpose: "Saved product-claim release gate decisions.",
    fields: "Claim surface, source family, flags, score",
    sensitivity: "Metadata"
  },
  {
    id: "correction-ledger",
    key: "niveshnadi-correction-notices",
    label: "Correction Notices",
    purpose: "Saved correction notice drafts and status metadata.",
    fields: "Affected surface, status, drafted language",
    sensitivity: "Free text possible",
    freeText: true
  }
];

const PRIVACY_NEVER_STORED = [
  "PAN, folio, CAS, demat, bank, UPI, or card details",
  "ARN, EUIN, distributor client records, or account credentials",
  "Phone, email, address, nominee, family identity, or uploaded documents",
  "Execution instructions, personalized advice, tax advice, approval, or return guarantee"
];

function privacyParseStore(definition) {
  const raw = localStorage.getItem(definition.key);
  if (!raw) return { definition, raw: "", value: null, count: 0, bytes: 0, present: false };
  let value = raw;
  try {
    value = JSON.parse(raw);
  } catch {
    value = raw;
  }
  const count = Array.isArray(value)
    ? value.length
    : value && typeof value === "object"
      ? Object.keys(value).length
      : raw ? 1 : 0;
  return {
    definition,
    raw,
    value,
    count,
    bytes: raw.length,
    present: true
  };
}

function privacyFormatBytes(value) {
  if (value < 1024) return `${value} B`;
  return `${(value / 1024).toFixed(1)} KB`;
}

function privacyControlConfig() {
  const stores = PRIVACY_STORES.map(privacyParseStore);
  const activeStores = stores.filter((store) => store.present);
  const totalRecords = stores.reduce((sum, store) => sum + store.count, 0);
  const totalBytes = stores.reduce((sum, store) => sum + store.bytes, 0);
  const freeTextStores = stores.filter((store) => store.present && store.definition.freeText);
  const privacyScore = clampNumber(Math.round(
    92 -
    Math.min(freeTextStores.length * 7, 28) -
    Math.min(activeStores.length * 1.5, 12) +
    (totalRecords ? 0 : 4)
  ), 45, 98);
  const posture = freeTextStores.length
    ? "Review free-text buckets"
    : activeStores.length
      ? "Local metadata only"
      : "Clean local slate";
  const tone = freeTextStores.length ? "watch" : "ready";
  return {
    stores,
    activeStores,
    totalRecords,
    totalBytes,
    freeTextStores,
    privacyScore,
    posture,
    tone
  };
}

function clearPrivacyStore(key) {
  const definition = PRIVACY_STORES.find((item) => item.key === key);
  if (!definition) return;
  localStorage.removeItem(key);
  renderAll();
  toast(`${definition.label} cleared locally.`);
}

function clearAllPrivacyStores() {
  const ok = window.confirm("Clear all NiveshNadi browser-local research data on this device?");
  if (!ok) return;
  PRIVACY_STORES.forEach((definition) => localStorage.removeItem(definition.key));
  renderAll();
  toast("All NiveshNadi local research data cleared.");
}

function renderPrivacyControlRoom() {
  if (!els.privacyControlOutput || !els.privacyControlSummary) return;
  const config = privacyControlConfig();
  els.privacyControlSummary.textContent = `${config.activeStores.length} active store${config.activeStores.length === 1 ? "" : "s"} | ${config.totalRecords} record${config.totalRecords === 1 ? "" : "s"}`;

  els.privacyControlOutput.innerHTML = `
    <div class="privacy-control-hero ${escapeHtml(config.tone)}">
      <div>
        <span class="metric-label">Browser-local storage posture</span>
        <h3>${escapeHtml(config.posture)}</h3>
        <p>NiveshNadi stores research workflow data only in this browser. Use this room to inspect local buckets, spot free-text areas, copy a privacy report, or clear saved research artifacts.</p>
      </div>
      <div class="privacy-control-score" style="--score:${config.privacyScore}">
        <b>${config.privacyScore}</b>
        <span>Privacy</span>
      </div>
    </div>
    <div class="privacy-control-metric-grid">
      <article><span>Active stores</span><strong>${config.activeStores.length}</strong></article>
      <article><span>Local records</span><strong>${config.totalRecords}</strong></article>
      <article><span>Storage size</span><strong>${privacyFormatBytes(config.totalBytes)}</strong></article>
      <article><span>Free-text buckets</span><strong>${config.freeTextStores.length}</strong></article>
      <article><span>Cloud sync</span><strong>Off</strong></article>
      <article><span>Private IDs</span><strong>Not stored</strong></article>
    </div>
    <div class="privacy-control-grid">
      ${config.stores.map((store) => `
        <article class="privacy-store-card ${store.present ? "active" : ""}">
          <div class="privacy-store-head">
            <span>${escapeHtml(store.definition.sensitivity)}</span>
            <strong>${store.count}</strong>
          </div>
          <h3>${escapeHtml(store.definition.label)}</h3>
          <p>${escapeHtml(store.definition.purpose)}</p>
          <div class="privacy-store-fields">
            <span>${escapeHtml(store.definition.fields)}</span>
            <b>${privacyFormatBytes(store.bytes)}</b>
          </div>
          <button class="text-button" type="button" data-privacy-clear="${escapeHtml(store.definition.key)}" ${store.present ? "" : "disabled"}>Clear bucket</button>
        </article>
      `).join("")}
    </div>
    <div class="privacy-control-panel-grid">
      <article class="privacy-control-panel">
        <h3>Never stored in Phase 1</h3>
        <ul class="privacy-control-list">
          ${PRIVACY_NEVER_STORED.map((item) => `<li>${escapeHtml(item)}</li>`).join("")}
        </ul>
      </article>
      <article class="privacy-control-panel">
        <h3>Free-text attention</h3>
        <p>${config.freeTextStores.length ? `${config.freeTextStores.map((store) => store.definition.label).join(", ")} may contain user-written text. Review or clear these before sharing a device.` : "No active free-text bucket is currently stored in this browser."}</p>
      </article>
      <article class="privacy-control-panel privacy-control-guardrail">
        <h3>Clear local research</h3>
        <p>This only clears NiveshNadi data in this browser. It does not affect GitHub, uploaded files, external accounts, or any future backend.</p>
        <button class="primary-button" type="button" data-privacy-clear-all>Clear all local research</button>
      </article>
    </div>
  `;
}

function makePrivacyControlReport() {
  const config = privacyControlConfig();
  return [
    "# NiveshNadi Privacy Control Room",
    `Release: ${RELEASE_LABEL} (${DATA_VERSION})`,
    `Storage posture: ${config.posture}`,
    `Privacy score: ${config.privacyScore}/100`,
    `Active browser-local stores: ${config.activeStores.length}`,
    `Local records: ${config.totalRecords}`,
    `Approx storage size: ${privacyFormatBytes(config.totalBytes)}`,
    `Free-text buckets: ${config.freeTextStores.length}`,
    "",
    "## Local storage buckets",
    ...config.stores.map((store) => `- ${store.definition.label}: ${store.count} record(s), ${privacyFormatBytes(store.bytes)}, ${store.definition.sensitivity}`),
    "",
    "## Never stored in Phase 1",
    ...PRIVACY_NEVER_STORED.map((item) => `- ${item}`),
    "",
    "Privacy Control Room is a browser-local transparency layer. It does not transmit data, create accounts, sync cloud storage, collect PAN/folio/CAS/bank/credential/contact/client data, or provide advice, approval, or guarantees."
  ].join("\n");
}

const SHARE_SAFE_AUDIENCES = {
  self: {
    label: "Self review",
    purpose: "Use the pack as a personal research checkpoint before writing or revisiting a decision memo.",
    boundary: "Keep it as research workflow text; do not treat it as execution approval."
  },
  family: {
    label: "Family discussion",
    purpose: "Explain the fund role, risks, evidence posture, and next review discipline without exposing private account data.",
    boundary: "Keep family identity, contact details, account references, and transaction instructions outside the pack."
  },
  advisor: {
    label: "Advisor conversation",
    purpose: "Share a structured research view so an advisor can discuss assumptions, gaps, and documents to verify.",
    boundary: "This is not a recommendation request or transaction instruction."
  },
  distributor: {
    label: "Future distributor handoff",
    purpose: "Prototype the kind of clean research packet Phase 2 could hand to an ARN/EUIN workflow after consent design.",
    boundary: "Phase 1 excludes PAN, ARN, EUIN, client lists, folio, CAS, mandate, and contact data."
  }
};

const SHARE_SAFE_DEPTHS = {
  quick: {
    label: "Quick summary",
    includes: ["Selected fund snapshot", "Compare-set names", "Evidence posture", "Privacy boundary"],
    scoreBonus: 5
  },
  standard: {
    label: "Standard research pack",
    includes: ["Selected fund snapshot", "Compare-set summary", "Research Memory coverage", "Privacy boundary", "Next checks"],
    scoreBonus: 2
  },
  complete: {
    label: "Complete research trail",
    includes: ["Selected fund snapshot", "Compare-set summary", "Research Memory timeline", "Privacy bucket summary", "Next checks"],
    scoreBonus: -2
  }
};

const SHARE_SAFE_HISTORY = {
  current: {
    label: "Current fund only",
    detail: "No saved local timeline events are copied unless they support the current fund context.",
    scoreBonus: 5
  },
  recent: {
    label: "Recent local artifacts",
    detail: "Saved artifact counts and latest memory event are summarized, not full private notes.",
    scoreBonus: 1
  },
  timeline: {
    label: "Memory timeline summary",
    detail: "Recent memory event metadata is included while private note bodies remain excluded.",
    scoreBonus: -3
  }
};

const SHARE_SAFE_SCRUBS = {
  strict: {
    label: "Strict identity scrub",
    detail: "Remove identifiers, free-text note bodies, contact details, and transaction language from the copied pack.",
    scoreBonus: 8
  },
  standard: {
    label: "Standard scrub",
    detail: "Remove sensitive identifiers and keep only research metadata and fund context.",
    scoreBonus: 4
  },
  distributor: {
    label: "Distributor-ready boundary",
    detail: "Show Phase 2 handoff intent while still excluding PAN, ARN, EUIN, folio, CAS, contact, and client data.",
    scoreBonus: 6
  }
};

function readShareSafeConfig() {
  return {
    audience: els.shareSafeAudience?.value || "self",
    depth: els.shareSafeDepth?.value || "standard",
    history: els.shareSafeHistory?.value || "current",
    scrub: els.shareSafeScrub?.value || "strict"
  };
}

function shareSafePosture(score, attentionCount) {
  if (score >= 82 && attentionCount === 0) return "Clean to share";
  if (score >= 68) return "Share after review";
  return "Scrub before sharing";
}

function shareSafeTone(score) {
  if (score >= 82) return "ready";
  if (score >= 64) return "watch";
  return "caution";
}

function shareSafeConfig() {
  const input = readShareSafeConfig();
  const audience = SHARE_SAFE_AUDIENCES[input.audience] || SHARE_SAFE_AUDIENCES.self;
  const depth = SHARE_SAFE_DEPTHS[input.depth] || SHARE_SAFE_DEPTHS.standard;
  const history = SHARE_SAFE_HISTORY[input.history] || SHARE_SAFE_HISTORY.current;
  const scrub = SHARE_SAFE_SCRUBS[input.scrub] || SHARE_SAFE_SCRUBS.strict;
  const fund = selectedFund();
  const compareFunds = compareSet();
  const memory = researchMemoryConfig();
  const privacy = privacyControlConfig();
  const evidence = evidenceReadinessScore(fund);
  const freeTextLabels = privacy.freeTextStores.map((store) => store.definition.label);
  const attention = [
    freeTextLabels.length ? `Review free-text buckets before sharing: ${freeTextLabels.join(", ")}.` : null,
    memory.artifactCount ? null : "No saved local artifacts yet; pack will rely on current screen context.",
    evidence >= 76 ? null : "Evidence readiness is below launch comfort; cite source date before external sharing.",
    compareFunds.length ? null : "No compare set selected; add at least one peer when sharing a comparison pack.",
    input.history === "timeline" && memory.timeline.length > 6 ? "Timeline mode includes several metadata events; keep it short for external review." : null,
    input.audience === "distributor" ? "Future distributor handoff still needs consent, ARN/EUIN, PAN, and role-based access design before real launch." : null
  ].filter(Boolean);
  const included = [
    ...depth.includes,
    input.history !== "current" ? history.label : null,
    compareFunds.length ? `${compareFunds.length} compare fund${compareFunds.length === 1 ? "" : "s"}` : null
  ].filter(Boolean);
  const scrubbed = [
    "PAN, folio, CAS, bank, UPI, card, demat, mandate, and account credentials",
    "Phone, email, address, nominee, family identity, client identifiers, ARN, and EUIN",
    "Private note bodies from alerts, journal, receipt, review, dossier, and correction surfaces",
    "Execution instructions, personalized advice, tax advice, approval language, and return guarantees"
  ];
  const score = clampNumber(Math.round(
    privacy.privacyScore * 0.42 +
    memory.memoryScore * 0.24 +
    evidence * 0.22 +
    depth.scoreBonus +
    history.scoreBonus +
    scrub.scoreBonus -
    Math.min(privacy.freeTextStores.length * 5, 18) -
    (attention.length > 3 ? 6 : 0)
  ), 35, 98);
  return {
    input,
    audience,
    depth,
    history,
    scrub,
    fund,
    compareFunds,
    memory,
    privacy,
    evidence,
    freeTextLabels,
    included,
    scrubbed,
    attention,
    score,
    posture: shareSafePosture(score, attention.length),
    tone: shareSafeTone(score)
  };
}

function renderShareSafeExportRoom(event) {
  if (event) event.preventDefault();
  if (!els.shareSafeOutput || !els.shareSafeSummary) return;
  const config = shareSafeConfig();
  els.shareSafeSummary.textContent = `${config.score}/100 | ${config.audience.label}`;

  els.shareSafeOutput.innerHTML = `
    <div class="share-safe-hero ${escapeHtml(config.tone)}">
      <div>
        <span class="metric-label">Share-safe posture</span>
        <h3>${escapeHtml(config.posture)}</h3>
        <p>${escapeHtml(config.audience.purpose)} ${escapeHtml(config.scrub.detail)}</p>
      </div>
      <div class="share-safe-score" style="--score:${config.score}">
        <b>${config.score}</b>
        <span>Share</span>
      </div>
    </div>
    <div class="share-safe-metric-grid">
      <article><span>Audience</span><strong>${escapeHtml(config.audience.label)}</strong></article>
      <article><span>Depth</span><strong>${escapeHtml(config.depth.label)}</strong></article>
      <article><span>Funds</span><strong>${1 + config.compareFunds.length}</strong></article>
      <article><span>Artifacts</span><strong>${config.memory.artifactCount}</strong></article>
      <article><span>Privacy</span><strong>${config.privacy.privacyScore}/100</strong></article>
      <article><span>Evidence</span><strong>${config.evidence}/100</strong></article>
    </div>
    <div class="share-safe-card-grid">
      <article class="share-safe-card">
        <h3>Included in clean pack</h3>
        <ul class="share-safe-list">
          ${config.included.map((item) => `<li>${escapeHtml(item)}</li>`).join("")}
        </ul>
      </article>
      <article class="share-safe-card scrubbed">
        <h3>Scrubbed out</h3>
        <ul class="share-safe-list">
          ${config.scrubbed.map((item) => `<li>${escapeHtml(item)}</li>`).join("")}
        </ul>
      </article>
      <article class="share-safe-card">
        <h3>Attention before sharing</h3>
        <ul class="share-safe-list">
          ${(config.attention.length ? config.attention : ["No immediate share-safety attention item for this pack."]).map((item) => `<li>${escapeHtml(item)}</li>`).join("")}
        </ul>
      </article>
    </div>
    <div class="share-safe-preview">
      <div>
        <span class="metric-label">Pack anchor</span>
        <h3>${escapeHtml(config.fund.name)}</h3>
        <p>${escapeHtml(config.fund.category)} | ${escapeHtml(config.fund.risk)} risk | Nadi score ${nadiScore(config.fund)}/100 | Expense ${config.fund.expense.toFixed(2)}%</p>
      </div>
      <div>
        <span class="metric-label">Boundary</span>
        <p>${escapeHtml(config.audience.boundary)} This pack remains research support only and does not approve, recommend, or execute any mutual fund transaction.</p>
      </div>
    </div>
  `;
}

function makeShareSafePack() {
  const config = shareSafeConfig();
  const compareLines = config.compareFunds.length
    ? config.compareFunds.map((fund) => `- ${fund.name} | ${fund.category} | ${fund.risk} risk | Score ${nadiScore(fund)}/100 | Expense ${fund.expense.toFixed(2)}%`)
    : ["- No compare set selected"];
  const timelineLines = config.input.history === "timeline"
    ? (config.memory.timeline.length ? config.memory.timeline.slice(0, 8).map((entry) => `- ${researchMemoryDate(entry.createdAt)} | ${entry.type} | ${entry.title} | ${entry.meta}`) : ["- No local memory timeline yet."])
    : [`- ${config.history.detail}`];
  return [
    "# NiveshNadi Share-Safe Export Pack",
    `Release: ${RELEASE_LABEL} (${DATA_VERSION})`,
    `Share posture: ${config.posture}`,
    `Share-safe score: ${config.score}/100`,
    `Audience: ${config.audience.label}`,
    `Pack depth: ${config.depth.label}`,
    `Scrub strictness: ${config.scrub.label}`,
    "",
    "## Fund Anchor",
    `- ${config.fund.name}`,
    `- Category: ${config.fund.category}`,
    `- Risk: ${config.fund.risk}`,
    `- Nadi score: ${nadiScore(config.fund)}/100`,
    `- Expense: ${config.fund.expense.toFixed(2)}%`,
    `- Evidence readiness: ${config.evidence}/100`,
    `- Role: ${config.fund.role}`,
    "",
    "## Compare Set",
    ...compareLines,
    "",
    "## Included",
    ...config.included.map((item) => `- ${item}`),
    "",
    "## Local Research Summary",
    `- Research Memory score: ${config.memory.memoryScore}/100`,
    `- Saved artifacts: ${config.memory.artifactCount}`,
    `- Timeline events: ${config.memory.timeline.length}`,
    `- Active local stores: ${config.privacy.activeStores.length}`,
    `- Free-text buckets flagged: ${config.privacy.freeTextStores.length}`,
    ...timelineLines,
    "",
    "## Scrubbed Out",
    ...config.scrubbed.map((item) => `- ${item}`),
    "",
    "## Attention Before Sharing",
    ...(config.attention.length ? config.attention.map((item) => `- ${item}`) : ["- No immediate share-safety attention item for this pack."]),
    "",
    "## Boundary",
    config.audience.boundary,
    "This is a clean research pack, not personalized investment advice, tax advice, execution approval, distributor service, or a return guarantee."
  ].join("\n");
}

const CONSENT_AUDIENCES = {
  self: {
    label: "Self only",
    purpose: "Keep the handoff inside the investor's own research workspace.",
    scoreBonus: 8
  },
  family: {
    label: "Family reviewer",
    purpose: "Share clean research context for discussion without exposing account or identity data.",
    scoreBonus: 4
  },
  advisor: {
    label: "Advisor discussion",
    purpose: "Give a professional reviewer the research trail, assumptions, gaps, and source checks to challenge.",
    scoreBonus: 1
  },
  distributor: {
    label: "Future distributor",
    purpose: "Prototype a Phase 2 handoff boundary before any ARN/EUIN, PAN, consent, or client-record workflow exists.",
    scoreBonus: -4
  }
};

const CONSENT_SCOPES = {
  research: {
    label: "Research pack only",
    allowed: ["Selected fund snapshot", "Compare-set names", "Evidence readiness", "Share-safe boundary"],
    scoreBonus: 9
  },
  review: {
    label: "Research plus review checklist",
    allowed: ["Selected fund snapshot", "Compare-set names", "Review checklist", "Next-check date"],
    scoreBonus: 5
  },
  watch: {
    label: "Research plus watch triggers",
    allowed: ["Selected fund snapshot", "Compare-set names", "Watch trigger metadata", "Review cadence"],
    scoreBonus: 1
  },
  phase2: {
    label: "Phase 2 handoff readiness",
    allowed: ["Selected fund snapshot", "Compare-set names", "Consent intent", "Future role boundary"],
    scoreBonus: -3
  }
};

const CONSENT_DURATIONS = {
  "one-time": {
    label: "One-time discussion",
    detail: "Use once for a specific research conversation, then refresh the pack before reuse.",
    scoreBonus: 8
  },
  "30-days": {
    label: "30-day review window",
    detail: "Suitable for a short research loop if source dates and review triggers remain current.",
    scoreBonus: 4
  },
  "90-days": {
    label: "90-day review window",
    detail: "Needs stronger source-date and stale-data discipline before relying on the pack.",
    scoreBonus: 0
  },
  revoke: {
    label: "Until revoked in writing",
    detail: "Too broad for Phase 1 unless formal consent, audit trail, and deletion controls exist.",
    scoreBonus: -6
  }
};

const CONSENT_CHANNELS = {
  offline: {
    label: "Offline conversation",
    detail: "Lowest technical risk; no digital transfer is created by the product.",
    scoreBonus: 8
  },
  copy: {
    label: "Copied text pack",
    detail: "Keep the pack share-safe and avoid pasting private notes or account identifiers.",
    scoreBonus: 3
  },
  secure: {
    label: "Secure portal later",
    detail: "Requires login, encryption, access controls, retention, and deletion policy before launch.",
    scoreBonus: -2
  },
  api: {
    label: "Future API handoff",
    detail: "Requires consent records, authentication, authorization, audit logs, and data minimization.",
    scoreBonus: -8
  }
};

const CONSENT_BLOCKED_ITEMS = [
  "PAN, folio, CAS, demat, bank, UPI, card, mandate, and credential data",
  "Phone, email, address, nominee, family identity, client identifiers, ARN, and EUIN",
  "Private note bodies, uploaded documents, account statements, and contact records",
  "Transaction instructions, personalized advice, suitability approval, tax advice, and return guarantees"
];

function readConsentGateConfig() {
  return {
    audience: els.consentAudience?.value || "self",
    scope: els.consentScope?.value || "research",
    duration: els.consentDuration?.value || "one-time",
    channel: els.consentChannel?.value || "offline"
  };
}

function consentGateTone(score) {
  if (score >= 82) return "ready";
  if (score >= 64) return "watch";
  return "caution";
}

function consentGatePosture(score) {
  if (score >= 82) return "Consent boundary clean";
  if (score >= 64) return "Review consent before sharing";
  return "Consent design not ready";
}

function consentGateConfig() {
  const input = readConsentGateConfig();
  const audience = CONSENT_AUDIENCES[input.audience] || CONSENT_AUDIENCES.self;
  const scope = CONSENT_SCOPES[input.scope] || CONSENT_SCOPES.research;
  const duration = CONSENT_DURATIONS[input.duration] || CONSENT_DURATIONS["one-time"];
  const channel = CONSENT_CHANNELS[input.channel] || CONSENT_CHANNELS.offline;
  const fund = selectedFund();
  const share = shareSafeConfig();
  const privacy = privacyControlConfig();
  const memory = researchMemoryConfig();
  const evidence = evidenceReadinessScore(fund);
  const gaps = [
    share.score >= 78 ? null : "Refresh Share-Safe Export before external handoff.",
    privacy.freeTextStores.length ? "Review or clear free-text local buckets before sharing a device or copied pack." : null,
    evidence >= 76 ? null : "Evidence readiness needs source-date review before relying on the handoff.",
    input.audience === "distributor" ? "Real distributor workflow needs explicit consent, ARN/EUIN design, PAN handling rules, and role-based access before launch." : null,
    input.scope === "phase2" ? "Phase 2 scope is conceptual; do not collect client records in this static prototype." : null,
    input.channel === "secure" || input.channel === "api" ? "Digital handoff channel needs authentication, encryption, audit logs, retention, and deletion policy." : null,
    input.duration === "revoke" ? "Open-ended duration is not ready without formal consent history and revoke controls." : null
  ].filter(Boolean);
  const score = clampNumber(Math.round(
    share.score * 0.32 +
    privacy.privacyScore * 0.26 +
    memory.memoryScore * 0.16 +
    evidence * 0.14 +
    audience.scoreBonus +
    scope.scoreBonus +
    duration.scoreBonus +
    channel.scoreBonus -
    Math.min(gaps.length * 5, 25)
  ), 30, 98);
  const consentLine = `${audience.label} can receive ${scope.label.toLowerCase()} for ${duration.label.toLowerCase()} through ${channel.label.toLowerCase()}.`;
  return {
    input,
    audience,
    scope,
    duration,
    channel,
    fund,
    share,
    privacy,
    memory,
    evidence,
    gaps,
    score,
    posture: consentGatePosture(score),
    tone: consentGateTone(score),
    allowed: scope.allowed,
    blocked: CONSENT_BLOCKED_ITEMS,
    consentLine
  };
}

function renderConsentHandoffGate(event) {
  if (event) event.preventDefault();
  if (!els.consentGateOutput || !els.consentGateSummary) return;
  const config = consentGateConfig();
  els.consentGateSummary.textContent = `${config.score}/100 | ${config.audience.label}`;

  els.consentGateOutput.innerHTML = `
    <div class="consent-gate-hero ${escapeHtml(config.tone)}">
      <div>
        <span class="metric-label">Consent readiness</span>
        <h3>${escapeHtml(config.posture)}</h3>
        <p>${escapeHtml(config.consentLine)} ${escapeHtml(config.channel.detail)}</p>
      </div>
      <div class="consent-gate-score" style="--score:${config.score}">
        <b>${config.score}</b>
        <span>Consent</span>
      </div>
    </div>
    <div class="consent-gate-metric-grid">
      <article><span>Recipient</span><strong>${escapeHtml(config.audience.label)}</strong></article>
      <article><span>Scope</span><strong>${escapeHtml(config.scope.label)}</strong></article>
      <article><span>Duration</span><strong>${escapeHtml(config.duration.label)}</strong></article>
      <article><span>Channel</span><strong>${escapeHtml(config.channel.label)}</strong></article>
      <article><span>Share safe</span><strong>${config.share.score}/100</strong></article>
      <article><span>Privacy</span><strong>${config.privacy.privacyScore}/100</strong></article>
    </div>
    <div class="consent-gate-card-grid">
      <article class="consent-gate-card">
        <h3>Allowed for handoff</h3>
        <ul class="consent-gate-list">
          ${config.allowed.map((item) => `<li>${escapeHtml(item)}</li>`).join("")}
        </ul>
      </article>
      <article class="consent-gate-card blocked">
        <h3>Blocked from handoff</h3>
        <ul class="consent-gate-list">
          ${config.blocked.map((item) => `<li>${escapeHtml(item)}</li>`).join("")}
        </ul>
      </article>
      <article class="consent-gate-card">
        <h3>Before handoff</h3>
        <ul class="consent-gate-list">
          ${(config.gaps.length ? config.gaps : ["Consent boundary is clean for this prototype context."]).map((item) => `<li>${escapeHtml(item)}</li>`).join("")}
        </ul>
      </article>
    </div>
    <div class="consent-gate-preview">
      <div>
        <span class="metric-label">Consent line</span>
        <h3>${escapeHtml(config.fund.name)}</h3>
        <p>${escapeHtml(config.consentLine)}</p>
      </div>
      <div>
        <span class="metric-label">Revocation discipline</span>
        <p>${escapeHtml(config.duration.detail)} Consent Gate is a readiness preview only; Phase 1 does not store consent records or transmit research packs.</p>
      </div>
    </div>
  `;
}

function makeConsentHandoffBrief() {
  const config = consentGateConfig();
  return [
    "# NiveshNadi Consent Handoff Gate",
    `Release: ${RELEASE_LABEL} (${DATA_VERSION})`,
    `Consent posture: ${config.posture}`,
    `Consent readiness score: ${config.score}/100`,
    `Selected fund: ${config.fund.name}`,
    `Recipient: ${config.audience.label}`,
    `Scope: ${config.scope.label}`,
    `Duration: ${config.duration.label}`,
    `Channel: ${config.channel.label}`,
    "",
    "## Consent Line",
    config.consentLine,
    "",
    "## Allowed For Handoff",
    ...config.allowed.map((item) => `- ${item}`),
    "",
    "## Blocked From Handoff",
    ...config.blocked.map((item) => `- ${item}`),
    "",
    "## Before Handoff",
    ...(config.gaps.length ? config.gaps.map((item) => `- ${item}`) : ["- Consent boundary is clean for this prototype context."]),
    "",
    "## Guardrail",
    "Phase 1 does not store consent records, transmit data, collect PAN/folio/CAS/contact/client data, create distributor records, approve transactions, or provide personalized advice. Real Phase 2 handoff requires explicit consent, data minimization, role-based access, audit logging, retention policy, deletion workflow, and regulatory review."
  ].join("\n");
}

function docQuestionLabel(value) {
  const labels = {
    role: "What does this fund do?",
    risk: "What can go wrong?",
    cost: "What will it cost?",
    evidence: "Is the evidence fresh?",
    review: "When should I re-check?"
  };
  return labels[value] || labels.role;
}

function docDepthLabel(value) {
  if (value === "quick") return "Quick scan";
  if (value === "deep") return "Deep review";
  return "Standard";
}

function docDecoderTone(score) {
  if (score >= 78) return "strong";
  if (score >= 62) return "watch";
  return "caution";
}

function docDecoderPosture(score) {
  if (score >= 78) return "Readable with evidence";
  if (score >= 62) return "Needs citation check";
  return "Document gaps remain";
}

function docQuestionAnswer(question, fund, guide, pipeline) {
  if (question === "risk") {
    return `${fund.name} carries ${fund.risk} risk with ${fund.maxDrawdown}% demo drawdown. Read the riskometer, asset allocation range, debt quality or equity concentration, and risk-factor clauses before using it in any decision memo.`;
  }
  if (question === "cost") {
    return `${fund.name} shows ${fund.expense.toFixed(2)}% demo TER and ${formatMoney(fund.minSip)} minimum SIP. The live KIM/SID must confirm plan class, TER date, exit-load language, and expense-change history.`;
  }
  if (question === "evidence") {
    return `${guide.title} depends on ${pipeline.title}. Current demo readiness is ${pipeline.readiness}/100, so live launch still needs source date, citation path, and extraction confidence.`;
  }
  if (question === "review") {
    return `Use this document lens as a review checkpoint when ${fund.name} changes riskometer, TER, manager, holdings style, benchmark, AUM/capacity, or stated investment objective.`;
  }
  return `${fund.name} is being decoded as a ${fund.category} research candidate. Start with objective, role, benchmark, asset allocation, risk factors, cost, and evidence freshness before comparing peers.`;
}

function docDepthTasks(depth, guide) {
  if (depth === "quick") {
    return [
      `Read ${guide.mustRead.slice(0, 3).join(", ")}.`,
      "Confirm document date and source link.",
      "Write one plain-English reason before adding the fund to a shortlist."
    ];
  }
  if (depth === "deep") {
    return [
      `Read all ${guide.source} clauses in the must-read list.`,
      "Compare the stated objective with holdings, benchmark, cost, riskometer, and portfolio disclosure.",
      "Check addendum or change history before treating old document language as current.",
      "Write what would change the research view in Watchlist or Review Rhythm."
    ];
  }
  return [
    `Review ${guide.mustRead.slice(0, 4).join(", ")}.`,
    "Check whether the factsheet, portfolio file, and evidence ledger agree.",
    "Capture one risk clause, one cost clause, and one review trigger."
  ];
}

function docDecoderConfig() {
  const fund = selectedFund();
  const focus = els.docFocus?.value || "kim";
  const question = els.docQuestion?.value || "role";
  const depth = els.docDepth?.value || "standard";
  const guide = DOC_DECODER_GUIDES[focus] || DOC_DECODER_GUIDES.kim;
  const pipeline = DATA_PIPELINES.find((item) => item.id === guide.pipelineId) || DATA_PIPELINES[2];
  const evidence = evidenceReadinessScore(fund);
  const score = Math.round(clampNumber(
    guide.readiness * 0.34 +
      pipeline.readiness * 0.26 +
      evidence * 0.18 +
      fund.researchCoverage * 0.12 +
      nadiScore(fund) * 0.1,
    35,
    94
  ));
  const clauses = [
    {
      title: "Objective and role",
      value: fund.category,
      detail: fund.role,
      read: "Check that the objective, asset allocation, and benchmark match the role you expect."
    },
    {
      title: "Riskometer and risk factors",
      value: fund.risk,
      detail: `Demo max drawdown ${fund.maxDrawdown}% and consistency ${fund.consistency}/100.`,
      read: "Riskometer is a starting point. Read the fund-specific risk text and portfolio concentration."
    },
    {
      title: "Cost and access",
      value: `${fund.expense.toFixed(2)}% TER`,
      detail: `Minimum SIP ${formatMoney(fund.minSip)}. Exit-load text must come from the live document.`,
      read: "Do not treat demo cost as final until plan class, TER date, and load clause are cited."
    },
    {
      title: "Portfolio evidence",
      value: `${fund.holdings.length} holdings`,
      detail: fund.holdings.slice(0, 4).join(", "),
      read: "Match holdings date with portfolio disclosure before using overlap or concentration claims."
    },
    {
      title: "Benchmark check",
      value: fund.benchmark,
      detail: `${fund.returns5y.toFixed(1)}% 5Y demo return versus category research context.`,
      read: "Confirm TRI/non-TRI method and benchmark source before making relative-return claims."
    },
    {
      title: "Review trigger",
      value: docDepthLabel(depth),
      detail: docQuestionAnswer(question, fund, guide, pipeline),
      read: "Turn the document question into a Watchlist or Review Rhythm reminder before acting."
    }
  ];
  const doNotInfer = [
    "A document clause is not a personalized recommendation.",
    "Past return tables do not create a future return expectation.",
    "Riskometer does not replace drawdown, horizon, or behavior review.",
    "Category label does not prove the fund fits a specific investor.",
    "Tax, exit-load, and suitability text need separate professional or regulatory review before execution."
  ];

  return {
    clauses,
    depth,
    doNotInfer,
    evidence,
    focus,
    fund,
    guide,
    pipeline,
    posture: docDecoderPosture(score),
    question,
    score,
    tasks: docDepthTasks(depth, guide),
    tone: docDecoderTone(score)
  };
}

function renderDocDecoder(event) {
  if (event) event.preventDefault();
  if (!els.docOutput) return;
  const config = docDecoderConfig();
  els.docSummary.textContent = `${config.score}/100 doc clarity`;

  els.docOutput.innerHTML = `
    <div class="doc-hero ${escapeHtml(config.tone)}">
      <div>
        <span class="metric-label">${escapeHtml(config.posture)}</span>
        <h3>${escapeHtml(config.guide.title)} for ${escapeHtml(config.fund.name)}</h3>
        <p>${escapeHtml(config.guide.purpose)}</p>
      </div>
      <div class="doc-score" style="--score:${config.score}">
        <b>${config.score}</b>
        <span>Doc</span>
      </div>
    </div>
    <div class="doc-question">
      <span class="metric-label">${escapeHtml(docQuestionLabel(config.question))}</span>
      <p>${escapeHtml(docQuestionAnswer(config.question, config.fund, config.guide, config.pipeline))}</p>
    </div>
    <div class="doc-clause-grid">
      ${config.clauses.map((clause) => `
        <article class="doc-clause">
          <span>${escapeHtml(clause.title)}</span>
          <strong>${escapeHtml(clause.value)}</strong>
          <p>${escapeHtml(clause.detail)}</p>
          <small>${escapeHtml(clause.read)}</small>
        </article>
      `).join("")}
    </div>
    <div class="doc-card-grid">
      <article class="doc-card">
        <h3>Reading checklist</h3>
        <ul class="doc-list">
          ${config.tasks.map((task) => `<li>${escapeHtml(task)}</li>`).join("")}
        </ul>
      </article>
      <article class="doc-card">
        <h3>Must-read clauses</h3>
        <div class="field-chip-list">
          ${config.guide.mustRead.map((item) => `<span>${escapeHtml(item)}</span>`).join("")}
        </div>
      </article>
      <article class="doc-card">
        <h3>Do not infer</h3>
        <ul class="doc-list">
          ${config.doNotInfer.slice(0, config.depth === "quick" ? 3 : 5).map((item) => `<li>${escapeHtml(item)}</li>`).join("")}
        </ul>
      </article>
    </div>
    <div class="doc-guardrail">
      <strong>Document rule</strong>
      <p>${escapeHtml(config.guide.launchGate)} Nadi Doc Decoder is research support only and should not convert document language into personalized transaction advice.</p>
    </div>
  `;
}

function makeDocDecoderNote() {
  const config = docDecoderConfig();
  return [
    `# NiveshNadi Doc Decoder - ${config.fund.name}`,
    "",
    `Release: ${RELEASE_LABEL} (${DATA_VERSION})`,
    `Document lens: ${config.guide.title}`,
    `Source type: ${config.guide.source}`,
    `Question: ${docQuestionLabel(config.question)}`,
    `Depth: ${docDepthLabel(config.depth)}`,
    `Doc clarity: ${config.score}/100`,
    `Posture: ${config.posture}`,
    "",
    "## Plain-English Answer",
    docQuestionAnswer(config.question, config.fund, config.guide, config.pipeline),
    "",
    "## Clauses to Check",
    ...config.clauses.map((clause) => [
      `- ${clause.title}: ${clause.value}`,
      `  Meaning: ${clause.detail}`,
      `  Read: ${clause.read}`
    ].join("\n")),
    "",
    "## Reading Checklist",
    ...config.tasks.map((task) => `- ${task}`),
    "",
    "## Do Not Infer",
    ...config.doNotInfer.map((item) => `- ${item}`),
    "",
    "## Guardrail",
    "Research support only. Confirm latest SID, KIM, factsheet, portfolio disclosure, riskometer, TER, source date, and citation path before treating any claim as current."
  ].join("\n");
}

function glossaryFocusLabel(focus) {
  return {
    all: "All terms",
    cashflow: "SIP/STP and cash flow",
    risk: "Risk words",
    cost: "Cost words",
    "fund-data": "Fund data words",
    passive: "Passive fund words"
  }[focus] || "All terms";
}

function glossaryLevelLabel(level) {
  return {
    beginner: "Beginner",
    confident: "Confident investor",
    "memo-ready": "Memo ready"
  }[level] || "Beginner";
}

function glossaryTermContext(term, fund) {
  const score = nadiScore(fund);
  const evidence = evidenceReadinessScore(fund);
  const map = {
    sip: `${fund.name} has minimum SIP ${formatMoney(fund.minSip)} and ${fund.risk} risk, so SIP amount should match horizon and behavior comfort.`,
    stp: fund.sleeve === "Debt"
      ? `${fund.name} can be studied as a potential parking or source bucket, but credit and duration risk still matter.`
      : `${fund.name} is a ${fund.sleeve} target candidate; STP research should also inspect the source debt or liquid fund.`,
    nav: `For ${fund.name}, the useful checks are score ${score}/100, TER ${fund.expense.toFixed(2)}%, drawdown ${fund.maxDrawdown}%, and evidence ${evidence}/100, not NAV level alone.`,
    ter: `${fund.name} shows demo TER ${fund.expense.toFixed(2)}%. Use Cost Reality Lab before assuming the cost is acceptable.`,
    drawdown: `${fund.name} has demo max drawdown ${fund.maxDrawdown}%. Convert that into rupee pain in Stress Lab before increasing allocation.`,
    riskometer: `${fund.name} is tagged ${fund.risk} risk. Treat this as a warning label and then check drawdown, horizon, and role.`,
    benchmark: `${fund.name} uses ${fund.benchmark}. Benchmark method and source must be verified before live return claims.`,
    "exit-load": `Exit load for ${fund.name} must come from the latest KIM/SID, not from demo fields.`,
    "direct-regular": `Compare ${fund.name} only against the same plan class. Direct and regular plan TER and returns should not be mixed.`,
    aum: `${fund.name} has demo AUM ${formatCr(fund.aum)}. Interpret scale by category and strategy.`,
    idcw: `If considering IDCW for ${fund.name}, first decide whether payout or compounding is the real goal.`,
    "tracking-error": fund.sleeve === "Passive"
      ? `${fund.name} is passive, so tracking quality, TER, AUM, and benchmark source are core checks.`
      : `${fund.name} is not passive, but benchmark discipline still matters for return comparison.`
  };
  return map[term.id] || `Use this term to convert ${fund.name} research into a clear check before writing a memo.`;
}

function glossaryConfig() {
  const fund = selectedFund();
  const focus = els.glossaryFocus?.value || "all";
  const level = els.glossaryLevel?.value || "beginner";
  const query = (els.glossarySearch?.value || "").trim().toLowerCase();
  const terms = GLOSSARY_TERMS.filter((term) => {
    const text = [term.term, term.bucket, term.plain, term.why, term.check, term.example].join(" ").toLowerCase();
    return (focus === "all" || term.bucket === focus) && (!query || text.includes(query));
  });
  const spotlight = terms[0] || GLOSSARY_TERMS.find((term) => term.id === "sip");
  const score = Math.round(clampNumber(
    fund.researchCoverage * 0.26 +
      evidenceReadinessScore(fund) * 0.24 +
      nadiScore(fund) * 0.18 +
      (100 - Math.min(fund.maxDrawdown * 2, 100)) * 0.16 +
      (100 - Math.min(fund.expense * 75, 100)) * 0.16,
    40,
    94
  ));
  const modeCopy = {
    beginner: "Plain English first. Learn the word, then ask one practical research question.",
    confident: "Connect each term to score, cost, risk, evidence, and compare-set discipline.",
    "memo-ready": "Turn every term into a written memo check before acting."
  }[level];

  return {
    focus,
    fund,
    level,
    modeCopy,
    query,
    score,
    spotlight,
    terms
  };
}

function renderGlossary(event) {
  if (event) event.preventDefault();
  if (!els.glossaryOutput) return;
  const config = glossaryConfig();
  if (els.glossarySummary) {
    els.glossarySummary.textContent = `${config.terms.length} of ${GLOSSARY_TERMS.length} terms`;
  }
  const terms = config.terms.length ? config.terms : [];

  els.glossaryOutput.innerHTML = `
    <div class="glossary-hero">
      <div>
        <span class="metric-label">${escapeHtml(glossaryLevelLabel(config.level))}</span>
        <h3>Retail glossary for ${escapeHtml(config.fund.name)}</h3>
        <p>${escapeHtml(config.modeCopy)} ${escapeHtml(glossaryFocusLabel(config.focus))} are shown below.</p>
      </div>
      <div class="glossary-score" style="--score:${config.score}">
        <b>${config.score}</b>
        <span>Clear</span>
      </div>
    </div>
    <div class="glossary-spotlight">
      <span>Selected-fund translation</span>
      <strong>${escapeHtml(config.spotlight.term)}</strong>
      <p>${escapeHtml(glossaryTermContext(config.spotlight, config.fund))}</p>
    </div>
    ${terms.length ? `
      <div class="glossary-term-grid">
        ${terms.map((term) => `
          <article class="glossary-term-card">
            <div>
              <span>${escapeHtml(glossaryFocusLabel(term.bucket))}</span>
              <strong>${escapeHtml(term.term)}</strong>
            </div>
            <p>${escapeHtml(term.plain)}</p>
            <small>${escapeHtml(term.why)}</small>
            <div class="glossary-check">
              <b>Research check</b>
              <p>${escapeHtml(term.check)}</p>
            </div>
            <div class="glossary-example">${escapeHtml(term.example)}</div>
          </article>
        `).join("")}
      </div>
    ` : `
      <div class="empty-state">No glossary terms match this search. Try SIP, TER, risk, cost, benchmark, or drawdown.</div>
    `}
    <div class="glossary-guardrail">
      <strong>Plain-English rule</strong>
      <p>Definitions help the investor ask better questions. They do not convert research into personalized advice, execution, tax advice, or a return promise.</p>
    </div>
  `;
}

function makeGlossaryNote() {
  const config = glossaryConfig();
  const terms = config.terms.length ? config.terms : GLOSSARY_TERMS.slice(0, 5);
  return [
    `# NiveshNadi Retail Glossary - ${config.fund.name}`,
    "",
    `Release: ${RELEASE_LABEL} (${DATA_VERSION})`,
    `Mode: ${glossaryLevelLabel(config.level)}`,
    `Focus: ${glossaryFocusLabel(config.focus)}`,
    `Terms shown: ${config.terms.length} of ${GLOSSARY_TERMS.length}`,
    `Selected-fund translation: ${glossaryTermContext(config.spotlight, config.fund)}`,
    "",
    "## Terms",
    ...terms.map((term) => [
      `- ${term.term}: ${term.plain}`,
      `  Why it matters: ${term.why}`,
      `  Research check: ${term.check}`,
      `  Example: ${term.example}`
    ].join("\n")),
    "",
    "Research support only. Definitions are educational and do not provide personalized investment advice, transaction instructions, tax advice, or return guarantees."
  ].join("\n");
}

function behaviorActionLabel(action) {
  return {
    "start-sip": "Start SIP",
    "increase-sip": "Increase SIP",
    "pause-sip": "Pause SIP",
    switch: "Switch fund",
    redeem: "Redeem",
    "add-lumpsum": "Add lump sum",
    watch: "Watch only"
  }[action] || "Watch only";
}

function behaviorMoodLabel(mood) {
  return {
    calm: "Calm",
    excited: "Excited",
    anxious: "Anxious",
    frustrated: "Frustrated"
  }[mood] || "Calm";
}

function behaviorWaitLabel(wait) {
  return {
    "24h": "24-hour pause",
    "7d": "7-day cooling period",
    review: "Next review date"
  }[wait] || "24-hour pause";
}

function behaviorGuardConfig() {
  const fund = selectedFund();
  const triggerKey = els.behaviorTrigger?.value || "market-fall";
  const action = els.behaviorAction?.value || "watch";
  const mood = els.behaviorMood?.value || "calm";
  const wait = els.behaviorWait?.value || "24h";
  const amount = clampNumber(Number(els.behaviorAmount?.value || 10000), 0, 100000000);
  const trigger = BEHAVIOR_TRIGGERS[triggerKey] || BEHAVIOR_TRIGGERS["market-fall"];
  const evidence = evidenceReadinessScore(fund);
  const score = nadiScore(fund);
  const compareCount = compareSet().length;
  const alerts = loadAlerts().filter((alert) => alert.fundId === fund.id).length;
  const riskPressure = fund.maxDrawdown >= 22 || fund.risk === "Very High";
  const actionPressure = ["switch", "redeem", "increase-sip", "add-lumpsum"].includes(action);
  const emotionPressure = ["excited", "anxious", "frustrated"].includes(mood);
  const evidencePressure = evidence < 75;
  const comparePressure = compareCount < 2 && action !== "watch";
  const pressureCount = [riskPressure, actionPressure, emotionPressure, evidencePressure, comparePressure].filter(Boolean).length;
  const guardScore = Math.round(clampNumber(100 - pressureCount * 13 - (amount >= 100000 ? 7 : 0) + (alerts ? 4 : 0), 22, 92));

  let posture = "Proceed only with memo";
  let tone = "watch";
  if (guardScore < 55) {
    posture = "Pause before action";
    tone = "caution";
  } else if (guardScore >= 76 && action === "watch") {
    posture = "Watch discipline";
    tone = "calm";
  } else if (guardScore >= 76) {
    posture = "Research can continue";
    tone = "steady";
  }

  const checks = [
    {
      title: "Bias check",
      value: trigger.bias,
      detail: `${trigger.label} can create ${trigger.bias}. ${trigger.wait}`
    },
    {
      title: "Fund pressure",
      value: `${fund.risk} risk`,
      detail: `${fund.name} has ${fund.maxDrawdown}% demo drawdown, ${score}/100 Nadi score, and ${evidence}/100 evidence readiness.`
    },
    {
      title: "Action friction",
      value: behaviorActionLabel(action),
      detail: `Amount context ${formatMoney(amount)}. Check cost, tax, exit load, overlap, and written reason before any real-world action.`
    },
    {
      title: "Decision rule",
      value: behaviorWaitLabel(wait),
      detail: action === "watch"
        ? "Watching is an acceptable research outcome when the thesis is not complete."
        : "Do not act from emotion alone; convert the impulse into evidence, stress, cost, and memo checks."
    }
  ];

  const routes = [
    { label: "Stress", route: "#risk-lab" },
    { label: "Cost", route: "#cost-lab" },
    { label: "Switch", route: "#switch-lab" },
    { label: "Memo", route: "#decision-pack" }
  ];

  return {
    action,
    alerts,
    amount,
    checks,
    compareCount,
    evidence,
    fund,
    guardScore,
    mood,
    posture,
    routes,
    tone,
    trigger,
    triggerKey,
    wait
  };
}

function renderBehaviorGuard(event) {
  if (event) event.preventDefault();
  if (!els.behaviorOutput) return;
  const config = behaviorGuardConfig();
  if (els.behaviorSummary) {
    els.behaviorSummary.textContent = `${config.guardScore}/100 discipline`;
  }
  els.behaviorOutput.innerHTML = `
    <div class="behavior-hero ${escapeHtml(config.tone)}">
      <div>
        <span class="metric-label">${escapeHtml(config.trigger.label)}</span>
        <h3>${escapeHtml(config.posture)}</h3>
        <p>${escapeHtml(config.trigger.firstCheck)} This is a research brake, not an instruction to transact.</p>
      </div>
      <div class="behavior-score" style="--score:${config.guardScore}">
        <b>${config.guardScore}</b>
        <span>Guard</span>
      </div>
    </div>
    <div class="behavior-grid">
      ${config.checks.map((check) => `
        <article class="behavior-card">
          <span>${escapeHtml(check.title)}</span>
          <strong>${escapeHtml(check.value)}</strong>
          <p>${escapeHtml(check.detail)}</p>
        </article>
      `).join("")}
    </div>
    <div class="behavior-route-card">
      <div>
        <span>Route before action</span>
        <strong>${escapeHtml(config.trigger.firstCheck)}</strong>
        <p>Compare set ${config.compareCount} | saved alerts ${config.alerts} | mood ${escapeHtml(behaviorMoodLabel(config.mood))}</p>
      </div>
      <div class="behavior-route-actions">
        ${config.routes.map((item) => `
          <button class="signal-chip" type="button" data-behavior-route="${escapeHtml(item.route)}">${escapeHtml(item.label)}</button>
        `).join("")}
      </div>
    </div>
    <div class="behavior-guardrail">
      <strong>Impulse rule</strong>
      <p>If the reason cannot be written calmly, the app should route the investor to watch, review, or memo discipline. It should not push a transaction.</p>
    </div>
  `;
}

function makeBehaviorGuardNote() {
  const config = behaviorGuardConfig();
  return [
    `# NiveshNadi Behavior Guard - ${config.fund.name}`,
    "",
    `Release: ${RELEASE_LABEL} (${DATA_VERSION})`,
    `Trigger: ${config.trigger.label}`,
    `Bias check: ${config.trigger.bias}`,
    `Mood: ${behaviorMoodLabel(config.mood)}`,
    `Intended action: ${behaviorActionLabel(config.action)}`,
    `Amount context: ${formatMoney(config.amount)}`,
    `Guard score: ${config.guardScore}/100`,
    `Posture: ${config.posture}`,
    `Wait rule: ${behaviorWaitLabel(config.wait)}`,
    "",
    "## Required Checks",
    ...config.checks.map((check) => `- ${check.title}: ${check.value} - ${check.detail}`),
    "",
    "## Research Boundary",
    "This note is a behavior brake and research checklist. It is not investment advice, redemption advice, switch advice, tax advice, execution, or a return guarantee."
  ].join("\n");
}

function claimSourceLabel(source) {
  return {
    social: "Social media",
    friend: "Friend or family",
    ad: "Advertisement",
    distributor: "Distributor conversation",
    article: "Article or blog",
    self: "Own thought"
  }[source] || "Own thought";
}

function claimIntentLabel(intent) {
  return {
    shortlist: "Shortlist fund",
    sip: "Start SIP",
    switch: "Switch",
    lumpsum: "Add lump sum",
    redeem: "Redeem or pause",
    compare: "Compare only"
  }[intent] || "Shortlist fund";
}

function claimCheckerConfig() {
  const fund = selectedFund();
  const preset = els.claimPreset?.value || "guarantee";
  const claimText = (els.claimText?.value || CLAIM_PRESETS[preset] || CLAIM_PRESETS.guarantee).trim();
  const source = els.claimSource?.value || "social";
  const intent = els.claimIntent?.value || "shortlist";
  const normalized = claimText.toLowerCase();
  let flags = CLAIM_PATTERNS.filter((pattern) => pattern.keywords.some((word) => normalized.includes(word)));
  if (!flags.length) {
    flags = [{
      id: "unverified",
      label: "Unverified claim",
      severity: 12,
      route: "#evidence",
      check: "The claim is not proven by app data. Confirm source date, citation path, evidence, cost, risk, and benchmark context."
    }];
  }
  const evidence = evidenceReadinessScore(fund);
  const sourcePenalty = ["social", "friend", "ad"].includes(source) ? 10 : source === "self" ? 4 : 6;
  const actionPenalty = ["switch", "lumpsum", "redeem", "sip"].includes(intent) ? 8 : 3;
  const severity = flags.reduce((sum, flag) => sum + flag.severity, 0);
  const claimScore = Math.round(clampNumber(100 - severity - sourcePenalty - actionPenalty + Math.round(evidence * 0.08), 18, 92));

  let posture = "Verify before relying";
  let tone = "watch";
  if (claimScore < 45) {
    posture = "Do not rely on this claim";
    tone = "caution";
  } else if (claimScore >= 72) {
    posture = "Claim can be researched";
    tone = "steady";
  }

  const primary = flags[0];
  const evidenceTasks = [
    `Open ${fund.name} in Evidence Ledger and confirm source status before trusting the claim.`,
    `Compare score ${nadiScore(fund)}/100, evidence ${evidence}/100, TER ${fund.expense.toFixed(2)}%, drawdown ${fund.maxDrawdown}%, and benchmark ${fund.benchmark}.`,
    `Write the decision reason in Decision Pack before any real-world action.`,
    `Use Behavior Guard if the claim came from excitement, fear, social media, or deadline pressure.`
  ];
  const routes = [
    { label: "Evidence", route: "#evidence" },
    { label: "Compare", route: "#compare" },
    { label: "Glossary", route: "#glossary" },
    { label: "Guard", route: "#behavior-guard" }
  ];

  return {
    actionPenalty,
    claimScore,
    claimText,
    evidence,
    evidenceTasks,
    flags,
    fund,
    intent,
    posture,
    primary,
    routes,
    source,
    sourcePenalty,
    tone
  };
}

function renderClaimChecker(event) {
  if (event) event.preventDefault();
  if (!els.claimOutput) return;
  const config = claimCheckerConfig();
  if (els.claimSummary) {
    els.claimSummary.textContent = `${config.flags.length} flag${config.flags.length === 1 ? "" : "s"} found`;
  }
  els.claimOutput.innerHTML = `
    <div class="claim-hero ${escapeHtml(config.tone)}">
      <div>
        <span class="metric-label">${escapeHtml(claimSourceLabel(config.source))}</span>
        <h3>${escapeHtml(config.posture)}</h3>
        <p>${escapeHtml(config.primary.check)} This is claim triage, not fund approval.</p>
      </div>
      <div class="claim-score" style="--score:${config.claimScore}">
        <b>${config.claimScore}</b>
        <span>Claim</span>
      </div>
    </div>
    <div class="claim-card-grid">
      <article class="claim-card">
        <span>Claim text</span>
        <strong>${escapeHtml(claimIntentLabel(config.intent))}</strong>
        <p>${escapeHtml(config.claimText)}</p>
      </article>
      <article class="claim-card">
        <span>Selected fund context</span>
        <strong>${escapeHtml(config.fund.name)}</strong>
        <p>${escapeHtml(config.fund.category)} | ${escapeHtml(config.fund.risk)} risk | TER ${config.fund.expense.toFixed(2)}% | Evidence ${config.evidence}/100</p>
      </article>
      <article class="claim-card">
        <span>Primary concern</span>
        <strong>${escapeHtml(config.primary.label)}</strong>
        <p>${escapeHtml(config.primary.check)}</p>
      </article>
    </div>
    <div class="claim-flag-grid">
      ${config.flags.map((flag) => `
        <article class="claim-flag-card">
          <span>${escapeHtml(flag.label)}</span>
          <strong>${flag.severity} risk pts</strong>
          <p>${escapeHtml(flag.check)}</p>
        </article>
      `).join("")}
    </div>
    <div class="claim-route-card">
      <div>
        <span>Evidence route</span>
        <strong>Convert claim into checks</strong>
        <ul class="doc-list">
          ${config.evidenceTasks.map((task) => `<li>${escapeHtml(task)}</li>`).join("")}
        </ul>
      </div>
      <div class="claim-route-actions">
        ${config.routes.map((item) => `
          <button class="signal-chip" type="button" data-claim-route="${escapeHtml(item.route)}">${escapeHtml(item.label)}</button>
        `).join("")}
      </div>
    </div>
    <div class="claim-guardrail">
      <strong>Claim rule</strong>
      <p>No external claim is trusted until source date, citation, risk, cost, benchmark, evidence, and written reason are checked. The app does not validate advertisements, tips, or guarantees.</p>
    </div>
  `;
}

function makeClaimCheckerNote() {
  const config = claimCheckerConfig();
  return [
    `# NiveshNadi Claim Checker - ${config.fund.name}`,
    "",
    `Release: ${RELEASE_LABEL} (${DATA_VERSION})`,
    `Source: ${claimSourceLabel(config.source)}`,
    `Intent: ${claimIntentLabel(config.intent)}`,
    `Claim score: ${config.claimScore}/100`,
    `Posture: ${config.posture}`,
    `Claim: ${config.claimText}`,
    "",
    "## Flags",
    ...config.flags.map((flag) => `- ${flag.label}: ${flag.check}`),
    "",
    "## Required Checks",
    ...config.evidenceTasks.map((task) => `- ${task}`),
    "",
    "Research boundary: This note challenges a claim. It is not a recommendation, approval, rejection, transaction instruction, tax advice, or return guarantee."
  ].join("\n");
}

function receiptModeLabel(mode) {
  return {
    self: "Self research receipt",
    family: "Family discussion receipt",
    advisor: "Advisor conversation receipt",
    audit: "Evidence audit receipt"
  }[mode] || "Self research receipt";
}

function receiptDecisionLabel(decision) {
  return {
    watch: "Watch",
    shortlist: "Shortlist",
    sip: "SIP research",
    switch: "Switch research",
    review: "Portfolio review",
    avoid: "Avoid for now"
  }[decision] || "Watch";
}

function receiptConfig() {
  const fund = selectedFund();
  const mode = els.receiptMode?.value || "self";
  const decision = els.receiptDecision?.value || "watch";
  const reviewDate = els.receiptReviewDate?.value || "2026-06-30";
  const note = (els.receiptNote?.value || "").trim();
  const evidence = evidenceReadinessScore(fund);
  const score = nadiScore(fund);
  const behavior = behaviorGuardConfig();
  const claim = claimCheckerConfig();
  const compareFunds = compareSet();
  const watchCount = loadWatchlist().filter((entry) => entry.fundId === fund.id).length;
  const alertCount = loadAlerts().filter((alert) => alert.fundId === fund.id).length;
  const receiptScore = Math.round(clampNumber(
    evidence * 0.28 +
      score * 0.24 +
      behavior.guardScore * 0.18 +
      claim.claimScore * 0.16 +
      Math.min(compareFunds.length * 18, 72) * 0.08 +
      (reviewDate ? 80 : 40) * 0.06,
    28,
    94
  ));
  let posture = "Research receipt pending";
  let tone = "watch";
  if (receiptScore >= 78) {
    posture = "Research file looks organized";
    tone = "ready";
  } else if (receiptScore < 58) {
    posture = "Receipt needs stronger proof";
    tone = "caution";
  }

  const ledger = [
    {
      label: "Selected fund",
      status: "Captured",
      detail: `${fund.name} | ${fund.category} | ${fund.risk} risk | TER ${fund.expense.toFixed(2)}%`
    },
    {
      label: "Score anatomy",
      status: `${score}/100`,
      detail: "Nadi score reviewed as a research signal, not a rating or guarantee."
    },
    {
      label: "Evidence ledger",
      status: `${evidence}/100`,
      detail: evidence < 75 ? "Live source dates and citations remain the main blocker." : "Evidence is usable for demo review, but live citations are still required."
    },
    {
      label: "Claim checker",
      status: `${claim.flags.length} flag${claim.flags.length === 1 ? "" : "s"}`,
      detail: claim.primary.check
    },
    {
      label: "Behavior guard",
      status: `${behavior.guardScore}/100`,
      detail: `${behavior.trigger.label}: ${behavior.trigger.firstCheck}`
    },
    {
      label: "Compare set",
      status: `${compareFunds.length} funds`,
      detail: compareFunds.length >= 2 ? "Shortlist has peer context." : "Add at least one peer before relying on the receipt."
    },
    {
      label: "Follow-up",
      status: reviewDate,
      detail: `${watchCount} watch entry and ${alertCount} saved alert trigger${alertCount === 1 ? "" : "s"} for this fund.`
    }
  ];
  const nextChecks = [
    evidence < 75 ? "Open Evidence Ledger and attach live source dates before treating the receipt as current." : "Refresh live AMFI, AMC, SID/KIM, portfolio, TER, and riskometer evidence before launch use.",
    compareFunds.length < 2 ? "Add one category or sleeve peer to Compare before moving from watch to decision." : "Use Compare and X-Ray to confirm the fund has a distinct portfolio role.",
    claim.flags.length ? "Resolve the Claim Checker flag before trusting external language." : "Keep claim language modest and source-backed.",
    behavior.guardScore < 70 ? "Wait through the Behavior Guard cooling rule before writing the final memo." : "Keep the written reason calm and review-date bound."
  ];

  return {
    alertCount,
    behavior,
    claim,
    compareFunds,
    decision,
    evidence,
    fund,
    ledger,
    mode,
    nextChecks,
    note,
    posture,
    receiptScore,
    reviewDate,
    score,
    tone,
    watchCount
  };
}

function renderResearchReceipt(event) {
  if (event) event.preventDefault();
  if (!els.receiptOutput) return;
  const config = receiptConfig();
  if (els.receiptSummary) {
    els.receiptSummary.textContent = `${config.receiptScore}/100 receipt`;
  }
  els.receiptOutput.innerHTML = `
    <div class="receipt-hero ${escapeHtml(config.tone)}">
      <div>
        <span class="metric-label">${escapeHtml(receiptModeLabel(config.mode))}</span>
        <h3>${escapeHtml(config.posture)}</h3>
        <p>${escapeHtml(config.fund.name)} receipt for ${escapeHtml(receiptDecisionLabel(config.decision))}. Review date ${escapeHtml(config.reviewDate)}.</p>
      </div>
      <div class="receipt-score" style="--score:${config.receiptScore}">
        <b>${config.receiptScore}</b>
        <span>Receipt</span>
      </div>
    </div>
    <div class="receipt-metric-grid">
      <article><span>Nadi score</span><strong>${config.score}/100</strong><p>Research signal only.</p></article>
      <article><span>Evidence</span><strong>${config.evidence}/100</strong><p>Live source proof still controls trust.</p></article>
      <article><span>Claims</span><strong>${config.claim.flags.length} flag${config.claim.flags.length === 1 ? "" : "s"}</strong><p>${escapeHtml(config.claim.posture)}</p></article>
      <article><span>Behavior</span><strong>${config.behavior.guardScore}/100</strong><p>${escapeHtml(config.behavior.posture)}</p></article>
    </div>
    <div class="receipt-ledger-grid">
      ${config.ledger.map((item) => `
        <article class="receipt-ledger-card">
          <span>${escapeHtml(item.label)}</span>
          <strong>${escapeHtml(item.status)}</strong>
          <p>${escapeHtml(item.detail)}</p>
        </article>
      `).join("")}
    </div>
    <div class="receipt-route-card">
      <div>
        <span>Next proof checks</span>
        <strong>Before this receipt is relied on</strong>
        <ul class="doc-list">${config.nextChecks.map((item) => `<li>${escapeHtml(item)}</li>`).join("")}</ul>
        ${config.note ? `<p>${escapeHtml(config.note)}</p>` : ""}
      </div>
      <div class="receipt-route-actions">
        <button class="signal-chip" type="button" data-receipt-route="#evidence">Evidence</button>
        <button class="signal-chip" type="button" data-receipt-route="#claim-checker">Claims</button>
        <button class="signal-chip" type="button" data-receipt-route="#behavior-guard">Guard</button>
        <button class="signal-chip" type="button" data-receipt-route="#decision-pack">Pack</button>
      </div>
    </div>
    <div class="receipt-guardrail">
      <strong>Receipt boundary</strong>
      <p>This receipt documents research checks only. It excludes PAN, folio, CAS, bank data, credentials, execution instructions, personalized advice, tax advice, and return guarantees.</p>
    </div>
  `;
}

function makeResearchReceiptNote() {
  const config = receiptConfig();
  return [
    `# NiveshNadi Research Receipt - ${config.fund.name}`,
    "",
    `Release: ${RELEASE_LABEL} (${DATA_VERSION})`,
    `Receipt mode: ${receiptModeLabel(config.mode)}`,
    `Decision stance: ${receiptDecisionLabel(config.decision)}`,
    `Review date: ${config.reviewDate}`,
    `Receipt score: ${config.receiptScore}/100`,
    `Posture: ${config.posture}`,
    "",
    "## Receipt Ledger",
    ...config.ledger.map((item) => `- ${item.label}: ${item.status} - ${item.detail}`),
    "",
    "## Next Proof Checks",
    ...config.nextChecks.map((item) => `- ${item}`),
    config.note ? `\n## Note\n${config.note}` : "",
    "",
    "Research boundary: This receipt documents checks only. It is not advice, execution, tax guidance, approval, or a return guarantee."
  ].filter(Boolean).join("\n");
}

function receiptSnapshotFromConfig(config = receiptConfig()) {
  return {
    id: `receipt-${Date.now()}-${Math.random().toString(16).slice(2)}`,
    createdAt: new Date().toISOString(),
    release: RELEASE_LABEL,
    dataVersion: DATA_VERSION,
    mode: config.mode,
    modeLabel: receiptModeLabel(config.mode),
    decision: config.decision,
    decisionLabel: receiptDecisionLabel(config.decision),
    reviewDate: config.reviewDate,
    receiptScore: config.receiptScore,
    posture: config.posture,
    tone: config.tone,
    fund: {
      id: config.fund.id,
      name: config.fund.name,
      category: config.fund.category,
      risk: config.fund.risk,
      expense: Number(config.fund.expense.toFixed(2))
    },
    metrics: {
      nadiScore: config.score,
      evidence: config.evidence,
      claimFlags: config.claim.flags.length,
      behavior: config.behavior.guardScore,
      compareCount: config.compareFunds.length,
      watchCount: config.watchCount,
      alertCount: config.alertCount
    },
    compareFunds: config.compareFunds.map((fund) => ({
      id: fund.id,
      name: fund.name,
      category: fund.category,
      risk: fund.risk
    })).slice(0, 6),
    nextChecks: config.nextChecks.slice(0, 4),
    noteStatus: config.note ? "Written note present; note body not saved in vault" : "No optional note",
    boundary: "Research workflow record only; excludes PAN, folio, CAS, credentials, account data, advice, approval, and guarantees."
  };
}

function saveCurrentReceiptSnapshot() {
  const snapshot = receiptSnapshotFromConfig();
  const entries = [snapshot, ...loadReceiptVault()].slice(0, 24);
  saveReceiptVault(entries);
  renderReceiptVault();
  renderJourneyTimeline();
  renderResearchMemory();
  renderPrivacyControlRoom();
  toast("Research receipt saved locally.");
}

function clearReceiptVault() {
  saveReceiptVault([]);
  renderReceiptVault();
  renderJourneyTimeline();
  renderResearchMemory();
  renderPrivacyControlRoom();
  toast("Receipt vault cleared.");
}

function renderReceiptVault() {
  if (!els.receiptVaultOutput || !els.receiptVaultSummary) return;
  const entries = loadReceiptVault();
  const current = receiptSnapshotFromConfig();
  const latest = entries[0] || null;
  const prior = entries[1] || null;
  const scoreDelta = latest ? reviewVaultDelta(latest.receiptScore, prior?.receiptScore) : "New";
  const evidenceDelta = latest ? reviewVaultDelta(latest.metrics.evidence, prior?.metrics.evidence) : "New";
  const claimDelta = latest ? reviewVaultDelta(latest.metrics.claimFlags, prior?.metrics.claimFlags) : "New";
  els.receiptVaultSummary.textContent = `${entries.length} receipt${entries.length === 1 ? "" : "s"}`;

  if (!entries.length) {
    els.receiptVaultOutput.innerHTML = `
      <div class="receipt-vault-empty">
        <div>
          <span class="metric-label">Current receipt preview</span>
          <h3>${current.receiptScore}/100 ${escapeHtml(current.decisionLabel)}</h3>
          <p>Save the current Research Receipt to begin a browser-local proof trail. The vault stores research posture, scores, fund names, and check status only; it does not store PAN, folio, CAS, credentials, or the optional receipt note body.</p>
        </div>
        <div class="receipt-vault-score" style="--score:${current.receiptScore}">
          <b>${current.receiptScore}</b>
          <span>Now</span>
        </div>
      </div>
    `;
    return;
  }

  els.receiptVaultOutput.innerHTML = `
    <div class="receipt-vault-hero ${escapeHtml(latest.tone)}">
      <div>
        <span class="metric-label">Latest saved receipt</span>
        <h3>${latest.receiptScore}/100 ${escapeHtml(latest.decisionLabel)}</h3>
        <p>${escapeHtml(latest.fund.name)} | ${escapeHtml(latest.modeLabel)} | Saved ${new Date(latest.createdAt).toLocaleString("en-IN")} | Review ${escapeHtml(latest.reviewDate)}.</p>
      </div>
      <div class="receipt-vault-score" style="--score:${latest.receiptScore}">
        <b>${latest.receiptScore}</b>
        <span>Vault</span>
      </div>
    </div>
    <div class="receipt-vault-metric-grid">
      <div><span>Receipt delta</span><strong>${escapeHtml(scoreDelta)}</strong></div>
      <div><span>Evidence delta</span><strong>${escapeHtml(evidenceDelta)}</strong></div>
      <div><span>Claim flags delta</span><strong>${escapeHtml(claimDelta)}</strong></div>
      <div><span>Latest evidence</span><strong>${latest.metrics.evidence}/100</strong></div>
      <div><span>Compare set</span><strong>${latest.metrics.compareCount}</strong></div>
      <div><span>Alerts</span><strong>${latest.metrics.alertCount}</strong></div>
    </div>
    <div class="receipt-vault-grid">
      ${entries.slice(0, 8).map((entry, index) => {
        const previous = entries[index + 1] || null;
        return `
          <article class="receipt-vault-card">
            <div class="receipt-vault-card-head">
              <span>${escapeHtml(entry.decisionLabel)}</span>
              <strong>${entry.receiptScore}/100</strong>
            </div>
            <p>${escapeHtml(entry.fund.name)} | ${escapeHtml(entry.fund.category)} | ${escapeHtml(entry.fund.risk)} risk</p>
            <div class="receipt-vault-mini-grid">
              <div><span>Evidence</span><b>${entry.metrics.evidence}/100</b></div>
              <div><span>Claims</span><b>${entry.metrics.claimFlags}</b></div>
              <div><span>Behavior</span><b>${entry.metrics.behavior}/100</b></div>
            </div>
            <small>Score ${escapeHtml(reviewVaultDelta(entry.receiptScore, previous?.receiptScore))} from prior receipt | ${escapeHtml(entry.noteStatus)}</small>
          </article>
        `;
      }).join("")}
    </div>
    <div class="receipt-vault-card-grid">
      <article class="receipt-vault-panel">
        <h3>Latest proof checks</h3>
        <ul class="review-vault-list">
          ${latest.nextChecks.map((item) => `<li>${escapeHtml(item)}</li>`).join("")}
        </ul>
      </article>
      <article class="receipt-vault-panel">
        <h3>Compare context</h3>
        <div class="receipt-vault-funds">
          ${latest.compareFunds.length ? latest.compareFunds.map((fund) => `<span>${escapeHtml(fund.name)} | ${escapeHtml(fund.risk)} risk</span>`).join("") : "<span>No compare fund captured.</span>"}
        </div>
      </article>
      <article class="receipt-vault-panel receipt-vault-guardrail">
        <h3>Vault boundary</h3>
        <p>${escapeHtml(latest.boundary)}</p>
      </article>
    </div>
  `;
}

function makeReceiptVaultBrief() {
  const entries = loadReceiptVault();
  const current = receiptSnapshotFromConfig();
  const latest = entries[0] || current;
  const prior = entries[1] || null;
  return [
    "# NiveshNadi Receipt Vault",
    `Release: ${RELEASE_LABEL} (${DATA_VERSION})`,
    `Saved receipts: ${entries.length}`,
    `Latest fund: ${latest.fund.name}`,
    `Latest decision stance: ${latest.decisionLabel}`,
    `Latest receipt score: ${latest.receiptScore}/100`,
    `Receipt delta: ${reviewVaultDelta(latest.receiptScore, prior?.receiptScore)}`,
    `Evidence delta: ${reviewVaultDelta(latest.metrics.evidence, prior?.metrics.evidence)}`,
    `Claim flags delta: ${reviewVaultDelta(latest.metrics.claimFlags, prior?.metrics.claimFlags)}`,
    "",
    "## Latest Metrics",
    `- Nadi score: ${latest.metrics.nadiScore}/100`,
    `- Evidence readiness: ${latest.metrics.evidence}/100`,
    `- Claim flags: ${latest.metrics.claimFlags}`,
    `- Behavior guard: ${latest.metrics.behavior}/100`,
    `- Compare set: ${latest.metrics.compareCount}`,
    `- Watch entries: ${latest.metrics.watchCount}`,
    `- Alert triggers: ${latest.metrics.alertCount}`,
    "",
    "## Latest Proof Checks",
    ...latest.nextChecks.map((item) => `- ${item}`),
    "",
    "## Recent Receipts",
    ...(entries.length ? entries.slice(0, 8).map((entry) => `- ${new Date(entry.createdAt).toLocaleString("en-IN")}: ${entry.receiptScore}/100, ${entry.fund.name}, ${entry.decisionLabel}, evidence ${entry.metrics.evidence}/100, claims ${entry.metrics.claimFlags}`) : ["- No saved receipts yet. This brief uses the current receipt preview."]),
    "",
    "## Guardrail",
    "Receipt Vault stores browser-local proof-of-research metadata only. It is not advice, suitability approval, execution instruction, tax guidance, or a return guarantee. Do not store PAN, folio, CAS, credentials, account data, client identifiers, or private financial notes."
  ].join("\n");
}

function renderWatchlistRoom() {
  if (!els.watchList || !els.watchStats) return;
  const watchlist = loadWatchlist();
  const alerts = loadAlerts();
  const watchedFunds = watchlist
    .map((entry) => FUNDS.find((fund) => fund.id === entry.fundId))
    .filter(Boolean);
  const watchedIds = new Set(watchedFunds.map((fund) => fund.id));
  const scopedAlerts = alerts.filter((alert) => watchedIds.has(alert.fundId));
  const evaluated = scopedAlerts.map((alert) => {
    const fund = FUNDS.find((item) => item.id === alert.fundId);
    return fund ? evaluateAlert(alert, fund) : null;
  }).filter(Boolean);
  const attentionCount = evaluated.filter((item) => item.status === "attention").length;
  const nextReview = nextReviewLabel(scopedAlerts);

  els.watchSummary.textContent = `${watchedFunds.length} watched`;
  els.watchStats.innerHTML = `
    <div><span>Watched funds</span><strong>${watchedFunds.length}</strong></div>
    <div><span>Active triggers</span><strong>${scopedAlerts.length}</strong></div>
    <div><span>Attention</span><strong>${attentionCount}</strong></div>
    <div><span>Next review</span><strong>${escapeHtml(nextReview)}</strong></div>
  `;

  if (!watchedFunds.length) {
    els.watchList.innerHTML = `
      <div class="empty-state">
        Add selected funds or your X-Ray set to start a research watchlist. Alerts are saved in this browser only.
      </div>
    `;
    return;
  }

  els.watchList.innerHTML = watchedFunds.map((fund) => {
    const fundAlerts = scopedAlerts.filter((alert) => alert.fundId === fund.id);
    const score = nadiScore(fund);
    const alertCopy = fundAlerts.length
      ? fundAlerts.map((alert) => {
        const evaluatedAlert = evaluateAlert(alert, fund);
        return `
          <article class="watch-alert">
            <div class="watch-alert-head">
              <span>${escapeHtml(evaluatedAlert.label)}</span>
              <strong class="alert-status ${escapeHtml(evaluatedAlert.status)}">${escapeHtml(evaluatedAlert.statusLabel)}</strong>
            </div>
            <p>${escapeHtml(evaluatedAlert.detail)}</p>
            ${alert.note ? `<p>${escapeHtml(alert.note)}</p>` : ""}
            <div class="watch-alert-actions">
              <button class="remove-button" type="button" data-remove-alert="${escapeHtml(alert.id)}">Remove trigger</button>
            </div>
          </article>
        `;
      }).join("")
      : '<div class="empty-state">No triggers yet. Save a trigger for this fund to create a review habit.</div>';

    return `
      <article class="watch-card">
        <div class="watch-card-head">
          <div>
            <div class="fund-meta">
              <span class="tag">${escapeHtml(fund.sleeve)}</span>
              <span class="tag ${riskClass(fund.risk)}">${escapeHtml(fund.risk)}</span>
            </div>
            <h3>${escapeHtml(fund.name)}</h3>
            <p>${escapeHtml(fund.category)} | Expense ${fund.expense.toFixed(2)}% | Drawdown ${fund.maxDrawdown}%</p>
          </div>
          <div class="score" style="--score: ${score}"><span>${score}</span></div>
        </div>
        <div class="watch-alert-list">${alertCopy}</div>
        <div class="watch-card-actions">
          <button class="text-button" type="button" data-select-fund="${escapeHtml(fund.id)}">Inspect</button>
          <button class="remove-button" type="button" data-remove-watch="${escapeHtml(fund.id)}">Remove fund</button>
        </div>
      </article>
    `;
  }).join("");
}

function addToWatchlist(fundId, shouldRender = true) {
  if (!FUNDS.some((fund) => fund.id === fundId)) return;
  const watchlist = loadWatchlist();
  if (!watchlist.some((entry) => entry.fundId === fundId)) {
    watchlist.unshift({ fundId, createdAt: new Date().toISOString() });
    saveWatchlist(watchlist.slice(0, 30));
  }
  if (shouldRender) {
    renderResearchLanes();
    renderResearchPulse();
    renderNadiCoach();
    renderPortfolioReviewRoom();
    renderReviewVault();
    renderInvestorRecordDesk();
    renderResearchDossier();
    renderWatchlistRoom();
    renderResearchReceipt();
    renderReceiptVault();
    renderReviewRhythmBoard();
    renderResearchBriefing();
    renderBriefingVault();
    renderJourneyTimeline();
    renderResearchMemory();
    renderPrivacyControlRoom();
  }
}

function removeFromWatchlist(fundId) {
  const watchlist = loadWatchlist().filter((entry) => entry.fundId !== fundId);
  const alerts = loadAlerts().filter((alert) => alert.fundId !== fundId);
  saveWatchlist(watchlist);
  saveAlerts(alerts);
  renderResearchLanes();
  renderResearchPulse();
  renderNadiCoach();
  renderPortfolioReviewRoom();
  renderReviewVault();
  renderInvestorRecordDesk();
  renderResearchDossier();
  renderWatchlistRoom();
  renderResearchReceipt();
  renderReceiptVault();
  renderReviewRhythmBoard();
  renderResearchBriefing();
  renderBriefingVault();
  renderJourneyTimeline();
  renderResearchMemory();
  renderPrivacyControlRoom();
}

function handleAlertForm(event) {
  event.preventDefault();
  const fundId = els.watchFundSelect.value;
  addToWatchlist(fundId, false);
  const trigger = els.alertTrigger.value;
  const alert = {
    id: `${Date.now()}-${Math.random().toString(16).slice(2)}`,
    fundId,
    trigger,
    limit: els.alertLimit.value.trim() || ALERT_TYPES[trigger].defaultLimit,
    note: els.alertNote.value.trim(),
    createdAt: new Date().toISOString()
  };
  const alerts = [alert, ...loadAlerts()].slice(0, 60);
  saveAlerts(alerts);
  els.alertNote.value = "";
  renderResearchLanes();
  renderResearchPulse();
  renderNadiCoach();
  renderPortfolioReviewRoom();
  renderReviewVault();
  renderInvestorRecordDesk();
  renderResearchDossier();
  renderWatchlistRoom();
  renderResearchReceipt();
  renderReceiptVault();
  renderReviewRhythmBoard();
  renderResearchBriefing();
  renderBriefingVault();
  renderJourneyTimeline();
  renderResearchMemory();
  renderPrivacyControlRoom();
}

function evaluateAlert(alert, fund) {
  const type = ALERT_TYPES[alert.trigger] || ALERT_TYPES.review;
  const limit = parseFloat(String(alert.limit).replace(/[^\d.]/g, ""));
  let status = "calm";
  let statusLabel = "Calm";
  let detail = type.hint;

  if (alert.trigger === "expense") {
    const target = Number.isFinite(limit) ? limit : Number(ALERT_TYPES.expense.defaultLimit);
    const breached = fund.expense >= target;
    status = breached ? "attention" : "calm";
    statusLabel = breached ? "Attention" : "Within limit";
    detail = `Expense is ${fund.expense.toFixed(2)}% versus trigger ${target.toFixed(2)}%.`;
  } else if (alert.trigger === "drawdown") {
    const target = Number.isFinite(limit) ? limit : Number(ALERT_TYPES.drawdown.defaultLimit);
    const breached = fund.maxDrawdown >= target;
    status = breached ? "attention" : "calm";
    statusLabel = breached ? "Attention" : "Within limit";
    detail = `Max drawdown is ${fund.maxDrawdown}% versus trigger ${target}%.`;
  } else if (alert.trigger === "score") {
    const target = Number.isFinite(limit) ? limit : Number(ALERT_TYPES.score.defaultLimit);
    const score = nadiScore(fund);
    const breached = score <= target;
    status = breached ? "attention" : "calm";
    statusLabel = breached ? "Attention" : "Above floor";
    detail = `Nadi score is ${score}/100 versus trigger floor ${target}.`;
  } else if (alert.trigger === "review") {
    const days = daysUntil(alert.limit);
    if (days === null) {
      status = "active";
      statusLabel = "Scheduled";
      detail = `Review marker: ${alert.limit || ALERT_TYPES.review.defaultLimit}.`;
    } else if (days < 0) {
      status = "attention";
      statusLabel = "Due";
      detail = `Review date passed ${Math.abs(days)} day${Math.abs(days) === 1 ? "" : "s"} ago.`;
    } else if (days <= 30) {
      status = "attention";
      statusLabel = "Upcoming";
      detail = `Review due in ${days} day${days === 1 ? "" : "s"}.`;
    } else {
      status = "active";
      statusLabel = "Scheduled";
      detail = `Review due in ${days} days.`;
    }
  } else if (alert.trigger === "style") {
    status = "active";
    statusLabel = "Watch";
    detail = `Review style, manager, AMC notes, or portfolio drift. Cadence: ${alert.limit || ALERT_TYPES.style.defaultLimit}.`;
  }

  return {
    detail,
    label: type.label,
    status,
    statusLabel
  };
}

function nextReviewLabel(alerts) {
  const reviewDates = alerts
    .filter((alert) => alert.trigger === "review")
    .map((alert) => ({ alert, days: daysUntil(alert.limit) }))
    .filter((item) => item.days !== null)
    .sort((a, b) => a.days - b.days);
  if (!reviewDates.length) return "Not set";
  const next = reviewDates[0];
  if (next.days < 0) return "Due now";
  if (next.days === 0) return "Today";
  return `${next.days}d`;
}

function daysUntil(value) {
  const date = new Date(value);
  if (Number.isNaN(date.getTime())) return null;
  const start = new Date();
  start.setHours(0, 0, 0, 0);
  date.setHours(0, 0, 0, 0);
  return Math.round((date.getTime() - start.getTime()) / 86400000);
}

function rhythmConfig() {
  return {
    focus: els.rhythmFocus?.value || "evidence",
    date: els.rhythmDate?.value || els.packReviewDate?.value || "2026-06-30",
    cadence: els.rhythmCadence?.value || "quarterly",
    note: (els.rhythmNote?.value || "").trim()
  };
}

function rhythmFocusLabel(value) {
  const labels = {
    sip: "SIP review",
    switch: "Switch review",
    evidence: "Evidence refresh",
    cost: "Cost audit",
    portfolio: "Portfolio X-Ray",
    behavior: "Behavior check"
  };
  return labels[value] || "Research review";
}

function rhythmCadenceLabel(value) {
  const labels = {
    monthly: "Monthly",
    quarterly: "Quarterly",
    halfyear: "Half-yearly",
    annual: "Annual"
  };
  return labels[value] || "Quarterly";
}

function rhythmCadenceDays(value) {
  if (value === "monthly") return 30;
  if (value === "halfyear") return 180;
  if (value === "annual") return 365;
  return 90;
}

function addDays(date, days) {
  const copy = new Date(date.getTime());
  copy.setDate(copy.getDate() + days);
  return copy;
}

function dateInputFromDate(date) {
  if (!(date instanceof Date) || Number.isNaN(date.getTime())) return "";
  return date.toISOString().slice(0, 10);
}

function humanReviewDate(value) {
  const days = daysUntil(value);
  if (days === null) return "Date not set";
  if (days < 0) return `Due ${Math.abs(days)} day${Math.abs(days) === 1 ? "" : "s"} ago`;
  if (days === 0) return "Due today";
  return `Due in ${days} day${days === 1 ? "" : "s"}`;
}

function rhythmTaskForFocus(focus, fund) {
  if (focus === "sip") return `Review SIP behavior, role clarity, stress outcome, and whether ${fund.name} still belongs in the shortlist.`;
  if (focus === "switch") return "Run Switch Decision Lab again, compare candidate set, and separate evidence from market noise.";
  if (focus === "cost") return "Run Cost Reality Lab, check TER drift, exit-load friction, and cheaper peer alternatives.";
  if (focus === "portfolio") return "Run Portfolio X-Ray, inspect overlap, category concentration, and role duplication.";
  if (focus === "behavior") return "Re-read the decision reason, stress note, and emergency buffer before changing behavior.";
  return "Refresh evidence source dates, factsheet fields, portfolio disclosure, riskometer, and benchmark context.";
}

function reviewRhythmItems(config = rhythmConfig()) {
  const selected = selectedFund();
  const cadenceDays = rhythmCadenceDays(config.cadence);
  const alerts = loadAlerts();
  const watchlist = loadWatchlist();
  const items = [];
  const seen = new Set();

  const addItem = ({ fund, date, source, focus, note, priority = "scheduled" }) => {
    if (!fund) return;
    const key = `${source}:${fund.id}:${date || "unscheduled"}:${focus}`;
    if (seen.has(key)) return;
    seen.add(key);
    items.push({
      fund,
      date,
      days: daysUntil(date),
      source,
      focus,
      note,
      priority,
      task: rhythmTaskForFocus(focus, fund)
    });
  };

  addItem({
    fund: selected,
    date: config.date,
    source: "Selected fund",
    focus: config.focus,
    note: config.note || "Primary rhythm checkpoint from current workspace controls.",
    priority: "primary"
  });

  for (const alert of alerts) {
    const fund = FUNDS.find((item) => item.id === alert.fundId);
    const evaluation = fund ? evaluateAlert(alert, fund) : null;
    addItem({
      fund,
      date: alert.trigger === "review" ? alert.limit : dateInputFromDate(addDays(new Date(), 30)),
      source: evaluation ? `${evaluation.label} alert` : "Saved alert",
      focus: alert.trigger === "expense" ? "cost" : alert.trigger === "style" ? "evidence" : alert.trigger === "drawdown" ? "behavior" : config.focus,
      note: alert.note || (evaluation ? evaluation.detail : "Saved watchlist trigger."),
      priority: evaluation?.status === "attention" ? "attention" : "scheduled"
    });
  }

  for (const entry of watchlist) {
    const fund = FUNDS.find((item) => item.id === entry.fundId);
    const created = new Date(entry.createdAt);
    const date = Number.isNaN(created.getTime())
      ? dateInputFromDate(addDays(new Date(), cadenceDays))
      : dateInputFromDate(addDays(created, cadenceDays));
    addItem({
      fund,
      date,
      source: "Watchlist cadence",
      focus: config.focus,
      note: `${rhythmCadenceLabel(config.cadence)} review rhythm for watched fund.`,
      priority: "scheduled"
    });
  }

  for (const fund of FUNDS.filter((item) => state.compare.has(item.id))) {
    addItem({
      fund,
      date: dateInputFromDate(addDays(new Date(), 60)),
      source: "Compare set",
      focus: "portfolio",
      note: "Compare-set rhythm from current X-Ray shortlist.",
      priority: "scheduled"
    });
  }

  return items.sort((a, b) => {
    const aDays = a.days === null ? 9999 : a.days;
    const bDays = b.days === null ? 9999 : b.days;
    return aDays - bDays || a.fund.name.localeCompare(b.fund.name);
  });
}

function rhythmBuckets(items) {
  return [
    {
      label: "Next 30 days",
      items: items.filter((item) => item.days !== null && item.days <= 30)
    },
    {
      label: "31-60 days",
      items: items.filter((item) => item.days !== null && item.days > 30 && item.days <= 60)
    },
    {
      label: "61-90 days",
      items: items.filter((item) => item.days !== null && item.days > 60 && item.days <= 90)
    },
    {
      label: "Later or unscheduled",
      items: items.filter((item) => item.days === null || item.days > 90)
    }
  ];
}

function rhythmPriorityLabel(priority) {
  if (priority === "attention") return "Attention";
  if (priority === "primary") return "Primary";
  return "Scheduled";
}

function renderReviewRhythmBoard(event) {
  if (event) event.preventDefault();
  if (!els.rhythmOutput) return;
  const config = rhythmConfig();
  const items = reviewRhythmItems(config);
  const buckets = rhythmBuckets(items);
  const attention = items.filter((item) => item.priority === "attention" || (item.days !== null && item.days <= 7)).length;
  const selected = selectedFund();
  const next = items[0];
  if (els.rhythmSummary) {
    els.rhythmSummary.textContent = next ? `${humanReviewDate(next.date)} | ${items.length} tasks` : "No rhythm";
  }
  els.rhythmOutput.innerHTML = `
    <div class="rhythm-hero ${attention ? "attention" : "calm"}">
      <div>
        <span class="metric-label">${escapeHtml(rhythmFocusLabel(config.focus))}</span>
        <h3>${escapeHtml(selected.name)} review rhythm</h3>
        <p>${next ? escapeHtml(`${next.source}: ${humanReviewDate(next.date)}.`) : "No review tasks yet."} This board organizes research reminders, not transaction instructions.</p>
      </div>
      <div class="rhythm-clock">
        <b>${next?.days === null || next?.days === undefined ? "--" : Math.max(0, next.days)}</b>
        <span>days</span>
      </div>
    </div>
    <div class="rhythm-stat-grid">
      <div><span>Total tasks</span><strong>${items.length}</strong></div>
      <div><span>Attention</span><strong>${attention}</strong></div>
      <div><span>Watched funds</span><strong>${loadWatchlist().length}</strong></div>
      <div><span>Cadence</span><strong>${escapeHtml(rhythmCadenceLabel(config.cadence))}</strong></div>
    </div>
    <div class="rhythm-bucket-grid">
      ${buckets.map((bucket) => `
        <article class="rhythm-bucket">
          <span>${escapeHtml(bucket.label)}</span>
          <strong>${bucket.items.length} task${bucket.items.length === 1 ? "" : "s"}</strong>
          <ul class="rhythm-list">
            ${bucket.items.length ? bucket.items.slice(0, 4).map((item) => `
              <li>
                <b>${escapeHtml(item.fund.name)}</b>
                <small>${escapeHtml(humanReviewDate(item.date))} | ${escapeHtml(rhythmPriorityLabel(item.priority))}</small>
              </li>
            `).join("") : "<li><b>No scheduled item</b><small>Keep this window clean unless evidence changes.</small></li>"}
          </ul>
        </article>
      `).join("")}
    </div>
    <div class="rhythm-task-board">
      ${items.slice(0, 6).map((item) => `
        <article class="rhythm-task ${escapeHtml(item.priority)}">
          <div>
            <span>${escapeHtml(item.source)}</span>
            <strong>${escapeHtml(item.fund.name)}</strong>
            <p>${escapeHtml(item.task)}</p>
          </div>
          <div>
            <b>${escapeHtml(humanReviewDate(item.date))}</b>
            <small>${escapeHtml(item.note)}</small>
          </div>
        </article>
      `).join("")}
    </div>
    <div class="rhythm-guardrail">
      <strong>Review discipline</strong>
      <p>A review date is a checkpoint to verify evidence, cost, risk, overlap, and behavior. It is not a buy, sell, switch, pause, redeem, or hold instruction.</p>
    </div>
  `;
}

function addRhythmReviewTrigger() {
  const config = rhythmConfig();
  const fund = selectedFund();
  addToWatchlist(fund.id, false);
  const alert = {
    id: `${Date.now()}-${Math.random().toString(16).slice(2)}`,
    fundId: fund.id,
    trigger: "review",
    limit: config.date,
    note: config.note || `${rhythmFocusLabel(config.focus)} rhythm checkpoint.`,
    createdAt: new Date().toISOString()
  };
  saveAlerts([alert, ...loadAlerts()].slice(0, 60));
  renderWatchlistRoom();
  renderReviewRhythmBoard();
  renderJourneyTimeline();
  toast("Review rhythm added to Watchlist.");
}

function makeReviewRhythmNote() {
  const config = rhythmConfig();
  const items = reviewRhythmItems(config);
  const buckets = rhythmBuckets(items);
  return [
    "# NiveshNadi Review Rhythm Board",
    `Release: ${RELEASE_LABEL} (${DATA_VERSION})`,
    `Selected fund: ${selectedFund().name}`,
    `Focus: ${rhythmFocusLabel(config.focus)}`,
    `Cadence: ${rhythmCadenceLabel(config.cadence)}`,
    `Primary review date: ${config.date || "Not set"}`,
    "",
    "30/60/90 rhythm:",
    ...buckets.map((bucket) => `- ${bucket.label}: ${bucket.items.length} task${bucket.items.length === 1 ? "" : "s"}`),
    "",
    "Next tasks:",
    ...(items.length ? items.slice(0, 8).map((item) => `- ${item.fund.name}: ${humanReviewDate(item.date)} | ${item.source} | ${item.task}`) : ["- No review tasks scheduled yet."]),
    "",
    "Review reminders only. This is not personalized investment advice, a recommendation, a hold instruction, a switch instruction, or an execution instruction."
  ].join("\n");
}

function renderDecisionPack(event) {
  if (event) event.preventDefault();
  if (!els.packOutput) return;
  const pack = buildDecisionPack();
  const watchItems = pack.watchTriggers.length
    ? pack.watchTriggers.map((item) => `<li>${escapeHtml(item)}</li>`).join("")
    : "<li>No saved watch triggers yet. Add review or risk triggers before committing real money.</li>";
  const compareItems = pack.compareFunds.length
    ? pack.compareFunds.map((fund) => `<li>${escapeHtml(fund.name)} | ${escapeHtml(fund.category)} | Score ${nadiScore(fund)}/100</li>`).join("")
    : "<li>No X-Ray set selected.</li>";

  els.packOutput.innerHTML = `
    <div class="pack-hero">
      <div>
        <span>${escapeHtml(pack.decision)}</span>
        <strong>${escapeHtml(pack.title)}</strong>
        <p>${escapeHtml(pack.summary)}</p>
      </div>
      <div class="pack-readiness" style="--score: ${pack.readiness}">
        <b>${pack.readiness}</b>
      </div>
    </div>
    <div class="pack-card-grid">
      <article class="pack-card">
        <span>Selected fund</span>
        <strong>${escapeHtml(pack.fund.name)}</strong>
        <p>${escapeHtml(pack.fund.category)} | ${escapeHtml(pack.fund.risk)} risk | Expense ${pack.fund.expense.toFixed(2)}%</p>
      </article>
      <article class="pack-card">
        <span>SIP assumption</span>
        <strong>${formatMoney(pack.amount)} monthly</strong>
        <p>${pack.goalYears} year horizon at ${pack.assumption.toFixed(1)}% demo return. Projection: ${formatMoney(pack.projection.value)}.</p>
      </article>
      <article class="pack-card">
        <span>Review discipline</span>
        <strong>${escapeHtml(pack.reviewDate || "Not set")}</strong>
        <p>${escapeHtml(pack.convictionLabel)}. The memo should be reviewed before any increase or switch.</p>
      </article>
    </div>
    <div class="pack-card">
      <span>Evidence checklist</span>
      <ul class="pack-list">
        <li>Fund role: ${escapeHtml(pack.fund.role)}</li>
        <li>Benchmark: ${escapeHtml(pack.fund.benchmark)}</li>
        <li>Holdings to inspect: ${pack.fund.holdings.map(escapeHtml).join(", ")}</li>
        <li>Compare set: ${pack.compareFunds.length} fund${pack.compareFunds.length === 1 ? "" : "s"} selected for X-Ray.</li>
        <li>Data status: demo research data until live AMFI, AMC factsheet, SID, KIM, and benchmark feeds are connected.</li>
      </ul>
    </div>
    <div class="pack-card-grid">
      <article class="pack-card">
        <span>X-Ray set</span>
        <ul class="pack-list">${compareItems}</ul>
      </article>
      <article class="pack-card">
        <span>Watchlist triggers</span>
        <ul class="pack-list">${watchItems}</ul>
      </article>
      <article class="pack-card">
        <span>Decision reason</span>
        <p>${escapeHtml(pack.reason)}</p>
      </article>
    </div>
    <div class="pack-card">
      <span>Final guardrails</span>
      <ul class="pack-list">
        <li>This is a research memo, not personalized investment advice or execution.</li>
        <li>Do not proceed only because past returns look attractive.</li>
        <li>Check duplication, time horizon, expense, drawdown, and review trigger before acting.</li>
      </ul>
    </div>
  `;
}

function buildDecisionPack() {
  const fund = selectedFund();
  const goalConfig = readGoalFitConfig();
  const goalMap = buildGoalResearchMap(goalConfig);
  const amount = clampNumber(Number(els.packAmount?.value || els.sipAmount?.value || 0), 0, 10000000);
  const projection = calculateSipFutureValue(amount || goalConfig.sip, goalConfig.years, goalMap.assumption);
  const compareFunds = FUNDS.filter((item) => state.compare.has(item.id));
  const watchTriggers = loadAlerts()
    .filter((alert) => alert.fundId === fund.id || state.compare.has(alert.fundId))
    .slice(0, 5)
    .map((alert) => {
      const alertFund = FUNDS.find((item) => item.id === alert.fundId);
      const evaluation = alertFund ? evaluateAlert(alert, alertFund) : null;
      const fundName = alertFund ? alertFund.name : "Saved fund";
      return `${fundName}: ${evaluation ? evaluation.label : "Trigger"} - ${evaluation ? evaluation.statusLabel : "Active"} (${alert.limit})`;
    });
  const decision = els.packDecision?.value || "Watch";
  const convictionLabel = packConvictionLabel(els.packConviction?.value || "medium");
  const reason = (els.packReason?.value || "").trim() || defaultPackReason(fund, goalMap, decision);
  let readiness = nadiScore(fund);
  if (compareFunds.length >= 2) readiness += 4;
  if (watchTriggers.length) readiness += 4;
  if (reason.length > 60) readiness += 3;
  if (decision === "Start SIP" && amount <= 0) readiness -= 12;
  readiness = Math.max(45, Math.min(94, readiness));

  return {
    amount,
    assumption: goalMap.assumption,
    compareFunds,
    convictionLabel,
    decision,
    fund,
    goalYears: goalConfig.years,
    projection,
    readiness,
    reason,
    reviewDate: els.packReviewDate?.value || "",
    summary: `${fund.category} research pack for ${decision.toLowerCase()} decision with ${formatMoney(amount)} monthly amount and ${goalConfig.years} year horizon.`,
    title: `${fund.name} decision memo`,
    watchTriggers
  };
}

function packConvictionLabel(value) {
  if (value === "high") return "High conviction, still risk-checked";
  if (value === "low") return "Low conviction, more evidence needed";
  return "Medium conviction, ready to watch or pilot";
}

function defaultPackReason(fund, goalMap, decision) {
  return `${decision} because ${fund.name} is being researched for the role: ${fund.role} Category path: ${goalMap.categories.join(", ")}.`;
}

function makeDecisionPackText() {
  const pack = buildDecisionPack();
  const compareLines = pack.compareFunds.length
    ? pack.compareFunds.map((fund) => `- ${fund.name} | ${fund.category} | Score ${nadiScore(fund)}/100`).join("\n")
    : "- No X-Ray set selected";
  const watchLines = pack.watchTriggers.length
    ? pack.watchTriggers.map((item) => `- ${item}`).join("\n")
    : "- No saved triggers yet";
  return [
    `# NiveshNadi Decision Pack - ${pack.fund.name}`,
    "",
    `Release: ${RELEASE_LABEL} (${DATA_VERSION})`,
    `Decision: ${pack.decision}`,
    `Fund: ${pack.fund.name}`,
    `Category: ${pack.fund.category}`,
    `Risk: ${pack.fund.risk}`,
    `Expense ratio: ${pack.fund.expense.toFixed(2)}%`,
    `Nadi score: ${nadiScore(pack.fund)}/100`,
    `Monthly amount: ${formatMoney(pack.amount)}`,
    `Review date: ${pack.reviewDate || "Not set"}`,
    `Conviction: ${pack.convictionLabel}`,
    "",
    "## Reason",
    pack.reason,
    "",
    "## Evidence Checklist",
    `- Role: ${pack.fund.role}`,
    `- Benchmark: ${pack.fund.benchmark}`,
    `- Holdings: ${pack.fund.holdings.join(", ")}`,
    `- SIP projection: ${formatMoney(pack.projection.value)} at ${pack.assumption.toFixed(1)}% demo return for ${pack.goalYears} years`,
    "",
    "## X-Ray Set",
    compareLines,
    "",
    "## Watchlist Triggers",
    watchLines,
    "",
    "## Guardrails",
    "- Research memo only; not personalized investment advice.",
    "- Check duplication, time horizon, expense, drawdown, and review trigger before acting.",
    "- Mutual fund investments are subject to market risks."
  ].join("\n");
}

function saveDecisionPackToJournal() {
  const pack = buildDecisionPack();
  const entry = {
    fund: `Decision Pack | ${pack.fund.name}`,
    decision: pack.decision,
    reason: `${pack.reason} Review date: ${pack.reviewDate || "Not set"}. Readiness: ${pack.readiness}/100.`,
    createdAt: new Date().toISOString()
  };
  const entries = [entry, ...loadJournal()].slice(0, 20);
  saveJournal(entries);
  renderJournal();
  renderJourneyTimeline();
  renderResearchMemory();
  renderPrivacyControlRoom();
  toast("Decision pack saved to journal.");
}

function countBy(items, key) {
  return items.reduce((map, item) => {
    map[item[key]] = (map[item[key]] || 0) + 1;
    return map;
  }, {});
}

function formatCounts(counts) {
  return Object.entries(counts)
    .map(([key, value]) => `${key}: ${value}`)
    .join(" | ");
}

function runSip(event) {
  event.preventDefault();
  const monthly = Number(els.sipAmount.value);
  const years = Number(els.sipYears.value);
  const annualReturn = Number(els.sipReturn.value) / 100;
  const stepUp = Number(els.sipStepUp.value) / 100;
  const monthlyReturn = annualReturn / 12;
  let contribution = monthly;
  let invested = 0;
  let value = 0;

  for (let month = 1; month <= years * 12; month += 1) {
    value = (value + contribution) * (1 + monthlyReturn);
    invested += contribution;
    if (month % 12 === 0) contribution *= (1 + stepUp);
  }

  const gains = value - invested;
  renderCalculatorOutput("SIP scenario", [
    ["Estimated value", formatMoney(value)],
    ["Total invested", formatMoney(invested)],
    ["Estimated gain", formatMoney(gains)],
    ["Final monthly SIP", formatMoney(contribution)]
  ], [invested, gains]);
}

function runStp(event) {
  event.preventDefault();
  let corpus = Number(els.stpCorpus.value);
  const transfer = Number(els.stpTransfer.value);
  const months = Number(els.stpMonths.value);
  const monthlyReturn = Number(els.stpReturn.value) / 100 / 12;
  let moved = 0;

  for (let month = 1; month <= months; month += 1) {
    const amount = Math.min(transfer, corpus);
    corpus -= amount;
    moved += amount;
    corpus *= (1 + monthlyReturn);
  }

  renderCalculatorOutput("STP scenario", [
    ["Transferred to target fund", formatMoney(moved)],
    ["Remaining source corpus", formatMoney(corpus)],
    ["Months covered", `${months}`],
    ["Monthly transfer", formatMoney(transfer)]
  ], [moved, corpus]);
}

function stressScenarioConfig() {
  const fund = selectedFund();
  const corpus = clampNumber(Number(els.stressCorpus?.value || 0), 0, 100000000);
  const monthlySip = clampNumber(Number(els.stressSip?.value || 0), 0, 10000000);
  const recovery = clampNumber(Number(els.stressRecovery?.value || 0), 0, 30);
  const shockValue = els.stressShock?.value || "fund";
  const shock = shockValue === "fund" ? fund.maxDrawdown : clampNumber(Number(shockValue), 0, 80);
  const behavior = els.stressBehavior?.value || "continue";
  const behaviorLabels = {
    continue: "Continue SIP",
    pause: "Pause new SIP",
    exit: "Exit after fall"
  };

  const drop = corpus * (shock / 100);
  const afterFall = Math.max(0, corpus - drop);
  const monthlyReturn = recovery / 100 / 12;
  let value = afterFall;
  let contributions = 0;

  for (let month = 1; month <= 12; month += 1) {
    if (behavior === "continue") {
      value += monthlySip;
      contributions += monthlySip;
    }
    if (behavior !== "exit") value *= (1 + monthlyReturn);
  }

  let recoveryMonths = null;
  if (afterFall > 0 && corpus > afterFall && (monthlyReturn > 0 || (behavior === "continue" && monthlySip > 0))) {
    let simulated = afterFall;
    for (let month = 1; month <= 240; month += 1) {
      if (behavior === "continue") simulated += monthlySip;
      if (behavior !== "exit") simulated *= (1 + monthlyReturn);
      if (simulated >= corpus) {
        recoveryMonths = month;
        break;
      }
    }
  } else if (corpus <= afterFall) {
    recoveryMonths = 0;
  }

  return {
    fund,
    corpus,
    monthlySip,
    recovery,
    shock,
    shockLabel: shockValue === "fund" ? "Selected fund demo drawdown" : `${shock}% manual shock`,
    behavior,
    behaviorLabel: behaviorLabels[behavior] || "Continue SIP",
    drop,
    afterFall,
    projectedValue: value,
    contributions,
    recoveryMonths
  };
}

function stressBehaviorNote(config) {
  if (config.behavior === "continue") {
    return "Continuing SIPs can support discipline, but only if emergency money, horizon, and risk comfort are already clear.";
  }
  if (config.behavior === "pause") {
    return "Pausing new SIPs may feel safer, but it can delay recovery. Write the pause rule before stress arrives.";
  }
  return "Exiting after a fall can lock in the drawdown in this simulator. Treat this as a behavior warning, not advice.";
}

function renderStressLab(event) {
  if (event) event.preventDefault();
  if (!els.stressOutput) return;
  const config = stressScenarioConfig();
  const painLabel = config.drop > config.monthlySip * 12
    ? "High rupee pain"
    : "Manageable on paper";
  const recoveryCopy = config.recoveryMonths === null
    ? "Not recoverable under this behavior and recovery assumption."
    : config.recoveryMonths === 0
      ? "No recovery gap in this scenario."
      : `${config.recoveryMonths} month${config.recoveryMonths === 1 ? "" : "s"} to regain the starting corpus in this simulator.`;
  const oneYearGap = config.projectedValue - config.corpus;

  els.stressOutput.innerHTML = `
    <div class="stress-hero">
      <div>
        <span class="metric-label">${escapeHtml(config.shockLabel)}</span>
        <strong>${escapeHtml(config.fund.name)} stress test</strong>
        <p>What would a ${config.shock.toFixed(0)}% fall feel like on ${escapeHtml(formatMoney(config.corpus))}?</p>
      </div>
      <div class="stress-drop">
        <b>${config.shock.toFixed(0)}%</b>
        <span>shock</span>
      </div>
    </div>
    <div class="stress-metric-grid">
      <div><span>Before fall</span><strong>${escapeHtml(formatMoney(config.corpus))}</strong></div>
      <div><span>Rupee drawdown</span><strong>${escapeHtml(formatMoney(config.drop))}</strong></div>
      <div><span>After fall</span><strong>${escapeHtml(formatMoney(config.afterFall))}</strong></div>
      <div><span>12M projected</span><strong>${escapeHtml(formatMoney(config.projectedValue))}</strong></div>
    </div>
    <div class="stress-grid-two">
      <div class="detail-panel">
        <h3>Behavior posture</h3>
        <p><strong>${escapeHtml(config.behaviorLabel)}:</strong> ${escapeHtml(stressBehaviorNote(config))}</p>
        <p>Recovery assumption: ${config.recovery.toFixed(1)}% annual. New SIP added in first year: ${escapeHtml(formatMoney(config.contributions))}.</p>
      </div>
      <div class="detail-panel">
        <h3>Research checkpoint</h3>
        <ul class="stress-list">
          <li>${escapeHtml(painLabel)}: drawdown equals ${escapeHtml(formatMoney(config.drop))}.</li>
          <li>${escapeHtml(recoveryCopy)}</li>
          <li>One-year simulator gap versus starting corpus: ${escapeHtml(formatMoney(oneYearGap))}.</li>
          <li>Use this before increasing SIP, adding a high-risk fund, or writing a Decision Pack.</li>
        </ul>
      </div>
    </div>
    <p class="journey-disclaimer">Stress test is a research scenario only. It is not a prediction, recommendation, or return guarantee.</p>
  `;
}

function makeStressNote() {
  const config = stressScenarioConfig();
  const recoveryCopy = config.recoveryMonths === null
    ? "Not recoverable under selected assumptions"
    : `${config.recoveryMonths} months`;
  return [
    "# NiveshNadi Risk Stress Lab",
    `Release: ${RELEASE_LABEL} (${DATA_VERSION})`,
    `Fund: ${config.fund.name}`,
    `Scenario: ${config.shockLabel}`,
    `Starting corpus: ${formatMoney(config.corpus)}`,
    `Shock: ${config.shock.toFixed(0)}%`,
    `Rupee drawdown: ${formatMoney(config.drop)}`,
    `After fall: ${formatMoney(config.afterFall)}`,
    `Behavior: ${config.behaviorLabel}`,
    `Monthly SIP during stress: ${formatMoney(config.monthlySip)}`,
    `Recovery assumption: ${config.recovery.toFixed(1)}% annual`,
    `12M projected value: ${formatMoney(config.projectedValue)}`,
    `Recovery marker: ${recoveryCopy}`,
    "",
    "Research scenario only. This is not a prediction, recommendation, or return guarantee."
  ].join("\n");
}

function costRealityConfig() {
  const fund = selectedFund();
  const amount = clampNumber(Number(els.costAmount?.value || 0), 0, 100000000);
  const monthlySip = clampNumber(Number(els.costSip?.value || 0), 0, 10000000);
  const years = clampNumber(Number(els.costYears?.value || 1), 1, 40);
  const altExpense = clampNumber(Number(els.costAltExpense?.value || 0), 0, 5);
  const exitLoad = clampNumber(Number(els.costExitLoad?.value || 0), 0, 5);
  const tax = clampNumber(Number(els.costTax?.value || 0), 0, 50);
  const mode = els.costMode?.value || "start";
  const modeLabels = {
    start: "Start or increase SIP",
    switch: "Switch from another fund",
    review: "Review existing holding"
  };
  const currentExpense = fund.expense;
  const expenseDrag = amount * (currentExpense / 100) * years;
  const lowerCostDrag = amount * (altExpense / 100) * years;
  const expenseSavings = Math.max(0, expenseDrag - lowerCostDrag);
  const exitLoadCost = mode === "start" ? 0 : amount * (exitLoad / 100);
  const taxFriction = mode === "start" ? 0 : amount * (tax / 100);
  const oneTimeFriction = exitLoadCost + taxFriction;
  const netSwitchMath = expenseSavings - oneTimeFriction;
  const monthlySaving = Math.max(0, amount * Math.max(0, currentExpense - altExpense) / 100 / 12);
  const recoveryMonths = monthlySaving > 0 && oneTimeFriction > 0
    ? Math.ceil(oneTimeFriction / monthlySaving)
    : oneTimeFriction === 0 ? 0 : null;
  const sipAnnualDrag = monthlySip * 12 * (currentExpense / 100);
  const posture = mode === "start"
    ? (sipAnnualDrag > monthlySip ? "Cost visible" : "Cost light")
    : netSwitchMath > 0 ? "Switch math positive" : "Friction first";
  return {
    altExpense,
    amount,
    currentExpense,
    exitLoad,
    exitLoadCost,
    expenseDrag,
    expenseSavings,
    fund,
    lowerCostDrag,
    mode,
    modeLabel: modeLabels[mode] || "Start or increase SIP",
    monthlySaving,
    monthlySip,
    netSwitchMath,
    oneTimeFriction,
    posture,
    recoveryMonths,
    sipAnnualDrag,
    tax,
    taxFriction,
    years
  };
}

function costDecisionNote(config) {
  if (config.mode === "start") {
    return "For a new SIP, the main cost discipline is keeping TER, overlap, and fund role visible before adding more funds.";
  }
  if (config.netSwitchMath > 0) {
    return "Switch math is positive on these assumptions, but evidence, tax treatment, exit-load window, and role clarity still need a written reason.";
  }
  return "One-time friction is larger than estimated TER saving on these assumptions. Do not switch only because another fund looks cheaper.";
}

function recoveryCopy(config) {
  if (config.recoveryMonths === null) return "Not recoverable through TER saving alone.";
  if (config.recoveryMonths === 0) return "No one-time friction entered.";
  return `${config.recoveryMonths} month${config.recoveryMonths === 1 ? "" : "s"} to recover one-time friction through TER saving.`;
}

function renderCostRealityLab(event) {
  if (event) event.preventDefault();
  if (!els.costOutput) return;
  const config = costRealityConfig();
  const netClass = config.netSwitchMath >= 0 ? "positive" : "negative";
  els.costOutput.innerHTML = `
    <div class="cost-hero">
      <div>
        <span class="metric-label">${escapeHtml(config.posture)}</span>
        <h3>${escapeHtml(config.fund.name)} cost lens</h3>
        <p>${escapeHtml(config.modeLabel)} for ${escapeHtml(formatMoney(config.amount))} over ${config.years} year${config.years === 1 ? "" : "s"}.</p>
      </div>
      <div class="cost-badge">
        <b>${config.currentExpense.toFixed(2)}%</b>
        <span>TER</span>
      </div>
    </div>
    <div class="cost-metric-grid">
      <div><span>TER drag</span><strong>${escapeHtml(formatMoney(config.expenseDrag))}</strong></div>
      <div><span>Lower-cost saving</span><strong>${escapeHtml(formatMoney(config.expenseSavings))}</strong></div>
      <div><span>Exit load</span><strong>${escapeHtml(formatMoney(config.exitLoadCost))}</strong></div>
      <div><span>Tax friction</span><strong>${escapeHtml(formatMoney(config.taxFriction))}</strong></div>
    </div>
    <div class="cost-split-grid">
      <article class="cost-card">
        <span>Net switch math</span>
        <strong class="${netClass}">${escapeHtml(formatMoney(config.netSwitchMath))}</strong>
        <p>${escapeHtml(costDecisionNote(config))}</p>
      </article>
      <article class="cost-card">
        <span>Recovery discipline</span>
        <strong>${escapeHtml(recoveryCopy(config))}</strong>
        <p>Monthly TER saving estimate: ${escapeHtml(formatMoney(config.monthlySaving))}. New SIP annual TER drag: ${escapeHtml(formatMoney(config.sipAnnualDrag))}.</p>
      </article>
      <article class="cost-card">
        <span>Tax bucket caution</span>
        <strong>${config.tax.toFixed(1)}% assumption</strong>
        <p>Tax is user-entered friction only. This lab does not calculate tax liability or recommend switching.</p>
      </article>
    </div>
    <div class="cost-guardrail">
      <strong>Cost rule</strong>
      <p>Write the reason before switching. Check exit-load window, tax bucket, role duplication, evidence freshness, and whether the cost saving is meaningful in rupees.</p>
    </div>
  `;
}

function makeCostNote() {
  const config = costRealityConfig();
  return [
    "# NiveshNadi Cost Reality Lab",
    `Release: ${RELEASE_LABEL} (${DATA_VERSION})`,
    `Fund: ${config.fund.name}`,
    `Decision mode: ${config.modeLabel}`,
    `Amount reviewed: ${formatMoney(config.amount)}`,
    `Holding horizon: ${config.years} years`,
    `Current TER: ${config.currentExpense.toFixed(2)}%`,
    `Alternative TER assumption: ${config.altExpense.toFixed(2)}%`,
    `Estimated TER drag: ${formatMoney(config.expenseDrag)}`,
    `Estimated lower-cost saving: ${formatMoney(config.expenseSavings)}`,
    `Exit load assumption: ${config.exitLoad.toFixed(1)}% (${formatMoney(config.exitLoadCost)})`,
    `Tax friction assumption: ${config.tax.toFixed(1)}% (${formatMoney(config.taxFriction)})`,
    `Net switch math: ${formatMoney(config.netSwitchMath)}`,
    `Recovery marker: ${recoveryCopy(config)}`,
    "",
    "Research scenario only. This is not tax advice, investment advice, or a recommendation to switch."
  ].join("\n");
}

function readinessIntentLabel(intent) {
  const labels = {
    advisor: "Discuss with advisor",
    increase: "Increase SIP",
    start: "Start SIP",
    switch: "Switch from another fund",
    watch: "Watch only"
  };
  return labels[intent] || "Watch only";
}

function readinessChecklist(intent) {
  return [
    {
      id: "readyGoal",
      label: "Goal and time horizon are written",
      weight: 10,
      critical: true,
      checked: Boolean(els.readyGoal?.checked)
    },
    {
      id: "readyRisk",
      label: "Stress scenario has been reviewed",
      weight: 9,
      critical: ["start", "increase", "switch"].includes(intent),
      checked: Boolean(els.readyRisk?.checked)
    },
    {
      id: "readyCost",
      label: "Cost, exit load, and tax friction checked",
      weight: 8,
      critical: intent === "switch",
      checked: Boolean(els.readyCost?.checked)
    },
    {
      id: "readyEvidence",
      label: "Evidence/source freshness checked",
      weight: 10,
      critical: ["start", "increase", "switch"].includes(intent),
      checked: Boolean(els.readyEvidence?.checked)
    },
    {
      id: "readyOverlap",
      label: "X-Ray overlap checked",
      weight: 7,
      critical: ["increase", "switch"].includes(intent),
      checked: Boolean(els.readyOverlap?.checked)
    },
    {
      id: "readyEmergency",
      label: "Emergency money is separate",
      weight: 6,
      critical: ["start", "increase"].includes(intent),
      checked: Boolean(els.readyEmergency?.checked)
    },
    {
      id: "readyReason",
      label: "Reason written in own words",
      weight: 10,
      critical: ["start", "increase", "switch", "advisor"].includes(intent),
      checked: Boolean(els.readyReason?.checked)
    }
  ];
}

function readinessConfig() {
  const fund = selectedFund();
  const intent = els.readinessIntent?.value || "watch";
  const amount = clampNumber(Number(els.readinessAmount?.value || 0), 0, 10000000);
  const reviewDate = els.readinessReviewDate?.value || "Not set";
  const items = readinessChecklist(intent);
  const checkedItems = items.filter((item) => item.checked);
  const blockers = items.filter((item) => !item.checked);
  const criticalMisses = blockers.filter((item) => item.critical);
  const checklistScore = checkedItems.reduce((sum, item) => sum + item.weight, 0);
  const compareBonus = state.compare.size >= 2 ? 4 : 0;
  const amountSignal = amount > 0 ? 3 : -4;
  const evidenceScore = evidenceReadinessScore(fund);
  const score = Math.round(clampNumber(
    nadiScore(fund) * 0.22 + evidenceScore * 0.18 + checklistScore + compareBonus + amountSignal,
    30,
    96
  ));
  let posture = "Needs review";
  let postureClass = "medium";
  let nextStep = "Complete the missing checks, then build or update the decision pack.";
  if (criticalMisses.length) {
    posture = "Wait for evidence";
    postureClass = "low";
    nextStep = `Resolve critical gaps first: ${criticalMisses.map((item) => item.label).join("; ")}.`;
  } else if (score >= 82 && blockers.length <= 1) {
    posture = "Memo ready";
    postureClass = "high";
    nextStep = "Write the decision reason, save the memo, and set the next review date before acting.";
  } else if (score < 62) {
    posture = "Pause";
    postureClass = "low";
    nextStep = "Keep this as research-only until the goal, risk, evidence, cost, and written reason are complete.";
  }
  return {
    amount,
    blockers,
    checkedItems,
    criticalMisses,
    evidenceScore,
    fund,
    intent,
    intentLabel: readinessIntentLabel(intent),
    items,
    nextStep,
    posture,
    postureClass,
    reviewDate,
    score
  };
}

function renderInvestorReadinessGate(event) {
  if (event) event.preventDefault();
  if (!els.readinessOutput) return;
  const config = readinessConfig();
  const blockerCopy = config.blockers.length
    ? config.blockers.map((item) => `<li>${escapeHtml(item.label)}</li>`).join("")
    : "<li>No major research gaps selected in this gate.</li>";
  const completedCopy = config.checkedItems.length
    ? config.checkedItems.map((item) => `<li>${escapeHtml(item.label)}</li>`).join("")
    : "<li>No readiness checks completed yet.</li>";
  const criticalCopy = config.criticalMisses.length
    ? config.criticalMisses.map((item) => `<li>${escapeHtml(item.label)}</li>`).join("")
    : "<li>No critical blocker for the selected action.</li>";
  els.readinessOutput.innerHTML = `
    <div class="readiness-hero ${escapeHtml(config.postureClass)}">
      <div>
        <span class="metric-label">${escapeHtml(config.posture)}</span>
        <h3>${escapeHtml(config.fund.name)} readiness memo</h3>
        <p>${escapeHtml(config.intentLabel)} gate for ${escapeHtml(formatMoney(config.amount))}. Review date: ${escapeHtml(config.reviewDate)}.</p>
      </div>
      <div class="readiness-score" style="--score: ${config.score}">
        <b>${config.score}</b>
      </div>
    </div>
    <div class="readiness-metric-grid">
      <div><span>Nadi score</span><strong>${nadiScore(config.fund)}/100</strong></div>
      <div><span>Evidence readiness</span><strong>${config.evidenceScore}/100</strong></div>
      <div><span>Checklist</span><strong>${config.checkedItems.length} of ${config.items.length}</strong></div>
      <div><span>Blockers</span><strong>${config.criticalMisses.length} critical</strong></div>
    </div>
    <div class="readiness-card-grid">
      <article class="readiness-card">
        <span>Completed</span>
        <ul class="readiness-list">${completedCopy}</ul>
      </article>
      <article class="readiness-card">
        <span>Open checks</span>
        <ul class="readiness-list">${blockerCopy}</ul>
      </article>
      <article class="readiness-card">
        <span>Critical blockers</span>
        <ul class="readiness-list">${criticalCopy}</ul>
      </article>
    </div>
    <div class="readiness-guardrail">
      <strong>Next step</strong>
      <p>${escapeHtml(config.nextStep)}</p>
      <p>This is a research gate only. It does not approve, recommend, execute, or guarantee any investment action.</p>
    </div>
  `;
}

function makeReadinessNote() {
  const config = readinessConfig();
  const blockers = config.blockers.length
    ? config.blockers.map((item) => `- ${item.label}`).join("\n")
    : "- No major research gaps selected in this gate.";
  const critical = config.criticalMisses.length
    ? config.criticalMisses.map((item) => `- ${item.label}`).join("\n")
    : "- No critical blocker for the selected action.";
  return [
    "# NiveshNadi Investor Readiness Gate",
    `Release: ${RELEASE_LABEL} (${DATA_VERSION})`,
    `Fund: ${config.fund.name}`,
    `Action considered: ${config.intentLabel}`,
    `Amount reviewed: ${formatMoney(config.amount)}`,
    `Review date: ${config.reviewDate}`,
    `Readiness posture: ${config.posture}`,
    `Readiness score: ${config.score}/100`,
    `Nadi score: ${nadiScore(config.fund)}/100`,
    `Evidence readiness: ${config.evidenceScore}/100`,
    "",
    "Open checks:",
    blockers,
    "",
    "Critical blockers:",
    critical,
    "",
    `Next step: ${config.nextStep}`,
    "",
    "Research gate only. This is not investment advice, a recommendation, execution approval, or a return guarantee."
  ].join("\n");
}

function renderCalculatorOutput(title, rows, bars) {
  const total = bars.reduce((sum, value) => sum + value, 0) || 1;
  els.calculatorOutput.innerHTML = `
    <div class="result-stack">
      <h3>${escapeHtml(title)}</h3>
      ${rows.map(([label, value]) => `
        <div class="result-row">
          <span>${escapeHtml(label)}</span>
          <strong>${escapeHtml(value)}</strong>
        </div>
      `).join("")}
      <div class="bar-chart" aria-label="Scenario composition">
        ${bars.map((value) => `
          <div class="bar"><span style="width: ${Math.max(3, (value / total) * 100).toFixed(1)}%"></span></div>
        `).join("")}
      </div>
      <p class="score-copy">Projection only. Actual returns may be higher or lower and are not guaranteed.</p>
    </div>
  `;
}

function renderGoalFitCompass(event) {
  if (event) event.preventDefault();
  if (!els.goalFitOutput) return;
  const config = readGoalFitConfig();
  const map = buildGoalResearchMap(config);
  const projection = calculateSipFutureValue(config.sip, config.years, map.assumption);
  const matchingFunds = FUNDS.filter((fund) => map.demoCategories.includes(fund.category))
    .sort((a, b) => nadiScore(b) - nadiScore(a))
    .slice(0, 5);

  els.goalFitOutput.innerHTML = `
    <div class="fit-hero">
      <div>
        <span>Research posture</span>
        <strong>${escapeHtml(map.posture)}</strong>
        <p>${escapeHtml(map.summary)}</p>
      </div>
      <div class="fit-score" style="--score: ${map.clarityScore}">
        <b>${map.clarityScore}</b>
      </div>
    </div>
    <div class="fit-card-grid">
      <article class="fit-card">
        <span>Research first</span>
        <strong>${escapeHtml(map.categories.join(" | "))}</strong>
        <p>${escapeHtml(map.categoryReason)}</p>
      </article>
      <article class="fit-card">
        <span>SIP discipline</span>
        <strong>${formatMoney(projection.value)}</strong>
        <p>${formatMoney(config.sip)} monthly for ${config.years} years at ${map.assumption.toFixed(1)}% demo return.</p>
      </article>
      <article class="fit-card">
        <span>Decision guardrail</span>
        <strong>${escapeHtml(map.guardrail)}</strong>
        <p>This is category research guidance, not a personalized fund recommendation.</p>
      </article>
    </div>
    <div class="fit-card">
      <span>Watch-outs</span>
      <ul class="fit-list">
        ${map.watchouts.map((item) => `<li>${escapeHtml(item)}</li>`).join("")}
      </ul>
    </div>
    <div class="fit-fund-grid">
      ${matchingFunds.length ? matchingFunds.map((fund) => `
        <article class="fit-fund-card">
          <span>${escapeHtml(fund.category)}</span>
          <strong>${escapeHtml(fund.name)}</strong>
          <p>${escapeHtml(fund.role)}</p>
          <button class="text-button" type="button" data-select-fund="${escapeHtml(fund.id)}">Inspect fund</button>
        </article>
      `).join("") : `
        <article class="fit-fund-card">
          <span>Planned data</span>
          <strong>No demo fund in this category yet</strong>
          <p>Add live AMFI and AMC category coverage before using this path in production.</p>
        </article>
      `}
    </div>
  `;
}

function readGoalFitConfig() {
  return {
    type: els.goalType?.value || "wealth",
    years: clampNumber(Number(els.goalYears?.value || 7), 1, 40),
    risk: els.goalRisk?.value || "balanced",
    sip: clampNumber(Number(els.goalSip?.value || 15000), 500, 10000000)
  };
}

function buildGoalResearchMap(config) {
  let categories = [];
  let posture = "Balanced core research";
  let categoryReason = "Start with diversified categories before selecting individual schemes.";
  let guardrail = "Avoid chasing one-year rankers";
  let assumption = 9;
  let clarityScore = 78;
  const watchouts = [
    "Check expense ratio, rolling return consistency, drawdown, and benchmark fit.",
    "Avoid adding another fund if it duplicates your existing core holdings."
  ];

  if (config.type === "emergency" || config.years <= 1) {
    categories = ["Liquid Fund", "Corporate Bond Fund"];
    posture = "Capital parking research";
    categoryReason = "Near-term money should be researched for liquidity, credit quality, and low drawdown.";
    guardrail = "Do not use high-volatility equity categories for near-term cash.";
    assumption = 5.5;
    clarityScore = 90;
    watchouts.push("Check exit load, credit quality, modified duration, and portfolio concentration.");
  } else if (config.type === "income" || config.years <= 3) {
    categories = ["Corporate Bond Fund", "Liquid Fund", "Balanced Hybrid Fund"];
    posture = "Stability-first research";
    categoryReason = "Short to medium horizon research should start with debt quality and conservative hybrid exposure.";
    guardrail = "Separate income stability from long-term wealth creation.";
    assumption = 6.8;
    clarityScore = 84;
    watchouts.push("Debt funds still carry interest-rate and credit risk; inspect portfolio quality.");
  } else if (config.type === "tax") {
    categories = ["ELSS Fund", "Large Cap Fund", "Flexi Cap Fund"];
    posture = "Tax-saving research path";
    categoryReason = "Start with ELSS, then compare the equity style against large/flexi alternatives before treating tax benefit as the only reason.";
    guardrail = "Do not buy only for tax benefit; inspect lock-in and equity risk.";
    assumption = config.risk === "aggressive" ? 11 : 9.5;
    clarityScore = 76;
    watchouts.push("ELSS has a lock-in period and equity drawdown risk; compare with the full tax plan.");
  } else if (config.type === "retirement") {
    categories = config.years >= 12
      ? ["Life Cycle Fund", "Index Fund", "Large Cap Fund", "Multi Asset Allocation Fund"]
      : ["Multi Asset Allocation Fund", "Balanced Hybrid Fund", "Corporate Bond Fund"];
    posture = "Glide-path research";
    categoryReason = "Retirement planning needs a core-satellite path that gradually reduces risk as the date nears.";
    guardrail = "Review asset allocation yearly, not daily NAV movement.";
    assumption = config.years >= 12 ? 10.2 : 8;
    clarityScore = config.years >= 12 ? 86 : 80;
    watchouts.push("Rebalance path matters more than finding the most exciting fund today.");
  } else if (config.type === "education") {
    categories = config.years >= 7
      ? ["Index Fund", "Large Cap Fund", "Balanced Hybrid Fund", "Multi Asset Allocation Fund"]
      : ["Balanced Hybrid Fund", "Corporate Bond Fund", "Liquid Fund"];
    posture = "Goal-date protection path";
    categoryReason = "Education goals need growth early and capital protection as the date approaches.";
    guardrail = "Reduce equity risk as the goal date comes closer.";
    assumption = config.years >= 7 ? 9.8 : 7.2;
    clarityScore = config.years >= 7 ? 84 : 79;
    watchouts.push("Map the actual year of expense and de-risk before the money is needed.");
  } else if (config.risk === "aggressive" && config.years >= 7) {
    categories = ["Index Fund", "Large Cap Fund", "Flexi Cap Fund", "Mid Cap Fund", "Small Cap Fund"];
    posture = "Core plus satellite research";
    categoryReason = "Long horizon and high risk comfort can support equity research, with mid/small caps kept as satellites.";
    guardrail = "Keep satellites sized deliberately.";
    assumption = 11.5;
    clarityScore = 82;
    watchouts.push("Mid and small cap funds can fall sharply; inspect drawdown and fund capacity.");
  } else if (config.risk === "conservative") {
    categories = ["Balanced Hybrid Fund", "Multi Asset Allocation Fund", "Corporate Bond Fund"];
    posture = "Smoother journey research";
    categoryReason = "A conservative investor should research smoother allocation categories before pure equity exposure.";
    guardrail = "Do not stretch risk just because past returns look high.";
    assumption = 7.5;
    clarityScore = 81;
    watchouts.push("Check whether the fund's equity allocation is acceptable before starting SIP.");
  } else {
    categories = ["Index Fund", "Large Cap Fund", "Flexi Cap Fund", "Multi Asset Allocation Fund"];
    posture = "Balanced equity research";
    categoryReason = "A balanced long-term path can start with low-cost core exposure and one flexible growth sleeve.";
    guardrail = "Build the core before adding niche themes.";
    assumption = 9.8;
    clarityScore = 83;
    watchouts.push("Compare active funds against index alternatives after cost and consistency.");
  }

  if (config.risk === "aggressive" && config.years < 5) {
    watchouts.push("Aggressive risk comfort does not remove time-horizon risk.");
    clarityScore -= 6;
  }
  if (config.sip < 2000) {
    watchouts.push("Keep the fund count low when the monthly SIP is small.");
  }

  const demoCategories = categories;
  return {
    assumption,
    categories,
    categoryReason,
    clarityScore: Math.max(52, Math.min(94, clarityScore)),
    demoCategories,
    guardrail,
    posture,
    summary: `${config.years} year horizon, ${config.risk} risk comfort, ${formatMoney(config.sip)} monthly SIP capacity.`,
    watchouts
  };
}

function calculateSipFutureValue(monthly, years, annualReturn) {
  const monthlyReturn = annualReturn / 100 / 12;
  let invested = 0;
  let value = 0;
  for (let month = 1; month <= years * 12; month += 1) {
    value = (value + monthly) * (1 + monthlyReturn);
    invested += monthly;
  }
  return { invested, value, gain: value - invested };
}

function renderFirstSipCoach(event) {
  if (event) event.preventDefault();
  if (!els.journeyOutput) return;
  const config = readJourneyConfig();
  const route = buildFirstSipJourney(config);

  els.journeyOutput.innerHTML = `
    <div class="journey-hero">
      <div>
        <span>Research route</span>
        <strong>${escapeHtml(route.title)}</strong>
        <p>${escapeHtml(route.summary)}</p>
      </div>
      <div class="journey-score" style="--score: ${route.readiness}">
        <b>${route.readiness}</b>
      </div>
    </div>
    <div class="journey-stat-grid">
      <div><span>Monthly SIP</span><strong>${formatMoney(config.sip)}</strong></div>
      <div><span>Demo runway</span><strong>${formatMoney(route.projection.value)}</strong></div>
      <div><span>Research set</span><strong>${escapeHtml(route.categories.slice(0, 2).join(" | "))}</strong></div>
    </div>
    <div class="journey-steps" aria-label="First SIP research steps">
      ${route.steps.map((step, index) => `
        <article class="journey-step">
          <b>${index + 1}</b>
          <span>${escapeHtml(step.kicker)}</span>
          <strong>${escapeHtml(step.title)}</strong>
          <p>${escapeHtml(step.copy)}</p>
        </article>
      `).join("")}
    </div>
    <div class="journey-fund-grid">
      ${route.funds.map((fund) => `
        <article class="journey-fund-card">
          <span>${escapeHtml(fund.category)}</span>
          <strong>${escapeHtml(fund.name)}</strong>
          <p>${escapeHtml(fund.role)}</p>
          <button class="text-button" type="button" data-select-fund="${escapeHtml(fund.id)}">Inspect</button>
        </article>
      `).join("")}
    </div>
    <div class="journey-actions" aria-label="Journey actions">
      <button class="text-button" type="button" data-journey-action="goal-fit">Apply to Goal Fit</button>
      <button class="text-button" type="button" data-journey-action="sip-lab">Run SIP lab</button>
      <button class="text-button" type="button" data-journey-action="xray">Build X-Ray set</button>
      <button class="text-button" type="button" data-journey-action="watchlist">Watch shortlist</button>
      <button class="text-button" type="button" data-journey-action="pack">Build pack</button>
      <button class="primary-button" type="button" data-journey-action="journal">Draft journal</button>
    </div>
    <p class="journey-disclaimer">${escapeHtml(route.guardrail)} This route is research support only, not personalized investment advice.</p>
  `;
}

function readJourneyConfig() {
  return {
    intent: els.journeyIntent?.value || "first-sip",
    years: clampNumber(Number(els.journeyYears?.value || 7), 1, 40),
    risk: els.journeyRisk?.value || "balanced",
    sip: clampNumber(Number(els.journeySip?.value || 10000), 500, 10000000),
    depth: els.journeyDepth?.value || "simple"
  };
}

function buildFirstSipJourney(config) {
  const goalType = journeyGoalType(config.intent, config.years);
  const goalRisk = journeyGoalRisk(config.risk);
  const map = buildGoalResearchMap({
    type: goalType,
    years: config.years,
    risk: goalRisk,
    sip: config.sip
  });
  const projection = calculateSipFutureValue(config.sip, config.years, map.assumption);
  const limit = config.depth === "simple" ? 3 : config.depth === "deep" ? 4 : 5;
  let funds = FUNDS.filter((fund) => map.demoCategories.includes(fund.category))
    .sort((a, b) => nadiScore(b) - nadiScore(a))
    .slice(0, limit);
  if (!funds.length) {
    funds = [...FUNDS].sort((a, b) => nadiScore(b) - nadiScore(a)).slice(0, limit);
  }

  const routeCopy = journeyCopy(config.intent);
  let readiness = map.clarityScore;
  if (config.depth === "deep") readiness += 3;
  if (config.depth === "family") readiness += 5;
  if (config.sip < 2000) readiness -= 4;
  if (config.intent === "review-sip") readiness += 2;
  readiness = Math.max(55, Math.min(94, readiness));

  const steps = [
    {
      kicker: "Goal",
      title: routeCopy.stepOne,
      copy: `${config.years} year horizon with ${formatMoney(config.sip)} monthly SIP capacity.`
    },
    {
      kicker: "Category",
      title: map.categories.slice(0, 2).join(" | "),
      copy: map.categoryReason
    },
    {
      kicker: "Shortlist",
      title: config.depth === "simple" ? "Keep it tight" : "Compare evidence",
      copy: `${funds.length} demo funds are staged below for inspection before any action.`
    },
    {
      kicker: "Risk",
      title: "Check overlap first",
      copy: "Use X-Ray to avoid adding a fund that repeats the same holdings or category exposure."
    },
    {
      kicker: "Decision",
      title: "Write before investing",
      copy: "Capture reason, review trigger, and what would make you pause or change the SIP."
    }
  ];

  return {
    assumption: map.assumption,
    categories: map.categories,
    config,
    funds,
    goalRisk,
    goalType,
    guardrail: map.guardrail,
    journalDecision: routeCopy.journalDecision,
    journalNote: `${routeCopy.title}: Research ${map.categories.join(", ")}. Inspect cost, drawdown, benchmark fit, and overlap before action. Guardrail: ${map.guardrail}.`,
    projection,
    readiness,
    steps,
    summary: `${routeCopy.summary} ${map.summary}`,
    title: routeCopy.title
  };
}

function journeyGoalType(intent, years) {
  if (intent === "tax-saving") return "tax";
  if (intent === "cash-stp") return years <= 2 ? "emergency" : "income";
  if (intent === "child-goal") return "education";
  if (intent === "retirement") return "retirement";
  return "wealth";
}

function journeyGoalRisk(risk) {
  if (risk === "cautious") return "conservative";
  if (risk === "growth") return "aggressive";
  return "balanced";
}

function journeyCopy(intent) {
  const copy = {
    "first-sip": {
      title: "First SIP confidence route",
      summary: "Start with a small, inspectable research path before expanding the fund count.",
      stepOne: "Name the first goal",
      journalDecision: "Start SIP"
    },
    "review-sip": {
      title: "Existing SIP review route",
      summary: "Separate performance anxiety from real evidence before pausing, increasing, or switching.",
      stepOne: "State current concern",
      journalDecision: "Review with advisor"
    },
    "tax-saving": {
      title: "ELSS tax research route",
      summary: "Treat tax benefit as one input, then inspect lock-in, equity risk, and portfolio fit.",
      stepOne: "Check lock-in comfort",
      journalDecision: "Watch"
    },
    "cash-stp": {
      title: "Cash to market STP route",
      summary: "Keep source money stable while researching transfer discipline into the target category.",
      stepOne: "Protect source bucket",
      journalDecision: "Watch"
    },
    "child-goal": {
      title: "Education goal route",
      summary: "Balance growth and de-risking because the expense date is real and cannot be delayed.",
      stepOne: "Map expense year",
      journalDecision: "Watch"
    },
    retirement: {
      title: "Retirement glide route",
      summary: "Research a long-term allocation path that can reduce risk as retirement nears.",
      stepOne: "Define target year",
      journalDecision: "Watch"
    }
  };
  return copy[intent] || copy["first-sip"];
}

function handleJourneyAction(action) {
  const route = buildFirstSipJourney(readJourneyConfig());
  if (action === "goal-fit") {
    els.goalType.value = route.goalType;
    els.goalYears.value = route.config.years;
    els.goalRisk.value = route.goalRisk;
    els.goalSip.value = route.config.sip;
    renderGoalFitCompass();
    scrollToHash("#goal-fit");
    return;
  }

  if (action === "sip-lab") {
    els.sipAmount.value = route.config.sip;
    els.sipYears.value = route.config.years;
    els.sipReturn.value = route.assumption.toFixed(1);
    els.sipStepUp.value = route.config.depth === "family" ? 10 : 5;
    els.sipForm.dispatchEvent(new Event("submit", { bubbles: true, cancelable: true }));
    scrollToHash("#calculator");
    return;
  }

  if (action === "xray") {
    state.compare = new Set(route.funds.slice(0, 4).map((fund) => fund.id));
    state.selectedId = route.funds[0]?.id || state.selectedId;
    renderAll();
    analyzePortfolio();
    scrollToHash("#portfolio");
    return;
  }

  if (action === "watchlist") {
    route.funds.slice(0, 5).forEach((fund) => addToWatchlist(fund.id, false));
    state.selectedId = route.funds[0]?.id || state.selectedId;
    renderAll();
    scrollToHash("#watchlist");
    return;
  }

  if (action === "pack") {
    state.selectedId = route.funds[0]?.id || state.selectedId;
    els.packDecision.value = route.journalDecision;
    els.packAmount.value = route.config.sip;
    els.packReason.value = route.journalNote;
    renderAll();
    scrollToHash("#decision-pack");
    return;
  }

  if (action === "journal") {
    els.journalFund.value = `${route.title} | ${route.categories.slice(0, 3).join(", ")}`;
    els.journalDecision.value = route.journalDecision;
    els.journalReason.value = route.journalNote;
    scrollToHash("#journal");
  }
}

function clampNumber(value, min, max) {
  if (!Number.isFinite(value)) return min;
  return Math.min(max, Math.max(min, value));
}

function makeBrief() {
  const fund = selectedFund();
  const score = nadiScore(fund);
  const compareFunds = FUNDS.filter((item) => state.compare.has(item.id));
  return [
    `# NiveshNadi Research Brief - ${fund.name}`,
    "",
    `Release: ${RELEASE_LABEL} (${DATA_VERSION})`,
    `Category: ${fund.category}`,
    `Risk: ${fund.risk}`,
    `Nadi score: ${score}/100`,
    `Expense ratio: ${fund.expense.toFixed(2)}%`,
    `Role: ${fund.role}`,
    "Membership: Free research starter with planned Nadi Plus at Rs. 99/month or Rs. 999/year.",
    "",
    "## Evidence Snapshot",
    `- Style: ${fund.style}`,
    `- Benchmark: ${fund.benchmark}`,
    `- Holdings: ${fund.holdings.join(", ")}`,
    `- Sectors: ${fund.sectors.join(", ")}`,
    "",
    "## Compare Set",
    compareFunds.length ? compareFunds.map((item) => `- ${item.name} (${item.category})`).join("\n") : "- No compare set selected",
    "",
    "## Disclosure",
    "Demo data only. This is self-research support, not personalized investment advice."
  ].join("\n");
}

async function copyText(text) {
  try {
    await navigator.clipboard.writeText(text);
    toast("Copied to clipboard.");
  } catch (error) {
    const area = document.createElement("textarea");
    area.value = text;
    area.setAttribute("readonly", "");
    area.style.position = "fixed";
    area.style.left = "-999px";
    document.body.appendChild(area);
    area.select();
    document.execCommand("copy");
    area.remove();
    toast("Copied using fallback.");
  }
}

function toast(message) {
  els.selectedStatus.textContent = message;
  window.setTimeout(() => {
    const fund = selectedFund();
    els.selectedStatus.textContent = `${fund.category} | ${fund.risk} risk`;
  }, 1800);
}

function loadJournal() {
  try {
    return JSON.parse(localStorage.getItem("niveshnadi-journal") || "[]");
  } catch (error) {
    return [];
  }
}

function saveJournal(entries) {
  localStorage.setItem("niveshnadi-journal", JSON.stringify(entries));
}

function loadWatchlist() {
  try {
    return JSON.parse(localStorage.getItem("niveshnadi-watchlist") || "[]");
  } catch (error) {
    return [];
  }
}

function saveWatchlist(entries) {
  localStorage.setItem("niveshnadi-watchlist", JSON.stringify(entries));
}

function loadAlerts() {
  try {
    return JSON.parse(localStorage.getItem("niveshnadi-alerts") || "[]");
  } catch (error) {
    return [];
  }
}

function saveAlerts(entries) {
  localStorage.setItem("niveshnadi-alerts", JSON.stringify(entries));
}

function loadBriefingVault() {
  try {
    return JSON.parse(localStorage.getItem("niveshnadi-briefing-vault") || "[]");
  } catch (error) {
    return [];
  }
}

function saveBriefingVault(entries) {
  localStorage.setItem("niveshnadi-briefing-vault", JSON.stringify(entries));
}

function loadReviewVault() {
  try {
    return JSON.parse(localStorage.getItem("niveshnadi-review-vault") || "[]");
  } catch (error) {
    return [];
  }
}

function saveReviewVault(entries) {
  localStorage.setItem("niveshnadi-review-vault", JSON.stringify(entries));
}

function loadReceiptVault() {
  try {
    return JSON.parse(localStorage.getItem("niveshnadi-receipt-vault") || "[]");
  } catch (error) {
    return [];
  }
}

function saveReceiptVault(entries) {
  localStorage.setItem("niveshnadi-receipt-vault", JSON.stringify(entries));
}

function loadClaimReleaseLedger() {
  try {
    return JSON.parse(localStorage.getItem("niveshnadi-claim-release-ledger") || "[]");
  } catch (error) {
    return [];
  }
}

function saveClaimReleaseLedger(entries) {
  localStorage.setItem("niveshnadi-claim-release-ledger", JSON.stringify(entries));
}

function loadInvestorRecords() {
  try {
    return JSON.parse(localStorage.getItem("niveshnadi-investor-records") || "[]");
  } catch (error) {
    return [];
  }
}

function saveInvestorRecords(entries) {
  localStorage.setItem("niveshnadi-investor-records", JSON.stringify(entries));
}

function loadResearchDossiers() {
  try {
    return JSON.parse(localStorage.getItem("niveshnadi-research-dossiers") || "[]");
  } catch (error) {
    return [];
  }
}

function saveResearchDossiers(entries) {
  localStorage.setItem("niveshnadi-research-dossiers", JSON.stringify(entries));
}

function handleJournal(event) {
  event.preventDefault();
  const entry = {
    fund: els.journalFund.value.trim(),
    decision: els.journalDecision.value,
    reason: els.journalReason.value.trim(),
    createdAt: new Date().toISOString()
  };
  const entries = [entry, ...loadJournal()].slice(0, 20);
  saveJournal(entries);
  els.journalReason.value = "";
  renderJournal();
  renderJourneyTimeline();
  renderResearchMemory();
  renderPrivacyControlRoom();
}

function bindEvents() {
  els.searchInput.addEventListener("input", (event) => {
    syncSearchInputs(event.target.value);
  });
  els.categoryFilter.addEventListener("change", (event) => {
    state.filters.category = event.target.value;
    renderFundGrid();
    renderSelectionFunnel();
    renderShortlistReasonBoard();
    renderProofGapQueue();
    renderMemoClearanceDesk();
    renderClearanceSprintBoard();
  });
  els.riskFilter.addEventListener("change", (event) => {
    state.filters.risk = event.target.value;
    renderFundGrid();
    renderSelectionFunnel();
    renderShortlistReasonBoard();
    renderProofGapQueue();
    renderMemoClearanceDesk();
    renderClearanceSprintBoard();
  });
  els.sortSelect.addEventListener("change", (event) => {
    state.filters.sort = event.target.value;
    renderFundGrid();
    renderSelectionFunnel();
    renderShortlistReasonBoard();
    renderProofGapQueue();
    renderMemoClearanceDesk();
    renderClearanceSprintBoard();
  });
  els.resetFilters.addEventListener("click", () => {
    state.filters = { search: "", category: "all", risk: "all", sort: "score" };
    if (els.floatingSearchInput) els.floatingSearchInput.value = "";
    els.searchInput.value = "";
    els.categoryFilter.value = "all";
    els.riskFilter.value = "all";
    els.sortSelect.value = "score";
    renderFundGrid();
    renderSelectionFunnel();
    renderShortlistReasonBoard();
    renderProofGapQueue();
    renderMemoClearanceDesk();
    renderClearanceSprintBoard();
  });
  els.copyBrief.addEventListener("click", () => copyText(makeBrief()));
  els.profileRoomForm?.addEventListener("submit", (event) => {
    renderProfileRoom(event);
    renderSelectionFunnel();
    renderShortlistReasonBoard();
    renderProofGapQueue();
    renderMemoClearanceDesk();
    renderClearanceSprintBoard();
    renderJourneyTimeline();
    renderStarterGuide();
    renderInvestorPassport();
    renderNadiCoach();
  });
  [
    els.profileIntent,
    els.profileHorizon,
    els.profileMonthlySip,
    els.profileDrawdown,
    els.profileEmergency,
    els.profileConfidence
  ].forEach((input) => {
    input?.addEventListener(input.tagName === "INPUT" ? "input" : "change", () => {
      renderProfileRoom();
      renderJourneyTimeline();
      renderStarterGuide();
      renderInvestorPassport();
      renderNadiCoach();
      renderSelectionFunnel();
      renderShortlistReasonBoard();
      renderProofGapQueue();
      renderMemoClearanceDesk();
      renderClearanceSprintBoard();
    });
  });
  els.applyProfileRoom?.addEventListener("click", applyProfileRoom);
  els.copyProfileRoom?.addEventListener("click", () => copyText(makeProfileRoomBrief()));
  els.openBuildNext?.addEventListener("click", openBuildNextLane);
  els.copyBuildTracker?.addEventListener("click", () => copyText(makeBuildTrackerBrief()));
  els.openDailyPriority?.addEventListener("click", openDailyPriority);
  els.copyDailyCommand?.addEventListener("click", () => copyText(makeDailyCommandBrief()));
  els.openDecisionRadarFocus?.addEventListener("click", openDecisionRadarFocus);
  els.copyDecisionRadar?.addEventListener("click", () => copyText(makeDecisionRadarBrief()));
  els.openQuestionStackFocus?.addEventListener("click", openQuestionStackFocus);
  els.copyQuestionStack?.addEventListener("click", () => copyText(makeQuestionStackBrief()));
  els.answerSheetForm?.addEventListener("submit", renderAnswerSheet);
  [
    els.answerTrust,
    els.answerFit,
    els.answerCompare,
    els.answerRisk,
    els.answerMemo,
    els.answerFollowup
  ].forEach((input) => input?.addEventListener("input", persistAnswerSheetDraft));
  els.saveAnswerSheet?.addEventListener("click", saveCurrentAnswerSheet);
  els.copyAnswerSheet?.addEventListener("click", () => copyText(makeAnswerSheetBrief()));
  els.clearAnswerSheet?.addEventListener("click", clearCurrentAnswerSheet);
  els.openConvictionGate?.addEventListener("click", openConvictionGate);
  els.copyConvictionLadder?.addEventListener("click", () => copyText(makeConvictionLadderBrief()));
  els.openSelectionBottleneck?.addEventListener("click", openSelectionBottleneck);
  els.applySelectionFunnel?.addEventListener("click", applySelectionFunnel);
  els.copySelectionFunnel?.addEventListener("click", () => copyText(makeSelectionFunnelBrief()));
  els.openShortlistGap?.addEventListener("click", openShortlistGap);
  els.applyShortlistBoard?.addEventListener("click", applyShortlistBoard);
  els.copyShortlistBoard?.addEventListener("click", () => copyText(makeShortlistReasonBoardBrief()));
  els.openProofGap?.addEventListener("click", openProofGap);
  els.copyProofGapQueue?.addEventListener("click", () => copyText(makeProofGapQueueBrief()));
  els.openMemoClearanceBlocker?.addEventListener("click", openMemoClearanceBlocker);
  els.copyMemoClearance?.addEventListener("click", () => copyText(makeMemoClearanceBrief()));
  els.openClearanceSprintMove?.addEventListener("click", openClearanceSprintMove);
  els.copyClearanceSprint?.addEventListener("click", () => copyText(makeClearanceSprintBrief()));
  els.openJourneyNext?.addEventListener("click", openNextJourneyTimelineStep);
  els.copyJourneyTimeline?.addEventListener("click", () => copyText(makeJourneyTimelineBrief()));
  els.briefingForm?.addEventListener("submit", (event) => {
    renderResearchBriefing(event);
    renderBriefingVault();
    renderResearchMemory();
    renderPrivacyControlRoom();
  });
  [els.briefingFocus, els.briefingAudience, els.briefingDepth, els.briefingPriority].forEach((input) => {
    input?.addEventListener("change", () => {
      renderResearchBriefing();
      renderBriefingVault();
      renderResearchMemory();
      renderPrivacyControlRoom();
    });
  });
  els.briefingNote?.addEventListener("input", () => {
    renderResearchBriefing();
    renderBriefingVault();
    renderResearchMemory();
    renderPrivacyControlRoom();
  });
  els.openBriefAction?.addEventListener("click", () => scrollToHash("#action-planner", "smooth", true));
  els.copyResearchBriefing?.addEventListener("click", () => copyText(makeResearchBriefingNote()));
  els.saveBriefingSnapshot?.addEventListener("click", saveCurrentBriefingSnapshot);
  els.copyBriefingVault?.addEventListener("click", () => copyText(makeBriefingVaultBrief()));
  els.clearBriefingVault?.addEventListener("click", clearBriefingVault);
  els.refreshResearchMemory?.addEventListener("click", renderResearchMemory);
  els.copyResearchMemory?.addEventListener("click", () => copyText(makeResearchMemoryBrief()));
  els.refreshPrivacyControl?.addEventListener("click", renderPrivacyControlRoom);
  els.copyPrivacyReport?.addEventListener("click", () => copyText(makePrivacyControlReport()));
  els.shareSafeForm?.addEventListener("submit", renderShareSafeExportRoom);
  [els.shareSafeAudience, els.shareSafeDepth, els.shareSafeHistory, els.shareSafeScrub].forEach((input) => {
    input?.addEventListener("change", () => {
      renderShareSafeExportRoom();
      renderConsentHandoffGate();
    });
  });
  els.refreshShareSafe?.addEventListener("click", () => {
    renderShareSafeExportRoom();
    renderConsentHandoffGate();
  });
  els.copyShareSafePack?.addEventListener("click", () => copyText(makeShareSafePack()));
  els.consentGateForm?.addEventListener("submit", renderConsentHandoffGate);
  [els.consentAudience, els.consentScope, els.consentDuration, els.consentChannel].forEach((input) => {
    input?.addEventListener("change", () => renderConsentHandoffGate());
  });
  els.refreshConsentGate?.addEventListener("click", renderConsentHandoffGate);
  els.copyConsentBrief?.addEventListener("click", () => copyText(makeConsentHandoffBrief()));
  els.openWhyCoach?.addEventListener("click", openWhyFundCoach);
  els.copyWhyLens?.addEventListener("click", () => copyText(makeWhyFundNote()));
  els.copyScoreAnatomy?.addEventListener("click", () => copyText(makeScoreAnatomyNote()));
  els.starterGuideForm?.addEventListener("submit", (event) => {
    event.preventDefault();
    applyStarterIntentToProfile();
    renderAll();
    scrollToHash("#starter-guide", "smooth", true);
  });
  els.starterIntent?.addEventListener("change", () => {
    applyStarterIntentToProfile();
    renderAll();
  });
  els.starterTime?.addEventListener("change", () => {
    renderStarterGuide();
    renderNadiCoach();
  });
  els.openStarterNext?.addEventListener("click", openNextStarterStep);
  els.copyStarterGuide?.addEventListener("click", () => copyText(makeStarterGuideNote()));
  els.resetStarterGuide?.addEventListener("click", () => {
    saveStarterGuideProgress({});
    renderStarterGuide();
    renderNadiCoach();
    renderPrivacyControlRoom();
  });
  els.investorPassportForm?.addEventListener("submit", (event) => {
    event.preventDefault();
    renderStarterGuide();
    renderInvestorPassport();
    renderNadiCoach();
  });
  [
    els.investorGoal,
    els.investorStage,
    els.investorHorizon,
    els.investorMonthlySip,
    els.investorRisk,
    els.investorEmergency,
    els.investorConfidence
  ].forEach((input) => {
    input?.addEventListener(input.tagName === "INPUT" ? "input" : "change", () => {
      renderStarterGuide();
      renderInvestorPassport();
      renderNadiCoach();
    });
  });
  els.applyInvestorPassport?.addEventListener("click", applyInvestorPassport);
  els.copyInvestorPassport?.addEventListener("click", () => copyText(makeInvestorPassportNote()));
  els.laneForm?.addEventListener("submit", (event) => {
    event.preventDefault();
    applyResearchLane();
  });
  [els.laneMode, els.laneHorizon, els.laneAmount].forEach((input) => {
    input?.addEventListener(input.tagName === "INPUT" ? "input" : "change", () => {
      renderResearchLanes();
      renderNadiCoach();
    });
  });
  els.applyLane?.addEventListener("click", applyResearchLane);
  els.copyLane?.addEventListener("click", () => copyText(makeResearchLaneNote()));
  els.copyPulse?.addEventListener("click", () => copyText(makeResearchPulseNote()));
  els.coachForm?.addEventListener("submit", (event) => {
    event.preventDefault();
    renderNadiCoach();
  });
  [els.coachQuestion, els.coachDepth].forEach((input) => {
    input?.addEventListener("change", () => renderNadiCoach());
  });
  els.openCoachAction?.addEventListener("click", () => handleCoachAction());
  els.copyCoach?.addEventListener("click", () => copyText(makeCoachNote()));
  els.passportForm?.addEventListener("submit", (event) => {
    event.preventDefault();
    renderSuitabilityPassport();
  });
  [
    els.passportHorizon,
    els.passportRisk,
    els.passportLiquidity,
    els.passportSip,
    els.passportExperience,
    els.passportEmergency
  ].forEach((input) => {
    input?.addEventListener("change", () => renderSuitabilityPassport());
  });
  els.copyPassportNote?.addEventListener("click", () => copyText(makeSuitabilityPassportNote()));
  els.inspectPassportMatch?.addEventListener("click", inspectPassportTopMatch);
  els.copyFitHeatmap?.addEventListener("click", () => copyText(makeGoalFundFitNote()));
  els.copyRedFlagNote?.addEventListener("click", () => copyText(makeRedFlagNote()));
  els.watchFlaggedFund?.addEventListener("click", addFlaggedFundToWatchlist);
  els.switchForm?.addEventListener("submit", (event) => {
    event.preventDefault();
    renderSwitchDecisionLab();
  });
  [els.switchConcern, els.switchMonths, els.switchSip, els.switchConviction, els.switchFriction].forEach((input) => {
    input?.addEventListener("change", () => renderSwitchDecisionLab());
  });
  els.copySwitchNote?.addEventListener("click", () => copyText(makeSwitchDecisionNote()));
  els.watchSwitchFund?.addEventListener("click", watchSwitchFund);
  els.addSwitchCandidates?.addEventListener("click", addSwitchCandidatesToCompare);
  els.copyPeerBench?.addEventListener("click", () => copyText(makePeerBenchmarkNote()));
  els.addPeerLeaders?.addEventListener("click", addPeerLeadersToCompare);
  els.playbookForm?.addEventListener("submit", renderCategoryPlaybook);
  [els.playbookNeed, els.playbookYears, els.playbookRisk].forEach((input) => {
    input?.addEventListener("change", () => renderCategoryPlaybook());
  });
  els.copyPlaybookNote?.addEventListener("click", () => copyText(makeCategoryPlaybookNote()));
  els.goalFitForm?.addEventListener("submit", renderGoalFitCompass);
  [els.goalType, els.goalYears, els.goalRisk, els.goalSip].forEach((input) => {
    input?.addEventListener("change", () => renderGoalFitCompass());
  });
  els.journeyForm?.addEventListener("submit", renderFirstSipCoach);
  [els.journeyIntent, els.journeyYears, els.journeyRisk, els.journeySip, els.journeyDepth].forEach((input) => {
    input?.addEventListener("change", () => renderFirstSipCoach());
  });
  els.sipForm.addEventListener("submit", runSip);
  els.stpForm.addEventListener("submit", runStp);
  els.stressForm?.addEventListener("submit", renderStressLab);
  [els.stressCorpus, els.stressSip, els.stressShock, els.stressBehavior, els.stressRecovery].forEach((input) => {
    input?.addEventListener("change", () => renderStressLab());
  });
  els.copyStress?.addEventListener("click", () => copyText(makeStressNote()));
  els.costForm?.addEventListener("submit", renderCostRealityLab);
  [els.costAmount, els.costSip, els.costYears, els.costAltExpense, els.costExitLoad, els.costTax, els.costMode].forEach((input) => {
    input?.addEventListener("change", () => renderCostRealityLab());
  });
  els.copyCostNote?.addEventListener("click", () => copyText(makeCostNote()));
  els.readinessForm?.addEventListener("submit", (event) => {
    renderInvestorReadinessGate(event);
    renderActionPlanner();
    renderResearchBriefing();
    renderBriefingVault();
    renderResearchMemory();
    renderPrivacyControlRoom();
  });
  [
    els.readinessIntent,
    els.readinessAmount,
    els.readinessReviewDate,
    els.readyGoal,
    els.readyRisk,
    els.readyCost,
    els.readyEvidence,
    els.readyOverlap,
    els.readyEmergency,
    els.readyReason
  ].forEach((input) => {
    input?.addEventListener("change", () => {
      renderInvestorReadinessGate();
      renderActionPlanner();
      renderResearchBriefing();
      renderBriefingVault();
      renderResearchMemory();
      renderPrivacyControlRoom();
    });
  });
  els.copyReadinessNote?.addEventListener("click", () => copyText(makeReadinessNote()));
  els.runXray.addEventListener("click", analyzePortfolio);
  els.blueprintForm?.addEventListener("submit", (event) => {
    renderBlueprintLab(event);
    renderRebalanceGuard();
    renderPortfolioReviewRoom();
    renderReviewVault();
    renderInvestorRecordDesk();
    renderResearchDossier();
  });
  [els.blueprintSip, els.blueprintYears, els.blueprintStyle, els.blueprintCadence].forEach((input) => {
    input?.addEventListener("change", () => {
      renderBlueprintLab();
      renderRebalanceGuard();
      renderPortfolioReviewRoom();
      renderReviewVault();
      renderInvestorRecordDesk();
      renderResearchDossier();
    });
  });
  els.blueprintWeights?.addEventListener("change", (event) => {
    const input = event.target.closest("[data-blueprint-weight]");
    if (!input) return;
    state.blueprintWeights[input.dataset.blueprintWeight] = clampNumber(Number(input.value) || 0, 0, 100);
    renderBlueprintLab();
    renderRebalanceGuard();
    renderPortfolioReviewRoom();
    renderReviewVault();
    renderInvestorRecordDesk();
    renderResearchDossier();
  });
  els.normalizeBlueprint?.addEventListener("click", normalizeBlueprintWeights);
  els.copyBlueprint?.addEventListener("click", () => copyText(makeBlueprintNote()));
  els.rebalanceForm?.addEventListener("submit", (event) => {
    renderRebalanceGuard(event);
    renderPortfolioReviewRoom();
    renderReviewVault();
    renderInvestorRecordDesk();
    renderResearchDossier();
  });
  [els.rebalanceCorpus, els.rebalanceSip, els.rebalanceTolerance, els.rebalanceMode].forEach((input) => {
    input?.addEventListener("change", () => {
      renderRebalanceGuard();
      renderPortfolioReviewRoom();
      renderReviewVault();
      renderInvestorRecordDesk();
      renderResearchDossier();
    });
  });
  els.rebalanceCurrentWeights?.addEventListener("change", (event) => {
    const input = event.target.closest("[data-rebalance-weight]");
    if (!input) return;
    state.rebalanceWeights[input.dataset.rebalanceWeight] = clampNumber(Number(input.value) || 0, 0, 100);
    renderRebalanceGuard();
    renderPortfolioReviewRoom();
    renderReviewVault();
    renderInvestorRecordDesk();
    renderResearchDossier();
  });
  els.copyRebalance?.addEventListener("click", () => copyText(makeRebalanceNote()));
  els.addRebalanceReview?.addEventListener("click", addRebalanceReviewTrigger);
  els.portfolioReviewForm?.addEventListener("submit", (event) => {
    renderPortfolioReviewRoom(event);
    renderReviewVault();
    renderInvestorRecordDesk();
    renderResearchDossier();
    renderResearchMemory();
    renderPrivacyControlRoom();
  });
  [els.portfolioReviewFocus, els.portfolioReviewDate, els.portfolioReviewConviction].forEach((input) => {
    input?.addEventListener("change", () => {
      renderPortfolioReviewRoom();
      renderReviewVault();
      renderInvestorRecordDesk();
      renderResearchDossier();
      renderResearchMemory();
      renderPrivacyControlRoom();
    });
  });
  els.portfolioReviewNote?.addEventListener("input", () => {
    renderPortfolioReviewRoom();
    renderReviewVault();
    renderInvestorRecordDesk();
    renderResearchDossier();
    renderResearchMemory();
    renderPrivacyControlRoom();
  });
  els.copyPortfolioReview?.addEventListener("click", () => copyText(makePortfolioReviewNote()));
  els.savePortfolioReview?.addEventListener("click", savePortfolioReviewTrigger);
  els.saveReviewSnapshot?.addEventListener("click", saveCurrentReviewSnapshot);
  els.copyReviewVault?.addEventListener("click", () => copyText(makeReviewVaultBrief()));
  els.clearReviewVault?.addEventListener("click", clearReviewVault);
  els.investorRecordForm?.addEventListener("submit", (event) => {
    renderInvestorRecordDesk(event);
    renderResearchDossier();
    renderResearchMemory();
    renderPrivacyControlRoom();
  });
  [els.investorRecordLabel, els.investorRecordStance, els.investorRecordAudience, els.investorRecordBoundary].forEach((input) => {
    input?.addEventListener(input.tagName === "INPUT" ? "input" : "change", () => {
      renderInvestorRecordDesk();
      renderResearchDossier();
      renderResearchMemory();
      renderPrivacyControlRoom();
    });
  });
  els.saveInvestorRecord?.addEventListener("click", saveCurrentInvestorRecord);
  els.copyInvestorRecord?.addEventListener("click", () => copyText(makeInvestorRecordBrief()));
  els.clearInvestorRecords?.addEventListener("click", clearInvestorRecords);
  els.dossierForm?.addEventListener("submit", (event) => {
    renderResearchDossier(event);
    renderResearchMemory();
    renderPrivacyControlRoom();
  });
  [els.dossierLabel, els.dossierMode, els.dossierDepth, els.dossierBoundary].forEach((input) => {
    input?.addEventListener(input.tagName === "INPUT" ? "input" : "change", () => {
      renderResearchDossier();
      renderResearchMemory();
      renderPrivacyControlRoom();
    });
  });
  els.saveDossier?.addEventListener("click", saveCurrentDossier);
  els.copyDossier?.addEventListener("click", () => copyText(makeResearchDossierBrief()));
  els.clearDossiers?.addEventListener("click", clearResearchDossiers);
  els.copyCompare?.addEventListener("click", () => copyText(makeCompareNote()));
  els.copyEvidence?.addEventListener("click", () => copyText(makeEvidenceLog()));
  els.citationForm?.addEventListener("submit", renderCitationBinder);
  [els.citationSource, els.citationMode, els.citationAge, els.citationVisibility, els.citationConfidence].forEach((input) => {
    input?.addEventListener(input === els.citationAge ? "input" : "change", () => renderCitationBinder());
  });
  els.copyCitationBinder?.addEventListener("click", () => copyText(makeCitationBinderNote()));
  els.copyHouseLens?.addEventListener("click", () => copyText(makeFundHouseLensNote()));
  els.watchHouseReview?.addEventListener("click", addFundHouseReviewTrigger);
  els.dataForm?.addEventListener("submit", (event) => {
    renderDataReadinessRoom(event);
    renderSourceQaQueue();
    renderSourceIntakeConsole();
    renderSourceDriftMonitor();
    renderClaimReleaseGate();
    renderClaimReleaseLedger();
    renderClaimRollbackConsole();
    renderCorrectionNoticeBuilder();
    renderCorrectionNoticeLedger();
    renderTrustCenter();
  });
  [els.dataSource, els.dataMode, els.dataAge, els.dataCitation].forEach((input) => {
    input?.addEventListener("change", () => {
      renderDataReadinessRoom();
      renderSourceQaQueue();
      renderSourceIntakeConsole();
      renderSourceDriftMonitor();
      renderClaimReleaseGate();
      renderClaimReleaseLedger();
      renderClaimRollbackConsole();
      renderCorrectionNoticeBuilder();
      renderCorrectionNoticeLedger();
      renderTrustCenter();
    });
  });
  els.copyDataSpec?.addEventListener("click", () => copyText(makeDataSpec()));
  els.sourceQueueForm?.addEventListener("submit", renderSourceQaQueue);
  [els.sourceQueueMode, els.sourceQueuePriority, els.sourceQueueOwner].forEach((input) => {
    input?.addEventListener("change", () => renderSourceQaQueue());
  });
  els.copySourceQueue?.addEventListener("click", () => copyText(makeSourceQaNote()));
  els.sourceIntakeForm?.addEventListener("submit", (event) => {
    renderSourceIntakeConsole(event);
    renderClaimReleaseGate();
    renderClaimReleaseLedger();
    renderClaimRollbackConsole();
    renderCorrectionNoticeBuilder();
    renderCorrectionNoticeLedger();
    renderTrustCenter();
  });
  [els.sourceIntakeSource, els.sourceIntakeChannel, els.sourceIntakeFormat, els.sourceIntakeEvidence, els.sourceIntakeAge, els.sourceIntakeScope].forEach((input) => {
    input?.addEventListener(input === els.sourceIntakeAge ? "input" : "change", () => {
      renderSourceIntakeConsole();
      renderClaimReleaseGate();
      renderClaimReleaseLedger();
      renderClaimRollbackConsole();
      renderCorrectionNoticeBuilder();
      renderCorrectionNoticeLedger();
      renderTrustCenter();
    });
  });
  els.copySourceIntake?.addEventListener("click", () => copyText(makeSourceIntakeNote()));
  els.sourceDriftForm?.addEventListener("submit", (event) => {
    renderSourceDriftMonitor(event);
    renderClaimReleaseGate();
    renderClaimReleaseLedger();
    renderClaimRollbackConsole();
    renderCorrectionNoticeBuilder();
    renderCorrectionNoticeLedger();
    renderTrustCenter();
  });
  [els.sourceDriftSource, els.sourceDriftChange, els.sourceDriftMagnitude, els.sourceDriftAge, els.sourceDriftProof, els.sourceDriftAction].forEach((input) => {
    input?.addEventListener(input === els.sourceDriftAge ? "input" : "change", () => {
      renderSourceDriftMonitor();
      renderClaimReleaseGate();
      renderClaimReleaseLedger();
      renderClaimRollbackConsole();
      renderCorrectionNoticeBuilder();
      renderCorrectionNoticeLedger();
      renderTrustCenter();
    });
  });
  els.copySourceDrift?.addEventListener("click", () => copyText(makeSourceDriftNote()));
  els.claimReleaseForm?.addEventListener("submit", (event) => {
    renderClaimReleaseGate(event);
    renderClaimReleaseLedger();
    renderClaimRollbackConsole();
    renderCorrectionNoticeBuilder();
    renderCorrectionNoticeLedger();
    renderTrustCenter();
  });
  [els.claimReleaseSource, els.claimReleaseSurface, els.claimReleaseEvidence, els.claimReleaseReviewer, els.claimReleaseScope, els.claimReleaseRollback].forEach((input) => {
    input?.addEventListener("change", () => {
      renderClaimReleaseGate();
      renderClaimReleaseLedger();
      renderClaimRollbackConsole();
      renderCorrectionNoticeBuilder();
      renderCorrectionNoticeLedger();
      renderTrustCenter();
    });
  });
  els.copyClaimRelease?.addEventListener("click", () => copyText(makeClaimReleaseNote()));
  els.saveClaimLedger?.addEventListener("click", saveCurrentClaimReleaseSnapshot);
  els.copyClaimLedger?.addEventListener("click", () => copyText(makeClaimReleaseLedgerBrief()));
  els.clearClaimLedger?.addEventListener("click", clearClaimReleaseLedger);
  els.claimRollbackForm?.addEventListener("submit", (event) => {
    renderClaimRollbackConsole(event);
    renderCorrectionNoticeBuilder();
    renderCorrectionNoticeLedger();
    renderTrustCenter();
  });
  [els.claimRollbackTrigger, els.claimRollbackSeverity, els.claimRollbackExposure, els.claimRollbackAction, els.claimRollbackNotice, els.claimRollbackOwner].forEach((input) => {
    input?.addEventListener("change", () => {
      renderClaimRollbackConsole();
      renderCorrectionNoticeBuilder();
      renderCorrectionNoticeLedger();
      renderTrustCenter();
    });
  });
  els.copyClaimRollback?.addEventListener("click", () => copyText(makeClaimRollbackNote()));
  els.correctionNoticeForm?.addEventListener("submit", (event) => {
    renderCorrectionNoticeBuilder(event);
    renderCorrectionNoticeLedger();
    renderTrustCenter();
  });
  [els.correctionNoticeAudience, els.correctionNoticeStatus, els.correctionNoticeChange, els.correctionNoticeTone, els.correctionNoticeVisibility, els.correctionNoticeOwner].forEach((input) => {
    input?.addEventListener("change", () => {
      renderCorrectionNoticeBuilder();
      renderCorrectionNoticeLedger();
      renderTrustCenter();
    });
  });
  els.saveCorrectionNotice?.addEventListener("click", saveCurrentCorrectionNotice);
  els.copyCorrectionNotice?.addEventListener("click", () => copyText(makeCorrectionNoticeBrief()));
  els.copyCorrectionLedger?.addEventListener("click", () => copyText(makeCorrectionNoticeLedgerBrief()));
  els.clearCorrectionLedger?.addEventListener("click", clearCorrectionNoticeLedger);
  els.trustCenterForm?.addEventListener("submit", (event) => {
    renderTrustCenter(event);
    renderActionPlanner();
    renderResearchBriefing();
    renderBriefingVault();
    renderResearchMemory();
    renderPrivacyControlRoom();
  });
  [els.trustCenterAudience, els.trustCenterScope, els.trustCenterMode, els.trustCenterTolerance].forEach((input) => {
    input?.addEventListener("change", () => {
      renderTrustCenter();
      renderActionPlanner();
      renderResearchBriefing();
      renderBriefingVault();
      renderResearchMemory();
      renderPrivacyControlRoom();
    });
  });
  els.copyTrustCenter?.addEventListener("click", () => copyText(makeTrustCenterBrief()));
  els.actionPlannerForm?.addEventListener("submit", (event) => {
    renderActionPlanner(event);
    renderResearchBriefing();
    renderBriefingVault();
    renderResearchMemory();
    renderPrivacyControlRoom();
  });
  [els.actionLane, els.actionCapitalMode, els.actionAmount, els.actionConviction, els.actionEvidenceMode, els.actionReviewDate].forEach((input) => {
    input?.addEventListener(input === els.actionAmount ? "input" : "change", () => {
      renderActionPlanner();
      renderResearchBriefing();
      renderBriefingVault();
      renderResearchMemory();
      renderPrivacyControlRoom();
    });
  });
  els.actionReason?.addEventListener("input", () => {
    renderActionPlanner();
    renderResearchBriefing();
    renderBriefingVault();
    renderResearchMemory();
    renderPrivacyControlRoom();
  });
  els.copyActionPlan?.addEventListener("click", () => copyText(makeActionPlannerBrief()));
  els.docForm?.addEventListener("submit", renderDocDecoder);
  [els.docFocus, els.docQuestion, els.docDepth].forEach((input) => {
    input?.addEventListener("change", () => renderDocDecoder());
  });
  els.copyDocNote?.addEventListener("click", () => copyText(makeDocDecoderNote()));
  els.glossaryForm?.addEventListener("submit", renderGlossary);
  els.glossarySearch?.addEventListener("input", () => renderGlossary());
  [els.glossaryFocus, els.glossaryLevel].forEach((input) => {
    input?.addEventListener("change", () => renderGlossary());
  });
  els.copyGlossaryNote?.addEventListener("click", () => copyText(makeGlossaryNote()));
  els.behaviorForm?.addEventListener("submit", (event) => {
    renderBehaviorGuard(event);
    renderResearchReceipt();
    renderReceiptVault();
  });
  [els.behaviorTrigger, els.behaviorAction, els.behaviorAmount, els.behaviorMood, els.behaviorWait].forEach((input) => {
    input?.addEventListener(input === els.behaviorAmount ? "input" : "change", () => {
      renderBehaviorGuard();
      renderResearchReceipt();
      renderReceiptVault();
    });
  });
  els.copyBehaviorGuard?.addEventListener("click", () => copyText(makeBehaviorGuardNote()));
  els.claimForm?.addEventListener("submit", (event) => {
    renderClaimChecker(event);
    renderResearchReceipt();
    renderReceiptVault();
  });
  els.claimPreset?.addEventListener("change", () => {
    if (els.claimText) els.claimText.value = CLAIM_PRESETS[els.claimPreset.value] || "";
    renderClaimChecker();
    renderResearchReceipt();
    renderReceiptVault();
  });
  [els.claimText, els.claimSource, els.claimIntent].forEach((input) => {
    input?.addEventListener(input === els.claimText ? "input" : "change", () => {
      renderClaimChecker();
      renderResearchReceipt();
      renderReceiptVault();
    });
  });
  els.copyClaimNote?.addEventListener("click", () => copyText(makeClaimCheckerNote()));
  els.receiptForm?.addEventListener("submit", (event) => {
    renderResearchReceipt(event);
    renderReceiptVault();
    renderJourneyTimeline();
  });
  [els.receiptMode, els.receiptDecision, els.receiptReviewDate].forEach((input) => {
    input?.addEventListener("change", () => {
      renderResearchReceipt();
      renderReceiptVault();
      renderJourneyTimeline();
    });
  });
  els.receiptNote?.addEventListener("input", () => {
    renderResearchReceipt();
    renderReceiptVault();
    renderJourneyTimeline();
  });
  els.copyReceiptNote?.addEventListener("click", () => copyText(makeResearchReceiptNote()));
  els.saveReceiptSnapshot?.addEventListener("click", saveCurrentReceiptSnapshot);
  els.copyReceiptVault?.addEventListener("click", () => copyText(makeReceiptVaultBrief()));
  els.clearReceiptVault?.addEventListener("click", clearReceiptVault);
  els.rhythmForm?.addEventListener("submit", renderReviewRhythmBoard);
  [els.rhythmFocus, els.rhythmDate, els.rhythmCadence, els.rhythmNote].forEach((input) => {
    input?.addEventListener("change", () => {
      renderReviewRhythmBoard();
      renderJourneyTimeline();
    });
  });
  els.rhythmNote?.addEventListener("input", () => {
    renderReviewRhythmBoard();
    renderJourneyTimeline();
  });
  els.copyRhythmNote?.addEventListener("click", () => copyText(makeReviewRhythmNote()));
  els.addRhythmTrigger?.addEventListener("click", addRhythmReviewTrigger);
  els.alertForm?.addEventListener("submit", handleAlertForm);
  els.alertTrigger?.addEventListener("change", () => {
    const type = ALERT_TYPES[els.alertTrigger.value] || ALERT_TYPES.review;
    els.alertLimit.value = type.defaultLimit;
    els.alertNote.placeholder = type.hint;
  });
  els.watchSelectedFund?.addEventListener("click", () => {
    addToWatchlist(state.selectedId);
    scrollToHash("#watchlist");
  });
  els.watchCompareSet?.addEventListener("click", () => {
    FUNDS.filter((fund) => state.compare.has(fund.id)).forEach((fund) => addToWatchlist(fund.id, false));
    renderResearchLanes();
    renderResearchPulse();
    renderNadiCoach();
    renderPortfolioReviewRoom();
    renderReviewVault();
    renderInvestorRecordDesk();
    renderResearchDossier();
    renderWatchlistRoom();
    renderResearchReceipt();
    renderReceiptVault();
    renderReviewRhythmBoard();
    renderJourneyTimeline();
    renderPrivacyControlRoom();
  });
  els.clearAlerts?.addEventListener("click", () => {
    saveAlerts([]);
    renderResearchLanes();
    renderResearchPulse();
    renderNadiCoach();
    renderPortfolioReviewRoom();
    renderReviewVault();
    renderInvestorRecordDesk();
    renderResearchDossier();
    renderWatchlistRoom();
    renderResearchReceipt();
    renderReceiptVault();
    renderReviewRhythmBoard();
    renderJourneyTimeline();
    renderPrivacyControlRoom();
  });
  els.packForm?.addEventListener("submit", renderDecisionPack);
  [els.packDecision, els.packAmount, els.packReviewDate, els.packConviction, els.packReason].forEach((input) => {
    input?.addEventListener("change", () => {
      renderDecisionPack();
      renderJourneyTimeline();
      renderResearchLanes();
      renderResearchPulse();
      renderNadiCoach();
    });
  });
  els.packReason?.addEventListener("input", () => {
    renderDecisionPack();
    renderJourneyTimeline();
    renderResearchLanes();
    renderResearchPulse();
    renderNadiCoach();
  });
  els.copyPack?.addEventListener("click", () => copyText(makeDecisionPackText()));
  els.savePackJournal?.addEventListener("click", saveDecisionPackToJournal);
  els.journalForm.addEventListener("submit", handleJournal);
  els.clearJournal.addEventListener("click", () => {
    saveJournal([]);
    renderJournal();
    renderJourneyTimeline();
    renderResearchMemory();
    renderPrivacyControlRoom();
  });

  document.addEventListener("click", (event) => {
    const signalRoute = event.target.closest("[data-signal-route]");
    if (!signalRoute) return;
    scrollToHash(signalRoute.dataset.signalRoute, "smooth", true);
  });

  document.addEventListener("click", (event) => {
    const buildRoute = event.target.closest("[data-build-route]");
    if (!buildRoute) return;
    scrollToHash(buildRoute.dataset.buildRoute, "smooth", true);
  });

  document.addEventListener("click", (event) => {
    const copySignal = event.target.closest("#copySignalStrip");
    if (!copySignal) return;
    copyText(makeSignalStripNote());
  });

  document.addEventListener("click", (event) => {
    const saveCorrectionPreview = event.target.closest("[data-save-correction-preview]");
    if (!saveCorrectionPreview) return;
    saveCurrentCorrectionNotice();
  });

  document.addEventListener("click", (event) => {
    const clearStore = event.target.closest("[data-privacy-clear]");
    if (!clearStore) return;
    clearPrivacyStore(clearStore.dataset.privacyClear);
  });

  document.addEventListener("click", (event) => {
    const clearAll = event.target.closest("[data-privacy-clear-all]");
    if (!clearAll) return;
    clearAllPrivacyStores();
  });

  document.addEventListener("click", (event) => {
    const routeButton = event.target.closest("[data-claim-route]");
    if (!routeButton) return;
    scrollToHash(routeButton.dataset.claimRoute, "smooth", true);
  });

  document.addEventListener("click", (event) => {
    const routeButton = event.target.closest("[data-receipt-route]");
    if (!routeButton) return;
    scrollToHash(routeButton.dataset.receiptRoute, "smooth", true);
  });

  document.addEventListener("click", (event) => {
    const routeButton = event.target.closest("[data-behavior-route]");
    if (!routeButton) return;
    scrollToHash(routeButton.dataset.behaviorRoute, "smooth", true);
  });

  document.addEventListener("click", (event) => {
    const playbookButton = event.target.closest("[data-playbook-category]");
    if (!playbookButton) return;
    applyPlaybookCategory(playbookButton.dataset.playbookCategory);
  });

  document.addEventListener("click", (event) => {
    const starterAction = event.target.closest("[data-starter-action]");
    if (!starterAction) return;
    handleStarterGuideAction(starterAction.dataset.starterAction);
  });

  document.addEventListener("click", (event) => {
    const journeyRoute = event.target.closest("[data-journey-timeline-route]");
    if (!journeyRoute) return;
    scrollToHash(journeyRoute.dataset.journeyTimelineRoute, "smooth", true);
  });

  document.addEventListener("click", (event) => {
    const dailyRoute = event.target.closest("[data-daily-route]");
    if (!dailyRoute) return;
    scrollToHash(dailyRoute.dataset.dailyRoute, "smooth", true);
  });

  document.addEventListener("click", (event) => {
    const radarRoute = event.target.closest("[data-radar-route]");
    if (!radarRoute) return;
    scrollToHash(radarRoute.dataset.radarRoute, "smooth", true);
  });

  document.addEventListener("click", (event) => {
    const questionRoute = event.target.closest("[data-question-route]");
    if (!questionRoute) return;
    scrollToHash(questionRoute.dataset.questionRoute, "smooth", true);
  });

  document.addEventListener("click", (event) => {
    const answerRoute = event.target.closest("[data-answer-route]");
    if (!answerRoute) return;
    scrollToHash(answerRoute.dataset.answerRoute, "smooth", true);
  });

  document.addEventListener("click", (event) => {
    const convictionRoute = event.target.closest("[data-conviction-route]");
    if (!convictionRoute) return;
    scrollToHash(convictionRoute.dataset.convictionRoute, "smooth", true);
  });

  document.addEventListener("click", (event) => {
    const selectionRoute = event.target.closest("[data-selection-route]");
    if (!selectionRoute) return;
    scrollToHash(selectionRoute.dataset.selectionRoute, "smooth", true);
  });

  document.addEventListener("click", (event) => {
    const shortlistRoute = event.target.closest("[data-shortlist-route]");
    if (!shortlistRoute) return;
    scrollToHash(shortlistRoute.dataset.shortlistRoute, "smooth", true);
  });

  document.addEventListener("click", (event) => {
    const proofRoute = event.target.closest("[data-proof-route]");
    if (!proofRoute) return;
    scrollToHash(proofRoute.dataset.proofRoute, "smooth", true);
  });

  document.addEventListener("click", (event) => {
    const memoRoute = event.target.closest("[data-memo-clearance-route]");
    if (!memoRoute) return;
    scrollToHash(memoRoute.dataset.memoClearanceRoute, "smooth", true);
  });

  document.addEventListener("click", (event) => {
    const sprintRoute = event.target.closest("[data-clearance-sprint-route]");
    if (!sprintRoute) return;
    scrollToHash(sprintRoute.dataset.clearanceSprintRoute, "smooth", true);
  });

  document.addEventListener("click", (event) => {
    const button = event.target.closest("[data-select-fund]");
    if (!button) return;
    state.selectedId = button.dataset.selectFund;
    renderSignalStrip();
    renderProfileRoom();
    renderSelectionFunnel();
    renderShortlistReasonBoard();
    renderProofGapQueue();
    renderMemoClearanceDesk();
    renderClearanceSprintBoard();
    renderJourneyTimeline();
    renderResearchBriefing();
    renderBriefingVault();
    renderFundGrid();
    renderStarterGuide();
    renderInvestorPassport();
    renderResearchLanes();
    renderResearchPulse();
    renderNadiCoach();
    renderFundDetail();
    renderSuitabilityPassport();
    renderGoalFundFitHeatmap();
    renderRedFlagRadar();
    renderSwitchDecisionLab();
    renderPeerBenchmarkBoard();
    renderCompareMatrix();
    renderStressLab();
    renderCostRealityLab();
    renderInvestorReadinessGate();
    renderBlueprintLab();
    renderRebalanceGuard();
    renderPortfolioReviewRoom();
    renderReviewVault();
    renderInvestorRecordDesk();
    renderResearchDossier();
    renderEvidenceLedger();
    renderCitationBinder();
    renderSourceQaQueue();
    renderSourceIntakeConsole();
    renderSourceDriftMonitor();
    renderClaimReleaseGate();
    renderClaimReleaseLedger();
    renderClaimRollbackConsole();
    renderCorrectionNoticeBuilder();
    renderCorrectionNoticeLedger();
    renderTrustCenter();
    renderActionPlanner();
    renderFundHouseLens();
    renderDocDecoder();
    renderGlossary();
    renderBehaviorGuard();
    renderClaimChecker();
    renderResearchReceipt();
    renderReceiptVault();
    renderReviewRhythmBoard();
    renderDecisionPack();
    renderShareSafeExportRoom();
    renderConsentHandoffGate();
    scrollToElement(document.querySelector(".detail-band"));
  });

  document.addEventListener("click", (event) => {
    const button = event.target.closest("[data-journey-action]");
    if (!button) return;
    handleJourneyAction(button.dataset.journeyAction);
  });

  document.addEventListener("click", (event) => {
    const button = event.target.closest("[data-pulse-action]");
    if (!button) return;
    handlePulseAction(button.dataset.pulseAction);
  });

  document.addEventListener("click", (event) => {
    const button = event.target.closest("[data-coach-route]");
    if (!button) return;
    handleCoachAction(button.dataset.coachRoute);
  });

  document.addEventListener("click", (event) => {
    const removeWatch = event.target.closest("[data-remove-watch]");
    const removeAlert = event.target.closest("[data-remove-alert]");
    if (removeWatch) {
      removeFromWatchlist(removeWatch.dataset.removeWatch);
      return;
    }
    if (removeAlert) {
      saveAlerts(loadAlerts().filter((alert) => alert.id !== removeAlert.dataset.removeAlert));
      renderResearchLanes();
      renderResearchPulse();
      renderNadiCoach();
      renderPortfolioReviewRoom();
      renderReviewVault();
      renderInvestorRecordDesk();
      renderResearchDossier();
      renderWatchlistRoom();
      renderResearchReceipt();
      renderReceiptVault();
      renderReviewRhythmBoard();
      renderJourneyTimeline();
      renderResearchMemory();
      renderPrivacyControlRoom();
    }
  });

  document.addEventListener("change", (event) => {
    const starterStep = event.target.closest("[data-starter-step]");
    if (starterStep) {
      setStarterStepProgress(starterStep.dataset.starterStep, starterStep.checked);
      return;
    }

    const compare = event.target.closest("[data-compare-fund]");
    const portfolio = event.target.closest("[data-portfolio-fund]");
    const id = compare?.dataset.compareFund || portfolio?.dataset.portfolioFund;
    if (!id) return;
    if (event.target.checked) state.compare.add(id);
    else state.compare.delete(id);
    renderSignalStrip();
    renderProfileRoom();
    renderSelectionFunnel();
    renderShortlistReasonBoard();
    renderProofGapQueue();
    renderMemoClearanceDesk();
    renderClearanceSprintBoard();
    renderJourneyTimeline();
    renderFundGrid();
    renderStarterGuide();
    renderInvestorPassport();
    renderResearchLanes();
    renderResearchPulse();
    renderNadiCoach();
    renderPortfolioChoices();
    renderFundDetail();
    renderSuitabilityPassport();
    renderGoalFundFitHeatmap();
    renderRedFlagRadar();
    renderSwitchDecisionLab();
    renderPeerBenchmarkBoard();
    renderCompareMatrix();
    analyzePortfolio();
    renderBlueprintLab();
    renderRebalanceGuard();
    renderPortfolioReviewRoom();
    renderReviewVault();
    renderInvestorRecordDesk();
    renderResearchDossier();
    renderInvestorReadinessGate();
    renderCitationBinder();
    renderSourceQaQueue();
    renderSourceIntakeConsole();
    renderSourceDriftMonitor();
    renderFundHouseLens();
    renderDocDecoder();
    renderGlossary();
    renderBehaviorGuard();
    renderClaimChecker();
    renderResearchReceipt();
    renderReceiptVault();
    renderReviewRhythmBoard();
    renderPrivacyControlRoom();
    renderDecisionPack();
    renderShareSafeExportRoom();
    renderConsentHandoffGate();
  });

  bindFloatingSearch();
  bindSectionNavigation();
  bindScrollTopButton();
}

function bindSectionNavigation() {
  document.querySelectorAll('a[href^="#"]').forEach((link) => {
    link.addEventListener("click", (event) => {
      const hash = link.getAttribute("href");
      if (!targetFromHash(hash)) return;
      event.preventDefault();
      scrollToHash(hash, "smooth", true);
    });
  });

  window.addEventListener("hashchange", () => {
    if (targetFromHash(window.location.hash)) {
      state.hashSettleUntil = Date.now() + 900;
      scrollToHash(window.location.hash, "smooth");
    }
  });
}

function bindFloatingSearch() {
  if (!els.floatingSearchToggle || !els.floatingSearchPanel || !els.floatingSearchInput) return;
  const setOpen = (isOpen) => {
    els.floatingSearchPanel.hidden = !isOpen;
    els.floatingSearchToggle.classList.toggle("is-open", isOpen);
    els.floatingSearchToggle.setAttribute("aria-expanded", isOpen ? "true" : "false");
    if (isOpen && window.innerWidth > 680) {
      els.floatingSearchInput.focus();
      els.floatingSearchInput.select();
    }
  };

  els.floatingSearchToggle.addEventListener("click", () => {
    const shouldOpen = els.floatingSearchPanel.hidden;
    setOpen(shouldOpen);
    if (shouldOpen) {
      scrollToHash("#screener");
    }
  });

  els.floatingSearchClose?.addEventListener("click", () => setOpen(false));
  els.floatingSearchInput.addEventListener("input", (event) => {
    syncSearchInputs(event.target.value);
  });
  els.floatingSearchInput.addEventListener("keydown", (event) => {
    if (event.key === "Escape") setOpen(false);
  });
  els.floatingSearchPanel.addEventListener("click", (event) => {
    if (event.target.closest("a")) setOpen(false);
  });
  document.addEventListener("keydown", (event) => {
    if (event.key === "Escape" && !els.floatingSearchPanel.hidden) setOpen(false);
    if ((event.ctrlKey || event.metaKey) && event.key.toLowerCase() === "k") {
      event.preventDefault();
      setOpen(true);
    }
  });
}

function bindScrollTopButton() {
  if (!els.scrollTopButton) return;
  const reduceMotion = window.matchMedia("(prefers-reduced-motion: reduce)");
  const updateVisibility = () => {
    const isVisible = window.scrollY > 460;
    els.scrollTopButton.classList.toggle("is-visible", isVisible);
    els.scrollTopButton.setAttribute("aria-hidden", isVisible ? "false" : "true");
    els.scrollTopButton.tabIndex = isVisible ? 0 : -1;
  };
  els.scrollTopButton.addEventListener("click", () => {
    window.scrollTo({
      top: 0,
      behavior: reduceMotion.matches ? "auto" : "smooth"
    });
  });
  window.addEventListener("scroll", updateVisibility, { passive: true });
  window.addEventListener("resize", updateVisibility);
  updateVisibility();
}

function bindWorkspaceJump() {
  if (!els.workspaceJump) return;
  let scrollFrame = 0;
  const syncFromScroll = () => {
    scrollFrame = 0;
    if (Date.now() < state.hashSettleUntil && targetFromHash(window.location.hash)) {
      updateWorkspaceNavigator(window.location.hash);
      return;
    }
    updateWorkspaceNavigator(workspaceHashFromViewport());
  };
  const queueScrollSync = () => {
    if (scrollFrame) return;
    scrollFrame = window.requestAnimationFrame(syncFromScroll);
  };
  els.workspaceJump.addEventListener("change", () => {
    const hash = els.workspaceJump.value;
    if (!hash) return;
    updateWorkspaceNavigator(hash);
    scrollToHash(hash, "smooth", true);
  });
  window.addEventListener("hashchange", () => {
    if (targetFromHash(window.location.hash)) {
      state.hashSettleUntil = Date.now() + 900;
    }
    updateWorkspaceNavigator(window.location.hash);
  });
  window.addEventListener("scroll", queueScrollSync, { passive: true });
  window.addEventListener("resize", queueScrollSync);
  updateWorkspaceNavigator(window.location.hash || "#screener");
}

function cacheElements() {
  Object.assign(els, {
    workspaceJump: qs("#workspaceJump"),
    workspaceStatus: qs("#workspaceStatus"),
    navLinks: qsa(".top-nav a[href^='#']"),
    searchInput: qs("#searchInput"),
    categoryFilter: qs("#categoryFilter"),
    riskFilter: qs("#riskFilter"),
    sortSelect: qs("#sortSelect"),
    resetFilters: qs("#resetFilters"),
    copyBrief: qs("#copyBrief"),
    nadiSignalStrip: qs("#nadiSignalStrip"),
    buildTrackerSummary: qs("#buildTrackerSummary"),
    buildTrackerOutput: qs("#buildTrackerOutput"),
    openBuildNext: qs("#openBuildNext"),
    copyBuildTracker: qs("#copyBuildTracker"),
    profileRoomForm: qs("#profileRoomForm"),
    profileIntent: qs("#profileIntent"),
    profileHorizon: qs("#profileHorizon"),
    profileMonthlySip: qs("#profileMonthlySip"),
    profileDrawdown: qs("#profileDrawdown"),
    profileEmergency: qs("#profileEmergency"),
    profileConfidence: qs("#profileConfidence"),
    profileRoomSummary: qs("#profileRoomSummary"),
    profileRoomOutput: qs("#profileRoomOutput"),
    applyProfileRoom: qs("#applyProfileRoom"),
    copyProfileRoom: qs("#copyProfileRoom"),
    dailyCommandSummary: qs("#dailyCommandSummary"),
    dailyCommandOutput: qs("#dailyCommandOutput"),
    openDailyPriority: qs("#openDailyPriority"),
    copyDailyCommand: qs("#copyDailyCommand"),
    decisionRadarSummary: qs("#decisionRadarSummary"),
    decisionRadarOutput: qs("#decisionRadarOutput"),
    openDecisionRadarFocus: qs("#openDecisionRadarFocus"),
    copyDecisionRadar: qs("#copyDecisionRadar"),
    questionStackSummary: qs("#questionStackSummary"),
    questionStackOutput: qs("#questionStackOutput"),
    openQuestionStackFocus: qs("#openQuestionStackFocus"),
    copyQuestionStack: qs("#copyQuestionStack"),
    answerSheetForm: qs("#answerSheetForm"),
    answerSheetSummary: qs("#answerSheetSummary"),
    answerSheetOutput: qs("#answerSheetOutput"),
    answerTrust: qs("#answerTrust"),
    answerFit: qs("#answerFit"),
    answerCompare: qs("#answerCompare"),
    answerRisk: qs("#answerRisk"),
    answerMemo: qs("#answerMemo"),
    answerFollowup: qs("#answerFollowup"),
    saveAnswerSheet: qs("#saveAnswerSheet"),
    copyAnswerSheet: qs("#copyAnswerSheet"),
    clearAnswerSheet: qs("#clearAnswerSheet"),
    convictionLadderSummary: qs("#convictionLadderSummary"),
    convictionLadderOutput: qs("#convictionLadderOutput"),
    openConvictionGate: qs("#openConvictionGate"),
    copyConvictionLadder: qs("#copyConvictionLadder"),
    selectionFunnelSummary: qs("#selectionFunnelSummary"),
    selectionFunnelOutput: qs("#selectionFunnelOutput"),
    openSelectionBottleneck: qs("#openSelectionBottleneck"),
    applySelectionFunnel: qs("#applySelectionFunnel"),
    copySelectionFunnel: qs("#copySelectionFunnel"),
    shortlistBoardSummary: qs("#shortlistBoardSummary"),
    shortlistBoardOutput: qs("#shortlistBoardOutput"),
    openShortlistGap: qs("#openShortlistGap"),
    applyShortlistBoard: qs("#applyShortlistBoard"),
    copyShortlistBoard: qs("#copyShortlistBoard"),
    proofGapSummary: qs("#proofGapSummary"),
    proofGapOutput: qs("#proofGapOutput"),
    openProofGap: qs("#openProofGap"),
    copyProofGapQueue: qs("#copyProofGapQueue"),
    memoClearanceSummary: qs("#memoClearanceSummary"),
    memoClearanceOutput: qs("#memoClearanceOutput"),
    openMemoClearanceBlocker: qs("#openMemoClearanceBlocker"),
    copyMemoClearance: qs("#copyMemoClearance"),
    clearanceSprintSummary: qs("#clearanceSprintSummary"),
    clearanceSprintOutput: qs("#clearanceSprintOutput"),
    openClearanceSprintMove: qs("#openClearanceSprintMove"),
    copyClearanceSprint: qs("#copyClearanceSprint"),
    journeyTimelineSummary: qs("#journeyTimelineSummary"),
    journeyTimelineOutput: qs("#journeyTimelineOutput"),
    openJourneyNext: qs("#openJourneyNext"),
    copyJourneyTimeline: qs("#copyJourneyTimeline"),
    briefingForm: qs("#briefingForm"),
    briefingFocus: qs("#briefingFocus"),
    briefingAudience: qs("#briefingAudience"),
    briefingDepth: qs("#briefingDepth"),
    briefingPriority: qs("#briefingPriority"),
    briefingNote: qs("#briefingNote"),
    briefingSummary: qs("#briefingSummary"),
    briefingOutput: qs("#briefingOutput"),
    openBriefAction: qs("#openBriefAction"),
    copyResearchBriefing: qs("#copyResearchBriefing"),
    briefingVaultSummary: qs("#briefingVaultSummary"),
    briefingVaultOutput: qs("#briefingVaultOutput"),
    saveBriefingSnapshot: qs("#saveBriefingSnapshot"),
    copyBriefingVault: qs("#copyBriefingVault"),
    clearBriefingVault: qs("#clearBriefingVault"),
    researchMemorySummary: qs("#researchMemorySummary"),
    researchMemoryOutput: qs("#researchMemoryOutput"),
    refreshResearchMemory: qs("#refreshResearchMemory"),
    copyResearchMemory: qs("#copyResearchMemory"),
    privacyControlSummary: qs("#privacyControlSummary"),
    privacyControlOutput: qs("#privacyControlOutput"),
    refreshPrivacyControl: qs("#refreshPrivacyControl"),
    copyPrivacyReport: qs("#copyPrivacyReport"),
    shareSafeForm: qs("#shareSafeForm"),
    shareSafeAudience: qs("#shareSafeAudience"),
    shareSafeDepth: qs("#shareSafeDepth"),
    shareSafeHistory: qs("#shareSafeHistory"),
    shareSafeScrub: qs("#shareSafeScrub"),
    shareSafeSummary: qs("#shareSafeSummary"),
    shareSafeOutput: qs("#shareSafeOutput"),
    refreshShareSafe: qs("#refreshShareSafe"),
    copyShareSafePack: qs("#copyShareSafePack"),
    consentGateForm: qs("#consentGateForm"),
    consentAudience: qs("#consentAudience"),
    consentScope: qs("#consentScope"),
    consentDuration: qs("#consentDuration"),
    consentChannel: qs("#consentChannel"),
    consentGateSummary: qs("#consentGateSummary"),
    consentGateOutput: qs("#consentGateOutput"),
    refreshConsentGate: qs("#refreshConsentGate"),
    copyConsentBrief: qs("#copyConsentBrief"),
    starterGuideForm: qs("#starterGuideForm"),
    starterIntent: qs("#starterIntent"),
    starterTime: qs("#starterTime"),
    starterGuideSummary: qs("#starterGuideSummary"),
    starterGuideOutput: qs("#starterGuideOutput"),
    openStarterNext: qs("#openStarterNext"),
    copyStarterGuide: qs("#copyStarterGuide"),
    resetStarterGuide: qs("#resetStarterGuide"),
    investorPassportForm: qs("#investorPassportForm"),
    investorGoal: qs("#investorGoal"),
    investorStage: qs("#investorStage"),
    investorHorizon: qs("#investorHorizon"),
    investorMonthlySip: qs("#investorMonthlySip"),
    investorRisk: qs("#investorRisk"),
    investorEmergency: qs("#investorEmergency"),
    investorConfidence: qs("#investorConfidence"),
    investorPassportSummary: qs("#investorPassportSummary"),
    investorPassportOutput: qs("#investorPassportOutput"),
    applyInvestorPassport: qs("#applyInvestorPassport"),
    copyInvestorPassport: qs("#copyInvestorPassport"),
    laneForm: qs("#laneForm"),
    laneMode: qs("#laneMode"),
    laneHorizon: qs("#laneHorizon"),
    laneAmount: qs("#laneAmount"),
    laneSummary: qs("#laneSummary"),
    laneOutput: qs("#laneOutput"),
    applyLane: qs("#applyLane"),
    copyLane: qs("#copyLane"),
    copyPulse: qs("#copyPulse"),
    pulseSummary: qs("#pulseSummary"),
    researchPulse: qs("#researchPulse"),
    coachForm: qs("#coachForm"),
    coachQuestion: qs("#coachQuestion"),
    coachDepth: qs("#coachDepth"),
    coachSummary: qs("#coachSummary"),
    coachOutput: qs("#coachOutput"),
    openCoachAction: qs("#openCoachAction"),
    copyCoach: qs("#copyCoach"),
    fundGrid: qs("#fundGrid"),
    selectedStatus: qs("#selectedStatus"),
    fundDetail: qs("#fundDetail"),
    openWhyCoach: qs("#openWhyCoach"),
    copyWhyLens: qs("#copyWhyLens"),
    copyScoreAnatomy: qs("#copyScoreAnatomy"),
    playbookForm: qs("#playbookForm"),
    playbookNeed: qs("#playbookNeed"),
    playbookYears: qs("#playbookYears"),
    playbookRisk: qs("#playbookRisk"),
    playbookOutput: qs("#playbookOutput"),
    copyPlaybookNote: qs("#copyPlaybookNote"),
    applyPlaybookPrimary: qs("#applyPlaybookPrimary"),
    passportForm: qs("#passportForm"),
    passportHorizon: qs("#passportHorizon"),
    passportRisk: qs("#passportRisk"),
    passportLiquidity: qs("#passportLiquidity"),
    passportSip: qs("#passportSip"),
    passportExperience: qs("#passportExperience"),
    passportEmergency: qs("#passportEmergency"),
    passportSummary: qs("#passportSummary"),
    passportOutput: qs("#passportOutput"),
    copyPassportNote: qs("#copyPassportNote"),
    inspectPassportMatch: qs("#inspectPassportMatch"),
    fitHeatmapSummary: qs("#fitHeatmapSummary"),
    fitHeatmapOutput: qs("#fitHeatmapOutput"),
    copyFitHeatmap: qs("#copyFitHeatmap"),
    redFlagSummary: qs("#redFlagSummary"),
    redFlagOutput: qs("#redFlagOutput"),
    watchFlaggedFund: qs("#watchFlaggedFund"),
    copyRedFlagNote: qs("#copyRedFlagNote"),
    switchForm: qs("#switchForm"),
    switchConcern: qs("#switchConcern"),
    switchMonths: qs("#switchMonths"),
    switchSip: qs("#switchSip"),
    switchConviction: qs("#switchConviction"),
    switchFriction: qs("#switchFriction"),
    switchSummary: qs("#switchSummary"),
    switchOutput: qs("#switchOutput"),
    copySwitchNote: qs("#copySwitchNote"),
    watchSwitchFund: qs("#watchSwitchFund"),
    addSwitchCandidates: qs("#addSwitchCandidates"),
    peerBenchSummary: qs("#peerBenchSummary"),
    peerBenchOutput: qs("#peerBenchOutput"),
    addPeerLeaders: qs("#addPeerLeaders"),
    copyPeerBench: qs("#copyPeerBench"),
    sipForm: qs("#sipForm"),
    sipAmount: qs("#sipAmount"),
    sipYears: qs("#sipYears"),
    sipReturn: qs("#sipReturn"),
    sipStepUp: qs("#sipStepUp"),
    stressForm: qs("#stressForm"),
    stressCorpus: qs("#stressCorpus"),
    stressSip: qs("#stressSip"),
    stressShock: qs("#stressShock"),
    stressBehavior: qs("#stressBehavior"),
    stressRecovery: qs("#stressRecovery"),
    stressOutput: qs("#stressOutput"),
    copyStress: qs("#copyStress"),
    costForm: qs("#costForm"),
    costAmount: qs("#costAmount"),
    costSip: qs("#costSip"),
    costYears: qs("#costYears"),
    costAltExpense: qs("#costAltExpense"),
    costExitLoad: qs("#costExitLoad"),
    costTax: qs("#costTax"),
    costMode: qs("#costMode"),
    costOutput: qs("#costOutput"),
    copyCostNote: qs("#copyCostNote"),
    readinessForm: qs("#readinessForm"),
    readinessIntent: qs("#readinessIntent"),
    readinessAmount: qs("#readinessAmount"),
    readinessReviewDate: qs("#readinessReviewDate"),
    readyGoal: qs("#readyGoal"),
    readyRisk: qs("#readyRisk"),
    readyCost: qs("#readyCost"),
    readyEvidence: qs("#readyEvidence"),
    readyOverlap: qs("#readyOverlap"),
    readyEmergency: qs("#readyEmergency"),
    readyReason: qs("#readyReason"),
    readinessOutput: qs("#readinessOutput"),
    copyReadinessNote: qs("#copyReadinessNote"),
    goalFitForm: qs("#goalFitForm"),
    goalType: qs("#goalType"),
    goalYears: qs("#goalYears"),
    goalRisk: qs("#goalRisk"),
    goalSip: qs("#goalSip"),
    goalFitOutput: qs("#goalFitOutput"),
    journeyForm: qs("#journeyForm"),
    journeyIntent: qs("#journeyIntent"),
    journeyYears: qs("#journeyYears"),
    journeyRisk: qs("#journeyRisk"),
    journeySip: qs("#journeySip"),
    journeyDepth: qs("#journeyDepth"),
    journeyOutput: qs("#journeyOutput"),
    stpForm: qs("#stpForm"),
    stpCorpus: qs("#stpCorpus"),
    stpTransfer: qs("#stpTransfer"),
    stpMonths: qs("#stpMonths"),
    stpReturn: qs("#stpReturn"),
    calculatorOutput: qs("#calculatorOutput"),
    portfolioChoices: qs("#portfolioChoices"),
    compareSummary: qs("#compareSummary"),
    compareMatrix: qs("#compareMatrix"),
    copyCompare: qs("#copyCompare"),
    fundCount: qs("#fundCount"),
    runXray: qs("#runXray"),
    xrayOutput: qs("#xrayOutput"),
    blueprintForm: qs("#blueprintForm"),
    blueprintSip: qs("#blueprintSip"),
    blueprintYears: qs("#blueprintYears"),
    blueprintStyle: qs("#blueprintStyle"),
    blueprintCadence: qs("#blueprintCadence"),
    blueprintWeights: qs("#blueprintWeights"),
    blueprintSummary: qs("#blueprintSummary"),
    blueprintOutput: qs("#blueprintOutput"),
    normalizeBlueprint: qs("#normalizeBlueprint"),
    copyBlueprint: qs("#copyBlueprint"),
    rebalanceForm: qs("#rebalanceForm"),
    rebalanceCorpus: qs("#rebalanceCorpus"),
    rebalanceSip: qs("#rebalanceSip"),
    rebalanceTolerance: qs("#rebalanceTolerance"),
    rebalanceMode: qs("#rebalanceMode"),
    rebalanceCurrentWeights: qs("#rebalanceCurrentWeights"),
    rebalanceSummary: qs("#rebalanceSummary"),
    rebalanceOutput: qs("#rebalanceOutput"),
    copyRebalance: qs("#copyRebalance"),
    addRebalanceReview: qs("#addRebalanceReview"),
    portfolioReviewForm: qs("#portfolioReviewForm"),
    portfolioReviewFocus: qs("#portfolioReviewFocus"),
    portfolioReviewDate: qs("#portfolioReviewDate"),
    portfolioReviewConviction: qs("#portfolioReviewConviction"),
    portfolioReviewNote: qs("#portfolioReviewNote"),
    portfolioReviewSummary: qs("#portfolioReviewSummary"),
    portfolioReviewOutput: qs("#portfolioReviewOutput"),
    copyPortfolioReview: qs("#copyPortfolioReview"),
    savePortfolioReview: qs("#savePortfolioReview"),
    reviewVaultSummary: qs("#reviewVaultSummary"),
    reviewVaultOutput: qs("#reviewVaultOutput"),
    saveReviewSnapshot: qs("#saveReviewSnapshot"),
    copyReviewVault: qs("#copyReviewVault"),
    clearReviewVault: qs("#clearReviewVault"),
    investorRecordForm: qs("#investorRecordForm"),
    investorRecordLabel: qs("#investorRecordLabel"),
    investorRecordStance: qs("#investorRecordStance"),
    investorRecordAudience: qs("#investorRecordAudience"),
    investorRecordBoundary: qs("#investorRecordBoundary"),
    investorRecordSummary: qs("#investorRecordSummary"),
    investorRecordOutput: qs("#investorRecordOutput"),
    saveInvestorRecord: qs("#saveInvestorRecord"),
    copyInvestorRecord: qs("#copyInvestorRecord"),
    clearInvestorRecords: qs("#clearInvestorRecords"),
    dossierForm: qs("#dossierForm"),
    dossierLabel: qs("#dossierLabel"),
    dossierMode: qs("#dossierMode"),
    dossierDepth: qs("#dossierDepth"),
    dossierBoundary: qs("#dossierBoundary"),
    dossierSummary: qs("#dossierSummary"),
    dossierOutput: qs("#dossierOutput"),
    saveDossier: qs("#saveDossier"),
    copyDossier: qs("#copyDossier"),
    clearDossiers: qs("#clearDossiers"),
    evidenceSummary: qs("#evidenceSummary"),
    evidenceFundSummary: qs("#evidenceFundSummary"),
    evidenceOutput: qs("#evidenceOutput"),
    copyEvidence: qs("#copyEvidence"),
    citationForm: qs("#citationForm"),
    citationSource: qs("#citationSource"),
    citationMode: qs("#citationMode"),
    citationAge: qs("#citationAge"),
    citationVisibility: qs("#citationVisibility"),
    citationConfidence: qs("#citationConfidence"),
    citationSummary: qs("#citationSummary"),
    citationOutput: qs("#citationOutput"),
    copyCitationBinder: qs("#copyCitationBinder"),
    houseSummary: qs("#houseSummary"),
    houseOutput: qs("#houseOutput"),
    copyHouseLens: qs("#copyHouseLens"),
    watchHouseReview: qs("#watchHouseReview"),
    dataForm: qs("#dataForm"),
    dataSource: qs("#dataSource"),
    dataMode: qs("#dataMode"),
    dataAge: qs("#dataAge"),
    dataCitation: qs("#dataCitation"),
    dataSummary: qs("#dataSummary"),
    dataOutput: qs("#dataOutput"),
    copyDataSpec: qs("#copyDataSpec"),
    sourceQueueForm: qs("#sourceQueueForm"),
    sourceQueueMode: qs("#sourceQueueMode"),
    sourceQueuePriority: qs("#sourceQueuePriority"),
    sourceQueueOwner: qs("#sourceQueueOwner"),
    sourceQueueSummary: qs("#sourceQueueSummary"),
    sourceQueueOutput: qs("#sourceQueueOutput"),
    copySourceQueue: qs("#copySourceQueue"),
    sourceIntakeForm: qs("#sourceIntakeForm"),
    sourceIntakeSource: qs("#sourceIntakeSource"),
    sourceIntakeChannel: qs("#sourceIntakeChannel"),
    sourceIntakeFormat: qs("#sourceIntakeFormat"),
    sourceIntakeEvidence: qs("#sourceIntakeEvidence"),
    sourceIntakeAge: qs("#sourceIntakeAge"),
    sourceIntakeScope: qs("#sourceIntakeScope"),
    sourceIntakeSummary: qs("#sourceIntakeSummary"),
    sourceIntakeOutput: qs("#sourceIntakeOutput"),
    copySourceIntake: qs("#copySourceIntake"),
    sourceDriftForm: qs("#sourceDriftForm"),
    sourceDriftSource: qs("#sourceDriftSource"),
    sourceDriftChange: qs("#sourceDriftChange"),
    sourceDriftMagnitude: qs("#sourceDriftMagnitude"),
    sourceDriftAge: qs("#sourceDriftAge"),
    sourceDriftProof: qs("#sourceDriftProof"),
    sourceDriftAction: qs("#sourceDriftAction"),
    sourceDriftSummary: qs("#sourceDriftSummary"),
    sourceDriftOutput: qs("#sourceDriftOutput"),
    copySourceDrift: qs("#copySourceDrift"),
    claimReleaseForm: qs("#claimReleaseForm"),
    claimReleaseSource: qs("#claimReleaseSource"),
    claimReleaseSurface: qs("#claimReleaseSurface"),
    claimReleaseEvidence: qs("#claimReleaseEvidence"),
    claimReleaseReviewer: qs("#claimReleaseReviewer"),
    claimReleaseScope: qs("#claimReleaseScope"),
    claimReleaseRollback: qs("#claimReleaseRollback"),
    claimReleaseSummary: qs("#claimReleaseSummary"),
    claimReleaseOutput: qs("#claimReleaseOutput"),
    copyClaimRelease: qs("#copyClaimRelease"),
    claimLedgerSummary: qs("#claimLedgerSummary"),
    claimLedgerOutput: qs("#claimLedgerOutput"),
    saveClaimLedger: qs("#saveClaimLedger"),
    copyClaimLedger: qs("#copyClaimLedger"),
    clearClaimLedger: qs("#clearClaimLedger"),
    claimRollbackForm: qs("#claimRollbackForm"),
    claimRollbackTrigger: qs("#claimRollbackTrigger"),
    claimRollbackSeverity: qs("#claimRollbackSeverity"),
    claimRollbackExposure: qs("#claimRollbackExposure"),
    claimRollbackAction: qs("#claimRollbackAction"),
    claimRollbackNotice: qs("#claimRollbackNotice"),
    claimRollbackOwner: qs("#claimRollbackOwner"),
    claimRollbackSummary: qs("#claimRollbackSummary"),
    claimRollbackOutput: qs("#claimRollbackOutput"),
    copyClaimRollback: qs("#copyClaimRollback"),
    correctionNoticeForm: qs("#correctionNoticeForm"),
    correctionNoticeAudience: qs("#correctionNoticeAudience"),
    correctionNoticeStatus: qs("#correctionNoticeStatus"),
    correctionNoticeChange: qs("#correctionNoticeChange"),
    correctionNoticeTone: qs("#correctionNoticeTone"),
    correctionNoticeVisibility: qs("#correctionNoticeVisibility"),
    correctionNoticeOwner: qs("#correctionNoticeOwner"),
    correctionNoticeSummary: qs("#correctionNoticeSummary"),
    correctionNoticeOutput: qs("#correctionNoticeOutput"),
    saveCorrectionNotice: qs("#saveCorrectionNotice"),
    copyCorrectionNotice: qs("#copyCorrectionNotice"),
    correctionLedgerSummary: qs("#correctionLedgerSummary"),
    correctionLedgerOutput: qs("#correctionLedgerOutput"),
    copyCorrectionLedger: qs("#copyCorrectionLedger"),
    clearCorrectionLedger: qs("#clearCorrectionLedger"),
    trustCenterForm: qs("#trustCenterForm"),
    trustCenterAudience: qs("#trustCenterAudience"),
    trustCenterScope: qs("#trustCenterScope"),
    trustCenterMode: qs("#trustCenterMode"),
    trustCenterTolerance: qs("#trustCenterTolerance"),
    trustCenterSummary: qs("#trustCenterSummary"),
    trustCenterOutput: qs("#trustCenterOutput"),
    copyTrustCenter: qs("#copyTrustCenter"),
    actionPlannerForm: qs("#actionPlannerForm"),
    actionLane: qs("#actionLane"),
    actionCapitalMode: qs("#actionCapitalMode"),
    actionAmount: qs("#actionAmount"),
    actionConviction: qs("#actionConviction"),
    actionEvidenceMode: qs("#actionEvidenceMode"),
    actionReviewDate: qs("#actionReviewDate"),
    actionReason: qs("#actionReason"),
    actionPlannerSummary: qs("#actionPlannerSummary"),
    actionPlannerOutput: qs("#actionPlannerOutput"),
    copyActionPlan: qs("#copyActionPlan"),
    docForm: qs("#docForm"),
    docFocus: qs("#docFocus"),
    docQuestion: qs("#docQuestion"),
    docDepth: qs("#docDepth"),
    docSummary: qs("#docSummary"),
    docOutput: qs("#docOutput"),
    copyDocNote: qs("#copyDocNote"),
    glossaryForm: qs("#glossaryForm"),
    glossarySearch: qs("#glossarySearch"),
    glossaryFocus: qs("#glossaryFocus"),
    glossaryLevel: qs("#glossaryLevel"),
    glossarySummary: qs("#glossarySummary"),
    glossaryOutput: qs("#glossaryOutput"),
    copyGlossaryNote: qs("#copyGlossaryNote"),
    behaviorForm: qs("#behaviorForm"),
    behaviorTrigger: qs("#behaviorTrigger"),
    behaviorAction: qs("#behaviorAction"),
    behaviorAmount: qs("#behaviorAmount"),
    behaviorMood: qs("#behaviorMood"),
    behaviorWait: qs("#behaviorWait"),
    behaviorSummary: qs("#behaviorSummary"),
    behaviorOutput: qs("#behaviorOutput"),
    copyBehaviorGuard: qs("#copyBehaviorGuard"),
    claimForm: qs("#claimForm"),
    claimPreset: qs("#claimPreset"),
    claimText: qs("#claimText"),
    claimSource: qs("#claimSource"),
    claimIntent: qs("#claimIntent"),
    claimSummary: qs("#claimSummary"),
    claimOutput: qs("#claimOutput"),
    copyClaimNote: qs("#copyClaimNote"),
    receiptForm: qs("#receiptForm"),
    receiptMode: qs("#receiptMode"),
    receiptDecision: qs("#receiptDecision"),
    receiptReviewDate: qs("#receiptReviewDate"),
    receiptNote: qs("#receiptNote"),
    receiptSummary: qs("#receiptSummary"),
    receiptOutput: qs("#receiptOutput"),
    copyReceiptNote: qs("#copyReceiptNote"),
    receiptVaultSummary: qs("#receiptVaultSummary"),
    receiptVaultOutput: qs("#receiptVaultOutput"),
    saveReceiptSnapshot: qs("#saveReceiptSnapshot"),
    copyReceiptVault: qs("#copyReceiptVault"),
    clearReceiptVault: qs("#clearReceiptVault"),
    rhythmForm: qs("#rhythmForm"),
    rhythmFocus: qs("#rhythmFocus"),
    rhythmDate: qs("#rhythmDate"),
    rhythmCadence: qs("#rhythmCadence"),
    rhythmNote: qs("#rhythmNote"),
    rhythmSummary: qs("#rhythmSummary"),
    rhythmOutput: qs("#rhythmOutput"),
    copyRhythmNote: qs("#copyRhythmNote"),
    addRhythmTrigger: qs("#addRhythmTrigger"),
    watchSummary: qs("#watchSummary"),
    alertForm: qs("#alertForm"),
    watchFundSelect: qs("#watchFundSelect"),
    alertTrigger: qs("#alertTrigger"),
    alertLimit: qs("#alertLimit"),
    alertNote: qs("#alertNote"),
    watchSelectedFund: qs("#watchSelectedFund"),
    watchCompareSet: qs("#watchCompareSet"),
    clearAlerts: qs("#clearAlerts"),
    watchStats: qs("#watchStats"),
    watchList: qs("#watchList"),
    packForm: qs("#packForm"),
    packDecision: qs("#packDecision"),
    packAmount: qs("#packAmount"),
    packReviewDate: qs("#packReviewDate"),
    packConviction: qs("#packConviction"),
    packReason: qs("#packReason"),
    copyPack: qs("#copyPack"),
    savePackJournal: qs("#savePackJournal"),
    packOutput: qs("#packOutput"),
    journalForm: qs("#journalForm"),
    journalFund: qs("#journalFund"),
    journalDecision: qs("#journalDecision"),
    journalReason: qs("#journalReason"),
    journalList: qs("#journalList"),
    clearJournal: qs("#clearJournal"),
    floatingSearchToggle: qs("#floatingSearchToggle"),
    floatingSearchPanel: qs("#floatingSearchPanel"),
    floatingSearchClose: qs("#floatingSearchClose"),
    floatingSearchInput: qs("#floatingSearchInput"),
    scrollTopButton: qs("#scrollTopButton")
  });
}

function init() {
  cacheElements();
  renderCategoryFilter();
  renderWatchFundSelect();
  bindWorkspaceJump();
  bindEvents();
  renderAll();
  renderGoalFitCompass();
  renderFirstSipCoach();
  renderStressLab();
  renderCostRealityLab();
  renderInvestorReadinessGate();
  renderCitationBinder();
  renderDataReadinessRoom();
  renderSourceQaQueue();
  renderSourceIntakeConsole();
  renderSourceDriftMonitor();
  renderClaimReleaseGate();
  renderClaimReleaseLedger();
  renderClaimRollbackConsole();
  renderCorrectionNoticeBuilder();
  renderCorrectionNoticeLedger();
  renderTrustCenter();
  renderActionPlanner();
  renderDocDecoder();
  renderGlossary();
  renderBehaviorGuard();
  renderClaimChecker();
  renderResearchReceipt();
  renderReceiptVault();
  renderDecisionPack();
  renderJournal();
  analyzePortfolio();
  settleHashNavigation();
}

init();
