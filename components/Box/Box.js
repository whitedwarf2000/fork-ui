import React from 'react';
import cn from 'classnames';
import PropTypes from 'prop-types';

import Loader from '../Loader';

const Box = ({ className, children, loading, skeleton, ...otherProps }) => {
  return (
    <div
      className={cn(
        'fbox',
        {
          'fbox-loading': loading,
          'fbox-skeleton': skeleton,
          'fbox-dots': !skeleton
        },
        className
      )}
    >
      <div className='fbox-content' {...otherProps}>
        {children}
      </div>
      {loading && (
        <div className="fbox-loader">
          {skeleton ? skeleton : <Loader.Dots />}
        </div>
      )}
    </div>
  );
};

Box.displayName = 'Box';
Box.propTypes = {
  children: PropTypes.any,
  loading: PropTypes.bool,
  skeleton: PropTypes.any,
  className: PropTypes.string
};
Box.defaultProps = {};

export default Box;
