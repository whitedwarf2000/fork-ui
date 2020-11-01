import React, { useState, useCallback } from 'react';
import cn from 'classnames';
import PropTypes from 'prop-types';

import Loader from '../Loader';

const Switch = React.forwardRef(({ className, style, size, disabled, loading, ...otherProps }, ref) => {
  return (
    <div
      className={cn('fswitch', className)}
      style={{
        fontSize: size,
        ...style
      }}
    >
      <input
        type="checkbox"
        className="fswitch-input"
        ref={ref}
        disabled={disabled || loading}
        {...otherProps}
      />
      <div className="fswitch-fake">
        <span className="fswitch-mark">
          {loading && <Loader.Spinner />}
        </span>
      </div>
    </div>
  );
});

Switch.useSwitch = (defaultChecked) => {
  const [checked, setChecked] = useState(defaultChecked);
  const onChange = useCallback(e => setChecked(e.target.checked), [setChecked]);

  return [
    {
      checked,
      onChange,
    },
    {
      checked,
      setChecked,
      onChange,
    }
  ]
};

Switch.displayName = 'Switch';
Switch.propTypes = {
  className: PropTypes.string,
  disabled: PropTypes.bool,
  loading: PropTypes.bool,
  style: PropTypes.object,
  size: PropTypes.string,
};
Switch.defaultProps = {};

export default Switch;
