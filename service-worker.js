"use strict";var precacheConfig=[["/Class-Site/index.html","57833082dec1bb2a1231fbd6abf58663"],["/Class-Site/static/css/main.e8d49a07.css","3757bbd94c97f2b41ca7d40b8310d7e9"],["/Class-Site/static/js/main.df06aac1.js","c5b09cb278df9c3cb21528f0afc4c6d8"],["/Class-Site/static/media/ClassPic.64122410.jpg","64122410c40c61e1637cd409f3ee0e0d"],["/Class-Site/static/media/NSS-Logo.8865ce34.png","8865ce341a7fb44e4394757911d734fb"],["/Class-Site/static/media/address-card.41f7abac.png","41f7abaca4b330f0c96c1ec8ef3ccd4e"],["/Class-Site/static/media/amber.a917f71c.jpg","a917f71c23b632d2479a6fd11c09d6b6"],["/Class-Site/static/media/arthur.ee0bda1c.jpg","ee0bda1c35980147ee973231edef38d3"],["/Class-Site/static/media/ben.b96c1668.jpg","b96c1668ba38ba28c4ead5f6daac5776"],["/Class-Site/static/media/dan.bc8d0f49.jpg","bc8d0f499741a5a8d633b69f08c70a7e"],["/Class-Site/static/media/dylan.e5e5becd.jpg","e5e5becd249073e1385463a013371acc"],["/Class-Site/static/media/envelope.7fc40e5c.png","7fc40e5c7e6f7e9de881d33c0ac6a9ab"],["/Class-Site/static/media/github.90db5a47.png","90db5a47c2a63f46abff7ee8e228d3b8"],["/Class-Site/static/media/jeremy.17003aae.jpg","17003aae211876900442a941bb68f99b"],["/Class-Site/static/media/jesie.cb8ca1ed.jpg","cb8ca1ed23263f49f18efee38af128de"],["/Class-Site/static/media/kelsey.dee34218.jpg","dee3421877cd634b74a802deb827ced6"],["/Class-Site/static/media/laura.5930e471.jpg","5930e471bd2b9c540ab7e4988d7f83d4"],["/Class-Site/static/media/lindsay.e63e9b73.jpg","e63e9b73b8dae61c23c1543b13794ac5"],["/Class-Site/static/media/linkedin-in.f4ab1671.png","f4ab1671af765b2217d329dbc41e2425"],["/Class-Site/static/media/mark.89d58d85.jpg","89d58d857162eef653f064d9235d9065"],["/Class-Site/static/media/meg.d2f87a32.jpg","d2f87a3206a4fa19161b0d961a734504"],["/Class-Site/static/media/melissa.1153e6e8.jpg","1153e6e8b2b24287a44f1b6121aee94e"],["/Class-Site/static/media/mikenormal.720e41e6.jpg","720e41e611a1f59fdc03ef81992a6985"],["/Class-Site/static/media/mikesilly.c14d3e09.jpg","c14d3e090e0a2337c5cff08bd983db70"],["/Class-Site/static/media/million.0e5b6728.jpg","0e5b67283e61f7dcd3978a58d0bd55ad"],["/Class-Site/static/media/nss24-logo.9f27ab19.svg","9f27ab1959c2e14c83ac57e49b735bf5"],["/Class-Site/static/media/phonthip.7cd778c4.jpg","7cd778c4052260b49a7a4a6f43107a15"],["/Class-Site/static/media/ryan.cff1dbaa.jpg","cff1dbaa858e6049fac35c55d5a4cc99"],["/Class-Site/static/media/sam.b014e77e.jpg","b014e77e058da957e7e0a1b1b82c1d72"],["/Class-Site/static/media/seriousryan.e706520c.jpg","e706520c35732c972cb5e92b07d43f40"],["/Class-Site/static/media/sillyamber.fef5c0f2.jpg","fef5c0f2b1bf8d514c1da7eeb8d350ea"],["/Class-Site/static/media/sillyarthur.6df9404f.jpg","6df9404f43089d50da5dce16ef9524cf"],["/Class-Site/static/media/sillyben.5f4730b7.jpg","5f4730b72292e8e8496aa3de5e639d05"],["/Class-Site/static/media/sillydan.6fbba6b1.jpg","6fbba6b197b29f0a3e265fff3d068681"],["/Class-Site/static/media/sillydylan.c26de9e0.jpg","c26de9e0e1e19883f13ce9d2bc5eee2d"],["/Class-Site/static/media/sillyjeremy.b4fd6446.jpg","b4fd644678a33758450f3711aa4925d8"],["/Class-Site/static/media/sillyjesie.39af367a.jpg","39af367acc874255f266e15e61959d90"],["/Class-Site/static/media/sillykelsey.e9336281.jpg","e933628104d44a2e167a681ba6414417"],["/Class-Site/static/media/sillylaura.3998f3f7.jpg","3998f3f78b2867e799ecb60149b1e4fd"],["/Class-Site/static/media/sillylindsay.08653ef7.jpg","08653ef79c9530f672c2d0877b294f2a"],["/Class-Site/static/media/sillymark.316b162d.jpg","316b162dffbb14da72fd1e509122418e"],["/Class-Site/static/media/sillymeg.c9b86fbf.jpg","c9b86fbf51d613e33df16b9424d083d7"],["/Class-Site/static/media/sillymelissa.d4a9d680.jpg","d4a9d680d5f0ff4a77822975f5a8dd60"],["/Class-Site/static/media/sillymillion.121f5c6c.jpg","121f5c6c7482ebff2ca0197f2dd2a829"],["/Class-Site/static/media/sillyphonthip.735be6d7.jpg","735be6d77e493c3c62e3c3f3d6209a43"],["/Class-Site/static/media/sillysam.08bed6eb.jpg","08bed6eb8ca0387bd57b3126ccc51786"],["/Class-Site/static/media/sillytaylor.d8908033.jpg","d8908033d830d12a1bc087a396feec66"],["/Class-Site/static/media/taylor.77c796bd.jpg","77c796bdb9c8db88200549a331058eb3"],["/Class-Site/static/media/unicorn.58b228c4.svg","58b228c4609a6ba9cae66fb43b6c06a9"],["/Class-Site/static/media/wyfyLogo.944a25a2.png","944a25a2fb0a935700c8907c35963d1b"]],cacheName="sw-precache-v3-sw-precache-webpack-plugin-"+(self.registration?self.registration.scope:""),ignoreUrlParametersMatching=[/^utm_/],addDirectoryIndex=function(e,a){var t=new URL(e);return"/"===t.pathname.slice(-1)&&(t.pathname+=a),t.toString()},cleanResponse=function(a){return a.redirected?("body"in a?Promise.resolve(a.body):a.blob()).then(function(e){return new Response(e,{headers:a.headers,status:a.status,statusText:a.statusText})}):Promise.resolve(a)},createCacheKey=function(e,a,t,s){var i=new URL(e);return s&&i.pathname.match(s)||(i.search+=(i.search?"&":"")+encodeURIComponent(a)+"="+encodeURIComponent(t)),i.toString()},isPathWhitelisted=function(e,a){if(0===e.length)return!0;var t=new URL(a).pathname;return e.some(function(e){return t.match(e)})},stripIgnoredUrlParameters=function(e,t){var a=new URL(e);return a.hash="",a.search=a.search.slice(1).split("&").map(function(e){return e.split("=")}).filter(function(a){return t.every(function(e){return!e.test(a[0])})}).map(function(e){return e.join("=")}).join("&"),a.toString()},hashParamName="_sw-precache",urlsToCacheKeys=new Map(precacheConfig.map(function(e){var a=e[0],t=e[1],s=new URL(a,self.location),i=createCacheKey(s,hashParamName,t,/\.\w{8}\./);return[s.toString(),i]}));function setOfCachedUrls(e){return e.keys().then(function(e){return e.map(function(e){return e.url})}).then(function(e){return new Set(e)})}self.addEventListener("install",function(e){e.waitUntil(caches.open(cacheName).then(function(s){return setOfCachedUrls(s).then(function(t){return Promise.all(Array.from(urlsToCacheKeys.values()).map(function(a){if(!t.has(a)){var e=new Request(a,{credentials:"same-origin"});return fetch(e).then(function(e){if(!e.ok)throw new Error("Request for "+a+" returned a response with status "+e.status);return cleanResponse(e).then(function(e){return s.put(a,e)})})}}))})}).then(function(){return self.skipWaiting()}))}),self.addEventListener("activate",function(e){var t=new Set(urlsToCacheKeys.values());e.waitUntil(caches.open(cacheName).then(function(a){return a.keys().then(function(e){return Promise.all(e.map(function(e){if(!t.has(e.url))return a.delete(e)}))})}).then(function(){return self.clients.claim()}))}),self.addEventListener("fetch",function(a){if("GET"===a.request.method){var e,t=stripIgnoredUrlParameters(a.request.url,ignoreUrlParametersMatching),s="index.html";(e=urlsToCacheKeys.has(t))||(t=addDirectoryIndex(t,s),e=urlsToCacheKeys.has(t));var i="/Class-Site/index.html";!e&&"navigate"===a.request.mode&&isPathWhitelisted(["^(?!\\/__).*"],a.request.url)&&(t=new URL(i,self.location).toString(),e=urlsToCacheKeys.has(t)),e&&a.respondWith(caches.open(cacheName).then(function(e){return e.match(urlsToCacheKeys.get(t)).then(function(e){if(e)return e;throw Error("The cached response that was expected is missing.")})}).catch(function(e){return console.warn('Couldn\'t serve response for "%s" from cache: %O',a.request.url,e),fetch(a.request)}))}});