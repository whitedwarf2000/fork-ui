import React, { useMemo } from 'react';
import cn from 'classnames';
import PropTypes from 'prop-types';
import { isString, isNumber } from 'lodash';

const mColors = Object.freeze({
  primary: 'fbtn-primary',
  transparent: 'fbtn-transparent',
  danger: 'fbtn-danger',
});
const mShapes = Object.freeze({
  circle: 'fbtn-circle',
  rounded: 'fbtn-rounded',
});
const mBorders = Object.freeze({
  solid: 'fbtn-solid',
  dashed: 'fbtn-dashed',
});

const lColors = Object.keys(mColors);
const lShapes = Object.keys(mShapes);
const lBorders = Object.keys(mBorders);

const Button = React.forwardRef(({
  className,
  icon,
  size,
  style,
  children,
  disabled,
  shape,
  color,
  border,
  ...otherProps
}, ref) => {

  const child = useMemo(() => {
    if (icon) {
      return icon;
    }

    return React.Children.map(children, item => {
      if (isString(item) || isNumber(item)) {
        return <span key={item.key}>{item}</span>;
      }

      return item;
    });
  }, [icon, children]);

  return (
    <button
      ref={ref}
      className={cn(
        'fbtn',
        {
          'fbtn-icon': icon,
        },
        mShapes[shape],
        mColors[color],
        mBorders[border],
        className,
      )}
      style={{
        fontSize: size,
        ...style,
      }}
      disabled={disabled}
      {...otherProps}
    >
      <span className="fbtn-child">
        {child}
      </span>
    </button>
  );
});

Button.displayName = 'Button';
Button.propTypes = {
  className: PropTypes.string,
  color: PropTypes.oneOf(lColors),
  shape: PropTypes.oneOf(lShapes),
  size: PropTypes.string,
  icon: PropTypes.any,
  style: PropTypes.object,
  children: PropTypes.any,
  border: PropTypes.oneOf(lBorders),
  disabled: PropTypes.bool,
};
Button.defaultProps = {};

export default Button;
