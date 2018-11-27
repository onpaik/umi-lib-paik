(function (global, factory) {
  if (typeof define === "function" && define.amd) {
    define(["exports", "is-plain-object", "lodash.isequal"], factory);
  } else if (typeof exports !== "undefined") {
    factory(exports, require("is-plain-object"), require("lodash.isequal"));
  } else {
    var mod = {
      exports: {}
    };
    factory(mod.exports, global.isPlainObject, global.lodash);
    global.index = mod.exports;
  }
})(this, function (_exports, _isPlainObject, _lodash) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  _exports.default = _default;
  _isPlainObject = _interopRequireDefault(_isPlainObject);
  _lodash = _interopRequireDefault(_lodash);

  function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

  function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; var ownKeys = Object.keys(source); if (typeof Object.getOwnPropertySymbols === 'function') { ownKeys = ownKeys.concat(Object.getOwnPropertySymbols(source).filter(function (sym) { return Object.getOwnPropertyDescriptor(source, sym).enumerable; })); } ownKeys.forEach(function (key) { _defineProperty(target, key, source[key]); }); } return target; }

  function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

  function toObject(o) {
    if (!(0, _isPlainObject.default)(o)) {
      return {};
    } else {
      return o;
    }
  }

  function getId(id) {
    return "umi-plugin-react-paik:".concat(id);
  }

  function getPlugins(obj) {
    return Object.keys(obj).filter(function (key) {
      return obj[key];
    });
  }

  function diffPlugins(newOption, oldOption) {
    return Object.keys(newOption).filter(function (key) {
      return newOption[key] && !(0, _lodash.default)(newOption[key], oldOption[key]);
    });
  }

  function _default(api, option) {
    var debug = api.debug;
    api.onOptionChange(function (newOption) {
      debug('new option');
      debug(newOption);

      if ((0, _lodash.default)(getPlugins(newOption), getPlugins(option))) {
        diffPlugins(newOption, option).forEach(function (key) {
          debug("change plugin option: ".concat(key));
          api.changePluginOption(getId(key), newOption[key]);
        });
        option = newOption;
      } else {
        debug('restart');
        api.restart();
      }
    });
    var plugins = {
      // mobile
      hd: function hd() {
        return require('./plugins/hd').default;
      },
      fastClick: function fastClick() {
        return require('./plugins/fastClick').default;
      },
      // performance
      library: function library() {
        return require('./plugins/library').default;
      },
      dynamicImport: function dynamicImport() {
        return require('./plugins/dynamicImport').default;
      },
      dll: function dll() {
        return require('./plugins/dll').default;
      },
      hardSource: function hardSource() {
        return require('./plugins/hardSource').default;
      },
      pwa: function pwa() {
        return require('./plugins/pwa').default;
      },
      // html tags
      chunks: function chunks() {
        return require('./plugins/chunks').default;
      },
      scripts: function scripts() {
        return require('./plugins/scripts').default;
      },
      headScripts: function headScripts() {
        return require('./plugins/headScripts').default;
      },
      links: function links() {
        return require('./plugins/links').default;
      },
      metas: function metas() {
        return require('./plugins/metas').default;
      },
      // misc
      dva: function dva() {
        return require('./plugins/dva').default;
      },
      locale: function locale() {
        return require('./plugins/locale').default;
      },
      polyfills: function polyfills() {
        return require('./plugins/polyfills').default;
      },
      routes: function routes() {
        return require('./plugins/routes').default;
      },
      antd: function antd() {
        return require('./plugins/antd').default;
      },
      title: function title() {
        return require('./plugins/title').default;
      }
    };
    Object.keys(plugins).forEach(function (key) {
      if (option[key]) {
        var opts = option[key];

        if (key === 'locale') {
          opts = _objectSpread({
            antd: option.antd
          }, opts);
        }

        if (key === 'dva') {
          opts = _objectSpread({}, toObject(opts), {
            dynamicImport: option.dynamicImport
          });
        }

        api.registerPlugin({
          id: getId(key),
          apply: plugins[key](),
          opts: opts
        });
      }
    });
  }
});