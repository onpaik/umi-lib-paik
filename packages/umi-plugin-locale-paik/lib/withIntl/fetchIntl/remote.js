"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = fetchRemoteIntl;

require("whatwg-fetch");

var apiUrl = function apiUrl(host, intlUrl) {
  return "".concat(host.replace(/\/+$/, ''), "/").concat(intlUrl.replace(/^\/+/, '').replace(/\/+$/, ''));
};

function fetchRemoteIntl(host, intlUrl, requestOptions) {
  var url = apiUrl(host, intlUrl);
  var request = new Request(apiUrl(host, intlUrl), requestOptions);
  return fetch(request);
}