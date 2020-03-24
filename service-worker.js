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
    "url": "assets/js/15.8b92fd17.js",
    "revision": "d1becb8c108b8831e089b4095ddce29c"
  },
  {
    "url": "assets/js/16.56c14567.js",
    "revision": "61814717a73139ece159c083505ed2b3"
  },
  {
    "url": "assets/js/17.a78c9bad.js",
    "revision": "ca93830197d226f3193e89aad64f3148"
  },
  {
    "url": "assets/js/18.5e90f7a4.js",
    "revision": "89367b00f86ab1065732ebd2a9c97b09"
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
    "url": "assets/js/4.cfc9bfa1.js",
    "revision": "78835e92d1411b5f90dbfedacd4b5aa1"
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
    "url": "assets/js/7.567dcba1.js",
    "revision": "2ddb92877ac927f3bf2a870b4c6c7d3c"
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
    "url": "assets/js/app.78139c15.js",
    "revision": "0e1b3e20fc086542a7b732b230ec53fa"
  },
  {
    "url": "goals/2020.html",
    "revision": "f00ad1142455912bcf6fb650b7751c44"
  },
  {
    "url": "images/logo-144.png",
    "revision": "58993cb9039cd296103c215784f5ffd5"
  },
  {
    "url": "index.html",
    "revision": "2752648895b65bd1392341abed26f852"
  },
  {
    "url": "SWEA/1. List1.html",
    "revision": "810fca83c1b9da03710628da21ff6fe8"
  },
  {
    "url": "SWEA/2. List2.html",
    "revision": "52336e663a0de97b38535bea75273b08"
  },
  {
    "url": "SWEA/3. String.html",
    "revision": "2ee89c9ccf779bcdfc75c1c03375a923"
  },
  {
    "url": "SWEA/4. Stack1.html",
    "revision": "37a751895aa4d2da96adf47a42dd5879"
  },
  {
    "url": "SWEA/5. Stack2.html",
    "revision": "895450cef59c7d51df7e766bed202e0b"
  },
  {
    "url": "SWEA/6. Queue.html",
    "revision": "8e39a4dad56e2120ba2cfd291023514f"
  },
  {
    "url": "SWEA/7. Linked List.html",
    "revision": "c1bca8b058ac1d028ff4756b51e3f382"
  },
  {
    "url": "SWEA/8. Tree.html",
    "revision": "c8f646095fa0dd8faa271fe32f8e1b2c"
  },
  {
    "url": "SWEA/9. 시작하기.html",
    "revision": "bc575065182addadb1a81546542376f7"
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
