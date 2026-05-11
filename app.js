const DATA_VERSION = "20260511-12";
const RELEASE_LABEL = "NiveshNadi Phase 1 v30 Research Dossier Builder";

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

const state = {
  selectedId: FUNDS[0].id,
  compare: new Set(["large-core", "index-nifty"]),
  blueprintWeights: {},
  rebalanceWeights: {},
  filters: {
    search: "",
    category: "all",
    risk: "all",
    sort: "score"
  }
};

const els = {};

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

function renderFundDetail() {
  const fund = selectedFund();
  const score = nadiScore(fund);
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
  renderFundGrid();
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
  renderFundHouseLens();
  renderDataReadinessRoom();
  renderDocDecoder();
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
  requestAnimationFrame(() => scrollToHash(hash, "auto"));
  window.setTimeout(() => scrollToHash(hash, "auto"), 120);
  window.setTimeout(() => scrollToHash(hash, "auto"), 360);
}

window.addEventListener("load", settleHashNavigation);

function syncSearchInputs(value) {
  state.filters.search = value;
  els.searchInput.value = value;
  if (els.floatingSearchInput) els.floatingSearchInput.value = value;
  renderFundGrid();
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
    "## Guardrail",
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
  toast("Review snapshot saved locally.");
}

function clearReviewVault() {
  saveReviewVault([]);
  renderReviewVault();
  renderInvestorRecordDesk();
  renderResearchDossier();
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
  toast("Investor review record saved locally.");
}

function clearInvestorRecords() {
  saveInvestorRecords([]);
  renderInvestorRecordDesk();
  renderResearchDossier();
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
  toast("Research dossier saved locally.");
}

function clearResearchDossiers() {
  saveResearchDossiers([]);
  renderResearchDossier();
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
    renderPortfolioReviewRoom();
    renderReviewVault();
    renderInvestorRecordDesk();
    renderResearchDossier();
    renderWatchlistRoom();
    renderReviewRhythmBoard();
  }
}

function removeFromWatchlist(fundId) {
  const watchlist = loadWatchlist().filter((entry) => entry.fundId !== fundId);
  const alerts = loadAlerts().filter((alert) => alert.fundId !== fundId);
  saveWatchlist(watchlist);
  saveAlerts(alerts);
  renderPortfolioReviewRoom();
  renderReviewVault();
  renderInvestorRecordDesk();
  renderResearchDossier();
  renderWatchlistRoom();
  renderReviewRhythmBoard();
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
  renderPortfolioReviewRoom();
  renderReviewVault();
  renderInvestorRecordDesk();
  renderResearchDossier();
  renderWatchlistRoom();
  renderReviewRhythmBoard();
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
}

