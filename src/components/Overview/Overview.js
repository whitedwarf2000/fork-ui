import React from 'react';
import cn from 'classnames';
import PropTypes from 'prop-types';

import Icon from '../Icon';

const Overview = ({ className }) => {
  return (
    <div className={cn('rc-overview', className)}>

    </div>
  );
};

Overview.displayName = 'Overview';
Overview.propTypes = {
  className: PropTypes.string,
};
Overview.defaultProps = {};

export default Overview;
