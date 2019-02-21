define(["exports"], function (_exports) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  _exports.default = _exports.idCardValidate = void 0;

  /**
   * 身份证合法性校验
   * @param {*} idCard 身份证 15 或者 18位
   */
  var idCardValidate = function idCardValidate(idCard) {
    var Wi = [7, 9, 10, 5, 8, 4, 2, 1, 6, 3, 7, 9, 10, 5, 8, 4, 2, 1]; // 加权因子

    var ValideCode = [1, 0, 10, 9, 8, 7, 6, 5, 4, 3, 2]; // 身份证验证位值.10代表X

    var arr18 = new Array(17).fill(1);

    var isValidityBrithBy15IdCard = function isValidityBrithBy15IdCard(idCard15) {
      var year = idCard15.substring(6, 8);
      var month = idCard15.substring(8, 10);
      var day = idCard15.substring(10, 12);
      var tempDate = new Date(year, parseFloat(month) - 1, parseFloat(day)); // 对于老身份证中的你年龄则不需考虑千年虫问题而使用getYear()方法

      if (tempDate.getYear() !== parseFloat(year) || tempDate.getMonth() !== parseFloat(month) - 1 || tempDate.getDate() !== parseFloat(day)) {
        return false;
      }

      return true;
    };

    var isValidityBrithBy18IdCard = function isValidityBrithBy18IdCard(idcard18) {
      var year = idcard18.substring(6, 10);
      var month = idcard18.substring(10, 12);
      var day = idcard18.substring(12, 14);
      var tempDate = new Date(year, parseFloat(month) - 1, parseFloat(day)); // 这里用getFullYear()获取年份，避免千年虫问题

      if (tempDate.getFullYear() !== parseFloat(year) || tempDate.getMonth() !== parseFloat(month) - 1 || tempDate.getDate() !== parseFloat(day)) {
        return false;
      }

      return true;
    };

    var isTrueValidateCodeBy18IdCard = function isTrueValidateCodeBy18IdCard(arrIdCard18) {
      var sum = 0; // 声明加权求和变量

      var _arrIdCard18 = arrIdCard18;

      if (_arrIdCard18[17].toLowerCase() === 'x') {
        _arrIdCard18[17] = 10; // 将最后位为x的验证码替换为10方便后续操作
      }

      arr18.forEach(function (k, i) {
        sum += Wi[i] * _arrIdCard18[i]; // 加权求和
      });
      var valCodePosition = sum % 11; // 得到验证码所位置

      if (Number(_arrIdCard18[17]) === ValideCode[valCodePosition]) {
        return true;
      }

      return false;
    };

    if (idCard.trim().length === 15) {
      return isValidityBrithBy15IdCard(idCard); // 进行15位身份证的验证
    }

    if (idCard.trim().length === 18) {
      var arrIdCard = idCard.split('');

      if (isValidityBrithBy18IdCard(idCard) && isTrueValidateCodeBy18IdCard(arrIdCard)) {
        return true;
      }

      return false;
    }

    return false;
  };

  _exports.idCardValidate = idCardValidate;
  var _default = idCardValidate;
  _exports.default = _default;
});