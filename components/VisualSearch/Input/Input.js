import React from 'react';
import cn from 'classnames';
import AutoResizeInput from '../AutoResizeInput';

const Input = ({ ...otherProps }) => {
  return (
    <AutoResizeInput {...otherProps} />
  );
};

export default Input;
