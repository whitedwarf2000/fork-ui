import React, { useMemo, useState, useEffect, useRef, useCallback } from 'react';
import cn from 'classnames';
import PropTypes from 'prop-types';

import Portal from '../Portal';

import { makePlacements } from '../placements';
import renderPlacement from './render-placement.portal';
import withFindDOMNode from '../../HOCs/withFindDOMNode';

import useOverlay from './useOverlay';

const mPlacements = makePlacements('fui-overlay');

const Overlay = ({
  className,
  overlayClass,
  children,
  arrow,
  overlay,
  targetNode,
  ...otherProps
}) => {
  const { visible, overlayStyle, overlayRef } = useOverlay(otherProps, targetNode, renderPlacement);

  return (
    <React.Fragment>
      {children}
      <Portal>
        <div
          ref={overlayRef}
          className={cn(
            'fui-overlay fui-overlay-portal',
            mPlacements[otherProps.placement],
            {
              'fui-overlay--hidden': !visible,
              'fui-overlay--arrow': arrow,
            },
            overlayClass
          )}
          style={overlayStyle}
        >
          {visible && overlay}
        </div>
      </Portal>
    </React.Fragment>
  );
};

Overlay.displayName = 'Overlay.Portal';
Overlay.propTypes = {
  placement: PropTypes.string,
  gap: PropTypes.number,
  defaultVisible: PropTypes.bool,
  overlay: PropTypes.any,
  children: PropTypes.any,
  arrow: PropTypes.bool,
  trigger: PropTypes.string,
  onVisibleChange: PropTypes.func,
  canOutsideClickClose: PropTypes.bool,
  absolute: PropTypes.bool,
};
Overlay.defaultProps = {
  placement: 'top',
  gap: 5,
  trigger: 'click',
  onVisibleChange: f => f,
};

export default withFindDOMNode(Overlay);
