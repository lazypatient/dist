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
    "revision": "a63553e52002867f38527aa4ed55a19b"
  },
  {
    "url": "assets/css/0.styles.bfd62ff8.css",
    "revision": "ae2091e16a740727342387df46a4b4d6"
  },
  {
    "url": "assets/img/1653118922924.72d846fb.png",
    "revision": "72d846fb69746976a4d772fb9e591d71"
  },
  {
    "url": "assets/img/1653119053628.69b5bb13.png",
    "revision": "69b5bb133d2236a6f2c6c21ddda32313"
  },
  {
    "url": "assets/img/home-bg.7b267d7c.jpg",
    "revision": "7b267d7ce30257a197aeeb29f365065b"
  },
  {
    "url": "assets/img/iconfont.36767f3e.svg",
    "revision": "36767f3efa2e4c880f42a42e8b2075b0"
  },
  {
    "url": "assets/js/1.a0e190f2.js",
    "revision": "63ee03f03d39c47d65ac67485a27a829"
  },
  {
    "url": "assets/js/10.0f1a6214.js",
    "revision": "aed2ce279cb8069139b9ce0b4c0d8761"
  },
  {
    "url": "assets/js/11.1dcef5e3.js",
    "revision": "b44c80b1e90dd1fea3953864833ff464"
  },
  {
    "url": "assets/js/12.7f231f97.js",
    "revision": "05a328feee3c5a6667fd201c1e077c87"
  },
  {
    "url": "assets/js/13.ca79d5d9.js",
    "revision": "4546964e157c74eca7b099e89c1175cc"
  },
  {
    "url": "assets/js/14.96939e98.js",
    "revision": "087388776d721e414f81616e1d18a6ac"
  },
  {
    "url": "assets/js/15.e8669f07.js",
    "revision": "42e67a60f2cbd72426f24a5cbb374311"
  },
  {
    "url": "assets/js/16.312b5bea.js",
    "revision": "bc467476030fc056cc659098f66714de"
  },
  {
    "url": "assets/js/17.82edbc76.js",
    "revision": "9e25ee41b8d2cc75f53f8354ae523aa8"
  },
  {
    "url": "assets/js/18.5ac236ed.js",
    "revision": "6ebf26e8a597d729a1f560a4bfc03fc9"
  },
  {
    "url": "assets/js/4.d64128e2.js",
    "revision": "e10459d3809dba98c1bba49ef9ec64c3"
  },
  {
    "url": "assets/js/5.4ab99d5e.js",
    "revision": "7347dfdedba2d017c568c7b51150269e"
  },
  {
    "url": "assets/js/6.e7b886c2.js",
    "revision": "6663f4417c923daea0fe08aad64d7c09"
  },
  {
    "url": "assets/js/7.6503cb7d.js",
    "revision": "fe02ddd8bfbd811354a0d6b7f3f2a35d"
  },
  {
    "url": "assets/js/8.fc5b7506.js",
    "revision": "868cb4ce0a0a9291b4a5dade91da3cf6"
  },
  {
    "url": "assets/js/9.d898caf8.js",
    "revision": "c6abf0f2268fd16ebac5d1a16ddc286e"
  },
  {
    "url": "assets/js/app.08cdf370.js",
    "revision": "eb853ca72e488760d0f99c4cee475b52"
  },
  {
    "url": "assets/js/baidu.js",
    "revision": "d87b8800faffea165e2a687cbc58c31f"
  },
  {
    "url": "assets/js/vendors~flowchart.fe7c321e.js",
    "revision": "a64ebb2f4c1ee386f2eed5d866fffdab"
  },
  {
    "url": "avatar.png",
    "revision": "9e9bc9348ad2729ea7d2aedf5dd2de88"
  },
  {
    "url": "categories/index.html",
    "revision": "05eb8cd04b3e614038a0860b86e2002a"
  },
  {
    "url": "categories/java/index.html",
    "revision": "9159b77e65258434e5b8e24145e7dd51"
  },
  {
    "url": "categories/Java基础/index.html",
    "revision": "4455939fb8c3542e21a4770301b2c751"
  },
  {
    "url": "categories/前端/index.html",
    "revision": "a6a9439c80568556fa622686fe508b6c"
  },
  {
    "url": "categories/生活/index.html",
    "revision": "84a173cd6b83bd48d199c46b5e49b77d"
  },
  {
    "url": "css/style.css",
    "revision": "0b6bb50460c10cea419bf707274c4cda"
  },
  {
    "url": "guide/index.html",
    "revision": "f54bd2bb45f21702904f24fb2aa279f7"
  },
  {
    "url": "hero_white.png",
    "revision": "5c707c6a6f8be5e1b6d767c83cedc8d5"
  },
  {
    "url": "img/5.jpg",
    "revision": "c48683b7627396b02eb4a7df386431f5"
  },
  {
    "url": "img/kbjw2.jpg",
    "revision": "78b0701cb66d42de9a6eaa6b0ff38ece"
  },
  {
    "url": "img/logo.png",
    "revision": "b35e54e85218c085de994fdcdd7726bf"
  },
  {
    "url": "img/sidebar_280140.png",
    "revision": "30e2bf90705fc32e783f29a833736c17"
  },
  {
    "url": "img/sidebar_2801401.png",
    "revision": "0c2331a84c22028e9d50010be4c9b71f"
  },
  {
    "url": "img/sidebar_28014022.png",
    "revision": "67ed912a57fe22a89c7ef25bfa3d6c74"
  },
  {
    "url": "index.html",
    "revision": "1f1dc722b8f3af780e1b7cf8750f7373"
  },
  {
    "url": "js/custom.js",
    "revision": "437cc118e8b3a7a5a38efe104ad892b2"
  },
  {
    "url": "tag/index.html",
    "revision": "af4f100836b752e08d0010881f9700bb"
  },
  {
    "url": "tags/JavaSE/index.html",
    "revision": "2681af847de842035414f3b9f320359d"
  },
  {
    "url": "tags/Java基础/index.html",
    "revision": "3872ca3d683e2b545efb9e918c91501e"
  },
  {
    "url": "tags/js/index.html",
    "revision": "5d3c91e8971a1f4d41893522d371f22d"
  },
  {
    "url": "tags/Spring/index.html",
    "revision": "dbf5933dba2e672895b9ed41d32984ca"
  },
  {
    "url": "tags/SpringBoot/index.html",
    "revision": "33f5f5dbc21e19410ca810dba8b694b6"
  },
  {
    "url": "tags/vue/index.html",
    "revision": "05d233bbc3b5bb24a31d8738116a9b96"
  },
  {
    "url": "tags/分享生活/index.html",
    "revision": "727f9eaec8219342853be660aa30f6f6"
  },
  {
    "url": "tags/生活/index.html",
    "revision": "51e889784b98578465e7752af64af06b"
  },
  {
    "url": "tags/零基础/index.html",
    "revision": "3778017eaf3abe8d9d4c39d6abc9a566"
  },
  {
    "url": "tags/面向对象/index.html",
    "revision": "a2a75936dfed61a64336b2c599c2cd88"
  },
  {
    "url": "timeline/index.html",
    "revision": "be50110e48c2e13cd718932259a37873"
  },
  {
    "url": "view.png",
    "revision": "81e8422c4d92eb2d5dd6ddae272bcef0"
  },
  {
    "url": "技术文章/index.html",
    "revision": "383e966fb7d211bbe179d82a5ee63c2d"
  },
  {
    "url": "技术文章/java/javase.html",
    "revision": "13095cb1ab33c0c279ac0168cc8b8311"
  },
  {
    "url": "技术文章/java高级/javaee.html",
    "revision": "ff45da8723f3c3fdc9f1304d3e551f81"
  },
  {
    "url": "技术文章/vue/vue01.html",
    "revision": "b0bdcbe27a4ef344dffd02066d997f20"
  },
  {
    "url": "生活分享/life.html",
    "revision": "33321f423d7dac8cf4d98b797a996a34"
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
