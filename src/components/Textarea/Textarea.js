import React, { useRef, useState, useCallback, useEffect } from 'react';
import cn from 'classnames';
import PropTypes from 'prop-types';

require('./Textarea.scss');

const Textarea = ({ className, ...otherProps }) => {
  return (
    <textarea
      {...otherProps}
      className={cn('rc-textarea', className)}
    />
  );
}

Textarea.displayName = 'Textarea';
Textarea.propTypes = {
  className: PropTypes.string,
};
Textarea.defaultProps = {};

export default Textarea;
