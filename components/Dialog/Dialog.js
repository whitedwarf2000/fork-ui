import React from 'react';
import cn from 'classnames';
import PropTypes from 'prop-types';

import Portal from './Portal';
import Header, { HeaderTitle, HeaderSupportButtons } from './Header';
import Body from './Body';
import Footer from './Footer';
import Divider from '../Divider';

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
Dialog.Divider = Divider;
Dialog.HeaderTitle = HeaderTitle;
Dialog.HeaderSupportButtons = HeaderSupportButtons;

Dialog.displayName = 'Dialog';

export default Dialog;
