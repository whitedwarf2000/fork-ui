import React from 'react';
import cn from 'classnames';
import PropTypes from 'prop-types';

import Item from './Item';

require('./Tabs.scss');

class Tabs extends React.Component {
  componentDidMount() {
    if (this.props.for) {
      this.memo = true;
      this.childrenNode = ReactDOM.findDOMNode(this);
    }
  }

  shouldComponentUpdate() {
    return true;
  }

  componentDidUpdate() {
    this.childrenNode = this.childrenNode ||  ReactDOM.findDOMNode(this);

    if (this.props.for) {
      this.memo = true;
      this.childrenNode = this.childrenNode ||  ReactDOM.findDOMNode(this);

      this.childrenNode.style.display = null;
    } else {
      this.childrenNode = this.childrenNode ||  ReactDOM.findDOMNode(this);
      this.childrenNode.style.display = 'none';
    }
  }

  render() {
    if (this.props.for || this.memo) {
      return this.props.children;
    }

    return null;
  }
}

Tabs.Item = Item;

Tabs.displayName = 'Tabs';
Tabs.propTypes = {
  for: PropTypes.bool,
};
Tabs.defaultProps = {};

export default Tabs;
