import React, { useCallback, useState, useRef } from 'react';
import PropTypes from 'prop-types';

import Button from '../Button';
import Memo from '../Memo';
import Overlay from '../Overlay';
import Dialog from '../Dialog';
import useOverlay from '../Overlay/useOverlay';

const Popconfirm = ({
  className,
  onOk,
  onCancel,
  children,
  content,
  ...otherProps
}) => {
  const [{ ref, visible, hide, show }] = useOverlay(false);

  const onLocalOk = useCallback(() => {
    hide();
    onOk();
  }, [onOk, hide]);
  const onLocalCancel = useCallback(() => {
    hide();
    onCancel();
  }, [onCancel, hide]);

  return (
    <Overlay
      visible={visible}
      className="fpopconfirm"
      arrow
      trigger='manual'
      onClickOutside={hide}
      content={(
        <Dialog>
          <Dialog.Body>
            {content}
          </Dialog.Body>
          <Dialog.Footer>
            <Button
              primary
              className="mr-2"
              onClick={onLocalOk}
            >
              OK
            </Button>
            <Button onClick={onLocalCancel}>
              Cancel
            </Button>
          </Dialog.Footer>
        </Dialog>
      )}
      role="popconfirm"
      {...otherProps}
    >
      <span ref={ref} onClick={show}>
        {children}
      </span>
    </Overlay>
  );
};

Popconfirm.displayName = 'Popconfirm';
Popconfirm.propTypes = {
  className: PropTypes.string,
  onOk: PropTypes.func,
  onCancel: PropTypes.func,
  children: PropTypes.any,
};
Popconfirm.defaultProps = {
  onCancel: f => f,
  onOk: f => f,
};

export default Popconfirm;
