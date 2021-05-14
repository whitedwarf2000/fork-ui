import React from 'react';
import cn from 'classnames';
import PropTypes from 'prop-types';

import Button from '../Button';
import ChevronRight from '../icons/all/ChevronRight';
import ChevronLeft from '../icons/all/ChevronLeft';
import usePagination from './usePagination';

const loop = (start, end, cb) => {
  const rs = [];
  for (let i = start; i <= end; i++) {
    rs.push(cb(i));
  }
  return rs;
};

const Pagination = ({ className, ...otherProps }) => {
  return (
    <div className={cn('fpag', className )} {...otherProps} />
  );
};

const Page = ({ className, active, ...otherProps }) => {
  return (
    <Button
      transparent
      className={cn('fpag-page', { 'fpag-page-active': active }, className)}
      primary={active}
      {...otherProps}
     />
  );
};

const Next = props => <Button className="fpag-next" transparent icon={<ChevronRight />} {...props} />
const Prev = props => <Button className="fpag-prev" transparent icon={<ChevronLeft />} {...props} />

Page.displayName = 'Pagination.Page';
Next.displayName = 'Pagination.Next';
Prev.displayName = 'Pagination.Prev';
Pagination.displayName = 'Pagination';

Pagination.Page = Page;
Pagination.Next = Next;
Pagination.Prev = Prev;
Pagination.loop = loop;

Pagination.usePagination = usePagination;

Pagination.propTypes = {};
Pagination.defaultProps = {};

export default Pagination;
