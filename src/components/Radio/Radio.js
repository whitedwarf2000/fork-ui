import React from 'react';
import cn from 'classnames';
import PropTypes from 'prop-types';
import { Check } from '../icons';

const Radio = React.forwardRef(({ className, ...otherProps }, ref) => {
  return (
    <span className={cn('fui-radio', className)}>
      <input
        type="radio"
        className="fui-radio-input"
        ref={ref}
        {...otherProps}
      />
      <span className="fui-radio-inner" />
      <Check className="fui-radio-check" size="0.8em" />
    </span>
  );
});

Radio.displayName = 'Radio';
Radio.propTypes = {
  className: PropTypes.string,
};
Radio.defaultProps = {};

export default Radio;
