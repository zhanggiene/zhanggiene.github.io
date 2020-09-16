'use strict';
const MANIFEST = 'flutter-app-manifest';
const TEMP = 'flutter-temp-cache';
const CACHE_NAME = 'flutter-app-cache';
const RESOURCES = {
  "index.html": "6218fc95eed7c5ed346a99d0b3f39870",
"/": "6218fc95eed7c5ed346a99d0b3f39870",
"main.dart.js": "67bcc9e58805d0d5373b1f2216e04510",
"favicon.png": "5dcef449791fa27946b3d35ad8803796",
"icons/Icon-192.png": "ac9a721a12bbc803b44f645561ecb1e1",
"icons/Icon-512.png": "96e752610906ba2a93c65f8abe1645f1",
"manifest.json": "a83bbbd9d23ea4d752fbcd44cdc544fa",
".git/config": "9fe828ebba60bb50295b01891c17215e",
".git/objects/95/459adb5f2df8843fcc1f7d29bd42ac3b07088f": "803447e478ab61e9632a4ee3c051927a",
".git/objects/0c/10c5ca6ceb967499699e5390273cd7434440c5": "2027bc1de10a986f5a7586b686353196",
".git/objects/0c/eec13537a521f629bc8310822e90a8f6f9dae4": "08a3cf37f829b1a358ee1e855ee94c52",
".git/objects/66/cfc3c5b61fbd6dcdbebfb9626b56ddc2eaea9d": "eddce3626cf133920399773970a7329c",
".git/objects/03/d5cc7b860effc9eb6ff0a51bf9526b893b8fd2": "79b41004e5ea592872df9e269b1e8779",
".git/objects/69/dd32f5f1926b98145912a21a37da1ddb426401": "a718a8750e574a71a202d63710944029",
".git/objects/67/a1f34cc12aea2ca319e1f82171a8da2bd3d606": "8f285b8632f74d8124ed4ad1a9ab1e3b",
".git/objects/60/7ca8eeccd497873c43eb825cd09eca9bdef0a6": "adceec8350bcc8e04bd572e04bcc0288",
".git/objects/d9/5740f18a1c22779567625b37b37c85b75fd408": "e7459c23b8873975b010267af3446d85",
".git/objects/ad/b99d540bce8ff507a6757a844b863fb2e63eca": "bcabe7b592fe417622fd01cccd69ac4b",
".git/objects/ae/b6c0f855d016aa8e70511bdedff317d73d0039": "cd830b073551d14a5f2f374927b308fe",
".git/objects/d8/6d38aa68bf2d6ad4f109dbc1813ff6c13b2009": "95fdc6706f713b429a033df7e125e0a4",
".git/objects/fc/565ec170b7fd55cbf422b8188a6f64eddda60e": "c1d5b622c8e63d1865785872c9d4a21d",
".git/objects/c6/3fd9b9f85fc50a96d98f15b9e0e7228cd2a1f7": "b0b84890a88a593603a83022e3c66119",
".git/objects/20/5bb5db271c6d8de8399864c7bb9b917f638893": "c993b22f115d7f3ae6d5b7b212806539",
".git/objects/11/eee871934c260ff558f2ae2fea814e111f1064": "3bc1897fa97b3996d2c894ad7f5560d3",
".git/objects/11/20e63f3914a21cbd8424b33224ec5dae233f19": "43bdd7bc782d205ab675cbee12704dd6",
".git/objects/80/6688f12bccd15ef7ea8afd71ab58bb05c89a57": "37cdf561a4e7b3cda24fa3b45ea4b2b2",
".git/objects/7b/711ea737f85810f0a93ff76069bce580c4508d": "edcf39291acb40faeb735353eafbdd7f",
".git/objects/8a/aa46ac1ae21512746f852a42ba87e4165dfdd1": "1d8820d345e38b30de033aa4b5a23e7b",
".git/objects/81/0337fcab9374ea7916511a5b9b59c1fe38c5fd": "cc99e87ef5a5ad26f76eb93e555d98fa",
".git/objects/43/8c215abbf16cb870239878c7e265c59807ae00": "c8c40408c8b14ba34228cc8a47cd31c0",
".git/objects/88/cfd48dff1169879ba46840804b412fe02fefd6": "e42aaae6a4cbfbc9f6326f1fa9e3380c",
".git/objects/6e/3f0ea770c7f84c76341ce41b2374111247f587": "b9e769ec8b82d448ce1f82cccdc93387",
".git/objects/54/c1faa93072d826f3edae8efd47769dec318c8d": "690d411c2c494b3630a6d07f8b16a00b",
".git/objects/3f/565eccf53273df1f8dc777bcff9ae728311cb5": "650b1a768e2f14a54fb434adb9398662",
".git/objects/30/3c5289f9d8b8fa01cd3226cb2854ee2c85eaa5": "6480a94de7a86d3748ca7938e4ac803b",
".git/objects/01/883ed0591a411116736c3187cb1ddc6609d80f": "2d1b51a48c6770eb9309100575d6287f",
".git/objects/52/0db953c6a50cb40b482a03908b96404fd90b87": "01aa77d6f0f138ab73f64b2545fdaf38",
".git/objects/55/4c16edbcfa8cbed90711528febb32720dad7ee": "00d32a08da6a79da7ca456ee9a8ca82b",
".git/objects/0f/9449ba4ca40bfef9ff23116819ddfa1496610c": "a3bcc05a176ee7431d6b5f6c5e669c91",
".git/objects/0f/816fb5068fb5d0dc1623718a94d7a34c5edfe4": "48392ce692d6328aef69a753fa305233",
".git/objects/bf/fdc7d406654896bf90954153d44b43100375e3": "7757938db72081ac241d947883414d68",
".git/objects/b7/49bfef07473333cf1dd31e9eed89862a5d52aa": "36b4020dca303986cad10924774fb5dc",
".git/objects/b7/12e6e295d6f20342cde562f7154823df78346e": "9fa81394cf088aa28e691518c43c1f9f",
".git/objects/ea/6ff545a246caa64074ba809bbc86fcb8589071": "b2fdd5c59953cf2b34eb306ea074c8f7",
".git/objects/e6/9c0cc75a27b1076564737edbdf434977a5643b": "d538518b45186ac90c78b6a06623a5a7",
".git/objects/f8/b5be819d416ec76af7cec9f5e3266d3b98ade3": "a64d4979cbb42f2ef5c23b2d8b067030",
".git/objects/46/4ab5882a2234c39b1a4dbad5feba0954478155": "2e52a767dc04391de7b4d0beb32e7fc4",
".git/objects/8d/ce3e337e6846c290f70ad0b9cce8f3d67d27ac": "887d95f6f97d2b18c502c91c0cc2a81d",
".git/objects/15/9b15011009e1e691b0761e5627dc3f3aa452ad": "822c0ced8e90203ed87ff7e0082d7945",
".git/objects/49/71e5a17150df7306fb78cb68248789ac1db065": "49bef9bf0dfb3e2aa1255276ea97c18f",
".git/objects/47/805e7b27b73b5be9cd4401c05b68a97f52cceb": "23062e8af6b60443ebb18ace45117802",
".git/objects/47/b3c5f76a8af32f6072498923bb5ba2a2f9267d": "c4c40dcd14fca7478c5bd15c4e14c568",
".git/objects/78/402abb3cc0883493abcda26d7e25ec75be37c3": "d67515879d162a4d93580d1de16aa20a",
".git/objects/78/37bac8cbf6cb5e54b761c37ba927dfdbe42005": "c39847a4c354aac179acc7f9c19c0298",
".git/objects/25/7dbe8dc78bf35a2a456066223ffd327ae66f7e": "1cd3e3a8ff31903ca28d7ad4fa56a153",
".git/HEAD": "4cf2d64e44205fe628ddd534e1151b58",
".git/info/exclude": "036208b4a1ab4a235d75c181e685e5a3",
".git/logs/HEAD": "cef7a6121015a917760e0e8c6e68aa64",
".git/logs/refs/heads/master": "cef7a6121015a917760e0e8c6e68aa64",
".git/logs/refs/remotes/origin/master": "3cb37322c8e80a6eaba377c8b40df6a8",
".git/description": "a0a7c3fff21f2aea3cfa1d0316dd816c",
".git/hooks/commit-msg.sample": "579a3c1e12a1e74a98169175fb913012",
".git/hooks/pre-rebase.sample": "56e45f2bcbc8226d2b4200f7c46371bf",
".git/hooks/pre-commit.sample": "305eadbbcd6f6d2567e033ad12aabbc4",
".git/hooks/applypatch-msg.sample": "ce562e08d8098926a3862fc6e7905199",
".git/hooks/fsmonitor-watchman.sample": "ea587b0fae70333bce92257152996e70",
".git/hooks/pre-receive.sample": "2ad18ec82c20af7b5926ed9cea6aeedd",
".git/hooks/prepare-commit-msg.sample": "2b5c047bdb474555e1787db32b2d2fc5",
".git/hooks/post-update.sample": "2b7ea5cee3c49ff53d41e00785eb974c",
".git/hooks/pre-merge-commit.sample": "39cb268e2a85d436b9eb6f47614c3cbc",
".git/hooks/pre-applypatch.sample": "054f9ffb8bfe04a599751cc757226dda",
".git/hooks/pre-push.sample": "3c5989301dd4b949dfa1f43738a22819",
".git/hooks/update.sample": "7bf1fcc5f411e5ad68c59b68661660ed",
".git/refs/heads/master": "45765835a739ddc18805f13e68941a61",
".git/refs/remotes/origin/master": "45765835a739ddc18805f13e68941a61",
".git/index": "26c18d57c1534f2d0014e4fe711fcca1",
".git/COMMIT_EDITMSG": "82b57b585639a3ea6b035d685e1e8fad",
"assets/AssetManifest.json": "e54cb7a603743da35478f584ee1b20ec",
"assets/NOTICES": "3b577be3e4cbe2152b5fb0f08220902f",
"assets/FontManifest.json": "dc3d03800ccca4601324923c0b1d6d57",
"assets/packages/cupertino_icons/assets/CupertinoIcons.ttf": "115e937bb829a890521f72d2e664b632",
"assets/fonts/MaterialIcons-Regular.otf": "a68d2a28c526b3b070aefca4bac93d25",
"assets/assets/linear_regression.png": "3e26b1d872c43ee370bcb2a5ea938faf",
"assets/assets/Trex_overview.png": "7f30e7317862a64849b64d5a3b85823c",
"assets/assets/openglCover.png": "20d01a1b38d105a9de5d87e3d3130481",
"assets/assets/project1.png": "274dd2309cfb4b54541eaf621a5988b3",
"assets/assets/github.png": "7f9799976ec1395e7017e21362b628ca",
"assets/assets/profilePic.jpeg": "52b593a44c064a7375d9bf5b0ee25864",
"assets/assets/linkedin.png": "a92ed19d2ab340766ecf9d7c91ec9ed5",
"assets/assets/github2.png": "ef7a02b69836dc8b6a732a54c4200dcb",
"assets/assets/youtube.png": "36eee8526bcc49f054d478b6429b7e33",
"assets/assets/snake.png": "f91c45eb8bb4c2e4da2774fbdab29616"
};

