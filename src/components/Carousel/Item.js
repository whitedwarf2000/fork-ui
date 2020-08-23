import React, { useContext } from 'react';
import cn from 'classnames';
import PropTypes from 'prop-types';

import Context from './Context';

const Item = ({ wrapperClass, className, children }) => {
  const { itemWidth } = useContext(Context);

  return (
    <div className={cn('fui-carousel-item-wrapper', wrapperClass )} style={{ width: itemWidth }}>
      <div className={cn('fui-carousel-item', className)}>
        {children}
      </div>
    </div>
  );
};

Item.displayName = 'Carousel.Item';
Item.propTypes = {
  className: PropTypes.string,
  wrapperClass: PropTypes.string,
};
Item.defaultProps = {};

export default Item;
