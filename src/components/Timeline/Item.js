import React from 'react';
import cn from 'classnames';
import PropTypes from 'prop-types';

import Icon from '../Icon';

const Item = ({ className, children, icon, ...otherProps }) => {
  return (
    <div className={cn('fui-timeline-item', className)} {...otherProps}>
      <div className="fui-timeline-item-rail" />
      <Icon
        name={icon}
        className="fui-timeline-item-stone-icon"
        size="1.25em"
      />
      <div className="fui-timeline-item-content">
        {children}
      </div>
    </div>
  );
}

Item.displayName = 'Timeline.Item';
Item.propTypes = {
  className: PropTypes.string,
  children: PropTypes.any,
  icon: PropTypes.string,
};
Item.defaultProps = {
  icon: 'clock',
};

export default Item;
