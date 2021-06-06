import React from 'react';
import cn from 'classnames';

import TextFacet from './TextFacet';
import GroupFacet from './GroupFacet';
import OperationFacet from './OperationFacet';
import Input from '../Input';

const withInput = (FacetComponent) => {
  return ({ onInputKeyDown, onInputBlur, ...otherProps }) => {
    return (
      <div className={cn('fvs-facet-container')}>
        <Input
          onKeyDown={onInputKeyDown}
          onBlur={onInputBlur}
        />
        <FacetComponent {...otherProps} />
      </div>
    );
  };
};

const Facet = {
  Text: withInput(TextFacet),
  Group: withInput(GroupFacet),
  Operation: withInput(OperationFacet),
};

export default Facet;
