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

var _useSemanticProp = _interopRequireDefault(require("../../hooks/useSemanticProp"));

var _helpers = require("../../utils/helpers");

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { (0, _defineProperty2["default"])(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

var mShape = Object.freeze({
  square: '--square',
  circle: '--circle'
});

var Avatar = function Avatar(_ref) {
  var className = _ref.className,
      src = _ref.src,
      style = _ref.style,
      name = _ref.name,
      fontSize = _ref.fontSize,
      color = _ref.color,
      otherProps = (0, _objectWithoutProperties2["default"])(_ref, ["className", "src", "style", "name", "fontSize", "color"]);
  var shape = (0, _useSemanticProp["default"])('shape', otherProps, Object.keys(mShape));
  var passedProps = (0, _react.useMemo)(function () {
    return (0, _helpers.omit)(otherProps, ['shape', 'square', 'circle']);
  }, [otherProps]);
  return _react["default"].createElement("div", (0, _extends2["default"])({
    className: (0, _classnames["default"])('rc-avatar', mShape[shape] || '--circle', className),
    style: _objectSpread({}, style, {
      fontSize: fontSize,
      color: color,
      backgroundImage: "url(".concat(src, ")")
    })
  }, passedProps), !src && name && _react["default"].createElement("span", {
    className: "rc-avatar-name"
  }, name[0].toUpperCase()));
};

Avatar.displayName = 'Avatar';
Avatar.propTypes = {
  className: _propTypes["default"].string,
  src: _propTypes["default"].string,
  shape: _propTypes["default"].oneOf(Object.keys(mShape)),
  circle: _propTypes["default"].bool,
  square: _propTypes["default"].bool,
  name: _propTypes["default"].string,
  fontSize: _propTypes["default"].string,
  color: _propTypes["default"].string
};
Avatar.defaultProps = {};
var _default = Avatar;
exports["default"] = _default;