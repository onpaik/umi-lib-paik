import {
  formatMessage,
  setLocale,
  getLocale,
  FormattedMessage,
} from 'umi/locale';
import { DatePicker } from 'antd';
// setLocale('en');
export default () => {
  console.log(
    getLocale(),
    formatMessage(
      {
        id: 'test',
      },
      {
        name: 'antd',
      },
    ),
  );
  return (
    <div>
      hello world.
      <FormattedMessage id="test" values={{ name: 'antd' }} />
      <br />
      <FormattedMessage id="test2" values={{ name: 'test2' }} />
      <DatePicker />
      <button
        onClick={() => {
          setLocale('en');
        }}
      >
        en-US
      </button>
      <button
        onClick={() => {
          setLocale('zh');
        }}
      >
        zh-CN
      </button>
    </div>
  );
};
