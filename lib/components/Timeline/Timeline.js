"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _extends2 = _interopRequireDefault(require("@babel/runtime/helpers/extends"));

var _objectWithoutProperties2 = _interopRequireDefault(require("@babel/runtime/helpers/objectWithoutProperties"));

var _react = _interopRequireDefault(require("react"));

var _classnames = _interopRequireDefault(require("classnames"));

var _propTypes = _interopRequireDefault(require("prop-types"));

var _Item = _interopRequireDefault(require("./Item"));

var Timeline = function Timeline(_ref) {
  var className = _ref.className,
      children = _ref.children,
      right = _ref.right,
      reverse = _ref.reverse,
      otherProps = (0, _objectWithoutProperties2["default"])(_ref, ["className", "children", "right", "reverse"]);
  return _react["default"].createElement("div", (0, _extends2["default"])({
    className: (0, _classnames["default"])('rc-timeline', {
      '--right': right,
      '--reverse': reverse
    }, className)
  }, otherProps), children);
};

Timeline.Item = _Item["default"];
Timeline.displayName = 'Timeline';
Timeline.propTypes = {
  className: _propTypes["default"].string,
  children: _propTypes["default"].any,
  right: _propTypes["default"].bool,
  reverse: _propTypes["default"].bool
};
Timeline.defaultProps = {};
var _default = Timeline;
exports["default"] = _default;