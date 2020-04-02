"use strict";

var _interopRequireWildcard = require("@babel/runtime/helpers/interopRequireWildcard");

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _defineProperty2 = _interopRequireDefault(require("@babel/runtime/helpers/defineProperty"));

var _objectWithoutProperties2 = _interopRequireDefault(require("@babel/runtime/helpers/objectWithoutProperties"));

var _react = _interopRequireWildcard(require("react"));

var _propTypes = _interopRequireDefault(require("prop-types"));

var _classnames = _interopRequireDefault(require("classnames"));

var _Step = _interopRequireDefault(require("./Step"));

var _useSteps = _interopRequireDefault(require("./useSteps"));

var _withSteps = _interopRequireDefault(require("./withSteps"));

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { (0, _defineProperty2["default"])(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

var getStatus = function getStatus(activeStep, idx) {
  if (activeStep === idx) {
    return 'processing';
  }

  if (activeStep > idx) {
    return 'completed';
  }

  return '';
};

var Stepper = function Stepper(_ref) {
  var className = _ref.className,
      children = _ref.children,
      vertical = _ref.vertical,
      otherProps = (0, _objectWithoutProperties2["default"])(_ref, ["className", "children", "vertical"]);
  var injectProps = (0, _react.useCallback)(function (idx) {
    var props = {
      stepNumber: idx + 1
    };

    if (otherProps.hasOwnProperty('activeStep')) {
      props.status = getStatus(otherProps.activeStep, idx);
    }

    return props;
  }, [otherProps.activeStep]);

  var _customChildren = _react["default"].Children.map(children, function (elm, idx) {
    return _react["default"].cloneElement(elm, _objectSpread({}, injectProps(idx), {}, elm.props));
  });

  return _react["default"].createElement("div", {
    className: (0, _classnames["default"])('rc-stepper', {
      '--vertical': vertical
    }, className)
  }, vertical ? _customChildren.reverse() : _customChildren);
};

Stepper.Step = _Step["default"];
Stepper.useSteps = _useSteps["default"];
Stepper.withSteps = _withSteps["default"];
Stepper.displayName = 'Stepper';
Stepper.propTypes = {
  className: _propTypes["default"].string,
  activeStep: _propTypes["default"].number,
  children: _propTypes["default"].any,
  vertical: _propTypes["default"].bool
};
Stepper.defaultProps = {};
var _default = Stepper;
exports["default"] = _default;