self.addEventListener('install', (e) => {
    e.waitUntil(
      caches.open('fox-store').then((cache) => cache.addAll([
        '/d/',
        '/d/index.html',
        '/d/script/index.js',
        '/d/css/tailwind.css',
      ])),
    );
  });
  
self.addEventListener('fetch', (e) => {
    console.log(e.request.url);
    e.respondWith(
      caches.match(e.request).then((response) => response || fetch(e.request)),
    );
});