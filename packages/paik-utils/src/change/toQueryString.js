import isArray from 'lodash/isArray';
import isObject from 'lodash/isObject';

/* support params schema
const data = {
  key1: 'string',
  key2: [1, 2, 3],
  key3: 1
};
*/

/**
 * 对象转为字符串
 * @param {*} object
 * @param {*} isDuplicateKey 是否将数组转化
 */
export const toQueryString = (object, isDuplicateKey) => {
  if (!isObject(object)) {
    return object;
  }

  const ret = Object.keys(object).map(key => {
    let value = object[key];
    if (isArray(value)) {
      if (isDuplicateKey) {
        return value
          .map(
            v =>
              `${encodeURIComponent(key)}=${encodeURIComponent(
                JSON.stringify(v),
              )}`,
          )
          .join('&');
      }
      value = value.map(v => JSON.stringify(v)).join(',');
    }
    return `${encodeURIComponent(key)}=${encodeURIComponent(value)}`;
  });
  return ret.join('&');
};

export default toQueryString;
