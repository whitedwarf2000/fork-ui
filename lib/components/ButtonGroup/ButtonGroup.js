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

var ButtonGroup = function ButtonGroup(_ref) {
  var className = _ref.className,
      fluid = _ref.fluid,
      otherProps = (0, _objectWithoutProperties2["default"])(_ref, ["className", "fluid"]);
  return _react["default"].createElement("div", (0, _extends2["default"])({
    className: (0, _classnames["default"])('rc-button-group', {
      '--fluid': fluid
    }, className)
  }, otherProps));
};

ButtonGroup.displayName = 'ButtonGroup';
ButtonGroup.propTypes = {
  className: _propTypes["default"].string,
  fluid: _propTypes["default"].bool
};
ButtonGroup.defaultProps = {};
var _default = ButtonGroup;
exports["default"] = _default;