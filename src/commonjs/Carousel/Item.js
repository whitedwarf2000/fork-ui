"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

var _interopRequireWildcard = require("@babel/runtime/helpers/interopRequireWildcard");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _react = _interopRequireWildcard(require("react"));

var _classnames = _interopRequireDefault(require("classnames"));

var _propTypes = _interopRequireDefault(require("prop-types"));

var Item = function Item(_ref) {
  var className = _ref.className,
      children = _ref.children;
  var ref = (0, _react.useRef)();
  (0, _react.useEffect)(function () {}, []);
  return /*#__PURE__*/_react["default"].createElement("div", {
    className: (0, _classnames["default"])('rc-carousel-item', className),
    ref: ref
  }, children);
};

Item.displayName = 'Carousel.Item';
Item.propTypes = {
  className: _propTypes["default"].string
};
Item.defaultProps = {};
var _default = Item;
exports["default"] = _default;