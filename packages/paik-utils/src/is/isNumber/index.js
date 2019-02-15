import { is } from '../../common';

export const isNumber = obj => is(obj) === 'Number';

export default isNumber;
