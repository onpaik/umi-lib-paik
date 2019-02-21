/* eslint-disable */ 
import delInvalidProperty from '../../common';
import isEmptyObj from './isEmptyObj';

export const isEmptyValue = obj => {
  const newObj = delInvalidProperty(obj);
  if (isEmptyObj(newObj)) return true;
  return false;
};

export default isEmptyValue;