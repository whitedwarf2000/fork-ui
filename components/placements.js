import PropTypes from 'prop-types';

export const makePlacements = (prefix) => {
  return {
    top: `${prefix}-t`,
    topEnd: `${prefix}-te`,
    topStart: `${prefix}-ts`,
    right: `${prefix}-r`,
    rightEnd: `${prefix}-re`,
    rightStart: `${prefix}-rt`,
    bottom: `${prefix}-b`,
    bottomEnd: `${prefix}-be`,
    bottomStart: `${prefix}-bs`,
    left: `${prefix}-l`,
    leftEnd: `${prefix}-le`,
    leftStart: `${prefix}-ls`,
  }
}

export const placementSemanticPropTypes = {
  top: PropTypes.bool,
  topEnd: PropTypes.bool,
  topStart: PropTypes.bool,
  right: PropTypes.bool,
  rightEnd: PropTypes.bool,
  rightStart: PropTypes.bool,
  bottom: PropTypes.bool,
  bottomEnd: PropTypes.bool,
  bottomStart: PropTypes.bool,
  left: PropTypes.bool,
  leftEnd: PropTypes.bool,
  leftStart: PropTypes.bool,
};

export const mapPlacementSemanticToPropName = {
  top: 'top',
  topEnd: 'top-end',
  topStart: 'top-start',
  'top-end': 'top-end',
  'top-start': 'top-start',
  right: 'right',
  rightEnd: 'right-end',
  rightStart: 'right-start',
  'right-end': 'right-end',
  'right-start': 'right-start',
  bottom: 'bottom',
  bottomEnd: 'bottom-end',
  bottomStart: 'bottom-start',
  'bottom-end': 'bottom-end',
  'bottom-start': 'bottom-start',
  left: 'left',
  leftEnd: 'left-end',
  leftStart: 'left-start',
  'left-end': 'left-end',
  'left-start': 'left-start',
  auto: 'auto',
  autoStart: 'auto-start',
  autoEnd: 'auto-end',
  'auto-start': 'auto-start',
  'auto-end': 'auto-end',
};

export const placementPropType = PropTypes.oneOf([
  'top',
  'top-end',
  'top-start',
  'right',
  'right-end',
  'right-start',
  'bottom',
  'bottom-end',
  'bottom-start',
  'left',
  'left-end',
  'left-start',
  'auto',
  'auto-start',
  'auto-end',
]);
