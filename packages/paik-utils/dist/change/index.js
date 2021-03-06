(function (global, factory) {
  if (typeof define === "function" && define.amd) {
    define(["exports", "./fenToyuan", "./inValidToText", "./removeLastetZero", "./spliceLineBreak", "./strToDateFomat", "./strToNumber", "./toDecimal", "./toLowerCase", "./toUpperCase", "./trimLR", "./toQueryString"], factory);
  } else if (typeof exports !== "undefined") {
    factory(exports, require("./fenToyuan"), require("./inValidToText"), require("./removeLastetZero"), require("./spliceLineBreak"), require("./strToDateFomat"), require("./strToNumber"), require("./toDecimal"), require("./toLowerCase"), require("./toUpperCase"), require("./trimLR"), require("./toQueryString"));
  } else {
    var mod = {
      exports: {}
    };
    factory(mod.exports, global.fenToyuan, global.inValidToText, global.removeLastetZero, global.spliceLineBreak, global.strToDateFomat, global.strToNumber, global.toDecimal, global.toLowerCase, global.toUpperCase, global.trimLR, global.toQueryString);
    global.index = mod.exports;
  }
})(this, function (_exports, _fenToyuan, _inValidToText, _removeLastetZero, _spliceLineBreak, _strToDateFomat, _strToNumber, _toDecimal, _toLowerCase, _toUpperCase, _trimLR, _toQueryString) {
  "use strict";

  var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  Object.defineProperty(_exports, "fenToyuan", {
    enumerable: true,
    get: function get() {
      return _fenToyuan.default;
    }
  });
  Object.defineProperty(_exports, "inValidToText", {
    enumerable: true,
    get: function get() {
      return _inValidToText.default;
    }
  });
  Object.defineProperty(_exports, "removeLastetZero", {
    enumerable: true,
    get: function get() {
      return _removeLastetZero.default;
    }
  });
  Object.defineProperty(_exports, "spliceLineBreak", {
    enumerable: true,
    get: function get() {
      return _spliceLineBreak.default;
    }
  });
  Object.defineProperty(_exports, "strToDateFomat", {
    enumerable: true,
    get: function get() {
      return _strToDateFomat.default;
    }
  });
  Object.defineProperty(_exports, "strToNumber", {
    enumerable: true,
    get: function get() {
      return _strToNumber.default;
    }
  });
  Object.defineProperty(_exports, "toDecimal", {
    enumerable: true,
    get: function get() {
      return _toDecimal.default;
    }
  });
  Object.defineProperty(_exports, "toLowerCase", {
    enumerable: true,
    get: function get() {
      return _toLowerCase.default;
    }
  });
  Object.defineProperty(_exports, "toUpperCase", {
    enumerable: true,
    get: function get() {
      return _toUpperCase.default;
    }
  });
  Object.defineProperty(_exports, "trimLR", {
    enumerable: true,
    get: function get() {
      return _trimLR.default;
    }
  });
  Object.defineProperty(_exports, "toQueryString", {
    enumerable: true,
    get: function get() {
      return _toQueryString.default;
    }
  });
  _exports.default = void 0;
  _fenToyuan = _interopRequireDefault(_fenToyuan);
  _inValidToText = _interopRequireDefault(_inValidToText);
  _removeLastetZero = _interopRequireDefault(_removeLastetZero);
  _spliceLineBreak = _interopRequireDefault(_spliceLineBreak);
  _strToDateFomat = _interopRequireDefault(_strToDateFomat);
  _strToNumber = _interopRequireDefault(_strToNumber);
  _toDecimal = _interopRequireDefault(_toDecimal);
  _toLowerCase = _interopRequireDefault(_toLowerCase);
  _toUpperCase = _interopRequireDefault(_toUpperCase);
  _trimLR = _interopRequireDefault(_trimLR);
  _toQueryString = _interopRequireDefault(_toQueryString);
  var _default = {
    fenToyuan: _fenToyuan.default,
    inValidToText: _inValidToText.default,
    removeLastetZero: _removeLastetZero.default,
    spliceLineBreak: _spliceLineBreak.default,
    strToDateFomat: _strToDateFomat.default,
    strToNumber: _strToNumber.default,
    toDecimal: _toDecimal.default,
    toLowerCase: _toLowerCase.default,
    toUpperCase: _toUpperCase.default,
    trimLR: _trimLR.default,
    toQueryString: _toQueryString.default
  };
  _exports.default = _default;
});