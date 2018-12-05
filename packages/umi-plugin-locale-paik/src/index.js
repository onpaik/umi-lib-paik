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

function getMomentLocale(lang, country,momentLocaleMap) {
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
  if (momentLocaleMap && momentLocaleMap[lang] && existsSync(join(momentLocation, `${momentLocaleMap[lang]}.js`))) {
    return momentLocaleMap[lang];
  }
  return '';
}

function getAntdLocale(lang,country, antLocaleMap){
  if (
    country && existsSync(
      join(antLocation, `${lang}_${country}.js`),
    )
  ) {
    return `${lang}_${country}`;
  }
  if (antLocaleMap && antLocaleMap[lang] && existsSync(join(antLocation, `${antLocaleMap[lang]}.js`))) {
    return antLocaleMap[lang];
  }
  return '';
}
// export for test
export function getLocaleFileList(...arg) {
  const [ absSrcPath, absPagesPath, singular,momentLocaleMap,antLocaleMap ] = arg;
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
      antdLocale: getAntdLocale(fileInfo[0], fileInfo[1],antLocaleMap),
      momentLocale: getMomentLocale(fileInfo[0], fileInfo[1],momentLocaleMap),
    };
  });
}
// export for test
export function getLocaleFileListNew(...arg) {
  const [ absSrcPath, singular,momentLocaleMap,antLocaleMap ] = arg;
  const localeList = [];
  const localePath = join(absSrcPath, singular ? 'locale' : 'locales');
  if (existsSync(localePath)) {
    const localePaths = readdirSync(localePath);
    for (let i = 0; i < localePaths.length; i++) {
      const fullname = join(localePath, localePaths[i]);
      const stats = statSync(fullname);
      const fileInfo = /^([a-z]{2})-([A-Z]{2})\.(js|ts|json)$/.exec(localePaths[i]);
      if (stats.isFile() && fileInfo) {
        localeList.push({
          lang: fileInfo[1],
          country: fileInfo[2],
          name: `${fileInfo[1]}-${fileInfo[2]}`,
          paths: winPath(fullname),
          antdLocale: getAntdLocale(fileInfo[0], fileInfo[1],antLocaleMap),
          momentLocale: getMomentLocale(fileInfo[1], fileInfo[2],momentLocaleMap),
        });
      }
    }
  }
  return localeList;
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

export default function(api, options = {}) {
  const { config, paths } = api;
  const { targets } = config;
  const momentLocaleMap = options.momentLocaleMap || undefined;
  const antLocaleMap = options.antLocaleMap || undefined;
  const localeMap = options.localeMap || undefined;
  const defaultLocale = options.default || 'zh-CN';
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
      momentLocaleMap,
      antLocaleMap,
    );
    const wrapperTpl = readFileSync(
      join(__dirname, './template/wrapper.jsx.tpl'),
      'utf-8',
    );
    
    const [lang, country] = defaultLocale.split('-');
    let list = [];
    if(localeMap){
      const locales = Object.keys(localeMap);
      const _list = locales.map(lang => {
        const findLocale = localeFileList.find(o => o.name === localeMap[lang]);
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
      defaultAntdLocale: getAntdLocale(lang,country,antLocaleMap),
      defaultMomentLocale: getMomentLocale(lang, country,momentLocaleMap),
    });
    const wrapperPath = join(paths.absTmpDirPath, './LocaleWrapper.jsx');
    writeFileSync(wrapperPath, wrapperContent, 'utf-8');
    return wrapperPath;
  });

  api.modifyAFWebpackOpts(memo => {
    return {
      ...memo,
      alias: {
        ...(memo.alias || {}),
        'umi/locale': join(__dirname, './locale.js'),
        'react-intl': dirname(require.resolve('react-intl/package.json')),
      },
    };
  });
}
