export const toUpperCase = str => String.prototype.toUpperCase.call(str || '');

export default toUpperCase;
