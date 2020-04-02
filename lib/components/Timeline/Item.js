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

var Item = function Item(_ref) {
  var className = _ref.className,
      children = _ref.children,
      icon = _ref.icon,
      otherProps = (0, _objectWithoutProperties2["default"])(_ref, ["className", "children", "icon"]);
  return _react["default"].createElement("div", (0, _extends2["default"])({
    className: (0, _classnames["default"])('rc-timeline-item', className)
  }, otherProps), _react["default"].createElement("div", {
    className: "rc-timeline-item-rail"
  }), _react["default"].createElement(_Icon["default"], {
    name: icon,
    className: "rc-timeline-item-stone-icon"
  }), _react["default"].createElement("div", {
    className: "rc-timeline-item-content"
  }, children));
};

Item.displayName = 'Timeline.Item';
Item.propTypes = {
  className: _propTypes["default"].string,
  children: _propTypes["default"].any,
  icon: _propTypes["default"].string
};
Item.defaultProps = {
  icon: 'clock'
};
var _default = Item;
exports["default"] = _default;