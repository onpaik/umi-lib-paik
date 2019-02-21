import is from '../common/is';
import delLineBreak from '../common/delLineBreak';

/**
 * 删除对象属性值中的换行符
 * @param {*} obj 对象
 */
export const spliceLineBreak = obj => {
  const newObj = {
    ...obj,
  };
  Object.entries(newObj).map(kayVal => {
    const [key, value] = kayVal;
    if (is(value) === 'String') newObj[key] = delLineBreak(value);
    return kayVal;
  });
  return newObj;
};
export default spliceLineBreak;
