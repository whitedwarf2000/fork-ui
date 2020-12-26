import React, { useMemo } from 'react';
import cn from 'classnames';
import PropTypes from 'prop-types';
import useSemanticProp from '../../hooks/useSemanticProp';

const mAnimations = Object.freeze({
  wave: 'floader-dots-wave',
  buble: 'floader-dots-buble',
});

const lAnimations = Object.keys(mAnimations);

const Dots = ({ color, size, className, ...otherProps }) => {
  const animation = useSemanticProp('animation', otherProps, lAnimations);

  return (
    <div
      style={{ '--size': size, color }}
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
  color: PropTypes.string,
  size: PropTypes.string,
  className: PropTypes.string,
  animation: PropTypes.oneOf(lAnimations)
};
Dots.defaultProps = {
  animation: 'wave'
};

const withSemantic = (Component) => {
  const SemanticDots = (props) => {
    return (
      <Component {...props} />
    );
  };

  SemanticDots.displayName = 'SemanticDots';
  SemanticDots.propTypes = {};
  SemanticDots.defaultProps = {};

  return SemanticDots;
};

export default withSemantic(Dots);
