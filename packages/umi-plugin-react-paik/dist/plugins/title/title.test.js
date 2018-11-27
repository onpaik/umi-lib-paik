(function (global, factory) {
  if (typeof define === "function" && define.amd) {
    define(["./index"], factory);
  } else if (typeof exports !== "undefined") {
    factory(require("./index"));
  } else {
    var mod = {
      exports: {}
    };
    factory(global.index);
    global.titleTest = mod.exports;
  }
})(this, function (_index) {
  "use strict";

  describe('modifyRoutes', function () {
    it('option is undefined', function () {
      // should not change anything when option is undefined
      var routes = [{
        title: 'test',
        routes: [{
          title: 'child'
        }]
      }];
      expect((0, _index.modifyRoutes)(routes)).toEqual([{
        title: 'test',
        routes: [{
          title: 'child'
        }]
      }]);
    });
    it('option is default title', function () {
      var routes = [{
        routes: [{
          title: 'child',
          routes: [{}, {
            title: 'testc'
          }]
        }]
      }, {
        title: 'hahah'
      }, {
        routes: [{
          routes: [{
            routes: [{
              title: 'longlong'
            }, {}]
          }]
        }]
      }];
      expect((0, _index.modifyRoutes)(routes, 'abc')).toEqual([{
        _title: 'abc',
        _title_default: 'abc',
        routes: [{
          title: 'child',
          _title: 'child',
          _title_default: 'abc',
          routes: [{
            _title: 'child',
            _title_default: 'abc'
          }, {
            title: 'testc',
            _title: 'child - testc',
            _title_default: 'abc'
          }]
        }]
      }, {
        title: 'hahah',
        _title: 'hahah',
        _title_default: 'abc'
      }, {
        _title: 'abc',
        _title_default: 'abc',
        routes: [{
          _title: 'abc',
          _title_default: 'abc',
          routes: [{
            _title: 'abc',
            _title_default: 'abc',
            routes: [{
              _title: 'longlong',
              _title_default: 'abc',
              title: 'longlong'
            }, {
              _title: 'abc',
              _title_default: 'abc'
            }]
          }]
        }]
      }]);
    });
    it('format', function () {
      var routes = [{
        routes: [{
          title: 'child',
          routes: [{
            routes: [{
              title: 'last'
            }]
          }, {
            title: 'testc'
          }]
        }]
      }, {
        title: 'hahah'
      }];
      expect((0, _index.modifyRoutes)(routes, {
        defaultTitle: 'abc',
        format: '{current}{separator}{parent}',
        separator: ' '
      })).toEqual([{
        _title: 'abc',
        _title_default: 'abc',
        routes: [{
          title: 'child',
          _title: 'child',
          _title_default: 'abc',
          routes: [{
            _title: 'child',
            _title_default: 'abc',
            routes: [{
              title: 'last',
              _title: 'last child',
              _title_default: 'abc'
            }]
          }, {
            title: 'testc',
            _title: 'testc child',
            _title_default: 'abc'
          }]
        }]
      }, {
        title: 'hahah',
        _title: 'hahah',
        _title_default: 'abc'
      }]);
    });
  });
});