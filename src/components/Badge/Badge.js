import React, { useMemo, useRef, useLayoutEffect } from 'react';
import cn from 'classnames';
import PropTypes from 'prop-types';

import Counter from './Counter';
import Dot from './Dot';
import Label from './Label';
import Icon from './Icon';
import useSemanticProp from '../../hooks/useSemanticProp';
import { omit } from '../../utils/helpers';
import { makePlacements } from '../placements';

const mPlacements = makePlacements('fbadge');
const lPlacements = Object.keys(mPlacements);

const BaseBadge = ({
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



BaseBadge.displayName = 'Badge';

BaseBadge.propTypes = {
  className: PropTypes.string,
  children: PropTypes.any,
  overlap: PropTypes.bool,
  placement: PropTypes.string,
};

BaseBadge.defaultProps = {};

const Badge = f => f;
Badge.Counter = ({
  children,
  count,
  overflowCount,
  color,
  size,
  ...otherProps
}) => {
  return (
    <BaseBadge
      badge={(
        <Counter
          count={count}
          overflowCount={overflowCount}
          color={color}
          size={size}
        />
      )}
      {...otherProps}
    >
      {children}
    </BaseBadge>
  );
};
Badge.Dot = ({
  children,
  color,
  size,
  ...otherProps
}) => {
  return (
    <BaseBadge
      badge={(
        <Dot
          color={color}
          size={size}
        />
      )}
      {...otherProps}
    >
      {children}
    </BaseBadge>
  );
};
Badge.Label = ({
  children,
  label,
  color,
  size,
  ...otherProps
}) => {
  return (
    <BaseBadge
      badge={(
        <Label
          color={color}
          size={size}
          label={label}
        />
      )}
      {...otherProps}
    >
      {children}
    </BaseBadge>
  );
};
Badge.Icon = ({
  children,
  icon,
  color,
  size,
  ...otherProps
}) => {
  return (
    <BaseBadge
      badge={(
        <Icon
          color={color}
          size={size}
          icon={icon}
        />
      )}
      {...otherProps}
    >
      {children}
    </BaseBadge>
  );
};

export default Badge;
export { BaseBadge };
