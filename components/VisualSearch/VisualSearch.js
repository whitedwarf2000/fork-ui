import React from 'react';
import cn from 'classnames';
import MainInput from './MainInput';
import Facet from './Facet';
import useVisualSearchStore from './useVisualSearchStore';
import useVisualSearchHandler from './useVisualSearchHandler';

const mapFacetComponent = Object.freeze({
  Text: Facet.Text,
  Operation: Facet.Operation,
  Group: Facet.Group,
});
const NoopComponent = () => null;

const VisualSearch = ({
  className,
  facets,
  onFacetClose,
  onMainInputKeyDown,
  onMainInputBlur,
  onInputKeyDown,
  onInputBlur,
  mainInputRef,
  visualSearchRef,
  onVisualSearchFocus,
  onAddFacetAt,
  children,
}) => {
  return (
    <div
      className={cn('fvs', className)}
      ref={visualSearchRef}
      onFocus={onVisualSearchFocus}
    >
      {facets.map((facet) => {
        const FacetComponent = mapFacetComponent[facet.type] || NoopComponent;
        return (
          <FacetComponent
            {...facet.props}
            key={facet._id}
            _id={facet._id}
            onClose={onFacetClose}
            onInputKeyDown={onInputKeyDown}
            onInputBlur={onInputBlur}
            onAddFacetAt={onAddFacetAt}
          />
        );
      })}
      <MainInput
        ref={mainInputRef}
        onKeyDown={onMainInputKeyDown}
        onBlur={onMainInputBlur}
      />
    </div>
  );
};

VisualSearch.useStore = useVisualSearchStore;
VisualSearch.useHandler = useVisualSearchHandler;
VisualSearch.defaultProps = {
  children: f => f,
}
export default VisualSearch;
