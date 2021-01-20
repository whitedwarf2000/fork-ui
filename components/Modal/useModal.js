import { useState, useCallback } from 'react';

const useModal = (defaultOpen) => {
  const [open, setOpen] = useState(defaultOpen);

  const show = useCallback(() => setOpen(true), [setOpen]);
  const hide = useCallback(() => setOpen(false), [setOpen]);
  const toggle = useCallback(() => setOpen(val => !val), [setOpen]);

  return [{
    open,
    show,
    hide,
    toggle,
  }, {
    setOpen,
  }]
};

export default useModal;
