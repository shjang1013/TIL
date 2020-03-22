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
    "url": "assets/js/10.d279f9c8.js",
    "revision": "2df3fe8554244024a179df8bd6ebcd63"
  },
  {
    "url": "assets/js/11.0e127a5e.js",
    "revision": "7a548e67ad36e3754666f6627707cd6d"
  },
  {
    "url": "assets/js/12.ee886b09.js",
    "revision": "371060e94140b47c2172a70ef3b72925"
  },
  {
    "url": "assets/js/13.47df2a4e.js",
    "revision": "f053dbc72437332ae0348744dc30c56e"
  },
  {
    "url": "assets/js/14.7ccec768.js",
    "revision": "f372ecc945cec13b139e1fc3d08e433e"
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
    "url": "assets/js/7.e778251c.js",
    "revision": "b9e3f9b0ff3d35b1c2b526ba2ea972b9"
  },
  {
    "url": "assets/js/8.ec86abd8.js",
    "revision": "6affd7b8c02529cccbccf1e95524c2e5"
  },
  {
    "url": "assets/js/9.834e8005.js",
    "revision": "fea0e5412592d165139e74d4f4d08eb4"
  },
  {
    "url": "assets/js/app.1ee8afbd.js",
    "revision": "18d3777a06da6ee8cffc07c4460c6b9b"
  },
  {
    "url": "goals/2020.html",
    "revision": "e714089287b75449a675604ba22d86c8"
  },
  {
    "url": "images/logo-144.png",
    "revision": "58993cb9039cd296103c215784f5ffd5"
  },
  {
    "url": "index.html",
    "revision": "bcec05539d9aa14909141f44c3924a0b"
  },
  {
    "url": "SWEA/Linked List.html",
    "revision": "0bb2725a2ea1d0468156b4de91902fa1"
  },
  {
    "url": "SWEA/List1.html",
    "revision": "fac32c2d7670b912f3df435ef43b6784"
  },
  {
    "url": "SWEA/List2.html",
    "revision": "e2d3bfe922587d75462a567e3d9f6516"
  },
  {
    "url": "SWEA/Queue.html",
    "revision": "7e89d27f4ef95056e730ed3a447a4f75"
  },
  {
    "url": "SWEA/Stack1.html",
    "revision": "06ce705f128fdc9b39605a65feea0583"
  },
  {
    "url": "SWEA/Stack2.html",
    "revision": "433de16b0c47fa79f7d328321520b79d"
  },
  {
    "url": "SWEA/String.html",
    "revision": "5ad2807acb2fe44d49d8cf907f898fa5"
  },
  {
    "url": "SWEA/Tree.html",
    "revision": "d48752b623a59d234a0abaf69072131d"
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
