import React from 'react';
import cn from 'classnames';
import PropTypes from 'prop-types';

import Icon from '../Icon';

require('./Chip.scss');

const Chip = ({ className, label, avatar, color, style, closable, onClose, ...otherProps }) => {
  return (
    <div className={cn('rc-chip', className)} style={{ backgroundColor: color, ...style }} {...otherProps}>
      {avatar}
      <span className="rc-chip-label">{label}</span>
      {closable && <div className="rc-chip-close" onClick={onClose}><Icon name="times" /></div>}
    </div>
  );
};

Chip.displayName = 'Chip';
Chip.propTypes = {
  className: PropTypes.string,
  label: PropTypes.any,
  closable: PropTypes.bool,
  avatar: PropTypes.any,
  color: PropTypes.string,
  style: PropTypes.object,
  onClose: PropTypes.func,
};
Chip.defaultProps = {
  onClose: f => f,
};

export default Chip;
