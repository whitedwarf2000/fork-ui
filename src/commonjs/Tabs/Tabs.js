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

var _Item = _interopRequireDefault(require("./Item"));

var renderIcon = function renderIcon(icon, right) {
  if (!icon) {
    return null;
  }

  if (typeof icon === 'string') {
    return /*#__PURE__*/_react["default"].createElement(_Icon["default"], {
      name: icon,
      style: right ? {
        marginLeft: '1em'
      } : {
        marginRight: '1em'
      }
    });
  }

  return icon;
};

var Tabs = function Tabs(_ref) {
  var className = _ref.className,
      children = _ref.children,
      activeTab = _ref.activeTab,
      onChange = _ref.onChange,
      fluid = _ref.fluid;
  var tabs = (0, _react.useMemo)(function () {
    return _react["default"].Children.map(children, function (tab) {
      return {
        key: tab.key,
        title: tab.props.title,
        disabled: tab.props.disabled,
        icon: tab.props.icon,
        iconRight: tab.props.iconRight
      };
    });
  }, [children]);
  return /*#__PURE__*/_react["default"].createElement("div", {
    className: (0, _classnames["default"])('rc-tabs', {
      '--fluid': fluid
    }, className)
  }, /*#__PURE__*/_react["default"].createElement("div", {
    className: "rc-tabs-nav-container"
  }, /*#__PURE__*/_react["default"].createElement("div", {
    className: "rc-tabs-nav"
  }, tabs.map(function (tab) {
    return /*#__PURE__*/_react["default"].createElement("button", {
      key: tab.key,
      className: (0, _classnames["default"])('rc-tabs-nav-item', {
        '--active': activeTab === tab.key
      }),
      disabled: tab.disabled,
      onClick: function onClick() {
        return onChange(tab.key);
      }
    }, renderIcon(tab.icon), tab.title, renderIcon(tab.iconRight, true));
  }))), /*#__PURE__*/_react["default"].createElement("div", {
    className: "rc-tabs-contents"
  }, _react["default"].Children.map(children, function (elm) {
    return _react["default"].cloneElement(elm, {
      active: activeTab === elm.key
    });
  })));
};

Tabs.Item = _Item["default"];
Tabs.displayName = 'Tabs';
Tabs.propTypes = {
  className: _propTypes["default"].string,
  activeTab: _propTypes["default"].string,
  onChange: _propTypes["default"].func,
  fluid: _propTypes["default"].bool
};
Tabs.defaultProps = {
  onChange: function onChange(f) {
    return f;
  }
};
var _default = Tabs;
exports["default"] = _default;