# paik-utils
A utils lib for frontEnd

## Useage
可通过babel插件[babel-plugin-import](https://github.com/ant-design/babel-plugin-import)实现按需引入

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
`test.js`
```js
import { time } from "paik-utils";

const { timeInterval } = time;

export timeInterval(new Date('2019-09-09').getTime());
```
## 按需引入，最小化文件体积
可直接引入单个函数
```js
import delInvalidProperty from 'paik-utils/commom/delInvalidProperty';
import sortTime from 'paik-utils/sort/sortTime';
import compose from 'paik-utils/compose';

```
