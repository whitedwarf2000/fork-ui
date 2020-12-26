import React, { useMemo } from 'react';
import cn from 'classnames';
import PropTypes from 'prop-types';
import useSemanticProp from '../../hooks/useSemanticProp';
import { omit } from '../../utils/helpers';

const mShape = Object.freeze({
  circle: 'fskele-circle',
  rect: 'fskele-rect',
  p: 'fskele-p'
});

const lShape = Object.keys(mShape);

const Skeleton = ({
  className,
  w,
  h,
  style,
  size,
  shape,
  animated,
  ...otherProps
}) => {
  return (
    <div
      style={{
        width: w,
        height: h,
        fontSize: size,
        ...style
      }}
      className={
        cn(
          'fskele',
          {
            'fskele-animated': animated,
          },
          mShape[shape],
          className,
      )}
      {...otherProps}
    />
  );
};

Skeleton.displayName = 'Skeleton';
Skeleton.propTypes = {
  className: PropTypes.string,
  shape: PropTypes.string,
  w: PropTypes.string,
  h: PropTypes.string,
  size: PropTypes.string,
  style: PropTypes.object,
  animated: PropTypes.bool,
};
Skeleton.defaultProps = {
  animated: true,
};

const withSemantic = (Component) => {
  const SemanticSkeleton = (props) => {
    const shape = useSemanticProp('shape', props, lShape);
    const passedProps = useMemo(() => omit(props, [...lShape, 'shape']), [props]);

    return (
      <Component
        shape={shape}
        {...passedProps}
      />
    );
  };

  SemanticSkeleton.displayName = 'SemanticSkeleton';
  SemanticSkeleton.propTypes = {
    shape: PropTypes.string,
    circle: PropTypes.bool,
    rect: PropTypes.bool,
    p: PropTypes.bool,
  };
  SemanticSkeleton.defaultProps = {};

  return SemanticSkeleton;
};

export default withSemantic(Skeleton);
