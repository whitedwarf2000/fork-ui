"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _extends2 = _interopRequireDefault(require("@babel/runtime/helpers/extends"));

var _objectWithoutProperties2 = _interopRequireDefault(require("@babel/runtime/helpers/objectWithoutProperties"));

var _react = _interopRequireDefault(require("react"));

var _useSteps = _interopRequireDefault(require("./useSteps"));

var withSongEnhancer = function withSongEnhancer(Component) {
  var ReturnComponent = function ReturnComponent(_ref) {
    var stepsHookConfig = _ref.stepsHookConfig,
        otherProps = (0, _objectWithoutProperties2["default"])(_ref, ["stepsHookConfig"]);
    var stepsHookData = (0, _useSteps["default"])(stepsHookConfig);
    return /*#__PURE__*/_react["default"].createElement(Component, (0, _extends2["default"])({
      stepsHookData: stepsHookData
    }, otherProps));
  };

  ReturnComponent.displayName = "withSteps(".concat(Component.displayName || Component.name || 'Component', ")");
  return ReturnComponent;
};

var _default = withSongEnhancer;
exports["default"] = _default;