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
    "revision": "6ddb9470a30ec7075948ad60db56dd9d"
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
    "url": "assets/js/10.56ab7545.js",
    "revision": "3976f70a310a8aba4a3fc6c48b81d061"
  },
  {
    "url": "assets/js/11.4f58386c.js",
    "revision": "927e45f3bfc963dc5a3442059cdf88b7"
  },
  {
    "url": "assets/js/12.e3742779.js",
    "revision": "d28522158a28b9a5e24d5b3131efada5"
  },
  {
    "url": "assets/js/13.7f61dc87.js",
    "revision": "311bccff3bc73ea7623385259a980a36"
  },
  {
    "url": "assets/js/14.582a1cbe.js",
    "revision": "9d5424415d6593009096d502208dbbc5"
  },
  {
    "url": "assets/js/15.3a4bcb83.js",
    "revision": "7d4e5d5aa3ff4585b2e16afce3c29901"
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
    "url": "assets/js/7.79012cf9.js",
    "revision": "54dc5614b03759b20ba271ef55e1e43c"
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
    "url": "assets/js/app.5f15ba50.js",
    "revision": "9f3b50ddc27b07a11fa63aef74c372cf"
  },
  {
    "url": "goals/1-1. 포트폴리오.html",
    "revision": "33d49ea5ae80ea95bbb584fc9532d01a"
  },
  {
    "url": "images/logo-144.png",
    "revision": "6c61c757102de8906aa4f8e7abd8adb9"
  },
  {
    "url": "index.html",
    "revision": "8736ea86b6131d7548b764e016b24b5a"
  },
  {
    "url": "SpringBoot/1-1. 스트링 부트.html",
    "revision": "18e398f48881b1ed7ebb3b13d6418d10"
  },
  {
    "url": "SpringBoot/1-2. 스트링 부트 환경 설정.html",
    "revision": "fa4effad4bc3566e4a5064573f25b6cb"
  },
  {
    "url": "SWEA/1-1. List1.html",
    "revision": "08de800b58dea65a11e3252cf0dedeaf"
  },
  {
    "url": "SWEA/1-2. List2.html",
    "revision": "8fbba02854cce59683a203a432acf3f1"
  },
  {
    "url": "SWEA/1-3. String.html",
    "revision": "70c76e592ee46be32c963ac1f483bd4c"
  },
  {
    "url": "SWEA/1-4. Stack1.html",
    "revision": "0b03b2352e5dea72ed69174606ff4aa5"
  },
  {
    "url": "SWEA/1-5. Stack2.html",
    "revision": "4ff62aa4d653ea2abf08a57099fbb9da"
  },
  {
    "url": "SWEA/1-6. Queue.html",
    "revision": "b5a4ce4a5938fd451d6414ae5a5bdfa0"
  },
  {
    "url": "SWEA/1-7. Linked List.html",
    "revision": "bb8660c008febe7052ee384a96774b8b"
  },
  {
    "url": "SWEA/1-8. Tree.html",
    "revision": "471cc19d4f60110a01c4d0fe0abf3599"
  },
  {
    "url": "SWEA/1-9. 시작하기.html",
    "revision": "c833953079f45b8604ae41dbc613e270"
  },
  {
    "url": "SWEA/2-1. 완전 검색.html",
    "revision": "5ff98998d90e12e284f3169bfe2a7101"
  },
  {
    "url": "SWEA/2-2. 탐욕 알고리즘.html",
    "revision": "19d016b997fe5fe315e5ce0eaebe2330"
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
