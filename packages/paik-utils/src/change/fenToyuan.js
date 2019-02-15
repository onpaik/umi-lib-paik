/**
 * 分转换成元
 * @param {*} num 整数
 * @param {*} type 货币类型
 */
export const fenToyuan = (num, type = '') => {
  let _num = +num;
  // eslint-disable-next-line
  if (!isNaN(_num)) {
    _num = `${_num / 100}`;
    const reg =
      _num.indexOf('.') > -1
        ? /(\d{1,3})(?=(?:\d{3})+\.)/g
        : /(\d{1,3})(?=(?:\d{3})+$)/g;
    return `${type}${_num.replace(reg, '$1,')}`;
  }
  return num;
};

export default fenToyuan;
