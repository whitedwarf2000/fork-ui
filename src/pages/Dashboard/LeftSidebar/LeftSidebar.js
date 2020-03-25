import React, { useState } from 'react';
import cn from 'classnames';
import { Icon, Menu } from '../../../components/core';

require('./LeftSidebar.scss');

const LeftSidebar = ({ isExpanded, ...otherProps }) => {
  return (
    <div className={cn('left-sidebar-container', { '--expanded': isExpanded })}>
      <div className="left-sidebar">
        <Menu className="__menu" iconOnly={!isExpanded}>
          <Menu.Sub title="General" icon="comments">
            <Menu.Item icon="power-off">Color</Menu.Item>
            <Menu.Item icon="table">Icon</Menu.Item>
            <Menu.Item icon="heart">Button</Menu.Item>
          </Menu.Sub>
        </Menu>
      </div>
    </div>
  );
};

LeftSidebar.defaultProps = {
  isExpanded: false,
};

export default LeftSidebar;
