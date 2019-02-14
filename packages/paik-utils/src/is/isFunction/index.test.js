import isFunction from './index';

describe('isFunction should work fine', () => {
  it('should return true', () => {
    const obj = () => {};
    expect(isFunction(obj)).toBeTruthy();
  });
  it('should return false', () => {
    const obj = {};
    expect(isFunction(obj)).toBeFalsy();
  });
});
