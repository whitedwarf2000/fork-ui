import React, { useCallback } from 'react';
import cn from 'classnames';
import PropTypes from 'prop-types';

import { CaretDown } from '../icons';
import Animated from '../Animated';
import Memo from '../Memo';

const Item = ({ className, title, children, active, fresh, onClick, disabled, ...otherProps }) => {
  const _onClick = useCallback((e) => {
    if (disabled) {
      return;
    }
    return onClick(e);
  }, [disabled]);

  return (
    <div
      {...otherProps}
      className={cn('fpanel', { 'fpanel-active': active, 'fpanel-inactive': !active, 'fpanel-disabled': disabled }, className)}
    >
      <div className="fpanel-title" onClick={_onClick}>
        <div style={{ display: 'flex', alignItems: 'center' }}>
          {title}
        </div>
        <CaretDown className="fpanel-icon" name="caret-down" />
      </div>
      <Animated.Expand isExpanded={active} className="fpanel-content">
        <div className="fpanel-box">
          <div style={{ height: '0.75rem' }} />
          <Memo watch={active} fresh={fresh}>{children}</Memo>
          <div style={{ height: '0.75rem' }} />
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
  fresh: PropTypes.bool,
  active: PropTypes.bool,
};
Item.defaultProps = {};

export default Item;
