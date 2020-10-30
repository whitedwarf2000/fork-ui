import React, { useRef, useEffect, useMemo } from 'react';
import cn from 'classnames';
import PropTypes from 'prop-types';

import BaseInput from '../BaseInput';
import { CaretUp, CaretDown } from '../icons';
import { omit } from '../../utils/helpers';
import useFlexibleRef from '../../hooks/useFlexibleRef';

/**
 * Input Number just only support UNCONTROLLED COMPONENT
 * 
 * */
const InputNumber = React.forwardRef(({
  className,
  ...otherProps
}, ref) => {
  const wrapperRef = useFlexibleRef(ref);

  return (
    <div className={cn('fnumber', className)}>
      <BaseInput
        {...otherProps}
        ref={wrapperRef}
        htmlType="number"
        className="fnumber-input"
      />
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
