import React, { useMemo, useState, useCallback } from 'react';
import cn from 'classnames';

import Button from '../Button';

const detectSameDate = (aDate, bDate) => {
  if (!aDate || !bDate) {
    return false;
  }

  if (aDate.getDate() !== bDate.getDate()) {
    return false;
  }

  if (aDate.getMonth() !== bDate.getMonth()) {
    return false;
  }

  if (aDate.getFullYear() !== bDate.getFullYear()) {
    return false;
  }

  return true;
};

const detectInsideRange = (startDate, endDate, selfDate) => {
  if (!startDate && !endDate) {
    return false;
  }

  if (startDate && detectSameDate(startDate, selfDate)) {
    return true;
  }

  if (endDate && detectSameDate(endDate, selfDate)) {
    return true;
  }

  return selfDate >= startDate && selfDate <= endDate;
};

const getBeginOfTheDate = (dateNumber, month, year) => {
  return new Date(year, month, dateNumber);
};

const DateCell = ({
  now,
  className,
  header,
  disabled,
  displayDate,
  dateNumber,
  onDateClick,
  startDate,
  endDate,
  children,
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

  const isNow = useMemo(() => {
    if (header || disabled) {
      return false;
    }

    return detectSameDate(now, selfDate);
  }, [header, disabled, now, selfDate]);

  const injectProps = useMemo(() => {
    if (isSelected) {
      return { color: 'primary' };
    }

    return isNow ? { color: 'primary', outlined: true } : { color: 'transparent' };
  }, [isSelected, isNow]);

  const _onDateClick = useCallback(() => onDateClick(selfDate), [selfDate, onDateClick]);

  return (
    <div className={cn('rc-calendar-date-cell', { '--header': header, '--selected': isSelected }, className)}>
      <Button
        {...injectProps}
        circle
        disabled={disabled || header}
        onClick={_onDateClick}
      >
        {children}
      </Button>
    </div>
  );
};

DateCell.defaultProps = {
  onDateClick: f => f,
};

export default DateCell;
