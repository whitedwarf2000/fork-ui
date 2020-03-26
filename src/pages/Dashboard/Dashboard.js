import React, { useState, useCallback } from 'react';
import { Switch, Route } from 'react-router-dom';
import cn from 'classnames';
import PropTypes from 'prop-types';

import LeftSidebar from './LeftSidebar';
import TopNavigation from './TopNavigation';
import loadable from '../../utils/loadable';

const ColorDocument = loadable(() => import('../documents-2/ColorDocument'));
const IconDocument = loadable(() => import('../documents-2/IconDocument'));
const ButtonDocument = loadable(() => import('../documents-2/ButtonDocument'));

require('./Dashboard.scss');

const Dashboard = ({}) => {
  const [isExpanded, setIsExpanded] = useState(false);
  const toggleExpand = useCallback(() => setIsExpanded(prev => !prev), []);

  return (
    <div id="main-admin" className="flex">
      <LeftSidebar isExpanded={isExpanded} />
      <div className="flex-1 flex flex-col">
        <TopNavigation toggleExpand={toggleExpand} isExpanded={isExpanded} />
        <div className="flex">
          <div className="flex-1">
            <Switch>
              <Route exact path="/document/colors">
                <ColorDocument />
              </Route>
              <Route exact path="/document/icon">
                <IconDocument />
              </Route>
              <Route exact path="/document/button">
                <ButtonDocument />
              </Route>
            </Switch>
          </div>
          <div style={{ width: '20rem' }}></div>
        </div>
      </div>
    </div>
  )
};

Dashboard.displayName = 'Dashboard';
Dashboard.propTypes = {};
Dashboard.defaultProps = {};

export default Dashboard;
