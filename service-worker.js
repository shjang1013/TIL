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
    "url": "assets/css/0.styles.67ceecaa.css",
    "revision": "f33946d1d5f32f0c9a3cecbc09cac56d"
  },
  {
    "url": "assets/img/image.6d00559c.jpg",
    "revision": "6d00559ca51c779a60bac897f1634fdc"
  },
  {
    "url": "assets/img/search.83621669.svg",
    "revision": "83621669651b9a3d4bf64d1a670ad856"
  },
  {
    "url": "assets/js/10.53565a86.js",
    "revision": "bfe2ba366ce696b358a522f44db0f10f"
  },
  {
    "url": "assets/js/11.dd38a3d1.js",
    "revision": "2a3355ec44e0be7ede0fd957b56444b2"
  },
  {
    "url": "assets/js/12.8a15d59c.js",
    "revision": "7f6e743f9d413fbbcde8a97721f9bf68"
  },
  {
    "url": "assets/js/13.3aa8ecf1.js",
    "revision": "3fe377c36dd4c1e40d3849d2fd548398"
  },
  {
    "url": "assets/js/14.4562d4b0.js",
    "revision": "a6c41d8ca25455abc69ba2d04f1020df"
  },
  {
    "url": "assets/js/15.a722222c.js",
    "revision": "79607d3dedd461636b497d85d0594106"
  },
  {
    "url": "assets/js/16.605b62a4.js",
    "revision": "786dbd2ae576e9b020054cdf24f943d8"
  },
  {
    "url": "assets/js/17.faaf01fd.js",
    "revision": "d9b37f51cc4445c813882801d96bb50e"
  },
  {
    "url": "assets/js/18.d2aded4a.js",
    "revision": "c0ca3e2758250d732e26d33040931958"
  },
  {
    "url": "assets/js/19.727c9058.js",
    "revision": "e549749a05a38c4785779a72e477feda"
  },
  {
    "url": "assets/js/2.170f2245.js",
    "revision": "c7031f246805d6fc74c969fa1322cc89"
  },
  {
    "url": "assets/js/20.bfeeb12b.js",
    "revision": "3be3aecad7cad39906f7270f4c06ab25"
  },
  {
    "url": "assets/js/21.c141afee.js",
    "revision": "ff7fc519ce005fe9367601e019ef7004"
  },
  {
    "url": "assets/js/3.2f42b2e3.js",
    "revision": "c2a3d0754bb6d8b2b2b319abca242c9c"
  },
  {
    "url": "assets/js/4.22de8c0b.js",
    "revision": "b0825965766bb8ad0c74fadedb42bb66"
  },
  {
    "url": "assets/js/5.c3928ba2.js",
    "revision": "3fcf3e3c6b1fc87fe290822c49a9b4de"
  },
  {
    "url": "assets/js/6.7bda8340.js",
    "revision": "b85c42d6476fce5fb2681e7ef6493d81"
  },
  {
    "url": "assets/js/7.5699ad9f.js",
    "revision": "014b8d54315c77c8367a30f6ab384812"
  },
  {
    "url": "assets/js/8.5ef90a7f.js",
    "revision": "14564fa71573d270e8e92eac3ff805b3"
  },
  {
    "url": "assets/js/9.7c14c0ad.js",
    "revision": "5a5a5b077b747f42297a0ece33c7fc54"
  },
  {
    "url": "assets/js/app.22664d50.js",
    "revision": "b8598223b2e18e694b2b26a9f653f8af"
  },
  {
    "url": "goals/1-1. 포트폴리오.html",
    "revision": "7ee0e265db9ceaf79a639227c22eb9d5"
  },
  {
    "url": "images/logo-144.png",
    "revision": "6c61c757102de8906aa4f8e7abd8adb9"
  },
  {
    "url": "index.html",
    "revision": "cbd0fcdaf6c68ca7047afef208d90dad"
  },
  {
    "url": "SWEA/1-1. List1.html",
    "revision": "3b0aa995960946963437d3863061943a"
  },
  {
    "url": "SWEA/1-2. List2.html",
    "revision": "e159714abc070cbb3660054555bee53a"
  },
  {
    "url": "SWEA/1-3. String.html",
    "revision": "5ead08de5f297fed88991f4207306131"
  },
  {
    "url": "SWEA/1-4. Stack1.html",
    "revision": "0539be1f1a49b56d0c0c4cb58d2512c3"
  },
  {
    "url": "SWEA/1-5. Stack2.html",
    "revision": "b6d0ed5831067cfb17e9ac2fe5808b02"
  },
  {
    "url": "SWEA/1-6. Queue.html",
    "revision": "22bd29fe96ac4baca6a1a78ac84b4012"
  },
  {
    "url": "SWEA/1-7. Linked List.html",
    "revision": "d76adc29150c13bfe341b4655dd8e86c"
  },
  {
    "url": "SWEA/1-8. Tree.html",
    "revision": "c6ea57eeb860c000c0c3d198185d6fb2"
  },
  {
    "url": "SWEA/1-9. 시작하기.html",
    "revision": "aea3c8fe448c2f15b8d195b1508aa816"
  },
  {
    "url": "SWEA/2-1. 완전 검색.html",
    "revision": "8d41018388d99530a9f3967915707dd2"
  },
  {
    "url": "SWEA/2-2. 탐욕 알고리즘.html",
    "revision": "e608fc3ef6f700a102a833ca9ebe75f7"
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
