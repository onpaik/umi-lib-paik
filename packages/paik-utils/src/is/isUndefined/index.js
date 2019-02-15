import { is } from '../../common';

export const isUndefined = obj => is(obj) === 'Undefined';

export default isUndefined;
