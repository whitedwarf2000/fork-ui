import React from 'react';
import cn from 'classnames';
import PropTypes from 'prop-types';

import Button from '../Button';

const EnhanceButton = ({ className, ...otherProps }) => {
  return (
    <Button
      circle
      className={cn('fspeed-dial-btn', className)}
      {...otherProps}
    />
  );
};

EnhanceButton.displayName = 'SpeedDial.Button';
EnhanceButton.propTypes = {

};
EnhanceButton.defaultProps = {

};

export default EnhanceButton;
