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
    "url": "assets/js/17.8dcf4980.js",
    "revision": "fa59254a25472a93538ad2b6ae9c27fc"
  },
  {
    "url": "assets/js/18.3455462e.js",
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
    "url": "assets/js/app.7c5e6917.js",
    "revision": "db77947bd473f7589530dc97382f9a9b"
  },
  {
    "url": "goals/1-1. 포트폴리오.html",
    "revision": "f88f59c03806f28c28162229bc312224"
  },
  {
    "url": "images/logo-144.png",
    "revision": "6c61c757102de8906aa4f8e7abd8adb9"
  },
  {
    "url": "index.html",
    "revision": "0b4f11616cae6bbc7a0a8c1860e5199f"
  },
  {
    "url": "SWEA/1-1. List1.html",
    "revision": "30a6e34f205f9d7f346339651a20ff88"
  },
  {
    "url": "SWEA/1-2. List2.html",
    "revision": "71b381fb0efb0464e49fc8c51c3976dc"
  },
  {
    "url": "SWEA/1-3. String.html",
    "revision": "330b0e1bc9e871766ffc3cbadbf03dde"
  },
  {
    "url": "SWEA/1-4. Stack1.html",
    "revision": "e828a210b70937d8d0b47d4c58500c0a"
  },
  {
    "url": "SWEA/1-5. Stack2.html",
    "revision": "430ca2c6e841bd9c1799130bc779a237"
  },
  {
    "url": "SWEA/1-6. Queue.html",
    "revision": "3efed712743951a3d1304a95c3b198e0"
  },
  {
    "url": "SWEA/1-7. Linked List.html",
    "revision": "8fd3c188265910f5908701320d413284"
  },
  {
    "url": "SWEA/1-8. Tree.html",
    "revision": "911f2bd642836a3f21d3b157e993639a"
  },
  {
    "url": "SWEA/1-9. 시작하기.html",
    "revision": "4540f8b64d2594f1e3bfba4ba851f104"
  },
  {
    "url": "SWEA/2-1. 완전 검색.html",
    "revision": "98120e119886ff10192daa0fc8767b5e"
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
