import React, { useMemo } from 'react';
import cn from 'classnames';
import PropTypes from 'prop-types';

const ButtonGroup = ({ className, fluid, children, ...otherProps }) => {
  return (
    <div
      className={cn(
        'fbtn-grp',
        {
          'fbtn-grp-fluid': fluid
        },
        className
      )}
    >
      {React.Children.map(children, elm => {
        return React.cloneElement(elm, {
          ...otherProps,
          ...elm.props
        });
      })}
    </div>
  );
};

ButtonGroup.displayName = 'ButtonGroup';
ButtonGroup.propTypes = {
  className: PropTypes.string,
  fluid: PropTypes.bool,
  style: PropTypes.object,
  size: PropTypes.string,
};
ButtonGroup.defaultProps = {};

export default ButtonGroup;
