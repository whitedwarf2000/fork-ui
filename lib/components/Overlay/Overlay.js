"use strict";

var _interopRequireWildcard = require("@babel/runtime/helpers/interopRequireWildcard");

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _extends2 = _interopRequireDefault(require("@babel/runtime/helpers/extends"));

var _toConsumableArray2 = _interopRequireDefault(require("@babel/runtime/helpers/toConsumableArray"));

var _objectWithoutProperties2 = _interopRequireDefault(require("@babel/runtime/helpers/objectWithoutProperties"));

var _defineProperty2 = _interopRequireDefault(require("@babel/runtime/helpers/defineProperty"));

var _classCallCheck2 = _interopRequireDefault(require("@babel/runtime/helpers/classCallCheck"));

var _possibleConstructorReturn2 = _interopRequireDefault(require("@babel/runtime/helpers/possibleConstructorReturn"));

var _getPrototypeOf2 = _interopRequireDefault(require("@babel/runtime/helpers/getPrototypeOf"));

var _assertThisInitialized2 = _interopRequireDefault(require("@babel/runtime/helpers/assertThisInitialized"));

var _createClass2 = _interopRequireDefault(require("@babel/runtime/helpers/createClass"));

var _inherits2 = _interopRequireDefault(require("@babel/runtime/helpers/inherits"));

var _react = _interopRequireWildcard(require("react"));

var _reactDom = _interopRequireDefault(require("react-dom"));

var _classnames = _interopRequireDefault(require("classnames"));

var _propTypes = _interopRequireDefault(require("prop-types"));

var _Portal = _interopRequireDefault(require("../Portal"));

var _getPosition = _interopRequireDefault(require("../../utils/getPosition"));

var _renderPlacement = _interopRequireDefault(require("./renderPlacement"));

var _placements = _interopRequireDefault(require("../placements"));

var _useSemanticProp = _interopRequireDefault(require("../../hooks/useSemanticProp"));

