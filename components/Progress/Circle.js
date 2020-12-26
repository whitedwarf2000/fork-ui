import React, { useRef, useMemo } from 'react';
import cn from 'classnames';
import PropTypes from 'prop-types';

import { uniqueId } from '../../utils/helpers';

const useCalcStyle = ({ size, strokeWidth, percent }) => {
  const {
    cx,
    cy,
    radius,
    calcSize,
    strokeDasharray,
  } = useMemo(() => {
    const calcSize = size + 2 * strokeWidth;
    const cx = calcSize / 2;
    const cy = calcSize / 2;
    const radius = size / 2;

    const strokeDasharray = 2 * Math.PI * radius;

    return {
      cx,
      cy,
      radius,
      calcSize,
      strokeDasharray,
    };
  }, [size]);

  const strokeDashoffset = useMemo(() => {
    if (percent < 0) {
      return (2 * Math.PI * radius);
    }

    if (percent > 100) {
      return 4 * Math.PI * radius;
    }

    const radius = size / 2;
    return (2 * Math.PI * radius) * (1 + percent / 100);
  }, [size, percent]);

  return {
    cx,
    cy,
    radius,
    size,
    percent,
    calcSize,
    strokeWidth,
    strokeDasharray,
    strokeDashoffset,
  };
};

const CircleProgress = ({
  className,
  percent,
  style,
  size,
  strokeWidth,
  children,
  ...otherProps
}) => {
  const {
    strokeDasharray,
    strokeDashoffset,
    calcSize,
    cx,
    cy,
    radius,
  } = useCalcStyle({ size, strokeWidth, percent });

  const linearGradientId = useRef(uniqueId('circle-progress'));

  return (
    <div
      className={cn('fcircle-prog', className)}
      style={{
        ...style,
        width: calcSize,
        height: calcSize,
      }}
      {...otherProps}
    >
      <svg
        className="fcircle-prog-svg"
        width={calcSize}
        height={calcSize}
        viewBox={`0 0 ${calcSize} ${calcSize}`}
      >
        <linearGradient
          className="fcircle-prog-linear-gradient"
          id={linearGradientId.current}
          x1="0%"
          y1="0%"
          x2="100%"
          y2="0%"
        >
          <stop offset="0%" stopColor="var(--circle-progress-0)" />
          <stop offset="100%" stopColor="var(--circle-progress-100)" />
        </linearGradient>
        <circle
          cx={cx}
          cy={cy}
          r={radius}
          strokeWidth={strokeWidth}
          stroke={`url(#${linearGradientId.current})`}
          className="fcircle-prog-circle"
          style={{
            strokeDasharray: strokeDasharray,
            strokeDashoffset: strokeDashoffset,
          }}
        />
      </svg>
      {children && (
        <div className="fcircle-prog-children">
          {children}
        </div>
      )}
    </div>
  );
};

CircleProgress.displayName = 'Progress.Circle';
CircleProgress.propTypes = {
  className: PropTypes.string,
  percent: PropTypes.number,
  size: PropTypes.number,
  style: PropTypes.object,
  children: PropTypes.any,
  strokeWidth: PropTypes.number,
};
CircleProgress.defaultProps = {
  percent: 0,
  size: 120,
  strokeWidth: 120 / 30,
};

export default CircleProgress;
