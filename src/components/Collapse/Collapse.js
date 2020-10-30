import React, { useMemo } from 'react';
import cn from 'classnames';
import PropTypes from 'prop-types';

import Item from './Item';
import useCollapse from './useCollapse';

const mapToObject = arr => arr.reduce((rs, key) => {
  rs[key] = true;
  return rs;
}, {});

const Collapse = ({ className, children, value, onChange, ...otherProps }) => {
  const _activePanels = useMemo(() => mapToObject(value), [value]);

  return (
    <div className={cn('fcollapse', className)} {...otherProps}>
      {React.Children.map(children, panel => {
        return React.cloneElement(panel, {
          active: !panel.props.disabled && _activePanels[panel.key],
          onClick: () => onChange(panel.key),
          ...panel.props
        });
      })}
    </div>
  );
};

Collapse.Item = Item;
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
