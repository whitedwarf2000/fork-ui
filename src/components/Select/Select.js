import React, { useState, useLayoutEffect, useRef, useCallback, useMemo } from 'react';
import cn from 'classnames';
import PropTypes from 'prop-types';

import Icon from '../Icon';
import Menu from '../Menu';
import Overlay from '../Overlay';
import Chip from '../Chip';

import SingleValue from './SingleValue';

const Select = ({
  className,
  children,
  placement,
  placeholder,
  multiple,
  absolute,
  hiddenSelected,
  loading,
  onFilter,
  ...otherProps
}) => {
  const [selectWidth, setSelectWidth] = useState();
  const [isDrop, setIsDrop] = useState(false);
  const [value, setValue] = useState([]);

  const ref = useRef();

  useLayoutEffect(() => {
    setSelectWidth(ref.current.clientWidth);
  }, [isDrop]);

  const onToggleDrop = useCallback(() => setIsDrop(prev => !prev), []);
  const onItemClick = useCallback((key) => {
    if (!multiple) {
      setValue([key]);
      return setIsDrop(false);
    }

    return setValue((prev) => {
      const _value = new Set(prev);
      if (_value.has(key)) {
        _value.delete(key);
      } else {
        _value.add(key);
      }
      return [..._value];
    });
  }, [multiple, setIsDrop, setValue]);

  const onVisibleChange = useCallback(visible => setIsDrop(visible), []);
  const onRemove = useCallback((keyVal) => {
    setValue((prev) => {
      const _value = new Set(prev);
      _value.delete(keyVal);
      return [..._value];
    })
  }, [setValue]);

  const items = useMemo(() => Menu.getMenuInfo(children).items, [children]);

  const onInputRemove = useCallback(e => {
    if (e.key === 'Backspace') {
      setValue(prev => prev.filter((valKey, idx) => idx !== prev.length - 1));
    }
  }, [setValue]);

  const hiddenKeys = useMemo(() => hiddenSelected ? value : [], [value, hiddenSelected]);

  return (
    <Overlay
      className="rc-select-absolute"
      absolute={absolute}
      visible={isDrop}
      onVisibleChange={onVisibleChange}
      canOutsideClickClose
      trigger={[]}
      placement={placement}
      overlay={(
        <Menu
          loading={loading}
          multiple={multiple}
          hiddenKeys={hiddenKeys}
          selectedKeys={value}
          className="rc-select-dropdown"
          style={{
            width: selectWidth,
          }}
          onItemClick={onItemClick}
        >
          {children}
        </Menu>
      )}
    >
      <div
        {...otherProps}
        ref={ref}
        className={cn('rc-select', { '--is-drop': isDrop }, className)}
      >
        <div className="rc-select-input-wrapper">
          <div className="rc-select-input-values">
            {multiple
              ? value.map(keyVal => (
                <Chip
                  key={keyVal}
                  icon={items[keyVal].icon}
                  rounded
                  label={items[keyVal].title}
                  closable
                  onRemove={() => onRemove(keyVal)}
                />
              ))
              : (
                <SingleValue
                  items={items}
                  value={value}
                />
              )
            }
          </div>
          <input
            placeholder={!value.length ? placeholder : ''}
            value=""
            className="rc-select-input"
            onClick={onToggleDrop}
            onKeyDown={onInputRemove}
          />
        </div>
        <Icon name="caret-down" className="rc-select-icon" />
      </div>
    </Overlay>
  );
};

Select.Option = Menu.Item;
Select.Group = Menu.ItemGroup;

Select.displayName = 'Select';
Select.propTypes = {
  className: PropTypes.string,
  placement: PropTypes.string,
  absolute: PropTypes.bool,
  hiddenSelected: PropTypes.bool,
  loading: PropTypes.bool,
  onFilter: PropTypes.func,
  multiple: PropTypes.bool,
  children: PropTypes.any,
  placeholder: PropTypes.string,
};
Select.defaultProps = {
  hiddenSelected: true,
  placement: 'bottom-left',
  onFilter: f => f,
};

export default Select;
