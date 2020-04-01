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

var _classnames = _interopRequireDefault(require("classnames"));

var defaultExpander = function defaultExpander(f) {
  return f;
};

var TR = function TR(_ref) {
  var className = _ref.className,
      isHeader = _ref.isHeader,
      isFooter = _ref.isFooter,
      expander = _ref.expander,
      belongBody = _ref.belongBody,
      otherProps = (0, _objectWithoutProperties2["default"])(_ref, ["className", "isHeader", "isFooter", "expander", "belongBody"]);

  var _expander = (0, _react.useMemo)(function () {
    return expander || defaultExpander;
  }, []);

  return /*#__PURE__*/_react["default"].createElement(_react["default"].Fragment, null, /*#__PURE__*/_react["default"].createElement("tr", (0, _extends2["default"])({
    className: (0, _classnames["default"])('rc-table-tr', {
      '--header': isHeader,
      '--footer': isFooter
    }, className)
  }, otherProps)), (expander || belongBody) && /*#__PURE__*/_react["default"].createElement("tr", {
    className: "rc-table-tr-expander",
    style: {
      height: '0.15em'
    }
  }, /*#__PURE__*/_react["default"].createElement("td", {
    colSpan: 1000
  }, _expander())));
};

var _default = TR;
exports["default"] = _default;