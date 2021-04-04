const CACHE_NAME = 'greenhub-2'
const urlsToCache = ['/', '/index.html', '/css/index.css']

self.addEventListener('install', (e) => {
	//
	e.waitUntil(
		caches.open(CACHE_NAME).then((cache) => {
			return cache.addAll(urlsToCache)
		})
	)
})

self.addEventListener('activate', function (event) {
	var cacheAllowlist = [CACHE_NAME]

	event.waitUntil(
		caches.keys().then(function (cacheNames) {
			return Promise.all(
				cacheNames.map(function (cacheName) {
					if (cacheAllowlist.indexOf(cacheName) === -1) {
						return caches.delete(cacheName)
					}
				})
			)
		})
	)
})
self.addEventListener('fetch', function (event) {
	//
	event.respondWith(
		//
		caches.match(event.request).then(function (response) {
			// Cache hit - return response
			if (response) {
				return response
			}
			//
			return fetch(event.request).then(function (response) {
				// Check if we received a valid response
				if (
					!response ||
					response.status !== 200 ||
					response.type !== 'basic' ||
					//
					response.method == 'POST'
				) {
					return response
				}
				// IMPORTANT: Clone the response. A response is a stream
				// and because we want the browser to consume the response
				// as well as the cache consuming the response, we need
				// to clone it so we have two streams.
				var responseToCache = response.clone()
				caches.open(CACHE_NAME).then(function (cache) {
					//
					cache.put(event.request, responseToCache)
				})
				return response
			})
		})
	)
})
//# sourceMappingURL=service.js.map
