"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _defineProperty2 = _interopRequireDefault(require("@babel/runtime/helpers/defineProperty"));

var _slicedToArray2 = _interopRequireDefault(require("@babel/runtime/helpers/slicedToArray"));

var _react = require("react");

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { (0, _defineProperty2["default"])(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

var toObject = function toObject(maxStepIdx) {
  var rs = {};

  for (var i = 0; i <= maxStepIdx; i++) {
    rs[i] = '';
  }

  return rs;
};

var _default = function _default(_ref) {
  var maxStepIdx = _ref.maxStepIdx,
      optional = _ref.optional;

  var _optional = (0, _react.useMemo)(function () {
    return new Set(optional);
  }, [optional]);

  var _useState = (0, _react.useState)(0),
      _useState2 = (0, _slicedToArray2["default"])(_useState, 2),
      activeStep = _useState2[0],
      setActiveStep = _useState2[1];

  var _useState3 = (0, _react.useState)(toObject(maxStepIdx)),
      _useState4 = (0, _slicedToArray2["default"])(_useState3, 2),
      steps = _useState4[0],
      setSteps = _useState4[1];

  var handleReset = (0, _react.useCallback)(function () {
    setActiveStep(0);
    setSteps(toObject(maxStepIdx));
  }, [maxStepIdx]);
  var handleNext = (0, _react.useCallback)(function () {
    if (activeStep === maxStepIdx) {
      return;
    }

    setSteps(function (prev) {
      return _objectSpread({}, prev, (0, _defineProperty2["default"])({}, activeStep, 'completed'));
    });
    setActiveStep(function (prev) {
      return prev + 1;
    });
  }, [maxStepIdx, activeStep]);
  var handleSkip = (0, _react.useCallback)(function () {
    if (!_optional.has(activeStep) || activeStep === maxStepIdx) {
      return;
    }

    setActiveStep(function (prev) {
      return prev + 1;
    });
  }, [maxStepIdx, activeStep, _optional]);
  var handleFinish = (0, _react.useCallback)(function () {
    if (maxStepIdx !== activeStep) {
      return;
    }

    setSteps(function (prev) {
      return _objectSpread({}, prev, (0, _defineProperty2["default"])({}, maxStepIdx, 'completed'));
    });
    setActiveStep(maxStepIdx + 1);
  }, [maxStepIdx, activeStep, steps]);
  var handleCancel = (0, _react.useCallback)(function () {
    if (!_optional.has(activeStep) || activeStep > maxStepIdx || activeStep < 0) {
      return;
    }

    setSteps(function (prev) {
      return _objectSpread({}, prev, (0, _defineProperty2["default"])({}, activeStep, 'canceled'));
    });
    handleSkip();
  }, [activeStep, maxStepIdx, handleSkip, _optional]);
  var getStatus = (0, _react.useCallback)(function (idx) {
    if (idx === activeStep) {
      return 'processing';
    }

    return steps[idx];
  }, [activeStep]);
  return {
    getStatus: getStatus,
    activeStep: activeStep,
    handleReset: handleReset,
    handleNext: handleNext,
    handleSkip: handleSkip,
    handleCancel: handleCancel,
    handleFinish: handleFinish
  };
};

exports["default"] = _default;