import { useState, useCallback } from 'react'

const useTabs = function(defaultProps) {
  const [currentTab, setCurrentTab] = useState(defaultProps.currentTab);
  const onChange = useCallback(val => setCurrentTab(val), [setCurrentTab]);

  return [
    {
      currentTab,
      onChange,
    },
    {
      setCurrentTab,
    },
  ];
};

export default useTabs;
