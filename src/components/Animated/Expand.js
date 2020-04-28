import React, { memo, useMemo } from 'react';
import cn from 'classnames';
import { useSpring, animated } from 'react-spring';

import withMeansure from '../../HOCs/withMeansure';
import usePrevious from '../../hooks/usePrevious';

const mTransition = {
  horizontal: {
    from() {
      return ({
        width: 0,
        opacity: 0.9,
      });
    },
    to(isExpanded, width) {
      return {
        width: isExpanded ? width : 0,
        opacity: 1,
      };
    },
  },
  vertical: {
    from() {
      return ({
        height: 0,
        opacity: 0.5,
      });
    },
    to(isExpanded, height) {
      return {
        height: isExpanded ? height : 0,
        opacity: 1,
      };
    },
  }
};

const Expand = memo(({ children, isExpanded, meansure, horizontal, className, animatedRef }) => {
  const previous = usePrevious(isExpanded);

  const spring = useMemo(() => {
    if (horizontal) {
      return {
        from: mTransition.horizontal.from(),
        to: mTransition.horizontal.to(isExpanded, meansure.width),
      };
    }

    return {
      from: mTransition.vertical.from(),
      to: mTransition.vertical.to(isExpanded, meansure.height),
    };
  }, [horizontal, isExpanded, meansure.width, meansure.height]);

  const { height, ...otherStyle } = useSpring(spring);

  const passedStyle = useMemo(() => {
    if (horizontal) {
      return {};
    }

    if (isExpanded && previous === isExpanded) {
      return  { height: 'auto' };
    }

    return { height }
  }, [isExpanded, previous, height]);

  return (
    <animated.div
      className={cn('rc-animated rc-animated-expand', className)}
      style={{
        ...otherStyle,
        ...passedStyle,
      }}
      ref={animatedRef}
    >
      {children}
    </animated.div>
  );
});

export default withMeansure(Expand);
