'use strict';
const MANIFEST = 'flutter-app-manifest';
const TEMP = 'flutter-temp-cache';
const CACHE_NAME = 'flutter-app-cache';
const RESOURCES = {
  "assets/AssetManifest.json": "0a157742c43f2163d5704998a0876b80",
"assets/assets/fonts/DotGothic16-Regular.ttf": "2111d6be54c7c941003bf8ab1b120eeb",
"assets/assets/fonts/Poppins-Bold.ttf": "08c20a487911694291bd8c5de41315ad",
"assets/assets/fonts/Poppins-Regular.ttf": "093ee89be9ede30383f39a899c485a82",
"assets/assets/images/balance_sheet.png": "0808bf186f16708eca66abe9ec000944",
"assets/assets/images/business_settings.png": "33ed4f5dc4f035c67479c1a89239de5a",
"assets/assets/images/cashbook.png": "c24407dc951d0c15e9bff731abfb648a",
"assets/assets/images/categories.png": "c6a0c6f79b9d0de8b612ea0b2c53e1f4",
"assets/assets/images/circle-check.png": "866a3bb468343bb8dfc3f49766ffdb18",
"assets/assets/images/comming_soon.png": "33ba466f2297b4b3fe8a6b77d8086916",
"assets/assets/images/confirm_order.png": "b71017c9091797a35ea12f9ea69af6fc",
"assets/assets/images/create_new_member.png": "8dcd55e02fd54b6b1b1ccbb8c1bb3ccc",
"assets/assets/images/customer.png": "fd5842003ddb24ffc7d15d5d8a378d7a",
"assets/assets/images/customer_btn.png": "3b467195140afd80bf3b35d6374092de",
"assets/assets/images/customer_service.png": "e2ea0cc930ae7864e953eb05d7a3b45e",
"assets/assets/images/dark-mode%25201.png": "4914dcdfb5d5c82820bcc9eb745a9e1e",
"assets/assets/images/dashboard.png": "207d1b5cdea1c921e19c7134775794a3",
"assets/assets/images/delete_btn.png": "79d9f020be5c31f8bbd3300d1a345a7b",
"assets/assets/images/delivery_man_btn.png": "16546a8ceaa86450253a741e4dcd2807",
"assets/assets/images/edit.png": "497f76dd6e1417991fcaa6c37e7b5898",
"assets/assets/images/edit_btn.png": "79728f67432c280d75fc59a969c30cae",
"assets/assets/images/empty-cart.png": "8e5bc40dd77165139b810d3bc4195a50",
"assets/assets/images/excel.png": "0e25bbabc9a26802b7878949f1a62fdb",
"assets/assets/images/exchange.png": "ae7364d26d19b424d820479f29aa2a36",
"assets/assets/images/expiry.png": "940a6739c898591f81ceb3dd78e7134f",
"assets/assets/images/extend_s.png": "8f4fc0fe1b36a5e722aa3d4b5f06fafe",
"assets/assets/images/facebook.png": "184c11f359a7489527324707016e4091",
"assets/assets/images/financial.png": "61783ad8e245bbd1392ce0d78daa6816",
"assets/assets/images/general_settings.png": "ff154290a9c13bb177aff350c1a1e86d",
"assets/assets/images/google.png": "995c2b5874328c00d878ed77676229fe",
"assets/assets/images/info.png": "aa722d36064b4cf9a55ab4c6cbff62ba",
"assets/assets/images/insurance.png": "ed97c8ec564f1d13900badfcde3c4d98",
"assets/assets/images/kpay.png": "395a9b9e56b8bbb3648080a6ea6f8369",
"assets/assets/images/language.png": "557338c4fadb2df69c9938769501a47d",
"assets/assets/images/logout.png": "f5277cb9c8dffd875449fd8d90823431",
"assets/assets/images/member.png": "0a2451b8be23c7339c16dc4d5989f4fe",
"assets/assets/images/money.png": "6b38c1178abee093d31b2dd982a72078",
"assets/assets/images/order.png": "bf6ad3f9c7c8fd0619056ba231472957",
"assets/assets/images/payable.png": "2c0df15cce5243d6eea95125664a8c11",
"assets/assets/images/pos.png": "d94e88aa609c544805139a0b65e9b61c",
"assets/assets/images/profile_pic.png": "57fec8e4595fdaf8847dfacc080b6cfa",
"assets/assets/images/profit_loss.png": "2b276fef8589b5110309390b842cc801",
"assets/assets/images/ps_password.png": "ba05bb47e82654429012beb2468912a6",
"assets/assets/images/receipt_settings.png": "1ddbd4c71e76a51eacf4b98f5175e4f6",
"assets/assets/images/receivable.png": "42d53898ec6d3252d6f3552ec5d30f4e",
"assets/assets/images/report.png": "625d2d7839f7e7d2a34f03bc0966919f",
"assets/assets/images/reset-password.png": "373736f76e72254de89780949b770a42",
"assets/assets/images/sale.png": "8edacb1826cad382dea17b3c29fff701",
"assets/assets/images/scanner.png": "bd2fad1f3807d52a5d6b561889e48c75",
"assets/assets/images/secure_member.png": "e5f41f5998581faf950e6ebe21289e75",
"assets/assets/images/stock.png": "c26be9fcea3c4f87db7a3ad487e6febe",
"assets/assets/images/store.png": "5faeb22a44fdbedb9b4fe8d5122c6427",
"assets/assets/images/supplier_btn.png": "db2e02c525a373240f5e14d529d79f2e",
"assets/assets/images/telephone.png": "7c42e5ca05ce5e1d00f137c94ff8ad5e",
"assets/assets/images/terms.png": "b6196632a7a93df766589602112aa25c",
"assets/assets/images/wave.png": "332ef7579fa65acd77a36c7c8cd02b22",
"assets/assets/lotties/check.json": "e9328a8870fee86dc602aca4bf73ecec",
"assets/assets/lotties/loading.json": "f8998beb0738dd82e554a8d1416dd1e3",
"assets/assets/lotties/nointernet.json": "c9386298e8e1ed774997aece74ff95f4",
"assets/assets/lotties/searching.json": "667354c259569d343e23903bd00115d2",
"assets/assets/lotties/warning.json": "13a68084668305d3d2ed84c3b23d2ddf",
"assets/assets/sound/beep.mp3": "0601a26fb337ea6254694c14ee4da87f",
"assets/assets/svgs/btn_customer.png": "3b467195140afd80bf3b35d6374092de",
"assets/assets/svgs/business_settings.svg": "76f887d423989a3590587503b2131a94",
"assets/assets/svgs/customer.svg": "f7d6a71bc3e57c3ecdbf56a53b577938",
"assets/assets/svgs/dashboard.svg": "a97a0eb295628d56dce5a01db060b7c9",
"assets/assets/svgs/facebook.svg": "2a5bf2712e9c799c2c4377aa0c9b19ff",
"assets/assets/svgs/financial.svg": "0f616a49001b65888eefa86947461873",
"assets/assets/svgs/general_settings.svg": "8d4e4ba8612cf4c40480dbcf0f96b6ba",
"assets/assets/svgs/google.svg": "e1e4bbc2426e1b07064da58e74f1446f",
"assets/assets/svgs/language.svg": "be8cc83420204e92e93d704539194a41",
"assets/assets/svgs/logout.svg": "0685f99ea815e8326897cab801926a23",
"assets/assets/svgs/order.svg": "d924903f4a691f628b49132cc306c8f4",
"assets/assets/svgs/pos.svg": "0a49ebdac38b9af369799e3ba45a34c4",
"assets/assets/svgs/receipt_settings.svg": "c132676340a398c5aa23c83e010b8fb3",
"assets/assets/svgs/sale.svg": "a58002aa171869814b45543833aca1e7",
"assets/assets/svgs/search.svg": "6724c06c983439b0b6fc805a8d231ede",
"assets/assets/svgs/stock.svg": "ef3cc5598d4404ccd8b66915a7a6c151",
"assets/assets/svgs/teamwork.svg": "1dd4e04fd25e4f9cc30bb50e8d380e67",
"assets/FontManifest.json": "c76403cc090b55960d3c8e267425d1fb",
"assets/fonts/MaterialIcons-Regular.otf": "95db9098c58fd6db106f1116bae85a0b",
"assets/NOTICES": "46bec58c34002b53403b114209959559",
"assets/packages/cupertino_icons/assets/CupertinoIcons.ttf": "6d342eb68f170c97609e9da345464e5e",
"auth.html": "641eb099d07632db2937e4e1546cf161",
"canvaskit/canvaskit.js": "c2b4e5f3d7a3d82aed024e7249a78487",
"canvaskit/canvaskit.wasm": "4b83d89d9fecbea8ca46f2f760c5a9ba",
"canvaskit/profiling/canvaskit.js": "ae2949af4efc61d28a4a80fffa1db900",
"canvaskit/profiling/canvaskit.wasm": "95e736ab31147d1b2c7b25f11d4c32cd",
"favicon.png": "5dcef449791fa27946b3d35ad8803796",
"flutter.js": "0816e65a103ba8ba51b174eeeeb2cb67",
"icons/Icon-192.png": "ac9a721a12bbc803b44f645561ecb1e1",
"icons/Icon-512.png": "96e752610906ba2a93c65f8abe1645f1",
"icons/Icon-maskable-192.png": "c457ef57daa1d16f64b27b786ec2ea3c",
"icons/Icon-maskable-512.png": "301a7604d45b3e739efc881eb04896ea",
"index.html": "900b56f31de67e30194446335b8a4db8",
"/": "900b56f31de67e30194446335b8a4db8",
"main.dart.js": "1703eb1148d48bc1b8fdcfaab61446fb",
"manifest.json": "dcbc489da6e94b298e978066164e0d20",
"shared_worker.dart.js": "badb10c8627eacb0038d5f804a74aeef",
"sql-wasm.js": "abe5911756c78d17a8b67a113f4a62b2",
"sqlite3.wasm": "1fa83a13fd9dc0af1f4d2b56e390097f",
"version.json": "29207736e40c0498824a4fc3b5908447",
"worker.dart": "bc08f6dd8bf1268d2d4ce100390aa095",
"worker.dart.js": "badb10c8627eacb0038d5f804a74aeef",
"worker.dart.js.deps": "8b44e420c829e604f1e5faa124e01705",
"worker.dart.js.map": "57b37eb95bc050c08b43bffad14cb41b"
};

