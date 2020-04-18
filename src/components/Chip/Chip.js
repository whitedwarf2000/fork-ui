import React, { useCallback, useRef, useMemo } from 'react';
import cn from 'classnames';
import PropTypes from 'prop-types';

import Icon from '../Icon';

const Chip = ({
    className,
    rounded,
    label,
    icon,
    avatar,
    fontSize,
    color,
    backgroundColor,
    style,
    closable,
    onRemove,
    onClick,
    ...otherProps
  }) => {
  const closeRef = useRef();

  const _onClick = useCallback((e) => {
    if (closeRef.current && closeRef.current.contains(e.target)) {
      return;
    }
    return onClick(e);
  }, [closeRef, closable]);

  const renderedIcon = useMemo(() => {
    if (!icon) {
      return avatar;
    }

    return typeof icon === 'string'
      ? <Icon name={icon} />
      : icon;
  }, [icon, avatar]);

  return (
    <div
      className={cn(
        'rc-chip',
        {
          '--custom': backgroundColor,
          '--rounded': rounded,
        },
        className
      )}
      style={{ ...style, backgroundColor, color, fontSize }}
      onClick={_onClick}
      {...otherProps}
    >
      {renderedIcon}
      <span className="rc-chip-label">{label}</span>
      {closable && (
        <div ref={closeRef} className="rc-chip-close" onClick={onRemove}>
          <Icon name="x" size="0.75em" />
        </div>
      )}
    </div>
  );
};

Chip.displayName = 'Chip';
Chip.propTypes = {
  className: PropTypes.string,
  label: PropTypes.any,
  closable: PropTypes.bool,
  avatar: PropTypes.any,
  color: PropTypes.string,
  backgroundColor: PropTypes.string,
  fontSize: PropTypes.string,
  style: PropTypes.object,
  onRemove: PropTypes.func,
  onClick: PropTypes.func,
  rounded: PropTypes.bool,
};
Chip.defaultProps = {
  onRemove: f => f,
  onClick: f => f,
};

export default Chip;
