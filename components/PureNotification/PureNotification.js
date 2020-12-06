import React from 'react';
import cn from 'classnames';
import PropTypes from 'prop-types';

import Dialog from '../Dialog';

const PureNotification = React.forwardRef(({ children, title, className, onContentClick, ...otherProps }, ref) => {
  return (
    <Dialog
      ref={ref}
      className={cn('fpure-notify', className)}
      {...otherProps}
    >
      {title && (
        <Dialog.Header className="fpure-notify-header">
          {title}
        </Dialog.Header>
      )}
      <Dialog.Body
        className="fpure-notify-body"
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
