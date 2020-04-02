"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _react = _interopRequireDefault(require("react"));

var _classnames = _interopRequireDefault(require("classnames"));

var _propTypes = _interopRequireDefault(require("prop-types"));

var ItemGroup = function ItemGroup(_ref) {
  var className = _ref.className,
      children = _ref.children,
      title = _ref.title,
      iconOnly = _ref.iconOnly,
      selectedKeys = _ref.selectedKeys,
      _onItemClick = _ref._onItemClick;
  return _react["default"].createElement("li", {
    className: (0, _classnames["default"])('rc-menu-item-group', {
      '--icon-only': iconOnly
    }, className)
  }, _react["default"].createElement("div", {
    className: "rc-menu-item-group-title"
  }, _react["default"].createElement("span", null, title)), _react["default"].createElement("ul", {
    className: "rc-menu-item-group-list"
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

ItemGroup.displayName = 'Menu.ItemGroup';
ItemGroup.propTypes = {
  className: _propTypes["default"].string,
  children: _propTypes["default"].any,
  selectedKeys: _propTypes["default"].array,
  _onItemClick: _propTypes["default"].func,
  iconOnly: _propTypes["default"].bool,
  title: _propTypes["default"].string
};
ItemGroup.defaultProps = {
  selectedKeys: []
};
var _default = ItemGroup;
exports["default"] = _default;