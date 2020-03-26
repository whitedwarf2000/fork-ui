import React, { useState, useMemo } from 'react';
import cn from 'classnames';
import { useHistory, useLocation } from 'react-router-dom';

import { Icon, Menu } from '../../../components/core';

require('./LeftSidebar.scss');

const mapRouter = Object.freeze({
  '/document/button': 'button',
  '/document/icon': 'icon',
});

const LeftSidebar = ({ isExpanded, ...otherProps }) => {
  const history = useHistory();
  const location = useLocation();
  const selectedKeys = useMemo(() => [mapRouter[location.pathname]], [location.pathname]);

  return (
    <div className={cn('left-sidebar-container', { '--expanded': isExpanded })}>
      <div className={cn('left-sidebar-wrapper', { '--expanded': isExpanded } )}>
        <div className={cn('left-sidebar', { '--expanded': isExpanded } )} {...otherProps}>
          <div className="__logo">
            <Icon name="home" style={{ fontSize: '1.75rem' }} onClick={() => history.push('/')} />
          </div>
          <Menu className="__menu" iconOnly={!isExpanded} selectedKeys={selectedKeys}>
            <Menu.ItemGroup title="COMMON" key="group-common">
              <Menu.Item icon="icons" key="icon" onClick={() => history.push('/document/icon')}>Icon</Menu.Item>
              <Menu.Item icon="mouse" key="button" onClick={() => history.push('/document/button')}>Button</Menu.Item>
            </Menu.ItemGroup>
            <Menu.ItemGroup title="Form" key="group-fom">
              <Menu.Item icon="copy" key="textbox">Textbox</Menu.Item>
              <Menu.Item icon="cog" key="password">Password</Menu.Item>
              <Menu.Item icon="clock" key="textarea">Textarea</Menu.Item>
              <Menu.Item icon="keyboard" key="select">Select</Menu.Item>
            </Menu.ItemGroup>
            <Menu.ItemGroup title="Overlay" key="group-overlay">
              <Menu.Item icon="copy" key="confirm">Confirm</Menu.Item>
              <Menu.Item icon="cog" key="tooltip">Tooltip</Menu.Item>
              <Menu.Item icon="clock" key="drawer">Drawer</Menu.Item>
              <Menu.Item icon="keyboard" key="alert">Alert</Menu.Item>
              <Menu.Item icon="bell" key="notification">Notification</Menu.Item>
              <Menu.Item icon="desktop" key="modal">Modal</Menu.Item>
            </Menu.ItemGroup>
            <Menu.ItemGroup title="DATA DISPLAY" key="group-data-display">
              <Menu.Item icon="table" key="table">Table</Menu.Item>
              <Menu.Item icon="clock" key="timeline">Timeline</Menu.Item>
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
