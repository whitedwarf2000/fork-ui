import React from 'react';
import cn from 'classnames';

const enhancerIcon = (IconComponent) => {
  const Icon = ({ className, style, color, fontSize, ...otherProps }) => {
    return (
      <IconComponent
        className={cn('ficon', className)}
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
