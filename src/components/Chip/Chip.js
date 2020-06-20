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
    size,
    textColor,
    color,
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
        'fui-chip',
        {
          'fui-chip--custom': color,
          'fui-chip--rounded': rounded,
        },
        className
      )}
      style={{ ...style, backgroundColor: color, color: textColor, fontSize: size }}
      onClick={_onClick}
      {...otherProps}
    >
      {renderedIcon}
      <span className="fui-chip-label">{label}</span>
      {closable && (
        <div ref={closeRef} className="fui-chip-close" onClick={onRemove}>
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
  textColor: PropTypes.string,
  color: PropTypes.string,
  size: PropTypes.string,
  style: PropTypes.object,
  onRemove: PropTypes.func,
  onClick: PropTypes.func,
  rounded: PropTypes.bool,
};
Chip.defaultProps = {
  onRemove: f => f,
  onClick: f => f,
  closable: true,
};

export default Chip;
