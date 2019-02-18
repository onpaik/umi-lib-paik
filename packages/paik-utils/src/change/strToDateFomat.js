/* eslint-disable */ 
 /**
 * 转为形如`YYYYMMDDHHmmss`日期字符串 为 YYYY/MM/DD HH:mm:ss
 * @param {*} str 时间字符串
 * @param {*} sperate 日期分隔符
 */
export const strToDateFomat = (str, sperate = '/') =>
  str
    .replace(/(\d{4})(\d{2})(\d{2})(\d{2})(\d{2})(\d{2})/g, `$1/$2/$3 $4:$5:$6`)
    .replace(/\//, sperate);
export default strToDateFomat;
