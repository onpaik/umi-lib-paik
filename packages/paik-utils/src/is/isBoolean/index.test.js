import isBoolean from './index';

describe('isBoolean should work fine', () => {
  it('should return true', () => {
    const obj = true;
    expect(isBoolean(obj)).toBeTruthy();
  });
  it('should return false', () => {
    const obj = {};
    expect(isBoolean(obj)).toBeFalsy();
  });
});
