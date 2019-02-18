/* eslint-disable */ 
 /**
 * hasOwnProperty
 * @param {*} obj 对象
 * @param {*} key key
 */
export const hasOwn = (obj, key) =>
  Object.prototype.hasOwnProperty.call(obj, key);

export default hasOwn;
