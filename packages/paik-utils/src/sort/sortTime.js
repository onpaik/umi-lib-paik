/**
 * @param key String 需要排序的key值,只能排序时间
 * @param type String asc:升序;desc:降序
 * @param data 需要排序的数组
 * @return new Array
 */
export const sortTime = (key, data, type = 'desc') => {
  const typeMap = {
    desc: [1, -1],
    asc: [-1, 1],
  };
  const compare = (obj1, obj2) => {
    const val1 = new Date(obj1[key]).getTime();
    const val2 = new Date(obj2[key]).getTime();
    if (val1 === 'NaN' || val2 === 'NaN') return 0;
    if (val1 < val2) return typeMap[type][0];
    if (val1 > val2) return typeMap[type][1];
    return 0;
  };
  return data.sort(compare);
};

export default sortTime;
