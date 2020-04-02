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

var _PureNotification = _interopRequireDefault(require("../PureNotification"));

var _portalNode = require("../Portal/portalNode");

var _useDebounce = _interopRequireDefault(require("../../hooks/useDebounce"));

var Notification = function Notification(_ref) {
  var onClose = _ref.onClose,
      open = _ref.open,
      duration = _ref.duration,
      otherProps = (0, _objectWithoutProperties2["default"])(_ref, ["onClose", "open", "duration"]);
  var delayOpen = (0, _useDebounce["default"])(open);
  (0, _react.useEffect)(function () {
    if (open && duration > 0) {
      var timer = setTimeout(function () {
        return onClose();
      }, duration);
      return function () {
        return clearTimeout(timer);
      };
    }
  }, [open]);
  return _react["default"].createElement(_react["default"].Fragment, null, delayOpen && _react["default"].createElement(_Portal["default"], {
    node: _portalNode.rootNotification
  }, _react["default"].createElement(_PureNotification["default"], (0, _extends2["default"])({
    onCloseClick: onClose,
    className: (0, _classnames["default"])('rc-notification', {
      '--close-animation': !open
    })
  }, otherProps))));
};

Notification.displayName = 'Notification';
Notification.propTypes = {
  onClose: _propTypes["default"].func,
  open: _propTypes["default"].bool,
  duration: _propTypes["default"].number,
  title: _propTypes["default"].any
};
Notification.defaultProps = {
  onClose: function onClose(f) {
    return f;
  },
  duration: 10000
};
var _default = Notification;
exports["default"] = _default;