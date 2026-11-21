// --- SAFE SUPABASE INITIALIZATION ---
let supabaseClient = null;
try {
    const SUPABASE_URL = 'https://apuzvlsktobobdgdufbc.supabase.co'; 
    const SUPABASE_ANON_KEY = 'sb_publishable_4TDrYZIO3UmK5EVNqgpBOw_nv2KUaQf';
    
    if (typeof window.supabase !== 'undefined') {
        supabaseClient = window.supabase.createClient(SUPABASE_URL, SUPABASE_ANON_KEY);
        console.log("Supabase connected safely.");
    } else {
        console.warn("Supabase script not loaded. Using local fallback data.");
    }
} catch (e) {
    console.error("Supabase failed to initialize:", e);
}

try {
    Chart.register(ChartDataLabels);
} catch (e) { console.warn("Chart.js missing"); }

// --- FULL LOCAL FALLBACK DATA ---
const STOCKS = [
    { symbol: "ACCESS", name: "Access Bank Botswana Limited", type: "Domestic Equity", price: 2.15, divYield: 0.028, divAmount: 0.059, divDate: "2025-04-22", exDate: "2026-11-12", recordDate: "2026-11-14", payDate: "2026-11-28", payMonth: 10 },
    { symbol: "ABSA", name: "ABSA Bank of Botswana Limited", type: "Domestic Equity", price: 6.85, divYield: 0.074, divAmount: 0.5774, divDate: "2026-06-29", exDate: "2026-10-14", recordDate: "2026-10-16", payDate: "2026-10-28", payMonth: 9 },
    { symbol: "BIHL", name: "Botswana Insurance Holdings Limited", type: "Domestic Equity", price: 23.76, divYield: 0.060, divAmount: 1.4256, divDate: "2025-10-21", exDate: "2026-10-05", recordDate: "2026-10-07", payDate: "2026-10-21", payMonth: 9 },
    { symbol: "BTCL", name: "Botswana Telecommunications Corp", type: "Domestic Equity", price: 1.46, divYield: 0.043, divAmount: 0.0112, divDate: "2026-08-05", exDate: "2026-10-01", recordDate: "2026-10-03", payDate: "2026-10-15", payMonth: 9 },
    { symbol: "CHOBE", name: "Chobe Holdings Limited", type: "Domestic Equity", price: 18.70, divYield: 0.055, divAmount: 1.0285, divDate: "2025-06-24", exDate: "2026-06-10", recordDate: "2026-06-12", payDate: "2026-06-24", payMonth: 5 },
    { symbol: "CHOPPIES", name: "Choppies Enterprises Limited", type: "Domestic Equity", price: 0.55, divYield: 0.016, divAmount: 0.009, divDate: "2026-04-29", exDate: "2026-10-28", recordDate: "2026-10-30", payDate: "2026-11-12", payMonth: 10 },
    { symbol: "CRESTA", name: "Cresta Marakanelo Limited", type: "Domestic Equity", price: 1.25, divYield: 0.040, divAmount: 0.0500, divDate: "2025-06-05", exDate: "2026-05-20", recordDate: "2026-05-22", payDate: "2026-06-05", payMonth: 5 },
    { symbol: "ENGEN", name: "Engen Botswana Limited", type: "Domestic Equity", price: 14.25, divYield: 0.009, divAmount: 0.0171, divDate: "2025-09-17", exDate: "2026-10-20", recordDate: "2026-10-22", payDate: "2026-11-05", payMonth: 10 },
    { symbol: "FNBB", name: "First National Bank of Botswana", type: "Domestic Equity", price: 5.75, divYield: 0.057, divAmount: 0.150, divDate: "2026-03-19", exDate: "2026-10-08", recordDate: "2026-10-10", payDate: "2026-10-31", payMonth: 9 },
    { symbol: "FPC", name: "The Far Property Company Limited", type: "Domestic Equity", price: 2.40, divYield: 0.070, divAmount: 0.1680, divDate: "2025-07-31", exDate: "2026-07-15", recordDate: "2026-07-17", payDate: "2026-07-31", payMonth: 6 },
    { symbol: "G4S", name: "G4S Botswana Limited", type: "Domestic Equity", price: 2.95, divYield: 0.050, divAmount: 0.1475, divDate: "2025-06-15", exDate: "2026-06-01", recordDate: "2026-06-03", payDate: "2026-06-15", payMonth: 5 },
    { symbol: "LETLOLE", name: "Letlole La Rona Limited", type: "Domestic Equity", price: 3.10, divYield: 0.014, divAmount: 0.0044, divDate: "2026-03-27", exDate: "2026-11-04", recordDate: "2026-11-06", payDate: "2026-11-20", payMonth: 10 },
    { symbol: "LETSHEGO", name: "Letshego Holdings Limited", type: "Domestic Equity", price: 0.83, divYield: 0.050, divAmount: 0.0675, divDate: "2025-05-22", exDate: "2026-04-30", recordDate: "2026-05-02", payDate: "2026-05-22", payMonth: 4 },
    { symbol: "MINERGY", name: "Minergy Limited", type: "Domestic Equity", price: 0.45, divYield: 0.000, divAmount: 0, divDate: "-", exDate: "-", recordDate: "-", payDate: "-", payMonth: -1 },
    { symbol: "NAP", name: "New African Properties Limited", type: "Domestic Equity", price: 4.06, divYield: 0.082, divAmount: 0.3332, divDate: "2025-10-08", exDate: "2026-06-18", recordDate: "2026-06-20", payDate: "2026-07-08", payMonth: 6 },
    { symbol: "OLYMPIA", name: "Olympia Capital Corporation Ltd", type: "Domestic Equity", price: 0.40, divYield: 0.000, divAmount: 0, divDate: "-", exDate: "-", recordDate: "-", payDate: "-", payMonth: -1 },
    { symbol: "PRIMETIME", name: "PrimeTime Property Holdings Ltd", type: "Domestic Equity", price: 1.90, divYield: 0.014, divAmount: 0.0267, divDate: "2025-04-25", exDate: "2026-03-12", recordDate: "2026-03-14", payDate: "2026-03-28", payMonth: 2 },
    { symbol: "RDCP", name: "RDC Properties Limited", type: "Domestic Equity", price: 2.30, divYield: 0.038, divAmount: 0.04448, divDate: "2025-10-30", exDate: "2026-10-22", recordDate: "2026-10-24", payDate: "2026-11-08", payMonth: 10 },
    { symbol: "SECHABA", name: "Sechaba Brewery Holdings Limited", type: "Domestic Equity", price: 40.50, divYield: 0.074, divAmount: 2.9906, divDate: "2026-06-26", exDate: "2026-09-16", recordDate: "2026-09-18", payDate: "2026-09-30", payMonth: 8 },
    { symbol: "SEEDCO", name: "Seedco International Limited", type: "Domestic Equity", price: 3.20, divYield: 0.035, divAmount: 0.1120, divDate: "2025-08-20", exDate: "2026-08-05", recordDate: "2026-08-07", payDate: "2026-08-20", payMonth: 7 },
    { symbol: "SEFALANA", name: "Sefalana Holding Company Limited", type: "Domestic Equity", price: 16.00, divYield: 0.031, divAmount: 0.50, divDate: "2025-10-09", exDate: "2026-08-26", recordDate: "2026-08-28", payDate: "2026-09-11", payMonth: 8 },
    { symbol: "STANCHART", name: "Standard Chartered Bank Botswana", type: "Domestic Equity", price: 3.10, divYield: 0.060, divAmount: 0.1860, divDate: "2025-07-25", exDate: "2026-07-10", recordDate: "2026-07-12", payDate: "2026-07-25", payMonth: 6 },
    { symbol: "TURNSTAR", name: "Turnstar Holdings Limited", type: "Domestic Equity", price: 2.06, divYield: 0.034, divAmount: 0.10, divDate: "2026-05-28", exDate: "2026-11-18", recordDate: "2026-11-20", payDate: "2026-12-04", payMonth: 11 },
    { symbol: "ANGLO", name: "Anglo American Plc", type: "Foreign Equity", price: 769.95, divYield: 0.035, divAmount: 26.9483, divDate: "2025-09-10", exDate: "2026-08-18", recordDate: "2026-08-20", payDate: "2026-09-10", payMonth: 8 },
    { symbol: "BOTALA", name: "Botala Energy Limited", type: "Foreign Equity", price: 0.95, divYield: 0.000, divAmount: 0, divDate: "-", exDate: "-", recordDate: "-", payDate: "-", payMonth: -1 },
    { symbol: "BMIN-EQO", name: "Botswana Minerals Plc", type: "Foreign Equity", price: 1.10, divYield: 0.000, divAmount: 0, divDate: "-", exDate: "-", recordDate: "-", payDate: "-", payMonth: -1 },
    { symbol: "CA SALES", name: "CA Sales Holdings Limited", type: "Foreign Equity", price: 6.80, divYield: 0.040, divAmount: 0.2720, divDate: "2025-09-21", exDate: "2026-09-05", recordDate: "2026-09-07", payDate: "2026-09-21", payMonth: 8 },
    { symbol: "GAIA", name: "GAIA Renewables 1 Limited", type: "Foreign Equity", price: 5.10, divYield: 0.065, divAmount: 0.3315, divDate: "2025-07-28", exDate: "2026-07-12", recordDate: "2026-07-14", payDate: "2026-07-28", payMonth: 6 },
    { symbol: "INVESTEC", name: "Investec Limited", type: "Foreign Equity", price: 82.50, divYield: 0.050, divAmount: 4.1250, divDate: "2025-07-02", exDate: "2026-06-15", recordDate: "2026-06-17", payDate: "2026-07-02", payMonth: 6 },
    { symbol: "LUC", name: "Lucara Diamond Corp", type: "Foreign Equity", price: 1.70, divYield: 0.000, divAmount: 0, divDate: "-", exDate: "-", recordDate: "-", payDate: "-", payMonth: -1 },
    { symbol: "SHUMBA", name: "Shumba Energy Limited", type: "Foreign Equity", price: 0.81, divYield: 0.000, divAmount: 0, divDate: "-", exDate: "-", recordDate: "-", payDate: "-", payMonth: -1 },
    { symbol: "TLOU", name: "Tlou Energy Limited", type: "Foreign Equity", price: 0.50, divYield: 0.000, divAmount: 0, divDate: "-", exDate: "-", recordDate: "-", payDate: "-", payMonth: -1 },
    { symbol: "ADFB", name: "ADBFUND", type: "ETF", price: 102.53, divYield: 0.070, divAmount: 7.1771, divDate: "2025-07-24", exDate: "2026-07-08", recordDate: "2026-07-10", payDate: "2026-07-24", payMonth: 6 },
    { symbol: "NEWGOLD", name: "NewGold ETF", type: "ETF", price: 507.74, divYield: 0.000, divAmount: 0, divDate: "-", exDate: "-", recordDate: "-", payDate: "-", payMonth: -1 },
    { symbol: "NEWPALLADIUM", name: "NewPalladium ETF", type: "ETF", price: 179.77, divYield: 0.000, divAmount: 0, divDate: "-", exDate: "-", recordDate: "-", payDate: "-", payMonth: -1 },
    { symbol: "NEWPLATINUM", name: "NewPlatinum ETF", type: "ETF", price: 145.20, divYield: 0.000, divAmount: 0, divDate: "-", exDate: "-", recordDate: "-", payDate: "-", payMonth: -1 },
    { symbol: "SATRIX500", name: "SATRIX500 ETF", type: "ETF", price: 112.40, divYield: 0.012, divAmount: 1.3488, divDate: "2025-07-20", exDate: "2026-07-05", recordDate: "2026-07-07", payDate: "2026-07-20", payMonth: 6 },
    { symbol: "SATRIXEMG", name: "SATRIXEMG ETF", type: "ETF", price: 48.60, divYield: 0.020, divAmount: 0.9720, divDate: "2025-07-20", exDate: "2026-07-05", recordDate: "2026-07-07", payDate: "2026-07-20", payMonth: 6 },
    { symbol: "SATRIXWDM", name: "SATRIXWDM ETF", type: "ETF", price: 85.30, divYield: 0.015, divAmount: 1.2795, divDate: "2025-07-20", exDate: "2026-07-05", recordDate: "2026-07-07", payDate: "2026-07-20", payMonth: 6 },
    { symbol: "VGE-ETF", name: "VGEPFAM ETF", type: "ETF", price: 32.10, divYield: 0.018, divAmount: 0.5778, divDate: "2025-07-20", exDate: "2026-07-05", recordDate: "2026-07-07", payDate: "2026-07-20", payMonth: 6 }
];

