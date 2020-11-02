import React, { useMemo } from 'react';
import cn from 'classnames';
import PropTypes from 'prop-types';

import Counter from './Counter';
import Dot from './Dot';
import Label from './Label';
import useSemanticProp from '../../hooks/useSemanticProp';
import { omit } from '../../utils/helpers';
import { makePlacements } from '../placements';

const mPlacements = makePlacements('fbadge');
const lPlacements = Object.keys(mPlacements);

const PureBadge = ({
  className,
  children,
  badge,
  overlap,
  ...otherProps
}) => {
  const placement = useSemanticProp('placement', otherProps, lPlacements);
  const passedProps = useMemo(() => omit(otherProps, [
    ...lPlacements,
    'placement',
  ]), [otherProps]);

  return (
    <span
      className={cn(
        'fbadge',
        {
          'fbadge-overlap': overlap,
        },
        mPlacements[placement] || 'fbadge-tr',
        className
      )}
      {...passedProps}
    >
      {children}
      {badge}
    </span>
  );
};

PureBadge.displayName = 'Badge';

PureBadge.propTypes = {
  className: PropTypes.string,
  children: PropTypes.any,
  overlap: PropTypes.bool,
  placement: PropTypes.string,
};

PureBadge.defaultProps = {};

const Badge = f => f;
Badge.PureBadge = PureBadge;

Badge.Counter = ({
  children,
  count,
  overflow,
  color,
  renderOverflow,
  ...otherProps
}) => {
  return (
    <PureBadge
      badge={(
        <Counter
          count={count}
          overflow={overflow}
          renderOverflow={renderOverflow}
          color={color}
        />
      )}
      {...otherProps}
    >
      {children}
    </PureBadge>
  );
};
Badge.Dot = ({
  children,
  color,
  ...otherProps
}) => {
  return (
    <PureBadge
      badge={(
        <Dot color={color} />
      )}
      {...otherProps}
    >
      {children}
    </PureBadge>
  );
};
Badge.Label = ({
  children,
  label,
  color,
  ...otherProps
}) => {
  return (
    <PureBadge
      badge={(
        <Label
          color={color}
          label={label}
        />
      )}
      {...otherProps}
    >
      {children}
    </PureBadge>
  );
};

export default Badge;
export { PureBadge };
