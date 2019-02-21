/**
 * 删除首尾空格
 * @param {*} str 字符串
 */
export const trimLR = str => str.replace(/(^\s*)|(\s*$)/g, '');

export default trimLR;
