(function (global, factory) {
  if (typeof define === "function" && define.amd) {
    define(["exports", "./delInvalidProperty", "./hasOwn", "./is", "./delInvisibleStr"], factory);
  } else if (typeof exports !== "undefined") {
    factory(exports, require("./delInvalidProperty"), require("./hasOwn"), require("./is"), require("./delInvisibleStr"));
  } else {
    var mod = {
      exports: {}
    };
    factory(mod.exports, global.delInvalidProperty, global.hasOwn, global.is, global.delInvisibleStr);
    global.index = mod.exports;
  }
})(this, function (_exports, _delInvalidProperty, _hasOwn, _is, _delInvisibleStr) {
  "use strict";

  var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  Object.defineProperty(_exports, "delInvalidProperty", {
    enumerable: true,
    get: function get() {
      return _delInvalidProperty.default;
    }
  });
  Object.defineProperty(_exports, "hasOwn", {
    enumerable: true,
    get: function get() {
      return _hasOwn.default;
    }
  });
  Object.defineProperty(_exports, "is", {
    enumerable: true,
    get: function get() {
      return _is.default;
    }
  });
  Object.defineProperty(_exports, "delInvisibleStr", {
    enumerable: true,
    get: function get() {
      return _delInvisibleStr.default;
    }
  });
  _exports.default = void 0;
  _delInvalidProperty = _interopRequireDefault(_delInvalidProperty);
  _hasOwn = _interopRequireDefault(_hasOwn);
  _is = _interopRequireDefault(_is);
  _delInvisibleStr = _interopRequireDefault(_delInvisibleStr);
  var _default = {
    delInvalidProperty: _delInvalidProperty.default,
    hasOwn: _hasOwn.default,
    is: _is.default,
    delInvisibleStr: _delInvisibleStr.default
  };
  _exports.default = _default;
});