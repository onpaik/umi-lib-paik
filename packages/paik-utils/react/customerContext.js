/* eslint-disable */
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
"use strict";