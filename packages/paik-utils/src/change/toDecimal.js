/* eslint-disable */ 
 /**
 * 长小数保留小数位
 * @param {*} num 数字
 * @param {*} n 保留小数位
 */
export const toDecimal = (num, n) => {
  let f = parseFloat(num);
  const arr = Array.from(new Array(n).keys());
  /* eslint-disable-next-line */
  if (isNaN(f)) {
    return false;
  }
  let w = 1;
  arr.map(i => {
    w += '0';
    return i;
  });
  w -= 0;
  f = Math.round(num * w) / w;
  let s = f.toString();
  let rs = s.indexOf('.');
  if (rs < 0) {
    rs = s.length;
    s += '.';
  }
  while (s.length <= rs + 1) {
    s += '0';
  }
  return s;
};

export default toDecimal;
