import { useState, useCallback } from "react"

const usePagination = function(defaultActivePage) {
  const [activePage, setActivePage] = useState(defaultActivePage);
  const onChange = useCallback(page => setActivePage(page), [setActivePage]);

  return [
    {
      activePage,
      onChange,
    },
    {
      activePage,
      setActivePage,
      onChange,
    }
  ];
};

export default usePagination;
