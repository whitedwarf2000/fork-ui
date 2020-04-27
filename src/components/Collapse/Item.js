import React, { useCallback } from 'react';
import cn from 'classnames';
import PropTypes from 'prop-types';

import Icon from '../Icon';
import Animated from '../Animated';

const renderIcon = (icon) => {
  if (!icon) {
    return null;
  }

  if (typeof icon === 'string') {
    return (
      <Icon
        name={icon}
        style={{ marginRight: '1rem' }}
      />
    )
  }

  return icon;
};

const Item = ({ className, title, children, active, onClick, disabled, icon, ...otherProps }) => {
  const _toggleActive = useCallback((e) => {
    if (disabled) {
      return;
    }
    return onClick(e);
  }, [disabled]);

  return (
    <div
      {...otherProps}
      className={cn('rc-panel', { '--active': active, '--inactive': !active, '--disabled': disabled }, className)}
    >
      <div className="rc-panel-title" onClick={_toggleActive}>
        <div style={{ display: 'flex', alignItems: 'center' }}>
          {renderIcon(icon)}
          {title}
        </div>
        <Icon className="rc-panel-icon" name="caret-down" />
      </div>
      <Animated.Expand isExpanded={active} className="rc-panel-content">
        <div className="rc-panel-box">
          {children}
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