let activeNews = [
    { symbol: "STANBIC", title: "Stanbic Bank Botswana Opens Landmark IPO", date: "2026-11-02", summary: "Stanbic Africa Holdings offers 319,362,050 shares (20% of capital). Offer closes Nov 27, 2026; listing Dec 7, 2026.", link: "#" },
    { symbol: "BoB", title: "Bank of Botswana Maintains MoPR at 5.5%", date: "2026-11-01", summary: "Central bank maintains key policy rate citing balanced inflation and steady growth.", link: "#" },
    { symbol: "FNBB", title: "FNBB AGM Notice & Corporate Update", date: "2026-10-31", summary: "First National Bank Botswana releases AGM notice and financial updates.", link: "#" }
];

const PALETTES = {
    vivid: ['#ff5722', '#2196f3', '#9c27b0', '#4caf50', '#ffeb3b', '#e91e63', '#00bcd4', '#ff9800', '#8bc34a', '#795548'],
    pastel: ['#ffab91', '#90caf9', '#ce93d8', '#a5d6a7', '#fff59d', '#f48fb1', '#80deea', '#ffcc80', '#c5e1a5', '#bcaaa4'],
    neon: ['#ff007f', '#00ffff', '#39ff14', '#ffbf00', '#bf00ff', '#ff073a', '#00ffcc', '#ffdf00', '#7df9ff', '#faed27'],
    earth: ['#c85a17', '#2e8b57', '#d4af37', '#4682b4', '#8b4513', '#556b2f', '#bc8f8f', '#20b2aa', '#9acd32', '#cd853f'],
    'cb-safe': ['#3b82f6', '#f97316', '#10b981', '#8b5cf6', '#ec4899', '#14b8a6', '#f59e0b', '#6366f1', '#84cc16', '#06b6d4']
};

