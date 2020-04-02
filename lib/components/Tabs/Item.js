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

var _Memo = _interopRequireDefault(require("../Memo"));

var Item = function Item(_ref) {
  var className = _ref.className,
      active = _ref.active,
      otherProps = (0, _objectWithoutProperties2["default"])(_ref, ["className", "active"]);
  return _react["default"].createElement(_Memo["default"], {
    "for": active
  }, _react["default"].createElement("div", (0, _extends2["default"])({
    className: (0, _classnames["default"])('rc-tab', {
      '--active': active
    }, className)
  }, otherProps)));
};

Item.displayName = 'Tabs.Item';
Item.propTypes = {
  className: _propTypes["default"].string,
  disabled: _propTypes["default"].bool,
  icon: _propTypes["default"].any,
  iconRight: _propTypes["default"].any,
  title: _propTypes["default"].any
};
Item.defaultProps = {};
var _default = Item;
exports["default"] = _default;