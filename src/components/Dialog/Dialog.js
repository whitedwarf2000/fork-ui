import React, { useCallback, useMemo, useState, useEffect } from 'react';
import cn from 'classnames';
import PropTypes from 'prop-types';
import Context from './Context';

import Portal from './Portal';
import Header from './Header';
import Body from './Body';
import Footer from './Footer';
import useRefresh from '../../hooks/useRefresh';

const Dialog = React.forwardRef(({ className, onClose, ...otherProps }, ref) => {
  const [toggleBody, onRefresh] = useRefresh();

  return (
    <Context.Provider value={{ onClose, toggleBody, onRefresh }}>
      <div
        ref={ref}
        className={cn('fui-dialog', className)}
        {...otherProps}
      />
    </Context.Provider>
  );
});

Dialog.Portal = Portal;
Dialog.Header = Header;
Dialog.Body = Body;
Dialog.Footer = Footer;

Dialog.displayName = 'Dialog';

export default Dialog;
