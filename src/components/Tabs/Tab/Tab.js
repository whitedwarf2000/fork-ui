import React from 'react';
import cn from 'classnames';

require('./Tab.scss');

const Tab = ({ className, label, children }) => {
  return (
    <div className={cn('rc-tab', className)}>
      {children}
    </div>
  );
};

export default Tab;
