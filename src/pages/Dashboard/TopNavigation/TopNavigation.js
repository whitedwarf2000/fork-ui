import React from 'react';
import cn from 'classnames';
import { Button, Icon, Avatar } from '../../../components/core';
import DarkModeToggle from '../../../components/DarkModeToggle';

require('./TopNavigation.scss');

const TopNavigation = ({ toggleExpand, isExpanded }) => {
  return (
    <div className={cn('top-navigation-container', { '--expanded': isExpanded })}>
      <div className={cn('top-navigation-wrapper', { '--expanded': isExpanded })}>
        <div className={cn('top-navigation', { '--expanded': isExpanded })}>
          <div className="__left">
            <Icon name="bars" onClick={toggleExpand} />
            <Icon name="search" className="ml-8" />
          </div>
          <div className="__right">
            <DarkModeToggle className="mr-5" />
            <Icon name="bell" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default TopNavigation;