// The application shell files that are downloaded before a service worker can
// start.
const CORE = [
  "/",
"main.dart.js",
"index.html",
"assets/NOTICES",
"assets/AssetManifest.json",
"assets/FontManifest.json"];

// During install, the TEMP cache is populated with the application shell files.
self.addEventListener("install", (event) => {
  return event.waitUntil(
    caches.open(TEMP).then((cache) => {
      // Provide a 'reload' param to ensure the latest version is downloaded.
      return cache.addAll(CORE.map((value) => new Request(value, {'cache': 'reload'})));
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
  var origin = self.location.origin;
  var key = event.request.url.substring(origin.length + 1);
  // Redirect URLs to the index.html
  if (event.request.url == origin || event.request.url.startsWith(origin + '/#')) {
    key = '/';
  }
  // If the URL is not the RESOURCE list, skip the cache.
  if (!RESOURCES[key]) {
    return event.respondWith(fetch(event.request));
  }
  event.respondWith(caches.open(CACHE_NAME)
    .then((cache) =>  {
      return cache.match(event.request).then((response) => {
        // Either respond with the cached resource, or perform a fetch and
        // lazily populate the cache. Ensure the resources are not cached
        // by the browser for longer than the service worker expects.
        var modifiedRequest = new Request(event.request, {'cache': 'reload'});
        return response || fetch(modifiedRequest).then((response) => {
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
    return self.skipWaiting();
  }

  if (event.message === 'downloadOffline') {
    downloadOffline();
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
  for (var resourceKey in Object.keys(RESOURCES)) {
    if (!currentContent[resourceKey]) {
      resources.push(resourceKey);
    }
  }
  return contentCache.addAll(resources);
}
