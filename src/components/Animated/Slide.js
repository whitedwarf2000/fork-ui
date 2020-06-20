import React, { memo, useMemo } from 'react';
import cn from 'classnames';
import { useSpring, animated } from 'react-spring';

import withMeansure from '../../HOCs/withMeansure';
import useSemanticProp from '../../hooks/useSemanticProp';

const mTransition = {
  inRight: {
    from: {
      transform: 'translate3d(100%, 0, 0)',
      visibility: 'visible',
    },
    to: {
      transform: 'translate3d(0, 0, 0)',
    },
  },
  outRight: {
    from: {
      transform: 'translate3d(0, 0, 0)',
    },
    to: [
      {
        transform: 'translate3d(100%, 0, 0)',
      },
      {
        visibility: 'hidden',
        transform: 'translate3d(100%, 0, 0)',
      }
    ],
  },
  inLeft: {
    from: {
      transform: 'translate3d(-100%, 0, 0)',
      visibility: 'visible',
    },
    to: {
      transform: 'translate3d(0, 0, 0)',
    },
  },
  outLeft: {
    from: {
      transform: 'translate3d(0, 0, 0)',
    },
    to: [
      {
        transform: 'translate3d(-100%, 0, 0)',
      },
      {
        visibility: 'hidden',
        transform: 'translate3d(-100%, 0, 0)',
      }
    ],
  },
};

const mSlide = Object.freeze({
  inLeft: 'fui-animated-slide-in-left',
  inRight: 'fui-animated-slide-in-right',
  inUp: 'fui-animated-slide-in-up',
  inDown: 'fui-animated-slide-in-down',
  outLeft: 'fui-animated-slide-out-left',
  outRight: 'fui-animated-slide-out-right',
  outUp: 'fui-animated-slide-out-up',
  outDown: 'fui-animated-slide-out-down',
});

const lSlide = Object.keys(mSlide);

const Slide = memo(({ children, meansure, className, animatedRef, ...otherProps }) => {
  const slide = useSemanticProp('slide', otherProps, lSlide);
  const spring = useSpring(mTransition[slide]);

  return (
    <animated.div
      className={cn('fui-animated', mSlide[slide], className)}
      style={spring}
      ref={animatedRef}
    >
      {children}
    </animated.div>
  );
});

export default withMeansure(Slide);
