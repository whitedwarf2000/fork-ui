import React from 'react';
import cn from 'classnames';
import PropTypes from 'prop-types';
import Memo from '../Memo';

const Content = ({ className, active, fresh, ...otherProps }) => {
  return (
    <Memo watch={active} fresh={fresh}>
      <div
        className={cn('ftabs-content', { 'ftabs-content-active': active }, className)}
        {...otherProps}
      />
    </Memo>
  );
};

Content.displayName = 'Tabs.Content';
Content.propTypes = {
  className: PropTypes.string,
  disabled: PropTypes.bool,
  fresh: PropTypes.bool,
  title: PropTypes.any,
  active: PropTypes.bool,
};
Content.defaultProps = {};

export default Content;
