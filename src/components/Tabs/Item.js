import React from 'react';
import cn from 'classnames';
import PropTypes from 'prop-types';

require('./Item.scss');

const Item = ({ className, active, ...otherProps }) => {
  return (
    <div className={cn('rc-tab', { '--active': active }, className)} {...otherProps} />
  );
};

Item.displayName = 'Tabs.Item';
Item.propTypes = {
  className: PropTypes.string,
};
Item.defaultProps = {};

export default Item;
