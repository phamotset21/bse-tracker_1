const CACHE_NAME = 'bse-tracker-v3'; // 1. Changed to v3 to force an update!
const ASSETS_TO_CACHE = [
    './',
    './index.html',
    './style.css',
    './app.js',
    './manifest.json',
    // 2. Added Chart.js CDNs so charts work offline
    'https://cdn.jsdelivr.net/npm/chart.js',
    'https://cdn.jsdelivr.net/npm/chartjs-plugin-datalabels@2.2.0'
];
