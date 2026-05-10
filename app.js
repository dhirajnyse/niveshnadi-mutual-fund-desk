const DATA_VERSION = "20260510-01";
const RELEASE_LABEL = "NiveshNadi Phase 1 Prototype";

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

function renderFundGrid() {
  const funds = filteredFunds();
  if (!funds.length) {
    els.fundGrid.innerHTML = '<div class="no-results">No funds match this research filter. Reset filters or widen the category.</div>';
    return;
  }

  els.fundGrid.innerHTML = funds.map((fund) => {
    const score = nadiScore(fund);
    const selected = fund.id === state.selectedId ? " is-selected" : "";
    const checked = state.compare.has(fund.id) ? "checked" : "";
    const tags = [fund.sleeve, fund.category, fund.risk]
      .map((tag) => `<span class="tag ${tag === fund.risk ? riskClass(fund.risk) : ""}">${escapeHtml(tag)}</span>`)
      .join("");

    return `
      <article class="fund-card${selected}" data-fund-card="${escapeHtml(fund.id)}">
        <div>
          <div class="fund-meta">${tags}</div>
          <h3>${escapeHtml(fund.name)}</h3>
        </div>
        <div class="score-row">
          <div class="score" style="--score: ${score}"><span>${score}</span></div>
          <p class="score-copy">${escapeHtml(fund.role)}</p>
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
    state.filters.search = event.target.value;
    renderFundGrid();
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
    els.searchInput.value = "";
    els.categoryFilter.value = "all";
    els.riskFilter.value = "all";
    els.sortSelect.value = "score";
    renderFundGrid();
  });
  els.copyBrief.addEventListener("click", () => copyText(makeBrief()));
  els.sipForm.addEventListener("submit", runSip);
  els.stpForm.addEventListener("submit", runStp);
  els.runXray.addEventListener("click", analyzePortfolio);
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
    stpForm: qs("#stpForm"),
    stpCorpus: qs("#stpCorpus"),
    stpTransfer: qs("#stpTransfer"),
    stpMonths: qs("#stpMonths"),
    stpReturn: qs("#stpReturn"),
    calculatorOutput: qs("#calculatorOutput"),
    portfolioChoices: qs("#portfolioChoices"),
    runXray: qs("#runXray"),
    xrayOutput: qs("#xrayOutput"),
    journalForm: qs("#journalForm"),
    journalFund: qs("#journalFund"),
    journalDecision: qs("#journalDecision"),
    journalReason: qs("#journalReason"),
    journalList: qs("#journalList"),
    clearJournal: qs("#clearJournal")
  });
}

function init() {
  cacheElements();
  renderCategoryFilter();
  bindEvents();
  renderAll();
  renderJournal();
  analyzePortfolio();
}

init();
