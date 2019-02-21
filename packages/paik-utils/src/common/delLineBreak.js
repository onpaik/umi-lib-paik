/**
 * 删除字符串中的换行符
 * @param {*} val 字符串
 */
export const delLineBreak = val => val.replace(/[\r\n]/g, '');

export default delLineBreak;
