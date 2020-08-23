import { useState, useCallback } from 'react';

const useCarousel = function({ defaultValue = 0, loop = false, maxValue = 0 }) {
  const [value, setValue] = useState(defaultValue);
  const onChange = useCallback(val => setValue(val), []);
  const onNext = useCallback(() => setValue(prev => {
    if (maxValue === prev && loop) {
      return 0;
    }
    return prev + 1;
  }), [maxValue]);
  const onPrev = useCallback(() => setValue(prev => {
    if (prev === 0 && loop) {
      return maxValue;
    }
    return prev - 1;
  }), [maxValue]);

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
