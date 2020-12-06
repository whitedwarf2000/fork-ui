import React from 'react';

export default React.createContext({
  facets: new Set(),
  addFacet: f => f,
  removeFacet: f => f,
  updateFacet: f => f,
});
