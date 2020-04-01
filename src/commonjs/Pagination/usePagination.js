"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _slicedToArray2 = _interopRequireDefault(require("@babel/runtime/helpers/slicedToArray"));

var _react = require("react");

var _default = function _default(_ref) {
  var total = _ref.total,
      pageSize = _ref.pageSize,
      max = _ref.max,
      activePage = _ref.activePage;
  var itemCount = (0, _react.useMemo)(function () {
    return Math.ceil(total / pageSize);
  }, [total, pageSize]);

  var _useState = (0, _react.useState)(Math.ceil(activePage / max)),
      _useState2 = (0, _slicedToArray2["default"])(_useState, 2),
      activeFlag = _useState2[0],
      setActiveFlag = _useState2[1];

  var maxActiveFlag = (0, _react.useMemo)(function () {
    return Math.ceil(itemCount / max);
  }, [itemCount, max]);
  var startIndex = (0, _react.useMemo)(function () {
    return (activeFlag - 1) * max + 1;
  }, [activeFlag, activePage, max]);
  var endIndex = (0, _react.useMemo)(function () {
    var end = (activeFlag - 1) * max + max;
    return itemCount < end ? itemCount : end;
  }, [activeFlag, activePage, max]);
  var onNextItems = (0, _react.useCallback)(function () {
    return setActiveFlag(function (prev) {
      var nextState = prev + 1;
      return nextState > maxActiveFlag ? maxActiveFlag : nextState;
    });
  }, [maxActiveFlag]);
  var onPrevItems = (0, _react.useCallback)(function () {
    return setActiveFlag(function (prev) {
      var nextState = prev - 1;
      return nextState > 1 ? nextState : 1;
    });
  }, []);
  return {
    itemCount: itemCount,
    activeFlag: activeFlag,
    startIndex: startIndex,
    endIndex: endIndex,
    maxActiveFlag: maxActiveFlag,
    onNextItems: onNextItems,
    onPrevItems: onPrevItems
  };
};

exports["default"] = _default;