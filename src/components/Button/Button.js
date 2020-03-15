import React from 'react';
import cn from 'classnames';
import PropTypes from 'prop-types';

require('./Button.scss');

const Button = ({ className, circle, rounded, transparent, buttonRef, ...otherProps }) => (
  <button
    className={cn(
      'rc-button',
      {
        'rc-button--circle': circle,
        'rc-button--transparent': transparent,
        'rc-button--rounded': rounded,
      },
      className,
    )}
    ref={buttonRef}
    {...otherProps}
  />
);

Button.displayName = 'Button';
Button.propTypes = {
  className: PropTypes.string,
};
Button.defaultProps = {};

export default Button;
