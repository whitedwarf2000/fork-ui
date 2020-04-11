import React, { useState, useEffect, useCallback } from 'react';
import cn from 'classnames';
import PropTypes from 'prop-types';

const LinearProgress = ({ className, percent, noText, bottom }) => {
  const [textVisible, setTextVisible] = useState(true);

  useEffect(() => {
    if (!noText && textVisible) {
      setTextVisible(true);
      const timer = setTimeout(() => setTextVisible(false), 3000);
      return () => clearTimeout(timer);
    }
  }, [noText, textVisible]);

  useEffect(() => {
    if (!noText) {
      setTextVisible(true);
    }
  }, [percent, noText]);

  const onMouseEnter = useCallback(() => setTextVisible(true), []);

  return (
    <div className={cn('rc-linear-progress', { '--bottom': bottom }, className)} onMouseEnter={onMouseEnter}>
      <div className="rc-linear-progress-rail">
        <div
          className="rc-linear-progress-rail-percent"
          style={{
            width: `${percent * 100}%`
          }}
        >
          {!noText && (
            <div className={cn('rc-linear-progress-percent-text', { '--hidden': !textVisible } )}>
              {Math.floor((percent + Number.EPSILON) * 100 )}
              <span>%</span>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

LinearProgress.displayName = 'Progress.Linear';
LinearProgress.propTypes = {
  className: PropTypes.string,
  percent: PropTypes.number,
  noText: PropTypes.bool,
  bottom: PropTypes.bool,
};
LinearProgress.defaultProps = {
  percent: 0,
};

export default LinearProgress;
