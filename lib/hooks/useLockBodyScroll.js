"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _react = require("react");

// Hook
var _default = function _default(when, tracking) {
  (0, _react.useLayoutEffect)(function () {
    if (when) {
      // Get original body overflow
      var originalStyle = window.getComputedStyle(document.body).overflow; // Prevent scrolling on mount

      document.body.style.overflow = 'hidden'; // Re-enable scrolling when component unmounts

      return function () {
        return document.body.style.overflow = originalStyle;
      };
    }
  }, tracking); // Empty array ensures effect is only run on mount and unmount
};

exports["default"] = _default;