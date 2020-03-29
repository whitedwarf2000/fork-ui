import React, { useCallback, useRef, useEffect, useMemo } from 'react';
import cn from 'classnames';
import PropTypes from 'prop-types';

import BaseInput from '../BaseInput';
import Icon from '../Icon';

require('./InputNumber.scss');

const InputNumber = React.forwardRef(({
  className,
  disabled,
  ...otherProps
}, ref) => {
  return (
    <div className={cn('rc-input-number', className)}>
      <BaseInput
        {...otherProps}
        ref={ref}
        htmlType="number"
        className="rc-input-number-input"
      />
      <div className="rc-input-number-handler">
        <button className="rc-select-up" disabled={disabled}>
          <Icon name="angle-up" />
        </button>
        <button className="rc-select-down" disabled={disabled}>
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
