"use strict";

var _interopRequireWildcard = require("@babel/runtime/helpers/interopRequireWildcard");

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _extends2 = _interopRequireDefault(require("@babel/runtime/helpers/extends"));

var _slicedToArray2 = _interopRequireDefault(require("@babel/runtime/helpers/slicedToArray"));

var _objectWithoutProperties2 = _interopRequireDefault(require("@babel/runtime/helpers/objectWithoutProperties"));

var _react = _interopRequireWildcard(require("react"));

var _classnames = _interopRequireDefault(require("classnames"));

var _propTypes = _interopRequireDefault(require("prop-types"));

var _BaseInput = _interopRequireDefault(require("../BaseInput"));

var _Icon = _interopRequireDefault(require("../Icon"));

var Password = _react["default"].forwardRef(function (_ref, ref) {
  var className = _ref.className,
      noEye = _ref.noEye,
      otherProps = (0, _objectWithoutProperties2["default"])(_ref, ["className", "noEye"]);

  var _useState = (0, _react.useState)(false),
      _useState2 = (0, _slicedToArray2["default"])(_useState, 2),
      isShowPassword = _useState2[0],
      setIsShowPassword = _useState2[1];

  var toggleShowPassword = (0, _react.useCallback)(function () {
    if (noEye) {
      return;
    }

    return setIsShowPassword(function (prev) {
      return !prev;
    });
  }, [noEye]);
  return /*#__PURE__*/_react["default"].createElement("div", {
    className: (0, _classnames["default"])('rc-password', className)
  }, /*#__PURE__*/_react["default"].createElement(_BaseInput["default"], (0, _extends2["default"])({}, otherProps, {
    ref: ref,
    htmlType: isShowPassword ? 'text' : 'password'
  })), !noEye && /*#__PURE__*/_react["default"].createElement(_Icon["default"], {
    name: isShowPassword ? 'eye-slash' : 'eye',
    className: "rc-password-eye",
    onClick: toggleShowPassword
  }));
});

Password.displayName = 'Password';
Password.propTypes = {
  className: _propTypes["default"].string
};
Password.defaultProps = {};
var _default = Password;
exports["default"] = _default;