import React, { useMemo } from 'react';
import cn from 'classnames';

const defaultExpander = f => f;

const TR = ({ className, isHeader, isFooter, expander, belongBody, ...otherProps}) => {
  const _expander = useMemo(() => expander || defaultExpander, []);

  return (
    <React.Fragment>
       <tr className={cn('fui-table-tr', { '--header': isHeader, '--footer': isFooter }, className)} {...otherProps} />
      {(expander || belongBody) && (
        <tr className="fui-table-tr-expander" style={{ height: '0.15em' }}>
          <td colSpan={1000}>
            {_expander()}
          </td>
        </tr>
      )}
    </React.Fragment>
  );
};

export default TR;
