import { useState, useCallback, useEffect, useMemo } from 'react';
import { debounce } from '../utils/helpers';

const useRefresh = function() {
  const [toggle, setToggle] = useState(true);
  const _onRefresh = useCallback(() => setToggle(false), [setToggle]);
  const onRefresh = useMemo(() => debounce(_onRefresh, 300), [_onRefresh]);

  useEffect(() => {
    if (!toggle) {
      setToggle(true);
    }
  }, [toggle, setToggle]);

  return [toggle, onRefresh];
};

export default useRefresh;
