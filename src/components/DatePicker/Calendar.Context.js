import React from 'react';

const now = new Date(Date.now());

export default React.createContext({
  displayDate: now,
  startDate: null,
  endDate: null,
  onNextMonth: f => f,
  onPrevMonth: f => f,
  onDateClick: f => f,
});
