import React from 'react';
import cn from 'classnames';
import PropTypes from 'prop-types';

const Body = ({ className, children, ...otherProps }) => {
  return (
    <div className={cn('fdlg-body', className)} {...otherProps}>
      {children}
    </div>
  );
};

Body.displayName = 'Dialog.Body';

export default Body;
