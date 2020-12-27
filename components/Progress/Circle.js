import React, { useMemo } from 'react';
import cn from 'classnames';
import PropTypes from 'prop-types';

const useCalcStyle = ({ size, strokeWidth, percent }) => {
  const {
    cx,
    cy,
    radius,
    calcSize,
    calcStrokeWidth,
    strokeDasharray,
  } = useMemo(() => {
    const calcStrokeWidth = strokeWidth || size / 30;
    const calcSize = size + 2 * calcStrokeWidth;
    const cx = calcSize / 2;
    const cy = calcSize / 2;
    const radius = size / 2;

    const strokeDasharray = 2 * Math.PI * radius;

    return {
      cx,
      cy,
      radius,
      calcSize,
      calcStrokeWidth,
      strokeDasharray,
    };
  }, [size, strokeWidth]);

  const strokeDashoffset = useMemo(() => {
    const radius = size / 2;
    if (percent < 0) {
      return (2 * Math.PI * radius);
    }

    if (percent > 100) {
      return 4 * Math.PI * radius;
    }

    return (2 * Math.PI * radius) * (1 + percent / 100);
  }, [size, percent]);

  return {
    cx,
    cy,
    radius,
    size,
    percent,
    calcSize,
    calcStrokeWidth,
    strokeWidth,
    strokeDasharray,
    strokeDashoffset,
  };
};

const CircleProgress = ({
  className,
  percent,
  style,
  color,
  railColor,
  backgroundColor,
  size,
  strokeWidth,
  linearGradient,
  children,
  ...otherProps
}) => {
  const {
    strokeDasharray,
    strokeDashoffset,
    calcSize,
    calcStrokeWidth,
    cx,
    cy,
    radius,
  } = useCalcStyle({ size, strokeWidth, percent });

  return (
    <div
      className={cn('fcircle-prog', className)}
      style={{
        ...style,
        width: calcSize,
        height: calcSize,
        '--circle-progress-size': `${size}px`,
        '--circle-progress-color': color,
      }}
      {...otherProps}
    >
      <svg
        className="fcircle-prog-svg"
        width={calcSize}
        height={calcSize}
        viewBox={`0 0 ${calcSize} ${calcSize}`}
      >
        {linearGradient}
        {railColor && (
          <circle
            cx={cx}
            cy={cy}
            r={radius}
            strokeWidth={calcStrokeWidth}
            stroke={railColor}
            fill="none"
            className="fcircle-prog-circle-rail"
          />
        )}
        <circle
          cx={cx}
          cy={cy}
          r={radius}
          strokeWidth={calcStrokeWidth}
          stroke={color}
          strokeLinecap="round"
          fill="none"
          className="fcircle-prog-circle"
          style={{
            strokeDasharray: strokeDasharray,
            strokeDashoffset: strokeDashoffset,
          }}
        />
      </svg>
      <div
        className="fcircle-prog-children"
        style={{
          width: size,
          height: size,
          backgroundColor: backgroundColor,
        }}
      >
        {children}
      </div>
    </div>
  );
};

CircleProgress.displayName = 'Progress.Circle';
CircleProgress.propTypes = {
  className: PropTypes.string,
  percent: PropTypes.number,
  size: PropTypes.number,
  color: PropTypes.string,
  railColor: PropTypes.oneOfType(PropTypes.string, PropTypes.bool),
  backgroundColor: PropTypes.string,
  style: PropTypes.object,
  children: PropTypes.any,
  strokeWidth: PropTypes.number,
  linearGradient: PropTypes.any,
};
CircleProgress.defaultProps = {
  percent: 0,
  size: 120,
  color: 'var(--primary)',
  railColor: 'var(--rail-color)'
};

export default CircleProgress;
