
var dataCacheName = 'shop_app_v1';
var cacheName = 'shop_app';
var filesToCache = [
  '/shop_app/',
  '/shop_app/index.html',
  '/shop_app/chart.js',
  '/shop_app/style.css',
  '/shop_app/battery.png',
  '/shop_app/bicycle.png',
  '/shop_app/motocross_bike.png',
  '/shop_app/police_motorbike.png',
  '/shop_app/icons/icon-128x128.png',
  '/shop_app/icons/icon-144x144.png',
  '/shop_app/icons/icon-152x152.png',
  '/shop_app/icons/icon-192x192.png',
  '/shop_app/icons/icon-256x256.png',
  '/shop_app/icons/icon-32x32.png',
  '/shop_app/icons/icon-512x512.png'
];

self.addEventListener('install', function (e) {
    console.log('[ServiceWorker] Install');
    e.waitUntil(
        caches.open(cacheName).then(function (cache) {
            console.log('[ServiceWorker] Caching app shell');
            cache.addAll(filesToCache);
        })
    );
});

self.addEventListener('activate', function (e) {
    console.log('[ServiceWorker] Activate');
    e.waitUntil(
        caches.keys().then(function (keyList) {
            return Promise.all(keyList.map(function (key) {
                if (key !== cacheName && key !== dataCacheName) {
                    console.log('[ServiceWorker] Removing old cache', key);
                    caches.delete(key);
                }
            }));
        })
    );
    return self.clients.claim();
});

self.addEventListener('fetch', function (event) {
    event.respondWith(
        caches.match(event.request).then(function (response) {
            // 檢查快取中是否有對應的資源
            if (response) {
                // 如果有，回傳快取中的資源
                return response;
            }

            // 如果快取中沒有對應的資源，則發送網路請求
            return fetch(event.request).then(function (networkResponse) {
                // 將網路請求的資源加入到快取中
                var responseToCache = networkResponse.clone();

                // 回傳網路請求的資源
                return networkResponse;
            });
        })
    );
});

