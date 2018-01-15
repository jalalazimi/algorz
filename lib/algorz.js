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

var _stack = __webpack_require__(2);

Object.defineProperty(exports, 'Stack', {
  enumerable: true,
  get: function get() {
    return _interopRequireDefault(_stack).default;
  }
});

var _queues = __webpack_require__(3);

Object.defineProperty(exports, 'Queues', {
  enumerable: true,
  get: function get() {
    return _interopRequireDefault(_queues).default;
  }
});

var _linkedList = __webpack_require__(4);

Object.defineProperty(exports, 'LList', {
  enumerable: true,
  get: function get() {
    return _interopRequireDefault(_linkedList).default;
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

  /**
   * Clears all elements from list
   */


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

    /**
     * Inserts new element after existing element
     * @param element
     * @param after
     * @return {boolean}
     */

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

    /**
     * Adds new element to end of list
     * @param element
     */

  }, {
    key: "append",
    value: function append(element) {
      this.dataStore[this.listSize++] = element;
    }

    /**
     * Removes element from list
     * @param element
     * @return {boolean}
     */

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

    /**
     * Sets current position to first element of list
     */

  }, {
    key: "front",
    value: function front() {
      this.pos = 0;
    }

    /**
     * Sets current position to last element of list
     */

  }, {
    key: "end",
    value: function end() {
      this.pos = this.listSize - 1;
    }

    /**
     * Moves current position back one element
     */

  }, {
    key: "prev",
    value: function prev() {
      if (this.pos < this.listSize - 1) {
        --this.pos;
      }
    }

    /**
     * Moves current position forward one element
     */

  }, {
    key: "next",
    value: function next() {
      if (this.pos < this.listSize - 1) {
        ++this.pos;
      }
    }

    /**
     * Returns the current position in list
     * @return {number|*}
     */

  }, {
    key: "currPos",
    value: function currPos() {
      return this.pos;
    }

    /**
     * Moves the current position to specified position
     * @param position
     */

  }, {
    key: "moveTo",
    value: function moveTo(position) {
      this.pos = position;
    }

    /**
     * Returns element at current position
     * @return {*}
     */

  }, {
    key: "getElement",
    value: function getElement() {
      return this.dataStore[this.pos];
    }

    /**
     * Returns the number of elements in list
     * @return {number|*}
     */

  }, {
    key: "length",
    value: function length() {
      return this.listSize;
    }

    /**
     * Determining if a Given Value Is in a List
     * @param element
     * @return {boolean}
     */

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

/***/ }),
/* 2 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var Stack = function () {
  function Stack() {
    _classCallCheck(this, Stack);

    this.dataStore = [];
    this.top = 0;
  }

  _createClass(Stack, [{
    key: "push",
    value: function push(element) {
      this.dataStore[this.top++] = element;
    }
  }, {
    key: "pop",
    value: function pop() {
      return this.dataStore[--this.top];
    }
  }, {
    key: "peek",
    value: function peek() {
      return this.dataStore[this.top - 1];
    }
  }, {
    key: "length",
    value: function length() {
      return this.top;
    }
  }, {
    key: "clear",
    value: function clear() {
      this.top = 0;
    }
  }]);

  return Stack;
}();

exports.default = Stack;
module.exports = exports["default"];

/***/ }),
/* 3 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var Queues = function () {
  function Queues() {
    _classCallCheck(this, Queues);

    this.dataStore = [];
  }

  _createClass(Queues, [{
    key: 'enqueue',
    value: function enqueue(element) {
      this.dataStore.push(element);
    }
  }, {
    key: 'dequeue',
    value: function dequeue() {
      return this.dataStore.shift();
    }
  }, {
    key: 'front',
    value: function front() {
      return this.dataStore[0];
    }
  }, {
    key: 'back',
    value: function back() {
      return this.dataStore[this.dataStore.length - 1];
    }
  }, {
    key: 'toString',
    value: function toString() {
      var retStr = '';

      for (var i = 0; i < this.dataStore.length; ++i) {
        retStr += this.dataStore[i] + '\n';
      }
      return retStr;
    }
  }, {
    key: 'empty',
    value: function empty() {
      return !!this.dataStore.length;
    }
  }]);

  return Queues;
}();

exports.default = Queues;
module.exports = exports['default'];

/***/ }),
/* 4 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var Node = function Node(element) {
  _classCallCheck(this, Node);

  this.element = element;
  this.next = null;
};

var LList = function () {
  function LList() {
    _classCallCheck(this, LList);

    this.head = new Node('head');
  }

  _createClass(LList, [{
    key: 'find',
    value: function find(item) {
      var currNode = this.head;

      while (currNode.element !== item) {
        currNode = currNode.next;
      }
      return currNode;
    }
  }, {
    key: 'insert',
    value: function insert(newElement, item) {
      var newNode = new Node(newElement);
      var current = this.find(item);

      newNode.next = current.next;
      current.next = newNode;
    }
  }, {
    key: 'display',
    value: function display() {
      var currNode = this.head;

      while (!(currNode.next == null)) {
        console.log(currNode.next.element);
        currNode = currNode.next;
      }
    }
  }, {
    key: 'remove',
    value: function remove(item) {
      var prevNode = this.findPrevious(item);

      if (!(prevNode.next == null)) {
        prevNode.next = prevNode.next.next;
      }
    }
  }, {
    key: 'findPrevious',
    value: function findPrevious(item) {
      var currNode = this.head;

      while (!(currNode.next == null) && currNode.next.element !== item) {
        currNode = currNode.next;
      }
      return currNode;
    }
  }]);

  return LList;
}();

exports.default = LList;
module.exports = exports['default'];

/***/ })
/******/ ]);
});
//# sourceMappingURL=algorz.js.map