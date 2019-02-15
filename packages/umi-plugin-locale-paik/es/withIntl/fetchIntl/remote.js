define(["exports", "whatwg-fetch"], function (_exports, _whatwgFetch) {
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
    return window.fetch(request);
  }
});