let holdings = JSON.parse(localStorage.getItem('bse_portfolio')) || [];
let taxRate = parseFloat(localStorage.getItem('bse_tax_rate')) || 10.0;
let alertWindow = parseInt(localStorage.getItem('bse_alert_window')) || 14;
let hideAmounts = localStorage.getItem('bse_hide_amounts') === 'true';
let compactLayout = localStorage.getItem('bse_compact') === 'true';
let fontSizeMode = localStorage.getItem('bse_font_size') || 'normal';
let defaultTab = localStorage.getItem('bse_default_tab') || 'home';
let chartType = localStorage.getItem('bse_chart_type') || 'donut';
let chartPalette = localStorage.getItem('bse_chart_palette') || 'vivid';
let chartLegendPosition = localStorage.getItem('bse_chart_legend') || 'bottom';
let customColors = JSON.parse(localStorage.getItem('bse_custom_colors')) || {};

let cardOpacity = parseInt(localStorage.getItem('bse_card_opacity')) || 72;
let cardBlur = parseInt(localStorage.getItem('bse_card_blur')) || 20;
let ambientOrbs = localStorage.getItem('bse_ambient_orbs') !== 'false';

let lastDeleted = null;
let toastTimeout = null;
let portfolioChart = null;
let dividendChart = null;
let modalChartInstance = null;
let currentChartSymbol = "";
let currentChartPrice = 0;
let currentChartPeriod = "1M";

// --- CORE 3D CHART PLUGIN ---
const custom3DPiePlugin = {
    id: 'custom3DPiePlugin',
    beforeDatasetsDraw(chart) {
        const type = chart.config.options.customType;
        if (type !== '3d-cylinder' && type !== '3d-exploded') return;
        const ctx = chart.ctx;
        const meta = chart.getDatasetMeta(0);
        if (!meta || !meta.data || meta.data.length === 0) return;
        const depth = type === '3d-exploded' ? 25 : 15;
        const dataset = chart.data.datasets[0];
        const arcs = meta.data.map((arc, i) => ({ arc, i })).sort((a, b) => {
            const midA = (a.arc.startAngle + a.arc.endAngle) / 2;
            const midB = (b.arc.startAngle + b.arc.endAngle) / 2;
            return Math.sin(midA) - Math.sin(midB);
        });
        ctx.save();
        arcs.forEach(({ arc, i }) => {
            const { x, y, startAngle, endAngle, outerRadius, innerRadius } = arc;
            const sliceColor = dataset.backgroundColor[i];
            const shadedColor = shadeColor(sliceColor, -40);
            ctx.beginPath();
            ctx.arc(x, y + depth, outerRadius, startAngle, endAngle, false);
            ctx.lineTo(x + Math.cos(endAngle) * outerRadius, y + Math.sin(endAngle) * outerRadius);
            ctx.arc(x, y, outerRadius, endAngle, startAngle, true);
            ctx.closePath();
            const grad = ctx.createLinearGradient(x, y, x, y + depth);
            grad.addColorStop(0, sliceColor);
            grad.addColorStop(1, shadedColor);
            ctx.fillStyle = grad;
            ctx.fill();
            ctx.strokeStyle = 'rgba(0,0,0,0.2)';
            ctx.lineWidth = 1;
            ctx.stroke();
            if (innerRadius > 0) {
                ctx.beginPath();
                ctx.arc(x, y + depth, innerRadius, startAngle, endAngle, false);
                ctx.lineTo(x + Math.cos(endAngle) * innerRadius, y + Math.sin(endAngle) * innerRadius);
                ctx.arc(x, y, innerRadius, endAngle, startAngle, true);
                ctx.closePath();
                ctx.fillStyle = shadeColor(sliceColor, -60);
                ctx.fill();
                ctx.stroke();
            }
            ctx.beginPath();
            ctx.moveTo(x + Math.cos(startAngle) * innerRadius, y + Math.sin(startAngle) * innerRadius);
            ctx.lineTo(x + Math.cos(startAngle) * outerRadius, y + Math.sin(startAngle) * outerRadius);
            ctx.lineTo(x + Math.cos(startAngle) * outerRadius, y + depth + Math.sin(startAngle) * outerRadius);
            ctx.lineTo(x + Math.cos(startAngle) * innerRadius, y + depth + Math.sin(startAngle) * innerRadius);
            ctx.closePath();
            ctx.fillStyle = shadeColor(sliceColor, -20);
            ctx.fill();
            ctx.stroke();
            ctx.beginPath();
            ctx.moveTo(x + Math.cos(endAngle) * innerRadius, y + Math.sin(endAngle) * innerRadius);
            ctx.lineTo(x + Math.cos(endAngle) * outerRadius, y + Math.sin(endAngle) * outerRadius);
            ctx.lineTo(x + Math.cos(endAngle) * outerRadius, y + depth + Math.sin(endAngle) * outerRadius);
            ctx.lineTo(x + Math.cos(endAngle) * innerRadius, y + depth + Math.sin(endAngle) * innerRadius);
            ctx.closePath();
            ctx.fillStyle = shadeColor(sliceColor, -20);
            ctx.fill();
            ctx.stroke();
        });
        ctx.restore();
    }
};

