import { useState, useCallback } from 'react';

const useCollapse = function({ accordion = false, defaultValue = [] }) {
  const [value, setValue] = useState(defaultValue);
  const onChange = useCallback((key) => {
    if (accordion) {
      return setValue(prev => {
        const _prev = new Set(prev);
        if (_prev.has(key)) {
          return [];
        }

        return [key];
      });
    }
    return setValue(prev => {
      const _prev = new Set(prev);
      if (_prev.has(key)) {
        _prev.delete(key)
      } else {
        _prev.add(key)
      }
      return [..._prev];
    });
  }, [accordion, setValue])

  return [
    {
      value,
      onChange,
    },
    {
      value,
      setValue,
    }
  ];
};

export default useCollapse;
