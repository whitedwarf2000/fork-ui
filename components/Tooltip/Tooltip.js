import React from 'react';
import Overlay from '../Overlay';

const Tooltip = ({ title, ...otherProps }) => {
  return (
    <Overlay
      className="ftooltip"
      content={title}
      role="tooltip"
      {...otherProps}
    />
  );
};
Tooltip.defaultProps = {
  trigger: 'mouseenter',
  hideOnClick: false,
  arrow: true,
};

export default Tooltip;
