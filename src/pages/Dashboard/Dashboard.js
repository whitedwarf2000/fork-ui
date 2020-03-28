import React, { useState, useCallback } from 'react';
import { Switch, Route } from 'react-router-dom';
import cn from 'classnames';
import PropTypes from 'prop-types';

import LeftSidebar from './LeftSidebar';
import TopNavigation from './TopNavigation';
import loadable from '../../utils/loadable';

const CheckboxDocument = loadable(() => import('../documents/Checkbox'));
const RadioDocument = loadable(() => import('../documents/Radio'));
const SwitchDocument = loadable(() => import('../documents/Switch'));
const IconDocument = loadable(() => import('../documents/Icon'));
const ButtonDocument = loadable(() => import('../documents/Button'));
const TooltipDocument = loadable(() => import('../documents/Tooltip'));
const DrawerDocument = loadable(() => import('../documents/Drawer'));
const ModalDocument = loadable(() => import('../documents/Modal'));
const ConfirmDocument = loadable(() => import('../documents/Confirm'));
const AlertDocument = loadable(() => import('../documents/Alert'));
const NotificationDocument = loadable(() => import('../documents/Notification'));
const TimelineDocument = loadable(() => import('../documents/Timeline'));
const StepperDocument = loadable(() => import('../documents/Stepper'));
const TabsDocument = loadable(() => import('../documents/Tabs'));

require('./Dashboard.scss');

const Dashboard = ({}) => {
  const [isExpanded, setIsExpanded] = useState(false);
  const toggleExpand = useCallback(() => setIsExpanded(prev => !prev), []);

  return (
    <div id="main-admin" className="flex pr-2">
      <LeftSidebar isExpanded={isExpanded} />
      <div className="flex-1 flex flex-col">
        <TopNavigation toggleExpand={toggleExpand} isExpanded={isExpanded} />
        <div className="flex">
          <div className="flex-1">
            <Switch>
              <Route path="/document/checkbox" component={CheckboxDocument} />
              <Route path="/document/switch" component={SwitchDocument} />
              <Route path="/document/radio" component={RadioDocument} />
              <Route path="/document/icon" component={IconDocument} />
              <Route path="/document/button" component={ButtonDocument} />
              <Route path="/document/tooltip" component={TooltipDocument} />
              <Route path="/document/drawer" component={DrawerDocument} />
              <Route path="/document/modal" component={ModalDocument} />
              <Route path="/document/confirm" component={ConfirmDocument} />
              <Route path="/document/alert" component={AlertDocument} />
              <Route path="/document/notification" component={NotificationDocument} />
              <Route path="/document/timeline" component={TimelineDocument} />
              <Route path="/document/stepper" component={StepperDocument} />
              <Route path="/document/tabs" component={TabsDocument} />
            </Switch>
          </div>
        </div>
      </div>
    </div>
  )
};

Dashboard.displayName = 'Dashboard';
Dashboard.propTypes = {};
Dashboard.defaultProps = {};

export default Dashboard;
