"use strict";

var _interopRequireWildcard = require("@babel/runtime/helpers/interopRequireWildcard");

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _slicedToArray2 = _interopRequireDefault(require("@babel/runtime/helpers/slicedToArray"));

var _react = _interopRequireWildcard(require("react"));

var _getPosition = _interopRequireDefault(require("../utils/getPosition"));

var _default = function _default(ref) {
  var tracking = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : [];

  var _useState = (0, _react.useState)(0),
      _useState2 = (0, _slicedToArray2["default"])(_useState, 2),
      pageX = _useState2[0],
      setPageX = _useState2[1];

  var _useState3 = (0, _react.useState)(0),
      _useState4 = (0, _slicedToArray2["default"])(_useState3, 2),
      pageY = _useState4[0],
      setPageY = _useState4[1];

  var _useState5 = (0, _react.useState)(0),
      _useState6 = (0, _slicedToArray2["default"])(_useState5, 2),
      clientWidth = _useState6[0],
      setClientWidth = _useState6[1];

  var _useState7 = (0, _react.useState)(0),
      _useState8 = (0, _slicedToArray2["default"])(_useState7, 2),
      clientHeight = _useState8[0],
      seClienttHeight = _useState8[1];

  (0, _react.useEffect)(function () {
    var position = (0, _getPosition["default"])(ref.current);
    setPageX(position.pageX);
    setPageY(position.pageY);
    setClientWidth(position.clientWidth);
    seClienttHeight(position.clientHeight);
  }, tracking);
  return (0, _react.useMemo)(function () {
    return {
      pageX: pageX,
      pageY: pageY,
      clientWidth: clientWidth,
      clientHeight: clientHeight
    };
  }, [pageX, pageY, clientWidth, clientHeight]);
};

exports["default"] = _default;