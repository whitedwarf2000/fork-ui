"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _extends2 = _interopRequireDefault(require("@babel/runtime/helpers/extends"));

var _objectWithoutProperties2 = _interopRequireDefault(require("@babel/runtime/helpers/objectWithoutProperties"));

var _react = _interopRequireDefault(require("react"));

var _classnames = _interopRequireDefault(require("classnames"));

var _TR = _interopRequireDefault(require("./TR"));

var _TD = _interopRequireDefault(require("./TD"));

var _TH = _interopRequireDefault(require("./TH"));

var _THead = _interopRequireDefault(require("./THead"));

var _TBody = _interopRequireDefault(require("./TBody"));

var _TFoot = _interopRequireDefault(require("./TFoot"));

var Table = function Table(_ref) {
  var className = _ref.className,
      otherProps = (0, _objectWithoutProperties2["default"])(_ref, ["className"]);
  return _react["default"].createElement("table", (0, _extends2["default"])({
    className: (0, _classnames["default"])('rc-table', className)
  }, otherProps));
};

Table.TR = _TR["default"];
Table.TD = _TD["default"];
Table.TH = _TH["default"];
Table.THead = _THead["default"];
Table.TBody = _TBody["default"];
Table.TFoot = _TFoot["default"];
var _default = Table;
exports["default"] = _default;