(function (global, factory) {
  if (typeof define === "function" && define.amd) {
    define(["exports", "whatwg-fetch"], factory);
  } else if (typeof exports !== "undefined") {
    factory(exports, require("whatwg-fetch"));
  } else {
    var mod = {
      exports: {}
    };
    factory(mod.exports, global.whatwgFetch);
    global.remote = mod.exports;
  }
})(this, function (_exports, _whatwgFetch) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  _exports.default = fetchRemoteIntl;

  var apiUrl = function apiUrl(host, intlUrl) {
    return "".concat(host.replace(/\/+$/, ''), "/").concat(intlUrl.replace(/^\/+/, '').replace(/\/+$/, ''));
  };

  function fetchRemoteIntl(host, intlUrl, requestOptions) {
    var url = apiUrl(host, intlUrl);
    var request = new Request(apiUrl(host, intlUrl), requestOptions);
    return fetch(request);
  }
});