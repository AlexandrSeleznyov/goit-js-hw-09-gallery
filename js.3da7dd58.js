parcelRequire=function(e,r,t,n){var i,o="function"==typeof parcelRequire&&parcelRequire,u="function"==typeof require&&require;function f(t,n){if(!r[t]){if(!e[t]){var i="function"==typeof parcelRequire&&parcelRequire;if(!n&&i)return i(t,!0);if(o)return o(t,!0);if(u&&"string"==typeof t)return u(t);var c=new Error("Cannot find module '"+t+"'");throw c.code="MODULE_NOT_FOUND",c}p.resolve=function(r){return e[t][1][r]||r},p.cache={};var l=r[t]=new f.Module(t);e[t][0].call(l.exports,p,l,l.exports,this)}return r[t].exports;function p(e){return f(p.resolve(e))}}f.isParcelRequire=!0,f.Module=function(e){this.id=e,this.bundle=f,this.exports={}},f.modules=e,f.cache=r,f.parent=o,f.register=function(r,t){e[r]=[function(e,r){r.exports=t},{}]};for(var c=0;c<t.length;c++)try{f(t[c])}catch(e){i||(i=e)}if(t.length){var l=f(t[t.length-1]);"object"==typeof exports&&"undefined"!=typeof module?module.exports=l:"function"==typeof define&&define.amd?define(function(){return l}):n&&(this[n]=l)}if(parcelRequire=f,i)throw i;return f}({"q5Rn":[function(require,module,exports) {
"use strict";Object.defineProperty(exports,"__esModule",{value:!0}),exports.default=void 0;var p=[{preview:"https://cdn.pixabay.com/photo/2019/05/14/16/43/himilayan-blue-poppy-4202825__340.jpg",original:"https://cdn.pixabay.com/photo/2019/05/14/16/43/himilayan-blue-poppy-4202825_1280.jpg",description:"Hokkaido Flower"},{preview:"https://cdn.pixabay.com/photo/2019/05/14/22/05/container-4203677__340.jpg",original:"https://cdn.pixabay.com/photo/2019/05/14/22/05/container-4203677_1280.jpg",description:"Container Haulage Freight"},{preview:"https://cdn.pixabay.com/photo/2019/05/16/09/47/beach-4206785__340.jpg",original:"https://cdn.pixabay.com/photo/2019/05/16/09/47/beach-4206785_1280.jpg",description:"Aerial Beach View"},{preview:"https://cdn.pixabay.com/photo/2016/11/18/16/19/flowers-1835619__340.jpg",original:"https://cdn.pixabay.com/photo/2016/11/18/16/19/flowers-1835619_1280.jpg",description:"Flower Blooms"},{preview:"https://cdn.pixabay.com/photo/2018/09/13/10/36/mountains-3674334__340.jpg",original:"https://cdn.pixabay.com/photo/2018/09/13/10/36/mountains-3674334_1280.jpg",description:"Alpine Mountains"},{preview:"https://cdn.pixabay.com/photo/2019/05/16/23/04/landscape-4208571__340.jpg",original:"https://cdn.pixabay.com/photo/2019/05/16/23/04/landscape-4208571_1280.jpg",description:"Mountain Lake Sailing"},{preview:"https://cdn.pixabay.com/photo/2019/05/17/09/27/the-alps-4209272__340.jpg",original:"https://cdn.pixabay.com/photo/2019/05/17/09/27/the-alps-4209272_1280.jpg",description:"Alpine Spring Meadows"},{preview:"https://cdn.pixabay.com/photo/2019/05/16/21/10/landscape-4208255__340.jpg",original:"https://cdn.pixabay.com/photo/2019/05/16/21/10/landscape-4208255_1280.jpg",description:"Nature Landscape"},{preview:"https://cdn.pixabay.com/photo/2019/05/17/04/35/lighthouse-4208843__340.jpg",original:"https://cdn.pixabay.com/photo/2019/05/17/04/35/lighthouse-4208843_1280.jpg",description:"Lighthouse Coast Sea"}];exports.default=p;
},{}],"QvaY":[function(require,module,exports) {
"use strict";var e=t(require("./gallery-items.js"));function t(e){return e&&e.__esModule?e:{default:e}}const n=document.querySelector(".js-gallery"),a=document.querySelector(".js-lightbox"),s=document.querySelector(".lightbox__image");function i(){const t=e.default.map((e,t)=>`\n    <li class="gallery__item">\n    <a\n        class="gallery__link"\n        href="${e.original}"\n    >\n        <img\n        class="gallery__image"\n        src="${e.preview}"\n        data-source="${e.original}"\n        data-index= ${t}\n        alt="${e.description}"\n        />\n    </a>\n    </li>`).join("");n.innerHTML=t,console.log(n)}function l(e){e.preventDefault();const t=e.target.dataset.source,n=e.target.dataset.index;if(console.log("idx",n),"gallery__image"===e.target.classList.value)return a.classList.add("is-open"),s.setAttribute("src",t),s.setAttribute("data-index",n),n}function r(e){"lightbox__overlay"!==e.target.classList.value&&"lightbox__button"!==e.target.classList.value||(e.preventDefault(),a.classList.remove("is-open"),s.setAttribute("src",""))}function o(t){t.preventDefault();let n=s.dataset.index;console.log("event index",s.dataset.index),"Escape"===t.key&&(a.classList.remove("is-open"),s.setAttribute("src","")),"ArrowLeft"===t.key&&(n>=0?(n-=1,s.setAttribute("src",e.default[n].original)):s.setAttribute("src",e.default[e.default.length-1].original))}i(),n.addEventListener("click",l),a.addEventListener("click",r),window.addEventListener("keydown",o);
},{"./gallery-items.js":"q5Rn"}]},{},["QvaY"], null)
//# sourceMappingURL=/parcel-project-template/js.3da7dd58.js.map