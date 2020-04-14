import React, { useState, useEffect, useCallback, useRef, useMemo } from 'react';
import cn from 'classnames';
import PropTypes from 'prop-types';

import Button from '../Button';
import Item from './Item';

const getItemNodes = boxRef => [...boxRef.current.children];
const calc = (itemNodes, nextPage) => {
  const index = nextPage - 1;

  let left = 0;
  for (let i = 0; i < itemNodes.length; i++) {
    if (i >= index) {
      return left;
    }
    left+= itemNodes[i].clientWidth;
  }
  return left;
};

const focusGap = 50;

const Carousel = ({ className, children, auto, loop, single, focus }) => {
  const [page, setPage] = useState(1);
  const [body, setBody] = useState({ height: 0, width: 0 });
  const [boxBody, setBoxBody] = useState({ height: 0, width: 0 });
  const itemCount = useMemo(() => React.Children.count(children), [children]);

  // One page equal 75% carousel width
  const maxPage = useMemo(() => {
    if (single) {
      return itemCount;
    }
    return Math.ceil(boxBody.width / body.width);
  }, [body.width, boxBody.width, itemCount, single]);

  const [left, setLeft] = useState(0);
  const carouselHeight = useMemo(() => boxBody.height + 5, [boxBody.height]);

  const ref = useRef();
  const boxRef = useRef();

  useEffect(() => {
    setBoxBody({
      height: boxRef.current.clientHeight,
      width: boxRef.current.clientWidth,
    });
    setBody({
      width: ref.current.clientWidth,
    });
  }, []);

  const handleNext = useCallback(() => setPage(prev => {
    const _page = prev + 1;
    return _page > maxPage ? maxPage : _page;
  }), [maxPage, setPage]);

  const handlePrev = useCallback(() => setPage(prev => {
    const _page = prev - 1;
    return _page < 1 ? 1 : _page;
  }), [maxPage, setPage]);

  useEffect(() => {
    const itemNodes = getItemNodes(boxRef);
    if (single && focus) {
      if (page <= 1) {
        setLeft(-calc(itemNodes, page));
      } else {
        setLeft(-calc(itemNodes, page) + focusGap);
      }
    } else if (single) {
      setLeft(-calc(itemNodes, page));
    } else {
      setLeft(-(page - 1) * body.width);
    }
  }, [page, setLeft, single, boxRef, body.width]);

  useEffect(() => {
    if (auto) {
      const timer = setInterval(() => handleNext(), auto);
      return () => clearInterval(timer);
    }
  }, [handleNext]);

  useEffect(() => {
    if (auto && loop && page >= maxPage) {
      const timer = setTimeout(() => setPage(1), auto);

      return () => clearTimeout(timer);
    }
  }, [auto, loop, page, maxPage]);

  const _width = useMemo(() => {
    if (focus) {
      return body.width - focusGap * 2;
    }
    return body.width;
  }, [body.width, focus]);

  return (
    <div ref={ref} className={cn('rc-carousel', className)} style={{ height: carouselHeight }}>
      <div ref={boxRef} className="rc-carousel-box" style={{ left }} >
        {React.Children.map(children, (elm) => {
          return React.cloneElement(elm, {
            _width,
            fluid: single,
          });
        })}
      </div>
      <Button
        icon="chevron-left"
        className={cn('rc-carousel-prev')}
        glassed
        disabled={page <= 1}
        circle
        onClick={handlePrev}
      />
      <Button
        icon="chevron-right"
        className={cn('rc-carousel-next')}
        glassed
        disabled={page >= maxPage}
        circle
        onClick={handleNext}
      />
    </div>
  );
};

Carousel.Item = Item;

Carousel.displayName = 'Carousel';
Carousel.propTypes = {
  className: PropTypes.string,
  children: PropTypes.any,
  auto: PropTypes.number,
  loop: PropTypes.bool,
  single: PropTypes.bool,
};
Carousel.defaultProps = {
};

export default Carousel;
