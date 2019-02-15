"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = exports.getBase64 = void 0;

var getBase64 = function getBase64(file, callback) {
  var reader = new FileReader();
  reader.addEventListener('load', function () {
    return callback(reader.result);
  });
  reader.readAsDataURL(file);
};

exports.getBase64 = getBase64;
var _default = getBase64;
exports.default = _default;