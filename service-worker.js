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
    "url": "404.html",
    "revision": "08c47aa62266557f0e4f63832d6137fa"
  },
  {
    "url": "assets/css/0.styles.13b7ef94.css",
    "revision": "c63a1b66904e9a864db85d17ebb4e43f"
  },
  {
    "url": "assets/img/HelloWorld.0555536d.png",
    "revision": "0555536d4e820964b4ef0b27fb22c85c"
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
    "url": "assets/img/System_Blueprint.75065dc7.png",
    "revision": "75065dc7c086da5001fb1f87d3ed0bd8"
  },
  {
    "url": "assets/js/10.b34535fd.js",
    "revision": "6b805aa24d1726242b10b97b76950183"
  },
  {
    "url": "assets/js/11.52dacf7a.js",
    "revision": "36eebceb95688a297c96f161319fba55"
  },
  {
    "url": "assets/js/12.db3ec669.js",
    "revision": "5b8288f52d2fbf03fd3b97550907b515"
  },
  {
    "url": "assets/js/13.b8a0c7aa.js",
    "revision": "8787cb64b9000442b8da8d6d2cfabd3c"
  },
  {
    "url": "assets/js/14.e80e9d13.js",
    "revision": "e5f472d15a7c0addebe8288437757e05"
  },
  {
    "url": "assets/js/15.abfa84ca.js",
    "revision": "aa13ef31b50586af96fa54833abcadce"
  },
  {
    "url": "assets/js/16.cb822f81.js",
    "revision": "232bf83ace4297086f1afbdc5f5aed6c"
  },
  {
    "url": "assets/js/17.c34d6ffb.js",
    "revision": "b1af7c1a6c2b763ab44fadf57e210645"
  },
  {
    "url": "assets/js/18.40a3df3e.js",
    "revision": "807739f312ca2aac03a90960bf0b918e"
  },
  {
    "url": "assets/js/19.ff8bbbec.js",
    "revision": "126fdfe93e831fbc992b93e275eb717b"
  },
  {
    "url": "assets/js/2.510d46e4.js",
    "revision": "7ebdcd38fd1772f647e5068cca6dc9f9"
  },
  {
    "url": "assets/js/20.6cc804b8.js",
    "revision": "4797eed816f4f270763019d690f92ad4"
  },
  {
    "url": "assets/js/21.366a9fed.js",
    "revision": "eddab52f612d5a79e399b2f4eb370159"
  },
  {
    "url": "assets/js/22.f8a27b42.js",
    "revision": "2cab30fdc9417b9228431eae17dbc519"
  },
  {
    "url": "assets/js/23.4ad13079.js",
    "revision": "0c81c83a39c93d6ba6d3c30d9bb58cd3"
  },
  {
    "url": "assets/js/3.bcafa3c3.js",
    "revision": "99d98f24ddf6ad9836c41ab607246147"
  },
  {
    "url": "assets/js/4.e8d35141.js",
    "revision": "1d69032f098300454ecfe72f8f461983"
  },
  {
    "url": "assets/js/5.92228a92.js",
    "revision": "99b6db7293778db0f0154491ccbb1155"
  },
  {
    "url": "assets/js/6.44488e94.js",
    "revision": "f71f961dae1f795f11af4c8f59b027f7"
  },
  {
    "url": "assets/js/7.bfda97c1.js",
    "revision": "ddca7ef97c3a49ff53a19fce4fab49c3"
  },
  {
    "url": "assets/js/8.8716f344.js",
    "revision": "4a55deb5c3b7a72212443db6a5381037"
  },
  {
    "url": "assets/js/9.4be8f00a.js",
    "revision": "d0423378c73a213699fb55c75fefdeec"
  },
  {
    "url": "assets/js/app.49abd580.js",
    "revision": "4eb95108a9d570755e4147ab705a713c"
  },
  {
    "url": "goals/1-1. 포트폴리오.html",
    "revision": "19d478023e2fbd6b2a4c73292ad8c958"
  },
  {
    "url": "images/logo-144.png",
    "revision": "6c61c757102de8906aa4f8e7abd8adb9"
  },
  {
    "url": "index.html",
    "revision": "93357da63c0128b9ef01e9dc5d836cfb"
  },
  {
    "url": "SpringBoot/1-1. 스트링 부트.html",
    "revision": "8f0958c1eebc247c1679e2117ac1a125"
  },
  {
    "url": "SpringBoot/1-2. 스트링 부트 환경 설정.html",
    "revision": "527f996cae2ba8071d503593cbc6e0d3"
  },
  {
    "url": "SWEA/1-1. List1.html",
    "revision": "2ce47585ddc896a74d82af68fbc0aba4"
  },
  {
    "url": "SWEA/1-2. List2.html",
    "revision": "001bade2eddba646135e1b52a978662e"
  },
  {
    "url": "SWEA/1-3. String.html",
    "revision": "fe669af48ae55cc488dd072761486f2e"
  },
  {
    "url": "SWEA/1-4. Stack1.html",
    "revision": "1c6404683ff58d93a61ed224f0af28c3"
  },
  {
    "url": "SWEA/1-5. Stack2.html",
    "revision": "c0c8cc2c25cb82e843eaa0a959a584f5"
  },
  {
    "url": "SWEA/1-6. Queue.html",
    "revision": "cb9898e1220bace978763e7c1e961d04"
  },
  {
    "url": "SWEA/1-7. Linked List.html",
    "revision": "3c05f4fac98fa094827b5d9d0f542da0"
  },
  {
    "url": "SWEA/1-8. Tree.html",
    "revision": "25497fb5065c5c892b41d2dbba219d92"
  },
  {
    "url": "SWEA/1-9. 시작하기.html",
    "revision": "0a9e161930755334333c54a57ea9b21a"
  },
  {
    "url": "SWEA/2-1. 완전 검색.html",
    "revision": "d6a04ddc2d5102fd33035e475ae8e5cb"
  },
  {
    "url": "SWEA/2-2. 탐욕 알고리즘.html",
    "revision": "3123edbee3897c648180a288fa9c5535"
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
