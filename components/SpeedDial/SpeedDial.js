import React from 'react';
import cn from 'classnames';
import PropTypes from 'prop-types';

import SpeedDialButton from './Button';
import Overlay from '../Overlay';

const SpeedDial = ({ className, overlay, children, ...otherProps }) => {
  return (
    <Overlay
      className="fspeed-dial"
      content={
        <div className='fspeed-dial-btns'>
          {overlay}
        </div>
      }
      {...otherProps}
    >
      {children}
    </Overlay>
  );
};

SpeedDial.Button = SpeedDialButton;

SpeedDial.displayName = 'SpeedDial';
SpeedDial.propTypes = {
  className: PropTypes.string,
  trigger: PropTypes.array,
  overlay: PropTypes.any,
  children: PropTypes.any,
  hideOnClick: true,
};
SpeedDial.defaultProps = {
  trigger: 'mouseenter',
};

export default SpeedDial;
