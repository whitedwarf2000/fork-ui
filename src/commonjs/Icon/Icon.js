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

var _svg = _interopRequireDefault(require("./svg"));

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { (0, _defineProperty2["default"])(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

var Fallback = function Fallback() {
  return null;
};

var Icon = function Icon(_ref) {
  var name = _ref.name,
      className = _ref.className,
      style = _ref.style,
      color = _ref.color,
      fontSize = _ref.fontSize,
      otherProps = (0, _objectWithoutProperties2["default"])(_ref, ["name", "className", "style", "color", "fontSize"]);
  var I = (0, _react.useMemo)(function () {
    return _svg["default"][name] || Fallback;
  }, [name]);
  return /*#__PURE__*/_react["default"].createElement(I, (0, _extends2["default"])({
    className: (0, _classnames["default"])('rc-icon', "rc-icon-".concat(name), className),
    style: _objectSpread({
      color: color || null,
      fontSize: fontSize || null
    }, style)
  }, otherProps));
};

Icon.displayName = 'Icon';
Icon.propTypes = {
  name: _propTypes["default"].string.isRequired,
  className: _propTypes["default"].string,
  style: _propTypes["default"].object,
  color: _propTypes["default"].string,
  fontSize: _propTypes["default"].string
};
Icon.defaultProps = {};
var _default = Icon;
exports["default"] = _default;