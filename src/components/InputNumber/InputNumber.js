import React, { useCallback, useRef, useEffect, useMemo } from 'react';
import cn from 'classnames';
import PropTypes from 'prop-types';

import BaseInput from '../BaseInput';
import Icon from '../Icon';

import useUncontrolled from '../../hooks/useUncontrolled';
import { isUnDefined, isNaN, isNumber } from '../../utils/helpers';

require('./InputNumber.scss');

const validateMinMax = (min, max) => {
  if (isNaN(min) || isNaN(max) || !isNumber(min) || !isNumber(max) || min >= max) {
    return false;
  }

  return true;
}

const InputNumber = React.forwardRef(({
  className,
  disabled,
  onChange,
  min,
  max,
  step,
  defaultValue,
  ...otherProps
}, ref) => {
  const isGoodMinMax = useMemo(() => validateMinMax(min, max), [min, max]);

  const onChangeState = useCallback(state => onChange({ target: { value: state }}), [onChange]);
  const [value, setValue] = useUncontrolled('value', otherProps, {
    onChangeState,
    defaultState: defaultValue,
  });
  const stepUp = useCallback(() => {
    if (!isGoodMinMax) {
      return;
    }
    setValue(value => {
      let _value = value;
      if (!isNumber(_value) || isNaN(_value)) {
        _value = step;
      } else {
        _value += step;
      }

      const nextValue = _value > max ? value : _value;
      return nextValue;
    });
  }, [max, step, isGoodMinMax]);

  const stepDown = useCallback(() => {
    if (!isGoodMinMax) {
      return;
    }
    setValue(value => {
      let _value = value;
      if (!isNumber(_value) || isNaN(_value)) {
        _value = -step;
      } else {
        _value -= step;
      }

      const nextValue = _value < min ? value : _value;
      return nextValue;
    });
  }, [min, step, isGoodMinMax]);

  return (
    <div className={cn('rc-input-number', className)}>
      <BaseInput
        {...otherProps}
        ref={ref}
        min={min}
        max={max}
        step={step}
        value={value}
        disabled={disabled}
        htmlType="number"
        className="rc-input-number-input"
      />
      <div className="rc-input-number-handler">
        <button className="rc-select-up" disabled={disabled} onClick={stepUp}>
          <Icon name="angle-up" />
        </button>
        <button className="rc-select-down" disabled={disabled} onClick={stepDown}>
          <Icon name="angle-down" />
        </button>
      </div>
    </div>
  );
});

InputNumber.displayName = 'InputNumber';
InputNumber.propTypes = {
  className: PropTypes.string,
  disabled: PropTypes.bool,
  min: PropTypes.number,
  max: PropTypes.number,
  step: PropTypes.number,
  onChange: PropTypes.func,
};
InputNumber.defaultProps = {
  step: 1,
  min: -Infinity,
  max: Infinity,
  onChange: f => f,
};

export default InputNumber;
