import React from 'react';
import cn from 'classnames';
import PropTypes from 'prop-types';

import Portal from '../Portal';
import Dialog from '../Dialog';
import Memo from '../Memo';
import useModal from './useModal';
import useLockBodyScroll from '../../hooks/useLockBodyScroll';

const Modal = ({ className, open, fresh, ...otherProps }) => {
  useLockBodyScroll(open);

  return (
    <Memo watch={open} fresh={fresh}>
      <Portal>
        <Dialog.Portal className="fmodal-portal">
          <Dialog
            className={cn('fmodal', className)}
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
};

export default Modal;
