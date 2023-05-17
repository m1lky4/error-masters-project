!function(){function e(e){return e&&e.__esModule?e.default:e}var t="undefined"!=typeof globalThis?globalThis:"undefined"!=typeof self?self:"undefined"!=typeof window?window:"undefined"!=typeof global?global:{},n={},i={},s=t.parcelRequire64ec;null==s&&((s=function(e){if(e in n)return n[e].exports;if(e in i){var t=i[e];delete i[e];var s={id:e,exports:{}};return n[e]=s,t.call(s.exports,s,s.exports),s.exports}var r=new Error("Cannot find module '"+e+"'");throw r.code="MODULE_NOT_FOUND",r}).register=function(e,t){i[e]=t},t.parcelRequire64ec=s);var r=s("eieUh");function o(e){return e.map((e=>`<li class="book-item" data-id='${e._id}'>\n      <div class="scale-images mask mask-one mask-one-frame">\n        <img\n          class="book-images mask-img"\n          src="${e.book_image}"\n          alt="${e.title}"\n        />\n        <p class="quick-view">quick view</p>\n        </div>\n        <h3 class="book-full-name">${e.title}</h3>\n        <p class="book-author">${e.author}</p>\n      </li>`)).join("")}function a(e){const t=e.split(" "),n=t.length-1;return t.map(((e,t)=>n===t?`<span class="violet">${e}</span>`:e)).join(" ")}function l(e,t){return e.map((({list_name:e,books:n})=>`\n        <li class="category-markup-item">\n            <p class="category-markup-subtitle">\n              ${e}\n            </p>\n            <ul class="books-list-markup">\n            ${o(n.slice(0,t))}\n            </ul>\n            <button class="category-markup-button glow-on-hover" type="submit">\n              See more\n            </button>\n          </li>\n        `)).join("")}r=s("eieUh");var c,u=NaN,h="[object Symbol]",d=/^\s+|\s+$/g,p=/^[-+]0x[0-9a-f]+$/i,f=/^0b[01]+$/i,m=/^0o[0-7]+$/i,g=parseInt,v="object"==typeof t&&t&&t.Object===Object&&t,y="object"==typeof self&&self&&self.Object===Object&&self,w=v||y||Function("return this")(),b=Object.prototype.toString,E=Math.max,T=Math.min,S=function(){return w.Date.now()};function I(e){var t=typeof e;return!!e&&("object"==t||"function"==t)}function C(e){if("number"==typeof e)return e;if(function(e){return"symbol"==typeof e||function(e){return!!e&&"object"==typeof e}(e)&&b.call(e)==h}(e))return u;if(I(e)){var t="function"==typeof e.valueOf?e.valueOf():e;e=I(t)?t+"":t}if("string"!=typeof e)return 0===e?e:+e;e=e.replace(d,"");var n=f.test(e);return n||m.test(e)?g(e.slice(2),n?2:8):p.test(e)?u:+e}c=function(e,t,n){var i,s,r,o,a,l,c=0,u=!1,h=!1,d=!0;if("function"!=typeof e)throw new TypeError("Expected a function");function p(t){var n=i,r=s;return i=s=void 0,c=t,o=e.apply(r,n)}function f(e){var n=e-l;return void 0===l||n>=t||n<0||h&&e-c>=r}function m(){var e=S();if(f(e))return g(e);a=setTimeout(m,function(e){var n=t-(e-l);return h?T(n,r-(e-c)):n}(e))}function g(e){return a=void 0,d&&i?p(e):(i=s=void 0,o)}function v(){var e=S(),n=f(e);if(i=arguments,s=this,l=e,n){if(void 0===a)return function(e){return c=e,a=setTimeout(m,t),u?p(e):o}(l);if(h)return a=setTimeout(m,t),p(l)}return void 0===a&&(a=setTimeout(m,t)),o}return t=C(t)||0,I(n)&&(u=!!n.leading,r=(h="maxWait"in n)?E(C(n.maxWait)||0,t):r,d="trailing"in n?!!n.trailing:d),v.cancel=function(){void 0!==a&&clearTimeout(a),c=0,i=l=s=a=void 0},v.flush=function(){return void 0===a?o:g(S())},v};const _=new(0,(r=s("eieUh")).BookAPI),k=document.body,A=document.querySelector(".modal"),x=document.querySelector(".backdrop"),N=document.querySelector("button[data-modal-close-btn]"),D=document.querySelector(".modal-img"),L=document.querySelector(".modal-text"),O=document.querySelector(".modal-shop-list"),M=document.querySelector(".modal-shopping-btn"),P=document.querySelector(".congratulations-text");let R,F;if(null===localStorage.getItem("shoppingList")){localStorage.setItem("shoppingList",JSON.stringify([]))}function V(){k.classList.remove("modal-open"),x.classList.add("is-hidden"),A.classList.add("is-hidden"),x.removeEventListener("click",V),N.removeEventListener("click",V),document.removeEventListener("keydown",z),M.removeEventListener("click",B)}function U(e){e.target===x&&V()}function z(e){"Escape"===e.key&&V()}function j(e){if(e.target.closest("li").classList.contains("book-item")){const t=e.target.closest("li");R=t.getAttribute("data-id"),async function(e){try{const t=await _.getBookByID(e);if(t){D.innerHTML=`<img src="${t.book_image}" alt="${t.title}" class="modal-book-img"/>`,L.innerHTML=`\n        <h3 class="modal-book-title">${t.title}</h3>\n        <p class="modal-book-author"> ${t.author}</p>\n        <p class="modal-book-desc">${t.description}</p>\n      `;const e=O.getElementsByTagName("li");e[0].querySelector("a").href=t.buy_links[0].url,e[1].querySelector("a").href=t.buy_links[1].url,e[2].querySelector("a").href=t.buy_links[4].url,x.classList.remove("is-hidden"),A.classList.remove("is-hidden"),k.classList.add("modal-open"),x.addEventListener("click",U),N.addEventListener("click",V),document.addEventListener("keydown",z),M.addEventListener("click",B)}else console.error("File not found.")}catch(e){console.error("Error in getting data:",e)}}(R),function(){const e=JSON.parse(localStorage.getItem("shoppingList"))||[];-1===e.filter((({id:e})=>e!==R))?M.textContent="REMOVE FROM THE SHOPPING LIST":M.textContent="ADD TO SHOPPING LIST"}();const n=JSON.parse(localStorage.getItem("shoppingList"));n!==[]&&n.map((e=>e.id===R?M.textContent="REMOVE FROM THE SHOPPING LIST":void 0))}}function B(){const e=JSON.parse(localStorage.getItem("shoppingList"))||[],t=e.findIndex((e=>e.id===R));if("ADD TO SHOPPING LIST"===M.textContent){let t={id:R};e.push(t),M.textContent="REMOVE FROM THE SHOPPING LIST",P.textContent='Congratulations! You have added the book to the shopping list. To delete, press the button "Remove from the shopping list".'}else M.textContent="ADD TO SHOPPING LIST",e.splice(t,1),P.textContent="";!function(e){localStorage.setItem("shoppingList",JSON.stringify(e))}(e)}function $(){return`\n        <ul class="skeleton">\n          ${Array.from({length:15},(()=>'\n        <div class="col-sm-6 col-md-3">\n    <div class="movie--isloading">\n      <div class="loading-image"></div>\n      <div class="loading-content">\n        <div class="loading-text-container">\n          <div class="loading-main-text"></div>\n          <div class="loading-sub-text"></div>\n        </div>\n      </div>\n    </div>\n  </div>\n        ')).join("")}\n        </ul>\n    `}k.classList.remove("modal-open");const q=new(0,r.BookAPI);function H(e,t){const n=l(e,t),i=document.querySelector(".category-markup-list");i.innerHTML=n,i.addEventListener("click",j)}document.querySelector(".category-markup-list").innerHTML=$(),window.addEventListener("resize",e(c)((function(e){e.target.innerWidth<767?H(F,1):e.target.innerWidth>=767&&e.target.innerWidth<=1440?H(F,3):e.target.innerWidth>=1440&&H(F,5)}),300)),window.addEventListener("load",(async e=>{if(F=await q.getTopBooksList(),!F)return console.log("Error");window.innerWidth<767?H(F,1):window.innerWidth>=767&&window.innerWidth<1440?H(F,3):window.innerWidth>=1440&&H(F,5)}));const G=new(0,r.BookAPI),W=document.querySelector(".all"),K=document.querySelector(".list-categories"),Q=document.querySelector(".category-markup-list"),X=document.querySelector(".title-category-markup");document.querySelector(".category-markup-list").addEventListener("click",(async function(e){if("BUTTON"!==e.target.nodeName)return;Q.innerHTML=$();const t=e.target.closest("li").querySelector(".category-markup-subtitle").textContent.trim();X.innerHTML=a(t);const n=await G.getBooksWithSelectedCategory(t);if(!n)return;Q.innerHTML=o(n)})),async function(){const e=await G.getBooksCategoryList();if(!e)return console.log("Error");K.insertAdjacentHTML("beforeend",e.map((e=>`<li class="categories-item animation-link">${e.list_name}</li>`)).join(""))}(),K.addEventListener("click",(async function(e){if(Q.innerHTML=$(),"LI"!==e.target.nodeName)return;if(window.scrollTo({top:0,behavior:"smooth"}),e.target.classList.contains("all")){const t=await G.getTopBooksList();return X.innerHTML=a("All categories"),K.querySelector(".active")&&K.querySelector(".active").classList.remove("active"),e.target.classList.add("active"),void(window.innerWidth<767?H(t,1):window.innerWidth>=767&&window.innerWidth<1440?H(t,3):window.innerWidth>=1440&&H(t,5))}const t=e.target.textContent,n=await G.getBooksWithSelectedCategory(t);if(!n)return console.log("Error");Q.innerHTML=o(n),X.innerHTML=a(t),K.querySelector(".active")&&K.querySelector(".active").classList.remove("active"),e.target.classList.add("active")})),W.addEventListener("click",(async e=>{Q.innerHTML=$();const t=await G.getTopBooksList();window.innerWidth<767?H(t,1):window.innerWidth>=767&&window.innerWidth<=1440?H(t,3):window.innerWidth>=1440&&H(t,5)})),s("PhjHg");const Y=document.getElementById("support-slider"),J=document.getElementById("support-slider-up"),Z=document.getElementById("support-list-id");let ee=0;Y.addEventListener("click",(function(){ee+=59,Z.scrollTop=ee,Z.scrollHeight-Z.clientHeight<ee&&(Y.style.display="none",J.style.display="flex",ee=0)})),J.addEventListener("click",(function(){Z.scrollTop=0,Y.style.display="flex",J.style.display="none"})),s("eieUh");const te=[{img:"https://lh3.googleusercontent.com/pw/AJFCJaW4Gxv2OiPO1k3PY3KDUQ50z1nBI6p-BhWRoxkR42b8LQ9fXcIpZi6WbyRCPmEr68zH3GKqLFPe57U-CZMQWZTnM11yuxVpIX1Yuamr_6WQ2WYAS8tfNSdssmiM3nzmGWRKWE8WN6PMQIyEdkkpWYnO=w960-h1280-s-no?authuser=0",name:"Artem <br> Kozlov",position:"Team leader",github:"https://github.com/m1lky4",linkedin:"https://www.linkedin.com/in/artem-kozlov-80363526a/",instagram:"https://www.instagram.com/akartemchik/"},{img:"https://lh3.googleusercontent.com/pw/AJFCJaVCnC5L1luozgF5giYX1EEbnbmPM83JMzOmabIi9wlduYpl78HhG6z1Cy7XfQFqlh78W6_5MqX6-L20x5ww15YEBdbZJbsWTuyt_QiyGm3AqPyXMLe-fD14NY6uYpCdVWQY943srvCo_5oMKOOMUkdn=w712-h853-s-no?authuser=0",name:"Serhii <br> Syniak",position:"Scrum Master",github:"https://github.com/Dezertirr",linkedin:"https://www.linkedin.com/in/%D1%81%D0%B5%D1%80%D0%B3%D1%96%D0%B9-%D1%81%D0%B8%D0%BD%D1%8F%D0%BA-228253264/",instagram:"https://instagram.com/dezertir2283?igshid=MzNlNGNkZWQ4Mg=="},{img:"https://lh3.googleusercontent.com/pw/AJFCJaU2219ScWOAaDmDeog50E7lQSFq0dCpJAyI5LjAJaLKV7YwhBK3kx6q-J0J7_VAEoJeP6KAtcyRWq79CclcM67U6tyQkcA4eKkhKtEoCR8sUJP96Lk7vHvOmdsIfYDe6fE5G3fhYIzDtIoUinXgnL02=w960-h1280-s-no?authuser=0",name:"Mykhailo <br> Hudz",position:"Web Developer",github:"https://github.com",linkedin:"https://linkedin.com",instagram:"https://instagram.com"},{img:"https://lh3.googleusercontent.com/pw/AJFCJaWrpKDSri0h5uGKKdI9pWw3UflYDL1BIk6a-92OaluZ6GlzjAdwmmXqSNHu6Uj4UdGZCoWwqPCRU0XHr2KKGaZj31v3ZQX9zjUFU7nlJQTbdt9LSMdAwquawQhyJ8SNF4oNpJukM4vUJ5OcynCUNWDv=w860-h1273-s-no?authuser=0",name:"Oleksandr <br> Dubovyi",position:"Web Developer",github:"https://github.com",linkedin:"https://linkedin.com",instagram:"https://instagram.com"},{img:"https://lh3.googleusercontent.com/pw/AJFCJaXucFxNpx3TvVdvU5rS9KHfcoFODlXyNaEuOndUPUF17UwU2RKhANXVrCrcexzCQCbEphutbmmNbj5fX7iixnYAbVShbU9DHDKxbFfFxpvgfoB3XGOVdzZQchip0dJahjILYof8ktx3dE_5d7FDS8AU=w730-h857-s-no?authuser=0",name:"Vladyslav <br>Todosiichuk",position:"Web Developer",github:"https://github.com/VladyslavTodo",linkedin:"https://linkedin.com",instagram:"https://instagram.com"},{img:"https://lh3.googleusercontent.com/pw/AJFCJaUAW9wohSGOUkLwXz6NbJOuz6o9U7_zuil-gKFwRkNT9QLRGStpVNJG9r2Zoh_LVKQbvlvfZMQrc1g2KgELMT6c7vhWDlze0nXybMgu-cdDc2OYN8gjct2GVzIwZ7ZBVk93vSrJmkNGEx_wmJrwpspO=w773-h1374-s-no?authuser=0",name:"Oleksandra <br> Tyron",position:"Web Developer",github:"https://github.com",linkedin:"https://linkedin.com",instagram:"https://instagram.com"},{img:"https://lh3.googleusercontent.com/pw/AJFCJaXtlv_-LwtLK-x86gZB-si1XAk3UO4RxCO3Pnp0SPuXCnTuWHr1FYpvH-dXHwk3iZuqI80OY0e-3dAY1kQbuYG_3amsOc84FN7o8tujtqhPQGh9m3FVLuZDIE38dq5wfLZKF1-bW6yuVLr0zSpfdh8Y=w1031-h1374-s-no?authuser=0",name:"Kristina <br> Papura",position:"Web Developer",github:"https://github.com",linkedin:"https://linkedin.com",instagram:"https://instagram.com"},{img:"https://lh3.googleusercontent.com/pw/AJFCJaUoUZTF95AIEyWjv4AWPlMmZxqeIP84qmlRA19Q3EmHt0J2gDjPgiX59NDuXV0pVlsELyagTepcAoMeFeeE4NU_qSAIMTThuyYidS3pfr48OYOjOZI7viT88-IU2QXr-fA-jf5uOjg761K-6oqjYQ0f=w635-h1374-s-no?authuser=0",name:"Denys <br> Struk",position:"Web Developer",github:"https://github.com",linkedin:"https://linkedin.com",instagram:"https://www.instagram.com/denya_struk/"},{img:"https://lh3.googleusercontent.com/pw/AJFCJaX6IETdXiwfKw6KWD7MjW3B8cnuByjH3ezMtGg35D5E0rjFeXjNhE0DbwDrEm1d7_MTpj_Cz0W8B1myu-FIVWZvTX5pEUUp6IHUlkSIO2i5WvatSZM5RKzznFWYsVuSjytBpoQh6LHqd_Tu0ULS7Sb-=w795-h1374-s-no?authuser=0",name:"Maryna <br> Bonko",position:"Web Developer",github:"https://github.com",linkedin:"https://linkedin.com",instagram:"https://instagram.com"},{img:"https://lh3.googleusercontent.com/pw/AJFCJaXWy57998N9qVtRRUrRIDFh_xOd-Ihb-bQPoBCkNGAUEwR46igTXLEBHHMAMh3-fqijmlZJ_pdDJI9y0Xvsx4Hp3wMuRFOKD0POJXOSjYzEkxp5a3BcMKNg6qDFv383Ug27dnd-KQtxszgpFuPKv4kU=w1031-h1374-s-no?authuser=0",name:"Maksym <br> Nazarenko",position:"Web Developer",github:"https://github.com",linkedin:"https://linkedin.com",instagram:"https://instagram.com"}].map((e=>` \n      <div class="swiper-slide developers-cards">\n    <div class="card-footer" style="background-image: url(${e.img})">\n      <div class="content-footer">\n        <h2 class="dev-name">${e.name}</h2>\n        <p class="dev-position">${e.position}</p>\n        <ul class="ftr-social-list">\n          <li class="ftr-social-item">\n            <a\n              class="ftr-social-link"\n              href="${e.instagram}"\n              target="_blank"\n              rel="noreferrer noopener"\n            >\n              <svg xmlns="http://www.w3.org/2000/svg"  viewBox="0 0 48 48" width="30px" height="30px"><path fill="#304ffe" d="M41.67,13.48c-0.4,0.26-0.97,0.5-1.21,0.77c-0.09,0.09-0.14,0.19-0.12,0.29v1.03l-0.3,1.01l-0.3,1l-0.33,1.1 l-0.68,2.25l-0.66,2.22l-0.5,1.67c0,0.26-0.01,0.52-0.03,0.77c-0.07,0.96-0.27,1.88-0.59,2.74c-0.19,0.53-0.42,1.04-0.7,1.52 c-0.1,0.19-0.22,0.38-0.34,0.56c-0.4,0.63-0.88,1.21-1.41,1.72c-0.41,0.41-0.86,0.79-1.35,1.11c0,0,0,0-0.01,0 c-0.08,0.07-0.17,0.13-0.27,0.18c-0.31,0.21-0.64,0.39-0.98,0.55c-0.23,0.12-0.46,0.22-0.7,0.31c-0.05,0.03-0.11,0.05-0.16,0.07 c-0.57,0.27-1.23,0.45-1.89,0.54c-0.04,0.01-0.07,0.01-0.11,0.02c-0.4,0.07-0.79,0.13-1.19,0.16c-0.18,0.02-0.37,0.03-0.55,0.03 l-0.71-0.04l-3.42-0.18c0-0.01-0.01,0-0.01,0l-1.72-0.09c-0.13,0-0.27,0-0.4-0.01c-0.54-0.02-1.06-0.08-1.58-0.19 c-0.01,0-0.01,0-0.01,0c-0.95-0.18-1.86-0.5-2.71-0.93c-0.47-0.24-0.93-0.51-1.36-0.82c-0.18-0.13-0.35-0.27-0.52-0.42 c-0.48-0.4-0.91-0.83-1.31-1.27c-0.06-0.06-0.11-0.12-0.16-0.18c-0.06-0.06-0.12-0.13-0.17-0.19c-0.38-0.48-0.7-0.97-0.96-1.49 c-0.24-0.46-0.43-0.95-0.58-1.49c-0.06-0.19-0.11-0.37-0.15-0.57c-0.01-0.01-0.02-0.03-0.02-0.05c-0.1-0.41-0.19-0.84-0.24-1.27 c-0.06-0.33-0.09-0.66-0.09-1c-0.02-0.13-0.02-0.27-0.02-0.4l1.91-2.95l1.87-2.88l0.85-1.31l0.77-1.18l0.26-0.41v-1.03 c0.02-0.23,0.03-0.47,0.02-0.69c-0.01-0.7-0.15-1.38-0.38-2.03c-0.22-0.69-0.53-1.34-0.85-1.94c-0.38-0.69-0.78-1.31-1.11-1.87 C14,7.4,13.66,6.73,13.75,6.26C14.47,6.09,15.23,6,16,6h16c4.18,0,7.78,2.6,9.27,6.26C41.43,12.65,41.57,13.06,41.67,13.48z"/><path fill="#4928f4" d="M42,16v0.27l-1.38,0.8l-0.88,0.51l-0.97,0.56l-1.94,1.13l-1.9,1.1l-1.94,1.12l-0.77,0.45 c0,0.48-0.12,0.92-0.34,1.32c-0.31,0.58-0.83,1.06-1.49,1.47c-0.67,0.41-1.49,0.74-2.41,0.98c0,0,0-0.01-0.01,0 c-3.56,0.92-8.42,0.5-10.78-1.26c-0.66-0.49-1.12-1.09-1.32-1.78c-0.06-0.23-0.09-0.48-0.09-0.73v-7.19 c0.01-0.15-0.09-0.3-0.27-0.45c-0.54-0.43-1.81-0.84-3.23-1.25c-1.11-0.31-2.3-0.62-3.3-0.92c-0.79-0.24-1.46-0.48-1.86-0.71 c0.18-0.35,0.39-0.7,0.61-1.03c1.4-2.05,3.54-3.56,6.02-4.13C14.47,6.09,15.23,6,16,6h10.8c5.37,0.94,10.32,3.13,14.47,6.26 c0.16,0.39,0.3,0.8,0.4,1.22c0.18,0.66,0.29,1.34,0.32,2.05C42,15.68,42,15.84,42,16z"/><path fill="#6200ea" d="M42,16v4.41l-0.22,0.68l-0.75,2.33l-0.78,2.4l-0.41,1.28l-0.38,1.19l-0.37,1.13l-0.36,1.12l-0.19,0.59 l-0.25,0.78c0,0.76-0.02,1.43-0.07,2c-0.01,0.06-0.02,0.12-0.02,0.18c-0.06,0.53-0.14,0.98-0.27,1.36 c-0.01,0.06-0.03,0.12-0.05,0.17c-0.26,0.72-0.65,1.18-1.23,1.48c-0.14,0.08-0.3,0.14-0.47,0.2c-0.53,0.18-1.2,0.27-2.02,0.32 c-0.6,0.04-1.29,0.05-2.07,0.05H31.4l-1.19-0.05L30,37.61l-2.17-0.09l-2.2-0.09l-7.25-0.3l-1.88-0.08h-0.26 c-0.78-0.01-1.45-0.06-2.03-0.14c-0.84-0.13-1.49-0.35-1.98-0.68c-0.7-0.45-1.11-1.11-1.35-2.03c-0.06-0.22-0.11-0.45-0.14-0.7 c-0.1-0.58-0.15-1.25-0.18-2c0-0.15,0-0.3-0.01-0.46c-0.01-0.01,0-0.01,0-0.01v-0.58c-0.01-0.29-0.01-0.59-0.01-0.9l0.05-1.61 l0.03-1.15l0.04-1.34v-0.19l0.07-2.46l0.07-2.46l0.07-2.31l0.06-2.27l0.02-0.6c0-0.31-1.05-0.49-2.22-0.64 c-0.93-0.12-1.95-0.23-2.56-0.37c0.05-0.23,0.1-0.46,0.16-0.68c0.18-0.72,0.45-1.4,0.79-2.05c0.18-0.35,0.39-0.7,0.61-1.03 c2.16-0.95,4.41-1.69,6.76-2.17c2.06-0.43,4.21-0.66,6.43-0.66c7.36,0,14.16,2.49,19.54,6.69c0.52,0.4,1.03,0.83,1.53,1.28 C42,15.68,42,15.84,42,16z"/><path fill="#673ab7" d="M42,18.37v4.54l-0.55,1.06l-1.05,2.05l-0.56,1.08l-0.51,0.99l-0.22,0.43c0,0.31,0,0.61-0.02,0.9 c0,0.43-0.02,0.84-0.05,1.22c-0.04,0.45-0.1,0.86-0.16,1.24c-0.15,0.79-0.36,1.47-0.66,2.03c-0.04,0.07-0.08,0.14-0.12,0.2 c-0.11,0.18-0.24,0.35-0.38,0.51c-0.18,0.22-0.38,0.41-0.61,0.57c-0.34,0.26-0.74,0.47-1.2,0.63c-0.57,0.21-1.23,0.35-2.01,0.43 c-0.51,0.05-1.07,0.08-1.68,0.08l-0.42,0.02l-2.08,0.12h-0.01L27.5,36.6l-2.25,0.13l-3.1,0.18l-3.77,0.22l-0.55,0.03 c-0.51,0-0.99-0.03-1.45-0.09c-0.05-0.01-0.09-0.02-0.14-0.02c-0.68-0.11-1.3-0.29-1.86-0.54c-0.68-0.3-1.27-0.7-1.77-1.18 c-0.44-0.43-0.82-0.92-1.13-1.47c-0.07-0.13-0.14-0.25-0.2-0.39c-0.3-0.59-0.54-1.25-0.72-1.97c-0.03-0.12-0.06-0.25-0.08-0.38 c-0.06-0.23-0.11-0.47-0.14-0.72c-0.11-0.64-0.17-1.32-0.2-2.03v-0.01c-0.01-0.29-0.02-0.57-0.02-0.87l-0.49-1.17l-0.07-0.18 L9.5,25.99L8.75,24.2l-0.12-0.29l-0.72-1.73l-0.8-1.93c0,0,0,0-0.01,0L6.29,18.3L6,17.59V16c0-0.63,0.06-1.25,0.17-1.85 c0.05-0.23,0.1-0.46,0.16-0.68c0.85-0.49,1.74-0.94,2.65-1.34c2.08-0.93,4.31-1.62,6.62-2.04c1.72-0.31,3.51-0.48,5.32-0.48 c7.31,0,13.94,2.65,19.12,6.97c0.2,0.16,0.39,0.32,0.58,0.49C41.09,17.48,41.55,17.91,42,18.37z"/><path fill="#8e24aa" d="M42,21.35v5.14l-0.57,1.19l-1.08,2.25l-0.01,0.03c0,0.43-0.02,0.82-0.05,1.17c-0.1,1.15-0.38,1.88-0.84,2.33 c-0.33,0.34-0.74,0.53-1.25,0.63c-0.03,0.01-0.07,0.01-0.1,0.02c-0.16,0.03-0.33,0.05-0.51,0.05c-0.62,0.06-1.35,0.02-2.19-0.04 c-0.09,0-0.19-0.01-0.29-0.02c-0.61-0.04-1.26-0.08-1.98-0.11c-0.39-0.01-0.8-0.02-1.22-0.02h-0.02l-1.01,0.08h-0.01l-2.27,0.16 l-2.59,0.2l-0.38,0.03l-3.03,0.22l-1.57,0.12l-1.55,0.11c-0.27,0-0.53,0-0.79-0.01c0,0-0.01-0.01-0.01,0 c-1.13-0.02-2.14-0.09-3.04-0.26c-0.83-0.14-1.56-0.36-2.18-0.69c-0.64-0.31-1.17-0.75-1.6-1.31c-0.41-0.55-0.71-1.24-0.9-2.07 c0-0.01,0-0.01,0-0.01c-0.14-0.67-0.22-1.45-0.22-2.33l-0.15-0.27L9.7,26.35l-0.13-0.22L9.5,25.99l-0.93-1.65l-0.46-0.83 l-0.58-1.03l-1-1.79L6,19.75v-3.68c0.88-0.58,1.79-1.09,2.73-1.55c1.14-0.58,2.32-1.07,3.55-1.47c1.34-0.44,2.74-0.79,4.17-1.02 c1.45-0.24,2.94-0.36,4.47-0.36c6.8,0,13.04,2.43,17.85,6.47c0.22,0.17,0.43,0.36,0.64,0.54c0.84,0.75,1.64,1.56,2.37,2.41 C41.86,21.18,41.94,21.26,42,21.35z"/><path fill="#c2185b" d="M42,24.71v7.23c-0.24-0.14-0.57-0.31-0.98-0.49c-0.22-0.11-0.47-0.22-0.73-0.32 c-0.38-0.17-0.79-0.33-1.25-0.49c-0.1-0.04-0.2-0.07-0.31-0.1c-0.18-0.07-0.37-0.13-0.56-0.19c-0.59-0.18-1.24-0.35-1.92-0.5 c-0.26-0.05-0.53-0.1-0.8-0.14c-0.87-0.15-1.8-0.24-2.77-0.25c-0.08-0.01-0.17-0.01-0.25-0.01l-2.57,0.02l-3.5,0.02h-0.01 l-7.49,0.06c-2.38,0-3.84,0.57-4.72,0.8c0,0-0.01,0-0.01,0.01c-0.93,0.24-1.22,0.09-1.3-1.54c-0.02-0.45-0.03-1.03-0.03-1.74 l-0.56-0.43l-0.98-0.74l-0.6-0.46l-0.12-0.09L8.88,24.1l-0.25-0.19l-0.52-0.4l-0.96-0.72L6,21.91v-3.4 c0.1-0.08,0.19-0.15,0.29-0.21c1.45-1,3-1.85,4.64-2.54c1.46-0.62,3-1.11,4.58-1.46c0.43-0.09,0.87-0.18,1.32-0.24 c1.33-0.23,2.7-0.34,4.09-0.34c6.01,0,11.53,2.09,15.91,5.55c0.66,0.52,1.3,1.07,1.9,1.66c0.82,0.78,1.59,1.61,2.3,2.49 c0.14,0.18,0.28,0.36,0.42,0.55C41.64,24.21,41.82,24.46,42,24.71z"/><path fill="#d81b60" d="M42,28.72V32c0,0.65-0.06,1.29-0.18,1.91c-0.18,0.92-0.49,1.8-0.91,2.62c-0.22,0.05-0.47,0.05-0.75,0.01 c-0.63-0.11-1.37-0.44-2.17-0.87c-0.04-0.01-0.08-0.03-0.11-0.05c-0.25-0.13-0.51-0.27-0.77-0.43c-0.53-0.29-1.09-0.61-1.65-0.91 c-0.12-0.06-0.24-0.12-0.35-0.18c-0.64-0.33-1.3-0.63-1.96-0.86c0,0,0,0-0.01,0c-0.14-0.05-0.29-0.1-0.44-0.14 c-0.57-0.16-1.15-0.26-1.71-0.26l-1.1-0.32l-4.87-1.41c0,0,0,0-0.01,0l-2.99-0.87h-0.01l-1.3-0.38c-3.76,0-6.07,1.6-7.19,0.99 c-0.44-0.23-0.7-0.81-0.79-1.95c-0.03-0.32-0.04-0.68-0.04-1.1l-1.17-0.57l-0.05-0.02h-0.01l-0.84-0.42L9.7,26.35l-0.07-0.03 l-0.17-0.09L7.5,25.28L6,24.55v-3.43c0.17-0.15,0.35-0.29,0.53-0.43c0.19-0.15,0.38-0.29,0.57-0.44c0.01,0,0.01,0,0.01,0 c1.18-0.85,2.43-1.6,3.76-2.22c1.55-0.74,3.2-1.31,4.91-1.68c0.25-0.06,0.51-0.12,0.77-0.16c1.42-0.27,2.88-0.41,4.37-0.41 c5.27,0,10.11,1.71,14.01,4.59c1.13,0.84,2.18,1.77,3.14,2.78c0.79,0.83,1.52,1.73,2.18,2.67c0.05,0.07,0.1,0.14,0.15,0.2 c0.37,0.54,0.71,1.09,1.03,1.66C41.64,28.02,41.82,28.37,42,28.72z"/><path fill="#f50057" d="M41.82,33.91c-0.18,0.92-0.49,1.8-0.91,2.62c-0.19,0.37-0.4,0.72-0.63,1.06c-0.14,0.21-0.29,0.41-0.44,0.6 c-0.36-0.14-0.89-0.34-1.54-0.56c0,0,0,0,0-0.01c-0.49-0.17-1.05-0.35-1.65-0.52c-0.17-0.05-0.34-0.1-0.52-0.15 c-0.71-0.19-1.45-0.36-2.17-0.46c-0.6-0.1-1.19-0.16-1.74-0.16l-0.46-0.13h-0.01l-2.42-0.7l-1.49-0.43l-1.66-0.48h-0.01l-0.54-0.15 l-6.53-1.88l-1.88-0.54l-1.4-0.33l-2.28-0.54l-0.28-0.07c0,0,0,0-0.01,0l-2.29-0.53c0-0.01,0-0.01,0-0.01l-0.41-0.09l-0.21-0.05 l-1.67-0.39l-0.19-0.05l-1.42-1.17L6,27.9v-4.08c0.37-0.36,0.75-0.7,1.15-1.03c0.12-0.11,0.25-0.21,0.38-0.31 c0.12-0.1,0.25-0.2,0.38-0.3c0.91-0.69,1.87-1.31,2.89-1.84c1.3-0.7,2.68-1.26,4.13-1.66c0.28-0.09,0.56-0.17,0.85-0.23 c1.64-0.41,3.36-0.62,5.14-0.62c4.47,0,8.63,1.35,12.07,3.66c1.71,1.15,3.25,2.53,4.55,4.1c0.66,0.79,1.26,1.62,1.79,2.5 c0.05,0.07,0.09,0.13,0.13,0.2c0.32,0.53,0.62,1.08,0.89,1.64c0.25,0.5,0.47,1,0.67,1.52C41.34,32.25,41.6,33.07,41.82,33.91z"/><path fill="#ff1744" d="M40.28,37.59c-0.14,0.21-0.29,0.41-0.44,0.6c-0.44,0.55-0.92,1.05-1.46,1.49c-0.47,0.39-0.97,0.74-1.5,1.04 c-0.2-0.05-0.4-0.11-0.61-0.19c-0.66-0.23-1.35-0.61-1.99-1.01c-0.96-0.61-1.79-1.27-2.16-1.57c-0.14-0.12-0.21-0.18-0.21-0.18 l-1.7-0.15L30,37.6l-2.2-0.19l-2.28-0.2l-3.37-0.3l-5.34-0.47l-0.02-0.01l-1.88-0.91l-1.9-0.92l-1.53-0.74l-0.33-0.16l-0.41-0.2 l-1.42-0.69L7.43,31.9l-0.59-0.29L6,31.35v-4.47c0.47-0.56,0.97-1.09,1.5-1.6c0.34-0.32,0.7-0.64,1.07-0.94 c0.06-0.05,0.12-0.1,0.18-0.14c0.04-0.05,0.09-0.08,0.13-0.1c0.59-0.48,1.21-0.91,1.85-1.3c0.74-0.47,1.52-0.89,2.33-1.24 c0.87-0.39,1.78-0.72,2.72-0.97c1.63-0.46,3.36-0.7,5.14-0.7c4.08,0,7.85,1.24,10.96,3.37c1.99,1.36,3.71,3.08,5.07,5.07 c0.45,0.64,0.85,1.32,1.22,2.02c0.13,0.26,0.26,0.52,0.37,0.78c0.12,0.25,0.23,0.5,0.34,0.75c0.21,0.52,0.4,1.04,0.57,1.58 c0.32,1,0.56,2.02,0.71,3.08C40.21,36.89,40.25,37.24,40.28,37.59z"/><path fill="#ff5722" d="M38.39,39.42c0,0.08,0,0.17-0.01,0.26c-0.47,0.39-0.97,0.74-1.5,1.04c-0.22,0.12-0.44,0.24-0.67,0.34 c-0.23,0.11-0.46,0.21-0.7,0.3c-0.34-0.18-0.8-0.4-1.29-0.61c-0.69-0.31-1.44-0.59-2.02-0.68c-0.14-0.03-0.27-0.04-0.39-0.04 l-1.64-0.21h-0.02l-2.04-0.27l-2.06-0.27l-0.96-0.12l-7.56-0.98c-0.49,0-1.01-0.03-1.55-0.1c-0.66-0.06-1.35-0.16-2.04-0.3 c-0.68-0.12-1.37-0.28-2.03-0.45c-0.69-0.16-1.37-0.35-2-0.53c-0.73-0.22-1.41-0.43-1.98-0.62c-0.47-0.15-0.87-0.29-1.18-0.4 c-0.18-0.43-0.33-0.88-0.44-1.34C6.1,33.66,6,32.84,6,32v-1.67c0.32-0.53,0.67-1.05,1.06-1.54c0.71-0.94,1.52-1.8,2.4-2.56 c0.03-0.04,0.07-0.07,0.1-0.09l0.01-0.01c0.31-0.28,0.63-0.53,0.97-0.77c0.04-0.04,0.08-0.07,0.12-0.1 c0.16-0.12,0.33-0.24,0.51-0.35c1.43-0.97,3.01-1.73,4.7-2.24c1.6-0.48,3.29-0.73,5.05-0.73c3.49,0,6.75,1.03,9.47,2.79 c2.01,1.29,3.74,2.99,5.06,4.98c0.16,0.23,0.31,0.46,0.46,0.7c0.69,1.17,1.26,2.43,1.68,3.75c0.05,0.15,0.09,0.3,0.13,0.46 c0.08,0.27,0.15,0.55,0.21,0.83c0.02,0.07,0.04,0.14,0.06,0.22c0.14,0.63,0.24,1.29,0.31,1.95c0,0.01,0,0.01,0,0.01 C38.36,38.22,38.39,38.82,38.39,39.42z"/><path fill="#ff6f00" d="M36.33,39.42c0,0.35-0.02,0.73-0.06,1.11c-0.02,0.18-0.04,0.36-0.06,0.53c-0.23,0.11-0.46,0.21-0.7,0.3 c-0.45,0.17-0.91,0.31-1.38,0.41c-0.32,0.07-0.65,0.13-0.98,0.16h-0.01c-0.31-0.19-0.67-0.42-1.04-0.68 c-0.67-0.47-1.37-1-1.93-1.43c-0.01-0.01-0.01-0.01-0.02-0.02c-0.59-0.45-1.01-0.79-1.01-0.79l-1.06,0.04l-2.04,0.07l-0.95,0.04 l-3.82,0.14l-3.23,0.12c-0.21,0.01-0.46,0.01-0.77,0h-0.01c-0.42-0.01-0.92-0.04-1.47-0.09c-0.64-0.05-1.34-0.11-2.05-0.18 c-0.69-0.08-1.39-0.16-2.06-0.24c-0.74-0.08-1.44-0.17-2.04-0.25c-0.47-0.06-0.88-0.11-1.21-0.15c-0.28-0.32-0.53-0.65-0.77-1.01 c-0.36-0.54-0.67-1.11-0.91-1.72c-0.18-0.43-0.33-0.88-0.44-1.34c0.29-0.89,0.67-1.73,1.12-2.54c0.36-0.66,0.78-1.29,1.24-1.89 c0.45-0.59,0.94-1.14,1.47-1.64v-0.01c0.15-0.15,0.3-0.29,0.45-0.42c0.28-0.26,0.57-0.5,0.87-0.73h0.01 c0.01-0.02,0.02-0.02,0.03-0.03c0.24-0.19,0.49-0.36,0.74-0.53c1.48-1.01,3.15-1.76,4.95-2.2c1.19-0.29,2.44-0.45,3.73-0.45 c2.54,0,4.94,0.61,7.05,1.71h0.01c1.81,0.93,3.41,2.21,4.7,3.75c0.71,0.82,1.32,1.72,1.82,2.67c0.35,0.64,0.65,1.31,0.9,1.99 c0.02,0.06,0.04,0.11,0.06,0.16c0.17,0.5,0.32,1.02,0.45,1.54c0.09,0.37,0.16,0.75,0.22,1.13c0.02,0.12,0.04,0.23,0.05,0.35 C36.28,37.99,36.33,38.7,36.33,39.42z"/><path fill="#ff9800" d="M34.28,39.42v0.1c0,0.34-0.03,0.77-0.06,1.23c-0.03,0.34-0.06,0.69-0.09,1.02c-0.32,0.07-0.65,0.13-0.98,0.16 h-0.01C32.76,41.98,32.39,42,32,42h-1.75l-0.38-0.11l-1.97-0.6l-2-0.6l-4.63-1.39l-2-0.6c0,0-0.83,0.33-2,0.72h-0.01 c-0.45,0.15-0.94,0.31-1.46,0.47c-0.65,0.19-1.34,0.38-2.02,0.53c-0.7,0.16-1.39,0.28-2.01,0.33c-0.19,0.02-0.38,0.03-0.55,0.03 c-0.56-0.31-1.1-0.68-1.59-1.09c-0.43-0.36-0.83-0.75-1.2-1.18c-0.28-0.32-0.53-0.65-0.77-1.01c0.07-0.45,0.15-0.89,0.27-1.32 c0.3-1.19,0.77-2.33,1.39-3.37c0.34-0.59,0.72-1.16,1.16-1.69c0.01-0.03,0.04-0.06,0.07-0.08c-0.01-0.01,0-0.01,0-0.01 c0.13-0.17,0.27-0.33,0.41-0.48c0-0.01,0-0.01,0-0.01c0.41-0.44,0.83-0.86,1.29-1.25c0.16-0.13,0.31-0.26,0.48-0.39 c0.03-0.03,0.06-0.05,0.1-0.08c2.25-1.72,5.06-2.76,8.09-2.76c3.44,0,6.57,1.29,8.94,3.41c1.14,1.03,2.11,2.26,2.84,3.63 c0.06,0.1,0.12,0.21,0.17,0.32c0.09,0.18,0.18,0.37,0.26,0.57c0.33,0.72,0.59,1.48,0.77,2.26c0.02,0.08,0.04,0.16,0.06,0.24 c0.08,0.37,0.15,0.75,0.2,1.13C34.24,38.21,34.28,38.81,34.28,39.42z"/><path fill="#ffc107" d="M32.22,39.42c0,0.2-0.01,0.42-0.02,0.65c-0.02,0.37-0.05,0.77-0.1,1.18c-0.02,0.25-0.06,0.5-0.1,0.75h-5.48 l-1.06-0.17l-4.14-0.66l-0.59-0.09l-1.35-0.22c-0.59,0-1.87,0.26-3.22,0.51c-0.71,0.13-1.43,0.27-2.08,0.36 c-0.08,0.01-0.16,0.02-0.23,0.03h-0.01c-0.7-0.15-1.38-0.38-2.02-0.68c-0.2-0.09-0.4-0.19-0.6-0.3c-0.56-0.31-1.1-0.68-1.59-1.09 c-0.01-0.12-0.02-0.22-0.02-0.27c0-0.26,0.01-0.51,0.03-0.76c0.04-0.64,0.13-1.26,0.27-1.86c0.22-0.91,0.54-1.79,0.97-2.6 c0.08-0.17,0.17-0.34,0.27-0.5c0.04-0.08,0.09-0.15,0.13-0.23c0.18-0.29,0.38-0.57,0.58-0.85c0.42-0.55,0.89-1.07,1.39-1.54 c0.01,0,0.01,0,0.01,0c0.04-0.04,0.08-0.08,0.12-0.11c0.05-0.04,0.09-0.09,0.14-0.12c0.2-0.18,0.4-0.34,0.61-0.49 c0-0.01,0.01-0.01,0.01-0.01c1.89-1.41,4.23-2.24,6.78-2.24c1.98,0,3.82,0.5,5.43,1.38h0.01c1.38,0.76,2.58,1.79,3.53,3.03 c0.37,0.48,0.7,0.99,0.98,1.53h0.01c0.05,0.1,0.1,0.2,0.15,0.3c0.3,0.59,0.54,1.21,0.72,1.85h0.01c0.01,0.05,0.03,0.1,0.04,0.15 c0.12,0.43,0.22,0.87,0.29,1.32c0.01,0.09,0.02,0.19,0.03,0.28C32.19,38.43,32.22,38.92,32.22,39.42z"/><path fill="#ffd54f" d="M30.17,39.31c0,0.16,0,0.33-0.02,0.49v0.01c0,0.01,0,0.01,0,0.01c-0.02,0.72-0.12,1.43-0.28,2.07 c0,0.04-0.01,0.07-0.03,0.11h-4.67l-3.85-0.83l-0.51-0.11l-0.08,0.02l-4.27,0.88L16.27,42H16c-0.64,0-1.27-0.06-1.88-0.18 c-0.09-0.02-0.18-0.04-0.27-0.06h-0.01c-0.7-0.15-1.38-0.38-2.02-0.68c-0.02-0.11-0.04-0.22-0.05-0.33 c-0.07-0.43-0.1-0.88-0.1-1.33c0-0.17,0-0.34,0.01-0.51c0.03-0.54,0.11-1.07,0.23-1.58c0.08-0.38,0.19-0.75,0.32-1.1 c0.11-0.31,0.24-0.61,0.38-0.9c0.12-0.25,0.26-0.49,0.4-0.73c0.14-0.23,0.29-0.45,0.45-0.67c0.4-0.55,0.87-1.06,1.39-1.51 c0.3-0.26,0.63-0.51,0.97-0.73c1.46-0.96,3.21-1.52,5.1-1.52c0.37,0,0.73,0.02,1.08,0.07h0.02c1.07,0.12,2.07,0.42,2.99,0.87 c0.01,0,0.01,0,0.01,0c1.45,0.71,2.68,1.78,3.58,3.1c0.15,0.22,0.3,0.46,0.43,0.7c0.11,0.19,0.21,0.39,0.3,0.59 c0.14,0.31,0.27,0.64,0.38,0.97h0.01c0.11,0.37,0.21,0.74,0.28,1.13v0.01C30.11,38.16,30.17,38.73,30.17,39.31z"/><path fill="#ffe082" d="M28.11,39.52v0.03c0,0.59-0.07,1.17-0.21,1.74c-0.05,0.24-0.12,0.48-0.21,0.71h-4.48l-2.29-0.63L18.63,42H16 c-0.64,0-1.27-0.06-1.88-0.18c-0.02-0.03-0.03-0.06-0.04-0.09c-0.14-0.43-0.25-0.86-0.3-1.31c-0.04-0.29-0.06-0.59-0.06-0.9 c0-0.12,0-0.25,0.02-0.37c0.01-0.47,0.08-0.93,0.2-1.37c0.06-0.3,0.15-0.59,0.27-0.87c0.04-0.14,0.1-0.27,0.17-0.4 c0.15-0.34,0.33-0.67,0.53-0.99c0.22-0.32,0.46-0.62,0.73-0.9c0.32-0.36,0.68-0.69,1.09-0.96c0.7-0.51,1.5-0.89,2.37-1.1 c0.58-0.16,1.19-0.24,1.82-0.24c2,0,3.79,0.8,5.09,2.09c0.05,0.05,0.11,0.11,0.16,0.18h0.01c0.14,0.15,0.27,0.3,0.4,0.47 c0.37,0.47,0.68,0.98,0.92,1.54c0.12,0.26,0.22,0.53,0.3,0.81c0.01,0.04,0.02,0.07,0.03,0.11c0.14,0.49,0.23,1,0.25,1.53 C28.1,39.2,28.11,39.36,28.11,39.52z"/><path fill="#ffecb3" d="M26.06,39.52c0,0.41-0.05,0.8-0.16,1.17c-0.1,0.4-0.25,0.78-0.44,1.14c-0.03,0.06-0.1,0.17-0.1,0.17h-8.88 c-0.01-0.01-0.02-0.03-0.02-0.04c-0.12-0.19-0.22-0.38-0.3-0.59c-0.2-0.46-0.32-0.96-0.36-1.48c-0.02-0.12-0.02-0.25-0.02-0.37 c0-0.06,0-0.13,0.01-0.19c0.01-0.44,0.07-0.86,0.19-1.25c0.1-0.36,0.23-0.69,0.4-1.01c0,0,0.01-0.01,0.01-0.02 c0.12-0.21,0.25-0.42,0.4-0.62c0.49-0.66,1.14-1.2,1.89-1.55c0.01,0,0.01,0,0.01,0c0.24-0.12,0.49-0.22,0.75-0.29c0,0,0,0,0.01,0 c0.46-0.14,0.96-0.21,1.47-0.21c0.59,0,1.16,0.09,1.68,0.28c0.19,0.05,0.37,0.13,0.55,0.22c0,0,0,0,0.01,0 c0.86,0.41,1.59,1.05,2.09,1.85c0.1,0.15,0.19,0.31,0.27,0.48c0.04,0.07,0.08,0.15,0.11,0.22c0.23,0.52,0.37,1.09,0.41,1.69 c0.01,0.05,0.01,0.1,0.01,0.16C26.06,39.36,26.06,39.44,26.06,39.52z"/><g><path fill="none" stroke="#fff" stroke-linecap="round" stroke-linejoin="round" stroke-miterlimit="10" stroke-width="2" d="M30,11H18c-3.9,0-7,3.1-7,7v12c0,3.9,3.1,7,7,7h12c3.9,0,7-3.1,7-7V18C37,14.1,33.9,11,30,11z"/><circle cx="31" cy="16" r="1" fill="#fff"/></g><g><circle cx="24" cy="24" r="6" fill="none" stroke="#fff" stroke-linecap="round" stroke-linejoin="round" stroke-miterlimit="10" stroke-width="2"/></g></svg>\n              </a>\n          </li>\n          <li class="ftr-social-item">\n            <a\n              class="ftr-social-link"\n              href="${e.github}"\n              target="_blank"\n              rel="noreferrer noopener"\n            >\n            <svg xmlns="http://www.w3.org/2000/svg" width="30px" height="25px" fill-rule="evenodd" clip-rule="evenodd" image-rendering="optimizeQuality" shape-rendering="geometricPrecision" text-rendering="geometricPrecision" viewBox="0 0 640 640">\n  <path d="M319.988 7.973C143.293 7.973 0 151.242 0 327.96c0 141.392 91.678 261.298 218.826 303.63 16.004 2.964 21.886-6.957 21.886-15.414 0-7.63-.319-32.835-.449-59.552-89.032 19.359-107.8-37.772-107.8-37.772-14.552-36.993-35.529-46.831-35.529-46.831-29.032-19.879 2.209-19.442 2.209-19.442 32.126 2.245 49.04 32.954 49.04 32.954 28.56 48.922 74.883 34.76 93.131 26.598 2.882-20.681 11.15-34.807 20.315-42.803-71.08-8.067-145.797-35.516-145.797-158.14 0-34.926 12.52-63.485 32.965-85.88-3.33-8.078-14.291-40.606 3.083-84.674 0 0 26.87-8.61 88.029 32.8 25.512-7.075 52.878-10.642 80.056-10.76 27.2.118 54.614 3.673 80.162 10.76 61.076-41.386 87.922-32.8 87.922-32.8 17.398 44.08 6.485 76.631 3.154 84.675 20.516 22.394 32.93 50.953 32.93 85.879 0 122.907-74.883 149.93-146.117 157.856 11.481 9.921 21.733 29.398 21.733 59.233 0 42.792-.366 77.28-.366 87.804 0 8.516 5.764 18.473 21.992 15.354 127.076-42.354 218.637-162.274 218.637-303.582 0-176.695-143.269-319.988-320-319.988l-.023.107" fill="#FFFFFF"/>\n</svg>\n\n            </a>\n          </li>\n          <li class="ftr-social-item">\n            <a\n              class="ftr-social-link"\n              href="${e.linkedin}"\n              target="_blank"\n              rel="noreferrer noopener"\n            >\n              <svg xmlns="http://www.w3.org/2000/svg"  viewBox="0 0 48 48" width="30px" height="30px"><path fill="#0288D1" d="M42,37c0,2.762-2.238,5-5,5H11c-2.761,0-5-2.238-5-5V11c0-2.762,2.239-5,5-5h26c2.762,0,5,2.238,5,5V37z"/><path fill="#FFF" d="M12 19H17V36H12zM14.485 17h-.028C12.965 17 12 15.888 12 14.499 12 13.08 12.995 12 14.514 12c1.521 0 2.458 1.08 2.486 2.499C17 15.887 16.035 17 14.485 17zM36 36h-5v-9.099c0-2.198-1.225-3.698-3.192-3.698-1.501 0-2.313 1.012-2.707 1.99C24.957 25.543 25 26.511 25 27v9h-5V19h5v2.616C25.721 20.5 26.85 19 29.738 19c3.578 0 6.261 2.25 6.261 7.274L36 36 36 36z"/></svg>\n            </a>\n          </li>\n        </ul>\n      </div>\n    </div>\n    </div>`)).join("");function ne(e){return null!==e&&"object"==typeof e&&"constructor"in e&&e.constructor===Object}function ie(e={},t={}){Object.keys(t).forEach((n=>{void 0===e[n]?e[n]=t[n]:ne(t[n])&&ne(e[n])&&Object.keys(t[n]).length>0&&ie(e[n],t[n])}))}document.querySelector(".swiper-wrapper").insertAdjacentHTML("afterbegin",te);const se={body:{},addEventListener(){},removeEventListener(){},activeElement:{blur(){},nodeName:""},querySelector:()=>null,querySelectorAll:()=>[],getElementById:()=>null,createEvent:()=>({initEvent(){}}),createElement:()=>({children:[],childNodes:[],style:{},setAttribute(){},getElementsByTagName:()=>[]}),createElementNS:()=>({}),importNode:()=>null,location:{hash:"",host:"",hostname:"",href:"",origin:"",pathname:"",protocol:"",search:""}};function re(){const e="undefined"!=typeof document?document:{};return ie(e,se),e}const oe={document:se,navigator:{userAgent:""},location:{hash:"",host:"",hostname:"",href:"",origin:"",pathname:"",protocol:"",search:""},history:{replaceState(){},pushState(){},go(){},back(){}},CustomEvent:function(){return this},addEventListener(){},removeEventListener(){},getComputedStyle:()=>({getPropertyValue:()=>""}),Image(){},Date(){},screen:{},setTimeout(){},clearTimeout(){},matchMedia:()=>({}),requestAnimationFrame:e=>"undefined"==typeof setTimeout?(e(),null):setTimeout(e,0),cancelAnimationFrame(e){"undefined"!=typeof setTimeout&&clearTimeout(e)}};function ae(){const e="undefined"!=typeof window?window:{};return ie(e,oe),e}function le(e){const t=e;Object.keys(t).forEach((e=>{try{t[e]=null}catch(e){}try{delete t[e]}catch(e){}}))}function ce(e,t=0){return setTimeout(e,t)}function ue(){return Date.now()}function he(e,t="x"){const n=ae();let i,s,r;const o=function(e){const t=ae();let n;return t.getComputedStyle&&(n=t.getComputedStyle(e,null)),!n&&e.currentStyle&&(n=e.currentStyle),n||(n=e.style),n}(e);return n.WebKitCSSMatrix?(s=o.transform||o.webkitTransform,s.split(",").length>6&&(s=s.split(", ").map((e=>e.replace(",","."))).join(", ")),r=new n.WebKitCSSMatrix("none"===s?"":s)):(r=o.MozTransform||o.OTransform||o.MsTransform||o.msTransform||o.transform||o.getPropertyValue("transform").replace("translate(","matrix(1, 0, 0, 1,"),i=r.toString().split(",")),"x"===t&&(s=n.WebKitCSSMatrix?r.m41:16===i.length?parseFloat(i[12]):parseFloat(i[4])),"y"===t&&(s=n.WebKitCSSMatrix?r.m42:16===i.length?parseFloat(i[13]):parseFloat(i[5])),s||0}function de(e){return"object"==typeof e&&null!==e&&e.constructor&&"Object"===Object.prototype.toString.call(e).slice(8,-1)}function pe(...e){const t=Object(e[0]),n=["__proto__","constructor","prototype"];for(let s=1;s<e.length;s+=1){const r=e[s];if(null!=r&&(i=r,!("undefined"!=typeof window&&void 0!==window.HTMLElement?i instanceof HTMLElement:i&&(1===i.nodeType||11===i.nodeType)))){const e=Object.keys(Object(r)).filter((e=>n.indexOf(e)<0));for(let n=0,i=e.length;n<i;n+=1){const i=e[n],s=Object.getOwnPropertyDescriptor(r,i);void 0!==s&&s.enumerable&&(de(t[i])&&de(r[i])?r[i].__swiper__?t[i]=r[i]:pe(t[i],r[i]):!de(t[i])&&de(r[i])?(t[i]={},r[i].__swiper__?t[i]=r[i]:pe(t[i],r[i])):t[i]=r[i])}}}var i;return t}function fe(e,t,n){e.style.setProperty(t,n)}function me({swiper:e,targetPosition:t,side:n}){const i=ae(),s=-e.translate;let r,o=null;const a=e.params.speed;e.wrapperEl.style.scrollSnapType="none",i.cancelAnimationFrame(e.cssModeFrameID);const l=t>s?"next":"prev",c=(e,t)=>"next"===l&&e>=t||"prev"===l&&e<=t,u=()=>{r=(new Date).getTime(),null===o&&(o=r);const l=Math.max(Math.min((r-o)/a,1),0),h=.5-Math.cos(l*Math.PI)/2;let d=s+h*(t-s);if(c(d,t)&&(d=t),e.wrapperEl.scrollTo({[n]:d}),c(d,t))return e.wrapperEl.style.overflow="hidden",e.wrapperEl.style.scrollSnapType="",setTimeout((()=>{e.wrapperEl.style.overflow="",e.wrapperEl.scrollTo({[n]:d})})),void i.cancelAnimationFrame(e.cssModeFrameID);e.cssModeFrameID=i.requestAnimationFrame(u)};u()}function ge(e,t=""){return[...e.children].filter((e=>e.matches(t)))}function ve(e,t=[]){const n=document.createElement(e);return n.classList.add(...Array.isArray(t)?t:[t]),n}function ye(e,t){const n=[];for(;e.previousElementSibling;){const i=e.previousElementSibling;t?i.matches(t)&&n.push(i):n.push(i),e=i}return n}function we(e,t){const n=[];for(;e.nextElementSibling;){const i=e.nextElementSibling;t?i.matches(t)&&n.push(i):n.push(i),e=i}return n}function be(e,t){return ae().getComputedStyle(e,null).getPropertyValue(t)}function Ee(e){let t,n=e;if(n){for(t=0;null!==(n=n.previousSibling);)1===n.nodeType&&(t+=1);return t}}function Te(e,t){const n=[];let i=e.parentElement;for(;i;)t?i.matches(t)&&n.push(i):n.push(i),i=i.parentElement;return n}function Se(e,t,n){const i=ae();return n?e["width"===t?"offsetWidth":"offsetHeight"]+parseFloat(i.getComputedStyle(e,null).getPropertyValue("width"===t?"margin-right":"margin-top"))+parseFloat(i.getComputedStyle(e,null).getPropertyValue("width"===t?"margin-left":"margin-bottom")):e.offsetWidth}let Ie,Ce,_e;function ke(){return Ie||(Ie=function(){const e=ae(),t=re();return{smoothScroll:t.documentElement&&t.documentElement.style&&"scrollBehavior"in t.documentElement.style,touch:!!("ontouchstart"in e||e.DocumentTouch&&t instanceof e.DocumentTouch)}}()),Ie}function Ae(e={}){return Ce||(Ce=function({userAgent:e}={}){const t=ke(),n=ae(),i=n.navigator.platform,s=e||n.navigator.userAgent,r={ios:!1,android:!1},o=n.screen.width,a=n.screen.height,l=s.match(/(Android);?[\s\/]+([\d.]+)?/);let c=s.match(/(iPad).*OS\s([\d_]+)/);const u=s.match(/(iPod)(.*OS\s([\d_]+))?/),h=!c&&s.match(/(iPhone\sOS|iOS)\s([\d_]+)/),d="Win32"===i;let p="MacIntel"===i;return!c&&p&&t.touch&&["1024x1366","1366x1024","834x1194","1194x834","834x1112","1112x834","768x1024","1024x768","820x1180","1180x820","810x1080","1080x810"].indexOf(`${o}x${a}`)>=0&&(c=s.match(/(Version)\/([\d.]+)/),c||(c=[0,1,"13_0_0"]),p=!1),l&&!d&&(r.os="android",r.android=!0),(c||h||u)&&(r.os="ios",r.ios=!0),r}(e)),Ce}function xe(){return _e||(_e=function(){const e=ae();let t=!1;function n(){const t=e.navigator.userAgent.toLowerCase();return t.indexOf("safari")>=0&&t.indexOf("chrome")<0&&t.indexOf("android")<0}if(n()){const n=String(e.navigator.userAgent);if(n.includes("Version/")){const[e,i]=n.split("Version/")[1].split(" ")[0].split(".").map((e=>Number(e)));t=e<16||16===e&&i<2}}return{isSafari:t||n(),needPerspectiveFix:t,isWebView:/(iPhone|iPod|iPad).*AppleWebKit(?!.*Safari)/i.test(e.navigator.userAgent)}}()),_e}const Ne=(e,t)=>{if(!e||e.destroyed||!e.params)return;const n=t.closest(e.isElement?"swiper-slide":`.${e.params.slideClass}`);if(n){const t=n.querySelector(`.${e.params.lazyPreloaderClass}`);t&&t.remove()}},De=(e,t)=>{if(!e.slides[t])return;const n=e.slides[t].querySelector('[loading="lazy"]');n&&n.removeAttribute("loading")},Le=e=>{if(!e||e.destroyed||!e.params)return;let t=e.params.lazyPreloadPrevNext;const n=e.slides.length;if(!n||!t||t<0)return;t=Math.min(t,n);const i="auto"===e.params.slidesPerView?e.slidesPerViewDynamic():Math.ceil(e.params.slidesPerView),s=e.activeIndex,r=s+i-1;if(e.params.rewind)for(let i=s-t;i<=r+t;i+=1){const t=(i%n+n)%n;t!==s&&t>r&&De(e,t)}else for(let i=Math.max(r-t,0);i<=Math.min(r+t,n-1);i+=1)i!==s&&i>r&&De(e,i)};function Oe({swiper:e,runCallbacks:t,direction:n,step:i}){const{activeIndex:s,previousIndex:r}=e;let o=n;if(o||(o=s>r?"next":s<r?"prev":"reset"),e.emit(`transition${i}`),t&&s!==r){if("reset"===o)return void e.emit(`slideResetTransition${i}`);e.emit(`slideChangeTransition${i}`),"next"===o?e.emit(`slideNextTransition${i}`):e.emit(`slidePrevTransition${i}`)}}function Me(e){const t=this,n=re(),i=ae(),s=t.touchEventsData;s.evCache.push(e);const{params:r,touches:o,enabled:a}=t;if(!a)return;if(!r.simulateTouch&&"mouse"===e.pointerType)return;if(t.animating&&r.preventInteractionOnTransition)return;!t.animating&&r.cssMode&&r.loop&&t.loopFix();let l=e;l.originalEvent&&(l=l.originalEvent);let c=l.target;if("wrapper"===r.touchEventsTarget&&!t.wrapperEl.contains(c))return;if("which"in l&&3===l.which)return;if("button"in l&&l.button>0)return;if(s.isTouched&&s.isMoved)return;const u=!!r.noSwipingClass&&""!==r.noSwipingClass,h=e.composedPath?e.composedPath():e.path;u&&l.target&&l.target.shadowRoot&&h&&(c=h[0]);const d=r.noSwipingSelector?r.noSwipingSelector:`.${r.noSwipingClass}`,p=!(!l.target||!l.target.shadowRoot);if(r.noSwiping&&(p?function(e,t=this){return function t(n){if(!n||n===re()||n===ae())return null;n.assignedSlot&&(n=n.assignedSlot);const i=n.closest(e);return i||n.getRootNode?i||t(n.getRootNode().host):null}(t)}(d,c):c.closest(d)))return void(t.allowClick=!0);if(r.swipeHandler&&!c.closest(r.swipeHandler))return;o.currentX=l.pageX,o.currentY=l.pageY;const f=o.currentX,m=o.currentY,g=r.edgeSwipeDetection||r.iOSEdgeSwipeDetection,v=r.edgeSwipeThreshold||r.iOSEdgeSwipeThreshold;if(g&&(f<=v||f>=i.innerWidth-v)){if("prevent"!==g)return;e.preventDefault()}Object.assign(s,{isTouched:!0,isMoved:!1,allowTouchCallbacks:!0,isScrolling:void 0,startMoving:void 0}),o.startX=f,o.startY=m,s.touchStartTime=ue(),t.allowClick=!0,t.updateSize(),t.swipeDirection=void 0,r.threshold>0&&(s.allowThresholdMove=!1);let y=!0;c.matches(s.focusableElements)&&(y=!1,"SELECT"===c.nodeName&&(s.isTouched=!1)),n.activeElement&&n.activeElement.matches(s.focusableElements)&&n.activeElement!==c&&n.activeElement.blur();const w=y&&t.allowTouchMove&&r.touchStartPreventDefault;!r.touchStartForcePreventDefault&&!w||c.isContentEditable||l.preventDefault(),t.params.freeMode&&t.params.freeMode.enabled&&t.freeMode&&t.animating&&!r.cssMode&&t.freeMode.onTouchStart(),t.emit("touchStart",l)}function Pe(e){const t=re(),n=this,i=n.touchEventsData,{params:s,touches:r,rtlTranslate:o,enabled:a}=n;if(!a)return;if(!s.simulateTouch&&"mouse"===e.pointerType)return;let l=e;if(l.originalEvent&&(l=l.originalEvent),!i.isTouched)return void(i.startMoving&&i.isScrolling&&n.emit("touchMoveOpposite",l));const c=i.evCache.findIndex((e=>e.pointerId===l.pointerId));c>=0&&(i.evCache[c]=l);const u=i.evCache.length>1?i.evCache[0]:l,h=u.pageX,d=u.pageY;if(l.preventedByNestedSwiper)return r.startX=h,void(r.startY=d);if(!n.allowTouchMove)return l.target.matches(i.focusableElements)||(n.allowClick=!1),void(i.isTouched&&(Object.assign(r,{startX:h,startY:d,prevX:n.touches.currentX,prevY:n.touches.currentY,currentX:h,currentY:d}),i.touchStartTime=ue()));if(s.touchReleaseOnEdges&&!s.loop)if(n.isVertical()){if(d<r.startY&&n.translate<=n.maxTranslate()||d>r.startY&&n.translate>=n.minTranslate())return i.isTouched=!1,void(i.isMoved=!1)}else if(h<r.startX&&n.translate<=n.maxTranslate()||h>r.startX&&n.translate>=n.minTranslate())return;if(t.activeElement&&l.target===t.activeElement&&l.target.matches(i.focusableElements))return i.isMoved=!0,void(n.allowClick=!1);if(i.allowTouchCallbacks&&n.emit("touchMove",l),l.targetTouches&&l.targetTouches.length>1)return;r.currentX=h,r.currentY=d;const p=r.currentX-r.startX,f=r.currentY-r.startY;if(n.params.threshold&&Math.sqrt(p**2+f**2)<n.params.threshold)return;if(void 0===i.isScrolling){let e;n.isHorizontal()&&r.currentY===r.startY||n.isVertical()&&r.currentX===r.startX?i.isScrolling=!1:p*p+f*f>=25&&(e=180*Math.atan2(Math.abs(f),Math.abs(p))/Math.PI,i.isScrolling=n.isHorizontal()?e>s.touchAngle:90-e>s.touchAngle)}if(i.isScrolling&&n.emit("touchMoveOpposite",l),void 0===i.startMoving&&(r.currentX===r.startX&&r.currentY===r.startY||(i.startMoving=!0)),i.isScrolling||n.zoom&&n.params.zoom&&n.params.zoom.enabled&&i.evCache.length>1)return void(i.isTouched=!1);if(!i.startMoving)return;n.allowClick=!1,!s.cssMode&&l.cancelable&&l.preventDefault(),s.touchMoveStopPropagation&&!s.nested&&l.stopPropagation();let m=n.isHorizontal()?p:f,g=n.isHorizontal()?r.currentX-r.previousX:r.currentY-r.previousY;s.oneWayMovement&&(m=Math.abs(m)*(o?1:-1),g=Math.abs(g)*(o?1:-1)),r.diff=m,m*=s.touchRatio,o&&(m=-m,g=-g);const v=n.touchesDirection;n.swipeDirection=m>0?"prev":"next",n.touchesDirection=g>0?"prev":"next";const y=n.params.loop&&!s.cssMode;if(!i.isMoved){if(y&&n.loopFix({direction:n.swipeDirection}),i.startTranslate=n.getTranslate(),n.setTransition(0),n.animating){const e=new window.CustomEvent("transitionend",{bubbles:!0,cancelable:!0});n.wrapperEl.dispatchEvent(e)}i.allowMomentumBounce=!1,!s.grabCursor||!0!==n.allowSlideNext&&!0!==n.allowSlidePrev||n.setGrabCursor(!0),n.emit("sliderFirstMove",l)}let w;i.isMoved&&v!==n.touchesDirection&&y&&Math.abs(m)>=1&&(n.loopFix({direction:n.swipeDirection,setTranslate:!0}),w=!0),n.emit("sliderMove",l),i.isMoved=!0,i.currentTranslate=m+i.startTranslate;let b=!0,E=s.resistanceRatio;if(s.touchReleaseOnEdges&&(E=0),m>0?(y&&!w&&i.currentTranslate>(s.centeredSlides?n.minTranslate()-n.size/2:n.minTranslate())&&n.loopFix({direction:"prev",setTranslate:!0,activeSlideIndex:0}),i.currentTranslate>n.minTranslate()&&(b=!1,s.resistance&&(i.currentTranslate=n.minTranslate()-1+(-n.minTranslate()+i.startTranslate+m)**E))):m<0&&(y&&!w&&i.currentTranslate<(s.centeredSlides?n.maxTranslate()+n.size/2:n.maxTranslate())&&n.loopFix({direction:"next",setTranslate:!0,activeSlideIndex:n.slides.length-("auto"===s.slidesPerView?n.slidesPerViewDynamic():Math.ceil(parseFloat(s.slidesPerView,10)))}),i.currentTranslate<n.maxTranslate()&&(b=!1,s.resistance&&(i.currentTranslate=n.maxTranslate()+1-(n.maxTranslate()-i.startTranslate-m)**E))),b&&(l.preventedByNestedSwiper=!0),!n.allowSlideNext&&"next"===n.swipeDirection&&i.currentTranslate<i.startTranslate&&(i.currentTranslate=i.startTranslate),!n.allowSlidePrev&&"prev"===n.swipeDirection&&i.currentTranslate>i.startTranslate&&(i.currentTranslate=i.startTranslate),n.allowSlidePrev||n.allowSlideNext||(i.currentTranslate=i.startTranslate),s.threshold>0){if(!(Math.abs(m)>s.threshold||i.allowThresholdMove))return void(i.currentTranslate=i.startTranslate);if(!i.allowThresholdMove)return i.allowThresholdMove=!0,r.startX=r.currentX,r.startY=r.currentY,i.currentTranslate=i.startTranslate,void(r.diff=n.isHorizontal()?r.currentX-r.startX:r.currentY-r.startY)}s.followFinger&&!s.cssMode&&((s.freeMode&&s.freeMode.enabled&&n.freeMode||s.watchSlidesProgress)&&(n.updateActiveIndex(),n.updateSlidesClasses()),n.params.freeMode&&s.freeMode.enabled&&n.freeMode&&n.freeMode.onTouchMove(),n.updateProgress(i.currentTranslate),n.setTranslate(i.currentTranslate))}function Re(e){const t=this,n=t.touchEventsData,i=n.evCache.findIndex((t=>t.pointerId===e.pointerId));if(i>=0&&n.evCache.splice(i,1),["pointercancel","pointerout","pointerleave"].includes(e.type)){if(!("pointercancel"===e.type&&(t.browser.isSafari||t.browser.isWebView)))return}const{params:s,touches:r,rtlTranslate:o,slidesGrid:a,enabled:l}=t;if(!l)return;if(!s.simulateTouch&&"mouse"===e.pointerType)return;let c=e;if(c.originalEvent&&(c=c.originalEvent),n.allowTouchCallbacks&&t.emit("touchEnd",c),n.allowTouchCallbacks=!1,!n.isTouched)return n.isMoved&&s.grabCursor&&t.setGrabCursor(!1),n.isMoved=!1,void(n.startMoving=!1);s.grabCursor&&n.isMoved&&n.isTouched&&(!0===t.allowSlideNext||!0===t.allowSlidePrev)&&t.setGrabCursor(!1);const u=ue(),h=u-n.touchStartTime;if(t.allowClick){const e=c.path||c.composedPath&&c.composedPath();t.updateClickedSlide(e&&e[0]||c.target),t.emit("tap click",c),h<300&&u-n.lastClickTime<300&&t.emit("doubleTap doubleClick",c)}if(n.lastClickTime=ue(),ce((()=>{t.destroyed||(t.allowClick=!0)})),!n.isTouched||!n.isMoved||!t.swipeDirection||0===r.diff||n.currentTranslate===n.startTranslate)return n.isTouched=!1,n.isMoved=!1,void(n.startMoving=!1);let d;if(n.isTouched=!1,n.isMoved=!1,n.startMoving=!1,d=s.followFinger?o?t.translate:-t.translate:-n.currentTranslate,s.cssMode)return;if(t.params.freeMode&&s.freeMode.enabled)return void t.freeMode.onTouchEnd({currentPos:d});let p=0,f=t.slidesSizesGrid[0];for(let e=0;e<a.length;e+=e<s.slidesPerGroupSkip?1:s.slidesPerGroup){const t=e<s.slidesPerGroupSkip-1?1:s.slidesPerGroup;void 0!==a[e+t]?d>=a[e]&&d<a[e+t]&&(p=e,f=a[e+t]-a[e]):d>=a[e]&&(p=e,f=a[a.length-1]-a[a.length-2])}let m=null,g=null;s.rewind&&(t.isBeginning?g=t.params.virtual&&t.params.virtual.enabled&&t.virtual?t.virtual.slides.length-1:t.slides.length-1:t.isEnd&&(m=0));const v=(d-a[p])/f,y=p<s.slidesPerGroupSkip-1?1:s.slidesPerGroup;if(h>s.longSwipesMs){if(!s.longSwipes)return void t.slideTo(t.activeIndex);"next"===t.swipeDirection&&(v>=s.longSwipesRatio?t.slideTo(s.rewind&&t.isEnd?m:p+y):t.slideTo(p)),"prev"===t.swipeDirection&&(v>1-s.longSwipesRatio?t.slideTo(p+y):null!==g&&v<0&&Math.abs(v)>s.longSwipesRatio?t.slideTo(g):t.slideTo(p))}else{if(!s.shortSwipes)return void t.slideTo(t.activeIndex);t.navigation&&(c.target===t.navigation.nextEl||c.target===t.navigation.prevEl)?c.target===t.navigation.nextEl?t.slideTo(p+y):t.slideTo(p):("next"===t.swipeDirection&&t.slideTo(null!==m?m:p+y),"prev"===t.swipeDirection&&t.slideTo(null!==g?g:p))}}function Fe(){const e=this,{params:t,el:n}=e;if(n&&0===n.offsetWidth)return;t.breakpoints&&e.setBreakpoint();const{allowSlideNext:i,allowSlidePrev:s,snapGrid:r}=e,o=e.virtual&&e.params.virtual.enabled;e.allowSlideNext=!0,e.allowSlidePrev=!0,e.updateSize(),e.updateSlides(),e.updateSlidesClasses();const a=o&&t.loop;!("auto"===t.slidesPerView||t.slidesPerView>1)||!e.isEnd||e.isBeginning||e.params.centeredSlides||a?e.params.loop&&!o?e.slideToLoop(e.realIndex,0,!1,!0):e.slideTo(e.activeIndex,0,!1,!0):e.slideTo(e.slides.length-1,0,!1,!0),e.autoplay&&e.autoplay.running&&e.autoplay.paused&&(clearTimeout(e.autoplay.resizeTimeout),e.autoplay.resizeTimeout=setTimeout((()=>{e.autoplay&&e.autoplay.running&&e.autoplay.paused&&e.autoplay.resume()}),500)),e.allowSlidePrev=s,e.allowSlideNext=i,e.params.watchOverflow&&r!==e.snapGrid&&e.checkOverflow()}function Ve(e){const t=this;t.enabled&&(t.allowClick||(t.params.preventClicks&&e.preventDefault(),t.params.preventClicksPropagation&&t.animating&&(e.stopPropagation(),e.stopImmediatePropagation())))}function Ue(){const e=this,{wrapperEl:t,rtlTranslate:n,enabled:i}=e;if(!i)return;let s;e.previousTranslate=e.translate,e.isHorizontal()?e.translate=-t.scrollLeft:e.translate=-t.scrollTop,0===e.translate&&(e.translate=0),e.updateActiveIndex(),e.updateSlidesClasses();const r=e.maxTranslate()-e.minTranslate();s=0===r?0:(e.translate-e.minTranslate())/r,s!==e.progress&&e.updateProgress(n?-e.translate:e.translate),e.emit("setTranslate",e.translate,!1)}function ze(e){const t=this;Ne(t,e.target),t.params.cssMode||"auto"!==t.params.slidesPerView&&!t.params.autoHeight||t.update()}let je=!1;function Be(){}const $e=(e,t)=>{const n=re(),{params:i,el:s,wrapperEl:r,device:o}=e,a=!!i.nested,l="on"===t?"addEventListener":"removeEventListener",c=t;s[l]("pointerdown",e.onTouchStart,{passive:!1}),n[l]("pointermove",e.onTouchMove,{passive:!1,capture:a}),n[l]("pointerup",e.onTouchEnd,{passive:!0}),n[l]("pointercancel",e.onTouchEnd,{passive:!0}),n[l]("pointerout",e.onTouchEnd,{passive:!0}),n[l]("pointerleave",e.onTouchEnd,{passive:!0}),(i.preventClicks||i.preventClicksPropagation)&&s[l]("click",e.onClick,!0),i.cssMode&&r[l]("scroll",e.onScroll),i.updateOnWindowResize?e[c](o.ios||o.android?"resize orientationchange observerUpdate":"resize observerUpdate",Fe,!0):e[c]("observerUpdate",Fe,!0),s[l]("load",e.onLoad,{capture:!0})};const qe=(e,t)=>e.grid&&t.grid&&t.grid.rows>1;var He={setBreakpoint:function(){const e=this,{realIndex:t,initialized:n,params:i,el:s}=e,r=i.breakpoints;if(!r||r&&0===Object.keys(r).length)return;const o=e.getBreakpoint(r,e.params.breakpointsBase,e.el);if(!o||e.currentBreakpoint===o)return;const a=(o in r?r[o]:void 0)||e.originalParams,l=qe(e,i),c=qe(e,a),u=i.enabled;l&&!c?(s.classList.remove(`${i.containerModifierClass}grid`,`${i.containerModifierClass}grid-column`),e.emitContainerClasses()):!l&&c&&(s.classList.add(`${i.containerModifierClass}grid`),(a.grid.fill&&"column"===a.grid.fill||!a.grid.fill&&"column"===i.grid.fill)&&s.classList.add(`${i.containerModifierClass}grid-column`),e.emitContainerClasses()),["navigation","pagination","scrollbar"].forEach((t=>{const n=i[t]&&i[t].enabled,s=a[t]&&a[t].enabled;n&&!s&&e[t].disable(),!n&&s&&e[t].enable()}));const h=a.direction&&a.direction!==i.direction,d=i.loop&&(a.slidesPerView!==i.slidesPerView||h);h&&n&&e.changeDirection(),pe(e.params,a);const p=e.params.enabled;Object.assign(e,{allowTouchMove:e.params.allowTouchMove,allowSlideNext:e.params.allowSlideNext,allowSlidePrev:e.params.allowSlidePrev}),u&&!p?e.disable():!u&&p&&e.enable(),e.currentBreakpoint=o,e.emit("_beforeBreakpoint",a),d&&n&&(e.loopDestroy(),e.loopCreate(t),e.updateSlides()),e.emit("breakpoint",a)},getBreakpoint:function(e,t="window",n){if(!e||"container"===t&&!n)return;let i=!1;const s=ae(),r="window"===t?s.innerHeight:n.clientHeight,o=Object.keys(e).map((e=>{if("string"==typeof e&&0===e.indexOf("@")){const t=parseFloat(e.substr(1));return{value:r*t,point:e}}return{value:e,point:e}}));o.sort(((e,t)=>parseInt(e.value,10)-parseInt(t.value,10)));for(let e=0;e<o.length;e+=1){const{point:r,value:a}=o[e];"window"===t?s.matchMedia(`(min-width: ${a}px)`).matches&&(i=r):a<=n.clientWidth&&(i=r)}return i||"max"}};var Ge={init:!0,direction:"horizontal",oneWayMovement:!1,touchEventsTarget:"wrapper",initialSlide:0,speed:300,cssMode:!1,updateOnWindowResize:!0,resizeObserver:!0,nested:!1,createElements:!1,enabled:!0,focusableElements:"input, select, option, textarea, button, video, label",width:null,height:null,preventInteractionOnTransition:!1,userAgent:null,url:null,edgeSwipeDetection:!1,edgeSwipeThreshold:20,autoHeight:!1,setWrapperSize:!1,virtualTranslate:!1,effect:"slide",breakpoints:void 0,breakpointsBase:"window",spaceBetween:0,slidesPerView:1,slidesPerGroup:1,slidesPerGroupSkip:0,slidesPerGroupAuto:!1,centeredSlides:!1,centeredSlidesBounds:!1,slidesOffsetBefore:0,slidesOffsetAfter:0,normalizeSlideIndex:!0,centerInsufficientSlides:!1,watchOverflow:!0,roundLengths:!1,touchRatio:1,touchAngle:45,simulateTouch:!0,shortSwipes:!0,longSwipes:!0,longSwipesRatio:.5,longSwipesMs:300,followFinger:!0,allowTouchMove:!0,threshold:5,touchMoveStopPropagation:!1,touchStartPreventDefault:!0,touchStartForcePreventDefault:!1,touchReleaseOnEdges:!1,uniqueNavElements:!0,resistance:!0,resistanceRatio:.85,watchSlidesProgress:!1,grabCursor:!1,preventClicks:!0,preventClicksPropagation:!0,slideToClickedSlide:!1,loop:!1,loopedSlides:null,loopPreventsSliding:!0,rewind:!1,allowSlidePrev:!0,allowSlideNext:!0,swipeHandler:null,noSwiping:!0,noSwipingClass:"swiper-no-swiping",noSwipingSelector:null,passiveListeners:!0,maxBackfaceHiddenSlides:10,containerModifierClass:"swiper-",slideClass:"swiper-slide",slideActiveClass:"swiper-slide-active",slideVisibleClass:"swiper-slide-visible",slideNextClass:"swiper-slide-next",slidePrevClass:"swiper-slide-prev",wrapperClass:"swiper-wrapper",lazyPreloaderClass:"swiper-lazy-preloader",lazyPreloadPrevNext:0,runCallbacksOnInit:!0,_emitClasses:!1};function We(e,t){return function(n={}){const i=Object.keys(n)[0],s=n[i];"object"==typeof s&&null!==s?(["navigation","pagination","scrollbar"].indexOf(i)>=0&&!0===e[i]&&(e[i]={auto:!0}),i in e&&"enabled"in s?(!0===e[i]&&(e[i]={enabled:!0}),"object"!=typeof e[i]||"enabled"in e[i]||(e[i].enabled=!0),e[i]||(e[i]={enabled:!1}),pe(t,n)):pe(t,n)):pe(t,n)}}const Ke={eventsEmitter:{on(e,t,n){const i=this;if(!i.eventsListeners||i.destroyed)return i;if("function"!=typeof t)return i;const s=n?"unshift":"push";return e.split(" ").forEach((e=>{i.eventsListeners[e]||(i.eventsListeners[e]=[]),i.eventsListeners[e][s](t)})),i},once(e,t,n){const i=this;if(!i.eventsListeners||i.destroyed)return i;if("function"!=typeof t)return i;function s(...n){i.off(e,s),s.__emitterProxy&&delete s.__emitterProxy,t.apply(i,n)}return s.__emitterProxy=t,i.on(e,s,n)},onAny(e,t){const n=this;if(!n.eventsListeners||n.destroyed)return n;if("function"!=typeof e)return n;const i=t?"unshift":"push";return n.eventsAnyListeners.indexOf(e)<0&&n.eventsAnyListeners[i](e),n},offAny(e){const t=this;if(!t.eventsListeners||t.destroyed)return t;if(!t.eventsAnyListeners)return t;const n=t.eventsAnyListeners.indexOf(e);return n>=0&&t.eventsAnyListeners.splice(n,1),t},off(e,t){const n=this;return!n.eventsListeners||n.destroyed?n:n.eventsListeners?(e.split(" ").forEach((e=>{void 0===t?n.eventsListeners[e]=[]:n.eventsListeners[e]&&n.eventsListeners[e].forEach(((i,s)=>{(i===t||i.__emitterProxy&&i.__emitterProxy===t)&&n.eventsListeners[e].splice(s,1)}))})),n):n},emit(...e){const t=this;if(!t.eventsListeners||t.destroyed)return t;if(!t.eventsListeners)return t;let n,i,s;"string"==typeof e[0]||Array.isArray(e[0])?(n=e[0],i=e.slice(1,e.length),s=t):(n=e[0].events,i=e[0].data,s=e[0].context||t),i.unshift(s);return(Array.isArray(n)?n:n.split(" ")).forEach((e=>{t.eventsAnyListeners&&t.eventsAnyListeners.length&&t.eventsAnyListeners.forEach((t=>{t.apply(s,[e,...i])})),t.eventsListeners&&t.eventsListeners[e]&&t.eventsListeners[e].forEach((e=>{e.apply(s,i)}))})),t}},update:{updateSize:function(){const e=this;let t,n;const i=e.el;t=void 0!==e.params.width&&null!==e.params.width?e.params.width:i.clientWidth,n=void 0!==e.params.height&&null!==e.params.height?e.params.height:i.clientHeight,0===t&&e.isHorizontal()||0===n&&e.isVertical()||(t=t-parseInt(be(i,"padding-left")||0,10)-parseInt(be(i,"padding-right")||0,10),n=n-parseInt(be(i,"padding-top")||0,10)-parseInt(be(i,"padding-bottom")||0,10),Number.isNaN(t)&&(t=0),Number.isNaN(n)&&(n=0),Object.assign(e,{width:t,height:n,size:e.isHorizontal()?t:n}))},updateSlides:function(){const e=this;function t(t){return e.isHorizontal()?t:{width:"height","margin-top":"margin-left","margin-bottom ":"margin-right","margin-left":"margin-top","margin-right":"margin-bottom","padding-left":"padding-top","padding-right":"padding-bottom",marginRight:"marginBottom"}[t]}function n(e,n){return parseFloat(e.getPropertyValue(t(n))||0)}const i=e.params,{wrapperEl:s,slidesEl:r,size:o,rtlTranslate:a,wrongRTL:l}=e,c=e.virtual&&i.virtual.enabled,u=c?e.virtual.slides.length:e.slides.length,h=ge(r,`.${e.params.slideClass}, swiper-slide`),d=c?e.virtual.slides.length:h.length;let p=[];const f=[],m=[];let g=i.slidesOffsetBefore;"function"==typeof g&&(g=i.slidesOffsetBefore.call(e));let v=i.slidesOffsetAfter;"function"==typeof v&&(v=i.slidesOffsetAfter.call(e));const y=e.snapGrid.length,w=e.slidesGrid.length;let b=i.spaceBetween,E=-g,T=0,S=0;if(void 0===o)return;"string"==typeof b&&b.indexOf("%")>=0?b=parseFloat(b.replace("%",""))/100*o:"string"==typeof b&&(b=parseFloat(b)),e.virtualSize=-b,h.forEach((e=>{a?e.style.marginLeft="":e.style.marginRight="",e.style.marginBottom="",e.style.marginTop=""})),i.centeredSlides&&i.cssMode&&(fe(s,"--swiper-centered-offset-before",""),fe(s,"--swiper-centered-offset-after",""));const I=i.grid&&i.grid.rows>1&&e.grid;let C;I&&e.grid.initSlides(d);const _="auto"===i.slidesPerView&&i.breakpoints&&Object.keys(i.breakpoints).filter((e=>void 0!==i.breakpoints[e].slidesPerView)).length>0;for(let s=0;s<d;s+=1){let r;if(C=0,h[s]&&(r=h[s]),I&&e.grid.updateSlide(s,r,d,t),!h[s]||"none"!==be(r,"display")){if("auto"===i.slidesPerView){_&&(h[s].style[t("width")]="");const o=getComputedStyle(r),a=r.style.transform,l=r.style.webkitTransform;if(a&&(r.style.transform="none"),l&&(r.style.webkitTransform="none"),i.roundLengths)C=e.isHorizontal()?Se(r,"width",!0):Se(r,"height",!0);else{const e=n(o,"width"),t=n(o,"padding-left"),i=n(o,"padding-right"),s=n(o,"margin-left"),a=n(o,"margin-right"),l=o.getPropertyValue("box-sizing");if(l&&"border-box"===l)C=e+s+a;else{const{clientWidth:n,offsetWidth:o}=r;C=e+t+i+s+a+(o-n)}}a&&(r.style.transform=a),l&&(r.style.webkitTransform=l),i.roundLengths&&(C=Math.floor(C))}else C=(o-(i.slidesPerView-1)*b)/i.slidesPerView,i.roundLengths&&(C=Math.floor(C)),h[s]&&(h[s].style[t("width")]=`${C}px`);h[s]&&(h[s].swiperSlideSize=C),m.push(C),i.centeredSlides?(E=E+C/2+T/2+b,0===T&&0!==s&&(E=E-o/2-b),0===s&&(E=E-o/2-b),Math.abs(E)<.001&&(E=0),i.roundLengths&&(E=Math.floor(E)),S%i.slidesPerGroup==0&&p.push(E),f.push(E)):(i.roundLengths&&(E=Math.floor(E)),(S-Math.min(e.params.slidesPerGroupSkip,S))%e.params.slidesPerGroup==0&&p.push(E),f.push(E),E=E+C+b),e.virtualSize+=C+b,T=C,S+=1}}if(e.virtualSize=Math.max(e.virtualSize,o)+v,a&&l&&("slide"===i.effect||"coverflow"===i.effect)&&(s.style.width=`${e.virtualSize+b}px`),i.setWrapperSize&&(s.style[t("width")]=`${e.virtualSize+b}px`),I&&e.grid.updateWrapperSize(C,p,t),!i.centeredSlides){const t=[];for(let n=0;n<p.length;n+=1){let s=p[n];i.roundLengths&&(s=Math.floor(s)),p[n]<=e.virtualSize-o&&t.push(s)}p=t,Math.floor(e.virtualSize-o)-Math.floor(p[p.length-1])>1&&p.push(e.virtualSize-o)}if(c&&i.loop){const t=m[0]+b;if(i.slidesPerGroup>1){const n=Math.ceil((e.virtual.slidesBefore+e.virtual.slidesAfter)/i.slidesPerGroup),s=t*i.slidesPerGroup;for(let e=0;e<n;e+=1)p.push(p[p.length-1]+s)}for(let n=0;n<e.virtual.slidesBefore+e.virtual.slidesAfter;n+=1)1===i.slidesPerGroup&&p.push(p[p.length-1]+t),f.push(f[f.length-1]+t),e.virtualSize+=t}if(0===p.length&&(p=[0]),0!==b){const n=e.isHorizontal()&&a?"marginLeft":t("marginRight");h.filter(((e,t)=>!(i.cssMode&&!i.loop)||t!==h.length-1)).forEach((e=>{e.style[n]=`${b}px`}))}if(i.centeredSlides&&i.centeredSlidesBounds){let e=0;m.forEach((t=>{e+=t+(b||0)})),e-=b;const t=e-o;p=p.map((e=>e<0?-g:e>t?t+v:e))}if(i.centerInsufficientSlides){let e=0;if(m.forEach((t=>{e+=t+(b||0)})),e-=b,e<o){const t=(o-e)/2;p.forEach(((e,n)=>{p[n]=e-t})),f.forEach(((e,n)=>{f[n]=e+t}))}}if(Object.assign(e,{slides:h,snapGrid:p,slidesGrid:f,slidesSizesGrid:m}),i.centeredSlides&&i.cssMode&&!i.centeredSlidesBounds){fe(s,"--swiper-centered-offset-before",-p[0]+"px"),fe(s,"--swiper-centered-offset-after",e.size/2-m[m.length-1]/2+"px");const t=-e.snapGrid[0],n=-e.slidesGrid[0];e.snapGrid=e.snapGrid.map((e=>e+t)),e.slidesGrid=e.slidesGrid.map((e=>e+n))}if(d!==u&&e.emit("slidesLengthChange"),p.length!==y&&(e.params.watchOverflow&&e.checkOverflow(),e.emit("snapGridLengthChange")),f.length!==w&&e.emit("slidesGridLengthChange"),i.watchSlidesProgress&&e.updateSlidesOffset(),!(c||i.cssMode||"slide"!==i.effect&&"fade"!==i.effect)){const t=`${i.containerModifierClass}backface-hidden`,n=e.el.classList.contains(t);d<=i.maxBackfaceHiddenSlides?n||e.el.classList.add(t):n&&e.el.classList.remove(t)}},updateAutoHeight:function(e){const t=this,n=[],i=t.virtual&&t.params.virtual.enabled;let s,r=0;"number"==typeof e?t.setTransition(e):!0===e&&t.setTransition(t.params.speed);const o=e=>i?t.slides[t.getSlideIndexByData(e)]:t.slides[e];if("auto"!==t.params.slidesPerView&&t.params.slidesPerView>1)if(t.params.centeredSlides)(t.visibleSlides||[]).forEach((e=>{n.push(e)}));else for(s=0;s<Math.ceil(t.params.slidesPerView);s+=1){const e=t.activeIndex+s;if(e>t.slides.length&&!i)break;n.push(o(e))}else n.push(o(t.activeIndex));for(s=0;s<n.length;s+=1)if(void 0!==n[s]){const e=n[s].offsetHeight;r=e>r?e:r}(r||0===r)&&(t.wrapperEl.style.height=`${r}px`)},updateSlidesOffset:function(){const e=this,t=e.slides,n=e.isElement?e.isHorizontal()?e.wrapperEl.offsetLeft:e.wrapperEl.offsetTop:0;for(let i=0;i<t.length;i+=1)t[i].swiperSlideOffset=(e.isHorizontal()?t[i].offsetLeft:t[i].offsetTop)-n-e.cssOverflowAdjustment()},updateSlidesProgress:function(e=this&&this.translate||0){const t=this,n=t.params,{slides:i,rtlTranslate:s,snapGrid:r}=t;if(0===i.length)return;void 0===i[0].swiperSlideOffset&&t.updateSlidesOffset();let o=-e;s&&(o=e),i.forEach((e=>{e.classList.remove(n.slideVisibleClass)})),t.visibleSlidesIndexes=[],t.visibleSlides=[];let a=n.spaceBetween;"string"==typeof a&&a.indexOf("%")>=0?a=parseFloat(a.replace("%",""))/100*t.size:"string"==typeof a&&(a=parseFloat(a));for(let e=0;e<i.length;e+=1){const l=i[e];let c=l.swiperSlideOffset;n.cssMode&&n.centeredSlides&&(c-=i[0].swiperSlideOffset);const u=(o+(n.centeredSlides?t.minTranslate():0)-c)/(l.swiperSlideSize+a),h=(o-r[0]+(n.centeredSlides?t.minTranslate():0)-c)/(l.swiperSlideSize+a),d=-(o-c),p=d+t.slidesSizesGrid[e];(d>=0&&d<t.size-1||p>1&&p<=t.size||d<=0&&p>=t.size)&&(t.visibleSlides.push(l),t.visibleSlidesIndexes.push(e),i[e].classList.add(n.slideVisibleClass)),l.progress=s?-u:u,l.originalProgress=s?-h:h}},updateProgress:function(e){const t=this;if(void 0===e){const n=t.rtlTranslate?-1:1;e=t&&t.translate&&t.translate*n||0}const n=t.params,i=t.maxTranslate()-t.minTranslate();let{progress:s,isBeginning:r,isEnd:o,progressLoop:a}=t;const l=r,c=o;if(0===i)s=0,r=!0,o=!0;else{s=(e-t.minTranslate())/i;const n=Math.abs(e-t.minTranslate())<1,a=Math.abs(e-t.maxTranslate())<1;r=n||s<=0,o=a||s>=1,n&&(s=0),a&&(s=1)}if(n.loop){const n=t.getSlideIndexByData(0),i=t.getSlideIndexByData(t.slides.length-1),s=t.slidesGrid[n],r=t.slidesGrid[i],o=t.slidesGrid[t.slidesGrid.length-1],l=Math.abs(e);a=l>=s?(l-s)/o:(l+o-r)/o,a>1&&(a-=1)}Object.assign(t,{progress:s,progressLoop:a,isBeginning:r,isEnd:o}),(n.watchSlidesProgress||n.centeredSlides&&n.autoHeight)&&t.updateSlidesProgress(e),r&&!l&&t.emit("reachBeginning toEdge"),o&&!c&&t.emit("reachEnd toEdge"),(l&&!r||c&&!o)&&t.emit("fromEdge"),t.emit("progress",s)},updateSlidesClasses:function(){const e=this,{slides:t,params:n,slidesEl:i,activeIndex:s}=e,r=e.virtual&&n.virtual.enabled,o=e=>ge(i,`.${n.slideClass}${e}, swiper-slide${e}`)[0];let a;if(t.forEach((e=>{e.classList.remove(n.slideActiveClass,n.slideNextClass,n.slidePrevClass)})),r)if(n.loop){let t=s-e.virtual.slidesBefore;t<0&&(t=e.virtual.slides.length+t),t>=e.virtual.slides.length&&(t-=e.virtual.slides.length),a=o(`[data-swiper-slide-index="${t}"]`)}else a=o(`[data-swiper-slide-index="${s}"]`);else a=t[s];if(a){a.classList.add(n.slideActiveClass);let e=we(a,`.${n.slideClass}, swiper-slide`)[0];n.loop&&!e&&(e=t[0]),e&&e.classList.add(n.slideNextClass);let i=ye(a,`.${n.slideClass}, swiper-slide`)[0];n.loop,i&&i.classList.add(n.slidePrevClass)}e.emitSlidesClasses()},updateActiveIndex:function(e){const t=this,n=t.rtlTranslate?t.translate:-t.translate,{snapGrid:i,params:s,activeIndex:r,realIndex:o,snapIndex:a}=t;let l,c=e;const u=e=>{let n=e-t.virtual.slidesBefore;return n<0&&(n=t.virtual.slides.length+n),n>=t.virtual.slides.length&&(n-=t.virtual.slides.length),n};if(void 0===c&&(c=function(e){const{slidesGrid:t,params:n}=e,i=e.rtlTranslate?e.translate:-e.translate;let s;for(let e=0;e<t.length;e+=1)void 0!==t[e+1]?i>=t[e]&&i<t[e+1]-(t[e+1]-t[e])/2?s=e:i>=t[e]&&i<t[e+1]&&(s=e+1):i>=t[e]&&(s=e);return n.normalizeSlideIndex&&(s<0||void 0===s)&&(s=0),s}(t)),i.indexOf(n)>=0)l=i.indexOf(n);else{const e=Math.min(s.slidesPerGroupSkip,c);l=e+Math.floor((c-e)/s.slidesPerGroup)}if(l>=i.length&&(l=i.length-1),c===r)return l!==a&&(t.snapIndex=l,t.emit("snapIndexChange")),void(t.params.loop&&t.virtual&&t.params.virtual.enabled&&(t.realIndex=u(c)));let h;h=t.virtual&&s.virtual.enabled&&s.loop?u(c):t.slides[c]?parseInt(t.slides[c].getAttribute("data-swiper-slide-index")||c,10):c,Object.assign(t,{previousSnapIndex:a,snapIndex:l,previousRealIndex:o,realIndex:h,previousIndex:r,activeIndex:c}),t.initialized&&Le(t),t.emit("activeIndexChange"),t.emit("snapIndexChange"),o!==h&&t.emit("realIndexChange"),(t.initialized||t.params.runCallbacksOnInit)&&t.emit("slideChange")},updateClickedSlide:function(e){const t=this,n=t.params,i=e.closest(`.${n.slideClass}, swiper-slide`);let s,r=!1;if(i)for(let e=0;e<t.slides.length;e+=1)if(t.slides[e]===i){r=!0,s=e;break}if(!i||!r)return t.clickedSlide=void 0,void(t.clickedIndex=void 0);t.clickedSlide=i,t.virtual&&t.params.virtual.enabled?t.clickedIndex=parseInt(i.getAttribute("data-swiper-slide-index"),10):t.clickedIndex=s,n.slideToClickedSlide&&void 0!==t.clickedIndex&&t.clickedIndex!==t.activeIndex&&t.slideToClickedSlide()}},translate:{getTranslate:function(e=(this.isHorizontal()?"x":"y")){const{params:t,rtlTranslate:n,translate:i,wrapperEl:s}=this;if(t.virtualTranslate)return n?-i:i;if(t.cssMode)return i;let r=he(s,e);return r+=this.cssOverflowAdjustment(),n&&(r=-r),r||0},setTranslate:function(e,t){const n=this,{rtlTranslate:i,params:s,wrapperEl:r,progress:o}=n;let a,l=0,c=0;n.isHorizontal()?l=i?-e:e:c=e,s.roundLengths&&(l=Math.floor(l),c=Math.floor(c)),n.previousTranslate=n.translate,n.translate=n.isHorizontal()?l:c,s.cssMode?r[n.isHorizontal()?"scrollLeft":"scrollTop"]=n.isHorizontal()?-l:-c:s.virtualTranslate||(n.isHorizontal()?l-=n.cssOverflowAdjustment():c-=n.cssOverflowAdjustment(),r.style.transform=`translate3d(${l}px, ${c}px, 0px)`);const u=n.maxTranslate()-n.minTranslate();a=0===u?0:(e-n.minTranslate())/u,a!==o&&n.updateProgress(e),n.emit("setTranslate",n.translate,t)},minTranslate:function(){return-this.snapGrid[0]},maxTranslate:function(){return-this.snapGrid[this.snapGrid.length-1]},translateTo:function(e=0,t=this.params.speed,n=!0,i=!0,s){const r=this,{params:o,wrapperEl:a}=r;if(r.animating&&o.preventInteractionOnTransition)return!1;const l=r.minTranslate(),c=r.maxTranslate();let u;if(u=i&&e>l?l:i&&e<c?c:e,r.updateProgress(u),o.cssMode){const e=r.isHorizontal();if(0===t)a[e?"scrollLeft":"scrollTop"]=-u;else{if(!r.support.smoothScroll)return me({swiper:r,targetPosition:-u,side:e?"left":"top"}),!0;a.scrollTo({[e?"left":"top"]:-u,behavior:"smooth"})}return!0}return 0===t?(r.setTransition(0),r.setTranslate(u),n&&(r.emit("beforeTransitionStart",t,s),r.emit("transitionEnd"))):(r.setTransition(t),r.setTranslate(u),n&&(r.emit("beforeTransitionStart",t,s),r.emit("transitionStart")),r.animating||(r.animating=!0,r.onTranslateToWrapperTransitionEnd||(r.onTranslateToWrapperTransitionEnd=function(e){r&&!r.destroyed&&e.target===this&&(r.wrapperEl.removeEventListener("transitionend",r.onTranslateToWrapperTransitionEnd),r.onTranslateToWrapperTransitionEnd=null,delete r.onTranslateToWrapperTransitionEnd,n&&r.emit("transitionEnd"))}),r.wrapperEl.addEventListener("transitionend",r.onTranslateToWrapperTransitionEnd))),!0}},transition:{setTransition:function(e,t){const n=this;n.params.cssMode||(n.wrapperEl.style.transitionDuration=`${e}ms`),n.emit("setTransition",e,t)},transitionStart:function(e=!0,t){const n=this,{params:i}=n;i.cssMode||(i.autoHeight&&n.updateAutoHeight(),Oe({swiper:n,runCallbacks:e,direction:t,step:"Start"}))},transitionEnd:function(e=!0,t){const n=this,{params:i}=n;n.animating=!1,i.cssMode||(n.setTransition(0),Oe({swiper:n,runCallbacks:e,direction:t,step:"End"}))}},slide:{slideTo:function(e=0,t=this.params.speed,n=!0,i,s){"string"==typeof e&&(e=parseInt(e,10));const r=this;let o=e;o<0&&(o=0);const{params:a,snapGrid:l,slidesGrid:c,previousIndex:u,activeIndex:h,rtlTranslate:d,wrapperEl:p,enabled:f}=r;if(r.animating&&a.preventInteractionOnTransition||!f&&!i&&!s)return!1;const m=Math.min(r.params.slidesPerGroupSkip,o);let g=m+Math.floor((o-m)/r.params.slidesPerGroup);g>=l.length&&(g=l.length-1);const v=-l[g];if(a.normalizeSlideIndex)for(let e=0;e<c.length;e+=1){const t=-Math.floor(100*v),n=Math.floor(100*c[e]),i=Math.floor(100*c[e+1]);void 0!==c[e+1]?t>=n&&t<i-(i-n)/2?o=e:t>=n&&t<i&&(o=e+1):t>=n&&(o=e)}if(r.initialized&&o!==h){if(!r.allowSlideNext&&v<r.translate&&v<r.minTranslate())return!1;if(!r.allowSlidePrev&&v>r.translate&&v>r.maxTranslate()&&(h||0)!==o)return!1}let y;if(o!==(u||0)&&n&&r.emit("beforeSlideChangeStart"),r.updateProgress(v),y=o>h?"next":o<h?"prev":"reset",d&&-v===r.translate||!d&&v===r.translate)return r.updateActiveIndex(o),a.autoHeight&&r.updateAutoHeight(),r.updateSlidesClasses(),"slide"!==a.effect&&r.setTranslate(v),"reset"!==y&&(r.transitionStart(n,y),r.transitionEnd(n,y)),!1;if(a.cssMode){const e=r.isHorizontal(),n=d?v:-v;if(0===t){const t=r.virtual&&r.params.virtual.enabled;t&&(r.wrapperEl.style.scrollSnapType="none",r._immediateVirtual=!0),t&&!r._cssModeVirtualInitialSet&&r.params.initialSlide>0?(r._cssModeVirtualInitialSet=!0,requestAnimationFrame((()=>{p[e?"scrollLeft":"scrollTop"]=n}))):p[e?"scrollLeft":"scrollTop"]=n,t&&requestAnimationFrame((()=>{r.wrapperEl.style.scrollSnapType="",r._immediateVirtual=!1}))}else{if(!r.support.smoothScroll)return me({swiper:r,targetPosition:n,side:e?"left":"top"}),!0;p.scrollTo({[e?"left":"top"]:n,behavior:"smooth"})}return!0}return r.setTransition(t),r.setTranslate(v),r.updateActiveIndex(o),r.updateSlidesClasses(),r.emit("beforeTransitionStart",t,i),r.transitionStart(n,y),0===t?r.transitionEnd(n,y):r.animating||(r.animating=!0,r.onSlideToWrapperTransitionEnd||(r.onSlideToWrapperTransitionEnd=function(e){r&&!r.destroyed&&e.target===this&&(r.wrapperEl.removeEventListener("transitionend",r.onSlideToWrapperTransitionEnd),r.onSlideToWrapperTransitionEnd=null,delete r.onSlideToWrapperTransitionEnd,r.transitionEnd(n,y))}),r.wrapperEl.addEventListener("transitionend",r.onSlideToWrapperTransitionEnd)),!0},slideToLoop:function(e=0,t=this.params.speed,n=!0,i){if("string"==typeof e){e=parseInt(e,10)}const s=this;let r=e;return s.params.loop&&(s.virtual&&s.params.virtual.enabled?r+=s.virtual.slidesBefore:r=s.getSlideIndexByData(r)),s.slideTo(r,t,n,i)},slideNext:function(e=this.params.speed,t=!0,n){const i=this,{enabled:s,params:r,animating:o}=i;if(!s)return i;let a=r.slidesPerGroup;"auto"===r.slidesPerView&&1===r.slidesPerGroup&&r.slidesPerGroupAuto&&(a=Math.max(i.slidesPerViewDynamic("current",!0),1));const l=i.activeIndex<r.slidesPerGroupSkip?1:a,c=i.virtual&&r.virtual.enabled;if(r.loop){if(o&&!c&&r.loopPreventsSliding)return!1;i.loopFix({direction:"next"}),i._clientLeft=i.wrapperEl.clientLeft}return r.rewind&&i.isEnd?i.slideTo(0,e,t,n):i.slideTo(i.activeIndex+l,e,t,n)},slidePrev:function(e=this.params.speed,t=!0,n){const i=this,{params:s,snapGrid:r,slidesGrid:o,rtlTranslate:a,enabled:l,animating:c}=i;if(!l)return i;const u=i.virtual&&s.virtual.enabled;if(s.loop){if(c&&!u&&s.loopPreventsSliding)return!1;i.loopFix({direction:"prev"}),i._clientLeft=i.wrapperEl.clientLeft}function h(e){return e<0?-Math.floor(Math.abs(e)):Math.floor(e)}const d=h(a?i.translate:-i.translate),p=r.map((e=>h(e)));let f=r[p.indexOf(d)-1];if(void 0===f&&s.cssMode){let e;r.forEach(((t,n)=>{d>=t&&(e=n)})),void 0!==e&&(f=r[e>0?e-1:e])}let m=0;if(void 0!==f&&(m=o.indexOf(f),m<0&&(m=i.activeIndex-1),"auto"===s.slidesPerView&&1===s.slidesPerGroup&&s.slidesPerGroupAuto&&(m=m-i.slidesPerViewDynamic("previous",!0)+1,m=Math.max(m,0))),s.rewind&&i.isBeginning){const s=i.params.virtual&&i.params.virtual.enabled&&i.virtual?i.virtual.slides.length-1:i.slides.length-1;return i.slideTo(s,e,t,n)}return i.slideTo(m,e,t,n)},slideReset:function(e=this.params.speed,t=!0,n){return this.slideTo(this.activeIndex,e,t,n)},slideToClosest:function(e=this.params.speed,t=!0,n,i=.5){const s=this;let r=s.activeIndex;const o=Math.min(s.params.slidesPerGroupSkip,r),a=o+Math.floor((r-o)/s.params.slidesPerGroup),l=s.rtlTranslate?s.translate:-s.translate;if(l>=s.snapGrid[a]){const e=s.snapGrid[a];l-e>(s.snapGrid[a+1]-e)*i&&(r+=s.params.slidesPerGroup)}else{const e=s.snapGrid[a-1];l-e<=(s.snapGrid[a]-e)*i&&(r-=s.params.slidesPerGroup)}return r=Math.max(r,0),r=Math.min(r,s.slidesGrid.length-1),s.slideTo(r,e,t,n)},slideToClickedSlide:function(){const e=this,{params:t,slidesEl:n}=e,i="auto"===t.slidesPerView?e.slidesPerViewDynamic():t.slidesPerView;let s,r=e.clickedIndex;const o=e.isElement?"swiper-slide":`.${t.slideClass}`;if(t.loop){if(e.animating)return;s=parseInt(e.clickedSlide.getAttribute("data-swiper-slide-index"),10),t.centeredSlides?r<e.loopedSlides-i/2||r>e.slides.length-e.loopedSlides+i/2?(e.loopFix(),r=e.getSlideIndex(ge(n,`${o}[data-swiper-slide-index="${s}"]`)[0]),ce((()=>{e.slideTo(r)}))):e.slideTo(r):r>e.slides.length-i?(e.loopFix(),r=e.getSlideIndex(ge(n,`${o}[data-swiper-slide-index="${s}"]`)[0]),ce((()=>{e.slideTo(r)}))):e.slideTo(r)}else e.slideTo(r)}},loop:{loopCreate:function(e){const t=this,{params:n,slidesEl:i}=t;if(!n.loop||t.virtual&&t.params.virtual.enabled)return;ge(i,`.${n.slideClass}, swiper-slide`).forEach(((e,t)=>{e.setAttribute("data-swiper-slide-index",t)})),t.loopFix({slideRealIndex:e,direction:n.centeredSlides?void 0:"next"})},loopFix:function({slideRealIndex:e,slideTo:t=!0,direction:n,setTranslate:i,activeSlideIndex:s,byController:r,byMousewheel:o}={}){const a=this;if(!a.params.loop)return;a.emit("beforeLoopFix");const{slides:l,allowSlidePrev:c,allowSlideNext:u,slidesEl:h,params:d}=a;if(a.allowSlidePrev=!0,a.allowSlideNext=!0,a.virtual&&d.virtual.enabled)return t&&(d.centeredSlides||0!==a.snapIndex?d.centeredSlides&&a.snapIndex<d.slidesPerView?a.slideTo(a.virtual.slides.length+a.snapIndex,0,!1,!0):a.snapIndex===a.snapGrid.length-1&&a.slideTo(a.virtual.slidesBefore,0,!1,!0):a.slideTo(a.virtual.slides.length,0,!1,!0)),a.allowSlidePrev=c,a.allowSlideNext=u,void a.emit("loopFix");const p="auto"===d.slidesPerView?a.slidesPerViewDynamic():Math.ceil(parseFloat(d.slidesPerView,10));let f=d.loopedSlides||p;f%d.slidesPerGroup!=0&&(f+=d.slidesPerGroup-f%d.slidesPerGroup),a.loopedSlides=f;const m=[],g=[];let v=a.activeIndex;void 0===s?s=a.getSlideIndex(a.slides.filter((e=>e.classList.contains(d.slideActiveClass)))[0]):v=s;const y="next"===n||!n,w="prev"===n||!n;let b=0,E=0;if(s<f){b=Math.max(f-s,d.slidesPerGroup);for(let e=0;e<f-s;e+=1){const t=e-Math.floor(e/l.length)*l.length;m.push(l.length-t-1)}}else if(s>a.slides.length-2*f){E=Math.max(s-(a.slides.length-2*f),d.slidesPerGroup);for(let e=0;e<E;e+=1){const t=e-Math.floor(e/l.length)*l.length;g.push(t)}}if(w&&m.forEach((e=>{a.slides[e].swiperLoopMoveDOM=!0,h.prepend(a.slides[e]),a.slides[e].swiperLoopMoveDOM=!1})),y&&g.forEach((e=>{a.slides[e].swiperLoopMoveDOM=!0,h.append(a.slides[e]),a.slides[e].swiperLoopMoveDOM=!1})),a.recalcSlides(),"auto"===d.slidesPerView&&a.updateSlides(),d.watchSlidesProgress&&a.updateSlidesOffset(),t)if(m.length>0&&w)if(void 0===e){const e=a.slidesGrid[v],t=a.slidesGrid[v+b]-e;o?a.setTranslate(a.translate-t):(a.slideTo(v+b,0,!1,!0),i&&(a.touches[a.isHorizontal()?"startX":"startY"]+=t))}else i&&a.slideToLoop(e,0,!1,!0);else if(g.length>0&&y)if(void 0===e){const e=a.slidesGrid[v],t=a.slidesGrid[v-E]-e;o?a.setTranslate(a.translate-t):(a.slideTo(v-E,0,!1,!0),i&&(a.touches[a.isHorizontal()?"startX":"startY"]+=t))}else a.slideToLoop(e,0,!1,!0);if(a.allowSlidePrev=c,a.allowSlideNext=u,a.controller&&a.controller.control&&!r){const t={slideRealIndex:e,slideTo:!1,direction:n,setTranslate:i,activeSlideIndex:s,byController:!0};Array.isArray(a.controller.control)?a.controller.control.forEach((e=>{!e.destroyed&&e.params.loop&&e.loopFix(t)})):a.controller.control instanceof a.constructor&&a.controller.control.params.loop&&a.controller.control.loopFix(t)}a.emit("loopFix")},loopDestroy:function(){const e=this,{params:t,slidesEl:n}=e;if(!t.loop||e.virtual&&e.params.virtual.enabled)return;e.recalcSlides();const i=[];e.slides.forEach((e=>{const t=void 0===e.swiperSlideIndex?1*e.getAttribute("data-swiper-slide-index"):e.swiperSlideIndex;i[t]=e})),e.slides.forEach((e=>{e.removeAttribute("data-swiper-slide-index")})),i.forEach((e=>{n.append(e)})),e.recalcSlides(),e.slideTo(e.realIndex,0)}},grabCursor:{setGrabCursor:function(e){const t=this;if(!t.params.simulateTouch||t.params.watchOverflow&&t.isLocked||t.params.cssMode)return;const n="container"===t.params.touchEventsTarget?t.el:t.wrapperEl;t.isElement&&(t.__preventObserver__=!0),n.style.cursor="move",n.style.cursor=e?"grabbing":"grab",t.isElement&&requestAnimationFrame((()=>{t.__preventObserver__=!1}))},unsetGrabCursor:function(){const e=this;e.params.watchOverflow&&e.isLocked||e.params.cssMode||(e.isElement&&(e.__preventObserver__=!0),e["container"===e.params.touchEventsTarget?"el":"wrapperEl"].style.cursor="",e.isElement&&requestAnimationFrame((()=>{e.__preventObserver__=!1})))}},events:{attachEvents:function(){const e=this,t=re(),{params:n}=e;e.onTouchStart=Me.bind(e),e.onTouchMove=Pe.bind(e),e.onTouchEnd=Re.bind(e),n.cssMode&&(e.onScroll=Ue.bind(e)),e.onClick=Ve.bind(e),e.onLoad=ze.bind(e),je||(t.addEventListener("touchstart",Be),je=!0),$e(e,"on")},detachEvents:function(){$e(this,"off")}},breakpoints:He,checkOverflow:{checkOverflow:function(){const e=this,{isLocked:t,params:n}=e,{slidesOffsetBefore:i}=n;if(i){const t=e.slides.length-1,n=e.slidesGrid[t]+e.slidesSizesGrid[t]+2*i;e.isLocked=e.size>n}else e.isLocked=1===e.snapGrid.length;!0===n.allowSlideNext&&(e.allowSlideNext=!e.isLocked),!0===n.allowSlidePrev&&(e.allowSlidePrev=!e.isLocked),t&&t!==e.isLocked&&(e.isEnd=!1),t!==e.isLocked&&e.emit(e.isLocked?"lock":"unlock")}},classes:{addClasses:function(){const e=this,{classNames:t,params:n,rtl:i,el:s,device:r}=e,o=function(e,t){const n=[];return e.forEach((e=>{"object"==typeof e?Object.keys(e).forEach((i=>{e[i]&&n.push(t+i)})):"string"==typeof e&&n.push(t+e)})),n}(["initialized",n.direction,{"free-mode":e.params.freeMode&&n.freeMode.enabled},{autoheight:n.autoHeight},{rtl:i},{grid:n.grid&&n.grid.rows>1},{"grid-column":n.grid&&n.grid.rows>1&&"column"===n.grid.fill},{android:r.android},{ios:r.ios},{"css-mode":n.cssMode},{centered:n.cssMode&&n.centeredSlides},{"watch-progress":n.watchSlidesProgress}],n.containerModifierClass);t.push(...o),s.classList.add(...t),e.emitContainerClasses()},removeClasses:function(){const{el:e,classNames:t}=this;e.classList.remove(...t),this.emitContainerClasses()}}},Qe={};class Xe{constructor(...e){let t,n;1===e.length&&e[0].constructor&&"Object"===Object.prototype.toString.call(e[0]).slice(8,-1)?n=e[0]:[t,n]=e,n||(n={}),n=pe({},n),t&&!n.el&&(n.el=t);const i=re();if(n.el&&"string"==typeof n.el&&i.querySelectorAll(n.el).length>1){const e=[];return i.querySelectorAll(n.el).forEach((t=>{const i=pe({},n,{el:t});e.push(new Xe(i))})),e}const s=this;s.__swiper__=!0,s.support=ke(),s.device=Ae({userAgent:n.userAgent}),s.browser=xe(),s.eventsListeners={},s.eventsAnyListeners=[],s.modules=[...s.__modules__],n.modules&&Array.isArray(n.modules)&&s.modules.push(...n.modules);const r={};s.modules.forEach((e=>{e({params:n,swiper:s,extendParams:We(n,r),on:s.on.bind(s),once:s.once.bind(s),off:s.off.bind(s),emit:s.emit.bind(s)})}));const o=pe({},Ge,r);return s.params=pe({},o,Qe,n),s.originalParams=pe({},s.params),s.passedParams=pe({},n),s.params&&s.params.on&&Object.keys(s.params.on).forEach((e=>{s.on(e,s.params.on[e])})),s.params&&s.params.onAny&&s.onAny(s.params.onAny),Object.assign(s,{enabled:s.params.enabled,el:t,classNames:[],slides:[],slidesGrid:[],snapGrid:[],slidesSizesGrid:[],isHorizontal:()=>"horizontal"===s.params.direction,isVertical:()=>"vertical"===s.params.direction,activeIndex:0,realIndex:0,isBeginning:!0,isEnd:!1,translate:0,previousTranslate:0,progress:0,velocity:0,animating:!1,cssOverflowAdjustment(){return Math.trunc(this.translate/2**23)*2**23},allowSlideNext:s.params.allowSlideNext,allowSlidePrev:s.params.allowSlidePrev,touchEventsData:{isTouched:void 0,isMoved:void 0,allowTouchCallbacks:void 0,touchStartTime:void 0,isScrolling:void 0,currentTranslate:void 0,startTranslate:void 0,allowThresholdMove:void 0,focusableElements:s.params.focusableElements,lastClickTime:0,clickTimeout:void 0,velocities:[],allowMomentumBounce:void 0,startMoving:void 0,evCache:[]},allowClick:!0,allowTouchMove:s.params.allowTouchMove,touches:{startX:0,startY:0,currentX:0,currentY:0,diff:0},imagesToLoad:[],imagesLoaded:0}),s.emit("_swiper"),s.params.init&&s.init(),s}getSlideIndex(e){const{slidesEl:t,params:n}=this,i=Ee(ge(t,`.${n.slideClass}, swiper-slide`)[0]);return Ee(e)-i}getSlideIndexByData(e){return this.getSlideIndex(this.slides.filter((t=>1*t.getAttribute("data-swiper-slide-index")===e))[0])}recalcSlides(){const{slidesEl:e,params:t}=this;this.slides=ge(e,`.${t.slideClass}, swiper-slide`)}enable(){const e=this;e.enabled||(e.enabled=!0,e.params.grabCursor&&e.setGrabCursor(),e.emit("enable"))}disable(){const e=this;e.enabled&&(e.enabled=!1,e.params.grabCursor&&e.unsetGrabCursor(),e.emit("disable"))}setProgress(e,t){const n=this;e=Math.min(Math.max(e,0),1);const i=n.minTranslate(),s=(n.maxTranslate()-i)*e+i;n.translateTo(s,void 0===t?0:t),n.updateActiveIndex(),n.updateSlidesClasses()}emitContainerClasses(){const e=this;if(!e.params._emitClasses||!e.el)return;const t=e.el.className.split(" ").filter((t=>0===t.indexOf("swiper")||0===t.indexOf(e.params.containerModifierClass)));e.emit("_containerClasses",t.join(" "))}getSlideClasses(e){const t=this;return t.destroyed?"":e.className.split(" ").filter((e=>0===e.indexOf("swiper-slide")||0===e.indexOf(t.params.slideClass))).join(" ")}emitSlidesClasses(){const e=this;if(!e.params._emitClasses||!e.el)return;const t=[];e.slides.forEach((n=>{const i=e.getSlideClasses(n);t.push({slideEl:n,classNames:i}),e.emit("_slideClass",n,i)})),e.emit("_slideClasses",t)}slidesPerViewDynamic(e="current",t=!1){const{params:n,slides:i,slidesGrid:s,slidesSizesGrid:r,size:o,activeIndex:a}=this;let l=1;if(n.centeredSlides){let e,t=i[a].swiperSlideSize;for(let n=a+1;n<i.length;n+=1)i[n]&&!e&&(t+=i[n].swiperSlideSize,l+=1,t>o&&(e=!0));for(let n=a-1;n>=0;n-=1)i[n]&&!e&&(t+=i[n].swiperSlideSize,l+=1,t>o&&(e=!0))}else if("current"===e)for(let e=a+1;e<i.length;e+=1){(t?s[e]+r[e]-s[a]<o:s[e]-s[a]<o)&&(l+=1)}else for(let e=a-1;e>=0;e-=1){s[a]-s[e]<o&&(l+=1)}return l}update(){const e=this;if(!e||e.destroyed)return;const{snapGrid:t,params:n}=e;function i(){const t=e.rtlTranslate?-1*e.translate:e.translate,n=Math.min(Math.max(t,e.maxTranslate()),e.minTranslate());e.setTranslate(n),e.updateActiveIndex(),e.updateSlidesClasses()}let s;if(n.breakpoints&&e.setBreakpoint(),[...e.el.querySelectorAll('[loading="lazy"]')].forEach((t=>{t.complete&&Ne(e,t)})),e.updateSize(),e.updateSlides(),e.updateProgress(),e.updateSlidesClasses(),e.params.freeMode&&e.params.freeMode.enabled)i(),e.params.autoHeight&&e.updateAutoHeight();else{if(("auto"===e.params.slidesPerView||e.params.slidesPerView>1)&&e.isEnd&&!e.params.centeredSlides){const t=e.virtual&&e.params.virtual.enabled?e.virtual.slides:e.slides;s=e.slideTo(t.length-1,0,!1,!0)}else s=e.slideTo(e.activeIndex,0,!1,!0);s||i()}n.watchOverflow&&t!==e.snapGrid&&e.checkOverflow(),e.emit("update")}changeDirection(e,t=!0){const n=this,i=n.params.direction;return e||(e="horizontal"===i?"vertical":"horizontal"),e===i||"horizontal"!==e&&"vertical"!==e||(n.el.classList.remove(`${n.params.containerModifierClass}${i}`),n.el.classList.add(`${n.params.containerModifierClass}${e}`),n.emitContainerClasses(),n.params.direction=e,n.slides.forEach((t=>{"vertical"===e?t.style.width="":t.style.height=""})),n.emit("changeDirection"),t&&n.update()),n}changeLanguageDirection(e){const t=this;t.rtl&&"rtl"===e||!t.rtl&&"ltr"===e||(t.rtl="rtl"===e,t.rtlTranslate="horizontal"===t.params.direction&&t.rtl,t.rtl?(t.el.classList.add(`${t.params.containerModifierClass}rtl`),t.el.dir="rtl"):(t.el.classList.remove(`${t.params.containerModifierClass}rtl`),t.el.dir="ltr"),t.update())}mount(e){const t=this;if(t.mounted)return!0;let n=e||t.params.el;if("string"==typeof n&&(n=document.querySelector(n)),!n)return!1;n.swiper=t,n.shadowEl&&(t.isElement=!0);const i=()=>`.${(t.params.wrapperClass||"").trim().split(" ").join(".")}`;let s=(()=>{if(n&&n.shadowRoot&&n.shadowRoot.querySelector){return n.shadowRoot.querySelector(i())}return ge(n,i())[0]})();return!s&&t.params.createElements&&(s=ve("div",t.params.wrapperClass),n.append(s),ge(n,`.${t.params.slideClass}`).forEach((e=>{s.append(e)}))),Object.assign(t,{el:n,wrapperEl:s,slidesEl:t.isElement?n:s,mounted:!0,rtl:"rtl"===n.dir.toLowerCase()||"rtl"===be(n,"direction"),rtlTranslate:"horizontal"===t.params.direction&&("rtl"===n.dir.toLowerCase()||"rtl"===be(n,"direction")),wrongRTL:"-webkit-box"===be(s,"display")}),!0}init(e){const t=this;if(t.initialized)return t;return!1===t.mount(e)||(t.emit("beforeInit"),t.params.breakpoints&&t.setBreakpoint(),t.addClasses(),t.updateSize(),t.updateSlides(),t.params.watchOverflow&&t.checkOverflow(),t.params.grabCursor&&t.enabled&&t.setGrabCursor(),t.params.loop&&t.virtual&&t.params.virtual.enabled?t.slideTo(t.params.initialSlide+t.virtual.slidesBefore,0,t.params.runCallbacksOnInit,!1,!0):t.slideTo(t.params.initialSlide,0,t.params.runCallbacksOnInit,!1,!0),t.params.loop&&t.loopCreate(),t.attachEvents(),[...t.el.querySelectorAll('[loading="lazy"]')].forEach((e=>{e.complete?Ne(t,e):e.addEventListener("load",(e=>{Ne(t,e.target)}))})),Le(t),t.initialized=!0,Le(t),t.emit("init"),t.emit("afterInit")),t}destroy(e=!0,t=!0){const n=this,{params:i,el:s,wrapperEl:r,slides:o}=n;return void 0===n.params||n.destroyed||(n.emit("beforeDestroy"),n.initialized=!1,n.detachEvents(),i.loop&&n.loopDestroy(),t&&(n.removeClasses(),s.removeAttribute("style"),r.removeAttribute("style"),o&&o.length&&o.forEach((e=>{e.classList.remove(i.slideVisibleClass,i.slideActiveClass,i.slideNextClass,i.slidePrevClass),e.removeAttribute("style"),e.removeAttribute("data-swiper-slide-index")}))),n.emit("destroy"),Object.keys(n.eventsListeners).forEach((e=>{n.off(e)})),!1!==e&&(n.el.swiper=null,le(n)),n.destroyed=!0),null}static extendDefaults(e){pe(Qe,e)}static get extendedDefaults(){return Qe}static get defaults(){return Ge}static installModule(e){Xe.prototype.__modules__||(Xe.prototype.__modules__=[]);const t=Xe.prototype.__modules__;"function"==typeof e&&t.indexOf(e)<0&&t.push(e)}static use(e){return Array.isArray(e)?(e.forEach((e=>Xe.installModule(e))),Xe):(Xe.installModule(e),Xe)}}function Ye(e,t,n,i){return e.params.createElements&&Object.keys(i).forEach((s=>{if(!n[s]&&!0===n.auto){let r=ge(e.el,`.${i[s]}`)[0];r||(r=ve("div",i[s]),r.className=i[s],e.el.append(r)),n[s]=r,t[s]=r}})),n}function Je(e=""){return`.${e.trim().replace(/([\.:!+\/])/g,"\\$1").replace(/ /g,".")}`}Object.keys(Ke).forEach((e=>{Object.keys(Ke[e]).forEach((t=>{Xe.prototype[t]=Ke[e][t]}))})),Xe.use([function({swiper:e,on:t,emit:n}){const i=ae();let s=null,r=null;const o=()=>{e&&!e.destroyed&&e.initialized&&(n("beforeResize"),n("resize"))},a=()=>{e&&!e.destroyed&&e.initialized&&n("orientationchange")};t("init",(()=>{e.params.resizeObserver&&void 0!==i.ResizeObserver?e&&!e.destroyed&&e.initialized&&(s=new ResizeObserver((t=>{r=i.requestAnimationFrame((()=>{const{width:n,height:i}=e;let s=n,r=i;t.forEach((({contentBoxSize:t,contentRect:n,target:i})=>{i&&i!==e.el||(s=n?n.width:(t[0]||t).inlineSize,r=n?n.height:(t[0]||t).blockSize)})),s===n&&r===i||o()}))})),s.observe(e.el)):(i.addEventListener("resize",o),i.addEventListener("orientationchange",a))})),t("destroy",(()=>{r&&i.cancelAnimationFrame(r),s&&s.unobserve&&e.el&&(s.unobserve(e.el),s=null),i.removeEventListener("resize",o),i.removeEventListener("orientationchange",a)}))},function({swiper:e,extendParams:t,on:n,emit:i}){const s=[],r=ae(),o=(t,n={})=>{const o=new(r.MutationObserver||r.WebkitMutationObserver)((t=>{if(e.__preventObserver__)return;if(1===t.length)return void i("observerUpdate",t[0]);const n=function(){i("observerUpdate",t[0])};r.requestAnimationFrame?r.requestAnimationFrame(n):r.setTimeout(n,0)}));o.observe(t,{attributes:void 0===n.attributes||n.attributes,childList:void 0===n.childList||n.childList,characterData:void 0===n.characterData||n.characterData}),s.push(o)};t({observer:!1,observeParents:!1,observeSlideChildren:!1}),n("init",(()=>{if(e.params.observer){if(e.params.observeParents){const t=Te(e.el);for(let e=0;e<t.length;e+=1)o(t[e])}o(e.el,{childList:e.params.observeSlideChildren}),o(e.wrapperEl,{attributes:!1})}})),n("destroy",(()=>{s.forEach((e=>{e.disconnect()})),s.splice(0,s.length)}))}]);new Xe(".swiper",{modules:[function({swiper:e,extendParams:t,on:n,emit:i}){t({navigation:{nextEl:null,prevEl:null,hideOnClick:!1,disabledClass:"swiper-button-disabled",hiddenClass:"swiper-button-hidden",lockClass:"swiper-button-lock",navigationDisabledClass:"swiper-navigation-disabled"}}),e.navigation={nextEl:null,prevEl:null};const s=e=>(Array.isArray(e)||(e=[e].filter((e=>!!e))),e);function r(t){let n;return t&&"string"==typeof t&&e.isElement&&(n=e.el.shadowRoot.querySelector(t),n)?n:(t&&("string"==typeof t&&(n=[...document.querySelectorAll(t)]),e.params.uniqueNavElements&&"string"==typeof t&&n.length>1&&1===e.el.querySelectorAll(t).length&&(n=e.el.querySelector(t))),t&&!n?t:n)}function o(t,n){const i=e.params.navigation;(t=s(t)).forEach((t=>{t&&(t.classList[n?"add":"remove"](...i.disabledClass.split(" ")),"BUTTON"===t.tagName&&(t.disabled=n),e.params.watchOverflow&&e.enabled&&t.classList[e.isLocked?"add":"remove"](i.lockClass))}))}function a(){const{nextEl:t,prevEl:n}=e.navigation;if(e.params.loop)return o(n,!1),void o(t,!1);o(n,e.isBeginning&&!e.params.rewind),o(t,e.isEnd&&!e.params.rewind)}function l(t){t.preventDefault(),(!e.isBeginning||e.params.loop||e.params.rewind)&&(e.slidePrev(),i("navigationPrev"))}function c(t){t.preventDefault(),(!e.isEnd||e.params.loop||e.params.rewind)&&(e.slideNext(),i("navigationNext"))}function u(){const t=e.params.navigation;if(e.params.navigation=Ye(e,e.originalParams.navigation,e.params.navigation,{nextEl:"swiper-button-next",prevEl:"swiper-button-prev"}),!t.nextEl&&!t.prevEl)return;let n=r(t.nextEl),i=r(t.prevEl);Object.assign(e.navigation,{nextEl:n,prevEl:i}),n=s(n),i=s(i);const o=(n,i)=>{n&&n.addEventListener("click","next"===i?c:l),!e.enabled&&n&&n.classList.add(...t.lockClass.split(" "))};n.forEach((e=>o(e,"next"))),i.forEach((e=>o(e,"prev")))}function h(){let{nextEl:t,prevEl:n}=e.navigation;t=s(t),n=s(n);const i=(t,n)=>{t.removeEventListener("click","next"===n?c:l),t.classList.remove(...e.params.navigation.disabledClass.split(" "))};t.forEach((e=>i(e,"next"))),n.forEach((e=>i(e,"prev")))}n("init",(()=>{!1===e.params.navigation.enabled?d():(u(),a())})),n("toEdge fromEdge lock unlock",(()=>{a()})),n("destroy",(()=>{h()})),n("enable disable",(()=>{let{nextEl:t,prevEl:n}=e.navigation;t=s(t),n=s(n),[...t,...n].filter((e=>!!e)).forEach((t=>t.classList[e.enabled?"remove":"add"](e.params.navigation.lockClass)))})),n("click",((t,n)=>{let{nextEl:r,prevEl:o}=e.navigation;r=s(r),o=s(o);const a=n.target;if(e.params.navigation.hideOnClick&&!o.includes(a)&&!r.includes(a)){if(e.pagination&&e.params.pagination&&e.params.pagination.clickable&&(e.pagination.el===a||e.pagination.el.contains(a)))return;let t;r.length?t=r[0].classList.contains(e.params.navigation.hiddenClass):o.length&&(t=o[0].classList.contains(e.params.navigation.hiddenClass)),i(!0===t?"navigationShow":"navigationHide"),[...r,...o].filter((e=>!!e)).forEach((t=>t.classList.toggle(e.params.navigation.hiddenClass)))}}));const d=()=>{e.el.classList.add(...e.params.navigation.navigationDisabledClass.split(" ")),h()};Object.assign(e.navigation,{enable:()=>{e.el.classList.remove(...e.params.navigation.navigationDisabledClass.split(" ")),u(),a()},disable:d,update:a,init:u,destroy:h})},function({swiper:e,extendParams:t,on:n,emit:i}){const s="swiper-pagination";let r;t({pagination:{el:null,bulletElement:"span",clickable:!1,hideOnClick:!1,renderBullet:null,renderProgressbar:null,renderFraction:null,renderCustom:null,progressbarOpposite:!1,type:"bullets",dynamicBullets:!1,dynamicMainBullets:1,formatFractionCurrent:e=>e,formatFractionTotal:e=>e,bulletClass:`${s}-bullet`,bulletActiveClass:`${s}-bullet-active`,modifierClass:`${s}-`,currentClass:`${s}-current`,totalClass:`${s}-total`,hiddenClass:`${s}-hidden`,progressbarFillClass:`${s}-progressbar-fill`,progressbarOppositeClass:`${s}-progressbar-opposite`,clickableClass:`${s}-clickable`,lockClass:`${s}-lock`,horizontalClass:`${s}-horizontal`,verticalClass:`${s}-vertical`,paginationDisabledClass:`${s}-disabled`}}),e.pagination={el:null,bullets:[]};let o=0;const a=e=>(Array.isArray(e)||(e=[e].filter((e=>!!e))),e);function l(){return!e.params.pagination.el||!e.pagination.el||Array.isArray(e.pagination.el)&&0===e.pagination.el.length}function c(t,n){const{bulletActiveClass:i}=e.params.pagination;t&&(t=t[("prev"===n?"previous":"next")+"ElementSibling"])&&(t.classList.add(`${i}-${n}`),(t=t[("prev"===n?"previous":"next")+"ElementSibling"])&&t.classList.add(`${i}-${n}-${n}`))}function u(t){const n=t.target.closest(Je(e.params.pagination.bulletClass));if(!n)return;t.preventDefault();const i=Ee(n)*e.params.slidesPerGroup;if(e.params.loop){if(e.realIndex===i)return;const t=e.getSlideIndexByData(i),n=e.getSlideIndexByData(e.realIndex);t>e.slides.length-e.loopedSlides&&e.loopFix({direction:t>n?"next":"prev",activeSlideIndex:t,slideTo:!1}),e.slideToLoop(i)}else e.slideTo(i)}function h(){const t=e.rtl,n=e.params.pagination;if(l())return;let s,u,h=e.pagination.el;h=a(h);const d=e.virtual&&e.params.virtual.enabled?e.virtual.slides.length:e.slides.length,p=e.params.loop?Math.ceil(d/e.params.slidesPerGroup):e.snapGrid.length;if(e.params.loop?(u=e.previousRealIndex||0,s=e.params.slidesPerGroup>1?Math.floor(e.realIndex/e.params.slidesPerGroup):e.realIndex):void 0!==e.snapIndex?(s=e.snapIndex,u=e.previousSnapIndex):(u=e.previousIndex||0,s=e.activeIndex||0),"bullets"===n.type&&e.pagination.bullets&&e.pagination.bullets.length>0){const i=e.pagination.bullets;let a,l,d;if(n.dynamicBullets&&(r=Se(i[0],e.isHorizontal()?"width":"height",!0),h.forEach((t=>{t.style[e.isHorizontal()?"width":"height"]=r*(n.dynamicMainBullets+4)+"px"})),n.dynamicMainBullets>1&&void 0!==u&&(o+=s-(u||0),o>n.dynamicMainBullets-1?o=n.dynamicMainBullets-1:o<0&&(o=0)),a=Math.max(s-o,0),l=a+(Math.min(i.length,n.dynamicMainBullets)-1),d=(l+a)/2),i.forEach((e=>{const t=[...["","-next","-next-next","-prev","-prev-prev","-main"].map((e=>`${n.bulletActiveClass}${e}`))].map((e=>"string"==typeof e&&e.includes(" ")?e.split(" "):e)).flat();e.classList.remove(...t)})),h.length>1)i.forEach((e=>{const t=Ee(e);t===s&&e.classList.add(...n.bulletActiveClass.split(" ")),n.dynamicBullets&&(t>=a&&t<=l&&e.classList.add(...`${n.bulletActiveClass}-main`.split(" ")),t===a&&c(e,"prev"),t===l&&c(e,"next"))}));else{const e=i[s];if(e&&e.classList.add(...n.bulletActiveClass.split(" ")),n.dynamicBullets){const e=i[a],t=i[l];for(let e=a;e<=l;e+=1)i[e]&&i[e].classList.add(...`${n.bulletActiveClass}-main`.split(" "));c(e,"prev"),c(t,"next")}}if(n.dynamicBullets){const s=Math.min(i.length,n.dynamicMainBullets+4),o=(r*s-r)/2-d*r,a=t?"right":"left";i.forEach((t=>{t.style[e.isHorizontal()?a:"top"]=`${o}px`}))}}h.forEach(((t,r)=>{if("fraction"===n.type&&(t.querySelectorAll(Je(n.currentClass)).forEach((e=>{e.textContent=n.formatFractionCurrent(s+1)})),t.querySelectorAll(Je(n.totalClass)).forEach((e=>{e.textContent=n.formatFractionTotal(p)}))),"progressbar"===n.type){let i;i=n.progressbarOpposite?e.isHorizontal()?"vertical":"horizontal":e.isHorizontal()?"horizontal":"vertical";const r=(s+1)/p;let o=1,a=1;"horizontal"===i?o=r:a=r,t.querySelectorAll(Je(n.progressbarFillClass)).forEach((t=>{t.style.transform=`translate3d(0,0,0) scaleX(${o}) scaleY(${a})`,t.style.transitionDuration=`${e.params.speed}ms`}))}"custom"===n.type&&n.renderCustom?(t.innerHTML=n.renderCustom(e,s+1,p),0===r&&i("paginationRender",t)):(0===r&&i("paginationRender",t),i("paginationUpdate",t)),e.params.watchOverflow&&e.enabled&&t.classList[e.isLocked?"add":"remove"](n.lockClass)}))}function d(){const t=e.params.pagination;if(l())return;const n=e.virtual&&e.params.virtual.enabled?e.virtual.slides.length:e.slides.length;let s=e.pagination.el;s=a(s);let r="";if("bullets"===t.type){let i=e.params.loop?Math.ceil(n/e.params.slidesPerGroup):e.snapGrid.length;e.params.freeMode&&e.params.freeMode.enabled&&i>n&&(i=n);for(let n=0;n<i;n+=1)t.renderBullet?r+=t.renderBullet.call(e,n,t.bulletClass):r+=`<${t.bulletElement} class="${t.bulletClass}"></${t.bulletElement}>`}"fraction"===t.type&&(r=t.renderFraction?t.renderFraction.call(e,t.currentClass,t.totalClass):`<span class="${t.currentClass}"></span> / <span class="${t.totalClass}"></span>`),"progressbar"===t.type&&(r=t.renderProgressbar?t.renderProgressbar.call(e,t.progressbarFillClass):`<span class="${t.progressbarFillClass}"></span>`),e.pagination.bullets=[],s.forEach((n=>{"custom"!==t.type&&(n.innerHTML=r||""),"bullets"===t.type&&e.pagination.bullets.push(...n.querySelectorAll(Je(t.bulletClass)))})),"custom"!==t.type&&i("paginationRender",s[0])}function p(){e.params.pagination=Ye(e,e.originalParams.pagination,e.params.pagination,{el:"swiper-pagination"});const t=e.params.pagination;if(!t.el)return;let n;"string"==typeof t.el&&e.isElement&&(n=e.el.shadowRoot.querySelector(t.el)),n||"string"!=typeof t.el||(n=[...document.querySelectorAll(t.el)]),n||(n=t.el),n&&0!==n.length&&(e.params.uniqueNavElements&&"string"==typeof t.el&&Array.isArray(n)&&n.length>1&&(n=[...e.el.querySelectorAll(t.el)],n.length>1&&(n=n.filter((t=>Te(t,".swiper")[0]===e.el))[0])),Array.isArray(n)&&1===n.length&&(n=n[0]),Object.assign(e.pagination,{el:n}),n=a(n),n.forEach((n=>{"bullets"===t.type&&t.clickable&&n.classList.add(t.clickableClass),n.classList.add(t.modifierClass+t.type),n.classList.add(e.isHorizontal()?t.horizontalClass:t.verticalClass),"bullets"===t.type&&t.dynamicBullets&&(n.classList.add(`${t.modifierClass}${t.type}-dynamic`),o=0,t.dynamicMainBullets<1&&(t.dynamicMainBullets=1)),"progressbar"===t.type&&t.progressbarOpposite&&n.classList.add(t.progressbarOppositeClass),t.clickable&&n.addEventListener("click",u),e.enabled||n.classList.add(t.lockClass)})))}function f(){const t=e.params.pagination;if(l())return;let n=e.pagination.el;n&&(n=a(n),n.forEach((n=>{n.classList.remove(t.hiddenClass),n.classList.remove(t.modifierClass+t.type),n.classList.remove(e.isHorizontal()?t.horizontalClass:t.verticalClass),t.clickable&&n.removeEventListener("click",u)}))),e.pagination.bullets&&e.pagination.bullets.forEach((e=>e.classList.remove(...t.bulletActiveClass.split(" "))))}n("changeDirection",(()=>{if(!e.pagination||!e.pagination.el)return;const t=e.params.pagination;let{el:n}=e.pagination;n=a(n),n.forEach((n=>{n.classList.remove(t.horizontalClass,t.verticalClass),n.classList.add(e.isHorizontal()?t.horizontalClass:t.verticalClass)}))})),n("init",(()=>{!1===e.params.pagination.enabled?m():(p(),d(),h())})),n("activeIndexChange",(()=>{void 0===e.snapIndex&&h()})),n("snapIndexChange",(()=>{h()})),n("snapGridLengthChange",(()=>{d(),h()})),n("destroy",(()=>{f()})),n("enable disable",(()=>{let{el:t}=e.pagination;t&&(t=a(t),t.forEach((t=>t.classList[e.enabled?"remove":"add"](e.params.pagination.lockClass))))})),n("lock unlock",(()=>{h()})),n("click",((t,n)=>{const s=n.target;let{el:r}=e.pagination;if(Array.isArray(r)||(r=[r].filter((e=>!!e))),e.params.pagination.el&&e.params.pagination.hideOnClick&&r&&r.length>0&&!s.classList.contains(e.params.pagination.bulletClass)){if(e.navigation&&(e.navigation.nextEl&&s===e.navigation.nextEl||e.navigation.prevEl&&s===e.navigation.prevEl))return;const t=r[0].classList.contains(e.params.pagination.hiddenClass);i(!0===t?"paginationShow":"paginationHide"),r.forEach((t=>t.classList.toggle(e.params.pagination.hiddenClass)))}}));const m=()=>{e.el.classList.add(e.params.pagination.paginationDisabledClass);let{el:t}=e.pagination;t&&(t=a(t),t.forEach((t=>t.classList.add(e.params.pagination.paginationDisabledClass)))),f()};Object.assign(e.pagination,{enable:()=>{e.el.classList.remove(e.params.pagination.paginationDisabledClass);let{el:t}=e.pagination;t&&(t=a(t),t.forEach((t=>t.classList.remove(e.params.pagination.paginationDisabledClass)))),p(),d(),h()},disable:m,render:d,update:h,init:p,destroy:f})}],slidesPerView:3,spaceBetween:0,fade:!0,loop:!0,loopFillGroupWithBlank:!0,pagination:{el:".swiper-pagination",dynamicBullets:!0,clickable:!0,grabCursor:!0},navigation:{nextEl:".swiper-button-next",prevEl:".swiper-button-prev"},breakpoints:{0:{slidesPerView:1},700:{slidesPerView:2},1200:{slidesPerView:3}}});const Ze=document.getElementById("modal-footer"),et=document.getElementById("open-modal-footer-btn"),tt=document.getElementsByClassName("close-modal-footer")[0];et.onclick=function(){Ze.style.display="block"},tt.onclick=function(){Ze.style.display="none"},window.onclick=function(e){e.target==Ze&&(Ze.style.display="none")},window.addEventListener("keydown",(function(e){"Escape"===e.key&&(Ze.style.display="none")})),window.addEventListener("DOMContentLoaded",(function(){const e=document.querySelector("footer");window.addEventListener("scroll",(function(){window.pageYOffset>3e3?e.classList.add("main-footer"):e.classList.remove("main-footer")}))})),s("dzXGL"),s("5uFih");
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
var nt=s("6qd2L");const it=function(e){const t=[];let n=0;for(let i=0;i<e.length;i++){let s=e.charCodeAt(i);s<128?t[n++]=s:s<2048?(t[n++]=s>>6|192,t[n++]=63&s|128):55296==(64512&s)&&i+1<e.length&&56320==(64512&e.charCodeAt(i+1))?(s=65536+((1023&s)<<10)+(1023&e.charCodeAt(++i)),t[n++]=s>>18|240,t[n++]=s>>12&63|128,t[n++]=s>>6&63|128,t[n++]=63&s|128):(t[n++]=s>>12|224,t[n++]=s>>6&63|128,t[n++]=63&s|128)}return t},st={byteToCharMap_:null,charToByteMap_:null,byteToCharMapWebSafe_:null,charToByteMapWebSafe_:null,ENCODED_VALS_BASE:"ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789",get ENCODED_VALS(){return this.ENCODED_VALS_BASE+"+/="},get ENCODED_VALS_WEBSAFE(){return this.ENCODED_VALS_BASE+"-_."},HAS_NATIVE_SUPPORT:"function"==typeof atob,encodeByteArray(e,t){if(!Array.isArray(e))throw Error("encodeByteArray takes an array as a parameter");this.init_();const n=t?this.byteToCharMapWebSafe_:this.byteToCharMap_,i=[];for(let t=0;t<e.length;t+=3){const s=e[t],r=t+1<e.length,o=r?e[t+1]:0,a=t+2<e.length,l=a?e[t+2]:0,c=s>>2,u=(3&s)<<4|o>>4;let h=(15&o)<<2|l>>6,d=63&l;a||(d=64,r||(h=64)),i.push(n[c],n[u],n[h],n[d])}return i.join("")},encodeString(e,t){return this.HAS_NATIVE_SUPPORT&&!t?btoa(e):this.encodeByteArray(it(e),t)},decodeString(e,t){return this.HAS_NATIVE_SUPPORT&&!t?atob(e):function(e){const t=[];let n=0,i=0;for(;n<e.length;){const s=e[n++];if(s<128)t[i++]=String.fromCharCode(s);else if(s>191&&s<224){const r=e[n++];t[i++]=String.fromCharCode((31&s)<<6|63&r)}else if(s>239&&s<365){const r=((7&s)<<18|(63&e[n++])<<12|(63&e[n++])<<6|63&e[n++])-65536;t[i++]=String.fromCharCode(55296+(r>>10)),t[i++]=String.fromCharCode(56320+(1023&r))}else{const r=e[n++],o=e[n++];t[i++]=String.fromCharCode((15&s)<<12|(63&r)<<6|63&o)}}return t.join("")}(this.decodeStringToByteArray(e,t))},decodeStringToByteArray(e,t){this.init_();const n=t?this.charToByteMapWebSafe_:this.charToByteMap_,i=[];for(let t=0;t<e.length;){const s=n[e.charAt(t++)],r=t<e.length?n[e.charAt(t)]:0;++t;const o=t<e.length?n[e.charAt(t)]:64;++t;const a=t<e.length?n[e.charAt(t)]:64;if(++t,null==s||null==r||null==o||null==a)throw new rt;const l=s<<2|r>>4;if(i.push(l),64!==o){const e=r<<4&240|o>>2;if(i.push(e),64!==a){const e=o<<6&192|a;i.push(e)}}}return i},init_(){if(!this.byteToCharMap_){this.byteToCharMap_={},this.charToByteMap_={},this.byteToCharMapWebSafe_={},this.charToByteMapWebSafe_={};for(let e=0;e<this.ENCODED_VALS.length;e++)this.byteToCharMap_[e]=this.ENCODED_VALS.charAt(e),this.charToByteMap_[this.byteToCharMap_[e]]=e,this.byteToCharMapWebSafe_[e]=this.ENCODED_VALS_WEBSAFE.charAt(e),this.charToByteMapWebSafe_[this.byteToCharMapWebSafe_[e]]=e,e>=this.ENCODED_VALS_BASE.length&&(this.charToByteMap_[this.ENCODED_VALS_WEBSAFE.charAt(e)]=e,this.charToByteMapWebSafe_[this.ENCODED_VALS.charAt(e)]=e)}}};
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class rt extends Error{constructor(){super(...arguments),this.name="DecodeBase64StringError"}}const ot=function(e){return function(e){const t=it(e);return st.encodeByteArray(t,!0)}(e).replace(/\./g,"")},at=function(e){try{return st.decodeString(e,!0)}catch(e){console.error("base64Decode failed: ",e)}return null};
/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
const lt=()=>
/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
function(){if("undefined"!=typeof self)return self;if("undefined"!=typeof window)return window;if(void 0!==t)return t;throw new Error("Unable to locate global object.")}().__FIREBASE_DEFAULTS__,ct=()=>{try{return lt()||(()=>{if(void 0===nt||void 0===nt.env)return})()||(()=>{if("undefined"==typeof document)return;let e;try{e=document.cookie.match(/__FIREBASE_DEFAULTS__=([^;]+)/)}catch(e){return}const t=e&&at(e[1]);return t&&JSON.parse(t)})()}catch(e){return void console.info(`Unable to get __FIREBASE_DEFAULTS__ due to: ${e}`)}},ut=e=>{var t,n;return null===(n=null===(t=ct())||void 0===t?void 0:t.emulatorHosts)||void 0===n?void 0:n[e]},ht=e=>{const t=ut(e);if(!t)return;const n=t.lastIndexOf(":");if(n<=0||n+1===t.length)throw new Error(`Invalid host ${t} with no separate hostname and port!`);const i=parseInt(t.substring(n+1),10);return"["===t[0]?[t.substring(1,n-1),i]:[t.substring(0,n),i]},dt=()=>{var e;return null===(e=ct())||void 0===e?void 0:e.config},pt=e=>{var t;return null===(t=ct())||void 0===t?void 0:t[`_${e}`]};
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
class ft{constructor(){this.reject=()=>{},this.resolve=()=>{},this.promise=new Promise(((e,t)=>{this.resolve=e,this.reject=t}))}wrapCallback(e){return(t,n)=>{t?this.reject(t):this.resolve(n),"function"==typeof e&&(this.promise.catch((()=>{})),1===e.length?e(t):e(t,n))}}}
/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function mt(e,t){if(e.uid)throw new Error('The "uid" field is no longer supported by mockUserToken. Please use "sub" instead for Firebase Auth User ID.');const n=t||"demo-project",i=e.iat||0,s=e.sub||e.user_id;if(!s)throw new Error("mockUserToken must contain 'sub' or 'user_id' field!");const r=Object.assign({iss:`https://securetoken.google.com/${n}`,aud:n,iat:i,exp:i+3600,auth_time:i,sub:s,user_id:s,firebase:{sign_in_provider:"custom",identities:{}}},e);return[ot(JSON.stringify({alg:"none",type:"JWT"})),ot(JSON.stringify(r)),""].join(".")}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function gt(){return"undefined"!=typeof navigator&&"string"==typeof navigator.userAgent?navigator.userAgent:""}function vt(){const e="object"==typeof chrome?chrome.runtime:"object"==typeof browser?browser.runtime:void 0;return"object"==typeof e&&void 0!==e.id}function yt(){const e=gt();return e.indexOf("MSIE ")>=0||e.indexOf("Trident/")>=0}function wt(){try{return"object"==typeof indexedDB}catch(e){return!1}}class bt extends Error{constructor(e,t,n){super(t),this.code=e,this.customData=n,this.name="FirebaseError",Object.setPrototypeOf(this,bt.prototype),Error.captureStackTrace&&Error.captureStackTrace(this,Et.prototype.create)}}class Et{constructor(e,t,n){this.service=e,this.serviceName=t,this.errors=n}create(e,...t){const n=t[0]||{},i=`${this.service}/${e}`,s=this.errors[e],r=s?function(e,t){return e.replace(Tt,((e,n)=>{const i=t[n];return null!=i?String(i):`<${n}?>`}))}(s,n):"Error",o=`${this.serviceName}: ${r} (${i}).`;return new bt(i,o,n)}}const Tt=/\{\$([^}]+)}/g;
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function St(e){for(const t in e)if(Object.prototype.hasOwnProperty.call(e,t))return!1;return!0}function It(e,t){if(e===t)return!0;const n=Object.keys(e),i=Object.keys(t);for(const s of n){if(!i.includes(s))return!1;const n=e[s],r=t[s];if(Ct(n)&&Ct(r)){if(!It(n,r))return!1}else if(n!==r)return!1}for(const e of i)if(!n.includes(e))return!1;return!0}function Ct(e){return null!==e&&"object"==typeof e}
/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
function _t(e){const t=[];for(const[n,i]of Object.entries(e))Array.isArray(i)?i.forEach((e=>{t.push(encodeURIComponent(n)+"="+encodeURIComponent(e))})):t.push(encodeURIComponent(n)+"="+encodeURIComponent(i));return t.length?"&"+t.join("&"):""}function kt(e){const t={};return e.replace(/^\?/,"").split("&").forEach((e=>{if(e){const[n,i]=e.split("=");t[decodeURIComponent(n)]=decodeURIComponent(i)}})),t}function At(e){const t=e.indexOf("?");if(!t)return"";const n=e.indexOf("#",t);return e.substring(t,n>0?n:void 0)}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function xt(e,t){const n=new Nt(e,t);return n.subscribe.bind(n)}class Nt{constructor(e,t){this.observers=[],this.unsubscribes=[],this.observerCount=0,this.task=Promise.resolve(),this.finalized=!1,this.onNoObservers=t,this.task.then((()=>{e(this)})).catch((e=>{this.error(e)}))}next(e){this.forEachObserver((t=>{t.next(e)}))}error(e){this.forEachObserver((t=>{t.error(e)})),this.close(e)}complete(){this.forEachObserver((e=>{e.complete()})),this.close()}subscribe(e,t,n){let i;if(void 0===e&&void 0===t&&void 0===n)throw new Error("Missing Observer.");i=function(e,t){if("object"!=typeof e||null===e)return!1;for(const n of t)if(n in e&&"function"==typeof e[n])return!0;return!1}(e,["next","error","complete"])?e:{next:e,error:t,complete:n},void 0===i.next&&(i.next=Dt),void 0===i.error&&(i.error=Dt),void 0===i.complete&&(i.complete=Dt);const s=this.unsubscribeOne.bind(this,this.observers.length);return this.finalized&&this.task.then((()=>{try{this.finalError?i.error(this.finalError):i.complete()}catch(e){}})),this.observers.push(i),s}unsubscribeOne(e){void 0!==this.observers&&void 0!==this.observers[e]&&(delete this.observers[e],this.observerCount-=1,0===this.observerCount&&void 0!==this.onNoObservers&&this.onNoObservers(this))}forEachObserver(e){if(!this.finalized)for(let t=0;t<this.observers.length;t++)this.sendOne(t,e)}sendOne(e,t){this.task.then((()=>{if(void 0!==this.observers&&void 0!==this.observers[e])try{t(this.observers[e])}catch(e){"undefined"!=typeof console&&console.error&&console.error(e)}}))}close(e){this.finalized||(this.finalized=!0,void 0!==e&&(this.finalError=e),this.task.then((()=>{this.observers=void 0,this.onNoObservers=void 0})))}}function Dt(){}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
function Lt(e){return e&&e._delegate?e._delegate:e}class Ot{constructor(e,t,n){this.name=e,this.instanceFactory=t,this.type=n,this.multipleInstances=!1,this.serviceProps={},this.instantiationMode="LAZY",this.onInstanceCreated=null}setInstantiationMode(e){return this.instantiationMode=e,this}setMultipleInstances(e){return this.multipleInstances=e,this}setServiceProps(e){return this.serviceProps=e,this}setInstanceCreatedCallback(e){return this.onInstanceCreated=e,this}}
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Mt="[DEFAULT]";
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Pt{constructor(e,t){this.name=e,this.container=t,this.component=null,this.instances=new Map,this.instancesDeferred=new Map,this.instancesOptions=new Map,this.onInitCallbacks=new Map}get(e){const t=this.normalizeInstanceIdentifier(e);if(!this.instancesDeferred.has(t)){const e=new ft;if(this.instancesDeferred.set(t,e),this.isInitialized(t)||this.shouldAutoInitialize())try{const n=this.getOrInitializeService({instanceIdentifier:t});n&&e.resolve(n)}catch(e){}}return this.instancesDeferred.get(t).promise}getImmediate(e){var t;const n=this.normalizeInstanceIdentifier(null==e?void 0:e.identifier),i=null!==(t=null==e?void 0:e.optional)&&void 0!==t&&t;if(!this.isInitialized(n)&&!this.shouldAutoInitialize()){if(i)return null;throw Error(`Service ${this.name} is not available`)}try{return this.getOrInitializeService({instanceIdentifier:n})}catch(e){if(i)return null;throw e}}getComponent(){return this.component}setComponent(e){if(e.name!==this.name)throw Error(`Mismatching Component ${e.name} for Provider ${this.name}.`);if(this.component)throw Error(`Component for ${this.name} has already been provided`);if(this.component=e,this.shouldAutoInitialize()){if(function(e){return"EAGER"===e.instantiationMode}
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */(e))try{this.getOrInitializeService({instanceIdentifier:Mt})}catch(e){}for(const[e,t]of this.instancesDeferred.entries()){const n=this.normalizeInstanceIdentifier(e);try{const e=this.getOrInitializeService({instanceIdentifier:n});t.resolve(e)}catch(e){}}}}clearInstance(e=Mt){this.instancesDeferred.delete(e),this.instancesOptions.delete(e),this.instances.delete(e)}async delete(){const e=Array.from(this.instances.values());await Promise.all([...e.filter((e=>"INTERNAL"in e)).map((e=>e.INTERNAL.delete())),...e.filter((e=>"_delete"in e)).map((e=>e._delete()))])}isComponentSet(){return null!=this.component}isInitialized(e=Mt){return this.instances.has(e)}getOptions(e=Mt){return this.instancesOptions.get(e)||{}}initialize(e={}){const{options:t={}}=e,n=this.normalizeInstanceIdentifier(e.instanceIdentifier);if(this.isInitialized(n))throw Error(`${this.name}(${n}) has already been initialized`);if(!this.isComponentSet())throw Error(`Component ${this.name} has not been registered yet`);const i=this.getOrInitializeService({instanceIdentifier:n,options:t});for(const[e,t]of this.instancesDeferred.entries()){n===this.normalizeInstanceIdentifier(e)&&t.resolve(i)}return i}onInit(e,t){var n;const i=this.normalizeInstanceIdentifier(t),s=null!==(n=this.onInitCallbacks.get(i))&&void 0!==n?n:new Set;s.add(e),this.onInitCallbacks.set(i,s);const r=this.instances.get(i);return r&&e(r,i),()=>{s.delete(e)}}invokeOnInitCallbacks(e,t){const n=this.onInitCallbacks.get(t);if(n)for(const i of n)try{i(e,t)}catch(e){}}getOrInitializeService({instanceIdentifier:e,options:t={}}){let n=this.instances.get(e);if(!n&&this.component&&(n=this.component.instanceFactory(this.container,{instanceIdentifier:(i=e,i===Mt?void 0:i),options:t}),this.instances.set(e,n),this.instancesOptions.set(e,t),this.invokeOnInitCallbacks(n,e),this.component.onInstanceCreated))try{this.component.onInstanceCreated(this.container,e,n)}catch(e){}var i;return n||null}normalizeInstanceIdentifier(e=Mt){return this.component?this.component.multipleInstances?e:Mt:e}shouldAutoInitialize(){return!!this.component&&"EXPLICIT"!==this.component.instantiationMode}}class Rt{constructor(e){this.name=e,this.providers=new Map}addComponent(e){const t=this.getProvider(e.name);if(t.isComponentSet())throw new Error(`Component ${e.name} has already been registered with ${this.name}`);t.setComponent(e)}addOrOverwriteComponent(e){this.getProvider(e.name).isComponentSet()&&this.providers.delete(e.name),this.addComponent(e)}getProvider(e){if(this.providers.has(e))return this.providers.get(e);const t=new Pt(e,this);return this.providers.set(e,t),t}getProviders(){return Array.from(this.providers.values())}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Ft=[];var Vt,Ut;(Ut=Vt||(Vt={}))[Ut.DEBUG=0]="DEBUG",Ut[Ut.VERBOSE=1]="VERBOSE",Ut[Ut.INFO=2]="INFO",Ut[Ut.WARN=3]="WARN",Ut[Ut.ERROR=4]="ERROR",Ut[Ut.SILENT=5]="SILENT";const zt={debug:Vt.DEBUG,verbose:Vt.VERBOSE,info:Vt.INFO,warn:Vt.WARN,error:Vt.ERROR,silent:Vt.SILENT},jt=Vt.INFO,Bt={[Vt.DEBUG]:"log",[Vt.VERBOSE]:"log",[Vt.INFO]:"info",[Vt.WARN]:"warn",[Vt.ERROR]:"error"},$t=(e,t,...n)=>{if(t<e.logLevel)return;const i=(new Date).toISOString(),s=Bt[t];if(!s)throw new Error(`Attempted to log a message with an invalid logType (value: ${t})`);console[s](`[${i}]  ${e.name}:`,...n)};class qt{constructor(e){this.name=e,this._logLevel=jt,this._logHandler=$t,this._userLogHandler=null,Ft.push(this)}get logLevel(){return this._logLevel}set logLevel(e){if(!(e in Vt))throw new TypeError(`Invalid value "${e}" assigned to \`logLevel\``);this._logLevel=e}setLogLevel(e){this._logLevel="string"==typeof e?zt[e]:e}get logHandler(){return this._logHandler}set logHandler(e){if("function"!=typeof e)throw new TypeError("Value assigned to `logHandler` must be a function");this._logHandler=e}get userLogHandler(){return this._userLogHandler}set userLogHandler(e){this._userLogHandler=e}debug(...e){this._userLogHandler&&this._userLogHandler(this,Vt.DEBUG,...e),this._logHandler(this,Vt.DEBUG,...e)}log(...e){this._userLogHandler&&this._userLogHandler(this,Vt.VERBOSE,...e),this._logHandler(this,Vt.VERBOSE,...e)}info(...e){this._userLogHandler&&this._userLogHandler(this,Vt.INFO,...e),this._logHandler(this,Vt.INFO,...e)}warn(...e){this._userLogHandler&&this._userLogHandler(this,Vt.WARN,...e),this._logHandler(this,Vt.WARN,...e)}error(...e){this._userLogHandler&&this._userLogHandler(this,Vt.ERROR,...e),this._logHandler(this,Vt.ERROR,...e)}}const Ht=(e,t)=>t.some((t=>e instanceof t));let Gt,Wt;const Kt=new WeakMap,Qt=new WeakMap,Xt=new WeakMap,Yt=new WeakMap,Jt=new WeakMap;let Zt={get(e,t,n){if(e instanceof IDBTransaction){if("done"===t)return Qt.get(e);if("objectStoreNames"===t)return e.objectStoreNames||Xt.get(e);if("store"===t)return n.objectStoreNames[1]?void 0:n.objectStore(n.objectStoreNames[0])}return nn(e[t])},set:(e,t,n)=>(e[t]=n,!0),has:(e,t)=>e instanceof IDBTransaction&&("done"===t||"store"===t)||t in e};function en(e){return e!==IDBDatabase.prototype.transaction||"objectStoreNames"in IDBTransaction.prototype?(Wt||(Wt=[IDBCursor.prototype.advance,IDBCursor.prototype.continue,IDBCursor.prototype.continuePrimaryKey])).includes(e)?function(...t){return e.apply(sn(this),t),nn(Kt.get(this))}:function(...t){return nn(e.apply(sn(this),t))}:function(t,...n){const i=e.call(sn(this),t,...n);return Xt.set(i,t.sort?t.sort():[t]),nn(i)}}function tn(e){return"function"==typeof e?en(e):(e instanceof IDBTransaction&&function(e){if(Qt.has(e))return;const t=new Promise(((t,n)=>{const i=()=>{e.removeEventListener("complete",s),e.removeEventListener("error",r),e.removeEventListener("abort",r)},s=()=>{t(),i()},r=()=>{n(e.error||new DOMException("AbortError","AbortError")),i()};e.addEventListener("complete",s),e.addEventListener("error",r),e.addEventListener("abort",r)}));Qt.set(e,t)}(e),Ht(e,Gt||(Gt=[IDBDatabase,IDBObjectStore,IDBIndex,IDBCursor,IDBTransaction]))?new Proxy(e,Zt):e)}function nn(e){if(e instanceof IDBRequest)return function(e){const t=new Promise(((t,n)=>{const i=()=>{e.removeEventListener("success",s),e.removeEventListener("error",r)},s=()=>{t(nn(e.result)),i()},r=()=>{n(e.error),i()};e.addEventListener("success",s),e.addEventListener("error",r)}));return t.then((t=>{t instanceof IDBCursor&&Kt.set(t,e)})).catch((()=>{})),Jt.set(t,e),t}(e);if(Yt.has(e))return Yt.get(e);const t=tn(e);return t!==e&&(Yt.set(e,t),Jt.set(t,e)),t}const sn=e=>Jt.get(e);function rn(e,t,{blocked:n,upgrade:i,blocking:s,terminated:r}={}){const o=indexedDB.open(e,t),a=nn(o);return i&&o.addEventListener("upgradeneeded",(e=>{i(nn(o.result),e.oldVersion,e.newVersion,nn(o.transaction),e)})),n&&o.addEventListener("blocked",(e=>n(e.oldVersion,e.newVersion,e))),a.then((e=>{r&&e.addEventListener("close",(()=>r())),s&&e.addEventListener("versionchange",(e=>s(e.oldVersion,e.newVersion,e)))})).catch((()=>{})),a}const on=["get","getKey","getAll","getAllKeys","count"],an=["put","add","delete","clear"],ln=new Map;function cn(e,t){if(!(e instanceof IDBDatabase)||t in e||"string"!=typeof t)return;if(ln.get(t))return ln.get(t);const n=t.replace(/FromIndex$/,""),i=t!==n,s=an.includes(n);if(!(n in(i?IDBIndex:IDBObjectStore).prototype)||!s&&!on.includes(n))return;const r=async function(e,...t){const r=this.transaction(e,s?"readwrite":"readonly");let o=r.store;return i&&(o=o.index(t.shift())),(await Promise.all([o[n](...t),s&&r.done]))[0]};return ln.set(t,r),r}Zt=(e=>({...e,get:(t,n,i)=>cn(t,n)||e.get(t,n,i),has:(t,n)=>!!cn(t,n)||e.has(t,n)}))(Zt);
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
class un{constructor(e){this.container=e}getPlatformInfoString(){return this.container.getProviders().map((e=>{if(function(e){const t=e.getComponent();return"VERSION"===(null==t?void 0:t.type)}(e)){const t=e.getImmediate();return`${t.library}/${t.version}`}return null})).filter((e=>e)).join(" ")}}const hn="@firebase/app",dn="0.9.10",pn=new qt("@firebase/app"),fn="[DEFAULT]",mn={[hn]:"fire-core","@firebase/app-compat":"fire-core-compat","@firebase/analytics":"fire-analytics","@firebase/analytics-compat":"fire-analytics-compat","@firebase/app-check":"fire-app-check","@firebase/app-check-compat":"fire-app-check-compat","@firebase/auth":"fire-auth","@firebase/auth-compat":"fire-auth-compat","@firebase/database":"fire-rtdb","@firebase/database-compat":"fire-rtdb-compat","@firebase/functions":"fire-fn","@firebase/functions-compat":"fire-fn-compat","@firebase/installations":"fire-iid","@firebase/installations-compat":"fire-iid-compat","@firebase/messaging":"fire-fcm","@firebase/messaging-compat":"fire-fcm-compat","@firebase/performance":"fire-perf","@firebase/performance-compat":"fire-perf-compat","@firebase/remote-config":"fire-rc","@firebase/remote-config-compat":"fire-rc-compat","@firebase/storage":"fire-gcs","@firebase/storage-compat":"fire-gcs-compat","@firebase/firestore":"fire-fst","@firebase/firestore-compat":"fire-fst-compat","fire-js":"fire-js",firebase:"fire-js-all"},gn=new Map,vn=new Map;function yn(e,t){try{e.container.addComponent(t)}catch(n){pn.debug(`Component ${t.name} failed to register with FirebaseApp ${e.name}`,n)}}function wn(e){const t=e.name;if(vn.has(t))return pn.debug(`There were multiple attempts to register component ${t}.`),!1;vn.set(t,e);for(const t of gn.values())yn(t,e);return!0}function bn(e,t){const n=e.container.getProvider("heartbeat").getImmediate({optional:!0});return n&&n.triggerHeartbeat(),e.container.getProvider(t)}
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
const En=new Et("app","Firebase",{"no-app":"No Firebase App '{$appName}' has been created - call initializeApp() first","bad-app-name":"Illegal App name: '{$appName}","duplicate-app":"Firebase App named '{$appName}' already exists with different options or config","app-deleted":"Firebase App named '{$appName}' already deleted","no-options":"Need to provide options, when not being deployed to hosting via source.","invalid-app-argument":"firebase.{$appName}() takes either no argument or a Firebase App instance.","invalid-log-argument":"First argument to `onLog` must be null or a function.","idb-open":"Error thrown when opening IndexedDB. Original error: {$originalErrorMessage}.","idb-get":"Error thrown when reading from IndexedDB. Original error: {$originalErrorMessage}.","idb-set":"Error thrown when writing to IndexedDB. Original error: {$originalErrorMessage}.","idb-delete":"Error thrown when deleting from IndexedDB. Original error: {$originalErrorMessage}."});
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
class Tn{constructor(e,t,n){this._isDeleted=!1,this._options=Object.assign({},e),this._config=Object.assign({},t),this._name=t.name,this._automaticDataCollectionEnabled=t.automaticDataCollectionEnabled,this._container=n,this.container.addComponent(new Ot("app",(()=>this),"PUBLIC"))}get automaticDataCollectionEnabled(){return this.checkDestroyed(),this._automaticDataCollectionEnabled}set automaticDataCollectionEnabled(e){this.checkDestroyed(),this._automaticDataCollectionEnabled=e}get name(){return this.checkDestroyed(),this._name}get options(){return this.checkDestroyed(),this._options}get config(){return this.checkDestroyed(),this._config}get container(){return this._container}get isDeleted(){return this._isDeleted}set isDeleted(e){this._isDeleted=e}checkDestroyed(){if(this.isDeleted)throw En.create("app-deleted",{appName:this._name})}}
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Sn="9.22.0";function In(e,t={}){let n=e;if("object"!=typeof t){t={name:t}}const i=Object.assign({name:fn,automaticDataCollectionEnabled:!1},t),s=i.name;if("string"!=typeof s||!s)throw En.create("bad-app-name",{appName:String(s)});if(n||(n=dt()),!n)throw En.create("no-options");const r=gn.get(s);if(r){if(It(n,r.options)&&It(i,r.config))return r;throw En.create("duplicate-app",{appName:s})}const o=new Rt(s);for(const e of vn.values())o.addComponent(e);const a=new Tn(n,i,o);return gn.set(s,a),a}function Cn(e=fn){const t=gn.get(e);if(!t&&e===fn&&dt())return In();if(!t)throw En.create("no-app",{appName:e});return t}function _n(e,t,n){var i;let s=null!==(i=mn[e])&&void 0!==i?i:e;n&&(s+=`-${n}`);const r=s.match(/\s|\//),o=t.match(/\s|\//);if(r||o){const e=[`Unable to register library "${s}" with version "${t}":`];return r&&e.push(`library name "${s}" contains illegal characters (whitespace or "/")`),r&&o&&e.push("and"),o&&e.push(`version name "${t}" contains illegal characters (whitespace or "/")`),void pn.warn(e.join(" "))}wn(new Ot(`${s}-version`,(()=>({library:s,version:t})),"VERSION"))}
/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
const kn="firebase-heartbeat-database",An=1,xn="firebase-heartbeat-store";let Nn=null;function Dn(){return Nn||(Nn=rn(kn,An,{upgrade:(e,t)=>{if(0===t)e.createObjectStore(xn)}}).catch((e=>{throw En.create("idb-open",{originalErrorMessage:e.message})}))),Nn}async function Ln(e,t){try{const n=(await Dn()).transaction(xn,"readwrite"),i=n.objectStore(xn);await i.put(t,On(e)),await n.done}catch(e){if(e instanceof bt)pn.warn(e.message);else{const t=En.create("idb-set",{originalErrorMessage:null==e?void 0:e.message});pn.warn(t.message)}}}function On(e){return`${e.name}!${e.options.appId}`}
/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Mn{constructor(e){this.container=e,this._heartbeatsCache=null;const t=this.container.getProvider("app").getImmediate();this._storage=new Rn(t),this._heartbeatsCachePromise=this._storage.read().then((e=>(this._heartbeatsCache=e,e)))}async triggerHeartbeat(){const e=this.container.getProvider("platform-logger").getImmediate().getPlatformInfoString(),t=Pn();if(null===this._heartbeatsCache&&(this._heartbeatsCache=await this._heartbeatsCachePromise),this._heartbeatsCache.lastSentHeartbeatDate!==t&&!this._heartbeatsCache.heartbeats.some((e=>e.date===t)))return this._heartbeatsCache.heartbeats.push({date:t,agent:e}),this._heartbeatsCache.heartbeats=this._heartbeatsCache.heartbeats.filter((e=>{const t=new Date(e.date).valueOf();return Date.now()-t<=2592e6})),this._storage.overwrite(this._heartbeatsCache)}async getHeartbeatsHeader(){if(null===this._heartbeatsCache&&await this._heartbeatsCachePromise,null===this._heartbeatsCache||0===this._heartbeatsCache.heartbeats.length)return"";const e=Pn(),{heartbeatsToSend:t,unsentEntries:n}=function(e,t=1024){const n=[];let i=e.slice();for(const s of e){const e=n.find((e=>e.agent===s.agent));if(e){if(e.dates.push(s.date),Fn(n)>t){e.dates.pop();break}}else if(n.push({agent:s.agent,dates:[s.date]}),Fn(n)>t){n.pop();break}i=i.slice(1)}return{heartbeatsToSend:n,unsentEntries:i}}(this._heartbeatsCache.heartbeats),i=ot(JSON.stringify({version:2,heartbeats:t}));return this._heartbeatsCache.lastSentHeartbeatDate=e,n.length>0?(this._heartbeatsCache.heartbeats=n,await this._storage.overwrite(this._heartbeatsCache)):(this._heartbeatsCache.heartbeats=[],this._storage.overwrite(this._heartbeatsCache)),i}}function Pn(){return(new Date).toISOString().substring(0,10)}class Rn{constructor(e){this.app=e,this._canUseIndexedDBPromise=this.runIndexedDBEnvironmentCheck()}async runIndexedDBEnvironmentCheck(){return!!wt()&&new Promise(((e,t)=>{try{let n=!0;const i="validate-browser-context-for-indexeddb-analytics-module",s=self.indexedDB.open(i);s.onsuccess=()=>{s.result.close(),n||self.indexedDB.deleteDatabase(i),e(!0)},s.onupgradeneeded=()=>{n=!1},s.onerror=()=>{var e;t((null===(e=s.error)||void 0===e?void 0:e.message)||"")}}catch(e){t(e)}})).then((()=>!0)).catch((()=>!1))}async read(){if(await this._canUseIndexedDBPromise){return await async function(e){try{const t=await Dn();return await t.transaction(xn).objectStore(xn).get(On(e))}catch(e){if(e instanceof bt)pn.warn(e.message);else{const t=En.create("idb-get",{originalErrorMessage:null==e?void 0:e.message});pn.warn(t.message)}}}(this.app)||{heartbeats:[]}}return{heartbeats:[]}}async overwrite(e){var t;if(await this._canUseIndexedDBPromise){const n=await this.read();return Ln(this.app,{lastSentHeartbeatDate:null!==(t=e.lastSentHeartbeatDate)&&void 0!==t?t:n.lastSentHeartbeatDate,heartbeats:e.heartbeats})}}async add(e){var t;if(await this._canUseIndexedDBPromise){const n=await this.read();return Ln(this.app,{lastSentHeartbeatDate:null!==(t=e.lastSentHeartbeatDate)&&void 0!==t?t:n.lastSentHeartbeatDate,heartbeats:[...n.heartbeats,...e.heartbeats]})}}}function Fn(e){return ot(JSON.stringify({version:2,heartbeats:e})).length}
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */var Vn;Vn="",wn(new Ot("platform-logger",(e=>new un(e)),"PRIVATE")),wn(new Ot("heartbeat",(e=>new Mn(e)),"PRIVATE")),_n(hn,dn,Vn),_n(hn,dn,"esm2017"),_n("fire-js","");
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
_n("firebase","9.22.0","app");var Un,zn="undefined"!=typeof globalThis?globalThis:"undefined"!=typeof window?window:void 0!==t?t:"undefined"!=typeof self?self:{},jn={},Bn=Bn||{},$n=zn||self;function qn(){}function Hn(e){var t=typeof e;return"array"==(t="object"!=t?t:e?Array.isArray(e)?"array":t:"null")||"object"==t&&"number"==typeof e.length}function Gn(e){var t=typeof e;return"object"==t&&null!=e||"function"==t}var Wn="closure_uid_"+(1e9*Math.random()>>>0),Kn=0;function Qn(e,t,n){return e.call.apply(e.bind,arguments)}function Xn(e,t,n){if(!e)throw Error();if(2<arguments.length){var i=Array.prototype.slice.call(arguments,2);return function(){var n=Array.prototype.slice.call(arguments);return Array.prototype.unshift.apply(n,i),e.apply(t,n)}}return function(){return e.apply(t,arguments)}}function Yn(e,t,n){return(Yn=Function.prototype.bind&&-1!=Function.prototype.bind.toString().indexOf("native code")?Qn:Xn).apply(null,arguments)}function Jn(e,t){var n=Array.prototype.slice.call(arguments,1);return function(){var t=n.slice();return t.push.apply(t,arguments),e.apply(this,t)}}function Zn(e,t){function n(){}n.prototype=t.prototype,e.$=t.prototype,e.prototype=new n,e.prototype.constructor=e,e.ac=function(e,n,i){for(var s=Array(arguments.length-2),r=2;r<arguments.length;r++)s[r-2]=arguments[r];return t.prototype[n].apply(e,s)}}function ei(){this.s=this.s,this.o=this.o}ei.prototype.s=!1,ei.prototype.ra=function(){var e;!this.s&&(this.s=!0,this.N(),0)&&(e=this,Object.prototype.hasOwnProperty.call(e,Wn)&&e[Wn]||(e[Wn]=++Kn))},ei.prototype.N=function(){if(this.o)for(;this.o.length;)this.o.shift()()};const ti=Array.prototype.indexOf?function(e,t){return Array.prototype.indexOf.call(e,t,void 0)}:function(e,t){if("string"==typeof e)return"string"!=typeof t||1!=t.length?-1:e.indexOf(t,0);for(let n=0;n<e.length;n++)if(n in e&&e[n]===t)return n;return-1};function ni(e){const t=e.length;if(0<t){const n=Array(t);for(let i=0;i<t;i++)n[i]=e[i];return n}return[]}function ii(e,t){for(let t=1;t<arguments.length;t++){const n=arguments[t];if(Hn(n)){const t=e.length||0,i=n.length||0;e.length=t+i;for(let s=0;s<i;s++)e[t+s]=n[s]}else e.push(n)}}function si(e,t){this.type=e,this.g=this.target=t,this.defaultPrevented=!1}si.prototype.h=function(){this.defaultPrevented=!0};var ri=function(){if(!$n.addEventListener||!Object.defineProperty)return!1;var e=!1,t=Object.defineProperty({},"passive",{get:function(){e=!0}});try{$n.addEventListener("test",qn,t),$n.removeEventListener("test",qn,t)}catch(e){}return e}();function oi(e){return/^[\s\xa0]*$/.test(e)}var ai=String.prototype.trim?function(e){return e.trim()}:function(e){return/^[\s\xa0]*([\s\S]*?)[\s\xa0]*$/.exec(e)[1]};function li(e,t){return e<t?-1:e>t?1:0}function ci(){var e=$n.navigator;return e&&(e=e.userAgent)?e:""}function ui(e){return-1!=ci().indexOf(e)}function hi(e){return hi[" "](e),e}function di(e,t,n){return Object.prototype.hasOwnProperty.call(e,t)?e[t]:e[t]=n(t)}hi[" "]=qn;var pi,fi,mi=ui("Opera"),gi=ui("Trident")||ui("MSIE"),vi=ui("Edge"),yi=vi||gi,wi=ui("Gecko")&&!(-1!=ci().toLowerCase().indexOf("webkit")&&!ui("Edge"))&&!(ui("Trident")||ui("MSIE"))&&!ui("Edge"),bi=-1!=ci().toLowerCase().indexOf("webkit")&&!ui("Edge");function Ei(){var e=$n.document;return e?e.documentMode:void 0}e:{var Ti="",Si=(fi=ci(),wi?/rv:([^\);]+)(\)|;)/.exec(fi):vi?/Edge\/([\d\.]+)/.exec(fi):gi?/\b(?:MSIE|rv)[: ]([^\);]+)(\)|;)/.exec(fi):bi?/WebKit\/(\S+)/.exec(fi):mi?/(?:Version)[ \/]?(\S+)/.exec(fi):void 0);if(Si&&(Ti=Si?Si[1]:""),gi){var Ii=Ei();if(null!=Ii&&Ii>parseFloat(Ti)){pi=String(Ii);break e}}pi=Ti}var Ci,_i={};if($n.document&&gi){var ki=Ei();Ci=ki||(parseInt(pi,10)||void 0)}else Ci=void 0;var Ai=Ci;function xi(e,t){if(si.call(this,e?e.type:""),this.relatedTarget=this.g=this.target=null,this.button=this.screenY=this.screenX=this.clientY=this.clientX=0,this.key="",this.metaKey=this.shiftKey=this.altKey=this.ctrlKey=!1,this.state=null,this.pointerId=0,this.pointerType="",this.i=null,e){var n=this.type=e.type,i=e.changedTouches&&e.changedTouches.length?e.changedTouches[0]:null;if(this.target=e.target||e.srcElement,this.g=t,t=e.relatedTarget){if(wi){e:{try{hi(t.nodeName);var s=!0;break e}catch(e){}s=!1}s||(t=null)}}else"mouseover"==n?t=e.fromElement:"mouseout"==n&&(t=e.toElement);this.relatedTarget=t,i?(this.clientX=void 0!==i.clientX?i.clientX:i.pageX,this.clientY=void 0!==i.clientY?i.clientY:i.pageY,this.screenX=i.screenX||0,this.screenY=i.screenY||0):(this.clientX=void 0!==e.clientX?e.clientX:e.pageX,this.clientY=void 0!==e.clientY?e.clientY:e.pageY,this.screenX=e.screenX||0,this.screenY=e.screenY||0),this.button=e.button,this.key=e.key||"",this.ctrlKey=e.ctrlKey,this.altKey=e.altKey,this.shiftKey=e.shiftKey,this.metaKey=e.metaKey,this.pointerId=e.pointerId||0,this.pointerType="string"==typeof e.pointerType?e.pointerType:Ni[e.pointerType]||"",this.state=e.state,this.i=e,e.defaultPrevented&&xi.$.h.call(this)}}Zn(xi,si);var Ni={2:"touch",3:"pen",4:"mouse"};xi.prototype.h=function(){xi.$.h.call(this);var e=this.i;e.preventDefault?e.preventDefault():e.returnValue=!1};var Di="closure_listenable_"+(1e6*Math.random()|0),Li=0;function Oi(e,t,n,i,s){this.listener=e,this.proxy=null,this.src=t,this.type=n,this.capture=!!i,this.la=s,this.key=++Li,this.fa=this.ia=!1}function Mi(e){e.fa=!0,e.listener=null,e.proxy=null,e.src=null,e.la=null}function Pi(e,t,n){for(const i in e)t.call(n,e[i],i,e)}function Ri(e){const t={};for(const n in e)t[n]=e[n];return t}const Fi="constructor hasOwnProperty isPrototypeOf propertyIsEnumerable toLocaleString toString valueOf".split(" ");function Vi(e,t){let n,i;for(let t=1;t<arguments.length;t++){for(n in i=arguments[t],i)e[n]=i[n];for(let t=0;t<Fi.length;t++)n=Fi[t],Object.prototype.hasOwnProperty.call(i,n)&&(e[n]=i[n])}}function Ui(e){this.src=e,this.g={},this.h=0}function zi(e,t){var n=t.type;if(n in e.g){var i,s=e.g[n],r=ti(s,t);(i=0<=r)&&Array.prototype.splice.call(s,r,1),i&&(Mi(t),0==e.g[n].length&&(delete e.g[n],e.h--))}}function ji(e,t,n,i){for(var s=0;s<e.length;++s){var r=e[s];if(!r.fa&&r.listener==t&&r.capture==!!n&&r.la==i)return s}return-1}Ui.prototype.add=function(e,t,n,i,s){var r=e.toString();(e=this.g[r])||(e=this.g[r]=[],this.h++);var o=ji(e,t,i,s);return-1<o?(t=e[o],n||(t.ia=!1)):((t=new Oi(t,this.src,r,!!i,s)).ia=n,e.push(t)),t};var Bi="closure_lm_"+(1e6*Math.random()|0),$i={};function qi(e,t,n,i,s){if(i&&i.once)return Gi(e,t,n,i,s);if(Array.isArray(t)){for(var r=0;r<t.length;r++)qi(e,t[r],n,i,s);return null}return n=Zi(n),e&&e[Di]?e.O(t,n,Gn(i)?!!i.capture:!!i,s):Hi(e,t,n,!1,i,s)}function Hi(e,t,n,i,s,r){if(!t)throw Error("Invalid event type");var o=Gn(s)?!!s.capture:!!s,a=Yi(e);if(a||(e[Bi]=a=new Ui(e)),(n=a.add(t,n,i,o,r)).proxy)return n;if(i=function(){function e(n){return t.call(e.src,e.listener,n)}const t=Xi;return e}(),n.proxy=i,i.src=e,i.listener=n,e.addEventListener)ri||(s=o),void 0===s&&(s=!1),e.addEventListener(t.toString(),i,s);else if(e.attachEvent)e.attachEvent(Qi(t.toString()),i);else{if(!e.addListener||!e.removeListener)throw Error("addEventListener and attachEvent are unavailable.");e.addListener(i)}return n}function Gi(e,t,n,i,s){if(Array.isArray(t)){for(var r=0;r<t.length;r++)Gi(e,t[r],n,i,s);return null}return n=Zi(n),e&&e[Di]?e.P(t,n,Gn(i)?!!i.capture:!!i,s):Hi(e,t,n,!0,i,s)}function Wi(e,t,n,i,s){if(Array.isArray(t))for(var r=0;r<t.length;r++)Wi(e,t[r],n,i,s);else i=Gn(i)?!!i.capture:!!i,n=Zi(n),e&&e[Di]?(e=e.i,(t=String(t).toString())in e.g&&(-1<(n=ji(r=e.g[t],n,i,s))&&(Mi(r[n]),Array.prototype.splice.call(r,n,1),0==r.length&&(delete e.g[t],e.h--)))):e&&(e=Yi(e))&&(t=e.g[t.toString()],e=-1,t&&(e=ji(t,n,i,s)),(n=-1<e?t[e]:null)&&Ki(n))}function Ki(e){if("number"!=typeof e&&e&&!e.fa){var t=e.src;if(t&&t[Di])zi(t.i,e);else{var n=e.type,i=e.proxy;t.removeEventListener?t.removeEventListener(n,i,e.capture):t.detachEvent?t.detachEvent(Qi(n),i):t.addListener&&t.removeListener&&t.removeListener(i),(n=Yi(t))?(zi(n,e),0==n.h&&(n.src=null,t[Bi]=null)):Mi(e)}}}function Qi(e){return e in $i?$i[e]:$i[e]="on"+e}function Xi(e,t){if(e.fa)e=!0;else{t=new xi(t,this);var n=e.listener,i=e.la||e.src;e.ia&&Ki(e),e=n.call(i,t)}return e}function Yi(e){return(e=e[Bi])instanceof Ui?e:null}var Ji="__closure_events_fn_"+(1e9*Math.random()>>>0);function Zi(e){return"function"==typeof e?e:(e[Ji]||(e[Ji]=function(t){return e.handleEvent(t)}),e[Ji])}function es(){ei.call(this),this.i=new Ui(this),this.S=this,this.J=null}function ts(e,t){var n,i=e.J;if(i)for(n=[];i;i=i.J)n.push(i);if(e=e.S,i=t.type||t,"string"==typeof t)t=new si(t,e);else if(t instanceof si)t.target=t.target||e;else{var s=t;Vi(t=new si(i,e),s)}if(s=!0,n)for(var r=n.length-1;0<=r;r--){var o=t.g=n[r];s=ns(o,i,!0,t)&&s}if(s=ns(o=t.g=e,i,!0,t)&&s,s=ns(o,i,!1,t)&&s,n)for(r=0;r<n.length;r++)s=ns(o=t.g=n[r],i,!1,t)&&s}function ns(e,t,n,i){if(!(t=e.i.g[String(t)]))return!0;t=t.concat();for(var s=!0,r=0;r<t.length;++r){var o=t[r];if(o&&!o.fa&&o.capture==n){var a=o.listener,l=o.la||o.src;o.ia&&zi(e.i,o),s=!1!==a.call(l,i)&&s}}return s&&!i.defaultPrevented}Zn(es,ei),es.prototype[Di]=!0,es.prototype.removeEventListener=function(e,t,n,i){Wi(this,e,t,n,i)},es.prototype.N=function(){if(es.$.N.call(this),this.i){var e,t=this.i;for(e in t.g){for(var n=t.g[e],i=0;i<n.length;i++)Mi(n[i]);delete t.g[e],t.h--}}this.J=null},es.prototype.O=function(e,t,n,i){return this.i.add(String(e),t,!1,n,i)},es.prototype.P=function(e,t,n,i){return this.i.add(String(e),t,!0,n,i)};var is=$n.JSON.stringify;function ss(){var e=hs;let t=null;return e.g&&(t=e.g,e.g=e.g.next,e.g||(e.h=null),t.next=null),t}var rs,os=new class{constructor(e,t){this.i=e,this.j=t,this.h=0,this.g=null}get(){let e;return 0<this.h?(this.h--,e=this.g,this.g=e.next,e.next=null):e=this.i(),e}}((()=>new as),(e=>e.reset()));class as{constructor(){this.next=this.g=this.h=null}set(e,t){this.h=e,this.g=t,this.next=null}reset(){this.next=this.g=this.h=null}}function ls(e){$n.setTimeout((()=>{throw e}),0)}function cs(e,t){rs||function(){var e=$n.Promise.resolve(void 0);rs=function(){e.then(ds)}}(),us||(rs(),us=!0),hs.add(e,t)}var us=!1,hs=new class{constructor(){this.h=this.g=null}add(e,t){const n=os.get();n.set(e,t),this.h?this.h.next=n:this.g=n,this.h=n}};function ds(){for(var e;e=ss();){try{e.h.call(e.g)}catch(e){ls(e)}var t=os;t.j(e),100>t.h&&(t.h++,e.next=t.g,t.g=e)}us=!1}function ps(e,t){es.call(this),this.h=e||1,this.g=t||$n,this.j=Yn(this.qb,this),this.l=Date.now()}function fs(e){e.ga=!1,e.T&&(e.g.clearTimeout(e.T),e.T=null)}function ms(e,t,n){if("function"==typeof e)n&&(e=Yn(e,n));else{if(!e||"function"!=typeof e.handleEvent)throw Error("Invalid listener argument");e=Yn(e.handleEvent,e)}return 2147483647<Number(t)?-1:$n.setTimeout(e,t||0)}function gs(e){e.g=ms((()=>{e.g=null,e.i&&(e.i=!1,gs(e))}),e.j);const t=e.h;e.h=null,e.m.apply(null,t)}Zn(ps,es),(Un=ps.prototype).ga=!1,Un.T=null,Un.qb=function(){if(this.ga){var e=Date.now()-this.l;0<e&&e<.8*this.h?this.T=this.g.setTimeout(this.j,this.h-e):(this.T&&(this.g.clearTimeout(this.T),this.T=null),ts(this,"tick"),this.ga&&(fs(this),this.start()))}},Un.start=function(){this.ga=!0,this.T||(this.T=this.g.setTimeout(this.j,this.h),this.l=Date.now())},Un.N=function(){ps.$.N.call(this),fs(this),delete this.g};class vs extends ei{constructor(e,t){super(),this.m=e,this.j=t,this.h=null,this.i=!1,this.g=null}l(e){this.h=arguments,this.g?this.i=!0:gs(this)}N(){super.N(),this.g&&($n.clearTimeout(this.g),this.g=null,this.i=!1,this.h=null)}}function ys(e){ei.call(this),this.h=e,this.g={}}Zn(ys,ei);var ws=[];function bs(e,t,n,i){Array.isArray(n)||(n&&(ws[0]=n.toString()),n=ws);for(var s=0;s<n.length;s++){var r=qi(t,n[s],i||e.handleEvent,!1,e.h||e);if(!r)break;e.g[r.key]=r}}function Es(e){Pi(e.g,(function(e,t){this.g.hasOwnProperty(t)&&Ki(e)}),e),e.g={}}function Ts(){this.g=!0}function Ss(e,t,n,i){e.info((function(){return"XMLHTTP TEXT ("+t+"): "+function(e,t){if(!e.g)return t;if(!t)return null;try{var n=JSON.parse(t);if(n)for(e=0;e<n.length;e++)if(Array.isArray(n[e])){var i=n[e];if(!(2>i.length)){var s=i[1];if(Array.isArray(s)&&!(1>s.length)){var r=s[0];if("noop"!=r&&"stop"!=r&&"close"!=r)for(var o=1;o<s.length;o++)s[o]=""}}}return is(n)}catch(e){return t}}(e,n)+(i?" "+i:"")}))}ys.prototype.N=function(){ys.$.N.call(this),Es(this)},ys.prototype.handleEvent=function(){throw Error("EventHandler.handleEvent not implemented")},Ts.prototype.Ea=function(){this.g=!1},Ts.prototype.info=function(){};var Is={},Cs=null;function _s(){return Cs=Cs||new es}function ks(e){si.call(this,Is.Ta,e)}function As(e){const t=_s();ts(t,new ks(t))}function xs(e,t){si.call(this,Is.STAT_EVENT,e),this.stat=t}function Ns(e){const t=_s();ts(t,new xs(t,e))}function Ds(e,t){si.call(this,Is.Ua,e),this.size=t}function Ls(e,t){if("function"!=typeof e)throw Error("Fn must not be null and must be a function");return $n.setTimeout((function(){e()}),t)}Is.Ta="serverreachability",Zn(ks,si),Is.STAT_EVENT="statevent",Zn(xs,si),Is.Ua="timingevent",Zn(Ds,si);var Os={NO_ERROR:0,rb:1,Eb:2,Db:3,yb:4,Cb:5,Fb:6,Qa:7,TIMEOUT:8,Ib:9},Ms={wb:"complete",Sb:"success",Ra:"error",Qa:"abort",Kb:"ready",Lb:"readystatechange",TIMEOUT:"timeout",Gb:"incrementaldata",Jb:"progress",zb:"downloadprogress",$b:"uploadprogress"};function Ps(){}function Rs(e){return e.h||(e.h=e.i())}function Fs(){}Ps.prototype.h=null;var Vs,Us={OPEN:"a",vb:"b",Ra:"c",Hb:"d"};function zs(){si.call(this,"d")}function js(){si.call(this,"c")}function Bs(){}function $s(e,t,n,i){this.l=e,this.j=t,this.m=n,this.W=i||1,this.U=new ys(this),this.P=Hs,e=yi?125:void 0,this.V=new ps(e),this.I=null,this.i=!1,this.s=this.A=this.v=this.L=this.G=this.Y=this.B=null,this.F=[],this.g=null,this.C=0,this.o=this.u=null,this.aa=-1,this.J=!1,this.O=0,this.M=null,this.ca=this.K=this.ba=this.S=!1,this.h=new qs}function qs(){this.i=null,this.g="",this.h=!1}Zn(zs,si),Zn(js,si),Zn(Bs,Ps),Bs.prototype.g=function(){return new XMLHttpRequest},Bs.prototype.i=function(){return{}},Vs=new Bs;var Hs=45e3,Gs={},Ws={};function Ks(e,t,n){e.L=1,e.v=pr(lr(t)),e.s=n,e.S=!0,Qs(e,null)}function Qs(e,t){e.G=Date.now(),Zs(e),e.A=lr(e.v);var n=e.A,i=e.W;Array.isArray(i)||(i=[String(i)]),_r(n.i,"t",i),e.C=0,n=e.l.I,e.h=new qs,e.g=_o(e.l,n?t:null,!e.s),0<e.O&&(e.M=new vs(Yn(e.Pa,e,e.g),e.O)),bs(e.U,e.g,"readystatechange",e.nb),t=e.I?Ri(e.I):{},e.s?(e.u||(e.u="POST"),t["Content-Type"]="application/x-www-form-urlencoded",e.g.ha(e.A,e.u,e.s,t)):(e.u="GET",e.g.ha(e.A,e.u,null,t)),As(),function(e,t,n,i,s,r){e.info((function(){if(e.g)if(r)for(var o="",a=r.split("&"),l=0;l<a.length;l++){var c=a[l].split("=");if(1<c.length){var u=c[0];c=c[1];var h=u.split("_");o=2<=h.length&&"type"==h[1]?o+(u+"=")+c+"&":o+(u+"=redacted&")}}else o=null;else o=r;return"XMLHTTP REQ ("+i+") [attempt "+s+"]: "+t+"\n"+n+"\n"+o}))}(e.j,e.u,e.A,e.m,e.W,e.s)}function Xs(e){return!!e.g&&("GET"==e.u&&2!=e.L&&e.l.Ha)}function Ys(e,t,n){let i,s=!0;for(;!e.J&&e.C<n.length;){if(i=Js(e,n),i==Ws){4==t&&(e.o=4,Ns(14),s=!1),Ss(e.j,e.m,null,"[Incomplete Response]");break}if(i==Gs){e.o=4,Ns(15),Ss(e.j,e.m,n,"[Invalid Chunk]"),s=!1;break}Ss(e.j,e.m,i,null),sr(e,i)}Xs(e)&&i!=Ws&&i!=Gs&&(e.h.g="",e.C=0),4!=t||0!=n.length||e.h.h||(e.o=1,Ns(16),s=!1),e.i=e.i&&s,s?0<n.length&&!e.ca&&(e.ca=!0,(t=e.l).g==e&&t.ca&&!t.L&&(t.j.info("Great, no buffering proxy detected. Bytes received: "+n.length),yo(t),t.L=!0,Ns(11))):(Ss(e.j,e.m,n,"[Invalid Chunked Response]"),ir(e),nr(e))}function Js(e,t){var n=e.C,i=t.indexOf("\n",n);return-1==i?Ws:(n=Number(t.substring(n,i)),isNaN(n)?Gs:(i+=1)+n>t.length?Ws:(t=t.substr(i,n),e.C=i+n,t))}function Zs(e){e.Y=Date.now()+e.P,er(e,e.P)}function er(e,t){if(null!=e.B)throw Error("WatchDog timer not null");e.B=Ls(Yn(e.lb,e),t)}function tr(e){e.B&&($n.clearTimeout(e.B),e.B=null)}function nr(e){0==e.l.H||e.J||Eo(e.l,e)}function ir(e){tr(e);var t=e.M;t&&"function"==typeof t.ra&&t.ra(),e.M=null,fs(e.V),Es(e.U),e.g&&(t=e.g,e.g=null,t.abort(),t.ra())}function sr(e,t){try{var n=e.l;if(0!=n.H&&(n.g==e||Lr(n.h,e)))if(!e.K&&Lr(n.h,e)&&3==n.H){try{var i=n.Ja.g.parse(t)}catch(e){i=null}if(Array.isArray(i)&&3==i.length){var s=i;if(0==s[0]){e:if(!n.u){if(n.g){if(!(n.g.G+3e3<e.G))break e;bo(n),co(n)}vo(n),Ns(18)}}else n.Fa=s[1],0<n.Fa-n.V&&37500>s[2]&&n.M&&0==n.A&&!n.v&&(n.v=Ls(Yn(n.ib,n),6e3));if(1>=Dr(n.h)&&n.na){try{n.na()}catch(e){}n.na=void 0}}else So(n,11)}else if((e.K||n.g==e)&&bo(n),!oi(t))for(s=n.Ja.g.parse(t),t=0;t<s.length;t++){let c=s[t];if(n.V=c[0],c=c[1],2==n.H)if("c"==c[0]){n.J=c[1],n.oa=c[2];const t=c[3];null!=t&&(n.qa=t,n.j.info("VER="+n.qa));const s=c[4];null!=s&&(n.Ga=s,n.j.info("SVER="+n.Ga));const u=c[5];null!=u&&"number"==typeof u&&0<u&&(i=1.5*u,n.K=i,n.j.info("backChannelRequestTimeoutMs_="+i)),i=n;const h=e.g;if(h){const e=h.g?h.g.getResponseHeader("X-Client-Wire-Protocol"):null;if(e){var r=i.h;r.g||-1==e.indexOf("spdy")&&-1==e.indexOf("quic")&&-1==e.indexOf("h2")||(r.j=r.l,r.g=new Set,r.h&&(Or(r,r.h),r.h=null))}if(i.F){const e=h.g?h.g.getResponseHeader("X-HTTP-Session-Id"):null;e&&(i.Da=e,dr(i.G,i.F,e))}}n.H=3,n.l&&n.l.Ba(),n.ca&&(n.S=Date.now()-e.G,n.j.info("Handshake RTT: "+n.S+"ms"));var o=e;if((i=n).wa=Co(i,i.I?i.oa:null,i.Y),o.K){Mr(i.h,o);var a=o,l=i.K;l&&a.setTimeout(l),a.B&&(tr(a),Zs(a)),i.g=o}else go(i);0<n.i.length&&ho(n)}else"stop"!=c[0]&&"close"!=c[0]||So(n,7);else 3==n.H&&("stop"==c[0]||"close"==c[0]?"stop"==c[0]?So(n,7):lo(n):"noop"!=c[0]&&n.l&&n.l.Aa(c),n.A=0)}As()}catch(e){}}function rr(e,t){if(e.forEach&&"function"==typeof e.forEach)e.forEach(t,void 0);else if(Hn(e)||"string"==typeof e)Array.prototype.forEach.call(e,t,void 0);else for(var n=function(e){if(e.sa&&"function"==typeof e.sa)return e.sa();if(!e.Z||"function"!=typeof e.Z){if("undefined"!=typeof Map&&e instanceof Map)return Array.from(e.keys());if(!("undefined"!=typeof Set&&e instanceof Set)){if(Hn(e)||"string"==typeof e){var t=[];e=e.length;for(var n=0;n<e;n++)t.push(n);return t}t=[],n=0;for(const i in e)t[n++]=i;return t}}}(e),i=function(e){if(e.Z&&"function"==typeof e.Z)return e.Z();if("undefined"!=typeof Map&&e instanceof Map||"undefined"!=typeof Set&&e instanceof Set)return Array.from(e.values());if("string"==typeof e)return e.split("");if(Hn(e)){for(var t=[],n=e.length,i=0;i<n;i++)t.push(e[i]);return t}for(i in t=[],n=0,e)t[n++]=e[i];return t}(e),s=i.length,r=0;r<s;r++)t.call(void 0,i[r],n&&n[r],e)}(Un=$s.prototype).setTimeout=function(e){this.P=e},Un.nb=function(e){e=e.target;const t=this.M;t&&3==no(e)?t.l():this.Pa(e)},Un.Pa=function(e){try{if(e==this.g)e:{const u=no(this.g);var t=this.g.Ia();this.g.da();if(!(3>u)&&(3!=u||yi||this.g&&(this.h.h||this.g.ja()||io(this.g)))){this.J||4!=u||7==t||As(),tr(this);var n=this.g.da();this.aa=n;t:if(Xs(this)){var i=io(this.g);e="";var s=i.length,r=4==no(this.g);if(!this.h.i){if("undefined"==typeof TextDecoder){ir(this),nr(this);var o="";break t}this.h.i=new $n.TextDecoder}for(t=0;t<s;t++)this.h.h=!0,e+=this.h.i.decode(i[t],{stream:r&&t==s-1});i.splice(0,s),this.h.g+=e,this.C=0,o=this.h.g}else o=this.g.ja();if(this.i=200==n,function(e,t,n,i,s,r,o){e.info((function(){return"XMLHTTP RESP ("+i+") [ attempt "+s+"]: "+t+"\n"+n+"\n"+r+" "+o}))}(this.j,this.u,this.A,this.m,this.W,u,n),this.i){if(this.ba&&!this.K){t:{if(this.g){var a,l=this.g;if((a=l.g?l.g.getResponseHeader("X-HTTP-Initial-Response"):null)&&!oi(a)){var c=a;break t}}c=null}if(!(n=c)){this.i=!1,this.o=3,Ns(12),ir(this),nr(this);break e}Ss(this.j,this.m,n,"Initial handshake response via X-HTTP-Initial-Response"),this.K=!0,sr(this,n)}this.S?(Ys(this,u,o),yi&&this.i&&3==u&&(bs(this.U,this.V,"tick",this.mb),this.V.start())):(Ss(this.j,this.m,o,null),sr(this,o)),4==u&&ir(this),this.i&&!this.J&&(4==u?Eo(this.l,this):(this.i=!1,Zs(this)))}else 400==n&&0<o.indexOf("Unknown SID")?(this.o=3,Ns(12)):(this.o=0,Ns(13)),ir(this),nr(this)}}}catch(e){}},Un.mb=function(){if(this.g){var e=no(this.g),t=this.g.ja();this.C<t.length&&(tr(this),Ys(this,e,t),this.i&&4!=e&&Zs(this))}},Un.cancel=function(){this.J=!0,ir(this)},Un.lb=function(){this.B=null;const e=Date.now();0<=e-this.Y?(function(e,t){e.info((function(){return"TIMEOUT: "+t}))}(this.j,this.A),2!=this.L&&(As(),Ns(17)),ir(this),this.o=2,nr(this)):er(this,this.Y-e)};var or=RegExp("^(?:([^:/?#.]+):)?(?://(?:([^\\\\/?#]*)@)?([^\\\\/?#]*?)(?::([0-9]+))?(?=[\\\\/?#]|$))?([^?#]+)?(?:\\?([^#]*))?(?:#([\\s\\S]*))?$");function ar(e,t){if(this.g=this.s=this.j="",this.m=null,this.o=this.l="",this.h=!1,e instanceof ar){this.h=void 0!==t?t:e.h,cr(this,e.j),this.s=e.s,this.g=e.g,ur(this,e.m),this.l=e.l,t=e.i;var n=new Tr;n.i=t.i,t.g&&(n.g=new Map(t.g),n.h=t.h),hr(this,n),this.o=e.o}else e&&(n=String(e).match(or))?(this.h=!!t,cr(this,n[1]||"",!0),this.s=fr(n[2]||""),this.g=fr(n[3]||"",!0),ur(this,n[4]),this.l=fr(n[5]||"",!0),hr(this,n[6]||"",!0),this.o=fr(n[7]||"")):(this.h=!!t,this.i=new Tr(null,this.h))}function lr(e){return new ar(e)}function cr(e,t,n){e.j=n?fr(t,!0):t,e.j&&(e.j=e.j.replace(/:$/,""))}function ur(e,t){if(t){if(t=Number(t),isNaN(t)||0>t)throw Error("Bad port number "+t);e.m=t}else e.m=null}function hr(e,t,n){t instanceof Tr?(e.i=t,function(e,t){t&&!e.j&&(Sr(e),e.i=null,e.g.forEach((function(e,t){var n=t.toLowerCase();t!=n&&(Ir(this,t),_r(this,n,e))}),e)),e.j=t}(e.i,e.h)):(n||(t=mr(t,br)),e.i=new Tr(t,e.h))}function dr(e,t,n){e.i.set(t,n)}function pr(e){return dr(e,"zx",Math.floor(2147483648*Math.random()).toString(36)+Math.abs(Math.floor(2147483648*Math.random())^Date.now()).toString(36)),e}function fr(e,t){return e?t?decodeURI(e.replace(/%25/g,"%2525")):decodeURIComponent(e):""}function mr(e,t,n){return"string"==typeof e?(e=encodeURI(e).replace(t,gr),n&&(e=e.replace(/%25([0-9a-fA-F]{2})/g,"%$1")),e):null}function gr(e){return"%"+((e=e.charCodeAt(0))>>4&15).toString(16)+(15&e).toString(16)}ar.prototype.toString=function(){var e=[],t=this.j;t&&e.push(mr(t,vr,!0),":");var n=this.g;return(n||"file"==t)&&(e.push("//"),(t=this.s)&&e.push(mr(t,vr,!0),"@"),e.push(encodeURIComponent(String(n)).replace(/%25([0-9a-fA-F]{2})/g,"%$1")),null!=(n=this.m)&&e.push(":",String(n))),(n=this.l)&&(this.g&&"/"!=n.charAt(0)&&e.push("/"),e.push(mr(n,"/"==n.charAt(0)?wr:yr,!0))),(n=this.i.toString())&&e.push("?",n),(n=this.o)&&e.push("#",mr(n,Er)),e.join("")};var vr=/[#\/\?@]/g,yr=/[#\?:]/g,wr=/[#\?]/g,br=/[#\?@]/g,Er=/#/g;function Tr(e,t){this.h=this.g=null,this.i=e||null,this.j=!!t}function Sr(e){e.g||(e.g=new Map,e.h=0,e.i&&function(e,t){if(e){e=e.split("&");for(var n=0;n<e.length;n++){var i=e[n].indexOf("="),s=null;if(0<=i){var r=e[n].substring(0,i);s=e[n].substring(i+1)}else r=e[n];t(r,s?decodeURIComponent(s.replace(/\+/g," ")):"")}}}(e.i,(function(t,n){e.add(decodeURIComponent(t.replace(/\+/g," ")),n)})))}function Ir(e,t){Sr(e),t=kr(e,t),e.g.has(t)&&(e.i=null,e.h-=e.g.get(t).length,e.g.delete(t))}function Cr(e,t){return Sr(e),t=kr(e,t),e.g.has(t)}function _r(e,t,n){Ir(e,t),0<n.length&&(e.i=null,e.g.set(kr(e,t),ni(n)),e.h+=n.length)}function kr(e,t){return t=String(t),e.j&&(t=t.toLowerCase()),t}(Un=Tr.prototype).add=function(e,t){Sr(this),this.i=null,e=kr(this,e);var n=this.g.get(e);return n||this.g.set(e,n=[]),n.push(t),this.h+=1,this},Un.forEach=function(e,t){Sr(this),this.g.forEach((function(n,i){n.forEach((function(n){e.call(t,n,i,this)}),this)}),this)},Un.sa=function(){Sr(this);const e=Array.from(this.g.values()),t=Array.from(this.g.keys()),n=[];for(let i=0;i<t.length;i++){const s=e[i];for(let e=0;e<s.length;e++)n.push(t[i])}return n},Un.Z=function(e){Sr(this);let t=[];if("string"==typeof e)Cr(this,e)&&(t=t.concat(this.g.get(kr(this,e))));else{e=Array.from(this.g.values());for(let n=0;n<e.length;n++)t=t.concat(e[n])}return t},Un.set=function(e,t){return Sr(this),this.i=null,Cr(this,e=kr(this,e))&&(this.h-=this.g.get(e).length),this.g.set(e,[t]),this.h+=1,this},Un.get=function(e,t){return e&&0<(e=this.Z(e)).length?String(e[0]):t},Un.toString=function(){if(this.i)return this.i;if(!this.g)return"";const e=[],t=Array.from(this.g.keys());for(var n=0;n<t.length;n++){var i=t[n];const r=encodeURIComponent(String(i)),o=this.Z(i);for(i=0;i<o.length;i++){var s=r;""!==o[i]&&(s+="="+encodeURIComponent(String(o[i]))),e.push(s)}}return this.i=e.join("&")};function Ar(e){this.l=e||xr,$n.PerformanceNavigationTiming?e=0<(e=$n.performance.getEntriesByType("navigation")).length&&("hq"==e[0].nextHopProtocol||"h2"==e[0].nextHopProtocol):e=!!($n.g&&$n.g.Ka&&$n.g.Ka()&&$n.g.Ka().ec),this.j=e?this.l:1,this.g=null,1<this.j&&(this.g=new Set),this.h=null,this.i=[]}var xr=10;function Nr(e){return!!e.h||!!e.g&&e.g.size>=e.j}function Dr(e){return e.h?1:e.g?e.g.size:0}function Lr(e,t){return e.h?e.h==t:!!e.g&&e.g.has(t)}function Or(e,t){e.g?e.g.add(t):e.h=t}function Mr(e,t){e.h&&e.h==t?e.h=null:e.g&&e.g.has(t)&&e.g.delete(t)}function Pr(e){if(null!=e.h)return e.i.concat(e.h.F);if(null!=e.g&&0!==e.g.size){let t=e.i;for(const n of e.g.values())t=t.concat(n.F);return t}return ni(e.i)}function Rr(){}function Fr(){this.g=new Rr}function Vr(e,t,n){const i=n||"";try{rr(e,(function(e,n){let s=e;Gn(e)&&(s=is(e)),t.push(i+n+"="+encodeURIComponent(s))}))}catch(e){throw t.push(i+"type="+encodeURIComponent("_badmap")),e}}function Ur(e,t,n,i,s){try{t.onload=null,t.onerror=null,t.onabort=null,t.ontimeout=null,s(i)}catch(e){}}function zr(e){this.l=e.fc||null,this.j=e.ob||!1}function jr(e,t){es.call(this),this.F=e,this.u=t,this.m=void 0,this.readyState=Br,this.status=0,this.responseType=this.responseText=this.response=this.statusText="",this.onreadystatechange=null,this.v=new Headers,this.h=null,this.C="GET",this.B="",this.g=!1,this.A=this.j=this.l=null}Ar.prototype.cancel=function(){if(this.i=Pr(this),this.h)this.h.cancel(),this.h=null;else if(this.g&&0!==this.g.size){for(const e of this.g.values())e.cancel();this.g.clear()}},Rr.prototype.stringify=function(e){return $n.JSON.stringify(e,void 0)},Rr.prototype.parse=function(e){return $n.JSON.parse(e,void 0)},Zn(zr,Ps),zr.prototype.g=function(){return new jr(this.l,this.j)},zr.prototype.i=function(e){return function(){return e}}({}),Zn(jr,es);var Br=0;function $r(e){e.j.read().then(e.Xa.bind(e)).catch(e.ka.bind(e))}function qr(e){e.readyState=4,e.l=null,e.j=null,e.A=null,Hr(e)}function Hr(e){e.onreadystatechange&&e.onreadystatechange.call(e)}(Un=jr.prototype).open=function(e,t){if(this.readyState!=Br)throw this.abort(),Error("Error reopening a connection");this.C=e,this.B=t,this.readyState=1,Hr(this)},Un.send=function(e){if(1!=this.readyState)throw this.abort(),Error("need to call open() first. ");this.g=!0;const t={headers:this.v,method:this.C,credentials:this.m,cache:void 0};e&&(t.body=e),(this.F||$n).fetch(new Request(this.B,t)).then(this.$a.bind(this),this.ka.bind(this))},Un.abort=function(){this.response=this.responseText="",this.v=new Headers,this.status=0,this.j&&this.j.cancel("Request was aborted.").catch((()=>{})),1<=this.readyState&&this.g&&4!=this.readyState&&(this.g=!1,qr(this)),this.readyState=Br},Un.$a=function(e){if(this.g&&(this.l=e,this.h||(this.status=this.l.status,this.statusText=this.l.statusText,this.h=e.headers,this.readyState=2,Hr(this)),this.g&&(this.readyState=3,Hr(this),this.g)))if("arraybuffer"===this.responseType)e.arrayBuffer().then(this.Ya.bind(this),this.ka.bind(this));else if(void 0!==$n.ReadableStream&&"body"in e){if(this.j=e.body.getReader(),this.u){if(this.responseType)throw Error('responseType must be empty for "streamBinaryChunks" mode responses.');this.response=[]}else this.response=this.responseText="",this.A=new TextDecoder;$r(this)}else e.text().then(this.Za.bind(this),this.ka.bind(this))},Un.Xa=function(e){if(this.g){if(this.u&&e.value)this.response.push(e.value);else if(!this.u){var t=e.value?e.value:new Uint8Array(0);(t=this.A.decode(t,{stream:!e.done}))&&(this.response=this.responseText+=t)}e.done?qr(this):Hr(this),3==this.readyState&&$r(this)}},Un.Za=function(e){this.g&&(this.response=this.responseText=e,qr(this))},Un.Ya=function(e){this.g&&(this.response=e,qr(this))},Un.ka=function(){this.g&&qr(this)},Un.setRequestHeader=function(e,t){this.v.append(e,t)},Un.getResponseHeader=function(e){return this.h&&this.h.get(e.toLowerCase())||""},Un.getAllResponseHeaders=function(){if(!this.h)return"";const e=[],t=this.h.entries();for(var n=t.next();!n.done;)n=n.value,e.push(n[0]+": "+n[1]),n=t.next();return e.join("\r\n")},Object.defineProperty(jr.prototype,"withCredentials",{get:function(){return"include"===this.m},set:function(e){this.m=e?"include":"same-origin"}});var Gr=$n.JSON.parse;function Wr(e){es.call(this),this.headers=new Map,this.u=e||null,this.h=!1,this.C=this.g=null,this.I="",this.m=0,this.j="",this.l=this.G=this.v=this.F=!1,this.B=0,this.A=null,this.K=Kr,this.L=this.M=!1}Zn(Wr,es);var Kr="",Qr=/^https?$/i,Xr=["POST","PUT"];function Yr(e,t){e.h=!1,e.g&&(e.l=!0,e.g.abort(),e.l=!1),e.j=t,e.m=5,Jr(e),eo(e)}function Jr(e){e.F||(e.F=!0,ts(e,"complete"),ts(e,"error"))}function Zr(e){if(e.h&&void 0!==Bn&&(!e.C[1]||4!=no(e)||2!=e.da()))if(e.v&&4==no(e))ms(e.La,0,e);else if(ts(e,"readystatechange"),4==no(e)){e.h=!1;try{const a=e.da();e:switch(a){case 200:case 201:case 202:case 204:case 206:case 304:case 1223:var t=!0;break e;default:t=!1}var n;if(!(n=t)){var i;if(i=0===a){var s=String(e.I).match(or)[1]||null;if(!s&&$n.self&&$n.self.location){var r=$n.self.location.protocol;s=r.substr(0,r.length-1)}i=!Qr.test(s?s.toLowerCase():"")}n=i}if(n)ts(e,"complete"),ts(e,"success");else{e.m=6;try{var o=2<no(e)?e.g.statusText:""}catch(e){o=""}e.j=o+" ["+e.da()+"]",Jr(e)}}finally{eo(e)}}}function eo(e,t){if(e.g){to(e);const n=e.g,i=e.C[0]?qn:null;e.g=null,e.C=null,t||ts(e,"ready");try{n.onreadystatechange=i}catch(e){}}}function to(e){e.g&&e.L&&(e.g.ontimeout=null),e.A&&($n.clearTimeout(e.A),e.A=null)}function no(e){return e.g?e.g.readyState:0}function io(e){try{if(!e.g)return null;if("response"in e.g)return e.g.response;switch(e.K){case Kr:case"text":return e.g.responseText;case"arraybuffer":if("mozResponseArrayBuffer"in e.g)return e.g.mozResponseArrayBuffer}return null}catch(e){return null}}function so(e){let t="";return Pi(e,(function(e,n){t+=n,t+=":",t+=e,t+="\r\n"})),t}function ro(e,t,n){e:{for(i in n){var i=!1;break e}i=!0}i||(n=so(n),"string"==typeof e?null!=n&&encodeURIComponent(String(n)):dr(e,t,n))}function oo(e,t,n){return n&&n.internalChannelParams&&n.internalChannelParams[e]||t}function ao(e){this.Ga=0,this.i=[],this.j=new Ts,this.oa=this.wa=this.G=this.Y=this.g=this.Da=this.F=this.ma=this.o=this.U=this.s=null,this.fb=this.W=0,this.cb=oo("failFast",!1,e),this.M=this.v=this.u=this.m=this.l=null,this.aa=!0,this.ta=this.Fa=this.V=-1,this.ba=this.A=this.C=0,this.ab=oo("baseRetryDelayMs",5e3,e),this.hb=oo("retryDelaySeedMs",1e4,e),this.eb=oo("forwardChannelMaxRetries",2,e),this.xa=oo("forwardChannelRequestTimeoutMs",2e4,e),this.va=e&&e.xmlHttpFactory||void 0,this.Ha=e&&e.dc||!1,this.K=void 0,this.I=e&&e.supportsCrossDomainXhr||!1,this.J="",this.h=new Ar(e&&e.concurrentRequestLimit),this.Ja=new Fr,this.P=e&&e.fastHandshake||!1,this.O=e&&e.encodeInitMessageHeaders||!1,this.P&&this.O&&(this.O=!1),this.bb=e&&e.bc||!1,e&&e.Ea&&this.j.Ea(),e&&e.forceLongPolling&&(this.aa=!1),this.ca=!this.P&&this.aa&&e&&e.detectBufferingProxy||!1,this.na=void 0,this.S=0,this.L=!1,this.pa=this.B=null}function lo(e){if(uo(e),3==e.H){var t=e.W++,n=lr(e.G);dr(n,"SID",e.J),dr(n,"RID",t),dr(n,"TYPE","terminate"),fo(e,n),(t=new $s(e,e.j,t,void 0)).L=2,t.v=pr(lr(n)),n=!1,$n.navigator&&$n.navigator.sendBeacon&&(n=$n.navigator.sendBeacon(t.v.toString(),"")),!n&&$n.Image&&((new Image).src=t.v,n=!0),n||(t.g=_o(t.l,null),t.g.ha(t.v)),t.G=Date.now(),Zs(t)}Io(e)}function co(e){e.g&&(yo(e),e.g.cancel(),e.g=null)}function uo(e){co(e),e.u&&($n.clearTimeout(e.u),e.u=null),bo(e),e.h.cancel(),e.m&&("number"==typeof e.m&&$n.clearTimeout(e.m),e.m=null)}function ho(e){Nr(e.h)||e.m||(e.m=!0,cs(e.Na,e),e.C=0)}function po(e,t){var n;n=t?t.m:e.W++;const i=lr(e.G);dr(i,"SID",e.J),dr(i,"RID",n),dr(i,"AID",e.V),fo(e,i),e.o&&e.s&&ro(i,e.o,e.s),n=new $s(e,e.j,n,e.C+1),null===e.o&&(n.I=e.s),t&&(e.i=t.F.concat(e.i)),t=mo(e,n,1e3),n.setTimeout(Math.round(.5*e.xa)+Math.round(.5*e.xa*Math.random())),Or(e.h,n),Ks(n,i,t)}function fo(e,t){e.ma&&Pi(e.ma,(function(e,n){dr(t,n,e)})),e.l&&rr({},(function(e,n){dr(t,n,e)}))}function mo(e,t,n){n=Math.min(e.i.length,n);var i=e.l?Yn(e.l.Va,e.l,e):null;e:{var s=e.i;let t=-1;for(;;){const e=["count="+n];-1==t?0<n?(t=s[0].h,e.push("ofs="+t)):t=0:e.push("ofs="+t);let r=!0;for(let o=0;o<n;o++){let n=s[o].h;const a=s[o].g;if(n-=t,0>n)t=Math.max(0,s[o].h-100),r=!1;else try{Vr(a,e,"req"+n+"_")}catch(e){i&&i(a)}}if(r){i=e.join("&");break e}}}return e=e.i.splice(0,n),t.F=e,i}function go(e){e.g||e.u||(e.ba=1,cs(e.Ma,e),e.A=0)}function vo(e){return!(e.g||e.u||3<=e.A)&&(e.ba++,e.u=Ls(Yn(e.Ma,e),To(e,e.A)),e.A++,!0)}function yo(e){null!=e.B&&($n.clearTimeout(e.B),e.B=null)}function wo(e){e.g=new $s(e,e.j,"rpc",e.ba),null===e.o&&(e.g.I=e.s),e.g.O=0;var t=lr(e.wa);dr(t,"RID","rpc"),dr(t,"SID",e.J),dr(t,"CI",e.M?"0":"1"),dr(t,"AID",e.V),dr(t,"TYPE","xmlhttp"),fo(e,t),e.o&&e.s&&ro(t,e.o,e.s),e.K&&e.g.setTimeout(e.K);var n=e.g;e=e.oa,n.L=1,n.v=pr(lr(t)),n.s=null,n.S=!0,Qs(n,e)}function bo(e){null!=e.v&&($n.clearTimeout(e.v),e.v=null)}function Eo(e,t){var n=null;if(e.g==t){bo(e),yo(e),e.g=null;var i=2}else{if(!Lr(e.h,t))return;n=t.F,Mr(e.h,t),i=1}if(0!=e.H)if(e.ta=t.aa,t.i)if(1==i){n=t.s?t.s.length:0,t=Date.now()-t.G;var s=e.C;ts(i=_s(),new Ds(i,n)),ho(e)}else go(e);else if(3==(s=t.o)||0==s&&0<e.ta||!(1==i&&function(e,t){return!(Dr(e.h)>=e.h.j-(e.m?1:0)||(e.m?(e.i=t.F.concat(e.i),0):1==e.H||2==e.H||e.C>=(e.cb?0:e.eb)||(e.m=Ls(Yn(e.Na,e,t),To(e,e.C)),e.C++,0)))}(e,t)||2==i&&vo(e)))switch(n&&0<n.length&&(t=e.h,t.i=t.i.concat(n)),s){case 1:So(e,5);break;case 4:So(e,10);break;case 3:So(e,6);break;default:So(e,2)}}function To(e,t){let n=e.ab+Math.floor(Math.random()*e.hb);return e.l||(n*=2),n*t}function So(e,t){if(e.j.info("Error code "+t),2==t){var n=null;e.l&&(n=null);var i=Yn(e.pb,e);n||(n=new ar("//www.google.com/images/cleardot.gif"),$n.location&&"http"==$n.location.protocol||cr(n,"https"),pr(n)),function(e,t){const n=new Ts;if($n.Image){const i=new Image;i.onload=Jn(Ur,n,i,"TestLoadImage: loaded",!0,t),i.onerror=Jn(Ur,n,i,"TestLoadImage: error",!1,t),i.onabort=Jn(Ur,n,i,"TestLoadImage: abort",!1,t),i.ontimeout=Jn(Ur,n,i,"TestLoadImage: timeout",!1,t),$n.setTimeout((function(){i.ontimeout&&i.ontimeout()}),1e4),i.src=e}else t(!1)}(n.toString(),i)}else Ns(2);e.H=0,e.l&&e.l.za(t),Io(e),uo(e)}function Io(e){if(e.H=0,e.pa=[],e.l){const t=Pr(e.h);0==t.length&&0==e.i.length||(ii(e.pa,t),ii(e.pa,e.i),e.h.i.length=0,ni(e.i),e.i.length=0),e.l.ya()}}function Co(e,t,n){var i=n instanceof ar?lr(n):new ar(n,void 0);if(""!=i.g)t&&(i.g=t+"."+i.g),ur(i,i.m);else{var s=$n.location;i=s.protocol,t=t?t+"."+s.hostname:s.hostname,s=+s.port;var r=new ar(null,void 0);i&&cr(r,i),t&&(r.g=t),s&&ur(r,s),n&&(r.l=n),i=r}return n=e.F,t=e.Da,n&&t&&dr(i,n,t),dr(i,"VER",e.qa),fo(e,i),i}function _o(e,t,n){if(t&&!e.I)throw Error("Can't create secondary domain capable XhrIo object.");return(t=n&&e.Ha&&!e.va?new Wr(new zr({ob:!0})):new Wr(e.va)).Oa(e.I),t}function ko(){}function Ao(){if(gi&&!(10<=Number(Ai)))throw Error("Environmental error: no available transport.")}function xo(e,t){es.call(this),this.g=new ao(t),this.l=e,this.h=t&&t.messageUrlParams||null,e=t&&t.messageHeaders||null,t&&t.clientProtocolHeaderRequired&&(e?e["X-Client-Protocol"]="webchannel":e={"X-Client-Protocol":"webchannel"}),this.g.s=e,e=t&&t.initMessageHeaders||null,t&&t.messageContentType&&(e?e["X-WebChannel-Content-Type"]=t.messageContentType:e={"X-WebChannel-Content-Type":t.messageContentType}),t&&t.Ca&&(e?e["X-WebChannel-Client-Profile"]=t.Ca:e={"X-WebChannel-Client-Profile":t.Ca}),this.g.U=e,(e=t&&t.cc)&&!oi(e)&&(this.g.o=e),this.A=t&&t.supportsCrossDomainXhr||!1,this.v=t&&t.sendRawJson||!1,(t=t&&t.httpSessionIdParam)&&!oi(t)&&(this.g.F=t,null!==(e=this.h)&&t in e&&(t in(e=this.h)&&delete e[t])),this.j=new Lo(this)}function No(e){zs.call(this);var t=e.__sm__;if(t){e:{for(const n in t){e=n;break e}e=void 0}(this.i=e)&&(e=this.i,t=null!==t&&e in t?t[e]:void 0),this.data=t}else this.data=e}function Do(){js.call(this),this.status=1}function Lo(e){this.g=e}function Oo(){this.blockSize=-1,this.blockSize=64,this.g=Array(4),this.m=Array(this.blockSize),this.i=this.h=0,this.reset()}function Mo(e,t,n){n||(n=0);var i=Array(16);if("string"==typeof t)for(var s=0;16>s;++s)i[s]=t.charCodeAt(n++)|t.charCodeAt(n++)<<8|t.charCodeAt(n++)<<16|t.charCodeAt(n++)<<24;else for(s=0;16>s;++s)i[s]=t[n++]|t[n++]<<8|t[n++]<<16|t[n++]<<24;t=e.g[0],n=e.g[1],s=e.g[2];var r=e.g[3],o=t+(r^n&(s^r))+i[0]+3614090360&4294967295;o=(n=(s=(r=(t=(n=(s=(r=(t=(n=(s=(r=(t=(n=(s=(r=(t=(n=(s=(r=(t=(n=(s=(r=(t=(n=(s=(r=(t=(n=(s=(r=(t=(n=(s=(r=(t=(n=(s=(r=(t=(n=(s=(r=(t=(n=(s=(r=(t=(n=(s=(r=(t=(n=(s=(r=(t=(n=(s=(r=(t=n+(o<<7&4294967295|o>>>25))+((o=r+(s^t&(n^s))+i[1]+3905402710&4294967295)<<12&4294967295|o>>>20))+((o=s+(n^r&(t^n))+i[2]+606105819&4294967295)<<17&4294967295|o>>>15))+((o=n+(t^s&(r^t))+i[3]+3250441966&4294967295)<<22&4294967295|o>>>10))+((o=t+(r^n&(s^r))+i[4]+4118548399&4294967295)<<7&4294967295|o>>>25))+((o=r+(s^t&(n^s))+i[5]+1200080426&4294967295)<<12&4294967295|o>>>20))+((o=s+(n^r&(t^n))+i[6]+2821735955&4294967295)<<17&4294967295|o>>>15))+((o=n+(t^s&(r^t))+i[7]+4249261313&4294967295)<<22&4294967295|o>>>10))+((o=t+(r^n&(s^r))+i[8]+1770035416&4294967295)<<7&4294967295|o>>>25))+((o=r+(s^t&(n^s))+i[9]+2336552879&4294967295)<<12&4294967295|o>>>20))+((o=s+(n^r&(t^n))+i[10]+4294925233&4294967295)<<17&4294967295|o>>>15))+((o=n+(t^s&(r^t))+i[11]+2304563134&4294967295)<<22&4294967295|o>>>10))+((o=t+(r^n&(s^r))+i[12]+1804603682&4294967295)<<7&4294967295|o>>>25))+((o=r+(s^t&(n^s))+i[13]+4254626195&4294967295)<<12&4294967295|o>>>20))+((o=s+(n^r&(t^n))+i[14]+2792965006&4294967295)<<17&4294967295|o>>>15))+((o=n+(t^s&(r^t))+i[15]+1236535329&4294967295)<<22&4294967295|o>>>10))+((o=t+(s^r&(n^s))+i[1]+4129170786&4294967295)<<5&4294967295|o>>>27))+((o=r+(n^s&(t^n))+i[6]+3225465664&4294967295)<<9&4294967295|o>>>23))+((o=s+(t^n&(r^t))+i[11]+643717713&4294967295)<<14&4294967295|o>>>18))+((o=n+(r^t&(s^r))+i[0]+3921069994&4294967295)<<20&4294967295|o>>>12))+((o=t+(s^r&(n^s))+i[5]+3593408605&4294967295)<<5&4294967295|o>>>27))+((o=r+(n^s&(t^n))+i[10]+38016083&4294967295)<<9&4294967295|o>>>23))+((o=s+(t^n&(r^t))+i[15]+3634488961&4294967295)<<14&4294967295|o>>>18))+((o=n+(r^t&(s^r))+i[4]+3889429448&4294967295)<<20&4294967295|o>>>12))+((o=t+(s^r&(n^s))+i[9]+568446438&4294967295)<<5&4294967295|o>>>27))+((o=r+(n^s&(t^n))+i[14]+3275163606&4294967295)<<9&4294967295|o>>>23))+((o=s+(t^n&(r^t))+i[3]+4107603335&4294967295)<<14&4294967295|o>>>18))+((o=n+(r^t&(s^r))+i[8]+1163531501&4294967295)<<20&4294967295|o>>>12))+((o=t+(s^r&(n^s))+i[13]+2850285829&4294967295)<<5&4294967295|o>>>27))+((o=r+(n^s&(t^n))+i[2]+4243563512&4294967295)<<9&4294967295|o>>>23))+((o=s+(t^n&(r^t))+i[7]+1735328473&4294967295)<<14&4294967295|o>>>18))+((o=n+(r^t&(s^r))+i[12]+2368359562&4294967295)<<20&4294967295|o>>>12))+((o=t+(n^s^r)+i[5]+4294588738&4294967295)<<4&4294967295|o>>>28))+((o=r+(t^n^s)+i[8]+2272392833&4294967295)<<11&4294967295|o>>>21))+((o=s+(r^t^n)+i[11]+1839030562&4294967295)<<16&4294967295|o>>>16))+((o=n+(s^r^t)+i[14]+4259657740&4294967295)<<23&4294967295|o>>>9))+((o=t+(n^s^r)+i[1]+2763975236&4294967295)<<4&4294967295|o>>>28))+((o=r+(t^n^s)+i[4]+1272893353&4294967295)<<11&4294967295|o>>>21))+((o=s+(r^t^n)+i[7]+4139469664&4294967295)<<16&4294967295|o>>>16))+((o=n+(s^r^t)+i[10]+3200236656&4294967295)<<23&4294967295|o>>>9))+((o=t+(n^s^r)+i[13]+681279174&4294967295)<<4&4294967295|o>>>28))+((o=r+(t^n^s)+i[0]+3936430074&4294967295)<<11&4294967295|o>>>21))+((o=s+(r^t^n)+i[3]+3572445317&4294967295)<<16&4294967295|o>>>16))+((o=n+(s^r^t)+i[6]+76029189&4294967295)<<23&4294967295|o>>>9))+((o=t+(n^s^r)+i[9]+3654602809&4294967295)<<4&4294967295|o>>>28))+((o=r+(t^n^s)+i[12]+3873151461&4294967295)<<11&4294967295|o>>>21))+((o=s+(r^t^n)+i[15]+530742520&4294967295)<<16&4294967295|o>>>16))+((o=n+(s^r^t)+i[2]+3299628645&4294967295)<<23&4294967295|o>>>9))+((o=t+(s^(n|~r))+i[0]+4096336452&4294967295)<<6&4294967295|o>>>26))+((o=r+(n^(t|~s))+i[7]+1126891415&4294967295)<<10&4294967295|o>>>22))+((o=s+(t^(r|~n))+i[14]+2878612391&4294967295)<<15&4294967295|o>>>17))+((o=n+(r^(s|~t))+i[5]+4237533241&4294967295)<<21&4294967295|o>>>11))+((o=t+(s^(n|~r))+i[12]+1700485571&4294967295)<<6&4294967295|o>>>26))+((o=r+(n^(t|~s))+i[3]+2399980690&4294967295)<<10&4294967295|o>>>22))+((o=s+(t^(r|~n))+i[10]+4293915773&4294967295)<<15&4294967295|o>>>17))+((o=n+(r^(s|~t))+i[1]+2240044497&4294967295)<<21&4294967295|o>>>11))+((o=t+(s^(n|~r))+i[8]+1873313359&4294967295)<<6&4294967295|o>>>26))+((o=r+(n^(t|~s))+i[15]+4264355552&4294967295)<<10&4294967295|o>>>22))+((o=s+(t^(r|~n))+i[6]+2734768916&4294967295)<<15&4294967295|o>>>17))+((o=n+(r^(s|~t))+i[13]+1309151649&4294967295)<<21&4294967295|o>>>11))+((r=(t=n+((o=t+(s^(n|~r))+i[4]+4149444226&4294967295)<<6&4294967295|o>>>26))+((o=r+(n^(t|~s))+i[11]+3174756917&4294967295)<<10&4294967295|o>>>22))^((s=r+((o=s+(t^(r|~n))+i[2]+718787259&4294967295)<<15&4294967295|o>>>17))|~t))+i[9]+3951481745&4294967295,e.g[0]=e.g[0]+t&4294967295,e.g[1]=e.g[1]+(s+(o<<21&4294967295|o>>>11))&4294967295,e.g[2]=e.g[2]+s&4294967295,e.g[3]=e.g[3]+r&4294967295}function Po(e,t){this.h=t;for(var n=[],i=!0,s=e.length-1;0<=s;s--){var r=0|e[s];i&&r==t||(n[s]=r,i=!1)}this.g=n}(Un=Wr.prototype).Oa=function(e){this.M=e},Un.ha=function(e,t,n,i){if(this.g)throw Error("[goog.net.XhrIo] Object is active with another request="+this.I+"; newUri="+e);t=t?t.toUpperCase():"GET",this.I=e,this.j="",this.m=0,this.F=!1,this.h=!0,this.g=this.u?this.u.g():Vs.g(),this.C=this.u?Rs(this.u):Rs(Vs),this.g.onreadystatechange=Yn(this.La,this);try{this.G=!0,this.g.open(t,String(e),!0),this.G=!1}catch(e){return void Yr(this,e)}if(e=n||"",n=new Map(this.headers),i)if(Object.getPrototypeOf(i)===Object.prototype)for(var s in i)n.set(s,i[s]);else{if("function"!=typeof i.keys||"function"!=typeof i.get)throw Error("Unknown input type for opt_headers: "+String(i));for(const e of i.keys())n.set(e,i.get(e))}i=Array.from(n.keys()).find((e=>"content-type"==e.toLowerCase())),s=$n.FormData&&e instanceof $n.FormData,!(0<=ti(Xr,t))||i||s||n.set("Content-Type","application/x-www-form-urlencoded;charset=utf-8");for(const[e,t]of n)this.g.setRequestHeader(e,t);this.K&&(this.g.responseType=this.K),"withCredentials"in this.g&&this.g.withCredentials!==this.M&&(this.g.withCredentials=this.M);try{to(this),0<this.B&&((this.L=function(e){return gi&&di(_i,9,(function(){let e=0;const t=ai(String(pi)).split("."),n=ai("9").split("."),i=Math.max(t.length,n.length);for(let o=0;0==e&&o<i;o++){var s=t[o]||"",r=n[o]||"";do{if(s=/(\d*)(\D*)(.*)/.exec(s)||["","","",""],r=/(\d*)(\D*)(.*)/.exec(r)||["","","",""],0==s[0].length&&0==r[0].length)break;e=li(0==s[1].length?0:parseInt(s[1],10),0==r[1].length?0:parseInt(r[1],10))||li(0==s[2].length,0==r[2].length)||li(s[2],r[2]),s=s[3],r=r[3]}while(0==e)}return 0<=e}))&&"number"==typeof e.timeout&&void 0!==e.ontimeout}(this.g))?(this.g.timeout=this.B,this.g.ontimeout=Yn(this.ua,this)):this.A=ms(this.ua,this.B,this)),this.v=!0,this.g.send(e),this.v=!1}catch(e){Yr(this,e)}},Un.ua=function(){void 0!==Bn&&this.g&&(this.j="Timed out after "+this.B+"ms, aborting",this.m=8,ts(this,"timeout"),this.abort(8))},Un.abort=function(e){this.g&&this.h&&(this.h=!1,this.l=!0,this.g.abort(),this.l=!1,this.m=e||7,ts(this,"complete"),ts(this,"abort"),eo(this))},Un.N=function(){this.g&&(this.h&&(this.h=!1,this.l=!0,this.g.abort(),this.l=!1),eo(this,!0)),Wr.$.N.call(this)},Un.La=function(){this.s||(this.G||this.v||this.l?Zr(this):this.kb())},Un.kb=function(){Zr(this)},Un.da=function(){try{return 2<no(this)?this.g.status:-1}catch(e){return-1}},Un.ja=function(){try{return this.g?this.g.responseText:""}catch(e){return""}},Un.Wa=function(e){if(this.g){var t=this.g.responseText;return e&&0==t.indexOf(e)&&(t=t.substring(e.length)),Gr(t)}},Un.Ia=function(){return this.m},Un.Sa=function(){return"string"==typeof this.j?this.j:String(this.j)},(Un=ao.prototype).qa=8,Un.H=1,Un.Na=function(e){if(this.m)if(this.m=null,1==this.H){if(!e){this.W=Math.floor(1e5*Math.random()),e=this.W++;const s=new $s(this,this.j,e,void 0);let r=this.s;if(this.U&&(r?(r=Ri(r),Vi(r,this.U)):r=this.U),null!==this.o||this.O||(s.I=r,r=null),this.P)e:{for(var t=0,n=0;n<this.i.length;n++){var i=this.i[n];if(void 0===(i="__data__"in i.g&&"string"==typeof(i=i.g.__data__)?i.length:void 0))break;if(4096<(t+=i)){t=n;break e}if(4096===t||n===this.i.length-1){t=n+1;break e}}t=1e3}else t=1e3;t=mo(this,s,t),dr(n=lr(this.G),"RID",e),dr(n,"CVER",22),this.F&&dr(n,"X-HTTP-Session-Id",this.F),fo(this,n),r&&(this.O?t="headers="+encodeURIComponent(String(so(r)))+"&"+t:this.o&&ro(n,this.o,r)),Or(this.h,s),this.bb&&dr(n,"TYPE","init"),this.P?(dr(n,"$req",t),dr(n,"SID","null"),s.ba=!0,Ks(s,n,null)):Ks(s,n,t),this.H=2}}else 3==this.H&&(e?po(this,e):0==this.i.length||Nr(this.h)||po(this))},Un.Ma=function(){if(this.u=null,wo(this),this.ca&&!(this.L||null==this.g||0>=this.S)){var e=2*this.S;this.j.info("BP detection timer enabled: "+e),this.B=Ls(Yn(this.jb,this),e)}},Un.jb=function(){this.B&&(this.B=null,this.j.info("BP detection timeout reached."),this.j.info("Buffering proxy detected and switch to long-polling!"),this.M=!1,this.L=!0,Ns(10),co(this),wo(this))},Un.ib=function(){null!=this.v&&(this.v=null,co(this),vo(this),Ns(19))},Un.pb=function(e){e?(this.j.info("Successfully pinged google.com"),Ns(2)):(this.j.info("Failed to ping google.com"),Ns(1))},(Un=ko.prototype).Ba=function(){},Un.Aa=function(){},Un.za=function(){},Un.ya=function(){},Un.Va=function(){},Ao.prototype.g=function(e,t){return new xo(e,t)},Zn(xo,es),xo.prototype.m=function(){this.g.l=this.j,this.A&&(this.g.I=!0);var e=this.g,t=this.l,n=this.h||void 0;Ns(0),e.Y=t,e.ma=n||{},e.M=e.aa,e.G=Co(e,null,e.Y),ho(e)},xo.prototype.close=function(){lo(this.g)},xo.prototype.u=function(e){var t=this.g;if("string"==typeof e){var n={};n.__data__=e,e=n}else this.v&&((n={}).__data__=is(e),e=n);t.i.push(new class{constructor(e,t){this.h=e,this.g=t}}(t.fb++,e)),3==t.H&&ho(t)},xo.prototype.N=function(){this.g.l=null,delete this.j,lo(this.g),delete this.g,xo.$.N.call(this)},Zn(No,zs),Zn(Do,js),Zn(Lo,ko),Lo.prototype.Ba=function(){ts(this.g,"a")},Lo.prototype.Aa=function(e){ts(this.g,new No(e))},Lo.prototype.za=function(e){ts(this.g,new Do)},Lo.prototype.ya=function(){ts(this.g,"b")},Zn(Oo,(function(){this.blockSize=-1})),Oo.prototype.reset=function(){this.g[0]=1732584193,this.g[1]=4023233417,this.g[2]=2562383102,this.g[3]=271733878,this.i=this.h=0},Oo.prototype.j=function(e,t){void 0===t&&(t=e.length);for(var n=t-this.blockSize,i=this.m,s=this.h,r=0;r<t;){if(0==s)for(;r<=n;)Mo(this,e,r),r+=this.blockSize;if("string"==typeof e){for(;r<t;)if(i[s++]=e.charCodeAt(r++),s==this.blockSize){Mo(this,i),s=0;break}}else for(;r<t;)if(i[s++]=e[r++],s==this.blockSize){Mo(this,i),s=0;break}}this.h=s,this.i+=t},Oo.prototype.l=function(){var e=Array((56>this.h?this.blockSize:2*this.blockSize)-this.h);e[0]=128;for(var t=1;t<e.length-8;++t)e[t]=0;var n=8*this.i;for(t=e.length-8;t<e.length;++t)e[t]=255&n,n/=256;for(this.j(e),e=Array(16),t=n=0;4>t;++t)for(var i=0;32>i;i+=8)e[n++]=this.g[t]>>>i&255;return e};var Ro={};function Fo(e){return-128<=e&&128>e?di(Ro,e,(function(e){return new Po([0|e],0>e?-1:0)})):new Po([0|e],0>e?-1:0)}function Vo(e){if(isNaN(e)||!isFinite(e))return zo;if(0>e)return Ho(Vo(-e));for(var t=[],n=1,i=0;e>=n;i++)t[i]=e/n|0,n*=Uo;return new Po(t,0)}var Uo=4294967296,zo=Fo(0),jo=Fo(1),Bo=Fo(16777216);function $o(e){if(0!=e.h)return!1;for(var t=0;t<e.g.length;t++)if(0!=e.g[t])return!1;return!0}function qo(e){return-1==e.h}function Ho(e){for(var t=e.g.length,n=[],i=0;i<t;i++)n[i]=~e.g[i];return new Po(n,~e.h).add(jo)}function Go(e,t){return e.add(Ho(t))}function Wo(e,t){for(;(65535&e[t])!=e[t];)e[t+1]+=e[t]>>>16,e[t]&=65535,t++}function Ko(e,t){this.g=e,this.h=t}function Qo(e,t){if($o(t))throw Error("division by zero");if($o(e))return new Ko(zo,zo);if(qo(e))return t=Qo(Ho(e),t),new Ko(Ho(t.g),Ho(t.h));if(qo(t))return t=Qo(e,Ho(t)),new Ko(Ho(t.g),t.h);if(30<e.g.length){if(qo(e)||qo(t))throw Error("slowDivide_ only works with positive integers.");for(var n=jo,i=t;0>=i.X(e);)n=Xo(n),i=Xo(i);var s=Yo(n,1),r=Yo(i,1);for(i=Yo(i,2),n=Yo(n,2);!$o(i);){var o=r.add(i);0>=o.X(e)&&(s=s.add(n),r=o),i=Yo(i,1),n=Yo(n,1)}return t=Go(e,s.R(t)),new Ko(s,t)}for(s=zo;0<=e.X(t);){for(n=Math.max(1,Math.floor(e.ea()/t.ea())),i=48>=(i=Math.ceil(Math.log(n)/Math.LN2))?1:Math.pow(2,i-48),o=(r=Vo(n)).R(t);qo(o)||0<o.X(e);)o=(r=Vo(n-=i)).R(t);$o(r)&&(r=jo),s=s.add(r),e=Go(e,o)}return new Ko(s,e)}function Xo(e){for(var t=e.g.length+1,n=[],i=0;i<t;i++)n[i]=e.D(i)<<1|e.D(i-1)>>>31;return new Po(n,e.h)}function Yo(e,t){var n=t>>5;t%=32;for(var i=e.g.length-n,s=[],r=0;r<i;r++)s[r]=0<t?e.D(r+n)>>>t|e.D(r+n+1)<<32-t:e.D(r+n);return new Po(s,e.h)}(Un=Po.prototype).ea=function(){if(qo(this))return-Ho(this).ea();for(var e=0,t=1,n=0;n<this.g.length;n++){var i=this.D(n);e+=(0<=i?i:Uo+i)*t,t*=Uo}return e},Un.toString=function(e){if(2>(e=e||10)||36<e)throw Error("radix out of range: "+e);if($o(this))return"0";if(qo(this))return"-"+Ho(this).toString(e);for(var t=Vo(Math.pow(e,6)),n=this,i="";;){var s=Qo(n,t).g,r=((0<(n=Go(n,s.R(t))).g.length?n.g[0]:n.h)>>>0).toString(e);if($o(n=s))return r+i;for(;6>r.length;)r="0"+r;i=r+i}},Un.D=function(e){return 0>e?0:e<this.g.length?this.g[e]:this.h},Un.X=function(e){return qo(e=Go(this,e))?-1:$o(e)?0:1},Un.abs=function(){return qo(this)?Ho(this):this},Un.add=function(e){for(var t=Math.max(this.g.length,e.g.length),n=[],i=0,s=0;s<=t;s++){var r=i+(65535&this.D(s))+(65535&e.D(s)),o=(r>>>16)+(this.D(s)>>>16)+(e.D(s)>>>16);i=o>>>16,r&=65535,o&=65535,n[s]=o<<16|r}return new Po(n,-2147483648&n[n.length-1]?-1:0)},Un.R=function(e){if($o(this)||$o(e))return zo;if(qo(this))return qo(e)?Ho(this).R(Ho(e)):Ho(Ho(this).R(e));if(qo(e))return Ho(this.R(Ho(e)));if(0>this.X(Bo)&&0>e.X(Bo))return Vo(this.ea()*e.ea());for(var t=this.g.length+e.g.length,n=[],i=0;i<2*t;i++)n[i]=0;for(i=0;i<this.g.length;i++)for(var s=0;s<e.g.length;s++){var r=this.D(i)>>>16,o=65535&this.D(i),a=e.D(s)>>>16,l=65535&e.D(s);n[2*i+2*s]+=o*l,Wo(n,2*i+2*s),n[2*i+2*s+1]+=r*l,Wo(n,2*i+2*s+1),n[2*i+2*s+1]+=o*a,Wo(n,2*i+2*s+1),n[2*i+2*s+2]+=r*a,Wo(n,2*i+2*s+2)}for(i=0;i<t;i++)n[i]=n[2*i+1]<<16|n[2*i];for(i=t;i<2*t;i++)n[i]=0;return new Po(n,0)},Un.gb=function(e){return Qo(this,e).h},Un.and=function(e){for(var t=Math.max(this.g.length,e.g.length),n=[],i=0;i<t;i++)n[i]=this.D(i)&e.D(i);return new Po(n,this.h&e.h)},Un.or=function(e){for(var t=Math.max(this.g.length,e.g.length),n=[],i=0;i<t;i++)n[i]=this.D(i)|e.D(i);return new Po(n,this.h|e.h)},Un.xor=function(e){for(var t=Math.max(this.g.length,e.g.length),n=[],i=0;i<t;i++)n[i]=this.D(i)^e.D(i);return new Po(n,this.h^e.h)},Ao.prototype.createWebChannel=Ao.prototype.g,xo.prototype.send=xo.prototype.u,xo.prototype.open=xo.prototype.m,xo.prototype.close=xo.prototype.close,Os.NO_ERROR=0,Os.TIMEOUT=8,Os.HTTP_ERROR=6,Ms.COMPLETE="complete",Fs.EventType=Us,Us.OPEN="a",Us.CLOSE="b",Us.ERROR="c",Us.MESSAGE="d",es.prototype.listen=es.prototype.O,Wr.prototype.listenOnce=Wr.prototype.P,Wr.prototype.getLastError=Wr.prototype.Sa,Wr.prototype.getLastErrorCode=Wr.prototype.Ia,Wr.prototype.getStatus=Wr.prototype.da,Wr.prototype.getResponseJson=Wr.prototype.Wa,Wr.prototype.getResponseText=Wr.prototype.ja,Wr.prototype.send=Wr.prototype.ha,Wr.prototype.setWithCredentials=Wr.prototype.Oa,Oo.prototype.digest=Oo.prototype.l,Oo.prototype.reset=Oo.prototype.reset,Oo.prototype.update=Oo.prototype.j,Po.prototype.add=Po.prototype.add,Po.prototype.multiply=Po.prototype.R,Po.prototype.modulo=Po.prototype.gb,Po.prototype.compare=Po.prototype.X,Po.prototype.toNumber=Po.prototype.ea,Po.prototype.toString=Po.prototype.toString,Po.prototype.getBits=Po.prototype.D,Po.fromNumber=Vo,Po.fromString=function e(t,n){if(0==t.length)throw Error("number format error: empty string");if(2>(n=n||10)||36<n)throw Error("radix out of range: "+n);if("-"==t.charAt(0))return Ho(e(t.substring(1),n));if(0<=t.indexOf("-"))throw Error('number format error: interior "-" character');for(var i=Vo(Math.pow(n,8)),s=zo,r=0;r<t.length;r+=8){var o=Math.min(8,t.length-r),a=parseInt(t.substring(r,r+o),n);8>o?(o=Vo(Math.pow(n,o)),s=s.R(o).add(Vo(a))):s=(s=s.R(i)).add(Vo(a))}return s};var Jo=jn.createWebChannelTransport=function(){return new Ao},Zo=jn.getStatEventTarget=function(){return _s()},ea=jn.ErrorCode=Os,ta=jn.EventType=Ms,na=jn.Event=Is,ia=jn.Stat={xb:0,Ab:1,Bb:2,Ub:3,Zb:4,Wb:5,Xb:6,Vb:7,Tb:8,Yb:9,PROXY:10,NOPROXY:11,Rb:12,Nb:13,Ob:14,Mb:15,Pb:16,Qb:17,tb:18,sb:19,ub:20},sa=jn.FetchXmlHttpFactory=zr,ra=jn.WebChannel=Fs,oa=jn.XhrIo=Wr,aa=jn.Md5=Oo,la=jn.Integer=Po;nt=s("6qd2L");const ca="@firebase/firestore";
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ua{constructor(e){this.uid=e}isAuthenticated(){return null!=this.uid}toKey(){return this.isAuthenticated()?"uid:"+this.uid:"anonymous-user"}isEqual(e){return e.uid===this.uid}}ua.UNAUTHENTICATED=new ua(null),ua.GOOGLE_CREDENTIALS=new ua("google-credentials-uid"),ua.FIRST_PARTY=new ua("first-party-uid"),ua.MOCK_USER=new ua("mock-user");
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
let ha="9.22.0";
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const da=new qt("@firebase/firestore");function pa(){return da.logLevel}function fa(e,...t){if(da.logLevel<=Vt.DEBUG){const n=t.map(va);da.debug(`Firestore (${ha}): ${e}`,...n)}}function ma(e,...t){if(da.logLevel<=Vt.ERROR){const n=t.map(va);da.error(`Firestore (${ha}): ${e}`,...n)}}function ga(e,...t){if(da.logLevel<=Vt.WARN){const n=t.map(va);da.warn(`Firestore (${ha}): ${e}`,...n)}}function va(e){if("string"==typeof e)return e;try{return t=e,JSON.stringify(t)}catch(t){return e}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */var t}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function ya(e="Unexpected state"){const t=`FIRESTORE (${ha}) INTERNAL ASSERTION FAILED: `+e;throw ma(t),new Error(t)}function wa(e,t){e||ya()}function ba(e,t){return e}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Ea={OK:"ok",CANCELLED:"cancelled",UNKNOWN:"unknown",INVALID_ARGUMENT:"invalid-argument",DEADLINE_EXCEEDED:"deadline-exceeded",NOT_FOUND:"not-found",ALREADY_EXISTS:"already-exists",PERMISSION_DENIED:"permission-denied",UNAUTHENTICATED:"unauthenticated",RESOURCE_EXHAUSTED:"resource-exhausted",FAILED_PRECONDITION:"failed-precondition",ABORTED:"aborted",OUT_OF_RANGE:"out-of-range",UNIMPLEMENTED:"unimplemented",INTERNAL:"internal",UNAVAILABLE:"unavailable",DATA_LOSS:"data-loss"};class Ta extends bt{constructor(e,t){super(e,t),this.code=e,this.message=t,this.toString=()=>`${this.name}: [code=${this.code}]: ${this.message}`}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Sa{constructor(){this.promise=new Promise(((e,t)=>{this.resolve=e,this.reject=t}))}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ia{constructor(e,t){this.user=t,this.type="OAuth",this.headers=new Map,this.headers.set("Authorization",`Bearer ${e}`)}}class Ca{getToken(){return Promise.resolve(null)}invalidateToken(){}start(e,t){e.enqueueRetryable((()=>t(ua.UNAUTHENTICATED)))}shutdown(){}}class _a{constructor(e){this.token=e,this.changeListener=null}getToken(){return Promise.resolve(this.token)}invalidateToken(){}start(e,t){this.changeListener=t,e.enqueueRetryable((()=>t(this.token.user)))}shutdown(){this.changeListener=null}}class ka{constructor(e){this.t=e,this.currentUser=ua.UNAUTHENTICATED,this.i=0,this.forceRefresh=!1,this.auth=null}start(e,t){let n=this.i;const i=e=>this.i!==n?(n=this.i,t(e)):Promise.resolve();let s=new Sa;this.o=()=>{this.i++,this.currentUser=this.u(),s.resolve(),s=new Sa,e.enqueueRetryable((()=>i(this.currentUser)))};const r=()=>{const t=s;e.enqueueRetryable((async()=>{await t.promise,await i(this.currentUser)}))},o=e=>{fa("FirebaseAuthCredentialsProvider","Auth detected"),this.auth=e,this.auth.addAuthTokenListener(this.o),r()};this.t.onInit((e=>o(e))),setTimeout((()=>{if(!this.auth){const e=this.t.getImmediate({optional:!0});e?o(e):(fa("FirebaseAuthCredentialsProvider","Auth not yet detected"),s.resolve(),s=new Sa)}}),0),r()}getToken(){const e=this.i,t=this.forceRefresh;return this.forceRefresh=!1,this.auth?this.auth.getToken(t).then((t=>this.i!==e?(fa("FirebaseAuthCredentialsProvider","getToken aborted due to token change."),this.getToken()):t?(wa("string"==typeof t.accessToken),new Ia(t.accessToken,this.currentUser)):null)):Promise.resolve(null)}invalidateToken(){this.forceRefresh=!0}shutdown(){this.auth&&this.auth.removeAuthTokenListener(this.o)}u(){const e=this.auth&&this.auth.getUid();return wa(null===e||"string"==typeof e),new ua(e)}}class Aa{constructor(e,t,n){this.h=e,this.l=t,this.m=n,this.type="FirstParty",this.user=ua.FIRST_PARTY,this.g=new Map}p(){return this.m?this.m():null}get headers(){this.g.set("X-Goog-AuthUser",this.h);const e=this.p();return e&&this.g.set("Authorization",e),this.l&&this.g.set("X-Goog-Iam-Authorization-Token",this.l),this.g}}class xa{constructor(e,t,n){this.h=e,this.l=t,this.m=n}getToken(){return Promise.resolve(new Aa(this.h,this.l,this.m))}start(e,t){e.enqueueRetryable((()=>t(ua.FIRST_PARTY)))}shutdown(){}invalidateToken(){}}class Na{constructor(e){this.value=e,this.type="AppCheck",this.headers=new Map,e&&e.length>0&&this.headers.set("x-firebase-appcheck",this.value)}}class Da{constructor(e){this.I=e,this.forceRefresh=!1,this.appCheck=null,this.T=null}start(e,t){const n=e=>{null!=e.error&&fa("FirebaseAppCheckTokenProvider",`Error getting App Check token; using placeholder token instead. Error: ${e.error.message}`);const n=e.token!==this.T;return this.T=e.token,fa("FirebaseAppCheckTokenProvider",`Received ${n?"new":"existing"} token.`),n?t(e.token):Promise.resolve()};this.o=t=>{e.enqueueRetryable((()=>n(t)))};const i=e=>{fa("FirebaseAppCheckTokenProvider","AppCheck detected"),this.appCheck=e,this.appCheck.addTokenListener(this.o)};this.I.onInit((e=>i(e))),setTimeout((()=>{if(!this.appCheck){const e=this.I.getImmediate({optional:!0});e?i(e):fa("FirebaseAppCheckTokenProvider","AppCheck not yet detected")}}),0)}getToken(){const e=this.forceRefresh;return this.forceRefresh=!1,this.appCheck?this.appCheck.getToken(e).then((e=>e?(wa("string"==typeof e.token),this.T=e.token,new Na(e.token)):null)):Promise.resolve(null)}invalidateToken(){this.forceRefresh=!0}shutdown(){this.appCheck&&this.appCheck.removeTokenListener(this.o)}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
function La(e){const t="undefined"!=typeof self&&(self.crypto||self.msCrypto),n=new Uint8Array(e);if(t&&"function"==typeof t.getRandomValues)t.getRandomValues(n);else for(let t=0;t<e;t++)n[t]=Math.floor(256*Math.random());return n}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Oa{static A(){const e="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789",t=62*Math.floor(256/62);let n="";for(;n.length<20;){const i=La(40);for(let s=0;s<i.length;++s)n.length<20&&i[s]<t&&(n+=e.charAt(i[s]%62))}return n}}function Ma(e,t){return e<t?-1:e>t?1:0}function Pa(e,t,n){return e.length===t.length&&e.every(((e,i)=>n(e,t[i])))}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
class Ra{constructor(e,t){if(this.seconds=e,this.nanoseconds=t,t<0)throw new Ta(Ea.INVALID_ARGUMENT,"Timestamp nanoseconds out of range: "+t);if(t>=1e9)throw new Ta(Ea.INVALID_ARGUMENT,"Timestamp nanoseconds out of range: "+t);if(e<-62135596800)throw new Ta(Ea.INVALID_ARGUMENT,"Timestamp seconds out of range: "+e);if(e>=253402300800)throw new Ta(Ea.INVALID_ARGUMENT,"Timestamp seconds out of range: "+e)}static now(){return Ra.fromMillis(Date.now())}static fromDate(e){return Ra.fromMillis(e.getTime())}static fromMillis(e){const t=Math.floor(e/1e3),n=Math.floor(1e6*(e-1e3*t));return new Ra(t,n)}toDate(){return new Date(this.toMillis())}toMillis(){return 1e3*this.seconds+this.nanoseconds/1e6}_compareTo(e){return this.seconds===e.seconds?Ma(this.nanoseconds,e.nanoseconds):Ma(this.seconds,e.seconds)}isEqual(e){return e.seconds===this.seconds&&e.nanoseconds===this.nanoseconds}toString(){return"Timestamp(seconds="+this.seconds+", nanoseconds="+this.nanoseconds+")"}toJSON(){return{seconds:this.seconds,nanoseconds:this.nanoseconds}}valueOf(){const e=this.seconds- -62135596800;return String(e).padStart(12,"0")+"."+String(this.nanoseconds).padStart(9,"0")}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Fa{constructor(e){this.timestamp=e}static fromTimestamp(e){return new Fa(e)}static min(){return new Fa(new Ra(0,0))}static max(){return new Fa(new Ra(253402300799,999999999))}compareTo(e){return this.timestamp._compareTo(e.timestamp)}isEqual(e){return this.timestamp.isEqual(e.timestamp)}toMicroseconds(){return 1e6*this.timestamp.seconds+this.timestamp.nanoseconds/1e3}toString(){return"SnapshotVersion("+this.timestamp.toString()+")"}toTimestamp(){return this.timestamp}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Va{constructor(e,t,n){void 0===t?t=0:t>e.length&&ya(),void 0===n?n=e.length-t:n>e.length-t&&ya(),this.segments=e,this.offset=t,this.len=n}get length(){return this.len}isEqual(e){return 0===Va.comparator(this,e)}child(e){const t=this.segments.slice(this.offset,this.limit());return e instanceof Va?e.forEach((e=>{t.push(e)})):t.push(e),this.construct(t)}limit(){return this.offset+this.length}popFirst(e){return e=void 0===e?1:e,this.construct(this.segments,this.offset+e,this.length-e)}popLast(){return this.construct(this.segments,this.offset,this.length-1)}firstSegment(){return this.segments[this.offset]}lastSegment(){return this.get(this.length-1)}get(e){return this.segments[this.offset+e]}isEmpty(){return 0===this.length}isPrefixOf(e){if(e.length<this.length)return!1;for(let t=0;t<this.length;t++)if(this.get(t)!==e.get(t))return!1;return!0}isImmediateParentOf(e){if(this.length+1!==e.length)return!1;for(let t=0;t<this.length;t++)if(this.get(t)!==e.get(t))return!1;return!0}forEach(e){for(let t=this.offset,n=this.limit();t<n;t++)e(this.segments[t])}toArray(){return this.segments.slice(this.offset,this.limit())}static comparator(e,t){const n=Math.min(e.length,t.length);for(let i=0;i<n;i++){const n=e.get(i),s=t.get(i);if(n<s)return-1;if(n>s)return 1}return e.length<t.length?-1:e.length>t.length?1:0}}class Ua extends Va{construct(e,t,n){return new Ua(e,t,n)}canonicalString(){return this.toArray().join("/")}toString(){return this.canonicalString()}static fromString(...e){const t=[];for(const n of e){if(n.indexOf("//")>=0)throw new Ta(Ea.INVALID_ARGUMENT,`Invalid segment (${n}). Paths must not contain // in them.`);t.push(...n.split("/").filter((e=>e.length>0)))}return new Ua(t)}static emptyPath(){return new Ua([])}}const za=/^[_a-zA-Z][_a-zA-Z0-9]*$/;class ja extends Va{construct(e,t,n){return new ja(e,t,n)}static isValidIdentifier(e){return za.test(e)}canonicalString(){return this.toArray().map((e=>(e=e.replace(/\\/g,"\\\\").replace(/`/g,"\\`"),ja.isValidIdentifier(e)||(e="`"+e+"`"),e))).join(".")}toString(){return this.canonicalString()}isKeyField(){return 1===this.length&&"__name__"===this.get(0)}static keyField(){return new ja(["__name__"])}static fromServerFormat(e){const t=[];let n="",i=0;const s=()=>{if(0===n.length)throw new Ta(Ea.INVALID_ARGUMENT,`Invalid field path (${e}). Paths must not be empty, begin with '.', end with '.', or contain '..'`);t.push(n),n=""};let r=!1;for(;i<e.length;){const t=e[i];if("\\"===t){if(i+1===e.length)throw new Ta(Ea.INVALID_ARGUMENT,"Path has trailing escape character: "+e);const t=e[i+1];if("\\"!==t&&"."!==t&&"`"!==t)throw new Ta(Ea.INVALID_ARGUMENT,"Path has invalid escape sequence: "+e);n+=t,i+=2}else"`"===t?(r=!r,i++):"."!==t||r?(n+=t,i++):(s(),i++)}if(s(),r)throw new Ta(Ea.INVALID_ARGUMENT,"Unterminated ` in path: "+e);return new ja(t)}static emptyPath(){return new ja([])}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ba{constructor(e){this.path=e}static fromPath(e){return new Ba(Ua.fromString(e))}static fromName(e){return new Ba(Ua.fromString(e).popFirst(5))}static empty(){return new Ba(Ua.emptyPath())}get collectionGroup(){return this.path.popLast().lastSegment()}hasCollectionId(e){return this.path.length>=2&&this.path.get(this.path.length-2)===e}getCollectionGroup(){return this.path.get(this.path.length-2)}getCollectionPath(){return this.path.popLast()}isEqual(e){return null!==e&&0===Ua.comparator(this.path,e.path)}toString(){return this.path.toString()}static comparator(e,t){return Ua.comparator(e.path,t.path)}static isDocumentKey(e){return e.length%2==0}static fromSegments(e){return new Ba(new Ua(e.slice()))}}
/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class $a{constructor(e,t,n,i){this.indexId=e,this.collectionGroup=t,this.fields=n,this.indexState=i}}$a.UNKNOWN_ID=-1;function qa(e,t){const n=e.toTimestamp().seconds,i=e.toTimestamp().nanoseconds+1,s=Fa.fromTimestamp(1e9===i?new Ra(n+1,0):new Ra(n,i));return new Ga(s,Ba.empty(),t)}function Ha(e){return new Ga(e.readTime,e.key,-1)}class Ga{constructor(e,t,n){this.readTime=e,this.documentKey=t,this.largestBatchId=n}static min(){return new Ga(Fa.min(),Ba.empty(),-1)}static max(){return new Ga(Fa.max(),Ba.empty(),-1)}}function Wa(e,t){let n=e.readTime.compareTo(t.readTime);return 0!==n?n:(n=Ba.comparator(e.documentKey,t.documentKey),0!==n?n:Ma(e.largestBatchId,t.largestBatchId))}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Ka="The current tab is not in the required state to perform this operation. It might be necessary to refresh the browser tab.";class Qa{constructor(){this.onCommittedListeners=[]}addOnCommittedListener(e){this.onCommittedListeners.push(e)}raiseOnCommittedEvent(){this.onCommittedListeners.forEach((e=>e()))}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function Xa(e){if(e.code!==Ea.FAILED_PRECONDITION||e.message!==Ka)throw e;fa("LocalStore","Unexpectedly lost primary lease")}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ya{constructor(e){this.nextCallback=null,this.catchCallback=null,this.result=void 0,this.error=void 0,this.isDone=!1,this.callbackAttached=!1,e((e=>{this.isDone=!0,this.result=e,this.nextCallback&&this.nextCallback(e)}),(e=>{this.isDone=!0,this.error=e,this.catchCallback&&this.catchCallback(e)}))}catch(e){return this.next(void 0,e)}next(e,t){return this.callbackAttached&&ya(),this.callbackAttached=!0,this.isDone?this.error?this.wrapFailure(t,this.error):this.wrapSuccess(e,this.result):new Ya(((n,i)=>{this.nextCallback=t=>{this.wrapSuccess(e,t).next(n,i)},this.catchCallback=e=>{this.wrapFailure(t,e).next(n,i)}}))}toPromise(){return new Promise(((e,t)=>{this.next(e,t)}))}wrapUserFunction(e){try{const t=e();return t instanceof Ya?t:Ya.resolve(t)}catch(e){return Ya.reject(e)}}wrapSuccess(e,t){return e?this.wrapUserFunction((()=>e(t))):Ya.resolve(t)}wrapFailure(e,t){return e?this.wrapUserFunction((()=>e(t))):Ya.reject(t)}static resolve(e){return new Ya(((t,n)=>{t(e)}))}static reject(e){return new Ya(((t,n)=>{n(e)}))}static waitFor(e){return new Ya(((t,n)=>{let i=0,s=0,r=!1;e.forEach((e=>{++i,e.next((()=>{++s,r&&s===i&&t()}),(e=>n(e)))})),r=!0,s===i&&t()}))}static or(e){let t=Ya.resolve(!1);for(const n of e)t=t.next((e=>e?Ya.resolve(e):n()));return t}static forEach(e,t){const n=[];return e.forEach(((e,i)=>{n.push(t.call(this,e,i))})),this.waitFor(n)}static mapArray(e,t){return new Ya(((n,i)=>{const s=e.length,r=new Array(s);let o=0;for(let a=0;a<s;a++){const l=a;t(e[l]).next((e=>{r[l]=e,++o,o===s&&n(r)}),(e=>i(e)))}}))}static doWhile(e,t){return new Ya(((n,i)=>{const s=()=>{!0===e()?t().next((()=>{s()}),i):n()};s()}))}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Ja(e){return"IndexedDbTransactionError"===e.name}
/**
 * @license
 * Copyright 2018 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
class Za{constructor(e,t){this.previousValue=e,t&&(t.sequenceNumberHandler=e=>this.ot(e),this.ut=e=>t.writeSequenceNumber(e))}ot(e){return this.previousValue=Math.max(e,this.previousValue),this.previousValue}next(){const e=++this.previousValue;return this.ut&&this.ut(e),e}}function el(e){return null==e}function tl(e){return 0===e&&1/e==-1/0}function nl(e){return"number"==typeof e&&Number.isInteger(e)&&!tl(e)&&e<=Number.MAX_SAFE_INTEGER&&e>=Number.MIN_SAFE_INTEGER}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */Za.ct=-1;const il=["mutationQueues","mutations","documentMutations","remoteDocuments","targets","owner","targetGlobal","targetDocuments","clientMetadata","remoteDocumentGlobal","collectionParents","bundles","namedQueries"],sl=["mutationQueues","mutations","documentMutations","remoteDocumentsV14","targets","owner","targetGlobal","targetDocuments","clientMetadata","remoteDocumentGlobal","collectionParents","bundles","namedQueries","documentOverlays"],rl=sl;
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
function ol(e){let t=0;for(const n in e)Object.prototype.hasOwnProperty.call(e,n)&&t++;return t}function al(e,t){for(const n in e)Object.prototype.hasOwnProperty.call(e,n)&&t(n,e[n])}function ll(e){for(const t in e)if(Object.prototype.hasOwnProperty.call(e,t))return!1;return!0}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class cl{constructor(e,t){this.comparator=e,this.root=t||hl.EMPTY}insert(e,t){return new cl(this.comparator,this.root.insert(e,t,this.comparator).copy(null,null,hl.BLACK,null,null))}remove(e){return new cl(this.comparator,this.root.remove(e,this.comparator).copy(null,null,hl.BLACK,null,null))}get(e){let t=this.root;for(;!t.isEmpty();){const n=this.comparator(e,t.key);if(0===n)return t.value;n<0?t=t.left:n>0&&(t=t.right)}return null}indexOf(e){let t=0,n=this.root;for(;!n.isEmpty();){const i=this.comparator(e,n.key);if(0===i)return t+n.left.size;i<0?n=n.left:(t+=n.left.size+1,n=n.right)}return-1}isEmpty(){return this.root.isEmpty()}get size(){return this.root.size}minKey(){return this.root.minKey()}maxKey(){return this.root.maxKey()}inorderTraversal(e){return this.root.inorderTraversal(e)}forEach(e){this.inorderTraversal(((t,n)=>(e(t,n),!1)))}toString(){const e=[];return this.inorderTraversal(((t,n)=>(e.push(`${t}:${n}`),!1))),`{${e.join(", ")}}`}reverseTraversal(e){return this.root.reverseTraversal(e)}getIterator(){return new ul(this.root,null,this.comparator,!1)}getIteratorFrom(e){return new ul(this.root,e,this.comparator,!1)}getReverseIterator(){return new ul(this.root,null,this.comparator,!0)}getReverseIteratorFrom(e){return new ul(this.root,e,this.comparator,!0)}}class ul{constructor(e,t,n,i){this.isReverse=i,this.nodeStack=[];let s=1;for(;!e.isEmpty();)if(s=t?n(e.key,t):1,t&&i&&(s*=-1),s<0)e=this.isReverse?e.left:e.right;else{if(0===s){this.nodeStack.push(e);break}this.nodeStack.push(e),e=this.isReverse?e.right:e.left}}getNext(){let e=this.nodeStack.pop();const t={key:e.key,value:e.value};if(this.isReverse)for(e=e.left;!e.isEmpty();)this.nodeStack.push(e),e=e.right;else for(e=e.right;!e.isEmpty();)this.nodeStack.push(e),e=e.left;return t}hasNext(){return this.nodeStack.length>0}peek(){if(0===this.nodeStack.length)return null;const e=this.nodeStack[this.nodeStack.length-1];return{key:e.key,value:e.value}}}class hl{constructor(e,t,n,i,s){this.key=e,this.value=t,this.color=null!=n?n:hl.RED,this.left=null!=i?i:hl.EMPTY,this.right=null!=s?s:hl.EMPTY,this.size=this.left.size+1+this.right.size}copy(e,t,n,i,s){return new hl(null!=e?e:this.key,null!=t?t:this.value,null!=n?n:this.color,null!=i?i:this.left,null!=s?s:this.right)}isEmpty(){return!1}inorderTraversal(e){return this.left.inorderTraversal(e)||e(this.key,this.value)||this.right.inorderTraversal(e)}reverseTraversal(e){return this.right.reverseTraversal(e)||e(this.key,this.value)||this.left.reverseTraversal(e)}min(){return this.left.isEmpty()?this:this.left.min()}minKey(){return this.min().key}maxKey(){return this.right.isEmpty()?this.key:this.right.maxKey()}insert(e,t,n){let i=this;const s=n(e,i.key);return i=s<0?i.copy(null,null,null,i.left.insert(e,t,n),null):0===s?i.copy(null,t,null,null,null):i.copy(null,null,null,null,i.right.insert(e,t,n)),i.fixUp()}removeMin(){if(this.left.isEmpty())return hl.EMPTY;let e=this;return e.left.isRed()||e.left.left.isRed()||(e=e.moveRedLeft()),e=e.copy(null,null,null,e.left.removeMin(),null),e.fixUp()}remove(e,t){let n,i=this;if(t(e,i.key)<0)i.left.isEmpty()||i.left.isRed()||i.left.left.isRed()||(i=i.moveRedLeft()),i=i.copy(null,null,null,i.left.remove(e,t),null);else{if(i.left.isRed()&&(i=i.rotateRight()),i.right.isEmpty()||i.right.isRed()||i.right.left.isRed()||(i=i.moveRedRight()),0===t(e,i.key)){if(i.right.isEmpty())return hl.EMPTY;n=i.right.min(),i=i.copy(n.key,n.value,null,null,i.right.removeMin())}i=i.copy(null,null,null,null,i.right.remove(e,t))}return i.fixUp()}isRed(){return this.color}fixUp(){let e=this;return e.right.isRed()&&!e.left.isRed()&&(e=e.rotateLeft()),e.left.isRed()&&e.left.left.isRed()&&(e=e.rotateRight()),e.left.isRed()&&e.right.isRed()&&(e=e.colorFlip()),e}moveRedLeft(){let e=this.colorFlip();return e.right.left.isRed()&&(e=e.copy(null,null,null,null,e.right.rotateRight()),e=e.rotateLeft(),e=e.colorFlip()),e}moveRedRight(){let e=this.colorFlip();return e.left.left.isRed()&&(e=e.rotateRight(),e=e.colorFlip()),e}rotateLeft(){const e=this.copy(null,null,hl.RED,null,this.right.left);return this.right.copy(null,null,this.color,e,null)}rotateRight(){const e=this.copy(null,null,hl.RED,this.left.right,null);return this.left.copy(null,null,this.color,null,e)}colorFlip(){const e=this.left.copy(null,null,!this.left.color,null,null),t=this.right.copy(null,null,!this.right.color,null,null);return this.copy(null,null,!this.color,e,t)}checkMaxDepth(){const e=this.check();return Math.pow(2,e)<=this.size+1}check(){if(this.isRed()&&this.left.isRed())throw ya();if(this.right.isRed())throw ya();const e=this.left.check();if(e!==this.right.check())throw ya();return e+(this.isRed()?0:1)}}hl.EMPTY=null,hl.RED=!0,hl.BLACK=!1,hl.EMPTY=new class{constructor(){this.size=0}get key(){throw ya()}get value(){throw ya()}get color(){throw ya()}get left(){throw ya()}get right(){throw ya()}copy(e,t,n,i,s){return this}insert(e,t,n){return new hl(e,t)}remove(e,t){return this}isEmpty(){return!0}inorderTraversal(e){return!1}reverseTraversal(e){return!1}minKey(){return null}maxKey(){return null}isRed(){return!1}checkMaxDepth(){return!0}check(){return 0}};
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
class dl{constructor(e){this.comparator=e,this.data=new cl(this.comparator)}has(e){return null!==this.data.get(e)}first(){return this.data.minKey()}last(){return this.data.maxKey()}get size(){return this.data.size}indexOf(e){return this.data.indexOf(e)}forEach(e){this.data.inorderTraversal(((t,n)=>(e(t),!1)))}forEachInRange(e,t){const n=this.data.getIteratorFrom(e[0]);for(;n.hasNext();){const i=n.getNext();if(this.comparator(i.key,e[1])>=0)return;t(i.key)}}forEachWhile(e,t){let n;for(n=void 0!==t?this.data.getIteratorFrom(t):this.data.getIterator();n.hasNext();)if(!e(n.getNext().key))return}firstAfterOrEqual(e){const t=this.data.getIteratorFrom(e);return t.hasNext()?t.getNext().key:null}getIterator(){return new pl(this.data.getIterator())}getIteratorFrom(e){return new pl(this.data.getIteratorFrom(e))}add(e){return this.copy(this.data.remove(e).insert(e,!0))}delete(e){return this.has(e)?this.copy(this.data.remove(e)):this}isEmpty(){return this.data.isEmpty()}unionWith(e){let t=this;return t.size<e.size&&(t=e,e=this),e.forEach((e=>{t=t.add(e)})),t}isEqual(e){if(!(e instanceof dl))return!1;if(this.size!==e.size)return!1;const t=this.data.getIterator(),n=e.data.getIterator();for(;t.hasNext();){const e=t.getNext().key,i=n.getNext().key;if(0!==this.comparator(e,i))return!1}return!0}toArray(){const e=[];return this.forEach((t=>{e.push(t)})),e}toString(){const e=[];return this.forEach((t=>e.push(t))),"SortedSet("+e.toString()+")"}copy(e){const t=new dl(this.comparator);return t.data=e,t}}class pl{constructor(e){this.iter=e}getNext(){return this.iter.getNext().key}hasNext(){return this.iter.hasNext()}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
class fl{constructor(e){this.fields=e,e.sort(ja.comparator)}static empty(){return new fl([])}unionWith(e){let t=new dl(ja.comparator);for(const e of this.fields)t=t.add(e);for(const n of e)t=t.add(n);return new fl(t.toArray())}covers(e){for(const t of this.fields)if(t.isPrefixOf(e))return!0;return!1}isEqual(e){return Pa(this.fields,e.fields,((e,t)=>e.isEqual(t)))}}
/**
 * @license
 * Copyright 2023 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ml extends Error{constructor(){super(...arguments),this.name="Base64DecodeError"}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
class gl{constructor(e){this.binaryString=e}static fromBase64String(e){const t=function(e){try{return atob(e)}catch(e){throw"undefined"!=typeof DOMException&&e instanceof DOMException?new ml("Invalid base64 string: "+e):e}}(e);return new gl(t)}static fromUint8Array(e){const t=function(e){let t="";for(let n=0;n<e.length;++n)t+=String.fromCharCode(e[n]);return t}(e);return new gl(t)}[Symbol.iterator](){let e=0;return{next:()=>e<this.binaryString.length?{value:this.binaryString.charCodeAt(e++),done:!1}:{value:void 0,done:!0}}}toBase64(){var e;return e=this.binaryString,btoa(e)}toUint8Array(){return function(e){const t=new Uint8Array(e.length);for(let n=0;n<e.length;n++)t[n]=e.charCodeAt(n);return t}(this.binaryString)}approximateByteSize(){return 2*this.binaryString.length}compareTo(e){return Ma(this.binaryString,e.binaryString)}isEqual(e){return this.binaryString===e.binaryString}}gl.EMPTY_BYTE_STRING=new gl("");const vl=new RegExp(/^\d{4}-\d\d-\d\dT\d\d:\d\d:\d\d(?:\.(\d+))?Z$/);function yl(e){if(wa(!!e),"string"==typeof e){let t=0;const n=vl.exec(e);if(wa(!!n),n[1]){let e=n[1];e=(e+"000000000").substr(0,9),t=Number(e)}const i=new Date(e);return{seconds:Math.floor(i.getTime()/1e3),nanos:t}}return{seconds:wl(e.seconds),nanos:wl(e.nanos)}}function wl(e){return"number"==typeof e?e:"string"==typeof e?Number(e):0}function bl(e){return"string"==typeof e?gl.fromBase64String(e):gl.fromUint8Array(e)}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function El(e){var t,n;return"server_timestamp"===(null===(n=((null===(t=null==e?void 0:e.mapValue)||void 0===t?void 0:t.fields)||{}).__type__)||void 0===n?void 0:n.stringValue)}function Tl(e){const t=e.mapValue.fields.__previous_value__;return El(t)?Tl(t):t}function Sl(e){const t=yl(e.mapValue.fields.__local_write_time__.timestampValue);return new Ra(t.seconds,t.nanos)}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Il{constructor(e,t,n,i,s,r,o,a,l){this.databaseId=e,this.appId=t,this.persistenceKey=n,this.host=i,this.ssl=s,this.forceLongPolling=r,this.autoDetectLongPolling=o,this.longPollingOptions=a,this.useFetchStreams=l}}class Cl{constructor(e,t){this.projectId=e,this.database=t||"(default)"}static empty(){return new Cl("","")}get isDefaultDatabase(){return"(default)"===this.database}isEqual(e){return e instanceof Cl&&e.projectId===this.projectId&&e.database===this.database}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const _l={mapValue:{fields:{__type__:{stringValue:"__max__"}}}};function kl(e){return"nullValue"in e?0:"booleanValue"in e?1:"integerValue"in e||"doubleValue"in e?2:"timestampValue"in e?3:"stringValue"in e?5:"bytesValue"in e?6:"referenceValue"in e?7:"geoPointValue"in e?8:"arrayValue"in e?9:"mapValue"in e?El(e)?4:zl(e)?9007199254740991:10:ya()}function Al(e,t){if(e===t)return!0;const n=kl(e);if(n!==kl(t))return!1;switch(n){case 0:case 9007199254740991:return!0;case 1:return e.booleanValue===t.booleanValue;case 4:return Sl(e).isEqual(Sl(t));case 3:return function(e,t){if("string"==typeof e.timestampValue&&"string"==typeof t.timestampValue&&e.timestampValue.length===t.timestampValue.length)return e.timestampValue===t.timestampValue;const n=yl(e.timestampValue),i=yl(t.timestampValue);return n.seconds===i.seconds&&n.nanos===i.nanos}(e,t);case 5:return e.stringValue===t.stringValue;case 6:return function(e,t){return bl(e.bytesValue).isEqual(bl(t.bytesValue))}(e,t);case 7:return e.referenceValue===t.referenceValue;case 8:return function(e,t){return wl(e.geoPointValue.latitude)===wl(t.geoPointValue.latitude)&&wl(e.geoPointValue.longitude)===wl(t.geoPointValue.longitude)}(e,t);case 2:return function(e,t){if("integerValue"in e&&"integerValue"in t)return wl(e.integerValue)===wl(t.integerValue);if("doubleValue"in e&&"doubleValue"in t){const n=wl(e.doubleValue),i=wl(t.doubleValue);return n===i?tl(n)===tl(i):isNaN(n)&&isNaN(i)}return!1}(e,t);case 9:return Pa(e.arrayValue.values||[],t.arrayValue.values||[],Al);case 10:return function(e,t){const n=e.mapValue.fields||{},i=t.mapValue.fields||{};if(ol(n)!==ol(i))return!1;for(const e in n)if(n.hasOwnProperty(e)&&(void 0===i[e]||!Al(n[e],i[e])))return!1;return!0}(e,t);default:return ya()}}function xl(e,t){return void 0!==(e.values||[]).find((e=>Al(e,t)))}function Nl(e,t){if(e===t)return 0;const n=kl(e),i=kl(t);if(n!==i)return Ma(n,i);switch(n){case 0:case 9007199254740991:return 0;case 1:return Ma(e.booleanValue,t.booleanValue);case 2:return function(e,t){const n=wl(e.integerValue||e.doubleValue),i=wl(t.integerValue||t.doubleValue);return n<i?-1:n>i?1:n===i?0:isNaN(n)?isNaN(i)?0:-1:1}(e,t);case 3:return Dl(e.timestampValue,t.timestampValue);case 4:return Dl(Sl(e),Sl(t));case 5:return Ma(e.stringValue,t.stringValue);case 6:return function(e,t){const n=bl(e),i=bl(t);return n.compareTo(i)}(e.bytesValue,t.bytesValue);case 7:return function(e,t){const n=e.split("/"),i=t.split("/");for(let e=0;e<n.length&&e<i.length;e++){const t=Ma(n[e],i[e]);if(0!==t)return t}return Ma(n.length,i.length)}(e.referenceValue,t.referenceValue);case 8:return function(e,t){const n=Ma(wl(e.latitude),wl(t.latitude));return 0!==n?n:Ma(wl(e.longitude),wl(t.longitude))}(e.geoPointValue,t.geoPointValue);case 9:return function(e,t){const n=e.values||[],i=t.values||[];for(let e=0;e<n.length&&e<i.length;++e){const t=Nl(n[e],i[e]);if(t)return t}return Ma(n.length,i.length)}(e.arrayValue,t.arrayValue);case 10:return function(e,t){if(e===_l.mapValue&&t===_l.mapValue)return 0;if(e===_l.mapValue)return 1;if(t===_l.mapValue)return-1;const n=e.fields||{},i=Object.keys(n),s=t.fields||{},r=Object.keys(s);i.sort(),r.sort();for(let e=0;e<i.length&&e<r.length;++e){const t=Ma(i[e],r[e]);if(0!==t)return t;const o=Nl(n[i[e]],s[r[e]]);if(0!==o)return o}return Ma(i.length,r.length)}(e.mapValue,t.mapValue);default:throw ya()}}function Dl(e,t){if("string"==typeof e&&"string"==typeof t&&e.length===t.length)return Ma(e,t);const n=yl(e),i=yl(t),s=Ma(n.seconds,i.seconds);return 0!==s?s:Ma(n.nanos,i.nanos)}function Ll(e){return Ol(e)}function Ol(e){var t,n;return"nullValue"in e?"null":"booleanValue"in e?""+e.booleanValue:"integerValue"in e?""+e.integerValue:"doubleValue"in e?""+e.doubleValue:"timestampValue"in e?function(e){const t=yl(e);return`time(${t.seconds},${t.nanos})`}(e.timestampValue):"stringValue"in e?e.stringValue:"bytesValue"in e?bl(e.bytesValue).toBase64():"referenceValue"in e?(n=e.referenceValue,Ba.fromName(n).toString()):"geoPointValue"in e?`geo(${(t=e.geoPointValue).latitude},${t.longitude})`:"arrayValue"in e?function(e){let t="[",n=!0;for(const i of e.values||[])n?n=!1:t+=",",t+=Ol(i);return t+"]"}(e.arrayValue):"mapValue"in e?function(e){const t=Object.keys(e.fields||{}).sort();let n="{",i=!0;for(const s of t)i?i=!1:n+=",",n+=`${s}:${Ol(e.fields[s])}`;return n+"}"}(e.mapValue):ya()}function Ml(e){return!!e&&"integerValue"in e}function Pl(e){return!!e&&"arrayValue"in e}function Rl(e){return!!e&&"nullValue"in e}function Fl(e){return!!e&&"doubleValue"in e&&isNaN(Number(e.doubleValue))}function Vl(e){return!!e&&"mapValue"in e}function Ul(e){if(e.geoPointValue)return{geoPointValue:Object.assign({},e.geoPointValue)};if(e.timestampValue&&"object"==typeof e.timestampValue)return{timestampValue:Object.assign({},e.timestampValue)};if(e.mapValue){const t={mapValue:{fields:{}}};return al(e.mapValue.fields,((e,n)=>t.mapValue.fields[e]=Ul(n))),t}if(e.arrayValue){const t={arrayValue:{values:[]}};for(let n=0;n<(e.arrayValue.values||[]).length;++n)t.arrayValue.values[n]=Ul(e.arrayValue.values[n]);return t}return Object.assign({},e)}function zl(e){return"__max__"===(((e.mapValue||{}).fields||{}).__type__||{}).stringValue}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
class jl{constructor(e){this.value=e}static empty(){return new jl({mapValue:{}})}field(e){if(e.isEmpty())return this.value;{let t=this.value;for(let n=0;n<e.length-1;++n)if(t=(t.mapValue.fields||{})[e.get(n)],!Vl(t))return null;return t=(t.mapValue.fields||{})[e.lastSegment()],t||null}}set(e,t){this.getFieldsMap(e.popLast())[e.lastSegment()]=Ul(t)}setAll(e){let t=ja.emptyPath(),n={},i=[];e.forEach(((e,s)=>{if(!t.isImmediateParentOf(s)){const e=this.getFieldsMap(t);this.applyChanges(e,n,i),n={},i=[],t=s.popLast()}e?n[s.lastSegment()]=Ul(e):i.push(s.lastSegment())}));const s=this.getFieldsMap(t);this.applyChanges(s,n,i)}delete(e){const t=this.field(e.popLast());Vl(t)&&t.mapValue.fields&&delete t.mapValue.fields[e.lastSegment()]}isEqual(e){return Al(this.value,e.value)}getFieldsMap(e){let t=this.value;t.mapValue.fields||(t.mapValue={fields:{}});for(let n=0;n<e.length;++n){let i=t.mapValue.fields[e.get(n)];Vl(i)&&i.mapValue.fields||(i={mapValue:{fields:{}}},t.mapValue.fields[e.get(n)]=i),t=i}return t.mapValue.fields}applyChanges(e,t,n){al(t,((t,n)=>e[t]=n));for(const t of n)delete e[t]}clone(){return new jl(Ul(this.value))}}function Bl(e){const t=[];return al(e.fields,((e,n)=>{const i=new ja([e]);if(Vl(n)){const e=Bl(n.mapValue).fields;if(0===e.length)t.push(i);else for(const n of e)t.push(i.child(n))}else t.push(i)})),new fl(t)
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */}class $l{constructor(e,t,n,i,s,r,o){this.key=e,this.documentType=t,this.version=n,this.readTime=i,this.createTime=s,this.data=r,this.documentState=o}static newInvalidDocument(e){return new $l(e,0,Fa.min(),Fa.min(),Fa.min(),jl.empty(),0)}static newFoundDocument(e,t,n,i){return new $l(e,1,t,Fa.min(),n,i,0)}static newNoDocument(e,t){return new $l(e,2,t,Fa.min(),Fa.min(),jl.empty(),0)}static newUnknownDocument(e,t){return new $l(e,3,t,Fa.min(),Fa.min(),jl.empty(),2)}convertToFoundDocument(e,t){return!this.createTime.isEqual(Fa.min())||2!==this.documentType&&0!==this.documentType||(this.createTime=e),this.version=e,this.documentType=1,this.data=t,this.documentState=0,this}convertToNoDocument(e){return this.version=e,this.documentType=2,this.data=jl.empty(),this.documentState=0,this}convertToUnknownDocument(e){return this.version=e,this.documentType=3,this.data=jl.empty(),this.documentState=2,this}setHasCommittedMutations(){return this.documentState=2,this}setHasLocalMutations(){return this.documentState=1,this.version=Fa.min(),this}setReadTime(e){return this.readTime=e,this}get hasLocalMutations(){return 1===this.documentState}get hasCommittedMutations(){return 2===this.documentState}get hasPendingWrites(){return this.hasLocalMutations||this.hasCommittedMutations}isValidDocument(){return 0!==this.documentType}isFoundDocument(){return 1===this.documentType}isNoDocument(){return 2===this.documentType}isUnknownDocument(){return 3===this.documentType}isEqual(e){return e instanceof $l&&this.key.isEqual(e.key)&&this.version.isEqual(e.version)&&this.documentType===e.documentType&&this.documentState===e.documentState&&this.data.isEqual(e.data)}mutableCopy(){return new $l(this.key,this.documentType,this.version,this.readTime,this.createTime,this.data.clone(),this.documentState)}toString(){return`Document(${this.key}, ${this.version}, ${JSON.stringify(this.data.value)}, {createTime: ${this.createTime}}), {documentType: ${this.documentType}}), {documentState: ${this.documentState}})`}}
/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ql{constructor(e,t){this.position=e,this.inclusive=t}}function Hl(e,t,n){let i=0;for(let s=0;s<e.position.length;s++){const r=t[s],o=e.position[s];if(i=r.field.isKeyField()?Ba.comparator(Ba.fromName(o.referenceValue),n.key):Nl(o,n.data.field(r.field)),"desc"===r.dir&&(i*=-1),0!==i)break}return i}function Gl(e,t){if(null===e)return null===t;if(null===t)return!1;if(e.inclusive!==t.inclusive||e.position.length!==t.position.length)return!1;for(let n=0;n<e.position.length;n++)if(!Al(e.position[n],t.position[n]))return!1;return!0}
/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Wl{constructor(e,t="asc"){this.field=e,this.dir=t}}function Kl(e,t){return e.dir===t.dir&&e.field.isEqual(t.field)}
/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ql{}class Xl extends Ql{constructor(e,t,n){super(),this.field=e,this.op=t,this.value=n}static create(e,t,n){return e.isKeyField()?"in"===t||"not-in"===t?this.createKeyFieldInFilter(e,t,n):new sc(e,t,n):"array-contains"===t?new lc(e,n):"in"===t?new cc(e,n):"not-in"===t?new uc(e,n):"array-contains-any"===t?new hc(e,n):new Xl(e,t,n)}static createKeyFieldInFilter(e,t,n){return"in"===t?new rc(e,n):new oc(e,n)}matches(e){const t=e.data.field(this.field);return"!="===this.op?null!==t&&this.matchesComparison(Nl(t,this.value)):null!==t&&kl(this.value)===kl(t)&&this.matchesComparison(Nl(t,this.value))}matchesComparison(e){switch(this.op){case"<":return e<0;case"<=":return e<=0;case"==":return 0===e;case"!=":return 0!==e;case">":return e>0;case">=":return e>=0;default:return ya()}}isInequality(){return["<","<=",">",">=","!=","not-in"].indexOf(this.op)>=0}getFlattenedFilters(){return[this]}getFilters(){return[this]}getFirstInequalityField(){return this.isInequality()?this.field:null}}class Yl extends Ql{constructor(e,t){super(),this.filters=e,this.op=t,this.lt=null}static create(e,t){return new Yl(e,t)}matches(e){return Jl(this)?void 0===this.filters.find((t=>!t.matches(e))):void 0!==this.filters.find((t=>t.matches(e)))}getFlattenedFilters(){return null!==this.lt||(this.lt=this.filters.reduce(((e,t)=>e.concat(t.getFlattenedFilters())),[])),this.lt}getFilters(){return Object.assign([],this.filters)}getFirstInequalityField(){const e=this.ft((e=>e.isInequality()));return null!==e?e.field:null}ft(e){for(const t of this.getFlattenedFilters())if(e(t))return t;return null}}function Jl(e){return"and"===e.op}function Zl(e){return ec(e)&&Jl(e)}function ec(e){for(const t of e.filters)if(t instanceof Yl)return!1;return!0}function tc(e){if(e instanceof Xl)return e.field.canonicalString()+e.op.toString()+Ll(e.value);if(Zl(e))return e.filters.map((e=>tc(e))).join(",");{const t=e.filters.map((e=>tc(e))).join(",");return`${e.op}(${t})`}}function nc(e,t){return e instanceof Xl?function(e,t){return t instanceof Xl&&e.op===t.op&&e.field.isEqual(t.field)&&Al(e.value,t.value)}(e,t):e instanceof Yl?function(e,t){return t instanceof Yl&&e.op===t.op&&e.filters.length===t.filters.length&&e.filters.reduce(((e,n,i)=>e&&nc(n,t.filters[i])),!0)}(e,t):void ya()}function ic(e){return e instanceof Xl?function(e){return`${e.field.canonicalString()} ${e.op} ${Ll(e.value)}`}(e):e instanceof Yl?function(e){return e.op.toString()+" {"+e.getFilters().map(ic).join(" ,")+"}"}(e):"Filter"}class sc extends Xl{constructor(e,t,n){super(e,t,n),this.key=Ba.fromName(n.referenceValue)}matches(e){const t=Ba.comparator(e.key,this.key);return this.matchesComparison(t)}}class rc extends Xl{constructor(e,t){super(e,"in",t),this.keys=ac("in",t)}matches(e){return this.keys.some((t=>t.isEqual(e.key)))}}class oc extends Xl{constructor(e,t){super(e,"not-in",t),this.keys=ac("not-in",t)}matches(e){return!this.keys.some((t=>t.isEqual(e.key)))}}function ac(e,t){var n;return((null===(n=t.arrayValue)||void 0===n?void 0:n.values)||[]).map((e=>Ba.fromName(e.referenceValue)))}class lc extends Xl{constructor(e,t){super(e,"array-contains",t)}matches(e){const t=e.data.field(this.field);return Pl(t)&&xl(t.arrayValue,this.value)}}class cc extends Xl{constructor(e,t){super(e,"in",t)}matches(e){const t=e.data.field(this.field);return null!==t&&xl(this.value.arrayValue,t)}}class uc extends Xl{constructor(e,t){super(e,"not-in",t)}matches(e){if(xl(this.value.arrayValue,{nullValue:"NULL_VALUE"}))return!1;const t=e.data.field(this.field);return null!==t&&!xl(this.value.arrayValue,t)}}class hc extends Xl{constructor(e,t){super(e,"array-contains-any",t)}matches(e){const t=e.data.field(this.field);return!(!Pl(t)||!t.arrayValue.values)&&t.arrayValue.values.some((e=>xl(this.value.arrayValue,e)))}}
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class dc{constructor(e,t=null,n=[],i=[],s=null,r=null,o=null){this.path=e,this.collectionGroup=t,this.orderBy=n,this.filters=i,this.limit=s,this.startAt=r,this.endAt=o,this.dt=null}}function pc(e,t=null,n=[],i=[],s=null,r=null,o=null){return new dc(e,t,n,i,s,r,o)}function fc(e){const t=ba(e);if(null===t.dt){let e=t.path.canonicalString();null!==t.collectionGroup&&(e+="|cg:"+t.collectionGroup),e+="|f:",e+=t.filters.map((e=>tc(e))).join(","),e+="|ob:",e+=t.orderBy.map((e=>function(e){return e.field.canonicalString()+e.dir}(e))).join(","),el(t.limit)||(e+="|l:",e+=t.limit),t.startAt&&(e+="|lb:",e+=t.startAt.inclusive?"b:":"a:",e+=t.startAt.position.map((e=>Ll(e))).join(",")),t.endAt&&(e+="|ub:",e+=t.endAt.inclusive?"a:":"b:",e+=t.endAt.position.map((e=>Ll(e))).join(",")),t.dt=e}return t.dt}function mc(e,t){if(e.limit!==t.limit)return!1;if(e.orderBy.length!==t.orderBy.length)return!1;for(let n=0;n<e.orderBy.length;n++)if(!Kl(e.orderBy[n],t.orderBy[n]))return!1;if(e.filters.length!==t.filters.length)return!1;for(let n=0;n<e.filters.length;n++)if(!nc(e.filters[n],t.filters[n]))return!1;return e.collectionGroup===t.collectionGroup&&!!e.path.isEqual(t.path)&&!!Gl(e.startAt,t.startAt)&&Gl(e.endAt,t.endAt)}function gc(e){return Ba.isDocumentKey(e.path)&&null===e.collectionGroup&&0===e.filters.length}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
class vc{constructor(e,t=null,n=[],i=[],s=null,r="F",o=null,a=null){this.path=e,this.collectionGroup=t,this.explicitOrderBy=n,this.filters=i,this.limit=s,this.limitType=r,this.startAt=o,this.endAt=a,this.wt=null,this._t=null,this.startAt,this.endAt}}function yc(e,t,n,i,s,r,o,a){return new vc(e,t,n,i,s,r,o,a)}function wc(e){return new vc(e)}function bc(e){return 0===e.filters.length&&null===e.limit&&null==e.startAt&&null==e.endAt&&(0===e.explicitOrderBy.length||1===e.explicitOrderBy.length&&e.explicitOrderBy[0].field.isKeyField())}function Ec(e){return e.explicitOrderBy.length>0?e.explicitOrderBy[0].field:null}function Tc(e){for(const t of e.filters){const e=t.getFirstInequalityField();if(null!==e)return e}return null}function Sc(e){return null!==e.collectionGroup}function Ic(e){const t=ba(e);if(null===t.wt){t.wt=[];const e=Tc(t),n=Ec(t);if(null!==e&&null===n)e.isKeyField()||t.wt.push(new Wl(e)),t.wt.push(new Wl(ja.keyField(),"asc"));else{let e=!1;for(const n of t.explicitOrderBy)t.wt.push(n),n.field.isKeyField()&&(e=!0);if(!e){const e=t.explicitOrderBy.length>0?t.explicitOrderBy[t.explicitOrderBy.length-1].dir:"asc";t.wt.push(new Wl(ja.keyField(),e))}}}return t.wt}function Cc(e){const t=ba(e);if(!t._t)if("F"===t.limitType)t._t=pc(t.path,t.collectionGroup,Ic(t),t.filters,t.limit,t.startAt,t.endAt);else{const e=[];for(const n of Ic(t)){const t="desc"===n.dir?"asc":"desc";e.push(new Wl(n.field,t))}const n=t.endAt?new ql(t.endAt.position,t.endAt.inclusive):null,i=t.startAt?new ql(t.startAt.position,t.startAt.inclusive):null;t._t=pc(t.path,t.collectionGroup,e,t.filters,t.limit,n,i)}return t._t}function _c(e,t,n){return new vc(e.path,e.collectionGroup,e.explicitOrderBy.slice(),e.filters.slice(),t,n,e.startAt,e.endAt)}function kc(e,t){return mc(Cc(e),Cc(t))&&e.limitType===t.limitType}function Ac(e){return`${fc(Cc(e))}|lt:${e.limitType}`}function xc(e){return`Query(target=${function(e){let t=e.path.canonicalString();return null!==e.collectionGroup&&(t+=" collectionGroup="+e.collectionGroup),e.filters.length>0&&(t+=`, filters: [${e.filters.map((e=>ic(e))).join(", ")}]`),el(e.limit)||(t+=", limit: "+e.limit),e.orderBy.length>0&&(t+=`, orderBy: [${e.orderBy.map((e=>function(e){return`${e.field.canonicalString()} (${e.dir})`}(e))).join(", ")}]`),e.startAt&&(t+=", startAt: ",t+=e.startAt.inclusive?"b:":"a:",t+=e.startAt.position.map((e=>Ll(e))).join(",")),e.endAt&&(t+=", endAt: ",t+=e.endAt.inclusive?"a:":"b:",t+=e.endAt.position.map((e=>Ll(e))).join(",")),`Target(${t})`}(Cc(e))}; limitType=${e.limitType})`}function Nc(e,t){return t.isFoundDocument()&&function(e,t){const n=t.key.path;return null!==e.collectionGroup?t.key.hasCollectionId(e.collectionGroup)&&e.path.isPrefixOf(n):Ba.isDocumentKey(e.path)?e.path.isEqual(n):e.path.isImmediateParentOf(n)}(e,t)&&function(e,t){for(const n of Ic(e))if(!n.field.isKeyField()&&null===t.data.field(n.field))return!1;return!0}(e,t)&&function(e,t){for(const n of e.filters)if(!n.matches(t))return!1;return!0}(e,t)&&function(e,t){return!(e.startAt&&!function(e,t,n){const i=Hl(e,t,n);return e.inclusive?i<=0:i<0}(e.startAt,Ic(e),t))&&!(e.endAt&&!function(e,t,n){const i=Hl(e,t,n);return e.inclusive?i>=0:i>0}(e.endAt,Ic(e),t))}(e,t)}function Dc(e){return e.collectionGroup||(e.path.length%2==1?e.path.lastSegment():e.path.get(e.path.length-2))}function Lc(e){return(t,n)=>{let i=!1;for(const s of Ic(e)){const e=Oc(s,t,n);if(0!==e)return e;i=i||s.field.isKeyField()}return 0}}function Oc(e,t,n){const i=e.field.isKeyField()?Ba.comparator(t.key,n.key):function(e,t,n){const i=t.data.field(e),s=n.data.field(e);return null!==i&&null!==s?Nl(i,s):ya()}(e.field,t,n);switch(e.dir){case"asc":return i;case"desc":return-1*i;default:return ya()}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Mc{constructor(e,t){this.mapKeyFn=e,this.equalsFn=t,this.inner={},this.innerSize=0}get(e){const t=this.mapKeyFn(e),n=this.inner[t];if(void 0!==n)for(const[t,i]of n)if(this.equalsFn(t,e))return i}has(e){return void 0!==this.get(e)}set(e,t){const n=this.mapKeyFn(e),i=this.inner[n];if(void 0===i)return this.inner[n]=[[e,t]],void this.innerSize++;for(let n=0;n<i.length;n++)if(this.equalsFn(i[n][0],e))return void(i[n]=[e,t]);i.push([e,t]),this.innerSize++}delete(e){const t=this.mapKeyFn(e),n=this.inner[t];if(void 0===n)return!1;for(let i=0;i<n.length;i++)if(this.equalsFn(n[i][0],e))return 1===n.length?delete this.inner[t]:n.splice(i,1),this.innerSize--,!0;return!1}forEach(e){al(this.inner,((t,n)=>{for(const[t,i]of n)e(t,i)}))}isEmpty(){return ll(this.inner)}size(){return this.innerSize}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Pc=new cl(Ba.comparator);function Rc(){return Pc}const Fc=new cl(Ba.comparator);function Vc(...e){let t=Fc;for(const n of e)t=t.insert(n.key,n);return t}function Uc(e){let t=Fc;return e.forEach(((e,n)=>t=t.insert(e,n.overlayedDocument))),t}function zc(){return Bc()}function jc(){return Bc()}function Bc(){return new Mc((e=>e.toString()),((e,t)=>e.isEqual(t)))}const $c=new cl(Ba.comparator),qc=new dl(Ba.comparator);function Hc(...e){let t=qc;for(const n of e)t=t.add(n);return t}const Gc=new dl(Ma);function Wc(){return Gc}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Kc(e,t){if(e.useProto3Json){if(isNaN(t))return{doubleValue:"NaN"};if(t===1/0)return{doubleValue:"Infinity"};if(t===-1/0)return{doubleValue:"-Infinity"}}return{doubleValue:tl(t)?"-0":t}}function Qc(e){return{integerValue:""+e}}function Xc(e,t){return nl(t)?Qc(t):Kc(e,t)}
/**
 * @license
 * Copyright 2018 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Yc{constructor(){this._=void 0}}function Jc(e,t,n){return e instanceof tu?function(e,t){const n={fields:{__type__:{stringValue:"server_timestamp"},__local_write_time__:{timestampValue:{seconds:e.seconds,nanos:e.nanoseconds}}}};return t&&El(t)&&(t=Tl(t)),t&&(n.fields.__previous_value__=t),{mapValue:n}}(n,t):e instanceof nu?iu(e,t):e instanceof su?ru(e,t):function(e,t){const n=eu(e,t),i=au(n)+au(e.gt);return Ml(n)&&Ml(e.gt)?Qc(i):Kc(e.serializer,i)}(e,t)}function Zc(e,t,n){return e instanceof nu?iu(e,t):e instanceof su?ru(e,t):n}function eu(e,t){var n;return e instanceof ou?Ml(n=t)||function(e){return!!e&&"doubleValue"in e}(n)?t:{integerValue:0}:null}class tu extends Yc{}class nu extends Yc{constructor(e){super(),this.elements=e}}function iu(e,t){const n=lu(t);for(const t of e.elements)n.some((e=>Al(e,t)))||n.push(t);return{arrayValue:{values:n}}}class su extends Yc{constructor(e){super(),this.elements=e}}function ru(e,t){let n=lu(t);for(const t of e.elements)n=n.filter((e=>!Al(e,t)));return{arrayValue:{values:n}}}class ou extends Yc{constructor(e,t){super(),this.serializer=e,this.gt=t}}function au(e){return wl(e.integerValue||e.doubleValue)}function lu(e){return Pl(e)&&e.arrayValue.values?e.arrayValue.values.slice():[]}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class cu{constructor(e,t){this.version=e,this.transformResults=t}}class uu{constructor(e,t){this.updateTime=e,this.exists=t}static none(){return new uu}static exists(e){return new uu(void 0,e)}static updateTime(e){return new uu(e)}get isNone(){return void 0===this.updateTime&&void 0===this.exists}isEqual(e){return this.exists===e.exists&&(this.updateTime?!!e.updateTime&&this.updateTime.isEqual(e.updateTime):!e.updateTime)}}function hu(e,t){return void 0!==e.updateTime?t.isFoundDocument()&&t.version.isEqual(e.updateTime):void 0===e.exists||e.exists===t.isFoundDocument()}class du{}function pu(e,t){if(!e.hasLocalMutations||t&&0===t.fields.length)return null;if(null===t)return e.isNoDocument()?new Su(e.key,uu.none()):new yu(e.key,e.data,uu.none());{const n=e.data,i=jl.empty();let s=new dl(ja.comparator);for(let e of t.fields)if(!s.has(e)){let t=n.field(e);null===t&&e.length>1&&(e=e.popLast(),t=n.field(e)),null===t?i.delete(e):i.set(e,t),s=s.add(e)}return new wu(e.key,i,new fl(s.toArray()),uu.none())}}function fu(e,t,n){e instanceof yu?function(e,t,n){const i=e.value.clone(),s=Eu(e.fieldTransforms,t,n.transformResults);i.setAll(s),t.convertToFoundDocument(n.version,i).setHasCommittedMutations()}(e,t,n):e instanceof wu?function(e,t,n){if(!hu(e.precondition,t))return void t.convertToUnknownDocument(n.version);const i=Eu(e.fieldTransforms,t,n.transformResults),s=t.data;s.setAll(bu(e)),s.setAll(i),t.convertToFoundDocument(n.version,s).setHasCommittedMutations()}(e,t,n):function(e,t,n){t.convertToNoDocument(n.version).setHasCommittedMutations()}(0,t,n)}function mu(e,t,n,i){return e instanceof yu?function(e,t,n,i){if(!hu(e.precondition,t))return n;const s=e.value.clone(),r=Tu(e.fieldTransforms,i,t);return s.setAll(r),t.convertToFoundDocument(t.version,s).setHasLocalMutations(),null}(e,t,n,i):e instanceof wu?function(e,t,n,i){if(!hu(e.precondition,t))return n;const s=Tu(e.fieldTransforms,i,t),r=t.data;return r.setAll(bu(e)),r.setAll(s),t.convertToFoundDocument(t.version,r).setHasLocalMutations(),null===n?null:n.unionWith(e.fieldMask.fields).unionWith(e.fieldTransforms.map((e=>e.field)))}(e,t,n,i):function(e,t,n){return hu(e.precondition,t)?(t.convertToNoDocument(t.version).setHasLocalMutations(),null):n}(e,t,n)}function gu(e,t){let n=null;for(const i of e.fieldTransforms){const e=t.data.field(i.field),s=eu(i.transform,e||null);null!=s&&(null===n&&(n=jl.empty()),n.set(i.field,s))}return n||null}function vu(e,t){return e.type===t.type&&!!e.key.isEqual(t.key)&&!!e.precondition.isEqual(t.precondition)&&!!function(e,t){return void 0===e&&void 0===t||!(!e||!t)&&Pa(e,t,((e,t)=>function(e,t){return e.field.isEqual(t.field)&&function(e,t){return e instanceof nu&&t instanceof nu||e instanceof su&&t instanceof su?Pa(e.elements,t.elements,Al):e instanceof ou&&t instanceof ou?Al(e.gt,t.gt):e instanceof tu&&t instanceof tu}(e.transform,t.transform)}(e,t)))}(e.fieldTransforms,t.fieldTransforms)&&(0===e.type?e.value.isEqual(t.value):1!==e.type||e.data.isEqual(t.data)&&e.fieldMask.isEqual(t.fieldMask))}class yu extends du{constructor(e,t,n,i=[]){super(),this.key=e,this.value=t,this.precondition=n,this.fieldTransforms=i,this.type=0}getFieldMask(){return null}}class wu extends du{constructor(e,t,n,i,s=[]){super(),this.key=e,this.data=t,this.fieldMask=n,this.precondition=i,this.fieldTransforms=s,this.type=1}getFieldMask(){return this.fieldMask}}function bu(e){const t=new Map;return e.fieldMask.fields.forEach((n=>{if(!n.isEmpty()){const i=e.data.field(n);t.set(n,i)}})),t}function Eu(e,t,n){const i=new Map;wa(e.length===n.length);for(let s=0;s<n.length;s++){const r=e[s],o=r.transform,a=t.data.field(r.field);i.set(r.field,Zc(o,a,n[s]))}return i}function Tu(e,t,n){const i=new Map;for(const s of e){const e=s.transform,r=n.data.field(s.field);i.set(s.field,Jc(e,r,t))}return i}class Su extends du{constructor(e,t){super(),this.key=e,this.precondition=t,this.type=2,this.fieldTransforms=[]}getFieldMask(){return null}}class Iu extends du{constructor(e,t){super(),this.key=e,this.precondition=t,this.type=3,this.fieldTransforms=[]}getFieldMask(){return null}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Cu{constructor(e,t,n,i){this.batchId=e,this.localWriteTime=t,this.baseMutations=n,this.mutations=i}applyToRemoteDocument(e,t){const n=t.mutationResults;for(let t=0;t<this.mutations.length;t++){const i=this.mutations[t];i.key.isEqual(e.key)&&fu(i,e,n[t])}}applyToLocalView(e,t){for(const n of this.baseMutations)n.key.isEqual(e.key)&&(t=mu(n,e,t,this.localWriteTime));for(const n of this.mutations)n.key.isEqual(e.key)&&(t=mu(n,e,t,this.localWriteTime));return t}applyToLocalDocumentSet(e,t){const n=jc();return this.mutations.forEach((i=>{const s=e.get(i.key),r=s.overlayedDocument;let o=this.applyToLocalView(r,s.mutatedFields);o=t.has(i.key)?null:o;const a=pu(r,o);null!==a&&n.set(i.key,a),r.isValidDocument()||r.convertToNoDocument(Fa.min())})),n}keys(){return this.mutations.reduce(((e,t)=>e.add(t.key)),Hc())}isEqual(e){return this.batchId===e.batchId&&Pa(this.mutations,e.mutations,((e,t)=>vu(e,t)))&&Pa(this.baseMutations,e.baseMutations,((e,t)=>vu(e,t)))}}class _u{constructor(e,t,n,i){this.batch=e,this.commitVersion=t,this.mutationResults=n,this.docVersions=i}static from(e,t,n){wa(e.mutations.length===n.length);let i=$c;const s=e.mutations;for(let e=0;e<s.length;e++)i=i.insert(s[e].key,n[e].version);return new _u(e,t,n,i)}}
/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ku{constructor(e,t){this.largestBatchId=e,this.mutation=t}getKey(){return this.mutation.key}isEqual(e){return null!==e&&this.mutation===e.mutation}toString(){return`Overlay{\n      largestBatchId: ${this.largestBatchId},\n      mutation: ${this.mutation.toString()}\n    }`}}
/**
 * @license
 * Copyright 2023 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
class Au{constructor(e,t){this.count=e,this.unchangedNames=t}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */var xu,Nu;function Du(e){switch(e){default:return ya();case Ea.CANCELLED:case Ea.UNKNOWN:case Ea.DEADLINE_EXCEEDED:case Ea.RESOURCE_EXHAUSTED:case Ea.INTERNAL:case Ea.UNAVAILABLE:case Ea.UNAUTHENTICATED:return!1;case Ea.INVALID_ARGUMENT:case Ea.NOT_FOUND:case Ea.ALREADY_EXISTS:case Ea.PERMISSION_DENIED:case Ea.FAILED_PRECONDITION:case Ea.ABORTED:case Ea.OUT_OF_RANGE:case Ea.UNIMPLEMENTED:case Ea.DATA_LOSS:return!0}}function Lu(e){if(void 0===e)return ma("GRPC error has no .code"),Ea.UNKNOWN;switch(e){case xu.OK:return Ea.OK;case xu.CANCELLED:return Ea.CANCELLED;case xu.UNKNOWN:return Ea.UNKNOWN;case xu.DEADLINE_EXCEEDED:return Ea.DEADLINE_EXCEEDED;case xu.RESOURCE_EXHAUSTED:return Ea.RESOURCE_EXHAUSTED;case xu.INTERNAL:return Ea.INTERNAL;case xu.UNAVAILABLE:return Ea.UNAVAILABLE;case xu.UNAUTHENTICATED:return Ea.UNAUTHENTICATED;case xu.INVALID_ARGUMENT:return Ea.INVALID_ARGUMENT;case xu.NOT_FOUND:return Ea.NOT_FOUND;case xu.ALREADY_EXISTS:return Ea.ALREADY_EXISTS;case xu.PERMISSION_DENIED:return Ea.PERMISSION_DENIED;case xu.FAILED_PRECONDITION:return Ea.FAILED_PRECONDITION;case xu.ABORTED:return Ea.ABORTED;case xu.OUT_OF_RANGE:return Ea.OUT_OF_RANGE;case xu.UNIMPLEMENTED:return Ea.UNIMPLEMENTED;case xu.DATA_LOSS:return Ea.DATA_LOSS;default:return ya()}}(Nu=xu||(xu={}))[Nu.OK=0]="OK",Nu[Nu.CANCELLED=1]="CANCELLED",Nu[Nu.UNKNOWN=2]="UNKNOWN",Nu[Nu.INVALID_ARGUMENT=3]="INVALID_ARGUMENT",Nu[Nu.DEADLINE_EXCEEDED=4]="DEADLINE_EXCEEDED",Nu[Nu.NOT_FOUND=5]="NOT_FOUND",Nu[Nu.ALREADY_EXISTS=6]="ALREADY_EXISTS",Nu[Nu.PERMISSION_DENIED=7]="PERMISSION_DENIED",Nu[Nu.UNAUTHENTICATED=16]="UNAUTHENTICATED",Nu[Nu.RESOURCE_EXHAUSTED=8]="RESOURCE_EXHAUSTED",Nu[Nu.FAILED_PRECONDITION=9]="FAILED_PRECONDITION",Nu[Nu.ABORTED=10]="ABORTED",Nu[Nu.OUT_OF_RANGE=11]="OUT_OF_RANGE",Nu[Nu.UNIMPLEMENTED=12]="UNIMPLEMENTED",Nu[Nu.INTERNAL=13]="INTERNAL",Nu[Nu.UNAVAILABLE=14]="UNAVAILABLE",Nu[Nu.DATA_LOSS=15]="DATA_LOSS";
/**
 * @license
 * Copyright 2023 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
class Ou{constructor(){this.onExistenceFilterMismatchCallbacks=new Map}static get instance(){return Mu}static getOrCreateInstance(){return null===Mu&&(Mu=new Ou),Mu}onExistenceFilterMismatch(e){const t=Symbol();return this.onExistenceFilterMismatchCallbacks.set(t,e),()=>this.onExistenceFilterMismatchCallbacks.delete(t)}notifyOnExistenceFilterMismatch(e){this.onExistenceFilterMismatchCallbacks.forEach((t=>t(e)))}}let Mu=null;
/**
 * @license
 * Copyright 2023 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Pu(){return new TextEncoder}
/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Ru=new la([4294967295,4294967295],0);function Fu(e){const t=Pu().encode(e),n=new aa;return n.update(t),new Uint8Array(n.digest())}function Vu(e){const t=new DataView(e.buffer),n=t.getUint32(0,!0),i=t.getUint32(4,!0),s=t.getUint32(8,!0),r=t.getUint32(12,!0);return[new la([n,i],0),new la([s,r],0)]}class Uu{constructor(e,t,n){if(this.bitmap=e,this.padding=t,this.hashCount=n,t<0||t>=8)throw new zu(`Invalid padding: ${t}`);if(n<0)throw new zu(`Invalid hash count: ${n}`);if(e.length>0&&0===this.hashCount)throw new zu(`Invalid hash count: ${n}`);if(0===e.length&&0!==t)throw new zu(`Invalid padding when bitmap length is 0: ${t}`);this.It=8*e.length-t,this.Tt=la.fromNumber(this.It)}Et(e,t,n){let i=e.add(t.multiply(la.fromNumber(n)));return 1===i.compare(Ru)&&(i=new la([i.getBits(0),i.getBits(1)],0)),i.modulo(this.Tt).toNumber()}At(e){return 0!=(this.bitmap[Math.floor(e/8)]&1<<e%8)}vt(e){if(0===this.It)return!1;const t=Fu(e),[n,i]=Vu(t);for(let e=0;e<this.hashCount;e++){const t=this.Et(n,i,e);if(!this.At(t))return!1}return!0}static create(e,t,n){const i=e%8==0?0:8-e%8,s=new Uint8Array(Math.ceil(e/8)),r=new Uu(s,i,t);return n.forEach((e=>r.insert(e))),r}insert(e){if(0===this.It)return;const t=Fu(e),[n,i]=Vu(t);for(let e=0;e<this.hashCount;e++){const t=this.Et(n,i,e);this.Rt(t)}}Rt(e){const t=Math.floor(e/8),n=e%8;this.bitmap[t]|=1<<n}}class zu extends Error{constructor(){super(...arguments),this.name="BloomFilterError"}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ju{constructor(e,t,n,i,s){this.snapshotVersion=e,this.targetChanges=t,this.targetMismatches=n,this.documentUpdates=i,this.resolvedLimboDocuments=s}static createSynthesizedRemoteEventForCurrentChange(e,t,n){const i=new Map;return i.set(e,Bu.createSynthesizedTargetChangeForCurrentChange(e,t,n)),new ju(Fa.min(),i,new cl(Ma),Rc(),Hc())}}class Bu{constructor(e,t,n,i,s){this.resumeToken=e,this.current=t,this.addedDocuments=n,this.modifiedDocuments=i,this.removedDocuments=s}static createSynthesizedTargetChangeForCurrentChange(e,t,n){return new Bu(n,t,Hc(),Hc(),Hc())}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class $u{constructor(e,t,n,i){this.Pt=e,this.removedTargetIds=t,this.key=n,this.bt=i}}class qu{constructor(e,t){this.targetId=e,this.Vt=t}}class Hu{constructor(e,t,n=gl.EMPTY_BYTE_STRING,i=null){this.state=e,this.targetIds=t,this.resumeToken=n,this.cause=i}}class Gu{constructor(){this.St=0,this.Dt=Qu(),this.Ct=gl.EMPTY_BYTE_STRING,this.xt=!1,this.Nt=!0}get current(){return this.xt}get resumeToken(){return this.Ct}get kt(){return 0!==this.St}get Mt(){return this.Nt}$t(e){e.approximateByteSize()>0&&(this.Nt=!0,this.Ct=e)}Ot(){let e=Hc(),t=Hc(),n=Hc();return this.Dt.forEach(((i,s)=>{switch(s){case 0:e=e.add(i);break;case 2:t=t.add(i);break;case 1:n=n.add(i);break;default:ya()}})),new Bu(this.Ct,this.xt,e,t,n)}Ft(){this.Nt=!1,this.Dt=Qu()}Bt(e,t){this.Nt=!0,this.Dt=this.Dt.insert(e,t)}Lt(e){this.Nt=!0,this.Dt=this.Dt.remove(e)}qt(){this.St+=1}Ut(){this.St-=1}Kt(){this.Nt=!0,this.xt=!0}}class Wu{constructor(e){this.Gt=e,this.Qt=new Map,this.jt=Rc(),this.zt=Ku(),this.Wt=new cl(Ma)}Ht(e){for(const t of e.Pt)e.bt&&e.bt.isFoundDocument()?this.Jt(t,e.bt):this.Yt(t,e.key,e.bt);for(const t of e.removedTargetIds)this.Yt(t,e.key,e.bt)}Xt(e){this.forEachTarget(e,(t=>{const n=this.Zt(t);switch(e.state){case 0:this.te(t)&&n.$t(e.resumeToken);break;case 1:n.Ut(),n.kt||n.Ft(),n.$t(e.resumeToken);break;case 2:n.Ut(),n.kt||this.removeTarget(t);break;case 3:this.te(t)&&(n.Kt(),n.$t(e.resumeToken));break;case 4:this.te(t)&&(this.ee(t),n.$t(e.resumeToken));break;default:ya()}}))}forEachTarget(e,t){e.targetIds.length>0?e.targetIds.forEach(t):this.Qt.forEach(((e,n)=>{this.te(n)&&t(n)}))}ne(e){var t;const n=e.targetId,i=e.Vt.count,s=this.se(n);if(s){const r=s.target;if(gc(r))if(0===i){const e=new Ba(r.path);this.Yt(n,e,$l.newNoDocument(e,Fa.min()))}else wa(1===i);else{const s=this.ie(n);if(s!==i){const i=this.re(e,s);if(0!==i){this.ee(n);const e=2===i?"TargetPurposeExistenceFilterMismatchBloom":"TargetPurposeExistenceFilterMismatch";this.Wt=this.Wt.insert(n,e)}null===(t=Ou.instance)||void 0===t||t.notifyOnExistenceFilterMismatch(function(e,t,n){var i,s,r,o,a,l;const c={localCacheCount:t,existenceFilterCount:n.count},u=n.unchangedNames;return u&&(c.bloomFilter={applied:0===e,hashCount:null!==(i=null==u?void 0:u.hashCount)&&void 0!==i?i:0,bitmapLength:null!==(o=null===(r=null===(s=null==u?void 0:u.bits)||void 0===s?void 0:s.bitmap)||void 0===r?void 0:r.length)&&void 0!==o?o:0,padding:null!==(l=null===(a=null==u?void 0:u.bits)||void 0===a?void 0:a.padding)&&void 0!==l?l:0}),c}(i,s,e.Vt))}}}}re(e,t){const{unchangedNames:n,count:i}=e.Vt;if(!n||!n.bits)return 1;const{bits:{bitmap:s="",padding:r=0},hashCount:o=0}=n;let a,l;try{a=bl(s).toUint8Array()}catch(e){if(e instanceof ml)return ga("Decoding the base64 bloom filter in existence filter failed ("+e.message+"); ignoring the bloom filter and falling back to full re-query."),1;throw e}try{l=new Uu(a,r,o)}catch(e){return ga(e instanceof zu?"BloomFilter error: ":"Applying bloom filter failed: ",e),1}return 0===l.It?1:i!==t-this.oe(e.targetId,l)?2:0}oe(e,t){const n=this.Gt.getRemoteKeysForTarget(e);let i=0;return n.forEach((n=>{const s=this.Gt.ue(),r=`projects/${s.projectId}/databases/${s.database}/documents/${n.path.canonicalString()}`;t.vt(r)||(this.Yt(e,n,null),i++)})),i}ce(e){const t=new Map;this.Qt.forEach(((n,i)=>{const s=this.se(i);if(s){if(n.current&&gc(s.target)){const t=new Ba(s.target.path);null!==this.jt.get(t)||this.ae(i,t)||this.Yt(i,t,$l.newNoDocument(t,e))}n.Mt&&(t.set(i,n.Ot()),n.Ft())}}));let n=Hc();this.zt.forEach(((e,t)=>{let i=!0;t.forEachWhile((e=>{const t=this.se(e);return!t||"TargetPurposeLimboResolution"===t.purpose||(i=!1,!1)})),i&&(n=n.add(e))})),this.jt.forEach(((t,n)=>n.setReadTime(e)));const i=new ju(e,t,this.Wt,this.jt,n);return this.jt=Rc(),this.zt=Ku(),this.Wt=new cl(Ma),i}Jt(e,t){if(!this.te(e))return;const n=this.ae(e,t.key)?2:0;this.Zt(e).Bt(t.key,n),this.jt=this.jt.insert(t.key,t),this.zt=this.zt.insert(t.key,this.he(t.key).add(e))}Yt(e,t,n){if(!this.te(e))return;const i=this.Zt(e);this.ae(e,t)?i.Bt(t,1):i.Lt(t),this.zt=this.zt.insert(t,this.he(t).delete(e)),n&&(this.jt=this.jt.insert(t,n))}removeTarget(e){this.Qt.delete(e)}ie(e){const t=this.Zt(e).Ot();return this.Gt.getRemoteKeysForTarget(e).size+t.addedDocuments.size-t.removedDocuments.size}qt(e){this.Zt(e).qt()}Zt(e){let t=this.Qt.get(e);return t||(t=new Gu,this.Qt.set(e,t)),t}he(e){let t=this.zt.get(e);return t||(t=new dl(Ma),this.zt=this.zt.insert(e,t)),t}te(e){const t=null!==this.se(e);return t||fa("WatchChangeAggregator","Detected inactive target",e),t}se(e){const t=this.Qt.get(e);return t&&t.kt?null:this.Gt.le(e)}ee(e){this.Qt.set(e,new Gu),this.Gt.getRemoteKeysForTarget(e).forEach((t=>{this.Yt(e,t,null)}))}ae(e,t){return this.Gt.getRemoteKeysForTarget(e).has(t)}}function Ku(){return new cl(Ba.comparator)}function Qu(){return new cl(Ba.comparator)}const Xu={asc:"ASCENDING",desc:"DESCENDING"},Yu={"<":"LESS_THAN","<=":"LESS_THAN_OR_EQUAL",">":"GREATER_THAN",">=":"GREATER_THAN_OR_EQUAL","==":"EQUAL","!=":"NOT_EQUAL","array-contains":"ARRAY_CONTAINS",in:"IN","not-in":"NOT_IN","array-contains-any":"ARRAY_CONTAINS_ANY"},Ju={and:"AND",or:"OR"};class Zu{constructor(e,t){this.databaseId=e,this.useProto3Json=t}}function eh(e,t){return e.useProto3Json||el(t)?t:{value:t}}function th(e,t){return e.useProto3Json?`${new Date(1e3*t.seconds).toISOString().replace(/\.\d*/,"").replace("Z","")}.${("000000000"+t.nanoseconds).slice(-9)}Z`:{seconds:""+t.seconds,nanos:t.nanoseconds}}function nh(e,t){return e.useProto3Json?t.toBase64():t.toUint8Array()}function ih(e,t){return th(e,t.toTimestamp())}function sh(e){return wa(!!e),Fa.fromTimestamp(function(e){const t=yl(e);return new Ra(t.seconds,t.nanos)}(e))}function rh(e,t){return function(e){return new Ua(["projects",e.projectId,"databases",e.database])}(e).child("documents").child(t).canonicalString()}function oh(e){const t=Ua.fromString(e);return wa(_h(t)),t}function ah(e,t){return rh(e.databaseId,t.path)}function lh(e,t){const n=oh(t);if(n.get(1)!==e.databaseId.projectId)throw new Ta(Ea.INVALID_ARGUMENT,"Tried to deserialize key from different project: "+n.get(1)+" vs "+e.databaseId.projectId);if(n.get(3)!==e.databaseId.database)throw new Ta(Ea.INVALID_ARGUMENT,"Tried to deserialize key from different database: "+n.get(3)+" vs "+e.databaseId.database);return new Ba(dh(n))}function ch(e,t){return rh(e.databaseId,t)}function uh(e){const t=oh(e);return 4===t.length?Ua.emptyPath():dh(t)}function hh(e){return new Ua(["projects",e.databaseId.projectId,"databases",e.databaseId.database]).canonicalString()}function dh(e){return wa(e.length>4&&"documents"===e.get(4)),e.popFirst(5)}function ph(e,t,n){return{name:ah(e,t),fields:n.value.mapValue.fields}}function fh(e,t){let n;if(t instanceof yu)n={update:ph(e,t.key,t.value)};else if(t instanceof Su)n={delete:ah(e,t.key)};else if(t instanceof wu)n={update:ph(e,t.key,t.data),updateMask:Ch(t.fieldMask)};else{if(!(t instanceof Iu))return ya();n={verify:ah(e,t.key)}}return t.fieldTransforms.length>0&&(n.updateTransforms=t.fieldTransforms.map((e=>function(e,t){const n=t.transform;if(n instanceof tu)return{fieldPath:t.field.canonicalString(),setToServerValue:"REQUEST_TIME"};if(n instanceof nu)return{fieldPath:t.field.canonicalString(),appendMissingElements:{values:n.elements}};if(n instanceof su)return{fieldPath:t.field.canonicalString(),removeAllFromArray:{values:n.elements}};if(n instanceof ou)return{fieldPath:t.field.canonicalString(),increment:n.gt};throw ya()}(0,e)))),t.precondition.isNone||(n.currentDocument=function(e,t){return void 0!==t.updateTime?{updateTime:ih(e,t.updateTime)}:void 0!==t.exists?{exists:t.exists}:ya()}(e,t.precondition)),n}function mh(e,t){return{documents:[ch(e,t.path)]}}function gh(e,t){const n={structuredQuery:{}},i=t.path;null!==t.collectionGroup?(n.parent=ch(e,i),n.structuredQuery.from=[{collectionId:t.collectionGroup,allDescendants:!0}]):(n.parent=ch(e,i.popLast()),n.structuredQuery.from=[{collectionId:i.lastSegment()}]);const s=function(e){if(0!==e.length)return Ih(Yl.create(e,"and"))}(t.filters);s&&(n.structuredQuery.where=s);const r=function(e){if(0!==e.length)return e.map((e=>function(e){return{field:Th(e.field),direction:wh(e.dir)}}(e)))}(t.orderBy);r&&(n.structuredQuery.orderBy=r);const o=eh(e,t.limit);var a;return null!==o&&(n.structuredQuery.limit=o),t.startAt&&(n.structuredQuery.startAt={before:(a=t.startAt).inclusive,values:a.position}),t.endAt&&(n.structuredQuery.endAt=function(e){return{before:!e.inclusive,values:e.position}}(t.endAt)),n}function vh(e){let t=uh(e.parent);const n=e.structuredQuery,i=n.from?n.from.length:0;let s=null;if(i>0){wa(1===i);const e=n.from[0];e.allDescendants?s=e.collectionId:t=t.child(e.collectionId)}let r=[];n.where&&(r=function(e){const t=yh(e);return t instanceof Yl&&Zl(t)?t.getFilters():[t]}(n.where));let o=[];n.orderBy&&(o=n.orderBy.map((e=>function(e){return new Wl(Sh(e.field),function(e){switch(e){case"ASCENDING":return"asc";case"DESCENDING":return"desc";default:return}}(e.direction))}(e))));let a=null;n.limit&&(a=function(e){let t;return t="object"==typeof e?e.value:e,el(t)?null:t}(n.limit));let l=null;n.startAt&&(l=function(e){const t=!!e.before,n=e.values||[];return new ql(n,t)}(n.startAt));let c=null;return n.endAt&&(c=function(e){const t=!e.before,n=e.values||[];return new ql(n,t)}(n.endAt)),yc(t,s,o,r,a,"F",l,c)}function yh(e){return void 0!==e.unaryFilter?function(e){switch(e.unaryFilter.op){case"IS_NAN":const t=Sh(e.unaryFilter.field);return Xl.create(t,"==",{doubleValue:NaN});case"IS_NULL":const n=Sh(e.unaryFilter.field);return Xl.create(n,"==",{nullValue:"NULL_VALUE"});case"IS_NOT_NAN":const i=Sh(e.unaryFilter.field);return Xl.create(i,"!=",{doubleValue:NaN});case"IS_NOT_NULL":const s=Sh(e.unaryFilter.field);return Xl.create(s,"!=",{nullValue:"NULL_VALUE"});default:return ya()}}(e):void 0!==e.fieldFilter?function(e){return Xl.create(Sh(e.fieldFilter.field),function(e){switch(e){case"EQUAL":return"==";case"NOT_EQUAL":return"!=";case"GREATER_THAN":return">";case"GREATER_THAN_OR_EQUAL":return">=";case"LESS_THAN":return"<";case"LESS_THAN_OR_EQUAL":return"<=";case"ARRAY_CONTAINS":return"array-contains";case"IN":return"in";case"NOT_IN":return"not-in";case"ARRAY_CONTAINS_ANY":return"array-contains-any";default:return ya()}}(e.fieldFilter.op),e.fieldFilter.value)}(e):void 0!==e.compositeFilter?function(e){return Yl.create(e.compositeFilter.filters.map((e=>yh(e))),function(e){switch(e){case"AND":return"and";case"OR":return"or";default:return ya()}}(e.compositeFilter.op))}(e):ya()}function wh(e){return Xu[e]}function bh(e){return Yu[e]}function Eh(e){return Ju[e]}function Th(e){return{fieldPath:e.canonicalString()}}function Sh(e){return ja.fromServerFormat(e.fieldPath)}function Ih(e){return e instanceof Xl?function(e){if("=="===e.op){if(Fl(e.value))return{unaryFilter:{field:Th(e.field),op:"IS_NAN"}};if(Rl(e.value))return{unaryFilter:{field:Th(e.field),op:"IS_NULL"}}}else if("!="===e.op){if(Fl(e.value))return{unaryFilter:{field:Th(e.field),op:"IS_NOT_NAN"}};if(Rl(e.value))return{unaryFilter:{field:Th(e.field),op:"IS_NOT_NULL"}}}return{fieldFilter:{field:Th(e.field),op:bh(e.op),value:e.value}}}(e):e instanceof Yl?function(e){const t=e.getFilters().map((e=>Ih(e)));return 1===t.length?t[0]:{compositeFilter:{op:Eh(e.op),filters:t}}}(e):ya()}function Ch(e){const t=[];return e.fields.forEach((e=>t.push(e.canonicalString()))),{fieldPaths:t}}function _h(e){return e.length>=4&&"projects"===e.get(0)&&"databases"===e.get(2)}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class kh{constructor(e,t,n,i,s=Fa.min(),r=Fa.min(),o=gl.EMPTY_BYTE_STRING,a=null){this.target=e,this.targetId=t,this.purpose=n,this.sequenceNumber=i,this.snapshotVersion=s,this.lastLimboFreeSnapshotVersion=r,this.resumeToken=o,this.expectedCount=a}withSequenceNumber(e){return new kh(this.target,this.targetId,this.purpose,e,this.snapshotVersion,this.lastLimboFreeSnapshotVersion,this.resumeToken,this.expectedCount)}withResumeToken(e,t){return new kh(this.target,this.targetId,this.purpose,this.sequenceNumber,t,this.lastLimboFreeSnapshotVersion,e,null)}withExpectedCount(e){return new kh(this.target,this.targetId,this.purpose,this.sequenceNumber,this.snapshotVersion,this.lastLimboFreeSnapshotVersion,this.resumeToken,e)}withLastLimboFreeSnapshotVersion(e){return new kh(this.target,this.targetId,this.purpose,this.sequenceNumber,this.snapshotVersion,e,this.resumeToken,this.expectedCount)}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ah{constructor(e){this.fe=e}}function xh(e){const t=vh({parent:e.parent,structuredQuery:e.structuredQuery});return"LAST"===e.limitType?_c(t,t.limit,"L"):t}
/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Nh{constructor(){}_e(e,t){this.me(e,t),t.ge()}me(e,t){if("nullValue"in e)this.ye(t,5);else if("booleanValue"in e)this.ye(t,10),t.pe(e.booleanValue?1:0);else if("integerValue"in e)this.ye(t,15),t.pe(wl(e.integerValue));else if("doubleValue"in e){const n=wl(e.doubleValue);isNaN(n)?this.ye(t,13):(this.ye(t,15),tl(n)?t.pe(0):t.pe(n))}else if("timestampValue"in e){const n=e.timestampValue;this.ye(t,20),"string"==typeof n?t.Ie(n):(t.Ie(`${n.seconds||""}`),t.pe(n.nanos||0))}else if("stringValue"in e)this.Te(e.stringValue,t),this.Ee(t);else if("bytesValue"in e)this.ye(t,30),t.Ae(bl(e.bytesValue)),this.Ee(t);else if("referenceValue"in e)this.ve(e.referenceValue,t);else if("geoPointValue"in e){const n=e.geoPointValue;this.ye(t,45),t.pe(n.latitude||0),t.pe(n.longitude||0)}else"mapValue"in e?zl(e)?this.ye(t,Number.MAX_SAFE_INTEGER):(this.Re(e.mapValue,t),this.Ee(t)):"arrayValue"in e?(this.Pe(e.arrayValue,t),this.Ee(t)):ya()}Te(e,t){this.ye(t,25),this.be(e,t)}be(e,t){t.Ie(e)}Re(e,t){const n=e.fields||{};this.ye(t,55);for(const e of Object.keys(n))this.Te(e,t),this.me(n[e],t)}Pe(e,t){const n=e.values||[];this.ye(t,50);for(const e of n)this.me(e,t)}ve(e,t){this.ye(t,37),Ba.fromName(e).path.forEach((e=>{this.ye(t,60),this.be(e,t)}))}ye(e,t){e.pe(t)}Ee(e){e.pe(2)}}Nh.Ve=new Nh;
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
class Dh{constructor(){this.rn=new Lh}addToCollectionParentIndex(e,t){return this.rn.add(t),Ya.resolve()}getCollectionParents(e,t){return Ya.resolve(this.rn.getEntries(t))}addFieldIndex(e,t){return Ya.resolve()}deleteFieldIndex(e,t){return Ya.resolve()}getDocumentsMatchingTarget(e,t){return Ya.resolve(null)}getIndexType(e,t){return Ya.resolve(0)}getFieldIndexes(e,t){return Ya.resolve([])}getNextCollectionGroupToUpdate(e){return Ya.resolve(null)}getMinOffset(e,t){return Ya.resolve(Ga.min())}getMinOffsetFromCollectionGroup(e,t){return Ya.resolve(Ga.min())}updateCollectionGroup(e,t,n){return Ya.resolve()}updateIndexEntries(e,t){return Ya.resolve()}}class Lh{constructor(){this.index={}}add(e){const t=e.lastSegment(),n=e.popLast(),i=this.index[t]||new dl(Ua.comparator),s=!i.has(n);return this.index[t]=i.add(n),s}has(e){const t=e.lastSegment(),n=e.popLast(),i=this.index[t];return i&&i.has(n)}getEntries(e){return(this.index[e]||new dl(Ua.comparator)).toArray()}}
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */new Uint8Array(0);class Oh{constructor(e,t,n){this.cacheSizeCollectionThreshold=e,this.percentileToCollect=t,this.maximumSequenceNumbersToCollect=n}static withCacheSize(e){return new Oh(e,Oh.DEFAULT_COLLECTION_PERCENTILE,Oh.DEFAULT_MAX_SEQUENCE_NUMBERS_TO_COLLECT)}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */Oh.DEFAULT_COLLECTION_PERCENTILE=10,Oh.DEFAULT_MAX_SEQUENCE_NUMBERS_TO_COLLECT=1e3,Oh.DEFAULT=new Oh(41943040,Oh.DEFAULT_COLLECTION_PERCENTILE,Oh.DEFAULT_MAX_SEQUENCE_NUMBERS_TO_COLLECT),Oh.DISABLED=new Oh(-1,0,0);
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
class Mh{constructor(e){this.Nn=e}next(){return this.Nn+=2,this.Nn}static kn(){return new Mh(0)}static Mn(){return new Mh(-1)}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
class Ph{constructor(){this.changes=new Mc((e=>e.toString()),((e,t)=>e.isEqual(t))),this.changesApplied=!1}addEntry(e){this.assertNotApplied(),this.changes.set(e.key,e)}removeEntry(e,t){this.assertNotApplied(),this.changes.set(e,$l.newInvalidDocument(e).setReadTime(t))}getEntry(e,t){this.assertNotApplied();const n=this.changes.get(t);return void 0!==n?Ya.resolve(n):this.getFromCache(e,t)}getEntries(e,t){return this.getAllFromCache(e,t)}apply(e){return this.assertNotApplied(),this.changesApplied=!0,this.applyChanges(e)}assertNotApplied(){}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
class Rh{constructor(e,t){this.overlayedDocument=e,this.mutatedFields=t}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Fh{constructor(e,t,n,i){this.remoteDocumentCache=e,this.mutationQueue=t,this.documentOverlayCache=n,this.indexManager=i}getDocument(e,t){let n=null;return this.documentOverlayCache.getOverlay(e,t).next((i=>(n=i,this.remoteDocumentCache.getEntry(e,t)))).next((e=>(null!==n&&mu(n.mutation,e,fl.empty(),Ra.now()),e)))}getDocuments(e,t){return this.remoteDocumentCache.getEntries(e,t).next((t=>this.getLocalViewOfDocuments(e,t,Hc()).next((()=>t))))}getLocalViewOfDocuments(e,t,n=Hc()){const i=zc();return this.populateOverlays(e,i,t).next((()=>this.computeViews(e,t,i,n).next((e=>{let t=Vc();return e.forEach(((e,n)=>{t=t.insert(e,n.overlayedDocument)})),t}))))}getOverlayedDocuments(e,t){const n=zc();return this.populateOverlays(e,n,t).next((()=>this.computeViews(e,t,n,Hc())))}populateOverlays(e,t,n){const i=[];return n.forEach((e=>{t.has(e)||i.push(e)})),this.documentOverlayCache.getOverlays(e,i).next((e=>{e.forEach(((e,n)=>{t.set(e,n)}))}))}computeViews(e,t,n,i){let s=Rc();const r=Bc(),o=Bc();return t.forEach(((e,t)=>{const o=n.get(t.key);i.has(t.key)&&(void 0===o||o.mutation instanceof wu)?s=s.insert(t.key,t):void 0!==o?(r.set(t.key,o.mutation.getFieldMask()),mu(o.mutation,t,o.mutation.getFieldMask(),Ra.now())):r.set(t.key,fl.empty())})),this.recalculateAndSaveOverlays(e,s).next((e=>(e.forEach(((e,t)=>r.set(e,t))),t.forEach(((e,t)=>{var n;return o.set(e,new Rh(t,null!==(n=r.get(e))&&void 0!==n?n:null))})),o)))}recalculateAndSaveOverlays(e,t){const n=Bc();let i=new cl(((e,t)=>e-t)),s=Hc();return this.mutationQueue.getAllMutationBatchesAffectingDocumentKeys(e,t).next((e=>{for(const s of e)s.keys().forEach((e=>{const r=t.get(e);if(null===r)return;let o=n.get(e)||fl.empty();o=s.applyToLocalView(r,o),n.set(e,o);const a=(i.get(s.batchId)||Hc()).add(e);i=i.insert(s.batchId,a)}))})).next((()=>{const r=[],o=i.getReverseIterator();for(;o.hasNext();){const i=o.getNext(),a=i.key,l=i.value,c=jc();l.forEach((e=>{if(!s.has(e)){const i=pu(t.get(e),n.get(e));null!==i&&c.set(e,i),s=s.add(e)}})),r.push(this.documentOverlayCache.saveOverlays(e,a,c))}return Ya.waitFor(r)})).next((()=>n))}recalculateAndSaveOverlaysForDocumentKeys(e,t){return this.remoteDocumentCache.getEntries(e,t).next((t=>this.recalculateAndSaveOverlays(e,t)))}getDocumentsMatchingQuery(e,t,n){return function(e){return Ba.isDocumentKey(e.path)&&null===e.collectionGroup&&0===e.filters.length}(t)?this.getDocumentsMatchingDocumentQuery(e,t.path):Sc(t)?this.getDocumentsMatchingCollectionGroupQuery(e,t,n):this.getDocumentsMatchingCollectionQuery(e,t,n)}getNextDocuments(e,t,n,i){return this.remoteDocumentCache.getAllFromCollectionGroup(e,t,n,i).next((s=>{const r=i-s.size>0?this.documentOverlayCache.getOverlaysForCollectionGroup(e,t,n.largestBatchId,i-s.size):Ya.resolve(zc());let o=-1,a=s;return r.next((t=>Ya.forEach(t,((t,n)=>(o<n.largestBatchId&&(o=n.largestBatchId),s.get(t)?Ya.resolve():this.remoteDocumentCache.getEntry(e,t).next((e=>{a=a.insert(t,e)}))))).next((()=>this.populateOverlays(e,t,s))).next((()=>this.computeViews(e,a,t,Hc()))).next((e=>({batchId:o,changes:Uc(e)})))))}))}getDocumentsMatchingDocumentQuery(e,t){return this.getDocument(e,new Ba(t)).next((e=>{let t=Vc();return e.isFoundDocument()&&(t=t.insert(e.key,e)),t}))}getDocumentsMatchingCollectionGroupQuery(e,t,n){const i=t.collectionGroup;let s=Vc();return this.indexManager.getCollectionParents(e,i).next((r=>Ya.forEach(r,(r=>{const o=function(e,t){return new vc(t,null,e.explicitOrderBy.slice(),e.filters.slice(),e.limit,e.limitType,e.startAt,e.endAt)}(t,r.child(i));return this.getDocumentsMatchingCollectionQuery(e,o,n).next((e=>{e.forEach(((e,t)=>{s=s.insert(e,t)}))}))})).next((()=>s))))}getDocumentsMatchingCollectionQuery(e,t,n){let i;return this.documentOverlayCache.getOverlaysForCollection(e,t.path,n.largestBatchId).next((s=>(i=s,this.remoteDocumentCache.getDocumentsMatchingQuery(e,t,n,i)))).next((e=>{i.forEach(((t,n)=>{const i=n.getKey();null===e.get(i)&&(e=e.insert(i,$l.newInvalidDocument(i)))}));let n=Vc();return e.forEach(((e,s)=>{const r=i.get(e);void 0!==r&&mu(r.mutation,s,fl.empty(),Ra.now()),Nc(t,s)&&(n=n.insert(e,s))})),n}))}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Vh{constructor(e){this.serializer=e,this.cs=new Map,this.hs=new Map}getBundleMetadata(e,t){return Ya.resolve(this.cs.get(t))}saveBundleMetadata(e,t){var n;return this.cs.set(t.id,{id:(n=t).id,version:n.version,createTime:sh(n.createTime)}),Ya.resolve()}getNamedQuery(e,t){return Ya.resolve(this.hs.get(t))}saveNamedQuery(e,t){return this.hs.set(t.name,function(e){return{name:e.name,query:xh(e.bundledQuery),readTime:sh(e.readTime)}}(t)),Ya.resolve()}}
/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Uh{constructor(){this.overlays=new cl(Ba.comparator),this.ls=new Map}getOverlay(e,t){return Ya.resolve(this.overlays.get(t))}getOverlays(e,t){const n=zc();return Ya.forEach(t,(t=>this.getOverlay(e,t).next((e=>{null!==e&&n.set(t,e)})))).next((()=>n))}saveOverlays(e,t,n){return n.forEach(((n,i)=>{this.we(e,t,i)})),Ya.resolve()}removeOverlaysForBatchId(e,t,n){const i=this.ls.get(n);return void 0!==i&&(i.forEach((e=>this.overlays=this.overlays.remove(e))),this.ls.delete(n)),Ya.resolve()}getOverlaysForCollection(e,t,n){const i=zc(),s=t.length+1,r=new Ba(t.child("")),o=this.overlays.getIteratorFrom(r);for(;o.hasNext();){const e=o.getNext().value,r=e.getKey();if(!t.isPrefixOf(r.path))break;r.path.length===s&&e.largestBatchId>n&&i.set(e.getKey(),e)}return Ya.resolve(i)}getOverlaysForCollectionGroup(e,t,n,i){let s=new cl(((e,t)=>e-t));const r=this.overlays.getIterator();for(;r.hasNext();){const e=r.getNext().value;if(e.getKey().getCollectionGroup()===t&&e.largestBatchId>n){let t=s.get(e.largestBatchId);null===t&&(t=zc(),s=s.insert(e.largestBatchId,t)),t.set(e.getKey(),e)}}const o=zc(),a=s.getIterator();for(;a.hasNext()&&(a.getNext().value.forEach(((e,t)=>o.set(e,t))),!(o.size()>=i)););return Ya.resolve(o)}we(e,t,n){const i=this.overlays.get(n.key);if(null!==i){const e=this.ls.get(i.largestBatchId).delete(n.key);this.ls.set(i.largestBatchId,e)}this.overlays=this.overlays.insert(n.key,new ku(t,n));let s=this.ls.get(t);void 0===s&&(s=Hc(),this.ls.set(t,s)),this.ls.set(t,s.add(n.key))}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class zh{constructor(){this.fs=new dl(jh.ds),this.ws=new dl(jh._s)}isEmpty(){return this.fs.isEmpty()}addReference(e,t){const n=new jh(e,t);this.fs=this.fs.add(n),this.ws=this.ws.add(n)}gs(e,t){e.forEach((e=>this.addReference(e,t)))}removeReference(e,t){this.ys(new jh(e,t))}ps(e,t){e.forEach((e=>this.removeReference(e,t)))}Is(e){const t=new Ba(new Ua([])),n=new jh(t,e),i=new jh(t,e+1),s=[];return this.ws.forEachInRange([n,i],(e=>{this.ys(e),s.push(e.key)})),s}Ts(){this.fs.forEach((e=>this.ys(e)))}ys(e){this.fs=this.fs.delete(e),this.ws=this.ws.delete(e)}Es(e){const t=new Ba(new Ua([])),n=new jh(t,e),i=new jh(t,e+1);let s=Hc();return this.ws.forEachInRange([n,i],(e=>{s=s.add(e.key)})),s}containsKey(e){const t=new jh(e,0),n=this.fs.firstAfterOrEqual(t);return null!==n&&e.isEqual(n.key)}}class jh{constructor(e,t){this.key=e,this.As=t}static ds(e,t){return Ba.comparator(e.key,t.key)||Ma(e.As,t.As)}static _s(e,t){return Ma(e.As,t.As)||Ba.comparator(e.key,t.key)}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Bh{constructor(e,t){this.indexManager=e,this.referenceDelegate=t,this.mutationQueue=[],this.vs=1,this.Rs=new dl(jh.ds)}checkEmpty(e){return Ya.resolve(0===this.mutationQueue.length)}addMutationBatch(e,t,n,i){const s=this.vs;this.vs++,this.mutationQueue.length>0&&this.mutationQueue[this.mutationQueue.length-1];const r=new Cu(s,t,n,i);this.mutationQueue.push(r);for(const t of i)this.Rs=this.Rs.add(new jh(t.key,s)),this.indexManager.addToCollectionParentIndex(e,t.key.path.popLast());return Ya.resolve(r)}lookupMutationBatch(e,t){return Ya.resolve(this.Ps(t))}getNextMutationBatchAfterBatchId(e,t){const n=t+1,i=this.bs(n),s=i<0?0:i;return Ya.resolve(this.mutationQueue.length>s?this.mutationQueue[s]:null)}getHighestUnacknowledgedBatchId(){return Ya.resolve(0===this.mutationQueue.length?-1:this.vs-1)}getAllMutationBatches(e){return Ya.resolve(this.mutationQueue.slice())}getAllMutationBatchesAffectingDocumentKey(e,t){const n=new jh(t,0),i=new jh(t,Number.POSITIVE_INFINITY),s=[];return this.Rs.forEachInRange([n,i],(e=>{const t=this.Ps(e.As);s.push(t)})),Ya.resolve(s)}getAllMutationBatchesAffectingDocumentKeys(e,t){let n=new dl(Ma);return t.forEach((e=>{const t=new jh(e,0),i=new jh(e,Number.POSITIVE_INFINITY);this.Rs.forEachInRange([t,i],(e=>{n=n.add(e.As)}))})),Ya.resolve(this.Vs(n))}getAllMutationBatchesAffectingQuery(e,t){const n=t.path,i=n.length+1;let s=n;Ba.isDocumentKey(s)||(s=s.child(""));const r=new jh(new Ba(s),0);let o=new dl(Ma);return this.Rs.forEachWhile((e=>{const t=e.key.path;return!!n.isPrefixOf(t)&&(t.length===i&&(o=o.add(e.As)),!0)}),r),Ya.resolve(this.Vs(o))}Vs(e){const t=[];return e.forEach((e=>{const n=this.Ps(e);null!==n&&t.push(n)})),t}removeMutationBatch(e,t){wa(0===this.Ss(t.batchId,"removed")),this.mutationQueue.shift();let n=this.Rs;return Ya.forEach(t.mutations,(i=>{const s=new jh(i.key,t.batchId);return n=n.delete(s),this.referenceDelegate.markPotentiallyOrphaned(e,i.key)})).next((()=>{this.Rs=n}))}Cn(e){}containsKey(e,t){const n=new jh(t,0),i=this.Rs.firstAfterOrEqual(n);return Ya.resolve(t.isEqual(i&&i.key))}performConsistencyCheck(e){return this.mutationQueue.length,Ya.resolve()}Ss(e,t){return this.bs(e)}bs(e){return 0===this.mutationQueue.length?0:e-this.mutationQueue[0].batchId}Ps(e){const t=this.bs(e);return t<0||t>=this.mutationQueue.length?null:this.mutationQueue[t]}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class $h{constructor(e){this.Ds=e,this.docs=new cl(Ba.comparator),this.size=0}setIndexManager(e){this.indexManager=e}addEntry(e,t){const n=t.key,i=this.docs.get(n),s=i?i.size:0,r=this.Ds(t);return this.docs=this.docs.insert(n,{document:t.mutableCopy(),size:r}),this.size+=r-s,this.indexManager.addToCollectionParentIndex(e,n.path.popLast())}removeEntry(e){const t=this.docs.get(e);t&&(this.docs=this.docs.remove(e),this.size-=t.size)}getEntry(e,t){const n=this.docs.get(t);return Ya.resolve(n?n.document.mutableCopy():$l.newInvalidDocument(t))}getEntries(e,t){let n=Rc();return t.forEach((e=>{const t=this.docs.get(e);n=n.insert(e,t?t.document.mutableCopy():$l.newInvalidDocument(e))})),Ya.resolve(n)}getDocumentsMatchingQuery(e,t,n,i){let s=Rc();const r=t.path,o=new Ba(r.child("")),a=this.docs.getIteratorFrom(o);for(;a.hasNext();){const{key:e,value:{document:o}}=a.getNext();if(!r.isPrefixOf(e.path))break;e.path.length>r.length+1||Wa(Ha(o),n)<=0||(i.has(o.key)||Nc(t,o))&&(s=s.insert(o.key,o.mutableCopy()))}return Ya.resolve(s)}getAllFromCollectionGroup(e,t,n,i){ya()}Cs(e,t){return Ya.forEach(this.docs,(e=>t(e)))}newChangeBuffer(e){return new qh(this)}getSize(e){return Ya.resolve(this.size)}}class qh extends Ph{constructor(e){super(),this.os=e}applyChanges(e){const t=[];return this.changes.forEach(((n,i)=>{i.isValidDocument()?t.push(this.os.addEntry(e,i)):this.os.removeEntry(n)})),Ya.waitFor(t)}getFromCache(e,t){return this.os.getEntry(e,t)}getAllFromCache(e,t){return this.os.getEntries(e,t)}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Hh{constructor(e){this.persistence=e,this.xs=new Mc((e=>fc(e)),mc),this.lastRemoteSnapshotVersion=Fa.min(),this.highestTargetId=0,this.Ns=0,this.ks=new zh,this.targetCount=0,this.Ms=Mh.kn()}forEachTarget(e,t){return this.xs.forEach(((e,n)=>t(n))),Ya.resolve()}getLastRemoteSnapshotVersion(e){return Ya.resolve(this.lastRemoteSnapshotVersion)}getHighestSequenceNumber(e){return Ya.resolve(this.Ns)}allocateTargetId(e){return this.highestTargetId=this.Ms.next(),Ya.resolve(this.highestTargetId)}setTargetsMetadata(e,t,n){return n&&(this.lastRemoteSnapshotVersion=n),t>this.Ns&&(this.Ns=t),Ya.resolve()}Fn(e){this.xs.set(e.target,e);const t=e.targetId;t>this.highestTargetId&&(this.Ms=new Mh(t),this.highestTargetId=t),e.sequenceNumber>this.Ns&&(this.Ns=e.sequenceNumber)}addTargetData(e,t){return this.Fn(t),this.targetCount+=1,Ya.resolve()}updateTargetData(e,t){return this.Fn(t),Ya.resolve()}removeTargetData(e,t){return this.xs.delete(t.target),this.ks.Is(t.targetId),this.targetCount-=1,Ya.resolve()}removeTargets(e,t,n){let i=0;const s=[];return this.xs.forEach(((r,o)=>{o.sequenceNumber<=t&&null===n.get(o.targetId)&&(this.xs.delete(r),s.push(this.removeMatchingKeysForTargetId(e,o.targetId)),i++)})),Ya.waitFor(s).next((()=>i))}getTargetCount(e){return Ya.resolve(this.targetCount)}getTargetData(e,t){const n=this.xs.get(t)||null;return Ya.resolve(n)}addMatchingKeys(e,t,n){return this.ks.gs(t,n),Ya.resolve()}removeMatchingKeys(e,t,n){this.ks.ps(t,n);const i=this.persistence.referenceDelegate,s=[];return i&&t.forEach((t=>{s.push(i.markPotentiallyOrphaned(e,t))})),Ya.waitFor(s)}removeMatchingKeysForTargetId(e,t){return this.ks.Is(t),Ya.resolve()}getMatchingKeysForTargetId(e,t){const n=this.ks.Es(t);return Ya.resolve(n)}containsKey(e,t){return Ya.resolve(this.ks.containsKey(t))}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Gh{constructor(e,t){this.$s={},this.overlays={},this.Os=new Za(0),this.Fs=!1,this.Fs=!0,this.referenceDelegate=e(this),this.Bs=new Hh(this),this.indexManager=new Dh,this.remoteDocumentCache=function(e){return new $h(e)}((e=>this.referenceDelegate.Ls(e))),this.serializer=new Ah(t),this.qs=new Vh(this.serializer)}start(){return Promise.resolve()}shutdown(){return this.Fs=!1,Promise.resolve()}get started(){return this.Fs}setDatabaseDeletedListener(){}setNetworkEnabled(){}getIndexManager(e){return this.indexManager}getDocumentOverlayCache(e){let t=this.overlays[e.toKey()];return t||(t=new Uh,this.overlays[e.toKey()]=t),t}getMutationQueue(e,t){let n=this.$s[e.toKey()];return n||(n=new Bh(t,this.referenceDelegate),this.$s[e.toKey()]=n),n}getTargetCache(){return this.Bs}getRemoteDocumentCache(){return this.remoteDocumentCache}getBundleCache(){return this.qs}runTransaction(e,t,n){fa("MemoryPersistence","Starting transaction:",e);const i=new Wh(this.Os.next());return this.referenceDelegate.Us(),n(i).next((e=>this.referenceDelegate.Ks(i).next((()=>e)))).toPromise().then((e=>(i.raiseOnCommittedEvent(),e)))}Gs(e,t){return Ya.or(Object.values(this.$s).map((n=>()=>n.containsKey(e,t))))}}class Wh extends Qa{constructor(e){super(),this.currentSequenceNumber=e}}class Kh{constructor(e){this.persistence=e,this.Qs=new zh,this.js=null}static zs(e){return new Kh(e)}get Ws(){if(this.js)return this.js;throw ya()}addReference(e,t,n){return this.Qs.addReference(n,t),this.Ws.delete(n.toString()),Ya.resolve()}removeReference(e,t,n){return this.Qs.removeReference(n,t),this.Ws.add(n.toString()),Ya.resolve()}markPotentiallyOrphaned(e,t){return this.Ws.add(t.toString()),Ya.resolve()}removeTarget(e,t){this.Qs.Is(t.targetId).forEach((e=>this.Ws.add(e.toString())));const n=this.persistence.getTargetCache();return n.getMatchingKeysForTargetId(e,t.targetId).next((e=>{e.forEach((e=>this.Ws.add(e.toString())))})).next((()=>n.removeTargetData(e,t)))}Us(){this.js=new Set}Ks(e){const t=this.persistence.getRemoteDocumentCache().newChangeBuffer();return Ya.forEach(this.Ws,(n=>{const i=Ba.fromPath(n);return this.Hs(e,i).next((e=>{e||t.removeEntry(i,Fa.min())}))})).next((()=>(this.js=null,t.apply(e))))}updateLimboDocument(e,t){return this.Hs(e,t).next((e=>{e?this.Ws.delete(t.toString()):this.Ws.add(t.toString())}))}Ls(e){return 0}Hs(e,t){return Ya.or([()=>Ya.resolve(this.Qs.containsKey(t)),()=>this.persistence.getTargetCache().containsKey(e,t),()=>this.persistence.Gs(e,t)])}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
class Qh{constructor(e,t,n,i){this.targetId=e,this.fromCache=t,this.Fi=n,this.Bi=i}static Li(e,t){let n=Hc(),i=Hc();for(const e of t.docChanges)switch(e.type){case 0:n=n.add(e.doc.key);break;case 1:i=i.add(e.doc.key)}return new Qh(e,t.fromCache,n,i)}}
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Xh{constructor(){this.qi=!1}initialize(e,t){this.Ui=e,this.indexManager=t,this.qi=!0}getDocumentsMatchingQuery(e,t,n,i){return this.Ki(e,t).next((s=>s||this.Gi(e,t,i,n))).next((n=>n||this.Qi(e,t)))}Ki(e,t){if(bc(t))return Ya.resolve(null);let n=Cc(t);return this.indexManager.getIndexType(e,n).next((i=>0===i?null:(null!==t.limit&&1===i&&(t=_c(t,null,"F"),n=Cc(t)),this.indexManager.getDocumentsMatchingTarget(e,n).next((i=>{const s=Hc(...i);return this.Ui.getDocuments(e,s).next((i=>this.indexManager.getMinOffset(e,n).next((n=>{const r=this.ji(t,i);return this.zi(t,r,s,n.readTime)?this.Ki(e,_c(t,null,"F")):this.Wi(e,r,t,n)}))))})))))}Gi(e,t,n,i){return bc(t)||i.isEqual(Fa.min())?this.Qi(e,t):this.Ui.getDocuments(e,n).next((s=>{const r=this.ji(t,s);return this.zi(t,r,n,i)?this.Qi(e,t):(pa()<=Vt.DEBUG&&fa("QueryEngine","Re-using previous result from %s to execute query: %s",i.toString(),xc(t)),this.Wi(e,r,t,qa(i,-1)))}))}ji(e,t){let n=new dl(Lc(e));return t.forEach(((t,i)=>{Nc(e,i)&&(n=n.add(i))})),n}zi(e,t,n,i){if(null===e.limit)return!1;if(n.size!==t.size)return!0;const s="F"===e.limitType?t.last():t.first();return!!s&&(s.hasPendingWrites||s.version.compareTo(i)>0)}Qi(e,t){return pa()<=Vt.DEBUG&&fa("QueryEngine","Using full collection scan to execute query:",xc(t)),this.Ui.getDocumentsMatchingQuery(e,t,Ga.min())}Wi(e,t,n,i){return this.Ui.getDocumentsMatchingQuery(e,n,i).next((e=>(t.forEach((t=>{e=e.insert(t.key,t)})),e)))}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Yh{constructor(e,t,n,i){this.persistence=e,this.Hi=t,this.serializer=i,this.Ji=new cl(Ma),this.Yi=new Mc((e=>fc(e)),mc),this.Xi=new Map,this.Zi=e.getRemoteDocumentCache(),this.Bs=e.getTargetCache(),this.qs=e.getBundleCache(),this.tr(n)}tr(e){this.documentOverlayCache=this.persistence.getDocumentOverlayCache(e),this.indexManager=this.persistence.getIndexManager(e),this.mutationQueue=this.persistence.getMutationQueue(e,this.indexManager),this.localDocuments=new Fh(this.Zi,this.mutationQueue,this.documentOverlayCache,this.indexManager),this.Zi.setIndexManager(this.indexManager),this.Hi.initialize(this.localDocuments,this.indexManager)}collectGarbage(e){return this.persistence.runTransaction("Collect garbage","readwrite-primary",(t=>e.collect(t,this.Ji)))}}function Jh(e,t,n,i){return new Yh(e,t,n,i)}async function Zh(e,t){const n=ba(e);return await n.persistence.runTransaction("Handle user change","readonly",(e=>{let i;return n.mutationQueue.getAllMutationBatches(e).next((s=>(i=s,n.tr(t),n.mutationQueue.getAllMutationBatches(e)))).next((t=>{const s=[],r=[];let o=Hc();for(const e of i){s.push(e.batchId);for(const t of e.mutations)o=o.add(t.key)}for(const e of t){r.push(e.batchId);for(const t of e.mutations)o=o.add(t.key)}return n.localDocuments.getDocuments(e,o).next((e=>({er:e,removedBatchIds:s,addedBatchIds:r})))}))}))}function ed(e){const t=ba(e);return t.persistence.runTransaction("Get last remote snapshot version","readonly",(e=>t.Bs.getLastRemoteSnapshotVersion(e)))}function td(e,t,n){let i=Hc(),s=Hc();return n.forEach((e=>i=i.add(e))),t.getEntries(e,i).next((e=>{let i=Rc();return n.forEach(((n,r)=>{const o=e.get(n);r.isFoundDocument()!==o.isFoundDocument()&&(s=s.add(n)),r.isNoDocument()&&r.version.isEqual(Fa.min())?(t.removeEntry(n,r.readTime),i=i.insert(n,r)):!o.isValidDocument()||r.version.compareTo(o.version)>0||0===r.version.compareTo(o.version)&&o.hasPendingWrites?(t.addEntry(r),i=i.insert(n,r)):fa("LocalStore","Ignoring outdated watch update for ",n,". Current version:",o.version," Watch version:",r.version)})),{nr:i,sr:s}}))}function nd(e,t){const n=ba(e);return n.persistence.runTransaction("Get next mutation batch","readonly",(e=>(void 0===t&&(t=-1),n.mutationQueue.getNextMutationBatchAfterBatchId(e,t))))}function id(e,t){const n=ba(e);return n.persistence.runTransaction("Allocate target","readwrite",(e=>{let i;return n.Bs.getTargetData(e,t).next((s=>s?(i=s,Ya.resolve(i)):n.Bs.allocateTargetId(e).next((s=>(i=new kh(t,s,"TargetPurposeListen",e.currentSequenceNumber),n.Bs.addTargetData(e,i).next((()=>i)))))))})).then((e=>{const i=n.Ji.get(e.targetId);return(null===i||e.snapshotVersion.compareTo(i.snapshotVersion)>0)&&(n.Ji=n.Ji.insert(e.targetId,e),n.Yi.set(t,e.targetId)),e}))}async function sd(e,t,n){const i=ba(e),s=i.Ji.get(t),r=n?"readwrite":"readwrite-primary";try{n||await i.persistence.runTransaction("Release target",r,(e=>i.persistence.referenceDelegate.removeTarget(e,s)))}catch(e){if(!Ja(e))throw e;fa("LocalStore",`Failed to update sequence numbers for target ${t}: ${e}`)}i.Ji=i.Ji.remove(t),i.Yi.delete(s.target)}function rd(e,t,n){const i=ba(e);let s=Fa.min(),r=Hc();return i.persistence.runTransaction("Execute query","readonly",(e=>function(e,t,n){const i=ba(e),s=i.Yi.get(n);return void 0!==s?Ya.resolve(i.Ji.get(s)):i.Bs.getTargetData(t,n)}(i,e,Cc(t)).next((t=>{if(t)return s=t.lastLimboFreeSnapshotVersion,i.Bs.getMatchingKeysForTargetId(e,t.targetId).next((e=>{r=e}))})).next((()=>i.Hi.getDocumentsMatchingQuery(e,t,n?s:Fa.min(),n?r:Hc()))).next((e=>(od(i,Dc(t),e),{documents:e,ir:r})))))}function od(e,t,n){let i=e.Xi.get(t)||Fa.min();n.forEach(((e,t)=>{t.readTime.compareTo(i)>0&&(i=t.readTime)})),e.Xi.set(t,i)}class ad{constructor(){this.activeTargetIds=Wc()}lr(e){this.activeTargetIds=this.activeTargetIds.add(e)}dr(e){this.activeTargetIds=this.activeTargetIds.delete(e)}hr(){const e={activeTargetIds:this.activeTargetIds.toArray(),updateTimeMs:Date.now()};return JSON.stringify(e)}}class ld{constructor(){this.Hr=new ad,this.Jr={},this.onlineStateHandler=null,this.sequenceNumberHandler=null}addPendingMutation(e){}updateMutationState(e,t,n){}addLocalQueryTarget(e){return this.Hr.lr(e),this.Jr[e]||"not-current"}updateQueryState(e,t,n){this.Jr[e]=t}removeLocalQueryTarget(e){this.Hr.dr(e)}isLocalQueryTarget(e){return this.Hr.activeTargetIds.has(e)}clearQueryState(e){delete this.Jr[e]}getAllActiveQueryTargets(){return this.Hr.activeTargetIds}isActiveQueryTarget(e){return this.Hr.activeTargetIds.has(e)}start(){return this.Hr=new ad,Promise.resolve()}handleUserChange(e,t,n){}setOnlineState(e){}shutdown(){}writeSequenceNumber(e){}notifyBundleLoaded(e){}}
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class cd{Yr(e){}shutdown(){}}
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ud{constructor(){this.Xr=()=>this.Zr(),this.eo=()=>this.no(),this.so=[],this.io()}Yr(e){this.so.push(e)}shutdown(){window.removeEventListener("online",this.Xr),window.removeEventListener("offline",this.eo)}io(){window.addEventListener("online",this.Xr),window.addEventListener("offline",this.eo)}Zr(){fa("ConnectivityMonitor","Network connectivity changed: AVAILABLE");for(const e of this.so)e(0)}no(){fa("ConnectivityMonitor","Network connectivity changed: UNAVAILABLE");for(const e of this.so)e(1)}static D(){return"undefined"!=typeof window&&void 0!==window.addEventListener&&void 0!==window.removeEventListener}}
/**
 * @license
 * Copyright 2023 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let hd=null;function dd(){return null===hd?hd=268435456+Math.round(2147483648*Math.random()):hd++,"0x"+hd.toString(16)
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */}const pd={BatchGetDocuments:"batchGet",Commit:"commit",RunQuery:"runQuery",RunAggregationQuery:"runAggregationQuery"};
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class fd{constructor(e){this.ro=e.ro,this.oo=e.oo}uo(e){this.co=e}ao(e){this.ho=e}onMessage(e){this.lo=e}close(){this.oo()}send(e){this.ro(e)}fo(){this.co()}wo(e){this.ho(e)}_o(e){this.lo(e)}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const md="WebChannelConnection";class gd extends class{constructor(e){this.databaseInfo=e,this.databaseId=e.databaseId;const t=e.ssl?"https":"http";this.mo=t+"://"+e.host,this.yo="projects/"+this.databaseId.projectId+"/databases/"+this.databaseId.database+"/documents"}get po(){return!1}Io(e,t,n,i,s){const r=dd(),o=this.To(e,t);fa("RestConnection",`Sending RPC '${e}' ${r}:`,o,n);const a={};return this.Eo(a,i,s),this.Ao(e,o,a,n).then((t=>(fa("RestConnection",`Received RPC '${e}' ${r}: `,t),t)),(t=>{throw ga("RestConnection",`RPC '${e}' ${r} failed with error: `,t,"url: ",o,"request:",n),t}))}vo(e,t,n,i,s,r){return this.Io(e,t,n,i,s)}Eo(e,t,n){e["X-Goog-Api-Client"]="gl-js/ fire/"+ha,e["Content-Type"]="text/plain",this.databaseInfo.appId&&(e["X-Firebase-GMPID"]=this.databaseInfo.appId),t&&t.headers.forEach(((t,n)=>e[n]=t)),n&&n.headers.forEach(((t,n)=>e[n]=t))}To(e,t){const n=pd[e];return`${this.mo}/v1/${t}:${n}`}}{constructor(e){super(e),this.forceLongPolling=e.forceLongPolling,this.autoDetectLongPolling=e.autoDetectLongPolling,this.useFetchStreams=e.useFetchStreams,this.longPollingOptions=e.longPollingOptions}Ao(e,t,n,i){const s=dd();return new Promise(((r,o)=>{const a=new oa;a.setWithCredentials(!0),a.listenOnce(ta.COMPLETE,(()=>{try{switch(a.getLastErrorCode()){case ea.NO_ERROR:const t=a.getResponseJson();fa(md,`XHR for RPC '${e}' ${s} received:`,JSON.stringify(t)),r(t);break;case ea.TIMEOUT:fa(md,`RPC '${e}' ${s} timed out`),o(new Ta(Ea.DEADLINE_EXCEEDED,"Request time out"));break;case ea.HTTP_ERROR:const n=a.getStatus();if(fa(md,`RPC '${e}' ${s} failed with status:`,n,"response text:",a.getResponseText()),n>0){let e=a.getResponseJson();Array.isArray(e)&&(e=e[0]);const t=null==e?void 0:e.error;if(t&&t.status&&t.message){const e=function(e){const t=e.toLowerCase().replace(/_/g,"-");return Object.values(Ea).indexOf(t)>=0?t:Ea.UNKNOWN}(t.status);o(new Ta(e,t.message))}else o(new Ta(Ea.UNKNOWN,"Server responded with status "+a.getStatus()))}else o(new Ta(Ea.UNAVAILABLE,"Connection failed."));break;default:ya()}}finally{fa(md,`RPC '${e}' ${s} completed.`)}}));const l=JSON.stringify(i);fa(md,`RPC '${e}' ${s} sending request:`,i),a.send(t,"POST",l,n,15)}))}Ro(e,t,n){const i=dd(),s=[this.mo,"/","google.firestore.v1.Firestore","/",e,"/channel"],r=Jo(),o=Zo(),a={httpSessionIdParam:"gsessionid",initMessageHeaders:{},messageUrlParams:{database:`projects/${this.databaseId.projectId}/databases/${this.databaseId.database}`},sendRawJson:!0,supportsCrossDomainXhr:!0,internalChannelParams:{forwardChannelRequestTimeoutMs:6e5},forceLongPolling:this.forceLongPolling,detectBufferingProxy:this.autoDetectLongPolling},l=this.longPollingOptions.timeoutSeconds;void 0!==l&&(a.longPollingTimeout=Math.round(1e3*l)),this.useFetchStreams&&(a.xmlHttpFactory=new sa({})),this.Eo(a.initMessageHeaders,t,n),a.encodeInitMessageHeaders=!0;const c=s.join("");fa(md,`Creating RPC '${e}' stream ${i}: ${c}`,a);const u=r.createWebChannel(c,a);let h=!1,d=!1;const p=new fd({ro:t=>{d?fa(md,`Not sending because RPC '${e}' stream ${i} is closed:`,t):(h||(fa(md,`Opening RPC '${e}' stream ${i} transport.`),u.open(),h=!0),fa(md,`RPC '${e}' stream ${i} sending:`,t),u.send(t))},oo:()=>u.close()}),f=(e,t,n)=>{e.listen(t,(e=>{try{n(e)}catch(e){setTimeout((()=>{throw e}),0)}}))};return f(u,ra.EventType.OPEN,(()=>{d||fa(md,`RPC '${e}' stream ${i} transport opened.`)})),f(u,ra.EventType.CLOSE,(()=>{d||(d=!0,fa(md,`RPC '${e}' stream ${i} transport closed`),p.wo())})),f(u,ra.EventType.ERROR,(t=>{d||(d=!0,ga(md,`RPC '${e}' stream ${i} transport errored:`,t),p.wo(new Ta(Ea.UNAVAILABLE,"The operation could not be completed")))})),f(u,ra.EventType.MESSAGE,(t=>{var n;if(!d){const s=t.data[0];wa(!!s);const r=s,o=r.error||(null===(n=r[0])||void 0===n?void 0:n.error);if(o){fa(md,`RPC '${e}' stream ${i} received error:`,o);const t=o.status;let n=function(e){const t=xu[e];if(void 0!==t)return Lu(t)}(t),s=o.message;void 0===n&&(n=Ea.INTERNAL,s="Unknown error status: "+t+" with message "+o.message),d=!0,p.wo(new Ta(n,s)),u.close()}else fa(md,`RPC '${e}' stream ${i} received:`,s),p._o(s)}})),f(o,na.STAT_EVENT,(t=>{t.stat===ia.PROXY?fa(md,`RPC '${e}' stream ${i} detected buffering proxy`):t.stat===ia.NOPROXY&&fa(md,`RPC '${e}' stream ${i} detected no buffering proxy`)})),setTimeout((()=>{p.fo()}),0),p}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function vd(){return"undefined"!=typeof document?document:null}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function yd(e){return new Zu(e,!0)}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class wd{constructor(e,t,n=1e3,i=1.5,s=6e4){this.ii=e,this.timerId=t,this.Po=n,this.bo=i,this.Vo=s,this.So=0,this.Do=null,this.Co=Date.now(),this.reset()}reset(){this.So=0}xo(){this.So=this.Vo}No(e){this.cancel();const t=Math.floor(this.So+this.ko()),n=Math.max(0,Date.now()-this.Co),i=Math.max(0,t-n);i>0&&fa("ExponentialBackoff",`Backing off for ${i} ms (base delay: ${this.So} ms, delay with jitter: ${t} ms, last attempt: ${n} ms ago)`),this.Do=this.ii.enqueueAfterDelay(this.timerId,i,(()=>(this.Co=Date.now(),e()))),this.So*=this.bo,this.So<this.Po&&(this.So=this.Po),this.So>this.Vo&&(this.So=this.Vo)}Mo(){null!==this.Do&&(this.Do.skipDelay(),this.Do=null)}cancel(){null!==this.Do&&(this.Do.cancel(),this.Do=null)}ko(){return(Math.random()-.5)*this.So}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class bd{constructor(e,t,n,i,s,r,o,a){this.ii=e,this.$o=n,this.Oo=i,this.connection=s,this.authCredentialsProvider=r,this.appCheckCredentialsProvider=o,this.listener=a,this.state=0,this.Fo=0,this.Bo=null,this.Lo=null,this.stream=null,this.qo=new wd(e,t)}Uo(){return 1===this.state||5===this.state||this.Ko()}Ko(){return 2===this.state||3===this.state}start(){4!==this.state?this.auth():this.Go()}async stop(){this.Uo()&&await this.close(0)}Qo(){this.state=0,this.qo.reset()}jo(){this.Ko()&&null===this.Bo&&(this.Bo=this.ii.enqueueAfterDelay(this.$o,6e4,(()=>this.zo())))}Wo(e){this.Ho(),this.stream.send(e)}async zo(){if(this.Ko())return this.close(0)}Ho(){this.Bo&&(this.Bo.cancel(),this.Bo=null)}Jo(){this.Lo&&(this.Lo.cancel(),this.Lo=null)}async close(e,t){this.Ho(),this.Jo(),this.qo.cancel(),this.Fo++,4!==e?this.qo.reset():t&&t.code===Ea.RESOURCE_EXHAUSTED?(ma(t.toString()),ma("Using maximum backoff delay to prevent overloading the backend."),this.qo.xo()):t&&t.code===Ea.UNAUTHENTICATED&&3!==this.state&&(this.authCredentialsProvider.invalidateToken(),this.appCheckCredentialsProvider.invalidateToken()),null!==this.stream&&(this.Yo(),this.stream.close(),this.stream=null),this.state=e,await this.listener.ao(t)}Yo(){}auth(){this.state=1;const e=this.Xo(this.Fo),t=this.Fo;Promise.all([this.authCredentialsProvider.getToken(),this.appCheckCredentialsProvider.getToken()]).then((([e,n])=>{this.Fo===t&&this.Zo(e,n)}),(t=>{e((()=>{const e=new Ta(Ea.UNKNOWN,"Fetching auth token failed: "+t.message);return this.tu(e)}))}))}Zo(e,t){const n=this.Xo(this.Fo);this.stream=this.eu(e,t),this.stream.uo((()=>{n((()=>(this.state=2,this.Lo=this.ii.enqueueAfterDelay(this.Oo,1e4,(()=>(this.Ko()&&(this.state=3),Promise.resolve()))),this.listener.uo())))})),this.stream.ao((e=>{n((()=>this.tu(e)))})),this.stream.onMessage((e=>{n((()=>this.onMessage(e)))}))}Go(){this.state=5,this.qo.No((async()=>{this.state=0,this.start()}))}tu(e){return fa("PersistentStream",`close with error: ${e}`),this.stream=null,this.close(4,e)}Xo(e){return t=>{this.ii.enqueueAndForget((()=>this.Fo===e?t():(fa("PersistentStream","stream callback skipped by getCloseGuardedDispatcher."),Promise.resolve())))}}}class Ed extends bd{constructor(e,t,n,i,s,r){super(e,"listen_stream_connection_backoff","listen_stream_idle","health_check_timeout",t,n,i,r),this.serializer=s}eu(e,t){return this.connection.Ro("Listen",e,t)}onMessage(e){this.qo.reset();const t=function(e,t){let n;if("targetChange"in t){t.targetChange;const i=function(e){return"NO_CHANGE"===e?0:"ADD"===e?1:"REMOVE"===e?2:"CURRENT"===e?3:"RESET"===e?4:ya()}(t.targetChange.targetChangeType||"NO_CHANGE"),s=t.targetChange.targetIds||[],r=function(e,t){return e.useProto3Json?(wa(void 0===t||"string"==typeof t),gl.fromBase64String(t||"")):(wa(void 0===t||t instanceof Uint8Array),gl.fromUint8Array(t||new Uint8Array))}(e,t.targetChange.resumeToken),o=t.targetChange.cause,a=o&&function(e){const t=void 0===e.code?Ea.UNKNOWN:Lu(e.code);return new Ta(t,e.message||"")}(o);n=new Hu(i,s,r,a||null)}else if("documentChange"in t){t.documentChange;const i=t.documentChange;i.document,i.document.name,i.document.updateTime;const s=lh(e,i.document.name),r=sh(i.document.updateTime),o=i.document.createTime?sh(i.document.createTime):Fa.min(),a=new jl({mapValue:{fields:i.document.fields}}),l=$l.newFoundDocument(s,r,o,a),c=i.targetIds||[],u=i.removedTargetIds||[];n=new $u(c,u,l.key,l)}else if("documentDelete"in t){t.documentDelete;const i=t.documentDelete;i.document;const s=lh(e,i.document),r=i.readTime?sh(i.readTime):Fa.min(),o=$l.newNoDocument(s,r),a=i.removedTargetIds||[];n=new $u([],a,o.key,o)}else if("documentRemove"in t){t.documentRemove;const i=t.documentRemove;i.document;const s=lh(e,i.document),r=i.removedTargetIds||[];n=new $u([],r,s,null)}else{if(!("filter"in t))return ya();{t.filter;const e=t.filter;e.targetId;const{count:i=0,unchangedNames:s}=e,r=new Au(i,s),o=e.targetId;n=new qu(o,r)}}return n}(this.serializer,e),n=function(e){if(!("targetChange"in e))return Fa.min();const t=e.targetChange;return t.targetIds&&t.targetIds.length?Fa.min():t.readTime?sh(t.readTime):Fa.min()}(e);return this.listener.nu(t,n)}su(e){const t={};t.database=hh(this.serializer),t.addTarget=function(e,t){let n;const i=t.target;if(n=gc(i)?{documents:mh(e,i)}:{query:gh(e,i)},n.targetId=t.targetId,t.resumeToken.approximateByteSize()>0){n.resumeToken=nh(e,t.resumeToken);const i=eh(e,t.expectedCount);null!==i&&(n.expectedCount=i)}else if(t.snapshotVersion.compareTo(Fa.min())>0){n.readTime=th(e,t.snapshotVersion.toTimestamp());const i=eh(e,t.expectedCount);null!==i&&(n.expectedCount=i)}return n}(this.serializer,e);const n=function(e,t){const n=function(e){switch(e){case"TargetPurposeListen":return null;case"TargetPurposeExistenceFilterMismatch":return"existence-filter-mismatch";case"TargetPurposeExistenceFilterMismatchBloom":return"existence-filter-mismatch-bloom";case"TargetPurposeLimboResolution":return"limbo-document";default:return ya()}}(t.purpose);return null==n?null:{"goog-listen-tags":n}}(this.serializer,e);n&&(t.labels=n),this.Wo(t)}iu(e){const t={};t.database=hh(this.serializer),t.removeTarget=e,this.Wo(t)}}class Td extends bd{constructor(e,t,n,i,s,r){super(e,"write_stream_connection_backoff","write_stream_idle","health_check_timeout",t,n,i,r),this.serializer=s,this.ru=!1}get ou(){return this.ru}start(){this.ru=!1,this.lastStreamToken=void 0,super.start()}Yo(){this.ru&&this.uu([])}eu(e,t){return this.connection.Ro("Write",e,t)}onMessage(e){if(wa(!!e.streamToken),this.lastStreamToken=e.streamToken,this.ru){this.qo.reset();const t=function(e,t){return e&&e.length>0?(wa(void 0!==t),e.map((e=>function(e,t){let n=e.updateTime?sh(e.updateTime):sh(t);return n.isEqual(Fa.min())&&(n=sh(t)),new cu(n,e.transformResults||[])}(e,t)))):[]}(e.writeResults,e.commitTime),n=sh(e.commitTime);return this.listener.cu(n,t)}return wa(!e.writeResults||0===e.writeResults.length),this.ru=!0,this.listener.au()}hu(){const e={};e.database=hh(this.serializer),this.Wo(e)}uu(e){const t={streamToken:this.lastStreamToken,writes:e.map((e=>fh(this.serializer,e)))};this.Wo(t)}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Sd extends class{}{constructor(e,t,n,i){super(),this.authCredentials=e,this.appCheckCredentials=t,this.connection=n,this.serializer=i,this.lu=!1}fu(){if(this.lu)throw new Ta(Ea.FAILED_PRECONDITION,"The client has already been terminated.")}Io(e,t,n){return this.fu(),Promise.all([this.authCredentials.getToken(),this.appCheckCredentials.getToken()]).then((([i,s])=>this.connection.Io(e,t,n,i,s))).catch((e=>{throw"FirebaseError"===e.name?(e.code===Ea.UNAUTHENTICATED&&(this.authCredentials.invalidateToken(),this.appCheckCredentials.invalidateToken()),e):new Ta(Ea.UNKNOWN,e.toString())}))}vo(e,t,n,i){return this.fu(),Promise.all([this.authCredentials.getToken(),this.appCheckCredentials.getToken()]).then((([s,r])=>this.connection.vo(e,t,n,s,r,i))).catch((e=>{throw"FirebaseError"===e.name?(e.code===Ea.UNAUTHENTICATED&&(this.authCredentials.invalidateToken(),this.appCheckCredentials.invalidateToken()),e):new Ta(Ea.UNKNOWN,e.toString())}))}terminate(){this.lu=!0}}class Id{constructor(e,t){this.asyncQueue=e,this.onlineStateHandler=t,this.state="Unknown",this.wu=0,this._u=null,this.mu=!0}gu(){0===this.wu&&(this.yu("Unknown"),this._u=this.asyncQueue.enqueueAfterDelay("online_state_timeout",1e4,(()=>(this._u=null,this.pu("Backend didn't respond within 10 seconds."),this.yu("Offline"),Promise.resolve()))))}Iu(e){"Online"===this.state?this.yu("Unknown"):(this.wu++,this.wu>=1&&(this.Tu(),this.pu(`Connection failed 1 times. Most recent error: ${e.toString()}`),this.yu("Offline")))}set(e){this.Tu(),this.wu=0,"Online"===e&&(this.mu=!1),this.yu(e)}yu(e){e!==this.state&&(this.state=e,this.onlineStateHandler(e))}pu(e){const t=`Could not reach Cloud Firestore backend. ${e}\nThis typically indicates that your device does not have a healthy Internet connection at the moment. The client will operate in offline mode until it is able to successfully connect to the backend.`;this.mu?(ma(t),this.mu=!1):fa("OnlineStateTracker",t)}Tu(){null!==this._u&&(this._u.cancel(),this._u=null)}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Cd{constructor(e,t,n,i,s){this.localStore=e,this.datastore=t,this.asyncQueue=n,this.remoteSyncer={},this.Eu=[],this.Au=new Map,this.vu=new Set,this.Ru=[],this.Pu=s,this.Pu.Yr((e=>{n.enqueueAndForget((async()=>{Md(this)&&(fa("RemoteStore","Restarting streams for network reachability change."),await async function(e){const t=ba(e);t.vu.add(4),await kd(t),t.bu.set("Unknown"),t.vu.delete(4),await _d(t)}(this))}))})),this.bu=new Id(n,i)}}async function _d(e){if(Md(e))for(const t of e.Ru)await t(!0)}async function kd(e){for(const t of e.Ru)await t(!1)}function Ad(e,t){const n=ba(e);n.Au.has(t.targetId)||(n.Au.set(t.targetId,t),Od(n)?Ld(n):Jd(n).Ko()&&Nd(n,t))}function xd(e,t){const n=ba(e),i=Jd(n);n.Au.delete(t),i.Ko()&&Dd(n,t),0===n.Au.size&&(i.Ko()?i.jo():Md(n)&&n.bu.set("Unknown"))}function Nd(e,t){if(e.Vu.qt(t.targetId),t.resumeToken.approximateByteSize()>0||t.snapshotVersion.compareTo(Fa.min())>0){const n=e.remoteSyncer.getRemoteKeysForTarget(t.targetId).size;t=t.withExpectedCount(n)}Jd(e).su(t)}function Dd(e,t){e.Vu.qt(t),Jd(e).iu(t)}function Ld(e){e.Vu=new Wu({getRemoteKeysForTarget:t=>e.remoteSyncer.getRemoteKeysForTarget(t),le:t=>e.Au.get(t)||null,ue:()=>e.datastore.serializer.databaseId}),Jd(e).start(),e.bu.gu()}function Od(e){return Md(e)&&!Jd(e).Uo()&&e.Au.size>0}function Md(e){return 0===ba(e).vu.size}function Pd(e){e.Vu=void 0}async function Rd(e){e.Au.forEach(((t,n)=>{Nd(e,t)}))}async function Fd(e,t){Pd(e),Od(e)?(e.bu.Iu(t),Ld(e)):e.bu.set("Unknown")}async function Vd(e,t,n){if(e.bu.set("Online"),t instanceof Hu&&2===t.state&&t.cause)try{await async function(e,t){const n=t.cause;for(const i of t.targetIds)e.Au.has(i)&&(await e.remoteSyncer.rejectListen(i,n),e.Au.delete(i),e.Vu.removeTarget(i))}(e,t)}catch(n){fa("RemoteStore","Failed to remove targets %s: %s ",t.targetIds.join(","),n),await Ud(e,n)}else if(t instanceof $u?e.Vu.Ht(t):t instanceof qu?e.Vu.ne(t):e.Vu.Xt(t),!n.isEqual(Fa.min()))try{const t=await ed(e.localStore);n.compareTo(t)>=0&&await function(e,t){const n=e.Vu.ce(t);return n.targetChanges.forEach(((n,i)=>{if(n.resumeToken.approximateByteSize()>0){const s=e.Au.get(i);s&&e.Au.set(i,s.withResumeToken(n.resumeToken,t))}})),n.targetMismatches.forEach(((t,n)=>{const i=e.Au.get(t);if(!i)return;e.Au.set(t,i.withResumeToken(gl.EMPTY_BYTE_STRING,i.snapshotVersion)),Dd(e,t);const s=new kh(i.target,t,n,i.sequenceNumber);Nd(e,s)})),e.remoteSyncer.applyRemoteEvent(n)}(e,n)}catch(t){fa("RemoteStore","Failed to raise snapshot:",t),await Ud(e,t)}}async function Ud(e,t,n){if(!Ja(t))throw t;e.vu.add(1),await kd(e),e.bu.set("Offline"),n||(n=()=>ed(e.localStore)),e.asyncQueue.enqueueRetryable((async()=>{fa("RemoteStore","Retrying IndexedDB access"),await n(),e.vu.delete(1),await _d(e)}))}function zd(e,t){return t().catch((n=>Ud(e,n,t)))}async function jd(e){const t=ba(e),n=Zd(t);let i=t.Eu.length>0?t.Eu[t.Eu.length-1].batchId:-1;for(;Bd(t);)try{const e=await nd(t.localStore,i);if(null===e){0===t.Eu.length&&n.jo();break}i=e.batchId,$d(t,e)}catch(e){await Ud(t,e)}qd(t)&&Hd(t)}function Bd(e){return Md(e)&&e.Eu.length<10}function $d(e,t){e.Eu.push(t);const n=Zd(e);n.Ko()&&n.ou&&n.uu(t.mutations)}function qd(e){return Md(e)&&!Zd(e).Uo()&&e.Eu.length>0}function Hd(e){Zd(e).start()}async function Gd(e){Zd(e).hu()}async function Wd(e){const t=Zd(e);for(const n of e.Eu)t.uu(n.mutations)}async function Kd(e,t,n){const i=e.Eu.shift(),s=_u.from(i,t,n);await zd(e,(()=>e.remoteSyncer.applySuccessfulWrite(s))),await jd(e)}async function Qd(e,t){t&&Zd(e).ou&&await async function(e,t){if(Du(n=t.code)&&n!==Ea.ABORTED){const n=e.Eu.shift();Zd(e).Qo(),await zd(e,(()=>e.remoteSyncer.rejectFailedWrite(n.batchId,t))),await jd(e)}var n}(e,t),qd(e)&&Hd(e)}async function Xd(e,t){const n=ba(e);n.asyncQueue.verifyOperationInProgress(),fa("RemoteStore","RemoteStore received new credentials");const i=Md(n);n.vu.add(3),await kd(n),i&&n.bu.set("Unknown"),await n.remoteSyncer.handleCredentialChange(t),n.vu.delete(3),await _d(n)}async function Yd(e,t){const n=ba(e);t?(n.vu.delete(2),await _d(n)):t||(n.vu.add(2),await kd(n),n.bu.set("Unknown"))}function Jd(e){return e.Su||(e.Su=function(e,t,n){const i=ba(e);return i.fu(),new Ed(t,i.connection,i.authCredentials,i.appCheckCredentials,i.serializer,n)}(e.datastore,e.asyncQueue,{uo:Rd.bind(null,e),ao:Fd.bind(null,e),nu:Vd.bind(null,e)}),e.Ru.push((async t=>{t?(e.Su.Qo(),Od(e)?Ld(e):e.bu.set("Unknown")):(await e.Su.stop(),Pd(e))}))),e.Su}function Zd(e){return e.Du||(e.Du=function(e,t,n){const i=ba(e);return i.fu(),new Td(t,i.connection,i.authCredentials,i.appCheckCredentials,i.serializer,n)}(e.datastore,e.asyncQueue,{uo:Gd.bind(null,e),ao:Qd.bind(null,e),au:Wd.bind(null,e),cu:Kd.bind(null,e)}),e.Ru.push((async t=>{t?(e.Du.Qo(),await jd(e)):(await e.Du.stop(),e.Eu.length>0&&(fa("RemoteStore",`Stopping write stream with ${e.Eu.length} pending writes`),e.Eu=[]))}))),e.Du
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */}class ep{constructor(e,t,n,i,s){this.asyncQueue=e,this.timerId=t,this.targetTimeMs=n,this.op=i,this.removalCallback=s,this.deferred=new Sa,this.then=this.deferred.promise.then.bind(this.deferred.promise),this.deferred.promise.catch((e=>{}))}static createAndSchedule(e,t,n,i,s){const r=Date.now()+n,o=new ep(e,t,r,i,s);return o.start(n),o}start(e){this.timerHandle=setTimeout((()=>this.handleDelayElapsed()),e)}skipDelay(){return this.handleDelayElapsed()}cancel(e){null!==this.timerHandle&&(this.clearTimeout(),this.deferred.reject(new Ta(Ea.CANCELLED,"Operation cancelled"+(e?": "+e:""))))}handleDelayElapsed(){this.asyncQueue.enqueueAndForget((()=>null!==this.timerHandle?(this.clearTimeout(),this.op().then((e=>this.deferred.resolve(e)))):Promise.resolve()))}clearTimeout(){null!==this.timerHandle&&(this.removalCallback(this),clearTimeout(this.timerHandle),this.timerHandle=null)}}function tp(e,t){if(ma("AsyncQueue",`${t}: ${e}`),Ja(e))return new Ta(Ea.UNAVAILABLE,`${t}: ${e}`);throw e}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class np{constructor(e){this.comparator=e?(t,n)=>e(t,n)||Ba.comparator(t.key,n.key):(e,t)=>Ba.comparator(e.key,t.key),this.keyedMap=Vc(),this.sortedSet=new cl(this.comparator)}static emptySet(e){return new np(e.comparator)}has(e){return null!=this.keyedMap.get(e)}get(e){return this.keyedMap.get(e)}first(){return this.sortedSet.minKey()}last(){return this.sortedSet.maxKey()}isEmpty(){return this.sortedSet.isEmpty()}indexOf(e){const t=this.keyedMap.get(e);return t?this.sortedSet.indexOf(t):-1}get size(){return this.sortedSet.size}forEach(e){this.sortedSet.inorderTraversal(((t,n)=>(e(t),!1)))}add(e){const t=this.delete(e.key);return t.copy(t.keyedMap.insert(e.key,e),t.sortedSet.insert(e,null))}delete(e){const t=this.get(e);return t?this.copy(this.keyedMap.remove(e),this.sortedSet.remove(t)):this}isEqual(e){if(!(e instanceof np))return!1;if(this.size!==e.size)return!1;const t=this.sortedSet.getIterator(),n=e.sortedSet.getIterator();for(;t.hasNext();){const e=t.getNext().key,i=n.getNext().key;if(!e.isEqual(i))return!1}return!0}toString(){const e=[];return this.forEach((t=>{e.push(t.toString())})),0===e.length?"DocumentSet ()":"DocumentSet (\n  "+e.join("  \n")+"\n)"}copy(e,t){const n=new np;return n.comparator=this.comparator,n.keyedMap=e,n.sortedSet=t,n}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ip{constructor(){this.Cu=new cl(Ba.comparator)}track(e){const t=e.doc.key,n=this.Cu.get(t);n?0!==e.type&&3===n.type?this.Cu=this.Cu.insert(t,e):3===e.type&&1!==n.type?this.Cu=this.Cu.insert(t,{type:n.type,doc:e.doc}):2===e.type&&2===n.type?this.Cu=this.Cu.insert(t,{type:2,doc:e.doc}):2===e.type&&0===n.type?this.Cu=this.Cu.insert(t,{type:0,doc:e.doc}):1===e.type&&0===n.type?this.Cu=this.Cu.remove(t):1===e.type&&2===n.type?this.Cu=this.Cu.insert(t,{type:1,doc:n.doc}):0===e.type&&1===n.type?this.Cu=this.Cu.insert(t,{type:2,doc:e.doc}):ya():this.Cu=this.Cu.insert(t,e)}xu(){const e=[];return this.Cu.inorderTraversal(((t,n)=>{e.push(n)})),e}}class sp{constructor(e,t,n,i,s,r,o,a,l){this.query=e,this.docs=t,this.oldDocs=n,this.docChanges=i,this.mutatedKeys=s,this.fromCache=r,this.syncStateChanged=o,this.excludesMetadataChanges=a,this.hasCachedResults=l}static fromInitialDocuments(e,t,n,i,s){const r=[];return t.forEach((e=>{r.push({type:0,doc:e})})),new sp(e,t,np.emptySet(t),r,n,i,!0,!1,s)}get hasPendingWrites(){return!this.mutatedKeys.isEmpty()}isEqual(e){if(!(this.fromCache===e.fromCache&&this.hasCachedResults===e.hasCachedResults&&this.syncStateChanged===e.syncStateChanged&&this.mutatedKeys.isEqual(e.mutatedKeys)&&kc(this.query,e.query)&&this.docs.isEqual(e.docs)&&this.oldDocs.isEqual(e.oldDocs)))return!1;const t=this.docChanges,n=e.docChanges;if(t.length!==n.length)return!1;for(let e=0;e<t.length;e++)if(t[e].type!==n[e].type||!t[e].doc.isEqual(n[e].doc))return!1;return!0}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class rp{constructor(){this.Nu=void 0,this.listeners=[]}}class op{constructor(){this.queries=new Mc((e=>Ac(e)),kc),this.onlineState="Unknown",this.ku=new Set}}async function ap(e,t){const n=ba(e),i=t.query;let s=!1,r=n.queries.get(i);if(r||(s=!0,r=new rp),s)try{r.Nu=await n.onListen(i)}catch(e){const n=tp(e,`Initialization of query '${xc(t.query)}' failed`);return void t.onError(n)}n.queries.set(i,r),r.listeners.push(t),t.Mu(n.onlineState),r.Nu&&t.$u(r.Nu)&&hp(n)}async function lp(e,t){const n=ba(e),i=t.query;let s=!1;const r=n.queries.get(i);if(r){const e=r.listeners.indexOf(t);e>=0&&(r.listeners.splice(e,1),s=0===r.listeners.length)}if(s)return n.queries.delete(i),n.onUnlisten(i)}function cp(e,t){const n=ba(e);let i=!1;for(const e of t){const t=e.query,s=n.queries.get(t);if(s){for(const t of s.listeners)t.$u(e)&&(i=!0);s.Nu=e}}i&&hp(n)}function up(e,t,n){const i=ba(e),s=i.queries.get(t);if(s)for(const e of s.listeners)e.onError(n);i.queries.delete(t)}function hp(e){e.ku.forEach((e=>{e.next()}))}class dp{constructor(e,t,n){this.query=e,this.Ou=t,this.Fu=!1,this.Bu=null,this.onlineState="Unknown",this.options=n||{}}$u(e){if(!this.options.includeMetadataChanges){const t=[];for(const n of e.docChanges)3!==n.type&&t.push(n);e=new sp(e.query,e.docs,e.oldDocs,t,e.mutatedKeys,e.fromCache,e.syncStateChanged,!0,e.hasCachedResults)}let t=!1;return this.Fu?this.Lu(e)&&(this.Ou.next(e),t=!0):this.qu(e,this.onlineState)&&(this.Uu(e),t=!0),this.Bu=e,t}onError(e){this.Ou.error(e)}Mu(e){this.onlineState=e;let t=!1;return this.Bu&&!this.Fu&&this.qu(this.Bu,e)&&(this.Uu(this.Bu),t=!0),t}qu(e,t){if(!e.fromCache)return!0;const n="Offline"!==t;return(!this.options.Ku||!n)&&(!e.docs.isEmpty()||e.hasCachedResults||"Offline"===t)}Lu(e){if(e.docChanges.length>0)return!0;const t=this.Bu&&this.Bu.hasPendingWrites!==e.hasPendingWrites;return!(!e.syncStateChanged&&!t)&&!0===this.options.includeMetadataChanges}Uu(e){e=sp.fromInitialDocuments(e.query,e.docs,e.mutatedKeys,e.fromCache,e.hasCachedResults),this.Fu=!0,this.Ou.next(e)}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
class pp{constructor(e){this.key=e}}class fp{constructor(e){this.key=e}}class mp{constructor(e,t){this.query=e,this.Yu=t,this.Xu=null,this.hasCachedResults=!1,this.current=!1,this.Zu=Hc(),this.mutatedKeys=Hc(),this.tc=Lc(e),this.ec=new np(this.tc)}get nc(){return this.Yu}sc(e,t){const n=t?t.ic:new ip,i=t?t.ec:this.ec;let s=t?t.mutatedKeys:this.mutatedKeys,r=i,o=!1;const a="F"===this.query.limitType&&i.size===this.query.limit?i.last():null,l="L"===this.query.limitType&&i.size===this.query.limit?i.first():null;if(e.inorderTraversal(((e,t)=>{const c=i.get(e),u=Nc(this.query,t)?t:null,h=!!c&&this.mutatedKeys.has(c.key),d=!!u&&(u.hasLocalMutations||this.mutatedKeys.has(u.key)&&u.hasCommittedMutations);let p=!1;c&&u?c.data.isEqual(u.data)?h!==d&&(n.track({type:3,doc:u}),p=!0):this.rc(c,u)||(n.track({type:2,doc:u}),p=!0,(a&&this.tc(u,a)>0||l&&this.tc(u,l)<0)&&(o=!0)):!c&&u?(n.track({type:0,doc:u}),p=!0):c&&!u&&(n.track({type:1,doc:c}),p=!0,(a||l)&&(o=!0)),p&&(u?(r=r.add(u),s=d?s.add(e):s.delete(e)):(r=r.delete(e),s=s.delete(e)))})),null!==this.query.limit)for(;r.size>this.query.limit;){const e="F"===this.query.limitType?r.last():r.first();r=r.delete(e.key),s=s.delete(e.key),n.track({type:1,doc:e})}return{ec:r,ic:n,zi:o,mutatedKeys:s}}rc(e,t){return e.hasLocalMutations&&t.hasCommittedMutations&&!t.hasLocalMutations}applyChanges(e,t,n){const i=this.ec;this.ec=e.ec,this.mutatedKeys=e.mutatedKeys;const s=e.ic.xu();s.sort(((e,t)=>function(e,t){const n=e=>{switch(e){case 0:return 1;case 2:case 3:return 2;case 1:return 0;default:return ya()}};return n(e)-n(t)}(e.type,t.type)||this.tc(e.doc,t.doc))),this.oc(n);const r=t?this.uc():[],o=0===this.Zu.size&&this.current?1:0,a=o!==this.Xu;return this.Xu=o,0!==s.length||a?{snapshot:new sp(this.query,e.ec,i,s,e.mutatedKeys,0===o,a,!1,!!n&&n.resumeToken.approximateByteSize()>0),cc:r}:{cc:r}}Mu(e){return this.current&&"Offline"===e?(this.current=!1,this.applyChanges({ec:this.ec,ic:new ip,mutatedKeys:this.mutatedKeys,zi:!1},!1)):{cc:[]}}ac(e){return!this.Yu.has(e)&&!!this.ec.has(e)&&!this.ec.get(e).hasLocalMutations}oc(e){e&&(e.addedDocuments.forEach((e=>this.Yu=this.Yu.add(e))),e.modifiedDocuments.forEach((e=>{})),e.removedDocuments.forEach((e=>this.Yu=this.Yu.delete(e))),this.current=e.current)}uc(){if(!this.current)return[];const e=this.Zu;this.Zu=Hc(),this.ec.forEach((e=>{this.ac(e.key)&&(this.Zu=this.Zu.add(e.key))}));const t=[];return e.forEach((e=>{this.Zu.has(e)||t.push(new fp(e))})),this.Zu.forEach((n=>{e.has(n)||t.push(new pp(n))})),t}hc(e){this.Yu=e.ir,this.Zu=Hc();const t=this.sc(e.documents);return this.applyChanges(t,!0)}lc(){return sp.fromInitialDocuments(this.query,this.ec,this.mutatedKeys,0===this.Xu,this.hasCachedResults)}}class gp{constructor(e,t,n){this.query=e,this.targetId=t,this.view=n}}class vp{constructor(e){this.key=e,this.fc=!1}}class yp{constructor(e,t,n,i,s,r){this.localStore=e,this.remoteStore=t,this.eventManager=n,this.sharedClientState=i,this.currentUser=s,this.maxConcurrentLimboResolutions=r,this.dc={},this.wc=new Mc((e=>Ac(e)),kc),this._c=new Map,this.mc=new Set,this.gc=new cl(Ba.comparator),this.yc=new Map,this.Ic=new zh,this.Tc={},this.Ec=new Map,this.Ac=Mh.Mn(),this.onlineState="Unknown",this.vc=void 0}get isPrimaryClient(){return!0===this.vc}}async function wp(e,t){const n=Fp(e);let i,s;const r=n.wc.get(t);if(r)i=r.targetId,n.sharedClientState.addLocalQueryTarget(i),s=r.view.lc();else{const e=await id(n.localStore,Cc(t)),r=n.sharedClientState.addLocalQueryTarget(e.targetId);i=e.targetId,s=await bp(n,t,i,"current"===r,e.resumeToken),n.isPrimaryClient&&Ad(n.remoteStore,e)}return s}async function bp(e,t,n,i,s){e.Rc=(t,n,i)=>async function(e,t,n,i){let s=t.view.sc(n);s.zi&&(s=await rd(e.localStore,t.query,!1).then((({documents:e})=>t.view.sc(e,s))));const r=i&&i.targetChanges.get(t.targetId),o=t.view.applyChanges(s,e.isPrimaryClient,r);return Dp(e,t.targetId,o.cc),o.snapshot}(e,t,n,i);const r=await rd(e.localStore,t,!0),o=new mp(t,r.ir),a=o.sc(r.documents),l=Bu.createSynthesizedTargetChangeForCurrentChange(n,i&&"Offline"!==e.onlineState,s),c=o.applyChanges(a,e.isPrimaryClient,l);Dp(e,n,c.cc);const u=new gp(t,n,o);return e.wc.set(t,u),e._c.has(n)?e._c.get(n).push(t):e._c.set(n,[t]),c.snapshot}async function Ep(e,t){const n=ba(e),i=n.wc.get(t),s=n._c.get(i.targetId);if(s.length>1)return n._c.set(i.targetId,s.filter((e=>!kc(e,t)))),void n.wc.delete(t);n.isPrimaryClient?(n.sharedClientState.removeLocalQueryTarget(i.targetId),n.sharedClientState.isActiveQueryTarget(i.targetId)||await sd(n.localStore,i.targetId,!1).then((()=>{n.sharedClientState.clearQueryState(i.targetId),xd(n.remoteStore,i.targetId),xp(n,i.targetId)})).catch(Xa)):(xp(n,i.targetId),await sd(n.localStore,i.targetId,!0))}async function Tp(e,t){const n=ba(e);try{const e=await function(e,t){const n=ba(e),i=t.snapshotVersion;let s=n.Ji;return n.persistence.runTransaction("Apply remote event","readwrite-primary",(e=>{const r=n.Zi.newChangeBuffer({trackRemovals:!0});s=n.Ji;const o=[];t.targetChanges.forEach(((r,a)=>{const l=s.get(a);if(!l)return;o.push(n.Bs.removeMatchingKeys(e,r.removedDocuments,a).next((()=>n.Bs.addMatchingKeys(e,r.addedDocuments,a))));let c=l.withSequenceNumber(e.currentSequenceNumber);null!==t.targetMismatches.get(a)?c=c.withResumeToken(gl.EMPTY_BYTE_STRING,Fa.min()).withLastLimboFreeSnapshotVersion(Fa.min()):r.resumeToken.approximateByteSize()>0&&(c=c.withResumeToken(r.resumeToken,i)),s=s.insert(a,c),function(e,t,n){return 0===e.resumeToken.approximateByteSize()||t.snapshotVersion.toMicroseconds()-e.snapshotVersion.toMicroseconds()>=3e8||n.addedDocuments.size+n.modifiedDocuments.size+n.removedDocuments.size>0}(l,c,r)&&o.push(n.Bs.updateTargetData(e,c))}));let a=Rc(),l=Hc();if(t.documentUpdates.forEach((i=>{t.resolvedLimboDocuments.has(i)&&o.push(n.persistence.referenceDelegate.updateLimboDocument(e,i))})),o.push(td(e,r,t.documentUpdates).next((e=>{a=e.nr,l=e.sr}))),!i.isEqual(Fa.min())){const t=n.Bs.getLastRemoteSnapshotVersion(e).next((t=>n.Bs.setTargetsMetadata(e,e.currentSequenceNumber,i)));o.push(t)}return Ya.waitFor(o).next((()=>r.apply(e))).next((()=>n.localDocuments.getLocalViewOfDocuments(e,a,l))).next((()=>a))})).then((e=>(n.Ji=s,e)))}(n.localStore,t);t.targetChanges.forEach(((e,t)=>{const i=n.yc.get(t);i&&(wa(e.addedDocuments.size+e.modifiedDocuments.size+e.removedDocuments.size<=1),e.addedDocuments.size>0?i.fc=!0:e.modifiedDocuments.size>0?wa(i.fc):e.removedDocuments.size>0&&(wa(i.fc),i.fc=!1))})),await Mp(n,e,t)}catch(e){await Xa(e)}}function Sp(e,t,n){const i=ba(e);if(i.isPrimaryClient&&0===n||!i.isPrimaryClient&&1===n){const e=[];i.wc.forEach(((n,i)=>{const s=i.view.Mu(t);s.snapshot&&e.push(s.snapshot)})),function(e,t){const n=ba(e);n.onlineState=t;let i=!1;n.queries.forEach(((e,n)=>{for(const e of n.listeners)e.Mu(t)&&(i=!0)})),i&&hp(n)}(i.eventManager,t),e.length&&i.dc.nu(e),i.onlineState=t,i.isPrimaryClient&&i.sharedClientState.setOnlineState(t)}}async function Ip(e,t,n){const i=ba(e);i.sharedClientState.updateQueryState(t,"rejected",n);const s=i.yc.get(t),r=s&&s.key;if(r){let e=new cl(Ba.comparator);e=e.insert(r,$l.newNoDocument(r,Fa.min()));const n=Hc().add(r),s=new ju(Fa.min(),new Map,new cl(Ma),e,n);await Tp(i,s),i.gc=i.gc.remove(r),i.yc.delete(t),Op(i)}else await sd(i.localStore,t,!1).then((()=>xp(i,t,n))).catch(Xa)}async function Cp(e,t){const n=ba(e),i=t.batch.batchId;try{const e=await function(e,t){const n=ba(e);return n.persistence.runTransaction("Acknowledge batch","readwrite-primary",(e=>{const i=t.batch.keys(),s=n.Zi.newChangeBuffer({trackRemovals:!0});return function(e,t,n,i){const s=n.batch,r=s.keys();let o=Ya.resolve();return r.forEach((e=>{o=o.next((()=>i.getEntry(t,e))).next((t=>{const r=n.docVersions.get(e);wa(null!==r),t.version.compareTo(r)<0&&(s.applyToRemoteDocument(t,n),t.isValidDocument()&&(t.setReadTime(n.commitVersion),i.addEntry(t)))}))})),o.next((()=>e.mutationQueue.removeMutationBatch(t,s)))}(n,e,t,s).next((()=>s.apply(e))).next((()=>n.mutationQueue.performConsistencyCheck(e))).next((()=>n.documentOverlayCache.removeOverlaysForBatchId(e,i,t.batch.batchId))).next((()=>n.localDocuments.recalculateAndSaveOverlaysForDocumentKeys(e,function(e){let t=Hc();for(let n=0;n<e.mutationResults.length;++n)e.mutationResults[n].transformResults.length>0&&(t=t.add(e.batch.mutations[n].key));return t}(t)))).next((()=>n.localDocuments.getDocuments(e,i)))}))}(n.localStore,t);Ap(n,i,null),kp(n,i),n.sharedClientState.updateMutationState(i,"acknowledged"),await Mp(n,e)}catch(e){await Xa(e)}}async function _p(e,t,n){const i=ba(e);try{const e=await function(e,t){const n=ba(e);return n.persistence.runTransaction("Reject batch","readwrite-primary",(e=>{let i;return n.mutationQueue.lookupMutationBatch(e,t).next((t=>(wa(null!==t),i=t.keys(),n.mutationQueue.removeMutationBatch(e,t)))).next((()=>n.mutationQueue.performConsistencyCheck(e))).next((()=>n.documentOverlayCache.removeOverlaysForBatchId(e,i,t))).next((()=>n.localDocuments.recalculateAndSaveOverlaysForDocumentKeys(e,i))).next((()=>n.localDocuments.getDocuments(e,i)))}))}(i.localStore,t);Ap(i,t,n),kp(i,t),i.sharedClientState.updateMutationState(t,"rejected",n),await Mp(i,e)}catch(n){await Xa(n)}}function kp(e,t){(e.Ec.get(t)||[]).forEach((e=>{e.resolve()})),e.Ec.delete(t)}function Ap(e,t,n){const i=ba(e);let s=i.Tc[i.currentUser.toKey()];if(s){const e=s.get(t);e&&(n?e.reject(n):e.resolve(),s=s.remove(t)),i.Tc[i.currentUser.toKey()]=s}}function xp(e,t,n=null){e.sharedClientState.removeLocalQueryTarget(t);for(const i of e._c.get(t))e.wc.delete(i),n&&e.dc.Pc(i,n);e._c.delete(t),e.isPrimaryClient&&e.Ic.Is(t).forEach((t=>{e.Ic.containsKey(t)||Np(e,t)}))}function Np(e,t){e.mc.delete(t.path.canonicalString());const n=e.gc.get(t);null!==n&&(xd(e.remoteStore,n),e.gc=e.gc.remove(t),e.yc.delete(n),Op(e))}function Dp(e,t,n){for(const i of n)i instanceof pp?(e.Ic.addReference(i.key,t),Lp(e,i)):i instanceof fp?(fa("SyncEngine","Document no longer in limbo: "+i.key),e.Ic.removeReference(i.key,t),e.Ic.containsKey(i.key)||Np(e,i.key)):ya()}function Lp(e,t){const n=t.key,i=n.path.canonicalString();e.gc.get(n)||e.mc.has(i)||(fa("SyncEngine","New document in limbo: "+n),e.mc.add(i),Op(e))}function Op(e){for(;e.mc.size>0&&e.gc.size<e.maxConcurrentLimboResolutions;){const t=e.mc.values().next().value;e.mc.delete(t);const n=new Ba(Ua.fromString(t)),i=e.Ac.next();e.yc.set(i,new vp(n)),e.gc=e.gc.insert(n,i),Ad(e.remoteStore,new kh(Cc(wc(n.path)),i,"TargetPurposeLimboResolution",Za.ct))}}async function Mp(e,t,n){const i=ba(e),s=[],r=[],o=[];i.wc.isEmpty()||(i.wc.forEach(((e,a)=>{o.push(i.Rc(a,t,n).then((e=>{if((e||n)&&i.isPrimaryClient&&i.sharedClientState.updateQueryState(a.targetId,(null==e?void 0:e.fromCache)?"not-current":"current"),e){s.push(e);const t=Qh.Li(a.targetId,e);r.push(t)}})))})),await Promise.all(o),i.dc.nu(s),await async function(e,t){const n=ba(e);try{await n.persistence.runTransaction("notifyLocalViewChanges","readwrite",(e=>Ya.forEach(t,(t=>Ya.forEach(t.Fi,(i=>n.persistence.referenceDelegate.addReference(e,t.targetId,i))).next((()=>Ya.forEach(t.Bi,(i=>n.persistence.referenceDelegate.removeReference(e,t.targetId,i)))))))))}catch(e){if(!Ja(e))throw e;fa("LocalStore","Failed to update sequence numbers: "+e)}for(const e of t){const t=e.targetId;if(!e.fromCache){const e=n.Ji.get(t),i=e.snapshotVersion,s=e.withLastLimboFreeSnapshotVersion(i);n.Ji=n.Ji.insert(t,s)}}}(i.localStore,r))}async function Pp(e,t){const n=ba(e);if(!n.currentUser.isEqual(t)){fa("SyncEngine","User change. New user:",t.toKey());const e=await Zh(n.localStore,t);n.currentUser=t,function(e,t){e.Ec.forEach((e=>{e.forEach((e=>{e.reject(new Ta(Ea.CANCELLED,"'waitForPendingWrites' promise is rejected due to a user change."))}))})),e.Ec.clear()}(n),n.sharedClientState.handleUserChange(t,e.removedBatchIds,e.addedBatchIds),await Mp(n,e.er)}}function Rp(e,t){const n=ba(e),i=n.yc.get(t);if(i&&i.fc)return Hc().add(i.key);{let e=Hc();const i=n._c.get(t);if(!i)return e;for(const t of i){const i=n.wc.get(t);e=e.unionWith(i.view.nc)}return e}}function Fp(e){const t=ba(e);return t.remoteStore.remoteSyncer.applyRemoteEvent=Tp.bind(null,t),t.remoteStore.remoteSyncer.getRemoteKeysForTarget=Rp.bind(null,t),t.remoteStore.remoteSyncer.rejectListen=Ip.bind(null,t),t.dc.nu=cp.bind(null,t.eventManager),t.dc.Pc=up.bind(null,t.eventManager),t}function Vp(e){const t=ba(e);return t.remoteStore.remoteSyncer.applySuccessfulWrite=Cp.bind(null,t),t.remoteStore.remoteSyncer.rejectFailedWrite=_p.bind(null,t),t}class Up{constructor(){this.synchronizeTabs=!1}async initialize(e){this.serializer=yd(e.databaseInfo.databaseId),this.sharedClientState=this.createSharedClientState(e),this.persistence=this.createPersistence(e),await this.persistence.start(),this.localStore=this.createLocalStore(e),this.gcScheduler=this.createGarbageCollectionScheduler(e,this.localStore),this.indexBackfillerScheduler=this.createIndexBackfillerScheduler(e,this.localStore)}createGarbageCollectionScheduler(e,t){return null}createIndexBackfillerScheduler(e,t){return null}createLocalStore(e){return Jh(this.persistence,new Xh,e.initialUser,this.serializer)}createPersistence(e){return new Gh(Kh.zs,this.serializer)}createSharedClientState(e){return new ld}async terminate(){this.gcScheduler&&this.gcScheduler.stop(),await this.sharedClientState.shutdown(),await this.persistence.shutdown()}}class zp{async initialize(e,t){this.localStore||(this.localStore=e.localStore,this.sharedClientState=e.sharedClientState,this.datastore=this.createDatastore(t),this.remoteStore=this.createRemoteStore(t),this.eventManager=this.createEventManager(t),this.syncEngine=this.createSyncEngine(t,!e.synchronizeTabs),this.sharedClientState.onlineStateHandler=e=>Sp(this.syncEngine,e,1),this.remoteStore.remoteSyncer.handleCredentialChange=Pp.bind(null,this.syncEngine),await Yd(this.remoteStore,this.syncEngine.isPrimaryClient))}createEventManager(e){return new op}createDatastore(e){const t=yd(e.databaseInfo.databaseId),n=(i=e.databaseInfo,new gd(i));var i;return function(e,t,n,i){return new Sd(e,t,n,i)}(e.authCredentials,e.appCheckCredentials,n,t)}createRemoteStore(e){var t,n,i,s,r;return t=this.localStore,n=this.datastore,i=e.asyncQueue,s=e=>Sp(this.syncEngine,e,0),r=ud.D()?new ud:new cd,new Cd(t,n,i,s,r)}createSyncEngine(e,t){return function(e,t,n,i,s,r,o){const a=new yp(e,t,n,i,s,r);return o&&(a.vc=!0),a}(this.localStore,this.remoteStore,this.eventManager,this.sharedClientState,e.initialUser,e.maxConcurrentLimboResolutions,t)}terminate(){return async function(e){const t=ba(e);fa("RemoteStore","RemoteStore shutting down."),t.vu.add(5),await kd(t),t.Pu.shutdown(),t.bu.set("Unknown")}(this.remoteStore)}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
class jp{constructor(e){this.observer=e,this.muted=!1}next(e){this.observer.next&&this.Sc(this.observer.next,e)}error(e){this.observer.error?this.Sc(this.observer.error,e):ma("Uncaught Error in snapshot listener:",e.toString())}Dc(){this.muted=!0}Sc(e,t){this.muted||setTimeout((()=>{this.muted||e(t)}),0)}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
class Bp{constructor(e,t,n,i){this.authCredentials=e,this.appCheckCredentials=t,this.asyncQueue=n,this.databaseInfo=i,this.user=ua.UNAUTHENTICATED,this.clientId=Oa.A(),this.authCredentialListener=()=>Promise.resolve(),this.appCheckCredentialListener=()=>Promise.resolve(),this.authCredentials.start(n,(async e=>{fa("FirestoreClient","Received user=",e.uid),await this.authCredentialListener(e),this.user=e})),this.appCheckCredentials.start(n,(e=>(fa("FirestoreClient","Received new app check token=",e),this.appCheckCredentialListener(e,this.user))))}async getConfiguration(){return{asyncQueue:this.asyncQueue,databaseInfo:this.databaseInfo,clientId:this.clientId,authCredentials:this.authCredentials,appCheckCredentials:this.appCheckCredentials,initialUser:this.user,maxConcurrentLimboResolutions:100}}setCredentialChangeListener(e){this.authCredentialListener=e}setAppCheckTokenChangeListener(e){this.appCheckCredentialListener=e}verifyNotTerminated(){if(this.asyncQueue.isShuttingDown)throw new Ta(Ea.FAILED_PRECONDITION,"The client has already been terminated.")}terminate(){this.asyncQueue.enterRestrictedMode();const e=new Sa;return this.asyncQueue.enqueueAndForgetEvenWhileRestricted((async()=>{try{this._onlineComponents&&await this._onlineComponents.terminate(),this._offlineComponents&&await this._offlineComponents.terminate(),this.authCredentials.shutdown(),this.appCheckCredentials.shutdown(),e.resolve()}catch(t){const n=tp(t,"Failed to shutdown persistence");e.reject(n)}})),e.promise}}async function $p(e,t){e.asyncQueue.verifyOperationInProgress(),fa("FirestoreClient","Initializing OfflineComponentProvider");const n=await e.getConfiguration();await t.initialize(n);let i=n.initialUser;e.setCredentialChangeListener((async e=>{i.isEqual(e)||(await Zh(t.localStore,e),i=e)})),t.persistence.setDatabaseDeletedListener((()=>e.terminate())),e._offlineComponents=t}async function qp(e,t){e.asyncQueue.verifyOperationInProgress();const n=await Gp(e);fa("FirestoreClient","Initializing OnlineComponentProvider");const i=await e.getConfiguration();await t.initialize(n,i),e.setCredentialChangeListener((e=>Xd(t.remoteStore,e))),e.setAppCheckTokenChangeListener(((e,n)=>Xd(t.remoteStore,n))),e._onlineComponents=t}function Hp(e){return"FirebaseError"===e.name?e.code===Ea.FAILED_PRECONDITION||e.code===Ea.UNIMPLEMENTED:!("undefined"!=typeof DOMException&&e instanceof DOMException)||22===e.code||20===e.code||11===e.code}async function Gp(e){if(!e._offlineComponents)if(e._uninitializedComponentsProvider){fa("FirestoreClient","Using user provided OfflineComponentProvider");try{await $p(e,e._uninitializedComponentsProvider._offline)}catch(t){const n=t;if(!Hp(n))throw n;ga("Error using user provided cache. Falling back to memory cache: "+n),await $p(e,new Up)}}else fa("FirestoreClient","Using default OfflineComponentProvider"),await $p(e,new Up);return e._offlineComponents}async function Wp(e){return e._onlineComponents||(e._uninitializedComponentsProvider?(fa("FirestoreClient","Using user provided OnlineComponentProvider"),await qp(e,e._uninitializedComponentsProvider._online)):(fa("FirestoreClient","Using default OnlineComponentProvider"),await qp(e,new zp))),e._onlineComponents}function Kp(e){return Wp(e).then((e=>e.syncEngine))}async function Qp(e){const t=await Wp(e),n=t.eventManager;return n.onListen=wp.bind(null,t.syncEngine),n.onUnlisten=Ep.bind(null,t.syncEngine),n}function Xp(e,t,n={}){const i=new Sa;return e.asyncQueue.enqueueAndForget((async()=>function(e,t,n,i,s){const r=new jp({next:r=>{t.enqueueAndForget((()=>lp(e,o)));const a=r.docs.has(n);!a&&r.fromCache?s.reject(new Ta(Ea.UNAVAILABLE,"Failed to get document because the client is offline.")):a&&r.fromCache&&i&&"server"===i.source?s.reject(new Ta(Ea.UNAVAILABLE,'Failed to get document from server. (However, this document does exist in the local cache. Run again without setting source to "server" to retrieve the cached document.)')):s.resolve(r)},error:e=>s.reject(e)}),o=new dp(wc(n.path),r,{includeMetadataChanges:!0,Ku:!0});return ap(e,o)}(await Qp(e),e.asyncQueue,t,n,i))),i.promise}
/**
 * @license
 * Copyright 2023 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
function Yp(e){const t={};return void 0!==e.timeoutSeconds&&(t.timeoutSeconds=e.timeoutSeconds),t
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */}const Jp=new Map;
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Zp(e,t,n){if(!n)throw new Ta(Ea.INVALID_ARGUMENT,`Function ${e}() cannot be called with an empty ${t}.`)}function ef(e){if(!Ba.isDocumentKey(e))throw new Ta(Ea.INVALID_ARGUMENT,`Invalid document reference. Document references must have an even number of segments, but ${e} has ${e.length}.`)}function tf(e){if(Ba.isDocumentKey(e))throw new Ta(Ea.INVALID_ARGUMENT,`Invalid collection reference. Collection references must have an odd number of segments, but ${e} has ${e.length}.`)}function nf(e){if(void 0===e)return"undefined";if(null===e)return"null";if("string"==typeof e)return e.length>20&&(e=`${e.substring(0,20)}...`),JSON.stringify(e);if("number"==typeof e||"boolean"==typeof e)return""+e;if("object"==typeof e){if(e instanceof Array)return"an array";{const t=function(e){return e.constructor?e.constructor.name:null}(e);return t?`a custom ${t} object`:"an object"}}return"function"==typeof e?"a function":ya()}function sf(e,t){if("_delegate"in e&&(e=e._delegate),!(e instanceof t)){if(t.name===e.constructor.name)throw new Ta(Ea.INVALID_ARGUMENT,"Type does not match the expected instance. Did you pass a reference from a different Firestore SDK?");{const n=nf(e);throw new Ta(Ea.INVALID_ARGUMENT,`Expected type '${t.name}', but it was: ${n}`)}}return e}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
class rf{constructor(e){var t,n;if(void 0===e.host){if(void 0!==e.ssl)throw new Ta(Ea.INVALID_ARGUMENT,"Can't provide ssl option if host option is not set");this.host="firestore.googleapis.com",this.ssl=!0}else this.host=e.host,this.ssl=null===(t=e.ssl)||void 0===t||t;if(this.credentials=e.credentials,this.ignoreUndefinedProperties=!!e.ignoreUndefinedProperties,this.cache=e.localCache,void 0===e.cacheSizeBytes)this.cacheSizeBytes=41943040;else{if(-1!==e.cacheSizeBytes&&e.cacheSizeBytes<1048576)throw new Ta(Ea.INVALID_ARGUMENT,"cacheSizeBytes must be at least 1048576");this.cacheSizeBytes=e.cacheSizeBytes}(function(e,t,n,i){if(!0===t&&!0===i)throw new Ta(Ea.INVALID_ARGUMENT,`${e} and ${n} cannot be used together.`)})("experimentalForceLongPolling",e.experimentalForceLongPolling,"experimentalAutoDetectLongPolling",e.experimentalAutoDetectLongPolling),this.experimentalForceLongPolling=!!e.experimentalForceLongPolling,this.experimentalForceLongPolling?this.experimentalAutoDetectLongPolling=!1:void 0===e.experimentalAutoDetectLongPolling?this.experimentalAutoDetectLongPolling=!0:this.experimentalAutoDetectLongPolling=!!e.experimentalAutoDetectLongPolling,this.experimentalLongPollingOptions=Yp(null!==(n=e.experimentalLongPollingOptions)&&void 0!==n?n:{}),function(e){if(void 0!==e.timeoutSeconds){if(isNaN(e.timeoutSeconds))throw new Ta(Ea.INVALID_ARGUMENT,`invalid long polling timeout: ${e.timeoutSeconds} (must not be NaN)`);if(e.timeoutSeconds<5)throw new Ta(Ea.INVALID_ARGUMENT,`invalid long polling timeout: ${e.timeoutSeconds} (minimum allowed value is 5)`);if(e.timeoutSeconds>30)throw new Ta(Ea.INVALID_ARGUMENT,`invalid long polling timeout: ${e.timeoutSeconds} (maximum allowed value is 30)`)}}(this.experimentalLongPollingOptions),this.useFetchStreams=!!e.useFetchStreams}isEqual(e){var t,n;return this.host===e.host&&this.ssl===e.ssl&&this.credentials===e.credentials&&this.cacheSizeBytes===e.cacheSizeBytes&&this.experimentalForceLongPolling===e.experimentalForceLongPolling&&this.experimentalAutoDetectLongPolling===e.experimentalAutoDetectLongPolling&&(t=this.experimentalLongPollingOptions,n=e.experimentalLongPollingOptions,t.timeoutSeconds===n.timeoutSeconds)&&this.ignoreUndefinedProperties===e.ignoreUndefinedProperties&&this.useFetchStreams===e.useFetchStreams}}class of{constructor(e,t,n,i){this._authCredentials=e,this._appCheckCredentials=t,this._databaseId=n,this._app=i,this.type="firestore-lite",this._persistenceKey="(lite)",this._settings=new rf({}),this._settingsFrozen=!1}get app(){if(!this._app)throw new Ta(Ea.FAILED_PRECONDITION,"Firestore was not initialized using the Firebase SDK. 'app' is not available");return this._app}get _initialized(){return this._settingsFrozen}get _terminated(){return void 0!==this._terminateTask}_setSettings(e){if(this._settingsFrozen)throw new Ta(Ea.FAILED_PRECONDITION,"Firestore has already been started and its settings can no longer be changed. You can only modify settings before calling any other methods on a Firestore object.");this._settings=new rf(e),void 0!==e.credentials&&(this._authCredentials=function(e){if(!e)return new Ca;switch(e.type){case"firstParty":return new xa(e.sessionIndex||"0",e.iamToken||null,e.authTokenFactory||null);case"provider":return e.client;default:throw new Ta(Ea.INVALID_ARGUMENT,"makeAuthCredentialsProvider failed due to invalid credential type")}}(e.credentials))}_getSettings(){return this._settings}_freezeSettings(){return this._settingsFrozen=!0,this._settings}_delete(){return this._terminateTask||(this._terminateTask=this._terminate()),this._terminateTask}toJSON(){return{app:this._app,databaseId:this._databaseId,settings:this._settings}}_terminate(){return function(e){const t=Jp.get(e);t&&(fa("ComponentProvider","Removing Datastore"),Jp.delete(e),t.terminate())}(this),Promise.resolve()}}function af(e,t,n,i={}){var s;const r=(e=sf(e,of))._getSettings();if("firestore.googleapis.com"!==r.host&&r.host!==t&&ga("Host has been set in both settings() and useEmulator(), emulator host will be used"),e._setSettings(Object.assign(Object.assign({},r),{host:`${t}:${n}`,ssl:!1})),i.mockUserToken){let t,n;if("string"==typeof i.mockUserToken)t=i.mockUserToken,n=ua.MOCK_USER;else{t=mt(i.mockUserToken,null===(s=e._app)||void 0===s?void 0:s.options.projectId);const r=i.mockUserToken.sub||i.mockUserToken.user_id;if(!r)throw new Ta(Ea.INVALID_ARGUMENT,"mockUserToken must contain 'sub' or 'user_id' field!");n=new ua(r)}e._authCredentials=new _a(new Ia(t,n))}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class lf{constructor(e,t,n){this.converter=t,this._key=n,this.type="document",this.firestore=e}get _path(){return this._key.path}get id(){return this._key.path.lastSegment()}get path(){return this._key.path.canonicalString()}get parent(){return new uf(this.firestore,this.converter,this._key.path.popLast())}withConverter(e){return new lf(this.firestore,e,this._key)}}class cf{constructor(e,t,n){this.converter=t,this._query=n,this.type="query",this.firestore=e}withConverter(e){return new cf(this.firestore,e,this._query)}}class uf extends cf{constructor(e,t,n){super(e,t,wc(n)),this._path=n,this.type="collection"}get id(){return this._query.path.lastSegment()}get path(){return this._query.path.canonicalString()}get parent(){const e=this._path.popLast();return e.isEmpty()?null:new lf(this.firestore,null,new Ba(e))}withConverter(e){return new uf(this.firestore,e,this._path)}}function hf(e,t,...n){if(e=Lt(e),Zp("collection","path",t),e instanceof of){const i=Ua.fromString(t,...n);return tf(i),new uf(e,null,i)}{if(!(e instanceof lf||e instanceof uf))throw new Ta(Ea.INVALID_ARGUMENT,"Expected first argument to collection() to be a CollectionReference, a DocumentReference or FirebaseFirestore");const i=e._path.child(Ua.fromString(t,...n));return tf(i),new uf(e.firestore,null,i)}}function df(e,t,...n){if(e=Lt(e),1===arguments.length&&(t=Oa.A()),Zp("doc","path",t),e instanceof of){const i=Ua.fromString(t,...n);return ef(i),new lf(e,null,new Ba(i))}{if(!(e instanceof lf||e instanceof uf))throw new Ta(Ea.INVALID_ARGUMENT,"Expected first argument to collection() to be a CollectionReference, a DocumentReference or FirebaseFirestore");const i=e._path.child(Ua.fromString(t,...n));return ef(i),new lf(e.firestore,e instanceof uf?e.converter:null,new Ba(i))}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
class pf{constructor(){this.Gc=Promise.resolve(),this.Qc=[],this.jc=!1,this.zc=[],this.Wc=null,this.Hc=!1,this.Jc=!1,this.Yc=[],this.qo=new wd(this,"async_queue_retry"),this.Xc=()=>{const e=vd();e&&fa("AsyncQueue","Visibility state changed to "+e.visibilityState),this.qo.Mo()};const e=vd();e&&"function"==typeof e.addEventListener&&e.addEventListener("visibilitychange",this.Xc)}get isShuttingDown(){return this.jc}enqueueAndForget(e){this.enqueue(e)}enqueueAndForgetEvenWhileRestricted(e){this.Zc(),this.ta(e)}enterRestrictedMode(e){if(!this.jc){this.jc=!0,this.Jc=e||!1;const t=vd();t&&"function"==typeof t.removeEventListener&&t.removeEventListener("visibilitychange",this.Xc)}}enqueue(e){if(this.Zc(),this.jc)return new Promise((()=>{}));const t=new Sa;return this.ta((()=>this.jc&&this.Jc?Promise.resolve():(e().then(t.resolve,t.reject),t.promise))).then((()=>t.promise))}enqueueRetryable(e){this.enqueueAndForget((()=>(this.Qc.push(e),this.ea())))}async ea(){if(0!==this.Qc.length){try{await this.Qc[0](),this.Qc.shift(),this.qo.reset()}catch(e){if(!Ja(e))throw e;fa("AsyncQueue","Operation failed with retryable error: "+e)}this.Qc.length>0&&this.qo.No((()=>this.ea()))}}ta(e){const t=this.Gc.then((()=>(this.Hc=!0,e().catch((e=>{this.Wc=e,this.Hc=!1;const t=function(e){let t=e.message||"";return e.stack&&(t=e.stack.includes(e.message)?e.stack:e.message+"\n"+e.stack),t}(e);throw ma("INTERNAL UNHANDLED ERROR: ",t),e})).then((e=>(this.Hc=!1,e))))));return this.Gc=t,t}enqueueAfterDelay(e,t,n){this.Zc(),this.Yc.indexOf(e)>-1&&(t=0);const i=ep.createAndSchedule(this,e,t,n,(e=>this.na(e)));return this.zc.push(i),i}Zc(){this.Wc&&ya()}verifyOperationInProgress(){}async sa(){let e;do{e=this.Gc,await e}while(e!==this.Gc)}ia(e){for(const t of this.zc)if(t.timerId===e)return!0;return!1}ra(e){return this.sa().then((()=>{this.zc.sort(((e,t)=>e.targetTimeMs-t.targetTimeMs));for(const t of this.zc)if(t.skipDelay(),"all"!==e&&t.timerId===e)break;return this.sa()}))}oa(e){this.Yc.push(e)}na(e){const t=this.zc.indexOf(e);this.zc.splice(t,1)}}function ff(e){return function(e,t){if("object"!=typeof e||null===e)return!1;const n=e;for(const e of["next","error","complete"])if(e in n&&"function"==typeof n[e])return!0;return!1}(e)}class mf extends of{constructor(e,t,n,i){super(e,t,n,i),this.type="firestore",this._queue=new pf,this._persistenceKey=(null==i?void 0:i.name)||"[DEFAULT]"}_terminate(){return this._firestoreClient||vf(this),this._firestoreClient.terminate()}}function gf(e){return e._firestoreClient||vf(e),e._firestoreClient.verifyNotTerminated(),e._firestoreClient}function vf(e){var t,n,i;const s=e._freezeSettings(),r=function(e,t,n,i){return new Il(e,t,n,i.host,i.ssl,i.experimentalForceLongPolling,i.experimentalAutoDetectLongPolling,Yp(i.experimentalLongPollingOptions),i.useFetchStreams)}(e._databaseId,(null===(t=e._app)||void 0===t?void 0:t.options.appId)||"",e._persistenceKey,s);e._firestoreClient=new Bp(e._authCredentials,e._appCheckCredentials,e._queue,r),(null===(n=s.cache)||void 0===n?void 0:n._offlineComponentProvider)&&(null===(i=s.cache)||void 0===i?void 0:i._onlineComponentProvider)&&(e._firestoreClient._uninitializedComponentsProvider={_offlineKind:s.cache.kind,_offline:s.cache._offlineComponentProvider,_online:s.cache._onlineComponentProvider})}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
class yf{constructor(e){this._byteString=e}static fromBase64String(e){try{return new yf(gl.fromBase64String(e))}catch(e){throw new Ta(Ea.INVALID_ARGUMENT,"Failed to construct data from Base64 string: "+e)}}static fromUint8Array(e){return new yf(gl.fromUint8Array(e))}toBase64(){return this._byteString.toBase64()}toUint8Array(){return this._byteString.toUint8Array()}toString(){return"Bytes(base64: "+this.toBase64()+")"}isEqual(e){return this._byteString.isEqual(e._byteString)}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class wf{constructor(...e){for(let t=0;t<e.length;++t)if(0===e[t].length)throw new Ta(Ea.INVALID_ARGUMENT,"Invalid field name at argument $(i + 1). Field names must not be empty.");this._internalPath=new ja(e)}isEqual(e){return this._internalPath.isEqual(e._internalPath)}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
class bf{constructor(e){this._methodName=e}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ef{constructor(e,t){if(!isFinite(e)||e<-90||e>90)throw new Ta(Ea.INVALID_ARGUMENT,"Latitude must be a number between -90 and 90, but was: "+e);if(!isFinite(t)||t<-180||t>180)throw new Ta(Ea.INVALID_ARGUMENT,"Longitude must be a number between -180 and 180, but was: "+t);this._lat=e,this._long=t}get latitude(){return this._lat}get longitude(){return this._long}isEqual(e){return this._lat===e._lat&&this._long===e._long}toJSON(){return{latitude:this._lat,longitude:this._long}}_compareTo(e){return Ma(this._lat,e._lat)||Ma(this._long,e._long)}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Tf=/^__.*__$/;class Sf{constructor(e,t,n){this.data=e,this.fieldMask=t,this.fieldTransforms=n}toMutation(e,t){return null!==this.fieldMask?new wu(e,this.data,this.fieldMask,t,this.fieldTransforms):new yu(e,this.data,t,this.fieldTransforms)}}function If(e){switch(e){case 0:case 2:case 1:return!0;case 3:case 4:return!1;default:throw ya()}}class Cf{constructor(e,t,n,i,s,r){this.settings=e,this.databaseId=t,this.serializer=n,this.ignoreUndefinedProperties=i,void 0===s&&this.ua(),this.fieldTransforms=s||[],this.fieldMask=r||[]}get path(){return this.settings.path}get ca(){return this.settings.ca}aa(e){return new Cf(Object.assign(Object.assign({},this.settings),e),this.databaseId,this.serializer,this.ignoreUndefinedProperties,this.fieldTransforms,this.fieldMask)}ha(e){var t;const n=null===(t=this.path)||void 0===t?void 0:t.child(e),i=this.aa({path:n,la:!1});return i.fa(e),i}da(e){var t;const n=null===(t=this.path)||void 0===t?void 0:t.child(e),i=this.aa({path:n,la:!1});return i.ua(),i}wa(e){return this.aa({path:void 0,la:!0})}_a(e){return Rf(e,this.settings.methodName,this.settings.ma||!1,this.path,this.settings.ga)}contains(e){return void 0!==this.fieldMask.find((t=>e.isPrefixOf(t)))||void 0!==this.fieldTransforms.find((t=>e.isPrefixOf(t.field)))}ua(){if(this.path)for(let e=0;e<this.path.length;e++)this.fa(this.path.get(e))}fa(e){if(0===e.length)throw this._a("Document fields must not be empty");if(If(this.ca)&&Tf.test(e))throw this._a('Document fields cannot begin and end with "__"')}}class _f{constructor(e,t,n){this.databaseId=e,this.ignoreUndefinedProperties=t,this.serializer=n||yd(e)}ya(e,t,n,i=!1){return new Cf({ca:e,methodName:t,ga:n,path:ja.emptyPath(),la:!1,ma:i},this.databaseId,this.serializer,this.ignoreUndefinedProperties)}}function kf(e){const t=e._freezeSettings(),n=yd(e._databaseId);return new _f(e._databaseId,!!t.ignoreUndefinedProperties,n)}function Af(e,t,n,i,s,r={}){const o=e.ya(r.merge||r.mergeFields?2:0,t,n,s);Lf("Data must be an object, but it was:",o,i);const a=Nf(i,o);let l,c;if(r.merge)l=new fl(o.fieldMask),c=o.fieldTransforms;else if(r.mergeFields){const e=[];for(const i of r.mergeFields){const s=Of(t,i,n);if(!o.contains(s))throw new Ta(Ea.INVALID_ARGUMENT,`Field '${s}' is specified in your field mask but missing from your input data.`);Ff(e,s)||e.push(s)}l=new fl(e),c=o.fieldTransforms.filter((e=>l.covers(e.field)))}else l=null,c=o.fieldTransforms;return new Sf(new jl(a),l,c)}function xf(e,t){if(Df(e=Lt(e)))return Lf("Unsupported field value:",t,e),Nf(e,t);if(e instanceof bf)return function(e,t){if(!If(t.ca))throw t._a(`${e._methodName}() can only be used with update() and set()`);if(!t.path)throw t._a(`${e._methodName}() is not currently supported inside arrays`);const n=e._toFieldTransform(t);n&&t.fieldTransforms.push(n)}(e,t),null;if(void 0===e&&t.ignoreUndefinedProperties)return null;if(t.path&&t.fieldMask.push(t.path),e instanceof Array){if(t.settings.la&&4!==t.ca)throw t._a("Nested arrays are not supported");return function(e,t){const n=[];let i=0;for(const s of e){let e=xf(s,t.wa(i));null==e&&(e={nullValue:"NULL_VALUE"}),n.push(e),i++}return{arrayValue:{values:n}}}(e,t)}return function(e,t){if(null===(e=Lt(e)))return{nullValue:"NULL_VALUE"};if("number"==typeof e)return Xc(t.serializer,e);if("boolean"==typeof e)return{booleanValue:e};if("string"==typeof e)return{stringValue:e};if(e instanceof Date){const n=Ra.fromDate(e);return{timestampValue:th(t.serializer,n)}}if(e instanceof Ra){const n=new Ra(e.seconds,1e3*Math.floor(e.nanoseconds/1e3));return{timestampValue:th(t.serializer,n)}}if(e instanceof Ef)return{geoPointValue:{latitude:e.latitude,longitude:e.longitude}};if(e instanceof yf)return{bytesValue:nh(t.serializer,e._byteString)};if(e instanceof lf){const n=t.databaseId,i=e.firestore._databaseId;if(!i.isEqual(n))throw t._a(`Document reference is for database ${i.projectId}/${i.database} but should be for database ${n.projectId}/${n.database}`);return{referenceValue:rh(e.firestore._databaseId||t.databaseId,e._key.path)}}throw t._a(`Unsupported field value: ${nf(e)}`)}(e,t)}function Nf(e,t){const n={};return ll(e)?t.path&&t.path.length>0&&t.fieldMask.push(t.path):al(e,((e,i)=>{const s=xf(i,t.ha(e));null!=s&&(n[e]=s)})),{mapValue:{fields:n}}}function Df(e){return!("object"!=typeof e||null===e||e instanceof Array||e instanceof Date||e instanceof Ra||e instanceof Ef||e instanceof yf||e instanceof lf||e instanceof bf)}function Lf(e,t,n){if(!Df(n)||!function(e){return"object"==typeof e&&null!==e&&(Object.getPrototypeOf(e)===Object.prototype||null===Object.getPrototypeOf(e))}(n)){const i=nf(n);throw"an object"===i?t._a(e+" a custom object"):t._a(e+" "+i)}}function Of(e,t,n){if((t=Lt(t))instanceof wf)return t._internalPath;if("string"==typeof t)return Pf(e,t);throw Rf("Field path arguments must be of type string or ",e,!1,void 0,n)}const Mf=new RegExp("[~\\*/\\[\\]]");function Pf(e,t,n){if(t.search(Mf)>=0)throw Rf(`Invalid field path (${t}). Paths must not contain '~', '*', '/', '[', or ']'`,e,!1,void 0,n);try{return new wf(...t.split("."))._internalPath}catch(i){throw Rf(`Invalid field path (${t}). Paths must not be empty, begin with '.', end with '.', or contain '..'`,e,!1,void 0,n)}}function Rf(e,t,n,i,s){const r=i&&!i.isEmpty(),o=void 0!==s;let a=`Function ${t}() called with invalid data`;n&&(a+=" (via `toFirestore()`)"),a+=". ";let l="";return(r||o)&&(l+=" (found",r&&(l+=` in field ${i}`),o&&(l+=` in document ${s}`),l+=")"),new Ta(Ea.INVALID_ARGUMENT,a+e+l)}function Ff(e,t){return e.some((e=>e.isEqual(t)))}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Vf{constructor(e,t,n,i,s){this._firestore=e,this._userDataWriter=t,this._key=n,this._document=i,this._converter=s}get id(){return this._key.path.lastSegment()}get ref(){return new lf(this._firestore,this._converter,this._key)}exists(){return null!==this._document}data(){if(this._document){if(this._converter){const e=new Uf(this._firestore,this._userDataWriter,this._key,this._document,null);return this._converter.fromFirestore(e)}return this._userDataWriter.convertValue(this._document.data.value)}}get(e){if(this._document){const t=this._document.data.field(zf("DocumentSnapshot.get",e));if(null!==t)return this._userDataWriter.convertValue(t)}}}class Uf extends Vf{data(){return super.data()}}function zf(e,t){return"string"==typeof t?Pf(e,t):t instanceof wf?t._internalPath:t._delegate._internalPath}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function jf(e){if("L"===e.limitType&&0===e.explicitOrderBy.length)throw new Ta(Ea.UNIMPLEMENTED,"limitToLast() queries require specifying at least one orderBy() clause")}class Bf{convertValue(e,t="none"){switch(kl(e)){case 0:return null;case 1:return e.booleanValue;case 2:return wl(e.integerValue||e.doubleValue);case 3:return this.convertTimestamp(e.timestampValue);case 4:return this.convertServerTimestamp(e,t);case 5:return e.stringValue;case 6:return this.convertBytes(bl(e.bytesValue));case 7:return this.convertReference(e.referenceValue);case 8:return this.convertGeoPoint(e.geoPointValue);case 9:return this.convertArray(e.arrayValue,t);case 10:return this.convertObject(e.mapValue,t);default:throw ya()}}convertObject(e,t){return this.convertObjectMap(e.fields,t)}convertObjectMap(e,t="none"){const n={};return al(e,((e,i)=>{n[e]=this.convertValue(i,t)})),n}convertGeoPoint(e){return new Ef(wl(e.latitude),wl(e.longitude))}convertArray(e,t){return(e.values||[]).map((e=>this.convertValue(e,t)))}convertServerTimestamp(e,t){switch(t){case"previous":const n=Tl(e);return null==n?null:this.convertValue(n,t);case"estimate":return this.convertTimestamp(Sl(e));default:return null}}convertTimestamp(e){const t=yl(e);return new Ra(t.seconds,t.nanos)}convertDocumentKey(e,t){const n=Ua.fromString(e);wa(_h(n));const i=new Cl(n.get(1),n.get(3)),s=new Ba(n.popFirst(5));return i.isEqual(t)||ma(`Document ${s} contains a document reference within a different database (${i.projectId}/${i.database}) which is not supported. It will be treated as a reference in the current database (${t.projectId}/${t.database}) instead.`),s}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function $f(e,t,n){let i;return i=e?n&&(n.merge||n.mergeFields)?e.toFirestore(t,n):e.toFirestore(t):t,i}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
class qf{constructor(e,t){this.hasPendingWrites=e,this.fromCache=t}isEqual(e){return this.hasPendingWrites===e.hasPendingWrites&&this.fromCache===e.fromCache}}class Hf extends Vf{constructor(e,t,n,i,s,r){super(e,t,n,i,r),this._firestore=e,this._firestoreImpl=e,this.metadata=s}exists(){return super.exists()}data(e={}){if(this._document){if(this._converter){const t=new Gf(this._firestore,this._userDataWriter,this._key,this._document,this.metadata,null);return this._converter.fromFirestore(t,e)}return this._userDataWriter.convertValue(this._document.data.value,e.serverTimestamps)}}get(e,t={}){if(this._document){const n=this._document.data.field(zf("DocumentSnapshot.get",e));if(null!==n)return this._userDataWriter.convertValue(n,t.serverTimestamps)}}}class Gf extends Hf{data(e={}){return super.data(e)}}class Wf{constructor(e,t,n,i){this._firestore=e,this._userDataWriter=t,this._snapshot=i,this.metadata=new qf(i.hasPendingWrites,i.fromCache),this.query=n}get docs(){const e=[];return this.forEach((t=>e.push(t))),e}get size(){return this._snapshot.docs.size}get empty(){return 0===this.size}forEach(e,t){this._snapshot.docs.forEach((n=>{e.call(t,new Gf(this._firestore,this._userDataWriter,n.key,n,new qf(this._snapshot.mutatedKeys.has(n.key),this._snapshot.fromCache),this.query.converter))}))}docChanges(e={}){const t=!!e.includeMetadataChanges;if(t&&this._snapshot.excludesMetadataChanges)throw new Ta(Ea.INVALID_ARGUMENT,"To include metadata changes with your document changes, you must also pass { includeMetadataChanges:true } to onSnapshot().");return this._cachedChanges&&this._cachedChangesIncludeMetadataChanges===t||(this._cachedChanges=function(e,t){if(e._snapshot.oldDocs.isEmpty()){let t=0;return e._snapshot.docChanges.map((n=>{const i=new Gf(e._firestore,e._userDataWriter,n.doc.key,n.doc,new qf(e._snapshot.mutatedKeys.has(n.doc.key),e._snapshot.fromCache),e.query.converter);return n.doc,{type:"added",doc:i,oldIndex:-1,newIndex:t++}}))}{let n=e._snapshot.oldDocs;return e._snapshot.docChanges.filter((e=>t||3!==e.type)).map((t=>{const i=new Gf(e._firestore,e._userDataWriter,t.doc.key,t.doc,new qf(e._snapshot.mutatedKeys.has(t.doc.key),e._snapshot.fromCache),e.query.converter);let s=-1,r=-1;return 0!==t.type&&(s=n.indexOf(t.doc.key),n=n.delete(t.doc.key)),1!==t.type&&(n=n.add(t.doc),r=n.indexOf(t.doc.key)),{type:Kf(t.type),doc:i,oldIndex:s,newIndex:r}}))}}(this,t),this._cachedChangesIncludeMetadataChanges=t),this._cachedChanges}}function Kf(e){switch(e){case 0:return"added";case 2:case 3:return"modified";case 1:return"removed";default:return ya()}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
function Qf(e){e=sf(e,lf);const t=sf(e.firestore,mf);return Xp(gf(t),e._key).then((n=>em(t,e,n)))}class Xf extends Bf{constructor(e){super(),this.firestore=e}convertBytes(e){return new yf(e)}convertReference(e){const t=this.convertDocumentKey(e,this.firestore._databaseId);return new lf(this.firestore,null,t)}}function Yf(e,t,n){e=sf(e,lf);const i=sf(e.firestore,mf),s=$f(e.converter,t,n);return Zf(i,[Af(kf(i),"setDoc",e._key,s,null!==e.converter,n).toMutation(e._key,uu.none())])}function Jf(e,...t){var n,i,s;e=Lt(e);let r={includeMetadataChanges:!1},o=0;"object"!=typeof t[o]||ff(t[o])||(r=t[o],o++);const a={includeMetadataChanges:r.includeMetadataChanges};if(ff(t[o])){const e=t[o];t[o]=null===(n=e.next)||void 0===n?void 0:n.bind(e),t[o+1]=null===(i=e.error)||void 0===i?void 0:i.bind(e),t[o+2]=null===(s=e.complete)||void 0===s?void 0:s.bind(e)}let l,c,u;if(e instanceof lf)c=sf(e.firestore,mf),u=wc(e._key.path),l={next:n=>{t[o]&&t[o](em(c,e,n))},error:t[o+1],complete:t[o+2]};else{const n=sf(e,cf);c=sf(n.firestore,mf),u=n._query;const i=new Xf(c);l={next:e=>{t[o]&&t[o](new Wf(c,i,n,e))},error:t[o+1],complete:t[o+2]},jf(e._query)}return function(e,t,n,i){const s=new jp(i),r=new dp(t,s,n);return e.asyncQueue.enqueueAndForget((async()=>ap(await Qp(e),r))),()=>{s.Dc(),e.asyncQueue.enqueueAndForget((async()=>lp(await Qp(e),r)))}}(gf(c),u,a,l)}function Zf(e,t){return function(e,t){const n=new Sa;return e.asyncQueue.enqueueAndForget((async()=>async function(e,t,n){const i=Vp(e);try{const e=await function(e,t){const n=ba(e),i=Ra.now(),s=t.reduce(((e,t)=>e.add(t.key)),Hc());let r,o;return n.persistence.runTransaction("Locally write mutations","readwrite",(e=>{let a=Rc(),l=Hc();return n.Zi.getEntries(e,s).next((e=>{a=e,a.forEach(((e,t)=>{t.isValidDocument()||(l=l.add(e))}))})).next((()=>n.localDocuments.getOverlayedDocuments(e,a))).next((s=>{r=s;const o=[];for(const e of t){const t=gu(e,r.get(e.key).overlayedDocument);null!=t&&o.push(new wu(e.key,t,Bl(t.value.mapValue),uu.exists(!0)))}return n.mutationQueue.addMutationBatch(e,i,o,t)})).next((t=>{o=t;const i=t.applyToLocalDocumentSet(r,l);return n.documentOverlayCache.saveOverlays(e,t.batchId,i)}))})).then((()=>({batchId:o.batchId,changes:Uc(r)})))}(i.localStore,t);i.sharedClientState.addPendingMutation(e.batchId),function(e,t,n){let i=e.Tc[e.currentUser.toKey()];i||(i=new cl(Ma)),i=i.insert(t,n),e.Tc[e.currentUser.toKey()]=i}(i,e.batchId,n),await Mp(i,e.changes),await jd(i.remoteStore)}catch(e){const t=tp(e,"Failed to persist write");n.reject(t)}}(await Kp(e),t,n))),n.promise}(gf(e),t)}function em(e,t,n){const i=n.docs.get(t._key),s=new Xf(e);return new Hf(e,s,t._key,i,new qf(n.hasPendingWrites,n.fromCache),t.converter)}
/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */!function(e,t=!0){!function(e){ha=e}(Sn),wn(new Ot("firestore",((e,{instanceIdentifier:n,options:i})=>{const s=e.getProvider("app").getImmediate(),r=new mf(new ka(e.getProvider("auth-internal")),new Da(e.getProvider("app-check-internal")),function(e,t){if(!Object.prototype.hasOwnProperty.apply(e.options,["projectId"]))throw new Ta(Ea.INVALID_ARGUMENT,'"projectId" not provided in firebase.initializeApp.');return new Cl(e.options.projectId,t)}(s,n),s);return i=Object.assign({useFetchStreams:t},i),r._setSettings(i),r}),"PUBLIC").setMultipleInstances(!0)),_n(ca,"3.12.0",e),_n(ca,"3.12.0","esm2017")}();function tm(e,t){var n={};for(var i in e)Object.prototype.hasOwnProperty.call(e,i)&&t.indexOf(i)<0&&(n[i]=e[i]);if(null!=e&&"function"==typeof Object.getOwnPropertySymbols){var s=0;for(i=Object.getOwnPropertySymbols(e);s<i.length;s++)t.indexOf(i[s])<0&&Object.prototype.propertyIsEnumerable.call(e,i[s])&&(n[i[s]]=e[i[s]])}return n}Object.create;Object.create;function nm(){return{"dependent-sdk-initialized-before-auth":"Another Firebase SDK was initialized and is trying to use Auth before Auth is initialized. Please be sure to call `initializeAuth` or `getAuth` before starting any other Firebase SDK."}}const im=nm,sm=new Et("auth","Firebase",{"dependent-sdk-initialized-before-auth":"Another Firebase SDK was initialized and is trying to use Auth before Auth is initialized. Please be sure to call `initializeAuth` or `getAuth` before starting any other Firebase SDK."}),rm=new qt("@firebase/auth");function om(e,...t){rm.logLevel<=Vt.ERROR&&rm.error(`Auth (${Sn}): ${e}`,...t)}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function am(e,...t){throw um(e,...t)}function lm(e,...t){return um(e,...t)}function cm(e,t,n){const i=Object.assign(Object.assign({},im()),{[t]:n});return new Et("auth","Firebase",i).create(t,{appName:e.name})}function um(e,...t){if("string"!=typeof e){const n=t[0],i=[...t.slice(1)];return i[0]&&(i[0].appName=e.name),e._errorFactory.create(n,...i)}return sm.create(e,...t)}function hm(e,t,...n){if(!e)throw um(t,...n)}function dm(e){const t="INTERNAL ASSERTION FAILED: "+e;throw om(t),new Error(t)}function pm(e,t){e||dm(t)}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function fm(){var e;return"undefined"!=typeof self&&(null===(e=self.location)||void 0===e?void 0:e.href)||""}function mm(){return"http:"===gm()||"https:"===gm()}function gm(){var e;return"undefined"!=typeof self&&(null===(e=self.location)||void 0===e?void 0:e.protocol)||null}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function vm(){return!("undefined"!=typeof navigator&&navigator&&"onLine"in navigator&&"boolean"==typeof navigator.onLine&&(mm()||vt()||"connection"in navigator))||navigator.onLine}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
class ym{constructor(e,t){this.shortDelay=e,this.longDelay=t,pm(t>e,"Short delay should be less than long delay!"),this.isMobile="undefined"!=typeof window&&!!(window.cordova||window.phonegap||window.PhoneGap)&&/ios|iphone|ipod|ipad|android|blackberry|iemobile/i.test(gt())||"object"==typeof navigator&&"ReactNative"===navigator.product}get(){return vm()?this.isMobile?this.longDelay:this.shortDelay:Math.min(5e3,this.shortDelay)}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function wm(e,t){pm(e.emulator,"Emulator should always be set here");const{url:n}=e.emulator;return t?`${n}${t.startsWith("/")?t.slice(1):t}`:n}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class bm{static initialize(e,t,n){this.fetchImpl=e,t&&(this.headersImpl=t),n&&(this.responseImpl=n)}static fetch(){return this.fetchImpl?this.fetchImpl:"undefined"!=typeof self&&"fetch"in self?self.fetch:void dm("Could not find fetch implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}static headers(){return this.headersImpl?this.headersImpl:"undefined"!=typeof self&&"Headers"in self?self.Headers:void dm("Could not find Headers implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}static response(){return this.responseImpl?this.responseImpl:"undefined"!=typeof self&&"Response"in self?self.Response:void dm("Could not find Response implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Em={CREDENTIAL_MISMATCH:"custom-token-mismatch",MISSING_CUSTOM_TOKEN:"internal-error",INVALID_IDENTIFIER:"invalid-email",MISSING_CONTINUE_URI:"internal-error",INVALID_PASSWORD:"wrong-password",MISSING_PASSWORD:"missing-password",EMAIL_EXISTS:"email-already-in-use",PASSWORD_LOGIN_DISABLED:"operation-not-allowed",INVALID_IDP_RESPONSE:"invalid-credential",INVALID_PENDING_TOKEN:"invalid-credential",FEDERATED_USER_ID_ALREADY_LINKED:"credential-already-in-use",MISSING_REQ_TYPE:"internal-error",EMAIL_NOT_FOUND:"user-not-found",RESET_PASSWORD_EXCEED_LIMIT:"too-many-requests",EXPIRED_OOB_CODE:"expired-action-code",INVALID_OOB_CODE:"invalid-action-code",MISSING_OOB_CODE:"internal-error",CREDENTIAL_TOO_OLD_LOGIN_AGAIN:"requires-recent-login",INVALID_ID_TOKEN:"invalid-user-token",TOKEN_EXPIRED:"user-token-expired",USER_NOT_FOUND:"user-token-expired",TOO_MANY_ATTEMPTS_TRY_LATER:"too-many-requests",INVALID_CODE:"invalid-verification-code",INVALID_SESSION_INFO:"invalid-verification-id",INVALID_TEMPORARY_PROOF:"invalid-credential",MISSING_SESSION_INFO:"missing-verification-id",SESSION_EXPIRED:"code-expired",MISSING_ANDROID_PACKAGE_NAME:"missing-android-pkg-name",UNAUTHORIZED_DOMAIN:"unauthorized-continue-uri",INVALID_OAUTH_CLIENT_ID:"invalid-oauth-client-id",ADMIN_ONLY_OPERATION:"admin-restricted-operation",INVALID_MFA_PENDING_CREDENTIAL:"invalid-multi-factor-session",MFA_ENROLLMENT_NOT_FOUND:"multi-factor-info-not-found",MISSING_MFA_ENROLLMENT_ID:"missing-multi-factor-info",MISSING_MFA_PENDING_CREDENTIAL:"missing-multi-factor-session",SECOND_FACTOR_EXISTS:"second-factor-already-in-use",SECOND_FACTOR_LIMIT_EXCEEDED:"maximum-second-factor-count-exceeded",BLOCKING_FUNCTION_ERROR_RESPONSE:"internal-error",RECAPTCHA_NOT_ENABLED:"recaptcha-not-enabled",MISSING_RECAPTCHA_TOKEN:"missing-recaptcha-token",INVALID_RECAPTCHA_TOKEN:"invalid-recaptcha-token",INVALID_RECAPTCHA_ACTION:"invalid-recaptcha-action",MISSING_CLIENT_TYPE:"missing-client-type",MISSING_RECAPTCHA_VERSION:"missing-recaptcha-version",INVALID_RECAPTCHA_VERSION:"invalid-recaptcha-version",INVALID_REQ_TYPE:"invalid-req-type"},Tm=new ym(3e4,6e4);
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Sm(e,t){return e.tenantId&&!t.tenantId?Object.assign(Object.assign({},t),{tenantId:e.tenantId}):t}async function Im(e,t,n,i,s={}){return Cm(e,s,(async()=>{let s={},r={};i&&("GET"===t?r=i:s={body:JSON.stringify(i)});const o=_t(Object.assign({key:e.config.apiKey},r)).slice(1),a=await e._getAdditionalHeaders();return a["Content-Type"]="application/json",e.languageCode&&(a["X-Firebase-Locale"]=e.languageCode),bm.fetch()(km(e,e.config.apiHost,n,o),Object.assign({method:t,headers:a,referrerPolicy:"no-referrer"},s))}))}async function Cm(e,t,n){e._canInitEmulator=!1;const i=Object.assign(Object.assign({},Em),t);try{const t=new Am(e),s=await Promise.race([n(),t.promise]);t.clearNetworkTimeout();const r=await s.json();if("needConfirmation"in r)throw xm(e,"account-exists-with-different-credential",r);if(s.ok&&!("errorMessage"in r))return r;{const t=s.ok?r.errorMessage:r.error.message,[n,o]=t.split(" : ");if("FEDERATED_USER_ID_ALREADY_LINKED"===n)throw xm(e,"credential-already-in-use",r);if("EMAIL_EXISTS"===n)throw xm(e,"email-already-in-use",r);if("USER_DISABLED"===n)throw xm(e,"user-disabled",r);const a=i[n]||n.toLowerCase().replace(/[_\s]+/g,"-");if(o)throw cm(e,a,o);am(e,a)}}catch(t){if(t instanceof bt)throw t;am(e,"network-request-failed",{message:String(t)})}}async function _m(e,t,n,i,s={}){const r=await Im(e,t,n,i,s);return"mfaPendingCredential"in r&&am(e,"multi-factor-auth-required",{_serverResponse:r}),r}function km(e,t,n,i){const s=`${t}${n}?${i}`;return e.config.emulator?wm(e.config,s):`${e.config.apiScheme}://${s}`}class Am{constructor(e){this.auth=e,this.timer=null,this.promise=new Promise(((e,t)=>{this.timer=setTimeout((()=>t(lm(this.auth,"network-request-failed"))),Tm.get())}))}clearNetworkTimeout(){clearTimeout(this.timer)}}function xm(e,t,n){const i={appName:e.name};n.email&&(i.email=n.email),n.phoneNumber&&(i.phoneNumber=n.phoneNumber);const s=lm(e,t,i);return s.customData._tokenResponse=n,s}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
function Nm(e){if(e)try{const t=new Date(Number(e));if(!isNaN(t.getTime()))return t.toUTCString()}catch(e){}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Dm(e){return 1e3*Number(e)}function Lm(e){const[t,n,i]=e.split(".");if(void 0===t||void 0===n||void 0===i)return om("JWT malformed, contained fewer than 3 sections"),null;try{const e=at(n);return e?JSON.parse(e):(om("Failed to decode base64 JWT payload"),null)}catch(e){return om("Caught error parsing JWT payload as JSON",null==e?void 0:e.toString()),null}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
async function Om(e,t,n=!1){if(n)return t;try{return await t}catch(t){throw t instanceof bt&&function({code:e}){return"auth/user-disabled"===e||"auth/user-token-expired"===e}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */(t)&&e.auth.currentUser===e&&await e.auth.signOut(),t}}class Mm{constructor(e){this.user=e,this.isRunning=!1,this.timerId=null,this.errorBackoff=3e4}_start(){this.isRunning||(this.isRunning=!0,this.schedule())}_stop(){this.isRunning&&(this.isRunning=!1,null!==this.timerId&&clearTimeout(this.timerId))}getInterval(e){var t;if(e){const e=this.errorBackoff;return this.errorBackoff=Math.min(2*this.errorBackoff,96e4),e}{this.errorBackoff=3e4;const e=(null!==(t=this.user.stsTokenManager.expirationTime)&&void 0!==t?t:0)-Date.now()-3e5;return Math.max(0,e)}}schedule(e=!1){if(!this.isRunning)return;const t=this.getInterval(e);this.timerId=setTimeout((async()=>{await this.iteration()}),t)}async iteration(){try{await this.user.getIdToken(!0)}catch(e){return void("auth/network-request-failed"===(null==e?void 0:e.code)&&this.schedule(!0))}this.schedule()}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Pm{constructor(e,t){this.createdAt=e,this.lastLoginAt=t,this._initializeTime()}_initializeTime(){this.lastSignInTime=Nm(this.lastLoginAt),this.creationTime=Nm(this.createdAt)}_copy(e){this.createdAt=e.createdAt,this.lastLoginAt=e.lastLoginAt,this._initializeTime()}toJSON(){return{createdAt:this.createdAt,lastLoginAt:this.lastLoginAt}}}
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function Rm(e){var t;const n=e.auth,i=await e.getIdToken(),s=await Om(e,async function(e,t){return Im(e,"POST","/v1/accounts:lookup",t)}(n,{idToken:i}));hm(null==s?void 0:s.users.length,n,"internal-error");const r=s.users[0];e._notifyReloadListener(r);const o=(null===(t=r.providerUserInfo)||void 0===t?void 0:t.length)?r.providerUserInfo.map((e=>{var{providerId:t}=e,n=tm(e,["providerId"]);return{providerId:t,uid:n.rawId||"",displayName:n.displayName||null,email:n.email||null,phoneNumber:n.phoneNumber||null,photoURL:n.photoUrl||null}})):[];const a=(l=e.providerData,c=o,[...l.filter((e=>!c.some((t=>t.providerId===e.providerId)))),...c]);var l,c;const u=e.isAnonymous,h=!(e.email&&r.passwordHash||(null==a?void 0:a.length)),d=!!u&&h,p={uid:r.localId,displayName:r.displayName||null,photoURL:r.photoUrl||null,email:r.email||null,emailVerified:r.emailVerified||!1,phoneNumber:r.phoneNumber||null,tenantId:r.tenantId||null,providerData:a,metadata:new Pm(r.createdAt,r.lastLoginAt),isAnonymous:d};Object.assign(e,p)}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
class Fm{constructor(){this.refreshToken=null,this.accessToken=null,this.expirationTime=null}get isExpired(){return!this.expirationTime||Date.now()>this.expirationTime-3e4}updateFromServerResponse(e){hm(e.idToken,"internal-error"),hm(void 0!==e.idToken,"internal-error"),hm(void 0!==e.refreshToken,"internal-error");const t="expiresIn"in e&&void 0!==e.expiresIn?Number(e.expiresIn):function(e){const t=Lm(e);return hm(t,"internal-error"),hm(void 0!==t.exp,"internal-error"),hm(void 0!==t.iat,"internal-error"),Number(t.exp)-Number(t.iat)}(e.idToken);this.updateTokensAndExpiration(e.idToken,e.refreshToken,t)}async getToken(e,t=!1){return hm(!this.accessToken||this.refreshToken,e,"user-token-expired"),t||!this.accessToken||this.isExpired?this.refreshToken?(await this.refresh(e,this.refreshToken),this.accessToken):null:this.accessToken}clearRefreshToken(){this.refreshToken=null}async refresh(e,t){const{accessToken:n,refreshToken:i,expiresIn:s}=
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */await async function(e,t){const n=await Cm(e,{},(async()=>{const n=_t({grant_type:"refresh_token",refresh_token:t}).slice(1),{tokenApiHost:i,apiKey:s}=e.config,r=km(e,i,"/v1/token",`key=${s}`),o=await e._getAdditionalHeaders();return o["Content-Type"]="application/x-www-form-urlencoded",bm.fetch()(r,{method:"POST",headers:o,body:n})}));return{accessToken:n.access_token,expiresIn:n.expires_in,refreshToken:n.refresh_token}}(e,t);this.updateTokensAndExpiration(n,i,Number(s))}updateTokensAndExpiration(e,t,n){this.refreshToken=t||null,this.accessToken=e||null,this.expirationTime=Date.now()+1e3*n}static fromJSON(e,t){const{refreshToken:n,accessToken:i,expirationTime:s}=t,r=new Fm;return n&&(hm("string"==typeof n,"internal-error",{appName:e}),r.refreshToken=n),i&&(hm("string"==typeof i,"internal-error",{appName:e}),r.accessToken=i),s&&(hm("number"==typeof s,"internal-error",{appName:e}),r.expirationTime=s),r}toJSON(){return{refreshToken:this.refreshToken,accessToken:this.accessToken,expirationTime:this.expirationTime}}_assign(e){this.accessToken=e.accessToken,this.refreshToken=e.refreshToken,this.expirationTime=e.expirationTime}_clone(){return Object.assign(new Fm,this.toJSON())}_performRefresh(){return dm("not implemented")}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Vm(e,t){hm("string"==typeof e||void 0===e,"internal-error",{appName:t})}class Um{constructor(e){var{uid:t,auth:n,stsTokenManager:i}=e,s=tm(e,["uid","auth","stsTokenManager"]);this.providerId="firebase",this.proactiveRefresh=new Mm(this),this.reloadUserInfo=null,this.reloadListener=null,this.uid=t,this.auth=n,this.stsTokenManager=i,this.accessToken=i.accessToken,this.displayName=s.displayName||null,this.email=s.email||null,this.emailVerified=s.emailVerified||!1,this.phoneNumber=s.phoneNumber||null,this.photoURL=s.photoURL||null,this.isAnonymous=s.isAnonymous||!1,this.tenantId=s.tenantId||null,this.providerData=s.providerData?[...s.providerData]:[],this.metadata=new Pm(s.createdAt||void 0,s.lastLoginAt||void 0)}async getIdToken(e){const t=await Om(this,this.stsTokenManager.getToken(this.auth,e));return hm(t,this.auth,"internal-error"),this.accessToken!==t&&(this.accessToken=t,await this.auth._persistUserIfCurrent(this),this.auth._notifyListenersIfCurrent(this)),t}getIdTokenResult(e){return async function(e,t=!1){const n=Lt(e),i=await n.getIdToken(t),s=Lm(i);hm(s&&s.exp&&s.auth_time&&s.iat,n.auth,"internal-error");const r="object"==typeof s.firebase?s.firebase:void 0,o=null==r?void 0:r.sign_in_provider;return{claims:s,token:i,authTime:Nm(Dm(s.auth_time)),issuedAtTime:Nm(Dm(s.iat)),expirationTime:Nm(Dm(s.exp)),signInProvider:o||null,signInSecondFactor:(null==r?void 0:r.sign_in_second_factor)||null}}(this,e)}reload(){return async function(e){const t=Lt(e);await Rm(t),await t.auth._persistUserIfCurrent(t),t.auth._notifyListenersIfCurrent(t)}(this)}_assign(e){this!==e&&(hm(this.uid===e.uid,this.auth,"internal-error"),this.displayName=e.displayName,this.photoURL=e.photoURL,this.email=e.email,this.emailVerified=e.emailVerified,this.phoneNumber=e.phoneNumber,this.isAnonymous=e.isAnonymous,this.tenantId=e.tenantId,this.providerData=e.providerData.map((e=>Object.assign({},e))),this.metadata._copy(e.metadata),this.stsTokenManager._assign(e.stsTokenManager))}_clone(e){const t=new Um(Object.assign(Object.assign({},this),{auth:e,stsTokenManager:this.stsTokenManager._clone()}));return t.metadata._copy(this.metadata),t}_onReload(e){hm(!this.reloadListener,this.auth,"internal-error"),this.reloadListener=e,this.reloadUserInfo&&(this._notifyReloadListener(this.reloadUserInfo),this.reloadUserInfo=null)}_notifyReloadListener(e){this.reloadListener?this.reloadListener(e):this.reloadUserInfo=e}_startProactiveRefresh(){this.proactiveRefresh._start()}_stopProactiveRefresh(){this.proactiveRefresh._stop()}async _updateTokensIfNecessary(e,t=!1){let n=!1;e.idToken&&e.idToken!==this.stsTokenManager.accessToken&&(this.stsTokenManager.updateFromServerResponse(e),n=!0),t&&await Rm(this),await this.auth._persistUserIfCurrent(this),n&&this.auth._notifyListenersIfCurrent(this)}async delete(){const e=await this.getIdToken();return await Om(this,async function(e,t){return Im(e,"POST","/v1/accounts:delete",t)}(this.auth,{idToken:e})),this.stsTokenManager.clearRefreshToken(),this.auth.signOut()}toJSON(){return Object.assign(Object.assign({uid:this.uid,email:this.email||void 0,emailVerified:this.emailVerified,displayName:this.displayName||void 0,isAnonymous:this.isAnonymous,photoURL:this.photoURL||void 0,phoneNumber:this.phoneNumber||void 0,tenantId:this.tenantId||void 0,providerData:this.providerData.map((e=>Object.assign({},e))),stsTokenManager:this.stsTokenManager.toJSON(),_redirectEventId:this._redirectEventId},this.metadata.toJSON()),{apiKey:this.auth.config.apiKey,appName:this.auth.name})}get refreshToken(){return this.stsTokenManager.refreshToken||""}static _fromJSON(e,t){var n,i,s,r,o,a,l,c;const u=null!==(n=t.displayName)&&void 0!==n?n:void 0,h=null!==(i=t.email)&&void 0!==i?i:void 0,d=null!==(s=t.phoneNumber)&&void 0!==s?s:void 0,p=null!==(r=t.photoURL)&&void 0!==r?r:void 0,f=null!==(o=t.tenantId)&&void 0!==o?o:void 0,m=null!==(a=t._redirectEventId)&&void 0!==a?a:void 0,g=null!==(l=t.createdAt)&&void 0!==l?l:void 0,v=null!==(c=t.lastLoginAt)&&void 0!==c?c:void 0,{uid:y,emailVerified:w,isAnonymous:b,providerData:E,stsTokenManager:T}=t;hm(y&&T,e,"internal-error");const S=Fm.fromJSON(this.name,T);hm("string"==typeof y,e,"internal-error"),Vm(u,e.name),Vm(h,e.name),hm("boolean"==typeof w,e,"internal-error"),hm("boolean"==typeof b,e,"internal-error"),Vm(d,e.name),Vm(p,e.name),Vm(f,e.name),Vm(m,e.name),Vm(g,e.name),Vm(v,e.name);const I=new Um({uid:y,auth:e,email:h,emailVerified:w,displayName:u,isAnonymous:b,photoURL:p,phoneNumber:d,tenantId:f,stsTokenManager:S,createdAt:g,lastLoginAt:v});return E&&Array.isArray(E)&&(I.providerData=E.map((e=>Object.assign({},e)))),m&&(I._redirectEventId=m),I}static async _fromIdTokenResponse(e,t,n=!1){const i=new Fm;i.updateFromServerResponse(t);const s=new Um({uid:t.localId,auth:e,stsTokenManager:i,isAnonymous:n});return await Rm(s),s}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const zm=new Map;function jm(e){pm(e instanceof Function,"Expected a class definition");let t=zm.get(e);return t?(pm(t instanceof e,"Instance stored in cache mismatched with class"),t):(t=new e,zm.set(e,t),t)}
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Bm{constructor(){this.type="NONE",this.storage={}}async _isAvailable(){return!0}async _set(e,t){this.storage[e]=t}async _get(e){const t=this.storage[e];return void 0===t?null:t}async _remove(e){delete this.storage[e]}_addListener(e,t){}_removeListener(e,t){}}Bm.type="NONE";const $m=Bm;
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function qm(e,t,n){return`firebase:${e}:${t}:${n}`}class Hm{constructor(e,t,n){this.persistence=e,this.auth=t,this.userKey=n;const{config:i,name:s}=this.auth;this.fullUserKey=qm(this.userKey,i.apiKey,s),this.fullPersistenceKey=qm("persistence",i.apiKey,s),this.boundEventHandler=t._onStorageEvent.bind(t),this.persistence._addListener(this.fullUserKey,this.boundEventHandler)}setCurrentUser(e){return this.persistence._set(this.fullUserKey,e.toJSON())}async getCurrentUser(){const e=await this.persistence._get(this.fullUserKey);return e?Um._fromJSON(this.auth,e):null}removeCurrentUser(){return this.persistence._remove(this.fullUserKey)}savePersistenceForRedirect(){return this.persistence._set(this.fullPersistenceKey,this.persistence.type)}async setPersistence(e){if(this.persistence===e)return;const t=await this.getCurrentUser();return await this.removeCurrentUser(),this.persistence=e,t?this.setCurrentUser(t):void 0}delete(){this.persistence._removeListener(this.fullUserKey,this.boundEventHandler)}static async create(e,t,n="authUser"){if(!t.length)return new Hm(jm($m),e,n);const i=(await Promise.all(t.map((async e=>{if(await e._isAvailable())return e})))).filter((e=>e));let s=i[0]||jm($m);const r=qm(n,e.config.apiKey,e.name);let o=null;for(const n of t)try{const t=await n._get(r);if(t){const i=Um._fromJSON(e,t);n!==s&&(o=i),s=n;break}}catch(e){}const a=i.filter((e=>e._shouldAllowMigration));return s._shouldAllowMigration&&a.length?(s=a[0],o&&await s._set(r,o.toJSON()),await Promise.all(t.map((async e=>{if(e!==s)try{await e._remove(r)}catch(e){}}))),new Hm(s,e,n)):new Hm(s,e,n)}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Gm(e){const t=e.toLowerCase();if(t.includes("opera/")||t.includes("opr/")||t.includes("opios/"))return"Opera";if(Xm(t))return"IEMobile";if(t.includes("msie")||t.includes("trident/"))return"IE";if(t.includes("edge/"))return"Edge";if(Wm(t))return"Firefox";if(t.includes("silk/"))return"Silk";if(Jm(t))return"Blackberry";if(Zm(t))return"Webos";if(Km(t))return"Safari";if((t.includes("chrome/")||Qm(t))&&!t.includes("edge/"))return"Chrome";if(Ym(t))return"Android";{const t=/([a-zA-Z\d\.]+)\/[a-zA-Z\d\.]*$/,n=e.match(t);if(2===(null==n?void 0:n.length))return n[1]}return"Other"}function Wm(e=gt()){return/firefox\//i.test(e)}function Km(e=gt()){const t=e.toLowerCase();return t.includes("safari/")&&!t.includes("chrome/")&&!t.includes("crios/")&&!t.includes("android")}function Qm(e=gt()){return/crios\//i.test(e)}function Xm(e=gt()){return/iemobile/i.test(e)}function Ym(e=gt()){return/android/i.test(e)}function Jm(e=gt()){return/blackberry/i.test(e)}function Zm(e=gt()){return/webos/i.test(e)}function eg(e=gt()){return/iphone|ipad|ipod/i.test(e)||/macintosh/i.test(e)&&/mobile/i.test(e)}function tg(){return yt()&&10===document.documentMode}function ng(e=gt()){return eg(e)||Ym(e)||Zm(e)||Jm(e)||/windows phone/i.test(e)||Xm(e)}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
function ig(e,t=[]){let n;switch(e){case"Browser":n=Gm(gt());break;case"Worker":n=`${Gm(gt())}-${e}`;break;default:n=e}const i=t.length?t.join(","):"FirebaseCore-web";return`${n}/JsCore/${Sn}/${i}`}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function sg(e,t){return Im(e,"GET","/v2/recaptchaConfig",Sm(e,t))}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function rg(e){return void 0!==e&&void 0!==e.enterprise}class og{constructor(e){if(this.siteKey="",this.emailPasswordEnabled=!1,void 0===e.recaptchaKey)throw new Error("recaptchaKey undefined");this.siteKey=e.recaptchaKey.split("/")[3],this.emailPasswordEnabled=e.recaptchaEnforcementState.some((e=>"EMAIL_PASSWORD_PROVIDER"===e.provider&&"OFF"!==e.enforcementState))}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function ag(e){return new Promise(((t,n)=>{const i=document.createElement("script");var s,r;i.setAttribute("src",e),i.onload=t,i.onerror=e=>{const t=lm("internal-error");t.customData=e,n(t)},i.type="text/javascript",i.charset="UTF-8",(null!==(r=null===(s=document.getElementsByTagName("head"))||void 0===s?void 0:s[0])&&void 0!==r?r:document).appendChild(i)}))}function lg(e){return`__${e}${Math.floor(1e6*Math.random())}`}class cg{constructor(e){this.type="recaptcha-enterprise",this.auth=pg(e)}async verify(e="verify",t=!1){function n(t,n,i){const s=window.grecaptcha;rg(s)?s.enterprise.ready((()=>{s.enterprise.execute(t,{action:e}).then((e=>{n(e)})).catch((()=>{n("NO_RECAPTCHA")}))})):i(Error("No reCAPTCHA enterprise script loaded."))}return new Promise(((e,i)=>{(async function(e){if(!t){if(null==e.tenantId&&null!=e._agentRecaptchaConfig)return e._agentRecaptchaConfig.siteKey;if(null!=e.tenantId&&void 0!==e._tenantRecaptchaConfigs[e.tenantId])return e._tenantRecaptchaConfigs[e.tenantId].siteKey}return new Promise((async(t,n)=>{sg(e,{clientType:"CLIENT_TYPE_WEB",version:"RECAPTCHA_ENTERPRISE"}).then((i=>{if(void 0!==i.recaptchaKey){const n=new og(i);return null==e.tenantId?e._agentRecaptchaConfig=n:e._tenantRecaptchaConfigs[e.tenantId]=n,t(n.siteKey)}n(new Error("recaptcha Enterprise site key undefined"))})).catch((e=>{n(e)}))}))})(this.auth).then((s=>{if(!t&&rg(window.grecaptcha))n(s,e,i);else{if("undefined"==typeof window)return void i(new Error("RecaptchaVerifier is only supported in browser"));ag("https://www.google.com/recaptcha/enterprise.js?render="+s).then((()=>{n(s,e,i)})).catch((e=>{i(e)}))}})).catch((e=>{i(e)}))}))}}async function ug(e,t,n,i=!1){const s=new cg(e);let r;try{r=await s.verify(n)}catch(e){r=await s.verify(n,!0)}const o=Object.assign({},t);return i?Object.assign(o,{captchaResp:r}):Object.assign(o,{captchaResponse:r}),Object.assign(o,{clientType:"CLIENT_TYPE_WEB"}),Object.assign(o,{recaptchaVersion:"RECAPTCHA_ENTERPRISE"}),o}
/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class hg{constructor(e){this.auth=e,this.queue=[]}pushCallback(e,t){const n=t=>new Promise(((n,i)=>{try{n(e(t))}catch(e){i(e)}}));n.onAbort=t,this.queue.push(n);const i=this.queue.length-1;return()=>{this.queue[i]=()=>Promise.resolve()}}async runMiddleware(e){if(this.auth.currentUser===e)return;const t=[];try{for(const n of this.queue)await n(e),n.onAbort&&t.push(n.onAbort)}catch(e){t.reverse();for(const e of t)try{e()}catch(e){}throw this.auth._errorFactory.create("login-blocked",{originalMessage:null==e?void 0:e.message})}}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class dg{constructor(e,t,n,i){this.app=e,this.heartbeatServiceProvider=t,this.appCheckServiceProvider=n,this.config=i,this.currentUser=null,this.emulatorConfig=null,this.operations=Promise.resolve(),this.authStateSubscription=new fg(this),this.idTokenSubscription=new fg(this),this.beforeStateQueue=new hg(this),this.redirectUser=null,this.isProactiveRefreshEnabled=!1,this._canInitEmulator=!0,this._isInitialized=!1,this._deleted=!1,this._initializationPromise=null,this._popupRedirectResolver=null,this._errorFactory=sm,this._agentRecaptchaConfig=null,this._tenantRecaptchaConfigs={},this.lastNotifiedUid=void 0,this.languageCode=null,this.tenantId=null,this.settings={appVerificationDisabledForTesting:!1},this.frameworks=[],this.name=e.name,this.clientVersion=i.sdkClientVersion}_initializeWithPersistence(e,t){return t&&(this._popupRedirectResolver=jm(t)),this._initializationPromise=this.queue((async()=>{var n,i;if(!this._deleted&&(this.persistenceManager=await Hm.create(this,e),!this._deleted)){if(null===(n=this._popupRedirectResolver)||void 0===n?void 0:n._shouldInitProactively)try{await this._popupRedirectResolver._initialize(this)}catch(e){}await this.initializeCurrentUser(t),this.lastNotifiedUid=(null===(i=this.currentUser)||void 0===i?void 0:i.uid)||null,this._deleted||(this._isInitialized=!0)}})),this._initializationPromise}async _onStorageEvent(){if(this._deleted)return;const e=await this.assertedPersistence.getCurrentUser();return this.currentUser||e?this.currentUser&&e&&this.currentUser.uid===e.uid?(this._currentUser._assign(e),void await this.currentUser.getIdToken()):void await this._updateCurrentUser(e,!0):void 0}async initializeCurrentUser(e){var t;const n=await this.assertedPersistence.getCurrentUser();let i=n,s=!1;if(e&&this.config.authDomain){await this.getOrInitRedirectPersistenceManager();const n=null===(t=this.redirectUser)||void 0===t?void 0:t._redirectEventId,r=null==i?void 0:i._redirectEventId,o=await this.tryRedirectSignIn(e);n&&n!==r||!(null==o?void 0:o.user)||(i=o.user,s=!0)}if(!i)return this.directlySetCurrentUser(null);if(!i._redirectEventId){if(s)try{await this.beforeStateQueue.runMiddleware(i)}catch(e){i=n,this._popupRedirectResolver._overrideRedirectResult(this,(()=>Promise.reject(e)))}return i?this.reloadAndSetCurrentUserOrClear(i):this.directlySetCurrentUser(null)}return hm(this._popupRedirectResolver,this,"argument-error"),await this.getOrInitRedirectPersistenceManager(),this.redirectUser&&this.redirectUser._redirectEventId===i._redirectEventId?this.directlySetCurrentUser(i):this.reloadAndSetCurrentUserOrClear(i)}async tryRedirectSignIn(e){let t=null;try{t=await this._popupRedirectResolver._completeRedirectFn(this,e,!0)}catch(e){await this._setRedirectUser(null)}return t}async reloadAndSetCurrentUserOrClear(e){try{await Rm(e)}catch(e){if("auth/network-request-failed"!==(null==e?void 0:e.code))return this.directlySetCurrentUser(null)}return this.directlySetCurrentUser(e)}useDeviceLanguage(){this.languageCode=function(){if("undefined"==typeof navigator)return null;const e=navigator;return e.languages&&e.languages[0]||e.language||null}()}async _delete(){this._deleted=!0}async updateCurrentUser(e){const t=e?Lt(e):null;return t&&hm(t.auth.config.apiKey===this.config.apiKey,this,"invalid-user-token"),this._updateCurrentUser(t&&t._clone(this))}async _updateCurrentUser(e,t=!1){if(!this._deleted)return e&&hm(this.tenantId===e.tenantId,this,"tenant-id-mismatch"),t||await this.beforeStateQueue.runMiddleware(e),this.queue((async()=>{await this.directlySetCurrentUser(e),this.notifyAuthListeners()}))}async signOut(){return await this.beforeStateQueue.runMiddleware(null),(this.redirectPersistenceManager||this._popupRedirectResolver)&&await this._setRedirectUser(null),this._updateCurrentUser(null,!0)}setPersistence(e){return this.queue((async()=>{await this.assertedPersistence.setPersistence(jm(e))}))}async initializeRecaptchaConfig(){const e=await sg(this,{clientType:"CLIENT_TYPE_WEB",version:"RECAPTCHA_ENTERPRISE"}),t=new og(e);if(null==this.tenantId?this._agentRecaptchaConfig=t:this._tenantRecaptchaConfigs[this.tenantId]=t,t.emailPasswordEnabled){new cg(this).verify()}}_getRecaptchaConfig(){return null==this.tenantId?this._agentRecaptchaConfig:this._tenantRecaptchaConfigs[this.tenantId]}_getPersistence(){return this.assertedPersistence.persistence.type}_updateErrorMap(e){this._errorFactory=new Et("auth","Firebase",e())}onAuthStateChanged(e,t,n){return this.registerStateListener(this.authStateSubscription,e,t,n)}beforeAuthStateChanged(e,t){return this.beforeStateQueue.pushCallback(e,t)}onIdTokenChanged(e,t,n){return this.registerStateListener(this.idTokenSubscription,e,t,n)}toJSON(){var e;return{apiKey:this.config.apiKey,authDomain:this.config.authDomain,appName:this.name,currentUser:null===(e=this._currentUser)||void 0===e?void 0:e.toJSON()}}async _setRedirectUser(e,t){const n=await this.getOrInitRedirectPersistenceManager(t);return null===e?n.removeCurrentUser():n.setCurrentUser(e)}async getOrInitRedirectPersistenceManager(e){if(!this.redirectPersistenceManager){const t=e&&jm(e)||this._popupRedirectResolver;hm(t,this,"argument-error"),this.redirectPersistenceManager=await Hm.create(this,[jm(t._redirectPersistence)],"redirectUser"),this.redirectUser=await this.redirectPersistenceManager.getCurrentUser()}return this.redirectPersistenceManager}async _redirectUserForId(e){var t,n;return this._isInitialized&&await this.queue((async()=>{})),(null===(t=this._currentUser)||void 0===t?void 0:t._redirectEventId)===e?this._currentUser:(null===(n=this.redirectUser)||void 0===n?void 0:n._redirectEventId)===e?this.redirectUser:null}async _persistUserIfCurrent(e){if(e===this.currentUser)return this.queue((async()=>this.directlySetCurrentUser(e)))}_notifyListenersIfCurrent(e){e===this.currentUser&&this.notifyAuthListeners()}_key(){return`${this.config.authDomain}:${this.config.apiKey}:${this.name}`}_startProactiveRefresh(){this.isProactiveRefreshEnabled=!0,this.currentUser&&this._currentUser._startProactiveRefresh()}_stopProactiveRefresh(){this.isProactiveRefreshEnabled=!1,this.currentUser&&this._currentUser._stopProactiveRefresh()}get _currentUser(){return this.currentUser}notifyAuthListeners(){var e,t;if(!this._isInitialized)return;this.idTokenSubscription.next(this.currentUser);const n=null!==(t=null===(e=this.currentUser)||void 0===e?void 0:e.uid)&&void 0!==t?t:null;this.lastNotifiedUid!==n&&(this.lastNotifiedUid=n,this.authStateSubscription.next(this.currentUser))}registerStateListener(e,t,n,i){if(this._deleted)return()=>{};const s="function"==typeof t?t:t.next.bind(t),r=this._isInitialized?Promise.resolve():this._initializationPromise;return hm(r,this,"internal-error"),r.then((()=>s(this.currentUser))),"function"==typeof t?e.addObserver(t,n,i):e.addObserver(t)}async directlySetCurrentUser(e){this.currentUser&&this.currentUser!==e&&this._currentUser._stopProactiveRefresh(),e&&this.isProactiveRefreshEnabled&&e._startProactiveRefresh(),this.currentUser=e,e?await this.assertedPersistence.setCurrentUser(e):await this.assertedPersistence.removeCurrentUser()}queue(e){return this.operations=this.operations.then(e,e),this.operations}get assertedPersistence(){return hm(this.persistenceManager,this,"internal-error"),this.persistenceManager}_logFramework(e){e&&!this.frameworks.includes(e)&&(this.frameworks.push(e),this.frameworks.sort(),this.clientVersion=ig(this.config.clientPlatform,this._getFrameworks()))}_getFrameworks(){return this.frameworks}async _getAdditionalHeaders(){var e;const t={"X-Client-Version":this.clientVersion};this.app.options.appId&&(t["X-Firebase-gmpid"]=this.app.options.appId);const n=await(null===(e=this.heartbeatServiceProvider.getImmediate({optional:!0}))||void 0===e?void 0:e.getHeartbeatsHeader());n&&(t["X-Firebase-Client"]=n);const i=await this._getAppCheckToken();return i&&(t["X-Firebase-AppCheck"]=i),t}async _getAppCheckToken(){var e;const t=await(null===(e=this.appCheckServiceProvider.getImmediate({optional:!0}))||void 0===e?void 0:e.getToken());return(null==t?void 0:t.error)&&function(e,...t){rm.logLevel<=Vt.WARN&&rm.warn(`Auth (${Sn}): ${e}`,...t)}(`Error while retrieving App Check token: ${t.error}`),null==t?void 0:t.token}}function pg(e){return Lt(e)}class fg{constructor(e){this.auth=e,this.observer=null,this.addObserver=xt((e=>this.observer=e))}get next(){return hm(this.observer,this.auth,"internal-error"),this.observer.next.bind(this.observer)}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function mg(e,t,n){const i=pg(e);hm(i._canInitEmulator,i,"emulator-config-failed"),hm(/^https?:\/\//.test(t),i,"invalid-emulator-scheme");const s=!!(null==n?void 0:n.disableWarnings),r=gg(t),{host:o,port:a}=function(e){const t=gg(e),n=/(\/\/)?([^?#/]+)/.exec(e.substr(t.length));if(!n)return{host:"",port:null};const i=n[2].split("@").pop()||"",s=/^(\[[^\]]+\])(:|$)/.exec(i);if(s){const e=s[1];return{host:e,port:vg(i.substr(e.length+1))}}{const[e,t]=i.split(":");return{host:e,port:vg(t)}}}(t),l=null===a?"":`:${a}`;i.config.emulator={url:`${r}//${o}${l}/`},i.settings.appVerificationDisabledForTesting=!0,i.emulatorConfig=Object.freeze({host:o,port:a,protocol:r.replace(":",""),options:Object.freeze({disableWarnings:s})}),s||function(){function e(){const e=document.createElement("p"),t=e.style;e.innerText="Running in emulator mode. Do not use with production credentials.",t.position="fixed",t.width="100%",t.backgroundColor="#ffffff",t.border=".1em solid #000000",t.color="#b50000",t.bottom="0px",t.left="0px",t.margin="0px",t.zIndex="10000",t.textAlign="center",e.classList.add("firebase-emulator-warning"),document.body.appendChild(e)}"undefined"!=typeof console&&"function"==typeof console.info&&console.info("WARNING: You are using the Auth Emulator, which is intended for local testing only.  Do not use with production credentials.");"undefined"!=typeof window&&"undefined"!=typeof document&&("loading"===document.readyState?window.addEventListener("DOMContentLoaded",e):e())}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */()}function gg(e){const t=e.indexOf(":");return t<0?"":e.substr(0,t+1)}function vg(e){if(!e)return null;const t=Number(e);return isNaN(t)?null:t}class yg{constructor(e,t){this.providerId=e,this.signInMethod=t}toJSON(){return dm("not implemented")}_getIdTokenResponse(e){return dm("not implemented")}_linkToIdToken(e,t){return dm("not implemented")}_getReauthenticationResolver(e){return dm("not implemented")}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function wg(e,t){return Im(e,"POST","/v1/accounts:update",t)}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
async function bg(e,t){return _m(e,"POST","/v1/accounts:signInWithPassword",Sm(e,t))}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
class Eg extends yg{constructor(e,t,n,i=null){super("password",n),this._email=e,this._password=t,this._tenantId=i}static _fromEmailAndPassword(e,t){return new Eg(e,t,"password")}static _fromEmailAndCode(e,t,n=null){return new Eg(e,t,"emailLink",n)}toJSON(){return{email:this._email,password:this._password,signInMethod:this.signInMethod,tenantId:this._tenantId}}static fromJSON(e){const t="string"==typeof e?JSON.parse(e):e;if((null==t?void 0:t.email)&&(null==t?void 0:t.password)){if("password"===t.signInMethod)return this._fromEmailAndPassword(t.email,t.password);if("emailLink"===t.signInMethod)return this._fromEmailAndCode(t.email,t.password,t.tenantId)}return null}async _getIdTokenResponse(e){var t;switch(this.signInMethod){case"password":const n={returnSecureToken:!0,email:this._email,password:this._password,clientType:"CLIENT_TYPE_WEB"};if(null===(t=e._getRecaptchaConfig())||void 0===t?void 0:t.emailPasswordEnabled){const t=await ug(e,n,"signInWithPassword");return bg(e,t)}return bg(e,n).catch((async t=>{if("auth/missing-recaptcha-token"===t.code){console.log("Sign-in with email address and password is protected by reCAPTCHA for this project. Automatically triggering the reCAPTCHA flow and restarting the sign-in flow.");const t=await ug(e,n,"signInWithPassword");return bg(e,t)}return Promise.reject(t)}));case"emailLink":
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
return async function(e,t){return _m(e,"POST","/v1/accounts:signInWithEmailLink",Sm(e,t))}(e,{email:this._email,oobCode:this._password});default:am(e,"internal-error")}}async _linkToIdToken(e,t){switch(this.signInMethod){case"password":return wg(e,{idToken:t,returnSecureToken:!0,email:this._email,password:this._password});case"emailLink":return async function(e,t){return _m(e,"POST","/v1/accounts:signInWithEmailLink",Sm(e,t))}(e,{idToken:t,email:this._email,oobCode:this._password});default:am(e,"internal-error")}}_getReauthenticationResolver(e){return this._getIdTokenResponse(e)}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function Tg(e,t){return _m(e,"POST","/v1/accounts:signInWithIdp",Sm(e,t))}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Sg extends yg{constructor(){super(...arguments),this.pendingToken=null}static _fromParams(e){const t=new Sg(e.providerId,e.signInMethod);return e.idToken||e.accessToken?(e.idToken&&(t.idToken=e.idToken),e.accessToken&&(t.accessToken=e.accessToken),e.nonce&&!e.pendingToken&&(t.nonce=e.nonce),e.pendingToken&&(t.pendingToken=e.pendingToken)):e.oauthToken&&e.oauthTokenSecret?(t.accessToken=e.oauthToken,t.secret=e.oauthTokenSecret):am("argument-error"),t}toJSON(){return{idToken:this.idToken,accessToken:this.accessToken,secret:this.secret,nonce:this.nonce,pendingToken:this.pendingToken,providerId:this.providerId,signInMethod:this.signInMethod}}static fromJSON(e){const t="string"==typeof e?JSON.parse(e):e,{providerId:n,signInMethod:i}=t,s=tm(t,["providerId","signInMethod"]);if(!n||!i)return null;const r=new Sg(n,i);return r.idToken=s.idToken||void 0,r.accessToken=s.accessToken||void 0,r.secret=s.secret,r.nonce=s.nonce,r.pendingToken=s.pendingToken||null,r}_getIdTokenResponse(e){return Tg(e,this.buildRequest())}_linkToIdToken(e,t){const n=this.buildRequest();return n.idToken=t,Tg(e,n)}_getReauthenticationResolver(e){const t=this.buildRequest();return t.autoCreate=!1,Tg(e,t)}buildRequest(){const e={requestUri:"http://localhost",returnSecureToken:!0};if(this.pendingToken)e.pendingToken=this.pendingToken;else{const t={};this.idToken&&(t.id_token=this.idToken),this.accessToken&&(t.access_token=this.accessToken),this.secret&&(t.oauth_token_secret=this.secret),t.providerId=this.providerId,this.nonce&&!this.pendingToken&&(t.nonce=this.nonce),e.postBody=_t(t)}return e}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Ig={USER_NOT_FOUND:"user-not-found"};
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
class Cg extends yg{constructor(e){super("phone","phone"),this.params=e}static _fromVerification(e,t){return new Cg({verificationId:e,verificationCode:t})}static _fromTokenResponse(e,t){return new Cg({phoneNumber:e,temporaryProof:t})}_getIdTokenResponse(e){return async function(e,t){return _m(e,"POST","/v1/accounts:signInWithPhoneNumber",Sm(e,t))}(e,this._makeVerificationRequest())}_linkToIdToken(e,t){return async function(e,t){const n=await _m(e,"POST","/v1/accounts:signInWithPhoneNumber",Sm(e,t));if(n.temporaryProof)throw xm(e,"account-exists-with-different-credential",n);return n}(e,Object.assign({idToken:t},this._makeVerificationRequest()))}_getReauthenticationResolver(e){return async function(e,t){return _m(e,"POST","/v1/accounts:signInWithPhoneNumber",Sm(e,Object.assign(Object.assign({},t),{operation:"REAUTH"})),Ig)}(e,this._makeVerificationRequest())}_makeVerificationRequest(){const{temporaryProof:e,phoneNumber:t,verificationId:n,verificationCode:i}=this.params;return e&&t?{temporaryProof:e,phoneNumber:t}:{sessionInfo:n,code:i}}toJSON(){const e={providerId:this.providerId};return this.params.phoneNumber&&(e.phoneNumber=this.params.phoneNumber),this.params.temporaryProof&&(e.temporaryProof=this.params.temporaryProof),this.params.verificationCode&&(e.verificationCode=this.params.verificationCode),this.params.verificationId&&(e.verificationId=this.params.verificationId),e}static fromJSON(e){"string"==typeof e&&(e=JSON.parse(e));const{verificationId:t,verificationCode:n,phoneNumber:i,temporaryProof:s}=e;return n||t||i||s?new Cg({verificationId:t,verificationCode:n,phoneNumber:i,temporaryProof:s}):null}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class _g{constructor(e){var t,n,i,s,r,o;const a=kt(At(e)),l=null!==(t=a.apiKey)&&void 0!==t?t:null,c=null!==(n=a.oobCode)&&void 0!==n?n:null,u=function(e){switch(e){case"recoverEmail":return"RECOVER_EMAIL";case"resetPassword":return"PASSWORD_RESET";case"signIn":return"EMAIL_SIGNIN";case"verifyEmail":return"VERIFY_EMAIL";case"verifyAndChangeEmail":return"VERIFY_AND_CHANGE_EMAIL";case"revertSecondFactorAddition":return"REVERT_SECOND_FACTOR_ADDITION";default:return null}}(null!==(i=a.mode)&&void 0!==i?i:null);hm(l&&c&&u,"argument-error"),this.apiKey=l,this.operation=u,this.code=c,this.continueUrl=null!==(s=a.continueUrl)&&void 0!==s?s:null,this.languageCode=null!==(r=a.languageCode)&&void 0!==r?r:null,this.tenantId=null!==(o=a.tenantId)&&void 0!==o?o:null}static parseLink(e){const t=function(e){const t=kt(At(e)).link,n=t?kt(At(t)).deep_link_id:null,i=kt(At(e)).deep_link_id;return(i?kt(At(i)).link:null)||i||n||t||e}(e);try{return new _g(t)}catch(e){return null}}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
class kg{constructor(){this.providerId=kg.PROVIDER_ID}static credential(e,t){return Eg._fromEmailAndPassword(e,t)}static credentialWithLink(e,t){const n=_g.parseLink(t);return hm(n,"argument-error"),Eg._fromEmailAndCode(e,n.code,n.tenantId)}}kg.PROVIDER_ID="password",kg.EMAIL_PASSWORD_SIGN_IN_METHOD="password",kg.EMAIL_LINK_SIGN_IN_METHOD="emailLink";
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
class Ag{constructor(e){this.providerId=e,this.defaultLanguageCode=null,this.customParameters={}}setDefaultLanguage(e){this.defaultLanguageCode=e}setCustomParameters(e){return this.customParameters=e,this}getCustomParameters(){return this.customParameters}}
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class xg extends Ag{constructor(){super(...arguments),this.scopes=[]}addScope(e){return this.scopes.includes(e)||this.scopes.push(e),this}getScopes(){return[...this.scopes]}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
class Ng extends xg{constructor(){super("facebook.com")}static credential(e){return Sg._fromParams({providerId:Ng.PROVIDER_ID,signInMethod:Ng.FACEBOOK_SIGN_IN_METHOD,accessToken:e})}static credentialFromResult(e){return Ng.credentialFromTaggedObject(e)}static credentialFromError(e){return Ng.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e||!("oauthAccessToken"in e))return null;if(!e.oauthAccessToken)return null;try{return Ng.credential(e.oauthAccessToken)}catch(e){return null}}}Ng.FACEBOOK_SIGN_IN_METHOD="facebook.com",Ng.PROVIDER_ID="facebook.com";
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
class Dg extends xg{constructor(){super("google.com"),this.addScope("profile")}static credential(e,t){return Sg._fromParams({providerId:Dg.PROVIDER_ID,signInMethod:Dg.GOOGLE_SIGN_IN_METHOD,idToken:e,accessToken:t})}static credentialFromResult(e){return Dg.credentialFromTaggedObject(e)}static credentialFromError(e){return Dg.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e)return null;const{oauthIdToken:t,oauthAccessToken:n}=e;if(!t&&!n)return null;try{return Dg.credential(t,n)}catch(e){return null}}}Dg.GOOGLE_SIGN_IN_METHOD="google.com",Dg.PROVIDER_ID="google.com";
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
class Lg extends xg{constructor(){super("github.com")}static credential(e){return Sg._fromParams({providerId:Lg.PROVIDER_ID,signInMethod:Lg.GITHUB_SIGN_IN_METHOD,accessToken:e})}static credentialFromResult(e){return Lg.credentialFromTaggedObject(e)}static credentialFromError(e){return Lg.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e||!("oauthAccessToken"in e))return null;if(!e.oauthAccessToken)return null;try{return Lg.credential(e.oauthAccessToken)}catch(e){return null}}}Lg.GITHUB_SIGN_IN_METHOD="github.com",Lg.PROVIDER_ID="github.com";
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
class Og extends xg{constructor(){super("twitter.com")}static credential(e,t){return Sg._fromParams({providerId:Og.PROVIDER_ID,signInMethod:Og.TWITTER_SIGN_IN_METHOD,oauthToken:e,oauthTokenSecret:t})}static credentialFromResult(e){return Og.credentialFromTaggedObject(e)}static credentialFromError(e){return Og.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e)return null;const{oauthAccessToken:t,oauthTokenSecret:n}=e;if(!t||!n)return null;try{return Og.credential(t,n)}catch(e){return null}}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
async function Mg(e,t){return _m(e,"POST","/v1/accounts:signUp",Sm(e,t))}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */Og.TWITTER_SIGN_IN_METHOD="twitter.com",Og.PROVIDER_ID="twitter.com";class Pg{constructor(e){this.user=e.user,this.providerId=e.providerId,this._tokenResponse=e._tokenResponse,this.operationType=e.operationType}static async _fromIdTokenResponse(e,t,n,i=!1){const s=await Um._fromIdTokenResponse(e,n,i),r=Rg(n);return new Pg({user:s,providerId:r,_tokenResponse:n,operationType:t})}static async _forOperation(e,t,n){await e._updateTokensIfNecessary(n,!0);const i=Rg(n);return new Pg({user:e,providerId:i,_tokenResponse:n,operationType:t})}}function Rg(e){return e.providerId?e.providerId:"phoneNumber"in e?"phone":null}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
class Fg extends bt{constructor(e,t,n,i){var s;super(t.code,t.message),this.operationType=n,this.user=i,Object.setPrototypeOf(this,Fg.prototype),this.customData={appName:e.name,tenantId:null!==(s=e.tenantId)&&void 0!==s?s:void 0,_serverResponse:t.customData._serverResponse,operationType:n}}static _fromErrorAndOperation(e,t,n,i){return new Fg(e,t,n,i)}}function Vg(e,t,n,i){return("reauthenticate"===t?n._getReauthenticationResolver(e):n._getIdTokenResponse(e)).catch((n=>{if("auth/multi-factor-auth-required"===n.code)throw Fg._fromErrorAndOperation(e,n,t,i);throw n}))}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function Ug(e,t,n=!1){const i=await Om(e,t._linkToIdToken(e.auth,await e.getIdToken()),n);return Pg._forOperation(e,"link",i)}
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
async function zg(e,t,n=!1){const{auth:i}=e,s="reauthenticate";try{const r=await Om(e,Vg(i,s,t,e),n);hm(r.idToken,i,"internal-error");const o=Lm(r.idToken);hm(o,i,"internal-error");const{sub:a}=o;return hm(e.uid===a,i,"user-mismatch"),Pg._forOperation(e,s,r)}catch(e){throw"auth/user-not-found"===(null==e?void 0:e.code)&&am(i,"user-mismatch"),e}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function jg(e,t,n=!1){const i="signIn",s=await Vg(e,i,t),r=await Pg._fromIdTokenResponse(e,i,s);return n||await e._updateCurrentUser(r.user),r}async function Bg(e,t){return jg(pg(e),t)}async function $g(e,t,n){var i;const s=pg(e),r={returnSecureToken:!0,email:t,password:n,clientType:"CLIENT_TYPE_WEB"};let o;if(null===(i=s._getRecaptchaConfig())||void 0===i?void 0:i.emailPasswordEnabled){const e=await ug(s,r,"signUpPassword");o=Mg(s,e)}else o=Mg(s,r).catch((async e=>{if("auth/missing-recaptcha-token"===e.code){console.log("Sign-up is protected by reCAPTCHA for this project. Automatically triggering the reCAPTCHA flow and restarting the sign-up flow.");const e=await ug(s,r,"signUpPassword");return Mg(s,e)}return Promise.reject(e)}));const a=await o.catch((e=>Promise.reject(e))),l=await Pg._fromIdTokenResponse(s,"signIn",a);return await s._updateCurrentUser(l.user),l}function qg(e,t,n){return Bg(Lt(e),kg.credential(t,n))}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */new WeakMap;const Hg="__sak";
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Gg{constructor(e,t){this.storageRetriever=e,this.type=t}_isAvailable(){try{return this.storage?(this.storage.setItem(Hg,"1"),this.storage.removeItem(Hg),Promise.resolve(!0)):Promise.resolve(!1)}catch(e){return Promise.resolve(!1)}}_set(e,t){return this.storage.setItem(e,JSON.stringify(t)),Promise.resolve()}_get(e){const t=this.storage.getItem(e);return Promise.resolve(t?JSON.parse(t):null)}_remove(e){return this.storage.removeItem(e),Promise.resolve()}get storage(){return this.storageRetriever()}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Wg extends Gg{constructor(){super((()=>window.localStorage),"LOCAL"),this.boundEventHandler=(e,t)=>this.onStorageEvent(e,t),this.listeners={},this.localCache={},this.pollTimer=null,this.safariLocalStorageNotSynced=function(){const e=gt();return Km(e)||eg(e)}()&&function(){try{return!(!window||window===window.top)}catch(e){return!1}}(),this.fallbackToPolling=ng(),this._shouldAllowMigration=!0}forAllChangedKeys(e){for(const t of Object.keys(this.listeners)){const n=this.storage.getItem(t),i=this.localCache[t];n!==i&&e(t,i,n)}}onStorageEvent(e,t=!1){if(!e.key)return void this.forAllChangedKeys(((e,t,n)=>{this.notifyListeners(e,n)}));const n=e.key;if(t?this.detachListener():this.stopPolling(),this.safariLocalStorageNotSynced){const i=this.storage.getItem(n);if(e.newValue!==i)null!==e.newValue?this.storage.setItem(n,e.newValue):this.storage.removeItem(n);else if(this.localCache[n]===e.newValue&&!t)return}const i=()=>{const e=this.storage.getItem(n);(t||this.localCache[n]!==e)&&this.notifyListeners(n,e)},s=this.storage.getItem(n);tg()&&s!==e.newValue&&e.newValue!==e.oldValue?setTimeout(i,10):i()}notifyListeners(e,t){this.localCache[e]=t;const n=this.listeners[e];if(n)for(const e of Array.from(n))e(t?JSON.parse(t):t)}startPolling(){this.stopPolling(),this.pollTimer=setInterval((()=>{this.forAllChangedKeys(((e,t,n)=>{this.onStorageEvent(new StorageEvent("storage",{key:e,oldValue:t,newValue:n}),!0)}))}),1e3)}stopPolling(){this.pollTimer&&(clearInterval(this.pollTimer),this.pollTimer=null)}attachListener(){window.addEventListener("storage",this.boundEventHandler)}detachListener(){window.removeEventListener("storage",this.boundEventHandler)}_addListener(e,t){0===Object.keys(this.listeners).length&&(this.fallbackToPolling?this.startPolling():this.attachListener()),this.listeners[e]||(this.listeners[e]=new Set,this.localCache[e]=this.storage.getItem(e)),this.listeners[e].add(t)}_removeListener(e,t){this.listeners[e]&&(this.listeners[e].delete(t),0===this.listeners[e].size&&delete this.listeners[e]),0===Object.keys(this.listeners).length&&(this.detachListener(),this.stopPolling())}async _set(e,t){await super._set(e,t),this.localCache[e]=JSON.stringify(t)}async _get(e){const t=await super._get(e);return this.localCache[e]=JSON.stringify(t),t}async _remove(e){await super._remove(e),delete this.localCache[e]}}Wg.type="LOCAL";const Kg=Wg;
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Qg extends Gg{constructor(){super((()=>window.sessionStorage),"SESSION")}_addListener(e,t){}_removeListener(e,t){}}Qg.type="SESSION";const Xg=Qg;
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
class Yg{constructor(e){this.eventTarget=e,this.handlersMap={},this.boundEventHandler=this.handleEvent.bind(this)}static _getInstance(e){const t=this.receivers.find((t=>t.isListeningto(e)));if(t)return t;const n=new Yg(e);return this.receivers.push(n),n}isListeningto(e){return this.eventTarget===e}async handleEvent(e){const t=e,{eventId:n,eventType:i,data:s}=t.data,r=this.handlersMap[i];if(!(null==r?void 0:r.size))return;t.ports[0].postMessage({status:"ack",eventId:n,eventType:i});const o=Array.from(r).map((async e=>e(t.origin,s))),a=await function(e){return Promise.all(e.map((async e=>{try{return{fulfilled:!0,value:await e}}catch(e){return{fulfilled:!1,reason:e}}})))}(o);t.ports[0].postMessage({status:"done",eventId:n,eventType:i,response:a})}_subscribe(e,t){0===Object.keys(this.handlersMap).length&&this.eventTarget.addEventListener("message",this.boundEventHandler),this.handlersMap[e]||(this.handlersMap[e]=new Set),this.handlersMap[e].add(t)}_unsubscribe(e,t){this.handlersMap[e]&&t&&this.handlersMap[e].delete(t),t&&0!==this.handlersMap[e].size||delete this.handlersMap[e],0===Object.keys(this.handlersMap).length&&this.eventTarget.removeEventListener("message",this.boundEventHandler)}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
function Jg(e="",t=10){let n="";for(let e=0;e<t;e++)n+=Math.floor(10*Math.random());return e+n}
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */Yg.receivers=[];class Zg{constructor(e){this.target=e,this.handlers=new Set}removeMessageHandler(e){e.messageChannel&&(e.messageChannel.port1.removeEventListener("message",e.onMessage),e.messageChannel.port1.close()),this.handlers.delete(e)}async _send(e,t,n=50){const i="undefined"!=typeof MessageChannel?new MessageChannel:null;if(!i)throw new Error("connection_unavailable");let s,r;return new Promise(((o,a)=>{const l=Jg("",20);i.port1.start();const c=setTimeout((()=>{a(new Error("unsupported_event"))}),n);r={messageChannel:i,onMessage(e){const t=e;if(t.data.eventId===l)switch(t.data.status){case"ack":clearTimeout(c),s=setTimeout((()=>{a(new Error("timeout"))}),3e3);break;case"done":clearTimeout(s),o(t.data.response);break;default:clearTimeout(c),clearTimeout(s),a(new Error("invalid_response"))}}},this.handlers.add(r),i.port1.addEventListener("message",r.onMessage),this.target.postMessage({eventType:e,eventId:l,data:t},[i.port2])})).finally((()=>{r&&this.removeMessageHandler(r)}))}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function ev(){return window}
/**
 * @license
 * Copyright 2020 Google LLC.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
function tv(){return void 0!==ev().WorkerGlobalScope&&"function"==typeof ev().importScripts}
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
const nv="firebaseLocalStorageDb",iv="firebaseLocalStorage",sv="fbase_key";class rv{constructor(e){this.request=e}toPromise(){return new Promise(((e,t)=>{this.request.addEventListener("success",(()=>{e(this.request.result)})),this.request.addEventListener("error",(()=>{t(this.request.error)}))}))}}function ov(e,t){return e.transaction([iv],t?"readwrite":"readonly").objectStore(iv)}function av(){const e=indexedDB.open(nv,1);return new Promise(((t,n)=>{e.addEventListener("error",(()=>{n(e.error)})),e.addEventListener("upgradeneeded",(()=>{const t=e.result;try{t.createObjectStore(iv,{keyPath:sv})}catch(e){n(e)}})),e.addEventListener("success",(async()=>{const n=e.result;n.objectStoreNames.contains(iv)?t(n):(n.close(),await function(){const e=indexedDB.deleteDatabase(nv);return new rv(e).toPromise()}(),t(await av()))}))}))}async function lv(e,t,n){const i=ov(e,!0).put({[sv]:t,value:n});return new rv(i).toPromise()}function cv(e,t){const n=ov(e,!0).delete(t);return new rv(n).toPromise()}class uv{constructor(){this.type="LOCAL",this._shouldAllowMigration=!0,this.listeners={},this.localCache={},this.pollTimer=null,this.pendingWrites=0,this.receiver=null,this.sender=null,this.serviceWorkerReceiverAvailable=!1,this.activeServiceWorker=null,this._workerInitializationPromise=this.initializeServiceWorkerMessaging().then((()=>{}),(()=>{}))}async _openDb(){return this.db||(this.db=await av()),this.db}async _withRetries(e){let t=0;for(;;)try{const t=await this._openDb();return await e(t)}catch(e){if(t++>3)throw e;this.db&&(this.db.close(),this.db=void 0)}}async initializeServiceWorkerMessaging(){return tv()?this.initializeReceiver():this.initializeSender()}async initializeReceiver(){this.receiver=Yg._getInstance(tv()?self:null),this.receiver._subscribe("keyChanged",(async(e,t)=>({keyProcessed:(await this._poll()).includes(t.key)}))),this.receiver._subscribe("ping",(async(e,t)=>["keyChanged"]))}async initializeSender(){var e,t;if(this.activeServiceWorker=await async function(){if(!(null===navigator||void 0===navigator?void 0:navigator.serviceWorker))return null;try{return(await navigator.serviceWorker.ready).active}catch(e){return null}}(),!this.activeServiceWorker)return;this.sender=new Zg(this.activeServiceWorker);const n=await this.sender._send("ping",{},800);n&&(null===(e=n[0])||void 0===e?void 0:e.fulfilled)&&(null===(t=n[0])||void 0===t?void 0:t.value.includes("keyChanged"))&&(this.serviceWorkerReceiverAvailable=!0)}async notifyServiceWorker(e){var t;if(this.sender&&this.activeServiceWorker&&((null===(t=null===navigator||void 0===navigator?void 0:navigator.serviceWorker)||void 0===t?void 0:t.controller)||null)===this.activeServiceWorker)try{await this.sender._send("keyChanged",{key:e},this.serviceWorkerReceiverAvailable?800:50)}catch(t){}}async _isAvailable(){try{if(!indexedDB)return!1;const e=await av();return await lv(e,Hg,"1"),await cv(e,Hg),!0}catch(e){}return!1}async _withPendingWrite(e){this.pendingWrites++;try{await e()}finally{this.pendingWrites--}}async _set(e,t){return this._withPendingWrite((async()=>(await this._withRetries((n=>lv(n,e,t))),this.localCache[e]=t,this.notifyServiceWorker(e))))}async _get(e){const t=await this._withRetries((t=>async function(e,t){const n=ov(e,!1).get(t),i=await new rv(n).toPromise();return void 0===i?null:i.value}(t,e)));return this.localCache[e]=t,t}async _remove(e){return this._withPendingWrite((async()=>(await this._withRetries((t=>cv(t,e))),delete this.localCache[e],this.notifyServiceWorker(e))))}async _poll(){const e=await this._withRetries((e=>{const t=ov(e,!1).getAll();return new rv(t).toPromise()}));if(!e)return[];if(0!==this.pendingWrites)return[];const t=[],n=new Set;for(const{fbase_key:i,value:s}of e)n.add(i),JSON.stringify(this.localCache[i])!==JSON.stringify(s)&&(this.notifyListeners(i,s),t.push(i));for(const e of Object.keys(this.localCache))this.localCache[e]&&!n.has(e)&&(this.notifyListeners(e,null),t.push(e));return t}notifyListeners(e,t){this.localCache[e]=t;const n=this.listeners[e];if(n)for(const e of Array.from(n))e(t)}startPolling(){this.stopPolling(),this.pollTimer=setInterval((async()=>this._poll()),800)}stopPolling(){this.pollTimer&&(clearInterval(this.pollTimer),this.pollTimer=null)}_addListener(e,t){0===Object.keys(this.listeners).length&&this.startPolling(),this.listeners[e]||(this.listeners[e]=new Set,this._get(e)),this.listeners[e].add(t)}_removeListener(e,t){this.listeners[e]&&(this.listeners[e].delete(t),0===this.listeners[e].size&&delete this.listeners[e]),0===Object.keys(this.listeners).length&&this.stopPolling()}}uv.type="LOCAL";const hv=uv;
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
lg("rcb"),new ym(3e4,6e4);
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
const dv="recaptcha";async function pv(e,t,n){var i;const s=await n.verify();try{let r;if(hm("string"==typeof s,e,"argument-error"),hm(n.type===dv,e,"argument-error"),r="string"==typeof t?{phoneNumber:t}:t,"session"in r){const t=r.session;if("phoneNumber"in r){hm("enroll"===t.type,e,"internal-error");const n=
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */await function(e,t){return Im(e,"POST","/v2/accounts/mfaEnrollment:start",Sm(e,t))}(e,{idToken:t.credential,phoneEnrollmentInfo:{phoneNumber:r.phoneNumber,recaptchaToken:s}});return n.phoneSessionInfo.sessionInfo}{hm("signin"===t.type,e,"internal-error");const n=(null===(i=r.multiFactorHint)||void 0===i?void 0:i.uid)||r.multiFactorUid;hm(n,e,"missing-multi-factor-info");const o=await function(e,t){return Im(e,"POST","/v2/accounts/mfaSignIn:start",Sm(e,t))}(e,{mfaPendingCredential:t.credential,mfaEnrollmentId:n,phoneSignInInfo:{recaptchaToken:s}});return o.phoneResponseInfo.sessionInfo}}{const{sessionInfo:t}=await async function(e,t){return Im(e,"POST","/v1/accounts:sendVerificationCode",Sm(e,t))}(e,{phoneNumber:r.phoneNumber,recaptchaToken:s});return t}}finally{n._reset()}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
class fv{constructor(e){this.providerId=fv.PROVIDER_ID,this.auth=pg(e)}verifyPhoneNumber(e,t){return pv(this.auth,e,Lt(t))}static credential(e,t){return Cg._fromVerification(e,t)}static credentialFromResult(e){const t=e;return fv.credentialFromTaggedObject(t)}static credentialFromError(e){return fv.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e)return null;const{phoneNumber:t,temporaryProof:n}=e;return t&&n?Cg._fromTokenResponse(t,n):null}}
/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
function mv(e,t){return t?jm(t):(hm(e._popupRedirectResolver,e,"argument-error"),e._popupRedirectResolver)}
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */fv.PROVIDER_ID="phone",fv.PHONE_SIGN_IN_METHOD="phone";class gv extends yg{constructor(e){super("custom","custom"),this.params=e}_getIdTokenResponse(e){return Tg(e,this._buildIdpRequest())}_linkToIdToken(e,t){return Tg(e,this._buildIdpRequest(t))}_getReauthenticationResolver(e){return Tg(e,this._buildIdpRequest())}_buildIdpRequest(e){const t={requestUri:this.params.requestUri,sessionId:this.params.sessionId,postBody:this.params.postBody,tenantId:this.params.tenantId,pendingToken:this.params.pendingToken,returnSecureToken:!0,returnIdpCredential:!0};return e&&(t.idToken=e),t}}function vv(e){return jg(e.auth,new gv(e),e.bypassAuthState)}function yv(e){const{auth:t,user:n}=e;return hm(n,t,"internal-error"),zg(n,new gv(e),e.bypassAuthState)}async function wv(e){const{auth:t,user:n}=e;return hm(n,t,"internal-error"),Ug(n,new gv(e),e.bypassAuthState)}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class bv{constructor(e,t,n,i,s=!1){this.auth=e,this.resolver=n,this.user=i,this.bypassAuthState=s,this.pendingPromise=null,this.eventManager=null,this.filter=Array.isArray(t)?t:[t]}execute(){return new Promise((async(e,t)=>{this.pendingPromise={resolve:e,reject:t};try{this.eventManager=await this.resolver._initialize(this.auth),await this.onExecution(),this.eventManager.registerConsumer(this)}catch(e){this.reject(e)}}))}async onAuthEvent(e){const{urlResponse:t,sessionId:n,postBody:i,tenantId:s,error:r,type:o}=e;if(r)return void this.reject(r);const a={auth:this.auth,requestUri:t,sessionId:n,tenantId:s||void 0,postBody:i||void 0,user:this.user,bypassAuthState:this.bypassAuthState};try{this.resolve(await this.getIdpTask(o)(a))}catch(e){this.reject(e)}}onError(e){this.reject(e)}getIdpTask(e){switch(e){case"signInViaPopup":case"signInViaRedirect":return vv;case"linkViaPopup":case"linkViaRedirect":return wv;case"reauthViaPopup":case"reauthViaRedirect":return yv;default:am(this.auth,"internal-error")}}resolve(e){pm(this.pendingPromise,"Pending promise was never set"),this.pendingPromise.resolve(e),this.unregisterAndCleanUp()}reject(e){pm(this.pendingPromise,"Pending promise was never set"),this.pendingPromise.reject(e),this.unregisterAndCleanUp()}unregisterAndCleanUp(){this.eventManager&&this.eventManager.unregisterConsumer(this),this.pendingPromise=null,this.cleanUp()}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Ev=new ym(2e3,1e4);class Tv extends bv{constructor(e,t,n,i,s){super(e,t,i,s),this.provider=n,this.authWindow=null,this.pollId=null,Tv.currentPopupAction&&Tv.currentPopupAction.cancel(),Tv.currentPopupAction=this}async executeNotNull(){const e=await this.execute();return hm(e,this.auth,"internal-error"),e}async onExecution(){pm(1===this.filter.length,"Popup operations only handle one event");const e=Jg();this.authWindow=await this.resolver._openPopup(this.auth,this.provider,this.filter[0],e),this.authWindow.associatedEvent=e,this.resolver._originValidation(this.auth).catch((e=>{this.reject(e)})),this.resolver._isIframeWebStorageSupported(this.auth,(e=>{e||this.reject(lm(this.auth,"web-storage-unsupported"))})),this.pollUserCancellation()}get eventId(){var e;return(null===(e=this.authWindow)||void 0===e?void 0:e.associatedEvent)||null}cancel(){this.reject(lm(this.auth,"cancelled-popup-request"))}cleanUp(){this.authWindow&&this.authWindow.close(),this.pollId&&window.clearTimeout(this.pollId),this.authWindow=null,this.pollId=null,Tv.currentPopupAction=null}pollUserCancellation(){const e=()=>{var t,n;(null===(n=null===(t=this.authWindow)||void 0===t?void 0:t.window)||void 0===n?void 0:n.closed)?this.pollId=window.setTimeout((()=>{this.pollId=null,this.reject(lm(this.auth,"popup-closed-by-user"))}),8e3):this.pollId=window.setTimeout(e,Ev.get())};e()}}Tv.currentPopupAction=null;
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
const Sv="pendingRedirect",Iv=new Map;class Cv extends bv{constructor(e,t,n=!1){super(e,["signInViaRedirect","linkViaRedirect","reauthViaRedirect","unknown"],t,void 0,n),this.eventId=null}async execute(){let e=Iv.get(this.auth._key());if(!e){try{const t=await async function(e,t){const n=Av(t),i=kv(e);if(!await i._isAvailable())return!1;const s="true"===await i._get(n);return await i._remove(n),s}(this.resolver,this.auth)?await super.execute():null;e=()=>Promise.resolve(t)}catch(t){e=()=>Promise.reject(t)}Iv.set(this.auth._key(),e)}return this.bypassAuthState||Iv.set(this.auth._key(),(()=>Promise.resolve(null))),e()}async onAuthEvent(e){if("signInViaRedirect"===e.type)return super.onAuthEvent(e);if("unknown"!==e.type){if(e.eventId){const t=await this.auth._redirectUserForId(e.eventId);if(t)return this.user=t,super.onAuthEvent(e);this.resolve(null)}}else this.resolve(null)}async onExecution(){}cleanUp(){}}function _v(e,t){Iv.set(e._key(),t)}function kv(e){return jm(e._redirectPersistence)}function Av(e){return qm(Sv,e.config.apiKey,e.name)}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function xv(e,t,n=!1){const i=pg(e),s=mv(i,t),r=new Cv(i,s,n),o=await r.execute();return o&&!n&&(delete o.user._redirectEventId,await i._persistUserIfCurrent(o.user),await i._setRedirectUser(null,t)),o}class Nv{constructor(e){this.auth=e,this.cachedEventUids=new Set,this.consumers=new Set,this.queuedRedirectEvent=null,this.hasHandledPotentialRedirect=!1,this.lastProcessedEventTime=Date.now()}registerConsumer(e){this.consumers.add(e),this.queuedRedirectEvent&&this.isEventForConsumer(this.queuedRedirectEvent,e)&&(this.sendToConsumer(this.queuedRedirectEvent,e),this.saveEventToCache(this.queuedRedirectEvent),this.queuedRedirectEvent=null)}unregisterConsumer(e){this.consumers.delete(e)}onEvent(e){if(this.hasEventBeenHandled(e))return!1;let t=!1;return this.consumers.forEach((n=>{this.isEventForConsumer(e,n)&&(t=!0,this.sendToConsumer(e,n),this.saveEventToCache(e))})),this.hasHandledPotentialRedirect||!function(e){switch(e.type){case"signInViaRedirect":case"linkViaRedirect":case"reauthViaRedirect":return!0;case"unknown":return Lv(e);default:return!1}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */(e)||(this.hasHandledPotentialRedirect=!0,t||(this.queuedRedirectEvent=e,t=!0)),t}sendToConsumer(e,t){var n;if(e.error&&!Lv(e)){const i=(null===(n=e.error.code)||void 0===n?void 0:n.split("auth/")[1])||"internal-error";t.onError(lm(this.auth,i))}else t.onAuthEvent(e)}isEventForConsumer(e,t){const n=null===t.eventId||!!e.eventId&&e.eventId===t.eventId;return t.filter.includes(e.type)&&n}hasEventBeenHandled(e){return Date.now()-this.lastProcessedEventTime>=6e5&&this.cachedEventUids.clear(),this.cachedEventUids.has(Dv(e))}saveEventToCache(e){this.cachedEventUids.add(Dv(e)),this.lastProcessedEventTime=Date.now()}}function Dv(e){return[e.type,e.eventId,e.sessionId,e.tenantId].filter((e=>e)).join("-")}function Lv({type:e,error:t}){return"unknown"===e&&"auth/no-auth-event"===(null==t?void 0:t.code)}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
const Ov=/^\d{1,3}\.\d{1,3}\.\d{1,3}\.\d{1,3}$/,Mv=/^https?/;async function Pv(e){if(e.config.emulator)return;const{authorizedDomains:t}=await async function(e,t={}){return Im(e,"GET","/v1/projects",t)}(e);for(const e of t)try{if(Rv(e))return}catch(e){}am(e,"unauthorized-domain")}function Rv(e){const t=fm(),{protocol:n,hostname:i}=new URL(t);if(e.startsWith("chrome-extension://")){const s=new URL(e);return""===s.hostname&&""===i?"chrome-extension:"===n&&e.replace("chrome-extension://","")===t.replace("chrome-extension://",""):"chrome-extension:"===n&&s.hostname===i}if(!Mv.test(n))return!1;if(Ov.test(e))return i===e;const s=e.replace(/\./g,"\\.");return new RegExp("^(.+\\."+s+"|"+s+")$","i").test(i)}
/**
 * @license
 * Copyright 2020 Google LLC.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Fv=new ym(3e4,6e4);function Vv(){const e=ev().___jsl;if(null==e?void 0:e.H)for(const t of Object.keys(e.H))if(e.H[t].r=e.H[t].r||[],e.H[t].L=e.H[t].L||[],e.H[t].r=[...e.H[t].L],e.CP)for(let t=0;t<e.CP.length;t++)e.CP[t]=null}let Uv=null;function zv(e){return Uv=Uv||function(e){return new Promise(((t,n)=>{var i,s,r;function o(){Vv(),gapi.load("gapi.iframes",{callback:()=>{t(gapi.iframes.getContext())},ontimeout:()=>{Vv(),n(lm(e,"network-request-failed"))},timeout:Fv.get()})}if(null===(s=null===(i=ev().gapi)||void 0===i?void 0:i.iframes)||void 0===s?void 0:s.Iframe)t(gapi.iframes.getContext());else{if(!(null===(r=ev().gapi)||void 0===r?void 0:r.load)){const t=lg("iframefcb");return ev()[t]=()=>{gapi.load?o():n(lm(e,"network-request-failed"))},ag(`https://apis.google.com/js/api.js?onload=${t}`).catch((e=>n(e)))}o()}})).catch((e=>{throw Uv=null,e}))}(e),Uv}
/**
 * @license
 * Copyright 2020 Google LLC.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const jv=new ym(5e3,15e3),Bv="__/auth/iframe",$v="emulator/auth/iframe",qv={style:{position:"absolute",top:"-100px",width:"1px",height:"1px"},"aria-hidden":"true",tabindex:"-1"},Hv=new Map([["identitytoolkit.googleapis.com","p"],["staging-identitytoolkit.sandbox.googleapis.com","s"],["test-identitytoolkit.sandbox.googleapis.com","t"]]);function Gv(e){const t=e.config;hm(t.authDomain,e,"auth-domain-config-required");const n=t.emulator?wm(t,$v):`https://${e.config.authDomain}/${Bv}`,i={apiKey:t.apiKey,appName:e.name,v:Sn},s=Hv.get(e.config.apiHost);s&&(i.eid=s);const r=e._getFrameworks();return r.length&&(i.fw=r.join(",")),`${n}?${_t(i).slice(1)}`}
/**
 * @license
 * Copyright 2020 Google LLC.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
const Wv={location:"yes",resizable:"yes",statusbar:"yes",toolbar:"no"};class Kv{constructor(e){this.window=e,this.associatedEvent=null}close(){if(this.window)try{this.window.close()}catch(e){}}}function Qv(e,t,n,i=500,s=600){const r=Math.max((window.screen.availHeight-s)/2,0).toString(),o=Math.max((window.screen.availWidth-i)/2,0).toString();let a="";const l=Object.assign(Object.assign({},Wv),{width:i.toString(),height:s.toString(),top:r,left:o}),c=gt().toLowerCase();n&&(a=Qm(c)?"_blank":n),Wm(c)&&(t=t||"http://localhost",l.scrollbars="yes");const u=Object.entries(l).reduce(((e,[t,n])=>`${e}${t}=${n},`),"");if(function(e=gt()){var t;return eg(e)&&!!(null===(t=window.navigator)||void 0===t?void 0:t.standalone)}(c)&&"_self"!==a)return function(e,t){const n=document.createElement("a");n.href=e,n.target=t;const i=document.createEvent("MouseEvent");i.initMouseEvent("click",!0,!0,window,1,0,0,0,0,!1,!1,!1,!1,1,null),n.dispatchEvent(i)}
/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */(t||"",a),new Kv(null);const h=window.open(t||"",a,u);hm(h,e,"popup-blocked");try{h.focus()}catch(e){}return new Kv(h)}const Xv="__/auth/handler",Yv="emulator/auth/handler",Jv=encodeURIComponent("fac");async function Zv(e,t,n,i,s,r){hm(e.config.authDomain,e,"auth-domain-config-required"),hm(e.config.apiKey,e,"invalid-api-key");const o={apiKey:e.config.apiKey,appName:e.name,authType:n,redirectUrl:i,v:Sn,eventId:s};if(t instanceof Ag){t.setDefaultLanguage(e.languageCode),o.providerId=t.providerId||"",St(t.getCustomParameters())||(o.customParameters=JSON.stringify(t.getCustomParameters()));for(const[e,t]of Object.entries(r||{}))o[e]=t}if(t instanceof xg){const e=t.getScopes().filter((e=>""!==e));e.length>0&&(o.scopes=e.join(","))}e.tenantId&&(o.tid=e.tenantId);const a=o;for(const e of Object.keys(a))void 0===a[e]&&delete a[e];const l=await e._getAppCheckToken(),c=l?`#${Jv}=${encodeURIComponent(l)}`:"";return`${function({config:e}){return e.emulator?wm(e,Yv):`https://${e.authDomain}/${Xv}`}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */(e)}?${_t(a).slice(1)}${c}`}const ey="webStorageSupport";const ty=class{constructor(){this.eventManagers={},this.iframes={},this.originValidationPromises={},this._redirectPersistence=Xg,this._completeRedirectFn=xv,this._overrideRedirectResult=_v}async _openPopup(e,t,n,i){var s;pm(null===(s=this.eventManagers[e._key()])||void 0===s?void 0:s.manager,"_initialize() not called before _openPopup()");return Qv(e,await Zv(e,t,n,fm(),i),Jg())}async _openRedirect(e,t,n,i){await this._originValidation(e);return function(e){ev().location.href=e}(await Zv(e,t,n,fm(),i)),new Promise((()=>{}))}_initialize(e){const t=e._key();if(this.eventManagers[t]){const{manager:e,promise:n}=this.eventManagers[t];return e?Promise.resolve(e):(pm(n,"If manager is not set, promise should be"),n)}const n=this.initAndGetManager(e);return this.eventManagers[t]={promise:n},n.catch((()=>{delete this.eventManagers[t]})),n}async initAndGetManager(e){const t=await async function(e){const t=await zv(e),n=ev().gapi;return hm(n,e,"internal-error"),t.open({where:document.body,url:Gv(e),messageHandlersFilter:n.iframes.CROSS_ORIGIN_IFRAMES_FILTER,attributes:qv,dontclear:!0},(t=>new Promise((async(n,i)=>{await t.restyle({setHideOnLeave:!1});const s=lm(e,"network-request-failed"),r=ev().setTimeout((()=>{i(s)}),jv.get());function o(){ev().clearTimeout(r),n(t)}t.ping(o).then(o,(()=>{i(s)}))}))))}(e),n=new Nv(e);return t.register("authEvent",(t=>{hm(null==t?void 0:t.authEvent,e,"invalid-auth-event");return{status:n.onEvent(t.authEvent)?"ACK":"ERROR"}}),gapi.iframes.CROSS_ORIGIN_IFRAMES_FILTER),this.eventManagers[e._key()]={manager:n},this.iframes[e._key()]=t,n}_isIframeWebStorageSupported(e,t){this.iframes[e._key()].send(ey,{type:ey},(n=>{var i;const s=null===(i=null==n?void 0:n[0])||void 0===i?void 0:i[ey];void 0!==s&&t(!!s),am(e,"internal-error")}),gapi.iframes.CROSS_ORIGIN_IFRAMES_FILTER)}_originValidation(e){const t=e._key();return this.originValidationPromises[t]||(this.originValidationPromises[t]=Pv(e)),this.originValidationPromises[t]}get _shouldInitProactively(){return ng()||Km()||eg()}};var ny="@firebase/auth",iy="0.23.2";
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
class sy{constructor(e){this.auth=e,this.internalListeners=new Map}getUid(){var e;return this.assertAuthConfigured(),(null===(e=this.auth.currentUser)||void 0===e?void 0:e.uid)||null}async getToken(e){if(this.assertAuthConfigured(),await this.auth._initializationPromise,!this.auth.currentUser)return null;return{accessToken:await this.auth.currentUser.getIdToken(e)}}addAuthTokenListener(e){if(this.assertAuthConfigured(),this.internalListeners.has(e))return;const t=this.auth.onIdTokenChanged((t=>{e((null==t?void 0:t.stsTokenManager.accessToken)||null)}));this.internalListeners.set(e,t),this.updateProactiveRefresh()}removeAuthTokenListener(e){this.assertAuthConfigured();const t=this.internalListeners.get(e);t&&(this.internalListeners.delete(e),t(),this.updateProactiveRefresh())}assertAuthConfigured(){hm(this.auth._initializationPromise,"dependent-sdk-initialized-before-auth")}updateProactiveRefresh(){this.internalListeners.size>0?this.auth._startProactiveRefresh():this.auth._stopProactiveRefresh()}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
const ry=pt("authIdTokenMaxAge")||300;let oy=null;var ay;ay="Browser",wn(new Ot("auth",((e,{options:t})=>{const n=e.getProvider("app").getImmediate(),i=e.getProvider("heartbeat"),s=e.getProvider("app-check-internal"),{apiKey:r,authDomain:o}=n.options;hm(r&&!r.includes(":"),"invalid-api-key",{appName:n.name});const a={apiKey:r,authDomain:o,clientPlatform:ay,apiHost:"identitytoolkit.googleapis.com",tokenApiHost:"securetoken.googleapis.com",apiScheme:"https",sdkClientVersion:ig(ay)},l=new dg(n,i,s,a);return function(e,t){const n=(null==t?void 0:t.persistence)||[],i=(Array.isArray(n)?n:[n]).map(jm);(null==t?void 0:t.errorMap)&&e._updateErrorMap(t.errorMap),e._initializeWithPersistence(i,null==t?void 0:t.popupRedirectResolver)}(l,t),l}),"PUBLIC").setInstantiationMode("EXPLICIT").setInstanceCreatedCallback(((e,t,n)=>{e.getProvider("auth-internal").initialize()}))),wn(new Ot("auth-internal",(e=>(e=>new sy(e))(pg(e.getProvider("auth").getImmediate()))),"PRIVATE").setInstantiationMode("EXPLICIT")),_n(ny,iy,function(e){switch(e){case"Node":return"node";case"ReactNative":return"rn";case"Worker":return"webworker";case"Cordova":return"cordova";default:return}}(ay)),_n(ny,iy,"esm2017");const ly=In({apiKey:"AIzaSyCqf7IbxQGzKEnVt10HxkceW7bQtKvtVFQ",authDomain:"theerrormasters-8c68c.firebaseapp.com",projectId:"theerrormasters-8c68c",storageBucket:"theerrormasters-8c68c.appspot.com",messagingSenderId:"440951672891",appId:"1:440951672891:web:27c33f78cbda1a63290c1e"}),cy=function(e=Cn()){const t=bn(e,"auth");if(t.isInitialized())return t.getImmediate();const n=function(e,t){const n=bn(e,"auth");if(n.isInitialized()){const e=n.getImmediate();if(It(n.getOptions(),null!=t?t:{}))return e;am(e,"already-initialized")}return n.initialize({options:t})}(e,{popupRedirectResolver:ty,persistence:[hv,Kg,Xg]}),i=pt("authTokenSyncURL");if(i){const e=(s=i,async e=>{const t=e&&await e.getIdTokenResult(),n=t&&((new Date).getTime()-Date.parse(t.issuedAtTime))/1e3;if(n&&n>ry)return;const i=null==t?void 0:t.token;oy!==i&&(oy=i,await fetch(s,{method:i?"POST":"DELETE",headers:i?{Authorization:`Bearer ${i}`}:{}}))});!function(e,t,n){Lt(e).beforeAuthStateChanged(t,n)}(n,e,(()=>e(n.currentUser))),function(e,t,n,i){Lt(e).onIdTokenChanged(t,n,i)}(n,(t=>e(t)))}var s;const r=ut("auth");return r&&mg(n,`http://${r}`),n}(ly),uy=function(e,t){const n="string"==typeof e?e:t||"(default)",i=bn("object"==typeof e?e:Cn(),"firestore").getImmediate({identifier:n});if(!i._initialized){const e=ht("firestore");e&&af(i,...e)}return i}(ly);var hy=s("d0ecc");s("d0ecc"),hy=s("d0ecc");const dy=document.querySelector(".guides"),py=document.querySelector(".account-details");let fy=null;const my=e=>{const t=document.querySelectorAll(".logged-out"),n=document.querySelectorAll(".logged-in");e?(Qf(df(uy,"users",e.uid)).then((t=>{const n=`\n        <div>Email: ${e.email}</div>\n        <div>Name: ${t.data().name||null}</div>\n        `;py.innerHTML=n})),n.forEach((e=>e.style.display="block")),t.forEach((e=>e.style.display="none"))):(py.innerHTML="",n.forEach((e=>e.style.display="none")),t.forEach((e=>e.style.display="block")))},gy=e=>{if(e.length){const t=e.filter((e=>{const t=e.data();if(t.owner==fy)return t})).map((e=>{const t=e.data();return`\n        <details>\n            <summary class="collapsible-header grey lighten-4" style="background-color: darkgray; width: 500px; margin-left: 10px;">\n            ${t.title}\n            </summary>\n            <p class="collapsible-body white" style="background-color: aliceblue; width: 500px; margin-left: 10px;">\n            ${t.description}\n            </p>\n        </details>\n    `})).join("");dy.innerHTML=t}else dy.innerHTML="<h3>Login to view books</h3>"};cy.onAuthStateChanged((e=>{if(e){fy=e.uid;Jf(hf(uy,"books"),(t=>{gy(t.docs),my(e)}),(e=>{console.log(e.message)}))}else fy=null,my(),gy([])}));document.querySelector(".btn-logout").addEventListener("click",(e=>{e.preventDefault(),cy.signOut()})),hy.signForm.addEventListener("submit",(e=>{e.preventDefault();const t=e.target.elements.user_password.value,n=e.target.elements.user_email.value,i=e.target.elements.user_name.value,s=e.target.elements.submit_btn.innerText,r={};t&&n&&i&&(r.depend=s,r.name=i,r.email=n,r.password=t,(0,hy.resetInputs)()),"SIGN IN"===s&&(r.depend=s,r.email=n,r.password=t,qg(cy,r.email,r.password).then((e=>{(0,hy.resetInputs)(),(0,hy.closeModal)()})).catch((e=>{console.log(e.message)}))),"SIGN UP"===s&&(r.depend=s,r.name=i,r.email=n,r.password=t,$g(cy,r.email,r.password).then((e=>Yf(df(uy,"users",e.user.uid),{name:r.name}))).then((()=>{(0,hy.resetInputs)(),(0,hy.closeModal)()})).catch((e=>{console.log(e.message)})))})),s("d0ecc"),s("eHzLv");var vy,yy="Expected a function",wy=NaN,by="[object Symbol]",Ey=/^\s+|\s+$/g,Ty=/^[-+]0x[0-9a-f]+$/i,Sy=/^0b[01]+$/i,Iy=/^0o[0-7]+$/i,Cy=parseInt,_y="object"==typeof t&&t&&t.Object===Object&&t,ky="object"==typeof self&&self&&self.Object===Object&&self,Ay=_y||ky||Function("return this")(),xy=Object.prototype.toString,Ny=Math.max,Dy=Math.min,Ly=function(){return Ay.Date.now()};function Oy(e,t,n){var i,s,r,o,a,l,c=0,u=!1,h=!1,d=!0;if("function"!=typeof e)throw new TypeError(yy);function p(t){var n=i,r=s;return i=s=void 0,c=t,o=e.apply(r,n)}function f(e){var n=e-l;return void 0===l||n>=t||n<0||h&&e-c>=r}function m(){var e=Ly();if(f(e))return g(e);a=setTimeout(m,function(e){var n=t-(e-l);return h?Dy(n,r-(e-c)):n}(e))}function g(e){return a=void 0,d&&i?p(e):(i=s=void 0,o)}function v(){var e=Ly(),n=f(e);if(i=arguments,s=this,l=e,n){if(void 0===a)return function(e){return c=e,a=setTimeout(m,t),u?p(e):o}(l);if(h)return a=setTimeout(m,t),p(l)}return void 0===a&&(a=setTimeout(m,t)),o}return t=Py(t)||0,My(n)&&(u=!!n.leading,r=(h="maxWait"in n)?Ny(Py(n.maxWait)||0,t):r,d="trailing"in n?!!n.trailing:d),v.cancel=function(){void 0!==a&&clearTimeout(a),c=0,i=l=s=a=void 0},v.flush=function(){return void 0===a?o:g(Ly())},v}function My(e){var t=typeof e;return!!e&&("object"==t||"function"==t)}function Py(e){if("number"==typeof e)return e;if(function(e){return"symbol"==typeof e||function(e){return!!e&&"object"==typeof e}(e)&&xy.call(e)==by}(e))return wy;if(My(e)){var t="function"==typeof e.valueOf?e.valueOf():e;e=My(t)?t+"":t}if("string"!=typeof e)return 0===e?e:+e;e=e.replace(Ey,"");var n=Sy.test(e);return n||Iy.test(e)?Cy(e.slice(2),n?2:8):Ty.test(e)?wy:+e}vy=function(e,t,n){var i=!0,s=!0;if("function"!=typeof e)throw new TypeError(yy);return My(n)&&(i="leading"in n?!!n.leading:i,s="trailing"in n?!!n.trailing:s),Oy(e,t,{leading:i,maxWait:t,trailing:s})};const Ry=document.querySelector(".scroll-up"),Fy=document.querySelector(".scroll-up__svg-path"),Vy=Fy.getTotalLength();Fy.style.strokeDasharray=`${Vy} ${Vy}`,Fy.style.transition="stroke-dashoffset 20ms";const Uy=()=>window.pageYOffset||document.documentElement.scrollTop;window.addEventListener("scroll",e(vy)((()=>{(()=>{const e=document.documentElement.scrollHeight-window.innerHeight,t=Vy-Uy()*Vy/e;Fy.style.strokeDashoffset=t})(),Uy()>100?Ry.classList.add("scroll-up--active"):Ry.classList.remove("scroll-up--active")}),50)),Ry.addEventListener("click",(()=>{window.scrollTo({top:0,behavior:"smooth"})}))}();
//# sourceMappingURL=index.81992a71.js.map
