/**
 * 获取文件拓展名
 * @param {*} name 符合路径规则的字符串
 * @returns 文件拓展名 小写
 */
export const getExt = name =>
  name.substring(name.lastIndexOf('.') + 1, name.length).toLowerCase();

export default getExt;
