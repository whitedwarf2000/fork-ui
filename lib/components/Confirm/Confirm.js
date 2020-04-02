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

var _propTypes = _interopRequireDefault(require("prop-types"));

var _Portal = _interopRequireDefault(require("../Portal"));

var _PureConfirm = _interopRequireDefault(require("../PureConfirm"));

var _useDebounce = _interopRequireDefault(require("../../hooks/useDebounce"));

var _useLockBodyScroll = _interopRequireDefault(require("../../hooks/useLockBodyScroll"));

var Confirm = function Confirm(_ref) {
  var className = _ref.className,
      open = _ref.open,
      onClose = _ref.onClose,
      onOk = _ref.onOk,
      onCancel = _ref.onCancel,
      otherProps = (0, _objectWithoutProperties2["default"])(_ref, ["className", "open", "onClose", "onOk", "onCancel"]);
  var delayOpen = (0, _useDebounce["default"])(open, 100);

  var _onOk = (0, _react.useCallback)(function () {
    onClose();
    onOk();
  }, []);

  var _onCancel = (0, _react.useCallback)(function () {
    onClose();
    onCancel();
  }, []);

  (0, _useLockBodyScroll["default"])(delayOpen);
  return _react["default"].createElement(_react["default"].Fragment, null, delayOpen && _react["default"].createElement(_Portal["default"], null, _react["default"].createElement("div", {
    className: (0, _classnames["default"])('rc-confirm', {
      '--close-animation': !open
    })
  }, _react["default"].createElement(_PureConfirm["default"], (0, _extends2["default"])({
    className: className,
    onOk: _onOk,
    onCancel: _onCancel
  }, otherProps)))));
};

Confirm.displayName = 'Confirm';
Confirm.propTypes = {
  className: _propTypes["default"].string,
  open: _propTypes["default"].bool,
  onClose: _propTypes["default"].func.isRequired,
  onCancel: _propTypes["default"].func,
  onOk: _propTypes["default"].func,
  confirmRef: _propTypes["default"].any,
  children: _propTypes["default"].any,
  title: _propTypes["default"].any
};
Confirm.defaultProps = {
  onCancel: function onCancel(f) {
    return f;
  },
  onOk: function onOk(f) {
    return f;
  }
};
var _default = Confirm;
exports["default"] = _default;