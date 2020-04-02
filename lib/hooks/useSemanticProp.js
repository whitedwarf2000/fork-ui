"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _toConsumableArray2 = _interopRequireDefault(require("@babel/runtime/helpers/toConsumableArray"));

var _getLatestTruthyProp = _interopRequireDefault(require("../utils/getLatestTruthyProp"));

var _react = require("react");

var makeDepsTracking = function makeDepsTracking(props, deps) {
  return deps.map(function (name) {
    return props[name];
  });
};

var _default = function _default(name, props, deps) {
  return (0, _react.useMemo)(function () {
    if (props.hasOwnProperty("".concat(name))) {
      return props[name];
    }

    return (0, _getLatestTruthyProp["default"])(props, deps);
  }, [].concat((0, _toConsumableArray2["default"])(makeDepsTracking(props, deps)), [props[name]]));
};

exports["default"] = _default;