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

var _useSemanticProp = _interopRequireDefault(require("../../hooks/useSemanticProp"));

var _helpers = require("../../utils/helpers");

var mTypes = Object.freeze({
  dashed: '--dashed',
  solid: '--solid',
  dotted: '--dotted'
});
var mDirections = Object.freeze({
  left: '--left',
  right: '--right'
});

var Divider = function Divider(_ref) {
  var className = _ref.className,
      title = _ref.title,
      transparent = _ref.transparent,
      otherProps = (0, _objectWithoutProperties2["default"])(_ref, ["className", "title", "transparent"]);
  var type = (0, _useSemanticProp["default"])('type', otherProps, Object.keys(mTypes));
  var direction = (0, _useSemanticProp["default"])('direction', otherProps, Object.keys(mDirections), [otherProps.left, otherProps.right, otherProps.direction]);
  var passedProps = (0, _react.useMemo)(function () {
    return (0, _helpers.omit)(otherProps, ['solid', 'dashed', 'dotted', 'type', 'left', 'right', 'direction']);
  }, [otherProps]);
  return _react["default"].createElement("div", (0, _extends2["default"])({
    className: (0, _classnames["default"])('rc-divider', {
      '--transparent': transparent
    }, mTypes[type], mDirections[direction], className)
  }, passedProps), title && _react["default"].createElement("div", {
    className: "rc-divider-title"
  }, title));
};

Divider.displayName = 'Divider';
Divider.propTypes = {
  className: _propTypes["default"].string,
  type: _propTypes["default"].string,
  title: _propTypes["default"].any,
  solid: _propTypes["default"].bool,
  dashed: _propTypes["default"].bool,
  dotted: _propTypes["default"].bool,
  transparent: _propTypes["default"].bool,
  direction: _propTypes["default"].string
};
Divider.defaultProps = {};
var _default = Divider;
exports["default"] = _default;