import { useState, useRef, useEffect } from 'react';
import ResizeObserver from 'resize-observer-polyfill';

export default function usePureMeansure(ref) {
  const [bounds, set] = useState({ width: 0, height: 0 });
  const ro = useRef(new ResizeObserver(([entry]) => set({
    width: entry.borderBoxSize[0].inlineSize,
    height: entry.borderBoxSize[0].blockSize,
  })));

  useEffect(() => {
    if (ref.current) {
      ro.current.observe(ref.current);
    }

    return () => ro.current.disconnect();
  }, []);

  return bounds;
}
