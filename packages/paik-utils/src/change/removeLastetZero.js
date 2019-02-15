const regexp = /(?:\.0*|(\.\d+?)0+)$/; // 取消小数后面多余的0
export const removeLastetZero = num => String(num).replace(regexp, '$1');

export default removeLastetZero;
