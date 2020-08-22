import React from 'react';
import cn from 'classnames';
import PropTypes from 'prop-types';

import Memo from '../Memo';

const Item = ({ className, active, fresh, ...otherProps }) => {
  return (
    <Memo for={active} fresh={fresh}>
      <div className={cn('fui-tab', { 'fui-tab--active': active }, className)} {...otherProps} />
    </Memo>
  );
};

Item.displayName = 'Tabs.Item';
Item.propTypes = {
  className: PropTypes.string,
  disabled: PropTypes.bool,
  fresh: PropTypes.bool,
  title: PropTypes.any,
  active: PropTypes.bool,
};
Item.defaultProps = {};

export default Item;
