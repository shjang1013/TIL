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
    "url": "assets/css/0.styles.b92c05e3.css",
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
    "url": "assets/js/10.534b7a73.js",
    "revision": "bfe2ba366ce696b358a522f44db0f10f"
  },
  {
    "url": "assets/js/11.6cafcd66.js",
    "revision": "2a3355ec44e0be7ede0fd957b56444b2"
  },
  {
    "url": "assets/js/12.207fa173.js",
    "revision": "7f6e743f9d413fbbcde8a97721f9bf68"
  },
  {
    "url": "assets/js/13.84cfa4c6.js",
    "revision": "3fe377c36dd4c1e40d3849d2fd548398"
  },
  {
    "url": "assets/js/14.b6ac795f.js",
    "revision": "a6c41d8ca25455abc69ba2d04f1020df"
  },
  {
    "url": "assets/js/15.ed14b962.js",
    "revision": "79607d3dedd461636b497d85d0594106"
  },
  {
    "url": "assets/js/16.c682a184.js",
    "revision": "786dbd2ae576e9b020054cdf24f943d8"
  },
  {
    "url": "assets/js/17.ef7d34ab.js",
    "revision": "d9b37f51cc4445c813882801d96bb50e"
  },
  {
    "url": "assets/js/18.fcecebf1.js",
    "revision": "c0ca3e2758250d732e26d33040931958"
  },
  {
    "url": "assets/js/19.dbc85ede.js",
    "revision": "07cdb3f814f14aa9d8cbf9ce6ffbc846"
  },
  {
    "url": "assets/js/2.529a4535.js",
    "revision": "c7031f246805d6fc74c969fa1322cc89"
  },
  {
    "url": "assets/js/20.5f9ee361.js",
    "revision": "3be3aecad7cad39906f7270f4c06ab25"
  },
  {
    "url": "assets/js/21.b328a119.js",
    "revision": "ff7fc519ce005fe9367601e019ef7004"
  },
  {
    "url": "assets/js/3.fd8e7e16.js",
    "revision": "c2a3d0754bb6d8b2b2b319abca242c9c"
  },
  {
    "url": "assets/js/4.578e92a4.js",
    "revision": "b0825965766bb8ad0c74fadedb42bb66"
  },
  {
    "url": "assets/js/5.cb89c428.js",
    "revision": "3fcf3e3c6b1fc87fe290822c49a9b4de"
  },
  {
    "url": "assets/js/6.69a02b1a.js",
    "revision": "b85c42d6476fce5fb2681e7ef6493d81"
  },
  {
    "url": "assets/js/7.c9d805fc.js",
    "revision": "014b8d54315c77c8367a30f6ab384812"
  },
  {
    "url": "assets/js/8.37378cbf.js",
    "revision": "14564fa71573d270e8e92eac3ff805b3"
  },
  {
    "url": "assets/js/9.2a887589.js",
    "revision": "5a5a5b077b747f42297a0ece33c7fc54"
  },
  {
    "url": "assets/js/app.9588e938.js",
    "revision": "155a62347227597bc0633c5e5d6eca00"
  },
  {
    "url": "goals/1-1. 포트폴리오.html",
    "revision": "94410de0c98d3a7fd997837386a36fd4"
  },
  {
    "url": "images/logo-144.png",
    "revision": "6c61c757102de8906aa4f8e7abd8adb9"
  },
  {
    "url": "index.html",
    "revision": "42f82e74d9a5b72ebcc6b25b7a3d69a4"
  },
  {
    "url": "SWEA/1-1. List1.html",
    "revision": "c5e67e0159d6fbfeafdb75eb0a4af252"
  },
  {
    "url": "SWEA/1-2. List2.html",
    "revision": "df4f1f633c5a109b8b4edc32cf158080"
  },
  {
    "url": "SWEA/1-3. String.html",
    "revision": "8a1666351aee1ad69dda88b988280e69"
  },
  {
    "url": "SWEA/1-4. Stack1.html",
    "revision": "1796d16c76b54b927cd339895c2a710e"
  },
  {
    "url": "SWEA/1-5. Stack2.html",
    "revision": "881a1911d1e0148c8cce0cc7a9603d84"
  },
  {
    "url": "SWEA/1-6. Queue.html",
    "revision": "dbcdd27f937128a7c4cd27b9776e41a6"
  },
  {
    "url": "SWEA/1-7. Linked List.html",
    "revision": "b589be1d3f36157854a712c7f5e4b3f8"
  },
  {
    "url": "SWEA/1-8. Tree.html",
    "revision": "be49a553dbd29811c71a613fcd7d385e"
  },
  {
    "url": "SWEA/1-9. 시작하기.html",
    "revision": "80b86c810163c9d1dbf1b4d181e44b64"
  },
  {
    "url": "SWEA/2-1. 완전 검색.html",
    "revision": "cebe599fcb0b8b6eca116aed15565a09"
  },
  {
    "url": "SWEA/2-2. 탐욕 알고리즘.html",
    "revision": "f4bb0273199bff3bd2d566536e802c5d"
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
