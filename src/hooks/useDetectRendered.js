/**
 * https://usehooks.com/usePrevious/
 */
import { useEffect, useRef } from 'react';

export default function useDetectRendered(value) {
  // The ref object is a generic container whose current property is mutable ...
  // ... and can hold any value, similar to an instance property on a class
  const ref = useRef();
  
  // Store current value in ref
  useEffect(() => {
    ref.current = true;
  }, []); // Only re-run if value changes
  return ref.current;
}
