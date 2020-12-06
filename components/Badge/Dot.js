import React from 'react';
import cn from 'classnames';
import PropTypes from 'prop-types';

const Dot = ({
  className,
  color,
  ...otherProps
}) => {
  return (
    <sub
      style={{ backgroundColor: color }}
      className={cn('fbadge-ui fbadge-dot', className)}
      {...otherProps}
    />
  );
};

Dot.displayName = 'Badge.Dot';
Dot.propTypes = {
  className: PropTypes.string,
  color: PropTypes.string,
};

Dot.defaultProps = {
  overflowCount: Infinity,
};

export default Dot;
