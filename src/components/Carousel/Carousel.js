import React, { useState, useEffect, useCallback, useRef, useMemo } from 'react';
import cn from 'classnames';
import PropTypes from 'prop-types';

import Button from '../Button';
import { ChevronLeft, ChevronRight } from '../icons';
import Item from './Item';
import Dots from './Dots';
import Context from './Context';

import useMeasure from '../../hooks/useMeasure';
import useCarousel from './useCarousel';

const calc = (wrapperWidth, value) => {
  return (wrapperWidth * value);
};

const Carousel = ({ className, children, auto, loop, value, onChange, onNext, onPrev }) => {
  const itemCount = useMemo(() => React.Children.count(children), [children]);
  const containerRef = useRef();
  const [{ ref: boxRef }, boxShape] = useMeasure();

  const [_containerShape, _setContainerShape] = useState({ width: 0, height: 0 });
  const [_left, _setLeft] = useState(0);

  const _onNext = useCallback(() => onNext(itemCount-1), [itemCount]);
  const _onPrev = useCallback(() => onPrev(itemCount-1), [itemCount]);

  useEffect(() => {
    _setLeft(-calc(_containerShape.width, value));
  }, [_setLeft, _containerShape.width, value]);

  useEffect(() => {
    _setContainerShape({
      height: boxRef.current.clientHeight,
      width: containerRef.current.clientWidth,
    });
  }, []);

  useEffect(() => {
    if (auto) {
      const timer = setInterval(() => _onNext(), auto);
      return () => clearInterval(timer);
    }
  }, [_onNext, auto]);

  return (
    <Context.Provider
      value={{
        value,
        onChange,
        itemCount,
        itemWidth: _containerShape.width,
      }}
    >
      <div className={cn('fcarousel', className)}>
        <div ref={containerRef} className="fcarousel-container" style={{ height: boxShape.height }}>
          <div ref={boxRef} className="fcarousel-box" style={{ left: _left }} >
            {children}
          </div>
        </div>
        <div className="fcarousel-handler">
          <Dots />
          <Button
            icon={<ChevronLeft />}
            className={cn('fcarousel-prev')}
            disabled={!loop && value === 0}
            circle
            onClick={_onPrev}
            style={{ marginRight: '0.5rem' }}
          />
          <Button
            icon={<ChevronRight />}
            className={cn('fcarousel-next')}
            disabled={!loop && value === itemCount - 1}
            circle
            onClick={_onNext}
          />
        </div>
      </div>
    </Context.Provider>
  );
};

Carousel.Item = Item;
Carousel.useCarousel = useCarousel;

Carousel.displayName = 'Carousel';
Carousel.propTypes = {
  className: PropTypes.string,
  children: PropTypes.any,
  auto: PropTypes.number,
  loop: PropTypes.bool,
  onNext: PropTypes.func,
  onPrev: PropTypes.func,
};
Carousel.defaultProps = {
  onNext: f => f,
  onPrev: f => f,
};

export default Carousel;
