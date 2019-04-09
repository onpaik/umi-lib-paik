// import React, { useState } from 'react';
// export function createContextIO(initialState) {
//   const Context: any = React.createContext(initialState);
//   const NativeProvider = Context.Provider;
//   Context.Provider = ({ children }) => {
//     const [state, setState] = useState(initialState);
//     Context.write = setState;
//     Context.read = () => state;
//     return React.createElement(NativeProvider, { value: state }, children);
//   };
//   Context.write = Context.read = () => {
//     throw new Error('ContextIO not mount');
//   };
//   return Context;
// }

(function (global, factory) {
  if (typeof define === "function" && define.amd) {
    define([], factory);
  } else if (typeof exports !== "undefined") {
    factory();
  } else {
    var mod = {
      exports: {}
    };
    factory();
    global.customerContext = mod.exports;
  }
})(this, function () {
  "use strict";
});