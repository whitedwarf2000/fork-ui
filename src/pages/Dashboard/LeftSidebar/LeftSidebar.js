import React, { useState, useMemo } from 'react';
import cn from 'classnames';
import { useHistory, useLocation } from 'react-router-dom';

import { Icon, Menu } from '../../../components/core';

require('./LeftSidebar.scss');

const mapRouter = Object.freeze({
  '/document/button': 'button',
  '/document/icon': 'icon',
  '/document/tooltip': 'tooltip',
  '/document/checkbox': 'checkbox',
  '/document/radio': 'radio',
  '/document/switch': 'switch',
  '/document/drawer': 'drawer',
  '/document/modal': 'modal',
  '/document/confirm': 'confirm',
  '/document/alert': 'alert',
  '/document/notification': 'notification',
  '/document/timeline': 'timeline',
  '/document/stepper': 'stepper',
  '/document/tabs': 'tabs',
  '/document/collapse': 'collapse',
  '/document/pagination': 'pagination',
  '/document/rater': 'rater',
  '/document/avatar': 'avatar',
  '/document/chip': 'chip',
  '/document/divider': 'divider',
  '/document/breadcrumb': 'breadcrumb',
  '/document/carousel': 'carousel',
  '/document/menu': 'menu',
  '/document/progress': 'progress',
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
          <Menu
            className="__menu"
            iconOnly={!isExpanded}
            selectedKeys={selectedKeys}
            onItemClick={key => history.push(`/document/${key}`)}
          >
            <Menu.ItemGroup title="POPULAR" key="group-popular">
              <Menu.Item icon="icons" key="icon">Icon</Menu.Item>
              <Menu.Item icon="mouse" key="button">Button</Menu.Item>
              <Menu.Item icon="table" key="table">Table</Menu.Item>
              <Menu.Item icon="scroll" key="drawer">Drawer</Menu.Item>
              <Menu.Item icon="browser" key="modal">Modal</Menu.Item>
              <Menu.Item icon="list-ul" key="menu">Menu</Menu.Item>
              <Menu.Item icon="pager"key="tabs">Tabs</Menu.Item>
              <Menu.Item icon="caret-down" key="collapse">Collapse</Menu.Item>
            </Menu.ItemGroup>
            <Menu.Sub key="sub-components" title="Components" icon="desktop">
              <Menu.Item key="checkbox" icon="angle-right" titleOnly="Checkbox">Checkbox</Menu.Item>
              <Menu.Item key="radio" icon="angle-right" titleOnly="Radio">Radio</Menu.Item>
              <Menu.Item key="swicth" icon="angle-right" titleOnly="Swicth">Swicth</Menu.Item>
              <Menu.Item key="breadcrumb" icon="angle-right" titleOnly="Breadcrumb">Breadcrumb</Menu.Item>
              <Menu.Item key="avatar" icon="angle-right" titleOnly="Avatar">Avatar</Menu.Item>
              <Menu.Item key="carousel" icon="angle-right" titleOnly="Carousel">Carousel</Menu.Item>
              <Menu.Item key="timeline" icon="angle-right" titleOnly="Timeline">Timeline</Menu.Item>
              <Menu.Item key="stepper" icon="angle-right" titleOnly="Stepper">Stepper</Menu.Item>
              <Menu.Item key="chip" icon="angle-right" titleOnly="Chip">Chip</Menu.Item>
              <Menu.Item key="divider" icon="angle-right" titleOnly="Divider">Divider</Menu.Item>
              <Menu.Item key="pagination" icon="angle-right" titleOnly="Pagination">Pagination</Menu.Item>
              <Menu.Item key="progress" icon="angle-right" titleOnly="Progress">Progress</Menu.Item>
              <Menu.Item key="rater" icon="angle-right" titleOnly="Rater">Rater</Menu.Item>
            </Menu.Sub>
            <Menu.Sub title="Form" key="sub-fom" icon="keyboard">
              <Menu.Item icon="angle-right" titleOnly="Textbox" key="textbox">Textbox</Menu.Item>
              <Menu.Item icon="angle-right" titleOnly="Password" key="password">Password</Menu.Item>
              <Menu.Item icon="angle-right" titleOnly="Textarea" key="textarea">Textarea</Menu.Item>
              <Menu.Item icon="angle-right" titleOnly="Select" key="select">Select</Menu.Item>
            </Menu.Sub>
            <Menu.Sub title="Overlay" key="sub-overlay" icon="bell">
              <Menu.Item icon="angle-right" titleOnly="Confirm" key="confirm">Confirm</Menu.Item>
              <Menu.Item icon="angle-right" titleOnly="Tooltip" key="tooltip">Tooltip</Menu.Item>
              <Menu.Item icon="angle-right" titleOnly="Alert" key="alert">Alert</Menu.Item>
              <Menu.Item icon="angle-right" titleOnly="Notification">Notification</Menu.Item>
            </Menu.Sub>
            <Menu.ItemGroup key="group-page" title="PAGES">
              <Menu.Item icon="power-off" key="login-page">Login Page</Menu.Item>
              <Menu.Item icon="comments" key="error-page">Error Page</Menu.Item>
              <Menu.Item icon="globe" key="register-page">Register Page</Menu.Item>
            </Menu.ItemGroup>
            <Menu.Item icon="table" key="calendar">Calendar</Menu.Item>
            <Menu.Item icon="clock" key="date-licker">Date Picker</Menu.Item>
            <Menu.Item icon="keyboard" key="editer">Editer</Menu.Item>
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
