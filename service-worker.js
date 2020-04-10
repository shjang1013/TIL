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
    "url": "assets/js/10.590f9974.js",
    "revision": "fca2bd1b2cb55af0dccdcfc130730fb6"
  },
  {
    "url": "assets/js/11.23af623c.js",
    "revision": "19085707e425f3d1bd4a2e0bb569307e"
  },
  {
    "url": "assets/js/12.84782867.js",
    "revision": "23b0baa65783e88705eb7489c892846c"
  },
  {
    "url": "assets/js/13.d8596608.js",
    "revision": "e7d6f51834f8c01e2b6582ccd6ab6ddf"
  },
  {
    "url": "assets/js/14.fe551cbc.js",
    "revision": "563b4ec8e4613f1fcceec14f0340ca05"
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
    "url": "assets/js/9.ce50b17a.js",
    "revision": "5792c91a2b2c76154b3a8b34eef09667"
  },
  {
    "url": "assets/js/app.6416d9a2.js",
    "revision": "28a922411e41218f69ad9a298a87d4c3"
  },
  {
    "url": "goals/1-1. 포트폴리오.html",
    "revision": "210f4e238c02a26f6745f74ebebe50c9"
  },
  {
    "url": "images/logo-144.png",
    "revision": "6c61c757102de8906aa4f8e7abd8adb9"
  },
  {
    "url": "index.html",
    "revision": "f7aaeb64921d3c509a6fb9ef9c3a9a10"
  },
  {
    "url": "SWEA/1-1. List1.html",
    "revision": "d2d3afd734ab692e30cd5ae8e198aaaa"
  },
  {
    "url": "SWEA/1-2. List2.html",
    "revision": "67d46f8bb6afed01bfc2585db9735de6"
  },
  {
    "url": "SWEA/1-3. String.html",
    "revision": "8c0e45e376da024de6595c0a076f5c36"
  },
  {
    "url": "SWEA/1-4. Stack1.html",
    "revision": "b7dbc253fed7f2f5f447df2e93713473"
  },
  {
    "url": "SWEA/1-5. Stack2.html",
    "revision": "041cbc239465f784ff2a2c924a7150e5"
  },
  {
    "url": "SWEA/1-6. Queue.html",
    "revision": "f4238392ca6f4990220aeac743d1f7ee"
  },
  {
    "url": "SWEA/1-7. Linked List.html",
    "revision": "c0500e2bea0f1a43ea13826788a92272"
  },
  {
    "url": "SWEA/1-8. Tree.html",
    "revision": "49f19ef6d0e6ec7451b621c3c23d65e0"
  },
  {
    "url": "SWEA/1-9. 시작하기.html",
    "revision": "daf46986c4f421c35273ee57f7337e38"
  },
  {
    "url": "SWEA/2-1. 완전 검색.html",
    "revision": "6b9a605f73e449da916bafb280bc2a40"
  },
  {
    "url": "SWEA/2-2. 탐욕 알고리즘.html",
    "revision": "d50c9d94db2b8094801f47a9ca0b2f1c"
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
