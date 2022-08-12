'use strict';

var cacheVersion = 1;
var currentCache = {
  offline: 'offline-cache' + cacheVersion
};
const offlineUrl = 'offline.html';

this.addEventListener('install', event => {
  event.waitUntil(
    caches.open(currentCache.offline).then(function(cache) {
      return cache.addAll([
          './img/offline.svg',
          offlineUrl
      ]);
    })
  );
});

/*self.addEventListener('install', function(event){
  console.log('[Service Worker] Installing Service Worker.....',event);
});*/

self.addEventListener('activate', function(event){
  console.log('[Service Worker] Activating Service Worker.....',event);
  return self.clients.claim();
});

self.addEventListener('fetch', function(event){
  console.log('[Service Worker] Fetch initiated.....',event);
  event.respondWith(fetch(event.request));
});

self.addEventListener('beforeinstallprompt', (e) => {
    deferredPrompt = e;
});
