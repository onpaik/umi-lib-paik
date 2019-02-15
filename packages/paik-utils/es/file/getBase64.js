define(["exports"], function (_exports) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  _exports.default = _exports.getBase64 = void 0;

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