const CACHE_NAME = 'bse-tracker-v10'; // Bumped to v7 to force update!
const ASSETS_TO_CACHE = [
  './',
  './index.html',
  './style.css',
  './app.js',
  './manifest.json',
  './prices.json', // Added
  './news.json',   // Added
  'https://cdn.jsdelivr.net/npm/chart.js',
  'https://cdn.jsdelivr.net/npm/chartjs-plugin-datalabels@2.2.0'
];

// Install Service Worker and cache all files
self.addEventListener('install', (event) => {
  event.waitUntil(
    caches.open(CACHE_NAME).then((cache) => {
      return cache.addAll(ASSETS_TO_CACHE);
    })
  );
  self.skipWaiting(); // Force the new service worker to take over immediately
});

// Activate and clean up old caches
self.addEventListener('activate', (event) => {
  event.waitUntil(
    caches.keys().then((cacheNames) => {
      return Promise.all(
        cacheNames.map((cache) => {
          if (cache !== CACHE_NAME) {
            return caches.delete(cache); // Delete the old broken caches
          }
        })
      );
    })
  );
  self.clients.claim();
});

// Fetch strategy: Network First, fallback to Cache
// (Network first ensures you always get the newest prices and news when online)
self.addEventListener('fetch', (event) => {
  event.respondWith(
    fetch(event.request)
      .then((response) => {
        // If the fetch is successful, clone it and save it to the cache
        const responseClone = response.clone();
        caches.open(CACHE_NAME).then((cache) => {
          cache.put(event.request, responseClone);
        });
        return response;
      })
      .catch(() => {
        // If network fails (offline), try to get it from the cache
        return caches.match(event.request);
      })
  );
});
