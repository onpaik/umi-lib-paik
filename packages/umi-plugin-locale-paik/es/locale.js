define(["exports", "react-intl"], function (_exports, _reactIntl) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  var _exportNames = {
    formatMessage: true,
    setLocale: true,
    getLocale: true,
    _setIntlObject: true
  };
  _exports.formatMessage = formatMessage;
  _exports.setLocale = setLocale;
  _exports.getLocale = getLocale;
  _exports._setIntlObject = _setIntlObject;
  Object.keys(_reactIntl).forEach(function (key) {
    if (key === "default" || key === "__esModule") return;
    if (Object.prototype.hasOwnProperty.call(_exportNames, key)) return;
    Object.defineProperty(_exports, key, {
      enumerable: true,
      get: function get() {
        return _reactIntl[key];
      }
    });
  });

  /* eslint-disable no-undef */
  function setLocale(lang) {
    if (lang && getLocale() !== lang) {
      window.localStorage.setItem('umi_locale', lang || '');
      window.location.reload();
    }
  }

  function getLocale() {
    return window.g_lang;
  }

  var intl = {
    formatMessage: function formatMessage() {
      return null;
    }
  }; // react-intl 没有直接暴露 formatMessage 这个方法
  // 只能注入到 props 中，所以通过在最外层包一个组件然后组件内调用这个方法来把 intl 这个对象暴露到这里来
  // TODO 查找有没有更好的办法

  function _setIntlObject(theIntl) {
    // umi 系统 API，不对外暴露
    intl = theIntl;
  }

  function formatMessage() {
    var _intl$formatMessage;

    return (_intl$formatMessage = intl.formatMessage).call.apply(_intl$formatMessage, [intl].concat(Array.prototype.slice.call(arguments)));
  }
});