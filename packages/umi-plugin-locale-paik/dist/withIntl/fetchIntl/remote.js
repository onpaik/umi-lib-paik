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
    global.remote = mod.exports;
  }
})(this, function (_exports) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  _exports.default = fetchRemoteIntl;

  require('request');

  require('whatwg-fetch');

  var apiUrl = function apiUrl(host, intlUrl) {
    return "".concat(host.replace(/\/+$/, ''), "/").concat(intlUrl.replace(/^\/+/, '').replace(/\/+$/, ''));
  };

  function fetchRemoteIntl(host, intlUrl, requestOptions) {
    var url = apiUrl(host, intlUrl);
    var request = new Request(apiUrl(host, intlUrl), requestOptions);
    return fetch(request);
  }
});