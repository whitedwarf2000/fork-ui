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

var Item = function Item(_ref) {
  var className = _ref.className,
      active = _ref.active,
      title = _ref.title,
      href = _ref.href,
      otherProps = (0, _objectWithoutProperties2["default"])(_ref, ["className", "active", "title", "href"]);
  return /*#__PURE__*/_react["default"].createElement("div", (0, _extends2["default"])({
    className: (0, _classnames["default"])('rc-breadcrumb-item', {
      '--active': active
    }, className)
  }, otherProps), /*#__PURE__*/_react["default"].createElement("a", {
    href: href,
    className: "rc-breadcrumb-item-title"
  }, title));
};

Item.displayName = 'Breadcrumb.Item';
Item.propTypes = {
  className: _propTypes["default"].string,
  title: _propTypes["default"].any,
  onClick: _propTypes["default"].func
};
Item.defaultProps = {};
var _default = Item;
exports["default"] = _default;