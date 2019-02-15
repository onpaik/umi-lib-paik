/**
 * 删除对象里的无效属性，不包括 0， false,
 * @param {*} obj 对象
 */
export const delInvalidProperty = obj => {
  const newObj = obj;
  Object.keys(obj).map(k => {
    // if (isString(newObj[k])) newObj[k] = newObj[k].replace(/(^\s*)|(\s*$)/g, '');
    if (!newObj[k] && newObj[k] !== 0 && newObj[k] !== false) delete newObj[k];
    return k;
  });
  return newObj;
};

export default delInvalidProperty;
