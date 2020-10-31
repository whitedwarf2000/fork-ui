import React from 'react';
import cn from 'classnames';

const enhancerIcon = (originalName, IconComponent) => {
  const Icon = ({ className, style, color, fontSize, ...otherProps }) => {
    return (
      <IconComponent
        className={cn('ficon', { [`ficon-${originalName}`]: originalName }, className)}
        style={{
          color: color || null,
          fontSize: fontSize || null,
          ...style
        }}
        {...otherProps}
      />
    );
  };

  return Icon;
};

export default enhancerIcon;
