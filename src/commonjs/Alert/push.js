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

var _propTypes = _interopRequireDefault(require("prop-types"));

var _reactDom = _interopRequireDefault(require("react-dom"));

var _Alert = _interopRequireDefault(require("./Alert"));

var PusherAlert = function PusherAlert(_ref) {
  var temporary = _ref.temporary,
      children = _ref.children,
      render = _ref.render,
      otherProps = (0, _objectWithoutProperties2["default"])(_ref, ["temporary", "children", "render"]);

  var _useState = (0, _react.useState)(true),
      _useState2 = (0, _slicedToArray2["default"])(_useState, 2),
      open = _useState2[0],
      setIsOpen = _useState2[1];

  (0, _react.useEffect)(function () {
    if (!open) {
      var timer = setTimeout(function () {
        _reactDom["default"].unmountComponentAtNode(temporary);

        document.body.removeChild(temporary);
      }, 500);
      return function () {
        return clearTimeout(timer);
      };
    }
  }, [open]);
  return /*#__PURE__*/_react["default"].createElement(_Alert["default"], (0, _extends2["default"])({}, otherProps, {
    open: open,
    onClose: function onClose() {
      return setIsOpen(false);
    }
  }), render ? render(setIsOpen) : children);
};

PusherAlert.propTypes = {
  temporary: _propTypes["default"].any.isRequired,
  children: _propTypes["default"].any,
  render: _propTypes["default"].func
};
PusherAlert.defaultProps = {};

var _default = function _default(data) {
  var temporary = document.createElement('div');
  document.body.appendChild(temporary);

  _reactDom["default"].render( /*#__PURE__*/_react["default"].createElement(PusherAlert, (0, _extends2["default"])({}, data, {
    temporary: temporary
  })), temporary);
};

exports["default"] = _default;