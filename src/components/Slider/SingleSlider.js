import React, { useMemo } from 'react';
import cn from 'classnames';
import PropTypes from 'prop-types';

import Handler from './Handler';

const SingleSlider = React.forwardRef(({ className, max, value, handlerRef, ...otherProps }, ref) => {
  const _width = useMemo(() => value / max, [value, max]);

  return (
    <div
      ref={ref}
      className={cn('fui-slider fui-single-slider', className)}
      {...otherProps}
    >
      <div className="fui-slider-rail">
        <div
          className="fui-slider-rail-percent"
          style={{ width: `${_width * 100}%` }}
        >
          <Handler
            className="fui-slider-handler-main"
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
