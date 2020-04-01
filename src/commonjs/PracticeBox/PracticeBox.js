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

var PracticeBox = function PracticeBox(_ref) {
  var wrapperClassName = _ref.wrapperClassName,
      className = _ref.className,
      header = _ref.header,
      note = _ref.note,
      children = _ref.children,
      otherProps = (0, _objectWithoutProperties2["default"])(_ref, ["wrapperClassName", "className", "header", "note", "children"]);
  return /*#__PURE__*/_react["default"].createElement("div", (0, _extends2["default"])({
    className: (0, _classnames["default"])('flex flex-col p-2', wrapperClassName)
  }, otherProps), /*#__PURE__*/_react["default"].createElement("div", {
    className: "flex items-center justify-between"
  }, /*#__PURE__*/_react["default"].createElement("span", null, header && /*#__PURE__*/_react["default"].createElement("h2", {
    className: "mb-3"
  }, header)), note && /*#__PURE__*/_react["default"].createElement("div", {
    className: "mb-3 text-sm"
  }, note)), /*#__PURE__*/_react["default"].createElement("div", {
    className: className
  }, children));
};

PracticeBox.displayName = 'PracticeBox';
PracticeBox.propTypes = {
  wrapperClassName: _propTypes["default"].string,
  className: _propTypes["default"].string,
  header: _propTypes["default"].any,
  note: _propTypes["default"].any,
  children: _propTypes["default"].any
};
PracticeBox.defaultProps = {};
var _default = PracticeBox;
exports["default"] = _default;