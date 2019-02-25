define(["exports", "lodash/isArray", "lodash/isObject"], function (_exports, _isArray, _isObject) {
  "use strict";

  var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  _exports.default = _exports.toQueryString = void 0;
  _isArray = _interopRequireDefault(_isArray);
  _isObject = _interopRequireDefault(_isObject);

  /* support params schema
  const data = {
    key1: 'string',
    key2: [1, 2, 3],
    key3: 1
  };
  */

  /**
   * 对象转为字符串
   * @param {*} object
   * @param {*} isDuplicateKey 是否将数组转化
   */
  var toQueryString = function toQueryString(object, isDuplicateKey) {
    if (!(0, _isObject.default)(object)) {
      return object;
    }

    var ret = Object.keys(object).map(function (key) {
      var value = object[key];

      if ((0, _isArray.default)(value)) {
        if (isDuplicateKey) {
          return value.map(function (v) {
            return "".concat(encodeURIComponent(key), "=").concat(encodeURIComponent(JSON.stringify(v)));
          }).join('&');
        }

        value = value.map(function (v) {
          return JSON.stringify(v);
        }).join(',');
      }

      return "".concat(encodeURIComponent(key), "=").concat(encodeURIComponent(value));
    });
    return ret.join('&');
  };

  _exports.toQueryString = toQueryString;
  var _default = toQueryString;
  _exports.default = _default;
});