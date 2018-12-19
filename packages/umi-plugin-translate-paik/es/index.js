define(["exports", "@babel/runtime/helpers/defineProperty", "@babel/runtime/helpers/objectSpread", "@babel/runtime/regenerator", "@babel/runtime/helpers/asyncToGenerator", "@babel/polyfill", "path", "@babel/core", "fs", "mkdirp", "globby", "rimraf", "node-opencc", "chalk"], function (_exports, _defineProperty2, _objectSpread4, _regenerator, _asyncToGenerator2, _polyfill, _path, _core, _fs, _mkdirp, _globby, _rimraf, _nodeOpencc, _chalk) {
  "use strict";

  var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  _exports.default = _default;
  _defineProperty2 = _interopRequireDefault(_defineProperty2);
  _objectSpread4 = _interopRequireDefault(_objectSpread4);
  _regenerator = _interopRequireDefault(_regenerator);
  _asyncToGenerator2 = _interopRequireDefault(_asyncToGenerator2);
  _mkdirp = _interopRequireDefault(_mkdirp);
  _globby = _interopRequireDefault(_globby);
  _rimraf = _interopRequireDefault(_rimraf);
  _chalk = _interopRequireDefault(_chalk);
  var log = console.log;

  var merge = require('deepmerge');

  Object.assign(Array.prototype, {
    foreachSync: function () {
      var _foreachSync = (0, _asyncToGenerator2.default)(
      /*#__PURE__*/
      _regenerator.default.mark(function _callee(cb) {
        var index;
        return _regenerator.default.wrap(function _callee$(_context) {
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
      var _mapSync = (0, _asyncToGenerator2.default)(
      /*#__PURE__*/
      _regenerator.default.mark(function _callee3(cb) {
        var _this = this;

        return _regenerator.default.wrap(function _callee3$(_context3) {
          while (1) {
            switch (_context3.prev = _context3.next) {
              case 0:
                _context3.next = 2;
                return Promise.all(this.map(
                /*#__PURE__*/
                function () {
                  var _ref = (0, _asyncToGenerator2.default)(
                  /*#__PURE__*/
                  _regenerator.default.mark(function _callee2(obj, index) {
                    return _regenerator.default.wrap(function _callee2$(_context2) {
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
    _writeFile = (0, _asyncToGenerator2.default)(
    /*#__PURE__*/
    _regenerator.default.mark(function _callee4(destPath, code) {
      var dir;
      return _regenerator.default.wrap(function _callee4$(_context4) {
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
        data = (0, _objectSpread4.default)({}, data, _data, (0, _defineProperty2.default)({}, lang, (0, _objectSpread4.default)({}, data[lang], (0, _defineProperty2.default)({}, id, useTranslate(l, content[temp])))));
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
    _addIntl = (0, _asyncToGenerator2.default)(
    /*#__PURE__*/
    _regenerator.default.mark(function _callee5() {
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

      return _regenerator.default.wrap(function _callee5$(_context5) {
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
                _context5.next = 21;
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
              _context5.next = 17;
              return require(newPath).default;

            case 17:
              content = _context5.sent;
              _context5.next = 20;
              return _rimraf.default.sync("".concat(absSrcPath).concat(floder, "/").concat(tfloder));

            case 20:
              data = transLate(content, support, data);

            case 21:
              if (ext === 'json') {
                delete require.cache[path];
                _content = require(path);
                data = transLate(_content, support, data);
              }

              return _context5.abrupt("return", data);

            case 23:
            case "end":
              return _context5.stop();
          }
        }
      }, _callee5, this);
    }));
    return _addIntl.apply(this, arguments);
  }

  function logInfo(type, text) {
    var date = new Date().toLocaleString();
    log(_chalk.default.green("".concat(text, "[").concat(_chalk.default.yellow(date), "]")));
  }

  function getTransLataData() {
    return _getTransLataData.apply(this, arguments);
  }

  function _getTransLataData() {
    _getTransLataData = (0, _asyncToGenerator2.default)(
    /*#__PURE__*/
    _regenerator.default.mark(function _callee7() {
      var _len3,
          arg,
          _key4,
          singular,
          absSrcPath,
          support,
          msgFloder,
          data,
          _args7 = arguments;

      return _regenerator.default.wrap(function _callee7$(_context7) {
        while (1) {
          switch (_context7.prev = _context7.next) {
            case 0:
              for (_len3 = _args7.length, arg = new Array(_len3), _key4 = 0; _key4 < _len3; _key4++) {
                arg[_key4] = _args7[_key4];
              }

              singular = arg[0], absSrcPath = arg[1], support = arg[2];
              msgFloder = getmessageFloder(singular);
              data = {};
              logInfo('red', '文件转换开始');
              _context7.next = 7;
              return _globby.default.sync("**/".concat(msgFloder, "/*.{ts,js,json}"), {
                cwd: absSrcPath
              }).map(function (name) {
                return {
                  name: name,
                  path: (0, _path.join)(absSrcPath, name)
                };
              }).mapSync(
              /*#__PURE__*/
              function () {
                var _ref2 = (0, _asyncToGenerator2.default)(
                /*#__PURE__*/
                _regenerator.default.mark(function _callee6(file) {
                  var singal;
                  return _regenerator.default.wrap(function _callee6$(_context6) {
                    while (1) {
                      switch (_context6.prev = _context6.next) {
                        case 0:
                          _context6.next = 2;
                          return addIntl(file, singular, absSrcPath, support);

                        case 2:
                          singal = _context6.sent;
                          data = merge(singal, data);
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

            case 7:
              logInfo('green', '收集国际化信息结束');
              generateFile(data, support, absSrcPath, singular);
              logInfo('green', '恭喜你，文件写入成功');
              return _context7.abrupt("return", data);

            case 11:
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
      logInfo('red', "\u5F00\u59CB\u5199\u5165".concat(_chalk.default.magenta(lang), "\u6587\u4EF6"));
      var langPath = "".concat(absSrcPath, "/").concat(getLocaleFloder(singular), "/").concat(lang, ".json");

      if ((0, _fs.existsSync)(langPath)) {
        var orignData = require(langPath);

        (0, _fs.writeFileSync)(langPath, JSON.stringify((0, _objectSpread4.default)({}, orignData, data[lang]), null, '\t'));
      } else {
        (0, _fs.writeFileSync)(langPath, JSON.stringify(data[lang], null, '\t'));
      }

      logInfo('green', "".concat(_chalk.default.magenta(lang), "\u6587\u4EF6\u66F4\u65B0\u7ED3\u675F"));
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
    var support = (0, _objectSpread4.default)({}, opt.support, defaultSupport);
    api.addPageWatcher((0, _path.join)(absSrcPath, getmessageFloder(singular)));
    api.onOptionChange(function (newOpts) {
      opt = newOpts;
      api.rebuildTmpFiles();
    });
    api.registerCommand('intl', {
      hide: true
    }, function (args) {
      getTransLataData(singular, absSrcPath, support);
    });
  }
});