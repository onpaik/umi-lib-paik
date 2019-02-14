import isUndefined from './index';

describe('isUndefined should work fine', () => {
  it('should return true', () => {
    const obj = undefined;
    expect(isUndefined(obj)).toBeTruthy();
  });
  it('should return false', () => {
    const obj = [];
    expect(isUndefined(obj)).toBeFalsy();
  });
});
