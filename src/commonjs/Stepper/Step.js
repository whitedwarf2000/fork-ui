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

var _Icon = _interopRequireDefault(require("../Icon"));

var _useSemanticProp = _interopRequireDefault(require("../../hooks/useSemanticProp"));

var _helpers = require("../../utils/helpers");

var mStatus = Object.freeze({
  processing: '--processing',
  completed: '--completed',
  canceled: '--canceled'
});

var Step = function Step(_ref) {
  var className = _ref.className,
      title = _ref.title,
      children = _ref.children,
      icon = _ref.icon,
      stepNumber = _ref.stepNumber,
      otherProps = (0, _objectWithoutProperties2["default"])(_ref, ["className", "title", "children", "icon", "stepNumber"]);
  var status = (0, _useSemanticProp["default"])('status', otherProps, Object.keys(mStatus));
  var passedProps = (0, _react.useMemo)(function () {
    return (0, _helpers.omit)(otherProps, ['processing', 'completed', 'canceled', 'status']);
  }, [otherProps]);
  return /*#__PURE__*/_react["default"].createElement("div", (0, _extends2["default"])({
    className: (0, _classnames["default"])('rc-step', mStatus[status], className)
  }, passedProps), /*#__PURE__*/_react["default"].createElement("div", {
    className: "rc-step-rail"
  }), /*#__PURE__*/_react["default"].createElement("div", {
    className: "rc-step-avatar"
  }, status === 'completed' && /*#__PURE__*/_react["default"].createElement(_Icon["default"], {
    name: "check"
  }), status !== 'completed' && /*#__PURE__*/_react["default"].createElement("span", null, icon ? /*#__PURE__*/_react["default"].createElement(_Icon["default"], {
    name: icon
  }) : stepNumber)), /*#__PURE__*/_react["default"].createElement("div", {
    className: "rc-step-content"
  }, /*#__PURE__*/_react["default"].createElement("div", {
    className: "rc-step-title"
  }, title), /*#__PURE__*/_react["default"].createElement("div", {
    className: "rc-step-description"
  }, children)));
};

Step.displayName = 'Step';
Step.propTypes = {
  className: _propTypes["default"].string,
  icon: _propTypes["default"].string,
  title: _propTypes["default"].any,
  children: _propTypes["default"].any,
  stepNumber: _propTypes["default"].oneOfType([_propTypes["default"].string, _propTypes["default"].number]),
  status: _propTypes["default"].string,
  processing: _propTypes["default"].bool,
  completed: _propTypes["default"].bool,
  canceled: _propTypes["default"].bool
};
Step.defaultProps = {};
var _default = Step;
exports["default"] = _default;