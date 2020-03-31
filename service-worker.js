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
    "url": "assets/css/0.styles.a7f77900.css",
    "revision": "f33946d1d5f32f0c9a3cecbc09cac56d"
  },
  {
    "url": "assets/img/search.83621669.svg",
    "revision": "83621669651b9a3d4bf64d1a670ad856"
  },
  {
    "url": "assets/js/10.3959c354.js",
    "revision": "d8616575bbac29e7f1403a7354b7e5b0"
  },
  {
    "url": "assets/js/11.af0743c7.js",
    "revision": "41aa5d314fa5442c2f98586f12a2fefb"
  },
  {
    "url": "assets/js/12.19b385db.js",
    "revision": "906990820209a5df9d70151c52521cab"
  },
  {
    "url": "assets/js/13.75b8b9c9.js",
    "revision": "64c4110a7c50f47cda05f1e5fb635581"
  },
  {
    "url": "assets/js/14.60a091a9.js",
    "revision": "c8997968bb21a7ac429f95cc8446d031"
  },
  {
    "url": "assets/js/15.439104ad.js",
    "revision": "b1a2b56cfe022c2e95edd23e6fedb2f2"
  },
  {
    "url": "assets/js/16.3da7c945.js",
    "revision": "ed70cb3ea816f63cb8bfd27672115ea3"
  },
  {
    "url": "assets/js/17.8b122e16.js",
    "revision": "e23ed7c2c508289a4dbacb4fb28a35fc"
  },
  {
    "url": "assets/js/18.a3699333.js",
    "revision": "292e2c3826418c3e5480d3743f97dee1"
  },
  {
    "url": "assets/js/19.b277897b.js",
    "revision": "a6524b38b57159a47273ca42d06ba20f"
  },
  {
    "url": "assets/js/2.fee389c4.js",
    "revision": "fddd58f8f028d8a771bbb804aaedb4d8"
  },
  {
    "url": "assets/js/20.fdcfb913.js",
    "revision": "92f52d596ff7fbb94f305e3f8173bcfe"
  },
  {
    "url": "assets/js/3.0213d69e.js",
    "revision": "2a044d44bf8ff33e95597205c7b3388a"
  },
  {
    "url": "assets/js/4.3f56d253.js",
    "revision": "1286bfcb7d48b8ff5e1b2635a65bd0ef"
  },
  {
    "url": "assets/js/5.6b0d82f3.js",
    "revision": "30882e43f6ed4384ee6fee3bed2090d6"
  },
  {
    "url": "assets/js/6.e2dff124.js",
    "revision": "1642608134407617a8e33b3030fc4886"
  },
  {
    "url": "assets/js/7.0c52ab47.js",
    "revision": "fa24f3a966a8be2eb8fb6698bf57c27c"
  },
  {
    "url": "assets/js/8.8fd30062.js",
    "revision": "e99de9deb4b01aa8a76352c520687e97"
  },
  {
    "url": "assets/js/9.cbb69339.js",
    "revision": "65b956f5d877d1a594e725b90e9f0ccb"
  },
  {
    "url": "assets/js/app.307460e5.js",
    "revision": "6e9d53ca31a19282ad7317ed591a8990"
  },
  {
    "url": "goals/1-1. 포트폴리오.html",
    "revision": "dae186057c3e9d7ddb83171ef1b14c08"
  },
  {
    "url": "images/logo-144.png",
    "revision": "6c61c757102de8906aa4f8e7abd8adb9"
  },
  {
    "url": "index.html",
    "revision": "86eb0416fb0f70846de2ba0b9c4b4d5e"
  },
  {
    "url": "SWEA/1-1. List1.html",
    "revision": "464c2d0b94173c0fc2d0f5d5919720bb"
  },
  {
    "url": "SWEA/1-2. List2.html",
    "revision": "4e63221b537dd2eaf9b442889cabe242"
  },
  {
    "url": "SWEA/1-3. String.html",
    "revision": "6a8743dfc6368ae7d0c7f2af2b243d76"
  },
  {
    "url": "SWEA/1-4. Stack1.html",
    "revision": "8fb89aaeb3975513514d6a82b44b0e49"
  },
  {
    "url": "SWEA/1-5. Stack2.html",
    "revision": "fa8bb83eacbb7a1b02d4db88b2ce43e1"
  },
  {
    "url": "SWEA/1-6. Queue.html",
    "revision": "3a68a1a56aed93b597aaa58ce1489de8"
  },
  {
    "url": "SWEA/1-7. Linked List.html",
    "revision": "7defe0128d1db5f0621c59ffa12ae739"
  },
  {
    "url": "SWEA/1-8. Tree.html",
    "revision": "50600eb855e8f12d4a28a1371a414a7a"
  },
  {
    "url": "SWEA/1-9. 시작하기.html",
    "revision": "632c2e3ba626489ff41d42d1118c9787"
  },
  {
    "url": "SWEA/2-1. 완전 검색.html",
    "revision": "fdb4fa8bd8cb680864128bb6d1eb557c"
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
