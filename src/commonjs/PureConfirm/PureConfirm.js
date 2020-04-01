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

var PureConfirm = function PureConfirm(_ref) {
  var confirmRef = _ref.confirmRef,
      children = _ref.children,
      title = _ref.title,
      onCancel = _ref.onCancel,
      onOk = _ref.onOk,
      className = _ref.className,
      otherProps = (0, _objectWithoutProperties2["default"])(_ref, ["confirmRef", "children", "title", "onCancel", "onOk", "className"]);
  return /*#__PURE__*/_react["default"].createElement("div", (0, _extends2["default"])({
    className: (0, _classnames["default"])('rc-pure-confirm', className),
    ref: confirmRef
  }, otherProps), /*#__PURE__*/_react["default"].createElement("div", {
    className: "rc-pure-confirm-title"
  }, /*#__PURE__*/_react["default"].createElement("span", null, title)), /*#__PURE__*/_react["default"].createElement("div", {
    className: "rc-pure-confirm-content"
  }, children), /*#__PURE__*/_react["default"].createElement("div", {
    className: "rc-pure-confirm-handler"
  }, /*#__PURE__*/_react["default"].createElement(_Button["default"], {
    className: "mr-2",
    onClick: onCancel
  }, "Cancel"), /*#__PURE__*/_react["default"].createElement(_Button["default"], {
    className: "mr-2",
    onClick: onOk
  }, "OK")));
};

PureConfirm.displayName = 'PureConfirm';
PureConfirm.propTypes = {
  confirmRef: _propTypes["default"].any,
  children: _propTypes["default"].any,
  title: _propTypes["default"].any,
  onOk: _propTypes["default"].func,
  onCancel: _propTypes["default"].func,
  className: _propTypes["default"].string
};
PureConfirm.defaultProps = {
  onCancel: function onCancel(f) {
    return f;
  },
  onOk: function onOk(f) {
    return f;
  }
};
var _default = PureConfirm;
exports["default"] = _default;