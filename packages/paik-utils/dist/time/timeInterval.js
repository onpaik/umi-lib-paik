(function (global, factory) {
  if (typeof define === "function" && define.amd) {
    define(["exports"], factory);
  } else if (typeof exports !== "undefined") {
    factory(exports);
  } else {
    var mod = {
      exports: {}
    };
    factory(mod.exports);
    global.timeInterval = mod.exports;
  }
})(this, function (_exports) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  _exports.default = _exports.timeInterval = void 0;

  /**
   * 计算timestamp时间间隔
   * @param from 开始时间
   * @param to 结束时间，默认值当前日期的时间戳
   * @param options 设置年、月、日、时、分、秒、负数的显示
   */
  var timeInterval = function timeInterval() {
    var from = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : 0;
    var to = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : new Date().getTime();
    var options = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : {
      year: '年',
      month: '月',
      day: '日',
      hour: '时',
      minute: '分',
      second: '秒',
      negative: '之后'
    };
    var yearLevelValue = 365 * 24 * 60 * 60 * 1000;
    var monthLevelValue = 30 * 24 * 60 * 60 * 1000;
    var dayLevelValue = 24 * 60 * 60 * 1000;
    var hourLevelValue = 60 * 60 * 1000;
    var minuteLevelValue = 60 * 1000;
    var secondLevelValue = 1000;

    var getYear = function getYear(period) {
      return parseInt(period, 0) / yearLevelValue;
    };

    var getMonth = function getMonth(period) {
      return parseInt(period, 0) / monthLevelValue;
    };

    var getDay = function getDay(period) {
      return parseInt(period, 0) / dayLevelValue;
    };

    var getHour = function getHour(period) {
      return parseInt(period, 0) / hourLevelValue;
    };

    var getMinute = function getMinute(period) {
      return parseInt(period, 0) / minuteLevelValue;
    };

    var getSecond = function getSecond(period) {
      return parseInt(period, 0) / secondLevelValue;
    };

    var period = to - from;
    var isNegative = String(period).startsWith('-');
    if (isNegative) period = Math.abs(period);
    var year = parseInt(getYear(period), 0);
    var month = parseInt(getMonth(period - year * yearLevelValue), 0);
    var day = parseInt(getDay(period - year * yearLevelValue - month * monthLevelValue), 0);
    var hour = parseInt(getHour(period - year * yearLevelValue - month * monthLevelValue - day * dayLevelValue), 0);
    var minute = parseInt(getMinute(period - year * yearLevelValue - month * monthLevelValue - day * dayLevelValue - hour * hourLevelValue), 0);
    var second = parseInt(getSecond(period - year * yearLevelValue - month * monthLevelValue - day * dayLevelValue - hour * hourLevelValue - minute * minuteLevelValue), 0);
    var result = '';
    if (year !== 0) result = "".concat(result + year).concat(options.year);
    if (month !== 0) result = "".concat(result + month).concat(options.month);
    if (day !== 0) result = "".concat(result + day).concat(options.day);
    result = "".concat(result + hour).concat(options.hour).concat(minute).concat(options.minute).concat(second).concat(options.second, " ").concat(isNegative ? options.negative : '');
    return result;
  };

  _exports.timeInterval = timeInterval;
  var _default = timeInterval;
  _exports.default = _default;
});