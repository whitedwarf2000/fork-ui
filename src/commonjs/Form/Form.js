"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _react = _interopRequireDefault(require("react"));

var _classnames = _interopRequireDefault(require("classnames"));

var _propTypes = _interopRequireDefault(require("prop-types"));

var _Textbox = _interopRequireDefault(require("./Textbox"));

var _Textarea = _interopRequireDefault(require("./Textarea"));

var _InputNumber = _interopRequireDefault(require("./InputNumber"));

var _Select = _interopRequireDefault(require("./Select"));

var _Password = _interopRequireDefault(require("./Password"));

var _useFlexibleRef = _interopRequireDefault(require("../../hooks/useFlexibleRef"));

var Form = _react["default"].forwardRef(function (_ref2, ref) {
  var className = _ref2.className,
      children = _ref2.children;

  var _ref = (0, _useFlexibleRef["default"])(ref);

  return /*#__PURE__*/_react["default"].createElement("form", {
    ref: _ref,
    className: (0, _classnames["default"])('rc-form', className)
  }, children);
});

Form.Textbox = _Textbox["default"];
Form.Textarea = _Textarea["default"];
Form.InputNumber = _InputNumber["default"];
Form.Select = _Select["default"];
Form.Password = _Password["default"];
Form.displayName = 'Form';
Form.propTypes = {};
Form.defaultProps = {};
var _default = Form;
exports["default"] = _default;