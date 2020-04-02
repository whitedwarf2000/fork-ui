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

var _Icon = _interopRequireDefault(require("../Icon"));

var Item = function Item(_ref) {
  var className = _ref.className,
      selected = _ref.selected,
      disabled = _ref.disabled,
      title = _ref.title,
      icon = _ref.icon,
      iconOnly = _ref.iconOnly,
      titleOnly = _ref.titleOnly,
      _key = _ref._key,
      _onItemClick = _ref._onItemClick,
      onItemClick = _ref.onItemClick;

  var _onClick = (0, _react.useCallback)(function () {
    if (disabled) {
      return;
    }

    if (onItemClick) {
      return onItemClick();
    }

    return _onItemClick(_key, {
      selected: selected,
      title: title,
      disabled: disabled,
      icon: icon
    });
  }, [_key, disabled, title, onItemClick, selected, icon]);

  return _react["default"].createElement("li", {
    className: (0, _classnames["default"])('rc-menu-item', {
      '--selected': selected,
      '--disabled': disabled,
      '--icon-only': iconOnly,
      '--title-only': titleOnly
    }, className),
    onClick: _onClick
  }, icon && _react["default"].createElement(_Icon["default"], {
    name: icon,
    className: "rc-menu-item-title-icon"
  }), (iconOnly && titleOnly || iconOnly && !icon) && _react["default"].createElement("span", {
    style: {
      textTransform: 'uppercase '
    }
  }, title[0]), _react["default"].createElement("span", {
    className: "rc-menu-item-content"
  }, title));
};

Item.displayName = 'Menu.Item';
Item.propTypes = {
  className: _propTypes["default"].string,
  _onItemClick: _propTypes["default"].func,
  // do not set default, this function will be passed throught from parent
  onItemClick: _propTypes["default"].func,
  // not set default
  selected: _propTypes["default"].bool,
  disabled: _propTypes["default"].bool,
  titleOnly: _propTypes["default"].bool,
  iconOnly: _propTypes["default"].bool,
  children: _propTypes["default"].any,
  icon: _propTypes["default"].string,
  title: _propTypes["default"].string.isRequired,
  // when Item in iconOnly mode, titleOnly will overide icon by first lettter of this value
  _key: _propTypes["default"].string
};
Item.defaultProps = {};
var _default = Item;
exports["default"] = _default;