function shadeColor(color, percent) {
    if (!color || !color.startsWith('#')) return '#444444';
    let R = parseInt(color.substring(1,3),16);
    let G = parseInt(color.substring(3,5),16);
    let B = parseInt(color.substring(5,7),16);
    R = parseInt(R * (100 + percent) / 100);
    G = parseInt(G * (100 + percent) / 100);
    B = parseInt(B * (100 + percent) / 100);
    R = (R<255)?R:255;  G = (G<255)?G:255;  B = (B<255)?B:255;
    let RR = ((R.toString(16).length==1)?"0"+R.toString(16):R.toString(16));
    let GG = ((G.toString(16).length==1)?"0"+G.toString(16):G.toString(16));
    let BB = ((B.toString(16).length==1)?"0"+B.toString(16):B.toString(16));
    return "#"+RR+GG+BB;
}

// --- GLOBAL EVENT HANDLERS ---
window.switchTab = function(tabId, btn) {
    document.querySelectorAll('.tab-content').forEach(t => t.classList.remove('active'));
    document.querySelectorAll('.nav-item').forEach(i => i.classList.remove('active'));
    const tab = document.getElementById(`tab-${tabId}`);
    if (tab) tab.classList.add('active');
    const targetBtn = btn || document.getElementById(`nav-btn-${tabId}`);
    if (targetBtn) targetBtn.classList.add('active');
    window.scrollTo({ top: 0, behavior: 'smooth' });
};

window.setTheme = function(mode) {
    let activeTheme = mode;
    if (mode === 'auto') {
        activeTheme = window.matchMedia && window.matchMedia('(prefers-color-scheme: light)').matches ? 'light' : 'dark';
    }
    document.documentElement.setAttribute('data-theme', activeTheme);
    localStorage.setItem('bse_theme', mode);
    document.querySelectorAll('.theme-btn').forEach(b => b.classList.remove('active'));
    const activeBtn = document.getElementById(`btn-${mode}`);
    if (activeBtn) activeBtn.classList.add('active');
    
    const metaColorMap = {
        'dark': '#0d1117', 'oled': '#000000', 'light': '#eef2f6',
        'midnight': '#060b19', 'forest': '#06140d', 'sand': '#f5efe6',
        'cyberpunk': '#090414', 'plum': '#13091f', 'slate': '#181c24'
    };
    const metaEl = document.getElementById('meta-theme-color');
    if (metaEl) metaEl.setAttribute('content', metaColorMap[activeTheme] || '#0d1117');
};

window.setAccent = function(color) {
    document.documentElement.style.setProperty('--accent-orange', color);
    document.documentElement.style.setProperty('--accent-glow', color + '38');
    const picker = document.getElementById('custom-accent-picker');
    if (picker) picker.value = color;
    localStorage.setItem('bse_accent', color);
    saveAndRender();
};

window.setCardOpacity = function(val) {
    cardOpacity = parseInt(val);
    document.documentElement.style.setProperty('--card-alpha', (cardOpacity / 100).toFixed(2));
    const label = document.getElementById('opacity-val-label');
    if (label) label.innerText = cardOpacity + '%';
    localStorage.setItem('bse_card_opacity', cardOpacity);
};

window.setCardBlur = function(val) {
    cardBlur = parseInt(val);
    document.documentElement.style.setProperty('--card-blur', cardBlur + 'px');
    const label = document.getElementById('blur-val-label');
    if (label) label.innerText = cardBlur + 'px';
    localStorage.setItem('bse_card_blur', cardBlur);
};

window.toggleAmbientOrbs = function(enabled) {
    ambientOrbs = enabled;
    const bg = document.getElementById('ambient-bg');
    if (bg) bg.style.opacity = enabled ? '1' : '0';
    localStorage.setItem('bse_ambient_orbs', enabled ? 'true' : 'false');
};

window.setFontSize = function(size) {
    fontSizeMode = size;
    document.documentElement.setAttribute('data-font', size);
    localStorage.setItem('bse_font_size', size);
};

window.toggleCompact = function(isCompact) {
    compactLayout = isCompact;
    document.documentElement.setAttribute('data-compact', isCompact ? 'true' : 'false');
    localStorage.setItem('bse_compact', isCompact ? 'true' : 'false');
};

window.toggleHideAmounts = function(isMasked) {
    hideAmounts = isMasked;
    localStorage.setItem('bse_hide_amounts', isMasked ? 'true' : 'false');
    saveAndRender();
};

window.setOpeningTab = function(tab) {
    defaultTab = tab;
    localStorage.setItem('bse_default_tab', tab);
};

window.setAlertWindow = function(days) {
    alertWindow = parseInt(days);
    localStorage.setItem('bse_alert_window', alertWindow);
    saveAndRender();
};

window.updateTaxRate = function() {
    const el = document.getElementById('tax-rate-input');
    if (!el) return;
    const val = parseFloat(el.value);
    if (!isNaN(val) && val >= 0) {
        taxRate = val;
        localStorage.setItem('bse_tax_rate', taxRate);
        saveAndRender();
    }
};

window.changeChartType = function(type) { chartType = type; localStorage.setItem('bse_chart_type', type); saveAndRender(); };
window.changeChartPalette = function(palette) { 
    chartPalette = palette; 
    localStorage.setItem('bse_chart_palette', palette); 
    const colorSettings = document.getElementById('custom-color-settings');
    if (colorSettings) colorSettings.style.display = (palette === 'custom') ? 'block' : 'none';
    saveAndRender(); 
};
window.changeChartLegend = function(pos) { chartLegendPosition = pos; localStorage.setItem('bse_chart_legend', pos); saveAndRender(); };
window.setCustomColor = function(symbol, color) { customColors[symbol] = color; localStorage.setItem('bse_custom_colors', JSON.stringify(customColors)); saveAndRender(); };

