import React, { useMemo, cloneElement } from 'react';
import PropTypes from 'prop-types';
import cn from 'classnames';
import Tippy from '@tippyjs/react';

import {
  placementSemanticPropTypes,
  placementPropType,
  mapPlacementSemanticToPropName
} from '../placements';
import useSemanticProp from '../../hooks/useSemanticProp';
import { omit } from '../../utils/helpers';

const lPlacements = Object.keys(placementSemanticPropTypes);
const lStrategy = ['fixed', 'absolute'];

const Overlay = ({
  placement,
  sticky,
  strategy,
  interactive,
  showOnCreate,
  children,
  content,
  role,
  animation,
  popperOptions,
  plugins,
  arrow,
  reference,
  ...otherProps
}) => {
  const _popperOptions = useMemo(() => ({
    ...popperOptions,
    strategy: strategy,
  }), [popperOptions, strategy]);

  const _plugins = useMemo(() => {
    const __plugins = [];
    __plugins.concat(plugins);
  
    if (sticky) {
      __plugins.push(stickyPlugin);
    }
    return __plugins;
  }, [sticky, plugins]);

  return (
    <Tippy
      sticky={sticky}
      plugins={_plugins}
      arrow={arrow}
      role={role}
      popperOptions={_popperOptions}
      interactive={interactive}
      showOnCreate={showOnCreate}
      animation={animation}
      placement={placement}
      content={content}
      {...otherProps}
    >
      {children}
    </Tippy>
  );
};

Overlay.displayName = 'Overlay';
Overlay.propTypes = {
  theme: PropTypes.string,
  content: PropTypes.string,
  children: PropTypes.any,
  animation: PropTypes.oneOf([
    'perspective-extreme',
    'perspective-subtle',
    'perspective',
    'scale-extreme',
    'scale-subtle',
    'scale',
    'shift-away-extreme',
    'shift-away-subtle',
    'shift-away',
    'shift-toward-extreme',
    'shift-toward-subtle',
    'shift-toward',
  ]),
  placement: placementPropType,
  role: PropTypes.string,
  reference: PropTypes.any,
  followCursor: PropTypes.bool,
};
Overlay.defaultProps = {
  animation: 'fade',
  interactive: true,
  strategy: 'fixed',
  placement: 'top',
  sticky: false,
};

const withSemantic = (Component) => {
  const SemanticOverlay = (props) => {
    const semanticPlacement = useSemanticProp('placement', props, lPlacements);
    const placement = mapPlacementSemanticToPropName[semanticPlacement];
    const strategy = useSemanticProp('strategy', props, lStrategy);

    const passedProps = useMemo(() => omit(props, [
      ...lPlacements,
      ...lStrategy,
      'placement',
      'strategy',
    ]), [props]);

    return (
      <Component
        placement={placement}
        strategy={strategy}
        {...passedProps}
      />
    );
  };
  SemanticOverlay.propTypes = {
    placement: PropTypes.string,
  };
  SemanticOverlay.defaultProps = {};
  SemanticOverlay.displayName = 'SemanticOverlay';

  return SemanticOverlay;
};

export default withSemantic(Overlay);
