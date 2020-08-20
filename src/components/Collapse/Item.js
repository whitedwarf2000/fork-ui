import React, { useCallback } from 'react';
import cn from 'classnames';
import PropTypes from 'prop-types';

import { CaretDown } from '../icons';
import Animated from '../Animated';
import Memo from '../Memo';

const Item = ({ className, title, children, active, fresh, onClick, disabled, icon, ...otherProps }) => {
  const _toggleActive = useCallback((e) => {
    if (disabled) {
      return;
    }
    return onClick(e);
  }, [disabled]);

  return (
    <div
      {...otherProps}
      className={cn('fui-panel', { 'fui-panel--active': active, 'fui-panel--inactive': !active, 'fui-panel--disabled': disabled }, className)}
    >
      <div className="fui-panel-title" onClick={_toggleActive}>
        <div style={{ display: 'flex', alignItems: 'center' }}>
          {icon}
          {title}
        </div>
        <CaretDown className="fui-panel-icon" name="caret-down" />
      </div>
      <Animated.Expand isExpanded={active} className="fui-panel-content">
        <div className="fui-panel-box">
          <Memo for={active} fresh={fresh}>{children}</Memo>
        </div>
      </Animated.Expand>
    </div>
  );
};

Item.displayName = 'Collapse.Item';
Item.propTypes = {
  title: PropTypes.any.isRequired,
  className: PropTypes.string,
  defaultActive: PropTypes.bool,
  onClick: PropTypes.func, // do not set default, onClick will be passed by Collapse so it away exsits
  children: PropTypes.any,
  icon: PropTypes.string,
};
Item.defaultProps = {};

export default Item;
