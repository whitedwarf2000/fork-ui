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

var _PureModal = _interopRequireDefault(require("../PureModal"));

var _useDebounce = _interopRequireDefault(require("../../hooks/useDebounce"));

var _useClickOutsideOverlay = _interopRequireDefault(require("../../hooks/useClickOutsideOverlay"));

var _useLockBodyScroll = _interopRequireDefault(require("../../hooks/useLockBodyScroll"));

var Modal = function Modal(_ref) {
  var className = _ref.className,
      onClose = _ref.onClose,
      open = _ref.open,
      canOutsideClickClose = _ref.canOutsideClickClose,
      otherProps = (0, _objectWithoutProperties2["default"])(_ref, ["className", "onClose", "open", "canOutsideClickClose"]);
  var ref = (0, _react.useRef)();
  var delayOpen = (0, _useDebounce["default"])(open, 100);
  var handleClickOutside = (0, _react.useCallback)(function () {
    if (canOutsideClickClose) {
      onClose();
    }
  }, []);
  (0, _useLockBodyScroll["default"])(delayOpen);
  var wrapperRef = (0, _useClickOutsideOverlay["default"])({
    overlayRef: ref,
    open: delayOpen,
    handleClickOutside: handleClickOutside
  });
  return /*#__PURE__*/_react["default"].createElement(_react["default"].Fragment, null, delayOpen && /*#__PURE__*/_react["default"].createElement(_Portal["default"], null, /*#__PURE__*/_react["default"].createElement("div", {
    className: (0, _classnames["default"])('rc-modal', {
      '--close-animation': !open
    }),
    ref: wrapperRef
  }, /*#__PURE__*/_react["default"].createElement(_PureModal["default"], (0, _extends2["default"])({
    className: className,
    modalRef: ref,
    onCloseClick: onClose
  }, otherProps)))));
};

Modal.displayName = 'Modal';
Modal.propTypes = {
  className: _propTypes["default"].string,
  onClose: _propTypes["default"].func,
  open: _propTypes["default"].bool,
  children: _propTypes["default"].any,
  title: _propTypes["default"].any,
  canOutsideClickClose: _propTypes["default"].bool,
  closable: _propTypes["default"].bool
};
Modal.defaultProps = {
  onClose: function onClose(f) {
    return f;
  }
};
var _default = Modal;
exports["default"] = _default;