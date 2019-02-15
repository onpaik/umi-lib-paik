define(["exports", "@babel/runtime/helpers/slicedToArray", "@babel/runtime/helpers/objectSpread", "../common"], function (_exports, _slicedToArray2, _objectSpread2, _common) {
  "use strict";

  var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  _exports.spliceLineBreak = void 0;
  _slicedToArray2 = _interopRequireDefault(_slicedToArray2);
  _objectSpread2 = _interopRequireDefault(_objectSpread2);

  var spliceLineBreak = function spliceLineBreak(obj) {
    var newObj = (0, _objectSpread2.default)({}, obj);
    Object.entries(newObj).map(function (kayVal) {
      var _kayVal = (0, _slicedToArray2.default)(kayVal, 2),
          key = _kayVal[0],
          value = _kayVal[1];

      if ((0, _common.is)(value) === 'String') newObj[key] = value.replace(/[\r\n]/g, '');
      return kayVal;
    });
    return newObj;
  };

  _exports.spliceLineBreak = spliceLineBreak;
});