import { is } from '../../common';

export const spliceLineBreak = obj => {
  const newObj = {
    ...obj,
  };
  Object.entries(newObj).map(kayVal => {
    const [key, value] = kayVal;
    if (is(value) === 'String') newObj[key] = value.replace(/[\r\n]/g, '');
    return kayVal;
  });
  return newObj;
};
