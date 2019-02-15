"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = exports.strToDateFomat = void 0;

var strToDateFomat = function strToDateFomat(str) {
  return str.replace(/(\d{4})(\d{2})(\d{2})(\d{2})(\d{2})(\d{2})/g, "$1/$2/$3 $4:$5:$6");
};

exports.strToDateFomat = strToDateFomat;
var _default = strToDateFomat;
exports.default = _default;