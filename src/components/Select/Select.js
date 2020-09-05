import React from 'react';
import cn from 'classnames';

const Select = React.forwardRef(({ className, ...otherProps }, ref) => {
  return (
    <select
      ref={ref}
      className={cn('fui-select', className)}
      {...otherProps}
    />
  );
});

Select.Option = props => <option {...props} />
Select.OptGroup = props => <optgroup {...props} />

export default Select;
