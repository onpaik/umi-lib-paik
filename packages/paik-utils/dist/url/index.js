(function (global, factory) {
  if (typeof define === "function" && define.amd) {
    define(["exports", "./getParam", "./getParams", "./paramParse"], factory);
  } else if (typeof exports !== "undefined") {
    factory(exports, require("./getParam"), require("./getParams"), require("./paramParse"));
  } else {
    var mod = {
      exports: {}
    };
    factory(mod.exports, global.getParam, global.getParams, global.paramParse);
    global.index = mod.exports;
  }
})(this, function (_exports, _getParam, _getParams, _paramParse) {
  "use strict";

  var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  Object.defineProperty(_exports, "getParam", {
    enumerable: true,
    get: function get() {
      return _getParam.default;
    }
  });
  Object.defineProperty(_exports, "getParams", {
    enumerable: true,
    get: function get() {
      return _getParams.default;
    }
  });
  Object.defineProperty(_exports, "paramParse", {
    enumerable: true,
    get: function get() {
      return _paramParse.default;
    }
  });
  _exports.default = void 0;
  _getParam = _interopRequireDefault(_getParam);
  _getParams = _interopRequireDefault(_getParams);
  _paramParse = _interopRequireDefault(_paramParse);

  /* eslint-disable */
  var _default = {
    getParam: _getParam.default,
    getParams: _getParams.default,
    paramParse: _paramParse.default
  };
  _exports.default = _default;
});