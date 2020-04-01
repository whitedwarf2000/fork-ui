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

var _BaseInput = _interopRequireDefault(require("../BaseInput"));

var _Icon = _interopRequireDefault(require("../Icon"));

var _helpers = require("../../utils/helpers");

var _useFlexibleRef = _interopRequireDefault(require("../../hooks/useFlexibleRef"));

/**
 * Input Number just only support UNCONTROLLED COMPONENT
 * 
 * */
var InputNumber = _react["default"].forwardRef(function (_ref, ref) {
  var className = _ref.className,
      disabled = _ref.disabled,
      onChange = _ref.onChange,
      otherProps = (0, _objectWithoutProperties2["default"])(_ref, ["className", "disabled", "onChange"]);
  var wrapperRef = (0, _useFlexibleRef["default"])(ref);
  var stepUpRef = (0, _react.useRef)();
  var stepDownRef = (0, _react.useRef)();
  var passedProps = (0, _react.useMemo)(function () {
    return (0, _helpers.omit)(otherProps, ['value']);
  }, [otherProps]);
  (0, _react.useEffect)(function () {
    var stepUp = function stepUp() {
      wrapperRef.current.stepUp();
      onChange({
        target: wrapperRef.current
      });
    };

    var stepDown = function stepDown() {
      wrapperRef.current.stepDown();
      onChange({
        target: wrapperRef.current
      });
    };

    stepUpRef.current.addEventListener('click', stepUp);
    stepDownRef.current.addEventListener('click', stepDown);
    return function () {
      stepUpRef.current.removeEventListener('click', stepUp);
      stepDownRef.current.removeEventListener('click', stepDown);
    };
  }, []);
  return /*#__PURE__*/_react["default"].createElement("div", {
    className: (0, _classnames["default"])('rc-input-number', className)
  }, /*#__PURE__*/_react["default"].createElement(_BaseInput["default"], (0, _extends2["default"])({}, passedProps, {
    ref: wrapperRef,
    disabled: disabled,
    onChange: onChange,
    htmlType: "number",
    className: "rc-input-number-input"
  })), /*#__PURE__*/_react["default"].createElement("div", {
    className: "rc-input-number-handler"
  }, /*#__PURE__*/_react["default"].createElement("button", {
    className: "rc-select-up",
    disabled: disabled,
    ref: stepUpRef
  }, /*#__PURE__*/_react["default"].createElement(_Icon["default"], {
    name: "angle-up"
  })), /*#__PURE__*/_react["default"].createElement("button", {
    className: "rc-select-down",
    disabled: disabled,
    ref: stepDownRef
  }, /*#__PURE__*/_react["default"].createElement(_Icon["default"], {
    name: "angle-down"
  }))));
});

InputNumber.displayName = 'InputNumber';
InputNumber.propTypes = {
  className: _propTypes["default"].string,
  disabled: _propTypes["default"].bool,
  onChange: _propTypes["default"].func
};
InputNumber.defaultProps = {
  onChange: function onChange(f) {
    return f;
  }
};
var _default = InputNumber;
exports["default"] = _default;