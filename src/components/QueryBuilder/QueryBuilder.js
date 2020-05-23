import React, { useState, useCallback, useMemo } from 'react';

import Block from './Facet.Block';
import Operator from './Facet.Operator';

import Context from './Context';

const mFacets = Object.freeze({
  'BLOCK': Block,
  'OPERATOR': Operator,
});

const noop = f => f;

const QueryBuilder = ({ defaultFacets, onFacetsChange, onAddedFacet, onRemovedFacet, onUpdatedFacet }) => {
  const [facets, setFacets] = useState(new Set(defaultFacets));
  const _facets = useMemo(() => [...facets], [facets]);

  const addFacet = useCallback((facet) => {
    onAddedFacet(facet);
  });

  const removeFacet = useCallback((facet) => {
    onRemovedFacet();
  });

  const updateFacet = useCallback((facet) => {
    onUpdatedFacet(facet);
  });

  return (
    <Context.Provider
      value={{
        facets,
        addFacet,
        removeFacet,
      }}
    >
      <div className="rc-query-builder-container">
        <div className="rc-query-builder-inner">
          {_facets.map(facet => {
            const C = mFacets[facet.type] || noop;
            return (
              <C {...facet} />
            );
          })}
        </div>
      </div>
    </Context.Provider>
  );
};

QueryBuilder.defaultProps = {
  defaultFacets: [
    {
      type: 'BLOCK',
    }
  ],
  onQueriesChange: f => f,
};

export default QueryBuilder;
