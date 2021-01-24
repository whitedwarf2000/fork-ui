import React from 'react';
import PropTypes from 'prop-types';

import Modal from '../Modal';
import Button from '../Button';
import { X } from '../icons';

const Confirm = ({
  className,
  title,
  open,
  onClose,
  onOk,
  onCancel,
  children,
  ...otherProps
}) => {
  return (
    <Modal open={open} {...otherProps}>
      <Modal.Header>
        <Modal.HeaderTitle>
          {title}
        </Modal.HeaderTitle>
        <Modal.HeaderButtons>
          <Button
            circle
            transparent
            icon={<X />}
            onClick={onClose}
          />
        </Modal.HeaderButtons>
      </Modal.Header>
      <Modal.Body>
        {children}
      </Modal.Body>
      <Modal.Footer>
        <Button
          primary
          onClick={onOk}
          className="mr-2"
        >
          OK
        </Button>
        <Button onClick={onCancel}>
          Cancel
        </Button>
      </Modal.Footer>
    </Modal>
  );
};

Confirm.displayName = 'Confirm';
Confirm.propTypes = {
  className: PropTypes.string,
  open: PropTypes.bool,
  onClose: PropTypes.func.isRequired,
  onCancel: PropTypes.func,
  onOk: PropTypes.func,
  children: PropTypes.any,
  title: PropTypes.any,
};
Confirm.defaultProps = {
  onCancel: f => f,
  onOk: f => f,
  onClose: f => f,
};

export default Confirm;