define(["exports"], function (_exports) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  _exports.default = _exports.regExp = void 0;

  /* eslint-disable */
  var regExp = {
    /* 特殊字符 */
    special: /[`~·！!@￥$#%……^…&*（()）—_\-+=《》<>,，。./?？、|『』」「'|’"“”‘\\[{【】}\]\\||:；;：]+/,

    /* 字母数字 */
    numberAndLetter: /(^[A-Za-z0-9]+$)/,

    /* 字母、数字以英文逗号,分开 */
    dotDividedNumStr: /^([0-9]+,)*[0-9]+$/,

    /* 数字 */
    number: /(^[0-9]+$)/,

    /* 手机号 */
    mobile: /^1[345789]{1}[0-9]{9}$/i,

    /* 电话号码 */
    phone: /(^0[0-9]{2,3}-?[0-9]{7,8}$)|(^400\d{7}$)|(^1[345789]{1}[0-9]{9}$)/i,

    /* 邮箱或手机号 */
    emailOrMobile: /1(3[0-9]|47|5((?!4)[0-9])|7(0|1|[6-8])|8[0-9])\d{8,8}|^[A-Za-z0-9\u4e00-\u9fa5]+@[a-zA-Z0-9_-]+(\.[a-zA-Z0-9_-]+)+$/,

    /* 整数 */
    integer: /^[-]?[1-9]+\d*$|^0{1}$/i,

    /* 百分比 0% ~ 99.99% */
    percent: /^([1-9]\d{0,1}|0)(\.\d{1,2}(0?)+|\d{1,2})?$/,

    /* 金额，元，小数点后最多n位 */
    amountMoney: function amountMoney(n) {
      return new RegExp("^(([1-9][0-9]*)|(([0].d{0,6}|[1-9][0-9]*.d{0,".concat(n, "})))$"));
    },

    /* 合法 url */
    url: /(http|https):\/\/[\w\-_]+(\.[\w\-_]+)+([\w\-.,@?^=%&:/~+#]*[\w\-@?^=%&/~+#])?/i
  };
  _exports.regExp = regExp;
  var _default = regExp;
  _exports.default = _default;
});