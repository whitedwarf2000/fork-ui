import React, { useMemo } from 'react';
import cn from 'classnames';
import PropTypes from 'prop-types';

import Icon from '../Icon';
import useSemanticProp from '../../hooks/useSemanticProp';
import { omit } from '../../utils/helpers';

const mTypes = Object.freeze({
  primary: '--primary', // good for submit button
  danger: '--danger',
});

const lTypes = Object.keys(mTypes);

const Button = React.forwardRef(({
  className,
  circle,
  rounded,
  icon,
  pressed,
  color,
  textColor,
  size,
  style,
  glassed,
  children,
  ...otherProps
}, ref) => {
  const type = useSemanticProp('type', otherProps, lTypes);

  const passedProps = useMemo(() => omit(otherProps, [
    ...lTypes,
    'type',
  ]), [otherProps]);

  return (
    <button
      ref={ref}
      className={cn(
        'rc-button',
        {
          '--circle': circle,
          '--icon-button': icon,
          '--rounded': rounded,
          '--pressed': pressed,
          '--glassed': glassed,
          '--colored': color,
        },
        mTypes[type],
        className,
      )}
      style={{
        color: textColor || null,
        backgroundColor: color,
        fontSize: size || null,
        ...style
      }}
      {...passedProps}
    >
      {icon ? <Icon name={icon} /> : children}
    </button>
  );
});

Button.displayName = 'Button';
Button.propTypes = {
  className: PropTypes.string,
  color: PropTypes.string,
  size: PropTypes.string,
  circle: PropTypes.bool,
  rounded: PropTypes.bool,
  pressed: PropTypes.bool,
  glassed: PropTypes.bool,
  style: PropTypes.object,
  primary: PropTypes.bool,
  type: PropTypes.string,
  primary: PropTypes.bool,
  danger: PropTypes.bool,
  green: PropTypes.bool,
};
Button.defaultProps = {};

export default Button;
