import React, { useContext } from 'react';
import cn from 'classnames';
import PropTypes from 'prop-types';

import Button from '../Button';
import Context from './Context';

const Header = ({ className, closable, children, ...otherProps }) => {
  const { onClose } = useContext(Context);

  return (
    <div className={cn('rc-dialog-header', className)} {...otherProps}>
      {children}
      {closable && (
        <Button
          icon="x"
          transparent
          circle
          className="rc-pure-modal-close"
          fontSize="0.75em" onClick={onClose}
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
