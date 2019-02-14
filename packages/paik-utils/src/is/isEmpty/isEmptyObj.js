export const isEmptyObj = target => {
  if (Object.keys(target).length === 0) return true;
  return false;
};

export default isEmptyObj;
