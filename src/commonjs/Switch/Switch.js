"use strict";

var _interopRequireWildcard = require("@babel/runtime/helpers/interopRequireWildcard");

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _extends2 = _interopRequireDefault(require("@babel/runtime/helpers/extends"));

var _slicedToArray2 = _interopRequireDefault(require("@babel/runtime/helpers/slicedToArray"));

var _objectWithoutProperties2 = _interopRequireDefault(require("@babel/runtime/helpers/objectWithoutProperties"));

var _react = _interopRequireWildcard(require("react"));

var _classnames = _interopRequireDefault(require("classnames"));

var _propTypes = _interopRequireDefault(require("prop-types"));

var Switch = function Switch(_ref) {
  var switchRef = _ref.switchRef,
      defaultChecked = _ref.defaultChecked,
      onChange = _ref.onChange,
      className = _ref.className,
      otherProps = (0, _objectWithoutProperties2["default"])(_ref, ["switchRef", "defaultChecked", "onChange", "className"]);
  var isControlled = (0, _react.useMemo)(function () {
    return otherProps.hasOwnProperty('checked');
  }, []);

  var _useState = (0, _react.useState)(isControlled ? otherProps.checked : defaultChecked),
      _useState2 = (0, _slicedToArray2["default"])(_useState, 2),
      checked = _useState2[0],
      setChecked = _useState2[1];

  var _onChange = (0, _react.useCallback)(function (e) {
    onChange(e);
    setChecked(e.target.checked);
  }, []);

  (0, _react.useMemo)(function () {
    if (isControlled) {
      setChecked(otherProps.checked);
    }
  }, [otherProps.checked]);
  return /*#__PURE__*/_react["default"].createElement("span", {
    className: (0, _classnames["default"])('rc-switch', {
      '--checked': checked
    }, className)
  }, /*#__PURE__*/_react["default"].createElement("input", (0, _extends2["default"])({
    type: "checkbox",
    className: "rc-switch-input",
    ref: switchRef,
    defaultChecked: defaultChecked,
    onChange: _onChange
  }, otherProps)), /*#__PURE__*/_react["default"].createElement("span", {
    className: "rc-switch-inner"
  }));
};

Switch.displayName = 'Switch';
Switch.propTypes = {
  switchRef: _propTypes["default"].any,
  className: _propTypes["default"].string,
  onChange: _propTypes["default"].func,
  defaultChecked: _propTypes["default"].bool
};
Switch.defaultProps = {
  onChange: function onChange(f) {
    return f;
  }
};
var _default = Switch;
exports["default"] = _default;