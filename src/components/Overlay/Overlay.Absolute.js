import React, { useMemo, useState } from 'react';
import cn from 'classnames';
import PropTypes from 'prop-types';

import mPlacements from '../placements';

const Overlay = ({ className, children, placement, arrow, overlay, ...otherProps }) => {
  const isControlled = useMemo(() => otherProps.hasOwnProperty('visible'), [otherProps]);
  const [visible, setVisible] = useState(isControlled ? otherProps.visible : otherProps.defaultVisible);

  return (
    <div className="rc-absolute-overlay-container">
      <div className="rc-absolute-overlay-target">{children}</div>
      <div className={
        cn(
          'rc-overlay',
          mPlacements[placement],
          {
            '--hidden': !visible,
            '--arrow': arrow,
          },
          className
        )}
      >
        {overlay}
      </div>
    </div>
  );
};

Overlay.displayName = 'Overlay.Absolute';
Overlay.propTypes = {
  placement: PropTypes.string,
  gap: PropTypes.number,
  defaultVisible: PropTypes.bool,
  overlay: PropTypes.any,
  children: PropTypes.any,
  arrow: PropTypes.bool,
  trigger: PropTypes.array,
  onVisibleChange: PropTypes.func,
  canOutsideClickClose: PropTypes.bool,
};
Overlay.defaultProps = {
  defaultVisible: true,
  placement: 'top',
  gap: 5,
  trigger: ['click'],
  onVisibleChange: f => f,
};

export default Overlay;
