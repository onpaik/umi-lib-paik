export const strToNumber = obj => {
  const newObj = obj;
  Object.keys(obj).map(k => {
    if (Number(newObj[k])) newObj[k] = Number(newObj[k]);
    return k;
  });
  return newObj;
};
export default strToNumber;
