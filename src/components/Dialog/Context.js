import { createContext } from 'react';

export default createContext({
  onClose: f => f,
  onRefresh: f => f,
  toggleBody: true,
});
