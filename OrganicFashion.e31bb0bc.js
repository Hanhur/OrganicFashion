// modules are defined as an array
// [ module function, map of requires ]
//
// map of requires is short require name -> numeric require
//
// anything defined in a previous bundle is accessed via the
// orig method which is the require for previous bundles
parcelRequire = (function (modules, cache, entry, globalName) {
  // Save the require from previous bundle to this closure if any
  var previousRequire = typeof parcelRequire === 'function' && parcelRequire;
  var nodeRequire = typeof require === 'function' && require;

  function newRequire(name, jumped) {
    if (!cache[name]) {
      if (!modules[name]) {
        // if we cannot find the module within our internal map or
        // cache jump to the current global require ie. the last bundle
        // that was added to the page.
        var currentRequire = typeof parcelRequire === 'function' && parcelRequire;
        if (!jumped && currentRequire) {
          return currentRequire(name, true);
        }

        // If there are other bundles on this page the require from the
        // previous one is saved to 'previousRequire'. Repeat this as
        // many times as there are bundles until the module is found or
        // we exhaust the require chain.
        if (previousRequire) {
          return previousRequire(name, true);
        }

        // Try the node require function if it exists.
        if (nodeRequire && typeof name === 'string') {
          return nodeRequire(name);
        }

        var err = new Error('Cannot find module \'' + name + '\'');
        err.code = 'MODULE_NOT_FOUND';
        throw err;
      }

      localRequire.resolve = resolve;
      localRequire.cache = {};

      var module = cache[name] = new newRequire.Module(name);

      modules[name][0].call(module.exports, localRequire, module, module.exports, this);
    }

    return cache[name].exports;

    function localRequire(x){
      return newRequire(localRequire.resolve(x));
    }

    function resolve(x){
      return modules[name][1][x] || x;
    }
  }

  function Module(moduleName) {
    this.id = moduleName;
    this.bundle = newRequire;
    this.exports = {};
  }

  newRequire.isParcelRequire = true;
  newRequire.Module = Module;
  newRequire.modules = modules;
  newRequire.cache = cache;
  newRequire.parent = previousRequire;
  newRequire.register = function (id, exports) {
    modules[id] = [function (require, module) {
      module.exports = exports;
    }, {}];
  };

  var error;
  for (var i = 0; i < entry.length; i++) {
    try {
      newRequire(entry[i]);
    } catch (e) {
      // Save first error but execute all entries
      if (!error) {
        error = e;
      }
    }
  }

  if (entry.length) {
    // Expose entry point to Node, AMD or browser globals
    // Based on https://github.com/ForbesLindesay/umd/blob/master/template.js
    var mainExports = newRequire(entry[entry.length - 1]);

    // CommonJS
    if (typeof exports === "object" && typeof module !== "undefined") {
      module.exports = mainExports;

    // RequireJS
    } else if (typeof define === "function" && define.amd) {
     define(function () {
       return mainExports;
     });

    // <script>
    } else if (globalName) {
      this[globalName] = mainExports;
    }
  }

  // Override the current require with this new one
  parcelRequire = newRequire;

  if (error) {
    // throw error from earlier, _after updating parcelRequire_
    throw error;
  }

  return newRequire;
})({"src/img/image-1.png":[function(require,module,exports) {
module.exports = "/image-1.75fea045.png";
},{}],"node_modules/parcel-bundler/src/builtins/bundle-url.js":[function(require,module,exports) {
var bundleURL = null;
function getBundleURLCached() {
  if (!bundleURL) {
    bundleURL = getBundleURL();
  }
  return bundleURL;
}
function getBundleURL() {
  // Attempt to find the URL of the current script and use that as the base URL
  try {
    throw new Error();
  } catch (err) {
    var matches = ('' + err.stack).match(/(https?|file|ftp|chrome-extension|moz-extension):\/\/[^)\n]+/g);
    if (matches) {
      return getBaseURL(matches[0]);
    }
  }
  return '/';
}
function getBaseURL(url) {
  return ('' + url).replace(/^((?:https?|file|ftp|chrome-extension|moz-extension):\/\/.+)?\/[^/]+(?:\?.*)?$/, '$1') + '/';
}
exports.getBundleURL = getBundleURLCached;
exports.getBaseURL = getBaseURL;
},{}],"node_modules/parcel-bundler/src/builtins/css-loader.js":[function(require,module,exports) {
var bundle = require('./bundle-url');
function updateLink(link) {
  var newLink = link.cloneNode();
  newLink.onload = function () {
    link.remove();
  };
  newLink.href = link.href.split('?')[0] + '?' + Date.now();
  link.parentNode.insertBefore(newLink, link.nextSibling);
}
var cssTimeout = null;
function reloadCSS() {
  if (cssTimeout) {
    return;
  }
  cssTimeout = setTimeout(function () {
    var links = document.querySelectorAll('link[rel="stylesheet"]');
    for (var i = 0; i < links.length; i++) {
      if (bundle.getBaseURL(links[i].href) === bundle.getBundleURL()) {
        updateLink(links[i]);
      }
    }
    cssTimeout = null;
  }, 50);
}
module.exports = reloadCSS;
},{"./bundle-url":"node_modules/parcel-bundler/src/builtins/bundle-url.js"}],"src/components/header/header.css":[function(require,module,exports) {
var reloadCSS = require('_css_loader');
module.hot.dispose(reloadCSS);
module.hot.accept(reloadCSS);
},{"_css_loader":"node_modules/parcel-bundler/src/builtins/css-loader.js"}],"src/components/header/header.js":[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.getHeader = getHeader;
var _image = _interopRequireDefault(require("../../img/image-1.png"));
require("./header.css");
function _interopRequireDefault(e) { return e && e.__esModule ? e : { default: e }; }
// import { router } from "../../index.js";

var navigationArray = ["ALTANSCHOOL WEB COURSES", "HOME", "ABOUT", "SHOP", "BLOG", "CONTACT"];
function getHeader() {
  var header = document.createElement("header");
  header.classList.add("header");
  var container = document.createElement("div");
  container.classList.add("container");
  var nav = document.createElement("nav");
  nav.classList.add("navigator");
  var list = document.createElement("ul");
  list.classList.add("list");
  navigationArray.forEach(function (item) {
    var items = document.createElement("li");
    items.classList.add("items");
    var link = document.createElement("a");
    link.classList.add("link");
    link.href = "/";
    list.appendChild(items);
    items.appendChild(link);
    link.innerHTML = item;
  });
  var organicContent = document.createElement("div");
  organicContent.classList.add("organic_content");
  var img = document.createElement("img");
  img.classList.add("organic_content-img");
  img.src = _image.default;
  img.alt = "Example image";
  var organicBox = document.createElement("div");
  organicBox.classList.add("organic_box");
  var title = document.createElement("h1");
  title.classList.add("organic_box-title");
  title.textContent = "ORGANIC FASHION";
  var text = document.createElement("p");
  text.classList.add("organic_box-text");
  text.textContent = "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.";
  var button = document.createElement("button");
  button.classList.add("organic_box-btn");
  button.textContent = "SHOP NOW";
  header.append(container);
  container.append(nav, organicContent);
  nav.append(list);
  organicContent.append(img, organicBox);
  organicBox.append(title, text, button);
  return header;
}
},{"../../img/image-1.png":"src/img/image-1.png","./header.css":"src/components/header/header.css"}],"src/components/categories/categories.css":[function(require,module,exports) {
var reloadCSS = require('_css_loader');
module.hot.dispose(reloadCSS);
module.hot.accept(reloadCSS);
},{"_css_loader":"node_modules/parcel-bundler/src/builtins/css-loader.js"}],"src/img/categories/image-1.png":[function(require,module,exports) {
module.exports = "/image-1.6c7b8715.png";
},{}],"src/img/categories/image-2.png":[function(require,module,exports) {
module.exports = "/image-2.1b30d680.png";
},{}],"src/img/categories/image-3.png":[function(require,module,exports) {
module.exports = "/image-3.3ecc05cc.png";
},{}],"src/img/categories/image-4.png":[function(require,module,exports) {
module.exports = "/image-4.19638b92.png";
},{}],"src/img/categories/image-5.png":[function(require,module,exports) {
module.exports = "/image-5.3f5bbde0.png";
},{}],"src/components/categories/pageCategories.js":[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.getPageCategories = getPageCategories;
require("./categories.css");
var _image = _interopRequireDefault(require("../../img/categories/image-1.png"));
var _image2 = _interopRequireDefault(require("../../img/categories/image-2.png"));
var _image3 = _interopRequireDefault(require("../../img/categories/image-3.png"));
var _image4 = _interopRequireDefault(require("../../img/categories/image-4.png"));
var _image5 = _interopRequireDefault(require("../../img/categories/image-5.png"));
function _interopRequireDefault(e) { return e && e.__esModule ? e : { default: e }; }
var categoriesArray = [_image.default, _image2.default, _image3.default, _image4.default];
function getPageCategories() {
  var section = document.createElement("section");
  section.classList.add("section-categories");
  var container = document.createElement("div");
  container.classList.add("container");
  var categories_shop = document.createElement("div");
  categories_shop.classList.add("categories_shop");
  var title = document.createElement("h2");
  title.classList.add("categories-title", "titles");
  title.textContent = "SHOP BY CATEGORIES";
  var categories_shop_images = document.createElement("div");
  categories_shop_images.classList.add("categories_shop-images");
  var categories_images = document.createElement("div");
  categories_images.classList.add("categories_images");
  categoriesArray.forEach(function (item) {
    var img = document.createElement("img");
    img.classList.add("categories_images-img");
    img.src = item;
    img.alt = "Example image";
    categories_images.appendChild(img);
  });
  var img = document.createElement("img");
  img.classList.add("categories_shop-images-img");
  img.src = _image5.default;
  img.alt = "Example image";
  section.append(container);
  container.append(categories_shop);
  categories_shop.append(title, categories_shop_images, categories_images);
  categories_shop_images.append(categories_images, img);
  return section;
}
},{"./categories.css":"src/components/categories/categories.css","../../img/categories/image-1.png":"src/img/categories/image-1.png","../../img/categories/image-2.png":"src/img/categories/image-2.png","../../img/categories/image-3.png":"src/img/categories/image-3.png","../../img/categories/image-4.png":"src/img/categories/image-4.png","../../img/categories/image-5.png":"src/img/categories/image-5.png"}],"src/components/collection/collection.css":[function(require,module,exports) {
var reloadCSS = require('_css_loader');
module.hot.dispose(reloadCSS);
module.hot.accept(reloadCSS);
},{"_css_loader":"node_modules/parcel-bundler/src/builtins/css-loader.js"}],"src/img/collection/image-1.png":[function(require,module,exports) {
module.exports = "/image-1.4ddedca7.png";
},{}],"src/img/collection/image-2.png":[function(require,module,exports) {
module.exports = "/image-2.e03b7fba.png";
},{}],"src/img/collection/image-3.png":[function(require,module,exports) {
module.exports = "/image-3.3d02050e.png";
},{}],"src/components/collection/pageCollection.js":[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.getPageCollection = getPageCollection;
require("./collection.css");
var _image = _interopRequireDefault(require("../../img/collection/image-1.png"));
var _image2 = _interopRequireDefault(require("../../img/collection/image-2.png"));
var _image3 = _interopRequireDefault(require("../../img/collection/image-3.png"));
function _interopRequireDefault(e) { return e && e.__esModule ? e : { default: e }; }
var collectionArray = [_image.default, _image2.default, _image3.default];
function getPageCollection() {
  var section = document.createElement("section");
  section.classList.add("section-collection");
  var container = document.createElement("div");
  container.classList.add("container");
  var title = document.createElement("h2");
  title.classList.add("collection-title", "titles");
  title.textContent = "NEW COLLECTION";
  var collectionNew = document.createElement("div");
  collectionNew.classList.add("collection_new");
  collectionArray.forEach(function (item) {
    var img = document.createElement("img");
    img.classList.add("collection_new-img");
    img.src = item;
    img.alt = "Example image";
    collectionNew.appendChild(img);
  });
  var text = document.createElement("p");
  text.classList.add("collection_text");
  text.textContent = "Lorem Ipsum is simply dummy text of the printing and typesetting industry.";
  section.append(container);
  container.append(title, collectionNew, text);
  return section;
}
},{"./collection.css":"src/components/collection/collection.css","../../img/collection/image-1.png":"src/img/collection/image-1.png","../../img/collection/image-2.png":"src/img/collection/image-2.png","../../img/collection/image-3.png":"src/img/collection/image-3.png"}],"src/components/about/about.css":[function(require,module,exports) {
var reloadCSS = require('_css_loader');
module.hot.dispose(reloadCSS);
module.hot.accept(reloadCSS);
},{"_css_loader":"node_modules/parcel-bundler/src/builtins/css-loader.js"}],"src/img/about.png":[function(require,module,exports) {
module.exports = "/about.09a40596.png";
},{}],"src/components/about/pageAbout.js":[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.getPageAbout = getPageAbout;
require("./about.css");
var _about2 = _interopRequireDefault(require("../../img/about.png"));
function _interopRequireDefault(e) { return e && e.__esModule ? e : { default: e }; }
function getPageAbout() {
  var section = document.createElement("section");
  section.classList.add("section-about");
  var container = document.createElement("div");
  container.classList.add("container");
  var about_inner = document.createElement("div");
  about_inner.classList.add("about-inner");
  var img = document.createElement("img");
  img.classList.add("about-img");
  img.src = _about2.default;
  img.alt = "Example image";
  var aboutContent = document.createElement("div");
  aboutContent.classList.add("about-content");
  var title = document.createElement("h2");
  title.classList.add("about-title", "titles");
  title.textContent = "ABOUT US";
  var text1 = document.createElement("p");
  text1.classList.add("about-text", "text");
  text1.textContent = "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.";
  var images = document.createElement("img");
  images.classList.add("about-img--hidden");
  images.src = _about2.default;
  images.alt = "Example image";
  var text2 = document.createElement("p");
  text2.classList.add("about-text");
  text2.textContent = "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.";
  var button = document.createElement("button");
  button.classList.add("about-btn");
  button.textContent = "LEARN MORE";
  section.append(container);
  container.append(about_inner);
  about_inner.append(img, aboutContent);
  aboutContent.append(title, text1, images, text2, button);
  return section;
}
},{"./about.css":"src/components/about/about.css","../../img/about.png":"src/img/about.png"}],"src/page/pageMain.js":[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.getPageMain = getPageMain;
var _pageCategories = require("../components/categories/pageCategories.js");
var _pageCollection = require("../components/collection/pageCollection.js");
var _pageAbout = require("../components/about/pageAbout.js");
function getPageMain() {
  var main = document.createElement("main");
  main.classList.add("main");
  main.append((0, _pageCategories.getPageCategories)());
  main.append((0, _pageCollection.getPageCollection)());
  main.append((0, _pageAbout.getPageAbout)());
  return main;
}
},{"../components/categories/pageCategories.js":"src/components/categories/pageCategories.js","../components/collection/pageCollection.js":"src/components/collection/pageCollection.js","../components/about/pageAbout.js":"src/components/about/pageAbout.js"}],"src/img/follow.png":[function(require,module,exports) {
module.exports = "/follow.ae71f4fc.png";
},{}],"src/components/footer/footer.css":[function(require,module,exports) {
var reloadCSS = require('_css_loader');
module.hot.dispose(reloadCSS);
module.hot.accept(reloadCSS);
},{"_css_loader":"node_modules/parcel-bundler/src/builtins/css-loader.js"}],"src/components/footer/footer.js":[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.getFooter = getFooter;
var _follow = _interopRequireDefault(require("../../img/follow.png"));
require("./footer.css");
function _interopRequireDefault(e) { return e && e.__esModule ? e : { default: e }; }
function getFooter() {
  var footer = document.createElement("footer");
  footer.classList.add("footer");
  var container = document.createElement("div");
  container.classList.add("container");
  var follow_inner = document.createElement("div");
  follow_inner.classList.add("follow-inner");
  var follow_content = document.createElement("div");
  follow_content.classList.add("follow-content");
  var title = document.createElement("h2");
  title.classList.add("follow-title", "titles");
  title.textContent = "FOLLOW US";
  var form = document.createElement("form");
  form.classList.add("follow-form");
  var nameInput = document.createElement("input");
  nameInput.classList.add("name-input");
  nameInput.placeholder = "Enter your name";
  var emailAddressInput = document.createElement("input");
  emailAddressInput.classList.add("email_address-input");
  emailAddressInput.placeholder = "Enter a valid email address";
  var textareaMessage = document.createElement("textarea");
  textareaMessage.classList.add("message-input");
  textareaMessage.placeholder = "Enter your message";
  var button = document.createElement("button");
  button.classList.add("follow-btn");
  button.type = "submit";
  button.textContent = "SUBMIT";
  var img = document.createElement("img");
  img.classList.add("follow-img");
  img.src = _follow.default;
  img.alt = "Example image";
  footer.append(container);
  container.append(follow_inner);
  follow_inner.append(follow_content, img);
  follow_content.append(title, form, button);
  form.append(nameInput, emailAddressInput, textareaMessage);
  return footer;
}
},{"../../img/follow.png":"src/img/follow.png","./footer.css":"src/components/footer/footer.css"}],"index.js":[function(require,module,exports) {
"use strict";

var _header = require("./src/components/header/header.js");
var _pageMain = require("./src/page/pageMain.js");
var _footer = require("./src/components/footer/footer.js");
// import Navigo from "navigo";

var app = document.querySelector("#app");

// export const router = new Navigo('/');

var header = (0, _header.getHeader)();
// const pageMain = getPageMain();
// const footer = getFooter();

app.append(header);
},{"./src/components/header/header.js":"src/components/header/header.js","./src/page/pageMain.js":"src/page/pageMain.js","./src/components/footer/footer.js":"src/components/footer/footer.js"}],"node_modules/parcel-bundler/src/builtins/hmr-runtime.js":[function(require,module,exports) {
var global = arguments[3];
var OVERLAY_ID = '__parcel__error__overlay__';
var OldModule = module.bundle.Module;
function Module(moduleName) {
  OldModule.call(this, moduleName);
  this.hot = {
    data: module.bundle.hotData,
    _acceptCallbacks: [],
    _disposeCallbacks: [],
    accept: function (fn) {
      this._acceptCallbacks.push(fn || function () {});
    },
    dispose: function (fn) {
      this._disposeCallbacks.push(fn);
    }
  };
  module.bundle.hotData = null;
}
module.bundle.Module = Module;
var checkedAssets, assetsToAccept;
var parent = module.bundle.parent;
if ((!parent || !parent.isParcelRequire) && typeof WebSocket !== 'undefined') {
  var hostname = "" || location.hostname;
  var protocol = location.protocol === 'https:' ? 'wss' : 'ws';
  var ws = new WebSocket(protocol + '://' + hostname + ':' + "35027" + '/');
  ws.onmessage = function (event) {
    checkedAssets = {};
    assetsToAccept = [];
    var data = JSON.parse(event.data);
    if (data.type === 'update') {
      var handled = false;
      data.assets.forEach(function (asset) {
        if (!asset.isNew) {
          var didAccept = hmrAcceptCheck(global.parcelRequire, asset.id);
          if (didAccept) {
            handled = true;
          }
        }
      });

      // Enable HMR for CSS by default.
      handled = handled || data.assets.every(function (asset) {
        return asset.type === 'css' && asset.generated.js;
      });
      if (handled) {
        console.clear();
        data.assets.forEach(function (asset) {
          hmrApply(global.parcelRequire, asset);
        });
        assetsToAccept.forEach(function (v) {
          hmrAcceptRun(v[0], v[1]);
        });
      } else if (location.reload) {
        // `location` global exists in a web worker context but lacks `.reload()` function.
        location.reload();
      }
    }
    if (data.type === 'reload') {
      ws.close();
      ws.onclose = function () {
        location.reload();
      };
    }
    if (data.type === 'error-resolved') {
      console.log('[parcel] ✨ Error resolved');
      removeErrorOverlay();
    }
    if (data.type === 'error') {
      console.error('[parcel] 🚨  ' + data.error.message + '\n' + data.error.stack);
      removeErrorOverlay();
      var overlay = createErrorOverlay(data);
      document.body.appendChild(overlay);
    }
  };
}
function removeErrorOverlay() {
  var overlay = document.getElementById(OVERLAY_ID);
  if (overlay) {
    overlay.remove();
  }
}
function createErrorOverlay(data) {
  var overlay = document.createElement('div');
  overlay.id = OVERLAY_ID;

  // html encode message and stack trace
  var message = document.createElement('div');
  var stackTrace = document.createElement('pre');
  message.innerText = data.error.message;
  stackTrace.innerText = data.error.stack;
  overlay.innerHTML = '<div style="background: black; font-size: 16px; color: white; position: fixed; height: 100%; width: 100%; top: 0px; left: 0px; padding: 30px; opacity: 0.85; font-family: Menlo, Consolas, monospace; z-index: 9999;">' + '<span style="background: red; padding: 2px 4px; border-radius: 2px;">ERROR</span>' + '<span style="top: 2px; margin-left: 5px; position: relative;">🚨</span>' + '<div style="font-size: 18px; font-weight: bold; margin-top: 20px;">' + message.innerHTML + '</div>' + '<pre>' + stackTrace.innerHTML + '</pre>' + '</div>';
  return overlay;
}
function getParents(bundle, id) {
  var modules = bundle.modules;
  if (!modules) {
    return [];
  }
  var parents = [];
  var k, d, dep;
  for (k in modules) {
    for (d in modules[k][1]) {
      dep = modules[k][1][d];
      if (dep === id || Array.isArray(dep) && dep[dep.length - 1] === id) {
        parents.push(k);
      }
    }
  }
  if (bundle.parent) {
    parents = parents.concat(getParents(bundle.parent, id));
  }
  return parents;
}
function hmrApply(bundle, asset) {
  var modules = bundle.modules;
  if (!modules) {
    return;
  }
  if (modules[asset.id] || !bundle.parent) {
    var fn = new Function('require', 'module', 'exports', asset.generated.js);
    asset.isNew = !modules[asset.id];
    modules[asset.id] = [fn, asset.deps];
  } else if (bundle.parent) {
    hmrApply(bundle.parent, asset);
  }
}
function hmrAcceptCheck(bundle, id) {
  var modules = bundle.modules;
  if (!modules) {
    return;
  }
  if (!modules[id] && bundle.parent) {
    return hmrAcceptCheck(bundle.parent, id);
  }
  if (checkedAssets[id]) {
    return;
  }
  checkedAssets[id] = true;
  var cached = bundle.cache[id];
  assetsToAccept.push([bundle, id]);
  if (cached && cached.hot && cached.hot._acceptCallbacks.length) {
    return true;
  }
  return getParents(global.parcelRequire, id).some(function (id) {
    return hmrAcceptCheck(global.parcelRequire, id);
  });
}
function hmrAcceptRun(bundle, id) {
  var cached = bundle.cache[id];
  bundle.hotData = {};
  if (cached) {
    cached.hot.data = bundle.hotData;
  }
  if (cached && cached.hot && cached.hot._disposeCallbacks.length) {
    cached.hot._disposeCallbacks.forEach(function (cb) {
      cb(bundle.hotData);
    });
  }
  delete bundle.cache[id];
  bundle(id);
  cached = bundle.cache[id];
  if (cached && cached.hot && cached.hot._acceptCallbacks.length) {
    cached.hot._acceptCallbacks.forEach(function (cb) {
      cb();
    });
    return true;
  }
}
},{}]},{},["node_modules/parcel-bundler/src/builtins/hmr-runtime.js","index.js"], null)
//# sourceMappingURL=/OrganicFashion.e31bb0bc.js.map