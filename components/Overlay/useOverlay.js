import { useState, useCallback, useMemo, cloneElement, useRef, useEffect } from 'react';

const useOverlay = (defaultVisible) => {
  const ref = useRef();
  const [visible, setVisible] = useState(defaultVisible);
  const hide = useCallback(() => setVisible(false), [setVisible]);
  const show = useCallback(() => setVisible(true), [setVisible]);
  const toggle = useCallback(() => setVisible(v => !v), [setVisible]);

  useEffect(() => {
    if (ref.current) {

    }
  }, [ref]);

  return [{
    ref,
    visible,
    hide,
    show,
    toggle,
  }, {
    setVisible,
  }];
};

export default useOverlay;
