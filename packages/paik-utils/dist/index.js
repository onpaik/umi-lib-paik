(function (global, factory) {
  if (typeof define === "function" && define.amd) {
    define(["exports", "./change", "./common", "./file", "./is", "./preventDefault", "./sort", "./url", "./validate", "./time"], factory);
  } else if (typeof exports !== "undefined") {
    factory(exports, require("./change"), require("./common"), require("./file"), require("./is"), require("./preventDefault"), require("./sort"), require("./url"), require("./validate"), require("./time"));
  } else {
    var mod = {
      exports: {}
    };
    factory(mod.exports, global.change, global.common, global.file, global.is, global.preventDefault, global.sort, global.url, global.validate, global.time);
    global.index = mod.exports;
  }
})(this, function (_exports, _change, _common, _file, _is, _preventDefault, _sort, _url, _validate, _time) {
  "use strict";

  var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  Object.defineProperty(_exports, "change", {
    enumerable: true,
    get: function get() {
      return _change.default;
    }
  });
  Object.defineProperty(_exports, "common", {
    enumerable: true,
    get: function get() {
      return _common.default;
    }
  });
  Object.defineProperty(_exports, "file", {
    enumerable: true,
    get: function get() {
      return _file.default;
    }
  });
  Object.defineProperty(_exports, "is", {
    enumerable: true,
    get: function get() {
      return _is.default;
    }
  });
  Object.defineProperty(_exports, "preventDefault", {
    enumerable: true,
    get: function get() {
      return _preventDefault.default;
    }
  });
  Object.defineProperty(_exports, "sort", {
    enumerable: true,
    get: function get() {
      return _sort.default;
    }
  });
  Object.defineProperty(_exports, "url", {
    enumerable: true,
    get: function get() {
      return _url.default;
    }
  });
  Object.defineProperty(_exports, "validate", {
    enumerable: true,
    get: function get() {
      return _validate.default;
    }
  });
  Object.defineProperty(_exports, "time", {
    enumerable: true,
    get: function get() {
      return _time.default;
    }
  });
  _exports.default = void 0;
  _change = _interopRequireDefault(_change);
  _common = _interopRequireDefault(_common);
  _file = _interopRequireDefault(_file);
  _is = _interopRequireDefault(_is);
  _preventDefault = _interopRequireDefault(_preventDefault);
  _sort = _interopRequireDefault(_sort);
  _url = _interopRequireDefault(_url);
  _validate = _interopRequireDefault(_validate);
  _time = _interopRequireDefault(_time);
  var _default = {
    change: _change.default,
    common: _common.default,
    file: _file.default,
    is: _is.default,
    preventDefault: _preventDefault.default,
    sort: _sort.default,
    url: _url.default,
    validate: _validate.default,
    time: _time.default
  };
  _exports.default = _default;
});