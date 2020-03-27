import React from 'react';
import cn from 'classnames';
import PropTypes from 'prop-types';

import Icon from '../Icon';

require('./PureNotification.scss');

const PureNotification = ({ notificationRef, children, title, className, onCloseClick, onContentClick, noTitle, ...otherProps }) => {
  return (
    <div className={cn('rc-pure-notification', className)} ref={notificationRef} {...otherProps}>
      
      {!noTitle && (
        <div className="rc-pure-notification-title">
          <span style={{ display: 'flex', alignItems: 'center' }}>
            <Icon name="bell" style={{ marginRight: '0.5em' }} />
            {title}
          </span>
          <Icon name="times" className="rc-pure-modnotificational-close" onClick={onCloseClick} />
        </div>
      )}
      <div className="rc-pure-notification-content" onContentClick={onContentClick}>
        {children}
      </div>
    </div>
  );
};

PureNotification.displayName = 'PureNotification';
PureNotification.propTypes = {
  notificationRef: PropTypes.any,
  children: PropTypes.any,
  title: PropTypes.any,
  noTitle: PropTypes.bool,
  className: PropTypes.string,
  onCloseClick: PropTypes.func,
  onContentClick: PropTypes.func,
};
PureNotification.defaultProps = {
  onCloseClick: f => f,
  onContentClick: f => f,
};

export default PureNotification;
