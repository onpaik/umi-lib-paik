define(["exports"], function (_exports) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  _exports.default = _exports.getBase64 = void 0;

  /**
   * 获取文件的base64字符串
   * @param {*} file 文件 blob 对象
   * @param {*} callback 回调函数，参数为base64
   */
  var getBase64 = function getBase64(file, callback) {
    var reader = new FileReader();
    reader.addEventListener('load', function () {
      return callback(reader.result);
    });
    reader.readAsDataURL(file);
  };

  _exports.getBase64 = getBase64;
  var _default = getBase64;
  _exports.default = _default;
});