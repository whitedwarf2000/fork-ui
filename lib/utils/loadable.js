"use strict";

var _interopRequireWildcard = require("@babel/runtime/helpers/interopRequireWildcard");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _react = _interopRequireWildcard(require("react"));

var loadable = function loadable(importFunc) {
  var _ref = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {
    fallback: null
  },
      _ref$fallback = _ref.fallback,
      fallback = _ref$fallback === void 0 ? null : _ref$fallback;

  var LazyComponent = (0, _react.lazy)(importFunc);
  return function (props) {
    return _react["default"].createElement(_react.Suspense, {
      fallback: fallback
    }, _react["default"].createElement(LazyComponent, props));
  };
};

var _default = loadable;
exports["default"] = _default;