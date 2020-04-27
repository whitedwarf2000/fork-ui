import React from 'react';
import cn from 'classnames';
import PropTypes from 'prop-types';

import Button from '../Button';

const PureModal = React.forwardRef(({ children, title, onCloseClick, className, closable, ...otherProps }, ref) => {
  return (
    <div className={cn('rc-pure-modal', className)} ref={ref} {...otherProps}>
      <div className="rc-pure-modal-title">
        <span>{title}</span>
        {closable && <Button icon="x" glassed circle className="rc-pure-modal-close" fontSize="0.75em" onClick={onCloseClick} />}
      </div>
      <div className="rc-pure-modal-content">
        {children}
      </div>
    </div>
  );
});


PureModal.displayName = 'PureModal';
PureModal.propTypes = {
  children: PropTypes.any,
  title: PropTypes.any,
  onCloseClick: PropTypes.func,
  className: PropTypes.string,
  closable: PropTypes.bool,
};
PureModal.defaultProps = {
  onCloseClick: f => f,
  closable: true,
};

export default PureModal;
