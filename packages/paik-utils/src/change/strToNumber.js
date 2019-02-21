/**
 * 转换对象中属性值中的字符串为数字
 * @param {*} obj 对象
 */
export const strToNumber = obj => {
  const newObj = obj;
  Object.keys(obj).map(k => {
    if (Number(newObj[k])) newObj[k] = Number(newObj[k]);
    return k;
  });
  return newObj;
};
export default strToNumber;
