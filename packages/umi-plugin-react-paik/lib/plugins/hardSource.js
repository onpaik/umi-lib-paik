"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = _default;

function _default() {
  // 允许用户通过环境变量覆盖配置
  if (!('HARD_SOURCE' in process.env)) {
    process.env.HARD_SOURCE = true;
  }
}