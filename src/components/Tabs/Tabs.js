import React, { useMemo } from 'react';
import cn from 'classnames';
import PropTypes from 'prop-types';

import Item from './Item';
import useTabs from './useTabs';

const Tabs = ({ className, children, value, onChange, ...otherProps }) => {
  const tabs = useMemo(() => React.Children.map(children, tab => ({
    key: tab.key,
    title: tab.props.title,
    disabled: tab.props.disabled,
  })), [children]);

  return (
    <div className={cn('fui-tabs', className )} {...otherProps}>
      <div className="fui-tabs-nav">
        {tabs.map(tab => (
          <button
            key={tab.key}
            className={cn('fui-tabs-nav-item', { 'fui-tabs-nav-item--active': value === tab.key })}
            disabled={tab.disabled}
            onClick={() => onChange(tab.key)}
          >
            {tab.title}
          </button>
        ))}
        <button className="fui-tabs-nav-item fui-tabs-nav-item--rest " />
      </div>
      <div className="fui-tabs-contents">
        {React.Children.map(children, tab => React.cloneElement(tab, { active: !tab.props.disabled && value === tab.key }))}
      </div>
    </div>
  );
};

Tabs.Item = Item;
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
