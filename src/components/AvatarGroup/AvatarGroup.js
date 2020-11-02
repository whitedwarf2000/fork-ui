import React, { useMemo } from 'react';
import cn from 'classnames';
import PropTypes from 'prop-types';
import Avatar from '../Avatar';

const AvatarGroup = ({ className, overflow, children, ...otherProps }) => {
  const avatarCount = useMemo(() => React.Children.count(children), [children]) ;
  const isOverflow = useMemo(() => avatarCount > overflow + 1, [avatarCount, overflow]);

  const enhanderChildren = useMemo(() => {
    if (isOverflow) {
      return React.Children.map(children, (item, idx) => {
        if (idx < overflow) {
          return item;
        }
        return null;
      });
    }
    return children;
  }, [isOverflow, overflow, children]);

  return (
    <div
      className={cn('favt-grp', className)}
      {...otherProps}
    >
      {enhanderChildren}
      {isOverflow && (
        <Avatar color="var(--primary)">
          <span>+</span>{avatarCount - overflow}
        </Avatar>
      )}
    </div>
  );
};

AvatarGroup.displayName = 'AvatarGroup';
AvatarGroup.propTypes = {
  className: PropTypes.string,
  overflow: PropTypes.number,
};
AvatarGroup.defaultProps = {
  overflow: Infinity,
};

export default AvatarGroup;
