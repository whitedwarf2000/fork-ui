"use strict";

var _interopRequireWildcard = require("@babel/runtime/helpers/interopRequireWildcard");

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _extends2 = _interopRequireDefault(require("@babel/runtime/helpers/extends"));

var _objectWithoutProperties2 = _interopRequireDefault(require("@babel/runtime/helpers/objectWithoutProperties"));

var _react = _interopRequireWildcard(require("react"));

var _classnames = _interopRequireDefault(require("classnames"));

var _propTypes = _interopRequireDefault(require("prop-types"));

var _Badge = _interopRequireDefault(require("../Badge"));

var _helpers = require("../../utils/helpers");

var renderPropsBadge = function renderPropsBadge(_ref) {
  var error = _ref.error,
      success = _ref.success;
  var icon = '';
  var color = '';

  if (error) {
    icon = 'exclamation';
    color = '#ce1a23';
  } else if (success) {
    icon = 'check';
    color = '#49aa18';
  }

  return {
    invisible: !(error || success),
    icon: icon,
    color: color
  };
};

var _default = function _default() {
  return function (FieldComponent) {
    var FieldEnhance = _react["default"].forwardRef(function (_ref2, ref) {
      var label = _ref2.label,
          error = _ref2.error,
          success = _ref2.success,
          hiddenLabel = _ref2.hiddenLabel,
          otherProps = (0, _objectWithoutProperties2["default"])(_ref2, ["label", "error", "success", "hiddenLabel"]);

      var _useMemo = (0, _react.useMemo)(function () {
        return (0, _helpers.pick)(otherProps, ['name', 'required']);
      }, [otherProps]),
          name = _useMemo.name,
          required = _useMemo.required;

      var message = (0, _react.useMemo)(function () {
        if (error) {
          return {
            status: 'error',
            text: error,
            className: '--error'
          };
        }

        return '';
      }, [error]);
      var badgeProps = (0, _react.useMemo)(function () {
        return renderPropsBadge({
          error: error,
          success: success
        });
      }, [error, success]);
      return /*#__PURE__*/_react["default"].createElement("div", {
        className: (0, _classnames["default"])('rc-form-field')
      }, label && /*#__PURE__*/_react["default"].createElement("label", {
        className: (0, _classnames["default"])('rc-form-field-label', {
          '--required': required,
          '--hidden-label': hiddenLabel
        }),
        htmlFor: name,
        required: required
      }, label), /*#__PURE__*/_react["default"].createElement(_Badge["default"], badgeProps, /*#__PURE__*/_react["default"].createElement(FieldComponent, (0, _extends2["default"])({
        ref: ref
      }, otherProps))), message && /*#__PURE__*/_react["default"].createElement("div", {
        className: (0, _classnames["default"])('rc-form-field-message', message.className)
      }, message.text));
    });

    FieldEnhance.displayName = "withEnhanceField(".concat(FieldComponent.displayName || FieldComponent.name || 'Component', ")");
    FieldEnhance.propTypes = {
      error: _propTypes["default"].string,
      success: _propTypes["default"].oneOf(_propTypes["default"].bool, _propTypes["default"].string),
      warning: _propTypes["default"].string
    };
    FieldEnhance.defaultProps = {};
    return FieldEnhance;
  };
};

exports["default"] = _default;