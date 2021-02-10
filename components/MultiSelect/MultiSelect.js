import React, { useRef, useMemo, useCallback, useState } from 'react';
import PropTypes from 'prop-types';
import cn from 'classnames';

import Overlay from '../Overlay';
import Chip from '../Chip';
import useMeasure from '../../hooks/useMeasure';

const keyCodeMap = Object.freeze({
  DELETE: 8,
  ENTER: 13,
});

const Option = ({
  className,
  children,
  onSelected,
  uid,
  value,
  data,
  ...otherProps
}) => {
  const onClick = useCallback(() => {
    onSelected(uid, value, data);
  }, [onSelected, uid, value, data]);

  return (
    <button className={cn('fselect-opt', className)} {...otherProps} onClick={onClick}>
      {children}
    </button>
  );
};

const OptionHeader = ({ className, ...otherProps }) => {
  return (
    <div className={cn('fselect-opt-header', className)} {...otherProps} />
  );
}

const OptionBody = ({ className, ...otherProps }) => {
  return (
    <div className={cn('fselect-opt-body', className)} {...otherProps} />
  );
};

const MultiSelect = ({
  overlayClass,
  children,
  className,
  render,
  selectedOptions,
  onChipClose,
  onInputKeyDownWithBlank,
}) => {
  const inputRef = useRef();
  const [{ ref }, bounds] = useMeasure();
  const offset = useMemo(() => [0, 1], []);
  const [isFocus, setIsFocus] = useState(false);

  const onFocus = useCallback(() => {
    setIsFocus(true);
  }, [setIsFocus]);

  const onBlur = useCallback(() => {
    setIsFocus(false);
  }, [setIsFocus]);

  const onKeyDown = useCallback((e) => {
    if (e.keyCode === keyCodeMap.DELETE) {
      if (inputRef && inputRef.current && !inputRef.current.value) {
        onInputKeyDownWithBlank(e);
      }
    }
  }, [inputRef, onInputKeyDownWithBlank]);

  const renderedSelectedOptions = useMemo(() => {
    const rs = [];
    for(const selectedOptionKey in selectedOptions) {
      rs.push(render(selectedOptions[selectedOptionKey], () => onChipClose(selectedOptionKey)));
    }

    return rs;
  }, [selectedOptions, render, onChipClose]);

  const onClickOutside = useCallback((instance, e) => {
    if (!ref.current.contains(e.target)) {
      instance.hide();
    }
  }, [ref]);

  return (
    <Overlay
      placement="bottom-start"
      trigger="click"
      maxWidth="none"
      role="dropdown"
      offset={offset}
      hideOnClick="toggle"
      onClickOutside={onClickOutside}
      content={(
        <div className="fmultiselect-overlay-content" style={{ minWidth: bounds.width + 5 }}>
          {children}
        </div>
      )}
      triggerTarget={inputRef.current}
      className={cn('fmultiselect-overlay', overlayClass)}
    >
        <button className={cn('fmultiselect', { 'fmultiselect--is-focus': isFocus }, className)} ref={ref}>
          {renderedSelectedOptions}
          <input
            autoComplete={false}
            unselectable="on"
            ref={inputRef}
            className="fmultiselect-input"
            onFocus={onFocus}
            onBlur={onBlur}
            onKeyDown={onKeyDown}
          />
        </button>
    </Overlay>
  );
};

Option.OptionHeader = OptionHeader;
Option.OptionBody = OptionBody;

MultiSelect.Option = Option;
MultiSelect.displayName = 'MultiSelect';
MultiSelect.propTypes = {
  render: PropTypes.func,
  onInputKeyDownWithBlank: PropTypes.func,
};
MultiSelect.defaultProps = {
  render: (selectedOption, onChipClose) => {
    return (
      <Chip key={selectedOption.key} closable onClose={onChipClose}>
        {selectedOption.value}
      </Chip>
    )
  },
  onInputKeyDownWithBlank: f => f,
};

export default MultiSelect;
