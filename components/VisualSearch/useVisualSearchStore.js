import { useState, useCallback } from 'react';
import { uniqueId, dropRight } from '../../utils/helpers';

export const normalizeFacet = (facet) => ({
  ...facet,
  _id: uniqueId(),
});
export const normalizeFacets = facets => facets.map(facet => normalizeFacet(facet));
export const _addFacetAt = (facets, _id, normalizedFacet) => {
  const newFacets = [];
  for (let i = 0; i < facets.length; i++) {
    if (facets[i]._id === _id) {
      newFacets.push(normalizedFacet);
    }
    newFacets.push(facets[i]);
  }
  return newFacets;
};
export const _addFacetToLast = (facets, normalizedFacet) => {
  return [...facets, normalizedFacet];
};
export const _removeFacetAt = (facets, _id) => facets.filter(facet => facet._id !== _id);
export const _removeLeftFacetAt = (facets, _id) => {
  const newFacets = [];
  for (let i = 0; i < facets.length; i++) {
    const nextFacet = facets[i + 1];
    if (nextFacet && nextFacet._id === _id) {
      continue;
    }
    newFacets.push(facets[i]);
  }
  return newFacets;
};
const useVisualSearchStore = (defaultFacets) => {
  const [facets, setFacets] = useState(() => normalizeFacets(defaultFacets));

  /**
   * Add New normalizedFacet at left side of facet have _id
   */
  const addFacetAt = useCallback((_id, normalizedFacet) => setFacets((prevFacets) => {
    return _addFacetAt(prevFacets, _id, normalizedFacet);
  }), [setFacets]);

  /**
   * Add New normalizedFacet at last item
   */
  const addFacetToLast = useCallback(normalizedFacet => setFacets((prevFacets) => {
    return _addFacetToLast(prevFacets, normalizedFacet);
  }), [setFacets]);

  /**
   * Remove facet have _id
   */
  const removeFacetAt = useCallback(_id => setFacets((prevFacets) => {
    return _removeFacetAt(prevFacets, _id);
  }), [setFacets]);

  /**
   * Remove facet in left side of facet have _id
   */
  const removeLeftFacetAt = useCallback(_id => setFacets((prevFacets) => {
    return _removeLeftFacetAt(prevFacets, _id);
  }), [setFacets]);

  /**
   * Remove last facet
   */
  const removeLastFacet = useCallback(() => setFacets((prevFacets) => {
    return dropRight(prevFacets);
  }), [setFacets]);

  /**
   * Remove facets
   */
  const removeAllFacet = useCallback(() => setFacets([]), [setFacets]);

  return {
    facets,
    setFacets,
    addFacetAt,
    addFacetToLast,
    removeFacetAt,
    removeLeftFacetAt,
    removeLastFacet,
    removeAllFacet,
  };
};

export default useVisualSearchStore;
