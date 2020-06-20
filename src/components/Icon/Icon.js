import React, { useMemo } from 'react';
import cn from 'classnames';
import PropTypes from 'prop-types';

import svgs from './svg';

const Fallback = () => null;

const Icon = ({ name, className, style, color, size, ...otherProps }) => {
  const I = useMemo(() => svgs[name] || Fallback, [name]);

  return (
    <I
      className={cn('fui-icon', `fui-icon-${name}`, className)}
      style={{
        color: color || null,
        fontSize: size || null,
        ...style
      }}
      {...otherProps}
    />
  );
};

Icon.displayName = 'Icon';
Icon.propTypes = {
  name: PropTypes.string.isRequired,
  className: PropTypes.string,
  style: PropTypes.object,
  color: PropTypes.string,
  size: PropTypes.string,
};
Icon.defaultProps = {};

export default Icon;
