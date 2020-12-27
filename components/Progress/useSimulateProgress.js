import { useState, useEffect } from 'react';

const useSimulateProgress = ({
  pending,
  completed,
  maxIncreasePercent = 25,
  maxPercentWhenWaiting = 98,
}) => {
  const [percent, setPercent] = useState(0);
  useEffect(() => {
    let timer;
    const frame = () => setPercent(val => {
      const nextVal = val + Math.floor(Math.random() * maxIncreasePercent);
      if (nextVal >= maxPercentWhenWaiting) {
        return maxPercentWhenWaiting;
      }
      return nextVal;
    });

    // WHENEVER AJAX STILL NOT COMPLETE ET
    if (pending && !completed) {
      timer = setInterval(frame, 300);
    }
    // WHENEVER AJAX COMPLETE
    if (!pending && completed) {
      clearInterval(timer);
      setPercent(100);
    }

    return () => clearInterval(timer);
  }, [completed, pending, setPercent, maxPercentWhenWaiting, maxIncreasePercent]);

  return [percent, setPercent];
};

export default useSimulateProgress;
