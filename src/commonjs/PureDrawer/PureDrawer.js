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

var _Button = _interopRequireDefault(require("../Button"));

var PureDrawer = function PureDrawer(_ref) {
  var drawerRef = _ref.drawerRef,
      children = _ref.children,
      title = _ref.title,
      onCloseClick = _ref.onCloseClick,
      className = _ref.className,
      closable = _ref.closable,
      otherProps = (0, _objectWithoutProperties2["default"])(_ref, ["drawerRef", "children", "title", "onCloseClick", "className", "closable"]);
  return /*#__PURE__*/_react["default"].createElement("div", (0, _extends2["default"])({
    className: (0, _classnames["default"])('rc-pure-drawer', className),
    ref: drawerRef
  }, otherProps), /*#__PURE__*/_react["default"].createElement("div", {
    className: "rc-pure-drawer-title"
  }, /*#__PURE__*/_react["default"].createElement("span", null, title), closable && /*#__PURE__*/_react["default"].createElement(_Button["default"], {
    icon: "times",
    circle: true,
    className: "rc-pure-drawer-close",
    fontSize: "0.75em",
    onClick: onCloseClick
  })), /*#__PURE__*/_react["default"].createElement("div", {
    className: "rc-pure-drawer-content"
  }, children));
};

PureDrawer.displayName = 'PureDrawer';
PureDrawer.propTypes = {
  drawerRef: _propTypes["default"].any,
  children: _propTypes["default"].any,
  title: _propTypes["default"].any,
  onCloseClick: _propTypes["default"].func,
  className: _propTypes["default"].string,
  closable: _propTypes["default"].bool
};
PureDrawer.defaultProps = {
  onCloseClick: function onCloseClick(f) {
    return f;
  },
  closable: true
};
var _default = PureDrawer;
exports["default"] = _default;