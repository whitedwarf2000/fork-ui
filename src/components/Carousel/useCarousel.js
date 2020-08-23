import { useState, useCallback } from 'react';

const useCarousel = function({ defaultValue = 0, loop = false }) {
  const [value, setValue] = useState(defaultValue);
  const onChange = useCallback(val => setValue(val), []);
  const onNext = useCallback((maxValue) => setValue(prev => {
    if (maxValue === prev && loop) {
      return 0;
    }
    return prev + 1;
  }), []);
  const onPrev = useCallback((maxValue) => setValue(prev => {
    if (prev === 0 && loop) {
      return maxValue;
    }
    return prev - 1;
  }), []);

  return [
    {
      loop,
      value,
      onChange,
      onNext,
      onPrev,
    },
    {
      value,
      setValue,
      onChange,
      onNext,
      onPrev,
    },
  ];
};

export default useCarousel;
