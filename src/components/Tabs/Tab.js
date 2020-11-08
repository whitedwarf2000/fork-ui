import React from 'react';
import cn from 'classnames';
import PropTypes from 'prop-types';

const Item = ({ className, active, ...otherProps }) => {
  return (
    <div
      className={cn('ftabs-tab', { 'ftabs-tab-active': active }, className)}
      {...otherProps}
    />
  );
};

Item.displayName = 'Tabs.Item';
Item.propTypes = {
  className: PropTypes.string,
  disabled: PropTypes.bool,
  fresh: PropTypes.bool,
  title: PropTypes.any,
  active: PropTypes.bool,
};
Item.defaultProps = {};

export default Item;
