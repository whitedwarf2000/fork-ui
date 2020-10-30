import React from 'react';
import cn from 'classnames';
import PropTypes from 'prop-types';

const Checkbox = React.forwardRef(({ className, circle, ...otherProps }, ref) => {
  return (
    <span className={cn('fcbox', className)}>
      <input
        type="checkbox"
        className="fcbox-input"
        ref={ref}
        {...otherProps}
      />
      <span className="fcbox-mark" />
    </span>
  );
});

Checkbox.displayName = 'Checkbox';
Checkbox.propTypes = {
  className: PropTypes.string,
};
Checkbox.defaultProps = {};

export default Checkbox;
