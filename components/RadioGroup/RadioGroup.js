import React, { useState, useCallback } from 'react';
import PropTypes from 'prop-types';

const RadioGroup = ({ children, value, onChange, ...otherProps }) => {
  return (
    <React.Fragment>
      {React.Children.map(children, elm => {
        return React.cloneElement(elm, {
          checked: elm.props.value === value,
          onChange: () => onChange(elm.props.value),
          ...otherProps,
          ...elm.props
        });
      })}
    </React.Fragment>
  );
};

RadioGroup.useRadioGroup = (defaultValue) => {
  const [value, setValue] = useState(defaultValue);
  const onChange = useCallback((val) => setValue(val), [setValue]);

  return [{ value, onChange }, { setValue }];
};

RadioGroup.displayName = 'Radio.Group';
RadioGroup.propTypes = {
  children: PropTypes.any,
  value: PropTypes.any,
  onChange: PropTypes.func,
};
RadioGroup.defaultProps = {
  onChange: f => f,
}

export default RadioGroup;
