import React, { useMemo } from 'react';
import cn from 'classnames';

import { config } from '../ConfigProvider';
import ChevronLeft from '../icons/all/ChevronLeft';
import ChevronRight from '../icons/all/ChevronRight';
import Refresh from '../icons/all/Refresh';
import { mMonth } from './map';

import Button from '../Button';

const Header = ({ className, displayDate, onNextMonth, onPrevMonth, onClear, hiddenRefresh }) => {
  const displayYear = useMemo(() => displayDate.getFullYear(), [displayDate]);
  const displayMonth = useMemo(() => displayDate.getMonth(), [displayDate]);

  return (
    <div className={cn('fui-calendar-header', className)}>
      <div>
        <span className="fui-calendar-header-month">{config.lang[mMonth[displayMonth]]}</span>
        <span className="fui-calendar-header-year">{displayYear}</span>
      </div>
      <div className="fui-calendar-header-right">
        {!hiddenRefresh && <Button glassed circle icon={<Refresh />} onClick={onClear} />}
        <Button glassed circle icon={<ChevronLeft />} onClick={onPrevMonth} />
        <Button glassed circle icon={<ChevronRight />} onClick={onNextMonth} />
      </div>
    </div>
  )
};

export default Header;
