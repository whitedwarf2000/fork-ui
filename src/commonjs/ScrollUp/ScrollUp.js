"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

var _interopRequireWildcard = require("@babel/runtime/helpers/interopRequireWildcard");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _react = _interopRequireWildcard(require("react"));

var _Button = _interopRequireDefault(require("../Button"));

var ScrollUp = function ScrollUp() {
  var scrollToTop = (0, _react.useCallback)(function () {
    return window.scrollTo({
      top: 0,
      behavior: 'smooth'
    });
  }, []);
  return /*#__PURE__*/_react["default"].createElement(_Button["default"], {
    circle: true,
    className: "rc-scroll-up",
    onClick: scrollToTop,
    icon: "home"
  });
};

ScrollUp.displayName = 'ScrollUp';
ScrollUp.propTypes = {};
ScrollUp.defaultProps = {};
var _default = ScrollUp;
exports["default"] = _default;