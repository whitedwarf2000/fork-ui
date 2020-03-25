import React from 'react';
import cn from 'classnames';
import PropTypes from 'prop-types';

require('./ItemGroup.scss');

const ItemGroup = ({ className, children, title, iconOnly, ...otherProps }) => {
  return (
    <li className={cn('rc-menu-item-group', { '--icon-only': iconOnly })}>
      <div className="rc-menu-item-group-title">{title}</div>
      <ul className="rc-menu-item-group-list">
        {React.Children.map(children, elm => React.cloneElement(elm, {
          iconOnly,
          ...elm.props
        }))}
      </ul>
    </li>
  );
};

ItemGroup.displayName = 'Menu.ItemGroup';
ItemGroup.propTypes = {
  className: PropTypes.string,
  children: PropTypes.any,
};
ItemGroup.defaultProps = {};

export default ItemGroup;
