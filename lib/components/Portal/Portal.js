"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _classCallCheck2 = _interopRequireDefault(require("@babel/runtime/helpers/classCallCheck"));

var _createClass2 = _interopRequireDefault(require("@babel/runtime/helpers/createClass"));

var _possibleConstructorReturn2 = _interopRequireDefault(require("@babel/runtime/helpers/possibleConstructorReturn"));

var _getPrototypeOf2 = _interopRequireDefault(require("@babel/runtime/helpers/getPrototypeOf"));

var _inherits2 = _interopRequireDefault(require("@babel/runtime/helpers/inherits"));

var _react = _interopRequireDefault(require("react"));

var _reactDom = _interopRequireDefault(require("react-dom"));

var _propTypes = _interopRequireDefault(require("prop-types"));

var _portalNode = require("./portalNode");

var Portal = /*#__PURE__*/function (_React$Component) {
  (0, _inherits2["default"])(Portal, _React$Component);

  function Portal() {
    (0, _classCallCheck2["default"])(this, Portal);
    return (0, _possibleConstructorReturn2["default"])(this, (0, _getPrototypeOf2["default"])(Portal).apply(this, arguments));
  }

  (0, _createClass2["default"])(Portal, [{
    key: "render",
    value: function render() {
      return _reactDom["default"].createPortal(this.props.children, this.props.node);
    }
  }]);
  return Portal;
}(_react["default"].Component);

Portal.displayName = 'Portal';
Portal.propTypes = {
  children: _propTypes["default"].any,
  node: _propTypes["default"].any
};
Portal.defaultProps = {
  node: _portalNode.root
};
var _default = Portal;
exports["default"] = _default;