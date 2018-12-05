import { FormattedMessage, setLocale, getLocale } from 'umi/locale';
import globalMsg from './message/global.json'
// import globalMsg from './message/global.js'

export default () => {
  const locale =  getLocale();
  const style = {
    backgroundColor: 'red',
  }
  return (
    <div>
      <FormattedMessage {...globalMsg.global } values={{title:'测试'}}/>
      <br></br>
      <button
        style={locale === 'zh-CN' ? style : {}}
        onClick={() => {
          setLocale('zh-CN');
        }}
      >
        zh-CN
      </button>
      <button
        style={locale === 'zh-TW' ? style : {}}
        onClick={() => {
          setLocale('zh-TW');
        }}
      >
        zh-TW
      </button>
      <button
        style={locale === 'zh-HK' ? style : {}}
        onClick={() => {
          setLocale('zh-HK');
        }}
      >
        zh-HK
      </button>
      <button
        style={locale === 'en-US' ? style : {}}
        onClick={() => {
          setLocale('en-US');
        }}
      >
        en-US
      </button>
    </div>
  );
};
