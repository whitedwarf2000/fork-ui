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

var BaseInput = _react["default"].forwardRef(function (_ref, ref) {
  var className = _ref.className,
      htmlType = _ref.htmlType,
      otherProps = (0, _objectWithoutProperties2["default"])(_ref, ["className", "htmlType"]);
  return _react["default"].createElement("div", {
    className: "rc-input-container"
  }, _react["default"].createElement("input", (0, _extends2["default"])({}, otherProps, {
    ref: ref,
    className: (0, _classnames["default"])('rc-input', className),
    type: htmlType
  })));
});

BaseInput.displayName = 'BaseInput';
BaseInput.propTypes = {
  className: _propTypes["default"].string,
  htmlType: _propTypes["default"].string
};
BaseInput.defaultProps = {
  htmlType: 'text'
};
var _default = BaseInput;
exports["default"] = _default;