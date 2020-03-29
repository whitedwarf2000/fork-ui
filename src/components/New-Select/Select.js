import React from 'react';
import cn from 'classnames';
import PropTypes from 'prop-types';
import Chip from '../Chip';
import Icon from '../Icon';

require('./Select.scss');

const Select = ({ className, ...otherProps }) => {
  return (
    <div
      {...otherProps}
      className={cn('rc-select', className)}
    >
      <div className="rc-select-input">
      </div>
      <Icon name="caret-down" className="rc-select-icon" />
    </div>
  );
};

Select.displayName = 'Select';
Select.propTypes = {
  className: PropTypes.string,
};
Select.defaultProps = {};

export default Select;
