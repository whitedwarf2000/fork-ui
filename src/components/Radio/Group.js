import React, { useState, useCallback } from 'react';
import PropTypes from 'prop-types';

const Group = ({ children, value, onChange, ...otherProps }) => {
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

Group.useRadioGroup = (defaultValue) => {
  const [value, setValue] = useState(defaultValue);
  const onChange = useCallback((val) => setValue(val), [setValue]);
  return [
    {
      value,
      onChange,
    },
    {
      value,
      setValue,
      onChange,
    },
  ]
};

Group.displayName = 'Radio.Group';
Group.propTypes = {
  children: PropTypes.any,
  value: PropTypes.any,
  onChange: PropTypes.func,
};
Group.defaultProps = {
  onChange: f => f,
}

export default Group;
