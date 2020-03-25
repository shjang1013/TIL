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
    "url": "assets/css/0.styles.5b466563.css",
    "revision": "f33946d1d5f32f0c9a3cecbc09cac56d"
  },
  {
    "url": "assets/img/search.83621669.svg",
    "revision": "83621669651b9a3d4bf64d1a670ad856"
  },
  {
    "url": "assets/js/10.1b31945e.js",
    "revision": "d8616575bbac29e7f1403a7354b7e5b0"
  },
  {
    "url": "assets/js/11.f70b82e0.js",
    "revision": "41aa5d314fa5442c2f98586f12a2fefb"
  },
  {
    "url": "assets/js/12.8fa34a3d.js",
    "revision": "906990820209a5df9d70151c52521cab"
  },
  {
    "url": "assets/js/13.f77ff7c8.js",
    "revision": "64c4110a7c50f47cda05f1e5fb635581"
  },
  {
    "url": "assets/js/14.7c811b7f.js",
    "revision": "c8997968bb21a7ac429f95cc8446d031"
  },
  {
    "url": "assets/js/15.a011ba41.js",
    "revision": "b1a2b56cfe022c2e95edd23e6fedb2f2"
  },
  {
    "url": "assets/js/16.430f8488.js",
    "revision": "ed70cb3ea816f63cb8bfd27672115ea3"
  },
  {
    "url": "assets/js/17.017e03c1.js",
    "revision": "df039ad55c3f45a756521da336542503"
  },
  {
    "url": "assets/js/18.2e9225a3.js",
    "revision": "292e2c3826418c3e5480d3743f97dee1"
  },
  {
    "url": "assets/js/19.29e780d8.js",
    "revision": "a6524b38b57159a47273ca42d06ba20f"
  },
  {
    "url": "assets/js/2.0964fbf3.js",
    "revision": "fddd58f8f028d8a771bbb804aaedb4d8"
  },
  {
    "url": "assets/js/20.118ea405.js",
    "revision": "92f52d596ff7fbb94f305e3f8173bcfe"
  },
  {
    "url": "assets/js/3.7dd87ab4.js",
    "revision": "2a044d44bf8ff33e95597205c7b3388a"
  },
  {
    "url": "assets/js/4.5c998aac.js",
    "revision": "1286bfcb7d48b8ff5e1b2635a65bd0ef"
  },
  {
    "url": "assets/js/5.57035289.js",
    "revision": "30882e43f6ed4384ee6fee3bed2090d6"
  },
  {
    "url": "assets/js/6.5ed133cc.js",
    "revision": "1642608134407617a8e33b3030fc4886"
  },
  {
    "url": "assets/js/7.091098b9.js",
    "revision": "fa24f3a966a8be2eb8fb6698bf57c27c"
  },
  {
    "url": "assets/js/8.bca3fb2b.js",
    "revision": "e99de9deb4b01aa8a76352c520687e97"
  },
  {
    "url": "assets/js/9.229951c6.js",
    "revision": "65b956f5d877d1a594e725b90e9f0ccb"
  },
  {
    "url": "assets/js/app.60557a5b.js",
    "revision": "bfe85baaeac401a2fa67e655fd07b0f1"
  },
  {
    "url": "goals/2020.html",
    "revision": "031e33397b05a6fa61eeeb14a1529615"
  },
  {
    "url": "images/logo-144.png",
    "revision": "6c61c757102de8906aa4f8e7abd8adb9"
  },
  {
    "url": "index.html",
    "revision": "f1fb86ade0041ed615e2c2f1f97c2c0a"
  },
  {
    "url": "SWEA/1-1. List1.html",
    "revision": "7c1ed2cb8be2e797484308023adb3ea3"
  },
  {
    "url": "SWEA/1-2. List2.html",
    "revision": "515d59904e62302de81a4ac7f55abf6c"
  },
  {
    "url": "SWEA/1-3. String.html",
    "revision": "a11481b492ea848bd474d78b04cba90b"
  },
  {
    "url": "SWEA/1-4. Stack1.html",
    "revision": "a441ed4902dcd53acce2550c5ebee127"
  },
  {
    "url": "SWEA/1-5. Stack2.html",
    "revision": "855436763718d9dfb028df882b8d7c10"
  },
  {
    "url": "SWEA/1-6. Queue.html",
    "revision": "1c374b3ae1891444583427a5302acce7"
  },
  {
    "url": "SWEA/1-7. Linked List.html",
    "revision": "4ff6945358be9c7e76289a4b1384ec17"
  },
  {
    "url": "SWEA/1-8. Tree.html",
    "revision": "14e893a674e57cc1fa4b707318356a70"
  },
  {
    "url": "SWEA/1-9. 시작하기.html",
    "revision": "53d461edc0c806fe9fd716fc380f0ae2"
  },
  {
    "url": "SWEA/2-1. 완전 검색.html",
    "revision": "03f9130a13c3898dce0d62e6499b000b"
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
