# 3.0.x 更新日志

**`messages`不再遵循 `singular`规则，始终为`messages`, 单数形式将不再被识别，即不能提取`message`里国际化数据**
## v3.0.3
同步官方版本更新 
+  官方版本遗弃`umi/locale`形式，改用 `umi-plugin-react/locale` [#1657](https://github.com/umijs/umi/issues/1675), 由于本插件未与`umi-plugin-react`耦合，故新增alias, 以免使用者通过新方式使用到了官方的代码
+  `umi/locale` 新增 `formatHTMLMessage` 
+  ``

## 配置 options
新版本使用新的配置结构，更加结构化
```javascript
{
  locale:{
    baseNavigator: true, // 与之前的 options.baseNavigator 相同
    momentMap:{ en:'en-nz','zh':'zh-cn' }, // 与之前的 options.momentLocaleMap 相同
    antdMap:{ en:'en_US','zh':'zh_CN' }, // 与之前 options.antLocaleMap 相同
    fileMap:{ zh:'zh-CN',en:'en-US'}, // 与之前 options.localeMap 相同
    default: 'zh', // 与之前 options.default 相同
  },
  translate:{ // 开启translate，默认不开启，即`umi intl` 命令的开关,可为空对象
    support:{ // 与之前的 options.transLateSupport 相同
      enUS:'en-US',
      zhCN:'zh-CN',
      zhTW:'zh-TW',
      zhHK:'zh-HK',
    }
  },
  dynamicIntl: true, // 不变
}
```
## 提取动态国际化数据
开启 `translate` 功能并且`dynamicIntl=true`时，会遵循下面的规则提取动态的国际化数据到`public/lang`

### 规则
`messages`下面的文件如果名称前缀包含`d-`或者`D-`，将会被识别为动态的国际化数据，文件名去除掉`d-`或者`D-`之后(如果有值)，就是最终国际化数据存放的地方，数据会提取到`public/lang/**/{name}.json`下面，分别存到所支持的国际化语言(`options.translate.support`)目录下
+ 路径为 /**/message/a/b.js 非动态国际化文件，提取到`locales`
+ 路径为 /**/message/a/d-.js 非动态国际化文件，提取到`locales`
+ 路径为 /**/message/a/d-dd.js 动态国际化文件，提取到`public/lang/**/dd.json`
+ 路径为 /**/message/da-aa 非动态国际化文件，提取到`locales`
+ 路径为 /**/message/D-aa 非动态国际化文件，提取到`public/lang/**/a.json`

此时通过`withIntl('a')(component)` 即可使用`a.json`的国际化数据;

## support 优化

去除`support.zhTW` 与 `support.zhHK`的默认国际化支持，

