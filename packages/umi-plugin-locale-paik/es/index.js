define(["exports", "path", "fs", "umi-utils", "mustache"], function (_exports, _path, _fs, _umiUtils, _mustache) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  _exports.getLocaleFileList = getLocaleFileList;
  _exports.isNeedPolyfill = isNeedPolyfill;
  _exports.default = _default;
  _mustache = _interopRequireDefault(_mustache);

  function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

  function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; var ownKeys = Object.keys(source); if (typeof Object.getOwnPropertySymbols === 'function') { ownKeys = ownKeys.concat(Object.getOwnPropertySymbols(source).filter(function (sym) { return Object.getOwnPropertyDescriptor(source, sym).enumerable; })); } ownKeys.forEach(function (key) { _defineProperty(target, key, source[key]); }); } return target; }

  function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

  function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _nonIterableRest(); }

  function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance"); }

  function _iterableToArrayLimit(arr, i) { var _arr = []; var _n = true; var _d = false; var _e = undefined; try { for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"] != null) _i["return"](); } finally { if (_d) throw _e; } } return _arr; }

  function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }

  var momentLocation = require.resolve('moment/locale/zh-cn').replace(/zh\-cn\.js$/, '');

  function getMomentLocale(lang, country) {
    if ((0, _fs.existsSync)((0, _path.join)(momentLocation, "".concat(lang, "-").concat(country.toLocaleLowerCase(), ".js")))) {
      return "".concat(lang, "-").concat(country.toLocaleLowerCase());
    }

    if ((0, _fs.existsSync)((0, _path.join)(momentLocation, "".concat(lang, ".js")))) {
      return lang;
    }

    return '';
  } // export for test


  function getLocaleFileList(absSrcPath, singular) {
    var localeList = [];
    var localePath = (0, _path.join)(absSrcPath, singular ? 'locale' : 'locales');

    if ((0, _fs.existsSync)(localePath)) {
      var localePaths = (0, _fs.readdirSync)(localePath);

      for (var i = 0; i < localePaths.length; i++) {
        var fullname = (0, _path.join)(localePath, localePaths[i]);
        var stats = (0, _fs.statSync)(fullname);
        var fileInfo = /^([a-z]{2})-([A-Z]{2})\.(js|ts)$/.exec(localePaths[i]);

        if (stats.isFile() && fileInfo) {
          localeList.push({
            lang: fileInfo[1],
            country: fileInfo[2],
            name: "".concat(fileInfo[1], "-").concat(fileInfo[2]),
            path: (0, _umiUtils.winPath)(fullname),
            momentLocale: getMomentLocale(fileInfo[1], fileInfo[2])
          });
        }
      }
    }

    return localeList;
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

  function _default(api) {
    var options = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};
    var config = api.config,
        paths = api.paths;
    var targets = config.targets;

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
      var localeFileList = getLocaleFileList(paths.absSrcPath, config.singular);
      var wrapperTpl = (0, _fs.readFileSync)((0, _path.join)(__dirname, '../template/wrapper.jsx.tpl'), 'utf-8');
      var defaultLocale = options.default || 'zh-CN';

      var _defaultLocale$split = defaultLocale.split('-'),
          _defaultLocale$split2 = _slicedToArray(_defaultLocale$split, 2),
          lang = _defaultLocale$split2[0],
          country = _defaultLocale$split2[1];

      var wrapperContent = _mustache.default.render(wrapperTpl, {
        localeList: localeFileList,
        antd: options.antd === undefined ? true : options.antd,
        baseNavigator: options.baseNavigator === undefined ? true : options.baseNavigator,
        useLocalStorage: true,
        defaultLocale: defaultLocale,
        defaultLang: lang,
        defaultAntdLocale: "".concat(lang, "_").concat(country),
        defaultMomentLocale: getMomentLocale(lang, country)
      });

      var wrapperPath = (0, _path.join)(paths.absTmpDirPath, './LocaleWrapper.jsx');
      (0, _fs.writeFileSync)(wrapperPath, wrapperContent, 'utf-8');
      return wrapperPath;
    });
    api.modifyAFWebpackOpts(function (memo) {
      return _objectSpread({}, memo, {
        alias: _objectSpread({}, memo.alias || {}, {
          'umi/locale': (0, _path.join)(__dirname, './locale.js'),
          'react-intl': (0, _path.dirname)(require.resolve('react-intl/package.json'))
        })
      });
    });
  }
});