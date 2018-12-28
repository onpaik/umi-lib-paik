"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.getLocaleFileList = getLocaleFileList;
exports.isNeedPolyfill = isNeedPolyfill;
exports.default = _default;

var _slicedToArray2 = _interopRequireDefault(require("@babel/runtime/helpers/slicedToArray"));

var _objectSpread2 = _interopRequireDefault(require("@babel/runtime/helpers/objectSpread"));

var _path = require("path");

var _fs = require("fs");

var _umiUtils = require("umi-utils");

var _mustache = _interopRequireDefault(require("mustache"));

var _globby = _interopRequireDefault(require("globby"));

var _lodash = _interopRequireDefault(require("lodash.groupby"));

var momentLocation = require.resolve('moment/locale/zh-cn').replace(/zh-cn\.js$/, '');

var antLocation = require.resolve('antd/lib/locale-provider/zh_CN').replace(/zh_CN\.js$/, '');

function getMomentLocale(lang, country, momentMap) {
  if (country && (0, _fs.existsSync)((0, _path.join)(momentLocation, "".concat(lang, "-").concat(country.toLocaleLowerCase(), ".js")))) {
    return "".concat(lang, "-").concat(country.toLocaleLowerCase());
  }

  if ((0, _fs.existsSync)((0, _path.join)(momentLocation, "".concat(lang, ".js")))) {
    return lang;
  }

  if (momentMap && momentMap[lang] && (0, _fs.existsSync)((0, _path.join)(momentLocation, "".concat(momentMap[lang], ".js")))) {
    return momentMap[lang];
  }

  return '';
}

function getAntdLocale(lang, country, antdMap) {
  if (country && (0, _fs.existsSync)((0, _path.join)(antLocation, "".concat(lang, "_").concat(country, ".js")))) {
    return "".concat(lang, "_").concat(country);
  }

  if (antdMap && antdMap[lang] && (0, _fs.existsSync)((0, _path.join)(antLocation, "".concat(antdMap[lang], ".js")))) {
    return antdMap[lang];
  }

  return '';
} // export for test


function getLocaleFileList() {
  for (var _len = arguments.length, arg = new Array(_len), _key = 0; _key < _len; _key++) {
    arg[_key] = arguments[_key];
  }

  var absSrcPath = arg[0],
      absPagesPath = arg[1],
      singular = arg[2],
      momentMap = arg[3],
      antdMap = arg[4];
  var localeFileMath = /^([a-z]{2})-([A-Z]{2})\.(js|ts|json)$/;
  var localeFolder = singular ? 'locale' : 'locales';

  var localeFiles = _globby.default.sync('*.{ts,js,json}', {
    cwd: (0, _path.join)(absSrcPath, localeFolder)
  }).map(function (name) {
    return (0, _path.join)(absSrcPath, localeFolder, name);
  }).concat(_globby.default.sync("**/".concat(localeFolder, "/*.{ts,js,json}"), {
    cwd: absPagesPath
  }).map(function (name) {
    return (0, _path.join)(absPagesPath, name);
  })).filter(function (p) {
    return localeFileMath.test((0, _path.basename)(p));
  }).map(function (fullname) {
    var fileName = (0, _path.basename)(fullname);
    var fileInfo = localeFileMath.exec(fileName);
    return {
      name: "".concat(fileInfo[1], "-").concat(fileInfo[2]),
      path: fullname
    };
  });

  var groups = (0, _lodash.default)(localeFiles, 'name');
  return Object.keys(groups).map(function (name) {
    var fileInfo = name.split('-');
    var paths = groups[name].map(function (item) {
      return (0, _umiUtils.winPath)(item.path);
    });
    var newPaths = paths.map(function (url) {
      return {
        url: url,
        affter: (0, _path.extname)(url).replace('.', '') === 'json' ? '' : '.default'
      };
    });
    return {
      lang: fileInfo[0],
      name: name,
      country: fileInfo[1],
      paths: newPaths,
      antdLocale: getAntdLocale(fileInfo[0], fileInfo[1], antdMap),
      momentLocale: getMomentLocale(fileInfo[0], fileInfo[1], momentMap)
    };
  });
} // data come from https://caniuse.com/#search=intl
// you can find all browsers in https://github.com/browserslist/browserslist#browsers


var polyfillTargets = {
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
  ucandroid: Infinity
};

function isNeedPolyfill() {
  var targets = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};
  return Object.keys(targets).find(function (key) {
    return polyfillTargets[key.toLocaleLowerCase()] && polyfillTargets[key.toLocaleLowerCase()] >= targets[key];
  }) !== undefined;
}

