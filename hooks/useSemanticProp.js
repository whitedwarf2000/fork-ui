import { useMemo } from 'react';
import getLatestTruthyProp from '../utils/getLatestTruthyProp';

const makeDepsTracking = (props, deps) => deps.map(name => props[name]);

export default (name, props, deps) => {
  const tracking = useMemo(() => makeDepsTracking(props, deps), [props, deps]);

  return useMemo(() => {
    if (props.hasOwnProperty(`${name}`)) {
      return props[name];
    }

    return getLatestTruthyProp(props, deps);
  }, [
    ...tracking,
    props[name],
  ]);
}
