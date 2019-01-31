import { writeFileSync } from 'fs';

export default {
  plugins: [
    ['umi-plugin-react',{
      locale: false
    }],
    [
      '../../src/index',
      {
        _dev: true,
        locale:{
          baseNavigator: true,
          momentMap:{ en:'en-nz','zh':'zh-cn' },
          antdMap:{ en:'en_US','zh':'zh_CN' },
          fileMap:{ zh:'zh-CN',en:'en-US'},
          default: 'zh',
        },
        translate:{
          support:{
            enUS:'en-US',
            zhCN:'zh-CN',
            zhTW:'zh-TW',
            zhHK:'zh-HK',
          }
        },
        dynamicIntl: true,
      },
    ],
    [
      '../../src/translate/index',
      {
        support:{
          enUS:'en-US',
          zhCN:'zh-CN',
          zhTW:'zh-TW',
          zhHK:'zh-HK',
        },
        dynamicIntl: true
      }
    ]
  ],
  chainWebpack(config, { webpack }) {
    config.resolve.modules.add('src');
    writeFileSync(`${__dirname.replace(/config/, 'temp.js')}`, config);
  },
};