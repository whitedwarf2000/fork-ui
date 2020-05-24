import React from 'react';

const now = new Date(Date.now());

export default React.createContext({
  displayDate: now,
  selectedDate: [],
  onNextMonth: f => f,
  onPrevMonth: f => f,
  onDateClick: f => f,
});
