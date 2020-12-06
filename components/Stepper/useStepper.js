import { useCallback, useState, useMemo } from 'react';

export default ({ maxStepIdx = 0, defaultActiveStep = 0, defaultStepInfo = {}, optional = [] }) => {
  const _optional = useMemo(() => new Set(optional), [optional]);

  const [activeStep, setActiveStep] = useState(defaultActiveStep);
  const [steps, setSteps] = useState(defaultStepInfo);

  const handleReset = useCallback(() => {
    setActiveStep(0);
    setSteps({});
  }, [setActiveStep, setSteps]);

  const handleNext = useCallback(() => {
    if (activeStep === maxStepIdx) {
      return;
    }

    setSteps(prev => ({
      ...prev,
      [activeStep]: 'completed',
    }));
    setActiveStep(prev => prev + 1);
  }, [activeStep, maxStepIdx, setSteps, setActiveStep]);

  const handleSkip = useCallback(() => {
    if (!_optional.has(activeStep) || activeStep === maxStepIdx) {
      return;
    }
    setActiveStep(prev => prev + 1);
  }, [_optional, activeStep, maxStepIdx, setActiveStep]);

  const handleFinish = useCallback(() => {
    if (maxStepIdx !== activeStep) {
      return;
    }

    setSteps(prev => ({
      ...prev,
      [maxStepIdx]: 'completed',
    }));
    setActiveStep(maxStepIdx + 1);
  }, [maxStepIdx, activeStep, setSteps, activeStep, setActiveStep]);

  const handleCancel = useCallback(() => {
    setSteps(prev => ({
      ...prev,
      [activeStep]: 'canceled',
    }));
    handleSkip();
  }, [setSteps, activeStep, handleSkip]);

  const getStatus = useCallback((idx) => {
    if (idx === activeStep) {
      return steps[idx] || 'processing';
    }

    return steps[idx];
  }, [activeStep, steps]);

  return [
    {
      getStatus,
      activeStep,
    },
    {
      activeStep,
      setActiveStep,
      steps,
      setSteps,
      getStatus,
      handleReset,
      handleNext,
      handleSkip,
      handleCancel,
      handleFinish,
    }
  ];
};
