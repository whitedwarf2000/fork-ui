import React from 'react';
import cn from 'classnames';

const enhancerIcon = (originalName, IconComponent) => {
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

  return Icon;
};

export default enhancerIcon;
