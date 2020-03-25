import React, { useState } from 'react';
import cn from 'classnames';
import { useHistory } from 'react-router-dom';

import { Icon, Menu } from '../../../components/core';

require('./LeftSidebar.scss');

const LeftSidebar = ({ isExpanded, ...otherProps }) => {
  const history = useHistory();

  return (
    <div className={cn('left-sidebar-container', { '--expanded': isExpanded })}>
      <div className={cn('left-sidebar-wrapper', { '--expanded': isExpanded } )}>
        <div className={cn('left-sidebar', { '--expanded': isExpanded } )} {...otherProps}>
          <div className="__logo">
            <Icon name="home" style={{ fontSize: '1.75rem' }} onClick={() => history.push('/')} />
          </div>
          <Menu className="__menu" iconOnly={!isExpanded}>
            <Menu.ItemGroup title="COMMON">
              <Menu.Item icon="clock">Color</Menu.Item>
              <Menu.Item icon="copy" onClick={() => history.push('/document/icon')}>Icon</Menu.Item>
              <Menu.Item icon="cog">Button</Menu.Item>
            </Menu.ItemGroup>
            <Menu.ItemGroup title="Form">
              <Menu.Item icon="copy">Textbox</Menu.Item>
              <Menu.Item icon="cog">Password</Menu.Item>
              <Menu.Item icon="clock">Textarea</Menu.Item>
              <Menu.Item icon="keyboard">Select</Menu.Item>
            </Menu.ItemGroup>
            <Menu.ItemGroup title="Overlay">
              <Menu.Item icon="copy">Confirm</Menu.Item>
              <Menu.Item icon="cog">Tooltip</Menu.Item>
              <Menu.Item icon="clock">Drawer</Menu.Item>
              <Menu.Item icon="keyboard">Alert</Menu.Item>
              <Menu.Item icon="bell">Notification</Menu.Item>
              <Menu.Item icon="desktop">Modal</Menu.Item>
            </Menu.ItemGroup>
            <Menu.ItemGroup title="DATA DISPLAY">
              <Menu.Item icon="table">Table</Menu.Item>
              <Menu.Item icon="clock">Timeline</Menu.Item>
            </Menu.ItemGroup>
          </Menu>
        </div>
      </div>
    </div>
  );
};

LeftSidebar.defaultProps = {
  isExpanded: false,
};

export default LeftSidebar;
