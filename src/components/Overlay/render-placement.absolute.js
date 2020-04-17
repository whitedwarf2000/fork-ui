const topRight = (gap) => ({
  bottom: `calc(100% + ${gap}px)`,
  right: 0,
});

const rightTop = (gap) => ({
  top: 0,
  left: `calc(100% + ${gap}px)`,
});

const rightBottom = (gap) => ({
  left: `calc(100% + ${gap}px)`,
  bottom: 0,
});

const bottomRight = (gap) => ({
  top: `calc(100% + ${gap}px)`,
  right: 0,
});

const bottomLeft = (gap) => ({
  top: `calc(100% + ${gap}px)`,
  left: 0,
});

const leftBottom = (gap) => ({
  right: `calc(100% + ${gap}px)`,
  bottom: 0,
});

const leftTop = (gap) => ({
  right: `calc(100% + ${gap}px)`,
  top: 0,
});

const topLeft = (gap) => ({
  bottom: `calc(100% + ${gap}px)`,
  left: 0,
});

export default {
  top: (gap) => ({
    bottom: `calc(100% + ${gap}px)`,
    left: '50%',
    transform: `translateX(-50%)`,
  }),
  topRight: topRight,
  'top-right': topRight,
  rightTop: rightTop,
  'right-top': rightTop,
  rightBottom: rightBottom,
  'right-bottom': rightBottom,
  bottomRight: bottomRight,
  'bottom-right': bottomRight,
  bottom: (gap) => ({
    top: `calc(100% + ${gap}px)`,
    left: '50%',
    transform: 'translateX(-50%)',
  }),
  bottomLeft: bottomLeft,
  'bottom-left': bottomLeft,
  leftBottom: leftBottom,
  'left-bottom': leftBottom,
  left: (gap) => ({
    right: `calc(100% + ${gap}px)`,
    top: '50%',
    transform: 'translateY(-50%)',
  }),
  leftTop: leftTop,
  'left-top': leftTop,
  topLeft: topLeft,
  'top-left': topLeft,
  right: (gap) => ({
    top: '50%',
    left: `calc(100% + ${gap}px)`,
    transform: 'translateY(-50%)',
  }),
};
