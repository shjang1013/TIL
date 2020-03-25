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
    "url": "assets/js/10.4ce512bc.js",
    "revision": "0b3681229335c476d11a68249442793b"
  },
  {
    "url": "assets/js/11.dc6d5ef6.js",
    "revision": "19085707e425f3d1bd4a2e0bb569307e"
  },
  {
    "url": "assets/js/12.de2cf5cc.js",
    "revision": "23b0baa65783e88705eb7489c892846c"
  },
  {
    "url": "assets/js/13.8532eddf.js",
    "revision": "e7d6f51834f8c01e2b6582ccd6ab6ddf"
  },
  {
    "url": "assets/js/14.e7555c5f.js",
    "revision": "563b4ec8e4613f1fcceec14f0340ca05"
  },
  {
    "url": "assets/js/15.9dc85f15.js",
    "revision": "6d839b0dd6ace02a77efa21b9c392261"
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
    "url": "assets/js/7.0660cda8.js",
    "revision": "6e70d3f683087a5e0b44c1ebecfbd6ef"
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
    "url": "assets/js/app.b3894edc.js",
    "revision": "c09b4f4eda122d8d4203eb887ac95ea8"
  },
  {
    "url": "goals/2020.html",
    "revision": "60c016cd61e6510b110bd310a789d07d"
  },
  {
    "url": "images/logo-144.png",
    "revision": "6c61c757102de8906aa4f8e7abd8adb9"
  },
  {
    "url": "index.html",
    "revision": "68bfcb471020c350ffe263571506e1c6"
  },
  {
    "url": "SWEA/1. List1.html",
    "revision": "215dd7fa40b5ad1638bf95f79c26b6c2"
  },
  {
    "url": "SWEA/10. 완전 검색.html",
    "revision": "63120520c9a385f8056562999f627196"
  },
  {
    "url": "SWEA/2. List2.html",
    "revision": "126b869b3b1af408ed6243adc278aef2"
  },
  {
    "url": "SWEA/3. String.html",
    "revision": "36db46d23059adbb6e789aa0cd3c8dc1"
  },
  {
    "url": "SWEA/4. Stack1.html",
    "revision": "99ecb1218131f03c5d0aca90279eabd5"
  },
  {
    "url": "SWEA/5. Stack2.html",
    "revision": "3558ab02dfabad43346d0607c744ff9c"
  },
  {
    "url": "SWEA/6. Queue.html",
    "revision": "9ad4cd0e6653be43fc52ad79736eff15"
  },
  {
    "url": "SWEA/7. Linked List.html",
    "revision": "2724a1b136eecd451037772ae25cad0e"
  },
  {
    "url": "SWEA/8. Tree.html",
    "revision": "477275c4f596ad9eafcfcc01a9f1dedc"
  },
  {
    "url": "SWEA/9. 시작하기.html",
    "revision": "3ebff36b9bd89f26fd8e8b05d9b56bfd"
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
