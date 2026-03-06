//asignaae nombre y version del cache
const CACHE_NAME = 'v1_cache_mi_pwa';

//archivos a cachar en la aplicacion
const urlsToCache = [
  './',
  './index.html',
  './styles.css',
  './main.js',
  './image/icono.png',
  './image/icono 32.png',
  './image/icono 64.png',
  './image/icono 96.png',
  './image/icono 128.png',
  './image/icono 144.png',
  './image/icono 192.png',
  './image/icono 256.png',
  './image/icono 384.png',
  './image/icono 512.png',
  './image/icono 1024.png'
];

self.addEventListener('install', e => {
    e.waitUntil(
        caches.open(CACHE_NAME)
        .then(cache => {
            return cache.addAll(urlsToCache)
                .then(() => {
                    self.skipWaiting()
                })
        })
        .catch(err => console.log(`No se ha registrado el cache ${err}`))
    );
});

self.addEventListener('activate', e => {
    const cacheWhitelist = [CACHE_NAME];

    e.waitUntil(
        cache.keys().then(cacheNames => {
            return Promise.all(
                cacheNames.map(cacheNames => {
                    if (cacheWhitelist.indexOf(cacheNames) === -1) {
                        return caches.delete(cacheNames);
                    }
                })
            )
        })

        .then(() => {
            self.clients.claim();
        })
    )
})

self.addEventListener('fetch', e =>{
    e.respodWith(
        caches.match(e.request).then(response=> {
                if(response){
                    return response;
                }
        })
    )
})