// The application shell files that are downloaded before a service worker can
// start.
const CORE = [
  "main.dart.js",
"index.html",
"assets/NOTICES",
"assets/AssetManifest.json",
"assets/FontManifest.json"];
// During install, the TEMP cache is populated with the application shell files.
self.addEventListener("install", (event) => {
  self.skipWaiting();
  return event.waitUntil(
    caches.open(TEMP).then((cache) => {
      return cache.addAll(
        CORE.map((value) => new Request(value, {'cache': 'reload'})));
    })
  );
});

// During activate, the cache is populated with the temp files downloaded in
// install. If this service worker is upgrading from one with a saved
// MANIFEST, then use this to retain unchanged resource files.
self.addEventListener("activate", function(event) {
  return event.waitUntil(async function() {
    try {
      var contentCache = await caches.open(CACHE_NAME);
      var tempCache = await caches.open(TEMP);
      var manifestCache = await caches.open(MANIFEST);
      var manifest = await manifestCache.match('manifest');
      // When there is no prior manifest, clear the entire cache.
      if (!manifest) {
        await caches.delete(CACHE_NAME);
        contentCache = await caches.open(CACHE_NAME);
        for (var request of await tempCache.keys()) {
          var response = await tempCache.match(request);
          await contentCache.put(request, response);
        }
        await caches.delete(TEMP);
        // Save the manifest to make future upgrades efficient.
        await manifestCache.put('manifest', new Response(JSON.stringify(RESOURCES)));
        return;
      }
      var oldManifest = await manifest.json();
      var origin = self.location.origin;
      for (var request of await contentCache.keys()) {
        var key = request.url.substring(origin.length + 1);
        if (key == "") {
          key = "/";
        }
        // If a resource from the old manifest is not in the new cache, or if
        // the MD5 sum has changed, delete it. Otherwise the resource is left
        // in the cache and can be reused by the new service worker.
        if (!RESOURCES[key] || RESOURCES[key] != oldManifest[key]) {
          await contentCache.delete(request);
        }
      }
      // Populate the cache with the app shell TEMP files, potentially overwriting
      // cache files preserved above.
      for (var request of await tempCache.keys()) {
        var response = await tempCache.match(request);
        await contentCache.put(request, response);
      }
      await caches.delete(TEMP);
      // Save the manifest to make future upgrades efficient.
      await manifestCache.put('manifest', new Response(JSON.stringify(RESOURCES)));
      return;
    } catch (err) {
      // On an unhandled exception the state of the cache cannot be guaranteed.
      console.error('Failed to upgrade service worker: ' + err);
      await caches.delete(CACHE_NAME);
      await caches.delete(TEMP);
      await caches.delete(MANIFEST);
    }
  }());
});

