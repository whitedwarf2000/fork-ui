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

const Avatar = ({ className, src, style, name, size, color, ...otherProps }) => {
  const shape = useSemanticProp('shape', otherProps, lShape);

  const passedProps = useMemo(() => omit(otherProps, [
    ...lShape,
    'shape',
  ]), [otherProps]);

  return (
    <div
      className={cn('favt', mShape[shape] || 'favt-circle', className)}
      style={{
        ...style,
        fontSize: size,
        color,
        backgroundImage: `url(${src})`,
      }}
      {...passedProps}
    >
      {(!src && name) && <span className="favt-name">{name}</span>}
    </div>
  );
};

Avatar.displayName = 'Avatar';
Avatar.propTypes = {
  className: PropTypes.string,
  src: PropTypes.string,
  shape: PropTypes.string,
  circle: PropTypes.bool,
  square: PropTypes.bool,
  name: PropTypes.string,
  size: PropTypes.string,
  color: PropTypes.string,
};
Avatar.defaultProps = {};

export default Avatar;
