import { join, dirname, basename,extname} from 'path';
import { existsSync, readFileSync, writeFileSync } from 'fs';
import { winPath } from 'umi-utils';
import Mustache from 'mustache';
import globby from 'globby';
import groupBy from 'lodash.groupby';

const momentLocation = require
  .resolve('moment/locale/zh-cn')
  .replace(/zh-cn\.js$/, '');

const antLocation = require
.resolve('antd/lib/locale-provider/zh_CN')
.replace(/zh_CN\.js$/, '');

function getMomentLocale(lang, country,momentMap) {
  if (
    country && existsSync(
      join(momentLocation, `${lang}-${country.toLocaleLowerCase()}.js`),
    )
  ) {
    return `${lang}-${country.toLocaleLowerCase()}`;
  }
  if (existsSync(join(momentLocation, `${lang}.js`))) {
    return lang;
  }
  if (momentMap && momentMap[lang] && existsSync(join(momentLocation, `${momentMap[lang]}.js`))) {
    return momentMap[lang];
  }
  return '';
}

function getAntdLocale(lang,country, antdMap){
  if (
    country && existsSync(
      join(antLocation, `${lang}_${country}.js`),
    )
  ) {
    return `${lang}_${country}`;
  }
  if (antdMap && antdMap[lang] && existsSync(join(antLocation, `${antdMap[lang]}.js`))) {
    return antdMap[lang];
  }
  return '';
}
// export for test
export function getLocaleFileList(...arg) {
  const [ absSrcPath, absPagesPath, singular,momentMap,antdMap ] = arg;
  const localeFileMath = /^([a-z]{2})-([A-Z]{2})\.(js|ts|json)$/;
  const localeFolder = singular ? 'locale' : 'locales';
  const localeFiles = globby
    .sync('*.{ts,js,json}', {
      cwd: join(absSrcPath, localeFolder),
    })
    .map(name => join(absSrcPath, localeFolder, name))
    .concat(
      globby
        .sync(`**/${localeFolder}/*.{ts,js,json}`, {
          cwd: absPagesPath,
        })
        .map(name => join(absPagesPath, name)),
    )
    .filter(p => localeFileMath.test(basename(p)))
    .map(fullname => {
      const fileName = basename(fullname);
      const fileInfo = localeFileMath.exec(fileName);
      return {
        name: `${fileInfo[1]}-${fileInfo[2]}`,
        path: fullname,
      };
    });
  const groups = groupBy(localeFiles, 'name');
  return Object.keys(groups).map(name => {
    const fileInfo = name.split('-');
    const paths = groups[name].map(item => winPath(item.path));
    const newPaths = paths.map(url=>({
      url,
      affter:extname(url).replace('.','') === 'json' ? '' : '.default',
    }))
    return {
      lang: fileInfo[0],
      name: name,
      country: fileInfo[1],
      paths:newPaths,
      antdLocale: getAntdLocale(fileInfo[0], fileInfo[1],antdMap),
      momentLocale: getMomentLocale(fileInfo[0], fileInfo[1],momentMap),
    };
  });
}

// data come from https://caniuse.com/#search=intl
// you can find all browsers in https://github.com/browserslist/browserslist#browsers
const polyfillTargets = {
  ie: 10,
  firefox: 28,
  chrome: 23,
  safari: 9.1,
  opera: 12.1,
  ios: 9.3,
  ios_saf: 9.3,
  operamini: Infinity,
  op_mini: Infinity,
  android: 4.3,
  blackberry: Infinity,
  operamobile: 12.1,
  op_mob: 12.1,
  explorermobil: 10,
  ie_mob: 10,
  ucandroid: Infinity,
};

export function isNeedPolyfill(targets = {}) {
  return (
    Object.keys(targets).find(key => {
      return (
        polyfillTargets[key.toLocaleLowerCase()] &&
        polyfillTargets[key.toLocaleLowerCase()] >= targets[key]
      );
    }) !== undefined
  );
}

