import React, { useMemo, useCallback, useState, useEffect } from 'react';
import cn from 'classnames';
import PropTypes from 'prop-types';

import Item from './Item';

const mapToObject = arr => arr.reduce((rs, key) => {
  rs[key] = true;
  return rs;
}, {});

const Collapse = ({ className, onActiveKeysChange, onPanelClick, children, accordion, ...otherProps }) => {
  const isControlled = useMemo(() => otherProps.hasOwnProperty('activeKeys'), [otherProps]);
  const [activeKeys, setActiveKeys] = useState(isControlled ? otherProps.activeKeys : otherProps.defaultActiveKeys);
  useMemo(() => {
    if (isControlled) {
      return setActiveKeys(otherProps.activeKeys);
    }
  }, [isControlled, otherProps.activeKeys, setActiveKeys]);

  useEffect(() => {
    onActiveKeysChange(activeKeys);
  }, [activeKeys]);

  const __activeKeys = useMemo(() => mapToObject(activeKeys), [activeKeys]);

  const _onPanelClick = useCallback((key) => {
    if (isControlled) {
      return onPanelClick(key);
    }

    if (accordion) {
      return setActiveKeys(prev => {
        if (prev.indexOf(key) >= 0) {
          return [];
        }
        return [key];
      });
    }

    return setActiveKeys(prev => {
      if (prev.indexOf(key) >= 0) {
        return prev.filter(_key => _key !== key)
      }
      return [...prev, key];
    });
  }, [accordion, isControlled, setActiveKeys, onPanelClick]);

  return (
    <div className={cn('rc-collapse', className)}>
      {React.Children.map(children, elm => {
        return React.cloneElement(elm, {
          active: __activeKeys[elm.key],
          onClick: () => _onPanelClick(elm.key),
          ...elm.props
        });
      })}
    </div>
  );
};

Collapse.Item = Item;

Collapse.displayName = 'Collapse';
Collapse.propTypes = {
  className: PropTypes.string,
  defaultActiveKeys: PropTypes.array,
  activeKeys: PropTypes.array,
  children: PropTypes.any,
  onActiveKeysChange: PropTypes.func,
  onPanelClick: PropTypes.func,
  accordion: PropTypes.bool,
};
Collapse.defaultProps = {
  defaultActiveKeys: [],
  onActiveKeysChange: f => f,
  onPanelClick: f => f,
};

export default Collapse;
