import React, { useCallback } from 'react';

import Button from '../Button';
import { ArrowNarrowUp } from '../icons';

const ScrollUp = () => {
  const scrollToTop = useCallback(() => window.scrollTo({ top: 0, behavior: 'smooth'}), []);

  return (
    <Button
      glassed
      size="1.5rem"
      className="fui-scroll-up"
      onClick={scrollToTop}
      icon={<ArrowNarrowUp />}
    />
  );
};

ScrollUp.displayName = 'ScrollUp';
ScrollUp.propTypes = {};
ScrollUp.defaultProps = {};

export default ScrollUp;
