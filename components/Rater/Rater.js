import React, { useState, useMemo } from 'react';
import cn from 'classnames';
import PropTypes from 'prop-types';

import Star from '../icons/all/Star';
import useRater from './useRater';

const Rater = ({ className, size, style, ...otherProps }) => {
  return (
    <div
      className={cn('frater', className)}
      style={{
        ...style,
        fontSize: size,
      }}
      {...otherProps}
    />
  );
};

Rater.Item = ({ isLight, className, ...otherProps }) => {
  return (
    <div
      className={cn('frater-item', { 'frater-item-light': isLight }, className)}
      {...otherProps}
    />
  );
};
Rater.Star = props => <Rater.Item {...props}><Star /></Rater.Item>;

Rater.displayName = 'Rater';
Rater.useRater = useRater;

Rater.propTypes = {
  className: PropTypes.string,
  style: PropTypes.object,
  size: PropTypes.string,
};
Rater.defaultProps = {};

export default Rater;
