import React, { useRef, useContext } from 'react';
import cn from 'classnames';
import PropTypes from 'prop-types';

import Context from './Context';

const Item = ({ wrapperClass, className, gap, style, children }) => {
  const { multiple, itemWidth } = useContext(Context);
  const ref = useRef();

  return (
    <div
      style={{
        width: !multiple ? itemWidth : null,
      }}
      className={cn(
        'fui-carousel-item-wrapper',
        { 'fui-carousel-item-wrapper--fluid': !multiple },
        wrapperClass,
      )}
      ref={ref}
    >
      <div
        style={{
          margin: gap,
          ...style,
        }}
        className={cn('fui-carousel-item', className)}
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
