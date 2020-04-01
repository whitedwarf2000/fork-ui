"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _objectWithoutProperties2 = _interopRequireDefault(require("@babel/runtime/helpers/objectWithoutProperties"));

var _react = _interopRequireDefault(require("react"));

var Link = function Link(_ref) {
  var href = _ref.href,
      otherProps = (0, _objectWithoutProperties2["default"])(_ref, ["href"]);
  return /*#__PURE__*/_react["default"].createElement("div", otherProps);
};

Link.displayName = 'Anchor.Link';
var _default = Link;
exports["default"] = _default;