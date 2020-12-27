import React, { useMemo } from 'react';
import cn from 'classnames';
import PropTypes from 'prop-types';

const defaultSize = 120; // sync to css

const useCalcStrokeDashoffset = ({ size, percent }) => {
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

  return strokeDashoffset;
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
  const strokeDashoffset = useCalcStrokeDashoffset({
    percent,
    size: size || defaultSize,
  });

  return (
    <div
      className={cn('fcircle-prog', className)}
      style={{
        ...style,
        '--circle-progress-size': size ? `${size}px` : undefined,
        '--circle-progress-stroke-width': strokeWidth ? `${strokeWidth}px` : undefined,
        '--circle-progress-color': color,
        '--circle-progress-bg-color': backgroundColor,
        '--circle-progress-rail-color': railColor,
      }}
      {...otherProps}
    >
      <svg className="fcircle-prog-svg">
        {linearGradient}
        <circle className="fcircle-prog-rail" />
        <circle
          className="fcircle-prog-value"
          style={{
            strokeDashoffset: strokeDashoffset,
          }}
        />
      </svg>
      <div className="fcircle-prog-children">
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
};

export default CircleProgress;
