import { createContext } from 'react';

export default createContext({
  iconOnly: false,
  hiddenKeys: [],
  selectedKeys: [],
  selectedSubKeys: [],
  selectedGroupKeys: [],
  onItemClick: f => f,
  onGroupClick: f => f,
  onSubClick: f => f,
});
