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

var LineProgress = function LineProgress(_ref) {
  var className = _ref.className,
      percent = _ref.percent,
      noText = _ref.noText,
      bottom = _ref.bottom;

  var _useState = (0, _react.useState)(true),
      _useState2 = (0, _slicedToArray2["default"])(_useState, 2),
      textVisible = _useState2[0],
      setTextVisible = _useState2[1];

  (0, _react.useEffect)(function () {
    if (!noText && textVisible) {
      setTextVisible(true);
      var timer = setTimeout(function () {
        return setTextVisible(false);
      }, 3000);
      return function () {
        return clearTimeout(timer);
      };
    }
  }, [noText, textVisible]);
  (0, _react.useEffect)(function () {
    if (!noText) {
      setTextVisible(true);
    }
  }, [percent, noText]);
  var onMouseEnter = (0, _react.useCallback)(function () {
    return setTextVisible(true);
  }, []);
  return /*#__PURE__*/_react["default"].createElement("div", {
    className: (0, _classnames["default"])('rc-line-progress', {
      '--bottom': bottom
    }, className),
    onMouseEnter: onMouseEnter
  }, /*#__PURE__*/_react["default"].createElement("div", {
    className: "rc-line-progress-rail"
  }, /*#__PURE__*/_react["default"].createElement("div", {
    className: "rc-line-progress-rail-percent",
    style: {
      width: "".concat(percent * 100, "%")
    }
  }, !noText && /*#__PURE__*/_react["default"].createElement("div", {
    className: (0, _classnames["default"])('rc-line-progress-percent-text', {
      '--hidden': !textVisible
    })
  }, Math.floor((percent + Number.EPSILON) * 100), /*#__PURE__*/_react["default"].createElement("span", null, "%")))));
};

LineProgress.displayName = 'Progress.Line';
LineProgress.propTypes = {
  className: _propTypes["default"].string,
  percent: _propTypes["default"].number,
  noText: _propTypes["default"].bool,
  bottom: _propTypes["default"].bool
};
LineProgress.defaultProps = {
  percent: 0
};
var _default = LineProgress;
exports["default"] = _default;