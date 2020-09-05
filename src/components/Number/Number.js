import React from 'react';
import cn from 'classnames';

const Number = React.forwardRef(({ className, ...otherProps }, ref) => {
  return (
    <input
      type="number"
      ref={ref}
      className={cn('fui-number', className)}
      {...otherProps}
    />
  );
});

export default Number;
