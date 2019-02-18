# paik-utils
前端自用工具函数，欢迎添加

## 按需引入
1. 可通过babel插件[babel-plugin-import](https://github.com/ant-design/babel-plugin-import)实现按需引入

`.babelrc` or `babel-loader`
```json
{
  "plugins":[
    [
      "import",
      {
        "libraryName": "paik-utils",
      },
    ],
  ]
}
```
2. 可直接引入单个函数
```js
import delInvalidProperty from 'paik-utils/commom/delInvalidProperty';
import sortTime from 'paik-utils/sort/sortTime';
import compose from 'paik-utils/compose';
```
3. 使用针对性babel插件[babel-plugin-import-paik](https://github.com/onpaik/umi-lib-paik/tree/master/packages/babel-plugin-import-paik)实现，无需写多余import路径

`.babelrc` or `babel-loader`
```json
{
  "plugins":[
    [
      "import-paik",
      {
        "preventFullImport": false, // 阻止全量引入 import x from 'paik-utils'; 默认不阻止
        "useLib": false // 默认不从lib文件夹寻找模块
      },
    ],
  ]
}
```
`test.js`
```js
import s, { time as _Time, is, timeInterval, isArray } from 'paik-utils';
```
编译后 `test.compiled.js` 如下
```js
/* eslint-disable */
import s from "paik-utils";
import _Time from "paik-utils/time";
import is from "paik-utils/common/is";
import timeInterval from "paik-utils/time/timeInterval";
import isArray from "paik-utils/is/isArray";
```