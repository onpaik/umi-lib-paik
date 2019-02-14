import isString from './index';

describe('isString should work fine', () => {
  it('should return true', () => {
    const obj = 'string';
    expect(isString(obj)).toBeTruthy();
  });
  it('should return false', () => {
    const obj = [];
    expect(isString(obj)).toBeFalsy();
  });
});