var _helpers = require("../../utils/helpers");

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { (0, _defineProperty2["default"])(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

var Overlay = /*#__PURE__*/function (_React$Component) {
  (0, _inherits2["default"])(Overlay, _React$Component);
  (0, _createClass2["default"])(Overlay, null, [{
    key: "getDerivedStateFromProps",
    value: function getDerivedStateFromProps(props, state) {
      return _objectSpread({}, _renderPlacement["default"][props.placement](state.targetPosition, state.overlayPosition, props.gap), {
        applyHover: props.trigger.indexOf('hover') >= 0,
        applyClick: props.trigger.indexOf('click') >= 0
      });
    }
  }]);

  function Overlay(props) {
    var _this;

    (0, _classCallCheck2["default"])(this, Overlay);
    _this = (0, _possibleConstructorReturn2["default"])(this, (0, _getPrototypeOf2["default"])(Overlay).call(this, props));
    _this.isControlled = props.hasOwnProperty('visible');
    _this.state = {
      visible: props.defaultVisible,
      targetPosition: {
        pageX: 0,
        pageY: 0,
        clientHeight: 0,
        clientWidth: 0
      },
      overlayPosition: {
        pageX: 0,
        pageY: 0,
        clientHeight: 0,
        clientWidth: 0
      },
      isOverlayHover: false
    };
    _this.overlayRef = (0, _react.createRef)();
    _this.setVisible = _this.setVisible.bind((0, _assertThisInitialized2["default"])(_this));
    _this.toggleVisible = _this.toggleVisible.bind((0, _assertThisInitialized2["default"])(_this));
    _this.setPosition = _this.setPosition.bind((0, _assertThisInitialized2["default"])(_this));
    _this.setOverlayHover = _this.setOverlayHover.bind((0, _assertThisInitialized2["default"])(_this));
    _this.renderPositionOverlay = _this.renderPositionOverlay.bind((0, _assertThisInitialized2["default"])(_this));
    _this.addTriggerListener = _this.addTriggerListener.bind((0, _assertThisInitialized2["default"])(_this));
    _this.removeTriggerListener = _this.removeTriggerListener.bind((0, _assertThisInitialized2["default"])(_this));
    _this.eventOverlayClickOutside = _this.eventOverlayClickOutside.bind((0, _assertThisInitialized2["default"])(_this));
    return _this;
  }

  (0, _createClass2["default"])(Overlay, [{
    key: "componentDidMount",
    value: function componentDidMount() {
      var _this2 = this;

      if (this.isControlled) {
        this.setVisible(this.props.visible);
      }

      var _self = this;

      this.renderPositionOverlay();

      this._eventClickHandler = function () {
        return _this2.toggleVisible();
      };

      this._eventMouseEnterHandler = function () {
        return _this2.setVisible(true);
      };

      this._eventMouseLeaveHandler = function () {
        var timer = setTimeout(function () {
          return _this2.setState(function (prevState) {
            if (prevState.isOverlayHover) {
              clearTimeout(timer);
              return {};
            }

            return {
              visible: false
            };
          });
        }, 100);
      };

      this._eventMouseEnterOverlayHandler = function () {
        return _this2.setOverlayHover(true);
      };

      this._eventMouseLeaveOverlayHandler = function () {
        _this2.setOverlayHover(false);

        _this2.setVisible(false);
      };

      this._events = {
        overlayClickOutside: {
          add: function add() {
            document.addEventListener('mousedown', _self.eventOverlayClickOutside);
            document.addEventListener('touchstart', _self.eventOverlayClickOutside);
          },
          remove: function remove() {
            document.removeEventListener('mousedown', _self.eventOverlayClickOutside);
            document.removeEventListener('touchstart', _self.eventOverlayClickOutside);
          }
        },
        targetClick: {
          add: function add() {
            _self.targetNode.addEventListener('click', _self.toggleVisible);
          },
          remove: function remove() {
            _self.targetNode.removeEventListener('click', _self.toggleVisible);
          }
        },
        targetHover: {
          add: function add() {
            _self.targetNode.addEventListener('mouseenter', _self._eventMouseEnterHandler);

            _self.targetNode.addEventListener('mouseleave', _self._eventMouseLeaveHandler);
          },
          remove: function remove() {
            _self.targetNode.removeEventListener('mouseenter', _self._eventMouseEnterHandler);

            _self.targetNode.removeEventListener('mouseleave', _self._eventMouseLeaveHandler);
          }
        },
        overlayHover: {
          add: function add() {
            // overlay node exist when visible equal true
            _self.overlayRef && _self.overlayRef.current && _self.overlayRef.current.addEventListener('mouseenter', _self._eventMouseEnterOverlayHandler);
            _self.overlayRef && _self.overlayRef.current && _self.overlayRef.current.addEventListener('mouseleave', _self._eventMouseLeaveOverlayHandler);
          },
          remove: function remove() {
            // overlay node exist when visible equal true
            _self.overlayRef && _self.overlayRef.current && _self.overlayRef.current.removeEventListener('mouseenter', _self._eventMouseEnterOverlayHandler);
            _self.overlayRef && _self.overlayRef.current && _self.overlayRef.current.removeEventListener('mouseleave', _self._eventMouseLeaveOverlayHandler);
          }
        }
      };
      this.addTriggerListener();
    }
  }, {
    key: "componentDidUpdate",
    value: function componentDidUpdate(prevProps, prevState) {
      if (this.isControlled && this.props.visible !== prevProps.visible) {
        this.setVisible(this.props.visible);
      }

      if (this.state.visible !== prevState.visible) {
        this.props.onVisibleChange(this.state.visible);
      }

      if (this.state.visible && this.state.visible !== prevState.visible) {
        this.renderPositionOverlay();
        this.removeTriggerListener();
        this.addTriggerListener();
      }
    }
  }, {
    key: "componentWillUnmount",
    value: function componentWillUnmount() {
      this.removeTriggerListener();
    }
  }, {
    key: "eventOverlayClickOutside",
    value: function eventOverlayClickOutside(event) {
      if (this.overlayRef && this.overlayRef.current) {
        if (this.targetNode.contains(event.target) || this.overlayRef.current.contains(event.target)) {
          return;
        }

        this.setVisible(false);
      }
    }
  }, {
    key: "setVisible",
    value: function setVisible(val) {
      this.setState({
        visible: val
      });
    }
  }, {
    key: "toggleVisible",
    value: function toggleVisible() {
      this.setState(function (prev) {
        return _objectSpread({}, prev, {
          visible: !prev.visible
        });
      });
    }
  }, {
    key: "setPosition",
    value: function setPosition(position) {
      this.setState({
        targetPosition: position
      });
    }
  }, {
    key: "setPositionOverlay",
    value: function setPositionOverlay(position) {
      this.setState({
        overlayPosition: position
      });
    }
  }, {
    key: "setOverlayHover",
    value: function setOverlayHover(val) {
      this.setState({
        isOverlayHover: val
      });
    }
  }, {
    key: "renderPositionOverlay",
    value: function renderPositionOverlay() {
      this.targetNode = this.targetNode || _reactDom["default"].findDOMNode(this);
      this.targetNode && this.setPosition((0, _getPosition["default"])(this.targetNode));
      this.overlayRef && this.overlayRef.current && this.setPositionOverlay((0, _getPosition["default"])(this.overlayRef.current));
    }
  }, {
    key: "addTriggerListener",
    value: function addTriggerListener() {
      if (this.state.applyHover) {
        this._events.targetHover.add();

        this._events.overlayHover.add();
      }

      if (this.state.applyClick) {
        this._events.targetClick.add();
      }

      if (this.props.canOutsideClickClose) {
        this._events.overlayClickOutside.add();
      }
    }
  }, {
    key: "removeTriggerListener",
    value: function removeTriggerListener() {
      if (this.state.applyHover) {
        this._events.targetHover.remove();

        this._events.overlayHover.remove();
      }

      if (this.state.applyClick) {
        this._events.targetClick.remove();
      }

      if (this.props.canOutsideClickClose) {
        this._events.overlayClickOutside.remove();
      }
    }
  }, {
    key: "render",
    value: function render() {
      var _this$props = this.props,
          className = _this$props.className,
          children = _this$props.children,
          placement = _this$props.placement,
          arrow = _this$props.arrow,
          overlay = _this$props.overlay,
          otherProps = (0, _objectWithoutProperties2["default"])(_this$props, ["className", "children", "placement", "arrow", "overlay"]);
      var _this$state = this.state,
          visible = _this$state.visible,
          overlayStyle = _this$state.overlayStyle;
      return _react["default"].createElement(_react["default"].Fragment, null, children, visible && _react["default"].createElement(_Portal["default"], otherProps, _react["default"].createElement("div", {
        ref: this.overlayRef,
        className: (0, _classnames["default"])('rc-overlay', _placements["default"][placement], {
          '--hidden': !visible,
          '--arrow': arrow
        }, className),
        style: overlayStyle
      }, overlay)));
    }
  }]);
  return Overlay;
}(_react["default"].Component);

Overlay.displayName = 'Overlay';
Overlay.propTypes = {
  placement: _propTypes["default"].oneOf(Object.keys(_placements["default"])),
  gap: _propTypes["default"].number,
  defaultVisible: _propTypes["default"].bool,
  overlay: _propTypes["default"].any,
  children: _propTypes["default"].any,
  arrow: _propTypes["default"].bool,
  trigger: _propTypes["default"].array,
  onVisibleChange: _propTypes["default"].func,
  canOutsideClickClose: _propTypes["default"].bool
};
Overlay.defaultProps = {
  placement: 'top',
  gap: 5,
  trigger: ['click'],
  onVisibleChange: function onVisibleChange(f) {
    return f;
  }
};

var SupportSemanticPlacement = function SupportSemanticPlacement(props) {
  var placement = (0, _useSemanticProp["default"])('placement', props, Object.keys(_placements["default"]));
  var passedProps = (0, _react.useMemo)(function () {
    return (0, _helpers.omit)(props, [].concat((0, _toConsumableArray2["default"])(Object.keys(_placements["default"])), ['placement']));
  }, [props]);
  return _react["default"].createElement(Overlay, (0, _extends2["default"])({}, passedProps, {
    placement: placement || 'top'
  }));
};

var _default = SupportSemanticPlacement;
exports["default"] = _default;