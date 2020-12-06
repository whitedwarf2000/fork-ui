import { useState, useCallback } from 'react';

const useRater = function(defaultStar) {
  const [star, setStar] = useState(defaultStar);
  const onChange = useCallback((star) => setStar(star), [setStar]);
  return [
    {
      star,
      onChange,
    }, {
      star,
      setStar,
      onChange,
    },
  ];
};

export default useRater;
