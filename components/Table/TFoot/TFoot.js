import React from 'react';
import cn from 'classnames';

const TFoot = ({ className, ...otherProps}) => {
  return (
    <tfoot className={cn('fui-table-tfoot', className)} {...otherProps} />
  )
};

export default TFoot;
