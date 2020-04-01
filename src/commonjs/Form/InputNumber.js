"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _InputNumber = _interopRequireDefault(require("../InputNumber"));

var _withEnhanceField = _interopRequireDefault(require("./withEnhanceField"));

var _default = (0, _withEnhanceField["default"])()(_InputNumber["default"]);

exports["default"] = _default;