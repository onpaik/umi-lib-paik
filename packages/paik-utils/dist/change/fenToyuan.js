(function (global, factory) {
  if (typeof define === "function" && define.amd) {
    define(["exports"], factory);
  } else if (typeof exports !== "undefined") {
    factory(exports);
  } else {
    var mod = {
      exports: {}
    };
    factory(mod.exports);
    global.fenToyuan = mod.exports;
  }
})(this, function (_exports) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  _exports.default = _exports.fenToyuan = void 0;

  var fenToyuan = function fenToyuan(num) {
    var type = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : '';

    var _num = +num; // eslint-disable-next-line


    if (!isNaN(_num)) {
      _num = "".concat(_num / 100);
      var reg = _num.indexOf('.') > -1 ? /(\d{1,3})(?=(?:\d{3})+\.)/g : /(\d{1,3})(?=(?:\d{3})+$)/g;
      return "".concat(type).concat(_num.replace(reg, '$1,'));
    }

    return num;
  };

  _exports.fenToyuan = fenToyuan;
  var _default = fenToyuan;
  _exports.default = _default;
});