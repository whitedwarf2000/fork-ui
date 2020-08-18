import React from 'react';
import cn from 'classnames';
import PropTypes from 'prop-types';


const Item = ({ className, children, icon, ...otherProps }) => {
  return (
    <div className={cn('fui-timeline-item', className)} {...otherProps}>
      <div className="fui-timeline-item-rail" />
      <div className="fui-timeline-item-stone-icon">
        {icon}
      </div>
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
