define(["exports", "@babel/polyfill", "path", "@babel/core", "fs", "mkdirp", "globby", "rimraf", "node-opencc"], function (_exports, _polyfill, _path, _core, _fs, _mkdirp, _globby, _rimraf, _nodeOpencc) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  _exports.default = _default;
  _mkdirp = _interopRequireDefault(_mkdirp);
  _globby = _interopRequireDefault(_globby);
  _rimraf = _interopRequireDefault(_rimraf);

  function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

  function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; var ownKeys = Object.keys(source); if (typeof Object.getOwnPropertySymbols === 'function') { ownKeys = ownKeys.concat(Object.getOwnPropertySymbols(source).filter(function (sym) { return Object.getOwnPropertyDescriptor(source, sym).enumerable; })); } ownKeys.forEach(function (key) { _defineProperty(target, key, source[key]); }); } return target; }

  function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

  function asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { Promise.resolve(value).then(_next, _throw); } }

  function _asyncToGenerator(fn) { return function () { var self = this, args = arguments; return new Promise(function (resolve, reject) { var gen = fn.apply(self, args); function _next(value) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "next", value); } function _throw(err) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "throw", err); } _next(undefined); }); }; }

  var merge = require('deepmerge');

  Object.assign(Array.prototype, {
    foreachSync: function () {
      var _foreachSync = _asyncToGenerator(
      /*#__PURE__*/
      regeneratorRuntime.mark(function _callee(cb) {
        var index;
        return regeneratorRuntime.wrap(function _callee$(_context) {
          while (1) {
            switch (_context.prev = _context.next) {
              case 0:
                index = 0;

              case 1:
                if (!(index < this.length)) {
                  _context.next = 7;
                  break;
                }

                _context.next = 4;
                return cb(this[index], index, this);

              case 4:
                index += 1;
                _context.next = 1;
                break;

              case 7:
              case "end":
                return _context.stop();
            }
          }
        }, _callee, this);
      }));

      return function foreachSync(_x) {
        return _foreachSync.apply(this, arguments);
      };
    }(),
    mapSync: function () {
      var _mapSync = _asyncToGenerator(
      /*#__PURE__*/
      regeneratorRuntime.mark(function _callee3(cb) {
        var _this = this;

        return regeneratorRuntime.wrap(function _callee3$(_context3) {
          while (1) {
            switch (_context3.prev = _context3.next) {
              case 0:
                _context3.next = 2;
                return Promise.all(this.map(
                /*#__PURE__*/
                function () {
                  var _ref = _asyncToGenerator(
                  /*#__PURE__*/
                  regeneratorRuntime.mark(function _callee2(obj, index) {
                    return regeneratorRuntime.wrap(function _callee2$(_context2) {
                      while (1) {
                        switch (_context2.prev = _context2.next) {
                          case 0:
                            _context2.next = 2;
                            return cb(obj, index, _this);

                          case 2:
                          case "end":
                            return _context2.stop();
                        }
                      }
                    }, _callee2, this);
                  }));

                  return function (_x3, _x4) {
                    return _ref.apply(this, arguments);
                  };
                }()));

              case 2:
              case "end":
                return _context3.stop();
            }
          }
        }, _callee3, this);
      }));

      return function mapSync(_x2) {
        return _mapSync.apply(this, arguments);
      };
    }()
  });

  function getBabelConfig() {
    return {
      presets: [[require.resolve('@babel/preset-env')]]
    };
  }

  function getmessageFloder(singular) {
    return singular ? 'message' : 'messages';
  }

  function getLocaleFloder(singular) {
    return singular ? 'locale' : 'locales';
  }

  function getTempLocale(singular) {
    return singular ? '.locale' : '.locales';
  }

  function noKey(obj) {
    return Object.keys(obj).length === 0;
  }

  function isEmpty(obj) {
    if (noKey(obj)) return true;
    var key = Object.keys(obj);
    key.map(function (k) {
      if (noKey(obj[k])) delete obj[k];
      return k;
    });
    if (noKey(obj)) return true;
    return false;
  }

  function writeFile(_x5, _x6) {
    return _writeFile.apply(this, arguments);
  }

  function _writeFile() {
    _writeFile = _asyncToGenerator(
    /*#__PURE__*/
    regeneratorRuntime.mark(function _callee4(destPath, code) {
      var dir;
      return regeneratorRuntime.wrap(function _callee4$(_context4) {
        while (1) {
          switch (_context4.prev = _context4.next) {
            case 0:
              dir = (0, _path.dirname)(destPath);
              _context4.next = 3;
              return _mkdirp.default.sync(dir);

            case 3:
              _context4.next = 5;
              return (0, _fs.writeFileSync)(destPath, code);

            case 5:
            case "end":
              return _context4.stop();
          }
        }
      }, _callee4, this);
    }));
    return _writeFile.apply(this, arguments);
  }

  function useTranslate(lang, data) {
    var defaultMessage = data.defaultMessage;
    if (lang === 'zhTW') return data[lang] || (0, _nodeOpencc.simplifiedToTaiwanWithPhrases)(defaultMessage);
    if (lang === 'zhHK') return data[lang] || (0, _nodeOpencc.simplifiedToHongKong)(defaultMessage);
    return data[lang] || defaultMessage;
  }

  function transLate() {
    for (var _len = arguments.length, arg = new Array(_len), _key2 = 0; _key2 < _len; _key2++) {
      arg[_key2] = arguments[_key2];
    }

    var content = arg[0],
        support = arg[1],
        _data = arg[2];

    var _key = Object.keys(content);

    var _localeKey = Object.keys(support);

    var data = {};
    Object.values(support).map(function (value) {
      data[value] = {};
      return value;
    });

    _key.map(function (temp) {
      var id = content[temp].id;

      _localeKey.map(function (l) {
        var lang = support[l];
        data = _objectSpread({}, data, _data, _defineProperty({}, lang, _objectSpread({}, data[lang], _defineProperty({}, id, useTranslate(l, content[temp])))));
        return l;
      });

      return temp;
    });

    return data;
  }

  function addIntl() {
    return _addIntl.apply(this, arguments);
  }

  function _addIntl() {
    _addIntl = _asyncToGenerator(
    /*#__PURE__*/
    regeneratorRuntime.mark(function _callee5() {
      var _len2,
          arg,
          _key3,
          file,
          singular,
          absSrcPath,
          support,
          path,
          ext,
          floder,
          tfloder,
          newPath,
          data,
          _transformFileSync,
          code,
          content,
          _content,
          _args5 = arguments;

      return regeneratorRuntime.wrap(function _callee5$(_context5) {
        while (1) {
          switch (_context5.prev = _context5.next) {
            case 0:
              for (_len2 = _args5.length, arg = new Array(_len2), _key3 = 0; _key3 < _len2; _key3++) {
                arg[_key3] = _args5[_key3];
              }

              file = arg[0], singular = arg[1], absSrcPath = arg[2], support = arg[3];
              path = file.path;
              ext = (0, _path.extname)(path).replace('.', '');
              floder = getLocaleFloder(singular);
              tfloder = getTempLocale(singular);
              newPath = path.replace(/src/, "src/".concat(floder, "/").concat(tfloder));
              data = {};

              if (!(ext === 'js' || ext === 'ts')) {
                _context5.next = 19;
                break;
              }

              _context5.next = 11;
              return _rimraf.default.sync("".concat(absSrcPath).concat(floder, "/").concat(tfloder));

            case 11:
              _transformFileSync = (0, _core.transformFileSync)(path, getBabelConfig()), code = _transformFileSync.code;
              _context5.next = 14;
              return writeFile(newPath, code);

            case 14:
              delete require.cache[newPath];
              content = require(newPath).default;
              _context5.next = 18;
              return _rimraf.default.sync("".concat(absSrcPath).concat(floder, "/").concat(tfloder));

            case 18:
              data = transLate(content, support, data);

            case 19:
              if (ext === 'json') {
                delete require.cache[path];
                _content = require(path);
                data = transLate(_content, support, data);
              }

              return _context5.abrupt("return", data);

            case 21:
            case "end":
              return _context5.stop();
          }
        }
      }, _callee5, this);
    }));
    return _addIntl.apply(this, arguments);
  }

  function getTransLataData() {
    return _getTransLataData.apply(this, arguments);
  }

  function _getTransLataData() {
    _getTransLataData = _asyncToGenerator(
    /*#__PURE__*/
    regeneratorRuntime.mark(function _callee7() {
      var _len3,
          arg,
          _key4,
          singular,
          absSrcPath,
          absPagesPath,
          support,
          msgFloder,
          data,
          _args7 = arguments;

      return regeneratorRuntime.wrap(function _callee7$(_context7) {
        while (1) {
          switch (_context7.prev = _context7.next) {
            case 0:
              for (_len3 = _args7.length, arg = new Array(_len3), _key4 = 0; _key4 < _len3; _key4++) {
                arg[_key4] = _args7[_key4];
              }

              singular = arg[0], absSrcPath = arg[1], absPagesPath = arg[2], support = arg[3];
              msgFloder = getmessageFloder(singular);
              data = {};
              _context7.next = 6;
              return _globby.default.sync('**/*.{ts,js,json}', {
                cwd: (0, _path.join)(absSrcPath, msgFloder)
              }).map(function (name) {
                return {
                  name: name,
                  path: (0, _path.join)(absSrcPath, msgFloder, name)
                };
              }).concat(_globby.default.sync('**/*.{ts,js,json}', {
                cwd: (0, _path.join)(absPagesPath, msgFloder)
              }).map(function (name) {
                return {
                  name: name,
                  path: (0, _path.join)(absPagesPath, msgFloder, name)
                };
              })).mapSync(
              /*#__PURE__*/
              function () {
                var _ref2 = _asyncToGenerator(
                /*#__PURE__*/
                regeneratorRuntime.mark(function _callee6(file) {
                  var singal;
                  return regeneratorRuntime.wrap(function _callee6$(_context6) {
                    while (1) {
                      switch (_context6.prev = _context6.next) {
                        case 0:
                          _context6.next = 2;
                          return addIntl(file, singular, absSrcPath, support);

                        case 2:
                          singal = _context6.sent;
                          data = merge(singal, data); // console.log(data);

                          return _context6.abrupt("return", file);

                        case 5:
                        case "end":
                          return _context6.stop();
                      }
                    }
                  }, _callee6, this);
                }));

                return function (_x7) {
                  return _ref2.apply(this, arguments);
                };
              }());

            case 6:
              generateFile(data, support, absSrcPath, singular);
              return _context7.abrupt("return", data);

            case 8:
            case "end":
              return _context7.stop();
          }
        }
      }, _callee7, this);
    }));
    return _getTransLataData.apply(this, arguments);
  }

  function generateFile() {
    for (var _len4 = arguments.length, arg = new Array(_len4), _key5 = 0; _key5 < _len4; _key5++) {
      arg[_key5] = arguments[_key5];
    }

    var data = arg[0],
        support = arg[1],
        absSrcPath = arg[2],
        singular = arg[3];
    var langs = Object.values(support);
    langs.map(function (lang) {
      var langPath = "".concat(absSrcPath, "/").concat(getLocaleFloder(singular), "/").concat(lang, ".json");

      if ((0, _fs.existsSync)(langPath)) {
        var orignData = require(langPath);

        (0, _fs.writeFileSync)(langPath, JSON.stringify(_objectSpread({}, orignData, data[lang]), null, '\t'));
      } else {
        (0, _fs.writeFileSync)(langPath, JSON.stringify(data[lang], null, '\t'));
      }
    });
  }

  function _default(api) {
    var opt = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};
    var defaultSupport = {
      enUS: 'en-US',
      zhCN: 'zh-CN',
      zhTW: 'zh-TW',
      zhHK: 'zh-HK'
    };
    var config = api.config,
        paths = api.paths;
    var singular = config.singular;
    var absSrcPath = paths.absSrcPath,
        absPagesPath = paths.absPagesPath;

    var support = _objectSpread({}, opt.support, defaultSupport);

    api.addPageWatcher((0, _path.join)(absSrcPath, getmessageFloder(singular)));
    api.onOptionChange(function (newOpts) {
      opt = newOpts;
      api.rebuildTmpFiles();
    });
    api.registerCommand('intl', {
      hide: true
    }, function (args) {
      getTransLataData(singular, absSrcPath, absPagesPath, support);
    });
  }
});