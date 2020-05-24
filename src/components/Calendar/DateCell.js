import React, { useMemo, useContext } from 'react';
import cn from 'classnames';

import Context from './Context';
import Button from '../Button';

const DateCell = ({ className, header, disabled, selected, ...otherProps }) => {
  const color = useMemo(() => selected ? 'primary' : 'transparent', [selected]);

  return (
    <div className={cn('rc-calendar-date-cell', { '--header': header, '--selected': selected }, className)}>
      <Button color={color} circle {...otherProps} disabled={disabled || header} />
    </div>
  )
};

export default DateCell;
