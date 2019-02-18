/* eslint-disable */ 
 /**
 * 获取url 问号后的值
 * @param {*} name 需要获取的key，非必填
 * @return
 * 0、无结果，返回null
 *
 * 1、有参数name, 返回字符串或者null
 *
 * 2、无参数，返回对象
 */
export const getParams = name => {
  const { href } = window.location;
  const obj = {};
  if (href.indexOf('?') !== -1) {
    const params = decodeURIComponent(href.substring(href.indexOf('?') + 1));
    const paramArry = params.split('&');
    paramArry.map(str => {
      const keyValue = str.split('=');
      const [key, value] = keyValue;
      obj[key] = value;
      return str;
    });
    if (name && name in obj) return obj[name];

    if (name && !(name in obj)) return null;
    if (Object.keys(obj).length === 0) return null;
    return obj;
  }
  return null;
};

export default getParams;
