import React, { useEffect, useRef } from 'react';
import cn from 'classnames';
import useUniqueId from '../../hooks/useUniqueId';
import StickyJS from '../../libs/sticky';

const Sticky = ({
  className,
  stickyClass,
  stickyContainer,
  marginTop,
  marginBottom,
  children,
}) => {
  const id = useUniqueId();
  const ref = useRef();

  useEffect(() => {
    ref.current = new StickyJS(`#${id}`, {
      stickyClass,
      stickyContainer,
      marginTop,
      marginBottom,
    });
    return () => ref.current.sticky.destroy();
  }, []);

  return (
    <div className={cn('fsticky', className)} id={id}>
      {children}
    </div>
  );
};

export default Sticky;
