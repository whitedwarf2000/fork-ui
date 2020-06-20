import React, { useMemo } from 'react';
import cn from 'classnames';
import PropTypes from 'prop-types';
import useSemanticProp from '../../hooks/useSemanticProp';

const mAnimations = Object.freeze({
  wave: 'fui-loader-dots--wave',
  buble: 'fui-loader-dots--buble',
});

const lAnimations = Object.keys(mAnimations);

const Dots = ({ color, size, className, dot, ...otherProps }) => {
  const dots = useMemo(() => {
    var rs = [];
    for (let i = 0; i < dot; i++) {
      rs.push(<div className="fui-loader-dot" key={i} />);
    }

    return rs;
  }, [dot]);

  const animation = useSemanticProp('animation', otherProps, lAnimations);

  return (
    <div
      style={{ fontSize: size, color }}
      className={cn('fui-loader-dots', mAnimations[animation] || 'fui-loader-dots--buble', className)}
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
