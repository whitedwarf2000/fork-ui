import React from 'react';
import cn from 'classnames';
import PropTypes from 'prop-types';

const Radio = React.forwardRef(({ className, ...otherProps }, ref) => {
  return (
    <span className={cn('fradio', className)}>
      <input
        type="radio"
        className="fradio-input"
        ref={ref}
        {...otherProps}
      />
      <div className="fradio-mark" />
    </span>
  );
});

Radio.displayName = 'Radio';
Radio.propTypes = {
  className: PropTypes.string,
};
Radio.defaultProps = {};

export default Radio;
