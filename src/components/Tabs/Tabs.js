import React from 'react';
import cn from 'classnames';
import PropTypes from 'prop-types';

import Item from './Item';

require('./Tabs.scss');

const injectDataToChildren = (children, injection) => {
  return React.cloneElement(children, {
    ...children.props,
    ...injection
  });
};

class Tabs extends React.Component {
  static getDerivedStateFromProps(props, state) {
    return {
      tabs: React.Children.map(props.children, tab => ({
        key: tab.key,
        title: tab.props.title,
        disabled: tab.props.disabled,
      })),
    };
  }

  constructor(props) {
    super(props);
    this.memo = {};
  }

  componentDidMount() {
    this.memo[this.props.activeTab] = true;
  }

  componentDidUpdate() {
    this.memo[this.props.activeTab] = true;
  }

  render() {
    const { className, children, activeTab, onChange, fluid } = this.props;
    const { tabs } = this.state;

    return (
      <div className={cn('rc-tabs', { '--fluid': fluid }, className)}>
        <div className="rc-tabs-nav">
          {tabs.map(tab => (
            <button
              className={cn('rc-tabs-nav-item', { '--active': activeTab === tab.key })}
              disabled={tab.disabled}
              onClick={() => onChange(tab.key)}
            >
              {tab.title}
            </button>
          ))}
        </div>
       <div className="rc-tabs-contents">
         {React.Children.map(children, elm => {
           if (this.memo[elm.key]) {
            return injectDataToChildren(elm, {
              active: activeTab === elm.key,
            });
           }

           if (activeTab === elm.key) {
            return injectDataToChildren(elm, {
              active: activeTab === elm.key,
            });
           }
           return null;
         })}
       </div>
      </div>
    );
  }
}

Tabs.Item = Item;

Tabs.displayName = 'Tabs';
Tabs.propTypes = {
  className: PropTypes.string,
  activeTab: PropTypes.string,
  onChange: PropTypes.func,
  fluid: PropTypes.bool,
};
Tabs.defaultProps = {
  onChange: f => f,
};

export default Tabs;
