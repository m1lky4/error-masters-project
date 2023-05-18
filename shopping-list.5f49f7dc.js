(function () {
var $parcel$global =
typeof globalThis !== 'undefined'
  ? globalThis
  : typeof self !== 'undefined'
  ? self
  : typeof window !== 'undefined'
  ? window
  : typeof global !== 'undefined'
  ? global
  : {};
var $parcel$modules = {};
var $parcel$inits = {};

var parcelRequire = $parcel$global["parcelRequire64ec"];
if (parcelRequire == null) {
  parcelRequire = function(id) {
    if (id in $parcel$modules) {
      return $parcel$modules[id].exports;
    }
    if (id in $parcel$inits) {
      var init = $parcel$inits[id];
      delete $parcel$inits[id];
      var module = {id: id, exports: {}};
      $parcel$modules[id] = module;
      init.call(module.exports, module, module.exports);
      return module.exports;
    }
    var err = new Error("Cannot find module '" + id + "'");
    err.code = 'MODULE_NOT_FOUND';
    throw err;
  };

  parcelRequire.register = function register(id, init) {
    $parcel$inits[id] = init;
  };

  $parcel$global["parcelRequire64ec"] = parcelRequire;
}

var $h6vYM = parcelRequire("h6vYM");

var $3fc17 = parcelRequire("3fc17");
const $ac80e4835ee69e17$var$bookApi = new (0, $h6vYM.BookAPI)();
var $41b54132168ac5e1$exports = {};
/*!
 * TOAST UI Pagination
 * @version 3.4.1
 * @author NHN FE Development Team <dl_javascript@nhn.com>
 * @license MIT
 */ (function webpackUniversalModuleDefinition(root, factory) {
    $41b54132168ac5e1$exports = factory();
})(window, function() {
    return /******/ function(modules) {
        /******/ // The module cache
        /******/ var installedModules = {};
        /******/ /******/ // The require function
        /******/ function __webpack_require__(moduleId) {
            /******/ /******/ // Check if module is in cache
            /******/ if (installedModules[moduleId]) /******/ return installedModules[moduleId].exports;
            /******/ // Create a new module (and put it into the cache)
            /******/ var module1 = installedModules[moduleId] = {
                /******/ i: moduleId,
                /******/ l: false,
                /******/ exports: {}
            };
            /******/ /******/ // Execute the module function
            /******/ modules[moduleId].call(module1.exports, module1, module1.exports, __webpack_require__);
            /******/ /******/ // Flag the module as loaded
            /******/ module1.l = true;
            /******/ /******/ // Return the exports of the module
            /******/ return module1.exports;
        /******/ }
        /******/ /******/ /******/ // expose the modules object (__webpack_modules__)
        /******/ __webpack_require__.m = modules;
        /******/ /******/ // expose the module cache
        /******/ __webpack_require__.c = installedModules;
        /******/ /******/ // define getter function for harmony exports
        /******/ __webpack_require__.d = function(exports, name, getter) {
            /******/ if (!__webpack_require__.o(exports, name)) /******/ Object.defineProperty(exports, name, {
                enumerable: true,
                get: getter
            });
        /******/ };
        /******/ /******/ // define __esModule on exports
        /******/ __webpack_require__.r = function(exports) {
            /******/ if (typeof Symbol !== "undefined" && Symbol.toStringTag) /******/ Object.defineProperty(exports, Symbol.toStringTag, {
                value: "Module"
            });
            /******/ Object.defineProperty(exports, "__esModule", {
                value: true
            });
        /******/ };
        /******/ /******/ // create a fake namespace object
        /******/ // mode & 1: value is a module id, require it
        /******/ // mode & 2: merge all properties of value into the ns
        /******/ // mode & 4: return value when already ns object
        /******/ // mode & 8|1: behave like require
        /******/ __webpack_require__.t = function(value, mode) {
            /******/ if (mode & 1) value = __webpack_require__(value);
            /******/ if (mode & 8) return value;
            /******/ if (mode & 4 && typeof value === "object" && value && value.__esModule) return value;
            /******/ var ns = Object.create(null);
            /******/ __webpack_require__.r(ns);
            /******/ Object.defineProperty(ns, "default", {
                enumerable: true,
                value: value
            });
            /******/ if (mode & 2 && typeof value != "string") for(var key in value)__webpack_require__.d(ns, key, (function(key) {
                return value[key];
            }).bind(null, key));
            /******/ return ns;
        /******/ };
        /******/ /******/ // getDefaultExport function for compatibility with non-harmony modules
        /******/ __webpack_require__.n = function(module1) {
            /******/ var getter = module1 && module1.__esModule ? /******/ function getDefault() {
                return module1["default"];
            } : /******/ function getModuleExports() {
                return module1;
            };
            /******/ __webpack_require__.d(getter, "a", getter);
            /******/ return getter;
        /******/ };
        /******/ /******/ // Object.prototype.hasOwnProperty.call
        /******/ __webpack_require__.o = function(object, property) {
            return Object.prototype.hasOwnProperty.call(object, property);
        };
        /******/ /******/ // __webpack_public_path__
        /******/ __webpack_require__.p = "dist";
        /******/ /******/ /******/ // Load entry module and return exports
        /******/ return __webpack_require__(__webpack_require__.s = 10);
    /******/ }([
        /* 0 */ /***/ function(module1, exports, __webpack_require__) {
            "use strict";
            /**
 * @fileoverview Extend the target object from other objects.
 * @author NHN FE Development Lab <dl_javascript@nhn.com>
 */ /**
 * @module object
 */ /**
 * Extend the target object from other objects.
 * @param {object} target - Object that will be extended
 * @param {...object} objects - Objects as sources
 * @returns {object} Extended object
 * @memberof module:object
 */ function extend(target, objects) {
                var hasOwnProp = Object.prototype.hasOwnProperty;
                var source, prop, i, len;
                for(i = 1, len = arguments.length; i < len; i += 1){
                    source = arguments[i];
                    for(prop in source)if (hasOwnProp.call(source, prop)) target[prop] = source[prop];
                }
                return target;
            }
            module1.exports = extend;
        /***/ },
        /* 1 */ /***/ function(module1, exports, __webpack_require__) {
            "use strict";
            /**
 * @fileoverview Check whether the given variable is undefined or not.
 * @author NHN FE Development Lab <dl_javascript@nhn.com>
 */ /**
 * Check whether the given variable is undefined or not.
 * If the given variable is undefined, returns true.
 * @param {*} obj - Target for checking
 * @returns {boolean} Is undefined?
 * @memberof module:type
 */ function isUndefined(obj) {
                return obj === undefined; // eslint-disable-line no-undefined
            }
            module1.exports = isUndefined;
        /***/ },
        /* 2 */ /***/ function(module1, exports, __webpack_require__) {
            "use strict";
            /**
 * @fileoverview Check whether the given variable is an instance of Array or not.
 * @author NHN FE Development Lab <dl_javascript@nhn.com>
 */ /**
 * Check whether the given variable is an instance of Array or not.
 * If the given variable is an instance of Array, return true.
 * @param {*} obj - Target for checking
 * @returns {boolean} Is array instance?
 * @memberof module:type
 */ function isArray(obj) {
                return obj instanceof Array;
            }
            module1.exports = isArray;
        /***/ },
        /* 3 */ /***/ function(module1, exports, __webpack_require__) {
            "use strict";
            /**
 * @fileoverview Execute the provided callback once for each property of object(or element of array) which actually exist.
 * @author NHN FE Development Lab <dl_javascript@nhn.com>
 */ var isArray = __webpack_require__(2);
            var forEachArray = __webpack_require__(17);
            var forEachOwnProperties = __webpack_require__(6);
            /**
 * @module collection
 */ /**
 * Execute the provided callback once for each property of object(or element of array) which actually exist.
 * If the object is Array-like object(ex-arguments object), It needs to transform to Array.(see 'ex2' of example).
 * If the callback function returns false, the loop will be stopped.
 * Callback function(iteratee) is invoked with three arguments:
 *  1) The value of the property(or The value of the element)
 *  2) The name of the property(or The index of the element)
 *  3) The object being traversed
 * @param {Object} obj The object that will be traversed
 * @param {function} iteratee Callback function
 * @param {Object} [context] Context(this) of callback function
 * @memberof module:collection
 * @example
 * var forEach = require('tui-code-snippet/collection/forEach'); // node, commonjs
 *
 * var sum = 0;
 *
 * forEach([1,2,3], function(value){
 *     sum += value;
 * });
 * alert(sum); // 6
 *
 * // In case of Array-like object
 * var array = Array.prototype.slice.call(arrayLike); // change to array
 * forEach(array, function(value){
 *     sum += value;
 * });
 */ function forEach(obj, iteratee, context) {
                if (isArray(obj)) forEachArray(obj, iteratee, context);
                else forEachOwnProperties(obj, iteratee, context);
            }
            module1.exports = forEach;
        /***/ },
        /* 4 */ /***/ function(module1, exports, __webpack_require__) {
            "use strict";
            /**
 * @fileoverview Check whether the given variable is a string or not.
 * @author NHN FE Development Lab <dl_javascript@nhn.com>
 */ /**
 * Check whether the given variable is a string or not.
 * If the given variable is a string, return true.
 * @param {*} obj - Target for checking
 * @returns {boolean} Is string?
 * @memberof module:type
 */ function isString(obj) {
                return typeof obj === "string" || obj instanceof String;
            }
            module1.exports = isString;
        /***/ },
        /* 5 */ /***/ function(module1, exports, __webpack_require__) {
            "use strict";
            /**
 * @fileoverview Check whether the given variable is a function or not.
 * @author NHN FE Development Lab <dl_javascript@nhn.com>
 */ /**
 * Check whether the given variable is a function or not.
 * If the given variable is a function, return true.
 * @param {*} obj - Target for checking
 * @returns {boolean} Is function?
 * @memberof module:type
 */ function isFunction(obj) {
                return obj instanceof Function;
            }
            module1.exports = isFunction;
        /***/ },
        /* 6 */ /***/ function(module1, exports, __webpack_require__) {
            "use strict";
            /**
 * @fileoverview Execute the provided callback once for each property of object which actually exist.
 * @author NHN FE Development Lab <dl_javascript@nhn.com>
 */ /**
 * Execute the provided callback once for each property of object which actually exist.
 * If the callback function returns false, the loop will be stopped.
 * Callback function(iteratee) is invoked with three arguments:
 *  1) The value of the property
 *  2) The name of the property
 *  3) The object being traversed
 * @param {Object} obj The object that will be traversed
 * @param {function} iteratee  Callback function
 * @param {Object} [context] Context(this) of callback function
 * @memberof module:collection
 * @example
 * var forEachOwnProperties = require('tui-code-snippet/collection/forEachOwnProperties'); // node, commonjs
 *
 * var sum = 0;
 *
 * forEachOwnProperties({a:1,b:2,c:3}, function(value){
 *     sum += value;
 * });
 * alert(sum); // 6
 */ function forEachOwnProperties(obj, iteratee, context) {
                var key;
                context = context || null;
                for(key in obj)if (obj.hasOwnProperty(key)) {
                    if (iteratee.call(context, obj[key], key, obj) === false) break;
                }
            }
            module1.exports = forEachOwnProperties;
        /***/ },
        /* 7 */ /***/ function(module1, exports, __webpack_require__) {
            "use strict";
            /**
 * @fileoverview
 * This module provides a function to make a constructor
 * that can inherit from the other constructors like the CLASS easily.
 * @author NHN FE Development Lab <dl_javascript@nhn.com>
 */ var inherit = __webpack_require__(18);
            var extend = __webpack_require__(0);
            /**
 * @module defineClass
 */ /**
 * Help a constructor to be defined and to inherit from the other constructors
 * @param {*} [parent] Parent constructor
 * @param {Object} props Members of constructor
 *  @param {Function} props.init Initialization method
 *  @param {Object} [props.static] Static members of constructor
 * @returns {*} Constructor
 * @memberof module:defineClass
 * @example
 * var defineClass = require('tui-code-snippet/defineClass/defineClass'); // node, commonjs
 *
 * //-- #2. Use property --//
 * var Parent = defineClass({
 *     init: function() { // constuructor
 *         this.name = 'made by def';
 *     },
 *     method: function() {
 *         // ...
 *     },
 *     static: {
 *         staticMethod: function() {
 *              // ...
 *         }
 *     }
 * });
 *
 * var Child = defineClass(Parent, {
 *     childMethod: function() {}
 * });
 *
 * Parent.staticMethod();
 *
 * var parentInstance = new Parent();
 * console.log(parentInstance.name); //made by def
 * parentInstance.staticMethod(); // Error
 *
 * var childInstance = new Child();
 * childInstance.method();
 * childInstance.childMethod();
 */ function defineClass(parent, props) {
                var obj;
                if (!props) {
                    props = parent;
                    parent = null;
                }
                obj = props.init || function() {};
                if (parent) inherit(obj, parent);
                if (props.hasOwnProperty("static")) {
                    extend(obj, props["static"]);
                    delete props["static"];
                }
                extend(obj.prototype, props);
                return obj;
            }
            module1.exports = defineClass;
        /***/ },
        /* 8 */ /***/ function(module1, exports, __webpack_require__) {
            "use strict";
            /* eslint-disable complexity */ /**
 * @fileoverview Returns the first index at which a given element can be found in the array.
 * @author NHN FE Development Lab <dl_javascript@nhn.com>
 */ var isArray = __webpack_require__(2);
            /**
 * @module array
 */ /**
 * Returns the first index at which a given element can be found in the array
 * from start index(default 0), or -1 if it is not present.
 * It compares searchElement to elements of the Array using strict equality
 * (the same method used by the ===, or triple-equals, operator).
 * @param {*} searchElement Element to locate in the array
 * @param {Array} array Array that will be traversed.
 * @param {number} startIndex Start index in array for searching (default 0)
 * @returns {number} the First index at which a given element, or -1 if it is not present
 * @memberof module:array
 * @example
 * var inArray = require('tui-code-snippet/array/inArray'); // node, commonjs
 *
 * var arr = ['one', 'two', 'three', 'four'];
 * var idx1 = inArray('one', arr, 3); // -1
 * var idx2 = inArray('one', arr); // 0
 */ function inArray(searchElement, array, startIndex) {
                var i;
                var length;
                startIndex = startIndex || 0;
                if (!isArray(array)) return -1;
                if (Array.prototype.indexOf) return Array.prototype.indexOf.call(array, searchElement, startIndex);
                length = array.length;
                for(i = startIndex; startIndex >= 0 && i < length; i += 1){
                    if (array[i] === searchElement) return i;
                }
                return -1;
            }
            module1.exports = inArray;
        /***/ },
        /* 9 */ /***/ function(module1, exports, __webpack_require__) {
            "use strict";
            var template = __webpack_require__(29);
            var sendHostname = __webpack_require__(30);
            var isFunction = __webpack_require__(5);
            var util = {
                /**
   * Capitalize first letter
   * @param {string} str - String to change
   * @returns {string} Changed string
   */ capitalizeFirstLetter: function(str) {
                    return str.substring(0, 1).toUpperCase() + str.substring(1, str.length);
                },
                /**
   * Check the element is contained
   * @param {HTMLElement} find - Target element
   * @param {HTMLElement} parent - Wrapper element
   * @returns {boolean} Whether contained or not
   */ isContained: function(find, parent) {
                    if (!parent) return false;
                    return find === parent ? true : parent.contains(find);
                },
                /**
   * Create an new element by template literals.
   * @param {string|function} tmpl - template
   * @param {Object} context - context
   * @returns {HTMLElement}
   */ createElementByTemplate: function(tmpl, context) {
                    var parent = document.createElement("div");
                    var html = isFunction(tmpl) ? tmpl(context) : template(tmpl, context);
                    parent.innerHTML = html;
                    return parent.firstChild;
                },
                /**
   * Create a new function that, when called, has its this keyword set to the provided value.
   * @param {function} fn A original function before binding
   * @param {*} obj context of function in arguments[0]
   * @returns {function} A new bound function with context that is in arguments[1]
   */ bind: function(fn, obj) {
                    var slice = Array.prototype.slice;
                    var args;
                    if (fn.bind) return fn.bind.apply(fn, slice.call(arguments, 1));
                    args = slice.call(arguments, 2);
                    return function() {
                        return fn.apply(obj, args.length ? args.concat(slice.call(arguments)) : arguments);
                    };
                },
                /**
   * Send hostname for GA
   * @ignore
   */ sendHostName: function() {
                    sendHostname("pagination", "UA-129987462-1");
                }
            };
            module1.exports = util;
        /***/ },
        /* 10 */ /***/ function(module1, exports, __webpack_require__) {
            "use strict";
            /**
 * @fileoverview The entry file of Pagination components
 * @author NHN. FE Development Lab <dl_javascript@nhn.com>
 */ __webpack_require__(11);
            module1.exports = __webpack_require__(12);
        /***/ },
        /* 11 */ /***/ function(module1, exports, __webpack_require__) {
        // extracted by mini-css-extract-plugin
        /***/ },
        /* 12 */ /***/ function(module1, exports, __webpack_require__) {
            "use strict";
            var CustomEvents = __webpack_require__(13);
            var defineClass = __webpack_require__(7);
            var extend = __webpack_require__(0);
            var isUndefined = __webpack_require__(1);
            var View = __webpack_require__(20);
            var util = __webpack_require__(9);
            var defaultOption = {
                totalItems: 10,
                itemsPerPage: 10,
                visiblePages: 10,
                page: 1,
                centerAlign: false,
                firstItemClassName: "tui-first-child",
                lastItemClassName: "tui-last-child",
                usageStatistics: true
            };
            /**
 * Pagination class
 * @class Pagination
 * @param {string|HTMLElement|jQueryObject} container - Container element or selector.
 * In case of a string, it is considered as an id selector and find the element by id.
 * If there is no element, it is considered as a selector and find the element by querySelector().
 * Passing jQueryObject and considering an id selector at first will be deprecated in v4.0.0.
 * @param {object} options - Option object
 *     @param {number} [options.totalItems=10] Total item count
 *     @param {number} [options.itemsPerPage=10] Item count per page
 *     @param {number} [options.visiblePages=10] Display page link count
 *     @param {number} [options.page=1] Display page after pagination draw.
 *     @param {boolean}[options.centerAlign=false] Whether current page keep center or not
 *     @param {string} [options.firstItemClassName='first-child'] The class name of the first item
 *     @param {string} [options.lastItemClassName='last-child'] The class name of the last item
 *     @param {object} [options.template] A markup string set to make element. Refer to {@link https://github.com/nhn/tui.pagination/blob/master/docs/getting-started.md#how-to-use-template Getting Started: How to use template}.
 *         @param {string|function} [options.template.page] HTML template
 *         @param {string|function} [options.template.currentPage] HTML template
 *         @param {string|function} [options.template.moveButton] HTML template
 *         @param {string|function} [options.template.disabledMoveButton] HTML template
 *         @param {string|function} [options.template.moreButton] HTML template
 *     @param {boolean} [options.usageStatistics=true] Send the hostname to google analytics.
 *         If you do not want to send the hostname, this option set to false.
 * @example
 * // ES6
 * import Pagination from 'tui-pagination';
 *
 * // CommonJS
 * const Pagination = require('tui-pagination');
 *
 * // Browser
 * const Pagination = tui.Pagination;
 *
 * const container = document.getElementById('pagination');
 * const options = { // below default value of options
 *      totalItems: 10,
 *      itemsPerPage: 10,
 *      visiblePages: 10,
 *      page: 1,
 *      centerAlign: false,
 *      firstItemClassName: 'tui-first-child',
 *      lastItemClassName: 'tui-last-child',
 *      template: {
 *          page: '<a href="#" class="tui-page-btn">{{page}}</a>',
 *          currentPage: '<strong class="tui-page-btn tui-is-selected">{{page}}</strong>',
 *          moveButton:
 *              '<a href="#" class="tui-page-btn tui-{{type}}">' +
 *                  '<span class="tui-ico-{{type}}">{{type}}</span>' +
 *              '</a>',
 *          disabledMoveButton:
 *              '<span class="tui-page-btn tui-is-disabled tui-{{type}}">' +
 *                  '<span class="tui-ico-{{type}}">{{type}}</span>' +
 *              '</span>',
 *          moreButton:
 *              '<a href="#" class="tui-page-btn tui-{{type}}-is-ellip">' +
 *                  '<span class="tui-ico-ellip">...</span>' +
 *              '</a>'
 *      }
 * };
 * const pagination = new Pagination(container, options);
 */ var Pagination = defineClass(/** @lends Pagination.prototype */ {
                init: function(container, options) {
                    /**
       * Option object
       * @type {object}
       * @private
       */ this._options = extend({}, defaultOption, options);
                    /**
       * Current page number
       * @type {number}
       * @private
       */ this._currentPage = 0;
                    /**
       * View instance
       * @type {View}
       * @private
       */ this._view = new View(container, this._options, util.bind(this._onClickHandler, this));
                    this._paginate();
                    if (this._options.usageStatistics) util.sendHostName();
                },
                /**
     * Set current page
     * @param {number} page - Current page
     * @private
     */ _setCurrentPage: function(page) {
                    this._currentPage = page || this._options.page;
                },
                /**
     * Get last page number
     * @returns {number} Last page number
     * @private
     */ _getLastPage: function() {
                    var lastPage = Math.ceil(this._options.totalItems / this._options.itemsPerPage);
                    return !lastPage ? 1 : lastPage;
                },
                /**
     * Index of list in total lists
     * @param {number} pageNumber - Page number
     * @returns {number} Page index or number
     * @private
     */ _getPageIndex: function(pageNumber) {
                    var left, pageIndex;
                    if (this._options.centerAlign) {
                        left = Math.floor(this._options.visiblePages / 2);
                        pageIndex = pageNumber - left;
                        pageIndex = Math.max(pageIndex, 1);
                        pageIndex = Math.min(pageIndex, this._getLastPage() - this._options.visiblePages + 1);
                        return pageIndex;
                    }
                    return Math.ceil(pageNumber / this._options.visiblePages);
                },
                /**
     * Get relative page
     * @param {string} moveType - Move type ('prev' or 'next')
     * @returns {number} Relative page number
     * @private
     */ _getRelativePage: function(moveType) {
                    var isPrevMove = moveType === "prev";
                    var currentPage = this.getCurrentPage();
                    return isPrevMove ? currentPage - 1 : currentPage + 1;
                },
                /**
     * Get more page index
     * @param {string} moveType - Move type ('prev' or 'next')
     * @returns {number} Page index
     * @private
     */ _getMorePageIndex: function(moveType) {
                    var currentPageIndex = this._getPageIndex(this.getCurrentPage());
                    var pageCount = this._options.visiblePages;
                    var isPrevMove = moveType === "prev";
                    var pageIndex;
                    if (this._options.centerAlign) pageIndex = isPrevMove ? currentPageIndex - 1 : currentPageIndex + pageCount;
                    else pageIndex = isPrevMove ? (currentPageIndex - 1) * pageCount : currentPageIndex * pageCount + 1;
                    return pageIndex;
                },
                /* eslint-enable complexity */ /**
     * Get available page number from over number
     * If total page is 23, but input number is 30 => return 23
     * @param {number} page - Page number
     * @returns {number} Replaced pgae number
     * @private
     */ _convertToValidPage: function(page) {
                    var lastPageNumber = this._getLastPage();
                    page = Math.max(page, 1);
                    page = Math.min(page, lastPageNumber);
                    return page;
                },
                /**
     * Create require view set, notify view to update
     * @param {number} page - Page number
     * @private
     */ _paginate: function(page) {
                    var viewData = this._makeViewData(page || this._options.page);
                    this._setCurrentPage(page);
                    this._view.update(viewData);
                },
                /**
     * Create and get view data
     * @param {number} page - Page number
     * @returns {object} view data
     * @private
     */ _makeViewData: function(page) {
                    var viewData = {};
                    var lastPage = this._getLastPage();
                    var currentPageIndex = this._getPageIndex(page);
                    var lastPageListIndex = this._getPageIndex(lastPage);
                    var edges = this._getEdge(page);
                    viewData.leftPageNumber = edges.left;
                    viewData.rightPageNumber = edges.right;
                    viewData.prevMore = currentPageIndex > 1;
                    viewData.nextMore = currentPageIndex < lastPageListIndex;
                    viewData.page = page;
                    viewData.currentPageIndex = page;
                    viewData.lastPage = lastPage;
                    viewData.lastPageListIndex = lastPage;
                    return viewData;
                },
                /**
     * Get each edge page
     * @param {object} page - Page number
     * @returns {{left: number, right: number}} Edge page numbers
     * @private
     */ _getEdge: function(page) {
                    var leftPageNumber, rightPageNumber, left;
                    var lastPage = this._getLastPage();
                    var visiblePages = this._options.visiblePages;
                    var currentPageIndex = this._getPageIndex(page);
                    if (this._options.centerAlign) {
                        left = Math.floor(visiblePages / 2);
                        leftPageNumber = Math.max(page - left, 1);
                        rightPageNumber = leftPageNumber + visiblePages - 1;
                        if (rightPageNumber > lastPage) {
                            leftPageNumber = Math.max(lastPage - visiblePages + 1, 1);
                            rightPageNumber = lastPage;
                        }
                    } else {
                        leftPageNumber = (currentPageIndex - 1) * visiblePages + 1;
                        rightPageNumber = currentPageIndex * visiblePages;
                        rightPageNumber = Math.min(rightPageNumber, lastPage);
                    }
                    return {
                        left: leftPageNumber,
                        right: rightPageNumber
                    };
                },
                /**
     * Pagelist click event hadnler
     * @param {?string} buttonType - Button type
     * @param {?number} page - Page number
     * @private
     */ /* eslint-disable complexity */ _onClickHandler: function(buttonType, page) {
                    switch(buttonType){
                        case "first":
                            page = 1;
                            break;
                        case "prev":
                            page = this._getRelativePage("prev");
                            break;
                        case "next":
                            page = this._getRelativePage("next");
                            break;
                        case "prevMore":
                            page = this._getMorePageIndex("prev");
                            break;
                        case "nextMore":
                            page = this._getMorePageIndex("next");
                            break;
                        case "last":
                            page = this._getLastPage();
                            break;
                        default:
                            if (!page) return;
                    }
                    this.movePageTo(page);
                },
                /* eslint-enable complexity */ /**
     * Reset pagination
     * @param {*} totalItems - Redraw page item count
     * @example
     * pagination.reset();
     * pagination.reset(100);
     */ reset: function(totalItems) {
                    if (isUndefined(totalItems)) totalItems = this._options.totalItems;
                    this._options.totalItems = totalItems;
                    this._paginate(1);
                },
                /**
     * Move to specific page, redraw list.
     * Before move fire beforeMove event, After move fire afterMove event.
     * @param {Number} targetPage - Target page
     * @example
     * pagination.movePageTo(10);
     */ movePageTo: function(targetPage) {
                    targetPage = this._convertToValidPage(targetPage);
                    /**
       * @event Pagination#beforeMove
       * @type {object} evt - Custom event object
       * @property {number} page - Moved page
       * @example
       * paganation.on('beforeMove', (event) => {
       *     const currentPage = event.page;
       *
       *     if (currentPage === 10) {
       *         return false;
       *         // return true;
       *     }
       * });
       */ if (!this.invoke("beforeMove", {
                        page: targetPage
                    })) return;
                    this._paginate(targetPage);
                    /**
       * @event Pagination#afterMove
       * @type {object} evt - Custom event object
       * @property {number} page - Moved page
       * @example
       * paganation.on('afterMove', (event) => {
       *      const currentPage = event.page;
       *      console.log(currentPage);
       * });
       */ this.fire("afterMove", {
                        page: targetPage
                    });
                },
                /**
     * Set total count of items
     * @param {number} itemCount - Total item count
     */ setTotalItems: function(itemCount) {
                    this._options.totalItems = itemCount;
                },
                /**
     * Set count of items per page
     * @param {number} itemCount - Item count
     */ setItemsPerPage: function(itemCount) {
                    this._options.itemsPerPage = itemCount;
                },
                /**
     * Get current page
     * @returns {number} Current page
     */ getCurrentPage: function() {
                    return this._currentPage || this._options.page;
                }
            });
            CustomEvents.mixin(Pagination);
            module1.exports = Pagination;
        /***/ },
        /* 13 */ /***/ function(module1, exports, __webpack_require__) {
            "use strict";
            /**
 * @fileoverview This module provides some functions for custom events. And it is implemented in the observer design pattern.
 * @author NHN FE Development Lab <dl_javascript@nhn.com>
 */ var extend = __webpack_require__(0);
            var isExisty = __webpack_require__(14);
            var isString = __webpack_require__(4);
            var isObject = __webpack_require__(16);
            var isArray = __webpack_require__(2);
            var isFunction = __webpack_require__(5);
            var forEach = __webpack_require__(3);
            var R_EVENTNAME_SPLIT = /\s+/g;
            /**
 * @class
 * @example
 * // node, commonjs
 * var CustomEvents = require('tui-code-snippet/customEvents/customEvents');
 */ function CustomEvents() {
                /**
     * @type {HandlerItem[]}
     */ this.events = null;
                /**
     * only for checking specific context event was binded
     * @type {object[]}
     */ this.contexts = null;
            }
            /**
 * Mixin custom events feature to specific constructor
 * @param {function} func - constructor
 * @example
 * var CustomEvents = require('tui-code-snippet/customEvents/customEvents'); // node, commonjs
 *
 * var model;
 * function Model() {
 *     this.name = '';
 * }
 * CustomEvents.mixin(Model);
 *
 * model = new Model();
 * model.on('change', function() { this.name = 'model'; }, this);
 * model.fire('change');
 * alert(model.name); // 'model';
 */ CustomEvents.mixin = function(func) {
                extend(func.prototype, CustomEvents.prototype);
            };
            /**
 * Get HandlerItem object
 * @param {function} handler - handler function
 * @param {object} [context] - context for handler
 * @returns {HandlerItem} HandlerItem object
 * @private
 */ CustomEvents.prototype._getHandlerItem = function(handler, context) {
                var item = {
                    handler: handler
                };
                if (context) item.context = context;
                return item;
            };
            /**
 * Get event object safely
 * @param {string} [eventName] - create sub event map if not exist.
 * @returns {(object|array)} event object. if you supplied `eventName`
 *  parameter then make new array and return it
 * @private
 */ CustomEvents.prototype._safeEvent = function(eventName) {
                var events = this.events;
                var byName;
                if (!events) events = this.events = {};
                if (eventName) {
                    byName = events[eventName];
                    if (!byName) {
                        byName = [];
                        events[eventName] = byName;
                    }
                    events = byName;
                }
                return events;
            };
            /**
 * Get context array safely
 * @returns {array} context array
 * @private
 */ CustomEvents.prototype._safeContext = function() {
                var context = this.contexts;
                if (!context) context = this.contexts = [];
                return context;
            };
            /**
 * Get index of context
 * @param {object} ctx - context that used for bind custom event
 * @returns {number} index of context
 * @private
 */ CustomEvents.prototype._indexOfContext = function(ctx) {
                var context = this._safeContext();
                var index = 0;
                while(context[index]){
                    if (ctx === context[index][0]) return index;
                    index += 1;
                }
                return -1;
            };
            /**
 * Memorize supplied context for recognize supplied object is context or
 *  name: handler pair object when off()
 * @param {object} ctx - context object to memorize
 * @private
 */ CustomEvents.prototype._memorizeContext = function(ctx) {
                var context, index;
                if (!isExisty(ctx)) return;
                context = this._safeContext();
                index = this._indexOfContext(ctx);
                if (index > -1) context[index][1] += 1;
                else context.push([
                    ctx,
                    1
                ]);
            };
            /**
 * Forget supplied context object
 * @param {object} ctx - context object to forget
 * @private
 */ CustomEvents.prototype._forgetContext = function(ctx) {
                var context, contextIndex;
                if (!isExisty(ctx)) return;
                context = this._safeContext();
                contextIndex = this._indexOfContext(ctx);
                if (contextIndex > -1) {
                    context[contextIndex][1] -= 1;
                    if (context[contextIndex][1] <= 0) context.splice(contextIndex, 1);
                }
            };
            /**
 * Bind event handler
 * @param {(string|{name:string, handler:function})} eventName - custom
 *  event name or an object {eventName: handler}
 * @param {(function|object)} [handler] - handler function or context
 * @param {object} [context] - context for binding
 * @private
 */ CustomEvents.prototype._bindEvent = function(eventName, handler, context) {
                var events = this._safeEvent(eventName);
                this._memorizeContext(context);
                events.push(this._getHandlerItem(handler, context));
            };
            /**
 * Bind event handlers
 * @param {(string|{name:string, handler:function})} eventName - custom
 *  event name or an object {eventName: handler}
 * @param {(function|object)} [handler] - handler function or context
 * @param {object} [context] - context for binding
 * //-- #1. Get Module --//
 * var CustomEvents = require('tui-code-snippet/customEvents/customEvents'); // node, commonjs
 *
 * //-- #2. Use method --//
 * // # 2.1 Basic Usage
 * CustomEvents.on('onload', handler);
 *
 * // # 2.2 With context
 * CustomEvents.on('onload', handler, myObj);
 *
 * // # 2.3 Bind by object that name, handler pairs
 * CustomEvents.on({
 *     'play': handler,
 *     'pause': handler2
 * });
 *
 * // # 2.4 Bind by object that name, handler pairs with context object
 * CustomEvents.on({
 *     'play': handler
 * }, myObj);
 */ CustomEvents.prototype.on = function(eventName, handler, context) {
                var self = this;
                if (isString(eventName)) {
                    // [syntax 1, 2]
                    eventName = eventName.split(R_EVENTNAME_SPLIT);
                    forEach(eventName, function(name) {
                        self._bindEvent(name, handler, context);
                    });
                } else if (isObject(eventName)) {
                    // [syntax 3, 4]
                    context = handler;
                    forEach(eventName, function(func, name) {
                        self.on(name, func, context);
                    });
                }
            };
            /**
 * Bind one-shot event handlers
 * @param {(string|{name:string,handler:function})} eventName - custom
 *  event name or an object {eventName: handler}
 * @param {function|object} [handler] - handler function or context
 * @param {object} [context] - context for binding
 */ CustomEvents.prototype.once = function(eventName, handler, context) {
                var self = this;
                if (isObject(eventName)) {
                    context = handler;
                    forEach(eventName, function(func, name) {
                        self.once(name, func, context);
                    });
                    return;
                }
                function onceHandler() {
                    handler.apply(context, arguments);
                    self.off(eventName, onceHandler, context);
                }
                this.on(eventName, onceHandler, context);
            };
            /**
 * Splice supplied array by callback result
 * @param {array} arr - array to splice
 * @param {function} predicate - function return boolean
 * @private
 */ CustomEvents.prototype._spliceMatches = function(arr, predicate) {
                var i = 0;
                var len;
                if (!isArray(arr)) return;
                for(len = arr.length; i < len; i += 1)if (predicate(arr[i]) === true) {
                    arr.splice(i, 1);
                    len -= 1;
                    i -= 1;
                }
            };
            /**
 * Get matcher for unbind specific handler events
 * @param {function} handler - handler function
 * @returns {function} handler matcher
 * @private
 */ CustomEvents.prototype._matchHandler = function(handler) {
                var self = this;
                return function(item) {
                    var needRemove = handler === item.handler;
                    if (needRemove) self._forgetContext(item.context);
                    return needRemove;
                };
            };
            /**
 * Get matcher for unbind specific context events
 * @param {object} context - context
 * @returns {function} object matcher
 * @private
 */ CustomEvents.prototype._matchContext = function(context) {
                var self = this;
                return function(item) {
                    var needRemove = context === item.context;
                    if (needRemove) self._forgetContext(item.context);
                    return needRemove;
                };
            };
            /**
 * Get matcher for unbind specific hander, context pair events
 * @param {function} handler - handler function
 * @param {object} context - context
 * @returns {function} handler, context matcher
 * @private
 */ CustomEvents.prototype._matchHandlerAndContext = function(handler, context) {
                var self = this;
                return function(item) {
                    var matchHandler = handler === item.handler;
                    var matchContext = context === item.context;
                    var needRemove = matchHandler && matchContext;
                    if (needRemove) self._forgetContext(item.context);
                    return needRemove;
                };
            };
            /**
 * Unbind event by event name
 * @param {string} eventName - custom event name to unbind
 * @param {function} [handler] - handler function
 * @private
 */ CustomEvents.prototype._offByEventName = function(eventName, handler) {
                var self = this;
                var andByHandler = isFunction(handler);
                var matchHandler = self._matchHandler(handler);
                eventName = eventName.split(R_EVENTNAME_SPLIT);
                forEach(eventName, function(name) {
                    var handlerItems = self._safeEvent(name);
                    if (andByHandler) self._spliceMatches(handlerItems, matchHandler);
                    else {
                        forEach(handlerItems, function(item) {
                            self._forgetContext(item.context);
                        });
                        self.events[name] = [];
                    }
                });
            };
            /**
 * Unbind event by handler function
 * @param {function} handler - handler function
 * @private
 */ CustomEvents.prototype._offByHandler = function(handler) {
                var self = this;
                var matchHandler = this._matchHandler(handler);
                forEach(this._safeEvent(), function(handlerItems) {
                    self._spliceMatches(handlerItems, matchHandler);
                });
            };
            /**
 * Unbind event by object(name: handler pair object or context object)
 * @param {object} obj - context or {name: handler} pair object
 * @param {function} handler - handler function
 * @private
 */ CustomEvents.prototype._offByObject = function(obj, handler) {
                var self = this;
                var matchFunc;
                if (this._indexOfContext(obj) < 0) forEach(obj, function(func, name) {
                    self.off(name, func);
                });
                else if (isString(handler)) {
                    matchFunc = this._matchContext(obj);
                    self._spliceMatches(this._safeEvent(handler), matchFunc);
                } else if (isFunction(handler)) {
                    matchFunc = this._matchHandlerAndContext(handler, obj);
                    forEach(this._safeEvent(), function(handlerItems) {
                        self._spliceMatches(handlerItems, matchFunc);
                    });
                } else {
                    matchFunc = this._matchContext(obj);
                    forEach(this._safeEvent(), function(handlerItems) {
                        self._spliceMatches(handlerItems, matchFunc);
                    });
                }
            };
            /**
 * Unbind custom events
 * @param {(string|object|function)} eventName - event name or context or
 *  {name: handler} pair object or handler function
 * @param {(function)} handler - handler function
 * @example
 * //-- #1. Get Module --//
 * var CustomEvents = require('tui-code-snippet/customEvents/customEvents'); // node, commonjs
 *
 * //-- #2. Use method --//
 * // # 2.1 off by event name
 * CustomEvents.off('onload');
 *
 * // # 2.2 off by event name and handler
 * CustomEvents.off('play', handler);
 *
 * // # 2.3 off by handler
 * CustomEvents.off(handler);
 *
 * // # 2.4 off by context
 * CustomEvents.off(myObj);
 *
 * // # 2.5 off by context and handler
 * CustomEvents.off(myObj, handler);
 *
 * // # 2.6 off by context and event name
 * CustomEvents.off(myObj, 'onload');
 *
 * // # 2.7 off by an Object.<string, function> that is {eventName: handler}
 * CustomEvents.off({
 *   'play': handler,
 *   'pause': handler2
 * });
 *
 * // # 2.8 off the all events
 * CustomEvents.off();
 */ CustomEvents.prototype.off = function(eventName, handler) {
                if (isString(eventName)) // [syntax 1, 2]
                this._offByEventName(eventName, handler);
                else if (!arguments.length) {
                    // [syntax 8]
                    this.events = {};
                    this.contexts = [];
                } else if (isFunction(eventName)) // [syntax 3]
                this._offByHandler(eventName);
                else if (isObject(eventName)) // [syntax 4, 5, 6]
                this._offByObject(eventName, handler);
            };
            /**
 * Fire custom event
 * @param {string} eventName - name of custom event
 */ CustomEvents.prototype.fire = function(eventName) {
                this.invoke.apply(this, arguments);
            };
            /**
 * Fire a event and returns the result of operation 'boolean AND' with all
 *  listener's results.
 *
 * So, It is different from {@link CustomEvents#fire}.
 *
 * In service code, use this as a before event in component level usually
 *  for notifying that the event is cancelable.
 * @param {string} eventName - Custom event name
 * @param {...*} data - Data for event
 * @returns {boolean} The result of operation 'boolean AND'
 * @example
 * var map = new Map();
 * map.on({
 *     'beforeZoom': function() {
 *         // It should cancel the 'zoom' event by some conditions.
 *         if (that.disabled && this.getState()) {
 *             return false;
 *         }
 *         return true;
 *     }
 * });
 *
 * if (this.invoke('beforeZoom')) {    // check the result of 'beforeZoom'
 *     // if true,
 *     // doSomething
 * }
 */ CustomEvents.prototype.invoke = function(eventName) {
                var events, args, index, item;
                if (!this.hasListener(eventName)) return true;
                events = this._safeEvent(eventName);
                args = Array.prototype.slice.call(arguments, 1);
                index = 0;
                while(events[index]){
                    item = events[index];
                    if (item.handler.apply(item.context, args) === false) return false;
                    index += 1;
                }
                return true;
            };
            /**
 * Return whether at least one of the handlers is registered in the given
 *  event name.
 * @param {string} eventName - Custom event name
 * @returns {boolean} Is there at least one handler in event name?
 */ CustomEvents.prototype.hasListener = function(eventName) {
                return this.getListenerLength(eventName) > 0;
            };
            /**
 * Return a count of events registered.
 * @param {string} eventName - Custom event name
 * @returns {number} number of event
 */ CustomEvents.prototype.getListenerLength = function(eventName) {
                var events = this._safeEvent(eventName);
                return events.length;
            };
            module1.exports = CustomEvents;
        /***/ },
        /* 14 */ /***/ function(module1, exports, __webpack_require__) {
            "use strict";
            /**
 * @fileoverview Check whether the given variable is existing or not.
 * @author NHN FE Development Lab <dl_javascript@nhn.com>
 */ var isUndefined = __webpack_require__(1);
            var isNull = __webpack_require__(15);
            /**
 * Check whether the given variable is existing or not.
 * If the given variable is not null and not undefined, returns true.
 * @param {*} param - Target for checking
 * @returns {boolean} Is existy?
 * @memberof module:type
 * @example
 * var isExisty = require('tui-code-snippet/type/isExisty'); // node, commonjs
 *
 * isExisty(''); //true
 * isExisty(0); //true
 * isExisty([]); //true
 * isExisty({}); //true
 * isExisty(null); //false
 * isExisty(undefined); //false
*/ function isExisty(param) {
                return !isUndefined(param) && !isNull(param);
            }
            module1.exports = isExisty;
        /***/ },
        /* 15 */ /***/ function(module1, exports, __webpack_require__) {
            "use strict";
            /**
 * @fileoverview Check whether the given variable is null or not.
 * @author NHN FE Development Lab <dl_javascript@nhn.com>
 */ /**
 * Check whether the given variable is null or not.
 * If the given variable(arguments[0]) is null, returns true.
 * @param {*} obj - Target for checking
 * @returns {boolean} Is null?
 * @memberof module:type
 */ function isNull(obj) {
                return obj === null;
            }
            module1.exports = isNull;
        /***/ },
        /* 16 */ /***/ function(module1, exports, __webpack_require__) {
            "use strict";
            /**
 * @fileoverview Check whether the given variable is an object or not.
 * @author NHN FE Development Lab <dl_javascript@nhn.com>
 */ /**
 * Check whether the given variable is an object or not.
 * If the given variable is an object, return true.
 * @param {*} obj - Target for checking
 * @returns {boolean} Is object?
 * @memberof module:type
 */ function isObject(obj) {
                return obj === Object(obj);
            }
            module1.exports = isObject;
        /***/ },
        /* 17 */ /***/ function(module1, exports, __webpack_require__) {
            "use strict";
            /**
 * @fileoverview Execute the provided callback once for each element present in the array(or Array-like object) in ascending order.
 * @author NHN FE Development Lab <dl_javascript@nhn.com>
 */ /**
 * Execute the provided callback once for each element present
 * in the array(or Array-like object) in ascending order.
 * If the callback function returns false, the loop will be stopped.
 * Callback function(iteratee) is invoked with three arguments:
 *  1) The value of the element
 *  2) The index of the element
 *  3) The array(or Array-like object) being traversed
 * @param {Array|Arguments|NodeList} arr The array(or Array-like object) that will be traversed
 * @param {function} iteratee Callback function
 * @param {Object} [context] Context(this) of callback function
 * @memberof module:collection
 * @example
 * var forEachArray = require('tui-code-snippet/collection/forEachArray'); // node, commonjs
 *
 * var sum = 0;
 *
 * forEachArray([1,2,3], function(value){
 *     sum += value;
 * });
 * alert(sum); // 6
 */ function forEachArray(arr, iteratee, context) {
                var index = 0;
                var len = arr.length;
                context = context || null;
                for(; index < len; index += 1){
                    if (iteratee.call(context, arr[index], index, arr) === false) break;
                }
            }
            module1.exports = forEachArray;
        /***/ },
        /* 18 */ /***/ function(module1, exports, __webpack_require__) {
            "use strict";
            /**
 * @fileoverview Provide a simple inheritance in prototype-oriented.
 * @author NHN FE Development Lab <dl_javascript@nhn.com>
 */ var createObject = __webpack_require__(19);
            /**
 * Provide a simple inheritance in prototype-oriented.
 * Caution :
 *  Don't overwrite the prototype of child constructor.
 *
 * @param {function} subType Child constructor
 * @param {function} superType Parent constructor
 * @memberof module:inheritance
 * @example
 * var inherit = require('tui-code-snippet/inheritance/inherit'); // node, commonjs
 *
 * // Parent constructor
 * function Animal(leg) {
 *     this.leg = leg;
 * }
 * Animal.prototype.growl = function() {
 *     // ...
 * };
 *
 * // Child constructor
 * function Person(name) {
 *     this.name = name;
 * }
 *
 * // Inheritance
 * inherit(Person, Animal);
 *
 * // After this inheritance, please use only the extending of property.
 * // Do not overwrite prototype.
 * Person.prototype.walk = function(direction) {
 *     // ...
 * };
 */ function inherit(subType, superType) {
                var prototype = createObject(superType.prototype);
                prototype.constructor = subType;
                subType.prototype = prototype;
            }
            module1.exports = inherit;
        /***/ },
        /* 19 */ /***/ function(module1, exports, __webpack_require__) {
            "use strict";
            /**
 * @fileoverview Create a new object with the specified prototype object and properties.
 * @author NHN FE Development Lab <dl_javascript@nhn.com>
 */ /**
 * @module inheritance
 */ /**
 * Create a new object with the specified prototype object and properties.
 * @param {Object} obj This object will be a prototype of the newly-created object.
 * @returns {Object}
 * @memberof module:inheritance
 */ function createObject(obj) {
                function F() {} // eslint-disable-line require-jsdoc
                F.prototype = obj;
                return new F();
            }
            module1.exports = createObject;
        /***/ },
        /* 20 */ /***/ function(module1, exports, __webpack_require__) {
            "use strict";
            var forEach = __webpack_require__(3);
            var defineClass = __webpack_require__(7);
            var getTarget = __webpack_require__(21);
            var on = __webpack_require__(22);
            var preventDefault = __webpack_require__(24);
            var addClass = __webpack_require__(25);
            var extend = __webpack_require__(0);
            var isString = __webpack_require__(4);
            var isHTMLNode = __webpack_require__(28);
            var util = __webpack_require__(9);
            var defaultTemplate = {
                page: '<a href="#" class="tui-page-btn">{{page}}</a>',
                currentPage: '<strong class="tui-page-btn tui-is-selected">{{page}}</strong>',
                moveButton: '<a href="#" class="tui-page-btn tui-{{type}}"><span class="tui-ico-{{type}}">{{type}}</span></a>',
                disabledMoveButton: '<span class="tui-page-btn tui-is-disabled tui-{{type}}"><span class="tui-ico-{{type}}">{{type}}</span></span>',
                moreButton: '<a href="#" class="tui-page-btn tui-{{type}}-is-ellip"><span class="tui-ico-ellip">...</span></a>'
            };
            var moveButtons = [
                "first",
                "prev",
                "next",
                "last"
            ];
            var moreButtons = [
                "prev",
                "next"
            ];
            var INVALID_CONTAINER_ELEMENT = "The container element is invalid.";
            /**
 * Pagination view class
 * @class View
 * @param {string|HTMLElement|jQueryObject} container - Container element or id selector
 * @param {object} options - Option object
 *     @param {number} [options.totalItems=10] Total item count
 *     @param {number} [options.itemsPerPage=10] Item count per page
 *     @param {number} [options.visiblePages=10] Display page link count
 *     @param {number} [options.page=1] Display page after pagination draw.
 *     @param {boolean}[options.centerAlign=false] Whether current page keep center or not
 *     @param {string} [options.firstItemClassName='first-child'] The class name of the first item
 *     @param {string} [options.lastItemClassName='last-child'] The class name of the last item
 *     @param {object} [options.template] A markup string set to make element
 *         @param {string|function} [options.template.page] HTML template
 *         @param {string|function} [options.template.currentPage] HTML template
 *         @param {string|function} [options.template.moveButton] HTML template
 *         @param {string|function} [options.template.disabledMoveButton] HTML template
 *         @param {string|function} [options.template.moreButton] HTML template
 * @param {function} handler - Event handler
 * @ignore
 */ var View = defineClass(/** @lends View.prototype */ {
                init: function(container, options, handler) {
                    /**
       * Root element
       * @type {HTMLElement}
       * @private
       */ this._containerElement = null;
                    /**
       * First item's class name
       * @type {string}
       * @private
       */ this._firstItemClassName = options.firstItemClassName;
                    /**
       * Last item's class name
       * @type {string}
       * @private
       */ this._lastItemClassName = options.lastItemClassName;
                    /**
       * Default template
       * @type {object.<string, string|function>}
       * @private
       */ this._template = extend({}, defaultTemplate, options.template);
                    /**
       * Map of buttons
       * @type {object.<string, HTMLElement>}
       * @private
       */ this._buttons = {};
                    /**
       * Enabled page elements list
       * @type {array}
       * @private
       */ this._enabledPageElements = [];
                    this._setRootElement(container);
                    this._setMoveButtons();
                    this._setDisabledMoveButtons();
                    this._setMoreButtons();
                    this._attachClickEvent(handler);
                },
                /* eslint-enable complexity */ /**
     * Set root element
     * @param {string|HTMLElement|jQueryObject} container - Container element or id selector
     * @private
     */ _setRootElement: function(container) {
                    if (isString(container)) container = document.getElementById(container) || document.querySelector(container);
                    else if (container.jquery) container = container[0];
                    if (!isHTMLNode(container)) throw new Error(INVALID_CONTAINER_ELEMENT);
                    this._containerElement = container;
                },
                /**
     * Assign move buttons to option
     * @private
     */ _setMoveButtons: function() {
                    forEach(moveButtons, function(type) {
                        this._buttons[type] = util.createElementByTemplate(this._template.moveButton, {
                            type: type
                        });
                    }, this);
                },
                /**
     * Assign disabled move buttons to option
     * @private
     */ _setDisabledMoveButtons: function() {
                    forEach(moveButtons, function(type) {
                        var key = "disabled" + util.capitalizeFirstLetter(type);
                        this._buttons[key] = util.createElementByTemplate(this._template.disabledMoveButton, {
                            type: type
                        });
                    }, this);
                },
                /**
     * Assign more buttons to option
     * @private
     */ _setMoreButtons: function() {
                    forEach(moreButtons, function(type) {
                        var key = type + "More";
                        this._buttons[key] = util.createElementByTemplate(this._template.moreButton, {
                            type: type
                        });
                    }, this);
                },
                /* eslint-enable camelcase */ /**
     * Get container element
     * @returns {HTMLElement} Container element
     * @private
     */ _getContainerElement: function() {
                    return this._containerElement;
                },
                /**
     * Append first button on container element
     * @param {object} viewData - View data to render pagination
     * @private
     */ _appendFirstButton: function(viewData) {
                    var button;
                    if (viewData.page > 1) button = this._buttons.first;
                    else button = this._buttons.disabledFirst;
                    this._getContainerElement().appendChild(button);
                },
                /**
     * Append previous button on container element
     * @param {object} viewData - View data to render pagination
     * @private
     */ _appendPrevButton: function(viewData) {
                    var button;
                    if (viewData.currentPageIndex > 1) button = this._buttons.prev;
                    else button = this._buttons.disabledPrev;
                    this._getContainerElement().appendChild(button);
                },
                /**
     * Append next button on container element
     * @param {object} viewData - View data to render pagination
     * @private
     */ _appendNextButton: function(viewData) {
                    var button;
                    if (viewData.currentPageIndex < viewData.lastPageListIndex) button = this._buttons.next;
                    else button = this._buttons.disabledNext;
                    this._getContainerElement().appendChild(button);
                },
                /**
     * Append last button on container element
     * @param {object} viewData - View data to render pagination
     * @private
     */ _appendLastButton: function(viewData) {
                    var button;
                    if (viewData.page < viewData.lastPage) button = this._buttons.last;
                    else button = this._buttons.disabledLast;
                    this._getContainerElement().appendChild(button);
                },
                /**
     * Append previous more button on container element
     * @param {object} viewData - View data to render pagination
     * @private
     */ _appendPrevMoreButton: function(viewData) {
                    var button;
                    if (viewData.prevMore) {
                        button = this._buttons.prevMore;
                        addClass(button, this._firstItemClassName);
                        this._getContainerElement().appendChild(button);
                    }
                },
                /**
     * Append next more button on container element
     * @param {object} viewData - View data to render pagination
     * @private
     */ _appendNextMoreButton: function(viewData) {
                    var button;
                    if (viewData.nextMore) {
                        button = this._buttons.nextMore;
                        addClass(button, this._lastItemClassName);
                        this._getContainerElement().appendChild(button);
                    }
                },
                /**
     * Append page number elements on container element
     * @param {object} viewData - View data to render pagination
     * @private
     */ // eslint-disable-next-line complexity
                _appendPages: function(viewData) {
                    var firstPage = viewData.leftPageNumber;
                    var lastPage = viewData.rightPageNumber;
                    var pageItem, i;
                    for(i = firstPage; i <= lastPage; i += 1){
                        if (i === viewData.page) pageItem = util.createElementByTemplate(this._template.currentPage, {
                            page: i
                        });
                        else {
                            pageItem = util.createElementByTemplate(this._template.page, {
                                page: i
                            });
                            this._enabledPageElements.push(pageItem);
                        }
                        if (i === firstPage && !viewData.prevMore) addClass(pageItem, this._firstItemClassName);
                        if (i === lastPage && !viewData.nextMore) addClass(pageItem, this._lastItemClassName);
                        this._getContainerElement().appendChild(pageItem);
                    }
                },
                /**
     * Attach click event
     * @param {function} callback - Callback function
     * @private
     */ _attachClickEvent: function(callback) {
                    var rootElement = this._getContainerElement();
                    on(rootElement, "click", function(ev) {
                        var target = getTarget(ev);
                        var page, buttonType;
                        preventDefault(ev);
                        buttonType = this._getButtonType(target);
                        if (!buttonType) page = this._getPageNumber(target);
                        callback(buttonType, page);
                    }, this);
                },
                /**
     * Get button type to move button elements
     * @param {HTMLElement} targetElement - Each move button element
     * @returns {?string} Button type
     * @private
     */ _getButtonType: function(targetElement) {
                    var buttonType;
                    var buttons = this._buttons;
                    forEach(buttons, function(button, type) {
                        if (util.isContained(targetElement, button)) {
                            buttonType = type;
                            return false;
                        }
                        return true;
                    }, this);
                    return buttonType;
                },
                /* eslint-enable no-lonely-if */ /**
     * Get number to page elements
     * @param {HTMLElement} targetElement - Each page element
     * @returns {?number} Page number
     * @private
     */ _getPageNumber: function(targetElement) {
                    var targetPage = this._findPageElement(targetElement);
                    var page;
                    if (targetPage) page = parseInt(targetPage.innerText, 10);
                    return page;
                },
                /**
     * Find target element from page elements
     * @param {HTMLElement} targetElement - Each page element
     * @returns {HTMLElement} Found element
     * @ignore
     */ _findPageElement: function(targetElement) {
                    var i = 0;
                    var length = this._enabledPageElements.length;
                    var pickedItem;
                    for(; i < length; i += 1){
                        pickedItem = this._enabledPageElements[i];
                        if (util.isContained(targetElement, pickedItem)) return pickedItem;
                    }
                    return null;
                },
                /**
     * Reset container element
     * @private
     */ _empty: function() {
                    this._enabledPageElements = [];
                    forEach(this._buttons, function(buttonElement, type) {
                        this._buttons[type] = buttonElement.cloneNode(true);
                    }, this);
                    this._getContainerElement().innerHTML = "";
                },
                /**
     * Update view
     * @param {object} viewData - View data to render pagination
     * @ignore
     */ update: function(viewData) {
                    this._empty();
                    this._appendFirstButton(viewData);
                    this._appendPrevButton(viewData);
                    this._appendPrevMoreButton(viewData);
                    this._appendPages(viewData);
                    this._appendNextMoreButton(viewData);
                    this._appendNextButton(viewData);
                    this._appendLastButton(viewData);
                }
            });
            module1.exports = View;
        /***/ },
        /* 21 */ /***/ function(module1, exports, __webpack_require__) {
            "use strict";
            /**
 * @fileoverview Get a target element from an event object.
 * @author NHN FE Development Lab <dl_javascript@nhn.com>
 */ /**
 * Get a target element from an event object.
 * @param {Event} e - event object
 * @returns {HTMLElement} - target element
 * @memberof module:domEvent
 */ function getTarget(e) {
                return e.target || e.srcElement;
            }
            module1.exports = getTarget;
        /***/ },
        /* 22 */ /***/ function(module1, exports, __webpack_require__) {
            "use strict";
            /**
 * @fileoverview Bind DOM events
 * @author NHN FE Development Lab <dl_javascript@nhn.com>
 */ var isString = __webpack_require__(4);
            var forEach = __webpack_require__(3);
            var safeEvent = __webpack_require__(23);
            /**
 * Bind DOM events.
 * @param {HTMLElement} element - element to bind events
 * @param {(string|object)} types - Space splitted events names or eventName:handler object
 * @param {(function|object)} handler - handler function or context for handler method
 * @param {object} [context] context - context for handler method.
 * @memberof module:domEvent
 * @example
 * var div = document.querySelector('div');
 * 
 * // Bind one event to an element.
 * on(div, 'click', toggle);
 * 
 * // Bind multiple events with a same handler to multiple elements at once.
 * // Use event names splitted by a space.
 * on(div, 'mouseenter mouseleave', changeColor);
 * 
 * // Bind multiple events with different handlers to an element at once.
 * // Use an object which of key is an event name and value is a handler function.
 * on(div, {
 *   keydown: highlight,
 *   keyup: dehighlight
 * });
 * 
 * // Set a context for handler method.
 * var name = 'global';
 * var repository = {name: 'CodeSnippet'};
 * on(div, 'drag', function() {
 *  console.log(this.name);
 * }, repository);
 * // Result when you drag a div: "CodeSnippet"
 */ function on(element, types, handler, context) {
                if (isString(types)) {
                    forEach(types.split(/\s+/g), function(type) {
                        bindEvent(element, type, handler, context);
                    });
                    return;
                }
                forEach(types, function(func, type) {
                    bindEvent(element, type, func, handler);
                });
            }
            /**
 * Bind DOM events
 * @param {HTMLElement} element - element to bind events
 * @param {string} type - events name
 * @param {function} handler - handler function or context for handler method
 * @param {object} [context] context - context for handler method.
 * @private
 */ function bindEvent(element, type, handler, context) {
                /**
     * Event handler
     * @param {Event} e - event object
     */ function eventHandler(e) {
                    handler.call(context || element, e || window.event);
                }
                if ("addEventListener" in element) element.addEventListener(type, eventHandler);
                else if ("attachEvent" in element) element.attachEvent("on" + type, eventHandler);
                memorizeHandler(element, type, handler, eventHandler);
            }
            /**
 * Memorize DOM event handler for unbinding.
 * @param {HTMLElement} element - element to bind events
 * @param {string} type - events name
 * @param {function} handler - handler function that user passed at on() use
 * @param {function} wrappedHandler - handler function that wrapped by domevent for implementing some features
 * @private
 */ function memorizeHandler(element, type, handler, wrappedHandler) {
                var events = safeEvent(element, type);
                var existInEvents = false;
                forEach(events, function(obj) {
                    if (obj.handler === handler) {
                        existInEvents = true;
                        return false;
                    }
                    return true;
                });
                if (!existInEvents) events.push({
                    handler: handler,
                    wrappedHandler: wrappedHandler
                });
            }
            module1.exports = on;
        /***/ },
        /* 23 */ /***/ function(module1, exports, __webpack_require__) {
            "use strict";
            /**
 * @fileoverview Get event collection for specific HTML element
 * @author NHN FE Development Lab <dl_javascript@nhn.com>
 */ var EVENT_KEY = "_feEventKey";
            /**
 * Get event collection for specific HTML element
 * @param {HTMLElement} element - HTML element
 * @param {string} type - event type
 * @returns {array}
 * @private
 */ function safeEvent(element, type) {
                var events = element[EVENT_KEY];
                var handlers;
                if (!events) events = element[EVENT_KEY] = {};
                handlers = events[type];
                if (!handlers) handlers = events[type] = [];
                return handlers;
            }
            module1.exports = safeEvent;
        /***/ },
        /* 24 */ /***/ function(module1, exports, __webpack_require__) {
            "use strict";
            /**
 * @fileoverview Prevent default action
 * @author NHN FE Development Lab <dl_javascript@nhn.com>
 */ /**
 * Prevent default action
 * @param {Event} e - event object
 * @memberof module:domEvent
 */ function preventDefault(e) {
                if (e.preventDefault) {
                    e.preventDefault();
                    return;
                }
                e.returnValue = false;
            }
            module1.exports = preventDefault;
        /***/ },
        /* 25 */ /***/ function(module1, exports, __webpack_require__) {
            "use strict";
            /**
 * @fileoverview Add css class to element
 * @author NHN FE Development Lab <dl_javascript@nhn.com>
 */ var forEach = __webpack_require__(3);
            var inArray = __webpack_require__(8);
            var getClass = __webpack_require__(26);
            var setClassName = __webpack_require__(27);
            /**
 * domUtil module
 * @module domUtil
 */ /**
 * Add css class to element
 * @param {(HTMLElement|SVGElement)} element - target element
 * @param {...string} cssClass - css classes to add
 * @memberof module:domUtil
 */ function addClass(element) {
                var cssClass = Array.prototype.slice.call(arguments, 1);
                var classList = element.classList;
                var newClass = [];
                var origin;
                if (classList) {
                    forEach(cssClass, function(name) {
                        element.classList.add(name);
                    });
                    return;
                }
                origin = getClass(element);
                if (origin) cssClass = [].concat(origin.split(/\s+/), cssClass);
                forEach(cssClass, function(cls) {
                    if (inArray(cls, newClass) < 0) newClass.push(cls);
                });
                setClassName(element, newClass);
            }
            module1.exports = addClass;
        /***/ },
        /* 26 */ /***/ function(module1, exports, __webpack_require__) {
            "use strict";
            /**
 * @fileoverview Get HTML element's design classes.
 * @author NHN FE Development Lab <dl_javascript@nhn.com>
 */ var isUndefined = __webpack_require__(1);
            /**
 * Get HTML element's design classes.
 * @param {(HTMLElement|SVGElement)} element target element
 * @returns {string} element css class name
 * @memberof module:domUtil
 */ function getClass(element) {
                if (!element || !element.className) return "";
                if (isUndefined(element.className.baseVal)) return element.className;
                return element.className.baseVal;
            }
            module1.exports = getClass;
        /***/ },
        /* 27 */ /***/ function(module1, exports, __webpack_require__) {
            "use strict";
            /**
 * @fileoverview Set className value
 * @author NHN FE Development Lab <dl_javascript@nhn.com>
 */ var isArray = __webpack_require__(2);
            var isUndefined = __webpack_require__(1);
            /**
 * Set className value
 * @param {(HTMLElement|SVGElement)} element - target element
 * @param {(string|string[])} cssClass - class names
 * @private
 */ function setClassName(element, cssClass) {
                cssClass = isArray(cssClass) ? cssClass.join(" ") : cssClass;
                cssClass = cssClass.replace(/^[\s\uFEFF\xA0]+|[\s\uFEFF\xA0]+$/g, "");
                if (isUndefined(element.className.baseVal)) {
                    element.className = cssClass;
                    return;
                }
                element.className.baseVal = cssClass;
            }
            module1.exports = setClassName;
        /***/ },
        /* 28 */ /***/ function(module1, exports, __webpack_require__) {
            "use strict";
            /**
 * @fileoverview Check whether the given variable is a instance of HTMLNode or not.
 * @author NHN FE Development Lab <dl_javascript@nhn.com>
 */ /**
 * Check whether the given variable is a instance of HTMLNode or not.
 * If the given variables is a instance of HTMLNode, return true.
 * @param {*} html - Target for checking
 * @returns {boolean} Is HTMLNode ?
 * @memberof module:type
 */ function isHTMLNode(html) {
                if (typeof HTMLElement === "object") return html && (html instanceof HTMLElement || !!html.nodeType);
                return !!(html && html.nodeType);
            }
            module1.exports = isHTMLNode;
        /***/ },
        /* 29 */ /***/ function(module1, exports, __webpack_require__) {
            "use strict";
            /**
 * @fileoverview Convert text by binding expressions with context.
 * @author NHN FE Development Lab <dl_javascript@nhn.com>
 */ var inArray = __webpack_require__(8);
            var forEach = __webpack_require__(3);
            var isArray = __webpack_require__(2);
            var isString = __webpack_require__(4);
            var extend = __webpack_require__(0);
            // IE8 does not support capture groups.
            var EXPRESSION_REGEXP = /{{\s?|\s?}}/g;
            var BRACKET_NOTATION_REGEXP = /^[a-zA-Z0-9_@]+\[[a-zA-Z0-9_@"']+\]$/;
            var BRACKET_REGEXP = /\[\s?|\s?\]/;
            var DOT_NOTATION_REGEXP = /^[a-zA-Z_]+\.[a-zA-Z_]+$/;
            var DOT_REGEXP = /\./;
            var STRING_NOTATION_REGEXP = /^["']\w+["']$/;
            var STRING_REGEXP = /"|'/g;
            var NUMBER_REGEXP = /^-?\d+\.?\d*$/;
            var EXPRESSION_INTERVAL = 2;
            var BLOCK_HELPERS = {
                "if": handleIf,
                "each": handleEach,
                "with": handleWith
            };
            var isValidSplit = "a".split(/a/).length === 3;
            /**
 * Split by RegExp. (Polyfill for IE8)
 * @param {string} text - text to be splitted\
 * @param {RegExp} regexp - regular expression
 * @returns {Array.<string>}
 */ var splitByRegExp = function() {
                if (isValidSplit) return function(text, regexp) {
                    return text.split(regexp);
                };
                return function(text, regexp) {
                    var result = [];
                    var prevIndex = 0;
                    var match, index;
                    if (!regexp.global) regexp = new RegExp(regexp, "g");
                    match = regexp.exec(text);
                    while(match !== null){
                        index = match.index;
                        result.push(text.slice(prevIndex, index));
                        prevIndex = index + match[0].length;
                        match = regexp.exec(text);
                    }
                    result.push(text.slice(prevIndex));
                    return result;
                };
            }();
            /**
 * Find value in the context by an expression.
 * @param {string} exp - an expression
 * @param {object} context - context
 * @returns {*}
 * @private
 */ // eslint-disable-next-line complexity
            function getValueFromContext(exp, context) {
                var splitedExps;
                var value = context[exp];
                if (exp === "true") value = true;
                else if (exp === "false") value = false;
                else if (STRING_NOTATION_REGEXP.test(exp)) value = exp.replace(STRING_REGEXP, "");
                else if (BRACKET_NOTATION_REGEXP.test(exp)) {
                    splitedExps = exp.split(BRACKET_REGEXP);
                    value = getValueFromContext(splitedExps[0], context)[getValueFromContext(splitedExps[1], context)];
                } else if (DOT_NOTATION_REGEXP.test(exp)) {
                    splitedExps = exp.split(DOT_REGEXP);
                    value = getValueFromContext(splitedExps[0], context)[splitedExps[1]];
                } else if (NUMBER_REGEXP.test(exp)) value = parseFloat(exp);
                return value;
            }
            /**
 * Extract elseif and else expressions.
 * @param {Array.<string>} ifExps - args of if expression
 * @param {Array.<string>} sourcesInsideBlock - sources inside if block
 * @returns {object} - exps: expressions of if, elseif, and else / sourcesInsideIf: sources inside if, elseif, and else block.
 * @private
 */ function extractElseif(ifExps, sourcesInsideBlock) {
                var exps = [
                    ifExps
                ];
                var sourcesInsideIf = [];
                var otherIfCount = 0;
                var start = 0;
                // eslint-disable-next-line complexity
                forEach(sourcesInsideBlock, function(source, index) {
                    if (source.indexOf("if") === 0) otherIfCount += 1;
                    else if (source === "/if") otherIfCount -= 1;
                    else if (!otherIfCount && (source.indexOf("elseif") === 0 || source === "else")) {
                        exps.push(source === "else" ? [
                            "true"
                        ] : source.split(" ").slice(1));
                        sourcesInsideIf.push(sourcesInsideBlock.slice(start, index));
                        start = index + 1;
                    }
                });
                sourcesInsideIf.push(sourcesInsideBlock.slice(start));
                return {
                    exps: exps,
                    sourcesInsideIf: sourcesInsideIf
                };
            }
            /**
 * Helper function for "if". 
 * @param {Array.<string>} exps - array of expressions split by spaces
 * @param {Array.<string>} sourcesInsideBlock - array of sources inside the if block
 * @param {object} context - context
 * @returns {string}
 * @private
 */ function handleIf(exps, sourcesInsideBlock, context) {
                var analyzed = extractElseif(exps, sourcesInsideBlock);
                var result = false;
                var compiledSource = "";
                forEach(analyzed.exps, function(exp, index) {
                    result = handleExpression(exp, context);
                    if (result) compiledSource = compile(analyzed.sourcesInsideIf[index], context);
                    return !result;
                });
                return compiledSource;
            }
            /**
 * Helper function for "each".
 * @param {Array.<string>} exps - array of expressions split by spaces
 * @param {Array.<string>} sourcesInsideBlock - array of sources inside the each block
 * @param {object} context - context
 * @returns {string}
 * @private
 */ function handleEach(exps, sourcesInsideBlock, context) {
                var collection = handleExpression(exps, context);
                var additionalKey = isArray(collection) ? "@index" : "@key";
                var additionalContext = {};
                var result = "";
                forEach(collection, function(item, key) {
                    additionalContext[additionalKey] = key;
                    additionalContext["@this"] = item;
                    extend(context, additionalContext);
                    result += compile(sourcesInsideBlock.slice(), context);
                });
                return result;
            }
            /**
 * Helper function for "with ... as"
 * @param {Array.<string>} exps - array of expressions split by spaces
 * @param {Array.<string>} sourcesInsideBlock - array of sources inside the with block
 * @param {object} context - context
 * @returns {string}
 * @private
 */ function handleWith(exps, sourcesInsideBlock, context) {
                var asIndex = inArray("as", exps);
                var alias = exps[asIndex + 1];
                var result = handleExpression(exps.slice(0, asIndex), context);
                var additionalContext = {};
                additionalContext[alias] = result;
                return compile(sourcesInsideBlock, extend(context, additionalContext)) || "";
            }
            /**
 * Extract sources inside block in place.
 * @param {Array.<string>} sources - array of sources
 * @param {number} start - index of start block
 * @param {number} end - index of end block
 * @returns {Array.<string>}
 * @private
 */ function extractSourcesInsideBlock(sources, start, end) {
                var sourcesInsideBlock = sources.splice(start + 1, end - start);
                sourcesInsideBlock.pop();
                return sourcesInsideBlock;
            }
            /**
 * Handle block helper function
 * @param {string} helperKeyword - helper keyword (ex. if, each, with)
 * @param {Array.<string>} sourcesToEnd - array of sources after the starting block
 * @param {object} context - context
 * @returns {Array.<string>}
 * @private
 */ function handleBlockHelper(helperKeyword, sourcesToEnd, context) {
                var executeBlockHelper = BLOCK_HELPERS[helperKeyword];
                var helperCount = 1;
                var startBlockIndex = 0;
                var endBlockIndex;
                var index = startBlockIndex + EXPRESSION_INTERVAL;
                var expression = sourcesToEnd[index];
                while(helperCount && isString(expression)){
                    if (expression.indexOf(helperKeyword) === 0) helperCount += 1;
                    else if (expression.indexOf("/" + helperKeyword) === 0) {
                        helperCount -= 1;
                        endBlockIndex = index;
                    }
                    index += EXPRESSION_INTERVAL;
                    expression = sourcesToEnd[index];
                }
                if (helperCount) throw Error(helperKeyword + " needs {{/" + helperKeyword + "}} expression.");
                sourcesToEnd[startBlockIndex] = executeBlockHelper(sourcesToEnd[startBlockIndex].split(" ").slice(1), extractSourcesInsideBlock(sourcesToEnd, startBlockIndex, endBlockIndex), context);
                return sourcesToEnd;
            }
            /**
 * Helper function for "custom helper".
 * If helper is not a function, return helper itself.
 * @param {Array.<string>} exps - array of expressions split by spaces (first element: helper)
 * @param {object} context - context
 * @returns {string}
 * @private
 */ function handleExpression(exps, context) {
                var result = getValueFromContext(exps[0], context);
                if (result instanceof Function) return executeFunction(result, exps.slice(1), context);
                return result;
            }
            /**
 * Execute a helper function.
 * @param {Function} helper - helper function
 * @param {Array.<string>} argExps - expressions of arguments
 * @param {object} context - context
 * @returns {string} - result of executing the function with arguments
 * @private
 */ function executeFunction(helper, argExps, context) {
                var args = [];
                forEach(argExps, function(exp) {
                    args.push(getValueFromContext(exp, context));
                });
                return helper.apply(null, args);
            }
            /**
 * Get a result of compiling an expression with the context.
 * @param {Array.<string>} sources - array of sources split by regexp of expression.
 * @param {object} context - context
 * @returns {Array.<string>} - array of sources that bind with its context
 * @private
 */ function compile(sources, context) {
                var index = 1;
                var expression = sources[index];
                var exps, firstExp, result;
                while(isString(expression)){
                    exps = expression.split(" ");
                    firstExp = exps[0];
                    if (BLOCK_HELPERS[firstExp]) {
                        result = handleBlockHelper(firstExp, sources.splice(index, sources.length - index), context);
                        sources = sources.concat(result);
                    } else sources[index] = handleExpression(exps, context);
                    index += EXPRESSION_INTERVAL;
                    expression = sources[index];
                }
                return sources.join("");
            }
            /**
 * Convert text by binding expressions with context.
 * <br>
 * If expression exists in the context, it will be replaced.
 * ex) '{{title}}' with context {title: 'Hello!'} is converted to 'Hello!'.
 * An array or object can be accessed using bracket and dot notation.
 * ex) '{{odds\[2\]}}' with context {odds: \[1, 3, 5\]} is converted to '5'.
 * ex) '{{evens\[first\]}}' with context {evens: \[2, 4\], first: 0} is converted to '2'.
 * ex) '{{project\["name"\]}}' and '{{project.name}}' with context {project: {name: 'CodeSnippet'}} is converted to 'CodeSnippet'.
 * <br>
 * If replaced expression is a function, next expressions will be arguments of the function.
 * ex) '{{add 1 2}}' with context {add: function(a, b) {return a + b;}} is converted to '3'.
 * <br>
 * It has 3 predefined block helpers '{{helper ...}} ... {{/helper}}': 'if', 'each', 'with ... as ...'.
 * 1) 'if' evaluates conditional statements. It can use with 'elseif' and 'else'.
 * 2) 'each' iterates an array or object. It provides '@index'(array), '@key'(object), and '@this'(current element).
 * 3) 'with ... as ...' provides an alias.
 * @param {string} text - text with expressions
 * @param {object} context - context
 * @returns {string} - text that bind with its context
 * @memberof module:domUtil
 * @example
 * var template = require('tui-code-snippet/domUtil/template');
 * 
 * var source = 
 *     '<h1>'
 *   +   '{{if isValidNumber title}}'
 *   +     '{{title}}th'
 *   +   '{{elseif isValidDate title}}'
 *   +     'Date: {{title}}'
 *   +   '{{/if}}'
 *   + '</h1>'
 *   + '{{each list}}'
 *   +   '{{with addOne @index as idx}}'
 *   +     '<p>{{idx}}: {{@this}}</p>'
 *   +   '{{/with}}'
 *   + '{{/each}}';
 * 
 * var context = {
 *   isValidDate: function(text) {
 *     return /^\d{4}-(0|1)\d-(0|1|2|3)\d$/.test(text);
 *   },
 *   isValidNumber: function(text) {
 *     return /^\d+$/.test(text);
 *   }
 *   title: '2019-11-25',
 *   list: ['Clean the room', 'Wash the dishes'],
 *   addOne: function(num) {
 *     return num + 1;
 *   }
 * };
 * 
 * var result = template(source, context);
 * console.log(result); // <h1>Date: 2019-11-25</h1><p>1: Clean the room</p><p>2: Wash the dishes</p>
 */ function template(text, context) {
                return compile(splitByRegExp(text, EXPRESSION_REGEXP), context);
            }
            module1.exports = template;
        /***/ },
        /* 30 */ /***/ function(module1, exports, __webpack_require__) {
            "use strict";
            /**
 * @fileoverview Send hostname on DOMContentLoaded.
 * @author NHN FE Development Lab <dl_javascript@nhn.com>
 */ var isUndefined = __webpack_require__(1);
            var imagePing = __webpack_require__(31);
            var ms7days = 604800000;
            /**
 * Check if the date has passed 7 days
 * @param {number} date - milliseconds
 * @returns {boolean}
 * @private
 */ function isExpired(date) {
                var now = new Date().getTime();
                return now - date > ms7days;
            }
            /**
 * Send hostname on DOMContentLoaded.
 * To prevent hostname set tui.usageStatistics to false.
 * @param {string} appName - application name
 * @param {string} trackingId - GA tracking ID
 * @ignore
 */ function sendHostname(appName, trackingId) {
                var url = "https://www.google-analytics.com/collect";
                var hostname = location.hostname;
                var hitType = "event";
                var eventCategory = "use";
                var applicationKeyForStorage = "TOAST UI " + appName + " for " + hostname + ": Statistics";
                var date = window.localStorage.getItem(applicationKeyForStorage);
                // skip if the flag is defined and is set to false explicitly
                if (!isUndefined(window.tui) && window.tui.usageStatistics === false) return;
                // skip if not pass seven days old
                if (date && !isExpired(date)) return;
                window.localStorage.setItem(applicationKeyForStorage, new Date().getTime());
                setTimeout(function() {
                    if (document.readyState === "interactive" || document.readyState === "complete") imagePing(url, {
                        v: 1,
                        t: hitType,
                        tid: trackingId,
                        cid: hostname,
                        dp: hostname,
                        dh: appName,
                        el: appName,
                        ec: eventCategory
                    });
                }, 1000);
            }
            module1.exports = sendHostname;
        /***/ },
        /* 31 */ /***/ function(module1, exports, __webpack_require__) {
            "use strict";
            /**
 * @fileoverview Request image ping.
 * @author NHN FE Development Lab <dl_javascript@nhn.com>
 */ var forEachOwnProperties = __webpack_require__(6);
            /**
 * @module request
 */ /**
 * Request image ping.
 * @param {String} url url for ping request
 * @param {Object} trackingInfo infos for make query string
 * @returns {HTMLElement}
 * @memberof module:request
 * @example
 * var imagePing = require('tui-code-snippet/request/imagePing'); // node, commonjs
 *
 * imagePing('https://www.google-analytics.com/collect', {
 *     v: 1,
 *     t: 'event',
 *     tid: 'trackingid',
 *     cid: 'cid',
 *     dp: 'dp',
 *     dh: 'dh'
 * });
 */ function imagePing(url, trackingInfo) {
                var trackingElement = document.createElement("img");
                var queryString = "";
                forEachOwnProperties(trackingInfo, function(value, key) {
                    queryString += "&" + key + "=" + value;
                });
                queryString = queryString.substring(1);
                trackingElement.src = url + "?" + queryString;
                trackingElement.style.display = "none";
                document.body.appendChild(trackingElement);
                document.body.removeChild(trackingElement);
                return trackingElement;
            }
            module1.exports = imagePing;
        /***/ }
    ]);
});


let $ac80e4835ee69e17$var$selectedBooks = {};
const $ac80e4835ee69e17$var$shoppingListArray = JSON.parse(localStorage.getItem("shoppingList")) || [];
const $ac80e4835ee69e17$var$shoppingList = document.querySelector(".shopping-list");
const $ac80e4835ee69e17$var$container = document.getElementById("pagination");
let $ac80e4835ee69e17$var$options;
let $ac80e4835ee69e17$var$paginator;
let $ac80e4835ee69e17$var$booksPerPage = 3;
let $ac80e4835ee69e17$var$booksOnPage = [];
function $ac80e4835ee69e17$var$addToFavorites(book) {
    favoriteBooks.push(book);
    localStorage.setItem("favoriteBooks", JSON.stringify(favoriteBooks));
    $ac80e4835ee69e17$var$renderFavorites();
}
$ac80e4835ee69e17$var$shoppingList.innerHTML = (0, $3fc17.createSkeletonShopList)();
function $ac80e4835ee69e17$var$renderFavorites() {
    if (!$ac80e4835ee69e17$var$shoppingList) return;
    $ac80e4835ee69e17$var$shoppingList.innerHTML = "";
    if ($ac80e4835ee69e17$var$selectedBooks.length === 0) $ac80e4835ee69e17$var$shoppingList.innerHTML = `
      <div class="some-book-centr">
      <p class="some-book">
        This page is empty, add some books<br />and proceed to order.
      </p>
      <div class="stack-of-books">
        <img
            src="https://lh3.googleusercontent.com/pw/AJFCJaXF-_bnsOB3uXSYccYIy6OIbasPGhK58TIG0KTbIRDMPOMP1TtEGd2v8e9EsOOUcZtpOjn5ToZTgfcrfJbF-r0KEa0DReOlQZhvZF8xlygQIOy7rBEg9YFDmqIH1RQ9sjRUPPvATZYh0PGnOM4RpkEm=w323-h241-s-no?authuser=0"
            alt="stack of books"
            width="265"
            height="198"
          />
      </div>
      `;
    else {
        $ac80e4835ee69e17$var$shoppingList.innerHTML = $ac80e4835ee69e17$var$booksOnPage.map((book)=>{
            return `
          <li class="shopping-list-book">
            <img class="shopping-book-img" src="${book.book_image}" alt="${book.title}" width="100" height="142" />
            <div class="shopping-book-info">
              <div class="shopping-book-title">
                <h3>${book.title}</h3>
                <p>${book.list_name}</p>
              </div>
              
<span class="remove_book" data-id="${book._id}">
<svg class="trash-svg" width="18" height="18" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg" fill="none">
<path d="M7.25 1.75H12.75M1.75 4.5H18.25M16.4167 4.5L15.7738 14.1427C15.6774 15.5894 15.6291 16.3128 15.3167 16.8613C15.0416 17.3441 14.6266 17.7323 14.1265 17.9747C13.5585 18.25 12.8335 18.25 11.3836 18.25H8.61643C7.1665 18.25 6.44153 18.25 5.87348 17.9747C5.37336 17.7323 4.95841 17.3441 4.68332 16.8613C4.37085 16.3128 4.32263 15.5894 4.22618 14.1427L3.58333 4.5M8.16667 8.625V13.2083M11.8333 8.625V13.2083" stroke="white" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
</svg>
</span>
              
            </div>
            <div class="shopping-book-box">
              <p class="shopping-book-description">${book.description}</p>
              <div class="shopping-book-author">
                <p>${book.author}</p>
                <ul class="shopping-book-retailers">
                  <li class="books-retailers-icon">
                    <a href="#">
                       <svg id="icon-Amazon_logo" class="amazon_logo-icon" width="32" height="14" viewBox="0 0 106 32">
                        <path d="M65.759 24.999c-6.154 4.536-15.073 6.956-22.753 6.956-10.768 0-20.462-3.983-27.796-10.607-0.576-0.521-0.060-1.231 0.631-0.825 7.915 4.605 17.701 7.375 27.809 7.375 6.818 0 14.317-1.411 21.213-4.338 1.042-0.443 1.913 0.682 0.894 1.438z"></path>
                        <path d="M68.318 22.072c-0.784-1.005-5.2-0.475-7.182-0.24-0.604 0.074-0.696-0.452-0.152-0.83 3.517-2.475 9.288-1.761 9.961-0.931 0.673 0.834-0.175 6.619-3.48 9.38-0.507 0.424-0.991 0.198-0.765-0.364 0.742-1.853 2.406-6.006 1.618-7.016z"></path>
                        <path d="M61.274 3.528v-2.406c0-0.364 0.277-0.608 0.608-0.608h10.773c0.346 0 0.622 0.249 0.622 0.608v2.060c-0.005 0.346-0.295 0.797-0.811 1.512l-5.582 7.97c2.074-0.051 4.264 0.258 6.145 1.318 0.424 0.24 0.539 0.59 0.572 0.936v2.568c0 0.35-0.387 0.761-0.793 0.549-3.314-1.738-7.716-1.927-11.381 0.018-0.373 0.203-0.765-0.203-0.765-0.553v-2.438c0-0.392 0.005-1.060 0.396-1.655l6.467-9.274h-5.628c-0.346 0-0.622-0.244-0.622-0.604z"></path>
                        <path d="M21.978 18.541h-3.277c-0.313-0.023-0.562-0.258-0.585-0.558v-16.82c0-0.337 0.281-0.604 0.631-0.604h3.056c0.318 0.014 0.572 0.258 0.595 0.562v2.199h0.060c0.797-2.125 2.296-3.116 4.315-3.116 2.051 0 3.333 0.991 4.255 3.116 0.793-2.125 2.595-3.116 4.527-3.116 1.374 0 2.876 0.567 3.794 1.839 1.037 1.415 0.825 3.471 0.825 5.273l-0.005 10.616c0 0.337-0.281 0.608-0.632 0.608h-3.273c-0.327-0.023-0.59-0.286-0.59-0.608v-8.915c0-0.71 0.065-2.48-0.092-3.153-0.244-1.129-0.977-1.447-1.927-1.447-0.793 0-1.623 0.53-1.959 1.378s-0.304 2.268-0.304 3.222v8.915c0 0.337-0.281 0.608-0.631 0.608h-3.273c-0.332-0.023-0.59-0.286-0.59-0.608l-0.005-8.915c0-1.876 0.309-4.637-2.019-4.637-2.355 0-2.263 2.692-2.263 4.637v8.915c0 0.337-0.281 0.608-0.631 0.608z"></path>
                        <path d="M82.552 0.205c4.863 0 7.495 4.176 7.495 9.486 0 5.13-2.909 9.201-7.495 9.201-4.775 0-7.375-4.176-7.375-9.38 0-5.236 2.632-9.307 7.375-9.307zM82.58 3.639c-2.415 0-2.568 3.291-2.568 5.342 0 2.056-0.032 6.444 2.54 6.444 2.54 0 2.66-3.54 2.66-5.697 0-1.42-0.060-3.116-0.489-4.462-0.369-1.171-1.102-1.627-2.143-1.627z"></path>
                        <path d="M96.353 18.541h-3.264c-0.327-0.023-0.59-0.286-0.59-0.608l-0.005-16.825c0.028-0.309 0.3-0.549 0.632-0.549h3.038c0.286 0.014 0.521 0.207 0.585 0.47v2.572h0.060c0.917-2.3 2.203-3.397 4.467-3.397 1.47 0 2.904 0.53 3.826 1.982 0.857 1.346 0.857 3.609 0.857 5.236v10.588c-0.037 0.295-0.309 0.53-0.632 0.53h-3.287c-0.3-0.023-0.549-0.244-0.581-0.53v-9.136c0-1.839 0.212-4.531-2.051-4.531-0.797 0-1.53 0.535-1.895 1.346-0.461 1.028-0.521 2.051-0.521 3.185v9.058c-0.005 0.337-0.29 0.608-0.641 0.608z"></path>
                        <path d="M52.687 10.507v-0.71c-2.369 0-4.872 0.507-4.872 3.3 0 1.415 0.733 2.374 1.991 2.374 0.922 0 1.747-0.567 2.268-1.489 0.645-1.134 0.613-2.199 0.613-3.476zM55.992 18.495c-0.217 0.194-0.53 0.207-0.774 0.078-1.088-0.903-1.281-1.323-1.881-2.185-1.798 1.835-3.070 2.383-5.402 2.383-2.757 0-4.905-1.701-4.905-5.107 0-2.66 1.443-4.471 3.494-5.356 1.779-0.784 4.264-0.922 6.163-1.139v-0.424c0-0.779 0.060-1.701-0.396-2.374-0.401-0.604-1.166-0.853-1.839-0.853-1.249 0-2.365 0.641-2.637 1.968-0.055 0.295-0.272 0.585-0.567 0.599l-3.181-0.341c-0.267-0.060-0.562-0.277-0.489-0.687 0.733-3.854 4.213-5.015 7.329-5.015 1.595 0 3.678 0.424 4.937 1.632 1.595 1.489 1.443 3.476 1.443 5.638v5.107c0 1.535 0.636 2.208 1.235 3.038 0.212 0.295 0.258 0.65-0.009 0.871-0.668 0.558-1.858 1.595-2.512 2.176l-0.009-0.009z"></path>
                        <path d="M9.721 10.507v-0.71c-2.369 0-4.872 0.507-4.872 3.3 0 1.415 0.733 2.374 1.991 2.374 0.922 0 1.747-0.567 2.268-1.489 0.645-1.134 0.613-2.199 0.613-3.476zM13.026 18.495c-0.217 0.194-0.53 0.207-0.774 0.078-1.088-0.903-1.281-1.323-1.881-2.185-1.798 1.835-3.070 2.383-5.402 2.383-2.756 0-4.905-1.701-4.905-5.107 0-2.66 1.443-4.471 3.494-5.356 1.779-0.784 4.264-0.922 6.163-1.139v-0.424c0-0.779 0.060-1.701-0.396-2.374-0.401-0.604-1.166-0.853-1.839-0.853-1.249 0-2.365 0.641-2.637 1.968-0.055 0.295-0.272 0.585-0.567 0.599l-3.181-0.341c-0.267-0.060-0.562-0.277-0.489-0.687 0.733-3.854 4.213-5.015 7.329-5.015 1.595 0 3.678 0.424 4.937 1.632 1.595 1.489 1.443 3.476 1.443 5.638v5.107c0 1.535 0.636 2.208 1.235 3.038 0.212 0.295 0.258 0.65-0.009 0.871-0.668 0.558-1.858 1.595-2.512 2.176l-0.009-0.009z"></path>
                      </svg>
                    </a>
                  </li>
                  <li class="books-retailers-icon">
                    <a href="#">
                      <svg id="icon-book-opened" class="icon-book-opened" width="20" height="20" viewBox="0 0 32 32">
                        <path d="M30.372 7.482h-2.114c-3.066-1.369-5.668-2.072-7.743-2.072-2.687 0-3.945 1.171-4.514 2.064-0.569-0.893-1.826-2.064-4.514-2.064-2.075 0-4.678 0.704-7.744 2.072h-2.114c-0.899 0-1.628 0.729-1.628 1.628v15.851c0 0.9 0.729 1.628 1.628 1.628h28.743c0.899 0 1.628-0.729 1.628-1.628v-15.851c0-0.899-0.729-1.628-1.628-1.628zM15.559 8.471c-0.005 0.025-0.007 0.051-0.007 0.076v14.95c-0.712-0.822-1.905-1.451-3.901-1.451-3.563 0-8.034 1.953-9.631 2.709v-15.553c1.368-0.696 2.645-1.265 3.836-1.719 2.186-0.831 4.074-1.258 5.63-1.258 1.909 0 2.952 0.639 3.517 1.258 0.326 0.357 0.494 0.707 0.573 0.924-0.009 0.036-0.015 0.062-0.016 0.064zM29.979 24.754c-1.597-0.756-6.069-2.709-9.631-2.709-1.996 0-3.189 0.629-3.901 1.451-0.026 0.030-0.056 0.058-0.081 0.089v-14.993c0.008-0.035 0.027-0.099 0.059-0.183 0.080-0.216 0.251-0.568 0.581-0.927 0.568-0.619 1.611-1.258 3.508-1.258 1.556 0 3.443 0.426 5.63 1.258 1.192 0.453 2.468 1.022 3.835 1.719v15.552h0z"></path>
                      </svg>
                    </a>
                  </li>
                  <li class="books-retailers-icon">
                    <a href="#">
                      <svg id="icon-books-cl" class="icon-books-cl" width="20" height="20" viewBox="0 0 32 32">
                        <path d="M29.717 11.056c-0.129-0.973-0.148-2.648 0.756-3.211 0.016-0.010 0.028-0.025 0.042-0.038 0.739-0.236 1.25-0.568 0.849-1.014l-10.897-3.283-17.644 2.453c0 0-2.021 0.289-1.84 3.428 0.098 1.709 0.634 2.548 1.102 2.96l-1.448 0.436c-0.402 0.446 0.109 0.778 0.848 1.014 0.014 0.013 0.026 0.028 0.042 0.038 0.903 0.563 0.886 2.238 0.756 3.211-3.244 0.921-2.079 1.221-2.079 1.221l0.712 0.172c-0.5 0.452-0.998 1.31-0.904 2.937 0.181 3.139 1.84 3.355 1.84 3.355l11.546 3.753 17.428-4.221c0 0 1.165-0.301-2.080-1.222-0.13-0.971-0.149-2.646 0.756-3.211 0.017-0.010 0.029-0.025 0.042-0.038 0.739-0.236 1.25-0.568 0.848-1.014l-0.758-0.229c0.505-0.305 1.264-1.101 1.383-3.169 0.082-1.423-0.289-2.256-0.719-2.746l1.497-0.362c0 0.001 1.165-0.3-2.079-1.221zM15.14 11.016l14.31-2.941c-0.471 0.863-0.452 2.044-0.374 2.803 0.017 0.172 0.037 0.329 0.056 0.448l-14.116 3.511 0.123-3.821zM2.551 14.071l14.31 2.941 0.123 3.821-14.115-3.511c0.019-0.119 0.038-0.276 0.056-0.448 0.078-0.758 0.098-1.94-0.374-2.803zM1.978 9.24c-0.018-0.835 0.131-1.439 0.432-1.746 0.191-0.196 0.417-0.237 0.572-0.237 0.082 0 0.141 0.011 0.145 0.011l11.395 3.715-0.124 3.848-11.202-3.14c-0.021-0.006-0.049-0.010-0.070-0.011-0.044-0.003-1.096-0.1-1.147-2.44zM13.425 26.823l-11.202-3.141c-0.021-0.006-0.048-0.010-0.070-0.011-0.045-0.003-1.097-0.1-1.148-2.439-0.018-0.836 0.131-1.439 0.432-1.747 0.192-0.196 0.418-0.237 0.572-0.237 0.082 0 0.141 0.011 0.145 0.011 0 0 0 0 0 0l11.395 3.716-0.124 3.848zM28.104 22.868c0.018 0.172 0.037 0.329 0.056 0.448l-14.116 3.512 0.123-3.821 3.018-0.62 0.446 0.108 1.67-0.543 9.176-1.886c-0.472 0.863-0.452 2.044-0.374 2.803zM28.882 17.675c-0.026 0.001-0.051 0.004-0.076 0.012l-11.202 3.14-0.124-3.848 11.379-3.711c0.001-0 0.424-0.094 0.734 0.221 0.3 0.307 0.449 0.911 0.432 1.746-0.053 2.34-1.105 2.437-1.143 2.44z"></path>
                      </svg>
                    </a>
                  </li>
                </ul>
              </div>
            </div>
          </li>
        `;
        }).join("");
        document.querySelectorAll(".remove_book").forEach((b)=>{
            b.addEventListener("click", $ac80e4835ee69e17$var$removeBookFromFavorite);
        });
    }
}
function $ac80e4835ee69e17$var$removeBookFromFavorite(e) {
    const id = e.target.getAttribute("data-id");
    console.log(id);
    // const updatedBooks = shoppingListArray.filter(b => b.id !== id);
    // console.log(updatedBooks);
    const updatedBooks = $ac80e4835ee69e17$var$shoppingListArray.map((book)=>{
        if (book.id === id) {
            $ac80e4835ee69e17$var$shoppingListArray.splice(id, 1);
            localStorage.setItem("shoppingList", JSON.stringify($ac80e4835ee69e17$var$shoppingListArray));
        }
        console.log($ac80e4835ee69e17$var$shoppingListArray);
        $ac80e4835ee69e17$var$options.totalItems = JSON.parse(localStorage.getItem("shoppingList")).length;
        $ac80e4835ee69e17$var$paginator = new $41b54132168ac5e1$exports($ac80e4835ee69e17$var$container, $ac80e4835ee69e17$var$options);
        if ($ac80e4835ee69e17$var$options.totalItems <= 3) document.querySelector(".tui-pagination").style.display = "none";
        else document.querySelector(".tui-pagination").style.display = "block";
    });
    // localStorage.setItem('shoppingList', JSON.stringify(updatedBooks));
    $ac80e4835ee69e17$var$selectedBooks = $ac80e4835ee69e17$var$selectedBooks.filter((b)=>b._id !== id);
    $ac80e4835ee69e17$var$updateBooksOnPage($ac80e4835ee69e17$var$paginator.getCurrentPage());
}
(async ()=>{
    const books = await $ac80e4835ee69e17$var$bookApi.getTopBooksList();
    const selectedId = $ac80e4835ee69e17$var$shoppingListArray.map((b)=>b.id);
    $ac80e4835ee69e17$var$selectedBooks = books.reduce((acc, b)=>{
        b.books.forEach((book)=>{
            if (selectedId.includes(book._id)) acc.push(book);
        });
        return acc;
    }, []);
    $ac80e4835ee69e17$var$options = {
        totalItems: $ac80e4835ee69e17$var$selectedBooks.length,
        itemsPerPage: $ac80e4835ee69e17$var$booksPerPage,
        visiblePages: 3,
        page: 1,
        centerAlign: false,
        firstItemClassName: "tui-first-child",
        lastItemClassName: "tui-last-child",
        template: {
            page: '<a href="#" class="tui-page-btn">{{page}}</a>',
            currentPage: '<strong class="tui-page-btn tui-is-selected">{{page}}</strong>',
            moveButton: '<a href="#" class="tui-page-btn tui-{{type}}"><span class="tui-ico-{{type}}">{{type}}</span></a>',
            disabledMoveButton: '<span class="tui-page-btn tui-is-disabled tui-{{type}}"><span class="tui-ico-{{type}}">{{type}}</span></span>',
            moreButton: '<a href="#" class="tui-page-btn tui-{{type}}-is-ellip"><span class="tui-ico-ellip">...</span></a>'
        }
    };
    if ($ac80e4835ee69e17$var$selectedBooks.length <= 3) document.querySelector(".tui-pagination").style.display = "none";
    else document.querySelector(".tui-pagination").style.display = "block";
    $ac80e4835ee69e17$var$paginator = new $41b54132168ac5e1$exports($ac80e4835ee69e17$var$container, $ac80e4835ee69e17$var$options);
    $ac80e4835ee69e17$var$paginator.getCurrentPage();
    $ac80e4835ee69e17$var$updateBooksOnPage($ac80e4835ee69e17$var$paginator.getCurrentPage());
    $ac80e4835ee69e17$var$paginator.on("afterMove", ({ page: page  })=>$ac80e4835ee69e17$var$updateBooksOnPage(page));
    $ac80e4835ee69e17$var$renderFavorites();
})();
function $ac80e4835ee69e17$var$updateBooksOnPage(page) {
    const startIndex = (page - 1) * $ac80e4835ee69e17$var$booksPerPage;
    $ac80e4835ee69e17$var$booksOnPage = [];
    for(let index = startIndex; index < startIndex + $ac80e4835ee69e17$var$booksPerPage; index++)$ac80e4835ee69e17$var$booksOnPage.push($ac80e4835ee69e17$var$selectedBooks[index]);
    $ac80e4835ee69e17$var$booksOnPage = $ac80e4835ee69e17$var$booksOnPage.filter((b)=>b);
    $ac80e4835ee69e17$var$renderFavorites();
}


parcelRequire("qu4QW");
parcelRequire("h6vYM");
parcelRequire("79ZbA");
parcelRequire("k3MD3");
parcelRequire("eY6uf");
parcelRequire("beUFR");
parcelRequire("lmWMk");
parcelRequire("3fc17");

})();
//# sourceMappingURL=shopping-list.5f49f7dc.js.map
