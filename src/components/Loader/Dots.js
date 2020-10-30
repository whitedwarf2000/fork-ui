import React, { useMemo } from 'react';
import cn from 'classnames';
import PropTypes from 'prop-types';
import useSemanticProp from '../../hooks/useSemanticProp';

const mAnimations = Object.freeze({
  wave: 'floader-dots-wave',
  buble: 'floader-dots-buble',
});

const lAnimations = Object.keys(mAnimations);

const Dots = ({ color, size, className, dot, ...otherProps }) => {
  const dots = useMemo(() => {
    var rs = [];
    for (let i = 0; i < dot; i++) {
      rs.push(<div className="floader-dot" key={i} />);
    }

    return rs;
  }, [dot]);

  const animation = useSemanticProp('animation', otherProps, lAnimations);

  return (
    <div
      style={{ fontSize: size, color }}
      className={cn('floader-dots', mAnimations[animation] || 'floader-dots-buble', className)}
      {...otherProps}
    >
      {dots}
    </div>
  );
};

Dots.displayName = 'Loader.Dots';
Dots.propTypes = {
  color: PropTypes.string,
  size: PropTypes.string,
  className: PropTypes.string,
  wave: PropTypes.bool,
  dot: PropTypes.number,
};
Dots.defaultProps = {
  dot: 3,
};

export default Dots;
