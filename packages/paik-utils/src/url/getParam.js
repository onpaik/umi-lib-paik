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
    return obj;
  }
  return null;
};

export default getParams;
