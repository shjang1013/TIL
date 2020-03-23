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
    "url": "assets/js/10.61d3b848.js",
    "revision": "cb01f2490833c7f609472dab7a6fa16f"
  },
  {
    "url": "assets/js/11.04a525e7.js",
    "revision": "e4109cbdf6423f101b668a0b06ee22fb"
  },
  {
    "url": "assets/js/12.7cfc0852.js",
    "revision": "b3123d17eace03d2cab6554abfc16f29"
  },
  {
    "url": "assets/js/13.4025c473.js",
    "revision": "65248216ad43a7c2ea6e3f19619c69e2"
  },
  {
    "url": "assets/js/14.2d2cf6a6.js",
    "revision": "3ab35123617cfc65cd0164c77f9b4e29"
  },
  {
    "url": "assets/js/15.3e8da6a1.js",
    "revision": "e433b6c5c496b1d741f9b7fe32371688"
  },
  {
    "url": "assets/js/16.aaf390ab.js",
    "revision": "5f12ed2fb238583a45aad1e219ef3274"
  },
  {
    "url": "assets/js/17.4c350f4c.js",
    "revision": "67cc9f508a12e8832c36bc795cf41792"
  },
  {
    "url": "assets/js/2.19dc00e2.js",
    "revision": "50df686de073f853e1459466375ea4a9"
  },
  {
    "url": "assets/js/3.3c74e254.js",
    "revision": "c4a49d65d4bb51217d8b3c6ee06699cc"
  },
  {
    "url": "assets/js/4.b2a0a3f5.js",
    "revision": "e05cc6ae9e2269b1d14bf239e139a56a"
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
    "url": "assets/js/7.d66b3c79.js",
    "revision": "e6db9d2ce62f9f7f77db30362b6e8046"
  },
  {
    "url": "assets/js/8.f5dd01ab.js",
    "revision": "7f3395d9942a2870c03eef2cbf7dd439"
  },
  {
    "url": "assets/js/9.1a9adb8f.js",
    "revision": "30c5c50e0683c73980fadb279ede61ad"
  },
  {
    "url": "assets/js/app.c416f6b3.js",
    "revision": "a6d2e9c37a62861ed910a71a8463339a"
  },
  {
    "url": "goals/2020.html",
    "revision": "fe6551d6509a37fde20a1cb2cf70202c"
  },
  {
    "url": "images/logo-144.png",
    "revision": "58993cb9039cd296103c215784f5ffd5"
  },
  {
    "url": "index.html",
    "revision": "e41ffd945cd44b0d9c49aab5de7db380"
  },
  {
    "url": "SWEA/1. List1.html",
    "revision": "0bedd4ca381c46f3cc35254aaac16424"
  },
  {
    "url": "SWEA/2. List2.html",
    "revision": "72ca080f9eed2945cdce109619873f86"
  },
  {
    "url": "SWEA/3. String.html",
    "revision": "65346954425b7557d6f85285e14d0022"
  },
  {
    "url": "SWEA/4. Stack1.html",
    "revision": "b1bfdd4385cdebe2e9f0017b9b23af16"
  },
  {
    "url": "SWEA/5. Stack2.html",
    "revision": "4a3eae430b4565058f45dfadec75f19a"
  },
  {
    "url": "SWEA/6. Queue.html",
    "revision": "4dad008a58386ab401ff0d6de5edeade"
  },
  {
    "url": "SWEA/7. Linked List.html",
    "revision": "7b9d3e37eaf49905db94a58a6a01cd5f"
  },
  {
    "url": "SWEA/8. Tree.html",
    "revision": "54e692720a63e8d1fb527ff029a76355"
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
