import { is } from '../../common';

export const isBoolean = obj => is(obj) === 'Boolean';

export default isBoolean;
