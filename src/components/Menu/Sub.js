import React, { useState, useCallback, useContext, useMemo, memo } from 'react';
import cn from 'classnames';
import PropTypes from 'prop-types';
import { useSpring, animated } from 'react-spring';

import Icon from '../Icon';
import MenuContext from './MenuContext';
import displayName from './displayName';
import getMenuInfo from './getMenuInfo';
import { difference } from '../../utils/helpers';
import useMeasure from '../../hooks/useMeasure';
import usePrevious from '../../hooks/usePrevious';

const List = memo(({ children, isExpanded, _key }) => {
  const previous = usePrevious(isExpanded);
  const [bind, { height: viewHeight }] = useMeasure();

  const { height, ...otherStyle } = useSpring({
    from: {
      height: 0,
      opacity: 0,
    },
    to: {
      height: isExpanded ? viewHeight : 0,
      opacity: isExpanded ? 1 : 0,
    },
  });

  return (
    <animated.div
      className="rc-menu-sub-list"
      style={{
        ...otherStyle,
        height: isExpanded && previous === isExpanded ? 'auto' : height,
      }}
    >
      <ul {...bind}>
        {React.Children.map(children, (elm, idx) => React.cloneElement(elm, {
          _subKey: _key,
          _key: elm.hasOwnProperty('key') ? elm.key : idx,
        }))}
      </ul>
    </animated.div>
  );
});

const Sub = ({ defaultExpanded, className, children, title, icon, _key }) => {
  const { iconOnly, selectedSubKeys, hiddenKeys } = useContext(MenuContext);
  const selected = useMemo(() => selectedSubKeys.indexOf(_key) >= 0, [selectedSubKeys, _key]);
  const hidden = useMemo(() => {
    const items = Object.keys(getMenuInfo(children).items);
    return !difference(items, hiddenKeys).length;
  }, [hiddenKeys, children]);

  const [isExpanded, setIsExpanded] = useState(defaultExpanded);
  const toggleExpanded = useCallback(() => setIsExpanded(prev => !prev), []);

  return (
    <li
      className={cn(
        'rc-menu-sub',
        {
          '--expanded': isExpanded,
          '--icon-only': iconOnly,
          '--selected': selected,
          '--hidden': hidden,
        },
        className,
      )}
    >
      <div className="rc-menu-sub-title" onClick={toggleExpanded}>
        <div style={{ display: 'flex', alignItems: 'center' }}>
          {icon && <Icon name={icon} className="rc-menu-sub-title-icon" />}
          {(iconOnly && !icon && title) && <span style={{ textTransform: 'uppercase '}}>{title[0]}</span>}
          <span className="rc-menu-sub-content">{title}</span>
        </div>
        <Icon name="caret-down" className="rc-menu-sub-icon" />
      </div>
      <List isExpanded={isExpanded} _key={_key}>
        {children}
      </List>
    </li>
  );
};

Sub.displayName = displayName.sub;
Sub.propTypes = {
  className: PropTypes.string,
  children: PropTypes.any,
  title: PropTypes.string,
  _key: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
  defaultExpanded: PropTypes.bool,
};
Sub.defaultProps = {};

export default Sub;
