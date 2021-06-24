import React from 'react';
import cn from 'classnames';

import Dialog from '../Dialog';
import Button from '../Button';

const PureConfirm = ({
  children,
  header,
  className,
  onClose,
  onNo,
  onYes,
  ...otherProps
}) => {
  return (
    <Dialog className={cn('fpureconfirm', className)} {...otherProps}>
      <Dialog.Header>
        {header}
        <Dialog.Closer rounded onClick={onClose} />
      </Dialog.Header>
      <Dialog.Body>
        {children}
      </Dialog.Body>
      <Dialog.Footer>
        <Button onClick={onNo}>No</Button>
        <Button color="primary" onClick={onYes}>Yes</Button>
      </Dialog.Footer>
    </Dialog>
  );
};

export default PureConfirm;

