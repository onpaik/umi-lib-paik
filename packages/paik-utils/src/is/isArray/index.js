import { is } from '../../common';

export const isArray = obj => {
  if (!Array.isArray) {
    return is(obj) === 'Array';
  }
  return Array.isArray(obj);
};

export default isArray;
