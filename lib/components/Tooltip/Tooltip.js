"use strict";

var _interopRequireWildcard = require("@babel/runtime/helpers/interopRequireWildcard");

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _extends2 = _interopRequireDefault(require("@babel/runtime/helpers/extends"));

var _objectWithoutProperties2 = _interopRequireDefault(require("@babel/runtime/helpers/objectWithoutProperties"));

var _react = _interopRequireWildcard(require("react"));

var _propTypes = _interopRequireDefault(require("prop-types"));

var _classnames = _interopRequireDefault(require("classnames"));

var _Overlay = _interopRequireDefault(require("../Overlay"));

var _helpers = require("../../utils/helpers");

var Tooltip = function Tooltip(_ref) {
  var className = _ref.className,
      children = _ref.children,
      title = _ref.title,
      otherProps = (0, _objectWithoutProperties2["default"])(_ref, ["className", "children", "title"]);
  var passedProps = (0, _react.useMemo)(function () {
    return (0, _helpers.omit)(otherProps, ['overlay', 'className']);
  }, [otherProps]);
  return _react["default"].createElement(_Overlay["default"], (0, _extends2["default"])({
    canOutsideClickClose: true,
    arrow: true,
    trigger: ['hover'],
    overlay: title,
    className: (0, _classnames["default"])('rc-tooltip', className),
    gap: 10
  }, passedProps), children);
};

Tooltip.displayName = 'Tooltip';
Tooltip.propTypes = {
  title: _propTypes["default"].string,
  children: _propTypes["default"].any,
  className: _propTypes["default"].string
};
Tooltip.defaultProps = {
  gap: 15
};
var _default = Tooltip;
exports["default"] = _default;