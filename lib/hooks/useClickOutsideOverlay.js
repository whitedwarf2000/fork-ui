"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _react = require("react");

var _default = function _default(_ref) {
  var overlayRef = _ref.overlayRef,
      open = _ref.open,
      handleClickOutside = _ref.handleClickOutside;
  var wrapperRef = (0, _react.useRef)();
  (0, _react.useEffect)(function () {
    var listener = function listener(event) {
      // Do nothing if clicking ref's element or descendent elements
      if (!overlayRef.current || overlayRef.current.contains(event.target)) {
        return;
      }

      handleClickOutside();
    };

    wrapperRef.current && wrapperRef.current.addEventListener('mousedown', listener);
    wrapperRef.current && wrapperRef.current.addEventListener('touchstart', listener);
    return function () {
      wrapperRef.current && wrapperRef.current.removeEventListener('mousedown', listener);
      wrapperRef.current && wrapperRef.current.removeEventListener('touchstart', listener);
    };
  }, [wrapperRef, overlayRef, open, handleClickOutside]);
  return wrapperRef;
};

exports["default"] = _default;