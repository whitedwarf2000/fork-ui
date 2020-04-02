"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _objectWithoutProperties2 = _interopRequireDefault(require("@babel/runtime/helpers/objectWithoutProperties"));

var _react = _interopRequireDefault(require("react"));

var _classnames = _interopRequireDefault(require("classnames"));

var _propTypes = _interopRequireDefault(require("prop-types"));

var _Affix = _interopRequireDefault(require("../Affix"));

var _Link = _interopRequireDefault(require("./Link"));

var Anchor = function Anchor(_ref) {
  var className = _ref.className,
      noAffix = _ref.noAffix,
      otherProps = (0, _objectWithoutProperties2["default"])(_ref, ["className", "noAffix"]);
  return _react["default"].createElement(_Affix["default"], otherProps, _react["default"].createElement("div", null, "CODE HERE"));
};

Anchor.Link = _Link["default"];
Anchor.displayName = 'Anchor';
Anchor.propTypes = {};
Anchor.defaultProps = {};
var _default = Anchor;
exports["default"] = _default;