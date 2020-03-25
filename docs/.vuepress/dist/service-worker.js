/**
 * Welcome to your Workbox-powered service worker!
 *
 * You'll need to register this file in your web app and you should
 * disable HTTP caching for this file too.
 * See https://goo.gl/nhQhGp
 *
 * The rest of the code is auto-generated. Please don't update this file
 * directly; instead, make changes to your Workbox build configuration
 * and re-run your build process.
 * See https://goo.gl/2aRDsh
 */

importScripts("https://storage.googleapis.com/workbox-cdn/releases/3.6.3/workbox-sw.js");

/**
 * The workboxSW.precacheAndRoute() method efficiently caches and responds to
 * requests for URLs in the manifest.
 * See https://goo.gl/S9QRab
 */
self.__precacheManifest = [
  {
    "url": "404.html",
    "revision": "c2c7a93b01e5fd0f48e59c08db9768a3"
  },
  {
    "url": "assets/css/0.styles.267f1845.css",
    "revision": "ffafe8bcad77ebc2e445a3ddb29494c2"
  },
  {
    "url": "assets/img/search.83621669.svg",
    "revision": "83621669651b9a3d4bf64d1a670ad856"
  },
  {
    "url": "assets/js/10.3f672da5.js",
    "revision": "b4d01f698003a2f3ad4210d08f9c9d49"
  },
  {
    "url": "assets/js/11.b8fb2e21.js",
    "revision": "d05a080957f176864933271eb56115a6"
  },
  {
    "url": "assets/js/12.c0954f17.js",
    "revision": "099e4aaf2c240c2b8f18dc5cd89a5ff1"
  },
  {
    "url": "assets/js/13.a3d93dc6.js",
    "revision": "6903c71739cba972c7fb5b98e709e552"
  },
  {
    "url": "assets/js/14.bf45ac77.js",
    "revision": "f1d9f6b4d19ac44c35f4775669506eed"
  },
  {
    "url": "assets/js/15.1c6e5c1e.js",
    "revision": "b88494b1a0624aa0dd237f5814dacad7"
  },
  {
    "url": "assets/js/16.4bd5bf1c.js",
    "revision": "5f12ed2fb238583a45aad1e219ef3274"
  },
  {
    "url": "assets/js/2.445532d3.js",
    "revision": "bb92cb7d3a65e0b9b653d0c70529ccd8"
  },
  {
    "url": "assets/js/3.e6dbf16f.js",
    "revision": "01bed930dc09f9bd9977317645fc951b"
  },
  {
    "url": "assets/js/4.a83abfee.js",
    "revision": "63623f9e2ef2b647c11ba8aa0177da10"
  },
  {
    "url": "assets/js/5.1c0b530d.js",
    "revision": "25ff13ffc5c1c59502d0dcb3b27c98d8"
  },
  {
    "url": "assets/js/6.e7c371fc.js",
    "revision": "2d38a40d915d5042b3e4e0eea20dbfbe"
  },
  {
    "url": "assets/js/7.0b4291c9.js",
    "revision": "5766f4374c539393a021720f9b05c899"
  },
  {
    "url": "assets/js/8.f862f306.js",
    "revision": "17b8be43a8b9beefcdb2c98b5d56afd1"
  },
  {
    "url": "assets/js/9.a6f75d02.js",
    "revision": "e0877c7d01104a7e872ffd1cce15a1c3"
  },
  {
    "url": "assets/js/app.a2ded28e.js",
    "revision": "af8dfb4ad6ff90fa5064934afe2409d1"
  },
  {
    "url": "goals/2020.html",
    "revision": "e9ea9e5dfc5f0339e17e0024ec25f277"
  },
  {
    "url": "images/logo-144.png",
    "revision": "58993cb9039cd296103c215784f5ffd5"
  },
  {
    "url": "index.html",
    "revision": "0c5017ef686f1c295374848791eb64f9"
  },
  {
    "url": "SWEA/Linked List.html",
    "revision": "c394fdeed8c49fbb44e07fe5063b9cb7"
  },
  {
    "url": "SWEA/List1.html",
    "revision": "34f59ffdacf3345a0f79c418b374a0c1"
  },
  {
    "url": "SWEA/List2.html",
    "revision": "cd81dc32264912ec1d897fb9994cd14c"
  },
  {
    "url": "SWEA/Queue.html",
    "revision": "5357e23ed20fd4fa978c4667b6219611"
  },
  {
    "url": "SWEA/Stack1.html",
    "revision": "749cada762aa168fb7451e0dd14bd556"
  },
  {
    "url": "SWEA/Stack2.html",
    "revision": "ba7bda2bb831a33f517e059e8cb6c550"
  },
  {
    "url": "SWEA/String.html",
    "revision": "c55c2daf23312f06947f1f3a18cd959e"
  },
  {
    "url": "SWEA/Tree.html",
    "revision": "84d531bcdfc79bf7ecc92bd64405463d"
  }
].concat(self.__precacheManifest || []);
workbox.precaching.suppressWarnings();
workbox.precaching.precacheAndRoute(self.__precacheManifest, {});
addEventListener('message', event => {
  const replyPort = event.ports[0]
  const message = event.data
  if (replyPort && message && message.type === 'skip-waiting') {
    event.waitUntil(
      self.skipWaiting().then(
        () => replyPort.postMessage({ error: null }),
        error => replyPort.postMessage({ error })
      )
    )
  }
})
