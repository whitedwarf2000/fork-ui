import React from 'react';
import cn from 'classnames';

const TBody = ({ className, ...otherProps}) => {
  return (
    <tbody className={cn('fui-table-tbody', className)} {...otherProps} />
  )
};

export default TBody;
