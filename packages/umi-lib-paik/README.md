# umi相关工具函数
目前处于开发阶段, 提供一个函数 withIntl

## install

```
yarn add umi-lib-paik@0.0.3-alpha.0
```

## 目录及约定
> 约定public/lang 文件夹存放国际化数据 json格式
```
.
├── dist/   
├── public/lang // 动态国际化数据，不参与打包
    ├── zh-CN/
    ├   ├── Demo.json
    └── en-US/ 
        ├── Demo.json                           
└── src/                           
├── .umirc.js                     
├── .env                          
└── package.json
```

## usage

### withIntl (lang,page); 

国际化高阶组件，动态加载国际化数据

lang: 指在项目public下的文件夹名称

page: 返回ui的组件

>在自己项目里新增工具函数

withIntl.js
```javascript
import { withIntl } from 'umi-lib-paik';
import { getLocale } from 'umi/locale';

const locale = getLocale();
const getFloder = () => { // 自定义国际化与文件夹对应信息
  if(locale.match(/zh/gi)) return 'zh-CN';
  return locale;
}

export default page => withIntl(getFloder(), page);

```
> 在组件中使用

demo.js
```javascript
import { withIntl } from './withIntl.js';

const demo = (props) => {
  const { formatMessage } = props.intl;
  ...
}

export default withIntl('Demo')(demo);
// 大写的Demo表示，从哪个文件里获取数据，本例是从public/**/Demo.json;
// 小写的demo表示组件
```

TODO

[ ]配合umi-plugin-translate-paik提取国际化数据


[demo](https://onzmz.com/locale-translate-demo)