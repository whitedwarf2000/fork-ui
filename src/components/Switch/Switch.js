import React, { useState, useMemo, useCallback, useEffect } from 'react';
import cn from 'classnames';
import PropTypes from 'prop-types';

import useFlexibleRef from '../../hooks/useFlexibleRef';

const Switch = React.forwardRef(({ onChange, className, ...otherProps }, ref) => {
  const _ref = useFlexibleRef(ref);
  const isControlled = useMemo(() => otherProps.hasOwnProperty('checked'), [otherProps]);
  const [checked, setChecked] = useState(isControlled ?  otherProps.checked : otherProps.defaultChecked);

  const _onChange = useCallback((e) => {
    if (isControlled) {
      return onChange(e);
    }

    return setChecked(e.target.checked);
  }, [isControlled, onChange, setChecked]);

  useMemo(() => {
    if (isControlled) {
      return setChecked(otherProps.checked)
    }
  }, [isControlled, otherProps.checked, setChecked]);

  useEffect(() => {
    if (!isControlled) {
      onChange({ target: _ref.current });
    }
  } ,[checked, isControlled, _ref]);

  return (
    <span className={cn('rc-switch', { '--checked': checked }, className)}>
      <input
        type="checkbox"
        className="rc-switch-input"
        ref={_ref}
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
  checked: PropTypes.bool,
  defaultChecked: PropTypes.bool,
};
Switch.defaultProps = {
  onChange: f => f,
};

export default Switch;
