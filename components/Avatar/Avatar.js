import React, { useMemo } from 'react';
import cn from 'classnames';
import PropTypes from 'prop-types';

import useSemanticProp from '../../hooks/useSemanticProp';
import { omit } from '../../utils/helpers';

const mShape = Object.freeze({
  square: 'favt-square',
  circle: 'favt-circle',
});

const lShape = Object.keys(mShape);

const Avatar = ({
  className,
  src,
  style,
  size,
  color,
  shape,
  children,
  ...otherProps
}) => {
  return (
    <div
      className={cn('favt', mShape[shape], className)}
      style={{
        ...style,
        fontSize: size,
        color,
        backgroundImage: src ? `url(${src})` : undefined,
      }}
      {...otherProps}
    >
      {!src && <span className="favt-name">{children}</span>}
    </div>
  );
};

Avatar.displayName = 'Avatar';
Avatar.propTypes = {
  className: PropTypes.string,
  src: PropTypes.string,
  shape: PropTypes.oneOf(lShape),
  circle: PropTypes.bool,
  square: PropTypes.bool,
  size: PropTypes.string,
  color: PropTypes.string,
  style: PropTypes.object,
  children: PropTypes.any,
};
Avatar.defaultProps = {
  shape: 'circle',
};

const withSemantic = (Component) => {
  const SematicAvatar = (props) => {
    const shape = useSemanticProp('shape', props, lShape);

    const passedProps = useMemo(() => omit(props, [
      ...lShape,
      'shape',
    ]), [props]);

    return (
      <Component shape={shape} {...passedProps} />
    );
  };

  SematicAvatar.propTypes = {
    shape: PropTypes.oneOf(lShape),
    square: PropTypes.bool, // shape="square"
    circle: PropTypes.bool, // shape="circle"
  };
  SematicAvatar.defaultProps = {};
  SematicAvatar.displayName = 'SematicAvatar';

  return SematicAvatar;
};

export default withSemantic(Avatar);
