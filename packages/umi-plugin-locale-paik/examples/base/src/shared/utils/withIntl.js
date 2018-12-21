import withIntl from 'umi/withIntl';
import { getFloder } from './getLocale';
import { getLocale } from 'umi/locale';

export default page => withIntl(getFloder(getLocale()), page);
