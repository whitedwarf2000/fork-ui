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

var TD = function TD(_ref) {
  var className = _ref.className,
      otherProps = (0, _objectWithoutProperties2["default"])(_ref, ["className"]);
  return /*#__PURE__*/_react["default"].createElement("td", (0, _extends2["default"])({
    className: (0, _classnames["default"])('rc-table-td', className)
  }, otherProps));
};

var _default = TD;
exports["default"] = _default;