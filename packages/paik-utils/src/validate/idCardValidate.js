/**
 * 身份证合法性校验
 * @param {*} idCard 身份证 15 或者 18位
 */
export const idCardValidate = idCard => {
  const Wi = [7, 9, 10, 5, 8, 4, 2, 1, 6, 3, 7, 9, 10, 5, 8, 4, 2, 1]; // 加权因子
  const ValideCode = [1, 0, 10, 9, 8, 7, 6, 5, 4, 3, 2]; // 身份证验证位值.10代表X
  const arr18 = new Array(17).fill(1);

  const isValidityBrithBy15IdCard = idCard15 => {
    const year = idCard15.substring(6, 8);
    const month = idCard15.substring(8, 10);
    const day = idCard15.substring(10, 12);
    const tempDate = new Date(year, parseFloat(month) - 1, parseFloat(day));
    // 对于老身份证中的你年龄则不需考虑千年虫问题而使用getYear()方法
    if (
      tempDate.getYear() !== parseFloat(year) ||
      tempDate.getMonth() !== parseFloat(month) - 1 ||
      tempDate.getDate() !== parseFloat(day)
    ) {
      return false;
    }
    return true;
  };

  const isValidityBrithBy18IdCard = idcard18 => {
    const year = idcard18.substring(6, 10);
    const month = idcard18.substring(10, 12);
    const day = idcard18.substring(12, 14);
    const tempDate = new Date(year, parseFloat(month) - 1, parseFloat(day));
    // 这里用getFullYear()获取年份，避免千年虫问题
    if (
      tempDate.getFullYear() !== parseFloat(year) ||
      tempDate.getMonth() !== parseFloat(month) - 1 ||
      tempDate.getDate() !== parseFloat(day)
    ) {
      return false;
    }
    return true;
  };

  const isTrueValidateCodeBy18IdCard = arrIdCard18 => {
    let sum = 0; // 声明加权求和变量
    const _arrIdCard18 = arrIdCard18;
    if (_arrIdCard18[17].toLowerCase() === 'x') {
      _arrIdCard18[17] = 10; // 将最后位为x的验证码替换为10方便后续操作
    }
    arr18.forEach((k, i) => {
      sum += Wi[i] * _arrIdCard18[i]; // 加权求和
    });
    const valCodePosition = sum % 11; // 得到验证码所位置
    if (Number(_arrIdCard18[17]) === ValideCode[valCodePosition]) {
      return true;
    }
    return false;
  };

  if (idCard.trim().length === 15) {
    return isValidityBrithBy15IdCard(idCard); // 进行15位身份证的验证
  }
  if (idCard.trim().length === 18) {
    const arrIdCard = idCard.split('');
    if (
      isValidityBrithBy18IdCard(idCard) &&
      isTrueValidateCodeBy18IdCard(arrIdCard)
    ) {
      return true;
    }
    return false;
  }
  return false;
};

export default idCardValidate;
