import React, { useMemo } from 'react';
import cn from 'classnames';
import PropTypes from 'prop-types';

import Handler from './Handler';

const SingleSlider = React.forwardRef(({ className, max, value, handlerRef, ...otherProps }, ref) => {
  const _width = useMemo(() => value / max, [value, max]);

  return (
    <div
      ref={ref}
      className={cn('fslider fsingle-slider', className)}
      {...otherProps}
    >
      <div className="fslider-rail">
        <div
          className="fslider-rail-percent"
          style={{ width: `${_width * 100}%` }}
        >
          <Handler
            className="fslider-handler-main"
            ref={handlerRef}
            value={value}
          />
        </div>
      </div>
    </div>
  );
});
SingleSlider.displayName = 'Slider.Single';
SingleSlider.propTypes = {
  value: PropTypes.number,
  min: PropTypes.number,
  max: PropTypes.number,
};
SingleSlider.defaultProps = {
  value: 50,
  min: 0,
  max: 100,
};

export default SingleSlider;
