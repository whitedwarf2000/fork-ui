import React, { useMemo, useState, useCallback } from 'react';
import cn from 'classnames';

import Button from '../Button';

const detectInsideRange = (startDate, endDate, selfDate) => {
  if (!startDate || !endDate) {
    return false;
  }

  return selfDate >= startDate && selfDate <= endDate;
};

const getBeginOfTheDate = (dateNumber, month, year) => {
  return new Date(year, month, dateNumber);
};

const DateCell = ({
  className,
  header,
  disabled,
  displayDate,
  dateNumber,
  onDateClick,
  startDate,
  endDate,
  range,
  ...otherProps
}) => {
  const selfDate = useMemo(() => {
    if (dateNumber) {
      return getBeginOfTheDate(dateNumber, displayDate.getMonth(), displayDate.getFullYear());
    }
    return null;
  }, [dateNumber, displayDate]);

  const isSelected = useMemo(() => {
    if (header || disabled) {
      return false;
    }

    return detectInsideRange(startDate, endDate, selfDate);
  }, [header, disabled, startDate, endDate, selfDate]);

  const color = useMemo(() => isSelected ? 'primary' : 'transparent', [isSelected]);
  const _onDateClick = useCallback(() => onDateClick(selfDate), [selfDate]);

  return (
    <div className={cn('rc-calendar-date-cell', { '--header': header, '--selected': isSelected }, className)}>
      <Button color={color} circle {...otherProps} disabled={disabled || header} onClick={_onDateClick} />
    </div>
  );
};

DateCell.defaultProps = {
  onDateClick: f => f,
};

export default DateCell;
