define(["exports"], function (_exports) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  _exports.default = _exports.strToDateFomat = void 0;

  var strToDateFomat = function strToDateFomat(str) {
    return str.replace(/(\d{4})(\d{2})(\d{2})(\d{2})(\d{2})(\d{2})/g, "$1/$2/$3 $4:$5:$6");
  };

  _exports.strToDateFomat = strToDateFomat;
  var _default = strToDateFomat;
  _exports.default = _default;
});