import React from 'react';
import cn from 'classnames';
import PropTypes from 'prop-types';

const Container = React.forwardRef(({ className, ...otherProps }, ref) => {
  return (
    <div
      ref={ref}
      className={cn('rc-dialog-container', className)}
      {...otherProps}
    />
  );
});

Container.displayName = 'Dialog.Container';

export default Container;
