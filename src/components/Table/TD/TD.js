import React from 'react';
import cn from 'classnames';

require('./TD.scss');

const TD = ({ className, ...otherProps}) => {
  return (
    <td className={cn('rc-table-td', className)} {...otherProps} />
  )
};

export default TD;
