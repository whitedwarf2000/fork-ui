import React, { useMemo, useRef, useLayoutEffect } from 'react';
import cn from 'classnames';
import PropTypes from 'prop-types';

import Icon from '../Icon';

import useSemanticProp from '../../hooks/useSemanticProp';
import { omit } from '../../utils/helpers';
import { makePlacements } from '../placements';

const mPlacements = makePlacements('fui-badge');

const lPlacements = Object.keys(mPlacements);

const renderCount = (icon, displayCount) =>{
  if (!icon) {
    return displayCount;
  }

  if (typeof icon === 'string') {
    return (
      <Icon name={icon} />
    )
  }

  return icon;
};

const Badge = ({
  className,
  children,
  icon,
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
    if (invisible) {
      return true;
    }
    if (dot || icon) {
      return false;
    }

    if (!count || count < 1) {
      return true;
    }
  }, [dot, invisible, count, icon]);

  const displayCount = useMemo(() => {
    if (!count) {
      return null;
    }
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
          'fui-badge--icon': icon,
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
        <b>{renderCount(icon, displayCount)}</b>
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
