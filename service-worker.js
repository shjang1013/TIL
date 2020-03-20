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

importScripts("https://storage.googleapis.com/workbox-cdn/releases/4.3.1/workbox-sw.js");

self.addEventListener('message', (event) => {
  if (event.data && event.data.type === 'SKIP_WAITING') {
    self.skipWaiting();
  }
});

/**
 * The workboxSW.precacheAndRoute() method efficiently caches and responds to
 * requests for URLs in the manifest.
 * See https://goo.gl/S9QRab
 */
self.__precacheManifest = [
  {
    "url": "assets/css/0.styles.78cb52a9.css",
    "revision": "c167dc745335c86dc9ead1ec93f346f1"
  },
  {
    "url": "assets/img/search.83621669.svg",
    "revision": "83621669651b9a3d4bf64d1a670ad856"
  },
  {
    "url": "assets/js/2.84b2babc.js",
    "revision": "ba1b07fb0a48066d9603efd1f0b1fd44"
  },
  {
    "url": "assets/js/3.74c6d32a.js",
    "revision": "95d7992184d2eb02ce766db00ac32da8"
  },
  {
    "url": "assets/js/4.a6c8e5ef.js",
    "revision": "e7cb2d093ded65cce3db05e26bead737"
  },
  {
    "url": "assets/js/5.7506284c.js",
    "revision": "6fd911b0f45e648a28d35f0e5cdea6d5"
  },
  {
    "url": "assets/js/6.35e9f53c.js",
    "revision": "1f30f6aea04300fab95f2c66e3e92e2e"
  },
  {
    "url": "assets/js/7.c7bcfa76.js",
    "revision": "8c4b93ade7fb09865fe3018487536a32"
  },
  {
    "url": "assets/js/8.bacf05a4.js",
    "revision": "97663adb68a0052a862f3bbdeb4a510a"
  },
  {
    "url": "assets/js/9.8747911a.js",
    "revision": "d2930f01d8fca25c9ba2fa68172242eb"
  },
  {
    "url": "assets/js/app.8a3d4569.js",
    "revision": "aa2ba9190f551a2448e4239a1fb3a862"
  },
  {
    "url": "goals/2020.html",
    "revision": "b2bd896c7dfc9b4430e31afca0b0be8c"
  },
  {
    "url": "images/logo-144.png",
    "revision": "58993cb9039cd296103c215784f5ffd5"
  },
  {
    "url": "index.html",
    "revision": "f001916f626360168801188839811671"
  }
].concat(self.__precacheManifest || []);
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
