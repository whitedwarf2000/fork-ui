import React from 'react';
import cn from 'classnames';
import PropTypes from 'prop-types';
import useSemanticProp from '../../hooks/useSemanticProp';

const mPlacement = Object.freeze({
  top: '--top',
  bottom: '--bottom',
});
const lPlacement = Object.keys(mPlacement);

const Droplet = ({ className, size, color, children, ...otherProps }) => {
  const placement = useSemanticProp('placement', otherProps, lPlacement);

  return (
    <div
      style={{
        fontSize: size,
        backgroundColor: color,
      }}
      className={cn(
        'rc-droplet',
        mPlacement[placement || 'top'],
        className
      )}
    >
      <span>
        {children}
      </span>
    </div>
  );
};

Droplet.displayName = 'Droplet';
Droplet.propTypes = {
  className: PropTypes.string,
  size: PropTypes.string,
  color: PropTypes.string,
  placement: PropTypes.string,
  top: PropTypes.bool,
  bottom: PropTypes.bool,
};
Droplet.defaultProps = {};

export default Droplet;
