import React, { useState, useMemo, useCallback } from 'react';
import Context from './Context';

import getBeginDateOfTheNextMonth from './utils/getBeginDateOfTheNextMonth';
import getBeginDateOfThePrevMonth from './utils/getBeginDateOfThePrevMonth';

export default ({ children }) => {
  const [displayDate, setDisplayDate] = useState(new Date(Date.now()));
  const [selectedDate, setSelectedDate] = useState([new Date(Date.now())]);

  const onNextMonth = useCallback(() => setDisplayDate(prev => getBeginDateOfTheNextMonth(prev)), [setDisplayDate]);
  const onPrevMonth = useCallback(() => setDisplayDate(prev => getBeginDateOfThePrevMonth(prev)), [setDisplayDate]);

  return (
    <Context.Provider
      value={{
        displayDate,
        selectedDate,
        onNextMonth,
        onPrevMonth,
        selectedDate,
      }}
    >
      {children}
    </Context.Provider>
  );
};
