/**
 * 获取url 问号后的值
 * @param {*} name 需要获取的key
 * @return 字符串，没有则返回 null
 */
export const getParam = name => {
  const { href } = window.location;
  if (href.indexOf('?') !== -1) {
    const reg = new RegExp(`(^|&)${name}=([^&]*)(&|$)`);
    const param = decodeURIComponent(href).split(/\?/gi)[1];
    const r = param.match(reg);
    if (r) return r[2];
    return null;
  }
  return null;
};

export default getParam;
