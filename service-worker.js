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
    "url": "assets/js/10.66c02d9a.js",
    "revision": "bfe2ba366ce696b358a522f44db0f10f"
  },
  {
    "url": "assets/js/11.a2319768.js",
    "revision": "2a3355ec44e0be7ede0fd957b56444b2"
  },
  {
    "url": "assets/js/12.52bc24ee.js",
    "revision": "7f6e743f9d413fbbcde8a97721f9bf68"
  },
  {
    "url": "assets/js/13.840197f9.js",
    "revision": "3fe377c36dd4c1e40d3849d2fd548398"
  },
  {
    "url": "assets/js/14.ec545e52.js",
    "revision": "a6c41d8ca25455abc69ba2d04f1020df"
  },
  {
    "url": "assets/js/15.22741b29.js",
    "revision": "79607d3dedd461636b497d85d0594106"
  },
  {
    "url": "assets/js/16.670274a3.js",
    "revision": "786dbd2ae576e9b020054cdf24f943d8"
  },
  {
    "url": "assets/js/17.6cb50ce5.js",
    "revision": "d9b37f51cc4445c813882801d96bb50e"
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
    "url": "assets/js/3.88e55457.js",
    "revision": "31baa3be108b8be01b9f26a8cc498af2"
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
    "url": "assets/js/8.dd8b3c7e.js",
    "revision": "e99de9deb4b01aa8a76352c520687e97"
  },
  {
    "url": "assets/js/9.d43a14ac.js",
    "revision": "a4a755c7f12eb27d2e933cc39c37e7d1"
  },
  {
    "url": "assets/js/app.46008e9a.js",
    "revision": "715abc3fc3667674e82f12e44f2e18ec"
  },
  {
    "url": "goals/2020.html",
    "revision": "5df1e72f9b9e86b6b44fa3a6e2bf8f6b"
  },
  {
    "url": "images/logo-144.png",
    "revision": "6c61c757102de8906aa4f8e7abd8adb9"
  },
  {
    "url": "index.html",
    "revision": "648cafc31d07aaba5521f5015e9c8498"
  },
  {
    "url": "SWEA/1. List1.html",
    "revision": "c15cb81a80ae3fce7e98ab995d666d07"
  },
  {
    "url": "SWEA/10. 완전 검색.html",
    "revision": "b4c78a5251ee28a494961d7f1da932e9"
  },
  {
    "url": "SWEA/2. List2.html",
    "revision": "9362a96961c2f710dc54a712766ec839"
  },
  {
    "url": "SWEA/3. String.html",
    "revision": "6156b704117a8f22fe168b318a7002e4"
  },
  {
    "url": "SWEA/4. Stack1.html",
    "revision": "34ec3320b543c466491d3c0c03f6ac06"
  },
  {
    "url": "SWEA/5. Stack2.html",
    "revision": "f714e5695b4a5620a413c49c8ee28eec"
  },
  {
    "url": "SWEA/6. Queue.html",
    "revision": "4725a865c29b04703f9811841c7b8601"
  },
  {
    "url": "SWEA/7. Linked List.html",
    "revision": "e4523a7f17a949855428a6c972699099"
  },
  {
    "url": "SWEA/8. Tree.html",
    "revision": "892c676111a92f274fbfc20d375a92db"
  },
  {
    "url": "SWEA/9. 시작하기.html",
    "revision": "f03b49ac7076374e12ab196eac1ab82e"
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
