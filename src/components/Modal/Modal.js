import React, { useRef, useEffect, useCallback } from 'react';
import cn from 'classnames';
import PropTypes from 'prop-types';

import Portal from '../Portal';
import Dialog from '../Dialog';

import useDebounce from '../../hooks/useDebounce';
import useClickOutsideOverlay from '../../hooks/useClickOutsideOverlay';
import useLockBodyScroll from '../../hooks/useLockBodyScroll';

const Modal = ({ className, onClose, open, canOutsideClickClose, ...otherProps }) => {
  const ref = useRef();
  const delayOpen = useDebounce(open, 100);

  const handleClickOutside = useCallback(() => {
    if (canOutsideClickClose) {
      onClose();
    }
  }, []);

  useLockBodyScroll(delayOpen);
  const wrapperRef = useClickOutsideOverlay({ overlayRef: ref, open: delayOpen, handleClickOutside });

  return (
    <React.Fragment>
      {delayOpen && (
        <Portal>
          <Dialog.Container
            className={cn('fui-modal-container', { 'fui-modal-container--close-animation': !open })}
            ref={wrapperRef}
          >
            <Dialog
              className={cn('fui-modal', className)}
              ref={ref}
              onClose={onClose}
              {...otherProps}
            />
          </Dialog.Container>
        </Portal>
      )}
    </React.Fragment>
  );
};

Modal.Header = Dialog.Header;
Modal.Body = Dialog.Body;
Modal.Footer = Dialog.Footer;

Modal.displayName = 'Modal';
Modal.propTypes = {
  className: PropTypes.string,
  onClose: PropTypes.func,
  open: PropTypes.bool,
  children: PropTypes.any,
  title: PropTypes.any,
  canOutsideClickClose: PropTypes.bool,
  closable: PropTypes.bool,
};
Modal.defaultProps = {
  onClose: f => f,
};

export default Modal;
