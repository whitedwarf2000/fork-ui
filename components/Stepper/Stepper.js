import React, { useCallback } from 'react';
import PropTypes from 'prop-types';
import cn from 'classnames';

import Step from './Step';
import useStepper from './useStepper';

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
