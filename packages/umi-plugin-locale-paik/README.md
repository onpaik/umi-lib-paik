 官方插件的改良版本

# useage
```
{
  enable: true,
  baseNavigator: true,
  momentLocaleMap:{ en:'en-nz','zh':'zh-cn' },
  antLocaleMap:{ en:'en_US','zh':'zh_CN' },
  localeMap:{ zh:'zh-CN',en:'en-US'},
  default: 'zh',
}
```
## momentLocaleMap antLocaleMap 
moment,antd,并不是严格和浏览器语言一致的的国际化文件，可以根据配置指定加载的文件

## localeMap
当 default 不是标准的文件命名时，指定和locale/locales下面的某个文件的国际化内容
