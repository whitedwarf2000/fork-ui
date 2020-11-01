import React, { useMemo } from 'react';
import cn from 'classnames';
import PropTypes from 'prop-types';

import Loader from '../Loader';

import useSemanticProp from '../../hooks/useSemanticProp';
import { omit, isString, isNumber } from '../../utils/helpers';

const mColors = Object.freeze({
  primary: 'fbtn-primary',
  transparent: 'fbtn-transparent',
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
            /* wrapper children by span tags for fix bugs css */
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
  transparent: PropTypes.bool, // color="transparent"
  children: PropTypes.any,
  loading: PropTypes.bool,
};
Button.defaultProps = {};

export default Button;
