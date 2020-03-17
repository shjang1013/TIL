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
    "url": "404.html",
    "revision": "2962f3e408148e10ef98d61809e3cc5e"
  },
  {
    "url": "assets/css/0.styles.750e488e.css",
    "revision": "a7c1043598a724ee4d68d8a761e0083f"
  },
  {
    "url": "assets/img/search.83621669.svg",
    "revision": "83621669651b9a3d4bf64d1a670ad856"
  },
  {
    "url": "assets/js/2.ef315f58.js",
    "revision": "1b66b51814c757198972593cd10e9946"
  },
  {
    "url": "assets/js/3.04e2f9e1.js",
    "revision": "7047924b41c72c4866289a9376e29736"
  },
  {
    "url": "assets/js/4.4a14eea8.js",
    "revision": "9821000b7ce9f712633ecd7a73edbd1c"
  },
  {
    "url": "assets/js/5.1c0b530d.js",
    "revision": "25ff13ffc5c1c59502d0dcb3b27c98d8"
  },
  {
    "url": "assets/js/6.11a575c2.js",
    "revision": "d1470f23051d3f13eb3896b5196f0161"
  },
  {
    "url": "assets/js/7.0342f71e.js",
    "revision": "0dd59ccf0336d5aff13be4bdc6b1aa63"
  },
  {
    "url": "assets/js/app.54f401f5.js",
    "revision": "68bc24be27440e3cab88c5d8e2d3b647"
  },
  {
    "url": "images/logo-144.png",
    "revision": "58993cb9039cd296103c215784f5ffd5"
  },
  {
    "url": "index.html",
    "revision": "f695278bccf2430f00fa382225cc30d7"
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