// --- DATA FETCHING ---
window.fetchLiveMarketData = async function(manual = false) {
    const btn = document.getElementById('refresh-news-btn');
    if (btn && manual) btn.innerText = '↻ Syncing...';

    // 1. Try to get Prices from Supabase
    if (supabaseClient) {
        try {
            const { data: tickers } = await supabaseClient.from('bse_tickers').select('*').eq('is_active', true);
            if (tickers && tickers.length > 0) {
                STOCKS.length = 0;
                tickers.forEach(t => {
                    STOCKS.push({
                        symbol: t.ticker, name: t.company_name, type: t.board || "Domestic Equity",
                        price: t.current_price || 0, divYield: (t.annual_dividend_yield || 0) / 100,
                        divAmount: 0, divDate: "-", exDate: "-", recordDate: "-", payDate: "-", payMonth: -1
                    });
                });
            }
        } catch (error) {
            console.error('Supabase price fetch error:', error);
        }
    }

    // 2. Try to get News from Supabase
    let gotSupabaseNews = false;
    if (supabaseClient) {
        try {
            const { data: news } = await supabaseClient.from('xnews_disclosures').select('*').order('published_at', { ascending: false }).limit(50);
            if (news && news.length > 0) {
                activeNews = news.map(n => ({
                    symbol: n.ticker || 'BSE', title: n.raw_headline,
                    date: n.published_at ? new Date(n.published_at).toISOString().split('T')[0] : '',
                    summary: n.ai_summary || "Click to view the official BSE disclosure document.", link: n.pdf_url || "#"
                }));
                gotSupabaseNews = true;
            }
        } catch (error) {
            console.error('Supabase news fetch error:', error);
        }
    }

    // 3. If Supabase news was empty, try to get News from news.json
    if (!gotSupabaseNews) {
        try {
            const res = await fetch('news.json?t=' + Date.now());
            if (res.ok) {
                const jsonNews = await res.json();
                if (jsonNews && jsonNews.length > 0) {
                    activeNews = jsonNews;
                }
            }
        } catch (e) {
            console.log("news.json fetch failed, using hardcoded fallback.");
        }
    }

    saveAndRender();
    if (btn && manual) {
        btn.innerText = '✓ Updated';
        setTimeout(() => { if(btn) btn.innerText = '↻ Refresh'; }, 1500);
    }
};

// --- RENDERING ---
function formatCurrency(val) {
    if (hideAmounts) return 'P••••';
    return 'P' + val.toLocaleString('en-US', {minimumFractionDigits: 2, maximumFractionDigits: 2});
}

function getStockMeta(sym) {
    return STOCKS.find(s => s.symbol === sym) || { price: 1.0, divYield: 0, divAmount: 0, divDate: "-", exDate: "-", recordDate: "-", payDate: "-", payMonth: -1, name: sym };
}

window.saveAndRender = function() {
    localStorage.setItem('bse_portfolio', JSON.stringify(holdings));
    
    // 1. Render Dashboard Table
    const tbody = document.getElementById('holdings-list');
    if (tbody) {
        tbody.innerHTML = '';
        let totalVal = 0, totalCost = 0, totalNetDiv = 0;
        let maxAsset = null, maxVal = 0;

        holdings.sort((a, b) => {
            const valA = a.qty * getStockMeta(a.symbol).price;
            const valB = b.qty * getStockMeta(b.symbol).price;
            return valB - valA;
        });

        holdings.forEach((item, i) => {
            const meta = getStockMeta(item.symbol);
            const curPrice = meta.price || item.price;
            const itemVal = item.qty * curPrice;
            const itemCost = item.qty * (item.buyPrice || curPrice);
            const pl = itemVal - itemCost;
            const netDiv = (itemVal * meta.divYield) * (1 - (taxRate / 100));
            
            totalVal += itemVal; totalCost += itemCost; totalNetDiv += netDiv;
            if (itemVal > maxVal) { maxVal = itemVal; maxAsset = item.symbol; }

            const row = document.createElement('tr');
            row.innerHTML = `
                <td><strong>${item.symbol}</strong></td>
                <td>${item.qty}</td>
                <td>${formatCurrency(item.buyPrice || curPrice)}<br><span style="color:var(--text-muted);">${formatCurrency(curPrice)}</span></td>
                <td><strong>${formatCurrency(itemVal)}</strong></td>
                <td style="color:${pl >= 0 ? 'var(--success-color)' : 'var(--danger-color)'}; font-weight:bold;">${pl >= 0 ? '+' : ''}${formatCurrency(pl)}</td>
                <td style="color:var(--accent-orange);">+${formatCurrency(netDiv)}</td>
                <td><button class="delete-btn" onclick="deleteHolding(${i})">✕</button></td>
            `;
            tbody.appendChild(row);
        });

        const totalPL = totalVal - totalCost;
        const dashVal = document.getElementById('dash-total-val');
        const dashDiv = document.getElementById('dash-total-div');
        const dashPl = document.getElementById('dash-total-pl');
        const dashCount = document.getElementById('dash-total-count');
        
        if (dashVal) dashVal.innerText = formatCurrency(totalVal);
        if (dashDiv) dashDiv.innerText = formatCurrency(totalNetDiv);
        if (dashPl) {
            dashPl.innerText = (totalPL >= 0 ? '+' : '') + formatCurrency(totalPL);
            dashPl.style.color = totalPL >= 0 ? 'var(--success-color)' : 'var(--danger-color)';
        }
        if (dashCount) dashCount.innerText = holdings.length;

        const warnBox = document.getElementById('risk-warning-container');
        if (warnBox) {
            if (totalVal > 0 && (maxVal / totalVal) > 0.5) {
                const pct = ((maxVal / totalVal) * 100).toFixed(1);
                warnBox.innerHTML = `<div class="alert-box"><span style="font-size:1.2rem;">⚠️</span><div><strong>Portfolio Concentration Risk:</strong> <strong>${maxAsset}</strong> accounts for <strong>${pct}%</strong> of your portfolio. Consider diversifying.</div></div>`;
            } else {
                warnBox.innerHTML = '';
            }
        }
    }

    updateAllocationChart();
    updateDividendSection();
    update12MonthChart();
    renderPinnedNews();
    initMarketPricesGrid();
    updateCustomColorsUI();
};

