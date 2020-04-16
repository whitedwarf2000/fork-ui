import React, { useMemo } from 'react';
import PropTypes from 'prop-types';

import mPlacements from '../placements';
import useSemanticProp from '../../hooks/useSemanticProp';
import { omit } from '../../utils/helpers';

import PortalOverlay from './Overlay.Portal';
import AbsoluteOverlay from './Overlay.Absolute';

const Overlay = ({ absolute, ...otherProps }) => {
  return absolute ? (
    <AbsoluteOverlay {...otherProps} />
  ) : (
    <PortalOverlay {...otherProps} />
  );
};

Overlay.displayName = 'Overlay';
Overlay.propTypes = {
  absolute: PropTypes.bool,
};
Overlay.defaultProps = {};

const lPlacements = Object.keys(mPlacements);

const SupportSemanticPlacement = (props) => {
  const placement = useSemanticProp('placement', props, lPlacements);
  const passedProps = useMemo(() => omit(props, [
    ...lPlacements,
    'placement',
  ]), [props]);

  return (
    <Overlay
      {...passedProps}
      placement={placement || 'top'}
    />
  );
};

export default SupportSemanticPlacement;
