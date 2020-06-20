import React, { useContext } from 'react';
import cn from 'classnames';
import PropTypes from 'prop-types';

import Button from '../Button';
import Context from './Context';

const Header = ({ className, closable, children, ...otherProps }) => {
  const { onClose } = useContext(Context);

  return (
    <div className={cn('fui-dialog-header', className)} {...otherProps}>
      {children}
      {closable && (
        <Button
          icon="x"
          glassed
          circle
          className="fui-pure-modal-close"
          onClick={onClose}
        />
      )}
    </div>
  );
};

Header.displayName = 'Header.Container';
Header.propTypes = {};
Header.defaultProps = {
  closable: true,
};

export default Header;
