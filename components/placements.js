import PropTypes from 'prop-types';

export const makePlacements = (prefix) => {
  return {
    'top': `${prefix}-t`,
    'top-right': `${prefix}-tr`,
    'right-top': `${prefix}-rt`,
    'right': `${prefix}-r`,
    'bottom-right': `${prefix}-br`,
    'right-bottom': `${prefix}-rb`,
    'bottom': `${prefix}-b`,
    'bottom-left': `${prefix}-bl`,
    'left-bottom': `${prefix}-lb`,
    'left': `${prefix}-l`,
    'left-top': `${prefix}-lt`,
    'top-left': `${prefix}-tl`,
  }
}

export const placementSemanticPropTypes = {
  top: PropTypes.bool,
  topRight: PropTypes.bool,
  rightTop: PropTypes.bool,
  right: PropTypes.bool,
  bottomRight: PropTypes.bool,
  rightBottom: PropTypes.bool,
  bottom: PropTypes.bool,
  bottomLeft: PropTypes.bool,
  leftBottom: PropTypes.bool,
  left: PropTypes.bool,
  leftTop: PropTypes.bool,
  topLeft: PropTypes.bool,
};

export const mapPlacementSemanticToPropName = {
  top: 'top',
  topRight: 'top-right',
  rightTop: 'right-top',
  right: 'right',
  bottomRight: 'bottom-right',
  rightBottom: 'right-bottom',
  bottom: 'bottom',
  bottomLeft: 'bottom-left',
  leftBottom: 'left-bottom',
  left: 'left',
  leftTop: 'left-top',
  topLeft: 'top-left',
};

export const placementPropType = PropTypes.oneOf([
  'top',
  'top-right',
  'right-top',
  'right',
  'bottom-right',
  'right-bottom',
  'bottom',
  'bottom-left',
  'left-bottom',
  'left',
  'left-top',
  'top-left',
]);
