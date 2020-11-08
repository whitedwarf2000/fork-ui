import React, { useMemo } from 'react';
import cn from 'classnames';
import PropTypes from 'prop-types';

import Tab from './Tab';
import useTabs from './useTabs';

const Tabs = ({ className, ...otherProps }) => {
  return (
    <div className={cn('ftabs', className )} {...otherProps} />
  );
};

Tabs.Tab = Tab;
Tabs.useTabs = useTabs;

Tabs.displayName = 'Tabs';
Tabs.propTypes = {
  className: PropTypes.string,
  value: PropTypes.string,
  onChange: PropTypes.func,
};
Tabs.defaultProps = {
  onChange: f => f,
};

export default Tabs;
