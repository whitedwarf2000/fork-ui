import React, { useState, useCallback } from 'react';
import Calendar from './Calendar';
import useSingleCalendar from './useSingleCalendar';

const Provider = ({ children, defaultDisplayDate, ...otherProps }) => {
  const [value, setValue] = useState(new Date(Date.now()));
  const { displayDate, selectedDate, onNextMonth, onPrevMonth } = useSingleCalendar(defaultDisplayDate, value);

  const onDateClick = useCallback(_val => setValue(_val), [setValue]);

  return (
    <Calendar.Context.Provider
      value={{
        displayDate,
        selectedDate,
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
