/* eslint-disable */ 
 "use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = exports.fenToyuan = void 0;

/**
 * 分转换成元
 * @param {*} num 整数
 * @param {*} type 货币类型
 */
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

exports.fenToyuan = fenToyuan;
var _default = fenToyuan;
exports.default = _default;