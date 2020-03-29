import React from 'react';
import cn from 'classnames';
import PropTypes from 'prop-types';

import BaseInput from '../BaseInput';
import Icon from '../Icon';

require('./InputNumber.scss');

const InputNumber = React.forwardRef(({ className, ...otherProps }, ref) => {
  return (
    <div className={cn('rc-input-number', className)}>
      <BaseInput
        {...otherProps}
        ref={ref}
        htmlType="number"
        className="rc-input-number-input"
      />
      <div className="rc-input-number-handler">
        <Icon
          name="angle-up"
          className="rc-select-up"
        />
        <Icon
          name="angle-down"
          className="rc-select-down"
        />
      </div>
    </div>
  );
});

InputNumber.displayName = 'InputNumber';
InputNumber.propTypes = {
  className: PropTypes.string,
};
InputNumber.defaultProps = {};

export default InputNumber;
