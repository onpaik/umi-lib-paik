/* eslint-disable */ 
 /**
 * 获取文件的base64字符串
 * @param {*} file 文件 blob 对象
 * @param {*} callback 回调函数，参数为base64
 */
export const getBase64 = (file, callback) => {
  const reader = new FileReader();
  reader.addEventListener('load', () => callback(reader.result));
  reader.readAsDataURL(file);
};

export default getBase64;
