import { useState, useCallback, useEffect, useMemo } from 'react';
import getBeginDateOfTheNextMonth from '../../utils/getBeginDateOfTheNextMonth';
import getBeginDateOfThePrevMonth from '../../utils/getBeginDateOfThePrevMonth';

export default (
  defaultDisplayDate,
  defaultStartDate,
  defaultEndDate,
  range,
) => {
  const [displayDate, setDisplayDate] = useState(defaultDisplayDate);
  const [startDate, setStartDate] = useState(defaultStartDate);
  const [endDate, setEndDate] = useState(defaultEndDate);

  const onNextMonth = useCallback(() => setDisplayDate(prev => getBeginDateOfTheNextMonth(prev)), [setDisplayDate]);
  const onPrevMonth = useCallback(() => setDisplayDate(prev => getBeginDateOfThePrevMonth(prev)), [setDisplayDate]);

  const onDateClick = useCallback((_val) => {
    if (range) {
      return true;
    }

    setStartDate(_val);
    setEndDate(_val);
    return false;
  }, [range, setStartDate, setEndDate]);

  return {
    displayDate,
    startDate,
    endDate,
    onNextMonth,
    onPrevMonth,
    onDateClick,
  };
};
