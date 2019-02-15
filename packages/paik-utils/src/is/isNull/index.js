import { is } from '../../common';

export const isNull = obj => is(obj) === 'Null';

export default isNull;
