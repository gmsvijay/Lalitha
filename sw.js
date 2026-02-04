const CACHE_NAME = 'lalitha-sahasranamam-v1';

const ASSETS = [
    '/',
    '/index.html',
    '/styles.css',
    '/main.js',
    '/manifest.json',
    'https://raw.githubusercontent.com/vrsaparna/Lalitha/main/Lalitha_Sahasranamam.mp3',
    'https://raw.githubusercontent.com/vrsaparna/Lalitha/main/lalitha.json'
];

self.addEventListener('install', event => {
    event.waitUntil(
        caches.open(CACHE_NAME).then(cache => cache.addAll(ASSETS))
    );
});

self.addEventListener('fetch', event => {
    event.respondWith(
        caches.match(event.request).then(response => {
            return response || fetch(event.request);
        })
    );
});
