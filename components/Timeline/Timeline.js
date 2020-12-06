import React from 'react';
import cn from 'classnames';
import PropTypes from 'prop-types';

import Item from './Item';

const Timeline = ({ className, children, right, reverse, ...otherProps }) => {
  return (
    <div className={cn('ftimeline', { 'ftimeline-r': right, 'ftimeline-reverse': reverse }, className)} {...otherProps}>
      {children}
    </div>
  );
}

Timeline.Item = Item;

Timeline.displayName = 'Timeline';
Timeline.propTypes = {
  className: PropTypes.string,
  children: PropTypes.any,
  right: PropTypes.bool,
  reverse: PropTypes.bool,
};
Timeline.defaultProps = {};

export default Timeline;
