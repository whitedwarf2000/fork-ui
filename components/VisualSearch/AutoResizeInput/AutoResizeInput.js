import React, { useState, useCallback } from 'react';
import cn from 'classnames';

import useMeasure from '../../../hooks/useMeasure';
import useDebounce from '../../../hooks/useDebounce';

const AutoResizeInput = ({
  defaultValue,
  className,
  style,
  ...otherProps
}) => {
  const [displayValue, setDisplayValue] = useState(defaultValue);
  const [{ ref }, bounds] = useMeasure();
  const onChange = useCallback(e => setDisplayValue(e.target.value), [setDisplayValue]);
  const width = useDebounce(bounds.width, [50]);

  return (
    <div className={cn('fvs-auto-resize-input-wrapper', className)}>
      <input
        {...otherProps}
        defaultValue={defaultValue}
        className="fvs-auto-resize-input"
        onChange={onChange}
        style={{
          ...style,
          width: width + 8,
        }}
      />
      <div ref={ref} className="fvs-auto-resize-input-hidden">
        {displayValue}
      </div>
    </div>
  );
 };

 export default AutoResizeInput;
