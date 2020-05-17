import React from 'react';
import cn from 'classnames';
import PropTypes from 'prop-types';
import Icon from '../Icon';

const Checkbox = React.forwardRef(({ className, circle, ...otherProps }, ref) => {
  return (
    <span className={cn('rc-checkbox', { '--circle': circle },className)}>
      <input
        type="checkbox"
        className="rc-checkbox-input"
        ref={ref}
        {...otherProps}
      />
      <span className="rc-checkbox-inner" />
      <Icon name="check" className="rc-checkbox-check" size="0.8em" />
    </span>
  );
});

Checkbox.displayName = 'Checkbox';
Checkbox.propTypes = {
  className: PropTypes.string,
};
Checkbox.defaultProps = {};

export default Checkbox;
