import React, { useCallback } from 'react';

import Button from '../Button';
import { ArrowNarrowUp } from '../icons';

const ScrollUp = () => {
  const scrollToTop = useCallback(() => window.scrollTo({ top: 0, behavior: 'smooth'}), []);

  return (
    <Button
      circle
      glassed
      className="fui-scroll-up"
      icon={<ArrowNarrowUp />}
      onClick={scrollToTop}
    />
  );
};

ScrollUp.displayName = 'ScrollUp';
ScrollUp.propTypes = {};
ScrollUp.defaultProps = {};

export default ScrollUp;
