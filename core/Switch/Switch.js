import React from 'react';
import cn from 'classnames';
import PropTypes from 'prop-types';

const Switch = ({ className, ...otherProps }) => {
  return (
    <div className={cn('fswitch', className)} {...otherProps}>

    </div>
  );
};

Switch.displayName = 'Switch';
Switch.propTypes = {
  className: PropTypes.string,
};
Switch.defaultProps = {};

export default Switch;
