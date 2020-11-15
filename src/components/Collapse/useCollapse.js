import { useState, useCallback, useMemo } from 'react';

const useCollapse = function({ accordion = false, defaultValue = [] }) {
  const [value, setValue] = useState(defaultValue);

  const objValue = useMemo(() => {
    return value.reduce((rs, item) => {
      rs[item] = true;
      return rs;
    }, {});
  }, [value]);

  const onChange = useCallback((val) => {
    if (accordion) {
      return setValue(prev => {
        const _prev = new Set(prev);
        if (_prev.has(val)) {
          return [];
        }

        return [val];
      });
    }
    return setValue(prev => {
      const _prev = new Set(prev);
      if (_prev.has(val)) {
        _prev.delete(val);
      } else {
        _prev.add(val);
      }
      return [..._prev];
    });
  }, [accordion, setValue]);

  const isActive = useCallback(val => objValue[val], [objValue]);

  return [
    {
      value,
      onChange,
      isActive,
    },
    {
      value,
      setValue,
    }
  ];
};

export default useCollapse;
