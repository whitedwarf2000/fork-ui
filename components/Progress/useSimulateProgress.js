import { useState, useEffect } from 'react';

const useSimulateProgress = ({
  duration = 3000,
  isLoading,
  isLoaded,
  maxPercentWhenWaiting = 98,
}) => {
  const [percent, setPercent] = useState(0);
  useEffect(() => {
    let timer;
    const frame = () => setPercent(val => {
      const nextVal = val + Math.random() * 20;
      if (nextVal >= maxPercentWhenWaiting) {
        return maxPercentWhenWaiting;
      }
      return nextVal;
    });

    // WHENEVER AJAX STILL NOT COMPLETE ET
    if (isLoading && !isLoaded) {
      timer = setInterval(frame, duration / 10);
    }
    // WHENEVER AJAX COMPLETE
    if (!isLoading && isLoaded) {
      clearInterval(timer);
      setPercent(100);
    }

    return () => clearInterval(timer);
  }, [isLoaded, isLoading, setPercent, duration]);

  return [percent, setPercent];
};

export default useSimulateProgress;
