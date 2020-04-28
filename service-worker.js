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
    "revision": "ae0a2345dc9ff53809708cb2b26c9aa5"
  },
  {
    "url": "assets/css/0.styles.79b93b1e.css",
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
    "url": "assets/js/10.f3d875e4.js",
    "revision": "3976f70a310a8aba4a3fc6c48b81d061"
  },
  {
    "url": "assets/js/11.9fc3401f.js",
    "revision": "927e45f3bfc963dc5a3442059cdf88b7"
  },
  {
    "url": "assets/js/12.7fd17b3a.js",
    "revision": "d28522158a28b9a5e24d5b3131efada5"
  },
  {
    "url": "assets/js/13.1d4b089c.js",
    "revision": "311bccff3bc73ea7623385259a980a36"
  },
  {
    "url": "assets/js/14.9e8a4237.js",
    "revision": "9d5424415d6593009096d502208dbbc5"
  },
  {
    "url": "assets/js/15.6c65efcd.js",
    "revision": "7d4e5d5aa3ff4585b2e16afce3c29901"
  },
  {
    "url": "assets/js/16.28c6aa36.js",
    "revision": "232bf83ace4297086f1afbdc5f5aed6c"
  },
  {
    "url": "assets/js/17.2bc401d4.js",
    "revision": "b1af7c1a6c2b763ab44fadf57e210645"
  },
  {
    "url": "assets/js/18.406b0a74.js",
    "revision": "807739f312ca2aac03a90960bf0b918e"
  },
  {
    "url": "assets/js/19.ab9ef12d.js",
    "revision": "126fdfe93e831fbc992b93e275eb717b"
  },
  {
    "url": "assets/js/2.d345dad4.js",
    "revision": "7ebdcd38fd1772f647e5068cca6dc9f9"
  },
  {
    "url": "assets/js/20.8616060e.js",
    "revision": "4797eed816f4f270763019d690f92ad4"
  },
  {
    "url": "assets/js/21.ed744e87.js",
    "revision": "eddab52f612d5a79e399b2f4eb370159"
  },
  {
    "url": "assets/js/22.e39a76c9.js",
    "revision": "2cab30fdc9417b9228431eae17dbc519"
  },
  {
    "url": "assets/js/23.bb9c8f8f.js",
    "revision": "0c81c83a39c93d6ba6d3c30d9bb58cd3"
  },
  {
    "url": "assets/js/3.2f567400.js",
    "revision": "99d98f24ddf6ad9836c41ab607246147"
  },
  {
    "url": "assets/js/4.9d8c20f0.js",
    "revision": "1d69032f098300454ecfe72f8f461983"
  },
  {
    "url": "assets/js/5.cfd1f195.js",
    "revision": "99b6db7293778db0f0154491ccbb1155"
  },
  {
    "url": "assets/js/6.529c58b6.js",
    "revision": "f71f961dae1f795f11af4c8f59b027f7"
  },
  {
    "url": "assets/js/7.2825ab35.js",
    "revision": "971c8f9f524d9cd04f656151a1be24b1"
  },
  {
    "url": "assets/js/8.3cc438b1.js",
    "revision": "4a55deb5c3b7a72212443db6a5381037"
  },
  {
    "url": "assets/js/9.79914020.js",
    "revision": "d0423378c73a213699fb55c75fefdeec"
  },
  {
    "url": "assets/js/app.2388baa9.js",
    "revision": "0bd482bf92c9ec1a72ba6a2992531989"
  },
  {
    "url": "goals/1-1. 포트폴리오.html",
    "revision": "e8e580f8c04631707beeb2c06aaf6bd8"
  },
  {
    "url": "images/logo-144.png",
    "revision": "6c61c757102de8906aa4f8e7abd8adb9"
  },
  {
    "url": "index.html",
    "revision": "69f74fd215b00cb791288ac68de52479"
  },
  {
    "url": "SpringBoot/1-1. 스트링 부트.html",
    "revision": "3fff27c64c42e10de1a685c01d674218"
  },
  {
    "url": "SpringBoot/1-2. 스트링 부트 환경 설정.html",
    "revision": "e5dc486d2c5d55e54194c9b9f60b4dad"
  },
  {
    "url": "SWEA/1-1. List1.html",
    "revision": "a94dc668befbc2a9ebee502590ea9d7d"
  },
  {
    "url": "SWEA/1-2. List2.html",
    "revision": "61453f17c5bc320f84cdd8acdb7a4f42"
  },
  {
    "url": "SWEA/1-3. String.html",
    "revision": "85c1dc632659a1f5549e0d1d76eeb204"
  },
  {
    "url": "SWEA/1-4. Stack1.html",
    "revision": "44c0a20b59af76cd7e9e0011657622b5"
  },
  {
    "url": "SWEA/1-5. Stack2.html",
    "revision": "f5cd6a7e8a45f56ed2e18f2607d50ccf"
  },
  {
    "url": "SWEA/1-6. Queue.html",
    "revision": "add1eda03197acefb0f5776dc5a06bd7"
  },
  {
    "url": "SWEA/1-7. Linked List.html",
    "revision": "05c01f593b6fef567111faaec6fe77ac"
  },
  {
    "url": "SWEA/1-8. Tree.html",
    "revision": "e7d19404fee2f1305049b89075d40339"
  },
  {
    "url": "SWEA/1-9. 시작하기.html",
    "revision": "0c541b7379557527d6df229a7c1dfd43"
  },
  {
    "url": "SWEA/2-1. 완전 검색.html",
    "revision": "e46eed16b9b2cb5b84b46ffffb428ee3"
  },
  {
    "url": "SWEA/2-2. 탐욕 알고리즘.html",
    "revision": "6a31be1da83abc9135a30c54ef37c013"
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
