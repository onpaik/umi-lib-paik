(function (global, factory) {
  if (typeof define === "function" && define.amd) {
    define(["exports", "fs", "path", "./generateWebManifest"], factory);
  } else if (typeof exports !== "undefined") {
    factory(exports, require("fs"), require("path"), require("./generateWebManifest"));
  } else {
    var mod = {
      exports: {}
    };
    factory(mod.exports, global.fs, global.path, global.generateWebManifest);
    global.WebManifestPlugin = mod.exports;
  }
})(this, function (_exports, _fs, _path, _generateWebManifest) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  _exports.default = void 0;

  function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

  function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

  function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

  var WebManifestPlugin =
  /*#__PURE__*/
  function () {
    function WebManifestPlugin(options) {
      _classCallCheck(this, WebManifestPlugin);

      this.options = options;
    }

    _createClass(WebManifestPlugin, [{
      key: "apply",
      value: function apply(compiler) {
        var _this$options = this.options,
            publicPath = _this$options.publicPath,
            srcPath = _this$options.srcPath,
            outputPath = _this$options.outputPath,
            pkgName = _this$options.pkgName; // our default manifest

        var rawManifest = {
          name: pkgName,
          short_name: pkgName,
          display: 'fullscreen',
          scope: '/',
          start_url: './?homescreen=true',
          orientation: 'portrait'
        };
        compiler.hooks.emit.tap('generate-webmanifest', function (compilation) {
          if (srcPath) {
            try {
              rawManifest = JSON.parse((0, _fs.readFileSync)(srcPath, 'utf8'));
            } catch (e) {
              compilation.errors.push(new Error("Please check ".concat(srcPath, ", a WebManifest should be a valid JSON file.")));
              return;
            }
          }

          rawManifest.icons && rawManifest.icons.forEach(function (icon) {
            icon.src = (0, _generateWebManifest.prependPublicPath)(publicPath, icon.src);
          }); // write manifest & pwacompat.js to filesystem

          [{
            path: outputPath,
            content: JSON.stringify(rawManifest)
          }, {
            path: _generateWebManifest.PWACOMPAT_PATH,
            content: (0, _fs.readFileSync)((0, _path.join)(__dirname, _generateWebManifest.PWACOMPAT_PATH))
          }].forEach(function (_ref) {
            var path = _ref.path,
                content = _ref.content;
            compilation.assets[path] = {
              source: function source() {
                return content;
              },
              size: function size() {
                return content.length;
              }
            };
          });
        });
      }
    }]);

    return WebManifestPlugin;
  }();

  _exports.default = WebManifestPlugin;
});