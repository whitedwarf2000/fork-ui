import React, { useMemo, useEffect, useRef, useState, useCallback } from 'react';
import cn from 'classnames';
import PropTypes from 'prop-types';
import Handler from './Handler';
import { isArray } from '../../utils/helpers';

const Slider = ({
  className,
  range,
  min,
  max,
  dots,
  onChange,
  ...otherProps
}) => {
  const isControlled = useMemo(() => otherProps.hasOwnProperty('value'), [otherProps]);
  const isRange = useMemo(() => {
    return isArray(otherProps.defaultValue);
  }, [otherProps.defaultValue]);

  const defaultMainValue = useMemo(() => {
    return isRange
      ? otherProps.defaultValue[1]
      : otherProps.defaultValue
  }, []);

  const defaultSupportValue = useMemo(() => {
    return isRange
      ? otherProps.defaultValue[0]
      : 0
  }, []);

  const [mainValue, setMainValue] = useState(defaultMainValue); // MAIN
  const [supportValue, setSupportValue] = useState(defaultSupportValue); // SUPPORT
  const _dots = useMemo(() => [...new Set(dots)], [dots.join(',')]);

  const _onMainChange = useCallback((val) => {
    setMainValue(val);
  }, [setMainValue, _dots]);
  const _onSupportChange = useCallback((val) => {
    setSupportValue(val);
  }, [setSupportValue]);

  // useMemo(() => {
  //   if (isControlled) {
  //     return setValue(otherProps.value);
  //   }

  //   return onChange(value);
  // }, [isControlled, setValue, otherProps.value, value, onChange]);

  // useEffect(() => {
  //   if (!isControlled) {
  //     if (isRange) {
  //       return onChange(value);
  //     }
  //     return onChange(value[0]);
  //   }
  // }, [value, isRange]);

  const mainHandlerRef = useRef();
  const supportHandlerRef = useRef();
  const ref = useRef();
  const railRef = useRef();

  const _left = useMemo(() => supportValue / max, [supportValue, max]);
  const _width = useMemo(() => (mainValue - supportValue) / max, [mainValue, supportValue, max]);

  useEffect(() => {
    let isMainDraging = false;
    let isSupportDraging = false;

    const calcValue = (pageX) => {
      const { x, width } = ref.current.getBoundingClientRect();
      if (pageX - x >= width) { return max; }
      if (pageX - x < 0) { return 0; }

      return Math.ceil(((pageX - x) / width) * max);
    };

    const onMainDraging = () => { isMainDraging = true; };
    const onSupportDraging = () => { isSupportDraging = true; };

    const offDraging = () => {
      isMainDraging = false;
      isSupportDraging = false;
    };

    const clickHandler = (e) => {
      if (!isRange) {
        return _onMainChange(calcValue(e.pageX));
      }

      const { x: xMain } = mainHandlerRef.current.getBoundingClientRect();
      const { x: xSupport } = supportHandlerRef.current.getBoundingClientRect();
      if (Math.abs(xMain - e.pageX) <= Math.abs(xSupport - e.pageX)) {
        return _onMainChange(calcValue(e.pageX));
      }
      return _onSupportChange(calcValue(e.pageX));
    };

    const draging = (e) => {
      const isDraging = isMainDraging || isSupportDraging;
      if (!isDraging) { return; }
      if (isMainDraging) {
        return _onMainChange(calcValue(e.pageX));
      }

      return _onSupportChange(calcValue(e.pageX));
    };
  
    mainHandlerRef.current.addEventListener('mousedown', onMainDraging);
    supportHandlerRef.current.addEventListener('mousedown', onSupportDraging);
    document.body.addEventListener('mousemove', draging);
    document.body.addEventListener('mouseup', offDraging);
    ref.current.addEventListener('click', clickHandler);

    return () => {
      mainHandlerRef.current.removeEventListener('mousedown', onMainDraging);
      supportHandlerRef.current.removeEventListener('mousedown', onSupportDraging);
      document.body.removeEventListener('mousemove', draging);
      document.body.removeEventListener('mouseup', offDraging);
      ref.current.removeEventListener('click', clickHandler);
    };
  } ,[
    max,
    mainHandlerRef,
    supportHandlerRef,
    ref,
    _onMainChange,
    _onSupportChange,
    isRange
  ]);

  return (
    <div
      ref={ref}
      className={cn('rc-slider', { '--range': isRange }, className)}
      {...otherProps}
    >
      <div className="rc-slider-rail" ref={railRef}>
        <ul className="rc-slider-rail-dots">
          {_dots.map(val => (
            <li
              key={val}
              style={{
                left: `${(val / max) * 100}%`,
              }}
            />
          ))}
        </ul>
        <div
          className="rc-slider-rail-percent"
          style={{
            width: `${_width * 100}%`,
            left: `${_left * 100}%`,
          }}
        >
          <Handler
            className="rc-slider-handler-main"
            ref={mainHandlerRef}
            value={mainValue}
          />
          <Handler
            className="rc-slider-handler-support"
            ref={supportHandlerRef}
            value={supportValue}
          />
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
  dots: PropTypes.array,
};
Slider.defaultProps = {
  min: 0,
  max: 100,
  defaultValue: 0,
  onChange: f => f,
  dots: [],
};

export default Slider;
