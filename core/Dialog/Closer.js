import React from 'react';
import cn from 'classnames';
import PropTypes from 'prop-types';

import Button from '../Button';
import X from '../../icons/X';

const Closer = ({ className, ...otherProps }) => {
  return (
    <Button className={cn('fdialog-closer', className)} {...otherProps} />
  );
};

Closer.displayName = 'Dialog.Closer';
Closer.propTypes = {
  className: PropTypes.string,
  color: Button.propTypes.color,
  shape: Button.propTypes.shape,
  icon: Button.propTypes.icon,
};
Closer.defaultProps = {
  color: 'transparent',
  shape: 'rounded',
  icon: <X />,
};

export default Closer;
