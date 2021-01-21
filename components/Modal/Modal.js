import React, { useRef, useState, useEffect } from 'react';
import cn from 'classnames';
import PropTypes from 'prop-types';
import ResizeObserver from 'resize-observer-polyfill';

import Portal from '../Portal';
import Dialog from '../Dialog';
import Memo from '../Memo';
import useModal from './useModal';
import useLockBodyScroll from '../../hooks/useLockBodyScroll';
import useModalMeansure from './useModalMeansure';

const Modal = ({
  className,
  open,
  fresh,
  style,
  centered,
  margin,
  ...otherProps
}) => {
  useLockBodyScroll(open);
  const {
    modalRef,
    portalRef,
    modalStyle,
  } = useModalMeansure(open, style, { centered: centered, margin: margin });

  return (
    <Memo watch={open} fresh={fresh}>
      <Portal>
        <Dialog.Portal className="fmodal-portal" ref={portalRef}>
          <Dialog
            className={cn('fmodal', className)}
            style={modalStyle}
            ref={modalRef}
            {...otherProps}
          />
        </Dialog.Portal>
      </Portal>
    </Memo>
  );
};

Modal.useModal = useModal;
Modal.Header = Dialog.Header;
Modal.Body = Dialog.Body;
Modal.Footer = Dialog.Footer;
Modal.Divider = Dialog.Divider;
Modal.HeaderTitle = Dialog.HeaderTitle;
Modal.HeaderSupportButtons = Dialog.HeaderSupportButtons;

Modal.displayName = 'Modal';
Modal.propTypes = {
  className: PropTypes.string,
  open: PropTypes.bool,
};
Modal.defaultProps = {
  fresh: true,
  margin: 10,
  style: {},
};

export default Modal;
