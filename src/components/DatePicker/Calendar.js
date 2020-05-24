import React, { useContext } from 'react';
import Calendar from '../Calendar';
import Context from './Calendar.Context';

const EnhancerCalendar = ({}) => {
  const props = useContext(Context);

  return (
    <Calendar {...props} />
  );
};

EnhancerCalendar.Context = Context;

export default EnhancerCalendar;
