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
    "url": "assets/js/19.2c9069c4.js",
    "revision": "7df2d4290f08b64c82e650f990532a21"
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
    "url": "assets/js/app.d1bb4df8.js",
    "revision": "53916b465a0fa19cf0b3cc2fc55b37fa"
  },
  {
    "url": "goals/1-1. 포트폴리오.html",
    "revision": "d3197697c7e5c19c33fbb4e6cd5b2f9f"
  },
  {
    "url": "images/logo-144.png",
    "revision": "6c61c757102de8906aa4f8e7abd8adb9"
  },
  {
    "url": "index.html",
    "revision": "09751b1b47027f4ec21e6a2d1db2f219"
  },
  {
    "url": "SWEA/1-1. List1.html",
    "revision": "de8c70fd7de3f87e8b5b314d4aefb737"
  },
  {
    "url": "SWEA/1-2. List2.html",
    "revision": "67a2502be4de2d0352af5ff0e39e5c33"
  },
  {
    "url": "SWEA/1-3. String.html",
    "revision": "01ed8d0cb096aa2e01e14b714a1dde54"
  },
  {
    "url": "SWEA/1-4. Stack1.html",
    "revision": "231a650e3247fb2eede8990855cae85a"
  },
  {
    "url": "SWEA/1-5. Stack2.html",
    "revision": "a3751c366bf4ede453e2700fbe330ad7"
  },
  {
    "url": "SWEA/1-6. Queue.html",
    "revision": "574fa4ef150463a91585fcade688a208"
  },
  {
    "url": "SWEA/1-7. Linked List.html",
    "revision": "de18aeac0950cd6c2218aeff572896e2"
  },
  {
    "url": "SWEA/1-8. Tree.html",
    "revision": "db5b2ecf2de5f747ab5343d7178a50d8"
  },
  {
    "url": "SWEA/1-9. 시작하기.html",
    "revision": "a95c6b769e272ae29f3e0d5c1f105e8f"
  },
  {
    "url": "SWEA/2-1. 완전 검색.html",
    "revision": "d4b236e25a88f97dccca9471082c8faf"
  },
  {
    "url": "SWEA/2-2. 탐욕 알고리즘.html",
    "revision": "8077d20dae93c2071128ee8212fa1f7e"
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
