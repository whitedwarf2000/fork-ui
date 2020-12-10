import { useState, useCallback, useMemo } from 'react';

const _loop = function(maxValue, cb) {
  const rs = [];
  for (let i = 0; i <= maxValue; i++) {
    rs.push(cb(i));
  }

  return rs;
};

const checkLight = (hoverValue, idx, value) => (hoverValue >= idx) || (hoverValue === -1 && value >= idx);

const useRater = function(defaultProps) {
  const [maxValue, setMaxValue] = useState(defaultProps.maxValue || 4);
  const [value, setValue] = useState(defaultProps.value || -1);

  const [hoverValue, setHoverValue] = useState(-1);
  const isLight = useMemo(() => _loop(maxValue, idx => checkLight(hoverValue, idx, value)), [maxValue, hoverValue, value]);

  const onMouseLeave = useCallback(() => setHoverValue(-1), [setHoverValue]);
  const onMouseEnter = useMemo(() => _loop(maxValue, idx => () => setHoverValue(idx)), [maxValue, setHoverValue]);
  const onClick = useMemo(() => _loop(maxValue, idx => () => setValue(idx)), [maxValue, setValue]);

  const loop = useCallback(cb => _loop(maxValue, cb), [maxValue]);

  return [
    {
      onMouseLeave,
    },
    {
      isLight,
      onMouseEnter,
      onClick,
    },
    {
      value,
      hoverValue,
      maxValue,
      loop,
      setMaxValue,
      setValue,
      setHoverValue,
    }
  ];
};

export default useRater;
