// This file appears to be a full HTML document, not a service worker file.
// Please move this content to `index.html` and create a separate `service-worker.js` for offline caching.

// Here is a minimal service worker you can use in `service-worker.js`:

self.addEventListener('install', event => {
  console.log('Service worker installing...');
  self.skipWaiting();
});

self.addEventListener('activate', event => {
  console.log('Service worker activating...');
});

self.addEventListener('fetch', event => {
  event.respondWith(
    caches.match(event.request).then(cachedResponse => {
      return cachedResponse || fetch(event.request);
    })
  );
});
