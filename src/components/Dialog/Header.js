import React, { useContext } from 'react';
import cn from 'classnames';
import PropTypes from 'prop-types';

import Button from '../Button';
import { X, Refresh } from '../icons';
import Context from './Context';

const Header = ({ className, closable, children, freshable, ...otherProps }) => {
  const { onClose, onRefresh } = useContext(Context);

  return (
    <div className={cn('fdlg-header', className)} {...otherProps}>
      <div className="fdlg-header-title">{children}</div>
      <div className="fdlg-header-support-btn">
        {freshable && (
          <Button
            icon={<Refresh />}
            transparent
            circle
            className="fdlg-header-refresh-btn"
            onClick={onRefresh}
          />
        )}
        {closable && (
          <Button
            icon={<X />}
            transparent
            circle
            className="fdlg-header-close-btn"
            onClick={onClose}
          />
        )}
      </div>
    </div>
  );
};

Header.displayName = 'Dialog.Header';
Header.propTypes = {};
Header.defaultProps = {
  closable: true,
  freshable: false,
};

export default Header;