function updateAllocationChart() {
    const canvas = document.getElementById('portfolioChart');
    if (!canvas || typeof Chart === 'undefined') return;
    const ctx = canvas.getContext('2d');
    if (portfolioChart) portfolioChart.destroy();

    let labels = [], data = [], bgColors = [];
    let totalVal = holdings.reduce((acc, h) => acc + (h.qty * getStockMeta(h.symbol).price), 0);

    holdings.forEach((h, i) => {
        const meta = getStockMeta(h.symbol);
        const val = h.qty * meta.price;
        const pct = totalVal > 0 ? ((val / totalVal) * 100).toFixed(1) : 0;
        labels.push(`${h.symbol} (${pct}%)`);
        data.push(val);
        
        const paletteColors = PALETTES[chartPalette] || PALETTES.vivid;
        bgColors.push(chartPalette === 'custom' ? (customColors[h.symbol] || paletteColors[i % paletteColors.length]) : paletteColors[i % paletteColors.length]);
    });

    if (labels.length === 0) {
        labels = ['No Assets']; data = [1]; bgColors = ['#888888'];
    }

    let configType = 'doughnut';
    let legendOptions = { position: chartLegendPosition, labels: { color: '#94a3b8', font: { size: 10 } } };
    if (chartLegendPosition === 'hidden') legendOptions = { display: false };

    let chartOptions = {
        responsive: true, maintainAspectRatio: false, customType: chartType,
        plugins: { legend: legendOptions, datalabels: { display: false } }
    };

    if (chartType === 'pie') configType = 'pie';
    else if (chartType === 'half-donut') { configType = 'doughnut'; chartOptions.circumference = 180; chartOptions.rotation = 270; }
    else if (chartType === '3d-cylinder') {
        configType = 'doughnut'; chartOptions.cutout = '40%';
        chartOptions.plugins.datalabels = { display: true, color: '#fff', anchor: 'center', align: 'center', formatter: (v, c) => c.chart.data.labels[c.dataIndex].split(' (')[0] };
    } else if (chartType === '3d-exploded') {
        configType = 'doughnut'; chartOptions.cutout = '30%';
        chartOptions.plugins.datalabels = { display: (c) => (c.dataset.data[c.dataIndex] / c.dataset.data.reduce((a,b)=>a+b,0)) > 0.03, color: '#fff', anchor: 'end', align: 'end', offset: 25, formatter: (v, c) => c.chart.data.labels[c.dataIndex].split(' (')[0] };
    } else if (chartType === 'bars') {
        configType = 'bar'; chartOptions.indexAxis = 'y'; chartOptions.plugins.legend = { display: false };
    }

    const dataset = { data: data, backgroundColor: bgColors, borderWidth: 2, hoverOffset: 6 };
    if (chartType === '3d-exploded') dataset.offset = 15;

    portfolioChart = new Chart(ctx, { type: configType, data: { labels: labels, datasets: [dataset] }, options: chartOptions, plugins: [custom3DPiePlugin] });
}

function updateDividendSection() {
    const container = document.getElementById('dividends-schedule-container');
    if (!container) return;
    container.innerHTML = '';
    if (holdings.length === 0) {
        container.innerHTML = `<div class="div-card" style="text-align:center; color:var(--text-muted); font-size:0.8rem;">Add holdings to view key payout dates.</div>`;
        return;
    }

    const today = new Date();
    today.setHours(0, 0, 0, 0);

    holdings.forEach(h => {
        const meta = getStockMeta(h.symbol);
        const netAnnual = (h.qty * meta.price * meta.divYield) * (1 - (taxRate / 100));
        const card = document.createElement('div');
        card.className = 'div-card';
        
        if (meta.divAmount === 0 || meta.payDate === '-') {
            card.innerHTML = `<div class="div-header"><div><strong>${h.symbol}</strong></div><div class="div-amount" style="color:var(--text-muted);">No Dividend</div></div><div style="font-size:0.75rem; color:var(--text-muted);">This asset does not distribute dividends.</div>`;
        } else {
            const payDateObj = new Date(meta.payDate);
            payDateObj.setHours(0, 0, 0, 0);
            const diffDays = Math.ceil((payDateObj - today) / (1000 * 60 * 60 * 24));
            const isPaid = diffDays < 0;
            const isSoon = !isPaid && diffDays <= alertWindow;

            if (isSoon) card.classList.add('amber-alert');
            let statusBadge = `<span class="badge-status badge-upcoming">In ${diffDays} days</span>`;
            if (isPaid) statusBadge = `<span class="badge-status badge-paid">Paid</span>`;
            else if (isSoon) statusBadge = `<span class="badge-status badge-soon">Coming up soon</span>`;

            card.innerHTML = `
                <div class="div-header"><div><strong>${h.symbol}</strong></div><div class="div-amount">+${formatCurrency(netAnnual)}/yr (Net)</div></div>
                <div class="div-dates-grid">
                    <div class="div-date-box"><span>Ex-Dividend</span><strong>${meta.exDate}</strong></div>
                    <div class="div-date-box"><span>Payment</span><strong>${meta.payDate}</strong></div>
                    <div class="div-date-box" style="grid-column: span 2; background: rgba(255, 87, 34, 0.1); border-color: var(--accent-orange); margin-top: 4px;">
                        <span style="color:var(--accent-orange); font-weight:bold;">Announced Dividend</span>
                        <div style="display:flex; justify-content:space-between; align-items:center; margin-top:2px;">
                            <strong style="color:var(--accent-orange);">${formatCurrency(meta.divAmount)} / share</strong>
                            <span style="font-size:0.7rem; background:var(--input-bg); padding:2px 6px; border-radius:4px;">Est: ${formatCurrency(meta.divAmount * h.qty)}</span>
                        </div>
                    </div>
                </div>
            `;
        }
        container.appendChild(card);
    });
}

function update12MonthChart() {
    const canvas = document.getElementById('dividendChart');
    if (!canvas || typeof Chart === 'undefined') return;
    const ctx = canvas.getContext('2d');
    if (dividendChart) dividendChart.destroy();

    const months = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'];
    const monthlyData = new Array(12).fill(0);
    holdings.forEach(h => {
        const meta = getStockMeta(h.symbol);
        if (meta.payMonth >= 0 && meta.divYield > 0) {
            monthlyData[meta.payMonth] += (h.qty * meta.price * meta.divYield * (1 - (taxRate / 100)));
        }
    });
    const accent = getComputedStyle(document.documentElement).getPropertyValue('--accent-orange').trim();
    
    dividendChart = new Chart(ctx, {
        type: 'bar',
        data: { labels: months, datasets: [{ data: monthlyData, backgroundColor: accent, borderRadius: 6 }] },
        options: { responsive: true, maintainAspectRatio: false, plugins: { legend: { display: false }, datalabels: { display: false } } }
    });
}

function renderPinnedNews() {
    const container = document.getElementById('pinned-news-container');
    if (!container) return;
    container.innerHTML = '';
    
    const holdingSymbols = holdings.map(h => h.symbol);
    const sortedNews = [...activeNews].sort((a, b) => {
        const aOwned = holdingSymbols.includes(a.symbol);
        const bOwned = holdingSymbols.includes(b.symbol);
        if (aOwned && !bOwned) return -1;
        if (!aOwned && bOwned) return 1;
        return new Date(b.date) - new Date(a.date);
    });

    sortedNews.forEach(n => {
        const isOwned = holdingSymbols.includes(n.symbol);
        const item = document.createElement('div');
        item.className = 'news-item';
        item.innerHTML = `
            <div style="display:flex; justify-content:space-between; align-items:center;">
                <span class="news-tag">${n.symbol || 'BSE'}</span>
                ${isOwned ? '<span style="font-size:0.65rem; background:var(--accent-glow); color:var(--accent-orange); padding:2px 6px; border-radius:4px; font-weight:bold;">PORTFOLIO</span>' : ''}
            </div>
            <div><a href="${n.link || '#'}" target="_blank" class="news-link"><strong>${n.title || 'Market Update'} ↗</strong></a></div>
            <div style="font-size:0.75rem; color:var(--text-main); margin-top:4px;">${n.summary || ''}</div>
            <div class="news-date">${n.date || ''} • BSE X-News Portal</div>
        `;
        container.appendChild(item);
    });
}

