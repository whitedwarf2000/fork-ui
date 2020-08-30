import { useState, useEffect, useRef } from 'react';

const calcValue = (pageX, node, max) => {
  const { x, width } = node.getBoundingClientRect();
  if (pageX - x >= width) {
    return max;
  }
  if (pageX - x < 0) {
    return 0;
  }

  return Math.ceil(((pageX - x) / width) * max);
}

const useSingleSlider = function({ initialValue, min = 0, max = 100 }) {
  const [value, setValue] = useState(initialValue);
  const ref = useRef();
  const handlerRef = useRef();

  useEffect(() => {
    let isDragging = false;

    const onHandlerDragging = () => {
      isDragging = true;
    };

    const resetDragging = () => {
      isDragging = false;
    };

    const onDragging = (e) => {
      if (isDragging) {
        setValue(calcValue(e.pageX, ref.current, max));
      }
    };

    const onClick = (e) => {
      
      const n = calcValue(e.pageX, ref.current, max)
      setValue(n);
    };

    handlerRef.current.addEventListener('mousedown', onHandlerDragging);
    document.body.addEventListener('mousemove', onDragging);
    document.body.addEventListener('mouseup', resetDragging);
    ref.current.addEventListener('click', onClick);


    return () => {
      handlerRef.current.removeEventListener('mousedown', onHandlerDragging);
      document.body.removeEventListener('mousemove', onDragging);
      document.body.removeEventListener('mouseup', resetDragging);
      ref.current.removeEventListener('click', onClick);
    }
  }, [max, handlerRef, ref, setValue]);

  return [
    {
      ref,
      handlerRef,
      value,
      setValue,
    },
    {
      ref,
      handlerRef,
      value,
      setValue,
    },
  ];
};

export default useSingleSlider;
