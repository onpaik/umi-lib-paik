import isNull from './index';

describe('isNull should work fine', () => {
  it('should return true', () => {
    const obj = null;
    expect(isNull(obj)).toBeTruthy();
  });
  it('should return false', () => {
    const obj = {};
    expect(isNull(obj)).toBeFalsy();
  });
});
