import React from 'react';
import cn from 'classnames';
import PropTypes from 'prop-types';

import RadioGroup from './Group';

const Radio = React.forwardRef(({ className, style, size, ...otherProps }, ref) => {
  return (
    <span
      className={cn('fradio', className)}
      style={{
        fontSize: size,
        ...style
      }}
    >
      <input
        type="radio"
        className="fradio-input"
        ref={ref}
        {...otherProps}
      />
      <label className="fradio-mark" />
    </span>
  );
});

Radio.Group = RadioGroup;

Radio.displayName = 'Radio';
Radio.propTypes = {
  className: PropTypes.string,
  size: PropTypes.string,
  style: PropTypes.object,
};
Radio.defaultProps = {};

export default Radio;
