"use strict";

var _interopRequireWildcard = require("@babel/runtime/helpers/interopRequireWildcard");

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _slicedToArray2 = _interopRequireDefault(require("@babel/runtime/helpers/slicedToArray"));

var _react = _interopRequireWildcard(require("react"));

var _classnames = _interopRequireDefault(require("classnames"));

var _propTypes = _interopRequireDefault(require("prop-types"));

var _Icon = _interopRequireDefault(require("../Icon"));

var Sub = function Sub(_ref) {
  var className = _ref.className,
      children = _ref.children,
      title = _ref.title,
      icon = _ref.icon,
      iconOnly = _ref.iconOnly,
      selectedKeys = _ref.selectedKeys,
      _onItemClick = _ref._onItemClick;

  var _useState = (0, _react.useState)(false),
      _useState2 = (0, _slicedToArray2["default"])(_useState, 2),
      isExpanded = _useState2[0],
      setIsExpanded = _useState2[1];

  var toggleExpanded = (0, _react.useCallback)(function () {
    return setIsExpanded(function (prev) {
      return !prev;
    });
  }, []);
  return _react["default"].createElement("li", {
    className: (0, _classnames["default"])('rc-menu-sub', {
      '--expanded': isExpanded,
      '--icon-only': iconOnly
    }, className)
  }, _react["default"].createElement("div", {
    className: "rc-menu-sub-title",
    onClick: toggleExpanded
  }, _react["default"].createElement("div", {
    style: {
      display: 'flex',
      alignItems: 'center'
    }
  }, icon && _react["default"].createElement(_Icon["default"], {
    name: icon,
    className: "rc-menu-sub-title-icon"
  }), iconOnly && !icon && title && _react["default"].createElement("span", {
    style: {
      textTransform: 'uppercase '
    }
  }, title[0]), _react["default"].createElement("span", {
    className: "rc-menu-sub-content"
  }, title)), _react["default"].createElement(_Icon["default"], {
    name: "caret-down",
    className: "rc-menu-sub-icon"
  })), _react["default"].createElement("ul", {
    className: "rc-menu-sub-list"
  }, _react["default"].Children.map(children, function (elm) {
    return _react["default"].cloneElement(elm, {
      iconOnly: iconOnly,
      selected: selectedKeys.indexOf(elm.key) >= 0,
      selectedKeys: selectedKeys,
      _key: elm.key,
      _onItemClick: _onItemClick
    });
  })));
};

Sub.displayName = 'Menu.Sub';
Sub.propTypes = {
  className: _propTypes["default"].string,
  children: _propTypes["default"].any,
  selectedKeys: _propTypes["default"].array,
  title: _propTypes["default"].string,
  iconOnly: _propTypes["default"].bool,
  _onItemClick: _propTypes["default"].func
};
Sub.defaultProps = {
  selectedKeys: []
};
var _default = Sub;
exports["default"] = _default;