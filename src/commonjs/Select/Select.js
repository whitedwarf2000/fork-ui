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

var _Icon = _interopRequireDefault(require("../Icon"));

var _Menu = _interopRequireDefault(require("../Menu"));

var _Overlay = _interopRequireDefault(require("../Overlay"));

var Select = function Select(_ref) {
  var className = _ref.className,
      children = _ref.children,
      placement = _ref.placement,
      placeholder = _ref.placeholder,
      otherProps = (0, _objectWithoutProperties2["default"])(_ref, ["className", "children", "placement", "placeholder"]);

  var _useState = (0, _react.useState)(),
      _useState2 = (0, _slicedToArray2["default"])(_useState, 2),
      selectWidth = _useState2[0],
      sestSelectWidth = _useState2[1];

  var _useState3 = (0, _react.useState)(false),
      _useState4 = (0, _slicedToArray2["default"])(_useState3, 2),
      isDrop = _useState4[0],
      setIsDrop = _useState4[1];

  var _useState5 = (0, _react.useState)(),
      _useState6 = (0, _slicedToArray2["default"])(_useState5, 2),
      value = _useState6[0],
      setValue = _useState6[1];

  var _useState7 = (0, _react.useState)({}),
      _useState8 = (0, _slicedToArray2["default"])(_useState7, 2),
      _shape = _useState8[0],
      _setShape = _useState8[1];

  var ref = (0, _react.useRef)();
  (0, _react.useLayoutEffect)(function () {
    sestSelectWidth(ref.current.clientWidth);
  }, []);
  var onToggleDrop = (0, _react.useCallback)(function () {
    return setIsDrop(function (prev) {
      return !prev;
    });
  }, []);
  var onItemClick = (0, _react.useCallback)(function (key, itemProps) {
    setValue(key);

    _setShape(itemProps);

    setIsDrop(false);
  }, []);
  var onVisibleChange = (0, _react.useCallback)(function (visible) {
    if (!visible) {
      setIsDrop(false);
    }
  }, []);
  var renderValue = (0, _react.useCallback)(function () {
    if (!value) {
      return /*#__PURE__*/_react["default"].createElement("span", {
        className: "rc-select-input-placeholder"
      }, placeholder);
    }

    return /*#__PURE__*/_react["default"].createElement("div", {
      style: {
        display: 'flex',
        alignItems: 'center'
      }
    }, _shape.icon && /*#__PURE__*/_react["default"].createElement(_Icon["default"], {
      name: _shape.icon,
      style: {
        marginRight: '0.75rem'
      }
    }), /*#__PURE__*/_react["default"].createElement("span", null, _shape.title));
  }, [value, _shape, placeholder]);
  return /*#__PURE__*/_react["default"].createElement(_Overlay["default"], {
    visible: isDrop,
    onVisibleChange: onVisibleChange,
    canOutsideClickClose: true,
    placement: placement,
    trigger: [],
    overlay: /*#__PURE__*/_react["default"].createElement(_Menu["default"], {
      selectedKeys: [value],
      className: "rc-select-dropdown",
      style: {
        width: selectWidth
      },
      onItemClick: onItemClick
    }, children)
  }, /*#__PURE__*/_react["default"].createElement("div", {
    className: "rc-select-container"
  }, /*#__PURE__*/_react["default"].createElement("div", (0, _extends2["default"])({}, otherProps, {
    ref: ref,
    className: (0, _classnames["default"])('rc-select', {
      '--is-drop': isDrop
    }, className),
    onClick: onToggleDrop
  }), /*#__PURE__*/_react["default"].createElement("div", {
    className: "rc-select-input"
  }, renderValue()), /*#__PURE__*/_react["default"].createElement(_Icon["default"], {
    name: "caret-down",
    className: "rc-select-icon"
  }))));
};

Select.Option = _Menu["default"].Item;
Select.Group = _Menu["default"].ItemGroup;
Select.displayName = 'Select';
Select.propTypes = {
  className: _propTypes["default"].string,
  placement: _propTypes["default"].string
};
Select.defaultProps = {
  placement: 'bottom-left'
};
var _default = Select;
exports["default"] = _default;