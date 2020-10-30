import React from 'react';
import cn from 'classnames';
import PropTypes from 'prop-types';

const Icon = ({
  className,
  color,
  icon,
  size,
  ...otherProps
}) => {
  return (
    <sub
      style={{
        backgroundColor: color,
        fontSize: size,
      }}
      className={cn('fbadge-ui fbadge-icon', className)}
      {...otherProps}
    >
      {icon}
    </sub>
  );
};

Icon.displayName = 'Badge.Icon';
Icon.propTypes = {
  className: PropTypes.string,
  color: PropTypes.string,
  icon: PropTypes.any.isRequired,
};

Icon.defaultProps = {};

export default Icon;
