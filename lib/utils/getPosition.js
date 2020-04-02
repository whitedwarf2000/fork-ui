"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = exports.getRootPosition = void 0;

var getRootPosition = function getRootPosition() {
  var html = document.querySelector('html');
  return {
    scrollTop: html.scrollTop,
    scrollLeft: html.scrollLeft,
    scrollWidth: html.scrollWidth,
    scrollHeight: html.scrollHeight
  };
};

exports.getRootPosition = getRootPosition;

var _default = function _default(node) {
  var _nextNode = node;
  var pageX = 0;
  var pageY = 0;

  do {
    pageX += _nextNode.offsetLeft - _nextNode.scrollLeft;
    pageY += _nextNode.offsetTop - _nextNode.scrollTop; // SUPPORT FIXED POSITION

    if (!_nextNode.offsetParent && _nextNode.localName !== 'body') {
      var htmlNode = getRootPosition();
      pageX += htmlNode.scrollLeft;
      pageY += htmlNode.scrollTop;
      break;
    }

    _nextNode = _nextNode.offsetParent;
  } while (_nextNode);

  return {
    pageX: pageX,
    pageY: pageY,
    clientHeight: node.clientHeight,
    clientWidth: node.clientWidth
  };
};

exports["default"] = _default;