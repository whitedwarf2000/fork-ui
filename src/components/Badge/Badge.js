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

const mPlacements = makePlacements('fui-badge');
const lPlacements = Object.keys(mPlacements);

const Badge = ({
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
        'fui-badge',
        {
          'fui-badge--overlap': overlap,
        },
        mPlacements[placement] || 'fui-badge--top-right',
        className
      )}
      {...passedProps}
    >
      {children}
      {badge}
    </span>
  );
};

Badge.displayName = 'Badge';
Badge.Counter = Counter;
Badge.Dot = Dot;
Badge.Label = Label;
Badge.Icon = Icon;

Badge.propTypes = {
  className: PropTypes.string,
  children: PropTypes.any,
  overlap: PropTypes.bool,
  placement: PropTypes.string,
};

Badge.defaultProps = {};

export default Badge;
