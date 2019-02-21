import is from '../../common/is';

export default function hasSymbols() {
  if (
    typeof Symbol !== 'function' ||
    typeof Object.getOwnPropertySymbols !== 'function'
  ) {
    return false;
  }
  if (typeof Symbol.iterator === 'symbol') {
    return true;
  }

  const obj = {};
  let sym = Symbol('test');
  const symObj = Object(sym);
  if (typeof sym === 'string') {
    return false;
  }
  if (is(sym) !== 'Symbol') {
    return false;
  }
  if (is(symObj) !== 'Symbol') {
    return false;
  }

  // temp disabled per https://github.com/ljharb/object.assign/issues/17
  // if (sym instanceof Symbol) { return false; }
  // temp disabled per https://github.com/WebReflection/get-own-property-symbols/issues/4
  // if (!(symObj instanceof Symbol)) { return false; }

  // if (typeof Symbol.prototype.toString !== 'function') { return false; }
  // if (String(sym) !== Symbol.prototype.toString.call(sym)) { return false; }

  const symVal = 42;
  obj[sym] = symVal;
  /* eslint-disable-next-line */
  for (sym in obj) {
    return false;
  } // eslint-disable-line no-restricted-syntax
  if (typeof Object.keys === 'function' && Object.keys(obj).length !== 0) {
    return false;
  }

  if (
    typeof Object.getOwnPropertyNames === 'function' &&
    Object.getOwnPropertyNames(obj).length !== 0
  ) {
    return false;
  }

  const syms = Object.getOwnPropertySymbols(obj);
  if (syms.length !== 1 || syms[0] !== sym) {
    return false;
  }

  if (!Object.prototype.propertyIsEnumerable.call(obj, sym)) {
    return false;
  }

  if (typeof Object.getOwnPropertyDescriptor === 'function') {
    const descriptor = Object.getOwnPropertyDescriptor(obj, sym);
    if (descriptor.value !== symVal || descriptor.enumerable !== true) {
      return false;
    }
  }

  return true;
}
