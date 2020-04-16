import React, { useMemo, useEffect, useRef, useState, useCallback } from 'react';
import cn from 'classnames';
import PropTypes from 'prop-types';
import Handler from './Handler';

const Slider = ({ className, min, max, onChange, ...otherProps }) => {
  const isControlled = useMemo(() => otherProps.hasOwnProperty('value'), [otherProps]);
  const [value, setValue] = useState(isControlled ? otherProps.value : otherProps.defaultValue);

  useMemo(() => {
    if (isControlled) {
      return setValue(otherProps.value);
    }

    return onChange(value);
  }, [isControlled, setValue, otherProps.value, value, onChange]);

  const handlerRef = useRef();
  const ref = useRef();
  const railRef = useRef();

  const percent = useMemo(() => value / max, [value, max]);
  const _onChange = useCallback((val) => {
    if (isControlled) {
      return onChange(val);
    }
    return setValue(val);
  }, [isControlled, setValue, onChange]);

  useEffect(() => {
    let isDraging = false;
    const calcValue = (pageX) => {
      const { x, width } = ref.current.getBoundingClientRect();
      if (pageX - x >= width) { return max; }
      if (pageX - x < 0) { return 0; }

      return Math.ceil(((pageX - x) / width) * max);
    };

    const onDraging = () => { isDraging = true; };
    const offDraging = () => { isDraging = false; };
    const clickHandler = e => _onChange(calcValue(e.pageX));

    const draging = (e) => {
      if (!isDraging) { return; }
      return _onChange(calcValue(e.pageX));
    };
  
    handlerRef.current.addEventListener('mousedown', onDraging);
    handlerRef.current.addEventListener('mouseup', offDraging);
    ref.current.addEventListener('mousemove', draging);
    ref.current.addEventListener('mouseup', offDraging);
    ref.current.addEventListener('mouseleave', offDraging);
    ref.current.addEventListener('click', clickHandler);

    return () => {
      handlerRef.current.removeEventListener('mousedown', onDraging);
      handlerRef.current.removeEventListener('mouseup', offDraging);
      ref.current.removeEventListener('mousemove', draging);
      ref.current.removeEventListener('mouseup', offDraging);
      ref.current.removeEventListener('mouseleave', offDraging);
      ref.current.removeEventListener('click', clickHandler);
    };
  } ,[max, handlerRef, ref, _onChange]);

  return (
    <div
      ref={ref}
      className={cn('rc-slider', className)}
      {...otherProps}
    >
      <div className="rc-slider-rail" ref={railRef}>
        <div
          className="rc-slider-rail-percent"
          style={{
            width: `${percent * 100}%`
          }}
        >
          <Handler ref={handlerRef} />
        </div>
      </div>
    </div>
  );
};

Slider.displayName = 'Slider';
Slider.propTypes = {
  className: PropTypes.string,
  value: PropTypes.number,
  min: PropTypes.number,
  max: PropTypes.number,
  onChange: PropTypes.func,
  defaultValue: PropTypes.number,
  value: PropTypes.number,
};
Slider.defaultProps = {
  min: 0,
  max: 100,
  defaultValue: 0,
  onChange: f => f,
};

export default Slider;
