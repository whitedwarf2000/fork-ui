import React, { useCallback, memo } from 'react';
import cn from 'classnames';
import PropTypes from 'prop-types';
import { useSpring, animated } from 'react-spring';

import Icon from '../Icon';
import useMeasure from '../../hooks/useMeasure';
import usePrevious from '../../hooks/usePrevious';

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

const CollapseAnimated = memo(({ children, active }) => {
  const previous = usePrevious(active);
  const [bind, { height: viewHeight }] = useMeasure();

  const { height, ...otherStyle } = useSpring({
    from: {
      height: 0,
      opacity: 0,
    },
    to: {
      height: active ? viewHeight : 0,
      opacity: active ? 1 : 0,
    },
  });

  return (
    <animated.div
      className="rc-panel-content"
      style={{
        ...otherStyle,
        height: active && previous === active ? 'auto' : height,
      }}
    >
      <div className="rc-panel-box" {...bind}>
        {children}
      </div>
    </animated.div>
  )
});

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
      <CollapseAnimated active={active}>
        {children}
      </CollapseAnimated>
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
