"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _slicedToArray2 = _interopRequireDefault(require("@babel/runtime/helpers/slicedToArray"));

var _react = require("react");

var _default = function _default(propName, props, config) {
  var isControlled = (0, _react.useMemo)(function () {
    return props.hasOwnProperty(propName);
  }, [propName]);

  var _useState = (0, _react.useState)(isControlled ? props[propName] : config.defaultState),
      _useState2 = (0, _slicedToArray2["default"])(_useState, 2),
      state = _useState2[0],
      setState = _useState2[1];

  (0, _react.useEffect)(function () {
    if (isControlled) {
      setState(props[propName]);
    }
  }, [props[propName], isControlled]);
  (0, _react.useMemo)(function () {
    return config.onChangeState(state);
  }, [state]);
  return [state, setState, isControlled];
};

exports["default"] = _default;