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

var _Icon = _interopRequireDefault(require("../Icon"));

var PureNotification = function PureNotification(_ref) {
  var notificationRef = _ref.notificationRef,
      children = _ref.children,
      title = _ref.title,
      className = _ref.className,
      onCloseClick = _ref.onCloseClick,
      onContentClick = _ref.onContentClick,
      otherProps = (0, _objectWithoutProperties2["default"])(_ref, ["notificationRef", "children", "title", "className", "onCloseClick", "onContentClick"]);
  return /*#__PURE__*/_react["default"].createElement("div", (0, _extends2["default"])({
    className: (0, _classnames["default"])('rc-pure-notification', className),
    ref: notificationRef
  }, otherProps), title && /*#__PURE__*/_react["default"].createElement("div", {
    className: "rc-pure-notification-title"
  }, /*#__PURE__*/_react["default"].createElement("span", {
    style: {
      display: 'flex',
      alignItems: 'center'
    }
  }, /*#__PURE__*/_react["default"].createElement(_Icon["default"], {
    name: "bell",
    style: {
      marginRight: '0.5em'
    }
  }), title), /*#__PURE__*/_react["default"].createElement(_Icon["default"], {
    name: "times",
    className: "rc-pure-modnotificational-close",
    onClick: onCloseClick
  })), /*#__PURE__*/_react["default"].createElement("div", {
    className: "rc-pure-notification-content",
    onClick: onContentClick
  }, children));
};

PureNotification.displayName = 'PureNotification';
PureNotification.propTypes = {
  notificationRef: _propTypes["default"].any,
  children: _propTypes["default"].any,
  title: _propTypes["default"].any,
  className: _propTypes["default"].string,
  onCloseClick: _propTypes["default"].func,
  onContentClick: _propTypes["default"].func
};
PureNotification.defaultProps = {
  onCloseClick: function onCloseClick(f) {
    return f;
  },
  onContentClick: function onContentClick(f) {
    return f;
  }
};
var _default = PureNotification;
exports["default"] = _default;