export default {
  plugins: [
    [
      '../../src/index',
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
      '../../../umi-plugin-translate-paik/src/index',{
        support:{
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
