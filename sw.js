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

importScripts("https://storage.googleapis.com/workbox-cdn/releases/3.4.1/workbox-sw.js");

workbox.core.setCacheNameDetails({prefix: "gatsby-plugin-offline"});

workbox.skipWaiting();
workbox.clientsClaim();

/**
 * The workboxSW.precacheAndRoute() method efficiently caches and responds to
 * requests for URLs in the manifest.
 * See https://goo.gl/S9QRab
 */
self.__precacheManifest = [
  {
    "url": "webpack-runtime-c56b1dba133ebf9f5293.js"
  },
  {
    "url": "app-8c14c169e92b86f53c60.js"
  },
  {
    "url": "component---node-modules-gatsby-plugin-offline-app-shell-js-04fa3b870831fd576036.js"
  },
  {
    "url": "index.html",
    "revision": "6c16f804782418b01ebce9e1fe6672c3"
  },
  {
    "url": "offline-plugin-app-shell-fallback/index.html",
    "revision": "20fb449adbbd743439f22d624fc3952f"
  },
  {
    "url": "1.f3b7205c4fd18668318b.css",
    "revision": "2d7633d20bb33722d9cbf456cf058dfe"
  },
  {
    "url": "0.1834c0fee6974c365cd4.css",
    "revision": "ee446a32975a98ab3bc64dd9fa1425a1"
  },
  {
    "url": "component---src-pages-index-js-446c79ff0826c1d2feca.js"
  },
  {
    "url": "1-efb6ed99c13e15b41764.js"
  },
  {
    "url": "8-20ea5ba2d66e4df76f85.js"
  },
  {
    "url": "0-ab05e37cbec014f5e691.js"
  },
  {
    "url": "static/d/173/path---index-6a9-NZuapzHg3X9TaN1iIixfv1W23E.json",
    "revision": "c2508676a2f33ea9f1f0bf472997f9a0"
  },
  {
    "url": "component---src-pages-404-js-a97d823980a4ad2e3908.js"
  },
  {
    "url": "static/d/164/path---404-html-516-62a-NZuapzHg3X9TaN1iIixfv1W23E.json",
    "revision": "c2508676a2f33ea9f1f0bf472997f9a0"
  },
  {
    "url": "static/d/520/path---offline-plugin-app-shell-fallback-a-30-c5a-NZuapzHg3X9TaN1iIixfv1W23E.json",
    "revision": "c2508676a2f33ea9f1f0bf472997f9a0"
  },
  {
    "url": "manifest.webmanifest",
    "revision": "c1d64e56823e5f57a7d30182ac1087f0"
  }
].concat(self.__precacheManifest || []);
workbox.precaching.suppressWarnings();
workbox.precaching.precacheAndRoute(self.__precacheManifest, {});

workbox.routing.registerNavigationRoute("/offline-plugin-app-shell-fallback/index.html", {
  whitelist: [/^[^?]*([^.?]{5}|\.html)(\?.*)?$/],
  blacklist: [/\?(.+&)?no-cache=1$/],
});

workbox.routing.registerRoute(/\.(?:png|jpg|jpeg|webp|svg|gif|tiff|js|woff|woff2|json|css)$/, workbox.strategies.staleWhileRevalidate(), 'GET');
