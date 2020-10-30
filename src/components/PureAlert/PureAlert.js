import React, { useMemo } from 'react';
import cn from 'classnames';
import PropTypes from 'prop-types';

import Dialog from '../Dialog';
import useSemanticProp from '../../hooks/useSemanticProp';
import { omit } from '../../utils/helpers';

const mTypes = Object.freeze({
  info: 'fpure-alert-info',
  success: 'fpure-alert-success',
  error: 'fpure-alert-err',
  warning: 'fpure-alert--warn',
});

const lTypes = Object.keys(mTypes);

const PureAlert = React.forwardRef(({ children, title, className, ...otherProps }, ref) => {
  const type = useSemanticProp('type', otherProps, lTypes);

  const passedProps = useMemo(() => omit(otherProps, [
    ...lTypes,
    'type',
  ]), [otherProps]);

  return (
    <Dialog
      ref={ref}
      className={cn('fpure-alert', mTypes[type], className)}
      {...passedProps}
    >
      <Dialog.Header>{title}</Dialog.Header>
      {children && <Dialog.Body>{children}</Dialog.Body>}
    </Dialog>
  );
});

PureAlert.displayName = 'PureAlert';
PureAlert.propTypes = {
  children: PropTypes.any,
  title: PropTypes.any,
  className: PropTypes.string,
};
PureAlert.defaultProps = {};

export default PureAlert;
