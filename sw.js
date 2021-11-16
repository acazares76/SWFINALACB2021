let cacheName = "mascotas-v1";

//static guarda los archivos locales
let staticCache = "staticmascotas-v1";

// Dynamic guarda archivos que no estaban comtemplados como estaticos
let dynamicCache = "dynamicmascotas-v1";

// Inmutable guarda archivos que nunca van a cambiar (versiones)
let inmutableCache = "inmutablemascotas-v1";

self.addEventListener("install", (result) => {
  // abrir el cache con base al nombre y si no existe lo crea
  let files_appShell = ["/", "/style.css", "/index.js", "/reset.css"];
  const static_cache = caches.open(staticCache).then((cacheStatic) => {
    cacheStatic.addAll([files_appShell]);
  });

  const inmutable_cache = [];

  result.waitUntil(Promise.all([static_cache, inmutable_cache]));
});

self.addEventListener("activate", (event) => {
  event.waitUntil(
    caches
      .keys()
      .then((cachesList) =>
        Promise.all(
          cachesList.map((cacheName) => {
            if (staticCache != cacheName && inmutableCache != cacheName) {
              return caches.delete(cacheName);
            }
          })
        )
      )
      .then(() => {
        console.log("V2 now ready to handle fetches!");
      })
  );
});

self.addEventListener('fetch', (event) => {

  eventFecth.respondWith(
    caches.match(eventFetch.request))
 
    eventFetch.respondWith
    (fetch(eventFetch.request));

    const res = caches.match(eventFetch.request)
    .then(cacheResponse => {

            if (cacheResponse){
                return cacheResponse;
            } else {
                return fetch(eventFetch.request)
            } 

            return cacheResponse ? cacheResponse : fetch(eventFetch.resquest)
        })
    .cath(cacheError => {
        console.error('catch Error', cacheError);
    });

eventFetch.respondWith(res);


const _res = fetch(event.request)
        .then((networkResponse) => {

         //       if (networkResponse){
         //           return networkResponse;
         //     } else {
         //       return caches.match(eventFetch.request)
         // } 

                return networkResponse || caches.match(event.request);
            })
        .catch(networkError => {
            console.error('Networ Error', networkError);
        })

event.respondWith(_res);

const _RESULT = caches.match(event.request)
.then((cacheResponse) => {
    return cacheResponse || fetch(event.request);
})
    event.respondWith(_RESULT);


event.respondWhith(caches.match(event.request).then(
cacheResponse =>{
    // si estuvo en cache, lo va a regresar
    if(cacheResponse) return cacheResponse;
    //si no estuvo en cache, lo va a buscar en la red
    return fetch(event.request). then(
        networkResponse => {
            caches.open(dynamic_cache).then(cache => {
                cache.put(event.request, networkResponse)
                // limpiar el cache
            })
        }
    )
}
)
)

event.respondWhith(
  fetch(event.request).then(
      networkResponse => {
          return networkResponse || caches.match(event.request).then(
              cacheResponse => {
                  
              }
          )
      }
  )
)





event.respondWhith(caches.match(event.request).then(
  cacheResponse =>{
             return cacheResponse || fetch(event.request).then(
                 networkResponse => {
                    caches.open(inmutableCache).then(cache => {
                        cache.put(evente.request, networkResponse)
                        return networkResponse.clone()
                    })
                 }
             )
      }
))
})




self.addEventListener("message", (obj) => {
  //revisar si el msj tiene el mensaje 'skipWaiting'
  if (obj.data.action === "skipWaiting") {
    //ejecutar el skipWaiting
    self.skipWaiting();
  }
});
