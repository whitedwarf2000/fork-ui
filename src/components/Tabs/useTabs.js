import { useState, useCallback } from 'react'

const useTabs = function(defaultValue) {
  const [value, setValue] = useState(defaultValue);
  const onChange = useCallback(key => setValue(key), [setValue]);

  return [
    {
      value,
      onChange,
    },
    {
      value,
      setValue,
      onChange,
    },
  ];
};

export default useTabs;
