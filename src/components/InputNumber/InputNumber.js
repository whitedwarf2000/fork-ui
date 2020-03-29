import React, { useCallback, useRef, useEffect, useMemo } from 'react';
import cn from 'classnames';
import PropTypes from 'prop-types';

import BaseInput from '../BaseInput';
import Icon from '../Icon';
import { omit } from '../../utils/helpers';

require('./InputNumber.scss');

/**
 * Input Number just only support UNCONTROLLED COMPONENT
 * 
 * */
const InputNumber = React.forwardRef(({
  className,
  disabled,
  onChange,
  ...otherProps
}, ref) => {
  const wrapperRef = useRef();
  const stepUpRef = useRef();
  const stepDownRef = useRef();

  const passedProps = useMemo(() => omit(otherProps, ['value']), [otherProps]);

  useEffect(() => {
    const inputNode = wrapperRef.current.getElementsByClassName('rc-input-number-input')[0];
    const stepUp = () => {
      inputNode.stepUp();
      onChange({ target: inputNode });
    };
    const stepDown = () => {
      inputNode.stepDown();
      onChange({ target: inputNode });
    };

    stepUpRef.current.addEventListener('click', stepUp);
    stepDownRef.current.addEventListener('click', stepDown);

    return () => {
      stepUpRef.current.removeEventListener('click', stepUp);
      stepDownRef.current.removeEventListener('click', stepDown);
    };
  }, []);

  return (
    <div className={cn('rc-input-number', className)} ref={wrapperRef}>
      <BaseInput
        {...passedProps}
        ref={ref}
        disabled={disabled}
        onChange={onChange}
        htmlType="number"
        className="rc-input-number-input"
      />
      <div className="rc-input-number-handler">
        <button className="rc-select-up" disabled={disabled} ref={stepUpRef}>
          <Icon name="angle-up" />
        </button>
        <button className="rc-select-down" disabled={disabled} ref={stepDownRef}>
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
  onChange: PropTypes.func,
};
InputNumber.defaultProps = {
  onChange: f => f,
};

export default InputNumber;
