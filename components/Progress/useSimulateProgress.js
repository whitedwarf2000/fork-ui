import { useState, useEffect } from 'react';

const useSimulateProgress = ({
  pending,
  completed,
  maxPercentWhenWaiting = 98,
}) => {
  const [percent, setPercent] = useState(0);
  useEffect(() => {
    let timer;
    const frame = () => setPercent(val => {
      const nextVal = val + Math.floor(Math.random() * 50);
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
  }, [completed, pending, setPercent]);

  return [percent, setPercent];
};

export default useSimulateProgress;
