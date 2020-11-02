import React from 'react';
import cn from 'classnames';
import PropTypes from 'prop-types';

const Checkbox = React.forwardRef(({ className, style, size, ...otherProps }, ref) => {
  return (
    <span
      className={cn('fcbox', className)}
      style={{
        fontSize: size,
        ...style
      }}
    >
      <input
        type="checkbox"
        className="fcbox-input"
        ref={ref}
        {...otherProps}
      />
      <div className="fcbox-mark" />
    </span>
  );
});

Checkbox.displayName = 'Checkbox';
Checkbox.propTypes = {
  className: PropTypes.string,
  size: PropTypes.string,
  style: PropTypes.object,
};
Checkbox.defaultProps = {};

export default Checkbox;
