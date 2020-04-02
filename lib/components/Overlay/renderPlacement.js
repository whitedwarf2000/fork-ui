"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var topRight = function topRight(targetPosition, overlayPosition, gap) {
  return {
    overlayStyle: {
      left: targetPosition.pageX - (overlayPosition.clientWidth - targetPosition.clientWidth),
      top: targetPosition.pageY - overlayPosition.clientHeight - gap
    }
  };
};

var rightTop = function rightTop(targetPosition, overlayPosition, gap) {
  return {
    overlayStyle: {
      left: targetPosition.pageX + targetPosition.clientWidth + gap,
      top: targetPosition.pageY
    }
  };
};

var rightBottom = function rightBottom(targetPosition, overlayPosition, gap) {
  return {
    overlayStyle: {
      left: targetPosition.pageX + targetPosition.clientWidth + gap,
      top: targetPosition.pageY - (overlayPosition.clientHeight - targetPosition.clientHeight)
    }
  };
};

var bottomRight = function bottomRight(targetPosition, overlayPosition, gap) {
  return {
    overlayStyle: {
      left: targetPosition.pageX - (overlayPosition.clientWidth - targetPosition.clientWidth),
      top: targetPosition.pageY + targetPosition.clientHeight + gap
    }
  };
};

var bottomLeft = function bottomLeft(targetPosition, overlayPosition, gap) {
  return {
    overlayStyle: {
      left: targetPosition.pageX,
      top: targetPosition.pageY + targetPosition.clientHeight + gap
    }
  };
};

var leftBottom = function leftBottom(targetPosition, overlayPosition, gap) {
  return {
    overlayStyle: {
      left: targetPosition.pageX - overlayPosition.clientWidth - gap,
      top: targetPosition.pageY - (overlayPosition.clientHeight - targetPosition.clientHeight)
    }
  };
};

var leftTop = function leftTop(targetPosition, overlayPosition, gap) {
  return {
    overlayStyle: {
      left: targetPosition.pageX - overlayPosition.clientWidth - gap,
      top: targetPosition.pageY
    }
  };
};

var topLeft = function topLeft(targetPosition, overlayPosition, gap) {
  return {
    overlayStyle: {
      left: targetPosition.pageX,
      top: targetPosition.pageY - overlayPosition.clientHeight - gap
    }
  };
};

var _default = {
  top: function top(targetPosition, overlayPosition, gap) {
    return {
      overlayStyle: {
        left: targetPosition.pageX - overlayPosition.clientWidth / 2 + targetPosition.clientWidth / 2,
        top: targetPosition.pageY - overlayPosition.clientHeight - gap
      }
    };
  },
  topRight: topRight,
  'top-right': topRight,
  rightTop: rightTop,
  'right-top': rightTop,
  rightBottom: rightBottom,
  'right-bottom': rightBottom,
  bottomRight: bottomRight,
  'bottom-right': bottomRight,
  bottom: function bottom(targetPosition, overlayPosition, gap) {
    return {
      overlayStyle: {
        left: targetPosition.pageX - overlayPosition.clientWidth / 2 + targetPosition.clientWidth / 2,
        top: targetPosition.pageY + targetPosition.clientHeight + gap
      }
    };
  },
  bottomLeft: bottomLeft,
  'bottom-left': bottomLeft,
  leftBottom: leftBottom,
  'left-bottom': leftBottom,
  left: function left(targetPosition, overlayPosition, gap) {
    return {
      overlayStyle: {
        left: targetPosition.pageX - overlayPosition.clientWidth - gap,
        top: targetPosition.pageY - (overlayPosition.clientHeight - targetPosition.clientHeight) / 2
      }
    };
  },
  leftTop: leftTop,
  'left-top': leftTop,
  topLeft: topLeft,
  'top-left': topLeft,
  right: function right(targetPosition, overlayPosition, gap) {
    return {
      overlayStyle: {
        left: targetPosition.pageX + targetPosition.clientWidth + gap,
        top: targetPosition.pageY - (overlayPosition.clientHeight - targetPosition.clientHeight) / 2
      }
    };
  }
};
exports["default"] = _default;