import React from 'react';
import cn from 'classnames';
import PropTypes from 'prop-types';
import { Clock } from '../icons';
import Tooltip from '../Tooltip';

const Item = ({ className, children, icon, tooltipTitle, ...otherProps }) => {
  return (
    <div className={cn('ftimeline-item', className)} {...otherProps}>
      <div className="ftimeline-item-rail" />
      <Tooltip top title={tooltipTitle}>
        <div className="ftimeline-item-stone-icon">
          {icon}
        </div>
      </Tooltip>
      <div className="ftimeline-item-content">
        {children}
      </div>
    </div>
  );
}

Item.displayName = 'Timeline.Item';
Item.propTypes = {
  className: PropTypes.string,
  children: PropTypes.any,
  icon: PropTypes.any,
  tooltipTitle: PropTypes.any,
};
Item.defaultProps = {
  icon: <Clock />,
};

export default Item;
