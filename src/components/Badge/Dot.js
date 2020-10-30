import React from 'react';
import cn from 'classnames';
import PropTypes from 'prop-types';

const Dot = ({
  className,
  color,
  size,
  ...otherProps
}) => {
  return (
    <sub
      style={{
        backgroundColor: color,
        fontSize: size,
      }}
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
