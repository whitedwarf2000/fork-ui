import React from 'react';
import cn from 'classnames';
import PropTypes from 'prop-types';

const ItemGroup = ({ className, children, title, iconOnly, selectedKeys, _onItemClick }) => {
  return (
    <li className={cn('rc-menu-item-group', { '--icon-only': iconOnly }, className)}>
      <div className="rc-menu-item-group-title"><span>{title}</span></div>
      <ul className="rc-menu-item-group-list">
        {React.Children.map(children, elm => React.cloneElement(elm, {
          iconOnly,
          selected: selectedKeys.indexOf(elm.key) >= 0,
          selectedKeys,
          _key: elm.key,
          _onItemClick,
        }))}
      </ul>
    </li>
  );
};

ItemGroup.displayName = 'Menu.ItemGroup';
ItemGroup.propTypes = {
  className: PropTypes.string,
  children: PropTypes.any,
  selectedKeys: PropTypes.array,
  _onItemClick: PropTypes.func,
  iconOnly: PropTypes.bool,
  title: PropTypes.string,
};
ItemGroup.defaultProps = {
  selectedKeys: [],
};

export default ItemGroup;
