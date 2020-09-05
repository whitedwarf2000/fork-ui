import React from 'react';
import cn from 'classnames';
import PropTypes from 'prop-types';

import Dialog from '../Dialog';

const PureNotification = React.forwardRef(({ children, title, className, onContentClick, ...otherProps }, ref) => {
  return (
    <Dialog
      ref={ref}
      className={cn('fui-pure-notification', className)}
      {...otherProps}
    >
      {title && (
        <Dialog.Header className="fui-pure-notification-header">
          {title}
        </Dialog.Header>
      )}
      <Dialog.Body
        className="fui-pure-notification-body"
        onClick={onContentClick}
      >
        {children}
      </Dialog.Body>
    </Dialog>
  );
});

PureNotification.displayName = 'PureNotification';
PureNotification.propTypes = {
  children: PropTypes.any,
  title: PropTypes.any,
  className: PropTypes.string,
  onContentClick: PropTypes.func,
};
PureNotification.defaultProps = {
  onContentClick: f => f,
};

export default PureNotification;
