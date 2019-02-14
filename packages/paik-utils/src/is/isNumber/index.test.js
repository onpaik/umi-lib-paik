import isNumber from './index';

describe('isNumber should work fine', () => {
  it('should return true', () => {
    const obj1 = 2323;
    const obj2 = 2323.23;
    expect(isNumber(obj1)).toBeTruthy();
    expect(isNumber(obj2)).toBeTruthy();
  });
  it('should return false', () => {
    const obj = {};
    expect(isNumber(obj)).toBeFalsy();
  });
});
