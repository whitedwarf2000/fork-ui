import React, { useMemo, useState, useCallback } from 'react';
import cn from 'classnames';

import Button from '../Button';

const detectSameDate = (aDate, bDate) => {
  if (!aDate || !bDate) {
    return false;
  }

  if (Math.abs((aDate - bDate) / 1000) > 24 * 60 * 60) {
    return false;
  }

  return aDate.getDate() === bDate.getDate();
};

const getBeginOfTheDate = (dateNumber, month, year) => {
  return new Date(year, month, dateNumber);
};

const DateCell = ({
  className,
  header,
  disabled,
  selectedDate,
  displayDate,
  dateNumber,
  onDateClick,
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
    return detectSameDate(selectedDate[0], selfDate);
  }, [header, disabled, selectedDate[0], selfDate]);

  const color = useMemo(() => isSelected ? 'primary' : 'transparent', [isSelected]);
  const _onDateClick = useCallback(() => onDateClick(selfDate), [selfDate]);

  return (
    <div className={cn('rc-calendar-date-cell', { '--header': header, '--selected': isSelected }, className)}>
      <Button color={color} circle {...otherProps} disabled={disabled || header} onClick={_onDateClick} />
    </div>
  );
};

DateCell.defaultProps = {
  selectedDate: [],
  onDateClick: f => f,
};

export default DateCell;
