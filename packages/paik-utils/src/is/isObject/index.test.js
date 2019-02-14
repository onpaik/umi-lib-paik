import isObject from './index';

describe('isObject should work fine', () => {
  it('should return true', () => {
    const obj = {};
    expect(isObject(obj)).toBeTruthy();
  });
  it('should return false', () => {
    const obj = [];
    expect(isObject(obj)).toBeFalsy();
  });
});
