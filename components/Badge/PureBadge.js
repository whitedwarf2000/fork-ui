import React, { useMemo } from 'react';
import cn from 'classnames';
import PropTypes from 'prop-types';

import useSemanticProp from '../../hooks/useSemanticProp';
import { omit } from '../../utils/helpers';
import {
  makePlacements,
  placementSemanticPropTypes,
  placementPropType,
  mapPlacementSemanticToPropName,
} from '../placements';

const mPlacements = makePlacements('fbadge');
const lPlacements = Object.keys(placementSemanticPropTypes);

const PureBadge = ({
  className,
  children,
  badge,
  overlap,
  placement,
  ...otherProps
}) => {
  return (
    <span
      className={cn(
        'fbadge',
        {
          'fbadge-overlap': overlap,
        },
        mPlacements[placement] || 'fbadge-tr',
        className
      )}
      {...otherProps}
    >
      {children}
      {badge}
    </span>
  );
};

PureBadge.displayName = 'Badge.PureBadge';
PureBadge.propTypes = {
  className: PropTypes.string,
  children: PropTypes.any,
  overlap: PropTypes.bool,
  placement: placementPropType,
  badge: PropTypes.any,
};
PureBadge.defaultProps = {};

const withSemantic = (Component) => {
  const SemanticPureBadge = (props) => {
    const semanticPlacement = useSemanticProp('placement', props, lPlacements);
    const placement = mapPlacementSemanticToPropName[semanticPlacement]; // Convert topRight to top-right, bottomLeft to bottom-left...
  
    const passedProps = useMemo(() => omit(props, [
      ...lPlacements,
      'placement',
    ]), [props]);

    return (
      <Component placement={placement} {...passedProps} />
    );
  };

  SemanticPureBadge.propTypes = {
    placement: placementPropType,
    ...placementSemanticPropTypes
  };
  SemanticPureBadge.defaultProps = {};
  SemanticPureBadge.displayName = 'SemanticPureBadge';

  return SemanticPureBadge;
};

export default withSemantic(PureBadge);
