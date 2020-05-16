self.addEventListener('install', function(event) {
    event.waitUntil(
        caches.open('static')
        .then(function(cache){
            cache.addAll([
                '/',
                '/index.html',
                '/src/css/app.css',
                '/src/css/main.css',
                '/src/js/main.js',
                '/src/js/material.min.js',
                'https://fonts.googleapis.com/icon?family=Material+Icons',
                'https://fonts.googleapis.com/css?family=Roboto:400,700',
                'https://cdnjs.cloudflare.com/ajax/libs/material-design-lite/1.3.0/material.indigo-pink.min.css'
            ])
        })
    )
});
self.addEventListener('fetch', function(event){
    event.respondWith(
        caches.match(event.request)
        .then(function(response){
            if(response){
                return response
            }else {
                return fetch(event.request)
                .catch(function(err){

                })
            }
        })
    )
})