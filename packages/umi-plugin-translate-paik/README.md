# umi-plugin-translate-paik

`umi`多语言翻译插件

配合[umi-plugin-locale-paik](https://github.com/onpaik/umi-lib-paik/tree/master/packages/umi-plugin-locale-paik)使用。

由于没有umi合适的api进行自动化过程，故以命令形式调用

## 使用

```sh
umi intl
```

## 配置

**该插件开启后必须禁用官方插件的 locale**

**.umirc.js**

```js
export default {
  plugins: [
    [
      'umi-plugin-react',
      {
        locale:false
      }
    ],
    [
      'umi-plugin-locale-paik',
      {
        enable: true,
        baseNavigator: true,
        momentLocaleMap:{ en:'en-nz','zh':'zh-cn' },
        antLocaleMap:{ en:'en_US','zh':'zh_CN' },
        localeMap:{ zh:'zh-CN',en:'en-US'},
        default: 'zh',
      },
    ],
    [
      'umi-plugin-translate-paik',{
        support:{ // locale目录下的文件名
          enUS:'en-US',
          zhCN:'zh-CN',
          zhTW:'zh-TW',
          zhHK:'zh-HK',
        }
      }
    ]
  ],
  singular: true,
};
```

## 目录及约定

```
.
├── dist/                          
├── mock/                         
└── src/                          
    ├── layouts/index.js          
    ├── pages/                    
    └── messages       // 本地国际化数据存放目录，支持js（export default 形式），json
        ├── global.js
        └── global.json              
├── .umirc.js                     
├── .env                          
└── package.json
```


>如果`.umirc.js`里配置了`singular: true`，`messages`要改成`message`


## 多语言文件约定

多语言文件的命名规范：`<lang>-<COUNTRY>.js`


多语言文件的内容规范,id，defaultMessage 必须

global.js

```javascript
export default {
  global:{
    id:'title-global',
    defaultMessage:'全局标题{title}',
    enUS:'global-title {title}',
    zhTW:'全域性標題{title}',
    zhHK:'全局標題{title}',
  },
}
```

global.json

```javascript
{
  "global":{
    "id":"title-global",
    "defaultMessage":"全局标题{title}",
    "enUS":"global-title {title}",
    "zhTW":"全域性標題{title}",
    "zhHK":"全局標題{title}"
  }
}
```

## 说明

> 使用命令后会在src/locale目录下创建json文件，如果更改

> 香港，台湾国际化使用[node-opencc](https://github.com/compulim/node-opencc)进行翻译，

## example

index.jsx
```
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

```

![zh-CN](https://github.com/onpaik/umi-lib-paik/tree/master/packages/umi-plugin-translate-paik/assets/zh-CN.png)
![zh-TW](https://github.com/onpaik/umi-lib-paik/tree/master/packages/umi-plugin-translate-paik/assets/zh-TW.png)
![zh-HK](https://github.com/onpaik/umi-lib-paik/tree/master/packages/umi-plugin-translate-paik/assets/zh-HK.png)
![en-US](https://github.com/onpaik/umi-lib-paik/tree/master/packages/umi-plugin-translate-paik/assets/en-US.png)