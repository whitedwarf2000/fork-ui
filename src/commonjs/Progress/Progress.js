"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _Circle = _interopRequireDefault(require("./Circle"));

var _Line = _interopRequireDefault(require("./Line"));

var _default = {
  Circle: _Circle["default"],
  Line: _Line["default"]
};
exports["default"] = _default;