import isArray from './index';

describe('isArray should work fine', () => {
  it('should return true', () => {
    const obj = [];
    expect(isArray(obj)).toBeTruthy();
  });
  it('should return false', () => {
    const obj = {};
    expect(isArray(obj)).toBeFalsy();
  });
});
