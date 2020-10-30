import React, { useState, useMemo } from 'react';
import cn from 'classnames';
import PropTypes from 'prop-types';

import { Star } from '../icons';
import useRater from './useRater';

const isLighted = (currentStarHover, idx, star) => (currentStarHover >= idx + 1) || (currentStarHover === 'outside' && star >= idx + 1);

const Rater = ({ className, max, starRef, icon, star, onChange, size, style, ...otherProps }) => {
  const [currentStarHover, setCurrentStarHover] = useState('outside');

  const stars = useMemo(() => {
    const rs = [];
    for (let i = 0; i < max; i++) {
      rs.push(
        <div
          key={i}
          className={cn('frater-item', { 'frater-item-light': isLighted(currentStarHover, i, star) })}
          onMouseEnter={() => setCurrentStarHover(i + 1)}
          onClick={() => onChange(i + 1)}
        >
          {icon}
        </div>
      );
    }
    return rs;
  }, [star, currentStarHover, max]);

  return (
    <div
      className={cn('frater', className)}
      ref={starRef}
      onMouseLeave={() => setCurrentStarHover('outside')}
      style={{
        ...style,
        fontSize: size,
      }}
      {...otherProps}
    >
      {stars}
    </div>
  );
};

Rater.displayName = 'Rater';
Rater.useRater = useRater;

Rater.propTypes = {
  icon: PropTypes.string,
  max: PropTypes.number,
  onChange: PropTypes.func,
  className: PropTypes.string,
  starRef: PropTypes.any,
  star: PropTypes.number,
  style: PropTypes.object,
  size: PropTypes.string,
};
Rater.defaultProps = {
  icon: <Star />,
  max: 5,
  onChange: f => f,
};

export default Rater;
