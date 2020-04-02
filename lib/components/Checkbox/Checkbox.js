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

var _Icon = _interopRequireDefault(require("../Icon"));

var Checkbox = function Checkbox(_ref) {
  var checkboxRef = _ref.checkboxRef,
      className = _ref.className,
      otherProps = (0, _objectWithoutProperties2["default"])(_ref, ["checkboxRef", "className"]);
  return _react["default"].createElement("span", {
    className: (0, _classnames["default"])('rc-checkbox', className)
  }, _react["default"].createElement("input", (0, _extends2["default"])({
    type: "checkbox",
    className: "rc-checkbox-input",
    ref: checkboxRef
  }, otherProps)), _react["default"].createElement("span", {
    className: "rc-checkbox-inner"
  }), _react["default"].createElement(_Icon["default"], {
    name: "check",
    className: "rc-checkbox-check"
  }));
};

Checkbox.displayName = 'Checkbox';
Checkbox.propTypes = {
  className: _propTypes["default"].string,
  checkboxRef: _propTypes["default"].any
};
Checkbox.defaultProps = {};
var _default = Checkbox;
exports["default"] = _default;