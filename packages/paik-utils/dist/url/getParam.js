(function (global, factory) {
  if (typeof define === "function" && define.amd) {
    define(["exports", "@babel/runtime/helpers/slicedToArray"], factory);
  } else if (typeof exports !== "undefined") {
    factory(exports, require("@babel/runtime/helpers/slicedToArray"));
  } else {
    var mod = {
      exports: {}
    };
    factory(mod.exports, global.slicedToArray);
    global.getParam = mod.exports;
  }
})(this, function (_exports, _slicedToArray2) {
  "use strict";

  var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  _exports.default = _exports.getParams = _exports.getParam = void 0;
  _slicedToArray2 = _interopRequireDefault(_slicedToArray2);

  var getParam = function getParam(name) {
    var href = window.location.href;

    if (href.indexOf('?') !== -1) {
      var reg = new RegExp("(^|&)".concat(name, "=([^&]*)(&|$)"));
      var param = decodeURIComponent(href).split(/\?/gi)[1];
      var r = param.match(reg);
      if (r) return r[2];
      return null;
    }

    return null;
  };

  _exports.getParam = getParam;

  var getParams = function getParams(name) {
    var href = window.location.href;
    var obj = {};

    if (href.indexOf('?') !== -1) {
      var params = decodeURIComponent(href.substring(href.indexOf('?') + 1));
      var paramArry = params.split('&');
      paramArry.map(function (str) {
        var keyValue = str.split('=');

        var _keyValue = (0, _slicedToArray2.default)(keyValue, 2),
            key = _keyValue[0],
            value = _keyValue[1];

        obj[key] = value;
        return str;
      });
      if (name && name in obj) return obj[name];
      if (name && !(name in obj)) return null;
      return obj;
    }

    return null;
  };

  _exports.getParams = getParams;
  var _default = getParams;
  _exports.default = _default;
});