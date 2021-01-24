import React from 'react';
import cn from 'classnames';
import PropTypes from 'prop-types';

import Portal from './Portal';
import Header, { HeaderTitle, HeaderButtons } from './Header';
import Body from './Body';
import Footer from './Footer';

const Dialog = React.forwardRef(({ className, ...otherProps }, ref) => {
  return (
    <div
      ref={ref}
      className={cn('fdlg', className)}
      {...otherProps}
    />
  );
});

Dialog.Portal = Portal;
Dialog.Header = Header;
Dialog.Body = Body;
Dialog.Footer = Footer;
Dialog.HeaderTitle = HeaderTitle;
Dialog.HeaderButtons = HeaderButtons;

Dialog.displayName = 'Dialog';

export default Dialog;
