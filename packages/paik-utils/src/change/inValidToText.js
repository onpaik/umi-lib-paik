// String.fromCharCode(8212) === '-'
/**
 * @param {*} value 需要转换的值
 * @param {*} text 转换后的值
 * @param {*} transZero  Boolean 是否需要转换0,默认为false不转换，
 */
export const renderUndefined = (
  value,
  text = String.fromCharCode(8212),
  transZero = false,
) => {
  if (transZero && (value === 0 || value === '0')) return text;
  return !value && value !== 0 ? text : value;
};