function getOpts(key, options){
  if(key === 'translate'){
    const transLateSupport = options?.translate?.support || {};
    const dynamicIntl = options.dynamicIntl || undefined;
    const _unicode = options?.translate?._unicode || undefined;
    return {
      support:{
        ...transLateSupport,
      },
      dynamicIntl,
      _unicode
    }
  }
  return{}
}

export default function(api, options = {}) {
  const { config, paths } = api;
  const { targets } = config;
  const locale = options.locale || {};
  const momentMap = locale.momentMap || undefined;
  const antdMap = locale.antdMap || undefined;
  const fileMap = locale.fileMap || undefined;
  const _dev = options._dev || false;
  const defaultLocale = locale.default || 'zh-CN';
  if (isNeedPolyfill(targets)) {
    api.addEntryPolyfillImports({
      source: 'intl',
    });
  }

  api.addPageWatcher(
    join(paths.absSrcPath, config.singular ? 'locale' : 'locales'),
  );

  api.onOptionChange(newOpts => {
    options = newOpts;
    api.rebuildTmpFiles();
  });

  api.addRendererWrapperWithComponent(() => {
    const localeFileList = getLocaleFileList(
      paths.absSrcPath,
      paths.absPagesPath,
      config.singular,
      momentMap,
      antdMap,
    );
    const wrapperTpl = readFileSync(
      join(__dirname, './template/wrapper.jsx.tpl'),
      'utf-8',
    );
    
    const [lang, country] = defaultLocale.split('-');
    let list = [];
    if(fileMap){
      const locales = Object.keys(fileMap);
      const _list = locales.map(lang => {
        const findLocale = localeFileList.find(o => o.name === fileMap[lang]);
        return {
          ...findLocale,
          name: lang,
        };
      })
      list = _list;
    }
    const localeList = localeFileList.concat(list);
    const momentLocale = [];
    localeList.map(locale =>{
      momentLocale.push(locale.momentLocale);
      return locale;
    });
    const wrapperContent = Mustache.render(wrapperTpl, {
      localeList: localeList,
      momentLocaleList: Array.from(new Set(momentLocale)),
      antd: options.antd === undefined ? true : options.antd,
      baseNavigator:
        options.baseNavigator === undefined ? true : options.baseNavigator,
      useLocalStorage: true,
      defaultLocale,
      defaultLang: lang,
      defaultAntdLocale: getAntdLocale(lang,country,antdMap),
      defaultMomentLocale: getMomentLocale(lang, country,momentMap),
    });
    const wrapperPath = join(paths.absTmpDirPath, './LocaleWrapper.jsx');
    writeFileSync(wrapperPath, wrapperContent, 'utf-8');
    return wrapperPath;
  });
  if(!_dev){
    const plugins = {
      // translate
      translate: () => require('./translate').default,
    };
    Object.keys(plugins).forEach(key => {
      if(options[key]){
        api.registerPlugin({
          id: `umi-plugin-locale-paik:${key}`,
          apply: plugins[key](),
          opts: getOpts(key,options)
        });
      }
    });
  }
  api.chainWebpackConfig(webpackConfig => {
    const webpack = require(api._resolveDeps('af-webpack/webpack'));
    webpackConfig.resolve.modules.add('public');
    if (process.env.NODE_ENV === 'production') {
      webpackConfig
        .plugin('language')
        .use(webpack.IgnorePlugin, [/^\.\/js|json/, /public\/lang$/]);
    }
  })
  api.modifyAFWebpackOpts(memo => {
    const { dynamicIntl } = options;
    const opt = {
      ...memo,
      alias: {
        ...(memo.alias || {}),
        // 排除官方插件的干扰
        'umi/locale': join(__dirname, './locale.js'),
        'umi-plugin-react/locale': join(__dirname, './locale.js'),
        'umi-plugin-locale': join(__dirname, './locale.js'),
        'react-intl': dirname(require.resolve('react-intl/package.json')),
      },
    };
    if(dynamicIntl && !_dev){
      opt.alias['umi/withIntl'] = join(__dirname, './withIntl/index.js');
    }
    return opt;
  });
}
