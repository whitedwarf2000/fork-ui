import React from 'react';
import cn from 'classnames';
import PropTypes from 'prop-types';

const Body = ({ className, children, ...otherProps }) => {
  return (
    <div className={cn('fdialog-body', className)} {...otherProps}>
      {children}
    </div>
  );
};

Body.displayName = 'Dialog.Body';
Body.propTypes = {
  className: PropTypes.string,
};
Body.defaultProps = {};

export default Body;
