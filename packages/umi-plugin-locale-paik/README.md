 官方插件的改良版本

# usage
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
moment,antd国际化文件名称并不是严格和浏览器语言一致的的，可以根据配置指定加载的文件

## localeMap
当 default 不是标准的文件命名时（如zh,en），指定和locale/locales下面的某个文件的国际化内容,
如上，当语言为zh时，使用zh-CN的本地国际化内容，当语言为en时，使用en-US的国际化内容
