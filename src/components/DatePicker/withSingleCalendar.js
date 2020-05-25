import React, { useState, useCallback } from 'react';
import Calendar from './Calendar';
import useSingleCalendar from './useSingleCalendar';

const Provider = ({ children, defaultDisplayDate, defaultStartDate, defaultEndDate, range, ...otherProps }) => {
  const [value, setValue] = useState(new Date(Date.now()));
  const {
    displayDate,
    startDate,
    endDate,
    onNextMonth,
    onPrevMonth,
    onDateClick,
  } = useSingleCalendar(defaultDisplayDate, defaultStartDate, defaultEndDate, range);

  return (
    <Calendar.Context.Provider
      value={{
        displayDate,
        startDate,
        endDate,
        onNextMonth,
        onPrevMonth,
        onDateClick,
      }}
    >
      {children}
    </Calendar.Context.Provider>
  );
};

Provider.defaultProps = {
  defaultDisplayDate: new Date(Date.now()),
};

export default (WrappedComponent) => {
  return (props) => {
    return (
      <Provider defaultDisplayDate={props.defaultDisplayDate}>
        <WrappedComponent {...props} />
      </Provider>
    )
  }
};
