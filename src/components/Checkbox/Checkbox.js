import React from 'react';
import cn from 'classnames';
import PropTypes from 'prop-types';
import { Check } from '../Icon';

const Checkbox = React.forwardRef(({ className, circle, ...otherProps }, ref) => {
  return (
    <span className={cn('fui-checkbox', { 'fui-checkbox--circle': circle },className)}>
      <input
        type="checkbox"
        className="fui-checkbox-input"
        ref={ref}
        {...otherProps}
      />
      <span className="fui-checkbox-inner" />
      <Check className="fui-checkbox-check" size="0.8em" />
    </span>
  );
});

Checkbox.displayName = 'Checkbox';
Checkbox.propTypes = {
  className: PropTypes.string,
};
Checkbox.defaultProps = {};

export default Checkbox;
