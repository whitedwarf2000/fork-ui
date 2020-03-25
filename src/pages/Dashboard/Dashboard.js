import React, { useState, useCallback } from 'react';
import cn from 'classnames';
import PropTypes from 'prop-types';

import LeftSidebar from './LeftSidebar';
import TopNavigation from './TopNavigation';

require('./Dashboard.scss');

const Dashboard = ({}) => {
  const [isExpanded, setIsExpanded] = useState(false);
  const toggleExpand = useCallback(() => setIsExpanded(prev => !prev), []);

  return (
    <div id="main-admin" className="flex">
      <LeftSidebar isExpanded={isExpanded} />
      <div className="flex-1 flex flex-col">
        <TopNavigation toggleExpand={toggleExpand} isExpanded={isExpanded} />
        <div className="">
          
        </div>
      </div>
    </div>
  )
};

Dashboard.displayName = 'Dashboard';
Dashboard.propTypes = {};
Dashboard.defaultProps = {};

export default Dashboard;
