import { useCallback, useState, useMemo } from 'react';

const checkCancelable = function(step, cancelable) {
  const cancelableLength = cancelable.length;

  for (let i = 0; i < cancelableLength; i++) {
    if (cancelable[i] === step) {
      return true;
    }
  }

  return false;
};

const checkSkipable = function(step, skipable) {
  const skipableLength = skipable.length;

  for (let i = 0; i < skipableLength; i++) {
    if (skipable[i] === step) {
      return true;
    }
  }

  return false;
};

export default (defaultProps = {}) => {
  const [statuses, setStatuses] = useState(defaultProps.statuses || []);
  const [activeStep, setActiveStep] = useState(defaultProps.activeStep || 0);
  const [finishStep, setFinishStep] = useState(defaultProps.finishStep || 0);

  const [skipable, setSkipable] = useState(defaultProps.skipable || []);
  const [cancelable, setCancelable] = useState(defaultProps.cancelable || []);
  const isFinished = useMemo(() => activeStep === finishStep && statuses[activeStep] === 'completed', [activeStep, finishStep, statuses]);
  const isSkipable = useMemo(() => checkSkipable(activeStep, skipable), [activeStep, skipable]);
  const isCancelable = useMemo(() => checkSkipable(activeStep, skipable), [activeStep, cancelable]);

  const goNext = useCallback(() => {
    if (activeStep < finishStep) {
      setActiveStep(prev => prev + 1);
      setStatuses(prev => {
        const next = [...prev];
        next[activeStep] = 'completed';
        next[activeStep + 1] = 'processing';
        return next;
      });
    }
  }, [activeStep, setActiveStep, finishStep]);

  const goBack = useCallback(() => {
    if (activeStep > 0) {
      setActiveStep(prev => prev - 1);
      setStatuses(prev => {
        const next = [...prev];
        next[activeStep] = '';
        next[activeStep - 1] = 'processing';
        return next;
      });
    }
  }, [activeStep, setActiveStep]);

  const goReset = useCallback(() => {
    setStatuses(['processing']);
    setActiveStep(0);
  }, [setStatuses, setActiveStep]);

  const goSkip = useCallback(() => {
    if (activeStep < finishStep && checkSkipable(activeStep, skipable)) {
      setActiveStep(prev => prev + 1);
      setStatuses(prev => {
        const next = [...prev];
        next[activeStep] = '';
        next[activeStep + 1] = 'processing';
        return next;
      });
    }
  }, [activeStep, setActiveStep, finishStep, skipable]);

  const goCancel = useCallback(() => {
    if (activeStep < finishStep && checkCancelable(activeStep, cancelable)) {
      setActiveStep(prev => prev + 1);
      setStatuses(prev => {
        const next = [...prev];
        next[activeStep] = 'canceled';
        next[activeStep + 1] = 'processing';
        return next;
      });
    }
  }, [activeStep, setActiveStep, finishStep, cancelable]);

  const goFinish = useCallback(() => {
    if (activeStep === finishStep) {
      setStatuses(prev => {
        const next = [...prev];
        next[activeStep] = 'completed';
        return next;
      });
    }
  }, [activeStep, setActiveStep, finishStep]);

  return [
    {
      activeStep,
      statuses,
      goNext,
      goBack,
      goReset,
      goSkip,
      goCancel,
      goFinish,
      isFinished,
      isSkipable,
      isCancelable,
    },
    {
      setStatuses,
      setActiveStep,
      setFinishStep,
      setSkipable,
      setCancelable,
      checkCancelable,
      checkSkipable,
    }
  ];
}
