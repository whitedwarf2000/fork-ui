import React, { useMemo, useEffect, useState } from 'react';
import cn from 'classnames';
import PropTypes from 'prop-types';

const useSupportAnimation = time => {
  const [waiting, setWaiting] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => setWaiting(false), time);
    return () => clearTimeout(timer);
  }, []);

  return waiting;
};

const CircleProgress = ({ className, percent, r }) => {
  const strokeDasharray = useMemo(() => Math.PI * 4 * r, [r]);
  const maxStrokeDashoffset = useMemo(() => 2 * strokeDasharray, [strokeDasharray]);
  const strokeDashoffset = useMemo(() => {
    const newStrokeDashoffset = strokeDasharray + (strokeDasharray * percent);
    return newStrokeDashoffset > maxStrokeDashoffset ? maxStrokeDashoffset : newStrokeDashoffset;
  }, [strokeDasharray, percent, maxStrokeDashoffset]);

  const delayAnimation = useSupportAnimation(300);

  return (
    <div
      className={cn('fcircle-prog', className)}
      style={{ width: `${4 * r + 10}px`, height: `${4 * r + 10}px`}}
    >
      <svg className="fcircle-prog-svg">
        <circle
          cx={2 * r - 5}
          cy={2 * r - 5}
          r={2 * r - 5}
          className="fcircle-prog-percent"
          style={{
            strokeWidth: `${6 * ((2 * r) / 100)}px`,
            strokeDasharray,
            strokeDashoffset: delayAnimation ? strokeDasharray : strokeDashoffset,
          }}
        />
      </svg>
      <label className="fcircle-prog-number" style={{ fontSize: `${r * 0.8}px`}}>
        {Math.floor((percent + Number.EPSILON) * 100 )}
        <span>%</span>
      </label>
    </div>
  );
};

CircleProgress.displayName = 'Progress.Circle';
CircleProgress.propTypes = {
  className: PropTypes.string,
  percent: PropTypes.number,
  r: PropTypes.number, // rank from 40 to 60
};
CircleProgress.defaultProps = {
  percent: 0,
  r: 40,
};

export default CircleProgress;
