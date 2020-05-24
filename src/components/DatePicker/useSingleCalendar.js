import { useState, useCallback, useEffect, useMemo } from 'react';
import getBeginDateOfTheNextMonth from '../../utils/getBeginDateOfTheNextMonth';
import getBeginDateOfThePrevMonth from '../../utils/getBeginDateOfThePrevMonth';

export default (defaultDisplayDate, value) => {
  const [displayDate, setDisplayDate] = useState(defaultDisplayDate);
  const selectedDate = useMemo(() => [value], [value]);

  const onNextMonth = useCallback(() => setDisplayDate(prev => getBeginDateOfTheNextMonth(prev)), [setDisplayDate]);
  const onPrevMonth = useCallback(() => setDisplayDate(prev => getBeginDateOfThePrevMonth(prev)), [setDisplayDate]);

  return {
    displayDate,
    setDisplayDate,
    selectedDate,
    onNextMonth,
    onPrevMonth,
  };
};
