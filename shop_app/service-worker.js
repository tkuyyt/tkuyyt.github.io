var dataCacheName = 'shop_app_v1';
var cacheName = 'shop_app';
var filesToCache = [
  'index.html',
  'chart.js',
  'style.css',
  'battery.png',
  'bicycle.png',
  'motocross_bike.png',
  'police_motorbike.png',

];

self.addEventListener('install', function(e) {
  console.log('[ServiceWorker] Install');
  e.waitUntil(
    caches.open(cacheName).then(function(cache) {
      console.log('[ServiceWorker] Caching app shell');
      cache.addAll(filesToCache);
    })
  );
});

self.addEventListener('activate', function(e) {
  console.log('[ServiceWorker] Activate');
  e.waitUntil(
    caches.keys().then(function(keyList) {
      return Promise.all(keyList.map(function(key) {
        if (key !== cacheName && key !== dataCacheName) {
          console.log('[ServiceWorker] Removing old cache', key);
          caches.delete(key);
        }
      }));
    })
  );
  return self.clients.claim();
});
