define(["exports"], function (_exports) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  _exports.default = parseArguments;

  var type = function type(obj) {
    return Object.prototype.toString.call(obj).replace(/^\[object ([a-zA-Z0-9]+)\]$/, '$1');
  };

  function parseArguments(arg) {
    var len = arg.length;
    var component = undefined;
    var options = {};
    if (len === 1 && type(arg[0]) === 'String') component = arg[0];
    if (len === 1 && type(arg[0]) === 'Object') options = arg[0];

    if (len === 2) {
      component = arg[0];
      options = arg[1];
    }

    return {
      component: component,
      options: options
    };
  }
});