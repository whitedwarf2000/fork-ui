"use strict";

var _interopRequireWildcard = require("@babel/runtime/helpers/interopRequireWildcard");

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _defineProperty2 = _interopRequireDefault(require("@babel/runtime/helpers/defineProperty"));

var _toConsumableArray2 = _interopRequireDefault(require("@babel/runtime/helpers/toConsumableArray"));

var _slicedToArray2 = _interopRequireDefault(require("@babel/runtime/helpers/slicedToArray"));

var _objectWithoutProperties2 = _interopRequireDefault(require("@babel/runtime/helpers/objectWithoutProperties"));

var _react = _interopRequireWildcard(require("react"));

var _classnames = _interopRequireDefault(require("classnames"));

var _propTypes = _interopRequireDefault(require("prop-types"));

var _Item = _interopRequireDefault(require("./Item"));

var _useUncontrolled3 = _interopRequireDefault(require("../../hooks/useUncontrolled"));

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { (0, _defineProperty2["default"])(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

var mapToObject = function mapToObject(arr) {
  return arr.reduce(function (rs, key) {
    rs[key] = true;
    return rs;
  }, {});
};

var Collapse = function Collapse(_ref) {
  var className = _ref.className,
      defaultActivePanels = _ref.defaultActivePanels,
      onActivePanelsChange = _ref.onActivePanelsChange,
      onPanelClick = _ref.onPanelClick,
      children = _ref.children,
      accordion = _ref.accordion,
      otherProps = (0, _objectWithoutProperties2["default"])(_ref, ["className", "defaultActivePanels", "onActivePanelsChange", "onPanelClick", "children", "accordion"]);

  var _useUncontrolled = (0, _useUncontrolled3["default"])('activePanels', otherProps, {
    defaultState: defaultActivePanels,
    onChangeState: onActivePanelsChange
  }),
      _useUncontrolled2 = (0, _slicedToArray2["default"])(_useUncontrolled, 3),
      activePanels = _useUncontrolled2[0],
      setActivePanels = _useUncontrolled2[1],
      isControlled = _useUncontrolled2[2];

  var activePanelsAsObject = (0, _react.useMemo)(function () {
    return mapToObject(activePanels);
  }, [activePanels]);

  var _onPanelClick = (0, _react.useCallback)(function (key) {
    if (isControlled) {
      return onPanelClick(key);
    }

    onPanelClick(key);

    if (accordion) {
      return setActivePanels(function (prev) {
        if (prev.indexOf(key) >= 0) {
          return [];
        }

        return [key];
      });
    }

    return setActivePanels(function (prev) {
      if (prev.indexOf(key) >= 0) {
        return prev.filter(function (_key) {
          return _key !== key;
        });
      }

      return [].concat((0, _toConsumableArray2["default"])(prev), [key]);
    });
  }, [accordion, isControlled]);

  return _react["default"].createElement("div", {
    className: (0, _classnames["default"])('rc-collapse', className)
  }, _react["default"].Children.map(children, function (elm) {
    return _react["default"].cloneElement(elm, _objectSpread({
      active: activePanelsAsObject[elm.key],
      onClick: function onClick() {
        return _onPanelClick(elm.key);
      }
    }, elm.props));
  }));
};

Collapse.Item = _Item["default"];
Collapse.displayName = 'Collapse';
Collapse.propTypes = {
  className: _propTypes["default"].string,
  defaultActivePanels: _propTypes["default"].array,
  activePanels: _propTypes["default"].array,
  children: _propTypes["default"].any,
  onActivePanelsChange: _propTypes["default"].func,
  onPanelClick: _propTypes["default"].func,
  accordion: _propTypes["default"].bool
};
Collapse.defaultProps = {
  defaultActivePanels: [],
  onActivePanelsChange: function onActivePanelsChange(f) {
    return f;
  },
  onPanelClick: function onPanelClick(f) {
    return f;
  }
};
var _default = Collapse;
exports["default"] = _default;