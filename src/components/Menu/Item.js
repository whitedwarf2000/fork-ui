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
        'fui-menu-item',
        {
          'fui-menu-item--selected': selected,
          'fui-menu-item--hidden': hidden,
          'fui-menu-item--disabled': disabled,
          'fui-menu-item--icon-only': iconOnly,
          'fui-menu-item--title-only': titleOnly,
        },
        className,
      )}
      onClick={_onClick}
    >
      {icon && <div className="fui-menu-item-title-icon">{icon}</div>}
      {((iconOnly && titleOnly) || (iconOnly && !icon)) && <span style={{ textTransform: 'uppercase '}}>{title[0]}</span>}
      <span className="fui-menu-item-content">{title}</span>
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
