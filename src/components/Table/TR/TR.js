import React from 'react';
import cn from 'classnames';

require('./TR.scss');

const TR = ({ className, ...otherProps}) => {
  return (
    <tr className={cn('rc-table-tr', className)} {...otherProps} />
  )
};

export default TR;
