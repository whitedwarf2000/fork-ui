const placements = {
  top: '--top',

  topRight: '--top-right',
  'top-right': '--top-right',
  rightTop: '--right-top',
  'right-top': '--right-top',

  right: '--right',

  bottomRight: '--bottom-right',
  'bottom-right': '--bottom-right',
  rightBottom: '--right-bottom',
  'right-bottom': '--right-bottom',

  bottom: '--bottom',

  bottomLeft: '--bottom-left',
  'bottom-left': '--bottom-left',
  leftBottom: '--left-bottom',
  'left-bottom': '--left-bottom',

  left: '--left',

  leftTop: '--left-top',
  'left-top': '--left-top',
  topLeft: '--top-left',
  'top-left': '--top-left',
}

export default placements;

export const makePlacements = (prefix) => {
  return {
    top: `${prefix}--top`,

    topRight: `${prefix}--top-right`,
    'top-right': `${prefix}--top-right`,
    rightTop: `${prefix}--right-top`,
    'right-top': `${prefix}--right-top`,
  
    right: `${prefix}--right`,
  
    bottomRight: `${prefix}--bottom-right`,
    'bottom-right': `${prefix}--bottom-right`,
    rightBottom: `${prefix}--right-bottom`,
    'right-bottom': `${prefix}--right-bottom`,
  
    bottom: `${prefix}--bottom`,
  
    bottomLeft: `${prefix}--bottom-left`,
    'bottom-left': `${prefix}--bottom-left`,
    leftBottom: `${prefix}--left-bottom`,
    'left-bottom': `${prefix}--left-bottom`,
  
    left: `${prefix}--left`,
  
    leftTop: `${prefix}--left-top`,
    'left-top': `${prefix}--left-top`,
    topLeft: `${prefix}--top-left`,
    'top-left': `${prefix}--top-left`,
  }
}