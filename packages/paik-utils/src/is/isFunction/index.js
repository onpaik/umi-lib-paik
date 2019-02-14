import { is } from '../../common';

export const isFunction = obj => is(obj) === 'Function';

export default isFunction;
