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