// The fetch handler redirects requests for RESOURCE files to the service
// worker cache.
self.addEventListener("fetch", (event) => {
  if (event.request.method !== 'GET') {
    return;
  }
  var origin = self.location.origin;
  var key = event.request.url.substring(origin.length + 1);
  // Redirect URLs to the index.html
  if (key.indexOf('?v=') != -1) {
    key = key.split('?v=')[0];
  }
  if (event.request.url == origin || event.request.url.startsWith(origin + '/#') || key == '') {
    key = '/';
  }
  // If the URL is not the RESOURCE list then return to signal that the
  // browser should take over.
  if (!RESOURCES[key]) {
    return;
  }
  // If the URL is the index.html, perform an online-first request.
  if (key == '/') {
    return onlineFirst(event);
  }
  event.respondWith(caches.open(CACHE_NAME)
    .then((cache) =>  {
      return cache.match(event.request).then((response) => {
        // Either respond with the cached resource, or perform a fetch and
        // lazily populate the cache.
        return response || fetch(event.request).then((response) => {
          cache.put(event.request, response.clone());
          return response;
        });
      })
    })
  );
});

self.addEventListener('message', (event) => {
  // SkipWaiting can be used to immediately activate a waiting service worker.
  // This will also require a page refresh triggered by the main worker.
  if (event.data === 'skipWaiting') {
    self.skipWaiting();
    return;
  }
  if (event.data === 'downloadOffline') {
    downloadOffline();
    return;
  }
});

// Download offline will check the RESOURCES for all files not in the cache
// and populate them.
async function downloadOffline() {
  var resources = [];
  var contentCache = await caches.open(CACHE_NAME);
  var currentContent = {};
  for (var request of await contentCache.keys()) {
    var key = request.url.substring(origin.length + 1);
    if (key == "") {
      key = "/";
    }
    currentContent[key] = true;
  }
  for (var resourceKey of Object.keys(RESOURCES)) {
    if (!currentContent[resourceKey]) {
      resources.push(resourceKey);
    }
  }
  return contentCache.addAll(resources);
}

// Attempt to download the resource online before falling back to
// the offline cache.
function onlineFirst(event) {
  return event.respondWith(
    fetch(event.request).then((response) => {
      return caches.open(CACHE_NAME).then((cache) => {
        cache.put(event.request, response.clone());
        return response;
      });
    }).catch((error) => {
      return caches.open(CACHE_NAME).then((cache) => {
        return cache.match(event.request).then((response) => {
          if (response != null) {
            return response;
          }
          throw error;
        });
      });
    })
  );
}
