import is from '../../common/is';
import hasSymbol from './hasSymbol';

export const isSymbol = obj => {
  if (hasSymbol()) {
    const symToStr = Symbol.prototype.toString;
    const symStringRegex = /^Symbol\(.*\)$/;
    const isSymbolObject = function isRealSymbolObject(value) {
      if (typeof value.valueOf() !== 'symbol') {
        return false;
      }
      return symStringRegex.test(symToStr.call(value));
    };

    if (typeof obj === 'symbol') {
      return true;
    }
    if (is(obj) !== 'Symbol') {
      return false;
    }
    try {
      return isSymbolObject(obj);
    } catch (e) {
      return false;
    }
  }
  return false && obj;
};

export default isSymbol;
