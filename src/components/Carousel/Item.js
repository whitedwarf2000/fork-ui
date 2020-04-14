import React, { useRef } from 'react';
import cn from 'classnames';
import PropTypes from 'prop-types';

const Item = ({ wrapperClass, className, _width, fluid, gap, style, children }) => {
  const ref = useRef();

  return (
    <div
      style={{
        width: fluid ? _width : null,
      }}
      className={cn(
        'rc-carousel-item-wrapper',
        { '--fluid': fluid },
        wrapperClass,
      )}
      ref={ref}
    >
      <div
        style={{
          margin: gap,
          ...style,
        }}
        className={cn('rc-carousel-item', className)}
      >
        {children}
      </div>
    </div>
  );
};

Item.displayName = 'Carousel.Item';
Item.propTypes = {
  className: PropTypes.string,
  wrapperClass: PropTypes.string,
  style: PropTypes.object,
  gap: PropTypes.string,
};
Item.defaultProps = {
  gap: '0.25rem',
};

export default Item;
