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
    "url": "assets/css/0.styles.976c2f0b.css",
    "revision": "cbce3ae6f6cb6bb1541f752a361db8f0"
  },
  {
    "url": "assets/img/search.83621669.svg",
    "revision": "83621669651b9a3d4bf64d1a670ad856"
  },
  {
    "url": "assets/js/10.7480456b.js",
    "revision": "d8616575bbac29e7f1403a7354b7e5b0"
  },
  {
    "url": "assets/js/11.f138c72a.js",
    "revision": "41aa5d314fa5442c2f98586f12a2fefb"
  },
  {
    "url": "assets/js/12.1f52586e.js",
    "revision": "906990820209a5df9d70151c52521cab"
  },
  {
    "url": "assets/js/13.e45bd7eb.js",
    "revision": "64c4110a7c50f47cda05f1e5fb635581"
  },
  {
    "url": "assets/js/14.5d49c8de.js",
    "revision": "c8997968bb21a7ac429f95cc8446d031"
  },
  {
    "url": "assets/js/15.c3a44b13.js",
    "revision": "b1a2b56cfe022c2e95edd23e6fedb2f2"
  },
  {
    "url": "assets/js/16.7963a2c2.js",
    "revision": "ed70cb3ea816f63cb8bfd27672115ea3"
  },
  {
    "url": "assets/js/17.90132730.js",
    "revision": "1ace7a942172e701812e56f3698e48ad"
  },
  {
    "url": "assets/js/18.2348d86c.js",
    "revision": "a5f50bb40a7b6f7aa1aa46f6d04324cd"
  },
  {
    "url": "assets/js/19.96482676.js",
    "revision": "fd5456fcce578891313866019f10f7d3"
  },
  {
    "url": "assets/js/2.0964fbf3.js",
    "revision": "fddd58f8f028d8a771bbb804aaedb4d8"
  },
  {
    "url": "assets/js/3.88e55457.js",
    "revision": "31baa3be108b8be01b9f26a8cc498af2"
  },
  {
    "url": "assets/js/4.5c998aac.js",
    "revision": "1286bfcb7d48b8ff5e1b2635a65bd0ef"
  },
  {
    "url": "assets/js/5.7cc89cd2.js",
    "revision": "2815741436f9eba125565466877b5141"
  },
  {
    "url": "assets/js/6.5ed133cc.js",
    "revision": "1642608134407617a8e33b3030fc4886"
  },
  {
    "url": "assets/js/7.54e0b3b3.js",
    "revision": "15c79d116d408d8d7ddc5d06635b15a0"
  },
  {
    "url": "assets/js/8.28b26baf.js",
    "revision": "bfe878b96cf869eea215455d6cc54cfc"
  },
  {
    "url": "assets/js/9.abcb0067.js",
    "revision": "65b956f5d877d1a594e725b90e9f0ccb"
  },
  {
    "url": "assets/js/app.befd5e2f.js",
    "revision": "fb336a0e0365e9ed1b912ee5a42b1c6f"
  },
  {
    "url": "goals/2020.html",
    "revision": "46eaccf2f7b9dbcf2a764aa77d16e615"
  },
  {
    "url": "images/logo-144.png",
    "revision": "6c61c757102de8906aa4f8e7abd8adb9"
  },
  {
    "url": "SWEA/1. List1.html",
    "revision": "8083fd00a4f5b9fbdce4bc1cfba90e0c"
  },
  {
    "url": "SWEA/10. 완전 검색.html",
    "revision": "3c1d4fe378f7e7ca7736a706efeaa799"
  },
  {
    "url": "SWEA/2. List2.html",
    "revision": "56a83cdf8bce1b258d7d17a8245a4137"
  },
  {
    "url": "SWEA/3. String.html",
    "revision": "e086998f5203db007868239e17c0205e"
  },
  {
    "url": "SWEA/4. Stack1.html",
    "revision": "eb63c476548d1e823cca55a3a013627b"
  },
  {
    "url": "SWEA/5. Stack2.html",
    "revision": "cf66bce9e52089d4462d1f68dda4bf5e"
  },
  {
    "url": "SWEA/6. Queue.html",
    "revision": "4f762b671dcf8dae3d783601bfcc6ccf"
  },
  {
    "url": "SWEA/7. Linked List.html",
    "revision": "a22b8a93ee652b82916f49a4ee5eaf22"
  },
  {
    "url": "SWEA/8. Tree.html",
    "revision": "c87b86a4431827b89f4bc37ac8a2f3ba"
  },
  {
    "url": "SWEA/9. 시작하기.html",
    "revision": "dbad65cb140aaaf8a5a5273d38e4a13e"
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
