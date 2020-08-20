import React, { useMemo } from 'react';
import cn from 'classnames';
import PropTypes from 'prop-types';

import { Check } from '../icons';
import useSemanticProp from '../../hooks/useSemanticProp';
import { omit } from '../../utils/helpers';

const mStatus = Object.freeze({
  processing: 'fui-step--processing',
  completed: 'fui-step--completed',
  canceled: 'fui-step--canceled',
});

const lStatus = Object.keys(mStatus);

const Step = ({ className, title, children, icon, stepNumber, ...otherProps }) => {
  const status = useSemanticProp('status', otherProps, lStatus);

  const passedProps = useMemo(() => omit(otherProps, [
    ...lStatus,
    'status',
  ]), [otherProps]);

  return (
    <div className={cn('fui-step', mStatus[status], className)} {...passedProps}>
      <div className="fui-step-rail" />
      <div className="fui-step-avatar">
        {status === 'completed' && (<Check style={{ strokeWidth: 3 }}/>)}
        {status !== 'completed' && (<span>{icon || stepNumber}</span>)}
      </div>
      <div className="fui-step-content">
        <div className="fui-step-title">{title}</div>
        <div className="fui-step-description">{children}</div>
      </div>
    </div>
  );
};

Step.displayName = 'Step';
Step.propTypes = {
  className: PropTypes.string,
  icon: PropTypes.any,
  title: PropTypes.any,
  children: PropTypes.any,
  stepNumber: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
  status: PropTypes.string,
  processing: PropTypes.bool,
  completed: PropTypes.bool,
  canceled: PropTypes.bool,
};
Step.defaultProps = {};

export default Step;
