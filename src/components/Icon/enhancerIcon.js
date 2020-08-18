import React from 'react';
import cn from 'classnames';

const enhancerIcon = (IconComponent) => {
  const Icon = ({ className, style, color, size, ...otherProps }) => {
    return (
      <IconComponent
        className={cn('fui-icon', className)}
        style={{
          color: color || null,
          fontSize: size || null,
          ...style
        }}
        {...otherProps}
      />
    );
  };

  return Icon;
};

export default enhancerIcon;
