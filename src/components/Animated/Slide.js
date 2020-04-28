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
  inLeft: 'rc-animated-slide-in-left',
  inRight: 'rc-animated-slide-in-right',
  inUp: 'rc-animated-slide-in-up',
  inDown: 'rc-animated-slide-in-down',
  outLeft: 'rc-animated-slide-out-left',
  outRight: 'rc-animated-slide-out-right',
  outUp: 'rc-animated-slide-out-up',
  outDown: 'rc-animated-slide-out-down',
});

const lSlide = Object.keys(mSlide);

const Slide = memo(({ children, meansure, className, animatedRef, ...otherProps }) => {
  const slide = useSemanticProp('slide', otherProps, lSlide);

  const spring = useSpring(mTransition[slide]);

  return (
    <animated.div
      className={cn('rc-animated', mSlide[slide], className)}
      style={spring}
      ref={animatedRef}
    >
      {children}
    </animated.div>
  );
});

export default withMeansure(Slide);
