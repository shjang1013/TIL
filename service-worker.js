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
    "url": "assets/js/19.393754e2.js",
    "revision": "0bf0da026dcfffe0e4c46e2cb36248a1"
  },
  {
    "url": "assets/js/2.170f2245.js",
    "revision": "c7031f246805d6fc74c969fa1322cc89"
  },
  {
    "url": "assets/js/20.53d498df.js",
    "revision": "49796c26ed3bfd96fdaafac2699f6794"
  },
  {
    "url": "assets/js/21.b95fb246.js",
    "revision": "26602efa5ded0caaddff0629a64afb1f"
  },
  {
    "url": "assets/js/22.57300ca1.js",
    "revision": "999291be873d6be7a14d6cfdc1cfc1e8"
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
    "url": "assets/js/5.894122b6.js",
    "revision": "b51140fbf2070a6c284e4abdfc2bb52c"
  },
  {
    "url": "assets/js/6.1a084eca.js",
    "revision": "580cdac0b370c4b34e51dc7165c4eca4"
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
    "url": "assets/js/app.6d7564d5.js",
    "revision": "63fd2ae8ca8e07332bffa161bda3f9f4"
  },
  {
    "url": "goals/1-1. 포트폴리오.html",
    "revision": "6875f0eb941efe07d746a79f338f72a6"
  },
  {
    "url": "images/logo-144.png",
    "revision": "6c61c757102de8906aa4f8e7abd8adb9"
  },
  {
    "url": "index.html",
    "revision": "98a2ed504d785d776b784fbe192bd7a7"
  },
  {
    "url": "SpringBoot/1-1. 스트링 부트.html",
    "revision": "a4068c4ce26b114ad99faa93363d3f7c"
  },
  {
    "url": "SWEA/1-1. List1.html",
    "revision": "5899c9c091e68681e15ce5a3fcc94457"
  },
  {
    "url": "SWEA/1-2. List2.html",
    "revision": "65c841c7de487fa36f9de981b30b25a7"
  },
  {
    "url": "SWEA/1-3. String.html",
    "revision": "04f5a8a7d592d67f0280d0c9edd2ca02"
  },
  {
    "url": "SWEA/1-4. Stack1.html",
    "revision": "f45a3183dd038934c8730946a496a662"
  },
  {
    "url": "SWEA/1-5. Stack2.html",
    "revision": "2cddbc3b7285a436c47556a163889ec5"
  },
  {
    "url": "SWEA/1-6. Queue.html",
    "revision": "1df1842cbb22082c561d465d42edb917"
  },
  {
    "url": "SWEA/1-7. Linked List.html",
    "revision": "c9bfadce2291e4c2b779ef5555e9fdd8"
  },
  {
    "url": "SWEA/1-8. Tree.html",
    "revision": "e8bd858dd99dda73e223aff14accbe00"
  },
  {
    "url": "SWEA/1-9. 시작하기.html",
    "revision": "fd2f5998413ff364bdeddd75988d6eff"
  },
  {
    "url": "SWEA/2-1. 완전 검색.html",
    "revision": "5bb81bbf3d4f902796d7bc0c6821f299"
  },
  {
    "url": "SWEA/2-2. 탐욕 알고리즘.html",
    "revision": "a1c76dd294e9534c85ffccda8a1533ff"
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
