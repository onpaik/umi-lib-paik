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