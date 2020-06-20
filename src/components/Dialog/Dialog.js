import React from 'react';
import cn from 'classnames';
import PropTypes from 'prop-types';
import Context from './Context';

import Container from './Container';
import Header from './Header';
import Body from './Body';
import Footer from './Footer';

const Dialog = React.forwardRef(({ className, closable, onClose, ...otherProps }, ref) => {
  return (
    <Context.Provider value={{  onClose }}>
      <div
        ref={ref}
        className={cn('fui-dialog', className)}
        {...otherProps}
      />
    </Context.Provider>
  );
});

Dialog.Container = Container;
Dialog.Header = Header;
Dialog.Body = Body;
Dialog.Footer = Footer;

Dialog.displayName = 'Dialog';

export default Dialog;
