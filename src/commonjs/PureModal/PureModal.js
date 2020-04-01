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

var _Button = _interopRequireDefault(require("../Button"));

var PureModal = function PureModal(_ref) {
  var modalRef = _ref.modalRef,
      children = _ref.children,
      title = _ref.title,
      onCloseClick = _ref.onCloseClick,
      className = _ref.className,
      closable = _ref.closable,
      otherProps = (0, _objectWithoutProperties2["default"])(_ref, ["modalRef", "children", "title", "onCloseClick", "className", "closable"]);
  return /*#__PURE__*/_react["default"].createElement("div", (0, _extends2["default"])({
    className: (0, _classnames["default"])('rc-pure-modal', className),
    ref: modalRef
  }, otherProps), /*#__PURE__*/_react["default"].createElement("div", {
    className: "rc-pure-modal-title"
  }, /*#__PURE__*/_react["default"].createElement("span", null, title), closable && /*#__PURE__*/_react["default"].createElement(_Button["default"], {
    icon: "times",
    circle: true,
    className: "rc-pure-modal-close",
    fontSize: "0.75em",
    onClick: onCloseClick
  })), /*#__PURE__*/_react["default"].createElement("div", {
    className: "rc-pure-modal-content"
  }, children));
};

PureModal.displayName = 'PureModal';
PureModal.propTypes = {
  modalRef: _propTypes["default"].any,
  children: _propTypes["default"].any,
  title: _propTypes["default"].any,
  onCloseClick: _propTypes["default"].func,
  className: _propTypes["default"].string,
  closable: _propTypes["default"].bool
};
PureModal.defaultProps = {
  onCloseClick: function onCloseClick(f) {
    return f;
  },
  closable: true
};
var _default = PureModal;
exports["default"] = _default;