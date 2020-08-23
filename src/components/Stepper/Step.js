import React, { useMemo } from 'react';
import cn from 'classnames';
import PropTypes from 'prop-types';

import { Check, X } from '../icons';
import Tooltip from '../Tooltip';
import Loader from '../Loader';
import useSemanticProp from '../../hooks/useSemanticProp';
import { omit } from '../../utils/helpers';

const mStatus = Object.freeze({
  processing: 'fui-step--processing',
  completed: 'fui-step--completed',
  canceled: 'fui-step--canceled',
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
      return <X style={{ strokeWidth: 3 }} color="var(--red--500)" />;
    }
    if (status === 'processing') {
      return (
        <React.Fragment>
          <Loader.Spinner className="fui-step-loader" size="1.35em" />
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
    <div className={cn('fui-step', mStatus[status], className)} {...passedProps}>
      <div className="fui-step-rail" />
      <Tooltip top title={_canceledTitle}>
        <div className="fui-step-avatar">
          {avatarRendered}
        </div>
      </Tooltip>
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
  canceledTitle: PropTypes.any
};
Step.defaultProps = {};

export default Step;
