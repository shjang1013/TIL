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
    "url": "assets/js/10.dcccee59.js",
    "revision": "fca2bd1b2cb55af0dccdcfc130730fb6"
  },
  {
    "url": "assets/js/11.fac8afe4.js",
    "revision": "19085707e425f3d1bd4a2e0bb569307e"
  },
  {
    "url": "assets/js/12.4f3da6e1.js",
    "revision": "23b0baa65783e88705eb7489c892846c"
  },
  {
    "url": "assets/js/13.97c1646f.js",
    "revision": "e7d6f51834f8c01e2b6582ccd6ab6ddf"
  },
  {
    "url": "assets/js/14.f08cd90d.js",
    "revision": "563b4ec8e4613f1fcceec14f0340ca05"
  },
  {
    "url": "assets/js/15.de80b8e0.js",
    "revision": "6d839b0dd6ace02a77efa21b9c392261"
  },
  {
    "url": "assets/js/16.c5fe511c.js",
    "revision": "d0958092963c372a7b3f272cc69db557"
  },
  {
    "url": "assets/js/17.867520fa.js",
    "revision": "b8d6e7fa8e4e1d16406819930f3360e2"
  },
  {
    "url": "assets/js/18.ca460ccd.js",
    "revision": "7a279b002e18eb2bb62d4fd72794173e"
  },
  {
    "url": "assets/js/19.a951afc8.js",
    "revision": "a6524b38b57159a47273ca42d06ba20f"
  },
  {
    "url": "assets/js/2.529a4535.js",
    "revision": "c7031f246805d6fc74c969fa1322cc89"
  },
  {
    "url": "assets/js/20.16e92439.js",
    "revision": "777ed95bcb56fd47905d89335a64357f"
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
    "url": "assets/js/5.a8169224.js",
    "revision": "751ed43d9dcad7fa9dff42d653ff2002"
  },
  {
    "url": "assets/js/6.5de9d2b9.js",
    "revision": "e375a8fdcdcfb412f80bac4996f88588"
  },
  {
    "url": "assets/js/7.c9d805fc.js",
    "revision": "014b8d54315c77c8367a30f6ab384812"
  },
  {
    "url": "assets/js/8.1036c3ab.js",
    "revision": "e9ab3fd2a4a2e5829dbf89790e7982e2"
  },
  {
    "url": "assets/js/9.42157282.js",
    "revision": "4693003a97b16a1f731cdbd74dbeb782"
  },
  {
    "url": "assets/js/app.23df89a6.js",
    "revision": "b91e87a07973d1815ac6adce8249c090"
  },
  {
    "url": "goals/1-1. 포트폴리오.html",
    "revision": "27c1f1149fd0a4223f99eb0962b4baec"
  },
  {
    "url": "images/logo-144.png",
    "revision": "6c61c757102de8906aa4f8e7abd8adb9"
  },
  {
    "url": "index.html",
    "revision": "7d2a7a9d81575ebd96ca36da59b6858a"
  },
  {
    "url": "SWEA/1-1. List1.html",
    "revision": "0ec192049c4bfd0f96a05b60f16ff33f"
  },
  {
    "url": "SWEA/1-2. List2.html",
    "revision": "90c77a0bd946073d39548f803a342f86"
  },
  {
    "url": "SWEA/1-3. String.html",
    "revision": "9c518cb997ed7f60382c4c1f3daac352"
  },
  {
    "url": "SWEA/1-4. Stack1.html",
    "revision": "73b782953e139f00bf8dfdc1cde90ca1"
  },
  {
    "url": "SWEA/1-5. Stack2.html",
    "revision": "ea42213d92826df8e71151b09c9b2985"
  },
  {
    "url": "SWEA/1-6. Queue.html",
    "revision": "5f6bffad3f56fad68dd9b1943a9e722b"
  },
  {
    "url": "SWEA/1-7. Linked List.html",
    "revision": "5cc5ec90ae181a9a4df04546b491bd6a"
  },
  {
    "url": "SWEA/1-8. Tree.html",
    "revision": "9b589996b09793e7e79e38ad422bbc0f"
  },
  {
    "url": "SWEA/1-9. 시작하기.html",
    "revision": "4986fc897e3b5c113f198d026cbfc661"
  },
  {
    "url": "SWEA/2-1. 완전 검색.html",
    "revision": "16bd595350d06ea752b706a8bbbf5191"
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
