import React from 'react';
import cn from 'classnames';

const THead = ({ className, ...otherProps}) => {
  return (
    <thead className={cn('fui-table-thead', className)} {...otherProps} />
  )
};

export default THead;
