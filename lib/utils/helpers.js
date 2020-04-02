"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.pick = exports.omit = exports.isNaN = exports.isNumber = exports.isUnDefined = exports.isObject = exports.isArray = void 0;

var _typeof2 = _interopRequireDefault(require("@babel/runtime/helpers/typeof"));

var isArray = function isArray(array) {
  return Array.isArray(array);
};

exports.isArray = isArray;

var isObject = function isObject(object) {
  return (0, _typeof2["default"])(object) === 'object' && object !== null;
};

exports.isObject = isObject;

var isUnDefined = function isUnDefined(val) {
  return typeof val === 'undefined';
};

exports.isUnDefined = isUnDefined;

var isNumber = function isNumber(number) {
  return typeof number === 'number';
};

exports.isNumber = isNumber;

var isNaN = function isNaN(number) {
  return Number.isNaN(number);
};

exports.isNaN = isNaN;

var omit = function omit(object, paths) {
  var _paths = paths.reduce(function (rs, prop) {
    rs[prop] = true;
    return rs;
  }, {});

  return Object.keys(object).reduce(function (rs, key) {
    if (!_paths[key]) {
      rs[key] = object[key];
    }

    return rs;
  }, {});
};

exports.omit = omit;

var pick = function pick(object, paths) {
  return paths.reduce(function (rs, prop) {
    rs[prop] = object[prop];
    return rs;
  }, {});
};

exports.pick = pick;