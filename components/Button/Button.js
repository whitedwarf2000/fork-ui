import React, { useMemo } from 'react';
import cn from 'classnames';
import PropTypes from 'prop-types';

import Loader from '../Loader';

import useSemanticProp from '../../hooks/useSemanticProp';
import { omit, isString, isNumber } from '../../utils/helpers';

const mColors = Object.freeze({
  primary: 'fbtn-primary',
  transparent: 'fbtn-transparent',
  ghost: 'fbtn-ghost',
  danger: 'fbtn-danger',
  success: 'fbtn-success',
});

const mShapes = Object.freeze({
  circle: 'fbtn-circle',
  rounded: 'fbtn-rounded',
});

const lColors = Object.keys(mColors);
const lShapes = Object.keys(mShapes);

const Button = React.forwardRef(({
  className,
  icon,
  size,
  style,
  children,
  loading,
  disabled,
  ...otherProps
}, ref) => {
  const shape = useSemanticProp('shape', otherProps, lShapes);
  const color = useSemanticProp('color', otherProps, lColors);

  // ignore semantic props
  const passedProps = useMemo(() => omit(otherProps, [
    ...lColors,
    ...lShapes,
    'color',
    'shape',
  ]), [otherProps]);

  return (
    <button
      ref={ref}
      className={cn(
        'fbtn',
        {
          'fbtn-icon': icon,
          'fbtn-loading': loading,
        },
        mShapes[shape],
        mColors[color],
        className,
      )}
      style={{
        fontSize: size,
        ...style,
      }}
      disabled={loading || disabled}
      {...passedProps}
    >
      {loading && <Loader.Spinner />}
      <span className="fbtn-child">
        {(() => {
          if (icon) {
            return icon;
          }

          return React.Children.map(children, item => {
            if (isString(item) || isNumber(item)) {
              return <span key={item.key}>{item}</span>;
            }

            return item;
          });
        })()}
      </span>
    </button>
  );
});

Button.displayName = 'Button';
Button.propTypes = {
  className: PropTypes.string,
  color: PropTypes.string,
  shape: PropTypes.string,
  size: PropTypes.string,
  circle: PropTypes.bool, // shape="circle"
  rounded: PropTypes.bool, // shape="rounded"
  icon: PropTypes.any,
  style: PropTypes.object,
  primary: PropTypes.bool, // color="primary"
  danger: PropTypes.bool, // color="danger"
  success: PropTypes.bool, // color="success"
  transparent: PropTypes.bool, // color="transparent"
  ghost: PropTypes.bool, // color="ghost"
  children: PropTypes.any,
  loading: PropTypes.bool,
};
Button.defaultProps = {};

export default Button;
