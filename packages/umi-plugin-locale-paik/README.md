# umi-plugin-locale-paik
官方插件改进版本

更多配置

支持json格式数据


## Usage
禁用umi-plugin-react的locale功能，
加载本插件
config/config.js 或者 .umirc.js
```
export default [
  // ref: https://umijs.org/plugin/umi-plugin-react.html
  [
    'umi-plugin-react',
    {
      ...
      antd: true,
      locale:false,
    },
  ],
  [
    'umi-plugin-locale-paik',
    {
      enable: true,
      baseNavigator: true,
      momentLocaleMap: { en: 'en-nz', zh: 'zh-cn' },
      antLocaleMap: { en: 'en_US', zh: 'zh_CN' },
      localeMap: { zh: 'zh-CN', en: 'en-US' },
      default: 'en',
    },
  ],
];
```
## momentLocaleMap , antLocaleMap 
moment,antd国际化文件名称并不是严格和浏览器语言一致的的，可以根据配置指定加载的文件

## localeMap
当 default 不是标准的文件命名时（如zh,en），指定和locale/locales下面的某个文件的国际化内容,
如上，当语言为zh时，使用zh-CN的本地国际化内容，当语言为en时，使用en-US的国际化内容

## 支持json文件格式的国际化文件
zh-CN.json
```
{
  "text":"{ text } 测试"
}
```
zh-CN.js
```
export default {
  text:'{ text } 测试'
}
```