import React, { useRef, useCallback, useMemo } from 'react';
import cn from 'classnames';
import PropTypes from 'prop-types';

import Portal from '../Portal';
import Dialog from '../Dialog';

import useDebounce from '../../hooks/useDebounce';
import useClickOutsideOverlay from '../../hooks/useClickOutsideOverlay';
import useLockBodyScroll from '../../hooks/useLockBodyScroll';
import useSemanticProp from '../../hooks/useSemanticProp';
import { omit } from '../../utils/helpers';

const mPlacements = Object.freeze({
  left: 'fdrawer-portal-l',
  right: 'fdrawer-portal-r',
});

const lPlacements = Object.keys(mPlacements);

const Drawer = ({ className, open, ...otherProps }) => {
  const delayOpen = useDebounce(open, 100);
  useLockBodyScroll(delayOpen);
  const placement = useSemanticProp('placement', otherProps, lPlacements)  || 'right';
  const passedProps = useMemo(() => omit(otherProps, [
    ...lPlacements,
    'placement',
  ]));

  const animationClass = useMemo(() => {
    if (placement === 'right') {
      return open ? 'slideInRight animated faster' : 'slideOutRight animated faster';
    }

    if (placement === 'left') {
      return open ? 'slideInLeft animated faster' : 'slideOutLeft animated faster';
    }

    return 'slideInRight animated faster';
  }, [open, placement]);

  return (
    <React.Fragment>
      {delayOpen && (
        <Portal>
          <Dialog.Portal
            className={cn(
              'fdrawer-portal',
              mPlacements[placement],
            )}
          >
            <Dialog
              className={cn('fdrawer', animationClass, className)}
              {...passedProps}
            />
          </Dialog.Portal>
        </Portal>
      )}
    </React.Fragment>
  );
};

Drawer.Header = Dialog.Header;
Drawer.Body = Dialog.Body;
Drawer.Footer = Dialog.Footer;
Drawer.HeaderTitle = Dialog.HeaderTitle;
Drawer.HeaderButtons = Dialog.HeaderButtons;

Drawer.displayName = 'Drawer';
Drawer.propTypes = {
  className: PropTypes.string,
  open: PropTypes.bool,
  placement: PropTypes.string,
  children: PropTypes.any,
};
Drawer.defaultProps = {};

export default Drawer;
