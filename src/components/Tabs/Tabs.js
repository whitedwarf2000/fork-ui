import React, { useMemo, useEffect, useState, useCallback } from 'react';
import cn from 'classnames';
import PropTypes from 'prop-types';

import Item from './Item';
import useDetectRendered from '../../hooks/useDetectRendered';

const Tabs = ({ className, children, onActiveTabChange, defaultActiveTab, underline, ...otherProps }) => {
  const isRendered = useDetectRendered();
  const tabs = useMemo(() => React.Children.map(children, tab => ({
    key: tab.key,
    title: tab.props.title,
    disabled: tab.props.disabled,
  })), [children]);

  const [activeTab, setActiveTab] = useState(defaultActiveTab);
  const _onActiveTabChange = useCallback(tabKey => setActiveTab(tabKey), [setActiveTab]);

  useEffect(() => {
    if (isRendered) {
      onActiveTabChange(activeTab);
    }
  }, [isRendered, activeTab, onActiveTabChange]);

  return (
    <div className={cn('fui-tabs', { 'fui-tabs--underline': underline }, className )}>
      <div className="fui-tabs-nav">
        {tabs.map(tab => (
          <button
            key={tab.key}
            className={cn('fui-tabs-nav-item', { 'fui-tabs-nav-item--active': activeTab === tab.key })}
            disabled={tab.disabled}
            onClick={() => _onActiveTabChange(tab.key)}
          >
            {tab.title}
          </button>
        ))}
        <button className="fui-tabs-nav-item fui-tabs-nav-item--rest " />
      </div>
      <div className="fui-tabs-contents">
        {React.Children.map(children, tab => React.cloneElement(tab, { active: !tab.props.disabled && activeTab === tab.key }))}
      </div>
    </div>
  );
};

Tabs.Item = Item;

Tabs.displayName = 'Tabs';
Tabs.propTypes = {
  className: PropTypes.string,
  defaultActiveTab: PropTypes.string,
  onActiveTabChange: PropTypes.func,
  underline: PropTypes.bool,
};
Tabs.defaultProps = {
  onActiveTabChange: f => f,
};

export default Tabs;
