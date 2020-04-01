"use strict";

var _interopRequireWildcard = require("@babel/runtime/helpers/interopRequireWildcard");

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _extends2 = _interopRequireDefault(require("@babel/runtime/helpers/extends"));

var _toConsumableArray2 = _interopRequireDefault(require("@babel/runtime/helpers/toConsumableArray"));

var _slicedToArray2 = _interopRequireDefault(require("@babel/runtime/helpers/slicedToArray"));

var _objectWithoutProperties2 = _interopRequireDefault(require("@babel/runtime/helpers/objectWithoutProperties"));

var _react = _interopRequireWildcard(require("react"));

var _classnames = _interopRequireDefault(require("classnames"));

var _propTypes = _interopRequireDefault(require("prop-types"));

var _Item = _interopRequireDefault(require("./Item"));

var _ItemGroup = _interopRequireDefault(require("./ItemGroup"));

var _Sub = _interopRequireDefault(require("./Sub"));

var _useUncontrolled3 = _interopRequireDefault(require("../../hooks/useUncontrolled"));

var _helpers = require("../../utils/helpers");

var Menu = function Menu(_ref) {
  var className = _ref.className,
      children = _ref.children,
      defaultSelectedKeys = _ref.defaultSelectedKeys,
      onSelectedKeysChange = _ref.onSelectedKeysChange,
      onItemClick = _ref.onItemClick,
      iconOnly = _ref.iconOnly,
      multiple = _ref.multiple,
      otherProps = (0, _objectWithoutProperties2["default"])(_ref, ["className", "children", "defaultSelectedKeys", "onSelectedKeysChange", "onItemClick", "iconOnly", "multiple"]);

  var _useUncontrolled = (0, _useUncontrolled3["default"])('selectedKeys', otherProps, {
    defaultState: defaultSelectedKeys,
    onChangeState: onSelectedKeysChange
  }),
      _useUncontrolled2 = (0, _slicedToArray2["default"])(_useUncontrolled, 3),
      selectedKeys = _useUncontrolled2[0],
      setSelectedKeys = _useUncontrolled2[1],
      isControlled = _useUncontrolled2[2];

  var _onItemClick = (0, _react.useCallback)(function (key, itemProps) {
    if (isControlled) {
      return onItemClick(key, itemProps);
    }

    onItemClick(key, itemProps);
    setSelectedKeys(function (prev) {
      if (multiple) {
        var next = new Set(prev); // toggle selectedKeys with key

        if (next.has(key)) {
          next["delete"](key);
        } else {
          next.add(key);
        }

        return (0, _toConsumableArray2["default"])(next);
      }

      return [key];
    });
  }, []);

  var passedProps = (0, _react.useMemo)(function () {
    return (0, _helpers.omit)(otherProps, ['selectedKeys']);
  }, [otherProps]);
  return /*#__PURE__*/_react["default"].createElement("ul", (0, _extends2["default"])({
    className: (0, _classnames["default"])('rc-menu', {
      '--icon-only': iconOnly
    }, className)
  }, passedProps), _react["default"].Children.map(children, function (elm) {
    return _react["default"].cloneElement(elm, {
      _onItemClick: _onItemClick,
      iconOnly: iconOnly,
      selectedKeys: selectedKeys,
      selected: selectedKeys.indexOf(elm.key) >= 0,
      _key: elm.key
    });
  }));
};

Menu.Item = _Item["default"];
Menu.ItemGroup = _ItemGroup["default"];
Menu.Sub = _Sub["default"];
Menu.displayName = 'Menu';
Menu.propTypes = {
  className: _propTypes["default"].string,
  children: _propTypes["default"].any,
  selectedKeys: _propTypes["default"].array,
  defaultSelectedKeys: _propTypes["default"].array,
  onSelectedKeysChange: _propTypes["default"].func,
  onItemClick: _propTypes["default"].func,
  multiple: _propTypes["default"].bool
};
Menu.defaultProps = {
  defaultSelectedKeys: [],
  onSelectedKeysChange: function onSelectedKeysChange(f) {
    return f;
  },
  onItemClick: function onItemClick(f) {
    return f;
  }
};
var _default = Menu;
exports["default"] = _default;