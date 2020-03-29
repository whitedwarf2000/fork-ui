import React from 'react';
import cn from 'classnames';
import PropTypes from 'prop-types';

require('./BaseInput.scss');

const BaseInput = ({ className, htmlType, ...otherProps }) => {
  return (
    <input
      {...otherProps}
      className={cn('rc-input', className)}
      type={htmlType}
    />
  );
};

BaseInput.displayName = 'BaseInput';
BaseInput.propTypes = {
  className: PropTypes.string,
  htmlType: PropTypes.string,
};
BaseInput.defaultProps = {
  htmlType: 'text',
};

export default BaseInput;
