"use strict";

var _interopRequireWildcard = require("@babel/runtime/helpers/interopRequireWildcard");

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _extends2 = _interopRequireDefault(require("@babel/runtime/helpers/extends"));

var _defineProperty2 = _interopRequireDefault(require("@babel/runtime/helpers/defineProperty"));

var _objectWithoutProperties2 = _interopRequireDefault(require("@babel/runtime/helpers/objectWithoutProperties"));

var _react = _interopRequireWildcard(require("react"));

var _classnames = _interopRequireDefault(require("classnames"));

var _propTypes = _interopRequireDefault(require("prop-types"));

var _Icon = _interopRequireDefault(require("../Icon"));

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { (0, _defineProperty2["default"])(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

var Chip = function Chip(_ref) {
  var className = _ref.className,
      label = _ref.label,
      avatar = _ref.avatar,
      fontSize = _ref.fontSize,
      color = _ref.color,
      backgroundColor = _ref.backgroundColor,
      style = _ref.style,
      closable = _ref.closable,
      onRemove = _ref.onRemove,
      onClick = _ref.onClick,
      otherProps = (0, _objectWithoutProperties2["default"])(_ref, ["className", "label", "avatar", "fontSize", "color", "backgroundColor", "style", "closable", "onRemove", "onClick"]);
  var closeRef = (0, _react.useRef)();

  var _onClick = (0, _react.useCallback)(function (e) {
    if (closeRef.current && closeRef.current.contains(e.target)) {
      return;
    }

    return onClick(e);
  }, [closeRef, closable]);

  return _react["default"].createElement("div", (0, _extends2["default"])({
    className: (0, _classnames["default"])('rc-chip', {
      '--custom': backgroundColor
    }, className),
    style: _objectSpread({}, style, {
      backgroundColor: backgroundColor,
      color: color,
      fontSize: fontSize
    }),
    onClick: _onClick
  }, otherProps), avatar, _react["default"].createElement("span", {
    className: "rc-chip-label"
  }, label), closable && _react["default"].createElement("div", {
    ref: closeRef,
    className: "rc-chip-close",
    onClick: onRemove
  }, _react["default"].createElement(_Icon["default"], {
    name: "times"
  })));
};

Chip.displayName = 'Chip';
Chip.propTypes = {
  className: _propTypes["default"].string,
  label: _propTypes["default"].any,
  closable: _propTypes["default"].bool,
  avatar: _propTypes["default"].any,
  color: _propTypes["default"].string,
  backgroundColor: _propTypes["default"].string,
  fontSize: _propTypes["default"].string,
  style: _propTypes["default"].object,
  onRemove: _propTypes["default"].func,
  onClick: _propTypes["default"].func
};
Chip.defaultProps = {
  onRemove: function onRemove(f) {
    return f;
  },
  onClick: function onClick(f) {
    return f;
  }
};
var _default = Chip;
exports["default"] = _default;