import React from 'react';
import cn from 'classnames';
import PropTypes from 'prop-types';
import Loader from '../Loader';

const Switch = React.forwardRef(({ checked, className, disabled, loading, ...otherProps }, ref) => {
  return (
    <span className={cn('fswitch', { 'fswitch-checked': checked, 'fswitch-disabled': disabled }, className)}>
      <input
        type="checkbox"
        className="fswitch-input"
        ref={ref}
        checked={checked}
        disabled={disabled || loading}
        {...otherProps}
      />
      <span className="fswitch-mark">
        {loading && <Loader.Spinner />}
      </span>
    </span>
  );
});

Switch.displayName = 'Switch';
Switch.propTypes = {
  className: PropTypes.string,
  checked: PropTypes.bool,
  disabled: PropTypes.bool,
  loading: PropTypes.bool,
};
Switch.defaultProps = {
  onChange: f => f,
};

export default Switch;
