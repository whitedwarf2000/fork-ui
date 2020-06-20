import React, { useState, useEffect, useCallback } from 'react';
import cn from 'classnames';
import PropTypes from 'prop-types';

import Droplet from '../Droplet';
import useFlexibleRef from '../../hooks/useFlexibleRef';
import useOnClickOutside from '../../hooks/useOnClickOutside';

const Handler = React.forwardRef(({ className, value, ...otherProps }, ref) => {
  const [droplet, setDroplet] = useState(false);
  const _ref = useFlexibleRef(ref);

  useEffect(() => {
    const handler = () => setDroplet(true);
  
    _ref.current.addEventListener('mouseenter', handler);

    return () => {
      _ref.current.removeEventListener('mouseenter', handler);
    }
  }, [_ref, setDroplet]);

  const clickOutsideHandler = useCallback(() => setDroplet(false), [setDroplet]);
  useOnClickOutside(_ref, clickOutsideHandler);

  return (
    <span
      ref={_ref}
      className={cn('fui-slider-handler', { 'fui-slider-handler--droplet': droplet }, className)}
      {...otherProps}
    >
      <Droplet className="fui-slider-handler-droplet">
        {value}
      </Droplet>
    </span>
  )
});

export default Handler;
