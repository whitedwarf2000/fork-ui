import React, { useMemo, useRef, useLayoutEffect } from 'react';
import cn from 'classnames';
import PropTypes from 'prop-types';

import useSemanticProp from '../../hooks/useSemanticProp';
import { omit } from '../../utils/helpers';
import { makePlacements } from '../placements';

const mPlacements = makePlacements('fui-badge');

const lPlacements = Object.keys(mPlacements);

const Badge = ({
  className,
  children,
  dot,
  count,
  overflowCount,
  color,
  overlap,
  invisible,
  ...otherProps
}) => {
  const countRef = useRef();

  const placement = useSemanticProp('placement', otherProps, lPlacements);
  const passedProps = useMemo(() => omit(otherProps, [
    ...lPlacements,
    'placement',
  ]), [otherProps]);

  useLayoutEffect(() => {
    if (count && count > 0) {
      countRef.current.classList.add('fui-badge-count--badge-up-animation');

      const timer = setTimeout(() => countRef.current.classList.remove('fui-badge-count--badge-up-animation'), 500);

      return () => clearTimeout(timer);
    }
  }, [count]);

  const isHidden = useMemo(() => {
    if (dot && count > 0) {
      return false;
    }
    return invisible || count < 1 || !count;
  }, [dot, invisible, count]);

  const displayCount = useMemo(() => {
    if (count > overflowCount) {
      return `${overflowCount} +`;
    }

    return count;
  } ,[count, overflowCount]);

  return (
    <span
      className={cn(
        'fui-badge',
        {
          'fui-badge--dot': dot,
          'fui-badge--overlap': overlap,
        },
        mPlacements[placement] || 'fui-badge--top-right',
        className
      )}
      {...passedProps}
    >
      {children}
      <sub
        ref={countRef}
        style={{
          backgroundColor: color,
        }}
        className={cn('fui-badge-count', { 'fui-badge-count--hidden': isHidden })}
      >
        <b>{displayCount}</b>
      </sub>
    </span>
  );
};

Badge.displayName = 'Badge';
Badge.propTypes = {
  className: PropTypes.string,
  children: PropTypes.any,
  dot: PropTypes.bool,
  invisible: PropTypes.bool,
  count: PropTypes.number,
  overflowCount: PropTypes.number,
  color: PropTypes.string,
  overlap: PropTypes.bool,
  placement: PropTypes.string,
};

Badge.defaultProps = {
  overflowCount: Infinity,
};

export default Badge;
