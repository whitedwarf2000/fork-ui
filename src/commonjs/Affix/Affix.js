"use strict";

var _interopRequireWildcard = require("@babel/runtime/helpers/interopRequireWildcard");

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _defineProperty2 = _interopRequireDefault(require("@babel/runtime/helpers/defineProperty"));

var _slicedToArray2 = _interopRequireDefault(require("@babel/runtime/helpers/slicedToArray"));

var _objectWithoutProperties2 = _interopRequireDefault(require("@babel/runtime/helpers/objectWithoutProperties"));

var _react = _interopRequireWildcard(require("react"));

var _classnames = _interopRequireDefault(require("classnames"));

var _propTypes = _interopRequireDefault(require("prop-types"));

var _getLatestProp = _interopRequireDefault(require("../../utils/getLatestProp"));

var mDirections = Object.freeze({
  top: 'top',
  bottom: 'bottom'
});

var Affix = function Affix(_ref) {
  var children = _ref.children,
      className = _ref.className,
      otherProps = (0, _objectWithoutProperties2["default"])(_ref, ["children", "className"]);

  var _useState = (0, _react.useState)(false),
      _useState2 = (0, _slicedToArray2["default"])(_useState, 2),
      sticky = _useState2[0],
      setSticky = _useState2[1];

  var _useState3 = (0, _react.useState)({}),
      _useState4 = (0, _slicedToArray2["default"])(_useState3, 2),
      boxModel = _useState4[0],
      setBoxModel = _useState4[1];

  var placeHolderRef = (0, _react.useRef)();
  var affixRef = (0, _react.useRef)();
  var direction = (0, _react.useMemo)(function () {
    return mDirections[(0, _getLatestProp["default"])(otherProps, ['top', 'bottom'])];
  }, [otherProps.top, otherProps.bottom]);
  var makeSticky = (0, _react.useCallback)(function () {
    if (!direction) {
      return null;
    }

    var _placeHolderRef$curre = placeHolderRef.current.getBoundingClientRect(),
        placeHolderTop = _placeHolderRef$curre.top,
        placeHolderBottom = _placeHolderRef$curre.bottom;

    if (direction === 'top') {
      if (placeHolderTop < otherProps.top) {
        return setSticky(true);
      }

      return setSticky(false);
    }

    if (direction === 'bottom') {
      if (placeHolderBottom > window.innerHeight - otherProps.bottom) {
        return setSticky(true);
      }

      return setSticky(false);
    }
  }, [direction, otherProps[direction]]);
  (0, _react.useEffect)(function () {
    setBoxModel({
      clientHeight: affixRef.current.clientHeight,
      clientWidth: Math.ceil(affixRef.current.clientWidth + 0.1)
    });
  }, []);
  (0, _react.useLayoutEffect)(function () {
    makeSticky();

    var handler = function handler() {
      return makeSticky();
    };

    window.addEventListener('scroll', handler);
    return function () {
      return window.removeEventListener('scroll', handler);
    };
  }, [makeSticky]);
  var stickyPlaceholderStyle = {
    width: boxModel.clientWidth,
    height: boxModel.clientHeight
  };
  var stickyStyle = (0, _react.useMemo)(function () {
    var _ref2;

    return _ref2 = {
      position: 'fixed'
    }, (0, _defineProperty2["default"])(_ref2, direction, otherProps[direction]), (0, _defineProperty2["default"])(_ref2, "width", boxModel.clientWidth), (0, _defineProperty2["default"])(_ref2, "height", boxModel.clientHeight), _ref2;
  }, [sticky, direction, otherProps[direction], boxModel.clientWidth, boxModel.clientHeight]);
  return /*#__PURE__*/_react["default"].createElement("div", {
    className: "rc-affix-container"
  }, /*#__PURE__*/_react["default"].createElement("div", {
    style: sticky ? stickyPlaceholderStyle : {},
    ref: placeHolderRef
  }), /*#__PURE__*/_react["default"].createElement("div", {
    ref: affixRef,
    className: (0, _classnames["default"])({
      'rc-affix': sticky
    }),
    style: sticky ? stickyStyle : {}
  }, children));
};

Affix.displayName = 'Affix';
Affix.propTypes = {
  top: _propTypes["default"].number,
  bottom: _propTypes["default"].number,
  children: _propTypes["default"].object,
  className: _propTypes["default"].string
};
Affix.defaultProps = {};
var _default = Affix;
exports["default"] = _default;