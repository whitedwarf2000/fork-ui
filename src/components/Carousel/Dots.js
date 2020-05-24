import React, { useCallback, useContext } from 'react';
import cn from 'classnames';

import Context from './Context';
import { loop } from '../../utils/helpers';

const Dots = ({ className }) => {
  const { page, maxPage, setPage } = useContext(Context);
  const onItemClick = useCallback(e => setPage(+e.target.attributes['data-page-number'].value), [setPage]);

  return (
    <ul className={cn('rc-carousel-dots', className)}>
      {loop(maxPage, (i) => (
        <li
          className={cn('rc-carousel-dot', { '--active': page === i + 1 })}
          key={i}
          data-page-number={i + 1}
          onClick={onItemClick}
        />
      ))}
    </ul>
  );
};

export default Dots;
