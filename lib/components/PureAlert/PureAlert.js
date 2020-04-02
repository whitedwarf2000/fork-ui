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

var _Button = _interopRequireDefault(require("../Button"));

var _useSemanticProp = _interopRequireDefault(require("../../hooks/useSemanticProp"));

var _helpers = require("../../utils/helpers");

var mTypes = Object.freeze({
  info: '--info',
  success: '--success',
  error: '--error',
  warning: '--warning'
});

var PureAlert = function PureAlert(_ref) {
  var alertRef = _ref.alertRef,
      children = _ref.children,
      title = _ref.title,
      onCloseClick = _ref.onCloseClick,
      className = _ref.className,
      closable = _ref.closable,
      otherProps = (0, _objectWithoutProperties2["default"])(_ref, ["alertRef", "children", "title", "onCloseClick", "className", "closable"]);
  var type = (0, _useSemanticProp["default"])('type', otherProps, Object.keys(mTypes));
  var passedProps = (0, _react.useMemo)(function () {
    return (0, _helpers.omit)(otherProps, ['info', 'success', 'error', 'warning', 'type']);
  }, [otherProps]);
  return _react["default"].createElement("div", (0, _extends2["default"])({
    className: (0, _classnames["default"])('rc-pure-alert', mTypes[type], className),
    ref: alertRef
  }, passedProps), _react["default"].createElement("div", {
    className: "rc-pure-alert-title"
  }, _react["default"].createElement("span", null, title), closable && _react["default"].createElement(_Button["default"], {
    icon: "times",
    circle: true,
    className: "rc-pure-alert-close",
    fontSize: "0.75em",
    onClick: onCloseClick
  })), children && _react["default"].createElement("div", {
    className: "rc-pure-alert-content"
  }, children));
};

PureAlert.displayName = 'PureAlert';
PureAlert.propTypes = {
  alertRef: _propTypes["default"].any,
  children: _propTypes["default"].any,
  title: _propTypes["default"].any,
  onCloseClick: _propTypes["default"].func,
  className: _propTypes["default"].string,
  closable: _propTypes["default"].bool
};
PureAlert.defaultProps = {
  onCloseClick: function onCloseClick(f) {
    return f;
  },
  closable: true
};
var _default = PureAlert;
exports["default"] = _default;