import React from 'react';
import cn from 'classnames';
import BaseFacet from '../BaseFacet';

const OperationFacet = ({
  className,
  value,
  onClose,
  _id
}) => {
  return (
    <BaseFacet
      className={cn('fvs-operation-facet', className)}
      color="secondary"
      _id={_id}
      onClose={onClose}
      data-value={value}
    >
      {value}
    </BaseFacet>
  );
};

export default OperationFacet;
