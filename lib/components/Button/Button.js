"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

var _interopRequireWildcard = require("@babel/runtime/helpers/interopRequireWildcard");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _extends2 = _interopRequireDefault(require("@babel/runtime/helpers/extends"));

var _defineProperty2 = _interopRequireDefault(require("@babel/runtime/helpers/defineProperty"));

var _toConsumableArray2 = _interopRequireDefault(require("@babel/runtime/helpers/toConsumableArray"));

var _objectWithoutProperties2 = _interopRequireDefault(require("@babel/runtime/helpers/objectWithoutProperties"));

var _react = _interopRequireWildcard(require("react"));

var _classnames = _interopRequireDefault(require("classnames"));

var _propTypes = _interopRequireDefault(require("prop-types"));

var _Icon = _interopRequireDefault(require("../Icon"));

var _useSemanticProp = _interopRequireDefault(require("../../hooks/useSemanticProp"));

var _helpers = require("../../utils/helpers");

var _Button$propTypes;

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { (0, _defineProperty2["default"])(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

var mTypes = Object.freeze({
  primary: '--primary',
  danger: '--danger'
});

var Button = function Button(_ref) {
  var className = _ref.className,
      circle = _ref.circle,
      rounded = _ref.rounded,
      buttonRef = _ref.buttonRef,
      icon = _ref.icon,
      pressed = _ref.pressed,
      color = _ref.color,
      fontSize = _ref.fontSize,
      style = _ref.style,
      children = _ref.children,
      otherProps = (0, _objectWithoutProperties2["default"])(_ref, ["className", "circle", "rounded", "buttonRef", "icon", "pressed", "color", "fontSize", "style", "children"]);
  var type = (0, _useSemanticProp["default"])('type', otherProps, Object.keys(mTypes));
  var passedProps = (0, _react.useMemo)(function () {
    return (0, _helpers.omit)(otherProps, [].concat((0, _toConsumableArray2["default"])(Object.keys(mTypes)), ['type']));
  }, [otherProps]);
  return _react["default"].createElement("button", (0, _extends2["default"])({
    className: (0, _classnames["default"])('rc-button', {
      '--circle': circle,
      '--icon-button': icon,
      '--rounded': rounded,
      '--pressed': pressed
    }, mTypes[type], className),
    ref: buttonRef,
    style: _objectSpread({
      color: color || null,
      fontSize: fontSize || null
    }, style)
  }, passedProps), icon ? _react["default"].createElement(_Icon["default"], {
    name: icon
  }) : children);
};

Button.displayName = 'Button';
Button.propTypes = (_Button$propTypes = {
  className: _propTypes["default"].string,
  color: _propTypes["default"].string,
  fontSize: _propTypes["default"].string,
  circle: _propTypes["default"].bool,
  rounded: _propTypes["default"].bool,
  pressed: _propTypes["default"].bool,
  buttonRef: _propTypes["default"].any,
  style: _propTypes["default"].object,
  primary: _propTypes["default"].bool,
  type: _propTypes["default"].string
}, (0, _defineProperty2["default"])(_Button$propTypes, "primary", _propTypes["default"].bool), (0, _defineProperty2["default"])(_Button$propTypes, "danger", _propTypes["default"].bool), _Button$propTypes);
Button.defaultProps = {};
var _default = Button;
exports["default"] = _default;