function initMarketPricesGrid() {
    const grid = document.getElementById('market-prices-grid');
    if (!grid) return;
    grid.innerHTML = '';
    
    STOCKS.forEach(s => {
        const existing = holdings.find(h => h.symbol === s.symbol);
        const row = document.createElement('div');
        row.className = 'price-row';
        row.setAttribute('data-symbol', s.symbol);
        row.setAttribute('data-name', s.name);
        row.innerHTML = `
            <div class="price-info">
                <span>${s.symbol} • ${formatCurrency(s.price)}</span>
                <span>${s.name}</span>
            </div>
            <div class="price-actions">
                <button class="btn-outline" style="padding: 6px 8px; border-radius: 8px;" onclick="openChartModal('${s.symbol}', ${s.price})" title="View Chart">
                    <svg viewBox="0 0 24 24" style="width: 14px; height: 14px; fill: none; stroke: currentColor; stroke-width: 2.5; stroke-linecap: round; stroke-linejoin: round;"><path d="M3 17l6-6 4 4 8-8"></path></svg>
                </button>
                <input type="number" id="qty-${s.symbol}" placeholder="Qty" value="${existing ? existing.qty : ''}" step="any">
                <button class="action-btn-sm" onclick="quickToggleHolding('${s.symbol}', ${s.price})">${existing ? 'Update' : 'Add'}</button>
            </div>
        `;
        grid.appendChild(row);
    });
}

window.filterMarketGrid = function() {
    const q = document.getElementById('market-search-input').value.toLowerCase();
    document.querySelectorAll('#market-prices-grid .price-row').forEach(row => {
        row.style.display = (row.getAttribute('data-symbol').toLowerCase().includes(q) || row.getAttribute('data-name').toLowerCase().includes(q)) ? 'flex' : 'none';
    });
};

window.addHolding = function() {
    const sym = document.getElementById('asset-search').value.trim().toUpperCase();
    const qty = parseFloat(document.getElementById('asset-qty').value);
    const buyPrice = parseFloat(document.getElementById('asset-buy-price').value) || 0;
    const curPrice = parseFloat(document.getElementById('asset-price').value) || 0;
    if (!sym || isNaN(qty) || qty <= 0) return alert("Please enter a valid ticker and quantity.");
    
    const idx = holdings.findIndex(h => h.symbol === sym);
    if (idx !== -1) {
        holdings[idx].qty += qty;
        holdings[idx].buyPrice = buyPrice || holdings[idx].buyPrice;
        holdings[idx].price = curPrice || holdings[idx].price;
    } else {
        holdings.push({ symbol: sym, qty: qty, buyPrice: buyPrice || curPrice, price: curPrice });
    }
    document.getElementById('asset-search').value = '';
    document.getElementById('asset-qty').value = '';
    document.getElementById('asset-buy-price').value = '';
    document.getElementById('asset-price').value = '';
    saveAndRender();
};

window.quickToggleHolding = function(sym, price) {
    const val = parseFloat(document.getElementById(`qty-${sym}`).value);
    if (isNaN(val) || val <= 0) return alert("Enter valid share quantity.");
    const idx = holdings.findIndex(h => h.symbol === sym);
    if (idx !== -1) {
        holdings[idx].qty = val;
        holdings[idx].price = price;
    } else {
        holdings.push({ symbol: sym, qty: val, buyPrice: price, price: price });
    }
    saveAndRender();
};

window.deleteHolding = function(index) {
    lastDeleted = { data: holdings[index], index: index };
    holdings.splice(index, 1);
    saveAndRender();
    showUndoToast(`${lastDeleted.data.symbol} removed`);
};

window.undoDelete = function() {
    if (lastDeleted) { holdings.splice(lastDeleted.index, 0, lastDeleted.data); lastDeleted = null; saveAndRender(); document.getElementById('toast-undo').style.display = 'none'; }
};

function showUndoToast(msg) {
    const toast = document.getElementById('toast-undo');
    if (!toast) return;
    document.getElementById('toast-msg').innerText = msg;
    toast.style.display = 'flex';
    if (toastTimeout) clearTimeout(toastTimeout);
    toastTimeout = setTimeout(() => { toast.style.display = 'none'; lastDeleted = null; }, 5000);
}

function updateCustomColorsUI() {
    const list = document.getElementById('custom-color-list');
    if (!list) return;
    list.innerHTML = '';
    holdings.forEach(h => {
        const color = customColors[h.symbol] || '#888888';
        const row = document.createElement('div');
        row.style.cssText = 'display:flex; align-items:center; justify-content:space-between; padding:4px 8px; background:var(--input-bg); border-radius:8px; border:1px solid var(--card-border);';
        row.innerHTML = `<span style="font-size: 0.8rem; font-weight: bold;">${h.symbol}</span><input type="color" value="${color}" onchange="setCustomColor('${h.symbol}', this.value)">`;
        list.appendChild(row);
    });
}

// --- SETTINGS LOADER ---
function loadPreferences() {
    setTheme(localStorage.getItem('bse_theme') || 'dark');
    setAccent(localStorage.getItem('bse_accent') || '#ff5722');
    
    const opacitySlider = document.getElementById('card-opacity-slider');
    if (opacitySlider) { opacitySlider.value = cardOpacity; setCardOpacity(cardOpacity); }
    
    const blurSlider = document.getElementById('card-blur-slider');
    if (blurSlider) { blurSlider.value = cardBlur; setCardBlur(cardBlur); }
    
    const orbsToggle = document.getElementById('ambient-orbs-toggle');
    if (orbsToggle) { orbsToggle.checked = ambientOrbs; toggleAmbientOrbs(ambientOrbs); }
    
    const fontSelect = document.getElementById('font-size-select');
    if (fontSelect) fontSelect.value = fontSizeMode;
    setFontSize(fontSizeMode);
    
    const compactToggle = document.getElementById('compact-toggle');
    if (compactToggle) compactToggle.checked = compactLayout;
    toggleCompact(compactLayout);
    
    const hideAmountsToggle = document.getElementById('hide-amounts-toggle');
    if (hideAmountsToggle) hideAmountsToggle.checked = hideAmounts;
    
    const taxInput = document.getElementById('tax-rate-input');
    if (taxInput) taxInput.value = taxRate;
    
    const alertWindowSelect = document.getElementById('alert-window-select');
    if (alertWindowSelect) alertWindowSelect.value = alertWindow;
    
    const openingTabSelect = document.getElementById('opening-tab-select');
    if (openingTabSelect) openingTabSelect.value = defaultTab;

    if (defaultTab !== 'home') switchTab(defaultTab);
}

