(function (global, factory) {
  if (typeof define === "function" && define.amd) {
    define(["exports", "@babel/runtime/helpers/typeof", "@babel/runtime/helpers/toConsumableArray", "@babel/runtime/helpers/objectSpread", "fs", "path", "assert", "mustache"], factory);
  } else if (typeof exports !== "undefined") {
    factory(exports, require("@babel/runtime/helpers/typeof"), require("@babel/runtime/helpers/toConsumableArray"), require("@babel/runtime/helpers/objectSpread"), require("fs"), require("path"), require("assert"), require("mustache"));
  } else {
    var mod = {
      exports: {}
    };
    factory(mod.exports, global._typeof, global.toConsumableArray, global.objectSpread, global.fs, global.path, global.assert, global.mustache);
    global.index = mod.exports;
  }
})(this, function (_exports, _typeof2, _toConsumableArray2, _objectSpread2, _fs, _path, _assert, _mustache) {
  "use strict";

  var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  _exports.modifyRoutes = modifyRoutes;
  _exports.default = void 0;
  _typeof2 = _interopRequireDefault(_typeof2);
  _toConsumableArray2 = _interopRequireDefault(_toConsumableArray2);
  _objectSpread2 = _interopRequireDefault(_objectSpread2);
  _assert = _interopRequireDefault(_assert);
  _mustache = _interopRequireDefault(_mustache);

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

        return (0, _objectSpread2.default)({}, memo, {
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
        route.Routes = [].concat((0, _toConsumableArray2.default)(route.Routes || []), [(0, _path.relative)(paths.cwd, (0, _path.join)(__dirname, 'TitleWrapper.jsx'))]);
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

    if ((0, _typeof2.default)(option) === 'object') {
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