function getOpts(key, options) {
  if (key === 'translate') {
    var _options$translate;

    var transLateSupport = (options === null || options === void 0 ? void 0 : (_options$translate = options.translate) === null || _options$translate === void 0 ? void 0 : _options$translate.support) || {};
    var dynamicIntl = options.dynamicIntl || undefined;
    return {
      support: (0, _objectSpread2.default)({}, transLateSupport),
      dynamicIntl: dynamicIntl
    };
  }

  return {};
}

function _default(api) {
  var options = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};
  var config = api.config,
      paths = api.paths;
  var targets = config.targets;
  var locale = options.locale || {};
  var momentMap = locale.momentMap || undefined;
  var antdMap = locale.antdMap || undefined;
  var fileMap = locale.fileMap || undefined;

  var _dev = options._dev || false;

  var defaultLocale = locale.default || 'zh-CN';

  if (isNeedPolyfill(targets)) {
    api.addEntryPolyfillImports({
      source: 'intl'
    });
  }

  api.addPageWatcher((0, _path.join)(paths.absSrcPath, config.singular ? 'locale' : 'locales'));
  api.onOptionChange(function (newOpts) {
    options = newOpts;
    api.rebuildTmpFiles();
  });
  api.addRendererWrapperWithComponent(function () {
    var localeFileList = getLocaleFileList(paths.absSrcPath, paths.absPagesPath, config.singular, momentMap, antdMap);
    var wrapperTpl = (0, _fs.readFileSync)((0, _path.join)(__dirname, './template/wrapper.jsx.tpl'), 'utf-8');

    var _defaultLocale$split = defaultLocale.split('-'),
        _defaultLocale$split2 = (0, _slicedToArray2.default)(_defaultLocale$split, 2),
        lang = _defaultLocale$split2[0],
        country = _defaultLocale$split2[1];

    var list = [];

    if (fileMap) {
      var locales = Object.keys(fileMap);

      var _list = locales.map(function (lang) {
        var findLocale = localeFileList.find(function (o) {
          return o.name === fileMap[lang];
        });
        return (0, _objectSpread2.default)({}, findLocale, {
          name: lang
        });
      });

      list = _list;
    }

    var localeList = localeFileList.concat(list);
    var momentLocale = [];
    localeList.map(function (locale) {
      momentLocale.push(locale.momentLocale);
      return locale;
    });

    var wrapperContent = _mustache.default.render(wrapperTpl, {
      localeList: localeList,
      momentLocaleList: Array.from(new Set(momentLocale)),
      antd: options.antd === undefined ? true : options.antd,
      baseNavigator: options.baseNavigator === undefined ? true : options.baseNavigator,
      useLocalStorage: true,
      defaultLocale: defaultLocale,
      defaultLang: lang,
      defaultAntdLocale: getAntdLocale(lang, country, antdMap),
      defaultMomentLocale: getMomentLocale(lang, country, momentMap)
    });

    var wrapperPath = (0, _path.join)(paths.absTmpDirPath, './LocaleWrapper.jsx');
    (0, _fs.writeFileSync)(wrapperPath, wrapperContent, 'utf-8');
    return wrapperPath;
  });

  if (!_dev) {
    var plugins = {
      // translate
      translate: function translate() {
        return require('./translate').default;
      }
    };
    Object.keys(plugins).forEach(function (key) {
      if (options[key]) {
        api.registerPlugin({
          id: "umi-plugin-locale-paik:".concat(key),
          apply: plugins[key](),
          opts: getOpts(key, options)
        });
      }
    });
  }

  api.chainWebpackConfig(function (webpackConfig) {
    var webpack = require(api._resolveDeps('af-webpack/webpack'));

    webpackConfig.resolve.modules.add('public');

    if (process.env.NODE_ENV === 'production') {
      webpackConfig.plugin('language').use(webpack.IgnorePlugin, [/^\.\/js|json/, /public\/lang$/]);
    }
  });
  api.modifyAFWebpackOpts(function (memo) {
    var _options = options,
        dynamicIntl = _options.dynamicIntl;
    var opt = (0, _objectSpread2.default)({}, memo, {
      alias: (0, _objectSpread2.default)({}, memo.alias || {}, {
        'umi/locale': (0, _path.join)(__dirname, './locale.js'),
        'umi-plugin-react/locale': (0, _path.join)(__dirname, './locale.js'),
        'react-intl': (0, _path.dirname)(require.resolve('react-intl/package.json'))
      })
    });

    if (dynamicIntl && !_dev) {
      opt.alias['umi/withIntl'] = (0, _path.join)(__dirname, './withIntl/index.js');
    }

    return opt;
  });
}