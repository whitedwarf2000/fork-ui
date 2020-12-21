import React from 'react';
import cn from 'classnames';
import PropTypes from 'prop-types';

const enhancerIcon = (originalName, displayName, IconComponent) => {
  const Icon = ({ className, style, color, size, stroke, ...otherProps }) => {
    return (
      <IconComponent
        className={cn('ficon', { [`ficon-${originalName}`]: originalName }, className)}
        style={{
          color: color,
          fontSize: size,
          strokeWidth: stroke,
          ...style
        }}
        {...otherProps}
      />
    );
  };

  Icon.displayName = displayName;
  Icon.propTypes = {
    className: PropTypes.string,
    style: PropTypes.object,
    color: PropTypes.string,
    size: PropTypes.string,
    stroke: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
  };
  Icon.defaultProps = {};

  return Icon;
};

export default enhancerIcon;
