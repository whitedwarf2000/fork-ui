import React, { useMemo } from 'react';
import cn from 'classnames';
import PropTypes from 'prop-types';

import { Check, X } from '../icons';
import Tooltip from '../Tooltip';
import Loader from '../Loader';
import useSemanticProp from '../../hooks/useSemanticProp';
import { omit } from '../../utils/helpers';

const mStatus = Object.freeze({
  processing: 'fstep-processing',
  completed: 'fstep-completed',
  canceled: 'fstep-canceled',
});

const lStatus = Object.keys(mStatus);

const Step = ({ className, title, children, icon, stepNumber, canceledTitle, ...otherProps }) => {
  const status = useSemanticProp('status', otherProps, lStatus);

  const passedProps = useMemo(() => omit(otherProps, [
    ...lStatus,
    'status',
  ]), [otherProps]);

  const avatarRendered = useMemo(() => {
    if (status === 'completed') {
      return <Check style={{ strokeWidth: 3 }} />;
    }
    if (status === 'canceled') {
      return <X style={{ strokeWidth: 3 }} />;
    }
    if (status === 'processing') {
      return (
        <React.Fragment>
          <Loader.Spinner className="fstep-loader" size="1.35em" />
          <span>{icon || stepNumber}</span>
        </React.Fragment>
      )
    }
    return <span>{icon || stepNumber}</span>;
  }, [status, icon, stepNumber]);

  const _canceledTitle = useMemo(() => {
    if (status === 'canceled') {
      return canceledTitle
    }
    return '';
  }, [status]);

  return (
    <div className={cn('fstep', mStatus[status], className)} {...passedProps}>
      <div className="fstep-rail" />
      <Tooltip top title={_canceledTitle}>
        <div className="fstep-avt">
          {avatarRendered}
        </div>
      </Tooltip>
      <div className="fstep-content">
        <div className="fstep-title">{title}</div>
        <div className="fstep-description">{children}</div>
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
  canceledTitle: PropTypes.any
};
Step.defaultProps = {};

export default Step;
