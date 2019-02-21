define(["exports", "@babel/runtime/helpers/slicedToArray", "@babel/runtime/helpers/objectSpread", "../common/is", "../common/delLineBreak"], function (_exports, _slicedToArray2, _objectSpread2, _is, _delLineBreak) {
  "use strict";

  var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  _exports.default = _exports.spliceLineBreak = void 0;
  _slicedToArray2 = _interopRequireDefault(_slicedToArray2);
  _objectSpread2 = _interopRequireDefault(_objectSpread2);
  _is = _interopRequireDefault(_is);
  _delLineBreak = _interopRequireDefault(_delLineBreak);

  /**
   * 删除对象属性值中的换行符
   * @param {*} obj 对象
   */
  var spliceLineBreak = function spliceLineBreak(obj) {
    var newObj = (0, _objectSpread2.default)({}, obj);
    Object.entries(newObj).map(function (kayVal) {
      var _kayVal = (0, _slicedToArray2.default)(kayVal, 2),
          key = _kayVal[0],
          value = _kayVal[1];

      if ((0, _is.default)(value) === 'String') newObj[key] = (0, _delLineBreak.default)(value);
      return kayVal;
    });
    return newObj;
  };

  _exports.spliceLineBreak = spliceLineBreak;
  var _default = spliceLineBreak;
  _exports.default = _default;
});