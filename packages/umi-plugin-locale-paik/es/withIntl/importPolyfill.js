define(["exports"], function (_exports) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  _exports.importPolyfill = importPolyfill;
  _exports.default = void 0;

  /* 
  ref: https://github.com/uupaa/dynamic-import-polyfill
  */
  function toAbsoluteURL(url) {
    var a = document.createElement("a");
    a.setAttribute("href", url); // <a href="hoge.html">

    return a.cloneNode(false).href; // -> "http://example.com/hoge.html"
  }

  function importPolyfill(url) {
    return new Promise(function (resolve, reject) {
      var vector = "$importPolyfill$" + Math.random().toString(32).slice(2);
      var script = document.createElement("script");

      var destructor = function destructor() {
        delete window[vector];
        script.onerror = null;
        script.onload = null;
        script.remove();
        URL.revokeObjectURL(script.src);
        script.src = "";
      };

      script.type = "module";

      script.onerror = function () {
        reject(new Error("Failed to import: ".concat(url)));
        destructor();
      };

      script.onload = function () {
        resolve(window[vector]);
        destructor();
      };

      var absURL = toAbsoluteURL(url);
      var loader = "import * as m from \"".concat(absURL, "\"; window.").concat(vector, " = m;"); // export Module

      var blob = new Blob([loader], {
        type: "text/javascript"
      });
      script.src = URL.createObjectURL(blob);
      document.head.appendChild(script);
    });
  }

  var _default = importPolyfill;
  _exports.default = _default;
});