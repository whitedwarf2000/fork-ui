"use strict";

var _interopRequireWildcard = require("@babel/runtime/helpers/interopRequireWildcard");

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _extends2 = _interopRequireDefault(require("@babel/runtime/helpers/extends"));

var _toConsumableArray2 = _interopRequireDefault(require("@babel/runtime/helpers/toConsumableArray"));

var _objectWithoutProperties2 = _interopRequireDefault(require("@babel/runtime/helpers/objectWithoutProperties"));

var _react = _interopRequireWildcard(require("react"));

var _classnames = _interopRequireDefault(require("classnames"));

var _propTypes = _interopRequireDefault(require("prop-types"));

var _Icon = _interopRequireDefault(require("../Icon"));

var _useSemanticProp = _interopRequireDefault(require("../../hooks/useSemanticProp"));

var _helpers = require("../../utils/helpers");

var _placements = _interopRequireDefault(require("../placements"));

var renderCount = function renderCount(icon, displayCount) {
  if (!icon) {
    return displayCount;
  }

  if (typeof icon === 'string') {
    return _react["default"].createElement(_Icon["default"], {
      name: icon
    });
  }

  return icon;
};

var Badge = function Badge(_ref) {
  var className = _ref.className,
      children = _ref.children,
      icon = _ref.icon,
      dot = _ref.dot,
      count = _ref.count,
      overflowCount = _ref.overflowCount,
      color = _ref.color,
      overlap = _ref.overlap,
      invisible = _ref.invisible,
      otherProps = (0, _objectWithoutProperties2["default"])(_ref, ["className", "children", "icon", "dot", "count", "overflowCount", "color", "overlap", "invisible"]);
  var countRef = (0, _react.useRef)();
  var placement = (0, _useSemanticProp["default"])('placement', otherProps, Object.keys(_placements["default"]));
  var passedProps = (0, _react.useMemo)(function () {
    return (0, _helpers.omit)(otherProps, ['placement'].concat((0, _toConsumableArray2["default"])(Object.keys(_placements["default"]))));
  }, [otherProps]);
  (0, _react.useLayoutEffect)(function () {
    if (count && count > 0) {
      countRef.current.classList.add('--badge-up-animation');
      var timer = setTimeout(function () {
        return countRef.current.classList.remove('--badge-up-animation');
      }, 500);
      return function () {
        return clearTimeout(timer);
      };
    }
  }, [count]);
  var isHidden = (0, _react.useMemo)(function () {
    if (invisible) {
      return true;
    }

    if (dot || icon) {
      return false;
    }

    if (!count || count < 1) {
      return true;
    }
  }, [dot, invisible, count, icon]);
  var displayCount = (0, _react.useMemo)(function () {
    if (!count) {
      return null;
    }

    if (count > overflowCount) {
      return "".concat(overflowCount, " +");
    }

    return count;
  }, [count, overflowCount]);
  return _react["default"].createElement("span", (0, _extends2["default"])({
    className: (0, _classnames["default"])('rc-badge', {
      '--dot': dot,
      '--overlap': overlap,
      '--icon': icon
    }, _placements["default"][placement] || '--top-right', className)
  }, passedProps), children, _react["default"].createElement("sub", {
    ref: countRef,
    style: {
      backgroundColor: color
    },
    className: (0, _classnames["default"])('rc-badge-count', {
      '--hidden': isHidden
    })
  }, _react["default"].createElement("b", null, renderCount(icon, displayCount))));
};

Badge.displayName = 'Badge';
Badge.propTypes = {
  className: _propTypes["default"].string,
  children: _propTypes["default"].any,
  dot: _propTypes["default"].bool,
  invisible: _propTypes["default"].bool,
  count: _propTypes["default"].number,
  overflowCount: _propTypes["default"].number,
  color: _propTypes["default"].string,
  overlap: _propTypes["default"].bool,
  placement: _propTypes["default"].string
};
Badge.defaultProps = {
  overflowCount: Infinity
};
var _default = Badge;
exports["default"] = _default;