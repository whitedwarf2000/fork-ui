import React, { useMemo } from 'react';
import cn from 'classnames';
import PropTypes from 'prop-types';

import useSemanticProp from '../../hooks/useSemanticProp';
import { omit } from '../../utils/helpers';

const mAnimations = Object.freeze({
  wave: 'floader-dots-wave',
  buble: 'floader-dots-buble',
});

const lAnimations = Object.keys(mAnimations);

const Dots = ({ style, color, size, animation, className, ...otherProps }) => {
  return (
    <div
      style={{
        ...style,
        color,
        '--dot-size': size ? `${size}px` : undefined,
      }}
      className={cn('floader-dots', mAnimations[animation] || 'floader-dots-buble', className)}
      {...otherProps}
    >
      <div className="floader-dot floader-dot-1" />
      <div className="floader-dot floader-dot-2" />
      <div className="floader-dot floader-dot-3" />
    </div>
  );
};

Dots.displayName = 'Loader.Dots';
Dots.propTypes = {
  style: PropTypes.string,
  color: PropTypes.string,
  size: PropTypes.string,
  className: PropTypes.string,
  animation: PropTypes.oneOf(lAnimations)
};
Dots.defaultProps = {
  animation: 'buble',
};

const withSemantic = (Component) => {
  const SemanticDots = (props) => {
    const animation = useSemanticProp('animation', props, lAnimations);
    const passedProps = useMemo(() => omit(props, [...lAnimations, 'animation']), [props]);

    return (
      <Component animation={animation} {...passedProps} />
    );
  };

  SemanticDots.displayName = 'SemanticDots';
  SemanticDots.propTypes = {
    animation: PropTypes.oneOf(lAnimations),
    wave: PropTypes.bool,
    buble: PropTypes.bool,
  };
  SemanticDots.defaultProps = {};

  return SemanticDots;
};

export default withSemantic(Dots);
