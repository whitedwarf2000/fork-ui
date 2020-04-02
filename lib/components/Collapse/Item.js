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

var Item = function Item(_ref) {
  var className = _ref.className,
      title = _ref.title,
      children = _ref.children,
      active = _ref.active,
      onClick = _ref.onClick,
      disabled = _ref.disabled,
      icon = _ref.icon,
      otherProps = (0, _objectWithoutProperties2["default"])(_ref, ["className", "title", "children", "active", "onClick", "disabled", "icon"]);

  var _useCollapseStyle = useCollapseStyle(active),
      _useCollapseStyle2 = (0, _slicedToArray2["default"])(_useCollapseStyle, 2),
      contentStyle = _useCollapseStyle2[0],
      contentRef = _useCollapseStyle2[1];

  var _toggleActive = (0, _react.useCallback)(function (e) {
    if (disabled) {
      return;
    }

    return onClick(e);
  }, [disabled]);

  return _react["default"].createElement("div", (0, _extends2["default"])({}, otherProps, {
    className: (0, _classnames["default"])('rc-panel', {
      '--active': active,
      '--inactive': !active,
      '--disabled': disabled
    }, className)
  }), _react["default"].createElement("div", {
    className: "rc-panel-title",
    onClick: _toggleActive
  }, _react["default"].createElement("div", {
    style: {
      display: 'flex',
      alignItems: 'center'
    }
  }, icon && _react["default"].createElement(_Icon["default"], {
    name: icon,
    style: {
      marginRight: '1rem'
    }
  }), title), _react["default"].createElement(_Icon["default"], {
    className: "rc-panel-icon",
    name: "caret-down"
  })), _react["default"].createElement("div", {
    ref: contentRef,
    className: "rc-panel-content",
    style: contentStyle
  }, _react["default"].createElement("div", {
    className: "rc-panel-box"
  }, children)));
};

Item.displayName = 'Collapse.Item';
Item.propTypes = {
  title: _propTypes["default"].any.isRequired,
  className: _propTypes["default"].string,
  defaultActive: _propTypes["default"].bool,
  onClick: _propTypes["default"].func,
  // do not set default, onClick will be passed by Collapse so it away exsits
  children: _propTypes["default"].any,
  icon: _propTypes["default"].string
};
Item.defaultProps = {};
var _default = Item;
/**
 * 
 * When active style = { height: 0, opacity: 0 } => {height: contentHeight, opacity: 1 } => {}
 * When inactive style = { height: contentHeight, opacity: 1 } => {  height: 0, opacity: 0 } => { display: 'none' }
 * 
 */

exports["default"] = _default;

function useCollapseStyle(active) {
  var _useState = (0, _react.useState)({}),
      _useState2 = (0, _slicedToArray2["default"])(_useState, 2),
      style = _useState2[0],
      setStyle = _useState2[1];

  var _useState3 = (0, _react.useState)(0),
      _useState4 = (0, _slicedToArray2["default"])(_useState3, 2),
      contentHeight = _useState4[0],
      setContentHeight = _useState4[1];

  var contentRef = (0, _react.useRef)();
  (0, _react.useLayoutEffect)(function () {
    if (contentRef.current) {
      setContentHeight(contentRef.current.clientHeight);
    }
  }, [contentHeight]);
  (0, _react.useLayoutEffect)(function () {
    var begin;
    var next;
    var end;

    if (active) {
      begin = setTimeout(function () {
        return setStyle({
          opacity: 0,
          height: 0
        });
      });
      next = setTimeout(function () {
        return setStyle({
          opacity: 1,
          height: contentHeight
        });
      }, 100);
      end = setTimeout(function () {
        return setStyle({});
      }, 600);
    } else {
      begin = setTimeout(function () {
        return setStyle({
          opacity: 1,
          height: contentHeight
        });
      });
      next = setTimeout(function () {
        return setStyle({
          opacity: 1,
          height: 0
        });
      }, 100);
      end = setTimeout(function () {
        return setStyle({
          display: 'none'
        });
      }, 600);
    }

    return function () {
      clearTimeout(begin);
      clearTimeout(next);
      clearTimeout(end);
    };
  }, [active, contentHeight]);
  return [style, contentRef];
}