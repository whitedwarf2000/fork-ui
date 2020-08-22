import React, { useMemo, useCallback, useState, useEffect } from 'react';
import cn from 'classnames';
import PropTypes from 'prop-types';

import Item from './Item';
import useDetectRendered from '../../hooks/useDetectRendered';

const mapToObject = arr => arr.reduce((rs, key) => {
  rs[key] = true;
  return rs;
}, {});

const Collapse = ({ className, children, onActivePanelsChange, defaultActivePanels, accordion, ...otherProps }) => {
  const isRendered = useDetectRendered();
  const [activePanels, setActivePanels] = useState([...new Set(defaultActivePanels)]);
  const _onActivePanelsChange = useCallback(panelKey => {
    if (accordion) {
      return setActivePanels([panelKey]);
    }
    return setActivePanels(prev => {
      const _prev = new Set(prev);
      if (_prev.has(panelKey)) {
        _prev.delete(panelKey)
      } else {
        _prev.add(panelKey)
      }
      return [..._prev];
    });
  }, [accordion, setActivePanels]);

  useEffect(() => {
    if (isRendered) {
      onActivePanelsChange(activePanels);
    }
  }, [isRendered, activePanels, onActivePanelsChange]);

  const _activePanels = useMemo(() => mapToObject(activePanels), [activePanels]);

  return (
    <div className={cn('fui-collapse', className)} {...otherProps}>
      {React.Children.map(children, panel => {
        return React.cloneElement(panel, {
          active: !panel.props.disabled && _activePanels[panel.key],
          onClick: () => _onActivePanelsChange(panel.key),
          ...panel.props
        });
      })}
    </div>
  );
};

Collapse.Item = Item;

Collapse.displayName = 'Collapse';
Collapse.propTypes = {
  className: PropTypes.string,
  children: PropTypes.any,
  defaultActivePanels: PropTypes.array,
  onActivePanelsChange: PropTypes.func,
};
Collapse.defaultProps = {
  defaultActivePanels: [],
  onActivePanelsChange: f => f,
};

export default Collapse;
