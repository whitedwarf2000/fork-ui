import useVisualSearchStore, { normalizeFacet } from './useVisualSearchStore';
import { useCallback, useRef } from 'react';

export const handlerInputKeyDown = (e, facet, { onEnter, onBackspaceToEmpty }) => {
  
};
export const handlerInputBlur = (e, facet, onBlur) => {

};

const useVisualSearchHandler = ({
  removeFacetAt,
  addFacetAt,
  removeLeftFacetAt
}) => {
  const mainInputRef = useRef();
  const visualSearchRef = useRef();

  const onFacetClose = useCallback((_id) => {
    removeFacetAt(_id);
  }, [removeFacetAt]);

  const onInputKeyDown = useCallback((e, facet) => {
    handlerInputKeyDown(e, facet, {
      onEnter: ({ value, label, type }) => addFacetAt(facet._id, normalizeFacet({
        value,
        label,
        type,
      })),
      onBackspaceToEmpty: () => removeLeftFacetAt(facet._id),
    });
  }, [addFacetAt, removeLeftFacetAt]);

  const onInputBlur = useCallback((e, facet) => {
    handlerInputBlur(e, facet, ({ value, label, type }) => addFacetAt(facet._id, normalizeFacet({
      value,
      label,
      type,
    })));
  }, [addFacetAt]);

  return {
    onFacetClose,
    onInputKeyDown,
    onInputBlur,
    mainInputRef,
    visualSearchRef,
    // onMainInputKeyDown,
    // onMainInputBlur,
    // onVisualSearchFocus,
  };
};

export default useVisualSearchHandler;
