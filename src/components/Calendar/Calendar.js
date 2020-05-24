import React from 'react';
import cn from 'classnames';
import PropTypes from 'prop-types';

import Header from './Header';
import Grid from './Grid';

const Calendar = ({
  className,
  displayDate,
  selectedDate,
  onNextMonth,
  onPrevMonth,
  onDateClick,
  ...otherProps
}) => {
  return (
    <div className={cn('rc-calendar', className)} {...otherProps}>
      <Header displayDate={displayDate} onNextMonth={onNextMonth} onPrevMonth={onPrevMonth} />
      <Grid displayDate={displayDate} onDateClick={onDateClick} selectedDate={selectedDate} />
    </div>
  );
};

export default Calendar;
