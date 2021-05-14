import React from 'react';
import cn from 'classnames';
import PropTypes from 'prop-types';

import Button from '../Button';
import ChevronDown from '../icons/all/ChevronDown';
import Animated from '../Animated';
import Memo from '../Memo';

const Panel = ({ className, title, children, active, fresh, onClick, disabled, ...otherProps }) => {
  return (
    <div
      {...otherProps}
      className={cn('fpanel', { 'fpanel-active': active, 'fpanel-disabled': disabled }, className)}
    >
      <button className="fpanel-title" onClick={onClick} disabled={disabled}>
        {title}
        <Button
          className="fpanel-icon"
          circle
          transparent
          icon={<ChevronDown />}
        />
      </button>
      <Animated.Expand isExpanded={active} className="fpanel-content">
        <div className="fpanel-box">
          <div style={{ height: '0.75rem' }} />
          <Memo watch={active} fresh={fresh}>
            {children}
          </Memo>
          <div style={{ height: '0.75rem' }} />
        </div>
      </Animated.Expand>
    </div>
  );
};

Panel.displayName = 'Collapse.Panel';
Panel.propTypes = {
  title: PropTypes.any.isRequired,
  className: PropTypes.string,
  defaultActive: PropTypes.bool,
  onClick: PropTypes.func, // do not set default, onClick will be passed by Collapse so it away exsits
  children: PropTypes.any,
  icon: PropTypes.string,
  fresh: PropTypes.bool,
  active: PropTypes.bool,
};
Panel.defaultProps = {};

export default Panel;
