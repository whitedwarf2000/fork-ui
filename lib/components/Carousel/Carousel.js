"use strict";

var _interopRequireWildcard = require("@babel/runtime/helpers/interopRequireWildcard");

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _slicedToArray2 = _interopRequireDefault(require("@babel/runtime/helpers/slicedToArray"));

var _react = _interopRequireWildcard(require("react"));

var _classnames = _interopRequireDefault(require("classnames"));

var _propTypes = _interopRequireDefault(require("prop-types"));

var _Button = _interopRequireDefault(require("../Button"));

var _Item = _interopRequireDefault(require("./Item"));

var Carousel = function Carousel(_ref) {
  var className = _ref.className,
      children = _ref.children,
      slideWidth = _ref.slideWidth,
      auto = _ref.auto,
      loop = _ref.loop;

  var _useState = (0, _react.useState)(1),
      _useState2 = (0, _slicedToArray2["default"])(_useState, 2),
      page = _useState2[0],
      setPage = _useState2[1];

  var _useState3 = (0, _react.useState)({
    height: 0,
    width: 0
  }),
      _useState4 = (0, _slicedToArray2["default"])(_useState3, 2),
      body = _useState4[0],
      setBody = _useState4[1];

  var _useState5 = (0, _react.useState)({
    height: 0,
    width: 0
  }),
      _useState6 = (0, _slicedToArray2["default"])(_useState5, 2),
      boxBody = _useState6[0],
      setBoxBody = _useState6[1]; // One page equal 75% carousel width


  var maxPage = (0, _react.useMemo)(function () {
    return Math.ceil(boxBody.width / (body.width * slideWidth));
  }, [body.width, boxBody.width]);
  var left = (0, _react.useMemo)(function () {
    return -(page - 1) * body.width * slideWidth;
  }, [page, body.width]);
  var carouselHeight = (0, _react.useMemo)(function () {
    return boxBody.height + 5;
  }, [boxBody.height]);
  var ref = (0, _react.useRef)();
  var boxRef = (0, _react.useRef)();
  (0, _react.useEffect)(function () {
    setBoxBody({
      height: boxRef.current.clientHeight,
      width: boxRef.current.clientWidth
    });
    setBody({
      width: ref.current.clientWidth
    });
  }, []);
  var handleNext = (0, _react.useCallback)(function () {
    return setPage(function (prev) {
      var _page = prev + 1;

      return _page > maxPage ? maxPage : _page;
    });
  }, [maxPage]);
  var handlePrev = (0, _react.useCallback)(function () {
    return setPage(function (prev) {
      var _page = prev - 1;

      return _page < 1 ? 1 : _page;
    });
  }, []);
  (0, _react.useEffect)(function () {
    if (auto) {
      var timer = setInterval(function () {
        return handleNext();
      }, auto);
      return function () {
        return clearInterval(timer);
      };
    }
  }, [handleNext]);
  (0, _react.useEffect)(function () {
    if (auto && loop && page >= maxPage) {
      var timer = setTimeout(function () {
        return setPage(1);
      }, auto);
      return function () {
        return clearTimeout(timer);
      };
    }
  }, [auto, loop, page, maxPage]);
  return _react["default"].createElement("div", {
    ref: ref,
    className: (0, _classnames["default"])('rc-carousel', className),
    style: {
      height: carouselHeight
    }
  }, _react["default"].createElement("div", {
    ref: boxRef,
    className: "rc-carousel-box",
    style: {
      left: left
    }
  }, children), _react["default"].createElement(_Button["default"], {
    icon: "chevron-left",
    className: (0, _classnames["default"])('rc-carousel-prev', {
      '--hidden': page <= 1
    }),
    circle: true,
    onClick: handlePrev
  }), _react["default"].createElement(_Button["default"], {
    icon: "chevron-right",
    className: (0, _classnames["default"])('rc-carousel-next', {
      '--hidden': page >= maxPage
    }),
    circle: true,
    onClick: handleNext
  }));
};

Carousel.Item = _Item["default"];
Carousel.displayName = 'Carousel';
Carousel.propTypes = {
  className: _propTypes["default"].string,
  children: _propTypes["default"].any,
  slideWidth: _propTypes["default"].number,
  auto: _propTypes["default"].number,
  loop: _propTypes["default"].bool
};
Carousel.defaultProps = {
  slideWidth: 0.75
};
var _default = Carousel;
exports["default"] = _default;