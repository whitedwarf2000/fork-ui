"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _extends2 = _interopRequireDefault(require("@babel/runtime/helpers/extends"));

var _objectWithoutProperties2 = _interopRequireDefault(require("@babel/runtime/helpers/objectWithoutProperties"));

var _react = _interopRequireDefault(require("react"));

var _classnames = _interopRequireDefault(require("classnames"));

var _propTypes = _interopRequireDefault(require("prop-types"));

var Textarea = _react["default"].forwardRef(function (_ref, ref) {
  var className = _ref.className,
      otherProps = (0, _objectWithoutProperties2["default"])(_ref, ["className"]);
  return /*#__PURE__*/_react["default"].createElement("div", {
    className: "rc-textarea-container"
  }, /*#__PURE__*/_react["default"].createElement("textarea", (0, _extends2["default"])({}, otherProps, {
    ref: ref,
    className: (0, _classnames["default"])('rc-textarea', className)
  })));
});

Textarea.displayName = 'Textarea';
Textarea.propTypes = {
  className: _propTypes["default"].string
};
Textarea.defaultProps = {};
var _default = Textarea;
exports["default"] = _default;