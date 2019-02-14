export const is = obj =>
  Object.prototype.toString
    .call(obj)
    .replace(/^\[object ([a-zA-Z0-9]+)\]$/, '$1');
export default is;
