var t="undefined"!=typeof globalThis?globalThis:"undefined"!=typeof self?self:"undefined"!=typeof window?window:"undefined"!=typeof global?global:{},e={},n={},i=t.parcelRequire64ec;null==i&&((i=function(t){if(t in e)return e[t].exports;if(t in n){var i=n[t];delete n[t];var o={id:t,exports:{}};return e[t]=o,i.call(o.exports,o,o.exports),o.exports}var s=new Error("Cannot find module '"+t+"'");throw s.code="MODULE_NOT_FOUND",s}).register=function(t,e){n[t]=e},t.parcelRequire64ec=i);var o=i("gPUC6"),s=i("jstjT");const a=new(0,o.BookAPI);var r={};
/*!
 * TOAST UI Pagination
 * @version 3.4.1
 * @author NHN FE Development Team <dl_javascript@nhn.com>
 * @license MIT
 */window,r=function(){return function(t){var e={};function n(i){if(e[i])return e[i].exports;var o=e[i]={i:i,l:!1,exports:{}};return t[i].call(o.exports,o,o.exports,n),o.l=!0,o.exports}return n.m=t,n.c=e,n.d=function(t,e,i){n.o(t,e)||Object.defineProperty(t,e,{enumerable:!0,get:i})},n.r=function(t){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},n.t=function(t,e){if(1&e&&(t=n(t)),8&e)return t;if(4&e&&"object"==typeof t&&t&&t.__esModule)return t;var i=Object.create(null);if(n.r(i),Object.defineProperty(i,"default",{enumerable:!0,value:t}),2&e&&"string"!=typeof t)for(var o in t)n.d(i,o,function(e){return t[e]}.bind(null,o));return i},n.n=function(t){var e=t&&t.__esModule?function(){return t.default}:function(){return t};return n.d(e,"a",e),e},n.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},n.p="dist",n(n.s=10)}([function(t,e,n){t.exports=function(t,e){var n,i,o,s,a=Object.prototype.hasOwnProperty;for(o=1,s=arguments.length;o<s;o+=1)for(i in n=arguments[o])a.call(n,i)&&(t[i]=n[i]);return t}},function(t,e,n){t.exports=function(t){return void 0===t}},function(t,e,n){t.exports=function(t){return t instanceof Array}},function(t,e,n){var i=n(2),o=n(17),s=n(6);t.exports=function(t,e,n){i(t)?o(t,e,n):s(t,e,n)}},function(t,e,n){t.exports=function(t){return"string"==typeof t||t instanceof String}},function(t,e,n){t.exports=function(t){return t instanceof Function}},function(t,e,n){t.exports=function(t,e,n){var i;for(i in n=n||null,t)if(t.hasOwnProperty(i)&&!1===e.call(n,t[i],i,t))break}},function(t,e,n){var i=n(18),o=n(0);t.exports=function(t,e){var n;return e||(e=t,t=null),n=e.init||function(){},t&&i(n,t),e.hasOwnProperty("static")&&(o(n,e.static),delete e.static),o(n.prototype,e),n}},function(t,e,n){var i=n(2);t.exports=function(t,e,n){var o,s;if(n=n||0,!i(e))return-1;if(Array.prototype.indexOf)return Array.prototype.indexOf.call(e,t,n);for(s=e.length,o=n;n>=0&&o<s;o+=1)if(e[o]===t)return o;return-1}},function(t,e,n){var i=n(29),o=n(30),s=n(5),a={capitalizeFirstLetter:function(t){return t.substring(0,1).toUpperCase()+t.substring(1,t.length)},isContained:function(t,e){return!!e&&(t===e||e.contains(t))},createElementByTemplate:function(t,e){var n=document.createElement("div"),o=s(t)?t(e):i(t,e);return n.innerHTML=o,n.firstChild},bind:function(t,e){var n,i=Array.prototype.slice;return t.bind?t.bind.apply(t,i.call(arguments,1)):(n=i.call(arguments,2),function(){return t.apply(e,n.length?n.concat(i.call(arguments)):arguments)})},sendHostName:function(){o("pagination","UA-129987462-1")}};t.exports=a},function(t,e,n){n(11),t.exports=n(12)},function(t,e,n){},function(t,e,n){var i=n(13),o=n(7),s=n(0),a=n(1),r=n(20),c=n(9),l={totalItems:10,itemsPerPage:10,visiblePages:10,page:1,centerAlign:!1,firstItemClassName:"tui-first-child",lastItemClassName:"tui-last-child",usageStatistics:!0},u=o({init:function(t,e){this._options=s({},l,e),this._currentPage=0,this._view=new r(t,this._options,c.bind(this._onClickHandler,this)),this._paginate(),this._options.usageStatistics&&c.sendHostName()},_setCurrentPage:function(t){this._currentPage=t||this._options.page},_getLastPage:function(){var t=Math.ceil(this._options.totalItems/this._options.itemsPerPage);return t||1},_getPageIndex:function(t){var e;return this._options.centerAlign?(e=t-Math.floor(this._options.visiblePages/2),e=Math.max(e,1),e=Math.min(e,this._getLastPage()-this._options.visiblePages+1)):Math.ceil(t/this._options.visiblePages)},_getRelativePage:function(t){var e="prev"===t,n=this.getCurrentPage();return e?n-1:n+1},_getMorePageIndex:function(t){var e=this._getPageIndex(this.getCurrentPage()),n=this._options.visiblePages,i="prev"===t;return this._options.centerAlign?i?e-1:e+n:i?(e-1)*n:e*n+1},_convertToValidPage:function(t){var e=this._getLastPage();return t=Math.max(t,1),t=Math.min(t,e)},_paginate:function(t){var e=this._makeViewData(t||this._options.page);this._setCurrentPage(t),this._view.update(e)},_makeViewData:function(t){var e={},n=this._getLastPage(),i=this._getPageIndex(t),o=this._getPageIndex(n),s=this._getEdge(t);return e.leftPageNumber=s.left,e.rightPageNumber=s.right,e.prevMore=i>1,e.nextMore=i<o,e.page=t,e.currentPageIndex=t,e.lastPage=n,e.lastPageListIndex=n,e},_getEdge:function(t){var e,n,i,o=this._getLastPage(),s=this._options.visiblePages,a=this._getPageIndex(t);return this._options.centerAlign?(i=Math.floor(s/2),(n=(e=Math.max(t-i,1))+s-1)>o&&(e=Math.max(o-s+1,1),n=o)):(e=(a-1)*s+1,n=a*s,n=Math.min(n,o)),{left:e,right:n}},_onClickHandler:function(t,e){switch(t){case"first":e=1;break;case"prev":e=this._getRelativePage("prev");break;case"next":e=this._getRelativePage("next");break;case"prevMore":e=this._getMorePageIndex("prev");break;case"nextMore":e=this._getMorePageIndex("next");break;case"last":e=this._getLastPage();break;default:if(!e)return}this.movePageTo(e)},reset:function(t){a(t)&&(t=this._options.totalItems),this._options.totalItems=t,this._paginate(1)},movePageTo:function(t){t=this._convertToValidPage(t),this.invoke("beforeMove",{page:t})&&(this._paginate(t),this.fire("afterMove",{page:t}))},setTotalItems:function(t){this._options.totalItems=t},setItemsPerPage:function(t){this._options.itemsPerPage=t},getCurrentPage:function(){return this._currentPage||this._options.page}});i.mixin(u),t.exports=u},function(t,e,n){var i=n(0),o=n(14),s=n(4),a=n(16),r=n(2),c=n(5),l=n(3),u=/\s+/g;function p(){this.events=null,this.contexts=null}p.mixin=function(t){i(t.prototype,p.prototype)},p.prototype._getHandlerItem=function(t,e){var n={handler:t};return e&&(n.context=e),n},p.prototype._safeEvent=function(t){var e,n=this.events;return n||(n=this.events={}),t&&((e=n[t])||(e=[],n[t]=e),n=e),n},p.prototype._safeContext=function(){var t=this.contexts;return t||(t=this.contexts=[]),t},p.prototype._indexOfContext=function(t){for(var e=this._safeContext(),n=0;e[n];){if(t===e[n][0])return n;n+=1}return-1},p.prototype._memorizeContext=function(t){var e,n;o(t)&&(e=this._safeContext(),(n=this._indexOfContext(t))>-1?e[n][1]+=1:e.push([t,1]))},p.prototype._forgetContext=function(t){var e,n;o(t)&&(e=this._safeContext(),(n=this._indexOfContext(t))>-1&&(e[n][1]-=1,e[n][1]<=0&&e.splice(n,1)))},p.prototype._bindEvent=function(t,e,n){var i=this._safeEvent(t);this._memorizeContext(n),i.push(this._getHandlerItem(e,n))},p.prototype.on=function(t,e,n){var i=this;s(t)?(t=t.split(u),l(t,(function(t){i._bindEvent(t,e,n)}))):a(t)&&(n=e,l(t,(function(t,e){i.on(e,t,n)})))},p.prototype.once=function(t,e,n){var i=this;if(a(t))return n=e,void l(t,(function(t,e){i.once(e,t,n)}));this.on(t,(function o(){e.apply(n,arguments),i.off(t,o,n)}),n)},p.prototype._spliceMatches=function(t,e){var n,i=0;if(r(t))for(n=t.length;i<n;i+=1)!0===e(t[i])&&(t.splice(i,1),n-=1,i-=1)},p.prototype._matchHandler=function(t){var e=this;return function(n){var i=t===n.handler;return i&&e._forgetContext(n.context),i}},p.prototype._matchContext=function(t){var e=this;return function(n){var i=t===n.context;return i&&e._forgetContext(n.context),i}},p.prototype._matchHandlerAndContext=function(t,e){var n=this;return function(i){var o=t===i.handler,s=e===i.context,a=o&&s;return a&&n._forgetContext(i.context),a}},p.prototype._offByEventName=function(t,e){var n=this,i=c(e),o=n._matchHandler(e);t=t.split(u),l(t,(function(t){var e=n._safeEvent(t);i?n._spliceMatches(e,o):(l(e,(function(t){n._forgetContext(t.context)})),n.events[t]=[])}))},p.prototype._offByHandler=function(t){var e=this,n=this._matchHandler(t);l(this._safeEvent(),(function(t){e._spliceMatches(t,n)}))},p.prototype._offByObject=function(t,e){var n,i=this;this._indexOfContext(t)<0?l(t,(function(t,e){i.off(e,t)})):s(e)?(n=this._matchContext(t),i._spliceMatches(this._safeEvent(e),n)):c(e)?(n=this._matchHandlerAndContext(e,t),l(this._safeEvent(),(function(t){i._spliceMatches(t,n)}))):(n=this._matchContext(t),l(this._safeEvent(),(function(t){i._spliceMatches(t,n)})))},p.prototype.off=function(t,e){s(t)?this._offByEventName(t,e):arguments.length?c(t)?this._offByHandler(t):a(t)&&this._offByObject(t,e):(this.events={},this.contexts=[])},p.prototype.fire=function(t){this.invoke.apply(this,arguments)},p.prototype.invoke=function(t){var e,n,i,o;if(!this.hasListener(t))return!0;for(e=this._safeEvent(t),n=Array.prototype.slice.call(arguments,1),i=0;e[i];){if(!1===(o=e[i]).handler.apply(o.context,n))return!1;i+=1}return!0},p.prototype.hasListener=function(t){return this.getListenerLength(t)>0},p.prototype.getListenerLength=function(t){return this._safeEvent(t).length},t.exports=p},function(t,e,n){var i=n(1),o=n(15);t.exports=function(t){return!i(t)&&!o(t)}},function(t,e,n){t.exports=function(t){return null===t}},function(t,e,n){t.exports=function(t){return t===Object(t)}},function(t,e,n){t.exports=function(t,e,n){var i=0,o=t.length;for(n=n||null;i<o&&!1!==e.call(n,t[i],i,t);i+=1);}},function(t,e,n){var i=n(19);t.exports=function(t,e){var n=i(e.prototype);n.constructor=t,t.prototype=n}},function(t,e,n){t.exports=function(t){function e(){}return e.prototype=t,new e}},function(t,e,n){var i=n(3),o=n(7),s=n(21),a=n(22),r=n(24),c=n(25),l=n(0),u=n(4),p=n(28),f=n(9),h={page:'<a href="#" class="tui-page-btn">{{page}}</a>',currentPage:'<strong class="tui-page-btn tui-is-selected">{{page}}</strong>',moveButton:'<a href="#" class="tui-page-btn tui-{{type}}"><span class="tui-ico-{{type}}">{{type}}</span></a>',disabledMoveButton:'<span class="tui-page-btn tui-is-disabled tui-{{type}}"><span class="tui-ico-{{type}}">{{type}}</span></span>',moreButton:'<a href="#" class="tui-page-btn tui-{{type}}-is-ellip"><span class="tui-ico-ellip">...</span></a>'},g=["first","prev","next","last"],d=["prev","next"],v=o({init:function(t,e,n){this._containerElement=null,this._firstItemClassName=e.firstItemClassName,this._lastItemClassName=e.lastItemClassName,this._template=l({},h,e.template),this._buttons={},this._enabledPageElements=[],this._setRootElement(t),this._setMoveButtons(),this._setDisabledMoveButtons(),this._setMoreButtons(),this._attachClickEvent(n)},_setRootElement:function(t){if(u(t)?t=document.getElementById(t)||document.querySelector(t):t.jquery&&(t=t[0]),!p(t))throw new Error("The container element is invalid.");this._containerElement=t},_setMoveButtons:function(){i(g,(function(t){this._buttons[t]=f.createElementByTemplate(this._template.moveButton,{type:t})}),this)},_setDisabledMoveButtons:function(){i(g,(function(t){var e="disabled"+f.capitalizeFirstLetter(t);this._buttons[e]=f.createElementByTemplate(this._template.disabledMoveButton,{type:t})}),this)},_setMoreButtons:function(){i(d,(function(t){var e=t+"More";this._buttons[e]=f.createElementByTemplate(this._template.moreButton,{type:t})}),this)},_getContainerElement:function(){return this._containerElement},_appendFirstButton:function(t){var e;e=t.page>1?this._buttons.first:this._buttons.disabledFirst,this._getContainerElement().appendChild(e)},_appendPrevButton:function(t){var e;e=t.currentPageIndex>1?this._buttons.prev:this._buttons.disabledPrev,this._getContainerElement().appendChild(e)},_appendNextButton:function(t){var e;e=t.currentPageIndex<t.lastPageListIndex?this._buttons.next:this._buttons.disabledNext,this._getContainerElement().appendChild(e)},_appendLastButton:function(t){var e;e=t.page<t.lastPage?this._buttons.last:this._buttons.disabledLast,this._getContainerElement().appendChild(e)},_appendPrevMoreButton:function(t){var e;t.prevMore&&(e=this._buttons.prevMore,c(e,this._firstItemClassName),this._getContainerElement().appendChild(e))},_appendNextMoreButton:function(t){var e;t.nextMore&&(e=this._buttons.nextMore,c(e,this._lastItemClassName),this._getContainerElement().appendChild(e))},_appendPages:function(t){var e,n,i=t.leftPageNumber,o=t.rightPageNumber;for(n=i;n<=o;n+=1)n===t.page?e=f.createElementByTemplate(this._template.currentPage,{page:n}):(e=f.createElementByTemplate(this._template.page,{page:n}),this._enabledPageElements.push(e)),n!==i||t.prevMore||c(e,this._firstItemClassName),n!==o||t.nextMore||c(e,this._lastItemClassName),this._getContainerElement().appendChild(e)},_attachClickEvent:function(t){var e=this._getContainerElement();a(e,"click",(function(e){var n,i,o=s(e);r(e),(i=this._getButtonType(o))||(n=this._getPageNumber(o)),t(i,n)}),this)},_getButtonType:function(t){var e,n=this._buttons;return i(n,(function(n,i){return!f.isContained(t,n)||(e=i,!1)}),this),e},_getPageNumber:function(t){var e,n=this._findPageElement(t);return n&&(e=parseInt(n.innerText,10)),e},_findPageElement:function(t){for(var e,n=0,i=this._enabledPageElements.length;n<i;n+=1)if(e=this._enabledPageElements[n],f.isContained(t,e))return e;return null},_empty:function(){this._enabledPageElements=[],i(this._buttons,(function(t,e){this._buttons[e]=t.cloneNode(!0)}),this),this._getContainerElement().innerHTML=""},update:function(t){this._empty(),this._appendFirstButton(t),this._appendPrevButton(t),this._appendPrevMoreButton(t),this._appendPages(t),this._appendNextMoreButton(t),this._appendNextButton(t),this._appendLastButton(t)}});t.exports=v},function(t,e,n){t.exports=function(t){return t.target||t.srcElement}},function(t,e,n){var i=n(4),o=n(3),s=n(23);function a(t,e,n,i){function a(e){n.call(i||t,e||window.event)}"addEventListener"in t?t.addEventListener(e,a):"attachEvent"in t&&t.attachEvent("on"+e,a),function(t,e,n,i){var a=s(t,e),r=!1;o(a,(function(t){return t.handler!==n||(r=!0,!1)})),r||a.push({handler:n,wrappedHandler:i})}(t,e,n,a)}t.exports=function(t,e,n,s){i(e)?o(e.split(/\s+/g),(function(e){a(t,e,n,s)})):o(e,(function(e,i){a(t,i,e,n)}))}},function(t,e,n){var i="_feEventKey";t.exports=function(t,e){var n,o=t[i];return o||(o=t[i]={}),(n=o[e])||(n=o[e]=[]),n}},function(t,e,n){t.exports=function(t){t.preventDefault?t.preventDefault():t.returnValue=!1}},function(t,e,n){var i=n(3),o=n(8),s=n(26),a=n(27);t.exports=function(t){var e,n=Array.prototype.slice.call(arguments,1),r=t.classList,c=[];r?i(n,(function(e){t.classList.add(e)})):((e=s(t))&&(n=[].concat(e.split(/\s+/),n)),i(n,(function(t){o(t,c)<0&&c.push(t)})),a(t,c))}},function(t,e,n){var i=n(1);t.exports=function(t){return t&&t.className?i(t.className.baseVal)?t.className:t.className.baseVal:""}},function(t,e,n){var i=n(2),o=n(1);t.exports=function(t,e){e=(e=i(e)?e.join(" "):e).replace(/^[\s\uFEFF\xA0]+|[\s\uFEFF\xA0]+$/g,""),o(t.className.baseVal)?t.className=e:t.className.baseVal=e}},function(t,e,n){t.exports=function(t){return"object"==typeof HTMLElement?t&&(t instanceof HTMLElement||!!t.nodeType):!(!t||!t.nodeType)}},function(t,e,n){var i=n(8),o=n(3),s=n(2),a=n(4),r=n(0),c=/{{\s?|\s?}}/g,l=/^[a-zA-Z0-9_@]+\[[a-zA-Z0-9_@"']+\]$/,u=/\[\s?|\s?\]/,p=/^[a-zA-Z_]+\.[a-zA-Z_]+$/,f=/\./,h=/^["']\w+["']$/,g=/"|'/g,d=/^-?\d+\.?\d*$/,v=2,_={if:function(t,e,n){var i=function(t,e){var n=[t],i=[],s=0,a=0;return o(e,(function(t,o){0===t.indexOf("if")?s+=1:"/if"===t?s-=1:s||0!==t.indexOf("elseif")&&"else"!==t||(n.push("else"===t?["true"]:t.split(" ").slice(1)),i.push(e.slice(a,o)),a=o+1)})),i.push(e.slice(a)),{exps:n,sourcesInsideIf:i}}(t,e),s=!1,a="";return o(i.exps,(function(t,e){return(s=y(t,n))&&(a=P(i.sourcesInsideIf[e],n)),!s})),a},each:function(t,e,n){var i=y(t,n),a=s(i)?"@index":"@key",c={},l="";return o(i,(function(t,i){c[a]=i,c["@this"]=t,r(n,c),l+=P(e.slice(),n)})),l},with:function(t,e,n){var o=i("as",t),s=t[o+1],a=y(t.slice(0,o),n),c={};return c[s]=a,P(e,r(n,c))||""}},m=3==="a".split(/a/).length?function(t,e){return t.split(e)}:function(t,e){var n,i,o=[],s=0;for(e.global||(e=new RegExp(e,"g")),n=e.exec(t);null!==n;)i=n.index,o.push(t.slice(s,i)),s=i+n[0].length,n=e.exec(t);return o.push(t.slice(s)),o};function b(t,e){var n,i=e[t];return"true"===t?i=!0:"false"===t?i=!1:h.test(t)?i=t.replace(g,""):l.test(t)?i=b((n=t.split(u))[0],e)[b(n[1],e)]:p.test(t)?i=b((n=t.split(f))[0],e)[n[1]]:d.test(t)&&(i=parseFloat(t)),i}function x(t,e,n){for(var i,o,s,r,c=_[t],l=1,u=0+v,p=e[u];l&&a(p);)0===p.indexOf(t)?l+=1:0===p.indexOf("/"+t)&&(l-=1,i=u),p=e[u+=v];if(l)throw Error(t+" needs {{/"+t+"}} expression.");return e[0]=c(e[0].split(" ").slice(1),(o=0,s=i,(r=e.splice(o+1,s-o)).pop(),r),n),e}function y(t,e){var n=b(t[0],e);return n instanceof Function?function(t,e,n){var i=[];return o(e,(function(t){i.push(b(t,n))})),t.apply(null,i)}(n,t.slice(1),e):n}function P(t,e){for(var n,i,o,s=1,r=t[s];a(r);)i=(n=r.split(" "))[0],_[i]?(o=x(i,t.splice(s,t.length-s),e),t=t.concat(o)):t[s]=y(n,e),r=t[s+=v];return t.join("")}t.exports=function(t,e){return P(m(t,c),e)}},function(t,e,n){var i=n(1),o=n(31),s=6048e5;t.exports=function(t,e){var n=location.hostname,a="TOAST UI "+t+" for "+n+": Statistics",r=window.localStorage.getItem(a);(i(window.tui)||!1!==window.tui.usageStatistics)&&(r&&!function(t){return(new Date).getTime()-t>s}(r)||(window.localStorage.setItem(a,(new Date).getTime()),setTimeout((function(){"interactive"!==document.readyState&&"complete"!==document.readyState||o("https://www.google-analytics.com/collect",{v:1,t:"event",tid:e,cid:n,dp:n,dh:t,el:t,ec:"use"})}),1e3)))}},function(t,e,n){var i=n(6);t.exports=function(t,e){var n=document.createElement("img"),o="";return i(e,(function(t,e){o+="&"+e+"="+t})),o=o.substring(1),n.src=t+"?"+o,n.style.display="none",document.body.appendChild(n),document.body.removeChild(n),n}}])}();let c={};const l=JSON.parse(localStorage.getItem("shoppingList"))||[];console.log(l);const u=document.querySelector(".shopping-list");let p,f=4,h=[];function g(){u&&(u.innerHTML="",0===c.length?u.innerHTML='\n      <p class="some-book">\n        This page is empty, add some books<br />and proceed to order.\n      </p>\n      <div class="stack-of-books">\n        <img\n            src="https://lh3.googleusercontent.com/pw/AJFCJaXF-_bnsOB3uXSYccYIy6OIbasPGhK58TIG0KTbIRDMPOMP1TtEGd2v8e9EsOOUcZtpOjn5ToZTgfcrfJbF-r0KEa0DReOlQZhvZF8xlygQIOy7rBEg9YFDmqIH1RQ9sjRUPPvATZYh0PGnOM4RpkEm=w323-h241-s-no?authuser=0"\n            alt="stack of books"\n            width="265"\n            height="198"\n          />\n     </div>\n      ':(u.innerHTML=h.map((t=>`\n          <li class="shopping-list-book">\n            <img class="shopping-book-img" src="${t.book_image}" alt="${t.title}" width="100" height="142" />\n            <div class="shopping-book-info">\n              <div class="shopping-book-title">\n                <h3>${t.title}</h3>\n                <p>${t.list_name}</p>\n              </div>\n              <a href="#" class="remove_book" data-id="${t._id}">[X]\n              </a>\n            </div>\n            <div class="shopping-book-box">\n              <p class="shopping-book-description">${t.description}</p>\n              <div class="shopping-book-author">\n                <p>${t.author}</p>\n                <ul class="shopping-book-retailers">\n                  <li class="books-retailers-icon">\n                    <a href="#">\n                       <svg id="icon-Amazon_logo" class="amazon_logo-icon" width="32" height="14" viewBox="0 0 106 32">\n                        <path d="M65.759 24.999c-6.154 4.536-15.073 6.956-22.753 6.956-10.768 0-20.462-3.983-27.796-10.607-0.576-0.521-0.060-1.231 0.631-0.825 7.915 4.605 17.701 7.375 27.809 7.375 6.818 0 14.317-1.411 21.213-4.338 1.042-0.443 1.913 0.682 0.894 1.438z"></path>\n                        <path d="M68.318 22.072c-0.784-1.005-5.2-0.475-7.182-0.24-0.604 0.074-0.696-0.452-0.152-0.83 3.517-2.475 9.288-1.761 9.961-0.931 0.673 0.834-0.175 6.619-3.48 9.38-0.507 0.424-0.991 0.198-0.765-0.364 0.742-1.853 2.406-6.006 1.618-7.016z"></path>\n                        <path d="M61.274 3.528v-2.406c0-0.364 0.277-0.608 0.608-0.608h10.773c0.346 0 0.622 0.249 0.622 0.608v2.060c-0.005 0.346-0.295 0.797-0.811 1.512l-5.582 7.97c2.074-0.051 4.264 0.258 6.145 1.318 0.424 0.24 0.539 0.59 0.572 0.936v2.568c0 0.35-0.387 0.761-0.793 0.549-3.314-1.738-7.716-1.927-11.381 0.018-0.373 0.203-0.765-0.203-0.765-0.553v-2.438c0-0.392 0.005-1.060 0.396-1.655l6.467-9.274h-5.628c-0.346 0-0.622-0.244-0.622-0.604z"></path>\n                        <path d="M21.978 18.541h-3.277c-0.313-0.023-0.562-0.258-0.585-0.558v-16.82c0-0.337 0.281-0.604 0.631-0.604h3.056c0.318 0.014 0.572 0.258 0.595 0.562v2.199h0.060c0.797-2.125 2.296-3.116 4.315-3.116 2.051 0 3.333 0.991 4.255 3.116 0.793-2.125 2.595-3.116 4.527-3.116 1.374 0 2.876 0.567 3.794 1.839 1.037 1.415 0.825 3.471 0.825 5.273l-0.005 10.616c0 0.337-0.281 0.608-0.632 0.608h-3.273c-0.327-0.023-0.59-0.286-0.59-0.608v-8.915c0-0.71 0.065-2.48-0.092-3.153-0.244-1.129-0.977-1.447-1.927-1.447-0.793 0-1.623 0.53-1.959 1.378s-0.304 2.268-0.304 3.222v8.915c0 0.337-0.281 0.608-0.631 0.608h-3.273c-0.332-0.023-0.59-0.286-0.59-0.608l-0.005-8.915c0-1.876 0.309-4.637-2.019-4.637-2.355 0-2.263 2.692-2.263 4.637v8.915c0 0.337-0.281 0.608-0.631 0.608z"></path>\n                        <path d="M82.552 0.205c4.863 0 7.495 4.176 7.495 9.486 0 5.13-2.909 9.201-7.495 9.201-4.775 0-7.375-4.176-7.375-9.38 0-5.236 2.632-9.307 7.375-9.307zM82.58 3.639c-2.415 0-2.568 3.291-2.568 5.342 0 2.056-0.032 6.444 2.54 6.444 2.54 0 2.66-3.54 2.66-5.697 0-1.42-0.060-3.116-0.489-4.462-0.369-1.171-1.102-1.627-2.143-1.627z"></path>\n                        <path d="M96.353 18.541h-3.264c-0.327-0.023-0.59-0.286-0.59-0.608l-0.005-16.825c0.028-0.309 0.3-0.549 0.632-0.549h3.038c0.286 0.014 0.521 0.207 0.585 0.47v2.572h0.060c0.917-2.3 2.203-3.397 4.467-3.397 1.47 0 2.904 0.53 3.826 1.982 0.857 1.346 0.857 3.609 0.857 5.236v10.588c-0.037 0.295-0.309 0.53-0.632 0.53h-3.287c-0.3-0.023-0.549-0.244-0.581-0.53v-9.136c0-1.839 0.212-4.531-2.051-4.531-0.797 0-1.53 0.535-1.895 1.346-0.461 1.028-0.521 2.051-0.521 3.185v9.058c-0.005 0.337-0.29 0.608-0.641 0.608z"></path>\n                        <path d="M52.687 10.507v-0.71c-2.369 0-4.872 0.507-4.872 3.3 0 1.415 0.733 2.374 1.991 2.374 0.922 0 1.747-0.567 2.268-1.489 0.645-1.134 0.613-2.199 0.613-3.476zM55.992 18.495c-0.217 0.194-0.53 0.207-0.774 0.078-1.088-0.903-1.281-1.323-1.881-2.185-1.798 1.835-3.070 2.383-5.402 2.383-2.757 0-4.905-1.701-4.905-5.107 0-2.66 1.443-4.471 3.494-5.356 1.779-0.784 4.264-0.922 6.163-1.139v-0.424c0-0.779 0.060-1.701-0.396-2.374-0.401-0.604-1.166-0.853-1.839-0.853-1.249 0-2.365 0.641-2.637 1.968-0.055 0.295-0.272 0.585-0.567 0.599l-3.181-0.341c-0.267-0.060-0.562-0.277-0.489-0.687 0.733-3.854 4.213-5.015 7.329-5.015 1.595 0 3.678 0.424 4.937 1.632 1.595 1.489 1.443 3.476 1.443 5.638v5.107c0 1.535 0.636 2.208 1.235 3.038 0.212 0.295 0.258 0.65-0.009 0.871-0.668 0.558-1.858 1.595-2.512 2.176l-0.009-0.009z"></path>\n                        <path d="M9.721 10.507v-0.71c-2.369 0-4.872 0.507-4.872 3.3 0 1.415 0.733 2.374 1.991 2.374 0.922 0 1.747-0.567 2.268-1.489 0.645-1.134 0.613-2.199 0.613-3.476zM13.026 18.495c-0.217 0.194-0.53 0.207-0.774 0.078-1.088-0.903-1.281-1.323-1.881-2.185-1.798 1.835-3.070 2.383-5.402 2.383-2.756 0-4.905-1.701-4.905-5.107 0-2.66 1.443-4.471 3.494-5.356 1.779-0.784 4.264-0.922 6.163-1.139v-0.424c0-0.779 0.060-1.701-0.396-2.374-0.401-0.604-1.166-0.853-1.839-0.853-1.249 0-2.365 0.641-2.637 1.968-0.055 0.295-0.272 0.585-0.567 0.599l-3.181-0.341c-0.267-0.060-0.562-0.277-0.489-0.687 0.733-3.854 4.213-5.015 7.329-5.015 1.595 0 3.678 0.424 4.937 1.632 1.595 1.489 1.443 3.476 1.443 5.638v5.107c0 1.535 0.636 2.208 1.235 3.038 0.212 0.295 0.258 0.65-0.009 0.871-0.668 0.558-1.858 1.595-2.512 2.176l-0.009-0.009z"></path>\n                      </svg>\n                    </a>\n                  </li>\n                  <li class="books-retailers-icon">\n                    <a href="#">\n                      <svg id="icon-book-opened" class="icon-book-opened" width="20" height="20" viewBox="0 0 32 32">\n                        <path d="M30.372 7.482h-2.114c-3.066-1.369-5.668-2.072-7.743-2.072-2.687 0-3.945 1.171-4.514 2.064-0.569-0.893-1.826-2.064-4.514-2.064-2.075 0-4.678 0.704-7.744 2.072h-2.114c-0.899 0-1.628 0.729-1.628 1.628v15.851c0 0.9 0.729 1.628 1.628 1.628h28.743c0.899 0 1.628-0.729 1.628-1.628v-15.851c0-0.899-0.729-1.628-1.628-1.628zM15.559 8.471c-0.005 0.025-0.007 0.051-0.007 0.076v14.95c-0.712-0.822-1.905-1.451-3.901-1.451-3.563 0-8.034 1.953-9.631 2.709v-15.553c1.368-0.696 2.645-1.265 3.836-1.719 2.186-0.831 4.074-1.258 5.63-1.258 1.909 0 2.952 0.639 3.517 1.258 0.326 0.357 0.494 0.707 0.573 0.924-0.009 0.036-0.015 0.062-0.016 0.064zM29.979 24.754c-1.597-0.756-6.069-2.709-9.631-2.709-1.996 0-3.189 0.629-3.901 1.451-0.026 0.030-0.056 0.058-0.081 0.089v-14.993c0.008-0.035 0.027-0.099 0.059-0.183 0.080-0.216 0.251-0.568 0.581-0.927 0.568-0.619 1.611-1.258 3.508-1.258 1.556 0 3.443 0.426 5.63 1.258 1.192 0.453 2.468 1.022 3.835 1.719v15.552h0z"></path>\n                      </svg>\n                    </a>\n                  </li>\n                  <li class="books-retailers-icon">\n                    <a href="#">\n                      <svg id="icon-books-cl" class="icon-books-cl" width="20" height="20" viewBox="0 0 32 32">\n                        <path d="M29.717 11.056c-0.129-0.973-0.148-2.648 0.756-3.211 0.016-0.010 0.028-0.025 0.042-0.038 0.739-0.236 1.25-0.568 0.849-1.014l-10.897-3.283-17.644 2.453c0 0-2.021 0.289-1.84 3.428 0.098 1.709 0.634 2.548 1.102 2.96l-1.448 0.436c-0.402 0.446 0.109 0.778 0.848 1.014 0.014 0.013 0.026 0.028 0.042 0.038 0.903 0.563 0.886 2.238 0.756 3.211-3.244 0.921-2.079 1.221-2.079 1.221l0.712 0.172c-0.5 0.452-0.998 1.31-0.904 2.937 0.181 3.139 1.84 3.355 1.84 3.355l11.546 3.753 17.428-4.221c0 0 1.165-0.301-2.080-1.222-0.13-0.971-0.149-2.646 0.756-3.211 0.017-0.010 0.029-0.025 0.042-0.038 0.739-0.236 1.25-0.568 0.848-1.014l-0.758-0.229c0.505-0.305 1.264-1.101 1.383-3.169 0.082-1.423-0.289-2.256-0.719-2.746l1.497-0.362c0 0.001 1.165-0.3-2.079-1.221zM15.14 11.016l14.31-2.941c-0.471 0.863-0.452 2.044-0.374 2.803 0.017 0.172 0.037 0.329 0.056 0.448l-14.116 3.511 0.123-3.821zM2.551 14.071l14.31 2.941 0.123 3.821-14.115-3.511c0.019-0.119 0.038-0.276 0.056-0.448 0.078-0.758 0.098-1.94-0.374-2.803zM1.978 9.24c-0.018-0.835 0.131-1.439 0.432-1.746 0.191-0.196 0.417-0.237 0.572-0.237 0.082 0 0.141 0.011 0.145 0.011l11.395 3.715-0.124 3.848-11.202-3.14c-0.021-0.006-0.049-0.010-0.070-0.011-0.044-0.003-1.096-0.1-1.147-2.44zM13.425 26.823l-11.202-3.141c-0.021-0.006-0.048-0.010-0.070-0.011-0.045-0.003-1.097-0.1-1.148-2.439-0.018-0.836 0.131-1.439 0.432-1.747 0.192-0.196 0.418-0.237 0.572-0.237 0.082 0 0.141 0.011 0.145 0.011 0 0 0 0 0 0l11.395 3.716-0.124 3.848zM28.104 22.868c0.018 0.172 0.037 0.329 0.056 0.448l-14.116 3.512 0.123-3.821 3.018-0.62 0.446 0.108 1.67-0.543 9.176-1.886c-0.472 0.863-0.452 2.044-0.374 2.803zM28.882 17.675c-0.026 0.001-0.051 0.004-0.076 0.012l-11.202 3.14-0.124-3.848 11.379-3.711c0.001-0 0.424-0.094 0.734 0.221 0.3 0.307 0.449 0.911 0.432 1.746-0.053 2.34-1.105 2.437-1.143 2.44z"></path>\n                      </svg>\n                    </a>\n                  </li>\n                </ul>\n              </div>\n            </div>\n          </li>\n        `)).join(""),document.querySelectorAll(".remove_book").forEach((t=>{t.addEventListener("click",d)}))))}function d(t){const e=t.target.getAttribute("data-id");console.log(e);const n=l.filter((t=>t.id!==e));console.log(n),localStorage.setItem("shoppingList",JSON.stringify(n)),c=c.filter((t=>t._id!==e)),v(p.getCurrentPage())}function v(t){const e=(t-1)*f;h=[];for(let t=e;t<e+f;t++)h.push(c[t]);h=h.filter((t=>t)),g()}u.innerHTML=(0,s.createSkeletonShopList)(),(async()=>{const t=await a.getTopBooksList(),e=l.map((t=>t.id));c=t.reduce(((t,n)=>(n.books.forEach((n=>{e.includes(n._id)&&t.push(n)})),t)),[]),console.log(c);const n={totalItems:c.length,itemsPerPage:f,visiblePages:10,page:1,centerAlign:!1,firstItemClassName:"tui-first-child",lastItemClassName:"tui-last-child",template:{page:'<a href="#" class="tui-page-btn">{{page}}</a>',currentPage:'<strong class="tui-page-btn tui-is-selected">{{page}}</strong>',moveButton:'<a href="#" class="tui-page-btn tui-{{type}}"><span class="tui-ico-{{type}}">{{type}}</span></a>',disabledMoveButton:'<span class="tui-page-btn tui-is-disabled tui-{{type}}"><span class="tui-ico-{{type}}">{{type}}</span></span>',moreButton:'<a href="#" class="tui-page-btn tui-{{type}}-is-ellip"><span class="tui-ico-ellip">...</span></a>'}};0===c.length?document.querySelector(".tui-pagination").style.display="none":document.querySelector(".tui-pagination").style.display="block";const i=document.getElementById("pagination");p=new r(i,n),p.getCurrentPage(),v(p.getCurrentPage()),p.on("afterMove",(({page:t})=>v(t))),g()})(),i("lytXH"),i("7wtvP"),i("gPUC6"),i("69Uzn"),i("6kcu2"),i("coUSS"),i("2HRPV");
//# sourceMappingURL=shopping-list.281a1337.js.map
