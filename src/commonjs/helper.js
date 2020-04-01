"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _push = _interopRequireDefault(require("./Alert/push"));

var _push2 = _interopRequireDefault(require("./Notification/push"));

var _push3 = _interopRequireDefault(require("./Confirm/push"));

var _default = {
  pushAlert: _push["default"],
  pushNotification: _push2["default"],
  pushConfirm: _push3["default"]
};
exports["default"] = _default;