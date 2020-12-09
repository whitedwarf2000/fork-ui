import React, { useCallback, useMemo } from 'react';
import PropTypes from 'prop-types';
import cn from 'classnames';

import { Check, X, Ban } from '../icons';
import useStepper from './useStepper';
import useSemanticProp from '../../hooks/useSemanticProp';
import { omit } from '../../utils/helpers';

const mStatus = Object.freeze({
  processing: 'fstep-processing',
  completed: 'fstep-completed',
  canceled: 'fstep-canceled',
  error: 'fstep-error'
});

const Button = ({ className, children, ...otherProps }) => {
  return (
    <div className="fstep-dot">
      <div className={cn('fstep-button', className)} {...otherProps}>
        <span className="fstep-button-child">
          {children}
        </span>
        <span className="fstep-button-error">
          <X style={{ strokeWidth: 3 }} />
        </span>
        <span className="fstep-button-canceled">
          <Ban style={{ strokeWidth: 3 }} />
        </span>
        <span className="fstep-button-completed">
          <Check style={{ strokeWidth: 3 }} />
        </span>
      </div>
    </div>
  );
};

const Content = ({ className, ...otherProps }) => <div className={cn('fstep-content', className)} {...otherProps} />;
const Title = ({ className, ...otherProps }) => <div className={cn('fstep-title', className)} {...otherProps} />;
const Description = ({ className, ...otherProps }) => <div className={cn('fstep-description', className)} {...otherProps} />;
const Step = ({ className, status, ...otherProps }) => <li className={cn('fstep', mStatus[status], className)} {...otherProps} />;

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

const mModes = Object.freeze({
  vertical: 'fstepper-v',
  alternate: 'fstepper-alternate',
});

const lModes = Object.keys(mModes);

const Stepper = ({ className, children, ...otherProps }) => {
  const mode = useSemanticProp('mode', otherProps, lModes);

  // ignore semantic props
  const passedProps = useMemo(() => omit(otherProps, [
    ...lModes,
    'mode',
  ]), [otherProps]);

  return (
    <ul className={cn('fstepper', mModes[mode], className)} {...passedProps}>
      {children}
    </ul>
  );
};

Stepper.Step = Step;
Stepper.Button = Button;
Stepper.Content = Content;
Stepper.Title = Title;
Stepper.Description = Description;

Stepper.useStepper = useStepper;

Stepper.displayName = 'Stepper';
Stepper.propTypes = {
  className: PropTypes.string,
  children: PropTypes.any,
  vertical: PropTypes.bool,
  alternate: PropTypes.bool,
  mode: PropTypes.string,
};
Stepper.defaultProps = {};

export default Stepper;
