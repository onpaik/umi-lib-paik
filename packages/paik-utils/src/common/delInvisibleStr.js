/**
 * 删除不可见字符
 * @param {*} str 字符串
 */
export const delInvisibleStr = str => str.toString().replace(/\s*/g, '');

export default delInvisibleStr;
