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

const Button = React.forwardRef(({
  className,
  icon,
  size,
  style,
  children,
  loading,
  disabled,
  shape,
  color,
  border,
  ...otherProps
}, ref) => {
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
        mBorders[border],
        className,
      )}
      style={{
        fontSize: size,
        ...style,
      }}
      disabled={loading || disabled}
      {...otherProps}
    >
      {loading && <Loader.Spinner className="fbtn-spinner" />}
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
  icon: PropTypes.any,
  style: PropTypes.object,
  children: PropTypes.any,
  loading: PropTypes.bool,
  border: PropTypes.oneOf(['solid', 'dashed']),
  disabled: PropTypes.bool,
};
Button.defaultProps = {};

const withSemantic = (Component) => {
  const SemanticButton = (props) => {
    const shape = useSemanticProp('shape', props, lShapes);
    const color = useSemanticProp('color', props, lColors);
  
    // ignore semantic props
    const passedProps = useMemo(() => omit(props, [
      ...lColors,
      ...lShapes,
      'color',
      'shape',
    ]), [props]);

    return (
      <Component
        shape={shape}
        color={color}
        {...passedProps}
      />
    );
  };

  SemanticButton.propTypes = {
    color: PropTypes.string,
    shape: PropTypes.string,
    primary: PropTypes.bool, // color="primary"
    danger: PropTypes.bool, // color="danger"
    transparent: PropTypes.bool, // color="transparent"
    circle: PropTypes.bool, // shape="circle"
    rounded: PropTypes.bool, // shape="rounded"
  };
  SemanticButton.defaultProps = {};
  SemanticButton.displayName = 'SemanticButton';

  return SemanticButton;
}
export default withSemantic(Button);
