"use strict";

var _interopRequireWildcard = require("@babel/runtime/helpers/interopRequireWildcard");

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _extends2 = _interopRequireDefault(require("@babel/runtime/helpers/extends"));

var _defineProperty2 = _interopRequireDefault(require("@babel/runtime/helpers/defineProperty"));

var _slicedToArray2 = _interopRequireDefault(require("@babel/runtime/helpers/slicedToArray"));

var _objectWithoutProperties2 = _interopRequireDefault(require("@babel/runtime/helpers/objectWithoutProperties"));

var _react = _interopRequireWildcard(require("react"));

var _classnames = _interopRequireDefault(require("classnames"));

var _propTypes = _interopRequireDefault(require("prop-types"));

var _Icon = _interopRequireDefault(require("../Icon"));

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { (0, _defineProperty2["default"])(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

var isLighted = function isLighted(currentStarHover, idx, star) {
  return currentStarHover >= idx + 1 || currentStarHover === 'outside' && star >= idx + 1;
};

var Rater = function Rater(_ref) {
  var className = _ref.className,
      max = _ref.max,
      starRef = _ref.starRef,
      icon = _ref.icon,
      star = _ref.star,
      onChange = _ref.onChange,
      fontSize = _ref.fontSize,
      style = _ref.style,
      otherProps = (0, _objectWithoutProperties2["default"])(_ref, ["className", "max", "starRef", "icon", "star", "onChange", "fontSize", "style"]);

  var _useState = (0, _react.useState)('outside'),
      _useState2 = (0, _slicedToArray2["default"])(_useState, 2),
      currentStarHover = _useState2[0],
      setCurrentStarHover = _useState2[1];

  var stars = (0, _react.useMemo)(function () {
    var rs = [];

    var _loop = function _loop(i) {
      rs.push(_react["default"].createElement("div", {
        key: i,
        className: (0, _classnames["default"])('rc-rater-item', {
          '--light': isLighted(currentStarHover, i, star)
        }),
        onMouseEnter: function onMouseEnter() {
          return setCurrentStarHover(i + 1);
        },
        onClick: function onClick() {
          return onChange(i + 1);
        }
      }, _react["default"].createElement(_Icon["default"], {
        name: icon
      })));
    };

    for (var i = 0; i < max; i++) {
      _loop(i);
    }

    return rs;
  }, [star, currentStarHover, max]);
  return _react["default"].createElement("div", (0, _extends2["default"])({
    className: (0, _classnames["default"])('rc-rater', className),
    ref: starRef,
    onMouseLeave: function onMouseLeave() {
      return setCurrentStarHover('outside');
    },
    style: _objectSpread({}, style, {
      fontSize: fontSize
    })
  }, otherProps), stars);
};

Rater.displayName = 'Rater';
Rater.propTypes = {
  icon: _propTypes["default"].string,
  max: _propTypes["default"].number,
  onChange: _propTypes["default"].func,
  className: _propTypes["default"].string,
  starRef: _propTypes["default"].any,
  star: _propTypes["default"].number,
  style: _propTypes["default"].object,
  fontSize: _propTypes["default"].string
};
Rater.defaultProps = {
  icon: 'star',
  max: 5,
  onChange: function onChange(f) {
    return f;
  }
};
var _default = Rater;
exports["default"] = _default;