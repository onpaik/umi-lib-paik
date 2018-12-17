define(["exports", "fs", "path", "assert", "mustache"], function (_exports, _fs, _path, _assert, _mustache) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  _exports.modifyRoutes = modifyRoutes;
  _exports.default = void 0;
  _assert = _interopRequireDefault(_assert);
  _mustache = _interopRequireDefault(_mustache);

  function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

  function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

  function _toConsumableArray(arr) { return _arrayWithoutHoles(arr) || _iterableToArray(arr) || _nonIterableSpread(); }

  function _nonIterableSpread() { throw new TypeError("Invalid attempt to spread non-iterable instance"); }

  function _iterableToArray(iter) { if (Symbol.iterator in Object(iter) || Object.prototype.toString.call(iter) === "[object Arguments]") return Array.from(iter); }

  function _arrayWithoutHoles(arr) { if (Array.isArray(arr)) { for (var i = 0, arr2 = new Array(arr.length); i < arr.length; i++) { arr2[i] = arr[i]; } return arr2; } }

  function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; var ownKeys = Object.keys(source); if (typeof Object.getOwnPropertySymbols === 'function') { ownKeys = ownKeys.concat(Object.getOwnPropertySymbols(source).filter(function (sym) { return Object.getOwnPropertyDescriptor(source, sym).enumerable; })); } ownKeys.forEach(function (key) { _defineProperty(target, key, source[key]); }); } return target; }

  function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

  var _default = function _default(api, option) {
    var paths = api.paths,
        config = api.config; // write titleWrapper at while launching

    writeTitleWrapper(paths, option.useLocale);
    api.onOptionChange(function (newOption) {
      option = newOption; // write titleWrapper whenever title option changed

      writeTitleWrapper(paths, option.useLocale);
      api.rebuildHTML();
    });
    api.modifyHTMLContext(function (memo, _ref) {
      var route = _ref.route;

      if (option) {
        var _parseOption = parseOption(option),
            defaultTitle = _parseOption.defaultTitle;

        return _objectSpread({}, memo, {
          title: config.exportStatic ? route._title : defaultTitle
        });
      }

      return memo;
    });
    api.modifyRoutes(function (memo) {
      return modifyRoutes(memo, option);
    });
    api.onPatchRoute(function (_ref2) {
      var route = _ref2.route;

      if (option && (!route.routes || !route.routes.length) && route.title) {
        // only open this plugin when option exist
        route.Routes = [].concat(_toConsumableArray(route.Routes || []), [(0, _path.relative)(paths.cwd, (0, _path.join)(__dirname, 'TitleWrapper.jsx'))]);
      }
    });
  };

  _exports.default = _default;

  function writeTitleWrapper(paths, useLocale) {
    var wrapperPath = (0, _path.join)(__dirname, './TitleWrapper.jsx');
    var wrapperTpl = (0, _fs.readFileSync)((0, _path.join)(__dirname, './template/TitleWrapper.js.tpl'), 'utf-8');

    var wrapperContent = _mustache.default.render(wrapperTpl, {
      useLocale: useLocale
    });

    (0, _fs.writeFileSync)(wrapperPath, wrapperContent, 'utf-8');
  }

  function parseOption(option) {
    // fill title with parent value or default value
    var defaultTitle = option;
    var format = '{parent}{separator}{current}';
    var separator = ' - ';

    if (_typeof(option) === 'object') {
      defaultTitle = option.defaultTitle;
      (0, _assert.default)(defaultTitle, 'defaultTitle in title option is required.');
      format = option.format || format;
      separator = option.separator || separator;
    }

    return {
      defaultTitle: defaultTitle,
      format: format,
      separator: separator
    };
  }

  function modifyRoutes(memo, option) {
    if (option) {
      var _parseOption2 = parseOption(option),
          defaultTitle = _parseOption2.defaultTitle,
          format = _parseOption2.format,
          separator = _parseOption2.separator;

      setDefaultTitleToRoutes({
        routes: memo,
        defaultTitle: defaultTitle,
        format: format,
        separator: separator,
        globalDefaultTitle: defaultTitle
      });
    }

    return memo;
  }

  function setDefaultTitleToRoutes(_ref3) {
    var routes = _ref3.routes,
        defaultTitle = _ref3.defaultTitle,
        parentTitle = _ref3.parentTitle,
        format = _ref3.format,
        separator = _ref3.separator,
        globalDefaultTitle = _ref3.globalDefaultTitle;
    routes.forEach(function (route) {
      if (route.title) {
        route._title = format.replace(/\{current\}/g, route.title).replace(/\{parent\}/g, parentTitle || '').replace(/\{separator\}/g, parentTitle ? separator : '');
      } else {
        // title no exist, use the defaultTitle
        route._title = defaultTitle;
      }

      route._title_default = globalDefaultTitle;

      if (route.routes) {
        setDefaultTitleToRoutes({
          routes: route.routes,
          defaultTitle: route._title,
          // title exist, set new parentTitle for children routes
          parentTitle: route.title || parentTitle,
          format: format,
          separator: separator,
          globalDefaultTitle: globalDefaultTitle
        });
      }
    });
  } // for unit test

});