import React, { useCallback, useMemo } from 'react';
import PropTypes from 'prop-types';
import cn from 'classnames';

import { Check, X } from '../icons';
import useStepper from './useStepper';

const mStatus = Object.freeze({
  processing: 'fstep-processing',
  completed: 'fstep-completed',
  canceled: 'fstep-canceled',
});

const Button = ({ className, children, ...otherProps }) => {
  return (
    <div className={cn('fstep-button', className)} {...otherProps}>
      <span className="fstep-button-child">
        {children}
      </span>
      <span className="fstep-button-canceled">
        <X style={{ strokeWidth: 3 }} />
      </span>
      <span className="fstep-button-completed">
        <Check style={{ strokeWidth: 3 }} />
      </span>
    </div>
  );
};
const Dot = ({ className, ...otherProps }) => <div className={cn('fstep-dot', className)} {...otherProps} />;
const Content = ({ className, ...otherProps }) => <div className={cn('fstep-content', className)} {...otherProps} />;
const Title = ({ className, ...otherProps }) => <div className={cn('fstep-title', className)} {...otherProps} />;
const Description = ({ className, ...otherProps }) => <div className={cn('fstep-description', className)} {...otherProps} />;

const Step = ({ className, status, ...otherProps }) => {
  // const dotRendered = useMemo(() => {
  //   if (status === 'completed') {
  //     return <Check style={{ strokeWidth: 3 }} />;
  //   }
  //   if (status === 'canceled') {
  //     return <X style={{ strokeWidth: 3 }} />;
  //   }
  //   if (status === 'processing') {
  //     return (
  //       <React.Fragment>
  //         <Loader.Spinner className="fstep-loader" size="1.35em" />
  //         <span>{icon || stepNumber}</span>
  //       </React.Fragment>
  //     )
  //   }
  //   return <span>{icon || stepNumber}</span>;
  // }, [status, icon, stepNumber]);

  return (
    <li className={cn('fstep', mStatus[status], className)} {...otherProps} />
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

const Stepper = ({ className, children, vertical, activeStep, getStatus, ...otherProps }) => {
  const injectProps = useCallback((idx) => ({
    stepNumber: idx + 1,
    status: getStatus(idx),
  }), [activeStep, getStatus]);

  const _customChildren = React.Children.map(children, (elm, idx) => React.cloneElement(elm, {
    ...injectProps(idx),
    ...elm.props,
  }));

  return (
    <ul className={cn('fstepper', { 'fstepper-v': vertical }, className)} {...otherProps}>
      {vertical ? _customChildren.reverse() : _customChildren}
    </ul>
  );
};

Stepper.Step = Step;
Stepper.Button = Button;
Stepper.Dot = Dot;
Stepper.Content = Content;
Stepper.Title = Title;
Stepper.Description = Description;

Stepper.useStepper = useStepper;

Stepper.displayName = 'Stepper';
Stepper.propTypes = {
  className: PropTypes.string,
  activeStep: PropTypes.number,
  children: PropTypes.any,
  vertical: PropTypes.bool,
  getStatus: PropTypes.func,
};
Stepper.defaultProps = {
  getStatus: f => f,
};

export default Stepper;
