import { useState, useCallback } from 'react';

const useOverlay = (defaultVisible) => {
  const [visible, setVisible] = useState(defaultVisible);
  const hide = useCallback(() => setVisible(false), [setVisible]);
  const show = useCallback(() => setVisible(true), [setVisible]);
  const toggle = useCallback(() => setVisible(v => !v), [setVisible]);

  return [{
    visible,
    hide,
    show,
    toggle,
  }, {
    setVisible,
  }];
};

export default useOverlay;
