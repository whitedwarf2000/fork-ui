import React, { useCallback, useContext, useMemo } from 'react';
import cn from 'classnames';
import PropTypes from 'prop-types';

import MenuContext from './MenuContext';
import displayName from './displayName';

const Item = ({ className, disabled, title, icon, titleOnly, _key, onItemClick }) => {
  const {
    iconOnly,
    selectedKeys,
    hiddenKeys,
    onItemClick: contextOnItemClick,
  } = useContext(MenuContext);

  const selected = useMemo(() => selectedKeys.indexOf(_key) >= 0, [selectedKeys, _key]);
  const hidden = useMemo(() => hiddenKeys.indexOf(_key) >= 0, [hiddenKeys, _key]);

  const _onClick = useCallback(() => {
    if (disabled) { return; }
    if (onItemClick) { return onItemClick(); }

    return contextOnItemClick(_key);
  }, [_key, disabled, onItemClick]);

  return (
    <li
      className={cn(
        'fmenu-item',
        {
          'fmenu-item-selected': selected,
          'fmenu-item-hidden': hidden,
          'fmenu-item--disabled': disabled,
          'fmenu-item-icon-only': iconOnly,
          'fmenu-item-title-only': titleOnly,
        },
        className,
      )}
      onClick={_onClick}
    >
      {icon && <div className="fmenu-item-title-icon">{icon}</div>}
      {((iconOnly && titleOnly) || (iconOnly && !icon)) && <span style={{ textTransform: 'uppercase '}}>{title[0]}</span>}
      <span className="fmenu-item-content">{title}</span>
    </li>
  );
};

Item.displayName = displayName.item;
Item.propTypes = {
  className: PropTypes.string,
  onItemClick: PropTypes.func, // not set default
  disabled: PropTypes.bool,
  titleOnly: PropTypes.bool,
  children: PropTypes.any,
  icon: PropTypes.string,
  title: PropTypes.string.isRequired, // when Item in iconOnly mode, titleOnly will overide icon by first lettter of this value
  _key: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
  _groupKey: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
  _subKey: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
};
Item.defaultProps = {};

export default Item;
