"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _react = require("react");

var _default = function _default(parentRef) {
  var ref = (0, _react.useRef)();
  return (0, _react.useMemo)(function () {
    return parentRef || ref;
  }, []);
};

exports["default"] = _default;