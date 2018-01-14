(function webpackUniversalModuleDefinition(root, factory) {
	if(typeof exports === 'object' && typeof module === 'object')
		module.exports = factory();
	else if(typeof define === 'function' && define.amd)
		define("algorz", [], factory);
	else if(typeof exports === 'object')
		exports["algorz"] = factory();
	else
		root["algorz"] = factory();
})(typeof self !== 'undefined' ? self : this, function() {
return /******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, {
/******/ 				configurable: false,
/******/ 				enumerable: true,
/******/ 				get: getter
/******/ 			});
/******/ 		}
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 0);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _list = __webpack_require__(1);

Object.defineProperty(exports, 'List', {
  enumerable: true,
  get: function get() {
    return _interopRequireDefault(_list).default;
  }
});

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/***/ }),
/* 1 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var List = function () {
  function List() {
    _classCallCheck(this, List);

    this.listSize = 0;
    this.pos = 0;
    this.dataStore = [];
  }

  _createClass(List, [{
    key: "clear",
    value: function clear() {
      delete this.dataStore;
      this.dataStore = [];
      this.listSize = this.pos = 0;
    }

    /**
     * Returns the position where the element was found
     * @param element
     * @return {number}
     */

  }, {
    key: "find",
    value: function find(element) {
      for (var i = 0; i < this.dataStore.length; ++i) {
        if (this.dataStore[i] === element) {
          return i;
        }
      }
      return -1;
    }

    /**
     * Returns an array object
     * @return {Array}
     */

  }, {
    key: "toString",
    value: function toString() {
      return this.dataStore;
    }
  }, {
    key: "insert",
    value: function insert(element, after) {
      var insertPos = this.find(after);

      if (insertPos > -1) {
        this.dataStore.splice(insertPos + 1, 0, element);
        ++this.listSize;
        return true;
      }
      return false;
    }
  }, {
    key: "append",
    value: function append(element) {
      this.dataStore[this.listSize++] = element;
    }
  }, {
    key: "remove",
    value: function remove(element) {
      var foundAt = this.find(element);

      if (foundAt > -1) {
        this.dataStore.splice(foundAt, 1);
        --this.listSize;
        return true;
      }
      return false;
    }
  }, {
    key: "front",
    value: function front() {
      this.pos = 0;
    }
  }, {
    key: "end",
    value: function end() {
      this.pos = this.listSize - 1;
    }
  }, {
    key: "prev",
    value: function prev() {
      if (this.pos < this.listSize - 1) {
        --this.pos;
      }
    }
  }, {
    key: "next",
    value: function next() {
      if (this.pos < this.listSize - 1) {
        ++this.pos;
      }
    }
  }, {
    key: "currPos",
    value: function currPos() {
      return this.pos;
    }
  }, {
    key: "moveTo",
    value: function moveTo(position) {
      this.pos = position;
    }
  }, {
    key: "getElement",
    value: function getElement() {
      return this.dataStore[this.pos];
    }
  }, {
    key: "length",
    value: function length() {
      return this.listSize;
    }
  }, {
    key: "contains",
    value: function contains(element) {
      for (var i = 0; i < this.dataStore.length; ++i) {
        if (this.dataStore[i] === element) {
          return true;
        }
      }
      return false;
    }
  }]);

  return List;
}();

exports.default = List;
module.exports = exports["default"];

/***/ })
/******/ ]);
});
//# sourceMappingURL=algorz.js.map