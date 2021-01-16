import React from 'react';
import cn from 'classnames';
import PropTypes from 'prop-types';

const X = ({ className, ...otherProps }) => (
  <svg className={cn('ficon', className)} {...otherProps} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
    <path stroke="none" d="M0 0h24v24H0z" fill="none"/>
    <line x1="18" y1="6" x2="6" y2="18" />
    <line x1="6" y1="6" x2="18" y2="18" />
  </svg>
);

const Chip = ({
    className,
    rounded,
    children,
    closable,
    onClose,
    size,
    style,
    clickable,
    ...otherProps
  }) => {

  return (
    <div
      className={cn(
        'fchip',
        {
          'fchip-rounded': rounded,
          'fchip-clickable': clickable,
        },
        className
      )}
      style={{
        fontSize: size,
        ...style
      }}
      {...otherProps}
    >
      <span className="fchip-child">{children}</span>
      {closable && (
        <div className="fchip-close" onClick={onClose}>
          <X />
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
  clickable: PropTypes.bool,
};
Chip.defaultProps = {
  onClose: f => f,
  onClick: f => f,
  closable: false,
};

export default Chip;