function bindEvents() {
  els.searchInput.addEventListener("input", (event) => {
    syncSearchInputs(event.target.value);
  });
  els.categoryFilter.addEventListener("change", (event) => {
    state.filters.category = event.target.value;
    renderFundGrid();
  });
  els.riskFilter.addEventListener("change", (event) => {
    state.filters.risk = event.target.value;
    renderFundGrid();
  });
  els.sortSelect.addEventListener("change", (event) => {
    state.filters.sort = event.target.value;
    renderFundGrid();
  });
  els.resetFilters.addEventListener("click", () => {
    state.filters = { search: "", category: "all", risk: "all", sort: "score" };
    if (els.floatingSearchInput) els.floatingSearchInput.value = "";
    els.searchInput.value = "";
    els.categoryFilter.value = "all";
    els.riskFilter.value = "all";
    els.sortSelect.value = "score";
    renderFundGrid();
  });
  els.copyBrief.addEventListener("click", () => copyText(makeBrief()));
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
  els.readinessForm?.addEventListener("submit", renderInvestorReadinessGate);
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
    input?.addEventListener("change", () => renderInvestorReadinessGate());
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
  });
  [els.portfolioReviewFocus, els.portfolioReviewDate, els.portfolioReviewConviction].forEach((input) => {
    input?.addEventListener("change", () => {
      renderPortfolioReviewRoom();
      renderReviewVault();
      renderInvestorRecordDesk();
      renderResearchDossier();
    });
  });
  els.portfolioReviewNote?.addEventListener("input", () => {
    renderPortfolioReviewRoom();
    renderReviewVault();
    renderInvestorRecordDesk();
    renderResearchDossier();
  });
  els.copyPortfolioReview?.addEventListener("click", () => copyText(makePortfolioReviewNote()));
  els.savePortfolioReview?.addEventListener("click", savePortfolioReviewTrigger);
  els.saveReviewSnapshot?.addEventListener("click", saveCurrentReviewSnapshot);
  els.copyReviewVault?.addEventListener("click", () => copyText(makeReviewVaultBrief()));
  els.clearReviewVault?.addEventListener("click", clearReviewVault);
  els.investorRecordForm?.addEventListener("submit", (event) => {
    renderInvestorRecordDesk(event);
    renderResearchDossier();
  });
  [els.investorRecordLabel, els.investorRecordStance, els.investorRecordAudience, els.investorRecordBoundary].forEach((input) => {
    input?.addEventListener(input.tagName === "INPUT" ? "input" : "change", () => {
      renderInvestorRecordDesk();
      renderResearchDossier();
    });
  });
  els.saveInvestorRecord?.addEventListener("click", saveCurrentInvestorRecord);
  els.copyInvestorRecord?.addEventListener("click", () => copyText(makeInvestorRecordBrief()));
  els.clearInvestorRecords?.addEventListener("click", clearInvestorRecords);
  els.dossierForm?.addEventListener("submit", renderResearchDossier);
  [els.dossierLabel, els.dossierMode, els.dossierDepth, els.dossierBoundary].forEach((input) => {
    input?.addEventListener(input.tagName === "INPUT" ? "input" : "change", () => renderResearchDossier());
  });
  els.saveDossier?.addEventListener("click", saveCurrentDossier);
  els.copyDossier?.addEventListener("click", () => copyText(makeResearchDossierBrief()));
  els.clearDossiers?.addEventListener("click", clearResearchDossiers);
  els.copyCompare?.addEventListener("click", () => copyText(makeCompareNote()));
  els.copyEvidence?.addEventListener("click", () => copyText(makeEvidenceLog()));
  els.copyHouseLens?.addEventListener("click", () => copyText(makeFundHouseLensNote()));
  els.watchHouseReview?.addEventListener("click", addFundHouseReviewTrigger);
  els.dataForm?.addEventListener("submit", renderDataReadinessRoom);
  [els.dataSource, els.dataMode, els.dataAge, els.dataCitation].forEach((input) => {
    input?.addEventListener("change", () => renderDataReadinessRoom());
  });
  els.copyDataSpec?.addEventListener("click", () => copyText(makeDataSpec()));
  els.docForm?.addEventListener("submit", renderDocDecoder);
  [els.docFocus, els.docQuestion, els.docDepth].forEach((input) => {
    input?.addEventListener("change", () => renderDocDecoder());
  });
  els.copyDocNote?.addEventListener("click", () => copyText(makeDocDecoderNote()));
  els.rhythmForm?.addEventListener("submit", renderReviewRhythmBoard);
  [els.rhythmFocus, els.rhythmDate, els.rhythmCadence, els.rhythmNote].forEach((input) => {
    input?.addEventListener("change", () => renderReviewRhythmBoard());
  });
  els.rhythmNote?.addEventListener("input", () => renderReviewRhythmBoard());
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
    renderPortfolioReviewRoom();
    renderReviewVault();
    renderInvestorRecordDesk();
    renderResearchDossier();
    renderWatchlistRoom();
    renderReviewRhythmBoard();
  });
  els.clearAlerts?.addEventListener("click", () => {
    saveAlerts([]);
    renderPortfolioReviewRoom();
    renderReviewVault();
    renderInvestorRecordDesk();
    renderResearchDossier();
    renderWatchlistRoom();
    renderReviewRhythmBoard();
  });
  els.packForm?.addEventListener("submit", renderDecisionPack);
  [els.packDecision, els.packAmount, els.packReviewDate, els.packConviction, els.packReason].forEach((input) => {
    input?.addEventListener("change", () => renderDecisionPack());
  });
  els.packReason?.addEventListener("input", () => renderDecisionPack());
  els.copyPack?.addEventListener("click", () => copyText(makeDecisionPackText()));
  els.savePackJournal?.addEventListener("click", saveDecisionPackToJournal);
  els.journalForm.addEventListener("submit", handleJournal);
  els.clearJournal.addEventListener("click", () => {
    saveJournal([]);
    renderJournal();
  });

  document.addEventListener("click", (event) => {
    const playbookButton = event.target.closest("[data-playbook-category]");
    if (!playbookButton) return;
    applyPlaybookCategory(playbookButton.dataset.playbookCategory);
  });

  document.addEventListener("click", (event) => {
    const button = event.target.closest("[data-select-fund]");
    if (!button) return;
    state.selectedId = button.dataset.selectFund;
    renderFundGrid();
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
    renderFundHouseLens();
    renderDocDecoder();
    renderReviewRhythmBoard();
    renderDecisionPack();
    scrollToElement(document.querySelector(".detail-band"));
  });

  document.addEventListener("click", (event) => {
    const button = event.target.closest("[data-journey-action]");
    if (!button) return;
    handleJourneyAction(button.dataset.journeyAction);
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
      renderPortfolioReviewRoom();
      renderReviewVault();
      renderInvestorRecordDesk();
      renderResearchDossier();
      renderWatchlistRoom();
      renderReviewRhythmBoard();
    }
  });

  document.addEventListener("change", (event) => {
    const compare = event.target.closest("[data-compare-fund]");
    const portfolio = event.target.closest("[data-portfolio-fund]");
    const id = compare?.dataset.compareFund || portfolio?.dataset.portfolioFund;
    if (!id) return;
    if (event.target.checked) state.compare.add(id);
    else state.compare.delete(id);
    renderFundGrid();
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
    renderFundHouseLens();
    renderDocDecoder();
    renderReviewRhythmBoard();
    renderDecisionPack();
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

function cacheElements() {
  Object.assign(els, {
    searchInput: qs("#searchInput"),
    categoryFilter: qs("#categoryFilter"),
    riskFilter: qs("#riskFilter"),
    sortSelect: qs("#sortSelect"),
    resetFilters: qs("#resetFilters"),
    copyBrief: qs("#copyBrief"),
    fundGrid: qs("#fundGrid"),
    selectedStatus: qs("#selectedStatus"),
    fundDetail: qs("#fundDetail"),
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
    docForm: qs("#docForm"),
    docFocus: qs("#docFocus"),
    docQuestion: qs("#docQuestion"),
    docDepth: qs("#docDepth"),
    docSummary: qs("#docSummary"),
    docOutput: qs("#docOutput"),
    copyDocNote: qs("#copyDocNote"),
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
  bindEvents();
  renderAll();
  renderGoalFitCompass();
  renderFirstSipCoach();
  renderStressLab();
  renderCostRealityLab();
  renderInvestorReadinessGate();
  renderDataReadinessRoom();
  renderDocDecoder();
  renderDecisionPack();
  renderJournal();
  analyzePortfolio();
  settleHashNavigation();
}

init();
