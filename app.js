const DATA_VERSION = "20260510-09";
const RELEASE_LABEL = "NiveshNadi Phase 1 v7.1 Anchor Polish";

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

const state = {
  selectedId: FUNDS[0].id,
  compare: new Set(["large-core", "index-nifty"]),
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

function renderAll() {
  renderFundGrid();
  renderFundDetail();
  renderPortfolioChoices();
  renderWatchlistRoom();
  renderDecisionPack();
}

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

function analyzePortfolio() {
  const funds = FUNDS.filter((fund) => state.compare.has(fund.id));
  if (funds.length < 2) {
    els.xrayOutput.innerHTML = "<p>Choose two or more funds to inspect overlap and duplication risk.</p>";
    return;
  }

  const shared = sharedHoldings(funds);
  const categories = countBy(funds, "category");
  const sleeves = countBy(funds, "sleeve");
  const avgExpense = funds.reduce((sum, fund) => sum + fund.expense, 0) / funds.length;
  const avgScore = Math.round(funds.reduce((sum, fund) => sum + nadiScore(fund), 0) / funds.length);
  const maxRisk = funds.some((fund) => fund.risk === "Very High") ? "Very High" : funds[0].risk;
  const duplication = shared.length >= 4 ? "High" : shared.length >= 2 ? "Moderate" : "Low";

  els.xrayOutput.innerHTML = `
    <div class="result-stack">
      <div class="risk-grid">
        <div><span class="metric-label">Blended score</span><strong>${avgScore}/100</strong></div>
        <div><span class="metric-label">Blended expense</span><strong>${avgExpense.toFixed(2)}%</strong></div>
        <div><span class="metric-label">Duplication risk</span><strong>${duplication}</strong></div>
      </div>
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
        <p>${shared.length ? escapeHtml(shared.join(", ")) : "No shared holdings in this demo set."}</p>
      </div>
      <div class="detail-panel">
        <h3>Research conclusion</h3>
        <p>Highest risk band is ${escapeHtml(maxRisk)}. Check whether the portfolio has a clear core-satellite structure before adding another fund.</p>
      </div>
    </div>
  `;
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
  if (shouldRender) renderWatchlistRoom();
}

function removeFromWatchlist(fundId) {
  const watchlist = loadWatchlist().filter((entry) => entry.fundId !== fundId);
  const alerts = loadAlerts().filter((alert) => alert.fundId !== fundId);
  saveWatchlist(watchlist);
  saveAlerts(alerts);
  renderWatchlistRoom();
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
  renderWatchlistRoom();
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
    document.querySelector("#goal-fit")?.scrollIntoView({ behavior: "smooth", block: "start" });
    return;
  }

  if (action === "sip-lab") {
    els.sipAmount.value = route.config.sip;
    els.sipYears.value = route.config.years;
    els.sipReturn.value = route.assumption.toFixed(1);
    els.sipStepUp.value = route.config.depth === "family" ? 10 : 5;
    els.sipForm.dispatchEvent(new Event("submit", { bubbles: true, cancelable: true }));
    document.querySelector("#calculator")?.scrollIntoView({ behavior: "smooth", block: "start" });
    return;
  }

  if (action === "xray") {
    state.compare = new Set(route.funds.slice(0, 4).map((fund) => fund.id));
    state.selectedId = route.funds[0]?.id || state.selectedId;
    renderAll();
    analyzePortfolio();
    document.querySelector("#portfolio")?.scrollIntoView({ behavior: "smooth", block: "start" });
    return;
  }

  if (action === "watchlist") {
    route.funds.slice(0, 5).forEach((fund) => addToWatchlist(fund.id, false));
    state.selectedId = route.funds[0]?.id || state.selectedId;
    renderAll();
    document.querySelector("#watchlist")?.scrollIntoView({ behavior: "smooth", block: "start" });
    return;
  }

  if (action === "pack") {
    state.selectedId = route.funds[0]?.id || state.selectedId;
    els.packDecision.value = route.journalDecision;
    els.packAmount.value = route.config.sip;
    els.packReason.value = route.journalNote;
    renderAll();
    document.querySelector("#decision-pack")?.scrollIntoView({ behavior: "smooth", block: "start" });
    return;
  }

  if (action === "journal") {
    els.journalFund.value = `${route.title} | ${route.categories.slice(0, 3).join(", ")}`;
    els.journalDecision.value = route.journalDecision;
    els.journalReason.value = route.journalNote;
    document.querySelector("#journal")?.scrollIntoView({ behavior: "smooth", block: "start" });
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
  els.runXray.addEventListener("click", analyzePortfolio);
  els.alertForm?.addEventListener("submit", handleAlertForm);
  els.alertTrigger?.addEventListener("change", () => {
    const type = ALERT_TYPES[els.alertTrigger.value] || ALERT_TYPES.review;
    els.alertLimit.value = type.defaultLimit;
    els.alertNote.placeholder = type.hint;
  });
  els.watchSelectedFund?.addEventListener("click", () => {
    addToWatchlist(state.selectedId);
    document.querySelector("#watchlist")?.scrollIntoView({ behavior: "smooth", block: "start" });
  });
  els.watchCompareSet?.addEventListener("click", () => {
    FUNDS.filter((fund) => state.compare.has(fund.id)).forEach((fund) => addToWatchlist(fund.id, false));
    renderWatchlistRoom();
  });
  els.clearAlerts?.addEventListener("click", () => {
    saveAlerts([]);
    renderWatchlistRoom();
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
    const button = event.target.closest("[data-select-fund]");
    if (!button) return;
    state.selectedId = button.dataset.selectFund;
    renderFundGrid();
    renderFundDetail();
    document.querySelector(".detail-band").scrollIntoView({ behavior: "smooth", block: "start" });
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
      renderWatchlistRoom();
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
  });

  bindFloatingSearch();
  bindScrollTopButton();
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
      document.querySelector("#screener")?.scrollIntoView({ behavior: "smooth", block: "start" });
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
    sipForm: qs("#sipForm"),
    sipAmount: qs("#sipAmount"),
    sipYears: qs("#sipYears"),
    sipReturn: qs("#sipReturn"),
    sipStepUp: qs("#sipStepUp"),
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
    fundCount: qs("#fundCount"),
    runXray: qs("#runXray"),
    xrayOutput: qs("#xrayOutput"),
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
  renderDecisionPack();
  renderJournal();
  analyzePortfolio();
}

init();
