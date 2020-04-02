"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _helpers = require("./helpers");

/**
 * Find latest truthy props based on dependencies.
 *
 * @param {object} props - The input props.
 * @param {array} deps - The array has value to find.
 * @return {string} The latest key value.
 */
var _default = function _default() {
  var props = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};
  var deps = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : [];
  var fallBack = '';

  if (!(0, _helpers.isObject)(props) || !(0, _helpers.isArray)(deps)) {
    return fallBack;
  }

  if (deps.length === 0) {
    return fallBack;
  }

  var propsKey = Object.keys(props);

  for (var i = propsKey.length - 1; i >= 0; i -= 1) {
    if (deps.indexOf(propsKey[i]) >= 0 && props[propsKey[i]]) {
      return propsKey[i];
    }
  }

  return fallBack;
};

exports["default"] = _default;