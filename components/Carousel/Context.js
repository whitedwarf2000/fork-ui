import React from 'react';

export default React.createContext({
  onChange: f => f,
  value: 0,
  itemCount: 0,
  itemWidth: 0,
});
