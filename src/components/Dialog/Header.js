import React, { useContext } from 'react';
import cn from 'classnames';
import PropTypes from 'prop-types';

import Button from '../Button';
import { X, Refresh } from '../icons';
import Context from './Context';

const Header = ({ className, closable, children, refreshable, ...otherProps }) => {
  const { onClose, onRefresh } = useContext(Context);

  return (
    <div className={cn('fui-dialog-header', className)} {...otherProps}>
      <div className="fui-dialog-header__title">{children}</div>
      <div className="fui-dialog-header__support-button">
        {refreshable && (
          <Button
            icon={<Refresh />}
            transparent
            circle
            className="fui-dialog-header__refresh-button"
            onClick={onRefresh}
          />
        )}
        {closable && (
          <Button
            icon={<X />}
            transparent
            circle
            className="fui-dialog-header__close-button"
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
  refreshable: false,
};

export default Header;
