[![996.icu](https://img.shields.io/badge/link-996.icu-red.svg)](https://996.icu)
[![LICENSE](https://img.shields.io/badge/license-Anti%20996-blue.svg)](https://github.com/996icu/996.ICU/blob/master/LICENSE)

# umi-plugin-locale-paik

`umi`多语言国际化插件，官方[umi-plugin-locale](https://github.com/umijs/umi/tree/master/packages/umi-plugin-locale)的改进版本

+ 支持json格式数据
+ 支持命令行进行国际化数据提取
+ 支持动态加载国际化数据
+ 支持远程获取国际化获数据 `v3.1.x`
+ 国际化文件更新自动提取 `3.1.8`

## demo
`请务必查看实例仓库代码`
[umi-locale-demo](https://github.com/onpaik/umi-locale-demo)

## 升级至3.x 版本
> 不兼容版本。请升级至新版本
- 配置更改
- `umi intl` 命令会根据配置提取国际化到public
- `2.3.17`开始，**`messages`不再遵循 `singular`规则，始终为`messages`, 单数形式将不再被识别，不能提取国际化数据**
- 增加了webpack配置，build模式下，public/lang下面的文件不进行编译，减少体积

[v3.1.x 更新说明](https://github.com/onpaik/umi-lib-paik/tree/master/packages/umi-plugin-locale-paik/docs/v3.1.0.md)

[v3.0.x 更新说明](https://github.com/onpaik/umi-lib-paik/tree/master/packages/umi-plugin-locale-paik/docs/v3.0.0.md)

## 使用

`yarn` 或者 `npm`
```bash
$ yarn add umi-plugin-locale-paik

```
## 配置说明

本插件需要禁用官方插件`umi-plugin-react`的`locale`功能

`config/config.js` 或者 `.umirc.js`配置如下

```javascript
export default [
  [
    'umi-plugin-react',
    {
      ...
      antd: true,
      locale:false, // 禁用官方locale, 默认关闭
      ...
    },
  ],
  ['umi-plugin-locale-paik', options],
];
```
## options 默认值
```javascript
{
  baseNavigator: true,
  // momentLocaleMap: { en: 'en-nz', zh: 'zh-cn' },
  // antLocaleMap: { en: 'en_US', zh: 'zh_CN' },
  // localeMap: { zh: 'zh-CN', en: 'en-US' },
  // default: 'en',
  translate: false, 
  dynamicIntl: false,
  transLateSupport:{ 
    // translate 为 true, 才有效，默认四种国际化语言，如果不需要这么多，后续再优化 ~~~
    enUS:'en-US',
    zhCN:'zh-CN',
    zhTW:'zh-TW',
    zhHK:'zh-HK',
  }
}
```
## 目录说明

由于官方插件的国际化是放在`locales(locale)`文件夹下面, 本插件也继承了官方的设定, 保留了官方`umi-plugin-react` 插件`locale`的全部功能（`增加了json的支持`）， 所以禁用掉了官方功能，如果是在`locales`下面写国际化文件，请保持原样，仅仅是增加了json的支持。



`messages/`下面放本插件规定的国际化文件

`public/lang`下面放以语言为目录动态加载的国际化文件(json格式)

```dir
├── public/lang      // 动态国际化数据，不参与打包, json数据
    ├── zh-CN/
    ├   ├── Demo.json
    └── en-US/ 
        ├── Demo.json 
├── dist/                          
├── mock/                         
└── src/                          
    ├── layouts/index.js          
    ├── pages/
    |—— locales      // 此目录下的数据保持与官方规定一致，仅增加json支持
        |__ global.js
        |__ global.json                
    └── messages       // 本地国际化数据存放目录，支持js|ts（export default 形式），json
        ├── global.js
        └── global.json              
├── .env                          
└── package.json
```
>如果`.umirc.js(config/config.js)`里配置了`singular: true`，`messages`要改成`message`,`locales` 要改成 `locale`

## messages
messages目录下放置国际化数据,格式规定如下

1. 对象形式
2. 必须包含`id`,`defaultMessage` 两个key, 其余根据项目情况添加


`test.json`
```json
{
  "test":{
    "id":"title-test",
    "defaultMessage":"全局标题{title}",
    "enUS":"title-test {title}",
    "zhTW":"全域性標題{title}",
    "zhHK":"全局標題{title}"
    ...
  }
}
```
`test.js` 
```javascript
export default {
  test:{
    id:'title-test',
    defaultMessage:'全局标题{title}',
    enUS:'title-test {title}',
    zhTW:'全域性標題{title}',
    zhHK:'全局標題{title}',
  },
}
```
## options
```javascript
{
  baseNavigator: true,
  momentLocaleMap: { en: 'en-nz', zh: 'zh-cn' },
  antLocaleMap: { en: 'en_US', zh: 'zh_CN' },
  localeMap: { zh: 'zh-CN', en: 'en-US' },
  default: 'en',
  translate: true,
  dynamicIntl: true,
  transLateSupport:{
    enUS:'en-US',
    zhCN:'zh-CN',
    zhTW:'zh-TW',
    zhHK:'zh-HK',
  }
}
```
### options[baseNavigator|default]  
与官方配置相同

## options.momentLocaleMap options.antLocaleMap 
由于`moment`,`antd`国际化文件名称并不是严格和浏览器等到的语言名称一致的的，可以根据配置指定加载的文件

如上面配置所示，则是指定浏览器语言为`en`时，使用 `moment`下的`moment/locale/en-nz`国际化文件，`antd`下的`antd/lib/locale-provider/en-US`文件

## options.localeMap
当 `options.default` 不是标准的文件命名, 或者浏览器语言不是预期的`lang-country`形式时（如`zh`,`en`），此配置可以指定加载`locales`下的哪种国际化文件，如 `zh: 'zh-CN'`, 则会合并所有`locales`文件夹下面`zh-CN.json`或者`zh-CN.js`文件作为国际化资源
## options.transLateSupport
这个是`messages`下面国际化数据的map信息，用于表示目录与key的转换关系
用上面的`test.json`举例说明,如下配置

```javascript
{
  transLateSupport:{
    enUS:'en-US',
    zhCN:'zh-CN',
    zhTW:'zh-TW',
    zhHK:'zh-HK',
  }
}
```
`enUS:'en-US'`表示 `enUS`的value值会被提取到`en-US`文件里,

即最终生成的 `src/locales/en-US.json` 包含
```json
{
  ...
  "title-test"："title-test {title}"
  ...
}
```

## options.translate
当`translate=true`时，会增加一个`umi intl` 命令，此命令负责提取`messages`下面的国际化数据到`src/locales`目录下，根据`options.transLateSupport`的配置

>如果没有对`zhTW` `zhHK`指定数据，本插件默认开启了香港，台湾国际化使用[node-opencc](https://github.com/compulim/node-opencc)进行翻译，
## options.dynamicIntl
开启此功能后，`umi`项目中会新增一个API: `umi/withIntl`，可以通过引入这个新的API，获得动态加载国际化数据的功能

**`为了更多的灵活性，你必须对此API进行再次封装`**

项目中新建自己的工具函数，如 withIntl.js

`withIntl.js`
```js
import { withIntl } from 'umi/withIntl';
// import withIntl  from 'umi/withIntl';
import { getLocale } from 'umi/locale';
 
const locale = getLocale();
const getFloder = () => { // 自定义国际化对应关系
  if (locale.match(/zh/g)) return 'zh-CN'; 
  if (locale.match(/en/g)) return 'en-US'; 
  return locale;
};


export default component => withIntl(getFloder(getLocale()), component);

```
在组件中使用
```js

import { FormattedMessage, setLocale, getLocale } from 'umi/locale';
import withIntl from './withIntl';

const transLate = props => {
  const { formatMessage } = props.intl;
  ...
  return (
    {formatMessage({
      id: 'title-test',
    })}
  );
};

export default withIntl('TransLate')(transLate);

```
 `withIntl('TransLate')(transLate)` 代表 `transLate`组件会使用`public/lang/**/TransLate.json`里面的国际化数据


## TODO
[✔️]从`messags`提取国际化数据到`public/lang`
[✔️] 增加import polyfill