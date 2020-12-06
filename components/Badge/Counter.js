import React, { useMemo } from 'react';
import cn from 'classnames';
import PropTypes from 'prop-types';

const Counter = ({
  className,
  count,
  overflow,
  color,
  renderOverflow,
  ...otherProps
}) => {
  const displayCount = useMemo(() => {
    if (count > overflow) {
      return renderOverflow(overflow);
    }

    return count;
  } ,[count, overflow, renderOverflow]);

  return (
    <sub
      style={{ backgroundColor: color }}
      className={cn('fbadge-ui fbadge-counter', className)}
      {...otherProps}
    >
      <b>{displayCount}</b>
    </sub>
  );
};

Counter.displayName = 'Badge.Counter';
Counter.propTypes = {
  className: PropTypes.string,
  color: PropTypes.string,
  count: PropTypes.number.isRequired,
  overflow: PropTypes.number,
  renderOverflow: PropTypes.func,
};

Counter.defaultProps = {
  overflow: Infinity,
  renderOverflow: overflow => `${overflow}+`,
};

export default Counter;
