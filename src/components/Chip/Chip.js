import React from 'react';
import cn from 'classnames';
import PropTypes from 'prop-types';

import { X } from '../icons';

const Chip = ({
    className,
    rounded,
    children,
    closable,
    avatar,
    onClose,
    size,
    style,
    ...otherProps
  }) => {

  return (
    <div
      className={cn(
        'fchip',
        {
          'fchip-rounded': rounded,
        },
        className
      )}
      style={{
        fontSize: size,
        ...style
      }}
      {...otherProps}
    >
      {avatar && <span className="fchip-avt">{avatar}</span>}
      <span className="fchip-child">{children}</span>
      {closable && (
        <div className="fchip-close" onClick={onClose}>
          <X size="0.75em" />
        </div>
      )}
    </div>
  );
};

Chip.displayName = 'Chip';
Chip.propTypes = {
  className: PropTypes.string,
  closable: PropTypes.bool,
  size: PropTypes.string,
  style: PropTypes.object,
  onClose: PropTypes.func,
  rounded: PropTypes.bool,
  avatar: PropTypes.any,
};
Chip.defaultProps = {
  onClose: f => f,
  onClick: f => f,
  closable: false,
};

export default Chip;
