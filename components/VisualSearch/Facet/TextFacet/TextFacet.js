import React, { useCallback } from 'react';
import cn from 'classnames';
import BaseFacet from '../BaseFacet';
import Input from '../../Input';

const TextFacet = ({
  className,
  value,
  onKeyDown,
  onBlur,
  onClose,
  _id
}) => {
  const _onClose = useCallback(() => onClose(_id), [onClose, _id]);
  const _onKeyDown = useCallback(e => onKeyDown(e, { _id, type: 'Text' }), [onKeyDown, _id]);
  const _onBlur = useCallback(e => onBlur(e, { _id, type: 'Text' }), [onBlur, _id]);

  return (
    <BaseFacet
      className={cn('fvs-text-facet', className)}
      color="primary"
      _id={_id}
      onClose={_onClose}
    >
      <Input
        data-id={_id}
        defaultValue={value}
        onKeyDown={_onKeyDown}
        onBlur={_onBlur}
      />
    </BaseFacet>
  );
};

export default TextFacet;
