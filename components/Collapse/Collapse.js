import React, { useMemo } from 'react';
import cn from 'classnames';
import PropTypes from 'prop-types';

import Panel from './Panel';
import useCollapse from './useCollapse';

const Collapse = ({ className, children, value, onChange, ...otherProps }) => {
  return (
    <div className={cn('fcollapse', className)} {...otherProps}>
      {children}
    </div>
  );
};

Collapse.Panel = Panel;
Collapse.useCollapse = useCollapse;

Collapse.displayName = 'Collapse';
Collapse.propTypes = {
  className: PropTypes.string,
  children: PropTypes.any,
  value: PropTypes.array,
  onChange: PropTypes.func,
};
Collapse.defaultProps = {
  value: [],
  onChange: f => f,
};

export default Collapse;
