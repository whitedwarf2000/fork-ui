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

var _Item = _interopRequireDefault(require("./Item"));

var Breadcrumb = function Breadcrumb(_ref) {
  var className = _ref.className,
      children = _ref.children,
      otherProps = (0, _objectWithoutProperties2["default"])(_ref, ["className", "children"]);
  return _react["default"].createElement("div", (0, _extends2["default"])({
    className: (0, _classnames["default"])('rc-breadcrumb', className)
  }, otherProps), children);
};

Breadcrumb.Item = _Item["default"];
Breadcrumb.displayName = 'Breadcrumb';
Breadcrumb.propTypes = {
  className: _propTypes["default"].string
};
Breadcrumb.defaultProps = {};
var _default = Breadcrumb;
exports["default"] = _default;