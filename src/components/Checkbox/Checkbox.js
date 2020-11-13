import React from 'react';
import cn from 'classnames';
import PropTypes from 'prop-types';

const Checkbox = React.forwardRef(({ className, style, ...otherProps }, ref) => {
  return (
    <span className={cn('fcbox', className)}>
      <input
        type="checkbox"
        className="fcbox-input"
        ref={ref}
        {...otherProps}
      />
      <div className="fcbox-mark">
        <svg className="fcbox-check" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
          <path stroke="none" d="M0 0h24v24H0z" fill="none"/>
          <path d="M5 12l5 5l10 -10" />
        </svg>
      </div>
    </span>
  );
});

Checkbox.displayName = 'Checkbox';
Checkbox.propTypes = {
  className: PropTypes.string,
};
Checkbox.defaultProps = {};

export default Checkbox;
