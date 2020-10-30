import React, { useMemo } from 'react';
import cn from 'classnames';
import PropTypes from 'prop-types';

const Counter = ({
  className,
  count,
  overflowCount,
  color,
  size,
  ...otherProps
}) => {
  const displayCount = useMemo(() => {
    if (count > overflowCount) {
      return `${overflowCount} +`;
    }

    return count;
  } ,[count, overflowCount]);

  return (
    <sub
      style={{
        backgroundColor: color,
        fontSize: size,
      }}
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
  overflowCount: PropTypes.number,
};

Counter.defaultProps = {
  overflowCount: Infinity,
};

export default Counter;
