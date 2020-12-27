import React from 'react';
import cn from 'classnames';
import PropTypes from 'prop-types';

const LinearProgress = ({
  className,
  children,
  percent,
  style,
  color,
  railColor,
  size,
  ...otherProps
}) => {
  return (
    <div className={cn('flinear-prog', className)} {...otherProps}>
      <div className="flinear-prog-rail">
        <div
          className="flinear-prog-value"
          style={{
            width: `${percent}%`
          }}
        >
          {children}
        </div>
      </div>
    </div>
  );
};

LinearProgress.displayName = 'Progress.Linear';
LinearProgress.propTypes = {
  className: PropTypes.string,
  percent: PropTypes.number,
  size: PropTypes.string,
  color: PropTypes.string,
  railColor: PropTypes.oneOfType(PropTypes.string, PropTypes.bool),
  backgroundColor: PropTypes.string,
  style: PropTypes.object,
  children: PropTypes.any,
};
LinearProgress.defaultProps = {
  percent: 0,
  color: 'var(--primary)',
  railColor: 'var(--rail-color)'
};

export default LinearProgress;
