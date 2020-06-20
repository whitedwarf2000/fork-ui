import React from 'react';
import cn from 'classnames';
import PropTypes from 'prop-types';

const Body = ({ className, ...otherProps }) => {
  return (
    <div className={cn('fui-dialog-body', className)} {...otherProps} />
  );
};

Body.displayName = 'Dialog.Body';

export default Body;
