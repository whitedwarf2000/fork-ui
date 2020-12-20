import { useState, useCallback, useMemo } from 'react';

const _loop = function(maxIndex, cb) {
  const rs = [];
  for (let i = 0; i <= maxIndex; i++) {
    rs.push(cb(i));
  }

  return rs;
};

const checkLight = (hoverIndex, i, index) => (hoverIndex >= i) || (hoverIndex === -1 && index >= i);

const useRater = function(defaultProps) {
  const [maxIndex, setMaxIndex] = useState(defaultProps.maxIndex || 4);
  const [index, setIndex] = useState(defaultProps.index || -1);

  const [hoverIndex, setHoverIndex] = useState(-1);
  const isLight = useMemo(() => _loop(maxIndex, i => checkLight(hoverIndex, i, index)), [maxIndex, hoverIndex, index]);

  const onMouseLeave = useCallback(() => setHoverIndex(-1), [setHoverIndex]);
  const onMouseEnter = useMemo(() => _loop(maxIndex, i => () => setHoverIndex(i)), [maxIndex, setHoverIndex]);
  const onClick = useMemo(() => _loop(maxIndex, i => () => setIndex(i)), [maxIndex, setIndex]);

  const loop = useCallback(cb => _loop(maxIndex, cb), [maxIndex]);

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
      index,
      hoverIndex,
      maxIndex,
      loop,
      setMaxIndex,
      setIndex,
      setHoverIndex,
    }
  ];
};

export default useRater;
