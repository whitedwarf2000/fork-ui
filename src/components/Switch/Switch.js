import React, { useEffect, useState, useRef, useMemo, useCallback } from 'react';
import cn from 'classnames';
import PropTypes from 'prop-types';

const Switch = React.forwardRef(({ defaultChecked, onChange, className, ...otherProps }, ref) => {
  const isControlled = useMemo(() => otherProps.hasOwnProperty('checked'), []);

  const [checked, setChecked] = useState(isControlled ? otherProps.checked : defaultChecked);

  const _onChange = useCallback((e) => {
    onChange(e);
    setChecked(e.target.checked);
  }, []);

  useMemo(() => {
    if (isControlled) {
      setChecked(otherProps.checked);
    }
  } ,[otherProps.checked]);

  return (
    <span className={cn('rc-switch', { '--checked': checked }, className)}>
      <input
        type="checkbox"
        className="rc-switch-input"
        ref={ref}
        defaultChecked={defaultChecked}
        onChange={_onChange}
        {...otherProps}
      />
      <span className="rc-switch-inner" />
    </span>
  );
})

Switch.displayName = 'Switch';
Switch.propTypes = {
  className: PropTypes.string,
  onChange: PropTypes.func,
  defaultChecked: PropTypes.bool,
};
Switch.defaultProps = {
  onChange: f => f,
};

export default Switch;
