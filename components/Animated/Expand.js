import React, { memo, useMemo } from 'react';
import cn from 'classnames';

import withMeansure from '../../HOCs/withMeansure';

const Expand = memo(({ children, isExpanded, meansure, className, animatedRef }) => {
  const height = useMemo(() => isExpanded ? meansure.height : 0, [isExpanded, meansure.height]);

  return (
    <div
      className={cn('fui-animated fui-animated-expand', className)}
      style={{ height }}
      ref={animatedRef}
    >
      {children}
    </div>
  );
});

export default withMeansure(Expand);
