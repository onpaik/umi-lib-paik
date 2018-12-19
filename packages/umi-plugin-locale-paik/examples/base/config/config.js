// import { writeFileSync } from 'fs';

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
        translate: true,
        dynamicIntl: true,
        transLateSupport:{
          enUS:'en-US',
          zhCN:'zh-CN',
          zhTW:'zh-TW',
          zhHK:'zh-HK',
        }
      },
    ],
    // [
    //   '../../../umi-plugin-translate-paik/src/index',{
    //     support:{
    //       enUS:'en-US',
    //       zhCN:'zh-CN',
    //       zhTW:'zh-TW',
    //       zhHK:'zh-HK',
    //     }
    //   }
    // ]
  ],
  singular: true,
  chainWebpack(config, { webpack }) {
    config.resolve.modules.add('src');
    config.resolve.modules.add('public');
    // writeFileSync(`${__dirname.replace(/config/, 'temp.js')}`, config);
  }
};
