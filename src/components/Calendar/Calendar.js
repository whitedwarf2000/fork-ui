import React from 'react';
import cn from 'classnames';
import PropTypes from 'prop-types';

import Header from './Header';
import Grid from './Grid';

import CalendarProvider from './CalendarProvider';

const Calendar = ({ className, ...otherProps }) => {
  return (
    <CalendarProvider>
      <div className={cn('rc-calendar', className)} {...otherProps}>
        <Header />
        <Grid />
      </div>
    </CalendarProvider>
  );
};

export default Calendar;
