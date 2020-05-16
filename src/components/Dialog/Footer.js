import React from 'react';
import cn from 'classnames';
import PropTypes from 'prop-types';

const Footer = ({ className, ...otherProps }) => {
  return (
    <div className={cn('rc-dialog-footer', className)} {...otherProps} />
  );
};

Footer.displayName = 'Dialog.Footer';

export default Footer;
