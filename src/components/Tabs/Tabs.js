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
    <div className={cn('ftabs', className )} {...otherProps}>
      <div className="ftabs-nav">
        {tabs.map(tab => (
          <button
            key={tab.key}
            className={cn('ftabs-nav-item', { 'ftabs-nav-item-active': value === tab.key })}
            disabled={tab.disabled}
            onClick={() => onChange(tab.key)}
          >
            {tab.title}
          </button>
        ))}
        <button className="ftabs-nav-item ftabs-nav-item-rest " />
      </div>
      <div className="ftabs-contents">
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
