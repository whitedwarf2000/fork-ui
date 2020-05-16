import React from 'react';
import cn from 'classnames';
import PropTypes from 'prop-types';

import Button from '../Button';
import Dialog from '../Dialog';

const _text = {
  ok: 'OK',
  cancel: 'Cancel',
};

const config = Object.freeze({
  setText: ({ ok, cancel }) => {
    _text.ok = ok;
    _text.cancel = cancel;
  }
});

const PureConfirm = React.forwardRef(({ children, title, onCancel, onOk, className, ...otherProps }, ref) => {
  return (
    <Dialog
      ref={ref}
      className={cn('rc-confirm', className)}
      {...otherProps}
    >
      <Dialog.Header closable={false}>{title}</Dialog.Header>
      <Dialog.Body>{children}</Dialog.Body>
      <Dialog.Footer className="rc-confirm-footer">
        <Button onClick={onCancel}>{_text.cancel}</Button>
        <Button onClick={onOk} style={{ marginLeft: '0.5em' }}>{_text.ok}</Button>
      </Dialog.Footer>
    </Dialog>
  );
});

PureConfirm.displayName = 'PureConfirm';
PureConfirm.propTypes = {
  children: PropTypes.any,
  title: PropTypes.any,
  onOk: PropTypes.func,
  onCancel: PropTypes.func,
  className: PropTypes.string,
};
PureConfirm.defaultProps = {
  onCancel: f => f,
  onOk: f => f,
};

export default PureConfirm;

export {
  config,
}
