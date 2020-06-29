import React from 'react';
import cn from 'classnames';

const TD = ({ className, ...otherProps}) => {
  return (
    <td className={cn('fui-table-td', className)} {...otherProps} />
  )
};

export default TD;
