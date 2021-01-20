import React, { useMemo } from 'react';
import cn from 'classnames';
import PropTypes from 'prop-types';

import useSemanticProp from '../../hooks/useSemanticProp';
import { omit } from '../../utils/helpers';

const mTypes = Object.freeze({
  dashed: 'fdiv-dashed',
  solid: 'fdiv-solid',
  dotted: 'fdiv-dotted'
});

const mPlacements = Object.freeze({
  left: 'fdiv-l',
  right: 'fdiv-r',
});

const lTypes = Object.keys(mTypes);
const lPlacements = Object.keys(mPlacements);

const Divider = ({ className, title, type, placement, ...otherProps }) => {
  return (
    <div className={
      cn(
        'fdiv',
        {
          'fdiv-title': title,
        },
        mTypes[type],
        mPlacements[placement],
        className
      )}
      {...otherProps}
    >
      {title && <div className="fdiv-title">{title}</div>}
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
Divider.defaultProps = {
  type: 'solid',
};

const SemanticDivider = (props) => {
  const type = useSemanticProp('type', props, lTypes);
  const placement = useSemanticProp('placement', props, lPlacements);

  const passedProps = useMemo(() => omit(props, [
    ...lTypes,
    ...lPlacements,
    'type',
    'placement',
  ]), [props]);

  return (
    <Divider
      type={type}
      placement={placement}
      {...passedProps}
    />
  );
};

export default SemanticDivider;
