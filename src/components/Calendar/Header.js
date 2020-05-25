import React, { useContext, useMemo } from 'react';
import cn from 'classnames';
import PropTypes from 'prop-types';

import { config } from '../ConfigProvider';
import { mMonth } from './map';

import Button from '../Button';

const Header = ({ className, displayDate, onNextMonth, onPrevMonth, onClear, onGotoNow }) => {
  const displayYear = useMemo(() => displayDate.getFullYear(), [displayDate]);
  const displayMonth = useMemo(() => displayDate.getMonth(), [displayDate]);

  return (
    <div className={cn('rc-calendar-header', className)}>
      <div>
        <span className="rc-calendar-header-month">{config.lang[mMonth[displayMonth]]}</span>
        <span className="rc-calendar-header-year">{displayYear}</span>
      </div>
      <div className="rc-calendar-header-right">
        <Button glassed circle icon="refresh" onClick={onClear} />
        <Button glassed circle icon="chevron-left" onClick={onPrevMonth} />
        <Button glassed circle icon="point" onClick={onGotoNow} />
        <Button glassed circle icon="chevron-right" onClick={onNextMonth} />
      </div>
    </div>
  )
};

export default Header;
