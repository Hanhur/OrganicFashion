parcelRequire=function(e,r,t,n){var i,o="function"==typeof parcelRequire&&parcelRequire,u="function"==typeof require&&require;function f(t,n){if(!r[t]){if(!e[t]){var i="function"==typeof parcelRequire&&parcelRequire;if(!n&&i)return i(t,!0);if(o)return o(t,!0);if(u&&"string"==typeof t)return u(t);var c=new Error("Cannot find module '"+t+"'");throw c.code="MODULE_NOT_FOUND",c}p.resolve=function(r){return e[t][1][r]||r},p.cache={};var l=r[t]=new f.Module(t);e[t][0].call(l.exports,p,l,l.exports,this)}return r[t].exports;function p(e){return f(p.resolve(e))}}f.isParcelRequire=!0,f.Module=function(e){this.id=e,this.bundle=f,this.exports={}},f.modules=e,f.cache=r,f.parent=o,f.register=function(r,t){e[r]=[function(e,r){r.exports=t},{}]};for(var c=0;c<t.length;c++)try{f(t[c])}catch(e){i||(i=e)}if(t.length){var l=f(t[t.length-1]);"object"==typeof exports&&"undefined"!=typeof module?module.exports=l:"function"==typeof define&&define.amd?define(function(){return l}):n&&(this[n]=l)}if(parcelRequire=f,i)throw i;return f}({"WHGE":[function(require,module,exports) {
module.exports="/OrganicFashion/image-1.f53efa5e.png";
},{}],"ZY4a":[function(require,module,exports) {

},{}],"PU4h":[function(require,module,exports) {
"use strict";Object.defineProperty(exports,"__esModule",{value:!0}),exports.getHeader=n;var e=t(require("../../img/image-1.png"));function t(e){return e&&e.__esModule?e:{default:e}}require("./header.css");var a=["ALTANSCHOOL WEB COURSES","HOME","ABOUT","SHOP","BLOG","CONTACT"];function n(){var t=document.createElement("header");t.classList.add("header");var n=document.createElement("div");n.classList.add("container");var d=document.createElement("nav");d.classList.add("navigator");var r=document.createElement("ul");r.classList.add("list"),a.forEach(function(e){var t=document.createElement("li");t.classList.add("items");var a=document.createElement("a");a.classList.add("link"),a.href="/",r.appendChild(t),t.appendChild(a),a.innerHTML=e});var s=document.createElement("div");s.classList.add("organic_content");var c=document.createElement("img");c.classList.add("organic_content-img"),c.src=e.default,c.alt="Example image";var i=document.createElement("div");i.classList.add("organic_box");var o=document.createElement("h1");o.classList.add("organic_box-title"),o.textContent="ORGANIC FASHION";var m=document.createElement("p");m.classList.add("organic_box-text"),m.textContent="Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.";var l=document.createElement("button");return l.classList.add("organic_box-btn"),l.textContent="SHOP NOW",t.append(n),n.append(d,s),d.append(r),s.append(c,i),i.append(o,m,l),t}
},{"../../img/image-1.png":"WHGE","./header.css":"ZY4a"}],"NKzm":[function(require,module,exports) {
module.exports="/OrganicFashion/image-1.c4a6f0ec.png";
},{}],"gapj":[function(require,module,exports) {
module.exports="/OrganicFashion/image-2.25d036c9.png";
},{}],"KeoD":[function(require,module,exports) {
module.exports="/OrganicFashion/image-3.e0bc77e4.png";
},{}],"IZdq":[function(require,module,exports) {
module.exports="/OrganicFashion/image-4.40c7e6fa.png";
},{}],"OVp7":[function(require,module,exports) {
module.exports="/OrganicFashion/image-5.80043aac.png";
},{}],"rov2":[function(require,module,exports) {
"use strict";Object.defineProperty(exports,"__esModule",{value:!0}),exports.getPageCategories=d;var e=r(require("../../img/categories/image-1.png")),a=r(require("../../img/categories/image-2.png")),t=r(require("../../img/categories/image-3.png")),i=r(require("../../img/categories/image-4.png")),s=r(require("../../img/categories/image-5.png"));function r(e){return e&&e.__esModule?e:{default:e}}require("./categories.css");var c=[e.default,a.default,t.default,i.default];function d(){var e=document.createElement("section");e.classList.add("section-categories");var a=document.createElement("div");a.classList.add("container");var t=document.createElement("div");t.classList.add("categories_shop");var i=document.createElement("h2");i.classList.add("categories-title","titles"),i.textContent="SHOP BY CATEGORIES";var r=document.createElement("div");r.classList.add("categories_shop-images");var d=document.createElement("div");d.classList.add("categories_images"),c.forEach(function(e){var a=document.createElement("img");a.classList.add("categories_images-img"),a.src=e,a.alt="Example image",d.appendChild(a)});var g=document.createElement("img");return g.classList.add("categories_shop-images-img"),g.src=s.default,g.alt="Example image",e.append(a),a.append(t),t.append(i,r,d),r.append(d,g),e}
},{"../../img/categories/image-1.png":"NKzm","../../img/categories/image-2.png":"gapj","../../img/categories/image-3.png":"KeoD","../../img/categories/image-4.png":"IZdq","../../img/categories/image-5.png":"OVp7","./categories.css":"ZY4a"}],"OA7x":[function(require,module,exports) {
module.exports="/OrganicFashion/image-1.12aece20.png";
},{}],"K97M":[function(require,module,exports) {
module.exports="/OrganicFashion/image-2.3ebb42ae.png";
},{}],"W9zd":[function(require,module,exports) {
module.exports="/OrganicFashion/image-3.3c036f5b.png";
},{}],"ZAUO":[function(require,module,exports) {
"use strict";Object.defineProperty(exports,"__esModule",{value:!0}),exports.getPageCollection=l;var e=c(require("../../img/collection/image-1.png")),t=c(require("../../img/collection/image-2.png")),n=c(require("../../img/collection/image-3.png"));function c(e){return e&&e.__esModule?e:{default:e}}require("./collection.css");var i=[e.default,t.default,n.default];function l(){var e=document.createElement("section");e.classList.add("section-collection");var t=document.createElement("div");t.classList.add("container");var n=document.createElement("h2");n.classList.add("collection-title","titles"),n.textContent="NEW COLLECTION";var c=document.createElement("div");c.classList.add("collection_new"),i.forEach(function(e){var t=document.createElement("img");t.classList.add("collection_new-img"),t.src=e,t.alt="Example image",c.appendChild(t)});var l=document.createElement("p");return l.classList.add("collection_text"),l.textContent="Lorem Ipsum is simply dummy text of the printing and typesetting industry.",e.append(t),t.append(n,c,l),e}
},{"../../img/collection/image-1.png":"OA7x","../../img/collection/image-2.png":"K97M","../../img/collection/image-3.png":"W9zd","./collection.css":"ZY4a"}],"L1VQ":[function(require,module,exports) {
module.exports="/OrganicFashion/about.9d2b4ed6.png";
},{}],"pe2M":[function(require,module,exports) {

},{"./../../img/about.png":[["about.9d2b4ed6.png","L1VQ"],"L1VQ"]}],"pBb5":[function(require,module,exports) {
"use strict";Object.defineProperty(exports,"__esModule",{value:!0}),exports.getPageAbout=n;var e=t(require("../../img/about.png"));function t(e){return e&&e.__esModule?e:{default:e}}function n(){var t=document.createElement("section");t.classList.add("section-about");var n=document.createElement("div");n.classList.add("container");var a=document.createElement("div");a.classList.add("about-inner");var s=document.createElement("img");s.classList.add("about-img"),s.src=e.default,s.alt="Example image";var i=document.createElement("div");i.classList.add("about-content");var o=document.createElement("h2");o.classList.add("about-title","titles"),o.textContent="ABOUT US";var r=document.createElement("p");r.classList.add("about-text","text"),r.textContent="Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.";var d=document.createElement("p");d.classList.add("about-text"),d.textContent="Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.";var u=document.createElement("button");return u.classList.add("about-btn"),u.textContent="LEARN MORE",t.append(n),n.append(a),a.append(s,i),i.append(o,r,d,u),t}require("./about.css");
},{"../../img/about.png":"L1VQ","./about.css":"pe2M"}],"BzMS":[function(require,module,exports) {
"use strict";Object.defineProperty(exports,"__esModule",{value:!0}),exports.getPageMain=a;var e=require("../components/categories/pageCategories.js"),t=require("../components/collection/pageCollection.js"),o=require("../components/about/pageAbout.js");function a(){var a=document.createElement("main");return a.classList.add("main"),a.append((0,e.getPageCategories)()),a.append((0,t.getPageCollection)()),a.append((0,o.getPageAbout)()),a}
},{"../components/categories/pageCategories.js":"rov2","../components/collection/pageCollection.js":"ZAUO","../components/about/pageAbout.js":"pBb5"}],"c9hS":[function(require,module,exports) {
module.exports="/OrganicFashion/follow.204ac20f.png";
},{}],"Se9x":[function(require,module,exports) {
"use strict";Object.defineProperty(exports,"__esModule",{value:!0}),exports.getFooter=a;var e=t(require("../../img/follow.png"));function t(e){return e&&e.__esModule?e:{default:e}}function a(){var t=document.createElement("footer");t.classList.add("footer");var a=document.createElement("div");a.classList.add("container");var n=document.createElement("div");n.classList.add("follow-inner");var r=document.createElement("div");r.classList.add("follow-content");var d=document.createElement("h2");d.classList.add("follow-title","titles"),d.textContent="FOLLOW US";var l=document.createElement("form");l.classList.add("follow-form");var o=document.createElement("input");o.classList.add("name-input"),o.placeholder="Enter your name";var s=document.createElement("input");s.classList.add("email_address-input"),s.placeholder="Enter a valid email address";var c=document.createElement("textarea");c.classList.add("message-input"),c.placeholder="Enter your message";var i=document.createElement("button");i.classList.add("follow-btn"),i.type="submit",i.textContent="SUBMIT";var m=document.createElement("img");return m.classList.add("follow-img"),m.src=e.default,m.alt="Example image",t.append(a),a.append(n),n.append(r,m),r.append(d,l,i),l.append(o,s,c),t}require("./footer.css");
},{"../../img/follow.png":"c9hS","./footer.css":"ZY4a"}],"Focm":[function(require,module,exports) {
"use strict";var e=require("./src/components/header/header.js"),r=require("./src/page/pageMain.js"),o=require("./src/components/footer/footer.js"),t=document.querySelector("#app"),a=(0,e.getHeader)(),s=(0,r.getPageMain)(),c=(0,o.getFooter)();t.append(a,s,c);
},{"./src/components/header/header.js":"PU4h","./src/page/pageMain.js":"BzMS","./src/components/footer/footer.js":"Se9x"}]},{},["Focm"], null)
//# sourceMappingURL=/OrganicFashion/OrganicFashion.1eebec68.js.map