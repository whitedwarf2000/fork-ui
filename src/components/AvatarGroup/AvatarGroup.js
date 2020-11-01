import React, { useMemo } from 'react';
import cn from 'classnames';
import PropTypes from 'prop-types';
import Avatar from '../Avatar';

const AvatarGroup = ({ className, overflowAvatar, children, ...otherProps }) => {
  const avatarCount = useMemo(() => React.Children.count(children), [children]) ;
  const isOverflow = useMemo(() => avatarCount > overflowAvatar + 1, [avatarCount, overflowAvatar]);

  const enhanderChildren = useMemo(() => {
    if (isOverflow) {
      return React.Children.map(children, (item, idx) => {
        if (idx < overflowAvatar) {
          return item;
        }
        return null;
      });
    }
    return children;
  }, [isOverflow, overflowAvatar, children]);

  return (
    <div
      className={cn('favt-grp', className)}
      {...otherProps}
    >
      {enhanderChildren}
      {isOverflow && <Avatar name={`+${avatarCount - overflowAvatar}`} color="var(--primary)" />}
    </div>
  );
};

AvatarGroup.displayName = 'AvatarGroup';
AvatarGroup.propTypes = {
  className: PropTypes.string,
  overflowAvatar: PropTypes.number,
};
AvatarGroup.defaultProps = {
  overflowAvatar: Infinity,
};

export default AvatarGroup;
