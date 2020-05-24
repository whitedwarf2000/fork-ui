import React, { useCallback } from 'react';
import cn from 'classnames';
import PropTypes from 'prop-types';

import Button from '../Button';
import usePagination from './usePagination';

const loop = (start, end, cb) => {
  const rs = [];
  for (let i = start; i <= end; i++) {
    rs.push(cb(i));
  }
  return rs;
};

const Pagination = ({ className, total, pageSize, max, activePage, onChange, ...otherProps }) => {
  const {
    itemCount,
    startIndex,
    endIndex,
    onNext,
    onPrev,
  } = usePagination({ total, pageSize, max, activePage, onChange });

  const onItemClick = useCallback(value =>  onChange(value), [onChange]);

  return (
    <div className={cn('rc-pagination', className )} {...otherProps}>
      {loop(startIndex, endIndex, (pageNumber) => (
        <Button
          glassed
          rounded
          key={pageNumber}
          className={cn('rc-pagination-item', { '--active': pageNumber === activePage })}
          primary={pageNumber === activePage}
          onClick={() => onItemClick(pageNumber)}
        >
          {pageNumber}
        </Button>
      ))}
      <Button
        className="rc-pagination-prev"
        disabled={activePage <= 1}
        onClick={onPrev}
        circle
        icon="chevron-left"
        style={{
          marginRight: '0.5rem',
        }}
      />

      <Button
        className="rc-pagination-next"
        disabled={activePage >= itemCount}
        onClick={onNext}
        circle
        icon="chevron-right"
      />
    </div>
  );
};

Pagination.displayName = 'Pagination';
Pagination.propTypes = {
  className: PropTypes.string,
  total: PropTypes.number,
  pageSize: PropTypes.number,
  max: PropTypes.number,
  onChange: PropTypes.func,
  activePage: PropTypes.number,
};
Pagination.defaultProps = {
  total: 0,
  pageSize: 0,
  max: 5,
  onChange: f => f,
};

export default Pagination;
