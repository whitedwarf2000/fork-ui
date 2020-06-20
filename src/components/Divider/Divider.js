import React, { useMemo } from 'react';
import cn from 'classnames';
import PropTypes from 'prop-types';

import useSemanticProp from '../../hooks/useSemanticProp';
import { omit } from '../../utils/helpers';

const mTypes = Object.freeze({
  dashed: 'fui-divider--dashed',
  solid: 'fui-divider--solid',
  dotted: 'fui-divider--dotted'
});

const mPlacements = Object.freeze({
  left: 'fui-divider--left',
  right: 'fui-divider--right',
});

const lTypes = Object.keys(mTypes);
const lPlacements = Object.keys(mPlacements);

const Divider = ({ className, title, transparent,  ...otherProps }) => {
  const type = useSemanticProp('type', otherProps, lTypes);
  const placement = useSemanticProp('placement', otherProps, lPlacements);

  const passedProps = useMemo(() => omit(otherProps, [
    ...lTypes,
    ...lPlacements,
    'type',
    'placement',
  ]), [otherProps]);

  return (
    <div className={
      cn(
        'fui-divider',
        {
          'fui-divider--transparent': transparent,
          'fui-divider--title': title,
        },
        mTypes[type],
        mPlacements[placement],
        className
      )}
      {...passedProps}
    >
      {title && <div className="fui-divider-title">{title}</div>}
    </div>
  );
};

Divider.displayName = 'Divider';
Divider.propTypes = {
  className: PropTypes.string,
  type: PropTypes.string,
  title: PropTypes.any,
  solid: PropTypes.bool,
  dashed: PropTypes.bool,
  dotted: PropTypes.bool,
  transparent: PropTypes.bool,
  placement: PropTypes.string,
};
Divider.defaultProps = {};

export default Divider;
