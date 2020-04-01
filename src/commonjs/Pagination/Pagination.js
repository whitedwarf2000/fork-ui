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

var _propTypes = _interopRequireDefault(require("prop-types"));

var _Button = _interopRequireDefault(require("../Button"));

var _ButtonGroup = _interopRequireDefault(require("../ButtonGroup"));

var _usePagination2 = _interopRequireDefault(require("./usePagination"));

var loop = function loop(start, end, cb) {
  var rs = [];

  for (var i = start; i <= end; i++) {
    rs.push(cb(i));
  }

  return rs;
};

var Pagination = function Pagination(_ref) {
  var className = _ref.className,
      total = _ref.total,
      pageSize = _ref.pageSize,
      max = _ref.max,
      activePage = _ref.activePage,
      onChange = _ref.onChange,
      otherProps = (0, _objectWithoutProperties2["default"])(_ref, ["className", "total", "pageSize", "max", "activePage", "onChange"]);

  var _usePagination = (0, _usePagination2["default"])({
    total: total,
    pageSize: pageSize,
    max: max,
    activePage: activePage
  }),
      activeFlag = _usePagination.activeFlag,
      startIndex = _usePagination.startIndex,
      endIndex = _usePagination.endIndex,
      maxActiveFlag = _usePagination.maxActiveFlag,
      onNextItems = _usePagination.onNextItems,
      onPrevItems = _usePagination.onPrevItems;

  return /*#__PURE__*/_react["default"].createElement(_ButtonGroup["default"], (0, _extends2["default"])({
    className: (0, _classnames["default"])('rc-pagination', className)
  }, otherProps), /*#__PURE__*/_react["default"].createElement(_Button["default"], {
    className: "rc-pagination-prev",
    disabled: activeFlag <= 1,
    onClick: onPrevItems,
    icon: "chevron-left"
  }), loop(startIndex, endIndex, function (pageNumber) {
    return /*#__PURE__*/_react["default"].createElement(_Button["default"], {
      key: pageNumber,
      className: (0, _classnames["default"])('rc-pagination-item', {
        '--active': pageNumber === activePage
      }),
      onClick: function onClick() {
        return onChange(pageNumber);
      }
    }, /*#__PURE__*/_react["default"].createElement("a", null, pageNumber));
  }), /*#__PURE__*/_react["default"].createElement(_Button["default"], {
    className: "rc-pagination-next",
    disabled: activeFlag >= maxActiveFlag,
    onClick: onNextItems,
    icon: "chevron-right"
  }));
};

Pagination.displayName = 'Pagination';
Pagination.propTypes = {
  className: _propTypes["default"].string,
  total: _propTypes["default"].number,
  pageSize: _propTypes["default"].number,
  max: _propTypes["default"].number,
  onChange: _propTypes["default"].func,
  activePage: _propTypes["default"].number
};
Pagination.defaultProps = {
  total: 0,
  pageSize: 0,
  max: 5,
  onChange: function onChange(f) {
    return f;
  }
};
var _default = Pagination;
exports["default"] = _default;