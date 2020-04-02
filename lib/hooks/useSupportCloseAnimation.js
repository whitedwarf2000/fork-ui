"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _react = _interopRequireDefault(require("react"));

var _useDebounce = _interopRequireDefault(require("./useDebounce"));

var _default = function _default(value) {
  var delay = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 100;
  var debouncedValue = (0, _useDebounce["default"])(value, delay);
  return debouncedValue;
};

exports["default"] = _default;