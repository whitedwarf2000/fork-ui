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

var useSupportAnimation = function useSupportAnimation(time) {
  var _useState = (0, _react.useState)(true),
      _useState2 = (0, _slicedToArray2["default"])(_useState, 2),
      waiting = _useState2[0],
      setWaiting = _useState2[1];

  (0, _react.useEffect)(function () {
    var timer = setTimeout(function () {
      return setWaiting(false);
    }, time);
    return function () {
      return clearTimeout(timer);
    };
  }, []);
  return waiting;
};

var CircleProgress = function CircleProgress(_ref) {
  var className = _ref.className,
      percent = _ref.percent,
      r = _ref.r;
  var strokeDasharray = (0, _react.useMemo)(function () {
    return Math.PI * 4 * r;
  }, [r]);
  var maxStrokeDashoffset = (0, _react.useMemo)(function () {
    return 2 * strokeDasharray;
  }, [strokeDasharray]);
  var strokeDashoffset = (0, _react.useMemo)(function () {
    var newStrokeDashoffset = strokeDasharray + strokeDasharray * percent;
    return newStrokeDashoffset > maxStrokeDashoffset ? maxStrokeDashoffset : newStrokeDashoffset;
  }, [strokeDasharray, percent, maxStrokeDashoffset]);
  var delayAnimation = useSupportAnimation(300);
  return /*#__PURE__*/_react["default"].createElement("div", {
    className: (0, _classnames["default"])('rc-circle-progress', className),
    style: {
      width: "".concat(4 * r + 10, "px"),
      height: "".concat(4 * r + 10, "px")
    }
  }, /*#__PURE__*/_react["default"].createElement("div", {
    className: "rc-circle-progress-inner",
    style: {
      width: "".concat(4 * r, "px"),
      height: "".concat(4 * r, "px")
    }
  }), /*#__PURE__*/_react["default"].createElement("svg", {
    className: "rc-circle-progress-svg"
  }, /*#__PURE__*/_react["default"].createElement("circle", {
    cx: 2 * r - 5,
    cy: 2 * r - 5,
    r: 2 * r - 5,
    className: "rc-circle-progress-percent",
    style: {
      strokeWidth: "".concat(7 * (2 * r / 100), "px"),
      strokeDasharray: strokeDasharray,
      strokeDashoffset: delayAnimation ? strokeDasharray : strokeDashoffset
    }
  })), /*#__PURE__*/_react["default"].createElement("label", {
    className: "rc-circle-progress-number",
    style: {
      fontSize: "".concat(r * 0.8, "px")
    }
  }, Math.floor((percent + Number.EPSILON) * 100), /*#__PURE__*/_react["default"].createElement("span", null, "%")));
};

CircleProgress.displayName = 'Progress.Circle';
CircleProgress.propTypes = {
  className: _propTypes["default"].string,
  percent: _propTypes["default"].number,
  r: _propTypes["default"].number // rank from 40 to 60

};
CircleProgress.defaultProps = {
  percent: 0,
  r: 40
};
var _default = CircleProgress;
exports["default"] = _default;