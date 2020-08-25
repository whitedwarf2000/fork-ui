import React, { useContext } from 'react';
import cn from 'classnames';
import PropTypes from 'prop-types';
import Context from './Context';

const Body = ({ className, children, ...otherProps }) => {
  const { toggleBody } = useContext(Context);
  return (
    <div className={cn('fui-dialog-body', className)} {...otherProps}>
      {toggleBody ? children : null}
    </div>
  );
};

Body.displayName = 'Dialog.Body';

export default Body;
