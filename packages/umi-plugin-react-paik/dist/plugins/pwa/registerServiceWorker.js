(function (global, factory) {
  if (typeof define === "function" && define.amd) {
    define(["exports", "register-service-worker"], factory);
  } else if (typeof exports !== "undefined") {
    factory(exports, require("register-service-worker"));
  } else {
    var mod = {
      exports: {}
    };
    factory(mod.exports, global.registerServiceWorker);
    global.registerServiceWorker = mod.exports;
  }
})(this, function (_exports, _registerServiceWorker) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  _exports.default = _default;

  // polyfill the CustomEvent in ie9/10/11
  // https://developer.mozilla.org/en-US/docs/Web/API/CustomEvent/CustomEvent#Polyfill
  (function () {
    if (typeof window.CustomEvent === 'function') return false;

    function CustomEvent(event, params) {
      params = params || {
        bubbles: false,
        cancelable: false,
        detail: undefined
      };
      var evt = document.createEvent('CustomEvent');
      evt.initCustomEvent(event, params.bubbles, params.cancelable, params.detail);
      return evt;
    }

    CustomEvent.prototype = window.Event.prototype;
    window.CustomEvent = CustomEvent;
  })();

  function dispatchServiceWorkerEvent(eventName, eventData) {
    var event = new CustomEvent(eventName, {
      detail: eventData
    });
    window.dispatchEvent(event);
  }

  function _default(swDest) {
    (0, _registerServiceWorker.register)("".concat(process.env.BASE_URL).concat(swDest), {
      updated: function updated(registration) {
        dispatchServiceWorkerEvent('sw.updated', registration);
      },
      offline: function offline() {
        dispatchServiceWorkerEvent('sw.offline', {});
      }
    });
  }
});