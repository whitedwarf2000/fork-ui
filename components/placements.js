const placements = {
  top: '-t',

  topRight: '-tr',
  'top-right': '-tr',
  rightTop: '-rt',
  'right-top': '-rt',

  right: '-t',

  bottomRight: '-br',
  'bottom-right': '-br',
  rightBottom: '-rt',
  'right-bottom': '-rt',

  bottom: '-b',

  bottomLeft: '-bl',
  'bottom-left': '-bl',
  leftBottom: '-lb',
  'left-bottom': '-lb',

  left: '-l',

  leftTop: '-lt',
  'left-top': '-lt',
  topLeft: '-tl',
  'top-left': '-tl',
}

export default placements;

export const makePlacements = (prefix) => {
  return {
    top: `${prefix}-t`,

    topRight: `${prefix}-tr`,
    'top-right': `${prefix}-tr`,
    rightTop: `${prefix}-rt`,
    'right-top': `${prefix}-rt`,
  
    right: `${prefix}-r`,
  
    bottomRight: `${prefix}-br`,
    'bottom-right': `${prefix}-br`,
    rightBottom: `${prefix}-rb`,
    'right-bottom': `${prefix}-rb`,
  
    bottom: `${prefix}-b`,
  
    bottomLeft: `${prefix}-bl`,
    'bottom-left': `${prefix}-bl`,
    leftBottom: `${prefix}-lb`,
    'left-bottom': `${prefix}-lb`,
  
    left: `${prefix}-l`,
  
    leftTop: `${prefix}-lt`,
    'left-top': `${prefix}-lt`,
    topLeft: `${prefix}-tl`,
    'top-left': `${prefix}-tl`,
  }
}
