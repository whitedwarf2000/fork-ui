import React, { useCallback } from 'react';
import cn from 'classnames';
import X from '../../../icons/all/X';

const mColors = Object.freeze({
  primary: 'fvs-facet-primary'
});

const BaseFacet = ({ _id, className, children, color, onClose }) => {
  return (
    <div className={cn('fvs-facet', mColors[color], className)}>
      <div className="fvs-facet-content">
        {children}
      </div>
      <div className="fvs-facet-close" onClick={onClose}>
        <X />
      </div>
    </div>
  );
};

export default BaseFacet;
