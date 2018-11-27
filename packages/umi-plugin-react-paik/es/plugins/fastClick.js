define(["exports", "path"], function (_exports, _path) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  _exports.default = _default;

  function _default(api) {
    var options = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};
    var paths = api.paths;
    api.addEntryImport(function () {
      return {
        source: (0, _path.relative)(paths.absTmpDirPath, options.libraryPath || require.resolve('fastclick')),
        specifier: 'FastClick'
      };
    });
    api.addEntryCodeAhead("\n// Initialize fastclick\ndocument.addEventListener(\n  'DOMContentLoaded',\n  () => {\n    FastClick.attach(document.body);\n  },\n  false,\n);\n  ".trim());
  }
});