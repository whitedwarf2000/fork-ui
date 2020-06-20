import React, { useMemo } from 'react';
import cn from 'classnames';
import PropTypes from 'prop-types';

import DateCell from './DateCell';

import { config } from '../ConfigProvider';

import getBeginDateOfTheMonth from '../../utils/getBeginDateOfTheMonth';
import getEndDateOfTheMonth from '../../utils/getEndDateOfTheMonth';

const getDateCount = (beginDate, endDate) => {
  const distance = endDate - beginDate;

  return {
    weeks: Math.floor(distance / (1000 * 60 * 60 * 24) / 7),
    days: Math.floor(distance / (1000 * 60 * 60 * 24)),
  };
};


const Grid = ({
  className,
  now,
  displayDate,
  startDate,
  endDate,
  onDateClick,
}) => {
  const {
    firstWeek,
    secondWeek,
    thirdWeek,
    fourthWeek,
    fivethWeek,
    sixthWeek,
  } = useMemo(() => {
    const firstWeek = [];
    const secondWeek = [];
    const thirdWeek = [];
    const fourthWeek = [];
    const fivethWeek = [];
    const sixthWeek = [];

    const beginDateOfTheMonth = getBeginDateOfTheMonth(displayDate);
    const endDateOfTheMonth = getEndDateOfTheMonth(displayDate);

    const beginDay = beginDateOfTheMonth.getDay();
    const dateCount = getDateCount(beginDateOfTheMonth, endDateOfTheMonth);

    let _number = 1;
    let _i = 0;

    do {
      if (firstWeek.length < 7) {
        if (_i < beginDay) {
          firstWeek.push(null);
          _i++;
          continue;
        }
        firstWeek.push(_number);
        _number++;
        continue;
      }

      if (secondWeek.length < 7) {
        secondWeek.push(_number);
        _number++;
        continue;
      }

      if (thirdWeek.length < 7) {
        thirdWeek.push(_number);
        _number++;
        continue;
      }

      if (fourthWeek.length < 7) {
        fourthWeek.push(_number);
        _number++;
        continue;
      }
  
      if (fivethWeek.length < 7) {
        fivethWeek.push(_number);
        _number++;
        continue;
      }
  
      if (sixthWeek.length < 7) {
        sixthWeek.push(_number);
        _number++;
        continue;
      }
    } while(_number <= dateCount.days);

    // checking
    if (fivethWeek.length && fivethWeek.length < 7) {
      const more = 7 - fivethWeek.length
      for (let i = 0; i < more; i++) {
        fivethWeek.push(null);
      }
    }

    if (sixthWeek.length && sixthWeek.length < 7) {
      const more = 7 - sixthWeek.length
      for (let i = 0; i < more; i++) {
        sixthWeek.push(null);
      }
    }

    return {
      firstWeek,
      secondWeek,
      thirdWeek,
      fourthWeek,
      fivethWeek,
      sixthWeek,
      dateCount,
    };
  }, [displayDate]);

  return (
    <div className={cn('fui-calendar-grid', className)}>
      <div className="fui-calendar-grid-row">
        <DateCell header>{config.lang.sun}</DateCell>
        <DateCell header>{config.lang.mon}</DateCell>
        <DateCell header>{config.lang.tue}</DateCell>
        <DateCell header>{config.lang.wed}</DateCell>
        <DateCell header>{config.lang.thu}</DateCell>
        <DateCell header>{config.lang.fri}</DateCell>
        <DateCell header>{config.lang.sat}</DateCell>
      </div>
      <div className="fui-calendar-grid-row fui-calendar-grid-row--first-week">
        {firstWeek.map((number, index) => (
          <DateCell
            key={number || `_${index}`}
            disabled={!number}
            displayDate={displayDate}
            dateNumber={number}
            onDateClick={onDateClick}
            startDate={startDate}
            endDate={endDate}
            now={now}
          >
            {number}
          </DateCell>
        ))}
      </div>
      <div className="fui-calendar-grid-row fui-calendar-grid-row--second-week">
        {secondWeek.map((number) => (
          <DateCell
            key={number}
            displayDate={displayDate}
            dateNumber={number}
            onDateClick={onDateClick}
            startDate={startDate}
            endDate={endDate}
            now={now}
          >
            {number}
          </DateCell>
        ))}
      </div>
      <div className="fui-calendar-grid-row fui-calendar-grid-row--third-week">
        {thirdWeek.map((number) => (
          <DateCell
            key={number}
            displayDate={displayDate}
            dateNumber={number}
            onDateClick={onDateClick}
            startDate={startDate}
            endDate={endDate}
            now={now}
          >
            {number}
          </DateCell>
        ))}
      </div>
      <div className="fui-calendar-grid-row fui-calendar-grid-row--fourth-week">
        {fourthWeek.map((number) => (
          <DateCell
            key={number}
            displayDate={displayDate}
            dateNumber={number}
            onDateClick={onDateClick}
            startDate={startDate}
            endDate={endDate}
            now={now}
          >
            {number}
          </DateCell>
        ))}
      </div>
      {!!fivethWeek.length && (
        <div className="fui-calendar-grid-row fui-calendar-grid-row--fiveth-week">
          {fivethWeek.map((number, index) => (
            <DateCell
              key={number || `_${index}`}
              disabled={!number}
              displayDate={displayDate}
              dateNumber={number}
              onDateClick={onDateClick}
              startDate={startDate}
              endDate={endDate}
              now={now}
            >
              {number}
            </DateCell>
          ))}
        </div>
      )}

      {!!sixthWeek.length && (
        <div className="fui-calendar-grid-row fui-calendar-grid-row--sixth-week">
          {sixthWeek.map((number, index) => (
            <DateCell
              key={number || `_${index}`}
              disabled={!number}
              displayDate={displayDate}
              dateNumber={number}
              onDateClick={onDateClick}
              startDate={startDate}
              endDate={endDate}
              now={now}
            >
              {number}
            </DateCell>
          ))}
        </div>
      )}
    </div>
  )
};

export default Grid;
