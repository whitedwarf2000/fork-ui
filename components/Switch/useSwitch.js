import { useState, useCallback } from 'react';

export default (defaultChecked) => {
  const [checked, setChecked] = useState(defaultChecked);
  const onChange = useCallback(e => setChecked(e.target.checked), [setChecked]);
  const toggle = useCallback(() => setChecked(val => !val), [setChecked]);

  return [{ checked, onChange, toggle }, { setChecked }];
};
