import React from 'react';
import cn from 'classnames';
import PropTypes from 'prop-types';

const Droplet = ({ className, size, color, children, ...otherProps }) => {
  return (
    <div
      style={{
        fontSize: size,
        backgroundColor: color,
      }}
      className={cn('rc-droplet', className)}
    >
      <span>
        {children}
      </span>
    </div>
  );
};

Droplet.displayName = 'Droplet';
Droplet.propTypes = {
  className: PropTypes.string,
  size: PropTypes.string,
  color: PropTypes.string,
};
Droplet.defaultProps = {};

export default Droplet;
