define(["exports", "@babel/runtime/helpers/defineProperty", "@babel/runtime/helpers/objectSpread", "@babel/runtime/regenerator", "@babel/runtime/helpers/asyncToGenerator", "@babel/polyfill", "path", "@babel/core", "fs", "mkdirp", "globby", "rimraf", "umi-utils", "ora", "execa", "node-opencc", "chalk"], function (_exports, _defineProperty2, _objectSpread5, _regenerator, _asyncToGenerator2, _polyfill, _path, _core, _fs, _mkdirp, _globby, _rimraf, _umiUtils, _ora, _execa, _nodeOpencc, _chalk) {
  "use strict";

  var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  _exports.default = _default;
  _defineProperty2 = _interopRequireDefault(_defineProperty2);
  _objectSpread5 = _interopRequireDefault(_objectSpread5);
  _regenerator = _interopRequireDefault(_regenerator);
  _asyncToGenerator2 = _interopRequireDefault(_asyncToGenerator2);
  _mkdirp = _interopRequireDefault(_mkdirp);
  _globby = _interopRequireDefault(_globby);
  _rimraf = _interopRequireDefault(_rimraf);
  _ora = _interopRequireDefault(_ora);
  _execa = _interopRequireDefault(_execa);
  _chalk = _interopRequireDefault(_chalk);

  var deepmerge = require('deepmerge');

  var log = console.log;
  var dynamicReg = /^(d|D)-\S+/g;
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
    return 'messages';
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

  function getExt(path) {
    return (0, _path.extname)(path).replace('.', '');
  }

  function getFileName(path) {
    return (0, _path.basename)(path, (0, _path.extname)(path));
  }

  function getDynamicName(path) {
    return getFileName(path).replace(/^(d|D)-/, '');
  }

  function logInfo(type, text) {
    var date = new Date().toLocaleString();
    log(_chalk.default[type]("".concat(text, "[").concat(_chalk.default.yellow(date), "]\n")));
  }

  function writeFile(_x5, _x6) {
    return _writeFile.apply(this, arguments);
  }

  function _writeFile() {
    _writeFile = (0, _asyncToGenerator2.default)(
    /*#__PURE__*/
    _regenerator.default.mark(function _callee5(destPath, code) {
      var dir;
      return _regenerator.default.wrap(function _callee5$(_context5) {
        while (1) {
          switch (_context5.prev = _context5.next) {
            case 0:
              dir = (0, _path.dirname)(destPath);
              _context5.next = 3;
              return _mkdirp.default.sync(dir);

            case 3:
              _context5.next = 5;
              return (0, _fs.writeFileSync)(destPath, code);

            case 5:
            case "end":
              return _context5.stop();
          }
        }
      }, _callee5, this);
    }));
    return _writeFile.apply(this, arguments);
  }

  function useTranslate(lang, data) {
    var defaultMessage = data.defaultMessage;
    if (lang.match(/tw/gi)) return data[lang] || (0, _nodeOpencc.simplifiedToTaiwanWithPhrases)(defaultMessage);
    if (lang.match(/hk/gi)) return data[lang] || (0, _nodeOpencc.simplifiedToHongKong)(defaultMessage);
    return data[lang] || defaultMessage;
  }

  function transLate() {
    for (var _len = arguments.length, arg = new Array(_len), _key2 = 0; _key2 < _len; _key2++) {
      arg[_key2] = arguments[_key2];
    }

    var content = arg[0],
        support = arg[1],
        _data = arg[2],
        path = arg[3],
        spinner = arg[4];

    if (!content) {
      var info = "".concat(_chalk.default.blue(path));
      spinner.fail("".concat(_chalk.default.red("\u56FD\u9645\u5316\u5185\u5BB9\u4E3A\u7A7A\uFF0C\u6570\u636E\u63D0\u53D6\u5931\u8D25 (".concat(info, ") \n"))));
      process.exit(1);
    }

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
        data = (0, _objectSpread5.default)({}, data, _data, (0, _defineProperty2.default)({}, lang, (0, _objectSpread5.default)({}, data[lang], (0, _defineProperty2.default)({}, id, useTranslate(l, content[temp])))));
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
    _regenerator.default.mark(function _callee6() {
      var _len2,
          arg,
          _key3,
          file,
          singular,
          absSrcPath,
          support,
          spinner,
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
          _args6 = arguments;

      return _regenerator.default.wrap(function _callee6$(_context6) {
        while (1) {
          switch (_context6.prev = _context6.next) {
            case 0:
              for (_len2 = _args6.length, arg = new Array(_len2), _key3 = 0; _key3 < _len2; _key3++) {
                arg[_key3] = _args6[_key3];
              }

              file = arg[0], singular = arg[1], absSrcPath = arg[2], support = arg[3], spinner = arg[4];
              path = file.path;
              ext = getExt(path);
              floder = getLocaleFloder(singular);
              tfloder = getTempLocale(singular);
              newPath = (0, _umiUtils.winPath)(path.replace(/src/, "src/".concat(floder, "/").concat(tfloder)));
              data = {};

              if (!ext.match(/^(j|t)s$/i)) {
                _context6.next = 21;
                break;
              }

              _context6.next = 11;
              return _rimraf.default.sync((0, _umiUtils.winPath)("".concat(absSrcPath).concat(floder, "/").concat(tfloder)));

            case 11:
              _transformFileSync = (0, _core.transformFileSync)(path, getBabelConfig()), code = _transformFileSync.code;
              _context6.next = 14;
              return writeFile(newPath, code);

            case 14:
              delete require.cache[newPath];
              _context6.next = 17;
              return require(newPath).default;

            case 17:
              content = _context6.sent;
              _context6.next = 20;
              return _rimraf.default.sync((0, _umiUtils.winPath)("".concat(absSrcPath).concat(floder, "/").concat(tfloder)));

            case 20:
              data = transLate(content, support, data, path);

            case 21:
              if (ext.match(/^json$/i)) {
                delete require.cache[path];
                _content = require(path);
                data = transLate(_content, support, data, path);
              }

              return _context6.abrupt("return", data);

            case 23:
            case "end":
              return _context6.stop();
          }
        }
      }, _callee6, this);
    }));
    return _addIntl.apply(this, arguments);
  }

  function transLatePublic() {
    return _transLatePublic.apply(this, arguments);
  }

  function _transLatePublic() {
    _transLatePublic = (0, _asyncToGenerator2.default)(
    /*#__PURE__*/
    _regenerator.default.mark(function _callee9() {
      var _len3,
          arg,
          _key4,
          content,
          support,
          path,
          spinner,
          info,
          locales,
          localeKey,
          data,
          temp,
          _args9 = arguments;

      return _regenerator.default.wrap(function _callee9$(_context9) {
        while (1) {
          switch (_context9.prev = _context9.next) {
            case 0:
              for (_len3 = _args9.length, arg = new Array(_len3), _key4 = 0; _key4 < _len3; _key4++) {
                arg[_key4] = _args9[_key4];
              }

              content = arg[0], support = arg[1], path = arg[2], spinner = arg[3];

              if (!content) {
                info = "".concat(_chalk.default.blue(path));
                spinner.color = 'red';
                spinner.fail("".concat(_chalk.default.red("\u56FD\u9645\u5316\u5185\u5BB9\u4E3A\u7A7A\uFF0C\u6570\u636E\u63D0\u53D6\u5931\u8D25 (".concat(info, ") \n"))));
                process.exit(1);
              }

              locales = Object.values(support);
              localeKey = Object.keys(support);
              data = {};
              locales.map(function (lang) {
                data[lang] = {};
                return lang;
              });
              _context9.next = 9;
              return Object.values(content).mapSync(
              /*#__PURE__*/
              function () {
                var _ref4 = (0, _asyncToGenerator2.default)(
                /*#__PURE__*/
                _regenerator.default.mark(function _callee8(obj) {
                  var id, stemp;
                  return _regenerator.default.wrap(function _callee8$(_context8) {
                    while (1) {
                      switch (_context8.prev = _context8.next) {
                        case 0:
                          id = obj.id;
                          _context8.next = 3;
                          return localeKey.mapSync(
                          /*#__PURE__*/
                          function () {
                            var _ref5 = (0, _asyncToGenerator2.default)(
                            /*#__PURE__*/
                            _regenerator.default.mark(function _callee7(k) {
                              return _regenerator.default.wrap(function _callee7$(_context7) {
                                while (1) {
                                  switch (_context7.prev = _context7.next) {
                                    case 0:
                                      data[support[k]] = (0, _objectSpread5.default)({}, data[support[k]], (0, _defineProperty2.default)({}, id, useTranslate(k, obj)));
                                      return _context7.abrupt("return", k);

                                    case 2:
                                    case "end":
                                      return _context7.stop();
                                  }
                                }
                              }, _callee7, this);
                            }));

                            return function (_x15) {
                              return _ref5.apply(this, arguments);
                            };
                          }());

                        case 3:
                          stemp = _context8.sent;
                          return _context8.abrupt("return", obj);

                        case 5:
                        case "end":
                          return _context8.stop();
                      }
                    }
                  }, _callee8, this);
                }));

                return function (_x14) {
                  return _ref4.apply(this, arguments);
                };
              }());

            case 9:
              temp = _context9.sent;
              return _context9.abrupt("return", data);

            case 11:
            case "end":
              return _context9.stop();
          }
        }
      }, _callee9, this);
    }));
    return _transLatePublic.apply(this, arguments);
  }

  function generatePublicFile() {
    return _generatePublicFile.apply(this, arguments);
  }

  function _generatePublicFile() {
    _generatePublicFile = (0, _asyncToGenerator2.default)(
    /*#__PURE__*/
    _regenerator.default.mark(function _callee10() {
      var _len4,
          arg,
          _key5,
          file,
          absSrcPath,
          support,
          collectData,
          spinner,
          _tempData,
          name,
          path,
          dynamicName,
          tempPublicPath,
          tempFilePath,
          ext,
          _transformFileSync2,
          code,
          content,
          data,
          _content2,
          _data2,
          _args10 = arguments;

      return _regenerator.default.wrap(function _callee10$(_context10) {
        while (1) {
          switch (_context10.prev = _context10.next) {
            case 0:
              for (_len4 = _args10.length, arg = new Array(_len4), _key5 = 0; _key5 < _len4; _key5++) {
                arg[_key5] = _args10[_key5];
              }

              file = arg[0], absSrcPath = arg[1], support = arg[2], collectData = arg[3], spinner = arg[4];
              _tempData = collectData;
              name = file.name, path = file.path;
              dynamicName = getDynamicName(name);
              tempPublicPath = (0, _umiUtils.winPath)("".concat(absSrcPath.replace(/src\//, 'public/.lang')));
              tempFilePath = (0, _umiUtils.winPath)("".concat(tempPublicPath, "/").concat(name));
              ext = getExt(path);
              _tempData = (0, _defineProperty2.default)({}, dynamicName, (0, _objectSpread5.default)({}, collectData[dynamicName] || {}));

              if (!ext.match(/^(j|t)s$/i)) {
                _context10.next = 25;
                break;
              }

              _context10.next = 12;
              return _rimraf.default.sync(tempPublicPath);

            case 12:
              _transformFileSync2 = (0, _core.transformFileSync)(path, getBabelConfig()), code = _transformFileSync2.code;
              _context10.next = 15;
              return writeFile(tempFilePath, code);

            case 15:
              delete require.cache[tempFilePath];
              _context10.next = 18;
              return require(tempFilePath).default;

            case 18:
              content = _context10.sent;
              _context10.next = 21;
              return _rimraf.default.sync(tempPublicPath);

            case 21:
              _context10.next = 23;
              return transLatePublic(content, support, path, spinner);

            case 23:
              data = _context10.sent;
              _tempData[dynamicName] = deepmerge(data, _tempData[dynamicName]);

            case 25:
              if (!ext.match(/^json$/i)) {
                _context10.next = 32;
                break;
              }

              delete require.cache[tempFilePath];
              _content2 = require(tempFilePath);
              _context10.next = 30;
              return transLatePublic(_content2, support, path, spinner);

            case 30:
              _data2 = _context10.sent;
              _tempData[dynamicName] = deepmerge(_data2, _tempData[dynamicName]);

            case 32:
              return _context10.abrupt("return", _tempData);

            case 33:
            case "end":
              return _context10.stop();
          }
        }
      }, _callee10, this);
    }));
    return _generatePublicFile.apply(this, arguments);
  }

  function writePublic(_x7, _x8) {
    return _writePublic.apply(this, arguments);
  }

  function _writePublic() {
    _writePublic = (0, _asyncToGenerator2.default)(
    /*#__PURE__*/
    _regenerator.default.mark(function _callee13(data, absSrcPath) {
      return _regenerator.default.wrap(function _callee13$(_context13) {
        while (1) {
          switch (_context13.prev = _context13.next) {
            case 0:
              _context13.next = 2;
              return Object.keys(data).mapSync(
              /*#__PURE__*/
              function () {
                var _ref6 = (0, _asyncToGenerator2.default)(
                /*#__PURE__*/
                _regenerator.default.mark(function _callee12(name) {
                  var distFloder;
                  return _regenerator.default.wrap(function _callee12$(_context12) {
                    while (1) {
                      switch (_context12.prev = _context12.next) {
                        case 0:
                          distFloder = "".concat(absSrcPath.replace(/src\//, 'public/lang'));
                          _context12.next = 3;
                          return Object.keys(data[name]).mapSync(
                          /*#__PURE__*/
                          function () {
                            var _ref7 = (0, _asyncToGenerator2.default)(
                            /*#__PURE__*/
                            _regenerator.default.mark(function _callee11(lang) {
                              var filePath, orignData;
                              return _regenerator.default.wrap(function _callee11$(_context11) {
                                while (1) {
                                  switch (_context11.prev = _context11.next) {
                                    case 0:
                                      filePath = (0, _umiUtils.winPath)("".concat(distFloder, "/").concat(lang, "/").concat(name, ".json"));

                                      if (!(0, _fs.existsSync)(filePath)) {
                                        _context11.next = 7;
                                        break;
                                      }

                                      orignData = require(filePath);
                                      _context11.next = 5;
                                      return (0, _fs.writeFileSync)(filePath, JSON.stringify((0, _objectSpread5.default)({}, orignData, data[name][lang]), null, '\t'));

                                    case 5:
                                      _context11.next = 9;
                                      break;

                                    case 7:
                                      _context11.next = 9;
                                      return writeFile(filePath, JSON.stringify(data[name][lang], null, '\t'));

                                    case 9:
                                      return _context11.abrupt("return", lang);

                                    case 10:
                                    case "end":
                                      return _context11.stop();
                                  }
                                }
                              }, _callee11, this);
                            }));

                            return function (_x17) {
                              return _ref7.apply(this, arguments);
                            };
                          }());

                        case 3:
                          return _context12.abrupt("return", name);

                        case 4:
                        case "end":
                          return _context12.stop();
                      }
                    }
                  }, _callee12, this);
                }));

                return function (_x16) {
                  return _ref6.apply(this, arguments);
                };
              }());

            case 2:
            case "end":
              return _context13.stop();
          }
        }
      }, _callee13, this);
    }));
    return _writePublic.apply(this, arguments);
  }

  function generateFile() {
    return _generateFile.apply(this, arguments);
  }

  function _generateFile() {
    _generateFile = (0, _asyncToGenerator2.default)(
    /*#__PURE__*/
    _regenerator.default.mark(function _callee15() {
      var _len5,
          arg,
          _key6,
          data,
          support,
          absSrcPath,
          singular,
          langs,
          _args15 = arguments;

      return _regenerator.default.wrap(function _callee15$(_context15) {
        while (1) {
          switch (_context15.prev = _context15.next) {
            case 0:
              for (_len5 = _args15.length, arg = new Array(_len5), _key6 = 0; _key6 < _len5; _key6++) {
                arg[_key6] = _args15[_key6];
              }

              data = arg[0], support = arg[1], absSrcPath = arg[2], singular = arg[3];
              langs = Object.values(support);
              langs.mapSync(
              /*#__PURE__*/
              function () {
                var _ref8 = (0, _asyncToGenerator2.default)(
                /*#__PURE__*/
                _regenerator.default.mark(function _callee14(lang) {
                  var langPath, orignData;
                  return _regenerator.default.wrap(function _callee14$(_context14) {
                    while (1) {
                      switch (_context14.prev = _context14.next) {
                        case 0:
                          langPath = (0, _umiUtils.winPath)("".concat(absSrcPath, "/").concat(getLocaleFloder(singular), "/").concat(lang, ".json"));

                          if (!(0, _fs.existsSync)(langPath)) {
                            _context14.next = 7;
                            break;
                          }

                          orignData = require(langPath);
                          _context14.next = 5;
                          return (0, _fs.writeFileSync)(langPath, JSON.stringify((0, _objectSpread5.default)({}, orignData, data[lang]), null, '\t'));

                        case 5:
                          _context14.next = 9;
                          break;

                        case 7:
                          _context14.next = 9;
                          return (0, _fs.writeFileSync)(langPath, JSON.stringify(data[lang], null, '\t'));

                        case 9:
                        case "end":
                          return _context14.stop();
                      }
                    }
                  }, _callee14, this);
                }));

                return function (_x18) {
                  return _ref8.apply(this, arguments);
                };
              }());

            case 4:
            case "end":
              return _context15.stop();
          }
        }
      }, _callee15, this);
    }));
    return _generateFile.apply(this, arguments);
  }

  function handlenormal(_x9, _x10, _x11, _x12) {
    return _handlenormal.apply(this, arguments);
  }

  function _handlenormal() {
    _handlenormal = (0, _asyncToGenerator2.default)(
    /*#__PURE__*/
    _regenerator.default.mark(function _callee17(localeFiles, singular, absSrcPath, support) {
      var spinner, localeData;
      return _regenerator.default.wrap(function _callee17$(_context17) {
        while (1) {
          switch (_context17.prev = _context17.next) {
            case 0:
              spinner = (0, _ora.default)();
              spinner.start("\u6536\u96C6".concat(_chalk.default.blue('非动态'), "\u56FD\u9645\u5316\u4FE1\u606F\u5F00\u59CB"));
              localeData = {}; // 收集国际化数据到非动态目录

              _context17.next = 5;
              return localeFiles.mapSync(
              /*#__PURE__*/
              function () {
                var _ref9 = (0, _asyncToGenerator2.default)(
                /*#__PURE__*/
                _regenerator.default.mark(function _callee16(file) {
                  var singal;
                  return _regenerator.default.wrap(function _callee16$(_context16) {
                    while (1) {
                      switch (_context16.prev = _context16.next) {
                        case 0:
                          _context16.next = 2;
                          return addIntl(file, singular, absSrcPath, support, spinner);

                        case 2:
                          singal = _context16.sent;

                          if (singal) {
                            _context16.next = 7;
                            break;
                          }

                          return _context16.abrupt("return", null);

                        case 7:
                          localeData = deepmerge(singal, localeData);

                        case 8:
                          return _context16.abrupt("return", file);

                        case 9:
                        case "end":
                          return _context16.stop();
                      }
                    }
                  }, _callee16, this);
                }));

                return function (_x19) {
                  return _ref9.apply(this, arguments);
                };
              }());

            case 5:
              spinner.color = 'green';
              spinner.succeed("\u6536\u96C6".concat(_chalk.default.blue('非动态'), "\u56FD\u9645\u5316\u4FE1\u606F\u6210\u529F"));
              spinner.color = 'cyan';
              spinner.start("\u5F00\u59CB\u5199\u5165".concat(_chalk.default.blue('非动态'), "\u56FD\u9645\u5316\u4FE1\u606F"));
              _context17.next = 11;
              return generateFile(localeData, support, absSrcPath, singular);

            case 11:
              spinner.color = 'green';
              spinner.succeed("\u5199\u5165".concat(_chalk.default.blue('非动态'), "\u56FD\u9645\u5316\u4FE1\u606F\u6210\u529F"));

            case 13:
            case "end":
              return _context17.stop();
          }
        }
      }, _callee17, this);
    }));
    return _handlenormal.apply(this, arguments);
  }

  function genDynamic() {
    return _genDynamic.apply(this, arguments);
  }

  function _genDynamic() {
    _genDynamic = (0, _asyncToGenerator2.default)(
    /*#__PURE__*/
    _regenerator.default.mark(function _callee19() {
      var _len6,
          arg,
          _key7,
          dynamicIntl,
          dynamicLocale,
          absSrcPath,
          support,
          collectData,
          spinner,
          _args19 = arguments;

      return _regenerator.default.wrap(function _callee19$(_context19) {
        while (1) {
          switch (_context19.prev = _context19.next) {
            case 0:
              for (_len6 = _args19.length, arg = new Array(_len6), _key7 = 0; _key7 < _len6; _key7++) {
                arg[_key7] = _args19[_key7];
              }

              dynamicIntl = arg[0], dynamicLocale = arg[1], absSrcPath = arg[2], support = arg[3];
              collectData = {};

              if (!(dynamicIntl && dynamicLocale.length)) {
                _context19.next = 12;
                break;
              }

              spinner = (0, _ora.default)();
              spinner.start("\u6536\u96C6".concat(_chalk.default.yellow('动态'), "\u56FD\u9645\u5316\u4FE1\u606F\u5F00\u59CB"));
              _context19.next = 8;
              return dynamicLocale.mapSync(
              /*#__PURE__*/
              function () {
                var _ref10 = (0, _asyncToGenerator2.default)(
                /*#__PURE__*/
                _regenerator.default.mark(function _callee18(file) {
                  var data;
                  return _regenerator.default.wrap(function _callee18$(_context18) {
                    while (1) {
                      switch (_context18.prev = _context18.next) {
                        case 0:
                          _context18.next = 2;
                          return generatePublicFile(file, absSrcPath, support, collectData, spinner);

                        case 2:
                          data = _context18.sent;
                          collectData = deepmerge(data, collectData);
                          return _context18.abrupt("return", file);

                        case 5:
                        case "end":
                          return _context18.stop();
                      }
                    }
                  }, _callee18, this);
                }));

                return function (_x20) {
                  return _ref10.apply(this, arguments);
                };
              }());

            case 8:
              spinner.succeed("\u6536\u96C6".concat(_chalk.default.yellow('动态'), "\u56FD\u9645\u5316\u4FE1\u606F\u6210\u529F"));
              spinner.start("\u5F00\u59CB\u5199\u5165".concat(_chalk.default.yellow('动态'), "\u56FD\u9645\u5316\u4FE1\u606F"));
              writePublic(collectData, absSrcPath);
              spinner.succeed("\u5199\u5165".concat(_chalk.default.yellow('动态'), "\u56FD\u9645\u5316\u4FE1\u606F\u6210\u529F"));

            case 12:
              return _context19.abrupt("return", true);

            case 13:
            case "end":
              return _context19.stop();
          }
        }
      }, _callee19, this);
    }));
    return _genDynamic.apply(this, arguments);
  }

  function getTransLataData() {
    return _getTransLataData.apply(this, arguments);
  }

  function _getTransLataData() {
    _getTransLataData = (0, _asyncToGenerator2.default)(
    /*#__PURE__*/
    _regenerator.default.mark(function _callee20() {
      var _len7,
          arg,
          _key8,
          singular,
          absSrcPath,
          support,
          dynamicIntl,
          msgFloder,
          files,
          localeFiles,
          dynamicLocale,
          _args20 = arguments;

      return _regenerator.default.wrap(function _callee20$(_context20) {
        while (1) {
          switch (_context20.prev = _context20.next) {
            case 0:
              for (_len7 = _args20.length, arg = new Array(_len7), _key8 = 0; _key8 < _len7; _key8++) {
                arg[_key8] = _args20[_key8];
              }

              singular = arg[0], absSrcPath = arg[1], support = arg[2], dynamicIntl = arg[3];
              msgFloder = getmessageFloder(singular);
              _context20.next = 5;
              return _globby.default.sync("**/".concat(msgFloder, "/**/**.{ts,js,json}"), {
                cwd: absSrcPath
              }).map(function (name) {
                return {
                  name: name,
                  path: (0, _path.join)(absSrcPath, name)
                };
              });

            case 5:
              files = _context20.sent;
              localeFiles = [];
              dynamicLocale = [];

              if (dynamicIntl) {
                dynamicLocale = files.filter(function (file) {
                  var name = file.name;
                  var filename = getFileName(name);
                  if (filename.match(dynamicReg) && getDynamicName(name)) return true;
                  localeFiles.push(file);
                  return false;
                });
              } else {
                localeFiles = files;
              }

              _context20.next = 11;
              return handlenormal(localeFiles, singular, absSrcPath, support);

            case 11:
              _context20.next = 13;
              return genDynamic(dynamicIntl, dynamicLocale, absSrcPath, support);

            case 13:
            case "end":
              return _context20.stop();
          }
        }
      }, _callee20, this);
    }));
    return _getTransLataData.apply(this, arguments);
  }

  function _default(api) {
    var opt = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};
    var defaultSupport = {
      enUS: 'en-US',
      zhCN: 'zh-CN'
    };
    var _opt = opt,
        support = _opt.support,
        dynamicIntl = _opt.dynamicIntl;
    var config = api.config,
        paths = api.paths;
    var singular = config.singular;
    var absSrcPath = paths.absSrcPath;
    var newSupport = (0, _objectSpread5.default)({}, defaultSupport, support);
    api.addPageWatcher((0, _path.join)(absSrcPath, getmessageFloder(singular)));
    api.onOptionChange(function (newOpts) {
      opt = newOpts;
      api.rebuildTmpFiles();
    });
    api.onStart(function () {
      if (process.env.NODE_ENV === 'production' && dynamicIntl) {
        (0, _asyncToGenerator2.default)(
        /*#__PURE__*/
        _regenerator.default.mark(function _callee4() {
          return _regenerator.default.wrap(function _callee4$(_context4) {
            while (1) {
              switch (_context4.prev = _context4.next) {
                case 0:
                  _context4.next = 2;
                  return (0, _execa.default)('umi', ['intl']);

                case 2:
                case "end":
                  return _context4.stop();
              }
            }
          }, _callee4, this);
        }))();
      }
    });
    api.onBuildSuccess(function (_ref3) {
      var stats = _ref3.stats;

      if (process.env.NODE_ENV === 'production' && dynamicIntl) {
        var absOutputPath = paths.absOutputPath;
        compressionJosn(absOutputPath);
      }
    });
    api.registerCommand('intl', {
      hide: false
    }, function (args) {
      getTransLataData(singular, absSrcPath, newSupport, dynamicIntl);
    });
  }

  function compressFile(file) {
    var data = (0, _fs.readFileSync)(file, 'utf-8');
    var parseData = JSON.parse(data);
    var stringifyData = JSON.stringify(parseData);
    /* .replace(/[\u007F-\uFFFF]/g, chr => {
      return "\\u" + ("0000" + chr.charCodeAt(0).toString(16)).substr(-4)
    }) */

    (0, _fs.writeFileSync)(file, stringifyData);
  }

  function handleJsonFile(filePath) {
    // 根据文件路径读取文件，返回文件列表
    var files = (0, _fs.readdirSync)(filePath);
    files.forEach(function (fileName) {
      var filedir = (0, _path.join)(filePath, fileName);
      var stats = (0, _fs.statSync)(filedir);
      var isFile = stats.isFile(filedir);
      var isDir = stats.isDirectory();
      if (isDir) handleJsonFile(filedir);

      if (isFile) {
        compressFile(filedir);
      }
    });
  }

  ;

  function compressionJosn(_x13) {
    return _compressionJosn.apply(this, arguments);
  }

  function _compressionJosn() {
    _compressionJosn = (0, _asyncToGenerator2.default)(
    /*#__PURE__*/
    _regenerator.default.mark(function _callee21(absOutputPath) {
      var langFloder, spinner;
      return _regenerator.default.wrap(function _callee21$(_context21) {
        while (1) {
          switch (_context21.prev = _context21.next) {
            case 0:
              langFloder = (0, _umiUtils.winPath)("".concat(absOutputPath, "/lang"));

              if ((0, _fs.existsSync)(langFloder)) {
                spinner = (0, _ora.default)();
                spinner.start('开始压缩处理动态国际化文件\n');
                handleJsonFile(langFloder);
                spinner.succeed('压缩处理动态国际化文件完成\n');
              }

            case 2:
            case "end":
              return _context21.stop();
          }
        }
      }, _callee21, this);
    }));
    return _compressionJosn.apply(this, arguments);
  }
});