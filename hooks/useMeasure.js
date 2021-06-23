import { useRef } from 'react';
import usePureMeansure from './usePureMeansure';

export default function useMeasure() {
  const ref = useRef();
  const bounds = usePureMeansure(ref);

  return [{ ref }, bounds];
}
