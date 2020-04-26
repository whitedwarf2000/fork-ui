import React from 'react';
import PropTypes from 'prop-types';

const NativeImage = React.forwardRef(({ onCompleted, ...otherProps }, ref) => {
  return (
    <img
      ref={ref}
      {...otherProps}
    />
  );
});

NativeImage.displayName = 'Image.Native';
NativeImage.propTypes = {
  onCompleted: PropTypes.func,
};
NativeImage.defaultProps = {
  onCompleted: f => f,
};

export default NativeImage;
