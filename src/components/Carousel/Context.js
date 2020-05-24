import React from 'react';

export default React.createContext({
  setPage: f => f,
  page: 0,
  maxPage: 9,
  itemCount: 0,
});
