/* eslint-disable */ 
 /**
 * 获取对象类型
 * @param {*} obj 对象
 */
export const is = obj =>
  Object.prototype.toString
    .call(obj)
    .replace(/^\[object ([a-zA-Z0-9]+)\]$/, '$1');
export default is;