// --- CHART MODAL ---
window.openChartModal = function(symbol, price) {
    currentChartSymbol = symbol; currentChartPrice = price; currentChartPeriod = "1M";
    document.getElementById('modal-chart-title').innerText = `${symbol} Price History`;
    document.querySelectorAll('#modal-periods button').forEach(btn => btn.classList.remove('active'));
    const activeBtn = document.querySelector(`#modal-periods button[onclick="updateChartPeriod('1M')"]`);
    if (activeBtn) activeBtn.classList.add('active');
    
    const modal = document.getElementById('chart-modal');
    if (modal) { modal.style.display = 'flex'; setTimeout(() => modal.classList.add('show'), 10); }
    renderModalChart();
};

window.closeChartModal = function() {
    const modal = document.getElementById('chart-modal');
    if (modal) {
        modal.classList.remove('show');
        setTimeout(() => { modal.style.display = 'none'; if (modalChartInstance) { modalChartInstance.destroy(); modalChartInstance = null; } }, 300);
    }
};

window.updateChartPeriod = function(period) {
    currentChartPeriod = period;
    document.querySelectorAll('#modal-periods button').forEach(btn => btn.classList.remove('active'));
    const activeBtn = document.querySelector(`#modal-periods button[onclick="updateChartPeriod('${period}')"]`);
    if (activeBtn) activeBtn.classList.add('active');
    renderModalChart();
};

function renderModalChart() {
    const canvas = document.getElementById('modalChartCanvas');
    if (!canvas || typeof Chart === 'undefined') return;
    const ctx = canvas.getContext('2d');
    if (modalChartInstance) modalChartInstance.destroy();

    let points = 30, labels = [];
    if (currentChartPeriod === '1W') { points = 7; labels = ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun']; }
    else if (currentChartPeriod === '1M') { points = 30; }
    else if (currentChartPeriod === '6M') { points = 26; }
    else if (currentChartPeriod === '1Y') { points = 12; labels = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec']; }

    if (labels.length === 0) for (let i = points; i > 0; i--) labels.push(`-${i}d`);

    let dataPoints = [], price = currentChartPrice * (0.85 + Math.random() * 0.15);
    for (let i = 0; i < points; i++) { price += price * ((Math.random() - 0.48) * 0.03); dataPoints.push(price); }
    dataPoints[dataPoints.length - 1] = currentChartPrice;

    const isUp = dataPoints[dataPoints.length - 1] >= dataPoints[0];
    const lineColor = isUp ? 'var(--success-color)' : 'var(--danger-color)';
    const gradient = ctx.createLinearGradient(0, 0, 0, 300);
    gradient.addColorStop(0, isUp ? 'rgba(0, 230, 118, 0.3)' : 'rgba(239, 68, 68, 0.3)');
    gradient.addColorStop(1, 'rgba(0, 0, 0, 0)');

    modalChartInstance = new Chart(ctx, {
        type: 'line',
        data: { labels: labels, datasets: [{ data: dataPoints, borderColor: lineColor, backgroundColor: gradient, borderWidth: 2, pointRadius: 0, fill: true, tension: 0.3 }] },
        options: { responsive: true, maintainAspectRatio: false, plugins: { legend: { display: false } }, scales: { x: { display: false }, y: { display: false } } }
    });
}

// --- UTILITIES & BACKUPS ---
window.copyCSV = function() { if(holdings.length === 0) return alert("No holdings to copy."); let csv = "Symbol,Quantity,AvgBuyPrice,CurrentPrice,TotalValue\n"; holdings.forEach(h => { const meta = getStockMeta(h.symbol); const cur = meta.price || h.price; csv += `${h.symbol},${h.qty},${h.buyPrice || cur},${cur},${(h.qty * cur).toFixed(2)}\n`; }); navigator.clipboard.writeText(csv).then(() => alert("CSV copied!")); };
window.copyBackupJSON = function() { const str = JSON.stringify({ holdings, taxRate, alertWindow, hideAmounts, compactLayout, fontSizeMode, defaultTab, chartType, chartPalette, chartLegendPosition, customColors, cardOpacity, cardBlur, ambientOrbs, theme: localStorage.getItem('bse_theme'), accent: localStorage.getItem('bse_accent') }, null, 2); navigator.clipboard.writeText(str).then(() => alert("Backup copied!")); };
window.restoreBackupJSON = function() { const str = prompt("Paste backup JSON here:"); if (!str) return; try { const p = JSON.parse(str); if(p.holdings) { localStorage.setItem('bse_portfolio', JSON.stringify(p.holdings)); alert("Backup restored! Reloading..."); location.reload(); } } catch(e) { alert("Invalid JSON"); } };
window.resetAllData = function() { if (confirm("Reset all data? This cannot be undone.")) { localStorage.clear(); location.reload(); } };
window.autoFillPrice = function() { const sym = document.getElementById('asset-search').value.trim().toUpperCase(); const s = STOCKS.find(x => x.symbol === sym); if (s) { document.getElementById('asset-price').value = s.price; if (!document.getElementById('asset-buy-price').value) document.getElementById('asset-buy-price').value = s.price; } };

// --- INITIALIZATION ---
document.addEventListener('DOMContentLoaded', () => {
    loadPreferences();
    saveAndRender();
    fetchLiveMarketData(false);
    
    if ('serviceWorker' in navigator) navigator.serviceWorker.register('sw.js').catch(() => {});
    
    // IPO Countdown
    setInterval(() => {
        const diff = new Date('2026-11-27T17:00:00') - new Date();
        const dEl = document.getElementById('ipo-days'), hEl = document.getElementById('ipo-hours'), mEl = document.getElementById('ipo-mins'), sEl = document.getElementById('ipo-secs');
        if (diff > 0 && dEl) {
            dEl.innerText = String(Math.floor(diff / (1000 * 60 * 60 * 24))).padStart(2, '0');
            hEl.innerText = String(Math.floor((diff / (1000 * 60 * 60)) % 24)).padStart(2, '0');
            mEl.innerText = String(Math.floor((diff / 1000 / 60) % 60)).padStart(2, '0');
            sEl.innerText = String(Math.floor((diff / 1000) % 60)).padStart(2, '0');
        }
    }, 1000);

    // Hourly Auto Refresh
    setInterval(() => { fetchLiveMarketData(); }, 3600000);
});
