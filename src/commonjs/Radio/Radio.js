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

var Radio = function Radio(_ref) {
  var className = _ref.className,
      radioRef = _ref.radioRef,
      otherProps = (0, _objectWithoutProperties2["default"])(_ref, ["className", "radioRef"]);
  return /*#__PURE__*/_react["default"].createElement("span", {
    className: (0, _classnames["default"])('rc-radio', className)
  }, /*#__PURE__*/_react["default"].createElement("input", (0, _extends2["default"])({
    type: "radio",
    className: "rc-radio-input",
    ref: radioRef
  }, otherProps)), /*#__PURE__*/_react["default"].createElement("span", {
    className: "rc-radio-inner"
  }), /*#__PURE__*/_react["default"].createElement("span", {
    className: "rc-radio-second-inner"
  }));
};

Radio.displayName = 'Radio';
Radio.propTypes = {
  className: _propTypes["default"].string,
  radioRef: _propTypes["default"].any
};
Radio.defaultProps = {};
var _default = Radio;
exports["default"] = _default;