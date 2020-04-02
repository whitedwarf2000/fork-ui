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

var Memo = /*#__PURE__*/function (_React$Component) {
  (0, _inherits2["default"])(Memo, _React$Component);

  function Memo() {
    (0, _classCallCheck2["default"])(this, Memo);
    return (0, _possibleConstructorReturn2["default"])(this, (0, _getPrototypeOf2["default"])(Memo).apply(this, arguments));
  }

  (0, _createClass2["default"])(Memo, [{
    key: "componentDidMount",
    value: function componentDidMount() {
      if (this.props["for"]) {
        this.memo = true;
        this.childrenNode = _reactDom["default"].findDOMNode(this);
      }
    }
  }, {
    key: "shouldComponentUpdate",
    value: function shouldComponentUpdate() {
      return true;
    }
  }, {
    key: "componentDidUpdate",
    value: function componentDidUpdate() {
      if (this.props["for"]) {
        this.memo = true;
        this.childrenNode = this.childrenNode || _reactDom["default"].findDOMNode(this);
        this.childrenNode.style.display = null;
      } else if (this.childrenNode) {
        this.childrenNode.style.display = 'none';
      }
    }
  }, {
    key: "render",
    value: function render() {
      if (this.props["for"] || this.memo) {
        return this.props.children;
      }

      return null;
    }
  }]);
  return Memo;
}(_react["default"].Component);

exports["default"] = Memo;
Memo.displayName = 'Memo';
Memo.propTypes = {
  "for": _propTypes["default"].bool
};
Memo.defaultProps = {};