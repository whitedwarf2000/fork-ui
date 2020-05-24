import { useCallback, useState, useMemo } from 'react';

export default ({ total, pageSize, max, activePage, onChange }) => {
  const itemCount = useMemo(() => Math.ceil(total / pageSize), [total, pageSize]);
  const [activeFlag, setActiveFlag] = useState(Math.ceil(activePage / max));
  const maxActiveFlag = useMemo(() => Math.ceil(itemCount / max), [itemCount, max]);

  const startIndex = useMemo(() => (activeFlag - 1) * max + 1, [activeFlag, activePage, max]);
  const endIndex = useMemo(() => {
    let end = (activeFlag - 1) * max + max;

    return itemCount < end ? itemCount : end;
  }, [activeFlag, activePage, max]);

  const onNextItems = useCallback(() => setActiveFlag(prev => {
    const nextState = prev + 1;
    return nextState > maxActiveFlag ? maxActiveFlag : nextState;
  }), [maxActiveFlag]);

  const onPrevItems = useCallback(() => setActiveFlag(prev => {
    const nextState = prev - 1;
    return nextState > 1 ? nextState : 1;
  }), []);

  const onNext = useCallback(() => {
    const next = activePage + 1;
    if (next === itemCount) {
      return onChange(itemCount);
    }

    if (next / max > activeFlag) {
      onNextItems();
    }

    return onChange(next);
  }, [onChange, activePage, itemCount]);

  const onPrev = useCallback(() => {
    const prev = activePage - 1;
    if (prev <= 1) {
      return onChange(1);
    }

    if (prev / max <= activeFlag - 1) {
      onPrevItems();
    }

    return onChange(prev);
  }, [onChange, activePage]);

  return {
    itemCount,
    activeFlag,
    startIndex,
    endIndex,
    maxActiveFlag,
    onNext,
    onNextItems,
    onPrev,
    onPrevItems,
  };
};
