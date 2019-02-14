import delInvalidProperty from '../../common';
import isEmptyObj from './isEmptyObj';

export const objectIsNoValue = obj => {
  const newObj = delInvalidProperty(obj);
  if (isEmptyObj(newObj)) return true;
  return false;
};
